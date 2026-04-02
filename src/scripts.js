// scripts.js - NO IMPORTS, JUST PLAIN JAVASCRIPT
console.log('Velocity Executor Loaded');

class TabManager {
    constructor() {
        this.tabs = [];
        this.activeTabId = null;
        this.tabCounter = 1;
        this.init();
    }

    init() {
        const savedTabs = localStorage.getItem('codeExecutorTabs');
        if (savedTabs) {
            try {
                this.tabs = JSON.parse(savedTabs);
                if (this.tabs.length > 0) {
                    this.activeTabId = this.tabs[0].id;
                    this.renderTabs();
                }
            } catch (e) {
                console.error('Failed to load tabs:', e);
            }
        }
        
        if (this.tabs.length === 0) {
            this.createTab('print("Get Velocity Today")');
        }
    }

    createTab(content = '', title = null) {
        const tabId = Date.now();
        const tabTitle = title || `Script ${this.tabCounter++}`;
        
        const tab = {
            id: tabId,
            title: tabTitle,
            content: content || 'print("Get Velocity Today")',
            language: 'python'
        };

        this.tabs.push(tab);
        this.activeTabId = tabId;
        this.renderTabs();
        this.saveTabs();
        
        // Load content into editor if available
        if (window.monacoEditor) {
            if (window.USE_ACE) {
                window.monacoEditor.setValue(tab.content, -1);
            } else {
                window.monacoEditor.setValue(tab.content);
            }
        }
        
        return tabId;
    }

