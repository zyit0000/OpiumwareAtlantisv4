

                function LogToConsole(message) {
                    const consoleOutput = document.getElementById('consoleOutput');
                    if (!consoleOutput) return;

                    const timestamp = new Date().toLocaleTimeString();
                    const newLine = `[${timestamp}] ${message}\n`;


                    consoleOutput.value += newLine;


                    consoleOutput.scrollTop = consoleOutput.scrollHeight;


                    console.log(message);
                }

                function clearConsole() {
                    const consoleOutput = document.getElementById('consoleOutput');
                    if (consoleOutput) {
                        consoleOutput.value = '[INFO] Console cleared\n';
                        // LogToConsole('Console cleared');
                    }
                }




                function IniitializeConsole() {
                    const consolePanel = document.getElementById('consolePanel');
                    if (!consolePanel) return;





                    setTimeout(() => {

                    }, 100);


                }





                window.LogToConsole = LogToConsole;
                window.clearConsole = clearConsole;
                async function getRobloxUsernameFromBrowser() {
                    try {
                        // This requires proper permissions in Tauri config
                        // Add to tauri.conf.json:
                        // "capabilities": {
                        //   "localStorage": {
                        //     "allow": ["*"]
                        //   }
                        // }

                        // Try to access Roblox website cookies
                        const cookies = await window.__TAURI__.http.getCookies('https://www.roblox.com');

                        // Look for .ROBLOSECURITY cookie
                        const roblosecurity = cookies.find(c => c.name === '.ROBLOSECURITY');

                        if (roblosecurity) {
                            // Use the token to get user info
                            const response = await fetch('https://users.roblox.com/v1/users/authenticated', {
                                headers: {
                                    'Cookie': `.ROBLOSECURITY=${roblosecurity.value}`
                                }
                            });

                            if (response.ok) {
                                const data = await response.json();
                                return data.name || data.displayName;
                            }
                        }

                        return null;
                    } catch (error) {
                        console.error('Failed to get username from browser:', error);
                        return null;
                    }
                }

                async function saveCurrentScript() {


                    if (!monacoEditor) {
                        showNotification('Editor not initialized', 'error');
                        return;
                    }

                    const content = monacoEditor.getValue().trim();
                    if (!content) {
                        showNotification('Editor is empty', 'warning');
                        return;
                    }


                    const currentTab = tabs.find(t => t.id === currentTabId);
                    let fileName = currentTab ? currentTab.name : '';


                    if (fileName.startsWith('Untitled') || fileName.startsWith('Tab-') || fileName === 'Welcome') {
                        fileName = '';
                    }


                    const saveModal = createSaveDialog(fileName || 'new_script');


                    return new Promise((resolve) => {
                        const handleSave = async (scriptName) => {
                            if (!scriptName || scriptName.trim() === '') {
                                saveModal.remove();
                                resolve(false);
                                return;
                            }

                            const cleanName = scriptName.trim();

                            try {

                                const savedScript = await window.__TAURI__.core.invoke('save_script', {
                                    name: cleanName,
                                    content: content
                                });


                                if (currentTab) {
                                    currentTab.name = savedScript.name;
                                    renderTabs();
                                }


                                await refreshScriptsList();


                                saveModal.remove();
                                resolve(true);

                            } catch (error) {
                                console.error('Failed to save script:', error);

                                saveModal.remove();
                                resolve(false);
                            }
                        };


                        const saveBtn = saveModal.querySelector('#customSaveBtn');
                        const cancelBtn = saveModal.querySelector('#customCancelBtn');
                        const inputField = saveModal.querySelector('#scriptNameInput');

                        saveBtn.addEventListener('click', () => {
                            const scriptName = inputField.value;
                            handleSave(scriptName);
                        });

                        cancelBtn.addEventListener('click', () => {
                            saveModal.remove();
                            resolve(false);
                        });


                        inputField.addEventListener('keypress', (e) => {
                            if (e.key === 'Enter') {
                                const scriptName = inputField.value;
                                handleSave(scriptName);
                            }
                        });


                        setTimeout(() => {
                            inputField.focus();
                            inputField.select();
                        }, 100);
                    });
                }


                function createSaveDialog(defaultName) {

                    const existingModal = document.getElementById('saveScriptModal');
                    if (existingModal) {
                        existingModal.remove();
                    }


                    const modal = document.createElement('div');
                    modal.id = 'saveScriptModal';
                    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

                    modal.innerHTML = `
        <div style="
            background: rgba(26, 26, 26, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 25px;
            width: 400px;
            max-width: 90vw;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            animation: slideUp 0.3s ease;
        ">
            <div style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 1px solid var(--border-color);
            ">
                <h3 style="
                    color: var(--accent-color);
                    margin: 0;
                    font-size: 18px;
                    font-weight: 600;
                ">
                    <i class="fas fa-save"></i> Save Script
                </h3>
                <button id="closeSaveModal" style="
                    background: none;
                    border: none;
                    color: var(--text-muted);
                    font-size: 20px;
                    cursor: pointer;
                    padding: 5px;
                    border-radius: 4px;
                    transition: all 0.2s ease;
                ">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div style="margin-bottom: 25px;">
                <label style="
                    display: block;
                    color: var(--text-secondary);
                    font-size: 14px;
                    margin-bottom: 8px;
                    font-weight: 500;
                ">
                    Script Name
                </label>
                <input type="text" 
                       id="scriptNameInput" 
                       value="${defaultName}"
                       placeholder="Enter script name..."
                       style="
                           width: 100%;
                           padding: 12px 15px;
                           background: rgba(40,40,40,0.7);
                           border: 1px solid var(--border-color);
                           border-radius: 8px;
                           color: var(--text-primary);
                           font-family: var(--font-family-mono);
                           font-size: 14px;
                           outline: none;
                           transition: all 0.2s ease;
                       ">
                <div style="
                    color: var(--text-muted);
                    font-size: 12px;
                    margin-top: 8px;
                    padding: 8px;
                    background: rgba(40,40,40,0.3);
                    border-radius: 6px;
                ">
                    <i class="fas fa-info-circle" style="margin-right: 5px;"></i>
                    Will be saved as: <span id="fileNamePreview">${defaultName}.lua</span>
                </div>
            </div>
            
            <div style="
                display: flex;
                justify-content: flex-end;
                gap: 10px;
                padding-top: 15px;
                border-top: 1px solid var(--border-color);
            ">
                <button id="customCancelBtn" style="
                    padding: 10px 20px;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid var(--border-color);
                    border-radius: 6px;
                    color: var(--text-primary);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-weight: 500;
                    font-family: var(--font-family-mono);
                ">
                    Cancel
                </button>
                <button id="customSaveBtn" style="
                    padding: 10px 20px;
                    background: var(--accent-color);
                    border: none;
                    border-radius: 6px;
                    color: white;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.2s ease;
                    font-family: var(--font-family-mono);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                ">
                    <i class="fas fa-save"></i> Save
                </button>
            </div>
        </div>
    `;

                    document.body.appendChild(modal);


                    const style = document.createElement('style');
                    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { 
                opacity: 0;
                transform: translateY(20px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        #closeSaveModal:hover {
            background: rgba(255,255,255,0.1) !important;
            color: var(--text-primary) !important;
        }
        
        #customCancelBtn:hover {
            background: rgba(255,255,255,0.15) !important;
            border-color: var(--accent-color) !important;
        }
        
        #customSaveBtn:hover {
            background: var(--accent-light) !important;
            transform: translateY(-1px);
        }
        
        #scriptNameInput:focus {
            border-color: var(--accent-color) !important;
            background: rgba(40,40,40,0.9) !important;
        }
    `;
                    modal.appendChild(style);


                    const inputField = modal.querySelector('#scriptNameInput');
                    const preview = modal.querySelector('#fileNamePreview');

                    inputField.addEventListener('input', () => {
                        let fileName = inputField.value.trim();
                        if (fileName && !fileName.endsWith('.lua')) {
                            fileName += '.lua';
                        }
                        preview.textContent = fileName || 'new_script.lua';
                    });


                    const closeBtn = modal.querySelector('#closeSaveModal');
                    closeBtn.addEventListener('click', () => {
                        modal.remove();
                    });


                    modal.addEventListener('click', (e) => {
                        if (e.target === modal) {
                            modal.remove();
                        }
                    });


                    const handleEscape = (e) => {
                        if (e.key === 'Escape') {
                            modal.remove();
                            document.removeEventListener('keydown', handleEscape);
                        }
                    };
                    document.addEventListener('keydown', handleEscape);


                    modal.addEventListener('remove', () => {
                        document.removeEventListener('keydown', handleEscape);
                    });

                    return modal;
                }

                async function loadScriptDialog() {
                    console.log('Opening file explorer...');

                    try {

                        const result = await window.__TAURI__.dialog.open({
                            multiple: false,
                            filters: [{
                                name: 'Script Files',
                                extensions: ['lua', 'txt', 'js', 'py', 'json']
                            }],
                            title: 'Select Script File',
                            directory: false
                        });

                        if (!result) {
                            console.log('No file selected');
                            return;
                        }

                        console.log('Selected file:', result);


                        const content = await window.__TAURI__.fs.readTextFile(result);


                        const fileName = typeof result === 'string' ?
                            result.split('/').pop().split('\\').pop() :
                            result.name || 'unnamed';
                        const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");


                        createNewTab(nameWithoutExt, content);



                    } catch (error) {
                        console.error('Failed to load file:', error);



                        const input = document.createElement('input');
                        input.type = 'file';
                        input.accept = '.lua,.txt,.js,.py';

                        input.onchange = async function (e) {
                            const file = e.target.files[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onload = function (e) {
                                    const content = e.target.result;
                                    const fileName = file.name.replace(/\.[^/.]+$/, "");
                                    createNewTab(fileName, content);

                                };
                                reader.readAsText(file);
                            }
                        };

                        input.click();
                    }
                }

                let monacoEditor;
                let aceEditor;

                function loadScript(src) {
                    return new Promise((resolve, reject) => {
                        const script = document.createElement('script');
                        script.src = src;
                        script.onload = resolve;
                        script.onerror = reject;
                        document.head.appendChild(script);
                    });
                }

                let tabs = [];
                let currentTabId = null;
                let fileCounter = 1;
                let currentLanguage = 'lua';


                const tabButtons = document.querySelectorAll('.tab-button');
                const contentAreas = document.querySelectorAll('.content-area');
                const fileItems = document.querySelectorAll('.file-item');
                const toggleSwitches = document.querySelectorAll('.toggle-switch');
                const windowButtons = document.querySelectorAll('.window-btn');
                const toolbarButtons = document.querySelectorAll('.toolbar-btn');
                const explorerButtons = document.querySelectorAll('.explorer-btn');
                const newTabBtn = document.getElementById('newTabBtn');
                const tabsWrapper = document.getElementById('tabsWrapper');


                require.config({
                    paths: {
                        vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.1/min/vs'
                    }
                });


                document.addEventListener('DOMContentLoaded', () => {
                    initializeSidebarTabs();
                    initializeFileExplorer();
                    initializeExplorerSearch();
                    initializeSettings();
                    setupWindowControls();
                    initializeToolbar();
                    initializeMonacoEditor();
                    initializeScriptbloxTab();
                    initializeAccentColorChanger();
                    initializeExplorerCollapse();
                    clearConsole();
                    getRobloxUsernameFromBrowser();
                    LogToConsole("Atlantis v4 initialized");


                    // InitializeAtlantis();
                    initializeBackgroundImageSettings();
                });
                function initializeExplorerSearch() {
                    const searchInput = document.getElementById('explorerSearch');
                    const clearSearchBtn = document.getElementById('clearSearchBtn');

                    if (!searchInput || !clearSearchBtn) return;


                    clearSearchBtn.addEventListener('click', function () {
                        searchInput.value = '';
                        clearSearchBtn.style.opacity = '0';
                        filterFileList('');
                        animateClick(this);
                    });


                    searchInput.addEventListener('input', function () {
                        const searchTerm = this.value.toLowerCase();
                        clearSearchBtn.style.opacity = searchTerm ? '1' : '0';
                        filterFileList(searchTerm);
                    });



                }


                function filterFileList(searchTerm) {
                    const fileItems = document.querySelectorAll('.file-item');
                    const fileList = document.getElementById('fileList');
                    const sectionHeaders = document.querySelectorAll('.section-header');

                    if (!searchTerm) {

                        fileItems.forEach(item => {
                            item.style.display = '';
                        });
                        sectionHeaders.forEach(header => {
                            header.style.display = '';
                        });
                        return;
                    }


                    sectionHeaders.forEach(header => {
                        header.style.display = 'none';
                    });

                    let hasVisibleItems = false;

                    fileItems.forEach(item => {
                        const fileName = item.querySelector('.file-name')?.textContent.toLowerCase() || '';
                        const scriptData = item.dataset.script ? JSON.parse(item.dataset.script) : {};
                        const scriptType = scriptData.icon || '';


                        const matches = fileName.includes(searchTerm) ||
                            scriptType.includes(searchTerm);

                        if (matches) {
                            item.style.display = '';
                            hasVisibleItems = true;
                        } else {
                            item.style.display = 'none';
                        }
                    });


                    const noResults = fileList.querySelector('.no-results-message');
                    if (!hasVisibleItems) {
                        if (!noResults) {
                            const message = document.createElement('li');
                            message.className = 'no-results-message';
                            message.style.padding = '20px';
                            message.style.textAlign = 'center';
                            message.style.color = 'var(--text-muted)';
                            //  message.innerHTML = '<i class="fas fa-search"></i> No files found';
                            fileList.appendChild(message);
                        }
                    } else if (noResults) {
                        noResults.remove();
                    }
                }


                function updateScriptsListWithSearch(scripts, searchTerm = '') {
                    const fileList = document.getElementById('fileList');
                    if (!fileList) return;

                    fileList.innerHTML = '';

                    if (scripts.length === 0) {
                        fileList.innerHTML = `
            <li style="padding: 20px; text-align: center; color: var(--text-muted);">
                No scripts yet
            </li>
        `;
                        return;
                    }


                    const filteredScripts = searchTerm ?
                        scripts.filter(script =>
                            script.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (script.icon && script.icon.includes(searchTerm))
                        ) : scripts;

                    if (filteredScripts.length === 0) {
                        fileList.innerHTML = `
            <li style="padding: 20px; text-align: center; color: var(--text-muted);">
                <i class="fas fa-search"></i> No files match "${searchTerm}"
            </li>
        `;
                        return;
                    }


                    filteredScripts.forEach((script, index) => {
                        const li = document.createElement('li');
                        li.className = `file-item ${index === 0 ? 'active' : ''}`;
                        li.dataset.script = JSON.stringify(script);
                        li.dataset.path = script.path;
                        li.dataset.name = script.name;

                        const iconSvg = getScriptIconSvg(script.icon);

                        li.innerHTML = `
            <div class="file-icon">
                ${iconSvg}
            </div>
            <div class="file-name" title="${script.name}">${script.name}</div>
        `;


                        li.addEventListener('click', async function (e) {
                            e.stopPropagation();
                            document.querySelectorAll('.file-item').forEach(item => {
                                item.classList.remove('active');
                            });
                            this.classList.add('active');
                            const scriptData = JSON.parse(this.dataset.script);
                            await openRealScript(scriptData.path, scriptData.name);
                            animateClick(this);
                        });

                        fileList.appendChild(li);
                    });
                }


                function initializeExplorerCollapse() {
                    return
                    /*  const collapseToggle = document.querySelector('.collapse-toggle');
                      const fileExplorer = document.querySelector('.file-explorer');
                      
                      if (!collapseToggle || !fileExplorer) {
                          console.error('Collapse toggle or explorer not found');
                          return;
                      }
                      
                  
                      const isCollapsed = localStorage.getItem('explorer-collapsed') === 'true';
                      if (isCollapsed) {
                          fileExplorer.classList.add('collapsed');
                      } else {
                          fileExplorer.classList.remove('collapsed');
                      }
                      
                  
                      collapseToggle.addEventListener('click', function() {
                          fileExplorer.classList.toggle('collapsed');
                          
                    
                          const icon = this.querySelector('i');
                          if (fileExplorer.classList.contains('collapsed')) {
                              icon.classList.remove('fa-chevron-left');
                              icon.classList.add('fa-chevron-right');
                          } else {
                              icon.classList.remove('fa-chevron-right');
                              icon.classList.add('fa-chevron-left');
                          }
                          
                  
                          localStorage.setItem('explorer-collapsed', fileExplorer.classList.contains('collapsed'));
                          
                   
                          if (monacoEditor) {
                              setTimeout(() => {
                                  monacoEditor.layout();
                              }, 100);
                          }
                          
                          animateClick(this);
                      });
                      
                  
                      const explorerHeader = document.querySelector('.explorer-header');
                      if (explorerHeader) {
                          explorerHeader.addEventListener('dblclick', function(e) {
                              if (e.target !== collapseToggle && !collapseToggle.contains(e.target)) {
                                  collapseToggle.click();
                              }
                          });
                      }*/



                }

                function initializeSidebarTabs() {
                    tabButtons.forEach(button => {
                        button.addEventListener('click', function () {
                            const tabId = this.dataset.tab;
                            const contentElement = document.getElementById(`${tabId}-content`);


                            if (!contentElement) {
                                console.error(`Content element not found: ${tabId}-content`);
                                return;
                            }


                            if (tabId === 'scriptblox') {
                                setTimeout(() => {
                                    const container = document.getElementById('scriptsContainer');
                                    if (container && container.children.length <= 1) {
                                        fetchRecentScripts();
                                    }
                                }, 100);
                            }


                            tabButtons.forEach(btn => {
                                btn.classList.remove('active');
                                const indicator = btn.querySelector('.tab-indicator');
                                if (indicator) indicator.style.opacity = '0';
                            });

                            this.classList.add('active');
                            const indicator = this.querySelector('.tab-indicator');
                            if (indicator) indicator.style.opacity = '1';


                            contentAreas.forEach(area => {
                                area.classList.remove('active');
                            });

                            contentElement.classList.add('active');


                            animateClick(this);
                        });
                    });
                }


                async function initializeFileExplorer() {



                    const newScriptBtn = document.getElementById('newScriptBtn');
                    const refreshScriptsBtn = document.getElementById('refreshScriptsBtn');
                    const fileList = document.getElementById('fileList');

                    if (!newScriptBtn || !refreshScriptsBtn || !fileList) {
                        console.error('File explorer elements not found');
                        return;
                    }


                    await loadRealScripts();


                    newScriptBtn.addEventListener('click', async function () {
                        animateClick(this);
                        await createNewScript();
                    });


                    refreshScriptsBtn.addEventListener('click', async function () {
                        animateClick(this);
                        await refreshScriptsList();
                    });
                }


                async function loadRealScripts() {
                    try {
                        console.log('Loading real scripts from Tauri...');


                        await window.__TAURI__.core.invoke('get_scripts_folder');


                        const scripts = await window.__TAURI__.core.invoke('list_scripts');
                        console.log('Loaded scripts:', scripts);


                        updateScriptsList(scripts);


                        if (scripts.length === 0) {
                            //   showNotification('No scripts found. Create your first script!', 'info');
                        }

                    } catch (error) {
                        console.error('Failed to load scripts:', error);
                        showNotification('Failed to load scripts: ' + error.message, 'error');


                        const fileList = document.getElementById('fileList');
                        if (fileList) {
                            fileList.innerHTML = `
                <li style="padding: 20px; text-align: center; color: var(--danger);">
                    <i class="fas fa-exclamation-triangle"></i> Failed to load scripts
                </li>
            `;
                        }
                    }
                }


                function updateScriptsList(scripts) {
                    const fileList = document.getElementById('fileList');
                    if (!fileList) return;

                    fileList.innerHTML = '';

                    if (scripts.length === 0) {
                        fileList.innerHTML = `
            <li style="padding: 20px; text-align: center; color: var(--text-muted);">
              No scripts yet
            </li>
        `;
                        return;
                    }

                    scripts.forEach((script, index) => {
                        const li = document.createElement('li');
                        li.className = `file-item ${index === 0 ? 'active' : ''}`;


                        li.dataset.script = JSON.stringify(script);
                        li.dataset.path = script.path;
                        li.dataset.name = script.name;

                        const iconSvg = getScriptIconSvg(script.icon);

                        li.innerHTML = `
            <div class="file-icon">
                ${iconSvg}
            </div>
            <div class="file-name" title="${script.name}">${script.name}</div>
        `;


                        li.addEventListener('click', async function (e) {
                            e.stopPropagation();

                            document.querySelectorAll('.file-item').forEach(item => {
                                item.classList.remove('active');
                            });

                            this.classList.add('active');


                            const scriptData = JSON.parse(this.dataset.script);
                            await openRealScript(scriptData.path, scriptData.name);

                            animateClick(this);
                        });


                        li.addEventListener('contextmenu', async function (e) {
                            e.preventDefault();
                            e.stopPropagation();


                            const scriptData = JSON.parse(this.dataset.script);
                            console.log('Right-click context menu - Script data:', scriptData);

                            showScriptContextMenu(e, scriptData);
                        });

                        fileList.appendChild(li);
                    });
                }


                function getScriptIconSvg(iconType) {
                    const icons = {
                        script: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 18h8v-2H8zm0-4h8v-2H8zm-2 8q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22zm7-13h5l-5-5z"/>
                </svg>`,
                        remote: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-1-7l6-6l-1.4-1.4l-4.6 4.6l-2.6-2.6L6 12z"/>
                </svg>`,
                        console: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 20V4h20v16zm2-2h16V6H4zm2-2h12v-2H6zm0-6v2h6v-2z"/>
                </svg>`,
                        service: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2v7m4 0h-2V7h2v10m4 0h-2v-4h2v4"/>
                </svg>`,
                        starter: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"/>
                </svg>`
                    };

                    return icons[iconType] || icons.script;
                }


                async function openRealScript(filePath, fileName) {
                    try {
                        console.log(`Opening real script: ${fileName}`);


                        switchToHomeTab();


                        const scriptData = await window.__TAURI__.core.invoke('open_script', {
                            path: filePath
                        });


                        const existingTab = tabs.find(tab => tab.name === fileName);

                        if (existingTab) {
                            switchToTab(existingTab.id);

                            if (monacoEditor) {
                                monacoEditor.setValue(scriptData.content);
                            }
                        } else {
                            createNewTab(fileName, scriptData.content);
                        }



                    } catch (error) {
                        console.error('Failed to open script:', error);
                        showNotification(`❌ Failed to open ${fileName}: ${error.message}`, 'error');


                        createNewTab(fileName, `-- Error loading ${fileName}\n-- ${error.message}\n\n-- Create new content here...`);
                    }
                }


                async function createNewScript() {
                    try {
                        const scriptName = prompt('Enter script name (without .lua extension):', 'new_script');
                        if (!scriptName || scriptName.trim() === '') return;

                        const cleanName = scriptName.trim();
                        const defaultContent = `-- ${cleanName}.lua
-- Created with Atlantis v4
-- ${new Date().toLocaleDateString()}

print("Hello from ${cleanName}!")


`;


                        const savedScript = await window.__TAURI__.core.invoke('save_script', {
                            name: cleanName,
                            content: defaultContent
                        });

                        await refreshScriptsList();


                        await openRealScript(savedScript.path, savedScript.name);



                    } catch (error) {
                        console.error('Failed to create script:', error);
                        showNotification(`❌ Failed to create script: ${error.message}`, 'error');
                    }
                }


                async function refreshScriptsList() {
                    try {
                        const scripts = await window.__TAURI__.core.invoke('list_scripts');
                        updateScriptsList(scripts);

                    } catch (error) {
                        console.error('Failed to refresh scripts:', error);
                        showNotification('❌ Failed to refresh scripts', 'error');
                    }
                }


                function showScriptContextMenu(event, script) {
                    console.log('Creating context menu for script:', script);

                    if (!script) {
                        console.error('No script provided to context menu');
                        return;
                    }


                    const existingMenu = document.getElementById('scriptContextMenu');
                    if (existingMenu) {
                        existingMenu.remove();
                    }


                    const menu = document.createElement('div');
                    menu.id = 'scriptContextMenu';
                    menu.style.cssText = `
        position: fixed;
        top: ${event.clientY}px;
        left: ${event.clientX}px;
        background-color: rgba(26, 26, 26, 0.95);
        backdrop-filter: blur(10px);
        border: 1px solid var(--border-color);
        border-radius: 6px;
        padding: 8px 0;
        min-width: 180px;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;

                    menu.innerHTML = `
        <div class="context-menu-item" data-action="open">
            <i class="fas fa-edit"></i> Open
        </div>
       
        <div class="context-menu-item" data-action="delete">
            <i class="fas fa-trash"></i> Delete
        </div>
      
    
      
    `;


                    const style = document.createElement('style');
                    style.textContent = `
        .context-menu-item {
            padding: 8px 16px;
            color: var(--text-primary);
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            transition: all 0.2s ease;
        }
        .context-menu-item:hover {
            background-color: var(--bg-hover);
        }
        .context-menu-item i {
            width: 16px;
            text-align: center;
        }
        .context-menu-item[data-action="delete"]:hover {
            background-color: rgba(255, 85, 85, 0.2);
            color: var(--danger);
        }
       
    `;
                    menu.appendChild(style);


                    menu.querySelectorAll('.context-menu-item').forEach(item => {
                        item.addEventListener('click', async function (e) {
                            e.stopPropagation();
                            const action = this.dataset.action;
                            console.log(`Context menu action: ${action} on script:`, script);

                            try {
                                switch (action) {
                                    case 'open':
                                        await openRealScript(script.path, script.name);
                                        break;



                                    case 'delete':
                                        await deleteScript(script);
                                        break;

                                    case 'duplicate':
                                        await duplicateScript(script);
                                        break;


                                }
                            } catch (error) {
                                console.error(`Error in context menu action ${action}:`, error);
                                showNotification(`❌ ${action} failed: ${error.message}`, 'error');
                            }

                            menu.remove();
                        });
                    });


                    document.body.appendChild(menu);


                    const closeMenu = (e) => {
                        if (!menu.contains(e.target)) {
                            menu.remove();
                            document.removeEventListener('click', closeMenu);
                        }
                    };

                    setTimeout(() => {
                        document.addEventListener('click', closeMenu);
                    }, 100);


                    const handleEscape = (e) => {
                        if (e.key === 'Escape') {
                            menu.remove();
                            document.removeEventListener('keydown', handleEscape);
                        }
                    };
                    document.addEventListener('keydown', handleEscape);


                    menu.addEventListener('remove', () => {
                        document.removeEventListener('keydown', handleEscape);
                    });
                }


                async function renameScript(script) {
                    console.log('Attempting to rename script:', script);

                    if (!script) {
                        console.error('No script object provided');
                        showNotification('❌ Cannot rename: No script data', 'error');
                        return;
                    }

                    if (!script.path || !script.name) {
                        console.error('Invalid script object:', script);
                        showNotification('❌ Cannot rename: Invalid script data', 'error');
                        return;
                    }


                    const renameModal = createRenameDialog(script.name.replace('.lua', ''), script.path);

                    return new Promise((resolve) => {
                        const handleRename = async (newName) => {
                            if (!newName || newName.trim() === '' || newName === script.name.replace('.lua', '')) {
                                renameModal.remove();
                                resolve(false);
                                return;
                            }

                            const cleanName = newName.trim();
                            console.log(`Renaming ${script.name} to ${cleanName}`);

                            try {

                                if (!window.__TAURI__?.core?.invoke) {
                                    throw new Error('Tauri API not available');
                                }

                                const result = await window.__TAURI__.core.invoke('rename_script', {
                                    old_path: script.path,
                                    new_name: cleanName
                                });

                                console.log('Rename successful:', result);

                                await refreshScriptsList();
                                showNotification(`✏️ Renamed to: ${cleanName}.lua`, 'success');
                                renameModal.remove();
                                resolve(true);

                            } catch (error) {
                                console.error('Failed to rename script:', error);
                                showNotification(`❌ Failed to rename: ${error.message || 'Unknown error'}`, 'error');
                                renameModal.remove();
                                resolve(false);
                            }
                        };

                        const renameBtn = renameModal.querySelector('#customRenameBtn');
                        const cancelBtn = renameModal.querySelector('#customCancelRenameBtn');
                        const inputField = renameModal.querySelector('#renameInput');

                        renameBtn.addEventListener('click', () => {
                            const newName = inputField.value;
                            handleRename(newName);
                        });

                        cancelBtn.addEventListener('click', () => {
                            renameModal.remove();
                            resolve(false);
                        });

                        inputField.addEventListener('keypress', (e) => {
                            if (e.key === 'Enter') {
                                const newName = inputField.value;
                                handleRename(newName);
                            }
                        });

                        setTimeout(() => {
                            inputField.focus();
                            inputField.select();
                        }, 100);
                    });
                }



                function createRenameDialog(currentName, filePath) {

                    const existingModal = document.getElementById('renameScriptModal');
                    if (existingModal) {
                        existingModal.remove();
                    }

                    const modal = document.createElement('div');
                    modal.id = 'renameScriptModal';
                    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

                    modal.innerHTML = `
        <div style="
            background: rgba(26, 26, 26, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 25px;
            width: 400px;
            max-width: 90vw;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            animation: slideUp 0.3s ease;
        ">
            <div style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 1px solid var(--border-color);
            ">
                <h3 style="
                    color: var(--accent-color);
                    margin: 0;
                    font-size: 18px;
                    font-weight: 600;
                ">
                    <i class="fas fa-edit"></i> Rename Script
                </h3>
                <button id="closeRenameModal" style="
                    background: none;
                    border: none;
                    color: var(--text-muted);
                    font-size: 20px;
                    cursor: pointer;
                    padding: 5px;
                    border-radius: 4px;
                    transition: all 0.2s ease;
                ">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div style="margin-bottom: 15px; font-size: 13px; color: var(--text-muted); background: rgba(40,40,40,0.3); padding: 10px; border-radius: 6px;">
                <i class="fas fa-file-code" style="margin-right: 6px;"></i>
                <span id="currentFileName">${currentName}.lua</span>
            </div>
            
            <div style="margin-bottom: 25px;">
                <label style="
                    display: block;
                    color: var(--text-secondary);
                    font-size: 14px;
                    margin-bottom: 8px;
                    font-weight: 500;
                ">
                    New Name
                </label>
                <input type="text" 
                       id="renameInput" 
                       value="${currentName}"
                       placeholder="Enter new name..."
                       style="
                           width: 100%;
                           padding: 12px 15px;
                           background: rgba(40,40,40,0.7);
                           border: 1px solid var(--border-color);
                           border-radius: 8px;
                           color: var(--text-primary);
                           font-family: var(--font-family-mono);
                           font-size: 14px;
                           outline: none;
                           transition: all 0.2s ease;
                       ">
                <div style="
                    color: var(--text-muted);
                    font-size: 12px;
                    margin-top: 8px;
                    padding: 8px;
                    background: rgba(40,40,40,0.3);
                    border-radius: 6px;
                ">
                    <i class="fas fa-info-circle" style="margin-right: 5px;"></i>
                    Will be renamed to: <span id="renamePreview">${currentName}.lua</span>
                </div>
            </div>
            
            <div style="
                display: flex;
                justify-content: flex-end;
                gap: 10px;
                padding-top: 15px;
                border-top: 1px solid var(--border-color);
            ">
                <button id="customCancelRenameBtn" style="
                    padding: 10px 20px;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid var(--border-color);
                    border-radius: 6px;
                    color: var(--text-primary);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-weight: 500;
                    font-family: var(--font-family-mono);
                ">
                    Cancel
                </button>
                <button id="customRenameBtn" style="
                    padding: 10px 20px;
                    background: var(--accent-color);
                    border: none;
                    border-radius: 6px;
                    color: white;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.2s ease;
                    font-family: var(--font-family-mono);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                ">
                    <i class="fas fa-edit"></i> Rename
                </button>
            </div>
        </div>
    `;

                    document.body.appendChild(modal);


                    const style = document.createElement('style');
                    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { 
                opacity: 0;
                transform: translateY(20px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        #closeRenameModal:hover {
            background: rgba(255,255,255,0.1) !important;
            color: var(--text-primary) !important;
        }
        
        #customCancelRenameBtn:hover {
            background: rgba(255,255,255,0.15) !important;
            border-color: var(--accent-color) !important;
        }
        
        #customRenameBtn:hover {
            background: var(--accent-light) !important;
            transform: translateY(-1px);
        }
        
        #renameInput:focus {
            border-color: var(--accent-color) !important;
            background: rgba(40,40,40,0.9) !important;
        }
    `;
                    modal.appendChild(style);


                    const inputField = modal.querySelector('#renameInput');
                    const preview = modal.querySelector('#renamePreview');
                    const currentFile = modal.querySelector('#currentFileName');

                    if (filePath) {
                        currentFile.innerHTML = `<i class="fas fa-folder" style="margin-right: 6px;"></i> ${filePath}`;
                    }

                    inputField.addEventListener('input', () => {
                        let fileName = inputField.value.trim();
                        if (fileName && !fileName.endsWith('.lua')) {
                            fileName += '.lua';
                        }
                        preview.textContent = fileName || 'script.lua';
                    });


                    const closeBtn = modal.querySelector('#closeRenameModal');
                    closeBtn.addEventListener('click', () => {
                        modal.remove();
                    });


                    modal.addEventListener('click', (e) => {
                        if (e.target === modal) {
                            modal.remove();
                        }
                    });


                    const handleEscape = (e) => {
                        if (e.key === 'Escape') {
                            modal.remove();
                            document.removeEventListener('keydown', handleEscape);
                        }
                    };
                    document.addEventListener('keydown', handleEscape);


                    modal.addEventListener('remove', () => {
                        document.removeEventListener('keydown', handleEscape);
                    });

                    return modal;
                }


                async function deleteScript(script) {
                    try {
                        const confirmDelete = confirm(`Are you sure you want to delete "${script.name}"?\nThis action cannot be undone.`);
                        if (!confirmDelete) return;

                        await window.__TAURI__.core.invoke('delete_script', {
                            path: script.path
                        });

                        await refreshScriptsList();


                    } catch (error) {
                        console.error('Failed to delete script:', error);
                        showNotification(`❌ Failed to delete: ${error.message}`, 'error');
                    }
                }


                async function createNewScript() {
                    console.log('Creating new script...');


                    const createModal = createNewScriptDialog();

                    return new Promise((resolve) => {
                        const handleCreate = async (scriptName) => {
                            if (!scriptName || scriptName.trim() === '') {
                                createModal.remove();
                                resolve(false);
                                return;
                            }

                            const cleanName = scriptName.trim();


                            const defaultContent = `-- ${cleanName}.lua
-- Created with Atlantis v4
-- ${new Date().toLocaleDateString()}

print("Hello from ${cleanName}!")`;

                            try {

                                const savedScript = await window.__TAURI__.core.invoke('save_script', {
                                    name: cleanName,
                                    content: defaultContent
                                });


                                await refreshScriptsList();


                                await openRealScript(savedScript.path, savedScript.name);


                                createModal.remove();
                                resolve(true);

                            } catch (error) {
                                console.error('Failed to create script:', error);
                                showNotification(`Failed to create script: ${error.message}`, 'error');
                                createModal.remove();
                                resolve(false);
                            }
                        };

                        const createBtn = createModal.querySelector('#customCreateBtn');
                        const cancelBtn = createModal.querySelector('#customCancelCreateBtn');
                        const inputField = createModal.querySelector('#newScriptInput');

                        createBtn.addEventListener('click', () => {
                            const scriptName = inputField.value;
                            handleCreate(scriptName);
                        });

                        cancelBtn.addEventListener('click', () => {
                            createModal.remove();
                            resolve(false);
                        });

                        inputField.addEventListener('keypress', (e) => {
                            if (e.key === 'Enter') {
                                const scriptName = inputField.value;
                                handleCreate(scriptName);
                            }
                        });

                        setTimeout(() => {
                            inputField.focus();
                            inputField.select();
                        }, 100);
                    });
                }


                function createNewScriptDialog() {

                    const existingModal = document.getElementById('newScriptModal');
                    if (existingModal) {
                        existingModal.remove();
                    }

                    const modal = document.createElement('div');
                    modal.id = 'newScriptModal';
                    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;

                    modal.innerHTML = `
        <div style="
            background: rgba(26, 26, 26, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 25px;
            width: 400px;
            max-width: 90vw;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            animation: slideUp 0.3s ease;
        ">
            <div style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 1px solid var(--border-color);
            ">
                <h3 style="
                    color: var(--accent-color);
                    margin: 0;
                    font-size: 18px;
                    font-weight: 600;
                ">
                    <i class="fas fa-plus-circle"></i> Create New Script
                </h3>
                <button id="closeCreateModal" style="
                    background: none;
                    border: none;
                    color: var(--text-muted);
                    font-size: 20px;
                    cursor: pointer;
                    padding: 5px;
                    border-radius: 4px;
                    transition: all 0.2s ease;
                ">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div style="margin-bottom: 25px;">
                <label style="
                    display: block;
                    color: var(--text-secondary);
                    font-size: 14px;
                    margin-bottom: 8px;
                    font-weight: 500;
                ">
                    Script Name
                </label>
                <input type="text" 
                       id="newScriptInput" 
                       value="new_script"
                       placeholder="Enter script name..."
                       style="
                           width: 100%;
                           padding: 12px 15px;
                           background: rgba(40,40,40,0.7);
                           border: 1px solid var(--border-color);
                           border-radius: 8px;
                           color: var(--text-primary);
                           font-family: var(--font-family-mono);
                           font-size: 14px;
                           outline: none;
                           transition: all 0.2s ease;
                       ">
                <div style="
                    color: var(--text-muted);
                    font-size: 12px;
                    margin-top: 8px;
                    padding: 8px;
                    background: rgba(40,40,40,0.3);
                    border-radius: 6px;
                ">
                    <i class="fas fa-info-circle" style="margin-right: 5px;"></i>
                    Will be saved as: <span id="newScriptPreview">new_script.lua</span>
                </div>
            </div>
            
            <div style="
                display: flex;
                justify-content: flex-end;
                gap: 10px;
                padding-top: 15px;
                border-top: 1px solid var(--border-color);
            ">
                <button id="customCancelCreateBtn" style="
                    padding: 10px 20px;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid var(--border-color);
                    border-radius: 6px;
                    color: var(--text-primary);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-weight: 500;
                    font-family: var(--font-family-mono);
                ">
                    Cancel
                </button>
                <button id="customCreateBtn" style="
                    padding: 10px 20px;
                    background: var(--accent-color);
                    border: none;
                    border-radius: 6px;
                    color: white;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.2s ease;
                    font-family: var(--font-family-mono);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                ">
                    <i class="fas fa-plus-circle"></i> Create
                </button>
            </div>
        </div>
    `;

                    document.body.appendChild(modal);


                    const style = document.createElement('style');
                    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { 
                opacity: 0;
                transform: translateY(20px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        #closeCreateModal:hover {
            background: rgba(255,255,255,0.1) !important;
            color: var(--text-primary) !important;
        }
        
        #customCancelCreateBtn:hover {
            background: rgba(255,255,255,0.15) !important;
            border-color: var(--accent-color) !important;
        }
        
        #customCreateBtn:hover {
            background: var(--accent-light) !important;
            transform: translateY(-1px);
        }
        
        #newScriptInput:focus {
            border-color: var(--accent-color) !important;
            background: rgba(40,40,40,0.9) !important;
        }
    `;
                    modal.appendChild(style);


                    const inputField = modal.querySelector('#newScriptInput');
                    const preview = modal.querySelector('#newScriptPreview');

                    inputField.addEventListener('input', () => {
                        let fileName = inputField.value.trim() || 'new_script';
                        if (fileName && !fileName.endsWith('.lua')) {
                            fileName += '.lua';
                        }
                        preview.textContent = fileName;
                    });


                    const closeBtn = modal.querySelector('#closeCreateModal');
                    closeBtn.addEventListener('click', () => {
                        modal.remove();
                    });


                    modal.addEventListener('click', (e) => {
                        if (e.target === modal) {
                            modal.remove();
                        }
                    });


                    const handleEscape = (e) => {
                        if (e.key === 'Escape') {
                            modal.remove();
                            document.removeEventListener('keydown', handleEscape);
                        }
                    };
                    document.addEventListener('keydown', handleEscape);


                    modal.addEventListener('remove', () => {
                        document.removeEventListener('keydown', handleEscape);
                    });

                    return modal;
                }


                async function revealInFolder(filePath) {
                    try {

                        const path = require('path');
                        const folderPath = path.dirname(filePath);



                    } catch (error) {
                        console.error('Failed to reveal in folder:', error);
                        //showNotification(`Could not open folder`, 'error');
                    }
                }





                function initializeSettings() {
                    toggleSwitches.forEach(toggle => {
                        toggle.addEventListener('click', function () {
                            this.classList.toggle('active');
                            animateClick(this);
                        });
                    });
                }


                function setupWindowControls() {


                    const minimizeBtn = document.querySelector('.window-btn.minimize');
                    const maximizeBtn = document.querySelector('.window-btn.maximize');
                    const closeBtn = document.querySelector('.window-btn.close');

                    if (!minimizeBtn || !maximizeBtn || !closeBtn) {
                        console.error('Window buttons not found');
                        return;
                    }


                    let isMaximized = false;


                    minimizeBtn.addEventListener('click', async function () {
                        console.log('Minimize clicked');
                        animateClick(this);

                        try {

                            this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';

                            if (window.__TAURI__?.window?.appWindow?.minimize) {
                                await window.__TAURI__.window.appWindow.minimize();
                                console.log('Tauri minimize successful');
                            } else if (window.__TAURI__?.core?.invoke) {
                                await window.__TAURI__.core.invoke('minimize_window');
                                console.log('Invoke minimize successful');
                            } else {

                                document.body.classList.add('minimized');
                                setTimeout(() => {
                                    document.body.classList.remove('minimized');
                                }, 1000);
                            }
                        } catch (error) {
                            console.error('Minimize failed:', error);

                            document.body.classList.add('minimized');
                            setTimeout(() => {
                                document.body.classList.remove('minimized');
                            }, 300);
                        } finally {
                            setTimeout(() => {
                                this.style.backgroundColor = '';
                            }, 300);
                        }
                    });


                    maximizeBtn.addEventListener('click', async function () {
                        console.log('Maximize clicked, current state:', isMaximized);
                        animateClick(this);

                        try {

                            this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';

                            if (window.__TAURI__?.window?.appWindow) {
                                if (isMaximized) {
                                    if (window.__TAURI__.window.appWindow.unmaximize) {
                                        await window.__TAURI__.window.appWindow.unmaximize();
                                    } else if (window.__TAURI__.window.appWindow.maximize) {
                                        await window.__TAURI__.window.appWindow.maximize();
                                    }
                                    isMaximized = false;
                                } else {
                                    await window.__TAURI__.window.appWindow.maximize();
                                    isMaximized = true;
                                }
                            } else if (window.__TAURI__?.core?.invoke) {
                                await window.__TAURI__.core.invoke('maximize_window');
                                isMaximized = !isMaximized;
                            } else {

                                isMaximized = !isMaximized;
                                if (isMaximized) {
                                    document.body.classList.add('maximized');
                                } else {
                                    document.body.classList.remove('maximized');
                                }
                            }

                            console.log('Maximize successful, new state:', isMaximized);

                        } catch (error) {
                            console.error('Maximize failed:', error);

                            isMaximized = !isMaximized;
                            if (isMaximized) {
                                document.body.classList.add('maximized');
                            } else {
                                document.body.classList.remove('maximized');
                            }
                        } finally {
                            setTimeout(() => {
                                this.style.backgroundColor = '';
                            }, 300);
                        }
                    });


                    closeBtn.addEventListener('click', async function () {
                        console.log('Close clicked');
                        animateClick(this);

                        try {

                            this.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';

                            if (window.__TAURI__?.window?.appWindow?.close) {
                                await window.__TAURI__.window.appWindow.close();
                                console.log('Tauri close successful');
                            } else if (window.__TAURI__?.core?.invoke) {
                                await window.__TAURI__.core.invoke('close_window');
                                console.log('Invoke close successful');
                            } else {

                                document.body.style.opacity = '0';
                                document.body.style.transform = 'scale(0.9)';
                                document.body.style.pointerEvents = 'none';

                                setTimeout(() => {
                                    if (confirm('Close Atlantis?')) {
                                        if (window.close) {
                                            window.close();
                                        }
                                    } else {
                                        document.body.style.opacity = '';
                                        document.body.style.transform = '';
                                        document.body.style.pointerEvents = '';
                                        this.style.backgroundColor = '';
                                    }
                                }, 300);
                                return;
                            }
                        } catch (error) {
                            console.error('Close failed:', error);

                            document.body.style.opacity = '0';
                            document.body.style.transform = 'scale(0.9)';
                            document.body.style.pointerEvents = 'none';

                            setTimeout(() => {
                                if (confirm('Close Atlantis?')) {
                                    if (window.close) {
                                        window.close();
                                    }
                                } else {
                                    document.body.style.opacity = '';
                                    document.body.style.transform = '';
                                    document.body.style.pointerEvents = '';
                                }
                            }, 300);
                        } finally {
                            setTimeout(() => {
                                this.style.backgroundColor = '';
                            }, 300);
                        }
                    });


                }

                function clearEditor() {
                    if (monacoEditor) {
                        monacoEditor.setValue('');
                        showNotification('Editor cleared', 'info');
                        LogToConsole('Editor cleared');
                    } else {
                        showNotification('Editor not initialized', 'error');
                    }
                }
                function initializeToolbar() {
                    toolbarButtons.forEach(btn => {
                        btn.addEventListener('click', function () {
                            const title = this.getAttribute('title');
                            const id = this.id;


                            switch (id) {
                                case 'executeBtn':

                                    break;
                                case 'clearBtn':
                                    clearEditor();
                                    break;
                                case 'attachBtn':

                                    break;
                                default:

                                    switch (title) {
                                        case 'Run':
                                            runCode();
                                            break;
                                        case 'Clean':
                                            cleanEditor();
                                            break;
                                        case 'Clear':
                                            clearConsole();
                                            break;
                                    }
                            }

                            animateClick(this);
                        });
                    });
                }


                async function initializeMonacoEditor() {
                    let editorType = 'monaco';
                    try {
                        if (window.__TAURI__) {
                            editorType = await window.__TAURI__.core.invoke('get_editor_type');
                        }
                    } catch (e) {
                        console.error('Failed to detect editor type:', e);
                    }

                    window.USE_ACE = (editorType === 'ace');
                    console.log('Editor mode:', editorType);

                    if (window.USE_ACE) {
                        try {
                            await loadScript("https://cdnjs.cloudflare.com/ajax/libs/ace/1.32.2/ace.js");
                            await loadScript("https://cdnjs.cloudflare.com/ajax/libs/ace/1.32.2/ext-language_tools.js");
                            
                            const aceContainer = document.getElementById('monaco-editor');
                            if (aceContainer) {
                                aceEditor = ace.edit(aceContainer);
                                aceEditor.setTheme("ace/theme/tomorrow_night_eighties");
                                aceEditor.session.setMode("ace/mode/lua");
                                aceEditor.setOptions({
                                    enableBasicAutocompletion: true,
                                    enableLiveAutocompletion: true,
                                    enableSnippets: true,
                                    fontSize: "14px",
                                    fontFamily: "'JetBrains Mono', 'Roboto Mono', monospace",
                                    showPrintMargin: false,
                                    useWorker: false
                                });

                                monacoEditor = {
                                    getValue: () => aceEditor.getValue(),
                                    setValue: (v) => aceEditor.setValue(v),
                                    layout: () => aceEditor.resize(),
                                    setModel: (m) => aceEditor.setValue(m ? (m.value || m.toString()) : ''),
                                    onDidChangeModelContent: (cb) => aceEditor.on('change', cb),
                                    getPosition: () => {
                                        const pos = aceEditor.getCursorPosition();
                                        return { lineNumber: pos.row + 1, column: pos.column + 1 };
                                    },
                                    focus: () => aceEditor.focus()
                                };

                                createNewTab('Welcome', '-- Welcome to Atlantis v4 (Ace Mode)');
                                document.getElementById('newTabBtn')?.addEventListener('click', () => createNewTab());
                                return;
                            }
                        } catch (err) {
                            console.error('Failed to load Ace, falling back to Monaco:', err);
                            window.USE_ACE = false;
                        }
                    }

                    require(['vs/editor/editor.main'], function () {


                        monaco.editor.defineTheme('dash-transparent', {
                            base: 'vs-dark',
                            inherit: true,
                            rules: [

                                { token: 'comment', foreground: '#8a8f9d' },

                                { token: 'keyword', foreground: '#ff6b6b' },
                                { token: 'string', foreground: '#d7875f' },

                                { token: 'number', foreground: '#4ecdc4' },
                                { token: 'operator', foreground: '#ff9e64' },

                                { token: 'delimiter', foreground: '#ff9e64' },
                                { token: 'identifier', foreground: '#45b7d1' },

                                { token: 'type', foreground: '#96ceb4' },
                                { token: 'function', foreground: '#ffd166' },

                                { token: 'variable', foreground: '#6a9acf' },
                                { token: 'constant', foreground: '#ee6c4d' },

                                { token: 'tag', foreground: '#ff6b6b' },
                                { token: 'attribute.name', foreground: '#45b7d1' },

                                { token: 'attribute.value', foreground: '#d7875f' },
                                { token: 'support.function', foreground: '#ffd166' },

                                { token: 'support.type', foreground: '#96ceb4' },
                                { token: 'support.constant', foreground: '#ee6c4d' },

                                { token: 'invalid', foreground: '#ff4757' },
                                { token: 'emphasis', foreground: '#ff6b6b' },

                                { token: 'strong', foreground: '#ff9e64' },
                                { token: 'link', foreground: '#45b7d1' },

                                { token: '', foreground: '#d1d5e0' }

                            ],
                            colors: {

                                'editor.background': '#00000000',
                                'editor.foreground': '#FFFFFF',
                                'editor.lineHighlightBackground': '#FFFFFF0A',
                                'editor.lineHighlightBorder': '#FFFFFF05',
                                'editorCursor.foreground': '#FFFFFF',


                                'editorLineNumber.foreground': '#FFFFFF60',
                                'editorLineNumber.activeForeground': '#FFFFFF80',


                                'editor.selectionBackground': '#569CD620',
                                'editor.inactiveSelectionBackground': '#569CD610',
                                'editor.selectionHighlightBackground': '#569CD615',
                                'editor.selectionHighlightBorder': '#569CD620',


                                'editorGutter.background': '#00000010',
                                'editorGutter.modifiedBackground': '#0C7D9D',
                                'editorGutter.addedBackground': '#587C0C',
                                'editorGutter.deletedBackground': '#94151B',


                                'editorIndentGuide.background': '#569CD615',
                                'editorIndentGuide.activeBackground': '#569CD625',


                                'minimap.background': '#00000000',
                                'minimapSlider.background': '#569CD610',
                                'minimapSlider.hoverBackground': '#569CD620',
                                'minimapSlider.activeBackground': '#569CD630',
                                'minimap.findMatchHighlight': '#569CD640',
                                'minimap.selectionHighlight': '#569CD630',
                                'minimap.selectionOccurrenceHighlight': '#569CD620',
                                'minimap.errorHighlight': '#F14C4C40',
                                'minimap.warningHighlight': '#CCA70040',
                                'minimap.infoHighlight': '#569CD640',


                                'scrollbar.shadow': '#00000000',
                                'scrollbarSlider.background': '#569CD620',
                                'scrollbarSlider.hoverBackground': '#569CD630',
                                'scrollbarSlider.activeBackground': '#569CD640',


                                'editorOverviewRuler.background': '#00000000',
                                'editorOverviewRuler.border': '#569CD610',
                                'editorOverviewRuler.currentContentForeground': '#569CD630',
                                'editorOverviewRuler.incomingContentForeground': '#569CD620',
                                'editorOverviewRuler.commonContentForeground': '#569CD610',


                                'editorWidget.background': '#1A1A1ACC',
                                'editorWidget.border': '#569CD620',
                                'editorSuggestWidget.background': '#1A1A1ACC',
                                'editorSuggestWidget.border': '#569CD620',
                                'editorSuggestWidget.selectedBackground': '#569CD615',
                                'editorHoverWidget.background': '#1A1A1ACC',
                                'editorHoverWidget.border': '#569CD620',


                                'editorBracketMatch.background': '#569CD610',
                                'editorBracketMatch.border': '#569CD640',


                                'editorError.foreground': '#F48771',
                                'editorWarning.foreground': '#CCA700',
                                'editorInfo.foreground': '#569CD6'
                            }
                        });

                        if (window.USE_ACE) {
                            // Initialize Ace Editor
                            const aceContainer = document.getElementById('monaco-editor');
                            aceEditor = ace.edit(aceContainer);
                            aceEditor.setTheme("ace/theme/monokai");
                            aceEditor.session.setMode("ace/mode/lua");
                            aceEditor.setOptions({
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: true,
                                fontSize: "14px",
                                fontFamily: "JetBrains Mono",
                                showPrintMargin: false,
                                useWorker: false // Disable worker for safety in some environments
                            });
                            
                            // Mock Monaco-like methods for compatibility if needed
                            aceEditor.getValue = () => aceEditor.getValue();
                            aceEditor.setValue = (v) => aceEditor.setValue(v);
                            
                            // Map existing monacoEditor variable to Ace for compatibility in other parts of the script
                            monacoEditor = {
                                getValue: () => aceEditor.getValue(),
                                setValue: (v) => aceEditor.setValue(v),
                                setModel: (model) => {
                                    aceEditor.setValue(model.value);
                                },
                                layout: () => aceEditor.resize()
                            };
                            
                            createNewTab('Welcome', '--Welcome to Atlantis v4 (Ace Mode)');
                        } else {
                            // Initialize Monaco Editor
                            monacoEditor = monaco.editor.create(document.getElementById('monaco-editor'), {
                            value: '',
                            language: 'lua',
                            theme: 'dash-transparent',
                            automaticLayout: true,
                            minimap: {
                                enabled: true,
                                size: 'proportional',
                                maxColumn: 100,
                                renderCharacters: true,
                                showSlider: 'always',
                                side: 'right'
                            },
                            scrollBeyondLastLine: false,
                            fontSize: 14,
                            lineNumbers: 'on',
                            roundedSelection: false,
                            scrollbar: {
                                vertical: 'visible',
                                horizontal: 'visible',
                                useShadows: false,
                                verticalScrollbarSize: 10,
                                horizontalScrollbarSize: 10
                            },
                            overviewRulerLanes: 0,
                            cursorBlinking: 'smooth', // 'smooth', 'phase', 'expand', or 'solid'
                            cursorSmoothCaretAnimation: 'on', // 'on', 'off', or 'explicit'
                            cursorStyle: 'line', // 'line', 'block', 'underline', or 'line-thin'
                            smoothScrolling: true,
                            mouseWheelScrollSensitivity: 1,
                            fastScrollSensitivity: 1,


                            cursorAnimationDuration: 0,
                            hideCursorInOverviewRuler: true,
                            overviewRulerBorder: false,
                            renderLineHighlight: 'all',
                            readOnly: false,
                            contextmenu: true
                        });


                        createNewTab('Welcome', '--Welcome to Atlantis v4');





                        newTabBtn.addEventListener('click', () => createNewTab());
                    });
                }




                function createNewTab(name = null, content = '') {
                    const tabId = 'tab_' + Date.now();
                    const tabName = name || `Tab-${fileCounter}`;
                    fileCounter++;

                    const tab = {
                        id: tabId,
                        name: tabName,
                        language: currentLanguage,
                        content: content,
                        icon: getFileIcon(tabName)
                    };

                    tabs.push(tab);
                    renderTabs();
                    switchToTab(tabId);

                    return tabId;
                }

                function renderTabs() {
                    tabsWrapper.innerHTML = '';

                    tabs.forEach(tab => {
                        const tabElement = document.createElement('div');
                        tabElement.className = `editor-tab ${tab.id === currentTabId ? 'active' : ''}`;
                        tabElement.dataset.tabId = tab.id;

                        tabElement.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><!-- Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE --><path fill="currentColor" d="M10.5 5A8.5 8.5 0 0 0 2 13.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 10.5 5m3 8a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 13.5 8a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5m6-11A2.5 2.5 0 0 0 17 4.5A2.5 2.5 0 0 0 19.5 7A2.5 2.5 0 0 0 22 4.5A2.5 2.5 0 0 0 19.5 2"/></svg>
                    <span class="tab-name">${tab.name}</span>
                    <span class="tab-close">
                        <i class="fas fa-times"></i>
                    </span>
                `;


                        tabElement.addEventListener('click', (e) => {
                            if (!e.target.classList.contains('tab-close') &&
                                !e.target.classList.contains('fa-times')) {
                                switchToTab(tab.id);
                            }
                        });


                        const closeBtn = tabElement.querySelector('.tab-close');
                        closeBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            closeTab(tab.id);
                        });

                        tabsWrapper.appendChild(tabElement);
                    });
                }

                function switchToTab(tabId) {
                    const tab = tabs.find(t => t.id === tabId);
                    if (!tab) return;


                    if (currentTabId) {
                        const currentTab = tabs.find(t => t.id === currentTabId);
                        if (currentTab && monacoEditor) {
                            currentTab.content = monacoEditor.getValue();
                            currentTab.language = monacoEditor.getModel()?.getLanguageId() || 'lua';
                        }
                    }

                    currentTabId = tabId;
                    renderTabs();


                    if (monacoEditor) {
                        const model = monaco.editor.createModel(
                            tab.content,
                            tab.language
                        );
                        monacoEditor.setModel(model);


                        currentLanguage = tab.language;
                    }
                }

                function closeTab(tabId) {

                    if (tabs.length <= 1) {

                        tabs[0].name = `Tab-${fileCounter}`;
                        tabs[0].content = '';
                        tabs[0].language = 'lua';
                        tabs[0].icon = getFileIcon(tabs[0].name);
                        fileCounter++;

                        switchToTab(tabs[0].id);
                        return;
                    }

                    const tabIndex = tabs.findIndex(t => t.id === tabId);
                    if (tabIndex === -1) return;


                    tabs.splice(tabIndex, 1);
                    fileCounter--;


                    if (tabId === currentTabId) {
                        const newTabIndex = Math.min(tabIndex, tabs.length - 1);
                        if (tabs[newTabIndex]) {
                            switchToTab(tabs[newTabIndex].id);
                        }
                    }

                    renderTabs();
                }

                function getFileIcon(fileName) {
                    const extension = fileName.split('.').pop().toLowerCase();

                    const iconMap = {
                        'js': 'fa-file-code',
                        'html': 'fa-file-code',
                        'css': 'fa-file-code',
                        'json': 'fa-file-code',
                        'md': 'fa-file-alt',
                        'txt': 'fa-file-alt',
                        'py': 'fa-file-code',
                        'lua': 'fa-file-code',
                        'java': 'fa-file-code',
                        'cpp': 'fa-file-code',
                        'c': 'fa-file-code',
                        'php': 'fa-file-code',
                        'xml': 'fa-file-code'
                    };

                    return iconMap[extension] || 'fa-file';
                }

                function openFileInEditor(fileName) {
                    const fileContent = getFileContent(fileName);
                    createNewTab(fileName, fileContent);
                }

                function getFileContent(fileName) {

                    const fileContents = {
                        "um": "hi"
                    };

                    return fileContents[fileName] || `-- ${fileName}\nprint("Default script loaded")`;
                }


                function switchToHomeTab() {
                    document.querySelector('.tab-button[data-tab="home"]').click();
                }

                function runCode() {
                    if (monacoEditor) {
                        const code = monacoEditor.getValue();
                        console.log('Running code:', code);

                    }
                }

                function cleanEditor() {
                    if (monacoEditor) {
                        monacoEditor.setValue('');
                        showNotification('Editor cleaned', 'info');
                    }
                }

                function toggleFavorites() {
                    showNotification('Saved', 'info');
                }

                function manageBookmarks() {
                    showNotification('Opened', 'info');
                }

                function showPerformance() {
                    showNotification('Injected', 'info');
                }

                function refreshFileList() {
                    showNotification('File list refreshed', 'info');
                }

                function animateClick(element) {
                    element.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        element.style.transform = '';
                    }, 150);
                }

                function showNotification(message, type = 'info') {

                    const notification = document.createElement('div');
                    notification.textContent = message;
                    notification.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: ${type === 'success' ? 'rgba(26,56,26,0.8)' : 'rgba(56,26,26,0.8)'};
                color: white;
                padding: 12px 24px;
                border-radius: 6px;
                z-index: 10000;
                font-size: 14px;
                font-weight: 500;
                  backdrop-filter: blur(10px);
              /*  border:1px solid var(--border-color);*/
             /*   box-shadow: 0 4px 12px rgba(0,0,0,0.3);*/
                animation: slideIn 0.3s ease;
            `;

                    document.body.appendChild(notification);


                    setTimeout(() => {
                        notification.style.animation = 'slideOut 0.3s ease';
                        setTimeout(() => {
                            document.body.removeChild(notification);
                        }, 300);
                    }, 3000);
                }


                const style = document.createElement('style');
                style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
                document.head.appendChild(style);


                function initializeAccentColorChanger() {
                    const colorPicker = document.getElementById('colorPickerInput');
                    const colorPreview = document.getElementById('colorPreview');
                    const colorPresets = document.querySelectorAll('.color-preset');


                    const savedColor = localStorage.getItem('atlantis-accent-color') || '#739bf7';
                    colorPicker.value = savedColor;
                    colorPreview.style.backgroundColor = savedColor;


                    function updateAccentColor(color) {
                        document.documentElement.style.setProperty('--accent-color', color);
                        document.documentElement.style.setProperty('--accent-light',
                            adjustColorLightness(color, 30));


                        colorPreview.style.backgroundColor = color;


                        localStorage.setItem('atlantis-accent-color', color);


                        colorPresets.forEach(preset => {
                            if (preset.dataset.color === color) {
                                preset.classList.add('active');
                            } else {
                                preset.classList.remove('active');
                            }
                        });

                        s
                    }


                    colorPicker.addEventListener('input', function (e) {
                        updateAccentColor(e.target.value);
                    });


                    colorPresets.forEach(preset => {
                        preset.addEventListener('click', function () {
                            const color = this.dataset.color;
                            colorPicker.value = color;
                            updateAccentColor(color);
                        });
                    });


                    function adjustColorLightness(color, amount) {
                        let usePound = false;

                        if (color[0] === "#") {
                            color = color.slice(1);
                            usePound = true;
                        }

                        const num = parseInt(color, 16);
                        let r = (num >> 16) + amount;
                        if (r > 255) r = 255;
                        else if (r < 0) r = 0;

                        let b = ((num >> 8) & 0x00FF) + amount;
                        if (b > 255) b = 255;
                        else if (b < 0) b = 0;

                        let g = (num & 0x0000FF) + amount;
                        if (g > 255) g = 255;
                        else if (g < 0) g = 0;

                        return (usePound ? "#" : "") +
                            (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
                    }


                    colorPresets.forEach(preset => {
                        if (preset.dataset.color === savedColor) {
                            preset.classList.add('active');
                        }
                    });
                }


                function initializeBackgroundImageSettings() {
                    const bgImageContainer = document.getElementById('bgImageContainer');
                    const bgImageUrlInput = document.getElementById('bgImageUrl');
                    const bgImageUploadBtn = document.getElementById('bgImageUpload');
                    const bgImageOpacitySlider = document.getElementById('bgImageOpacity');
                    const opacityValueDisplay = document.getElementById('opacityValue');
                    const elementOpacitySlider = document.getElementById('elementOpacity');
                    const elementOpacityValueDisplay = document.getElementById('elementOpacityValue');
                    const bgImagePresets = document.querySelectorAll('.bg-image-preset');


                    const savedBgImage = localStorage.getItem('dash-bg-image') || '';
                    const savedBgOpacity = localStorage.getItem('dash-bg-opacity') || '30';
                    const savedElementOpacity = localStorage.getItem('dash-element-opacity') || '0';


                    updateBackgroundImage(savedBgImage);
                    updateBackgroundOpacity(savedBgOpacity);
                    updateElementOpacity(savedElementOpacity);


                    if (savedBgImage !== 'none' && savedBgImage !== 'gradient' && savedBgImage !== 'dark-gradient') {
                        //  bgImageUrlInput.value = savedBgImage;
                    }
                    bgImageOpacitySlider.value = savedBgOpacity;
                    opacityValueDisplay.textContent = savedBgOpacity + '%';
                    elementOpacitySlider.value = savedElementOpacity;
                    elementOpacityValueDisplay.textContent = savedElementOpacity + '%';


                    bgImagePresets.forEach(preset => {
                        const image = preset.dataset.image;
                        if (image === savedBgImage) {
                            preset.classList.add('active');
                        } else {
                            preset.classList.remove('active');
                        }
                    });


                    bgImageUploadBtn.addEventListener('click', function () {
                        const url = bgImageUrlInput.value.trim();
                        if (url) {
                            updateBackgroundImage(url);
                            localStorage.setItem('dash-bg-image', url);


                            bgImagePresets.forEach(preset => preset.classList.remove('active'));
                            showNotification('Background image applied', 'success');
                        }
                    });


                    bgImageOpacitySlider.addEventListener('input', function () {
                        const opacity = this.value;
                        opacityValueDisplay.textContent = opacity + '%';
                        updateBackgroundOpacity(opacity);
                    });

                    bgImageOpacitySlider.addEventListener('change', function () {
                        localStorage.setItem('dash-bg-opacity', this.value);
                    });


                    elementOpacitySlider.addEventListener('input', function () {
                        const opacity = this.value;
                        elementOpacityValueDisplay.textContent = opacity + '%';
                        updateElementOpacity(opacity);
                    });

                    elementOpacitySlider.addEventListener('change', function () {
                        localStorage.setItem('dash-element-opacity', this.value);
                    });


                    bgImagePresets.forEach(preset => {
                        preset.addEventListener('click', function () {
                            const image = this.dataset.image;
                            updateBackgroundImage(image);
                            localStorage.setItem('dash-bg-image', image);


                            if (image !== 'none' && image !== 'gradient' && image !== 'dark-gradient') {
                                bgImageUrlInput.value = image;
                            } else {
                                bgImageUrlInput.value = '';
                            }


                            bgImagePresets.forEach(p => p.classList.remove('active'));
                            this.classList.add('active');

                            showNotification('Background preset applied', 'success');
                        });
                    });
                }

                function updateBackgroundImage(image) {
                    const container = document.getElementById('bgImageContainer');

                    if (image === 'none') {
                        container.style.backgroundImage = 'none';
                        document.documentElement.style.setProperty('--bg-image', 'none');
                    } else if (image === 'gradient') {
                        container.style.backgroundImage = 'none';
                        container.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                        document.documentElement.style.setProperty('--bg-image', 'none');
                    } else if (image === 'dark-gradient') {
                        container.style.backgroundImage = 'none';
                        container.style.background = 'linear-gradient(135deg, #101010 0%, #1a1a1a 100%)';
                        document.documentElement.style.setProperty('--bg-image', 'none');
                    } else {

                        container.style.background = 'none';
                        container.style.backgroundImage = `url('${image}')`;
                        container.style.backgroundSize = 'cover';
                        container.style.backgroundPosition = 'center';
                        container.style.backgroundRepeat = 'no-repeat';


                        document.documentElement.style.setProperty('--bg-image', `url('${image}')`);
                    }
                }

                function updateBackgroundOpacity(opacity) {
                    document.documentElement.style.setProperty('--bg-image-opacity', opacity / 100);
                }

                function updateElementOpacity(opacity) {
                    document.documentElement.style.setProperty('--element-opacity', opacity / 100);
                }


                let currentPage = 1;
                let currentSearchQuery = '';
                let isFetching = false;


                function initializeScriptbloxTab() {


                    const searchInput = document.getElementById('scriptSearchInput');
                    const searchBtn = document.getElementById('searchBtn');
                    const scriptsContainer = document.getElementById('scriptsContainer');

                    if (!searchInput || !searchBtn || !scriptsContainer) {

                    }




                    document.querySelector('.tab-button[data-tab="scriptblox"]').addEventListener('click', () => {


                        if (scriptsContainer.children.length <= 1) {
                            fetchRecentScripts();
                        }
                    });


                    searchBtn.addEventListener('click', () => {
                        const query = searchInput.value.trim();
                        console.log('Search clicked:', query);
                        if (query) {
                            currentSearchQuery = query;
                            currentPage = 1;
                            searchScripts(query);
                        } else {
                            fetchRecentScripts();
                        }
                    });


                    searchInput.addEventListener('keypress', (e) => {
                        if (e.key === 'Enter') {
                            searchBtn.click();
                        }
                    });


                    setTimeout(() => fetchRecentScripts(), 500);
                }







                function SetButtonState(button, isWorking, text) {
                    if (isWorking) {
                        button.disabled = true;
                        button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${text}`;
                    } else {
                        button.disabled = false;
                        button.innerHTML = button.getAttribute('data-original-html') || text;
                    }
                }


                attachBtn.setAttribute('data-original-html', attachBtn.innerHTML);
                executeBtn.setAttribute('data-original-html', executeBtn.innerHTML);
                attachBtn.addEventListener('click', async function () {

                    animateClick(this);

                    const originalText = 'Attach';
                    SetButtonState(this, true, 'Attaching...');

                    try {

                        if (!window.__TAURI__?.core?.invoke) {
                            throw new Error('Where is tauri?');
                        }
                        LogToConsole("Attaching..")
                        showNotification('Starting attach process...', 'info');


                        const result = await window.__TAURI__.core.invoke('attach');
                        console.log('Attach result:', result);
                        LogToConsole(result)
                        showNotification(result, 'success');

                    } catch (error) {
                        console.error('Attach failed with error:', error);
                        showNotification(`Attach failed: ${error.message || 'Unknown error'}`, 'error');
                    } finally {
                        SetButtonState(this, false, originalText);
                    }
                });


                executeBtn.addEventListener('click', async function () {


                    if (!monacoEditor) {
                        showNotification('Editor not initialized', 'error');
                        return;
                    }

                    const code = monacoEditor.getValue().trim();
                    if (!code) {
                        showNotification('Editor is empty.', 'warning');
                        return;
                    }

                    animateClick(this);
                    const originalText = 'Execute';
                    //  SetButtonState(this, true, 'Executing...');

                    try {
                        if (!window.__TAURI__?.core?.invoke) {
                            throw new Error('Where is tauri?');
                        }


                        console.log('Executing Lua code:', code.substring(0, 100) + '...');
                        LogToConsole("Executing..", code.substring(5, 100) + '...')
                        const result = await window.__TAURI__.core.invoke('execute', {
                            luaCode: code
                        });
                        console.log('Execute result:', result);
                        LogToConsole(result)
                        showNotification(result, 'success');

                    } catch (error) {
                        console.error('Execute failed with error:', error);
                        LogToConsole("Execution failed");
                        showNotification(`Execute failed: ${error.message || 'Unknown error'}`, 'error');
                    } finally {
                        SetButtonState(this, false, originalText);
                    }
                });







                console.log('Backend initialized successfully');





                async function fetchRecentScripts() {
                    if (isFetching) return;

                    isFetching = true;
                    const container = document.getElementById('scriptsContainer');

                    if (!container) {
                        console.error('Scripts container not found!');
                        isFetching = false;
                        return;
                    }

                    container.innerHTML = `
                <div class="loading-message">
                    <i class="fas fa-spinner fa-spin"></i> Loading recent scripts...
                </div>
            `;

                    try {
                        console.log('Fetching recent scripts from API...');
                        const response = await fetch('https://scriptblox.com/api/script/fetch');
                        const data = await response.json();
                        console.log('API response received:', data);

                        if (data.result?.scripts) {
                            displayScripts(data.result.scripts);
                        } else {
                            throw new Error('No scripts found in response');
                        }
                    } catch (error) {
                        console.error('Error fetching recent scripts:', error);
                        container.innerHTML = `
                    <div class="error-message">
                        <i class="fas fa-exclamation-triangle"></i>
                        Failed to load scripts. Please try again.
                        <div style="margin-top: 10px; font-size: 12px;">${error.message}</div>
                    </div>
                `;
                    } finally {
                        isFetching = false;
                    }
                }

                (function () {
                    'use strict';


                    document.addEventListener('contextmenu', function (e) {
                        e.preventDefault();
                        console.log('Context menu disabled');
                        return false;
                    });


                    document.addEventListener('mousedown', function (e) {
                        const allowedElements = ['INPUT', 'TEXTAREA', 'MONACO-EDITOR', '#monaco-editor', '.monaco-editor'];
                        const target = e.target;
                        const tagName = target.tagName;
                        const className = target.className || '';
                        const id = target.id;


                        const classString = String(className);

                        if (!allowedElements.some(selector => {

                            if (tagName === selector) return true;


                            if (selector.startsWith('.') && classString.includes(selector.substring(1))) {
                                return true;
                            }


                            if (selector.startsWith('#') && id === selector.substring(1)) {
                                return true;
                            }

                            return false;
                        })) {
                            e.preventDefault();
                        }
                    });


                    document.addEventListener('dragstart', function (e) {
                        e.preventDefault();
                        return false;
                    });

                    document.addEventListener('drop', function (e) {
                        e.preventDefault();
                        return false;
                    });


                    const disabledShortcuts = [
                        { keys: ['ctrl', 's'], action: 'Save' },
                        { keys: ['ctrl', 'p'], action: 'Print' },
                        { keys: ['ctrl', 'u'], action: 'View Source' },
                        { keys: ['ctrl', 'shift', 'i'], action: 'DevTools' },
                        { keys: ['ctrl', 'shift', 'c'], action: 'Inspect' },
                        //     { keys: ['f12'], action: 'DevTools' },
                        { keys: ['ctrl', 'f12'], action: 'DevTools' },
                        { keys: ['ctrl', 'shift', 'j'], action: 'Console' }
                    ];

                    document.addEventListener('keydown', function (e) {
                        const pressed = [];
                        if (e.ctrlKey) pressed.push('ctrl');
                        if (e.shiftKey) pressed.push('shift');
                        if (e.altKey) pressed.push('alt');
                        pressed.push(e.key.toLowerCase());

                        for (const shortcut of disabledShortcuts) {
                            if (arraysEqual(pressed, shortcut.keys)) {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log(`Disabled: ${shortcut.action}`);
                                showNotification(`${shortcut.action} disabled`, 'warning');
                                return false;
                            }
                        }


                        if (e.ctrlKey && e.key.match(/^F[1-9]$|^F1[0-2]$/)) {
                            e.preventDefault();
                            return false;
                        }
                    });


                    const devtools = {
                        isOpen: false,
                        widthThreshold: 160,
                        heightThreshold: 160
                    };

                    const element = new Image();
                    Object.defineProperty(element, 'id', {
                        get: function () {
                            devtools.isOpen = true;
                        }
                    });

                    console.log(element);
                    console.clear();


                    setInterval(function () {
                        if (devtools.isOpen) {

                            console.clear();

                            // window.location.reload();
                            devtools.isOpen = false;
                        }
                    }, 1000);


                    function arraysEqual(a, b) {
                        if (a.length !== b.length) return false;
                        for (let i = 0; i < a.length; i++) {
                            if (a[i] !== b[i]) return false;
                        }
                        return true;
                    }
                })();

                document.addEventListener('DOMContentLoaded', () => {

                    document.addEventListener('contextmenu', (e) => {
                        e.preventDefault();
                        return false;
                    });


                    document.addEventListener('keydown', (e) => {

                        if (e.ctrlKey && e.key === 's') {
                            e.preventDefault();
                            showNotification('Save disabled', 'warning');
                            return false;
                        }

                        if (e.ctrlKey && e.key === 'p') {
                            e.preventDefault();
                            showNotification('Print disabled', 'warning');
                            return false;
                        }

                        if (e.ctrlKey && e.key === 'u') {
                            e.preventDefault();
                            return false;
                        }

                    });


                    document.addEventListener('dragover', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    });

                    document.addEventListener('drop', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        showNotification('File drop disabled', 'warning');
                    });

                    // Get Key Discord Redirect
                    document.getElementById('getKey')?.addEventListener('click', async function (e) {
                        e.preventDefault();
                        try {
                            await window.__TAURI__.core.invoke('get_key');
                        } catch (error) {
                            console.error('Failed to open discord:', error);
                            window.open('https://discord.gg/opiumware', '_blank');
                        }
                    });
                });

                async function searchScripts(query) {
                    if (isFetching) return;

                    isFetching = true;
                    const container = document.getElementById('scriptsContainer');

                    container.innerHTML = `
                <div class="loading-message">
                    <i class="fas fa-spinner fa-spin"></i> Searching for "${query}"...
                </div>
            `;

                    try {
                        const response = await fetch(`https://scriptblox.com/api/script/search?q=${encodeURIComponent(query)}&page=${currentPage}`);
                        const data = await response.json();

                        if (data.result?.scripts) {
                            displayScripts(data.result.scripts, data.result.totalPages);
                        } else {
                            throw new Error('No scripts found for your search');
                        }
                    } catch (error) {
                        console.error('Error searching scripts:', error);
                        container.innerHTML = `
                    <div class="error-message">
                        <i class="fas fa-exclamation-triangle"></i>
                        Search failed. Please try again.
                        <div style="margin-top: 10px; font-size: 12px;">${error.message}</div>
                    </div>
                `;
                    } finally {
                        isFetching = false;
                    }
                }


                function displayScripts(scripts, totalPages = 1) {
                    const container = document.getElementById('scriptsContainer');
                    const verifiedOnly = document.getElementById('verifiedFilter')?.checked || false;
                    const keylessOnly = document.getElementById('keylessFilter')?.checked || false;
                    const sortBy = document.getElementById('sortFilter')?.value || 'recent';

                    console.log('Displaying scripts:', scripts.length, 'found');


                    let filteredScripts = [...scripts];

                    if (verifiedOnly) {
                        filteredScripts = filteredScripts.filter(script => script.verified);
                    }

                    if (keylessOnly) {
                        filteredScripts = filteredScripts.filter(script => !script.key);
                    }


                    if (sortBy === 'views') {
                        filteredScripts.sort((a, b) => b.views - a.views);
                    } else {
                        filteredScripts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    }


                    const scriptCountElement = document.getElementById('scriptCount');
                    if (scriptCountElement) {
                        scriptCountElement.textContent = `(${filteredScripts.length})`;
                    }

                    if (filteredScripts.length === 0) {
                        container.innerHTML = `
                    <div class="no-scripts-message">
                        <i class="fas fa-search"></i>
                        No scripts found matching your criteria.
                        ${verifiedOnly || keylessOnly ? 'Try adjusting your filters.' : ''}
                    </div>
                `;
                        return;
                    }

                    container.innerHTML = '';

                    filteredScripts.forEach(script => {
                        const scriptCard = createScriptCard(script);
                        container.appendChild(scriptCard);
                    });


                    if (totalPages > 1) {
                        addPagination(totalPages);
                    }
                }


                function createScriptCard(script) {
                    const card = document.createElement('div');
                    card.className = 'script-card';


                    card.dataset.scriptId = script._id || Date.now().toString();


                    const date = new Date(script.createdAt);
                    const formattedDate = date.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    });


                    const scriptPreview = script.script ?
                        script.script.split('\n').slice(0, 5).join('\n') :
                        'No script content available';


                    const displayPreview = scriptPreview.length > 300 ?
                        scriptPreview.substring(0, 300) + '...' :
                        scriptPreview;


                    const badges = [];
                    if (script.verified) badges.push({ text: 'Verified', class: 'badge-verified' });
                    if (!script.key) badges.push({ text: 'Keyless', class: 'badge-keyless' });
                    if (script.isUniversal) badges.push({ text: 'Universal', class: 'badge-universal' });
                    if (script.isPatched) badges.push({ text: 'Patched', class: 'badge-patched' });

                    card.innerHTML = `
        <div class="script-header">
            <h3 class="script-title" title="${script.title}">${truncateText(script.title, 40)}</h3>
            <div class="script-badges">
                ${badges.map(badge =>
                        `<span class="script-badge ${badge.class}">${badge.text}</span>`
                    ).join('')}
            </div>
        </div>
        
        ${script.game ? `
            <div class="script-game">
                ${script.game.imageUrl ? `<img src="${script.game.imageUrl}" class="game-image" alt="${script.game.name}">` : ''}
                <span class="game-name">${script.game.name}</span>
            </div>
        ` : ''}
        
        <div class="script-info">
            <div class="info-item">
                <i class="fas fa-eye"></i>
                <span>${script.views?.toLocaleString() || 0} views</span>
            </div>
            <div class="info-item">
                <i class="far fa-calendar"></i>
                <span>${formattedDate}</span>
            </div>
            <div class="info-item">
                <i class="fas fa-code"></i>
                <span>${script.scriptType || 'Script'}</span>
            </div>
        </div>
        
       
        
        <div class="script-actions">
            <button class="action-btn copy" data-script-id="${card.dataset.scriptId}">
                <i class="fas fa-copy"></i> Copy Script
            </button>
            <button class="action-btn view" data-script-id="${card.dataset.scriptId}">
                <i class="fas fa-external-link-alt"></i> To Editor
            </button>
        </div>
    `;


                    window.scriptCache = window.scriptCache || {};
                    window.scriptCache[card.dataset.scriptId] = {
                        title: script.title,
                        content: script.script || '',
                        originalScript: script
                    };


                    const copyBtn = card.querySelector('.action-btn.copy');
                    const viewBtn = card.querySelector('.action-btn.view');

                    copyBtn.addEventListener('click', function () {
                        const scriptId = this.dataset.scriptId;
                        const scriptData = window.scriptCache[scriptId];
                        if (scriptData) {
                            copyToClipboard(scriptData.content);
                        }
                    });

                    viewBtn.addEventListener('click', function () {
                        const scriptId = this.dataset.scriptId;
                        const scriptData = window.scriptCache[scriptId];
                        if (scriptData) {
                            openInEditor(scriptData.title, scriptData.content);
                        }
                    });

                    return card;
                }


                function addPagination(totalPages) {
                    const container = document.getElementById('scriptsContainer');
                    const pagination = document.createElement('div');
                    pagination.className = 'pagination';

                    pagination.innerHTML = `
                <button class="page-btn" id="prevPage" ${currentPage === 1 ? 'disabled' : ''}>
                    <i class="fas fa-chevron-left"></i> Previous
                </button>
                <span class="page-info">Page ${currentPage} of ${totalPages}</span>
                <button class="page-btn" id="nextPage" ${currentPage === totalPages ? 'disabled' : ''}>
                    Next <i class="fas fa-chevron-right"></i>
                </button>
            `;

                    container.appendChild(pagination);

                    document.getElementById('prevPage').addEventListener('click', () => {
                        if (currentPage > 1) {
                            currentPage--;
                            if (currentSearchQuery) {
                                searchScripts(currentSearchQuery);
                            } else {
                                fetchRecentScripts();
                            }
                        }
                    });

                    document.getElementById('nextPage').addEventListener('click', () => {
                        if (currentPage < totalPages) {
                            currentPage++;
                            if (currentSearchQuery) {
                                searchScripts(currentSearchQuery);
                            } else {
                                fetchRecentScripts();
                            }
                        }
                    });
                }


                function applyFilters() {

                    if (currentSearchQuery) {
                        searchScripts(currentSearchQuery);
                    } else {
                        fetchRecentScripts();
                    }
                }


                function copyToClipboard(scriptContent) {

                    const decodedContent = scriptContent.replace(/\\'/g, "'");
                    navigator.clipboard.writeText(decodedContent)
                        .then(() => {
                            showNotification('Script copied to clipboard!', 'success');
                        })
                        .catch(err => {
                            console.error('Failed to copy:', err);
                            showNotification('Failed to copy script', 'error');
                        });
                }


                function openInEditor(title, content) {

                    const decodedTitle = title.replace(/\\'/g, "'");
                    const decodedContent = content.replace(/\\'/g, "'");


                    switchToHomeTab();


                    createNewTab(decodedTitle.replace(/\.lua$/, '') || 'Script', decodedContent);

                    showNotification(`"${decodedTitle}" opened in editor`, 'success');
                }


                function truncateText(text, maxLength) {
                    if (text.length <= maxLength) return text;
                    return text.substring(0, maxLength) + '...';
                }

                function escapeHtml(text) {
                    const div = document.createElement('div');
                    div.textContent = text;
                    return div.innerHTML;
                }

                function escapeSingleQuotes(text) {
                    return text.replace(/'/g, "\\'");
                }
            