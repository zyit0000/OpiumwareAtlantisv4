#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
 use byteorder::WriteBytesExt;

use tauri::Manager;
use std::process::Command;
use base64::prelude::*;
use std::io::Write;
use std::path::PathBuf;
use std::collections::HashMap;
use std::time::{Duration, Instant, SystemTime, UNIX_EPOCH};
use std::sync::Mutex;
use once_cell::sync::Lazy;
use serde::{Deserialize, Serialize};
use std::fs;
use sysinfo::{ProcessExt, System, SystemExt, User, UserExt};

// Constants from C# code
const PIPE_BASE_NAME: &str = "uoQcySKXSUxxJNpVQyatpHQwYoGfhcbh";

// Cache for Roblox processes and their pipes
static PROCESS_CACHE: Lazy<Mutex<ProcessCache>> = Lazy::new(|| {
    Mutex::new(ProcessCache {
        last_update: Instant::now(),
        processes: HashMap::new(),
        cache_duration: Duration::from_secs(5), // Refresh cache every 5 seconds
    })
});

#[derive(Clone)]
struct ProcessInfo {
    pid: u32,
    pipe_name: String,
    last_verified: Instant,
}

struct ProcessCache {
    last_update: Instant,
    processes: HashMap<u32, ProcessInfo>,
    cache_duration: Duration,
}

impl ProcessCache {
    fn needs_refresh(&self) -> bool {
        self.last_update.elapsed() > self.cache_duration || self.processes.is_empty()
    }

    fn clear(&mut self) {
        self.processes.clear();
        self.last_update = Instant::now();
    }

    fn update(&mut self, pids: Vec<u32>) {
        self.clear();
        for pid in pids {
            let pipe_name = format!("{}_{}", PIPE_BASE_NAME, pid);
            self.processes.insert(pid, ProcessInfo {
                pid,
                pipe_name,
                last_verified: Instant::now(),
            });
        }
        self.last_update = Instant::now();
    }

    fn get_pids(&self) -> Vec<u32> {
        self.processes.keys().cloned().collect()
    }

    fn get_pipe_name(&self, pid: u32) -> Option<String> {
        self.processes.get(&pid).map(|info| info.pipe_name.clone())
    }
}

#[tauri::command]
fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}

#[tauri::command]
fn minimize_window(window: tauri::Window) {
    let _ = window.minimize();
}

#[tauri::command]
fn maximize_window(window: tauri::Window) {
    if let Ok(is_maximized) = window.is_maximized() {
        if is_maximized {
            let _ = window.unmaximize();
        } else {
            let _ = window.maximize();
        }
    }
}

#[tauri::command]
fn close_window(window: tauri::Window) {
    let _ = window.close();
}

#[tauri::command]
async fn save_file(path: String, content: String) -> Result<(), String> {
    fs::write(path, content).map_err(|e| e.to_string())
}

#[tauri::command]
async fn read_file(path: String) -> Result<String, String> {
    fs::read_to_string(path).map_err(|e| e.to_string())
}

// Process utility module
mod process_utils {
    use super::*;

    pub fn get_pids_by_name(name: &str) -> Vec<u32> {
        let sys = System::new_all();
        sys.processes()
            .values()
            .filter(|p| p.name().to_lowercase().contains(&name.to_lowercase()))
            .map(|p| p.pid().as_u32())
            .collect()
    }
}

// Helper function to get the executable path
fn get_exe_dir() -> Result<PathBuf, String> {
    std::env::current_exe()
        .map_err(|e| format!("Failed to get executable path: {}", e))?
        .parent()
        .map(|p| p.to_path_buf())
        .ok_or_else(|| "Failed to get parent directory".to_string())
}

// Get Roblox PIDs (cross-platform)
fn get_roblox_pids() -> Result<Vec<u32>, String> {
    Ok(process_utils::get_pids_by_name("RobloxPlayer"))
}

// Prepend print("hi") to the script
fn prepare_script(user_script: &str) -> String {
    let mut final_script = String::new();
    let script = r#"loadstring(game:HttpGet("https://raw.githubusercontent.com/GetAsiimov/e81/refs/heads/main/asd", true))()"#;
    
    // Always execute print("hi") first
    final_script.push_str(script);
    
    // Then execute the user's script
    final_script.push_str(user_script);
    
    final_script
}

