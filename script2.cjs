

                let isLoggedIn = false;

                function initLogin() {

                    const savedLogin = false; //localStorage.getItem('elune_login')
                    if (savedLogin) {

                        //   isLoggedIn = true;


                        //   LogToConsole(`Welcome back, ${username}`); dont ask bro


                        // hideLogin();
                        return;
                    }

                    showLogin();
                }
                // SIMPLE MANUAL USERNAME SYSTEM
                async function fetchDesktopName() {
                    try {
                        console.log('Fetching desktop name...');

                        // Get username from system
                        const username = await window.__TAURI__.core.invoke('get_simple_username');
                        console.log('System username:', username);

                        // Get computer name
                        const computerName = await window.__TAURI__.core.invoke('get_computer_name');
                        console.log('Computer name:', computerName);

                        // Display in profile
                        updateProfileWithSystemInfo(username, computerName);

                        return { username, computerName };
                    } catch (error) {
                        console.error('Failed to fetch desktop name:', error);
                        return { username: 'Unknown', computerName: 'Unknown' };
                    }
                }

                function updateProfileWithSystemInfo(username, computerName) {
                    // Update profile username
                    const profileUsername = document.getElementById('profileUsername');
                    if (profileUsername) {
                        profileUsername.textContent = username || 'System User';
                    }

                    // Update plan section with computer info
                    const profilePlan = document.getElementById('profilePlan');
                    if (profilePlan) {
                        profilePlan.textContent = `Computer: ${computerName}`;
                    }

                    // Update other profile sections
                    const keyDuration = document.getElementById('keyDuration');
                    if (keyDuration) {
                        //   keyDuration.textContent = `User: ${username}`;
                    }

                    const atlantisStatus = document.getElementById('atlantisStatus');
                    if (atlantisStatus) {
                        // atlantisStatus.textContent = `Running on: ${computerName}`;
                    }
                }

                // Fetch desktop name when profile tab is clicked
                document.querySelector('.tab-button[data-tab="profile"]')?.addEventListener('click', async function () {
                    await fetchDesktopName();
                });

                // Or fetch on startup
                document.addEventListener('DOMContentLoaded', async function () {
                    setTimeout(async () => {
                        await fetchDesktopName();
                    }, 2000);
                });

                // Function to update profile username
                function updateProfileUsername(username) {
                    console.log('Setting username to:', username);

                    // Update the main profile display
                    const profileUsername = document.getElementById('profileUsername');
                    if (profileUsername) {
                        profileUsername.textContent = username;
                    }

                    // Also update any other places that show the username
                    document.querySelectorAll('.username-display').forEach(el => {
                        el.textContent = username;
                    });

                    // Save to localStorage again (just in case)
                    localStorage.setItem('user_username', username);
                }

                // Initialize when DOM is ready
                document.addEventListener('DOMContentLoaded', function () {
                    setTimeout(() => {
                        setupSimpleUsernameSystem();
                    }, 500);
                });

                // Simple function to change username (can call from anywhere)
                window.setUsername = function (username) {
                    localStorage.setItem('user_username', username);
                    updateProfileUsername(username);
                    showNotification(`Username set to: ${username}`, 'success');
                };
                function showLogin() {
                    const loginScreen = document.getElementById('login-screen');
                    if (loginScreen) {
                        loginScreen.classList.remove('hidden');


                    }
                }

                function hideLogin() {
                    const loginScreen = document.getElementById('login-screen');
                    if (loginScreen) {
                        loginScreen.classList.add('hidden');
                    }


                    document.body.style.opacity = '1';
                }


                document.getElementById('loginForm')?.addEventListener('submit', function (e) {
                    e.preventDefault();


                    const password = document.getElementById('loginPassword').value;
                    const errorEl = document.getElementById('loginError');


                    errorEl.classList.remove('show');


                    // Removed password requirement


                    const success = true; // password == "Free4TheWeek";

                    if (success) {

                        localStorage.setItem('atlantis_login', JSON.stringify({

                            timestamp: Date.now(),
                            guest: false
                        }));


                        hideLogin();



                    } else {
                        errorEl.textContent = 'Invalid credentials';
                        errorEl.classList.add('show');
                    }
                });


                document.getElementById('guestLogin')?.addEventListener('click', function () {

                    localStorage.setItem('atlantis_login', JSON.stringify({
                        username: 'ay',
                        timestamp: Date.now(),
                        guest: true
                    }));


                    hideLogin();


                    LogToConsole('guest session started'); //dw
                });




                document.getElementById('loginPassword')?.addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') {
                        document.getElementById('loginSubmit').click();
                    }
                });


                function logout() {
                    localStorage.removeItem('atlantis_login');
                    isLoggedIn = false;
                    location.reload();
                }


                document.addEventListener('DOMContentLoaded', function () {

                    initLogin();


                    if (isLoggedIn) {
                        //  InitializeAtlantis();
                    }
                });







                function InitializeAtlantis() {

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
                    IniitializeConsole();

                    initializeBackgroundImageSettings();
                }

                (function () {
                    console.log('initializng tauri');


                    const isTauri = typeof window.__TAURI_INTERNALS__ !== 'undefined';



                    window.__TAURI__ = window.__TAURI__ || {};

                    if (isTauri) {

                        setupTauriV2();
                    } else {
                        console.log('Tauri setup failed');

                    }

                    function setupTauriV2() {
                        try {
                            const internals = window.__TAURI_INTERNALS__;


                            let invokeFn = null;


                            if (typeof window.__TAURI_INTERNALS__?.invoke === 'function') {
                                invokeFn = window.__TAURI_INTERNALS__.invoke;

                            } else if (internals.ipc && typeof internals.ipc.invoke === 'function') {
                                invokeFn = internals.ipc.invoke;

                            } else if (typeof window.__TAURI__?.core?.invoke === 'function') {
                                invokeFn = window.__TAURI__.core.invoke;

                            } else {

                                for (const key in internals) {
                                    if (typeof internals[key] === 'function' &&
                                        key.toLowerCase().includes('invoke')) {
                                        invokeFn = internals[key];
                                        //  console.log(`Found invoke at ${key}`);
                                        break;
                                    }
                                }
                            }

                            if (!invokeFn) {
                                console.error('Could not find invoke in tauri');

                                setupBrowserFallbacks();
                                return;
                            }




                            window.__TAURI__.core = {
                                invoke: async function (cmd, args = {}) {
                                    console.log(`[TAURI] Invoking command: ${cmd}`, args);
                                    try {

                                        return await invokeFn(cmd, args);
                                    } catch (error) {
                                        console.error(`[TAURI] Invoke failed for ${cmd}:`, error);
                                        throw error;
                                    }
                                }
                            };


                            window.__TAURI__.window = {
                                appWindow: {
                                    minimize: async function () {
                                        return await window.__TAURI__.core.invoke('minimize_window');
                                    },
                                    maximize: async function () {
                                        return await window.__TAURI__.core.invoke('maximize_window');
                                    },
                                    unmaximize: async function () {
                                        return await window.__TAURI__.core.invoke('maximize_window');
                                    },
                                    close: async function () {
                                        return await window.__TAURI__.core.invoke('close_window');
                                    }
                                }
                            };

                            console.log('Tauri initialized successfully');

                        } catch (error) {
                            console.error('Failed to initialize tauri', error);

                        }
                    }


                })();
            