    renderTabs() {
        const tabsContainer = document.getElementById('tabs-container');
        if (!tabsContainer) return;
        
        tabsContainer.innerHTML = '';
        
        this.tabs.forEach(tab => {
            const tabElement = document.createElement('div');
            tabElement.className = `tab ${tab.id === this.activeTabId ? 'active' : ''}`;
            tabElement.innerHTML = `
                <span class="tab-title">${tab.title}</span>
                <svg class="tab-close" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                </svg>
            `;
            
            tabElement.addEventListener('click', (e) => {
                if (!e.target.closest('.tab-close')) {
                    this.switchTab(tab.id);
                }
            });
            
            const closeBtn = tabElement.querySelector('.tab-close');
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.closeTab(tab.id);
            });
            
            tabsContainer.appendChild(tabElement);
        });
        
        // Add new tab button
        const newTabBtn = document.createElement('div');
        newTabBtn.className = 'new-tab';
        newTabBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
            </svg>
        `;
        newTabBtn.addEventListener('click', () => this.createTab());
        tabsContainer.appendChild(newTabBtn);
    }

    switchTab(tabId) {
        if (this.activeTabId === tabId) return;
        
        // Save current tab content
        const currentTab = this.tabs.find(t => t.id === this.activeTabId);
        if (currentTab && window.monacoEditor) {
            currentTab.content = window.monacoEditor.getValue();
        }
        
        this.activeTabId = tabId;
        this.renderTabs();
        
        // Load new tab content
        const tab = this.tabs.find(t => t.id === tabId);
        if (tab && window.monacoEditor) {
            if (window.USE_ACE) {
                window.monacoEditor.setValue(tab.content, -1);
            } else {
                window.monacoEditor.setValue(tab.content);
            }
        }
        
        this.saveTabs();
    }

    closeTab(tabId) {
        const tabIndex = this.tabs.findIndex(t => t.id === tabId);
        if (tabIndex === -1) return;
        
        // If closing active tab, switch to another
        if (this.activeTabId === tabId) {
            const nextTab = this.tabs[tabIndex + 1] || this.tabs[tabIndex - 1];
            if (nextTab) {
                this.switchTab(nextTab.id);
            }
        }
        
        // Remove tab
        this.tabs.splice(tabIndex, 1);
        
        // If no tabs left, create a new one
        if (this.tabs.length === 0) {
            this.createTab();
        }
        
        this.renderTabs();
        this.saveTabs();
    }

    saveTabs() {
        localStorage.setItem('codeExecutorTabs', JSON.stringify(this.tabs));
    }
}

class EditorManager {
    constructor() {
        this.editor = null;
        this.isMinimized = false;
    }

    async init() {
        if (window.USE_ACE) {
            await this.loadAce();
        } else {
            await this.loadMonaco();
        }
        this.setupEditor();
        this.setupEventListeners();
    }

    loadMonaco() {
        return new Promise((resolve) => {
            if (window.monaco) {
                resolve();
                return;
            }
            
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.43.0/min/vs/loader.min.js';
            script.onload = () => {
                require.config({ 
                    paths: { 
                        vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.43.0/min/vs' 
                    } 
                });
                
                require(['vs/editor/editor.main'], () => {
                    resolve();
                });
            };
            document.head.appendChild(script);
        });
    }

    loadAce() {
        return new Promise((resolve) => {
            if (window.ace) {
                resolve();
                return;
            }
            
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.32.2/ace.js';
            script.onload = () => {
                resolve();
            };
            document.head.appendChild(script);
        });
    }

    setupEditor() {
        const container = document.getElementById('monaco-container');
        if (!container) {
            console.error('Editor container not found');
            return;
        }
        
        if (window.USE_ACE) {
            this.editor = ace.edit(container);
            this.editor.setTheme("ace/theme/tomorrow_night_eighties");
            this.editor.session.setMode("ace/mode/python");
            this.editor.setOptions({
                fontSize: "14px",
                fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
                showPrintMargin: false,
                useWorker: false // Disable worker to avoid cross-domain issues with CDN
            });
            this.editor.setValue('print("Get Velocity Today")', -1);
        } else {
            this.editor = monaco.editor.create(container, {
                value: 'print("Get Velocity Today")',
                language: 'python',
                theme: 'vs-dark',
                automaticLayout: true,
                fontSize: 14,
                fontFamily: "'Consolas', 'Monaco', 'Courier New', monospace",
                minimap: { enabled: true },
                lineNumbers: 'on'
            });
        }
        
        window.monacoEditor = this.editor;
    }

    setupEventListeners() {
        // Window controls
        const minimizeBtn = document.getElementById('minimize-btn');
        const maximizeBtn = document.getElementById('maximize-btn');
        const closeBtn = document.getElementById('close-btn');
        
        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', () => this.toggleMinimize());
        }
        
        if (maximizeBtn) {
            maximizeBtn.addEventListener('click', () => {
                console.log('Maximize clicked');
                // Will add Tauri functionality later
            });
        }
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                console.log('Close clicked');
                // Will add Tauri functionality later
            });
        }
        
        // Control buttons
        const executeBtn = document.getElementById('execute-btn');
        const clearBtn = document.getElementById('clear-btn');
        const saveBtn = document.getElementById('save-btn');
        const openBtn = document.getElementById('open-btn');
        const injectBtn = document.getElementById('inject-btn');
        
        if (executeBtn) {
            executeBtn.addEventListener('click', () => this.executeCode());
        }
        
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearEditor());
        }
        
        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveFile());
        }
        
        if (openBtn) {
            openBtn.addEventListener('click', () => this.openFile());
        }
        
        if (injectBtn) {
            injectBtn.addEventListener('click', () => this.injectCode());
        }
    }

    toggleMinimize() {
        this.isMinimized = !this.isMinimized;
        const notice = document.getElementById('minimized-notice');
        const editorContent = document.querySelector('.editor-content');
        
        if (this.isMinimized) {
            if (notice) notice.classList.remove('hidden');
            if (editorContent) editorContent.style.display = 'none';
            if (this.editor) {
                if (window.USE_ACE) {
                    // Ace doesn't really have a layout(0,0) equivalent that hides it like this
                } else {
                    this.editor.layout({ width: 0, height: 0 });
                }
            }
        } else {
            if (notice) notice.classList.add('hidden');
            if (editorContent) editorContent.style.display = 'flex';
            if (this.editor) {
                if (window.USE_ACE) {
                    this.editor.resize();
                } else {
                    this.editor.layout();
                }
            }
        }
    }

    executeCode() {
        const code = this.editor.getValue();
        console.log('Executing code:', code);
        
        const status = document.getElementById('status-indicator');
        if (status) {
            status.innerHTML = '<span class="status-dot" style="background: #00cc88"></span> Executing...';
            
            setTimeout(() => {
                status.innerHTML = '<span class="status-dot"></span> Ready';
            }, 2000);
        }
    }

    clearEditor() {
        if (this.editor) {
            this.editor.setValue('');
        }
    }

    saveFile() {
        const content = this.editor.getValue();
        console.log('Saving file:', content);
        
        // Browser fallback
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `script_${Date.now()}.lua`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    openFile() {
        console.log('Open file clicked');
        // Will implement file dialog later
        alert('File open functionality will be added with Tauri integration');
    }

    injectCode() {
        console.log('Inject clicked');
        const status = document.getElementById('status-indicator');
        if (status) {
            status.innerHTML = '<span class="status-dot" style="background: #4a6bff"></span> Injecting...';
            
            setTimeout(() => {
                status.innerHTML = '<span class="status-dot"></span> Ready';
            }, 1500);
        }
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Velocity Executor...');
    
    // Initialize managers
    window.tabManager = new TabManager();
    window.editorManager = new EditorManager();
    
    // Start editor
    window.editorManager.init();
    
    // Set initial status
    const status = document.getElementById('status-indicator');
    if (status) {
        status.innerHTML = '<span class="status-dot"></span> Ready';
    }
});