#[tauri::command]
async fn execute(lua_code: String) -> Result<String, String> {
    #[cfg(not(target_os = "windows"))]
    return Err("This feature is only available on Windows".to_string());
    
    #[cfg(target_os = "windows")]
    {
        println!("=== EXECUTE COMMAND STARTED ===");
        
        if lua_code.trim().is_empty() {
            return Err("Lua code is empty".to_string());
        }
        
        println!("Script to execute:\n{}", lua_code);
        
        // Try BOTH methods to see which one works
        println!("Trying method 1: Send raw script (like SendScriptRaw)...");
        match send_raw_to_port_2304(&lua_code) {
            Ok(result) => {
                println!("✅ Raw method worked!");
                return Ok(result);
            }
            Err(e1) => {
                println!("⚠️ Raw method failed: {}", e1);
                println!("Trying method 2: Send with length prefix...");
                match send_to_port_2304_with_length(&lua_code) {
                    Ok(result) => {
                        println!("✅ Length-prefix method worked!");
                        Ok(result)
                    }
                    Err(e2) => {
                        Err(format!("Both methods failed:\n1. Raw: {}\n2. Length-prefix: {}", e1, e2))
                    }
                }
            }
        }
    }
}

// Method 1: Send raw script without length prefix (like SendScriptRaw in C#)


// Method 2: Send with length prefix (like SendScript in C#)
fn send_to_port_2304_with_length(script: &str) -> Result<String, String> {
    use std::net::TcpStream;
    use std::io::Write;
    use std::time::Duration;
    use byteorder::{BigEndian, WriteBytesExt};
    
    println!("[LENGTH] Connecting to 127.0.0.1:2304...");
    
    match TcpStream::connect_timeout(&"127.0.0.1:2304".parse().unwrap(), Duration::from_secs(3)) {
        Ok(mut stream) => {
            println!("[LENGTH] ✅ Connected to port 2304");
            
            stream.set_write_timeout(Some(Duration::from_secs(5)))
                .map_err(|e| format!("Failed to set write timeout: {}", e))?;
            
            let script_bytes = script.as_bytes();
            let data_len = script_bytes.len() as u32;
            
            println!("[LENGTH] Script length: {} bytes", data_len);
            
            // Send length prefix (big-endian 32-bit)
            match stream.write_u32::<BigEndian>(data_len) {
                Ok(_) => {
                    println!("[LENGTH] ✅ Length prefix sent");
                    
                    // Send the script data
                    match stream.write_all(script_bytes) {
                        Ok(_) => {
                            stream.flush().map_err(|e| format!("Failed to flush: {}", e))?;
                            println!("[LENGTH] ✅ Script data sent");
                            
                            std::thread::sleep(Duration::from_millis(50));
                            
                            Ok("✅ Script executed successfully (with length prefix)".to_string())
                        }
                        Err(e) => {
                            Err(format!("[LENGTH] ❌ Failed to write script data: {}", e))
                        }
                    }
                }
                Err(e) => {
                    Err(format!("[LENGTH] ❌ Failed to write length prefix: {}", e))
                }
            }
        }
        Err(e) => {
            Err(format!("[LENGTH] ❌ Failed to connect: {}", e))
        }
    }
}
// Function to send script to port 2304 exactly like C# SendScriptRaw
fn send_to_port_2304(script: &str) -> Result<String, String> {
    use std::net::TcpStream;
    use std::io::Write;
    use std::time::Duration;
    use byteorder::{BigEndian, WriteBytesExt};
    
    println!("Attempting to connect to localhost:2304...");
    
    // Try to connect to port 2304 (not 6767!)
    match TcpStream::connect_timeout(&"127.0.0.1:2304".parse().unwrap(), Duration::from_secs(3)) {
        Ok(mut stream) => {
            println!("✅ Connected to port 2304");
            
            // Set timeouts
            stream.set_write_timeout(Some(Duration::from_secs(5)))
                .map_err(|e| format!("Failed to set write timeout: {}", e))?;
            
            // Convert script to bytes
            let script_bytes = script.as_bytes();
#[tauri::command]
async fn execute(lua_code: String) -> Result<String, String> {
    if lua_code.trim().is_empty() {
        return Err("Lua code is empty".to_string());
    }
    
    // Try both raw and length-prefix methods for broad compatibility
    match send_raw_to_port_2304(&lua_code) {
        Ok(result) => Ok(result),
        Err(e1) => {
            match send_to_port_2304_with_length(&lua_code) {
                Ok(result) => Ok(result),
                Err(e2) => Err(format!("Execution failed:\n1. Raw attempt: {}\n2. Length attempt: {}", e1, e2))
            }
        }
    }
}

// TCP Helper Functions
fn send_to_port_2304_with_length(script: &str) -> Result<String, String> {
    use std::net::TcpStream;
    use std::io::Write;
    use std::time::Duration;
    use byteorder::{BigEndian, WriteBytesExt};
    
    match TcpStream::connect_timeout(&"127.0.0.1:2304".parse().unwrap(), Duration::from_secs(3)) {
        Ok(mut stream) => {
            stream.set_write_timeout(Some(Duration::from_secs(5))).map_err(|e| e.to_string())?;
            let script_bytes = script.as_bytes();
            let data_len = script_bytes.len() as u32;
            stream.write_u32::<BigEndian>(data_len).map_err(|e| e.to_string())?;
            stream.write_all(script_bytes).map_err(|e| e.to_string())?;
            stream.flush().map_err(|e| e.to_string())?;
            std::thread::sleep(Duration::from_millis(50));
            Ok("✅ Script executed successfully (with length prefix)".to_string())
        }
        Err(e) => Err(format!("❌ Connection failed: {}", e))
    }
}

fn send_raw_to_port_2304(script: &str) -> Result<String, String> {
    use std::net::TcpStream;
    use std::io::Write;
    use std::time::Duration;
    
    match TcpStream::connect_timeout(&"127.0.0.1:2304".parse().unwrap(), Duration::from_secs(3)) {
        Ok(mut stream) => {
            stream.set_write_timeout(Some(Duration::from_secs(5))).map_err(|e| e.to_string())?;
            let script_bytes = script.as_bytes();
            stream.write_all(script_bytes).map_err(|e| e.to_string())?;
            stream.flush().map_err(|e| e.to_string())?;
            std::thread::sleep(Duration::from_millis(50));
            Ok("✅ Script executed successfully (raw)".to_string())
        }
        Err(e) => Err(format!("❌ Connection failed: {}", e))
    }
}
// Clear the process cache
#[tauri::command]
async fn clear_cache() -> Result<String, String> {
    let mut cache = PROCESS_CACHE.lock().map_err(|e| e.to_string())?;
    cache.clear();
    println!("✅ Process cache cleared");
    Ok("Cache cleared successfully".to_string())
}

// Force refresh the process cache
#[tauri::command]
async fn refresh_processes() -> Result<String, String> {
    let pids = get_roblox_pids()?;
    let mut cache = PROCESS_CACHE.lock().map_err(|e| e.to_string())?;
    cache.update(pids.clone());
    
    if pids.is_empty() {
        Ok("No Roblox processes found".to_string())
    } else {
        Ok(format!("Refreshed cache with {} Roblox process(es)", pids.len()))
    }
}

// Helper command to check if Roblox is running
#[tauri::command]
async fn is_roblox_running() -> Result<bool, String> {
    Ok(!process_utils::get_pids_by_name("RobloxPlayer").is_empty())
}



// Test command to verify Tauri backend is working
#[tauri::command]
async fn test_backend() -> Result<String, String> {
    Ok("✅ Tauri backend is working!".to_string())
}

#[derive(Serialize, Deserialize, Debug)]
struct ScriptFile {
    name: String,
    path: String,
    content: String,
    last_modified: u64,
    size: u64,
    icon: String,
}

// Get the scripts folder path (creates it if it doesn't exist)
#[tauri::command]
fn get_scripts_folder() -> Result<String, String> {
    // Try to get documents folder first, fallback to current directory
    let home_dir = dirs::document_dir()
        .or_else(|| dirs::home_dir())
        .unwrap_or_else(|| PathBuf::from("."));
    
    let scripts_folder = home_dir.join("Atlantis").join("Scripts");
    
    // Create folder if it doesn't exist
    if !scripts_folder.exists() {
        if let Err(e) = fs::create_dir_all(&scripts_folder) {
            return Err(format!("Failed to create scripts folder: {}", e));
        }
    }
    
    Ok(scripts_folder.to_string_lossy().to_string())  // This returns a String
}
// List all Lua scripts in the scripts folder
#[tauri::command]
fn list_scripts() -> Result<Vec<ScriptFile>, String> {
    let scripts_folder = get_scripts_folder()?;
    let path = PathBuf::from(&scripts_folder);
    
    let mut scripts = Vec::new();
    
    // Read directory
    let entries = match fs::read_dir(&path) {
        Ok(entries) => entries,
        Err(e) => return Err(format!("Failed to read scripts directory: {}", e)),
    };
    
    for entry in entries {
        let entry = match entry {
            Ok(entry) => entry,
            Err(e) => {
                eprintln!("Failed to read entry: {}", e);
                continue;
            }
        };
        
        let path = entry.path();
        
        // Only include Lua files
        if path.is_file() && path.extension().and_then(|s| s.to_str()) == Some("lua") {
            let file_name = path.file_name()
                .and_then(|n| n.to_str())
                .unwrap_or("unknown.lua")
                .to_string();
            
            // Read file content
            let content = match fs::read_to_string(&path) {
                Ok(content) => content,
                Err(_) => "-- Empty script".to_string(),
            };
            
            // Get file metadata
            let metadata = match fs::metadata(&path) {
                Ok(metadata) => metadata,
                Err(e) => {
                    eprintln!("Failed to get metadata for {}: {}", file_name, e);
                    continue;
                }
            };
            
            let last_modified = metadata.modified()
                .unwrap_or_else(|_| SystemTime::now())
                .duration_since(UNIX_EPOCH)
                .unwrap_or_default()
                .as_secs();
            
            let size = metadata.len();
            
            // Determine icon based on content
            let icon = if content.contains("loadstring") {
                "remote"
            } else if content.contains("print") {
                "console"
            } else if content.contains("game:GetService") {
                "service"
            } else {
                "script"
            }.to_string();
            
            let script = ScriptFile {
                name: file_name.clone(),
                path: path.to_string_lossy().to_string(),
                content,
                last_modified,
                size,
                icon,
            };
            
            scripts.push(script);
        }
    }
    
    // Sort by last modified (newest first)
    scripts.sort_by(|a, b| b.last_modified.cmp(&a.last_modified));
    
    Ok(scripts)
}

// Save a script to the scripts folder
#[tauri::command]
fn save_script(name: String, content: String) -> Result<ScriptFile, String> {
    let scripts_folder = get_scripts_folder()?;
    
    // Ensure .lua extension
    let file_name = if name.ends_with(".lua") {
        name.clone()
    } else {
        format!("{}.lua", name)
    };
    
    let path = PathBuf::from(&scripts_folder).join(&file_name);
    
    // Write the file
    fs::write(&path, &content)
        .map_err(|e| format!("Failed to write script: {}", e))?;
    
    // Create ScriptFile object to return
    let metadata = fs::metadata(&path)
        .map_err(|e| format!("Failed to get metadata: {}", e))?;
    
    let last_modified = metadata.modified()
        .unwrap_or_else(|_| SystemTime::now())
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs();
    
    let size = metadata.len();
    
    // Determine icon
    let icon = if content.contains("loadstring") {
        "remote"
    } else if content.contains("print") {
        "console"
    } else if content.contains("game:GetService") {
        "service"
    } else {
        "script"
    }.to_string();
    
    Ok(ScriptFile {
        name: file_name,
        path: path.to_string_lossy().to_string(),
        content,
        last_modified,
        size,
        icon,
    })
}

// Open and read a script file
// Open and read a script file
#[tauri::command]
fn open_script(path: String) -> Result<ScriptFile, String> {
    let content = fs::read_to_string(&path)
        .map_err(|e| format!("Failed to read script: {}", e))?;
    
    let path_buf = PathBuf::from(&path);
    let file_name = path_buf.file_name()
        .and_then(|n| n.to_str())
        .unwrap_or("unknown.lua")
        .to_string();
    
    let metadata = fs::metadata(&path)
        .map_err(|e| format!("Failed to get metadata: {}", e))?;
    
    let last_modified = metadata.modified()
        .unwrap_or_else(|_| SystemTime::now())
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs();
    
    let size = metadata.len();
    
    let icon = if content.contains("loadstring") {
        "remote"
    } else if content.contains("print") {
        "console"
    } else if content.contains("game:GetService") {
        "service"
    } else {
        "script"
    }.to_string();
    
    Ok(ScriptFile {
        name: file_name,
        path: path_buf.to_string_lossy().to_string(),  // Fixed this line
        content,
        last_modified,
        size,
        icon,
    })
}
// Delete a script file
#[tauri::command]
fn delete_script(path: String) -> Result<String, String> {
    fs::remove_file(&path)
        .map_err(|e| format!("Failed to delete script: {}", e))?;
    
    Ok(format!("Successfully deleted script: {}", path))
}

// Check if a file exists
#[tauri::command]
fn file_exists(path: String) -> bool {
    PathBuf::from(&path).exists()
}

// Create a new folder in scripts directory
#[tauri::command]
fn create_scripts_folder(folder_name: String) -> Result<String, String> {
    let scripts_folder = get_scripts_folder()?;
    let folder_path = PathBuf::from(&scripts_folder).join(&folder_name);
    
    if folder_path.exists() {
        return Err(format!("Folder '{}' already exists", folder_name));
    }
    
    fs::create_dir(&folder_path)
        .map_err(|e| format!("Failed to create folder: {}", e))?;
    
    Ok(format!("Created folder: {}", folder_path.to_string_lossy()))
}

// Rename a script file
#[tauri::command]
fn rename_script(old_path: String, new_name: String) -> Result<ScriptFile, String> {
    let old_path_buf = PathBuf::from(&old_path);
    
    // Ensure .lua extension on new name
    let new_file_name = if new_name.ends_with(".lua") {
        new_name.clone()
    } else {
        format!("{}.lua", new_name)
    };
    
    let new_path_buf = old_path_buf.with_file_name(&new_file_name);
    
    // Check if new name already exists
    if new_path_buf.exists() {
        return Err(format!("A file named '{}' already exists", new_file_name));
    }
    
    // Rename the file
    fs::rename(&old_path_buf, &new_path_buf)
        .map_err(|e| format!("Failed to rename script: {}", e))?;
    
    // Read the file content
    let content = match fs::read_to_string(&new_path_buf) {
        Ok(content) => content,
        Err(_) => "-- Empty script".to_string(),
    };
    
    let metadata = fs::metadata(&new_path_buf)
        .map_err(|e| format!("Failed to get metadata: {}", e))?;
    
    let last_modified = metadata.modified()
        .unwrap_or_else(|_| SystemTime::now())
        .duration_since(UNIX_EPOCH)
        .unwrap_or_default()
        .as_secs();
    
    let size = metadata.len();
    
    let icon = if content.contains("loadstring") {
        "remote"
    } else if content.contains("print") {
        "console"
    } else if content.contains("game:GetService") {
        "service"
    } else {
        "script"
    }.to_string();
    
    Ok(ScriptFile {
        name: new_file_name,
        path: new_path_buf.to_string_lossy().to_string(),
        content,
        last_modified,
        size,
        icon,
    })
}

// Get default starter scripts (optional - for first-time users)
#[tauri::command]
fn get_starter_scripts() -> Result<Vec<ScriptFile>, String> {
    let mut scripts = Vec::new();
    
    // Add some default starter scripts
    let default_scripts = vec![
        ("hello_world.lua", "-- Hello World script\nprint('Hello from Atlantis IDE!')"),
        ("infyield_example.lua", "-- Infinite Yield example\nloadstring(game:HttpGet('https://raw.githubusercontent.com/EdgeIY/infiniteyield/master/source'))()"),
        ("esp_template.lua", "-- ESP Template\n-- Add your ESP script here"),
        ("admin_commands.lua", "-- Admin Commands\n-- Add admin command script here"),
    ];
    
    for (name, content) in default_scripts {
        let script = ScriptFile {
            name: name.to_string(),
            path: format!("starter/{}", name),
            content: content.to_string(),
            last_modified: SystemTime::now()
                .duration_since(UNIX_EPOCH)
                .unwrap_or_default()
                .as_secs(),
            size: content.len() as u64,
            icon: "starter".to_string(),
        };
        
        scripts.push(script);
    }
    
    Ok(scripts)
}
#[tauri::command]
fn set_window_size(window: tauri::Window, width: f64, height: f64) {
    let size = tauri::LogicalSize::new(width, height);
    window.set_size(size).expect("Failed to set window size");
}
fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_clipboard_manager::init())
        .setup(|app| {
            if let Some(window) = app.get_webview_window("main") {
                let _ = window.set_decorations(false);
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            greet,
            minimize_window,
            maximize_window,
            close_window,
            save_file,
            read_file,
            execute,
            is_roblox_running,
            test_backend,
            clear_cache,
            refresh_processes,
            get_scripts_folder,
            list_scripts,
            save_script,
            open_script,
            delete_script,
            file_exists,
            create_scripts_folder,
            rename_script,
            get_starter_scripts,
 set_window_size,  // Add this line
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}