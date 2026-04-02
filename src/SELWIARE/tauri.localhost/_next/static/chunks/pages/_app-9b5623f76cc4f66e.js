(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[636], {
    76: (e, t, i) => {
        "use strict";
        i.d(t, {
            D4: () => u,
            Ic: () => l,
            KT: () => a,
            Oo: () => o,
            es: () => s
        });
        var s, n = i(4899);
        async function r(e, t) {
            window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(e, t),
            await (0,
            n.lA)("plugin:event|unlisten", {
                event: e,
                eventId: t
            })
        }
        async function a(e, t, i) {
            var s;
            let a = "string" == typeof (null == i ? void 0 : i.target) ? {
                kind: "AnyLabel",
                label: i.target
            } : null != (s = null == i ? void 0 : i.target) ? s : {
                kind: "Any"
            };
            return (0,
            n.lA)("plugin:event|listen", {
                event: e,
                target: a,
                handler: (0,
                n.yw)(t)
            }).then(t => async () => r(e, t))
        }
        async function o(e, t, i) {
            return a(e, i => {
                r(e, i.id),
                t(i)
            }
            , i)
        }
        async function l(e, t) {
            await (0,
            n.lA)("plugin:event|emit", {
                event: e,
                payload: t
            })
        }
        async function u(e, t, i) {
            await (0,
            n.lA)("plugin:event|emit_to", {
                target: "string" == typeof e ? {
                    kind: "AnyLabel",
                    label: e
                } : e,
                event: t,
                payload: i
            })
        }
        !function(e) {
            e.WINDOW_RESIZED = "tauri://resize",
            e.WINDOW_MOVED = "tauri://move",
            e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested",
            e.WINDOW_DESTROYED = "tauri://destroyed",
            e.WINDOW_FOCUS = "tauri://focus",
            e.WINDOW_BLUR = "tauri://blur",
            e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change",
            e.WINDOW_THEME_CHANGED = "tauri://theme-changed",
            e.WINDOW_CREATED = "tauri://window-created",
            e.WEBVIEW_CREATED = "tauri://webview-created",
            e.DRAG_ENTER = "tauri://drag-enter",
            e.DRAG_OVER = "tauri://drag-over",
            e.DRAG_DROP = "tauri://drag-drop",
            e.DRAG_LEAVE = "tauri://drag-leave"
        }(s || (s = {}))
    }
    ,
    92: (e, t, i) => {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return i(6467)
        }
        ])
    }
    ,
    181: (e, t, i) => {
        "use strict";
        i.d(t, {
            E: () => n
        });
        var s = i(4232);
        let n = i(2205).B ? s.useLayoutEffect : s.useEffect
    }
    ,
    460: (e, t, i) => {
        "use strict";
        i.d(t, {
            $: () => n
        });
        var s = i(7876);
        let n = {
            api: {
                baseUrl: "https://seliware.com/v2"
            },
            windows: {
                sizes: {
                    width: 1130,
                    height: 650
                },
                debug: {
                    offsetX: 570,
                    offsetY: 0
                }
            },
            sidebar: {
                minWidth: 360
            },
            notifications: {
                empty: {
                    title: "",
                    description: "",
                    icon: (0,
                    s.jsx)(s.Fragment, {}),
                    showDiscord: !1
                },
                updater: {
                    title: "Updater",
                    description: "Checking for updates...",
                    icon: (0,
                    s.jsx)("svg", {
                        width: "39",
                        height: "38",
                        viewBox: "0 0 39 38",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        s.jsx)("path", {
                            d: "M19.5 4.75C16.1123 4.75 13.1154 6.08108 10.9637 7.93682C9.14464 9.50562 7.82639 11.5465 7.48779 13.5969C3.50642 14.4759 0.5 17.9434 0.5 22.1307C0.5 26.9942 4.5554 30.875 9.48047 30.875H30.6328C34.943 30.875 38.5 27.4775 38.5 23.2102C38.5 19.3243 35.5505 16.1598 31.7685 15.6251C31.1928 9.49867 25.8893 4.75 19.5 4.75ZM25.0897 21.0272L20.3397 25.7772C19.8759 26.2409 19.1241 26.2409 18.6603 25.7772L13.9103 21.0272C13.4466 20.5634 13.4466 19.8116 13.9103 19.3478C14.3741 18.8841 15.1259 18.8841 15.5897 19.3478L18.3125 22.0706V13.0625C18.3125 12.4067 18.8442 11.875 19.5 11.875C20.1558 11.875 20.6875 12.4067 20.6875 13.0625V22.0706L23.4103 19.3478C23.8741 18.8841 24.6259 18.8841 25.0897 19.3478C25.5534 19.8116 25.5534 20.5634 25.0897 21.0272Z",
                            fill: "#ADCBE4"
                        })
                    }),
                    showDiscord: !1
                },
                authorization: {
                    title: "Seliware 2.0 is being prepared",
                    description: "Authorization required",
                    icon: (0,
                    s.jsxs)("svg", {
                        width: "39",
                        height: "38",
                        viewBox: "0 0 39 38",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [" ", (0,
                        s.jsx)("path", {
                            d: "M3.66667 38C3.66667 38 0.5 38 0.5 34.8333C0.5 31.6667 3.66667 22.1667 19.5 22.1667C35.3333 22.1667 38.5 31.6667 38.5 34.8333C38.5 38 35.3333 38 35.3333 38H3.66667Z",
                            fill: "#ADCBE4"
                        }), " ", (0,
                        s.jsx)("path", {
                            d: "M19.5 19C24.7467 19 29 14.7467 29 9.5C29 4.25329 24.7467 0 19.5 0C14.2533 0 10 4.25329 10 9.5C10 14.7467 14.2533 19 19.5 19Z",
                            fill: "#ADCBE4"
                        }), " "]
                    }),
                    showDiscord: !1
                },
                authorization_email: {
                    title: "Checking email",
                    description: "Please wait...",
                    icon: (0,
                    s.jsx)("svg", {
                        width: "39",
                        height: "38",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        s.jsx)("path", {
                            d: "M19.6597 10.832C19.6597 6.38184 16.2861 3.28516 11.436 3.28516C6.41162 3.28516 2.96631 6.76123 2.96631 11.8369C2.96631 17.0767 6.31934 20.3989 11.6104 20.3989C12.9023 20.3989 14.1431 20.2144 15.0659 19.8965V18.6045C14.4199 18.9019 13.0356 19.0967 11.6309 19.0967C7.24219 19.0967 4.41211 16.2769 4.41211 11.8984C4.41211 7.63281 7.29346 4.57715 11.3027 4.57715C15.4043 4.57715 18.2139 7.10986 18.2139 10.8115C18.2139 13.334 17.3833 14.9644 16.0913 14.9644C15.353 14.9644 14.9326 14.5439 14.9326 13.8262V7.80713H13.3843V9.05811H13.2202C12.8203 8.16602 11.8975 7.6123 10.8208 7.6123C8.71875 7.6123 7.25244 9.35547 7.25244 11.8472C7.25244 14.4517 8.68799 16.2051 10.8208 16.2051C12.0205 16.2051 12.9434 15.6206 13.3843 14.5747H13.5483C13.6714 15.5796 14.6045 16.2974 15.8042 16.2974C18.1626 16.2974 19.6597 14.1748 19.6597 10.832ZM8.89307 11.8882C8.89307 10.0938 9.70312 9.02734 11.0771 9.02734C12.4717 9.02734 13.3638 10.1348 13.3638 11.8882C13.3638 13.6416 12.4614 14.7593 11.0566 14.7593C9.71338 14.7593 8.89307 13.6724 8.89307 11.8882Z",
                            fill: "#ADCBE4"
                        })
                    }),
                    showDiscord: !1
                },
                authorization_signin: {
                    title: "Sign In",
                    description: "Please wait...",
                    icon: (0,
                    s.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "39",
                        height: "38",
                        fill: "#ADCBE4",
                        viewBox: "0 0 16 16",
                        children: (0,
                        s.jsx)("path", {
                            d: "M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                        })
                    }),
                    showDiscord: !1
                },
                authorization_signup: {
                    title: "SIGNUP1",
                    description: "Please wait...",
                    icon: (0,
                    s.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "39",
                        height: "38",
                        fill: "#ADCBE4",
                        viewBox: "0 0 16 16",
                        children: (0,
                        s.jsx)("path", {
                            d: "M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                        })
                    }),
                    showDiscord: !1
                },
                attached_devices: {
                    title: "Ready to Attach",
                    description: "0 clients connected",
                    icon: (0,
                    s.jsx)("svg", {
                        width: "45",
                        height: "44",
                        viewBox: "0 0 45 44",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        s.jsx)("path", {
                            d: "M5.52798 24.4172L24.9734 5.41374C29.2692 1.2156 36.234 1.2156 40.5298 5.41374C44.8255 9.61188 44.8255 16.4184 40.5298 20.6165L21.0843 39.62C16.7886 43.8182 9.82374 43.8182 5.52798 39.62C1.23221 35.4219 1.23221 28.6154 5.52798 24.4172ZM30.6294 26.4912L38.5852 18.7162C41.807 15.5676 41.807 10.4627 38.5852 7.31409C35.3634 4.16549 30.1398 4.16549 26.918 7.31409L18.9622 15.0891L30.6294 26.4912Z",
                            fill: "#ADCBE4"
                        })
                    }),
                    showDiscord: !1
                },
                patched: {
                    title: "Seliware is currently down",
                    description: "We are updating. Back soon",
                    icon: (0,
                    s.jsx)("svg", {
                        width: "45",
                        height: "44",
                        viewBox: "0 0 45 44",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        s.jsx)("path", {
                            d: "M5.52798 24.4172L24.9734 5.41374C29.2692 1.2156 36.234 1.2156 40.5298 5.41374C44.8255 9.61188 44.8255 16.4184 40.5298 20.6165L21.0843 39.62C16.7886 43.8182 9.82374 43.8182 5.52798 39.62C1.23221 35.4219 1.23221 28.6154 5.52798 24.4172ZM30.6294 26.4912L38.5852 18.7162C41.807 15.5676 41.807 10.4627 38.5852 7.31409C35.3634 4.16549 30.1398 4.16549 26.918 7.31409L18.9622 15.0891L30.6294 26.4912Z",
                            fill: "#ADCBE4"
                        })
                    }),
                    showDiscord: !0
                },
                inject_failed: {
                    title: "Injection failed",
                    description: "Check Journal for more details",
                    icon: (0,
                    s.jsx)("svg", {
                        width: "45",
                        height: "44",
                        viewBox: "0 0 45 44",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        s.jsx)("path", {
                            d: "M5.52798 24.4172L24.9734 5.41374C29.2692 1.2156 36.234 1.2156 40.5298 5.41374C44.8255 9.61188 44.8255 16.4184 40.5298 20.6165L21.0843 39.62C16.7886 43.8182 9.82374 43.8182 5.52798 39.62C1.23221 35.4219 1.23221 28.6154 5.52798 24.4172ZM30.6294 26.4912L38.5852 18.7162C41.807 15.5676 41.807 10.4627 38.5852 7.31409C35.3634 4.16549 30.1398 4.16549 26.918 7.31409L18.9622 15.0891L30.6294 26.4912Z",
                            fill: "#ADCBE4"
                        })
                    }),
                    showDiscord: !0
                },
                core_message: {
                    title: "Core",
                    description: "Check Journal for more details",
                    icon: (0,
                    s.jsx)("svg", {
                        width: "45",
                        height: "44",
                        viewBox: "0 0 45 44",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        s.jsx)("path", {
                            d: "M5.52798 24.4172L24.9734 5.41374C29.2692 1.2156 36.234 1.2156 40.5298 5.41374C44.8255 9.61188 44.8255 16.4184 40.5298 20.6165L21.0843 39.62C16.7886 43.8182 9.82374 43.8182 5.52798 39.62C1.23221 35.4219 1.23221 28.6154 5.52798 24.4172ZM30.6294 26.4912L38.5852 18.7162C41.807 15.5676 41.807 10.4627 38.5852 7.31409C35.3634 4.16549 30.1398 4.16549 26.918 7.31409L18.9622 15.0891L30.6294 26.4912Z",
                            fill: "#ADCBE4"
                        })
                    }),
                    showDiscord: !0
                },
                error: {
                    title: "Error",
                    description: "Connection failed",
                    icon: (0,
                    s.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "39",
                        height: "38",
                        fill: "none",
                        viewBox: "0 0 16 16",
                        children: (0,
                        s.jsx)("path", {
                            "fill-rule": "evenodd",
                            d: "M3.112 5.112a3 3 0 0 0-.17.613C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13H11zm11.372 7.372L4.937 2.937A5.5 5.5 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773a3.2 3.2 0 0 1-1.516 2.711m-.838 1.87-12-12 .708-.708 12 12z",
                            fill: "#ADCBE4"
                        })
                    }),
                    showDiscord: !1
                },
                filetree_folder: {
                    title: "Folder",
                    description: "Test",
                    icon: (0,
                    s.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "39",
                        height: "38",
                        fill: "#ADCBE4",
                        viewBox: "0 0 16 16",
                        children: (0,
                        s.jsx)("path", {
                            d: "M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z"
                        })
                    }),
                    showDiscord: !1
                }
            }
        }
    }
    ,
    1059: (e, t, i) => {
        "use strict";
        i.d(t, {
            F: () => a
        });
        var s = i(4899)
          , n = i(460);
        async function r(e, t, i) {
            let n = "";
            try {
                n = await (0,
                s.lA)("read_registry_value", {
                    subkey: "SOFTWARE\\Seliware",
                    valueName: "auth_token"
                })
            } catch (e) {
                console.log("something went wrong with authToken", e)
            }
            return await (0,
            s.lA)("make_request", {
                url: e,
                method: t,
                body: i,
                authToken: n
            })
        }
        let a = {
            getRobloxAvatar: async e => await r("https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=".concat(e, "&size=48x48&format=Png&isCircular=false"), "GET", void 0),
            get: async e => await r(n.$.api.baseUrl + e, "GET", void 0),
            post: async (e, t) => await r(n.$.api.baseUrl + e, "POST", t),
            delete: async (e, t) => await r(n.$.api.baseUrl + e, "DELETE", t)
        }
    }
    ,
    1200: (e, t, i) => {
        "use strict";
        i.d(t, {
            M: () => n
        });
        var s = i(4232);
        function n(e) {
            let t = (0,
            s.useRef)(null);
            return null === t.current && (t.current = e()),
            t.current
        }
    }
    ,
    1543: (e, t, i) => {
        "use strict";
        i.d(t, {
            C: () => a
        });
        var s = i(8106)
          , n = i(4319);
        let r = {
            hydrated: !1,
            sidebar: {
                size: 430,
                current: "file_tree",
                show: !0,
                showSidebarItems: !0
            },
            settings: {
                current: "editor",
                show: !1
            },
            profile: {
                show: !1
            }
        }
          , a = (0,
        s.v)()((0,
        n.Zr)( (e, t) => ({
            ...r,
            hydrated: !1,
            setShowSidebar: i => e({
                sidebar: {
                    ...t().sidebar,
                    show: i
                }
            }),
            setShowSidebarItems: i => e({
                sidebar: {
                    ...t().sidebar,
                    showSidebarItems: i
                }
            }),
            setSize: i => e({
                sidebar: {
                    ...t().sidebar,
                    size: i
                }
            }),
            setCurrent: i => e({
                sidebar: {
                    ...t().sidebar,
                    current: i
                }
            }),
            setShowSettings: i => e({
                settings: {
                    ...t().settings,
                    show: i
                }
            }),
            setCurrentSetting: i => e({
                settings: {
                    ...t().settings,
                    current: i
                }
            }),
            setShowProfile: i => e({
                profile: {
                    ...t().profile,
                    show: i
                }
            })
        }), {
            name: "app",
            partialize: e => ({
                sidebar: e.sidebar,
                settings: {
                    current: r.settings.current,
                    show: r.settings.show
                }
            })
        }))
          , o = a.persist;
        void 0 !== o && o.hasHydrated() && a.setState({
            hydrated: !0
        })
    }
    ,
    1829: (e, t, i) => {
        "use strict";
        i.d(t, {
            a: () => r
        });
        var s = i(4899);
        class n extends s.FW {
            constructor(e) {
                super(e)
            }
            static async new(e, t, i) {
                return (0,
                s.lA)("plugin:image|new", {
                    rgba: r(e),
                    width: t,
                    height: i
                }).then(e => new n(e))
            }
            static async fromBytes(e) {
                return (0,
                s.lA)("plugin:image|from_bytes", {
                    bytes: r(e)
                }).then(e => new n(e))
            }
            static async fromPath(e) {
                return (0,
                s.lA)("plugin:image|from_path", {
                    path: e
                }).then(e => new n(e))
            }
            async rgba() {
                return (0,
                s.lA)("plugin:image|rgba", {
                    rid: this.rid
                }).then(e => new Uint8Array(e))
            }
            async size() {
                return (0,
                s.lA)("plugin:image|size", {
                    rid: this.rid
                })
            }
        }
        function r(e) {
            return null == e ? null : "string" == typeof e ? e : e instanceof n ? e.rid : e
        }
    }
    ,
    2082: () => {}
    ,
    2205: (e, t, i) => {
        "use strict";
        i.d(t, {
            B: () => s
        });
        let s = "undefined" != typeof window
    }
    ,
    2347: (e, t, i) => {
        "use strict";
        i.d(t, {
            Lv: () => r,
            or: () => a,
            xl: () => l,
            yX: () => u
        });
        var s = i(4899);
        class n {
            constructor(...e) {
                this.type = "Logical",
                1 === e.length ? "Logical"in e[0] ? (this.width = e[0].Logical.width,
                this.height = e[0].Logical.height) : (this.width = e[0].width,
                this.height = e[0].height) : (this.width = e[0],
                this.height = e[1])
            }
            toPhysical(e) {
                return new r(this.width * e,this.height * e)
            }
            [s.$c]() {
                return {
                    width: this.width,
                    height: this.height
                }
            }
            toJSON() {
                return this[s.$c]()
            }
        }
        class r {
            constructor(...e) {
                this.type = "Physical",
                1 === e.length ? "Physical"in e[0] ? (this.width = e[0].Physical.width,
                this.height = e[0].Physical.height) : (this.width = e[0].width,
                this.height = e[0].height) : (this.width = e[0],
                this.height = e[1])
            }
            toLogical(e) {
                return new n(this.width / e,this.height / e)
            }
            [s.$c]() {
                return {
                    width: this.width,
                    height: this.height
                }
            }
            toJSON() {
                return this[s.$c]()
            }
        }
        class a {
            constructor(e) {
                this.size = e
            }
            toLogical(e) {
                return this.size instanceof n ? this.size : this.size.toLogical(e)
            }
            toPhysical(e) {
                return this.size instanceof r ? this.size : this.size.toPhysical(e)
            }
            [s.$c]() {
                return {
                    [`${this.size.type}`]: {
                        width: this.size.width,
                        height: this.size.height
                    }
                }
            }
            toJSON() {
                return this[s.$c]()
            }
        }
        class o {
            constructor(...e) {
                this.type = "Logical",
                1 === e.length ? "Logical"in e[0] ? (this.x = e[0].Logical.x,
                this.y = e[0].Logical.y) : (this.x = e[0].x,
                this.y = e[0].y) : (this.x = e[0],
                this.y = e[1])
            }
            toPhysical(e) {
                return new l(this.x * e,this.y * e)
            }
            [s.$c]() {
                return {
                    x: this.x,
                    y: this.y
                }
            }
            toJSON() {
                return this[s.$c]()
            }
        }
        class l {
            constructor(...e) {
                this.type = "Physical",
                1 === e.length ? "Physical"in e[0] ? (this.x = e[0].Physical.x,
                this.y = e[0].Physical.y) : (this.x = e[0].x,
                this.y = e[0].y) : (this.x = e[0],
                this.y = e[1])
            }
            toLogical(e) {
                return new o(this.x / e,this.y / e)
            }
            [s.$c]() {
                return {
                    x: this.x,
                    y: this.y
                }
            }
            toJSON() {
                return this[s.$c]()
            }
        }
        class u {
            constructor(e) {
                this.position = e
            }
            toLogical(e) {
                return this.position instanceof o ? this.position : this.position.toLogical(e)
            }
            toPhysical(e) {
                return this.position instanceof l ? this.position : this.position.toPhysical(e)
            }
            [s.$c]() {
                return {
                    [`${this.position.type}`]: {
                        x: this.position.x,
                        y: this.position.y
                    }
                }
            }
            toJSON() {
                return this[s.$c]()
            }
        }
    }
    ,
    2638: (e, t, i) => {
        "use strict";
        i.d(t, {
            A: () => a,
            w: () => o
        });
        var s = i(7876)
          , n = i(4232);
        let r = (0,
        n.createContext)(null);
        function a(e) {
            let {children: t} = e
              , [i,a] = (0,
            n.useState)(null);
            return (0,
            s.jsx)(r.Provider, {
                value: {
                    openId: i,
                    setOpenId: a
                },
                children: t
            })
        }
        function o() {
            let e = (0,
            n.useContext)(r);
            if (!e)
                throw Error("useTooltipContext must be used within TooltipProvider");
            return e
        }
    }
    ,
    3021: () => {}
    ,
    3216: (e, t, i) => {
        !function() {
            var t = {
                845: function(e, t, s) {
                    var n = void 0 !== i.g && i.g || "undefined" != typeof self && self || window
                      , r = Function.prototype.apply;
                    function a(e, t) {
                        this._id = e,
                        this._clearFn = t
                    }
                    t.setTimeout = function() {
                        return new a(r.call(setTimeout, n, arguments),clearTimeout)
                    }
                    ,
                    t.setInterval = function() {
                        return new a(r.call(setInterval, n, arguments),clearInterval)
                    }
                    ,
                    t.clearTimeout = t.clearInterval = function(e) {
                        e && e.close()
                    }
                    ,
                    a.prototype.unref = a.prototype.ref = function() {}
                    ,
                    a.prototype.close = function() {
                        this._clearFn.call(n, this._id)
                    }
                    ,
                    t.enroll = function(e, t) {
                        clearTimeout(e._idleTimeoutId),
                        e._idleTimeout = t
                    }
                    ,
                    t.unenroll = function(e) {
                        clearTimeout(e._idleTimeoutId),
                        e._idleTimeout = -1
                    }
                    ,
                    t._unrefActive = t.active = function(e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                            e._onTimeout && e._onTimeout()
                        }, t))
                    }
                    ,
                    s(505),
                    t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== i.g && i.g.setImmediate || this && this.setImmediate,
                    t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== i.g && i.g.clearImmediate || this && this.clearImmediate
                },
                505: function(e) {
                    "use strict";
                    e.exports = i(7348)
                }
            }
              , s = {};
            function n(e) {
                var i = s[e];
                if (void 0 !== i)
                    return i.exports;
                var r = s[e] = {
                    exports: {}
                }
                  , a = !0;
                try {
                    t[e].call(r.exports, r, r.exports, n),
                    a = !1
                } finally {
                    a && delete s[e]
                }
                return r.exports
            }
            n.ab = "//",
            e.exports = n(845)
        }()
    }
    ,
    3866: (e, t, i) => {
        "use strict";
        i.d(t, {
            t: () => s
        });
        let s = (0,
        i(4232).createContext)(null)
    }
    ,
    3885: (e, t, i) => {
        "use strict";
        i.d(t, {
            xQ: () => r
        });
        var s = i(4232)
          , n = i(3866);
        function r(e=!0) {
            let t = (0,
            s.useContext)(n.t);
            if (null === t)
                return [!0, null];
            let {isPresent: i, onExitComplete: a, register: o} = t
              , l = (0,
            s.useId)();
            (0,
            s.useEffect)( () => {
                if (e)
                    return o(l)
            }
            , [e]);
            let u = (0,
            s.useCallback)( () => e && a && a(l), [l, a, e]);
            return !i && a ? [!1, u] : [!0]
        }
    }
    ,
    4125: (e, t, i) => {
        "use strict";
        i.d(t, {
            u: () => s
        });
        let s = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return "object" == typeof e && null !== e && "request_stack"in e ? function(e, t) {
                var i, s, n;
                let r = null != (n = e.message) ? n : "Unknown error"
                  , a = e.cause ? "[".concat(e.cause, "] ") : ""
                  , o = (null == (i = e.request_stack) ? void 0 : i.message) ? " — ".concat(e.request_stack.message) : "";
                return t && (null == (s = e.request_stack) ? void 0 : s.message) ? e.request_stack.message : "".concat(a).concat(r).concat(o)
            }(e, t) : function(e) {
                if (!e)
                    return "Unknown error";
                if (e instanceof Error)
                    return e.message;
                if ("string" == typeof e)
                    return e;
                if ("object" == typeof e && null !== e) {
                    let t = e.message;
                    if ("string" == typeof t)
                        return t;
                    let i = e.request_stack;
                    if ("object" == typeof i && null !== i && "string" == typeof i.message)
                        return i.message;
                    let s = e.cause;
                    return "string" == typeof s ? s : JSON.stringify(e)
                }
                return String(e)
            }(e)
        }
    }
    ,
    4319: (e, t, i) => {
        "use strict";
        i.d(t, {
            Zr: () => n
        });
        let s = e => t => {
            try {
                let i = e(t);
                if (i instanceof Promise)
                    return i;
                return {
                    then: e => s(e)(i),
                    catch(e) {
                        return this
                    }
                }
            } catch (e) {
                return {
                    then(e) {
                        return this
                    },
                    catch: t => s(t)(e)
                }
            }
        }
          , n = (e, t) => (i, n, r) => {
            let a, o = {
                storage: function(e, t) {
                    let i;
                    try {
                        i = e()
                    } catch (e) {
                        return
                    }
                    return {
                        getItem: e => {
                            var t;
                            let s = e => null === e ? null : JSON.parse(e, void 0)
                              , n = null != (t = i.getItem(e)) ? t : null;
                            return n instanceof Promise ? n.then(s) : s(n)
                        }
                        ,
                        setItem: (e, t) => i.setItem(e, JSON.stringify(t, void 0)),
                        removeItem: e => i.removeItem(e)
                    }
                }( () => localStorage),
                partialize: e => e,
                version: 0,
                merge: (e, t) => ({
                    ...t,
                    ...e
                }),
                ...t
            }, l = !1, u = new Set, c = new Set, h = o.storage;
            if (!h)
                return e( (...e) => {
                    console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),
                    i(...e)
                }
                , n, r);
            let d = () => {
                let e = o.partialize({
                    ...n()
                });
                return h.setItem(o.name, {
                    state: e,
                    version: o.version
                })
            }
              , m = r.setState;
            r.setState = (e, t) => (m(e, t),
            d());
            let p = e( (...e) => (i(...e),
            d()), n, r);
            r.getInitialState = () => p;
            let f = () => {
                var e, t;
                if (!h)
                    return;
                l = !1,
                u.forEach(e => {
                    var t;
                    return e(null != (t = n()) ? t : p)
                }
                );
                let r = (null == (t = o.onRehydrateStorage) ? void 0 : t.call(o, null != (e = n()) ? e : p)) || void 0;
                return s(h.getItem.bind(h))(o.name).then(e => {
                    if (e)
                        if ("number" != typeof e.version || e.version === o.version)
                            return [!1, e.state];
                        else {
                            if (o.migrate) {
                                let t = o.migrate(e.state, e.version);
                                return t instanceof Promise ? t.then(e => [!0, e]) : [!0, t]
                            }
                            console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                        }
                    return [!1, void 0]
                }
                ).then(e => {
                    var t;
                    let[s,r] = e;
                    if (i(a = o.merge(r, null != (t = n()) ? t : p), !0),
                    s)
                        return d()
                }
                ).then( () => {
                    null == r || r(a, void 0),
                    a = n(),
                    l = !0,
                    c.forEach(e => e(a))
                }
                ).catch(e => {
                    null == r || r(void 0, e)
                }
                )
            }
            ;
            return r.persist = {
                setOptions: e => {
                    o = {
                        ...o,
                        ...e
                    },
                    e.storage && (h = e.storage)
                }
                ,
                clearStorage: () => {
                    null == h || h.removeItem(o.name)
                }
                ,
                getOptions: () => o,
                rehydrate: () => f(),
                hasHydrated: () => l,
                onHydrate: e => (u.add(e),
                () => {
                    u.delete(e)
                }
                ),
                onFinishHydration: e => (c.add(e),
                () => {
                    c.delete(e)
                }
                )
            },
            o.skipHydration || f(),
            a || p
        }
    }
    ,
    4397: (e, t, i) => {
        "use strict";
        i.d(t, {
            i: () => a
        });
        var s = i(7876)
          , n = i(460)
          , r = i(3216);
        let a = (0,
        i(8106).v)( (e, t) => {
            let i = "updater"
              , a = i && i in n.$.notifications ? {
                ...n.$.notifications[i],
                showDiscord: !1
            } : {
                title: "",
                description: "",
                icon: (0,
                s.jsx)(s.Fragment, {}),
                showDiscord: !1
            };
            return {
                defaultState: i,
                text: a,
                show: !0,
                timeoutId: void 0,
                visible: !0,
                showNotification: i => {
                    e({
                        defaultState: "empty"
                    }),
                    t().visible && (console.log({
                        text: i,
                        visible: !0,
                        show: !0
                    }),
                    e({
                        text: i,
                        visible: !0,
                        show: !0
                    }))
                }
                ,
                showTempNotification: e => {
                    console.log(e, "NOTIFICATION");
                    let i = t().defaultState;
                    t().showNotification(e),
                    (0,
                    r.setTimeout)( () => {
                        t().changeVisibility(!1, i),
                        t().changeVisibility(!0, i)
                    }
                    , 5e3)
                }
                ,
                changeDefaultValues: i => {
                    var s, n, a, o;
                    if (console.log("[nigganptof] triggered change default values", i),
                    !t().visible)
                        return;
                    let {text: l} = t()
                      , u = {
                        text: {
                            title: null != (s = i.title) ? s : l.title,
                            description: null != (n = i.description) ? n : l.description,
                            icon: null != (a = i.icon) ? a : l.icon,
                            showDiscord: null != (o = i.showDiscord) ? o : l.showDiscord
                        },
                        show: !0
                    };
                    if (!i.animate)
                        return void e(u);
                    e({
                        show: !1
                    });
                    let c = (0,
                    r.setTimeout)( () => e(u), 500);
                    e({
                        timeoutId: c
                    })
                }
                ,
                changeVisibility: (i, s, r) => {
                    var a;
                    t().timeoutId && clearTimeout(t().timeoutId),
                    console.log("[NOTIFICATION] triggered change visibility", i, s);
                    let o = null != s ? s : t().defaultState;
                    e({
                        show: !1,
                        visible: !1
                    }),
                    e({
                        defaultState: o,
                        text: {
                            title: n.$.notifications[o].title,
                            description: null != r ? r : n.$.notifications[o].description,
                            icon: n.$.notifications[o].icon,
                            showDiscord: null != (a = n.$.notifications[o].showDiscord) && a
                        },
                        visible: !0,
                        show: i
                    })
                }
                ,
                changeDefaultState: i => {
                    console.log("[NOTIFICATION] triggered change default state", i),
                    t().timeoutId && clearTimeout(t().timeoutId),
                    t().visible && (e({
                        show: !1,
                        defaultState: i
                    }),
                    t().removeNotification({
                        state: i,
                        duration: 500
                    }))
                }
                ,
                removeNotification: function() {
                    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        duration: 0
                    };
                    t().timeoutId && clearTimeout(t().timeoutId);
                    let {state: s, duration: a} = i;
                    if (!t().visible)
                        return;
                    let o = (0,
                    r.setTimeout)( () => {
                        let i = null != s ? s : t().defaultState;
                        if (!i || !(i in n.$.notifications))
                            return e({
                                show: !1
                            });
                        e({
                            text: {
                                title: n.$.notifications[i].title,
                                description: n.$.notifications[i].description,
                                icon: n.$.notifications[i].icon,
                                showDiscord: !1
                            },
                            show: !0
                        })
                    }
                    , a);
                    e({
                        timeoutId: o
                    })
                }
            }
        }
        )
    }
    ,
    4579: (e, t, i) => {
        "use strict";
        i.d(t, {
            W: () => o
        });
        var s = i(8106)
          , n = i(4319)
          , r = i(6234);
        let a = {
            editing: !1,
            current: 0,
            tabs: [{
                id: 0,
                tabNumber: 0,
                title: r.tU.TabTitleByType.tab,
                additionalTitle: null,
                editing: !1,
                value: "-- Hello! This is your first tab. You can edit tab name by clicking on it twice, or can add, select, or remove tabs."
            }],
            tabModels: new Map
        }
          , o = (0,
        s.v)()((0,
        n.Zr)( (e, t) => ({
            ...a,
            hydrated: !1,
            addTab: i => {
                let {title: s, value: n, additionalTitle: a} = i;
                console.log("[TABS] add tab", a);
                let o = t().tabs
                  , l = 0;
                for (; o.some(e => e.id === l); )
                    l++;
                let u = null != s ? s : r.tU.TabTitleByType.tab
                  , c = 0;
                if (null == u)
                    for (; o.some(e => e.tabNumber === c); )
                        c++;
                let h = {
                    id: l,
                    tabNumber: c,
                    title: null != s ? s : r.tU.TabTitleByType.tab,
                    editing: !1,
                    value: null != n ? n : ""
                };
                e( () => ({
                    current: h.id,
                    tabs: [...t().tabs.map(e => e.id === t().current ? {
                        ...e,
                        editing: !1
                    } : e), h]
                }))
            }
            ,
            selectTab: i => {
                i !== t().current && e( () => ({
                    current: i,
                    tabs: t().tabs.map(e => e.id === t().current ? {
                        ...e,
                        editing: !1
                    } : e)
                }))
            }
            ,
            closeTab: i => {
                var s, n;
                let r = null != (s = t().tabs.find(e => e.id === i)) ? s : null
                  , a = null != (n = t().tabs.find(e => e.id === t().current)) ? n : null
                  , o = t().tabs.findIndex(e => e.id === i);
                if (r) {
                    console.log("[TABS] close tab: closing tab", r),
                    console.log("[TABS] close tab: tabs count", t().tabs.length);
                    let s = t().tabs.filter(e => e.id !== i);
                    if (console.log("[TABS] close tab: tabs count after closing", s.length),
                    s.length > 0)
                        if (s.length > 1) {
                            if (console.log("[TABS] close tab: tabs count after closing length > 1", s.length),
                            a) {
                                let s = 0 == o ? o + 1 : o - 1;
                                e(e => ({
                                    current: r.id !== a.id ? t().current : t().tabs[s].id,
                                    tabs: e.tabs.filter(e => e.id !== i)
                                }))
                            }
                        } else
                            console.log("[TABS] close tab: tabs count after closing length == 1", s.length),
                            e(e => ({
                                current: s[0].id,
                                tabs: e.tabs.filter(e => e.id !== i)
                            }))
                }
            }
            ,
            setTabModel: (e, i) => {
                t().tabModels.set(e, i)
            }
            ,
            setTabValue: i => {
                e( () => ({
                    tabs: t().tabs.map(e => e.id === t().current ? {
                        ...e,
                        value: i
                    } : e)
                }))
            }
            ,
            editTabToggle: (t, i) => e(e => ({
                tabs: e.tabs.map(e => e.id === t ? {
                    ...e,
                    editing: i
                } : {
                    ...e,
                    editing: !1
                })
            })),
            editTabTitle: (i, s) => {
                e( () => ({
                    tabs: t().tabs.map(e => e.id === i ? "" === s ? {
                        ...e,
                        title: e.title,
                        editing: !1
                    } : {
                        ...e,
                        title: s,
                        editing: !1
                    } : e)
                }))
            }
            ,
            removeAllTabs: () => {
                e(a)
            }
        }), {
            name: "tabs",
            partialize: e => ({
                hydrated: !1,
                current: e.current,
                tabs: e.tabs
            }),
            onRehydrateStorage: () => (e, t) => {
                t ? console.log("[TABS] an error happened during hydration", t) : e && (console.log("[TABS] hydration starts"),
                console.log("[TABS] tabs count", e.tabs.length),
                console.log("[TABS] current tab", e.tabs.find(t => t.id === e.current)),
                console.log("[TABS] hydration finished"))
            }
        }))
          , l = o.persist;
        void 0 !== l && l.hasHydrated() && o.setState({
            hydrated: !0
        })
    }
    ,
    4769: (e, t, i) => {
        "use strict";
        i.d(t, {
            a: () => r
        });
        var s = i(8106);
        let n = {
            coreUpdateDisabled: !1,
            patched: !1,
            needToHidePatchNotification: !1,
            sidebarPosition: "left",
            editor: {
                font: {
                    defaultFont: "JetBrains Mono Regular",
                    family: "JetBrains Mono Regular",
                    size: 14,
                    sizes: [12, 13, 14, 16, 20, 24]
                },
                minimap: !0
            },
            journal: {
                show: !1,
                hasError: !1,
                items: []
            }
        }
          , r = (0,
        s.v)( (e, t) => ({
            ...n,
            hydrated: !1,
            setIsPatched: t => e({
                patched: t
            }),
            setHidePatchNotification: t => e({
                needToHidePatchNotification: t
            }),
            setSidebarPosition: t => e({
                sidebarPosition: t
            }),
            setEditorFontFamily: i => e({
                editor: {
                    ...t().editor,
                    font: {
                        ...t().editor.font,
                        family: i
                    }
                }
            }),
            setEditorFontSize: i => e({
                editor: {
                    ...t().editor,
                    font: {
                        ...t().editor.font,
                        size: i
                    }
                }
            }),
            setEditorMinimap: i => e({
                editor: {
                    ...t().editor,
                    minimap: i
                }
            }),
            toggleEditorMinimap: () => e({
                editor: {
                    ...t().editor,
                    minimap: !t().editor.minimap
                }
            }),
            setCoreUpdateDisabled: t => e({
                coreUpdateDisabled: t
            }),
            setShowJournal: i => e({
                journal: {
                    ...t().journal,
                    show: i
                }
            }),
            setJournalHasError: i => e({
                journal: {
                    ...t().journal,
                    hasError: i
                }
            }),
            addToJournal: (i, s) => e(e => {
                let n = [...e.journal.items, {
                    type: i,
                    message: s,
                    timestamp: Math.floor(Date.now() / 1e3)
                }];
                return n.length > 100 && n.shift(),
                {
                    journal: {
                        ...e.journal,
                        hasError: !t().journal.show && "error" === i,
                        items: n
                    }
                }
            }
            )
        }))
    }
    ,
    4899: (e, t, i) => {
        "use strict";
        i.d(t, {
            $c: () => u,
            FW: () => m,
            c3: () => h,
            lA: () => d,
            yw: () => c
        });
        var s, n, r, a, o, l = i(9551);
        let u = "__TAURI_TO_IPC_KEY__";
        function c(e, t=!1) {
            return window.__TAURI_INTERNALS__.transformCallback(e, t)
        }
        class h {
            constructor(e) {
                s.set(this, void 0),
                n.set(this, 0),
                r.set(this, []),
                a.set(this, void 0),
                (0,
                l.G)(this, s, e || ( () => {}
                ), "f"),
                this.id = c(e => {
                    let t = e.index;
                    if ("end"in e)
                        return void (t == (0,
                        l.g)(this, n, "f") ? this.cleanupCallback() : (0,
                        l.G)(this, a, t, "f"));
                    let i = e.message;
                    if (t == (0,
                    l.g)(this, n, "f")) {
                        for ((0,
                        l.g)(this, s, "f").call(this, i),
                        (0,
                        l.G)(this, n, (0,
                        l.g)(this, n, "f") + 1, "f"); (0,
                        l.g)(this, n, "f")in (0,
                        l.g)(this, r, "f"); ) {
                            let e = (0,
                            l.g)(this, r, "f")[(0,
                            l.g)(this, n, "f")];
                            (0,
                            l.g)(this, s, "f").call(this, e),
                            delete (0,
                            l.g)(this, r, "f")[(0,
                            l.g)(this, n, "f")],
                            (0,
                            l.G)(this, n, (0,
                            l.g)(this, n, "f") + 1, "f")
                        }
                        (0,
                        l.g)(this, n, "f") === (0,
                        l.g)(this, a, "f") && this.cleanupCallback()
                    } else
                        (0,
                        l.g)(this, r, "f")[t] = i
                }
                )
            }
            cleanupCallback() {
                window.__TAURI_INTERNALS__.unregisterCallback(this.id)
            }
            set onmessage(e) {
                (0,
                l.G)(this, s, e, "f")
            }
            get onmessage() {
                return (0,
                l.g)(this, s, "f")
            }
            [(s = new WeakMap,
            n = new WeakMap,
            r = new WeakMap,
            a = new WeakMap,
            u)]() {
                return `__CHANNEL__:${this.id}`
            }
            toJSON() {
                return this[u]()
            }
        }
        async function d(e, t={}, i) {
            return window.__TAURI_INTERNALS__.invoke(e, t, i)
        }
        class m {
            get rid() {
                return (0,
                l.g)(this, o, "f")
            }
            constructor(e) {
                o.set(this, void 0),
                (0,
                l.G)(this, o, e, "f")
            }
            async close() {
                return d("plugin:resources|close", {
                    rid: this.rid
                })
            }
        }
        o = new WeakMap
    }
    ,
    5039: (e, t) => {
        var i;
        !function() {
            "use strict";
            var s = {}.hasOwnProperty;
            function n() {
                for (var e = "", t = 0; t < arguments.length; t++) {
                    var i = arguments[t];
                    i && (e = r(e, function(e) {
                        if ("string" == typeof e || "number" == typeof e)
                            return e;
                        if ("object" != typeof e)
                            return "";
                        if (Array.isArray(e))
                            return n.apply(null, e);
                        if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]"))
                            return e.toString();
                        var t = "";
                        for (var i in e)
                            s.call(e, i) && e[i] && (t = r(t, i));
                        return t
                    }(i)))
                }
                return e
            }
            function r(e, t) {
                return t ? e ? e + " " + t : e + t : e
            }
            e.exports ? (n.default = n,
            e.exports = n) : void 0 === (i = (function() {
                return n
            }
            ).apply(t, [])) || (e.exports = i)
        }()
    }
    ,
    5048: (e, t, i) => {
        "use strict";
        i.d(t, {
            L: () => s
        });
        let s = (0,
        i(4232).createContext)({})
    }
    ,
    5784: (e, t, i) => {
        "use strict";
        i.d(t, {
            N: () => w
        });
        var s = i(7876)
          , n = i(4232)
          , r = i(5048)
          , a = i(1200)
          , o = i(181)
          , l = i(3866)
          , u = i(7990)
          , c = i(9751);
        function h(e, t) {
            if ("function" == typeof e)
                return e(t);
            null != e && (e.current = t)
        }
        class d extends n.Component {
            getSnapshotBeforeUpdate(e) {
                let t = this.props.childRef.current;
                if (t && e.isPresent && !this.props.isPresent) {
                    let e = t.offsetParent
                      , i = (0,
                    u.s)(e) && e.offsetWidth || 0
                      , s = this.props.sizeRef.current;
                    s.height = t.offsetHeight || 0,
                    s.width = t.offsetWidth || 0,
                    s.top = t.offsetTop,
                    s.left = t.offsetLeft,
                    s.right = i - s.width - s.left
                }
                return null
            }
            componentDidUpdate() {}
            render() {
                return this.props.children
            }
        }
        function m({children: e, isPresent: t, anchorX: i, root: r}) {
            let a = (0,
            n.useId)()
              , o = (0,
            n.useRef)(null)
              , l = (0,
            n.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0
            })
              , {nonce: u} = (0,
            n.useContext)(c.Q)
              , m = function(...e) {
                return n.useCallback(function(...e) {
                    return t => {
                        let i = !1
                          , s = e.map(e => {
                            let s = h(e, t);
                            return i || "function" != typeof s || (i = !0),
                            s
                        }
                        );
                        if (i)
                            return () => {
                                for (let t = 0; t < s.length; t++) {
                                    let i = s[t];
                                    "function" == typeof i ? i() : h(e[t], null)
                                }
                            }
                    }
                }(...e), e)
            }(o, e?.ref);
            return (0,
            n.useInsertionEffect)( () => {
                let {width: e, height: s, top: n, left: c, right: h} = l.current;
                if (t || !o.current || !e || !s)
                    return;
                let d = "left" === i ? `left: ${c}` : `right: ${h}`;
                o.current.dataset.motionPopId = a;
                let m = document.createElement("style");
                u && (m.nonce = u);
                let p = r ?? document.head;
                return p.appendChild(m),
                m.sheet && m.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            ${d}px !important;
            top: ${n}px !important;
          }
        `),
                () => {
                    p.contains(m) && p.removeChild(m)
                }
            }
            , [t]),
            (0,
            s.jsx)(d, {
                isPresent: t,
                childRef: o,
                sizeRef: l,
                children: n.cloneElement(e, {
                    ref: m
                })
            })
        }
        let p = ({children: e, initial: t, isPresent: i, onExitComplete: r, custom: o, presenceAffectsLayout: u, mode: c, anchorX: h, root: d}) => {
            let p = (0,
            a.M)(f)
              , g = (0,
            n.useId)()
              , y = !0
              , v = (0,
            n.useMemo)( () => (y = !1,
            {
                id: g,
                initial: t,
                isPresent: i,
                custom: o,
                onExitComplete: e => {
                    for (let t of (p.set(e, !0),
                    p.values()))
                        if (!t)
                            return;
                    r && r()
                }
                ,
                register: e => (p.set(e, !1),
                () => p.delete(e))
            }), [i, p, r]);
            return u && y && (v = {
                ...v
            }),
            (0,
            n.useMemo)( () => {
                p.forEach( (e, t) => p.set(t, !1))
            }
            , [i]),
            n.useEffect( () => {
                i || p.size || !r || r()
            }
            , [i]),
            "popLayout" === c && (e = (0,
            s.jsx)(m, {
                isPresent: i,
                anchorX: h,
                root: d,
                children: e
            })),
            (0,
            s.jsx)(l.t.Provider, {
                value: v,
                children: e
            })
        }
        ;
        function f() {
            return new Map
        }
        var g = i(3885);
        let y = e => e.key || "";
        function v(e) {
            let t = [];
            return n.Children.forEach(e, e => {
                (0,
                n.isValidElement)(e) && t.push(e)
            }
            ),
            t
        }
        let w = ({children: e, custom: t, initial: i=!0, onExitComplete: l, presenceAffectsLayout: u=!0, mode: c="sync", propagate: h=!1, anchorX: d="left", root: m}) => {
            let[f,w] = (0,
            g.xQ)(h)
              , x = (0,
            n.useMemo)( () => v(e), [e])
              , C = h && !f ? [] : x.map(y)
              , b = (0,
            n.useRef)(!0)
              , L = (0,
            n.useRef)(x)
              , j = (0,
            a.M)( () => new Map)
              , [T,k] = (0,
            n.useState)(x)
              , [S,E] = (0,
            n.useState)(x);
            (0,
            o.E)( () => {
                b.current = !1,
                L.current = x;
                for (let e = 0; e < S.length; e++) {
                    let t = y(S[e]);
                    C.includes(t) ? j.delete(t) : !0 !== j.get(t) && j.set(t, !1)
                }
            }
            , [S, C.length, C.join("-")]);
            let M = [];
            if (x !== T) {
                let e = [...x];
                for (let t = 0; t < S.length; t++) {
                    let i = S[t]
                      , s = y(i);
                    C.includes(s) || (e.splice(t, 0, i),
                    M.push(i))
                }
                return "wait" === c && M.length && (e = M),
                E(v(e)),
                k(x),
                null
            }
            let {forceRender: A} = (0,
            n.useContext)(r.L);
            return (0,
            s.jsx)(s.Fragment, {
                children: S.map(e => {
                    let n = y(e)
                      , r = (!h || !!f) && (x === S || C.includes(n));
                    return (0,
                    s.jsx)(p, {
                        isPresent: r,
                        initial: (!b.current || !!i) && void 0,
                        custom: t,
                        presenceAffectsLayout: u,
                        mode: c,
                        root: m,
                        onExitComplete: r ? void 0 : () => {
                            if (!j.has(n))
                                return;
                            j.set(n, !0);
                            let e = !0;
                            j.forEach(t => {
                                t || (e = !1)
                            }
                            ),
                            e && (A?.(),
                            E(L.current),
                            h && w?.(),
                            l && l())
                        }
                        ,
                        anchorX: d,
                        children: e
                    }, n)
                }
                )
            })
        }
    }
    ,
    6079: () => {}
    ,
    6234: (e, t, i) => {
        "use strict";
        var s;
        i.d(t, {
            Z_: () => n,
            tU: () => s
        }),
        function(e) {
            e.TabIconByType = {
                tab: "file",
                settings: "settings",
                scripts: "gamepad"
            },
            e.TabTitleByType = {
                tab: null,
                settings: "Settings",
                scripts: "Scripts"
            },
            e.TabClassNameByType = {
                tab: "!bg-[var(--additional-red)] !shadow-[inset_0_0_0_2px_var(--accent-red)]",
                settings: "!bg-[var(--additional-red)] !shadow-[inset_0_0_0_2px_var(--accent-red)]",
                scripts: "!bg-[rgb(var(--additional-gray))] !shadow-[inset_0_0_0_2px_rgb(var(--gray))]"
            }
        }(s || (s = {}));
        let n = {
            ui: "UI",
            core: "Core"
        }
    }
    ,
    6467: (e, t, i) => {
        "use strict";
        let s;
        i.r(t),
        i.d(t, {
            default: () => sq
        });
        var n = i(7876)
          , r = i(8325);
        i(3021),
        i(6079),
        i(8792),
        i(2082);
        var a = i(9099)
          , o = i(4232)
          , l = i(9148)
          , u = i(4899);
        async function c() {
            await (0,
            u.lA)("plugin:process|restart")
        }
        class h extends Error {
        }
        class d extends h {
            constructor(e) {
                super(`Invalid DateTime: ${e.toMessage()}`)
            }
        }
        class m extends h {
            constructor(e) {
                super(`Invalid Interval: ${e.toMessage()}`)
            }
        }
        class p extends h {
            constructor(e) {
                super(`Invalid Duration: ${e.toMessage()}`)
            }
        }
        class f extends h {
        }
        class g extends h {
            constructor(e) {
                super(`Invalid unit ${e}`)
            }
        }
        class y extends h {
        }
        class v extends h {
            constructor() {
                super("Zone is an abstract class")
            }
        }
        let w = "numeric"
          , x = "short"
          , C = "long"
          , b = {
            year: w,
            month: w,
            day: w
        }
          , L = {
            year: w,
            month: x,
            day: w
        }
          , j = {
            year: w,
            month: x,
            day: w,
            weekday: x
        }
          , T = {
            year: w,
            month: C,
            day: w
        }
          , k = {
            year: w,
            month: C,
            day: w,
            weekday: C
        }
          , S = {
            hour: w,
            minute: w
        }
          , E = {
            hour: w,
            minute: w,
            second: w
        }
          , M = {
            hour: w,
            minute: w,
            second: w,
            timeZoneName: x
        }
          , A = {
            hour: w,
            minute: w,
            second: w,
            timeZoneName: C
        }
          , N = {
            hour: w,
            minute: w,
            hourCycle: "h23"
        }
          , D = {
            hour: w,
            minute: w,
            second: w,
            hourCycle: "h23"
        }
          , _ = {
            hour: w,
            minute: w,
            second: w,
            hourCycle: "h23",
            timeZoneName: x
        }
          , V = {
            hour: w,
            minute: w,
            second: w,
            hourCycle: "h23",
            timeZoneName: C
        }
          , P = {
            year: w,
            month: w,
            day: w,
            hour: w,
            minute: w
        }
          , O = {
            year: w,
            month: w,
            day: w,
            hour: w,
            minute: w,
            second: w
        }
          , I = {
            year: w,
            month: x,
            day: w,
            hour: w,
            minute: w
        }
          , F = {
            year: w,
            month: x,
            day: w,
            hour: w,
            minute: w,
            second: w
        }
          , R = {
            year: w,
            month: x,
            day: w,
            weekday: x,
            hour: w,
            minute: w
        }
          , B = {
            year: w,
            month: C,
            day: w,
            hour: w,
            minute: w,
            timeZoneName: x
        }
          , Z = {
            year: w,
            month: C,
            day: w,
            hour: w,
            minute: w,
            second: w,
            timeZoneName: x
        }
          , W = {
            year: w,
            month: C,
            day: w,
            weekday: C,
            hour: w,
            minute: w,
            timeZoneName: C
        }
          , z = {
            year: w,
            month: C,
            day: w,
            weekday: C,
            hour: w,
            minute: w,
            second: w,
            timeZoneName: C
        };
        class U {
            get type() {
                throw new v
            }
            get name() {
                throw new v
            }
            get ianaName() {
                return this.name
            }
            get isUniversal() {
                throw new v
            }
            offsetName(e, t) {
                throw new v
            }
            formatOffset(e, t) {
                throw new v
            }
            offset(e) {
                throw new v
            }
            equals(e) {
                throw new v
            }
            get isValid() {
                throw new v
            }
        }
        let H = null;
        class $ extends U {
            static get instance() {
                return null === H && (H = new $),
                H
            }
            get type() {
                return "system"
            }
            get name() {
                return new Intl.DateTimeFormat().resolvedOptions().timeZone
            }
            get isUniversal() {
                return !1
            }
            offsetName(e, {format: t, locale: i}) {
                return tt(e, t, i)
            }
            formatOffset(e, t) {
                return tr(this.offset(e), t)
            }
            offset(e) {
                return -new Date(e).getTimezoneOffset()
            }
            equals(e) {
                return "system" === e.type
            }
            get isValid() {
                return !0
            }
        }
        let q = new Map
          , Y = {
            year: 0,
            month: 1,
            day: 2,
            era: 3,
            hour: 4,
            minute: 5,
            second: 6
        }
          , X = new Map;
        class G extends U {
            static create(e) {
                let t = X.get(e);
                return void 0 === t && X.set(e, t = new G(e)),
                t
            }
            static resetCache() {
                X.clear(),
                q.clear()
            }
            static isValidSpecifier(e) {
                return this.isValidZone(e)
            }
            static isValidZone(e) {
                if (!e)
                    return !1;
                try {
                    return new Intl.DateTimeFormat("en-US",{
                        timeZone: e
                    }).format(),
                    !0
                } catch (e) {
                    return !1
                }
            }
            constructor(e) {
                super(),
                this.zoneName = e,
                this.valid = G.isValidZone(e)
            }
            get type() {
                return "iana"
            }
            get name() {
                return this.zoneName
            }
            get isUniversal() {
                return !1
            }
            offsetName(e, {format: t, locale: i}) {
                return tt(e, t, i, this.name)
            }
            formatOffset(e, t) {
                return tr(this.offset(e), t)
            }
            offset(e) {
                var t;
                let i;
                if (!this.valid)
                    return NaN;
                let s = new Date(e);
                if (isNaN(s))
                    return NaN;
                let n = (t = this.name,
                void 0 === (i = q.get(t)) && (i = new Intl.DateTimeFormat("en-US",{
                    hour12: !1,
                    timeZone: t,
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    era: "short"
                }),
                q.set(t, i)),
                i)
                  , [r,a,o,l,u,c,h] = n.formatToParts ? function(e, t) {
                    let i = e.formatToParts(t)
                      , s = [];
                    for (let e = 0; e < i.length; e++) {
                        let {type: t, value: n} = i[e]
                          , r = Y[t];
                        "era" === t ? s[r] = n : eU(r) || (s[r] = parseInt(n, 10))
                    }
                    return s
                }(n, s) : function(e, t) {
                    let i = e.format(t).replace(/\u200E/g, "")
                      , [,s,n,r,a,o,l,u] = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(i);
                    return [r, s, n, a, o, l, u]
                }(n, s);
                "BC" === l && (r = -Math.abs(r) + 1);
                let d = e8({
                    year: r,
                    month: a,
                    day: o,
                    hour: 24 === u ? 0 : u,
                    minute: c,
                    second: h,
                    millisecond: 0
                })
                  , m = +s
                  , p = m % 1e3;
                return (d - (m -= p >= 0 ? p : 1e3 + p)) / 6e4
            }
            equals(e) {
                return "iana" === e.type && e.name === this.name
            }
            get isValid() {
                return this.valid
            }
        }
        let J = {}
          , K = new Map;
        function Q(e, t={}) {
            let i = JSON.stringify([e, t])
              , s = K.get(i);
            return void 0 === s && (s = new Intl.DateTimeFormat(e,t),
            K.set(i, s)),
            s
        }
        let ee = new Map
          , et = new Map
          , ei = null
          , es = new Map;
        function en(e) {
            let t = es.get(e);
            return void 0 === t && (t = new Intl.DateTimeFormat(e).resolvedOptions(),
            es.set(e, t)),
            t
        }
        let er = new Map;
        function ea(e, t, i, s) {
            let n = e.listingMode();
            return "error" === n ? null : "en" === n ? i(t) : s(t)
        }
        class eo {
            constructor(e, t, i) {
                this.padTo = i.padTo || 0,
                this.floor = i.floor || !1;
                let {padTo: s, floor: n, ...r} = i;
                if (!t || Object.keys(r).length > 0) {
                    let t = {
                        useGrouping: !1,
                        ...i
                    };
                    i.padTo > 0 && (t.minimumIntegerDigits = i.padTo),
                    this.inf = function(e, t={}) {
                        let i = JSON.stringify([e, t])
                          , s = ee.get(i);
                        return void 0 === s && (s = new Intl.NumberFormat(e,t),
                        ee.set(i, s)),
                        s
                    }(e, t)
                }
            }
            format(e) {
                if (!this.inf)
                    return eQ(this.floor ? Math.floor(e) : e5(e, 3), this.padTo);
                {
                    let t = this.floor ? Math.floor(e) : e;
                    return this.inf.format(t)
                }
            }
        }
        class el {
            constructor(e, t, i) {
                let s;
                if (this.opts = i,
                this.originalZone = void 0,
                this.opts.timeZone)
                    this.dt = e;
                else if ("fixed" === e.zone.type) {
                    let t = -1 * (e.offset / 60)
                      , i = t >= 0 ? `Etc/GMT+${t}` : `Etc/GMT${t}`;
                    0 !== e.offset && G.create(i).valid ? (s = i,
                    this.dt = e) : (s = "UTC",
                    this.dt = 0 === e.offset ? e : e.setZone("UTC").plus({
                        minutes: e.offset
                    }),
                    this.originalZone = e.zone)
                } else
                    "system" === e.zone.type ? this.dt = e : "iana" === e.zone.type ? (this.dt = e,
                    s = e.zone.name) : (s = "UTC",
                    this.dt = e.setZone("UTC").plus({
                        minutes: e.offset
                    }),
                    this.originalZone = e.zone);
                let n = {
                    ...this.opts
                };
                n.timeZone = n.timeZone || s,
                this.dtf = Q(t, n)
            }
            format() {
                return this.originalZone ? this.formatToParts().map( ({value: e}) => e).join("") : this.dtf.format(this.dt.toJSDate())
            }
            formatToParts() {
                let e = this.dtf.formatToParts(this.dt.toJSDate());
                return this.originalZone ? e.map(e => {
                    if ("timeZoneName" !== e.type)
                        return e;
                    {
                        let t = this.originalZone.offsetName(this.dt.ts, {
                            locale: this.dt.locale,
                            format: this.opts.timeZoneName
                        });
                        return {
                            ...e,
                            value: t
                        }
                    }
                }
                ) : e
            }
            resolvedOptions() {
                return this.dtf.resolvedOptions()
            }
        }
        class eu {
            constructor(e, t, i) {
                this.opts = {
                    style: "long",
                    ...i
                },
                !t && eq() && (this.rtf = function(e, t={}) {
                    let {base: i, ...s} = t
                      , n = JSON.stringify([e, s])
                      , r = et.get(n);
                    return void 0 === r && (r = new Intl.RelativeTimeFormat(e,t),
                    et.set(n, r)),
                    r
                }(e, i))
            }
            format(e, t) {
                return this.rtf ? this.rtf.format(e, t) : function(e, t, i="always", s=!1) {
                    let n = {
                        years: ["year", "yr."],
                        quarters: ["quarter", "qtr."],
                        months: ["month", "mo."],
                        weeks: ["week", "wk."],
                        days: ["day", "day", "days"],
                        hours: ["hour", "hr."],
                        minutes: ["minute", "min."],
                        seconds: ["second", "sec."]
                    }
                      , r = -1 === ["hours", "minutes", "seconds"].indexOf(e);
                    if ("auto" === i && r) {
                        let i = "days" === e;
                        switch (t) {
                        case 1:
                            return i ? "tomorrow" : `next ${n[e][0]}`;
                        case -1:
                            return i ? "yesterday" : `last ${n[e][0]}`;
                        case 0:
                            return i ? "today" : `this ${n[e][0]}`
                        }
                    }
                    let a = Object.is(t, -0) || t < 0
                      , o = Math.abs(t)
                      , l = 1 === o
                      , u = n[e]
                      , c = s ? l ? u[1] : u[2] || u[1] : l ? n[e][0] : e;
                    return a ? `${o} ${c} ago` : `in ${o} ${c}`
                }(t, e, this.opts.numeric, "long" !== this.opts.style)
            }
            formatToParts(e, t) {
                return this.rtf ? this.rtf.formatToParts(e, t) : []
            }
        }
        let ec = {
            firstDay: 1,
            minimalDays: 4,
            weekend: [6, 7]
        };
        class eh {
            static fromOpts(e) {
                return eh.create(e.locale, e.numberingSystem, e.outputCalendar, e.weekSettings, e.defaultToEN)
            }
            static create(e, t, i, s, n=!1) {
                let r = e || eM.defaultLocale
                  , a = r || (n ? "en-US" : ei || (ei = new Intl.DateTimeFormat().resolvedOptions().locale))
                  , o = t || eM.defaultNumberingSystem;
                return new eh(a,o,i || eM.defaultOutputCalendar,eJ(s) || eM.defaultWeekSettings,r)
            }
            static resetCache() {
                ei = null,
                K.clear(),
                ee.clear(),
                et.clear(),
                es.clear(),
                er.clear()
            }
            static fromObject({locale: e, numberingSystem: t, outputCalendar: i, weekSettings: s}={}) {
                return eh.create(e, t, i, s)
            }
            constructor(e, t, i, s, n) {
                let[r,a,o] = function(e) {
                    let t = e.indexOf("-x-");
                    -1 !== t && (e = e.substring(0, t));
                    let i = e.indexOf("-u-");
                    if (-1 === i)
                        return [e];
                    {
                        let t, s;
                        try {
                            t = Q(e).resolvedOptions(),
                            s = e
                        } catch (r) {
                            let n = e.substring(0, i);
                            t = Q(n).resolvedOptions(),
                            s = n
                        }
                        let {numberingSystem: n, calendar: r} = t;
                        return [s, n, r]
                    }
                }(e);
                this.locale = r,
                this.numberingSystem = t || a || null,
                this.outputCalendar = i || o || null,
                this.weekSettings = s,
                this.intl = function(e, t, i) {
                    return (i || t) && (e.includes("-u-") || (e += "-u"),
                    i && (e += `-ca-${i}`),
                    t && (e += `-nu-${t}`)),
                    e
                }(this.locale, this.numberingSystem, this.outputCalendar),
                this.weekdaysCache = {
                    format: {},
                    standalone: {}
                },
                this.monthsCache = {
                    format: {},
                    standalone: {}
                },
                this.meridiemCache = null,
                this.eraCache = {},
                this.specifiedLocale = n,
                this.fastNumbersCached = null
            }
            get fastNumbers() {
                return null == this.fastNumbersCached && (this.fastNumbersCached = (!this.numberingSystem || "latn" === this.numberingSystem) && ("latn" === this.numberingSystem || !this.locale || this.locale.startsWith("en") || "latn" === en(this.locale).numberingSystem)),
                this.fastNumbersCached
            }
            listingMode() {
                let e = this.isEnglish()
                  , t = (null === this.numberingSystem || "latn" === this.numberingSystem) && (null === this.outputCalendar || "gregory" === this.outputCalendar);
                return e && t ? "en" : "intl"
            }
            clone(e) {
                return e && 0 !== Object.getOwnPropertyNames(e).length ? eh.create(e.locale || this.specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, eJ(e.weekSettings) || this.weekSettings, e.defaultToEN || !1) : this
            }
            redefaultToEN(e={}) {
                return this.clone({
                    ...e,
                    defaultToEN: !0
                })
            }
            redefaultToSystem(e={}) {
                return this.clone({
                    ...e,
                    defaultToEN: !1
                })
            }
            months(e, t=!1) {
                return ea(this, e, tc, () => {
                    let i = "ja" === this.intl || this.intl.startsWith("ja-")
                      , s = (t &= !i) ? {
                        month: e,
                        day: "numeric"
                    } : {
                        month: e
                    }
                      , n = t ? "format" : "standalone";
                    if (!this.monthsCache[n][e]) {
                        let t = i ? e => this.dtFormatter(e, s).format() : e => this.extract(e, s, "month");
                        this.monthsCache[n][e] = function(e) {
                            let t = [];
                            for (let i = 1; i <= 12; i++) {
                                let s = i5.utc(2009, i, 1);
                                t.push(e(s))
                            }
                            return t
                        }(t)
                    }
                    return this.monthsCache[n][e]
                }
                )
            }
            weekdays(e, t=!1) {
                return ea(this, e, tp, () => {
                    let i = t ? {
                        weekday: e,
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    } : {
                        weekday: e
                    }
                      , s = t ? "format" : "standalone";
                    return this.weekdaysCache[s][e] || (this.weekdaysCache[s][e] = function(e) {
                        let t = [];
                        for (let i = 1; i <= 7; i++) {
                            let s = i5.utc(2016, 11, 13 + i);
                            t.push(e(s))
                        }
                        return t
                    }(e => this.extract(e, i, "weekday"))),
                    this.weekdaysCache[s][e]
                }
                )
            }
            meridiems() {
                return ea(this, void 0, () => tf, () => {
                    if (!this.meridiemCache) {
                        let e = {
                            hour: "numeric",
                            hourCycle: "h12"
                        };
                        this.meridiemCache = [i5.utc(2016, 11, 13, 9), i5.utc(2016, 11, 13, 19)].map(t => this.extract(t, e, "dayperiod"))
                    }
                    return this.meridiemCache
                }
                )
            }
            eras(e) {
                return ea(this, e, tw, () => {
                    let t = {
                        era: e
                    };
                    return this.eraCache[e] || (this.eraCache[e] = [i5.utc(-40, 1, 1), i5.utc(2017, 1, 1)].map(e => this.extract(e, t, "era"))),
                    this.eraCache[e]
                }
                )
            }
            extract(e, t, i) {
                let s = this.dtFormatter(e, t).formatToParts().find(e => e.type.toLowerCase() === i);
                return s ? s.value : null
            }
            numberFormatter(e={}) {
                return new eo(this.intl,e.forceSimple || this.fastNumbers,e)
            }
            dtFormatter(e, t={}) {
                return new el(e,this.intl,t)
            }
            relFormatter(e={}) {
                return new eu(this.intl,this.isEnglish(),e)
            }
            listFormatter(e={}) {
                return function(e, t={}) {
                    let i = JSON.stringify([e, t])
                      , s = J[i];
                    return s || (s = new Intl.ListFormat(e,t),
                    J[i] = s),
                    s
                }(this.intl, e)
            }
            isEnglish() {
                return "en" === this.locale || "en-us" === this.locale.toLowerCase() || en(this.intl).locale.startsWith("en-us")
            }
            getWeekSettings() {
                if (this.weekSettings)
                    return this.weekSettings;
                if (!eY())
                    return ec;
                var e = this.locale;
                let t = er.get(e);
                if (!t) {
                    let i = new Intl.Locale(e);
                    "minimalDays"in (t = "getWeekInfo"in i ? i.getWeekInfo() : i.weekInfo) || (t = {
                        ...ec,
                        ...t
                    }),
                    er.set(e, t)
                }
                return t
            }
            getStartOfWeek() {
                return this.getWeekSettings().firstDay
            }
            getMinDaysInFirstWeek() {
                return this.getWeekSettings().minimalDays
            }
            getWeekendDays() {
                return this.getWeekSettings().weekend
            }
            equals(e) {
                return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar
            }
            toString() {
                return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`
            }
        }
        let ed = null;
        class em extends U {
            static get utcInstance() {
                return null === ed && (ed = new em(0)),
                ed
            }
            static instance(e) {
                return 0 === e ? em.utcInstance : new em(e)
            }
            static parseSpecifier(e) {
                if (e) {
                    let t = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
                    if (t)
                        return new em(ti(t[1], t[2]))
                }
                return null
            }
            constructor(e) {
                super(),
                this.fixed = e
            }
            get type() {
                return "fixed"
            }
            get name() {
                return 0 === this.fixed ? "UTC" : `UTC${tr(this.fixed, "narrow")}`
            }
            get ianaName() {
                return 0 === this.fixed ? "Etc/UTC" : `Etc/GMT${tr(-this.fixed, "narrow")}`
            }
            offsetName() {
                return this.name
            }
            formatOffset(e, t) {
                return tr(this.fixed, t)
            }
            get isUniversal() {
                return !0
            }
            offset() {
                return this.fixed
            }
            equals(e) {
                return "fixed" === e.type && e.fixed === this.fixed
            }
            get isValid() {
                return !0
            }
        }
        class ep extends U {
            constructor(e) {
                super(),
                this.zoneName = e
            }
            get type() {
                return "invalid"
            }
            get name() {
                return this.zoneName
            }
            get isUniversal() {
                return !1
            }
            offsetName() {
                return null
            }
            formatOffset() {
                return ""
            }
            offset() {
                return NaN
            }
            equals() {
                return !1
            }
            get isValid() {
                return !1
            }
        }
        function ef(e, t) {
            if (eU(e) || null === e)
                return t;
            if (e instanceof U)
                return e;
            if ("string" == typeof e) {
                let i = e.toLowerCase();
                return "default" === i ? t : "local" === i || "system" === i ? $.instance : "utc" === i || "gmt" === i ? em.utcInstance : em.parseSpecifier(i) || G.create(e)
            }
            if (eH(e))
                return em.instance(e);
            if ("object" == typeof e && "offset"in e && "function" == typeof e.offset)
                return e;
            else
                return new ep(e)
        }
        let eg = {
            arab: "[٠-٩]",
            arabext: "[۰-۹]",
            bali: "[᭐-᭙]",
            beng: "[০-৯]",
            deva: "[०-९]",
            fullwide: "[０-９]",
            gujr: "[૦-૯]",
            hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
            khmr: "[០-៩]",
            knda: "[೦-೯]",
            laoo: "[໐-໙]",
            limb: "[᥆-᥏]",
            mlym: "[൦-൯]",
            mong: "[᠐-᠙]",
            mymr: "[၀-၉]",
            orya: "[୦-୯]",
            tamldec: "[௦-௯]",
            telu: "[౦-౯]",
            thai: "[๐-๙]",
            tibt: "[༠-༩]",
            latn: "\\d"
        }
          , ey = {
            arab: [1632, 1641],
            arabext: [1776, 1785],
            bali: [6992, 7001],
            beng: [2534, 2543],
            deva: [2406, 2415],
            fullwide: [65296, 65303],
            gujr: [2790, 2799],
            khmr: [6112, 6121],
            knda: [3302, 3311],
            laoo: [3792, 3801],
            limb: [6470, 6479],
            mlym: [3430, 3439],
            mong: [6160, 6169],
            mymr: [4160, 4169],
            orya: [2918, 2927],
            tamldec: [3046, 3055],
            telu: [3174, 3183],
            thai: [3664, 3673],
            tibt: [3872, 3881]
        }
          , ev = eg.hanidec.replace(/[\[|\]]/g, "").split("")
          , ew = new Map;
        function ex({numberingSystem: e}, t="") {
            let i = e || "latn"
              , s = ew.get(i);
            void 0 === s && (s = new Map,
            ew.set(i, s));
            let n = s.get(t);
            return void 0 === n && (n = RegExp(`${eg[i]}${t}`),
            s.set(t, n)),
            n
        }
        let eC = () => Date.now(), eb = "system", eL = null, ej = null, eT = null, ek = 60, eS, eE = null;
        class eM {
            static get now() {
                return eC
            }
            static set now(e) {
                eC = e
            }
            static set defaultZone(e) {
                eb = e
            }
            static get defaultZone() {
                return ef(eb, $.instance)
            }
            static get defaultLocale() {
                return eL
            }
            static set defaultLocale(e) {
                eL = e
            }
            static get defaultNumberingSystem() {
                return ej
            }
            static set defaultNumberingSystem(e) {
                ej = e
            }
            static get defaultOutputCalendar() {
                return eT
            }
            static set defaultOutputCalendar(e) {
                eT = e
            }
            static get defaultWeekSettings() {
                return eE
            }
            static set defaultWeekSettings(e) {
                eE = eJ(e)
            }
            static get twoDigitCutoffYear() {
                return ek
            }
            static set twoDigitCutoffYear(e) {
                ek = e % 100
            }
            static get throwOnInvalid() {
                return eS
            }
            static set throwOnInvalid(e) {
                eS = e
            }
            static resetCaches() {
                eh.resetCache(),
                G.resetCache(),
                i5.resetCache(),
                ew.clear()
            }
        }
        class eA {
            constructor(e, t) {
                this.reason = e,
                this.explanation = t
            }
            toMessage() {
                return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason
            }
        }
        let eN = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
          , eD = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
        function e_(e, t) {
            return new eA("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)
        }
        function eV(e, t, i) {
            let s = new Date(Date.UTC(e, t - 1, i));
            e < 100 && e >= 0 && s.setUTCFullYear(s.getUTCFullYear() - 1900);
            let n = s.getUTCDay();
            return 0 === n ? 7 : n
        }
        function eP(e, t) {
            let i = e3(e) ? eD : eN
              , s = i.findIndex(e => e < t)
              , n = t - i[s];
            return {
                month: s + 1,
                day: n
            }
        }
        function eO(e, t) {
            return (e - t + 7) % 7 + 1
        }
        function eI(e, t=4, i=1) {
            let {year: s, month: n, day: r} = e, a = r + (e3(s) ? eD : eN)[n - 1], o = eO(eV(s, n, r), i), l = Math.floor((a - o + 14 - t) / 7), u;
            return l < 1 ? l = e9(u = s - 1, t, i) : l > e9(s, t, i) ? (u = s + 1,
            l = 1) : u = s,
            {
                weekYear: u,
                weekNumber: l,
                weekday: o,
                ...ta(e)
            }
        }
        function eF(e, t=4, i=1) {
            let {weekYear: s, weekNumber: n, weekday: r} = e, a = eO(eV(s, 1, t), i), o = e4(s), l = 7 * n + r - a - 7 + t, u;
            l < 1 ? l += e4(u = s - 1) : l > o ? (u = s + 1,
            l -= e4(s)) : u = s;
            let {month: c, day: h} = eP(u, l);
            return {
                year: u,
                month: c,
                day: h,
                ...ta(e)
            }
        }
        function eR(e) {
            let {year: t, month: i, day: s} = e
              , n = s + (e3(t) ? eD : eN)[i - 1];
            return {
                year: t,
                ordinal: n,
                ...ta(e)
            }
        }
        function eB(e) {
            let {year: t, ordinal: i} = e
              , {month: s, day: n} = eP(t, i);
            return {
                year: t,
                month: s,
                day: n,
                ...ta(e)
            }
        }
        function eZ(e, t) {
            if (!(!eU(e.localWeekday) || !eU(e.localWeekNumber) || !eU(e.localWeekYear)))
                return {
                    minDaysInFirstWeek: 4,
                    startOfWeek: 1
                };
            if (!eU(e.weekday) || !eU(e.weekNumber) || !eU(e.weekYear))
                throw new f("Cannot mix locale-based week fields with ISO-based week fields");
            return eU(e.localWeekday) || (e.weekday = e.localWeekday),
            eU(e.localWeekNumber) || (e.weekNumber = e.localWeekNumber),
            eU(e.localWeekYear) || (e.weekYear = e.localWeekYear),
            delete e.localWeekday,
            delete e.localWeekNumber,
            delete e.localWeekYear,
            {
                minDaysInFirstWeek: t.getMinDaysInFirstWeek(),
                startOfWeek: t.getStartOfWeek()
            }
        }
        function eW(e) {
            let t = e$(e.year)
              , i = eK(e.month, 1, 12)
              , s = eK(e.day, 1, e7(e.year, e.month));
            return t ? i ? !s && e_("day", e.day) : e_("month", e.month) : e_("year", e.year)
        }
        function ez(e) {
            let {hour: t, minute: i, second: s, millisecond: n} = e
              , r = eK(t, 0, 23) || 24 === t && 0 === i && 0 === s && 0 === n
              , a = eK(i, 0, 59)
              , o = eK(s, 0, 59)
              , l = eK(n, 0, 999);
            return r ? a ? o ? !l && e_("millisecond", n) : e_("second", s) : e_("minute", i) : e_("hour", t)
        }
        function eU(e) {
            return void 0 === e
        }
        function eH(e) {
            return "number" == typeof e
        }
        function e$(e) {
            return "number" == typeof e && e % 1 == 0
        }
        function eq() {
            try {
                return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat
            } catch (e) {
                return !1
            }
        }
        function eY() {
            try {
                return "undefined" != typeof Intl && !!Intl.Locale && ("weekInfo"in Intl.Locale.prototype || "getWeekInfo"in Intl.Locale.prototype)
            } catch (e) {
                return !1
            }
        }
        function eX(e, t, i) {
            if (0 !== e.length)
                return e.reduce( (e, s) => {
                    let n = [t(s), s];
                    return e && i(e[0], n[0]) === e[0] ? e : n
                }
                , null)[1]
        }
        function eG(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        function eJ(e) {
            if (null == e)
                return null;
            if ("object" != typeof e)
                throw new y("Week settings must be an object");
            if (!eK(e.firstDay, 1, 7) || !eK(e.minimalDays, 1, 7) || !Array.isArray(e.weekend) || e.weekend.some(e => !eK(e, 1, 7)))
                throw new y("Invalid week settings");
            return {
                firstDay: e.firstDay,
                minimalDays: e.minimalDays,
                weekend: Array.from(e.weekend)
            }
        }
        function eK(e, t, i) {
            return e$(e) && e >= t && e <= i
        }
        function eQ(e, t=2) {
            let i;
            return e < 0 ? "-" + ("" + -e).padStart(t, "0") : ("" + e).padStart(t, "0")
        }
        function e1(e) {
            if (!eU(e) && null !== e && "" !== e)
                return parseInt(e, 10)
        }
        function e0(e) {
            if (!eU(e) && null !== e && "" !== e)
                return parseFloat(e)
        }
        function e2(e) {
            if (!eU(e) && null !== e && "" !== e)
                return Math.floor(1e3 * parseFloat("0." + e))
        }
        function e5(e, t, i="round") {
            let s = 10 ** t;
            switch (i) {
            case "expand":
                return e > 0 ? Math.ceil(e * s) / s : Math.floor(e * s) / s;
            case "trunc":
                return Math.trunc(e * s) / s;
            case "round":
                return Math.round(e * s) / s;
            case "floor":
                return Math.floor(e * s) / s;
            case "ceil":
                return Math.ceil(e * s) / s;
            default:
                throw RangeError(`Value rounding ${i} is out of range`)
            }
        }
        function e3(e) {
            return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
        }
        function e4(e) {
            return e3(e) ? 366 : 365
        }
        function e7(e, t) {
            var i;
            let s = (i = t - 1) - 12 * Math.floor(i / 12) + 1;
            return 2 === s ? e3(e + (t - s) / 12) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][s - 1]
        }
        function e8(e) {
            let t = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond);
            return e.year < 100 && e.year >= 0 && (t = new Date(t)).setUTCFullYear(e.year, e.month - 1, e.day),
            +t
        }
        function e6(e, t, i) {
            return -eO(eV(e, 1, t), i) + t - 1
        }
        function e9(e, t=4, i=1) {
            let s = e6(e, t, i)
              , n = e6(e + 1, t, i);
            return (e4(e) - s + n) / 7
        }
        function te(e) {
            return e > 99 ? e : e > eM.twoDigitCutoffYear ? 1900 + e : 2e3 + e
        }
        function tt(e, t, i, s=null) {
            let n = new Date(e)
              , r = {
                hourCycle: "h23",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
            };
            s && (r.timeZone = s);
            let a = {
                timeZoneName: t,
                ...r
            }
              , o = new Intl.DateTimeFormat(i,a).formatToParts(n).find(e => "timezonename" === e.type.toLowerCase());
            return o ? o.value : null
        }
        function ti(e, t) {
            let i = parseInt(e, 10);
            Number.isNaN(i) && (i = 0);
            let s = parseInt(t, 10) || 0
              , n = i < 0 || Object.is(i, -0) ? -s : s;
            return 60 * i + n
        }
        function ts(e) {
            let t = Number(e);
            if ("boolean" == typeof e || "" === e || !Number.isFinite(t))
                throw new y(`Invalid unit value ${e}`);
            return t
        }
        function tn(e, t) {
            let i = {};
            for (let s in e)
                if (eG(e, s)) {
                    let n = e[s];
                    if (null == n)
                        continue;
                    i[t(s)] = ts(n)
                }
            return i
        }
        function tr(e, t) {
            let i = Math.trunc(Math.abs(e / 60))
              , s = Math.trunc(Math.abs(e % 60))
              , n = e >= 0 ? "+" : "-";
            switch (t) {
            case "short":
                return `${n}${eQ(i, 2)}:${eQ(s, 2)}`;
            case "narrow":
                return `${n}${i}${s > 0 ? `:${s}` : ""}`;
            case "techie":
                return `${n}${eQ(i, 2)}${eQ(s, 2)}`;
            default:
                throw RangeError(`Value format ${t} is out of range for property format`)
            }
        }
        function ta(e) {
            return ["hour", "minute", "second", "millisecond"].reduce( (t, i) => (t[i] = e[i],
            t), {})
        }
        let to = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          , tl = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          , tu = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
        function tc(e) {
            switch (e) {
            case "narrow":
                return [...tu];
            case "short":
                return [...tl];
            case "long":
                return [...to];
            case "numeric":
                return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
            case "2-digit":
                return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
            default:
                return null
            }
        }
        let th = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
          , td = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          , tm = ["M", "T", "W", "T", "F", "S", "S"];
        function tp(e) {
            switch (e) {
            case "narrow":
                return [...tm];
            case "short":
                return [...td];
            case "long":
                return [...th];
            case "numeric":
                return ["1", "2", "3", "4", "5", "6", "7"];
            default:
                return null
            }
        }
        let tf = ["AM", "PM"]
          , tg = ["Before Christ", "Anno Domini"]
          , ty = ["BC", "AD"]
          , tv = ["B", "A"];
        function tw(e) {
            switch (e) {
            case "narrow":
                return [...tv];
            case "short":
                return [...ty];
            case "long":
                return [...tg];
            default:
                return null
            }
        }
        function tx(e, t) {
            let i = "";
            for (let s of e)
                s.literal ? i += s.val : i += t(s.val);
            return i
        }
        let tC = {
            D: b,
            DD: L,
            DDD: T,
            DDDD: k,
            t: S,
            tt: E,
            ttt: M,
            tttt: A,
            T: N,
            TT: D,
            TTT: _,
            TTTT: V,
            f: P,
            ff: I,
            fff: B,
            ffff: W,
            F: O,
            FF: F,
            FFF: Z,
            FFFF: z
        };
        class tb {
            static create(e, t={}) {
                return new tb(e,t)
            }
            static parseFormat(e) {
                let t = null
                  , i = ""
                  , s = !1
                  , n = [];
                for (let r = 0; r < e.length; r++) {
                    let a = e.charAt(r);
                    "'" === a ? ((i.length > 0 || s) && n.push({
                        literal: s || /^\s+$/.test(i),
                        val: "" === i ? "'" : i
                    }),
                    t = null,
                    i = "",
                    s = !s) : s || a === t ? i += a : (i.length > 0 && n.push({
                        literal: /^\s+$/.test(i),
                        val: i
                    }),
                    i = a,
                    t = a)
                }
                return i.length > 0 && n.push({
                    literal: s || /^\s+$/.test(i),
                    val: i
                }),
                n
            }
            static macroTokenToFormatOpts(e) {
                return tC[e]
            }
            constructor(e, t) {
                this.opts = t,
                this.loc = e,
                this.systemLoc = null
            }
            formatWithSystemDefault(e, t) {
                return null === this.systemLoc && (this.systemLoc = this.loc.redefaultToSystem()),
                this.systemLoc.dtFormatter(e, {
                    ...this.opts,
                    ...t
                }).format()
            }
            dtFormatter(e, t={}) {
                return this.loc.dtFormatter(e, {
                    ...this.opts,
                    ...t
                })
            }
            formatDateTime(e, t) {
                return this.dtFormatter(e, t).format()
            }
            formatDateTimeParts(e, t) {
                return this.dtFormatter(e, t).formatToParts()
            }
            formatInterval(e, t) {
                return this.dtFormatter(e.start, t).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate())
            }
            resolvedOptions(e, t) {
                return this.dtFormatter(e, t).resolvedOptions()
            }
            num(e, t=0, i) {
                if (this.opts.forceSimple)
                    return eQ(e, t);
                let s = {
                    ...this.opts
                };
                return t > 0 && (s.padTo = t),
                i && (s.signDisplay = i),
                this.loc.numberFormatter(s).format(e)
            }
            formatDateTimeFromString(e, t) {
                let i = "en" === this.loc.listingMode()
                  , s = this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar
                  , n = (t, i) => this.loc.extract(e, t, i)
                  , r = t => e.isOffsetFixed && 0 === e.offset && t.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, t.format) : ""
                  , a = () => i ? tf[e.hour < 12 ? 0 : 1] : n({
                    hour: "numeric",
                    hourCycle: "h12"
                }, "dayperiod")
                  , o = (t, s) => i ? tc(t)[e.month - 1] : n(s ? {
                    month: t
                } : {
                    month: t,
                    day: "numeric"
                }, "month")
                  , l = (t, s) => i ? tp(t)[e.weekday - 1] : n(s ? {
                    weekday: t
                } : {
                    weekday: t,
                    month: "long",
                    day: "numeric"
                }, "weekday")
                  , u = t => {
                    let i = tb.macroTokenToFormatOpts(t);
                    return i ? this.formatWithSystemDefault(e, i) : t
                }
                  , c = t => i ? tw(t)[e.year < 0 ? 0 : 1] : n({
                    era: t
                }, "era");
                return tx(tb.parseFormat(t), t => {
                    switch (t) {
                    case "S":
                        return this.num(e.millisecond);
                    case "u":
                    case "SSS":
                        return this.num(e.millisecond, 3);
                    case "s":
                        return this.num(e.second);
                    case "ss":
                        return this.num(e.second, 2);
                    case "uu":
                        return this.num(Math.floor(e.millisecond / 10), 2);
                    case "uuu":
                        return this.num(Math.floor(e.millisecond / 100));
                    case "m":
                        return this.num(e.minute);
                    case "mm":
                        return this.num(e.minute, 2);
                    case "h":
                        return this.num(e.hour % 12 == 0 ? 12 : e.hour % 12);
                    case "hh":
                        return this.num(e.hour % 12 == 0 ? 12 : e.hour % 12, 2);
                    case "H":
                        return this.num(e.hour);
                    case "HH":
                        return this.num(e.hour, 2);
                    case "Z":
                        return r({
                            format: "narrow",
                            allowZ: this.opts.allowZ
                        });
                    case "ZZ":
                        return r({
                            format: "short",
                            allowZ: this.opts.allowZ
                        });
                    case "ZZZ":
                        return r({
                            format: "techie",
                            allowZ: this.opts.allowZ
                        });
                    case "ZZZZ":
                        return e.zone.offsetName(e.ts, {
                            format: "short",
                            locale: this.loc.locale
                        });
                    case "ZZZZZ":
                        return e.zone.offsetName(e.ts, {
                            format: "long",
                            locale: this.loc.locale
                        });
                    case "z":
                        return e.zoneName;
                    case "a":
                        return a();
                    case "d":
                        return s ? n({
                            day: "numeric"
                        }, "day") : this.num(e.day);
                    case "dd":
                        return s ? n({
                            day: "2-digit"
                        }, "day") : this.num(e.day, 2);
                    case "c":
                    case "E":
                        return this.num(e.weekday);
                    case "ccc":
                        return l("short", !0);
                    case "cccc":
                        return l("long", !0);
                    case "ccccc":
                        return l("narrow", !0);
                    case "EEE":
                        return l("short", !1);
                    case "EEEE":
                        return l("long", !1);
                    case "EEEEE":
                        return l("narrow", !1);
                    case "L":
                        return s ? n({
                            month: "numeric",
                            day: "numeric"
                        }, "month") : this.num(e.month);
                    case "LL":
                        return s ? n({
                            month: "2-digit",
                            day: "numeric"
                        }, "month") : this.num(e.month, 2);
                    case "LLL":
                        return o("short", !0);
                    case "LLLL":
                        return o("long", !0);
                    case "LLLLL":
                        return o("narrow", !0);
                    case "M":
                        return s ? n({
                            month: "numeric"
                        }, "month") : this.num(e.month);
                    case "MM":
                        return s ? n({
                            month: "2-digit"
                        }, "month") : this.num(e.month, 2);
                    case "MMM":
                        return o("short", !1);
                    case "MMMM":
                        return o("long", !1);
                    case "MMMMM":
                        return o("narrow", !1);
                    case "y":
                        return s ? n({
                            year: "numeric"
                        }, "year") : this.num(e.year);
                    case "yy":
                        return s ? n({
                            year: "2-digit"
                        }, "year") : this.num(e.year.toString().slice(-2), 2);
                    case "yyyy":
                        return s ? n({
                            year: "numeric"
                        }, "year") : this.num(e.year, 4);
                    case "yyyyyy":
                        return s ? n({
                            year: "numeric"
                        }, "year") : this.num(e.year, 6);
                    case "G":
                        return c("short");
                    case "GG":
                        return c("long");
                    case "GGGGG":
                        return c("narrow");
                    case "kk":
                        return this.num(e.weekYear.toString().slice(-2), 2);
                    case "kkkk":
                        return this.num(e.weekYear, 4);
                    case "W":
                        return this.num(e.weekNumber);
                    case "WW":
                        return this.num(e.weekNumber, 2);
                    case "n":
                        return this.num(e.localWeekNumber);
                    case "nn":
                        return this.num(e.localWeekNumber, 2);
                    case "ii":
                        return this.num(e.localWeekYear.toString().slice(-2), 2);
                    case "iiii":
                        return this.num(e.localWeekYear, 4);
                    case "o":
                        return this.num(e.ordinal);
                    case "ooo":
                        return this.num(e.ordinal, 3);
                    case "q":
                        return this.num(e.quarter);
                    case "qq":
                        return this.num(e.quarter, 2);
                    case "X":
                        return this.num(Math.floor(e.ts / 1e3));
                    case "x":
                        return this.num(e.ts);
                    default:
                        return u(t)
                    }
                }
                )
            }
            formatDurationFromString(e, t) {
                let i = "negativeLargestOnly" === this.opts.signMode ? -1 : 1
                  , s = e => {
                    switch (e[0]) {
                    case "S":
                        return "milliseconds";
                    case "s":
                        return "seconds";
                    case "m":
                        return "minutes";
                    case "h":
                        return "hours";
                    case "d":
                        return "days";
                    case "w":
                        return "weeks";
                    case "M":
                        return "months";
                    case "y":
                        return "years";
                    default:
                        return null
                    }
                }
                  , n = tb.parseFormat(t)
                  , r = n.reduce( (e, {literal: t, val: i}) => t ? e : e.concat(i), [])
                  , a = e.shiftTo(...r.map(s).filter(e => e))
                  , o = {
                    isNegativeDuration: a < 0,
                    largestUnit: Object.keys(a.values)[0]
                };
                return tx(n, e => {
                    let t = s(e);
                    if (!t)
                        return e;
                    {
                        let s, n = o.isNegativeDuration && t !== o.largestUnit ? i : 1;
                        return s = "negativeLargestOnly" === this.opts.signMode && t !== o.largestUnit ? "never" : "all" === this.opts.signMode ? "always" : "auto",
                        this.num(a.get(t) * n, e.length, s)
                    }
                }
                )
            }
        }
        let tL = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
        function tj(...e) {
            let t = e.reduce( (e, t) => e + t.source, "");
            return RegExp(`^${t}$`)
        }
        function tT(...e) {
            return t => e.reduce( ([e,i,s], n) => {
                let[r,a,o] = n(t, s);
                return [{
                    ...e,
                    ...r
                }, a || i, o]
            }
            , [{}, null, 1]).slice(0, 2)
        }
        function tk(e, ...t) {
            if (null == e)
                return [null, null];
            for (let[i,s] of t) {
                let t = i.exec(e);
                if (t)
                    return s(t)
            }
            return [null, null]
        }
        function tS(...e) {
            return (t, i) => {
                let s, n = {};
                for (s = 0; s < e.length; s++)
                    n[e[s]] = e1(t[i + s]);
                return [n, null, i + s]
            }
        }
        let tE = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/
          , tM = `(?:${tE.source}?(?:\\[(${tL.source})\\])?)?`
          , tA = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/
          , tN = RegExp(`${tA.source}${tM}`)
          , tD = RegExp(`(?:[Tt]${tN.source})?`)
          , t_ = tS("weekYear", "weekNumber", "weekDay")
          , tV = tS("year", "ordinal")
          , tP = RegExp(`${tA.source} ?(?:${tE.source}|(${tL.source}))?`)
          , tO = RegExp(`(?: ${tP.source})?`);
        function tI(e, t, i) {
            let s = e[t];
            return eU(s) ? i : e1(s)
        }
        function tF(e, t) {
            return [{
                hours: tI(e, t, 0),
                minutes: tI(e, t + 1, 0),
                seconds: tI(e, t + 2, 0),
                milliseconds: e2(e[t + 3])
            }, null, t + 4]
        }
        function tR(e, t) {
            let i = !e[t] && !e[t + 1]
              , s = ti(e[t + 1], e[t + 2]);
            return [{}, i ? null : em.instance(s), t + 3]
        }
        function tB(e, t) {
            return [{}, e[t] ? G.create(e[t]) : null, t + 1]
        }
        let tZ = RegExp(`^T?${tA.source}$`)
          , tW = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
        function tz(e) {
            let[t,i,s,n,r,a,o,l,u] = e
              , c = "-" === t[0]
              , h = l && "-" === l[0]
              , d = (e, t=!1) => void 0 !== e && (t || e && c) ? -e : e;
            return [{
                years: d(e0(i)),
                months: d(e0(s)),
                weeks: d(e0(n)),
                days: d(e0(r)),
                hours: d(e0(a)),
                minutes: d(e0(o)),
                seconds: d(e0(l), "-0" === l),
                milliseconds: d(e2(u), h)
            }]
        }
        let tU = {
            GMT: 0,
            EDT: -240,
            EST: -300,
            CDT: -300,
            CST: -360,
            MDT: -360,
            MST: -420,
            PDT: -420,
            PST: -480
        };
        function tH(e, t, i, s, n, r, a) {
            let o = {
                year: 2 === t.length ? te(e1(t)) : e1(t),
                month: tl.indexOf(i) + 1,
                day: e1(s),
                hour: e1(n),
                minute: e1(r)
            };
            return a && (o.second = e1(a)),
            e && (o.weekday = e.length > 3 ? th.indexOf(e) + 1 : td.indexOf(e) + 1),
            o
        }
        let t$ = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
        function tq(e) {
            let t, [,i,s,n,r,a,o,l,u,c,h,d] = e;
            return [tH(i, r, n, s, a, o, l), new em(u ? tU[u] : c ? 0 : ti(h, d))]
        }
        let tY = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/
          , tX = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/
          , tG = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
        function tJ(e) {
            let[,t,i,s,n,r,a,o] = e;
            return [tH(t, n, s, i, r, a, o), em.utcInstance]
        }
        function tK(e) {
            let[,t,i,s,n,r,a,o] = e;
            return [tH(t, o, i, s, n, r, a), em.utcInstance]
        }
        let tQ = tj(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, tD)
          , t1 = tj(/(\d{4})-?W(\d\d)(?:-?(\d))?/, tD)
          , t0 = tj(/(\d{4})-?(\d{3})/, tD)
          , t2 = tj(tN)
          , t5 = tT(function(e, t) {
            return [{
                year: tI(e, t),
                month: tI(e, t + 1, 1),
                day: tI(e, t + 2, 1)
            }, null, t + 3]
        }, tF, tR, tB)
          , t3 = tT(t_, tF, tR, tB)
          , t4 = tT(tV, tF, tR, tB)
          , t7 = tT(tF, tR, tB)
          , t8 = tT(tF)
          , t6 = tj(/(\d{4})-(\d\d)-(\d\d)/, tO)
          , t9 = tj(tP)
          , ie = tT(tF, tR, tB)
          , it = "Invalid Duration"
          , ii = {
            weeks: {
                days: 7,
                hours: 168,
                minutes: 10080,
                seconds: 604800,
                milliseconds: 6048e5
            },
            days: {
                hours: 24,
                minutes: 1440,
                seconds: 86400,
                milliseconds: 864e5
            },
            hours: {
                minutes: 60,
                seconds: 3600,
                milliseconds: 36e5
            },
            minutes: {
                seconds: 60,
                milliseconds: 6e4
            },
            seconds: {
                milliseconds: 1e3
            }
        }
          , is = {
            years: {
                quarters: 4,
                months: 12,
                weeks: 52,
                days: 365,
                hours: 8760,
                minutes: 525600,
                seconds: 31536e3,
                milliseconds: 31536e6
            },
            quarters: {
                months: 3,
                weeks: 13,
                days: 91,
                hours: 2184,
                minutes: 131040,
                seconds: 7862400,
                milliseconds: 78624e5
            },
            months: {
                weeks: 4,
                days: 30,
                hours: 720,
                minutes: 43200,
                seconds: 2592e3,
                milliseconds: 2592e6
            },
            ...ii
        }
          , ir = {
            years: {
                quarters: 4,
                months: 12,
                weeks: 52.1775,
                days: 365.2425,
                hours: 8765.82,
                minutes: 525949.2,
                seconds: 0x1e18558,
                milliseconds: 31556952e3
            },
            quarters: {
                months: 3,
                weeks: 13.044375,
                days: 91.310625,
                hours: 2191.455,
                minutes: 131487.3,
                seconds: 7889238,
                milliseconds: 7889238e3
            },
            months: {
                weeks: 30.436875 / 7,
                days: 30.436875,
                hours: 730.485,
                minutes: 43829.1,
                seconds: 2629746,
                milliseconds: 2629746e3
            },
            ...ii
        }
          , ia = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"]
          , io = ia.slice(0).reverse();
        function il(e, t, i=!1) {
            return new id({
                values: i ? t.values : {
                    ...e.values,
                    ...t.values || {}
                },
                loc: e.loc.clone(t.loc),
                conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
                matrix: t.matrix || e.matrix
            })
        }
        function iu(e, t) {
            let i = t.milliseconds ?? 0;
            for (let s of io.slice(1))
                t[s] && (i += t[s] * e[s].milliseconds);
            return i
        }
        function ic(e, t) {
            let i = 0 > iu(e, t) ? -1 : 1;
            ia.reduceRight( (s, n) => {
                if (eU(t[n]))
                    return s;
                if (s) {
                    let r = t[s] * i
                      , a = e[n][s]
                      , o = Math.floor(r / a);
                    t[n] += o * i,
                    t[s] -= o * a * i
                }
                return n
            }
            , null),
            ia.reduce( (i, s) => {
                if (eU(t[s]))
                    return i;
                if (i) {
                    let n = t[i] % 1;
                    t[i] -= n,
                    t[s] += n * e[i][s]
                }
                return s
            }
            , null)
        }
        function ih(e) {
            let t = {};
            for (let[i,s] of Object.entries(e))
                0 !== s && (t[i] = s);
            return t
        }
        class id {
            constructor(e) {
                let t = "longterm" === e.conversionAccuracy
                  , i = t ? ir : is;
                e.matrix && (i = e.matrix),
                this.values = e.values,
                this.loc = e.loc || eh.create(),
                this.conversionAccuracy = t ? "longterm" : "casual",
                this.invalid = e.invalid || null,
                this.matrix = i,
                this.isLuxonDuration = !0
            }
            static fromMillis(e, t) {
                return id.fromObject({
                    milliseconds: e
                }, t)
            }
            static fromObject(e, t={}) {
                if (null == e || "object" != typeof e)
                    throw new y(`Duration.fromObject: argument expected to be an object, got ${null === e ? "null" : typeof e}`);
                return new id({
                    values: tn(e, id.normalizeUnit),
                    loc: eh.fromObject(t),
                    conversionAccuracy: t.conversionAccuracy,
                    matrix: t.matrix
                })
            }
            static fromDurationLike(e) {
                if (eH(e))
                    return id.fromMillis(e);
                if (id.isDuration(e))
                    return e;
                if ("object" == typeof e)
                    return id.fromObject(e);
                throw new y(`Unknown duration argument ${e} of type ${typeof e}`)
            }
            static fromISO(e, t) {
                let[i] = tk(e, [tW, tz]);
                return i ? id.fromObject(i, t) : id.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`)
            }
            static fromISOTime(e, t) {
                let[i] = tk(e, [tZ, t8]);
                return i ? id.fromObject(i, t) : id.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`)
            }
            static invalid(e, t=null) {
                if (!e)
                    throw new y("need to specify a reason the Duration is invalid");
                let i = e instanceof eA ? e : new eA(e,t);
                if (!eM.throwOnInvalid)
                    return new id({
                        invalid: i
                    });
                throw new p(i)
            }
            static normalizeUnit(e) {
                let t = {
                    year: "years",
                    years: "years",
                    quarter: "quarters",
                    quarters: "quarters",
                    month: "months",
                    months: "months",
                    week: "weeks",
                    weeks: "weeks",
                    day: "days",
                    days: "days",
                    hour: "hours",
                    hours: "hours",
                    minute: "minutes",
                    minutes: "minutes",
                    second: "seconds",
                    seconds: "seconds",
                    millisecond: "milliseconds",
                    milliseconds: "milliseconds"
                }[e ? e.toLowerCase() : e];
                if (!t)
                    throw new g(e);
                return t
            }
            static isDuration(e) {
                return e && e.isLuxonDuration || !1
            }
            get locale() {
                return this.isValid ? this.loc.locale : null
            }
            get numberingSystem() {
                return this.isValid ? this.loc.numberingSystem : null
            }
            toFormat(e, t={}) {
                let i = {
                    ...t,
                    floor: !1 !== t.round && !1 !== t.floor
                };
                return this.isValid ? tb.create(this.loc, i).formatDurationFromString(this, e) : it
            }
            toHuman(e={}) {
                if (!this.isValid)
                    return it;
                let t = !1 !== e.showZeros
                  , i = ia.map(i => {
                    let s = this.values[i];
                    return eU(s) || 0 === s && !t ? null : this.loc.numberFormatter({
                        style: "unit",
                        unitDisplay: "long",
                        ...e,
                        unit: i.slice(0, -1)
                    }).format(s)
                }
                ).filter(e => e);
                return this.loc.listFormatter({
                    type: "conjunction",
                    style: e.listStyle || "narrow",
                    ...e
                }).format(i)
            }
            toObject() {
                return this.isValid ? {
                    ...this.values
                } : {}
            }
            toISO() {
                if (!this.isValid)
                    return null;
                let e = "P";
                return 0 !== this.years && (e += this.years + "Y"),
                (0 !== this.months || 0 !== this.quarters) && (e += this.months + 3 * this.quarters + "M"),
                0 !== this.weeks && (e += this.weeks + "W"),
                0 !== this.days && (e += this.days + "D"),
                (0 !== this.hours || 0 !== this.minutes || 0 !== this.seconds || 0 !== this.milliseconds) && (e += "T"),
                0 !== this.hours && (e += this.hours + "H"),
                0 !== this.minutes && (e += this.minutes + "M"),
                (0 !== this.seconds || 0 !== this.milliseconds) && (e += e5(this.seconds + this.milliseconds / 1e3, 3) + "S"),
                "P" === e && (e += "T0S"),
                e
            }
            toISOTime(e={}) {
                if (!this.isValid)
                    return null;
                let t = this.toMillis();
                return t < 0 || t >= 864e5 ? null : (e = {
                    suppressMilliseconds: !1,
                    suppressSeconds: !1,
                    includePrefix: !1,
                    format: "extended",
                    ...e,
                    includeOffset: !1
                },
                i5.fromMillis(t, {
                    zone: "UTC"
                }).toISOTime(e))
            }
            toJSON() {
                return this.toISO()
            }
            toString() {
                return this.toISO()
            }
            [Symbol.for("nodejs.util.inspect.custom")]() {
                return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`
            }
            toMillis() {
                return this.isValid ? iu(this.matrix, this.values) : NaN
            }
            valueOf() {
                return this.toMillis()
            }
            plus(e) {
                if (!this.isValid)
                    return this;
                let t = id.fromDurationLike(e)
                  , i = {};
                for (let e of ia)
                    (eG(t.values, e) || eG(this.values, e)) && (i[e] = t.get(e) + this.get(e));
                return il(this, {
                    values: i
                }, !0)
            }
            minus(e) {
                if (!this.isValid)
                    return this;
                let t = id.fromDurationLike(e);
                return this.plus(t.negate())
            }
            mapUnits(e) {
                if (!this.isValid)
                    return this;
                let t = {};
                for (let i of Object.keys(this.values))
                    t[i] = ts(e(this.values[i], i));
                return il(this, {
                    values: t
                }, !0)
            }
            get(e) {
                return this[id.normalizeUnit(e)]
            }
            set(e) {
                return this.isValid ? il(this, {
                    values: {
                        ...this.values,
                        ...tn(e, id.normalizeUnit)
                    }
                }) : this
            }
            reconfigure({locale: e, numberingSystem: t, conversionAccuracy: i, matrix: s}={}) {
                return il(this, {
                    loc: this.loc.clone({
                        locale: e,
                        numberingSystem: t
                    }),
                    matrix: s,
                    conversionAccuracy: i
                })
            }
            as(e) {
                return this.isValid ? this.shiftTo(e).get(e) : NaN
            }
            normalize() {
                if (!this.isValid)
                    return this;
                let e = this.toObject();
                return ic(this.matrix, e),
                il(this, {
                    values: e
                }, !0)
            }
            rescale() {
                return this.isValid ? il(this, {
                    values: ih(this.normalize().shiftToAll().toObject())
                }, !0) : this
            }
            shiftTo(...e) {
                let t;
                if (!this.isValid || 0 === e.length)
                    return this;
                e = e.map(e => id.normalizeUnit(e));
                let i = {}
                  , s = {}
                  , n = this.toObject();
                for (let r of ia)
                    if (e.indexOf(r) >= 0) {
                        t = r;
                        let e = 0;
                        for (let t in s)
                            e += this.matrix[t][r] * s[t],
                            s[t] = 0;
                        eH(n[r]) && (e += n[r]);
                        let a = Math.trunc(e);
                        i[r] = a,
                        s[r] = (1e3 * e - 1e3 * a) / 1e3
                    } else
                        eH(n[r]) && (s[r] = n[r]);
                for (let e in s)
                    0 !== s[e] && (i[t] += e === t ? s[e] : s[e] / this.matrix[t][e]);
                return ic(this.matrix, i),
                il(this, {
                    values: i
                }, !0)
            }
            shiftToAll() {
                return this.isValid ? this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds") : this
            }
            negate() {
                if (!this.isValid)
                    return this;
                let e = {};
                for (let t of Object.keys(this.values))
                    e[t] = 0 === this.values[t] ? 0 : -this.values[t];
                return il(this, {
                    values: e
                }, !0)
            }
            removeZeros() {
                return this.isValid ? il(this, {
                    values: ih(this.values)
                }, !0) : this
            }
            get years() {
                return this.isValid ? this.values.years || 0 : NaN
            }
            get quarters() {
                return this.isValid ? this.values.quarters || 0 : NaN
            }
            get months() {
                return this.isValid ? this.values.months || 0 : NaN
            }
            get weeks() {
                return this.isValid ? this.values.weeks || 0 : NaN
            }
            get days() {
                return this.isValid ? this.values.days || 0 : NaN
            }
            get hours() {
                return this.isValid ? this.values.hours || 0 : NaN
            }
            get minutes() {
                return this.isValid ? this.values.minutes || 0 : NaN
            }
            get seconds() {
                return this.isValid ? this.values.seconds || 0 : NaN
            }
            get milliseconds() {
                return this.isValid ? this.values.milliseconds || 0 : NaN
            }
            get isValid() {
                return null === this.invalid
            }
            get invalidReason() {
                return this.invalid ? this.invalid.reason : null
            }
            get invalidExplanation() {
                return this.invalid ? this.invalid.explanation : null
            }
            equals(e) {
                if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
                    return !1;
                for (let s of ia) {
                    var t, i;
                    if (t = this.values[s],
                    i = e.values[s],
                    void 0 === t || 0 === t ? void 0 !== i && 0 !== i : t !== i)
                        return !1
                }
                return !0
            }
        }
        let im = "Invalid Interval";
        class ip {
            constructor(e) {
                this.s = e.start,
                this.e = e.end,
                this.invalid = e.invalid || null,
                this.isLuxonInterval = !0
            }
            static invalid(e, t=null) {
                if (!e)
                    throw new y("need to specify a reason the Interval is invalid");
                let i = e instanceof eA ? e : new eA(e,t);
                if (!eM.throwOnInvalid)
                    return new ip({
                        invalid: i
                    });
                throw new m(i)
            }
            static fromDateTimes(e, t) {
                var i, s;
                let n = i3(e)
                  , r = i3(t)
                  , a = (i = n,
                s = r,
                i && i.isValid ? s && s.isValid ? s < i ? ip.invalid("end before start", `The end of an interval must be after its start, but you had start=${i.toISO()} and end=${s.toISO()}`) : null : ip.invalid("missing or invalid end") : ip.invalid("missing or invalid start"));
                return null == a ? new ip({
                    start: n,
                    end: r
                }) : a
            }
            static after(e, t) {
                let i = id.fromDurationLike(t)
                  , s = i3(e);
                return ip.fromDateTimes(s, s.plus(i))
            }
            static before(e, t) {
                let i = id.fromDurationLike(t)
                  , s = i3(e);
                return ip.fromDateTimes(s.minus(i), s)
            }
            static fromISO(e, t) {
                let[i,s] = (e || "").split("/", 2);
                if (i && s) {
                    let e, n, r, a;
                    try {
                        n = (e = i5.fromISO(i, t)).isValid
                    } catch (e) {
                        n = !1
                    }
                    try {
                        a = (r = i5.fromISO(s, t)).isValid
                    } catch (e) {
                        a = !1
                    }
                    if (n && a)
                        return ip.fromDateTimes(e, r);
                    if (n) {
                        let i = id.fromISO(s, t);
                        if (i.isValid)
                            return ip.after(e, i)
                    } else if (a) {
                        let e = id.fromISO(i, t);
                        if (e.isValid)
                            return ip.before(r, e)
                    }
                }
                return ip.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`)
            }
            static isInterval(e) {
                return e && e.isLuxonInterval || !1
            }
            get start() {
                return this.isValid ? this.s : null
            }
            get end() {
                return this.isValid ? this.e : null
            }
            get lastDateTime() {
                return this.isValid && this.e ? this.e.minus(1) : null
            }
            get isValid() {
                return null === this.invalidReason
            }
            get invalidReason() {
                return this.invalid ? this.invalid.reason : null
            }
            get invalidExplanation() {
                return this.invalid ? this.invalid.explanation : null
            }
            length(e="milliseconds") {
                return this.isValid ? this.toDuration(e).get(e) : NaN
            }
            count(e="milliseconds", t) {
                let i;
                if (!this.isValid)
                    return NaN;
                let s = this.start.startOf(e, t);
                return Math.floor((i = (i = t?.useLocaleWeeks ? this.end.reconfigure({
                    locale: s.locale
                }) : this.end).startOf(e, t)).diff(s, e).get(e)) + (i.valueOf() !== this.end.valueOf())
            }
            hasSame(e) {
                return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e))
            }
            isEmpty() {
                return this.s.valueOf() === this.e.valueOf()
            }
            isAfter(e) {
                return !!this.isValid && this.s > e
            }
            isBefore(e) {
                return !!this.isValid && this.e <= e
            }
            contains(e) {
                return !!this.isValid && this.s <= e && this.e > e
            }
            set({start: e, end: t}={}) {
                return this.isValid ? ip.fromDateTimes(e || this.s, t || this.e) : this
            }
            splitAt(...e) {
                if (!this.isValid)
                    return [];
                let t = e.map(i3).filter(e => this.contains(e)).sort( (e, t) => e.toMillis() - t.toMillis())
                  , i = []
                  , {s} = this
                  , n = 0;
                for (; s < this.e; ) {
                    let e = t[n] || this.e
                      , r = +e > +this.e ? this.e : e;
                    i.push(ip.fromDateTimes(s, r)),
                    s = r,
                    n += 1
                }
                return i
            }
            splitBy(e) {
                let t = id.fromDurationLike(e);
                if (!this.isValid || !t.isValid || 0 === t.as("milliseconds"))
                    return [];
                let {s: i} = this, s = 1, n, r = [];
                for (; i < this.e; ) {
                    let e = this.start.plus(t.mapUnits(e => e * s));
                    n = +e > +this.e ? this.e : e,
                    r.push(ip.fromDateTimes(i, n)),
                    i = n,
                    s += 1
                }
                return r
            }
            divideEqually(e) {
                return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : []
            }
            overlaps(e) {
                return this.e > e.s && this.s < e.e
            }
            abutsStart(e) {
                return !!this.isValid && +this.e == +e.s
            }
            abutsEnd(e) {
                return !!this.isValid && +e.e == +this.s
            }
            engulfs(e) {
                return !!this.isValid && this.s <= e.s && this.e >= e.e
            }
            equals(e) {
                return !!this.isValid && !!e.isValid && this.s.equals(e.s) && this.e.equals(e.e)
            }
            intersection(e) {
                if (!this.isValid)
                    return this;
                let t = this.s > e.s ? this.s : e.s
                  , i = this.e < e.e ? this.e : e.e;
                return t >= i ? null : ip.fromDateTimes(t, i)
            }
            union(e) {
                if (!this.isValid)
                    return this;
                let t = this.s < e.s ? this.s : e.s
                  , i = this.e > e.e ? this.e : e.e;
                return ip.fromDateTimes(t, i)
            }
            static merge(e) {
                let[t,i] = e.sort( (e, t) => e.s - t.s).reduce( ([e,t], i) => t ? t.overlaps(i) || t.abutsStart(i) ? [e, t.union(i)] : [e.concat([t]), i] : [e, i], [[], null]);
                return i && t.push(i),
                t
            }
            static xor(e) {
                let t = null
                  , i = 0
                  , s = []
                  , n = e.map(e => [{
                    time: e.s,
                    type: "s"
                }, {
                    time: e.e,
                    type: "e"
                }]);
                for (let e of Array.prototype.concat(...n).sort( (e, t) => e.time - t.time))
                    1 === (i += "s" === e.type ? 1 : -1) ? t = e.time : (t && +t != +e.time && s.push(ip.fromDateTimes(t, e.time)),
                    t = null);
                return ip.merge(s)
            }
            difference(...e) {
                return ip.xor([this].concat(e)).map(e => this.intersection(e)).filter(e => e && !e.isEmpty())
            }
            toString() {
                return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : im
            }
            [Symbol.for("nodejs.util.inspect.custom")]() {
                return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`
            }
            toLocaleString(e=b, t={}) {
                return this.isValid ? tb.create(this.s.loc.clone(t), e).formatInterval(this) : im
            }
            toISO(e) {
                return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : im
            }
            toISODate() {
                return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : im
            }
            toISOTime(e) {
                return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : im
            }
            toFormat(e, {separator: t=" – "}={}) {
                return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : im
            }
            toDuration(e, t) {
                return this.isValid ? this.e.diff(this.s, e, t) : id.invalid(this.invalidReason)
            }
            mapEndpoints(e) {
                return ip.fromDateTimes(e(this.s), e(this.e))
            }
        }
        class ig {
            static hasDST(e=eM.defaultZone) {
                let t = i5.now().setZone(e).set({
                    month: 12
                });
                return !e.isUniversal && t.offset !== t.set({
                    month: 6
                }).offset
            }
            static isValidIANAZone(e) {
                return G.isValidZone(e)
            }
            static normalizeZone(e) {
                return ef(e, eM.defaultZone)
            }
            static getStartOfWeek({locale: e=null, locObj: t=null}={}) {
                return (t || eh.create(e)).getStartOfWeek()
            }
            static getMinimumDaysInFirstWeek({locale: e=null, locObj: t=null}={}) {
                return (t || eh.create(e)).getMinDaysInFirstWeek()
            }
            static getWeekendWeekdays({locale: e=null, locObj: t=null}={}) {
                return (t || eh.create(e)).getWeekendDays().slice()
            }
            static months(e="long", {locale: t=null, numberingSystem: i=null, locObj: s=null, outputCalendar: n="gregory"}={}) {
                return (s || eh.create(t, i, n)).months(e)
            }
            static monthsFormat(e="long", {locale: t=null, numberingSystem: i=null, locObj: s=null, outputCalendar: n="gregory"}={}) {
                return (s || eh.create(t, i, n)).months(e, !0)
            }
            static weekdays(e="long", {locale: t=null, numberingSystem: i=null, locObj: s=null}={}) {
                return (s || eh.create(t, i, null)).weekdays(e)
            }
            static weekdaysFormat(e="long", {locale: t=null, numberingSystem: i=null, locObj: s=null}={}) {
                return (s || eh.create(t, i, null)).weekdays(e, !0)
            }
            static meridiems({locale: e=null}={}) {
                return eh.create(e).meridiems()
            }
            static eras(e="short", {locale: t=null}={}) {
                return eh.create(t, null, "gregory").eras(e)
            }
            static features() {
                return {
                    relative: eq(),
                    localeWeek: eY()
                }
            }
        }
        function iy(e, t) {
            let i = e => e.toUTC(0, {
                keepLocalTime: !0
            }).startOf("day").valueOf()
              , s = i(t) - i(e);
            return Math.floor(id.fromMillis(s).as("days"))
        }
        function iv(e, t=e => e) {
            return {
                regex: e,
                deser: ([e]) => t(function(e) {
                    let t = parseInt(e, 10);
                    if (!isNaN(t))
                        return t;
                    t = "";
                    for (let i = 0; i < e.length; i++) {
                        let s = e.charCodeAt(i);
                        if (-1 !== e[i].search(eg.hanidec))
                            t += ev.indexOf(e[i]);
                        else
                            for (let e in ey) {
                                let[i,n] = ey[e];
                                s >= i && s <= n && (t += s - i)
                            }
                    }
                    return parseInt(t, 10)
                }(e))
            }
        }
        let iw = String.fromCharCode(160)
          , ix = `[ ${iw}]`
          , iC = RegExp(ix, "g");
        function ib(e) {
            return e.replace(/\./g, "\\.?").replace(iC, ix)
        }
        function iL(e) {
            return e.replace(/\./g, "").replace(iC, " ").toLowerCase()
        }
        function ij(e, t) {
            return null === e ? null : {
                regex: RegExp(e.map(ib).join("|")),
                deser: ([i]) => e.findIndex(e => iL(i) === iL(e)) + t
            }
        }
        function iT(e, t) {
            return {
                regex: e,
                deser: ([,e,t]) => ti(e, t),
                groups: t
            }
        }
        function ik(e) {
            return {
                regex: e,
                deser: ([e]) => e
            }
        }
        let iS = {
            year: {
                "2-digit": "yy",
                numeric: "yyyyy"
            },
            month: {
                numeric: "M",
                "2-digit": "MM",
                short: "MMM",
                long: "MMMM"
            },
            day: {
                numeric: "d",
                "2-digit": "dd"
            },
            weekday: {
                short: "EEE",
                long: "EEEE"
            },
            dayperiod: "a",
            dayPeriod: "a",
            hour12: {
                numeric: "h",
                "2-digit": "hh"
            },
            hour24: {
                numeric: "H",
                "2-digit": "HH"
            },
            minute: {
                numeric: "m",
                "2-digit": "mm"
            },
            second: {
                numeric: "s",
                "2-digit": "ss"
            },
            timeZoneName: {
                long: "ZZZZZ",
                short: "ZZZ"
            }
        }
          , iE = null;
        function iM(e, t) {
            return Array.prototype.concat(...e.map(e => (function(e, t) {
                if (e.literal)
                    return e;
                let i = iD(tb.macroTokenToFormatOpts(e.val), t);
                return null == i || i.includes(void 0) ? e : i
            }
            )(e, t)))
        }
        class iA {
            constructor(e, t) {
                if (this.locale = e,
                this.format = t,
                this.tokens = iM(tb.parseFormat(t), e),
                this.units = this.tokens.map(t => (function(e, t) {
                    let i = ex(t)
                      , s = ex(t, "{2}")
                      , n = ex(t, "{3}")
                      , r = ex(t, "{4}")
                      , a = ex(t, "{6}")
                      , o = ex(t, "{1,2}")
                      , l = ex(t, "{1,3}")
                      , u = ex(t, "{1,6}")
                      , c = ex(t, "{1,9}")
                      , h = ex(t, "{2,4}")
                      , d = ex(t, "{4,6}")
                      , m = e => ({
                        regex: RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")),
                        deser: ([e]) => e,
                        literal: !0
                    })
                      , p = (p => {
                        if (e.literal)
                            return m(p);
                        switch (p.val) {
                        case "G":
                            return ij(t.eras("short"), 0);
                        case "GG":
                            return ij(t.eras("long"), 0);
                        case "y":
                            return iv(u);
                        case "yy":
                        case "kk":
                            return iv(h, te);
                        case "yyyy":
                        case "kkkk":
                            return iv(r);
                        case "yyyyy":
                            return iv(d);
                        case "yyyyyy":
                            return iv(a);
                        case "M":
                        case "L":
                        case "d":
                        case "H":
                        case "h":
                        case "m":
                        case "q":
                        case "s":
                        case "W":
                            return iv(o);
                        case "MM":
                        case "LL":
                        case "dd":
                        case "HH":
                        case "hh":
                        case "mm":
                        case "qq":
                        case "ss":
                        case "WW":
                            return iv(s);
                        case "MMM":
                            return ij(t.months("short", !0), 1);
                        case "MMMM":
                            return ij(t.months("long", !0), 1);
                        case "LLL":
                            return ij(t.months("short", !1), 1);
                        case "LLLL":
                            return ij(t.months("long", !1), 1);
                        case "o":
                        case "S":
                            return iv(l);
                        case "ooo":
                        case "SSS":
                            return iv(n);
                        case "u":
                            return ik(c);
                        case "uu":
                            return ik(o);
                        case "uuu":
                        case "E":
                        case "c":
                            return iv(i);
                        case "a":
                            return ij(t.meridiems(), 0);
                        case "EEE":
                            return ij(t.weekdays("short", !1), 1);
                        case "EEEE":
                            return ij(t.weekdays("long", !1), 1);
                        case "ccc":
                            return ij(t.weekdays("short", !0), 1);
                        case "cccc":
                            return ij(t.weekdays("long", !0), 1);
                        case "Z":
                        case "ZZ":
                            return iT(RegExp(`([+-]${o.source})(?::(${s.source}))?`), 2);
                        case "ZZZ":
                            return iT(RegExp(`([+-]${o.source})(${s.source})?`), 2);
                        case "z":
                            return ik(/[a-z_+-/]{1,256}?/i);
                        case " ":
                            return ik(/[^\S\n\r]/);
                        default:
                            return m(p)
                        }
                    }
                    )(e) || {
                        invalidReason: "missing Intl.DateTimeFormat.formatToParts support"
                    };
                    return p.token = e,
                    p
                }
                )(t, e)),
                this.disqualifyingUnit = this.units.find(e => e.invalidReason),
                !this.disqualifyingUnit) {
                    let[e,t] = function(e) {
                        let t = e.map(e => e.regex).reduce( (e, t) => `${e}(${t.source})`, "");
                        return [`^${t}$`, e]
                    }(this.units);
                    this.regex = RegExp(e, "i"),
                    this.handlers = t
                }
            }
            explainFromTokens(e) {
                if (!this.isValid)
                    return {
                        input: e,
                        tokens: this.tokens,
                        invalidReason: this.invalidReason
                    };
                {
                    let[t,i] = function(e, t, i) {
                        let s = e.match(t);
                        if (!s)
                            return [s, {}];
                        {
                            let e = {}
                              , t = 1;
                            for (let n in i)
                                if (eG(i, n)) {
                                    let r = i[n]
                                      , a = r.groups ? r.groups + 1 : 1;
                                    !r.literal && r.token && (e[r.token.val[0]] = r.deser(s.slice(t, t + a))),
                                    t += a
                                }
                            return [s, e]
                        }
                    }(e, this.regex, this.handlers)
                      , [s,n,r] = i ? function(e) {
                        let t, i = e => {
                            switch (e) {
                            case "S":
                                return "millisecond";
                            case "s":
                                return "second";
                            case "m":
                                return "minute";
                            case "h":
                            case "H":
                                return "hour";
                            case "d":
                                return "day";
                            case "o":
                                return "ordinal";
                            case "L":
                            case "M":
                                return "month";
                            case "y":
                                return "year";
                            case "E":
                            case "c":
                                return "weekday";
                            case "W":
                                return "weekNumber";
                            case "k":
                                return "weekYear";
                            case "q":
                                return "quarter";
                            default:
                                return null
                            }
                        }
                        , s = null;
                        return eU(e.z) || (s = G.create(e.z)),
                        eU(e.Z) || (s || (s = new em(e.Z)),
                        t = e.Z),
                        eU(e.q) || (e.M = (e.q - 1) * 3 + 1),
                        eU(e.h) || (e.h < 12 && 1 === e.a ? e.h += 12 : 12 === e.h && 0 === e.a && (e.h = 0)),
                        0 === e.G && e.y && (e.y = -e.y),
                        eU(e.u) || (e.S = e2(e.u)),
                        [Object.keys(e).reduce( (t, s) => {
                            let n = i(s);
                            return n && (t[n] = e[s]),
                            t
                        }
                        , {}), s, t]
                    }(i) : [null, null, void 0];
                    if (eG(i, "a") && eG(i, "H"))
                        throw new f("Can't include meridiem when specifying 24-hour format");
                    return {
                        input: e,
                        tokens: this.tokens,
                        regex: this.regex,
                        rawMatches: t,
                        matches: i,
                        result: s,
                        zone: n,
                        specificOffset: r
                    }
                }
            }
            get isValid() {
                return !this.disqualifyingUnit
            }
            get invalidReason() {
                return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null
            }
        }
        function iN(e, t, i) {
            return new iA(e,i).explainFromTokens(t)
        }
        function iD(e, t) {
            if (!e)
                return null;
            let i = tb.create(t, e).dtFormatter((iE || (iE = i5.fromMillis(0x16a2e5618e3)),
            iE))
              , s = i.formatToParts()
              , n = i.resolvedOptions();
            return s.map(t => (function(e, t, i) {
                let {type: s, value: n} = e;
                if ("literal" === s) {
                    let e = /^\s+$/.test(n);
                    return {
                        literal: !e,
                        val: e ? " " : n
                    }
                }
                let r = t[s]
                  , a = s;
                "hour" === s && (a = null != t.hour12 ? t.hour12 ? "hour12" : "hour24" : null != t.hourCycle ? "h11" === t.hourCycle || "h12" === t.hourCycle ? "hour12" : "hour24" : i.hour12 ? "hour12" : "hour24");
                let o = iS[a];
                if ("object" == typeof o && (o = o[r]),
                o)
                    return {
                        literal: !1,
                        val: o
                    }
            }
            )(t, e, n))
        }
        let i_ = "Invalid DateTime";
        function iV(e) {
            return new eA("unsupported zone",`the zone "${e.name}" is not supported`)
        }
        function iP(e) {
            return null === e.weekData && (e.weekData = eI(e.c)),
            e.weekData
        }
        function iO(e) {
            return null === e.localWeekData && (e.localWeekData = eI(e.c, e.loc.getMinDaysInFirstWeek(), e.loc.getStartOfWeek())),
            e.localWeekData
        }
        function iI(e, t) {
            let i = {
                ts: e.ts,
                zone: e.zone,
                c: e.c,
                o: e.o,
                loc: e.loc,
                invalid: e.invalid
            };
            return new i5({
                ...i,
                ...t,
                old: i
            })
        }
        function iF(e, t, i) {
            let s = e - 60 * t * 1e3
              , n = i.offset(s);
            if (t === n)
                return [s, t];
            s -= (n - t) * 6e4;
            let r = i.offset(s);
            return n === r ? [s, n] : [e - 60 * Math.min(n, r) * 1e3, Math.max(n, r)]
        }
        function iR(e, t) {
            let i = new Date(e += 60 * t * 1e3);
            return {
                year: i.getUTCFullYear(),
                month: i.getUTCMonth() + 1,
                day: i.getUTCDate(),
                hour: i.getUTCHours(),
                minute: i.getUTCMinutes(),
                second: i.getUTCSeconds(),
                millisecond: i.getUTCMilliseconds()
            }
        }
        function iB(e, t) {
            let i = e.o
              , s = e.c.year + Math.trunc(t.years)
              , n = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters)
              , r = {
                ...e.c,
                year: s,
                month: n,
                day: Math.min(e.c.day, e7(s, n)) + Math.trunc(t.days) + 7 * Math.trunc(t.weeks)
            }
              , a = id.fromObject({
                years: t.years - Math.trunc(t.years),
                quarters: t.quarters - Math.trunc(t.quarters),
                months: t.months - Math.trunc(t.months),
                weeks: t.weeks - Math.trunc(t.weeks),
                days: t.days - Math.trunc(t.days),
                hours: t.hours,
                minutes: t.minutes,
                seconds: t.seconds,
                milliseconds: t.milliseconds
            }).as("milliseconds")
              , [o,l] = iF(e8(r), i, e.zone);
            return 0 !== a && (o += a,
            l = e.zone.offset(o)),
            {
                ts: o,
                o: l
            }
        }
        function iZ(e, t, i, s, n, r) {
            let {setZone: a, zone: o} = i;
            if ((!e || 0 === Object.keys(e).length) && !t)
                return i5.invalid(new eA("unparsable",`the input "${n}" can't be parsed as ${s}`));
            {
                let s = i5.fromObject(e, {
                    ...i,
                    zone: t || o,
                    specificOffset: r
                });
                return a ? s : s.setZone(o)
            }
        }
        function iW(e, t, i=!0) {
            return e.isValid ? tb.create(eh.create("en-US"), {
                allowZ: i,
                forceSimple: !0
            }).formatDateTimeFromString(e, t) : null
        }
        function iz(e, t, i) {
            let s = e.c.year > 9999 || e.c.year < 0
              , n = "";
            if (s && e.c.year >= 0 && (n += "+"),
            n += eQ(e.c.year, s ? 6 : 4),
            "year" === i)
                return n;
            if (t) {
                if (n += "-",
                n += eQ(e.c.month),
                "month" === i)
                    return n;
                n += "-"
            } else if (n += eQ(e.c.month),
            "month" === i)
                return n;
            return n + eQ(e.c.day)
        }
        function iU(e, t, i, s, n, r, a) {
            let o = !i || 0 !== e.c.millisecond || 0 !== e.c.second
              , l = "";
            switch (a) {
            case "day":
            case "month":
            case "year":
                break;
            default:
                if (l += eQ(e.c.hour),
                "hour" === a)
                    break;
                if (t) {
                    if (l += ":",
                    l += eQ(e.c.minute),
                    "minute" === a)
                        break;
                    o && (l += ":",
                    l += eQ(e.c.second))
                } else {
                    if (l += eQ(e.c.minute),
                    "minute" === a)
                        break;
                    o && (l += eQ(e.c.second))
                }
                if ("second" === a)
                    break;
                o && (!s || 0 !== e.c.millisecond) && (l += ".",
                l += eQ(e.c.millisecond, 3))
            }
            return n && (e.isOffsetFixed && 0 === e.offset && !r ? l += "Z" : e.o < 0 ? (l += "-",
            l += eQ(Math.trunc(-e.o / 60)),
            l += ":",
            l += eQ(Math.trunc(-e.o % 60))) : (l += "+",
            l += eQ(Math.trunc(e.o / 60)),
            l += ":",
            l += eQ(Math.trunc(e.o % 60)))),
            r && (l += "[" + e.zone.ianaName + "]"),
            l
        }
        let iH = {
            month: 1,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        }
          , i$ = {
            weekNumber: 1,
            weekday: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        }
          , iq = {
            ordinal: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        }
          , iY = ["year", "month", "day", "hour", "minute", "second", "millisecond"]
          , iX = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"]
          , iG = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
        function iJ(e) {
            let t = {
                year: "year",
                years: "year",
                month: "month",
                months: "month",
                day: "day",
                days: "day",
                hour: "hour",
                hours: "hour",
                minute: "minute",
                minutes: "minute",
                quarter: "quarter",
                quarters: "quarter",
                second: "second",
                seconds: "second",
                millisecond: "millisecond",
                milliseconds: "millisecond",
                weekday: "weekday",
                weekdays: "weekday",
                weeknumber: "weekNumber",
                weeksnumber: "weekNumber",
                weeknumbers: "weekNumber",
                weekyear: "weekYear",
                weekyears: "weekYear",
                ordinal: "ordinal"
            }[e.toLowerCase()];
            if (!t)
                throw new g(e);
            return t
        }
        function iK(e) {
            switch (e.toLowerCase()) {
            case "localweekday":
            case "localweekdays":
                return "localWeekday";
            case "localweeknumber":
            case "localweeknumbers":
                return "localWeekNumber";
            case "localweekyear":
            case "localweekyears":
                return "localWeekYear";
            default:
                return iJ(e)
            }
        }
        function iQ(e, t) {
            let i, n, r = ef(t.zone, eM.defaultZone);
            if (!r.isValid)
                return i5.invalid(iV(r));
            let a = eh.fromObject(t);
            if (eU(e.year))
                i = eM.now();
            else {
                for (let t of iY)
                    eU(e[t]) && (e[t] = iH[t]);
                let t = eW(e) || ez(e);
                if (t)
                    return i5.invalid(t);
                let a = function(e) {
                    if (void 0 === s && (s = eM.now()),
                    "iana" !== e.type)
                        return e.offset(s);
                    let t = e.name
                      , i = i2.get(t);
                    return void 0 === i && (i = e.offset(s),
                    i2.set(t, i)),
                    i
                }(r);
                [i,n] = iF(e8(e), a, r)
            }
            return new i5({
                ts: i,
                zone: r,
                loc: a,
                o: n
            })
        }
        function i1(e, t, i) {
            let s = !!eU(i.round) || i.round
              , n = eU(i.rounding) ? "trunc" : i.rounding
              , r = (e, r) => (e = e5(e, s || i.calendary ? 0 : 2, i.calendary ? "round" : n),
            t.loc.clone(i).relFormatter(i).format(e, r))
              , a = s => i.calendary ? t.hasSame(e, s) ? 0 : t.startOf(s).diff(e.startOf(s), s).get(s) : t.diff(e, s).get(s);
            if (i.unit)
                return r(a(i.unit), i.unit);
            for (let e of i.units) {
                let t = a(e);
                if (Math.abs(t) >= 1)
                    return r(t, e)
            }
            return r(e > t ? -0 : 0, i.units[i.units.length - 1])
        }
        function i0(e) {
            let t = {}, i;
            return e.length > 0 && "object" == typeof e[e.length - 1] ? (t = e[e.length - 1],
            i = Array.from(e).slice(0, e.length - 1)) : i = Array.from(e),
            [t, i]
        }
        let i2 = new Map;
        class i5 {
            constructor(e) {
                let t = e.zone || eM.defaultZone
                  , i = e.invalid || (Number.isNaN(e.ts) ? new eA("invalid input") : null) || (t.isValid ? null : iV(t));
                this.ts = eU(e.ts) ? eM.now() : e.ts;
                let s = null
                  , n = null;
                if (!i)
                    if (e.old && e.old.ts === this.ts && e.old.zone.equals(t))
                        [s,n] = [e.old.c, e.old.o];
                    else {
                        let r = eH(e.o) && !e.old ? e.o : t.offset(this.ts);
                        s = (i = Number.isNaN((s = iR(this.ts, r)).year) ? new eA("invalid input") : null) ? null : s,
                        n = i ? null : r
                    }
                this._zone = t,
                this.loc = e.loc || eh.create(),
                this.invalid = i,
                this.weekData = null,
                this.localWeekData = null,
                this.c = s,
                this.o = n,
                this.isLuxonDateTime = !0
            }
            static now() {
                return new i5({})
            }
            static local() {
                let[e,t] = i0(arguments)
                  , [i,s,n,r,a,o,l] = t;
                return iQ({
                    year: i,
                    month: s,
                    day: n,
                    hour: r,
                    minute: a,
                    second: o,
                    millisecond: l
                }, e)
            }
            static utc() {
                let[e,t] = i0(arguments)
                  , [i,s,n,r,a,o,l] = t;
                return e.zone = em.utcInstance,
                iQ({
                    year: i,
                    month: s,
                    day: n,
                    hour: r,
                    minute: a,
                    second: o,
                    millisecond: l
                }, e)
            }
            static fromJSDate(e, t={}) {
                let i = "[object Date]" === Object.prototype.toString.call(e) ? e.valueOf() : NaN;
                if (Number.isNaN(i))
                    return i5.invalid("invalid input");
                let s = ef(t.zone, eM.defaultZone);
                return s.isValid ? new i5({
                    ts: i,
                    zone: s,
                    loc: eh.fromObject(t)
                }) : i5.invalid(iV(s))
            }
            static fromMillis(e, t={}) {
                if (eH(e))
                    if (e < -864e13 || e > 864e13)
                        return i5.invalid("Timestamp out of range");
                    else
                        return new i5({
                            ts: e,
                            zone: ef(t.zone, eM.defaultZone),
                            loc: eh.fromObject(t)
                        });
                throw new y(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)
            }
            static fromSeconds(e, t={}) {
                if (eH(e))
                    return new i5({
                        ts: 1e3 * e,
                        zone: ef(t.zone, eM.defaultZone),
                        loc: eh.fromObject(t)
                    });
                throw new y("fromSeconds requires a numerical input")
            }
            static fromObject(e, t={}) {
                var i;
                e = e || {};
                let s = ef(t.zone, eM.defaultZone);
                if (!s.isValid)
                    return i5.invalid(iV(s));
                let n = eh.fromObject(t)
                  , r = tn(e, iK)
                  , {minDaysInFirstWeek: a, startOfWeek: o} = eZ(r, n)
                  , l = eM.now()
                  , u = eU(t.specificOffset) ? s.offset(l) : t.specificOffset
                  , c = !eU(r.ordinal)
                  , h = !eU(r.year)
                  , d = !eU(r.month) || !eU(r.day)
                  , m = h || d
                  , p = r.weekYear || r.weekNumber;
                if ((m || c) && p)
                    throw new f("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
                if (d && c)
                    throw new f("Can't mix ordinal dates with month/day");
                let g = p || r.weekday && !m, y, v, w = iR(l, u);
                g ? (y = iX,
                v = i$,
                w = eI(w, a, o)) : c ? (y = iG,
                v = iq,
                w = eR(w)) : (y = iY,
                v = iH);
                let x = !1;
                for (let e of y)
                    eU(r[e]) ? x ? r[e] = v[e] : r[e] = w[e] : x = !0;
                let C = (g ? function(e, t=4, i=1) {
                    let s = e$(e.weekYear)
                      , n = eK(e.weekNumber, 1, e9(e.weekYear, t, i))
                      , r = eK(e.weekday, 1, 7);
                    return s ? n ? !r && e_("weekday", e.weekday) : e_("week", e.weekNumber) : e_("weekYear", e.weekYear)
                }(r, a, o) : c ? function(e) {
                    let t = e$(e.year)
                      , i = eK(e.ordinal, 1, e4(e.year));
                    return t ? !i && e_("ordinal", e.ordinal) : e_("year", e.year)
                }(r) : eW(r)) || ez(r);
                if (C)
                    return i5.invalid(C);
                let[b,L] = (i = g ? eF(r, a, o) : c ? eB(r) : r,
                iF(e8(i), u, s))
                  , j = new i5({
                    ts: b,
                    zone: s,
                    o: L,
                    loc: n
                });
                return r.weekday && m && e.weekday !== j.weekday ? i5.invalid("mismatched weekday", `you can't specify both a weekday of ${r.weekday} and a date of ${j.toISO()}`) : j.isValid ? j : i5.invalid(j.invalid)
            }
            static fromISO(e, t={}) {
                let[i,s] = tk(e, [tQ, t5], [t1, t3], [t0, t4], [t2, t7]);
                return iZ(i, s, t, "ISO 8601", e)
            }
            static fromRFC2822(e, t={}) {
                let[i,s] = tk(e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim(), [t$, tq]);
                return iZ(i, s, t, "RFC 2822", e)
            }
            static fromHTTP(e, t={}) {
                let[i,s] = tk(e, [tY, tJ], [tX, tJ], [tG, tK]);
                return iZ(i, s, t, "HTTP", t)
            }
            static fromFormat(e, t, i={}) {
                if (eU(e) || eU(t))
                    throw new y("fromFormat requires an input string and a format");
                let {locale: s=null, numberingSystem: n=null} = i
                  , [r,a,o,l] = function(e, t, i) {
                    let {result: s, zone: n, specificOffset: r, invalidReason: a} = iN(e, t, i);
                    return [s, n, r, a]
                }(eh.fromOpts({
                    locale: s,
                    numberingSystem: n,
                    defaultToEN: !0
                }), e, t);
                return l ? i5.invalid(l) : iZ(r, a, i, `format ${t}`, e, o)
            }
            static fromString(e, t, i={}) {
                return i5.fromFormat(e, t, i)
            }
            static fromSQL(e, t={}) {
                let[i,s] = tk(e, [t6, t5], [t9, ie]);
                return iZ(i, s, t, "SQL", e)
            }
            static invalid(e, t=null) {
                if (!e)
                    throw new y("need to specify a reason the DateTime is invalid");
                let i = e instanceof eA ? e : new eA(e,t);
                if (!eM.throwOnInvalid)
                    return new i5({
                        invalid: i
                    });
                throw new d(i)
            }
            static isDateTime(e) {
                return e && e.isLuxonDateTime || !1
            }
            static parseFormatForOpts(e, t={}) {
                let i = iD(e, eh.fromObject(t));
                return i ? i.map(e => e ? e.val : null).join("") : null
            }
            static expandFormat(e, t={}) {
                return iM(tb.parseFormat(e), eh.fromObject(t)).map(e => e.val).join("")
            }
            static resetCache() {
                s = void 0,
                i2.clear()
            }
            get(e) {
                return this[e]
            }
            get isValid() {
                return null === this.invalid
            }
            get invalidReason() {
                return this.invalid ? this.invalid.reason : null
            }
            get invalidExplanation() {
                return this.invalid ? this.invalid.explanation : null
            }
            get locale() {
                return this.isValid ? this.loc.locale : null
            }
            get numberingSystem() {
                return this.isValid ? this.loc.numberingSystem : null
            }
            get outputCalendar() {
                return this.isValid ? this.loc.outputCalendar : null
            }
            get zone() {
                return this._zone
            }
            get zoneName() {
                return this.isValid ? this.zone.name : null
            }
            get year() {
                return this.isValid ? this.c.year : NaN
            }
            get quarter() {
                return this.isValid ? Math.ceil(this.c.month / 3) : NaN
            }
            get month() {
                return this.isValid ? this.c.month : NaN
            }
            get day() {
                return this.isValid ? this.c.day : NaN
            }
            get hour() {
                return this.isValid ? this.c.hour : NaN
            }
            get minute() {
                return this.isValid ? this.c.minute : NaN
            }
            get second() {
                return this.isValid ? this.c.second : NaN
            }
            get millisecond() {
                return this.isValid ? this.c.millisecond : NaN
            }
            get weekYear() {
                return this.isValid ? iP(this).weekYear : NaN
            }
            get weekNumber() {
                return this.isValid ? iP(this).weekNumber : NaN
            }
            get weekday() {
                return this.isValid ? iP(this).weekday : NaN
            }
            get isWeekend() {
                return this.isValid && this.loc.getWeekendDays().includes(this.weekday)
            }
            get localWeekday() {
                return this.isValid ? iO(this).weekday : NaN
            }
            get localWeekNumber() {
                return this.isValid ? iO(this).weekNumber : NaN
            }
            get localWeekYear() {
                return this.isValid ? iO(this).weekYear : NaN
            }
            get ordinal() {
                return this.isValid ? eR(this.c).ordinal : NaN
            }
            get monthShort() {
                return this.isValid ? ig.months("short", {
                    locObj: this.loc
                })[this.month - 1] : null
            }
            get monthLong() {
                return this.isValid ? ig.months("long", {
                    locObj: this.loc
                })[this.month - 1] : null
            }
            get weekdayShort() {
                return this.isValid ? ig.weekdays("short", {
                    locObj: this.loc
                })[this.weekday - 1] : null
            }
            get weekdayLong() {
                return this.isValid ? ig.weekdays("long", {
                    locObj: this.loc
                })[this.weekday - 1] : null
            }
            get offset() {
                return this.isValid ? +this.o : NaN
            }
            get offsetNameShort() {
                return this.isValid ? this.zone.offsetName(this.ts, {
                    format: "short",
                    locale: this.locale
                }) : null
            }
            get offsetNameLong() {
                return this.isValid ? this.zone.offsetName(this.ts, {
                    format: "long",
                    locale: this.locale
                }) : null
            }
            get isOffsetFixed() {
                return this.isValid ? this.zone.isUniversal : null
            }
            get isInDST() {
                return !this.isOffsetFixed && (this.offset > this.set({
                    month: 1,
                    day: 1
                }).offset || this.offset > this.set({
                    month: 5
                }).offset)
            }
            getPossibleOffsets() {
                if (!this.isValid || this.isOffsetFixed)
                    return [this];
                let e = e8(this.c)
                  , t = this.zone.offset(e - 864e5)
                  , i = this.zone.offset(e + 864e5)
                  , s = this.zone.offset(e - 6e4 * t)
                  , n = this.zone.offset(e - 6e4 * i);
                if (s === n)
                    return [this];
                let r = e - 6e4 * s
                  , a = e - 6e4 * n
                  , o = iR(r, s)
                  , l = iR(a, n);
                return o.hour === l.hour && o.minute === l.minute && o.second === l.second && o.millisecond === l.millisecond ? [iI(this, {
                    ts: r
                }), iI(this, {
                    ts: a
                })] : [this]
            }
            get isInLeapYear() {
                return e3(this.year)
            }
            get daysInMonth() {
                return e7(this.year, this.month)
            }
            get daysInYear() {
                return this.isValid ? e4(this.year) : NaN
            }
            get weeksInWeekYear() {
                return this.isValid ? e9(this.weekYear) : NaN
            }
            get weeksInLocalWeekYear() {
                return this.isValid ? e9(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek()) : NaN
            }
            resolvedLocaleOptions(e={}) {
                let {locale: t, numberingSystem: i, calendar: s} = tb.create(this.loc.clone(e), e).resolvedOptions(this);
                return {
                    locale: t,
                    numberingSystem: i,
                    outputCalendar: s
                }
            }
            toUTC(e=0, t={}) {
                return this.setZone(em.instance(e), t)
            }
            toLocal() {
                return this.setZone(eM.defaultZone)
            }
            setZone(e, {keepLocalTime: t=!1, keepCalendarTime: i=!1}={}) {
                if ((e = ef(e, eM.defaultZone)).equals(this.zone))
                    return this;
                {
                    if (!e.isValid)
                        return i5.invalid(iV(e));
                    let n = this.ts;
                    if (t || i) {
                        var s;
                        let t = e.offset(this.ts)
                          , i = this.toObject();
                        [n] = (s = e,
                        iF(e8(i), t, s))
                    }
                    return iI(this, {
                        ts: n,
                        zone: e
                    })
                }
            }
            reconfigure({locale: e, numberingSystem: t, outputCalendar: i}={}) {
                return iI(this, {
                    loc: this.loc.clone({
                        locale: e,
                        numberingSystem: t,
                        outputCalendar: i
                    })
                })
            }
            setLocale(e) {
                return this.reconfigure({
                    locale: e
                })
            }
            set(e) {
                var t, i, s;
                let n;
                if (!this.isValid)
                    return this;
                let r = tn(e, iK)
                  , {minDaysInFirstWeek: a, startOfWeek: o} = eZ(r, this.loc)
                  , l = !eU(r.weekYear) || !eU(r.weekNumber) || !eU(r.weekday)
                  , u = !eU(r.ordinal)
                  , c = !eU(r.year)
                  , h = !eU(r.month) || !eU(r.day)
                  , d = r.weekYear || r.weekNumber;
                if ((c || h || u) && d)
                    throw new f("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
                if (h && u)
                    throw new f("Can't mix ordinal dates with month/day");
                l ? n = eF({
                    ...eI(this.c, a, o),
                    ...r
                }, a, o) : eU(r.ordinal) ? (n = {
                    ...this.toObject(),
                    ...r
                },
                eU(r.day) && (n.day = Math.min(e7(n.year, n.month), n.day))) : n = eB({
                    ...eR(this.c),
                    ...r
                });
                let[m,p] = (t = n,
                i = this.o,
                s = this.zone,
                iF(e8(t), i, s));
                return iI(this, {
                    ts: m,
                    o: p
                })
            }
            plus(e) {
                return this.isValid ? iI(this, iB(this, id.fromDurationLike(e))) : this
            }
            minus(e) {
                return this.isValid ? iI(this, iB(this, id.fromDurationLike(e).negate())) : this
            }
            startOf(e, {useLocaleWeeks: t=!1}={}) {
                if (!this.isValid)
                    return this;
                let i = {}
                  , s = id.normalizeUnit(e);
                switch (s) {
                case "years":
                    i.month = 1;
                case "quarters":
                case "months":
                    i.day = 1;
                case "weeks":
                case "days":
                    i.hour = 0;
                case "hours":
                    i.minute = 0;
                case "minutes":
                    i.second = 0;
                case "seconds":
                    i.millisecond = 0
                }
                if ("weeks" === s)
                    if (t) {
                        let e = this.loc.getStartOfWeek()
                          , {weekday: t} = this;
                        t < e && (i.weekNumber = this.weekNumber - 1),
                        i.weekday = e
                    } else
                        i.weekday = 1;
                return "quarters" === s && (i.month = (Math.ceil(this.month / 3) - 1) * 3 + 1),
                this.set(i)
            }
            endOf(e, t) {
                return this.isValid ? this.plus({
                    [e]: 1
                }).startOf(e, t).minus(1) : this
            }
            toFormat(e, t={}) {
                return this.isValid ? tb.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : i_
            }
            toLocaleString(e=b, t={}) {
                return this.isValid ? tb.create(this.loc.clone(t), e).formatDateTime(this) : i_
            }
            toLocaleParts(e={}) {
                return this.isValid ? tb.create(this.loc.clone(e), e).formatDateTimeParts(this) : []
            }
            toISO({format: e="extended", suppressSeconds: t=!1, suppressMilliseconds: i=!1, includeOffset: s=!0, extendedZone: n=!1, precision: r="milliseconds"}={}) {
                if (!this.isValid)
                    return null;
                r = iJ(r);
                let a = "extended" === e
                  , o = iz(this, a, r);
                return iY.indexOf(r) >= 3 && (o += "T"),
                o += iU(this, a, t, i, s, n, r)
            }
            toISODate({format: e="extended", precision: t="day"}={}) {
                return this.isValid ? iz(this, "extended" === e, iJ(t)) : null
            }
            toISOWeekDate() {
                return iW(this, "kkkk-'W'WW-c")
            }
            toISOTime({suppressMilliseconds: e=!1, suppressSeconds: t=!1, includeOffset: i=!0, includePrefix: s=!1, extendedZone: n=!1, format: r="extended", precision: a="milliseconds"}={}) {
                return this.isValid ? (a = iJ(a),
                (s && iY.indexOf(a) >= 3 ? "T" : "") + iU(this, "extended" === r, t, e, i, n, a)) : null
            }
            toRFC2822() {
                return iW(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1)
            }
            toHTTP() {
                return iW(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'")
            }
            toSQLDate() {
                return this.isValid ? iz(this, !0) : null
            }
            toSQLTime({includeOffset: e=!0, includeZone: t=!1, includeOffsetSpace: i=!0}={}) {
                let s = "HH:mm:ss.SSS";
                return (t || e) && (i && (s += " "),
                t ? s += "z" : e && (s += "ZZ")),
                iW(this, s, !0)
            }
            toSQL(e={}) {
                return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null
            }
            toString() {
                return this.isValid ? this.toISO() : i_
            }
            [Symbol.for("nodejs.util.inspect.custom")]() {
                return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`
            }
            valueOf() {
                return this.toMillis()
            }
            toMillis() {
                return this.isValid ? this.ts : NaN
            }
            toSeconds() {
                return this.isValid ? this.ts / 1e3 : NaN
            }
            toUnixInteger() {
                return this.isValid ? Math.floor(this.ts / 1e3) : NaN
            }
            toJSON() {
                return this.toISO()
            }
            toBSON() {
                return this.toJSDate()
            }
            toObject(e={}) {
                if (!this.isValid)
                    return {};
                let t = {
                    ...this.c
                };
                return e.includeConfig && (t.outputCalendar = this.outputCalendar,
                t.numberingSystem = this.loc.numberingSystem,
                t.locale = this.loc.locale),
                t
            }
            toJSDate() {
                return new Date(this.isValid ? this.ts : NaN)
            }
            diff(e, t="milliseconds", i={}) {
                if (!this.isValid || !e.isValid)
                    return id.invalid("created by diffing an invalid DateTime");
                let s = {
                    locale: this.locale,
                    numberingSystem: this.numberingSystem,
                    ...i
                }
                  , n = (Array.isArray(t) ? t : [t]).map(id.normalizeUnit)
                  , r = e.valueOf() > this.valueOf()
                  , a = function(e, t, i, s) {
                    let[n,r,a,o] = function(e, t, i) {
                        let s, n, r = {}, a = e;
                        for (let[o,l] of [["years", (e, t) => t.year - e.year], ["quarters", (e, t) => t.quarter - e.quarter + (t.year - e.year) * 4], ["months", (e, t) => t.month - e.month + (t.year - e.year) * 12], ["weeks", (e, t) => {
                            let i = iy(e, t);
                            return (i - i % 7) / 7
                        }
                        ], ["days", iy]])
                            i.indexOf(o) >= 0 && (s = o,
                            r[o] = l(e, t),
                            (n = a.plus(r)) > t ? (r[o]--,
                            (e = a.plus(r)) > t && (n = e,
                            r[o]--,
                            e = a.plus(r))) : e = n);
                        return [e, r, n, s]
                    }(e, t, i)
                      , l = t - n
                      , u = i.filter(e => ["hours", "minutes", "seconds", "milliseconds"].indexOf(e) >= 0);
                    0 === u.length && (a < t && (a = n.plus({
                        [o]: 1
                    })),
                    a !== n && (r[o] = (r[o] || 0) + l / (a - n)));
                    let c = id.fromObject(r, s);
                    return u.length > 0 ? id.fromMillis(l, s).shiftTo(...u).plus(c) : c
                }(r ? this : e, r ? e : this, n, s);
                return r ? a.negate() : a
            }
            diffNow(e="milliseconds", t={}) {
                return this.diff(i5.now(), e, t)
            }
            until(e) {
                return this.isValid ? ip.fromDateTimes(this, e) : this
            }
            hasSame(e, t, i) {
                if (!this.isValid)
                    return !1;
                let s = e.valueOf()
                  , n = this.setZone(e.zone, {
                    keepLocalTime: !0
                });
                return n.startOf(t, i) <= s && s <= n.endOf(t, i)
            }
            equals(e) {
                return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc)
            }
            toRelative(e={}) {
                if (!this.isValid)
                    return null;
                let t = e.base || i5.fromObject({}, {
                    zone: this.zone
                })
                  , i = e.padding ? this < t ? -e.padding : e.padding : 0
                  , s = ["years", "months", "days", "hours", "minutes", "seconds"]
                  , n = e.unit;
                return Array.isArray(e.unit) && (s = e.unit,
                n = void 0),
                i1(t, this.plus(i), {
                    ...e,
                    numeric: "always",
                    units: s,
                    unit: n
                })
            }
            toRelativeCalendar(e={}) {
                return this.isValid ? i1(e.base || i5.fromObject({}, {
                    zone: this.zone
                }), this, {
                    ...e,
                    numeric: "auto",
                    units: ["years", "months", "days"],
                    calendary: !0
                }) : null
            }
            static min(...e) {
                if (!e.every(i5.isDateTime))
                    throw new y("min requires all arguments be DateTimes");
                return eX(e, e => e.valueOf(), Math.min)
            }
            static max(...e) {
                if (!e.every(i5.isDateTime))
                    throw new y("max requires all arguments be DateTimes");
                return eX(e, e => e.valueOf(), Math.max)
            }
            static fromFormatExplain(e, t, i={}) {
                let {locale: s=null, numberingSystem: n=null} = i;
                return iN(eh.fromOpts({
                    locale: s,
                    numberingSystem: n,
                    defaultToEN: !0
                }), e, t)
            }
            static fromStringExplain(e, t, i={}) {
                return i5.fromFormatExplain(e, t, i)
            }
            static buildFormatParser(e, t={}) {
                let {locale: i=null, numberingSystem: s=null} = t;
                return new iA(eh.fromOpts({
                    locale: i,
                    numberingSystem: s,
                    defaultToEN: !0
                }),e)
            }
            static fromFormatParser(e, t, i={}) {
                if (eU(e) || eU(t))
                    throw new y("fromFormatParser requires an input string and a format parser");
                let {locale: s=null, numberingSystem: n=null} = i
                  , r = eh.fromOpts({
                    locale: s,
                    numberingSystem: n,
                    defaultToEN: !0
                });
                if (!r.equals(t.locale))
                    throw new y(`fromFormatParser called with a locale of ${r}, but the format parser was created for ${t.locale}`);
                let {result: a, zone: o, specificOffset: l, invalidReason: u} = t.explainFromTokens(e);
                return u ? i5.invalid(u) : iZ(a, o, i, `format ${t.format}`, e, l)
            }
            static get DATE_SHORT() {
                return b
            }
            static get DATE_MED() {
                return L
            }
            static get DATE_MED_WITH_WEEKDAY() {
                return j
            }
            static get DATE_FULL() {
                return T
            }
            static get DATE_HUGE() {
                return k
            }
            static get TIME_SIMPLE() {
                return S
            }
            static get TIME_WITH_SECONDS() {
                return E
            }
            static get TIME_WITH_SHORT_OFFSET() {
                return M
            }
            static get TIME_WITH_LONG_OFFSET() {
                return A
            }
            static get TIME_24_SIMPLE() {
                return N
            }
            static get TIME_24_WITH_SECONDS() {
                return D
            }
            static get TIME_24_WITH_SHORT_OFFSET() {
                return _
            }
            static get TIME_24_WITH_LONG_OFFSET() {
                return V
            }
            static get DATETIME_SHORT() {
                return P
            }
            static get DATETIME_SHORT_WITH_SECONDS() {
                return O
            }
            static get DATETIME_MED() {
                return I
            }
            static get DATETIME_MED_WITH_SECONDS() {
                return F
            }
            static get DATETIME_MED_WITH_WEEKDAY() {
                return R
            }
            static get DATETIME_FULL() {
                return B
            }
            static get DATETIME_FULL_WITH_SECONDS() {
                return Z
            }
            static get DATETIME_HUGE() {
                return W
            }
            static get DATETIME_HUGE_WITH_SECONDS() {
                return z
            }
        }
        function i3(e) {
            if (i5.isDateTime(e))
                return e;
            if (e && e.valueOf && eH(e.valueOf()))
                return i5.fromJSDate(e);
            if (e && "object" == typeof e)
                return i5.fromObject(e);
            throw new y(`Unknown datetime argument: ${e}, of type ${typeof e}`)
        }
        var i4 = i(6234)
          , i7 = i(1059);
        async function i8(e, t) {
            await (0,
            u.lA)("plugin:opener|open_url", {
                url: e,
                with: t
            })
        }
        var i6 = i(5784)
          , i9 = i(4397)
          , se = i(6848)
          , st = i(5039)
          , si = i.n(st)
          , ss = i(8106)
          , sn = function(e) {
            return e.ADD = "injected-client",
            e.REMOVE = "ejected-client",
            e.CHANGE = "client-changed",
            e
        }({});
        let sr = (0,
        ss.v)( (e, t) => ({
            clients: [],
            eventQueue: [],
            isProcessing: !1,
            addEvent: i => {
                e(e => ({
                    eventQueue: [...e.eventQueue, i]
                })),
                t().processQueue()
            }
            ,
            processQueue: () => {
                let i = t().eventQueue;
                t().isProcessing || 0 === i.length || (e({
                    isProcessing: !0
                }),
                e(e => {
                    let t = [...e.clients];
                    return e.eventQueue.forEach(e => {
                        let i = {
                            username: e.payload.username,
                            userid: e.payload.userid
                        };
                        switch (e.type) {
                        case sn.ADD:
                            t.some(e => e.userid === i.userid) || t.push({
                                username: i.username,
                                userid: i.userid,
                                avatar: null,
                                timestamp: Math.floor(Date.now() / 1e3),
                                selected: !1
                            });
                            break;
                        case sn.REMOVE:
                            t = t.filter(e => e.username !== i.username);
                        case sn.CHANGE:
                        }
                    }
                    ),
                    {
                        clients: t,
                        eventQueue: [],
                        isProcessing: !1
                    }
                }
                ))
            }
            ,
            toggleClientSelection: t => {
                if (null == t)
                    return e(e => ({
                        clients: e.clients.map(e => ({
                            ...e,
                            selected: !1
                        }))
                    }));
                console.log(t),
                e(e => ({
                    clients: e.clients.map(e => e.userid === t ? {
                        ...e,
                        selected: !e.selected
                    } : e)
                }))
            }
            ,
            changeAvatar: (t, i) => {
                e(e => ({
                    clients: e.clients.map(e => e.userid === t ? {
                        ...e,
                        avatar: i
                    } : e)
                }))
            }
        }));
        var sa = i(2638);
        function so(e) {
            let {anchor: t, items: i, onRequestClose: s} = e
              , r = (0,
            o.useMemo)( () => t ? {
                position: "absolute",
                top: Math.min(t.bottom + 4, window.innerHeight - 8),
                right: 0,
                zIndex: 50
            } : {
                display: "none"
            }, [t]);
            return (0,
            o.useEffect)( () => {
                function e(e) {
                    "Escape" === e.key && s()
                }
                function t() {
                    s()
                }
                return window.addEventListener("keydown", e),
                window.addEventListener("mousedown", t),
                () => {
                    window.removeEventListener("keydown", e),
                    window.removeEventListener("mousedown", t)
                }
            }
            , [s]),
            (0,
            n.jsx)("div", {
                style: r,
                children: (0,
                n.jsx)(se.P.div, {
                    initial: {
                        opacity: 0,
                        scale: .98,
                        y: -2
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: .98,
                        y: -2
                    },
                    transition: {
                        duration: .08
                    },
                    className: "clients-tooltip-dropdown",
                    role: "menu",
                    onMouseDown: e => e.stopPropagation(),
                    children: i
                })
            })
        }
        function sl(e) {
            let {id: t, children: i} = e
              , {openId: s, setOpenId: r} = (0,
            sa.w)()
              , [a,l] = (0,
            o.useState)(null);
            return (0,
            o.useEffect)( () => {
                function e() {
                    r(null)
                }
                return window.addEventListener("blur", e),
                () => window.removeEventListener("blur", e)
            }
            , []),
            (0,
            n.jsxs)("div", {
                style: {
                    position: "relative"
                },
                className: "no-drag",
                children: [(0,
                n.jsx)("div", {
                    className: "titlebar-notification-button",
                    style: {
                        position: "relative"
                    },
                    onClick: e => {
                        var i;
                        (i = e.currentTarget) && l(i.getBoundingClientRect()),
                        r(e => e === t ? null : t)
                    }
                    ,
                    onMouseDown: e => {
                        e.stopPropagation()
                    }
                    ,
                    children: (0,
                    n.jsxs)("svg", {
                        width: "29",
                        height: "24",
                        viewBox: "0 0 29 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0,
                        n.jsx)("path", {
                            d: "M14.0882 0.727941C14.3456 0.590686 14.6544 0.590686 14.9118 0.727941L28.0368 7.72794C28.3219 7.88001 28.5 8.17685 28.5 8.5C28.5 8.82315 28.3219 9.11999 28.0368 9.27206L14.9118 16.2721C14.6544 16.4093 14.3456 16.4093 14.0882 16.2721L0.963235 9.27206C0.678105 9.11999 0.5 8.82315 0.5 8.5C0.5 8.17685 0.678105 7.88001 0.963235 7.72794L14.0882 0.727941Z",
                            fill: "var(--description)"
                        }), (0,
                        n.jsx)("path", {
                            d: "M4.21875 12.9917L0.963235 14.7279C0.678105 14.88 0.5 15.1769 0.5 15.5C0.5 15.8231 0.678105 16.12 0.963235 16.2721L14.0882 23.2721C14.3456 23.4093 14.6544 23.4093 14.9118 23.2721L28.0368 16.2721C28.3219 16.12 28.5 15.8231 28.5 15.5C28.5 15.1769 28.3219 14.88 28.0368 14.7279L24.7812 12.9917L15.7353 17.8162C14.9632 18.2279 14.0368 18.2279 13.2647 17.8162L4.21875 12.9917Z",
                            fill: "var(--description)"
                        })]
                    })
                }), (0,
                n.jsx)(i6.N, {
                    children: s === t && (0,
                    n.jsx)(so, {
                        anchor: a,
                        items: i,
                        onRequestClose: () => r(null)
                    }, s)
                })]
            })
        }
        var su = i(76);
        function sc() {
            let[e,t] = (0,
            o.useState)(null)
              , i = sr(e => e.clients)
              , s = sr(e => e.toggleClientSelection);
            return (0,
            n.jsx)(sl, {
                id: "clients",
                children: (0,
                n.jsxs)("div", {
                    className: "no-drag",
                    children: [0 == i.length && (0,
                    n.jsxs)("div", {
                        className: "clients-tooltip-dropdown-item-body-centered bg-[rgb(var(--card))] rounded-[10px] border-[1px] gap-[10px] border-[rgb(var(--border))] shadow-[inset_0_0_1px_rgb(var(--border))]",
                        children: [(0,
                        n.jsxs)("svg", {
                            width: "60",
                            height: "60",
                            viewBox: "0 0 60 60",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0,
                            n.jsx)("path", {
                                d: "M29.1176 5.84559C29.6691 5.55147 30.3309 5.55147 30.8824 5.84559L59.0074 20.8456C59.6183 21.1715 60 21.8075 60 22.5C60 23.1925 59.6183 23.8285 59.0074 24.1544L30.8824 39.1544C30.3309 39.4485 29.6691 39.4485 29.1176 39.1544L0.992647 24.1544C0.381653 23.8285 0 23.1925 0 22.5C0 21.8075 0.381653 21.1715 0.992647 20.8456L29.1176 5.84559Z",
                                fill: "#C9C9BA"
                            }), (0,
                            n.jsx)("path", {
                                d: "M7.96875 32.125L0.992647 35.8456C0.381653 36.1715 0 36.8075 0 37.5C0 38.1925 0.381653 38.8285 0.992647 39.1544L29.1176 54.1544C29.6691 54.4485 30.3309 54.4485 30.8824 54.1544L59.0074 39.1544C59.6183 38.8285 60 38.1925 60 37.5C60 36.8075 59.6183 36.1715 59.0074 35.8456L52.0312 32.125L32.6471 42.4632C30.9926 43.3456 29.0074 43.3456 27.3529 42.4632L7.96875 32.125Z",
                                fill: "#C9C9BA"
                            })]
                        }), (0,
                        n.jsxs)("div", {
                            className: "flex flex-col gap-[5px] items-center justify-center text-center",
                            children: [(0,
                            n.jsx)("div", {
                                className: "text-[var(--highlight)] font-semibold",
                                children: "Ready to Launch?"
                            }), (0,
                            n.jsxs)("div", {
                                className: "text-[var(--description)] max-w-[296px]",
                                children: ["You don", "'", "t have any active instances yet. Start a new one to see it appear here, ready to connect."]
                            })]
                        })]
                    }), i.length > 0 && (0,
                    n.jsxs)("div", {
                        className: "clients-tooltip-dropdown-items",
                        children: [(0,
                        n.jsxs)("div", {
                            className: si()("clients-tooltip-dropdown-item cursor-pointer", 0 == i.filter(e => e.selected).length ? "bg-[rgb(var(--border))]" : "bg-[rgb(var(--card))]"),
                            onClick: () => s(null),
                            children: [(0,
                            n.jsxs)("div", {
                                className: "clients-tooltip-dropdown-item-content",
                                children: [(0,
                                n.jsx)("div", {
                                    className: "clients-tooltip-dropdown-item-title",
                                    children: "All clients"
                                }), (0,
                                n.jsxs)("div", {
                                    className: "clients-tooltip-dropdown-item-description",
                                    children: [function(e, t) {
                                        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "s";
                                        return "".concat(e, " ").concat(t).concat(1 !== e ? i : "")
                                    }(i.length, "client"), " connected"]
                                })]
                            }), 0 == i.filter(e => e.selected).length && (0,
                            n.jsx)("svg", {
                                width: "19",
                                height: "19",
                                viewBox: "0 0 19 19",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0,
                                n.jsx)("path", {
                                    d: "M19 9.5C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5ZM14.286 5.90148C13.9382 5.55367 13.3743 5.55367 13.0265 5.90148C13.0181 5.90988 13.0102 5.91878 13.0029 5.92812L8.87941 11.1824L6.39335 8.69633C6.04554 8.34852 5.48163 8.34852 5.13382 8.69633C4.78601 9.04414 4.78601 9.60805 5.13382 9.95586L8.27648 13.0985C8.62429 13.4463 9.1882 13.4463 9.53601 13.0985C9.54375 13.0908 9.55107 13.0826 9.55791 13.0741L14.2986 7.14812C14.6338 6.79941 14.6296 6.24503 14.286 5.90148Z",
                                    fill: "#ADCBE4"
                                })
                            })]
                        }), i.map( (i, r) => (0,
                        n.jsxs)(se.P.div, {
                            onHoverStart: () => t(r),
                            onHoverEnd: () => t(null),
                            className: si()("clients-tooltip-dropdown-item  cursor-pointer", i.selected ? "bg-[rgb(var(--border))]" : "bg-[rgb(var(--card))]"),
                            onClick: () => s(i.userid),
                            children: [(0,
                            n.jsxs)("div", {
                                className: "flex gap-[10px] items-center",
                                children: [i.avatar && (0,
                                n.jsx)("img", {
                                    className: "rounded-full",
                                    width: 48,
                                    height: 48,
                                    src: i.avatar
                                }), (0,
                                n.jsxs)("div", {
                                    className: "clients-tooltip-dropdown-item-content",
                                    children: [(0,
                                    n.jsx)("div", {
                                        className: "clients-tooltip-dropdown-item-title",
                                        children: i.username
                                    }), (0,
                                    n.jsxs)("div", {
                                        className: "clients-tooltip-dropdown-item-description",
                                        children: ["Started ", function(e) {
                                            let t = i5.now()
                                              , i = i5.fromSeconds(e)
                                              , s = t.diff(i, ["seconds"]).seconds;
                                            return s < 60 ? "".concat(Math.floor(s), "s") : s < 3600 ? "".concat(Math.floor(s / 60), "m") : s < 86400 ? "".concat(Math.floor(s / 3600), "h") : "".concat(Math.floor(s / 86400), "d")
                                        }(i.timestamp), " ago"]
                                    })]
                                })]
                            }), !i.selected && (0,
                            n.jsx)(i6.N, {
                                mode: "wait",
                                children: (0,
                                n.jsx)(se.P.button, {
                                    initial: !1,
                                    animate: e === r ? {
                                        y: 40,
                                        opacity: 1
                                    } : {
                                        y: 60,
                                        opacity: 1
                                    },
                                    whileHover: {
                                        y: 0,
                                        opacity: .5,
                                        transition: {
                                            duration: .35,
                                            ease: "easeInOut"
                                        }
                                    },
                                    transition: {
                                        duration: .35,
                                        ease: "easeInOut"
                                    },
                                    className: "btn btn-secondary !p-2.5",
                                    onClick: e => {
                                        e.preventDefault(),
                                        e.stopPropagation(),
                                        (0,
                                        su.Ic)("Kill-client", i.username)
                                    }
                                    ,
                                    children: (0,
                                    n.jsx)("svg", {
                                        width: "23",
                                        height: "23",
                                        viewBox: "0 0 23 23",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0,
                                        n.jsx)("path", {
                                            d: "M3.59375 1.4375C2.79984 1.4375 2.15625 2.08109 2.15625 2.875V4.3125C2.15625 5.10641 2.79984 5.75 3.59375 5.75H4.3125V18.6875C4.3125 20.2753 5.59968 21.5625 7.1875 21.5625H15.8125C17.4003 21.5625 18.6875 20.2753 18.6875 18.6875V5.75H19.4062C20.2002 5.75 20.8438 5.10641 20.8438 4.3125V2.875C20.8438 2.08109 20.2002 1.4375 19.4062 1.4375H14.375C14.375 0.643591 13.7314 0 12.9375 0H10.0625C9.26859 0 8.625 0.643591 8.625 1.4375H3.59375ZM7.90625 7.1875C8.30321 7.1875 8.625 7.50929 8.625 7.90625V17.9688C8.625 18.3657 8.3032 18.6875 7.90625 18.6875C7.5093 18.6875 7.1875 18.3657 7.1875 17.9688L7.1875 7.90625C7.1875 7.50929 7.5093 7.1875 7.90625 7.1875ZM11.5 7.1875C11.897 7.1875 12.2188 7.50929 12.2188 7.90625V17.9688C12.2187 18.3657 11.897 18.6875 11.5 18.6875C11.103 18.6875 10.7812 18.3657 10.7812 17.9688V7.90625C10.7813 7.50929 11.103 7.1875 11.5 7.1875ZM15.8125 7.90625V17.9688C15.8125 18.3657 15.4907 18.6875 15.0938 18.6875C14.6968 18.6875 14.375 18.3657 14.375 17.9688V7.90625C14.375 7.50929 14.6968 7.1875 15.0938 7.1875C15.4907 7.1875 15.8125 7.50929 15.8125 7.90625Z",
                                            fill: "#883A3A"
                                        })
                                    })
                                })
                            }), i.selected && (0,
                            n.jsx)("svg", {
                                width: "19",
                                height: "19",
                                viewBox: "0 0 19 19",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0,
                                n.jsx)("path", {
                                    d: "M19 9.5C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5ZM14.286 5.90148C13.9382 5.55367 13.3743 5.55367 13.0265 5.90148C13.0181 5.90988 13.0102 5.91878 13.0029 5.92812L8.87941 11.1824L6.39335 8.69633C6.04554 8.34852 5.48163 8.34852 5.13382 8.69633C4.78601 9.04414 4.78601 9.60805 5.13382 9.95586L8.27648 13.0985C8.62429 13.4463 9.1882 13.4463 9.53601 13.0985C9.54375 13.0908 9.55107 13.0826 9.55791 13.0741L14.2986 7.14812C14.6338 6.79941 14.6296 6.24503 14.286 5.90148Z",
                                    fill: "#ADCBE4"
                                })
                            })]
                        }, r))]
                    })]
                })
            })
        }
        var sh = i(4769);
        function sd() {
            let e = (0,
            i9.i)(e => e.defaultState)
              , t = (0,
            i9.i)(e => e.show)
              , i = (0,
            i9.i)(e => e.changeVisibility)
              , s = (0,
            i9.i)(e => e.text)
              , a = sr(e => e.clients)
              , {addToJournal: u} = (0,
            sh.a)()
              , {uiLoaded: c} = (0,
            r.k)()
              , h = (0,
            o.useRef)(null);
            (0,
            o.useEffect)( () => {
                var e;
                if (!t)
                    return;
                if (!h.current)
                    return console.log("NO1");
                console.log("YES1");
                let i = async e => {
                    var t;
                    let i = await (0,
                    l.uu)();
                    if (!(!(e instanceof MouseEvent) || e.target.closest(".no-drag")) && 1 === e.buttons && (null == (t = h.current) ? void 0 : t.contains(e.target)))
                        if (2 === e.detail) {
                            await i.toggleMaximize();
                            let e = await i.isMaximized()
                              , t = document.getElementById("content");
                            if (t) {
                                if (!e)
                                    return t.style.removeProperty("border-radius");
                                t.style.borderRadius = "10px"
                            }
                        } else
                            await i.startDragging()
                }
                ;
                return null == (e = h.current) || e.addEventListener("mousedown", i),
                () => {
                    var e;
                    null == (e = h.current) || e.removeEventListener("mousedown", i)
                }
            }
            , [e, t]);
            let d = (0,
            o.useRef)(null);
            return (0,
            o.useEffect)( () => {
                let e = null;
                return async function() {
                    let t = await (0,
                    l.uu)();
                    e = await t.listen("Injection-error", async e => {
                        let {payload: t} = e
                          , s = sh.a.getState().patched;
                        d.current && clearTimeout(d.current);
                        let n = i9.i.getState().defaultState
                          , r = n;
                        ["updater", "authorization", "inject_failed", "core_message", "empty"].includes(n) && (r = s ? "patched" : "attached_devices"),
                        u("error", {
                            title: "Injector",
                            body: "Failed to inject: ".concat(t),
                            context: t
                        }),
                        i(!1),
                        i(!0, "inject_failed", t),
                        d.current = setTimeout( () => {
                            i(!1),
                            i(!0, r),
                            d.current = null
                        }
                        , 5e3)
                    }
                    )
                }(),
                () => {
                    e && e(),
                    d.current && clearTimeout(d.current)
                }
            }
            , []),
            (0,
            n.jsx)(se.P.div, {
                ref: h,
                initial: {
                    y: -60,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                exit: {
                    y: -60,
                    opacity: 0
                },
                transition: {
                    duration: .35,
                    ease: "easeInOut"
                },
                className: si()("titlebar-notification", !c && "absolute left-1/2 -translate-x-1/2"),
                children: "attached_devices" == e ? (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsxs)("div", {
                        className: "titlebar-notification-header",
                        children: [s.icon, (0,
                        n.jsxs)("div", {
                            className: "titlebar-notification-content",
                            children: [(0,
                            n.jsx)("div", {
                                className: "titlebar-notification-title",
                                children: a.length > 0 ? "Attached" : "Waiting for instances"
                            }), (0,
                            n.jsxs)("div", {
                                className: "titlebar-notification-description",
                                children: ["  ", function(e, t) {
                                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "s";
                                    return "".concat(e, " ").concat(t).concat(1 !== e ? i : "")
                                }(a.length, "client"), " connected"]
                            })]
                        })]
                    }), (0,
                    n.jsx)(sc, {})]
                }) : (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsxs)("div", {
                        className: "titlebar-notification-header",
                        children: [s.icon, (0,
                        n.jsxs)("div", {
                            className: "titlebar-notification-content",
                            children: [(0,
                            n.jsx)("div", {
                                className: "titlebar-notification-title",
                                children: s.title
                            }), (0,
                            n.jsxs)("div", {
                                className: "titlebar-notification-description w-[345px] truncate",
                                children: ["  ", s.description]
                            })]
                        })]
                    }), s.showDiscord && (0,
                    n.jsx)("div", {
                        className: "titlebar-notification-button no-drag",
                        style: {
                            position: "relative"
                        },
                        onClick: () => i8("https://seliware.com/discord"),
                        onMouseDown: e => {
                            e.stopPropagation()
                        }
                        ,
                        children: (0,
                        n.jsx)("svg", {
                            width: "28",
                            height: "28",
                            viewBox: "0 0 28 28",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            n.jsx)("path", {
                                d: "M23.704 5.08736C21.8884 4.25411 19.9726 3.65942 18.0043 3.31811C17.9865 3.31511 17.9681 3.3177 17.9518 3.32553C17.9356 3.33337 17.9221 3.34606 17.9133 3.36186C17.6665 3.79936 17.3935 4.37161 17.2028 4.81961C15.0811 4.49762 12.923 4.49762 10.8013 4.81961C10.5885 4.32054 10.3478 3.83385 10.0803 3.36186C10.0713 3.34623 10.0578 3.33369 10.0416 3.32588C10.0253 3.31807 10.0071 3.31536 9.9893 3.31811C8.02066 3.65803 6.10464 4.25278 4.28955 5.08736C4.27402 5.09329 4.26103 5.10442 4.2528 5.11886C0.623296 10.5421 -0.372454 15.8324 0.115796 21.0561C0.117546 21.0806 0.133296 21.1051 0.152546 21.1209C2.26608 22.6864 4.63009 23.8817 7.1438 24.6559C7.16154 24.6615 7.18061 24.6613 7.19824 24.6553C7.21586 24.6493 7.23112 24.6379 7.2418 24.6226C7.7808 23.8876 8.26029 23.1124 8.6733 22.2969C8.679 22.2857 8.68225 22.2735 8.68283 22.261C8.68341 22.2485 8.68131 22.2361 8.67666 22.2245C8.67202 22.2129 8.66494 22.2024 8.65591 22.1937C8.64688 22.1851 8.6361 22.1785 8.6243 22.1744C7.87033 21.8846 7.14012 21.5364 6.4403 21.1331C6.42751 21.1257 6.41676 21.1153 6.40901 21.1027C6.40126 21.0901 6.39675 21.0758 6.39588 21.0611C6.39501 21.0463 6.39782 21.0316 6.40404 21.0182C6.41027 21.0048 6.41972 20.9932 6.43155 20.9844C6.57855 20.8741 6.72555 20.7586 6.86555 20.6431C6.87791 20.6332 6.89275 20.6268 6.90847 20.6246C6.92419 20.6225 6.94021 20.6246 6.9548 20.6309C11.538 22.7239 16.4993 22.7239 21.0265 20.6309C21.0416 20.6241 21.0583 20.6217 21.0747 20.6239C21.091 20.626 21.1065 20.6327 21.1193 20.6431C21.2593 20.7586 21.4063 20.8741 21.5533 20.9844C21.5652 20.9931 21.5748 21.0046 21.5811 21.0179C21.5875 21.0312 21.5905 21.0459 21.5898 21.0606C21.5891 21.0754 21.5848 21.0897 21.5772 21.1023C21.5696 21.115 21.559 21.1256 21.5463 21.1331C20.848 21.5401 20.1169 21.8878 19.3605 22.1726C19.3488 22.1771 19.3382 22.184 19.3294 22.1929C19.3205 22.2018 19.3136 22.2125 19.3092 22.2242C19.3047 22.2359 19.3028 22.2484 19.3035 22.261C19.3042 22.2735 19.3075 22.2857 19.3133 22.2969C19.7333 23.1106 20.2145 23.8876 20.743 24.6226C20.7537 24.6379 20.769 24.6493 20.7866 24.6553C20.8042 24.6613 20.8233 24.6615 20.841 24.6559C23.359 23.8842 25.7268 22.6887 27.8428 21.1209C27.8533 21.1134 27.862 21.1038 27.8684 21.0926C27.8748 21.0814 27.8786 21.0689 27.8795 21.0561C28.464 15.0169 26.9013 9.77036 23.739 5.12061C23.7359 5.11293 23.7311 5.106 23.7251 5.10028C23.719 5.09455 23.7119 5.09015 23.704 5.08736ZM9.35755 17.8746C7.9768 17.8746 6.84105 16.6076 6.84105 15.0536C6.84105 13.4979 7.9558 12.2309 9.35755 12.2309C10.7698 12.2309 11.895 13.5084 11.874 15.0536C11.874 16.6076 10.7593 17.8746 9.35755 17.8746ZM18.6605 17.8746C17.2815 17.8746 16.144 16.6076 16.144 15.0536C16.144 13.4979 17.2588 12.2309 18.6605 12.2309C20.0728 12.2309 21.1998 13.5084 21.177 15.0536C21.177 16.6076 20.0728 17.8746 18.6605 17.8746Z",
                                fill: "#748899"
                            })
                        })
                    })]
                })
            }, s.title)
        }
        function sm(e) {
            let {anchor: t, items: i, onRequestClose: s} = e
              , r = (0,
            o.useMemo)( () => t ? {
                position: "absolute",
                top: Math.min(t.bottom + 4, window.innerHeight - 8),
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 50
            } : {
                display: "none"
            }, [t]);
            return (0,
            o.useEffect)( () => {
                function e(e) {
                    "Escape" === e.key && s()
                }
                function t() {
                    s()
                }
                return window.addEventListener("keydown", e),
                window.addEventListener("mousedown", t),
                () => {
                    window.removeEventListener("keydown", e),
                    window.removeEventListener("mousedown", t)
                }
            }
            , [s]),
            (0,
            o.useEffect)( () => {
                console.log("HOLA, NEWS")
            }
            , []),
            (0,
            n.jsx)("div", {
                style: r,
                children: (0,
                n.jsx)(se.P.div, {
                    initial: {
                        opacity: 0,
                        scale: .98,
                        y: -2
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: .98,
                        y: -2
                    },
                    transition: {
                        duration: .08
                    },
                    className: "news-tooltip-dropdown",
                    role: "menu",
                    onMouseDown: e => e.stopPropagation(),
                    children: i
                })
            })
        }
        function sp(e) {
            let {id: t, children: i, somethingNew: s} = e
              , {openId: r, setOpenId: a} = (0,
            sa.w)()
              , [l,u] = (0,
            o.useState)(null);
            return (0,
            o.useEffect)( () => {
                function e() {
                    a(null)
                }
                return window.addEventListener("blur", e),
                () => window.removeEventListener("blur", e)
            }
            , []),
            (0,
            n.jsxs)("div", {
                style: {
                    position: "relative"
                },
                onMouseDown: e => {
                    e.stopPropagation()
                }
                ,
                children: [(0,
                n.jsxs)("div", {
                    className: "titlebar-end-button",
                    style: {
                        position: "relative"
                    },
                    onClick: e => {
                        var i;
                        (i = e.currentTarget) && u(i.getBoundingClientRect()),
                        a(e => e === t ? null : t)
                    }
                    ,
                    children: [(0,
                    n.jsxs)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0,
                        n.jsx)("path", {
                            d: "M14 28C15.933 28 17.5 26.433 17.5 24.5H10.5C10.5 26.433 12.067 28 14 28Z",
                            fill: "var(--description)"
                        }), (0,
                        n.jsx)("path", {
                            d: "M15.7415 1.92331C15.7471 1.8663 15.75 1.80848 15.75 1.75C15.75 0.783502 14.9665 0 14 0C13.0335 0 12.25 0.783502 12.25 1.75C12.25 1.80849 12.2529 1.86631 12.2585 1.92332C8.26035 2.73078 5.25004 6.26384 5.25004 10.5C5.25004 12.4208 4.375 21 1.75 22.75H26.25C23.625 21 22.75 12.4208 22.75 10.5C22.75 6.26382 19.7397 2.73074 15.7415 1.92331Z",
                            fill: "var(--description)"
                        })]
                    }), s && (0,
                    n.jsx)("svg", {
                        width: "16",
                        height: "17",
                        style: {
                            position: "absolute",
                            right: "-3px",
                            bottom: "-4px"
                        },
                        viewBox: "0 0 17 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        n.jsx)("circle", {
                            cx: "8.5",
                            cy: "9",
                            r: "8.5",
                            fill: "var(--primary-border)"
                        })
                    })]
                }), (0,
                n.jsx)(i6.N, {
                    children: r === t && (0,
                    n.jsx)(sm, {
                        anchor: l,
                        items: i,
                        onRequestClose: () => a(null)
                    }, r)
                })]
            })
        }
        var sf = i(4579)
          , sg = i(1543)
          , sy = i(4125);
        async function sv(e, t) {
            return await sx.load(e, t)
        }
        class sw {
            get store() {
                return this._store || (this._store = sv(this.path, this.options)),
                this._store
            }
            constructor(e, t) {
                this.path = e,
                this.options = t
            }
            async init() {
                await this.store
            }
            async set(e, t) {
                return (await this.store).set(e, t)
            }
            async get(e) {
                return (await this.store).get(e)
            }
            async has(e) {
                return (await this.store).has(e)
            }
            async delete(e) {
                return (await this.store).delete(e)
            }
            async clear() {
                await (await this.store).clear()
            }
            async reset() {
                await (await this.store).reset()
            }
            async keys() {
                return (await this.store).keys()
            }
            async values() {
                return (await this.store).values()
            }
            async entries() {
                return (await this.store).entries()
            }
            async length() {
                return (await this.store).length()
            }
            async reload(e) {
                await (await this.store).reload(e)
            }
            async save() {
                await (await this.store).save()
            }
            async onKeyChange(e, t) {
                return (await this.store).onKeyChange(e, t)
            }
            async onChange(e) {
                return (await this.store).onChange(e)
            }
            async close() {
                this._store && await (await this._store).close()
            }
        }
        class sx extends u.FW {
            constructor(e) {
                super(e)
            }
            static async load(e, t) {
                return new sx(await (0,
                u.lA)("plugin:store|load", {
                    path: e,
                    options: t
                }))
            }
            static async get(e) {
                return await (0,
                u.lA)("plugin:store|get_store", {
                    path: e
                }).then(e => e ? new sx(e) : null)
            }
            async set(e, t) {
                await (0,
                u.lA)("plugin:store|set", {
                    rid: this.rid,
                    key: e,
                    value: t
                })
            }
            async get(e) {
                let[t,i] = await (0,
                u.lA)("plugin:store|get", {
                    rid: this.rid,
                    key: e
                });
                return i ? t : void 0
            }
            async has(e) {
                return await (0,
                u.lA)("plugin:store|has", {
                    rid: this.rid,
                    key: e
                })
            }
            async delete(e) {
                return await (0,
                u.lA)("plugin:store|delete", {
                    rid: this.rid,
                    key: e
                })
            }
            async clear() {
                await (0,
                u.lA)("plugin:store|clear", {
                    rid: this.rid
                })
            }
            async reset() {
                await (0,
                u.lA)("plugin:store|reset", {
                    rid: this.rid
                })
            }
            async keys() {
                return await (0,
                u.lA)("plugin:store|keys", {
                    rid: this.rid
                })
            }
            async values() {
                return await (0,
                u.lA)("plugin:store|values", {
                    rid: this.rid
                })
            }
            async entries() {
                return await (0,
                u.lA)("plugin:store|entries", {
                    rid: this.rid
                })
            }
            async length() {
                return await (0,
                u.lA)("plugin:store|length", {
                    rid: this.rid
                })
            }
            async reload(e) {
                await (0,
                u.lA)("plugin:store|reload", {
                    rid: this.rid,
                    ...e
                })
            }
            async save() {
                await (0,
                u.lA)("plugin:store|save", {
                    rid: this.rid
                })
            }
            async onKeyChange(e, t) {
                return await (0,
                su.KT)("store://change", i => {
                    i.payload.resourceId === this.rid && i.payload.key === e && t(i.payload.exists ? i.payload.value : void 0)
                }
                )
            }
            async onChange(e) {
                return await (0,
                su.KT)("store://change", t => {
                    t.payload.resourceId === this.rid && e(t.payload.key, t.payload.exists ? t.payload.value : void 0)
                }
                )
            }
        }
        function sC(e) {
            return "left" === e || "right" === e
        }
        function sb(e) {
            let {children: t} = e
              , {setCoreUpdateDisabled: i, setSidebarPosition: s, setEditorFontFamily: a, setEditorFontSize: h, setEditorMinimap: d, editor: m} = (0,
            sh.a)()
              , {clients: p} = sr()
              , f = (0,
            i9.i)(e => e.show)
              , g = (0,
            sf.W)(e => {
                var t;
                let {tabs: i, current: s} = e;
                return null != (t = i.find(e => e.id === s)) ? t : null
            }
            )
              , y = (0,
            i9.i)(e => e.changeDefaultValues)
              , v = (0,
            i9.i)(e => e.changeVisibility)
              , w = (0,
            i9.i)(e => e.defaultState)
              , {setUserData: x, uiLoaded: C, isAuthenticated: b} = (0,
            r.k)()
              , [L,j] = (0,
            o.useState)(null)
              , [T,k] = (0,
            o.useState)(null)
              , [S,E] = (0,
            o.useState)({
                current: 0,
                total: 0,
                speed: 0,
                remaining: 0
            })
              , [M,A] = (0,
            o.useState)(!1)
              , {setHidePatchNotification: N} = (0,
            sh.a)()
              , [D,_] = (0,
            o.useState)(!0)
              , [V,P] = (0,
            o.useState)(!0)
              , {setShowSettings: O, setShowProfile: I} = (0,
            sg.C)()
              , {journal: F, addToJournal: R, setJournalHasError: B, setShowJournal: Z} = (0,
            sh.a)()
              , [W,z] = (0,
            o.useState)(null);
            (0,
            o.useEffect)( () => {
                let e = document.querySelector(".titlebar")
                  , t = document.querySelector(".titlebar-notification")
                  , i = document.querySelector(".titlebar-logo")
                  , s = document.querySelector(".titlebar-logo-icon")
                  , n = null
                  , r = null
                  , a = e => {
                    let t = document.getElementById("content");
                    if (t) {
                        let i = e ? "0px" : "20px";
                        t.style.borderRadius !== i && t.style.setProperty("border-radius", i, "important")
                    }
                }
                  , o = async () => {
                    let e = await (0,
                    l.uu)();
                    a(await e.isMaximized())
                }
                  , u = () => {
                    o(),
                    r && clearTimeout(r),
                    r = setTimeout( () => {
                        o()
                    }
                    , 150)
                }
                  , c = async () => {
                    let e = await (0,
                    l.uu)();
                    n = await e.listen("tauri://resize", u),
                    o()
                }
                  , h = async n => {
                    let r = await (0,
                    l.uu)()
                      , o = n.target
                      , c = o === e || o === t || o === i || o === s;
                    n instanceof MouseEvent && c && 1 === n.buttons && (n.ctrlKey && o === i || n.ctrlKey,
                    2 === n.detail ? (await r.toggleMaximize(),
                    u()) : (a(!1),
                    r.startDragging()))
                }
                ;
                return null == e || e.addEventListener("mousedown", h),
                c(),
                () => {
                    null == e || e.removeEventListener("mousedown", h),
                    n && n(),
                    r && clearTimeout(r)
                }
            }
            , []);
            let U = async () => {
                (await (0,
                l.uu)()).minimize()
            }
              , H = async () => {
                (await (0,
                l.uu)()).toggleMaximize()
            }
              , $ = async () => {
                (await (0,
                l.uu)()).close()
            }
            ;
            function q(e) {
                return e ? (e / 1048576).toFixed(1) : "0.0"
            }
            (0,
            o.useEffect)( () => {
                let e = null;
                return async function() {
                    let t = await (0,
                    l.uu)();
                    e = await t.listen("webview-ping", async () => {
                        (0,
                        u.lA)("webview_heartbeat_ack")
                    }
                    )
                }(),
                () => {
                    e && e()
                }
            }
            , []);
            let Y = sr(e => e.addEvent)
              , X = sr(e => e.changeAvatar);
            (0,
            o.useEffect)( () => {
                let e = null;
                return async function() {
                    let t = await (0,
                    l.uu)();
                    e = await t.listen("Injected-client", async e => {
                        let {payload: t} = e
                          , i = JSON.parse(t);
                        await Y({
                            type: sn.ADD,
                            payload: i
                        }),
                        console.log("client saved");
                        try {
                            let {status: e, data: t} = await i7.F.getRobloxAvatar(i.userid);
                            200 == e && X(i.userid, t.data[0].imageUrl)
                        } catch (e) {
                            console.log("[CLIENT] Failed to get roblox avatar", e)
                        }
                    }
                    )
                }(),
                () => {
                    e && e()
                }
            }
            , []),
            (0,
            o.useEffect)( () => {
                let e = null;
                return async function() {
                    let t = await (0,
                    l.uu)();
                    e = await t.listen("Ejected-client", async e => {
                        let {payload: t} = e;
                        Y({
                            type: sn.REMOVE,
                            payload: {
                                username: t
                            }
                        })
                    }
                    )
                }(),
                () => {
                    e && e()
                }
            }
            , []);
            let G = (0,
            sh.a)(e => e.setIsPatched)
              , J = (0,
            o.useCallback)(async () => {
                let e = await (0,
                u.lA)("get_system_headers");
                try {
                    let {status: t, data: i} = await i7.F.get("/update-meta/".concat(e.os.platform, "/").concat(e.os.arch))
                      , s = sh.a.getState().needToHidePatchNotification;
                    if (sr.getState().clients.length <= 0) {
                        if (200 == t) {
                            i.updated || s || (console.log(16),
                            G(!0),
                            N(!0),
                            v(!1),
                            v(!0, "patched")),
                            i.updated && (G(!1),
                            v(!1),
                            v(!0, "attached_devices"));
                            return
                        }
                    } else
                        "attached_devices" != w && (console.log(14),
                        N(!1),
                        v(!1),
                        v(!0, "attached_devices"))
                } catch (e) {
                    console.log(e)
                }
            }
            , [])
              , K = (0,
            o.useCallback)(async () => {
                let e = sr.getState().clients
                  , t = sh.a.getState().patched
                  , i = i9.i.getState().defaultState;
                console.log("[CHECK]", e, t),
                e.length <= 0 && t && "attached_devices" == i && (N(!0),
                v(!1),
                v(!0, "patched")),
                e.length > 0 && t && "patched" == i && (N(!1),
                v(!1),
                v(!0, "attached_devices"))
            }
            , [])
              , Q = (0,
            o.useCallback)(async () => {
                try {
                    if (b || M || !await (0,
                    u.lA)("read_registry_bool_value", {
                        subkey: "SOFTWARE\\Seliware",
                        valueName: "migrate"
                    }))
                        return;
                    console.log("HI");
                    let e = await (0,
                    u.lA)("get_session");
                    try {
                        let {status: t, data: i} = await i7.F.post("/users/migrate-from-v1", {
                            session: e
                        });
                        if (200 == t) {
                            x(i.data),
                            await (0,
                            u.lA)("write_registry_value", {
                                subkey: "SOFTWARE\\Seliware",
                                valueName: "auth_token",
                                data: i.auth_token
                            });
                            return
                        }
                        if (401 == t)
                            return
                    } catch (e) {
                        R("network_error", {
                            title: "Migrate",
                            body: "Failed to relogin to v1 account [code 0]",
                            context: (0,
                            sy.u)(e)
                        });
                        return
                    }
                } catch (e) {
                    R("network_error", {
                        title: "Migrate",
                        body: "Failed to relogin to v1 account [code 1]",
                        context: (0,
                        sy.u)(e)
                    });
                    return
                } finally {
                    P(!1),
                    await (0,
                    u.lA)("write_registry_bool_value", {
                        subkey: "SOFTWARE\\Seliware",
                        valueName: "migrate",
                        data: !1
                    })
                }
            }
            , [M, b]);
            (0,
            o.useEffect)( () => {
                Q()
            }
            , []);
            let[ee,et] = (0,
            o.useState)({
                loading: !0,
                error: !1,
                message: "",
                items: []
            });
            (0,
            o.useEffect)( () => {
                console.log("NEWS UPDATED", ee)
            }
            , [ee]);
            let ei = (0,
            o.useCallback)(async () => {
                let e = sr.getState().clients;
                et({
                    loading: !0,
                    error: !1,
                    message: "",
                    items: []
                });
                try {
                    let s = await (0,
                    u.lA)("get_system_headers");
                    console.log(s, "SYSTEM");
                    let {status: n, data: r} = await i7.F.get("/news/".concat(s.os.platform, "/").concat(s.os.arch, "?currentVersion=").concat(JSON.stringify({
                        ui: s.app.version,
                        core: s.app.core.version
                    })));
                    if (200 == n) {
                        et({
                            loading: !1,
                            error: !1,
                            items: r.items
                        });
                        let s = r.items.flatMap(e => e.items.filter(e => "core" === e.type && !0 === e.new).map(t => ({
                            ...t,
                            date: e.date
                        })));
                        if (0 == s.length && console.log("[UPDATER] no new dll"),
                        s.length > 0) {
                            var t, i;
                            if (console.log("[UPDATER] NEW DLL VERSION", s[0].url),
                            z(null != (t = s[0].url) ? t : null),
                            R("info", {
                                title: "Core",
                                body: "New version available (".concat(s[0].data.version, ")"),
                                context: null != (i = s[0].url) ? i : "no url"
                            }),
                            sh.a.getState().coreUpdateDisabled)
                                return;
                            if (e.length > 0)
                                return R("error", {
                                    title: "Core",
                                    body: "Cannot update. Please close all instances before updating"
                                });
                            setTimeout(async () => {
                                try {
                                    console.log("[UPDATER] Emitting url", s[0].url),
                                    await (0,
                                    su.Ic)("Update", s[0].url)
                                } catch (e) {
                                    console.log("[UPDATER] Failed to emit", e)
                                }
                            }
                            , 5e3)
                        }
                        return
                    }
                    if (204 == n)
                        return void et({
                            loading: !1,
                            error: !1,
                            items: []
                        });
                    R("network_error", {
                        title: "News",
                        body: "Request failed with status " + n,
                        context: r.message
                    }),
                    et({
                        loading: !1,
                        error: !0,
                        message: r.message,
                        items: []
                    })
                } catch (e) {
                    R("network_error", {
                        title: "News",
                        body: "Request failed with no status",
                        context: (0,
                        sy.u)(e)
                    }),
                    et({
                        loading: !1,
                        error: !0,
                        message: (0,
                        sy.u)(e),
                        items: []
                    })
                }
            }
            , []);
            (0,
            o.useEffect)( () => {
                let e = null;
                return async function() {
                    let t = await (0,
                    l.uu)();
                    e = await t.listen("Update-error", async e => {
                        let {payload: t} = e;
                        R("error", {
                            title: "Core",
                            body: "Failed to update",
                            context: t
                        })
                    }
                    )
                }(),
                () => {
                    e && e()
                }
            }
            , []),
            (0,
            o.useEffect)( () => {
                let e = null;
                return async function() {
                    let t = await (0,
                    l.uu)();
                    e = await t.listen("Update-stop", async e => {
                        let {payload: t} = e;
                        i(!0),
                        R("error", {
                            title: "Core",
                            body: t
                        })
                    }
                    )
                }(),
                () => {
                    e && e()
                }
            }
            , []),
            (0,
            o.useEffect)( () => {
                let e = null;
                return async function() {
                    let t = await (0,
                    l.uu)();
                    e = await t.listen("Update-request", async e => {
                        let {payload: t} = e
                          , i = sr.getState().clients
                          , s = sh.a.getState().coreUpdateDisabled;
                        if (console.log("[UPDATER] detected update request", W),
                        R("info", {
                            title: "Core",
                            body: t,
                            context: t
                        }),
                        console.log("coreUpdateUrl", W),
                        !s) {
                            if (null == W)
                                return R("error", {
                                    title: "Core",
                                    body: "Core update url is empty"
                                });
                            if (i.length > 0)
                                return R("error", {
                                    title: "Core",
                                    body: "Cannot update. Please close all instances before updating"
                                });
                            (0,
                            su.Ic)("Update", W)
                        }
                    }
                    )
                }(),
                () => {
                    e && e()
                }
            }
            , []),
            (0,
            o.useEffect)( () => {
                let e = null;
                return async function() {
                    let t = sr.getState().clients
                      , i = sh.a.getState().coreUpdateDisabled
                      , s = await (0,
                    l.uu)();
                    console.log("[UPDATER] detected update listener start", W),
                    e = await s.listen("Update-started", async e => {
                        let {payload: s} = e;
                        if (R("info", {
                            title: "Core",
                            body: s,
                            context: s
                        }),
                        null != W && !i) {
                            if (t.length > 0)
                                return R("error", {
                                    title: "Core",
                                    body: "Cannot update. Please close all instances before updating"
                                });
                            (0,
                            su.Ic)("Update", W)
                        }
                    }
                    )
                }(),
                () => {
                    e && e()
                }
            }
            , []),
            (0,
            o.useEffect)( () => {
                console.log("[HEADER] firstLaunch", M),
                M && async function() {
                    let e = []
                      , t = new sw("user.json");
                    try {
                        console.log("[HEADER] userStore", t);
                        let[i,n,r,o,u,c] = await Promise.all([t.get("always_on_top"), t.get("window_check_timeout"), t.get("sidebar_position"), t.get("editor_font_size"), t.get("editor_font"), t.get("editor_minimap")])
                          , p = i;
                        console.log("[HEADER] alwaysOnTop", i, "boolean" == typeof i),
                        (void 0 == i || "boolean" != typeof i) && (p = !0,
                        t.set("always_on_top", !0),
                        e.push({
                            type: "always_on_top",
                            value: i
                        })),
                        (0,
                        l.uu)().setAlwaysOnTop(p),
                        console.log("[HEADER] window_check_timeout", n, isNaN(n)),
                        (void 0 == n || isNaN(n)) && (t.set("window_check_timeout", 256),
                        e.push({
                            type: "window_check_timeout",
                            value: n
                        }));
                        let f = r;
                        console.log("[HEADER] sidebar_position", r, sC(r)),
                        void 0 != r && sC(r) || (f = "left",
                        t.set("sidebar_position", "left"),
                        e.push({
                            type: "sidebar_position",
                            value: r
                        })),
                        s(f);
                        let g = o;
                        console.log("[HEADER] editor_font_size", o, isNaN(o)),
                        (void 0 == o || isNaN(o)) && (g = 14,
                        t.set("editor_font_size", 14),
                        e.push({
                            type: "editor_font_size",
                            value: o
                        })),
                        h(g);
                        let y = u;
                        console.log("[HEADER] editor_font", u),
                        void 0 == u && (y = m.font.defaultFont,
                        t.set("editor_font", m.font.defaultFont),
                        e.push({
                            type: "editor_font",
                            value: u
                        })),
                        a(y);
                        let v = c;
                        console.log("[HEADER] editor_minimap", c, "boolean" == typeof c),
                        (void 0 == c || "boolean" != typeof c) && (v = !0,
                        t.set("editor_minimap", !0),
                        e.push({
                            type: "editor_minimap",
                            value: c
                        })),
                        d(v),
                        e.length > 0 && (console.log("[HEADER] Invalid values", e),
                        R("info", {
                            title: "Settings",
                            body: "Some settings had invalid values and being reverted to default values.",
                            context: "Invalid values: \n" + e.map(e => {
                                let {type: t, value: i} = e;
                                return "".concat(t, ": ").concat(i)
                            }
                            ).join("\n")
                        }))
                    } catch (e) {
                        console.error("[HEADER] Failed to load values", e)
                    }
                }()
            }
            , [M]),
            (0,
            o.useEffect)( () => {
                let e = null;
                return async function() {
                    let t = await (0,
                    l.uu)();
                    e = await t.listen("Injection-info", async e => {
                        let {payload: t} = e;
                        R("injector", {
                            title: "Injector",
                            body: t
                        })
                    }
                    )
                }(),
                () => {
                    e && e()
                }
            }
            , []),
            (0,
            o.useEffect)( () => {
                let e = null;
                return async function() {
                    let t = await (0,
                    l.uu)();
                    e = await t.listen("Update-success", async () => {
                        R("info", {
                            title: "Core",
                            body: "Successfully updated"
                        })
                    }
                    )
                }(),
                () => {
                    e && e()
                }
            }
            , []);
            let es = (0,
            o.useRef)(null);
            return (0,
            o.useEffect)( () => {
                let e = null;
                return async function() {
                    let t = await (0,
                    l.uu)();
                    e = await t.listen("Core-info", async e => {
                        let {payload: t} = e
                          , i = sh.a.getState().patched;
                        es.current && clearTimeout(es.current);
                        let s = i9.i.getState().defaultState
                          , n = s;
                        ["updater", "authorization", "inject_failed", "core_message", "empty"].includes(s) && (n = i ? "patched" : "attached_devices"),
                        R("info", {
                            title: "Core",
                            body: t
                        }),
                        v(!1),
                        v(!0, "core_message", t),
                        es.current = setTimeout( () => {
                            v(!1),
                            v(!0, n),
                            es.current = null
                        }
                        , 5e3)
                    }
                    )
                }(),
                () => {
                    e && e(),
                    es.current && clearTimeout(es.current)
                }
            }
            , []),
            (0,
            o.useEffect)( () => {
                ei();
                let e = setInterval( () => {
                    console.log("[News] Refetching news"),
                    ei()
                }
                , 12e4);
                return () => {
                    clearInterval(e)
                }
            }
            , []),
            (0,
            o.useEffect)( () => {
                let e = null
                  , t = null
                  , i = !0;
                async function s() {
                    try {
                        let s = await (0,
                        u.lA)("read_registry_bool_value", {
                            subkey: "SOFTWARE\\Seliware",
                            valueName: "first-launch"
                        });
                        if (A(s),
                        !s)
                            return void _(!1);
                        let n = new sw("user.json")
                          , [r] = await Promise.all([n.get("channel")])
                          , a = r;
                        (void 0 == r || "stable" !== r && "beta" !== r) && (a = "stable",
                        console.log("[Updater] Channel: stable"),
                        n.set("channel", "stable")),
                        console.log("[Updater] Channel: ".concat(a));
                        let o = await (0,
                        u.lA)("check_update_channel", {
                            channel: a
                        });
                        if (!i)
                            return;
                        if (!o) {
                            _(!1),
                            j(null),
                            E({
                                current: 0,
                                total: 0,
                                speed: 0,
                                remaining: 0
                            }),
                            k(null),
                            await (0,
                            u.lA)("write_registry_bool_value", {
                                subkey: "SOFTWARE\\Seliware",
                                valueName: "first-launch",
                                data: !1
                            });
                            return
                        }
                        if (j("available"),
                        k(o),
                        s) {
                            await (0,
                            u.lA)("write_registry_bool_value", {
                                subkey: "SOFTWARE\\Seliware",
                                valueName: "first-launch",
                                data: !1
                            }),
                            y({
                                title: "Update found",
                                description: "Loading version v".concat(o.version, " "),
                                animate: !0
                            }),
                            _(!1);
                            let s = Date.now();
                            e = await (0,
                            su.KT)("update-download-progress", e => {
                                if (!i)
                                    return;
                                let {current: t, total: n} = e.payload
                                  , r = (Date.now() - s) / 1e3
                                  , a = r > 0 ? t / r : 0;
                                j("download"),
                                E({
                                    current: t,
                                    total: n || 0,
                                    speed: a,
                                    remaining: n > 0 && a > 0 ? (n - t) / a : 0
                                })
                            }
                            ),
                            t = await (0,
                            su.KT)("update-install-start", () => {
                                i && j("installing")
                            }
                            );
                            try {
                                await (0,
                                u.lA)("download_and_install_channel")
                            } catch (e) {
                                console.error("Install failed:", e),
                                i && j("install_failed")
                            }
                        }
                    } catch (e) {
                        console.error("Check loop failed:", e),
                        i && (j(null),
                        _(!1)),
                        await (0,
                        u.lA)("write_registry_bool_value", {
                            subkey: "SOFTWARE\\Seliware",
                            valueName: "first-launch",
                            data: !1
                        }).catch( () => {}
                        )
                    }
                }
                s();
                let n = setInterval(s, 36e5);
                return () => {
                    i = !1,
                    clearInterval(n),
                    e && e(),
                    t && t()
                }
            }
            , []),
            (0,
            n.jsxs)("div", {
                id: "content",
                style: {
                    background: "var(--background)",
                    border: "2px solid rgb(var(--border))",
                    width: "100vw",
                    height: "100vh",
                    overflow: "hidden",
                    boxSizing: "border-box",
                    borderRadius: "20px"
                },
                children: [(0,
                n.jsxs)("div", {
                    className: "titlebar flex items-center justify-between",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "titlebar-header",
                        children: [(0,
                        n.jsx)("div", {
                            className: "titlebar-logo",
                            onClick: () => console.log("clicked"),
                            children: (0,
                            n.jsxs)("svg", {
                                className: "titlebar-logo-icon",
                                style: {
                                    pointerEvents: "none"
                                },
                                width: "32",
                                height: "40",
                                viewBox: "0 0 40 38",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0,
                                n.jsx)("path", {
                                    d: "M19.4952 10.8042C17.7387 10.8042 16.397 11.0672 15.4729 11.5961C14.5489 12.125 14.0855 12.7968 14.0855 13.6116C14.0855 14.901 15.5388 15.8044 18.4424 16.3218L23.7606 17.2795C26.9846 17.8628 29.1474 18.7261 30.2488 19.8668C31.3502 21.0075 31.8993 22.2654 31.8993 23.6434C31.8993 25.8591 30.7407 27.6001 28.4264 28.8752C26.1121 30.1501 23.1112 30.7849 19.4265 30.7849H7.3255C5.52611 30.7849 5.18854 33.3751 6.93644 33.804C6.95646 33.8096 6.97366 33.8126 6.99368 33.8182L23.526 37.7434C28.6582 38.9614 33.8047 35.7909 35.0232 30.6647L38.9513 14.1434C39.1029 13.5001 39.1742 12.8597 39.1686 12.2279C39.1627 11.3988 38.4591 10.7413 37.6295 10.7441L19.498 10.8099L19.4952 10.8042Z",
                                    fill: "var(--description)"
                                }), (0,
                                n.jsx)("path", {
                                    d: "M24.2984 26.6503C25.3769 26.0785 25.9147 25.3666 25.9147 24.5175C25.9147 23.9 25.6687 23.3311 25.1824 22.8079C24.6932 22.2848 23.6461 21.8731 22.0413 21.5758L16.0566 20.4522C14.0083 20.0663 12.4949 19.6288 11.5166 19.1371C10.5382 18.6483 9.75432 17.9564 9.16785 17.0644C8.57855 16.1725 8.28389 15.2205 8.28389 14.2056C8.28389 12.19 9.32235 10.5719 11.4021 9.35405C13.4819 8.13616 16.1395 7.52721 19.3808 7.52721H32.6717C34.4712 7.52721 34.8088 4.93707 33.061 4.50823C33.0409 4.50251 33.0238 4.49966 33.0038 4.49394L14.9781 0.217055C10.6726 -0.806423 6.35289 1.8552 5.32873 6.15782L1.04904 24.1745C0.908863 24.7663 0.837344 25.3609 0.831623 25.947C0.82304 26.8075 1.50962 27.5108 2.36785 27.5108H19.6783C21.6808 27.5108 23.2199 27.2249 24.2984 26.6503Z",
                                    fill: "var(--description)"
                                })]
                            })
                        }), (0,
                        n.jsx)(i6.N, {
                            mode: "wait",
                            children: C && (0,
                            n.jsxs)(se.P.div, {
                                initial: {
                                    x: -20,
                                    opacity: 0
                                },
                                animate: {
                                    x: 0,
                                    opacity: 1
                                },
                                exit: {
                                    x: -20,
                                    opacity: 0
                                },
                                transition: {
                                    duration: .35,
                                    ease: "easeInOut"
                                },
                                className: "titlebar-header-buttons no-drag !cursor-default",
                                onAnimationStart: () => {
                                    v(!1)
                                }
                                ,
                                onAnimationComplete: () => {
                                    v(!0, "attached_devices"),
                                    setInterval( () => {
                                        K()
                                    }
                                    , 5e3),
                                    J(),
                                    setInterval( () => {
                                        console.log("[Updated or not] Refetching status"),
                                        J()
                                    }
                                    , 6e4)
                                }
                                ,
                                children: [(0,
                                n.jsxs)("div", {
                                    className: "titlebar-header-button",
                                    style: {
                                        position: "relative"
                                    },
                                    onClick: () => void (F.hasError && B(!1),
                                    Z(!0)),
                                    children: [(0,
                                    n.jsx)("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 26 30",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0,
                                        n.jsx)("path", {
                                            d: "M5.57129 4.6875C5.57129 7.27619 7.64988 9.37477 10.2139 9.375H15.7861C18.3501 9.37477 20.4287 7.27619 20.4287 4.6875V2.8125H22.2861C24.3373 2.81273 26 4.49157 26 6.5625V26.25C26 28.3209 24.3373 29.9998 22.2861 30H3.71387C1.66272 29.9998 0 28.3209 0 26.25V6.5625C0 4.49157 1.66272 2.81273 3.71387 2.8125H5.57129V4.6875ZM15.7861 0C17.3244 0.000228576 18.5713 1.25934 18.5713 2.8125V4.6875C18.5713 6.24066 17.3244 7.49977 15.7861 7.5H10.2139C8.67555 7.49977 7.42871 6.24066 7.42871 4.6875V2.8125C7.42871 1.25934 8.67555 0.000228186 10.2139 0H15.7861ZM10.2139 1.875C9.70122 1.87523 9.28613 2.29487 9.28613 2.8125V4.6875C9.28613 5.20513 9.70122 5.62477 10.2139 5.625H15.7861C16.2988 5.62477 16.7139 5.20513 16.7139 4.6875V2.8125C16.7139 2.29487 16.2988 1.87523 15.7861 1.875H10.2139Z",
                                            fill: "#748899"
                                        })
                                    }), F.hasError && (0,
                                    n.jsx)("svg", {
                                        width: "16",
                                        height: "17",
                                        style: {
                                            position: "absolute",
                                            right: "-3px",
                                            bottom: "-4px"
                                        },
                                        viewBox: "0 0 17 18",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0,
                                        n.jsx)("circle", {
                                            cx: "8.5",
                                            cy: "9",
                                            r: "8.5",
                                            fill: "var(--red-border)"
                                        })
                                    })]
                                }), (0,
                                n.jsx)("div", {
                                    className: "titlebar-header-button",
                                    onClick: () => O(!0),
                                    children: (0,
                                    n.jsx)("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 30 30",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0,
                                        n.jsx)("path", {
                                            d: "M17.6337 1.96947C16.8597 -0.656492 13.1403 -0.656491 12.3663 1.96947L12.1786 2.60631C11.684 4.28419 9.76754 5.07801 8.2314 4.24127L7.64837 3.9237C5.24423 2.61416 2.61416 5.24424 3.9237 7.64837L4.24127 8.2314C5.07801 9.76754 4.28419 11.684 2.60631 12.1786L1.96947 12.3663C-0.656492 13.1403 -0.656491 16.8597 1.96947 17.6337L2.60631 17.8214C4.28419 18.316 5.07801 20.2325 4.24127 21.7686L3.9237 22.3516C2.61416 24.7558 5.24423 27.3858 7.64837 26.0763L8.2314 25.7587C9.76754 24.922 11.684 25.7158 12.1786 27.3937L12.3663 28.0305C13.1403 30.6565 16.8597 30.6565 17.6337 28.0305L17.8214 27.3937C18.316 25.7158 20.2325 24.922 21.7686 25.7587L22.3516 26.0763C24.7558 27.3858 27.3858 24.7558 26.0763 22.3516L25.7587 21.7686C24.922 20.2325 25.7158 18.316 27.3937 17.8214L28.0305 17.6337C30.6565 16.8597 30.6565 13.1403 28.0305 12.3663L27.3937 12.1786C25.7158 11.684 24.922 9.76754 25.7587 8.2314L26.0763 7.64837C27.3858 5.24423 24.7558 2.61416 22.3516 3.9237L21.7686 4.24127C20.2325 5.07801 18.316 4.28419 17.8214 2.60631L17.6337 1.96947ZM15 20.4915C11.9671 20.4915 9.50847 18.0329 9.50847 15C9.50847 11.9671 11.9671 9.50848 15 9.50848C18.0329 9.50848 20.4915 11.9671 20.4915 15C20.4915 18.0329 18.0329 20.4915 15 20.4915Z",
                                            fill: "var(--description)"
                                        })
                                    })
                                }), (0,
                                n.jsx)("div", {
                                    className: "titlebar-header-button",
                                    onClick: () => I(!0),
                                    children: (0,
                                    n.jsxs)("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 30 30",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0,
                                        n.jsx)("path", {
                                            d: "M3.125 29.25C3.125 29.25 0.75 29.25 0.75 26.875C0.75 24.5 3.125 17.375 15 17.375C26.875 17.375 29.25 24.5 29.25 26.875C29.25 29.25 26.875 29.25 26.875 29.25H3.125Z",
                                            fill: "var(--description)"
                                        }), (0,
                                        n.jsx)("path", {
                                            d: "M15 15C18.935 15 22.125 11.81 22.125 7.875C22.125 3.93997 18.935 0.75 15 0.75C11.065 0.75 7.875 3.93997 7.875 7.875C7.875 11.81 11.065 15 15 15Z",
                                            fill: "var(--description)"
                                        })]
                                    })
                                }), (0,
                                n.jsx)("div", {
                                    className: "titlebar-header-button titlebar-header-button__green",
                                    onClick: () => {
                                        let e = sr.getState().clients;
                                        if (!g)
                                            return console.log("[EXECUTE] NO TAB SELECTED");
                                        if (!C)
                                            return console.log("[EXECUTE] UI IS NOT LOADED YET");
                                        if (0 === e.length)
                                            return console.log("[EXECUTE] NO CLIENTS FOUND");
                                        let t = g.value;
                                        console.log(t, "SCRIPT");
                                        let i = p.filter(e => e.selected);
                                        if (console.log(p, i, "SELECTED CLIENTS"),
                                        0 === i.length) {
                                            console.log("[EXECUTE] NO CLIENTS SELECTED. Executing to All Clients"),
                                            (0,
                                            su.Ic)("Execute", {
                                                nicknames: p.map(e => e.username),
                                                script: t
                                            });
                                            return
                                        }
                                        console.log("[EXECUTE] Executing to", i.map(e => e.username)),
                                        (0,
                                        su.Ic)("Execute", {
                                            nicknames: i.map(e => e.username),
                                            script: t
                                        })
                                    }
                                    ,
                                    children: (0,
                                    n.jsx)("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 26 28",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0,
                                        n.jsx)("path", {
                                            d: "M24.2388 16.0887L4.35248 27.1635C2.66407 28.1038 0.5 26.9666 0.5 25.0748V2.9252C0.5 1.03344 2.66407 -0.103831 4.35248 0.83645L24.2388 11.9113C25.9204 12.8477 25.9204 15.1523 24.2388 16.0887Z",
                                            fill: "#61826C"
                                        })
                                    })
                                })]
                            })
                        })]
                    }), (0,
                    n.jsx)(i6.N, {
                        mode: "wait",
                        children: f && (0,
                        n.jsx)(sd, {})
                    }), (0,
                    n.jsxs)("div", {
                        className: "titlebar-end no-drag !cursor-default",
                        children: [(0,
                        n.jsx)(sp, {
                            id: "news-tooltip",
                            somethingNew: ee.items.some(e => e.items.some(e => "ui" == e.type && !0 == e.new)),
                            children: ee.loading ? (0,
                            n.jsx)("div", {
                                className: "flex items-center justify-center p-[10px] overflow-hidden",
                                children: (0,
                                n.jsxs)("svg", {
                                    className: "h-[100px] w-[100px] animate-spin",
                                    viewBox: "0 0 100 100",
                                    children: [(0,
                                    n.jsx)("circle", {
                                        fill: "none",
                                        strokeWidth: "10",
                                        className: "stroke-[rgb(var(--card))]",
                                        cx: "50",
                                        cy: "50",
                                        r: "40"
                                    }), (0,
                                    n.jsx)("circle", {
                                        fill: "none",
                                        strokeWidth: "10",
                                        className: "stroke-[var(--accent)]",
                                        strokeDasharray: "300",
                                        strokeDashoffset: "210",
                                        cx: "50",
                                        cy: "50",
                                        r: "40"
                                    })]
                                })
                            }) : (0,
                            n.jsx)(n.Fragment, {
                                children: ee.error || 0 === ee.items.length ? (0,
                                n.jsxs)("div", {
                                    className: "flex items-center justify-center gap-[10px] p-[10px] rounded-[10px] h-full bg-[rgb(var(--card))] border-[1px] border-[rgb(var(--border))] shadow-[inset_0_0_1px_rgb(var(--border))]",
                                    children: [(0,
                                    n.jsx)("svg", {
                                        width: "60",
                                        height: "53",
                                        viewBox: "0 0 60 53",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0,
                                        n.jsx)("path", {
                                            d: "M48.75 5.63791C48.75 2.52418 51.2684 0 54.375 0C57.4816 0 60 2.52418 60 5.63791V46.9826C60 50.0963 57.4816 52.6205 54.375 52.6205C51.2684 52.6205 48.75 50.0963 48.75 46.9826V46.1792V6.43841V5.63791ZM45 8.35942C37.25 11.9278 27.9806 13.9273 18.75 14.5844V38.0271C19.3329 38.0634 19.912 38.1027 20.4871 38.1452C21.2706 38.2031 22.0516 38.2703 22.83 38.3476C30.529 39.1116 37.9732 40.8549 45 44.2092V8.35942ZM15 37.8319V14.785C12.4485 14.8882 9.75463 14.9489 7.47027 14.9844C3.35588 15.0484 0 18.3955 0 22.5516V30.0689C0 34.2259 3.35855 37.5711 7.47786 37.6194C7.73058 37.6224 7.98329 37.6258 8.23601 37.6296C8.60308 37.6352 8.97017 37.6418 9.33725 37.6492C11.2246 37.6872 13.1121 37.7491 15 37.8319ZM20.2115 41.8937C21.2825 41.9728 22.346 42.0699 23.4017 42.1866L24.3481 48.5415C24.786 50.8511 23.0191 53 20.6636 53H18.6065C17.1142 53 15.7679 52.1137 15.1719 50.7503L10.2444 41.429C12.3571 41.4809 14.4723 41.5626 16.5909 41.67C17.8175 41.7321 19.0249 41.806 20.2115 41.8937Z",
                                            fill: "#C9C9BA"
                                        })
                                    }), (0,
                                    n.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [(0,
                                        n.jsxs)("span", {
                                            className: "text-[var(--highlight)] font-semibold",
                                            children: ["Ready for What", "'", "s Next"]
                                        }), (0,
                                        n.jsxs)("span", {
                                            className: "text-[var(--description)] max-w-[226px]",
                                            children: ["There are no new announcements at the moment. Check back later to see what we", "'", "ve been working on!"]
                                        })]
                                    })]
                                }) : (0,
                                n.jsx)(n.Fragment, {
                                    children: (0,
                                    n.jsx)("div", {
                                        className: "flex flex-col gap-[10px]",
                                        children: ee.items.map( (e, t) => (0,
                                        n.jsx)(o.Fragment, {
                                            children: (0,
                                            n.jsxs)("div", {
                                                children: [(0,
                                                n.jsx)("div", {
                                                    className: "text-center text-[var(--description)] mb-2",
                                                    children: ( () => {
                                                        let t = i5.fromISO(e.date, {
                                                            zone: "utc"
                                                        }).setZone(i5.local().zoneName)
                                                          , i = i5.local();
                                                        return t.hasSame(i, "day") ? "Today" : t.plus({
                                                            days: 1
                                                        }).hasSame(i, "day") ? "Yesterday" : t.toFormat("LLL d, yyyy")
                                                    }
                                                    )()
                                                }), (0,
                                                n.jsx)("div", {
                                                    className: "h-[1px] bg-[rgb(var(--card))] mb-2"
                                                }), (0,
                                                n.jsx)("div", {
                                                    className: "news-tooltip-dropdown-items",
                                                    children: e.items.map( (e, t) => (0,
                                                    n.jsxs)("div", {
                                                        className: "news-tooltip-dropdown-item",
                                                        children: [(0,
                                                        n.jsxs)("div", {
                                                            className: "flex justify-between",
                                                            children: [(0,
                                                            n.jsxs)("div", {
                                                                className: "flex gap-[5px]",
                                                                children: [(0,
                                                                n.jsx)("span", {
                                                                    className: "font-bold",
                                                                    children: i4.Z_[e.type]
                                                                }), " ", (0,
                                                                n.jsx)("span", {
                                                                    style: {
                                                                        color: "var(--description)"
                                                                    },
                                                                    children: e.data.version
                                                                })]
                                                            }), (0,
                                                            n.jsxs)("div", {
                                                                className: "text-[var(--description)]",
                                                                children: [i5.fromISO(e.data.pub_date, {
                                                                    zone: "utc"
                                                                }).setZone(i5.local().zoneName).toFormat("HH:mm"), " "]
                                                            })]
                                                        }), (0,
                                                        n.jsx)("div", {
                                                            children: (0,
                                                            n.jsx)("div", {
                                                                className: "news-tooltip-dropdown-item-body",
                                                                style: {
                                                                    whiteSpace: "pre-wrap"
                                                                },
                                                                children: "" == e.data.changelog ? "[+] Updated" : e.data.changelog
                                                            })
                                                        }), e.new && "ui" === e.type && (0,
                                                        n.jsxs)("button", {
                                                            onClick: c,
                                                            disabled: null !== L && "available" !== L,
                                                            className: "btn btn-primary",
                                                            children: [(0,
                                                            n.jsxs)("svg", {
                                                                width: "23",
                                                                height: "18",
                                                                viewBox: "0 0 23 18",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [(0,
                                                                n.jsx)("path", {
                                                                    d: "M16.5798 7.5625H22.2327C22.5374 7.5625 22.7039 7.91787 22.5088 8.15194L19.6823 11.5437C19.5387 11.7161 19.2739 11.7161 19.1302 11.5437L16.3037 8.15194C16.1086 7.91787 16.2751 7.5625 16.5798 7.5625Z",
                                                                    fill: "#ADCBE4"
                                                                }), (0,
                                                                n.jsx)("path", {
                                                                    d: "M0.767289 10.4375H6.42023C6.72492 10.4375 6.89137 10.0821 6.69631 9.84806L3.86984 6.4563C3.72616 6.28388 3.46135 6.28388 3.31768 6.4563L0.491209 9.84806C0.29615 10.0821 0.462597 10.4375 0.767289 10.4375Z",
                                                                    fill: "#ADCBE4"
                                                                }), (0,
                                                                n.jsx)("path", {
                                                                    "fill-rule": "evenodd",
                                                                    "clip-rule": "evenodd",
                                                                    d: "M11.5 1.8125C9.2683 1.8125 7.27457 2.82876 5.95512 4.42643C5.70235 4.7325 5.24932 4.77571 4.94324 4.52294C4.63717 4.27017 4.59397 3.81714 4.84674 3.51107C6.42756 1.59691 8.8214 0.375 11.5 0.375C15.7287 0.375 19.2453 3.41747 19.9828 7.43265C19.9907 7.47582 19.9984 7.51911 20.0056 7.5625H18.5439C17.8783 4.28181 14.9768 1.8125 11.5 1.8125ZM4.45614 10.4375C5.12172 13.7182 8.02323 16.1875 11.5 16.1875C13.7317 16.1875 15.7254 15.1712 17.0449 13.5736C17.2977 13.2675 17.7507 13.2243 18.0568 13.4771C18.3628 13.7298 18.406 14.1829 18.1533 14.4889C16.5725 16.4031 14.1786 17.625 11.5 17.625C7.27131 17.625 3.75473 14.5825 3.0172 10.5674C3.00927 10.5242 3.00166 10.4809 2.99438 10.4375H4.45614Z",
                                                                    fill: "#ADCBE4"
                                                                })]
                                                            }), "Restart "]
                                                        })]
                                                    }, t))
                                                })]
                                            })
                                        }, t))
                                    })
                                })
                            })
                        }), (0,
                        n.jsxs)("div", {
                            className: "titlebar-end-buttons",
                            children: [(0,
                            n.jsx)("div", {
                                className: "hover:bg-[var(--titlebar-btn-hover)] titlebar-button",
                                onClick: U,
                                children: (0,
                                n.jsx)("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 17 14",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0,
                                    n.jsx)("path", {
                                        d: "M15 7L2 7",
                                        stroke: "var(--description)",
                                        strokeWidth: "1.8",
                                        strokeLinecap: "round"
                                    })
                                })
                            }), (0,
                            n.jsx)("div", {
                                className: "hover:bg-[var(--titlebar-btn-hover)] titlebar-button",
                                onClick: H,
                                children: (0,
                                n.jsx)("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 17 18",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0,
                                    n.jsx)("rect", {
                                        x: "0.9",
                                        y: "1.4",
                                        width: "15.2",
                                        height: "15.2",
                                        rx: "4.1",
                                        stroke: "var(--description)",
                                        strokeWidth: "1.8",
                                        strokeLinejoin: "round"
                                    })
                                })
                            }), (0,
                            n.jsx)("div", {
                                className: "hover:bg-red-600/80 titlebar-button",
                                onClick: $,
                                children: (0,
                                n.jsx)("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 17 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0,
                                    n.jsx)("path", {
                                        d: "M15.1667 14.6663L1.83325 1.33277M15.1668 1.33277L1.83325 14.6663",
                                        stroke: "var(--description)",
                                        strokeWidth: "1.8",
                                        strokeLinecap: "round"
                                    })
                                })
                            })]
                        })]
                    })]
                }), !M && (0,
                n.jsx)(n.Fragment, {
                    children: V ? (0,
                    n.jsxs)("div", {
                        className: "custom-content relative",
                        children: [(0,
                        n.jsx)("div", {
                            className: "custom-loader"
                        }), (0,
                        n.jsx)("div", {
                            className: "custom-cc w-[428px]",
                            children: (0,
                            n.jsxs)("svg", {
                                className: "h-[100px] w-[100px] animate-spin",
                                viewBox: "0 0 100 100",
                                children: [(0,
                                n.jsx)("circle", {
                                    fill: "none",
                                    strokeWidth: "10",
                                    className: "stroke-[rgb(var(--card))]",
                                    cx: "50",
                                    cy: "50",
                                    r: "40"
                                }), (0,
                                n.jsx)("circle", {
                                    fill: "none",
                                    strokeWidth: "10",
                                    className: "stroke-[var(--accent)]",
                                    strokeDasharray: "300",
                                    strokeDashoffset: "210",
                                    cx: "50",
                                    cy: "50",
                                    r: "40"
                                })]
                            })
                        })]
                    }) : t
                }), M && (0,
                n.jsxs)(n.Fragment, {
                    children: [D && (0,
                    n.jsxs)("div", {
                        className: "custom-content relative",
                        children: [(0,
                        n.jsx)("div", {
                            className: "custom-loader"
                        }), (0,
                        n.jsx)("div", {
                            className: "custom-cc w-[428px]",
                            children: (0,
                            n.jsxs)("svg", {
                                className: "h-[100px] w-[100px] animate-spin",
                                viewBox: "0 0 100 100",
                                children: [(0,
                                n.jsx)("circle", {
                                    fill: "none",
                                    strokeWidth: "10",
                                    className: "stroke-[rgb(var(--card))]",
                                    cx: "50",
                                    cy: "50",
                                    r: "40"
                                }), (0,
                                n.jsx)("circle", {
                                    fill: "none",
                                    strokeWidth: "10",
                                    className: "stroke-[var(--accent)]",
                                    strokeDasharray: "300",
                                    strokeDashoffset: "210",
                                    cx: "50",
                                    cy: "50",
                                    r: "40"
                                })]
                            })
                        })]
                    }), !D && (0,
                    n.jsx)(n.Fragment, {
                        children: null == L ? (0,
                        n.jsx)(n.Fragment, {
                            children: V ? (0,
                            n.jsxs)("div", {
                                className: "custom-content relative",
                                children: [(0,
                                n.jsx)("div", {
                                    className: "custom-loader"
                                }), (0,
                                n.jsx)("div", {
                                    className: "custom-cc w-[428px]",
                                    children: (0,
                                    n.jsxs)("svg", {
                                        className: "h-[100px] w-[100px] animate-spin",
                                        viewBox: "0 0 100 100",
                                        children: [(0,
                                        n.jsx)("circle", {
                                            fill: "none",
                                            strokeWidth: "10",
                                            className: "stroke-[rgb(var(--card))]",
                                            cx: "50",
                                            cy: "50",
                                            r: "40"
                                        }), (0,
                                        n.jsx)("circle", {
                                            fill: "none",
                                            strokeWidth: "10",
                                            className: "stroke-[var(--accent)]",
                                            strokeDasharray: "300",
                                            strokeDashoffset: "210",
                                            cx: "50",
                                            cy: "50",
                                            r: "40"
                                        })]
                                    })
                                })]
                            }) : t
                        }) : (0,
                        n.jsxs)("div", {
                            className: "custom-content relative",
                            children: [(0,
                            n.jsx)("div", {
                                className: "custom-loader"
                            }), (0,
                            n.jsxs)("div", {
                                className: "custom-cc w-[428px]",
                                children: ["available" == L && (0,
                                n.jsxs)("div", {
                                    className: "flex flex-col items-center gap-[5px]",
                                    children: [(0,
                                    n.jsxs)("svg", {
                                        width: "108",
                                        height: "107",
                                        viewBox: "0 0 108 107",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0,
                                        n.jsx)("mask", {
                                            id: "mask0_411_338",
                                            style: {
                                                maskType: "luminance"
                                            },
                                            maskUnits: "userSpaceOnUse",
                                            x: "0",
                                            y: "0",
                                            width: "108",
                                            height: "107",
                                            children: (0,
                                            n.jsx)("path", {
                                                d: "M107.682 0H0.797119V106.249H107.682V0Z",
                                                fill: "white"
                                            })
                                        }), (0,
                                        n.jsxs)("g", {
                                            mask: "url(#mask0_411_338)",
                                            children: [(0,
                                            n.jsx)("path", {
                                                d: "M52.8315 30.207C47.9347 30.207 44.1938 30.9424 41.6176 32.421C39.0414 33.9 37.7493 35.7786 37.7493 38.0565C37.7493 41.6614 41.8011 44.1875 49.8965 45.6341L64.7238 48.312C73.7128 49.9428 79.7426 52.3567 82.8132 55.5464C85.8843 58.7354 87.4153 62.2524 87.4153 66.1057C87.4153 72.3005 84.1849 77.1685 77.7329 80.7334C71.2803 84.2984 62.9137 86.0728 52.6406 86.0728H18.9021C13.8853 86.0728 12.9441 93.3151 17.8174 94.5143C17.8732 94.5305 17.9212 94.538 17.977 94.5541L64.0697 105.529C78.3784 108.935 92.7275 100.07 96.1245 85.737L107.077 39.5435C107.499 37.7447 107.698 35.9544 107.682 34.1877C107.666 31.8698 105.704 30.0312 103.392 30.0391L52.8396 30.2228L52.8315 30.207Z",
                                                fill: "var(--description)"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M66.2233 74.5155C69.2304 72.917 70.7302 70.9263 70.7302 68.552C70.7302 66.8261 70.0443 65.2352 68.6881 63.7723C67.3245 62.3094 64.4051 61.1586 59.9305 60.3268L43.2451 57.1856C37.5342 56.1065 33.3149 54.8835 30.5872 53.5089C27.8594 52.1421 25.6741 50.2074 24.0389 47.7138C22.3959 45.2195 21.5745 42.5579 21.5745 39.7199C21.5745 34.0849 24.4697 29.5605 30.2682 26.1551C36.0667 22.7503 43.4764 21.0475 52.5133 21.0475H89.5689C94.5857 21.0475 95.5271 13.8053 90.6539 12.6065C90.5986 12.5902 90.5507 12.5824 90.4947 12.5667L40.2381 0.608441C28.2344 -2.25317 16.1906 5.18847 13.3353 17.2186L1.40325 67.5933C1.01243 69.2477 0.813018 70.9108 0.797097 72.549C0.773158 74.955 2.68737 76.9215 5.08019 76.9215H53.3429C58.9256 76.9215 63.2168 76.122 66.2233 74.5155Z",
                                                fill: "var(--description)"
                                            })]
                                        })]
                                    }), (0,
                                    n.jsxs)("svg", {
                                        width: "136",
                                        height: "28",
                                        viewBox: "0 0 136 28",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0,
                                        n.jsx)("path", {
                                            d: "M1.04836 22.5105C2.59498 23.3602 4.94323 24.105 7.38447 24.0981C10.4387 24.0907 12.1405 22.7077 12.1349 20.6424C12.13 18.7379 10.8001 17.6204 7.48061 16.471C3.15136 15.0064 0.380877 12.7771 0.371011 9.16748C0.359251 5.03704 3.93961 1.92211 9.61881 1.9073C12.4614 1.89989 14.5365 2.47432 15.9038 3.13537L14.7717 6.85607C13.8231 6.3808 11.9928 5.66675 9.53489 5.67302C6.49712 5.68099 5.21439 7.2396 5.21818 8.72013C5.22346 10.6566 6.74237 11.5592 10.2404 12.8318C14.7986 14.4941 16.989 16.6818 17 20.3079C17.0109 24.3631 13.8493 27.8901 7.08867 27.9072C4.3186 27.9146 1.43532 27.1658 0 26.3224L1.04836 22.5059V22.5105Z",
                                            fill: "#ADCBE4"
                                        }), (0,
                                        n.jsx)("path", {
                                            d: "M24.4781 19.7036C24.6124 22.9996 27.2077 24.4352 30.1972 24.4272C32.3467 24.421 33.8819 24.085 35.2964 23.5719L35.9953 26.7381C34.4134 27.4015 32.2201 27.9003 29.5421 27.9072C23.5416 27.9231 20.0146 24.2826 20 18.7082C19.9864 13.6856 23.0655 8.92321 29.0106 8.90726C34.9566 8.89189 36.9892 13.7482 36.9999 17.7361C37.0029 18.5937 36.9279 19.2742 36.8423 19.6711L24.4781 19.7036ZM32.5979 16.477C32.6154 14.7943 31.8619 12.0461 28.7312 12.0546C25.8565 12.062 24.6659 14.6383 24.4635 16.4987L32.5979 16.477Z",
                                            fill: "#ADCBE4"
                                        }), (0,
                                        n.jsx)("path", {
                                            d: "M40 0.91996L44.9242 0.907227L45 27.8951L40.0759 27.9072L40 0.91996Z",
                                            fill: "#ADCBE4"
                                        }), (0,
                                        n.jsx)("path", {
                                            d: "M54.9945 4.40812C54.9982 5.79207 54.038 6.91359 52.4548 6.91819C50.9704 6.92221 49.9982 5.80586 50 4.42248C49.9963 3.00579 50.9937 1.91126 52.4987 1.90724C54.0045 1.90322 54.9804 2.98109 55 4.40812H54.9945ZM50.3157 27.9072L50.2682 9.55631L54.743 9.54426L54.7896 27.8946L50.3157 27.9072Z",
                                            fill: "#ADCBE4"
                                        }), (0,
                                        n.jsx)("path", {
                                            d: "M62.7028 8.96412L64.628 17.5499C65.0682 19.568 65.4805 21.6199 65.8192 23.6831L65.9099 23.6825C66.2743 21.6401 66.8428 19.5242 67.3577 17.5754L69.7225 8.94397L73.4491 8.9339L75.7449 17.3347C76.3134 19.5313 76.8284 21.5938 77.2144 23.6511L77.2948 23.6505C77.5788 21.6081 77.9968 19.5259 78.4895 17.327L80.4848 8.91967L85 8.90723L79.3432 27.8628L75.064 27.8746L72.8617 20.1714C72.3035 18.1924 71.8815 16.4078 71.4675 14.1111H71.3928C71.0073 16.4493 70.5562 18.3032 70.0196 20.1732L67.7221 27.8954L63.4322 27.9072L58 8.9825L62.692 8.96946L62.7028 8.96412Z",
                                            fill: "#ADCBE4"
                                        }), (0,
                                        n.jsx)("path", {
                                            d: "M98.0291 27.4789L97.7218 25.4564H97.6144C96.5618 26.8942 94.7457 27.9004 92.496 27.9072C88.9659 27.9169 87.0071 25.2881 87 22.5154C86.988 17.9272 90.892 15.5981 97.3017 15.6072L97.3011 15.3075C97.2984 14.1137 96.8418 12.1287 93.7617 12.1481C92.0563 12.1532 90.2741 12.7305 89.0879 13.5159L88.2091 10.5362C89.5195 9.69728 91.7714 8.91467 94.5076 8.90727C100.088 8.89192 101.69 12.565 101.7 16.548L101.717 23.0898C101.722 24.7438 101.802 26.3443 102 27.4681L98.0291 27.4789ZM97.4221 18.5779C94.3169 18.5437 91.3518 19.2371 91.3589 22.0052C91.3638 23.7826 92.4829 24.6198 93.8712 24.6158C95.629 24.6107 96.886 23.4243 97.3082 22.0899C97.3998 21.7686 97.4292 21.4097 97.4281 21.0889L97.4221 18.5779Z",
                                            fill: "#ADCBE4"
                                        }), (0,
                                        n.jsx)("path", {
                                            d: "M107.16 15.3157C107.154 12.8289 107.102 11.0039 107 9.35321L110.848 9.34276L111.022 12.8672L111.146 12.8666C112.005 10.252 114.053 8.91309 115.947 8.90728C116.382 8.90612 116.636 8.9218 116.989 9.00831L117 13.4246C116.621 13.3433 116.232 13.2957 115.694 13.2968C113.577 13.3026 112.109 14.7281 111.716 16.8549C111.645 17.2707 111.604 17.7683 111.605 18.2705L111.63 27.895L107.181 27.9072L107.149 15.3215L107.16 15.3157Z",
                                            fill: "#ADCBE4"
                                        }), (0,
                                        n.jsx)("path", {
                                            d: "M123.478 19.7033C123.612 23 126.207 24.4345 129.197 24.4266C131.347 24.421 132.881 24.0849 134.296 23.5718L134.995 26.738C133.413 27.4009 131.221 27.9003 128.542 27.9072C122.543 27.9231 119.015 24.2825 119 18.7079C118.987 13.6852 122.066 8.92264 128.01 8.90727C133.956 8.89132 135.99 13.7472 136 17.7352C136.002 18.5929 135.928 19.274 135.841 19.6709L123.478 19.7033ZM131.597 16.4767C131.615 14.7933 130.861 12.0456 127.731 12.0542C124.856 12.0616 123.666 14.6379 123.464 16.4983L131.597 16.4767Z",
                                            fill: "#ADCBE4"
                                        })]
                                    }), (0,
                                    n.jsx)("span", {
                                        className: "updater-status",
                                        children: "Update available"
                                    })]
                                }), "download" == L && (0,
                                n.jsxs)(n.Fragment, {
                                    children: [(0,
                                    n.jsxs)("div", {
                                        className: "flex flex-col items-center gap-[5px]",
                                        children: [(0,
                                        n.jsxs)("svg", {
                                            width: "108",
                                            height: "107",
                                            viewBox: "0 0 108 107",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0,
                                            n.jsx)("mask", {
                                                id: "mask0_411_338",
                                                style: {
                                                    maskType: "luminance"
                                                },
                                                maskUnits: "userSpaceOnUse",
                                                x: "0",
                                                y: "0",
                                                width: "108",
                                                height: "107",
                                                children: (0,
                                                n.jsx)("path", {
                                                    d: "M107.682 0H0.797119V106.249H107.682V0Z",
                                                    fill: "white"
                                                })
                                            }), (0,
                                            n.jsxs)("g", {
                                                mask: "url(#mask0_411_338)",
                                                children: [(0,
                                                n.jsx)("path", {
                                                    d: "M52.8315 30.207C47.9347 30.207 44.1938 30.9424 41.6176 32.421C39.0414 33.9 37.7493 35.7786 37.7493 38.0565C37.7493 41.6614 41.8011 44.1875 49.8965 45.6341L64.7238 48.312C73.7128 49.9428 79.7426 52.3567 82.8132 55.5464C85.8843 58.7354 87.4153 62.2524 87.4153 66.1057C87.4153 72.3005 84.1849 77.1685 77.7329 80.7334C71.2803 84.2984 62.9137 86.0728 52.6406 86.0728H18.9021C13.8853 86.0728 12.9441 93.3151 17.8174 94.5143C17.8732 94.5305 17.9212 94.538 17.977 94.5541L64.0697 105.529C78.3784 108.935 92.7275 100.07 96.1245 85.737L107.077 39.5435C107.499 37.7447 107.698 35.9544 107.682 34.1877C107.666 31.8698 105.704 30.0312 103.392 30.0391L52.8396 30.2228L52.8315 30.207Z",
                                                    fill: "var(--description)"
                                                }), (0,
                                                n.jsx)("path", {
                                                    d: "M66.2233 74.5155C69.2304 72.917 70.7302 70.9263 70.7302 68.552C70.7302 66.8261 70.0443 65.2352 68.6881 63.7723C67.3245 62.3094 64.4051 61.1586 59.9305 60.3268L43.2451 57.1856C37.5342 56.1065 33.3149 54.8835 30.5872 53.5089C27.8594 52.1421 25.6741 50.2074 24.0389 47.7138C22.3959 45.2195 21.5745 42.5579 21.5745 39.7199C21.5745 34.0849 24.4697 29.5605 30.2682 26.1551C36.0667 22.7503 43.4764 21.0475 52.5133 21.0475H89.5689C94.5857 21.0475 95.5271 13.8053 90.6539 12.6065C90.5986 12.5902 90.5507 12.5824 90.4947 12.5667L40.2381 0.608441C28.2344 -2.25317 16.1906 5.18847 13.3353 17.2186L1.40325 67.5933C1.01243 69.2477 0.813018 70.9108 0.797097 72.549C0.773158 74.955 2.68737 76.9215 5.08019 76.9215H53.3429C58.9256 76.9215 63.2168 76.122 66.2233 74.5155Z",
                                                    fill: "var(--description)"
                                                })]
                                            })]
                                        }), (0,
                                        n.jsxs)("svg", {
                                            width: "136",
                                            height: "28",
                                            viewBox: "0 0 136 28",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0,
                                            n.jsx)("path", {
                                                d: "M1.04836 22.5105C2.59498 23.3602 4.94323 24.105 7.38447 24.0981C10.4387 24.0907 12.1405 22.7077 12.1349 20.6424C12.13 18.7379 10.8001 17.6204 7.48061 16.471C3.15136 15.0064 0.380877 12.7771 0.371011 9.16748C0.359251 5.03704 3.93961 1.92211 9.61881 1.9073C12.4614 1.89989 14.5365 2.47432 15.9038 3.13537L14.7717 6.85607C13.8231 6.3808 11.9928 5.66675 9.53489 5.67302C6.49712 5.68099 5.21439 7.2396 5.21818 8.72013C5.22346 10.6566 6.74237 11.5592 10.2404 12.8318C14.7986 14.4941 16.989 16.6818 17 20.3079C17.0109 24.3631 13.8493 27.8901 7.08867 27.9072C4.3186 27.9146 1.43532 27.1658 0 26.3224L1.04836 22.5059V22.5105Z",
                                                fill: "#ADCBE4"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M24.4781 19.7036C24.6124 22.9996 27.2077 24.4352 30.1972 24.4272C32.3467 24.421 33.8819 24.085 35.2964 23.5719L35.9953 26.7381C34.4134 27.4015 32.2201 27.9003 29.5421 27.9072C23.5416 27.9231 20.0146 24.2826 20 18.7082C19.9864 13.6856 23.0655 8.92321 29.0106 8.90726C34.9566 8.89189 36.9892 13.7482 36.9999 17.7361C37.0029 18.5937 36.9279 19.2742 36.8423 19.6711L24.4781 19.7036ZM32.5979 16.477C32.6154 14.7943 31.8619 12.0461 28.7312 12.0546C25.8565 12.062 24.6659 14.6383 24.4635 16.4987L32.5979 16.477Z",
                                                fill: "#ADCBE4"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M40 0.91996L44.9242 0.907227L45 27.8951L40.0759 27.9072L40 0.91996Z",
                                                fill: "#ADCBE4"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M54.9945 4.40812C54.9982 5.79207 54.038 6.91359 52.4548 6.91819C50.9704 6.92221 49.9982 5.80586 50 4.42248C49.9963 3.00579 50.9937 1.91126 52.4987 1.90724C54.0045 1.90322 54.9804 2.98109 55 4.40812H54.9945ZM50.3157 27.9072L50.2682 9.55631L54.743 9.54426L54.7896 27.8946L50.3157 27.9072Z",
                                                fill: "#ADCBE4"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M62.7028 8.96412L64.628 17.5499C65.0682 19.568 65.4805 21.6199 65.8192 23.6831L65.9099 23.6825C66.2743 21.6401 66.8428 19.5242 67.3577 17.5754L69.7225 8.94397L73.4491 8.9339L75.7449 17.3347C76.3134 19.5313 76.8284 21.5938 77.2144 23.6511L77.2948 23.6505C77.5788 21.6081 77.9968 19.5259 78.4895 17.327L80.4848 8.91967L85 8.90723L79.3432 27.8628L75.064 27.8746L72.8617 20.1714C72.3035 18.1924 71.8815 16.4078 71.4675 14.1111H71.3928C71.0073 16.4493 70.5562 18.3032 70.0196 20.1732L67.7221 27.8954L63.4322 27.9072L58 8.9825L62.692 8.96946L62.7028 8.96412Z",
                                                fill: "#ADCBE4"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M98.0291 27.4789L97.7218 25.4564H97.6144C96.5618 26.8942 94.7457 27.9004 92.496 27.9072C88.9659 27.9169 87.0071 25.2881 87 22.5154C86.988 17.9272 90.892 15.5981 97.3017 15.6072L97.3011 15.3075C97.2984 14.1137 96.8418 12.1287 93.7617 12.1481C92.0563 12.1532 90.2741 12.7305 89.0879 13.5159L88.2091 10.5362C89.5195 9.69728 91.7714 8.91467 94.5076 8.90727C100.088 8.89192 101.69 12.565 101.7 16.548L101.717 23.0898C101.722 24.7438 101.802 26.3443 102 27.4681L98.0291 27.4789ZM97.4221 18.5779C94.3169 18.5437 91.3518 19.2371 91.3589 22.0052C91.3638 23.7826 92.4829 24.6198 93.8712 24.6158C95.629 24.6107 96.886 23.4243 97.3082 22.0899C97.3998 21.7686 97.4292 21.4097 97.4281 21.0889L97.4221 18.5779Z",
                                                fill: "#ADCBE4"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M107.16 15.3157C107.154 12.8289 107.102 11.0039 107 9.35321L110.848 9.34276L111.022 12.8672L111.146 12.8666C112.005 10.252 114.053 8.91309 115.947 8.90728C116.382 8.90612 116.636 8.9218 116.989 9.00831L117 13.4246C116.621 13.3433 116.232 13.2957 115.694 13.2968C113.577 13.3026 112.109 14.7281 111.716 16.8549C111.645 17.2707 111.604 17.7683 111.605 18.2705L111.63 27.895L107.181 27.9072L107.149 15.3215L107.16 15.3157Z",
                                                fill: "#ADCBE4"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M123.478 19.7033C123.612 23 126.207 24.4345 129.197 24.4266C131.347 24.421 132.881 24.0849 134.296 23.5718L134.995 26.738C133.413 27.4009 131.221 27.9003 128.542 27.9072C122.543 27.9231 119.015 24.2825 119 18.7079C118.987 13.6852 122.066 8.92264 128.01 8.90727C133.956 8.89132 135.99 13.7472 136 17.7352C136.002 18.5929 135.928 19.274 135.841 19.6709L123.478 19.7033ZM131.597 16.4767C131.615 14.7933 130.861 12.0456 127.731 12.0542C124.856 12.0616 123.666 14.6379 123.464 16.4983L131.597 16.4767Z",
                                                fill: "#ADCBE4"
                                            })]
                                        })]
                                    }), (0,
                                    n.jsxs)("div", {
                                        className: "space-y-1 w-md",
                                        children: [(0,
                                        n.jsxs)("div", {
                                            className: "flex flex-col items-center",
                                            children: [(0,
                                            n.jsxs)("span", {
                                                className: "text-[var(--description)]",
                                                children: [S.total > 0 ? (S.current / S.total * 100).toFixed(0) : 0, "%"]
                                            }), (0,
                                            n.jsx)("div", {
                                                className: "flex w-full h-[20px] bg-[var(--inner-background)] rounded-full overflow-hidden border border-[rgb(var(--border))]",
                                                role: "progressbar",
                                                "aria-valuenow": 0,
                                                "aria-valuemin": S.total > 0 ? S.current / S.total * 100 : 0,
                                                "aria-valuemax": 100,
                                                children: (0,
                                                n.jsx)("div", {
                                                    className: "flex flex-col justify-center rounded-full overflow-hidden text-xs text-white text-center whitespace-nowrap transition duration-300 bg-[var(--accent)]",
                                                    style: {
                                                        width: (S.total > 0 ? S.current / S.total * 100 : 0) + "%"
                                                    }
                                                })
                                            })]
                                        }), (0,
                                        n.jsxs)("div", {
                                            className: "flex justify-between text-sm text-[var(--description)]",
                                            children: [(0,
                                            n.jsxs)("span", {
                                                children: [q(S.current), " MB of ", q(S.total), " MB"]
                                            }), (0,
                                            n.jsxs)("span", {
                                                children: ["~", 60 > id.fromObject({
                                                    seconds: S.remaining
                                                }).as("seconds") ? id.fromObject({
                                                    seconds: S.remaining
                                                }).toFormat("s 'sec'") : id.fromObject({
                                                    seconds: S.remaining
                                                }).shiftTo("minutes").toFormat("m 'min'"), " remaining ", "(" + q(S.speed) + " MB/s)"]
                                            })]
                                        })]
                                    })]
                                }), "installing" == L && (0,
                                n.jsxs)("div", {
                                    className: "flex flex-col items-center gap-[5px]",
                                    children: [(0,
                                    n.jsxs)("svg", {
                                        width: "108",
                                        height: "107",
                                        viewBox: "0 0 108 107",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0,
                                        n.jsx)("mask", {
                                            id: "mask0_411_338",
                                            style: {
                                                maskType: "luminance"
                                            },
                                            maskUnits: "userSpaceOnUse",
                                            x: "0",
                                            y: "0",
                                            width: "108",
                                            height: "107",
                                            children: (0,
                                            n.jsx)("path", {
                                                d: "M107.682 0H0.797119V106.249H107.682V0Z",
                                                fill: "white"
                                            })
                                        }), (0,
                                        n.jsxs)("g", {
                                            mask: "url(#mask0_411_338)",
                                            children: [(0,
                                            n.jsx)("path", {
                                                d: "M52.8315 30.207C47.9347 30.207 44.1938 30.9424 41.6176 32.421C39.0414 33.9 37.7493 35.7786 37.7493 38.0565C37.7493 41.6614 41.8011 44.1875 49.8965 45.6341L64.7238 48.312C73.7128 49.9428 79.7426 52.3567 82.8132 55.5464C85.8843 58.7354 87.4153 62.2524 87.4153 66.1057C87.4153 72.3005 84.1849 77.1685 77.7329 80.7334C71.2803 84.2984 62.9137 86.0728 52.6406 86.0728H18.9021C13.8853 86.0728 12.9441 93.3151 17.8174 94.5143C17.8732 94.5305 17.9212 94.538 17.977 94.5541L64.0697 105.529C78.3784 108.935 92.7275 100.07 96.1245 85.737L107.077 39.5435C107.499 37.7447 107.698 35.9544 107.682 34.1877C107.666 31.8698 105.704 30.0312 103.392 30.0391L52.8396 30.2228L52.8315 30.207Z",
                                                fill: "var(--description)"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M66.2233 74.5155C69.2304 72.917 70.7302 70.9263 70.7302 68.552C70.7302 66.8261 70.0443 65.2352 68.6881 63.7723C67.3245 62.3094 64.4051 61.1586 59.9305 60.3268L43.2451 57.1856C37.5342 56.1065 33.3149 54.8835 30.5872 53.5089C27.8594 52.1421 25.6741 50.2074 24.0389 47.7138C22.3959 45.2195 21.5745 42.5579 21.5745 39.7199C21.5745 34.0849 24.4697 29.5605 30.2682 26.1551C36.0667 22.7503 43.4764 21.0475 52.5133 21.0475H89.5689C94.5857 21.0475 95.5271 13.8053 90.6539 12.6065C90.5986 12.5902 90.5507 12.5824 90.4947 12.5667L40.2381 0.608441C28.2344 -2.25317 16.1906 5.18847 13.3353 17.2186L1.40325 67.5933C1.01243 69.2477 0.813018 70.9108 0.797097 72.549C0.773158 74.955 2.68737 76.9215 5.08019 76.9215H53.3429C58.9256 76.9215 63.2168 76.122 66.2233 74.5155Z",
                                                fill: "var(--description)"
                                            })]
                                        })]
                                    }), (0,
                                    n.jsxs)("svg", {
                                        width: "136",
                                        height: "28",
                                        viewBox: "0 0 136 28",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0,
                                        n.jsx)("path", {
                                            d: "M1.04836 22.5105C2.59498 23.3602 4.94323 24.105 7.38447 24.0981C10.4387 24.0907 12.1405 22.7077 12.1349 20.6424C12.13 18.7379 10.8001 17.6204 7.48061 16.471C3.15136 15.0064 0.380877 12.7771 0.371011 9.16748C0.359251 5.03704 3.93961 1.92211 9.61881 1.9073C12.4614 1.89989 14.5365 2.47432 15.9038 3.13537L14.7717 6.85607C13.8231 6.3808 11.9928 5.66675 9.53489 5.67302C6.49712 5.68099 5.21439 7.2396 5.21818 8.72013C5.22346 10.6566 6.74237 11.5592 10.2404 12.8318C14.7986 14.4941 16.989 16.6818 17 20.3079C17.0109 24.3631 13.8493 27.8901 7.08867 27.9072C4.3186 27.9146 1.43532 27.1658 0 26.3224L1.04836 22.5059V22.5105Z",
                                            fill: "#ADCBE4"
                                        }), (0,
                                        n.jsx)("path", {
                                            d: "M24.4781 19.7036C24.6124 22.9996 27.2077 24.4352 30.1972 24.4272C32.3467 24.421 33.8819 24.085 35.2964 23.5719L35.9953 26.7381C34.4134 27.4015 32.2201 27.9003 29.5421 27.9072C23.5416 27.9231 20.0146 24.2826 20 18.7082C19.9864 13.6856 23.0655 8.92321 29.0106 8.90726C34.9566 8.89189 36.9892 13.7482 36.9999 17.7361C37.0029 18.5937 36.9279 19.2742 36.8423 19.6711L24.4781 19.7036ZM32.5979 16.477C32.6154 14.7943 31.8619 12.0461 28.7312 12.0546C25.8565 12.062 24.6659 14.6383 24.4635 16.4987L32.5979 16.477Z",
                                            fill: "#ADCBE4"
                                        }), (0,
                                        n.jsx)("path", {
                                            d: "M40 0.91996L44.9242 0.907227L45 27.8951L40.0759 27.9072L40 0.91996Z",
                                            fill: "#ADCBE4"
                                        }), (0,
                                        n.jsx)("path", {
                                            d: "M54.9945 4.40812C54.9982 5.79207 54.038 6.91359 52.4548 6.91819C50.9704 6.92221 49.9982 5.80586 50 4.42248C49.9963 3.00579 50.9937 1.91126 52.4987 1.90724C54.0045 1.90322 54.9804 2.98109 55 4.40812H54.9945ZM50.3157 27.9072L50.2682 9.55631L54.743 9.54426L54.7896 27.8946L50.3157 27.9072Z",
                                            fill: "#ADCBE4"
                                        }), (0,
                                        n.jsx)("path", {
                                            d: "M62.7028 8.96412L64.628 17.5499C65.0682 19.568 65.4805 21.6199 65.8192 23.6831L65.9099 23.6825C66.2743 21.6401 66.8428 19.5242 67.3577 17.5754L69.7225 8.94397L73.4491 8.9339L75.7449 17.3347C76.3134 19.5313 76.8284 21.5938 77.2144 23.6511L77.2948 23.6505C77.5788 21.6081 77.9968 19.5259 78.4895 17.327L80.4848 8.91967L85 8.90723L79.3432 27.8628L75.064 27.8746L72.8617 20.1714C72.3035 18.1924 71.8815 16.4078 71.4675 14.1111H71.3928C71.0073 16.4493 70.5562 18.3032 70.0196 20.1732L67.7221 27.8954L63.4322 27.9072L58 8.9825L62.692 8.96946L62.7028 8.96412Z",
                                            fill: "#ADCBE4"
                                        }), (0,
                                        n.jsx)("path", {
                                            d: "M98.0291 27.4789L97.7218 25.4564H97.6144C96.5618 26.8942 94.7457 27.9004 92.496 27.9072C88.9659 27.9169 87.0071 25.2881 87 22.5154C86.988 17.9272 90.892 15.5981 97.3017 15.6072L97.3011 15.3075C97.2984 14.1137 96.8418 12.1287 93.7617 12.1481C92.0563 12.1532 90.2741 12.7305 89.0879 13.5159L88.2091 10.5362C89.5195 9.69728 91.7714 8.91467 94.5076 8.90727C100.088 8.89192 101.69 12.565 101.7 16.548L101.717 23.0898C101.722 24.7438 101.802 26.3443 102 27.4681L98.0291 27.4789ZM97.4221 18.5779C94.3169 18.5437 91.3518 19.2371 91.3589 22.0052C91.3638 23.7826 92.4829 24.6198 93.8712 24.6158C95.629 24.6107 96.886 23.4243 97.3082 22.0899C97.3998 21.7686 97.4292 21.4097 97.4281 21.0889L97.4221 18.5779Z",
                                            fill: "#ADCBE4"
                                        }), (0,
                                        n.jsx)("path", {
                                            d: "M107.16 15.3157C107.154 12.8289 107.102 11.0039 107 9.35321L110.848 9.34276L111.022 12.8672L111.146 12.8666C112.005 10.252 114.053 8.91309 115.947 8.90728C116.382 8.90612 116.636 8.9218 116.989 9.00831L117 13.4246C116.621 13.3433 116.232 13.2957 115.694 13.2968C113.577 13.3026 112.109 14.7281 111.716 16.8549C111.645 17.2707 111.604 17.7683 111.605 18.2705L111.63 27.895L107.181 27.9072L107.149 15.3215L107.16 15.3157Z",
                                            fill: "#ADCBE4"
                                        }), (0,
                                        n.jsx)("path", {
                                            d: "M123.478 19.7033C123.612 23 126.207 24.4345 129.197 24.4266C131.347 24.421 132.881 24.0849 134.296 23.5718L134.995 26.738C133.413 27.4009 131.221 27.9003 128.542 27.9072C122.543 27.9231 119.015 24.2825 119 18.7079C118.987 13.6852 122.066 8.92264 128.01 8.90727C133.956 8.89132 135.99 13.7472 136 17.7352C136.002 18.5929 135.928 19.274 135.841 19.6709L123.478 19.7033ZM131.597 16.4767C131.615 14.7933 130.861 12.0456 127.731 12.0542C124.856 12.0616 123.666 14.6379 123.464 16.4983L131.597 16.4767Z",
                                            fill: "#ADCBE4"
                                        })]
                                    }), (0,
                                    n.jsx)("span", {
                                        className: "updater-status",
                                        children: "Installing update..."
                                    })]
                                }), L.endsWith("_failed") && (0,
                                n.jsxs)(n.Fragment, {
                                    children: [(0,
                                    n.jsxs)("div", {
                                        className: "flex flex-col items-center gap-[5px]",
                                        children: [(0,
                                        n.jsxs)("svg", {
                                            width: "108",
                                            height: "107",
                                            viewBox: "0 0 108 107",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0,
                                            n.jsx)("mask", {
                                                id: "mask0_411_338",
                                                style: {
                                                    maskType: "luminance"
                                                },
                                                maskUnits: "userSpaceOnUse",
                                                x: "0",
                                                y: "0",
                                                width: "108",
                                                height: "107",
                                                children: (0,
                                                n.jsx)("path", {
                                                    d: "M107.682 0H0.797119V106.249H107.682V0Z",
                                                    fill: "white"
                                                })
                                            }), (0,
                                            n.jsxs)("g", {
                                                mask: "url(#mask0_411_338)",
                                                children: [(0,
                                                n.jsx)("path", {
                                                    d: "M52.8315 30.207C47.9347 30.207 44.1938 30.9424 41.6176 32.421C39.0414 33.9 37.7493 35.7786 37.7493 38.0565C37.7493 41.6614 41.8011 44.1875 49.8965 45.6341L64.7238 48.312C73.7128 49.9428 79.7426 52.3567 82.8132 55.5464C85.8843 58.7354 87.4153 62.2524 87.4153 66.1057C87.4153 72.3005 84.1849 77.1685 77.7329 80.7334C71.2803 84.2984 62.9137 86.0728 52.6406 86.0728H18.9021C13.8853 86.0728 12.9441 93.3151 17.8174 94.5143C17.8732 94.5305 17.9212 94.538 17.977 94.5541L64.0697 105.529C78.3784 108.935 92.7275 100.07 96.1245 85.737L107.077 39.5435C107.499 37.7447 107.698 35.9544 107.682 34.1877C107.666 31.8698 105.704 30.0312 103.392 30.0391L52.8396 30.2228L52.8315 30.207Z",
                                                    fill: "var(--description)"
                                                }), (0,
                                                n.jsx)("path", {
                                                    d: "M66.2233 74.5155C69.2304 72.917 70.7302 70.9263 70.7302 68.552C70.7302 66.8261 70.0443 65.2352 68.6881 63.7723C67.3245 62.3094 64.4051 61.1586 59.9305 60.3268L43.2451 57.1856C37.5342 56.1065 33.3149 54.8835 30.5872 53.5089C27.8594 52.1421 25.6741 50.2074 24.0389 47.7138C22.3959 45.2195 21.5745 42.5579 21.5745 39.7199C21.5745 34.0849 24.4697 29.5605 30.2682 26.1551C36.0667 22.7503 43.4764 21.0475 52.5133 21.0475H89.5689C94.5857 21.0475 95.5271 13.8053 90.6539 12.6065C90.5986 12.5902 90.5507 12.5824 90.4947 12.5667L40.2381 0.608441C28.2344 -2.25317 16.1906 5.18847 13.3353 17.2186L1.40325 67.5933C1.01243 69.2477 0.813018 70.9108 0.797097 72.549C0.773158 74.955 2.68737 76.9215 5.08019 76.9215H53.3429C58.9256 76.9215 63.2168 76.122 66.2233 74.5155Z",
                                                    fill: "var(--description)"
                                                })]
                                            })]
                                        }), (0,
                                        n.jsxs)("svg", {
                                            width: "136",
                                            height: "28",
                                            viewBox: "0 0 136 28",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0,
                                            n.jsx)("path", {
                                                d: "M1.04836 22.5105C2.59498 23.3602 4.94323 24.105 7.38447 24.0981C10.4387 24.0907 12.1405 22.7077 12.1349 20.6424C12.13 18.7379 10.8001 17.6204 7.48061 16.471C3.15136 15.0064 0.380877 12.7771 0.371011 9.16748C0.359251 5.03704 3.93961 1.92211 9.61881 1.9073C12.4614 1.89989 14.5365 2.47432 15.9038 3.13537L14.7717 6.85607C13.8231 6.3808 11.9928 5.66675 9.53489 5.67302C6.49712 5.68099 5.21439 7.2396 5.21818 8.72013C5.22346 10.6566 6.74237 11.5592 10.2404 12.8318C14.7986 14.4941 16.989 16.6818 17 20.3079C17.0109 24.3631 13.8493 27.8901 7.08867 27.9072C4.3186 27.9146 1.43532 27.1658 0 26.3224L1.04836 22.5059V22.5105Z",
                                                fill: "#ADCBE4"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M24.4781 19.7036C24.6124 22.9996 27.2077 24.4352 30.1972 24.4272C32.3467 24.421 33.8819 24.085 35.2964 23.5719L35.9953 26.7381C34.4134 27.4015 32.2201 27.9003 29.5421 27.9072C23.5416 27.9231 20.0146 24.2826 20 18.7082C19.9864 13.6856 23.0655 8.92321 29.0106 8.90726C34.9566 8.89189 36.9892 13.7482 36.9999 17.7361C37.0029 18.5937 36.9279 19.2742 36.8423 19.6711L24.4781 19.7036ZM32.5979 16.477C32.6154 14.7943 31.8619 12.0461 28.7312 12.0546C25.8565 12.062 24.6659 14.6383 24.4635 16.4987L32.5979 16.477Z",
                                                fill: "#ADCBE4"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M40 0.91996L44.9242 0.907227L45 27.8951L40.0759 27.9072L40 0.91996Z",
                                                fill: "#ADCBE4"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M54.9945 4.40812C54.9982 5.79207 54.038 6.91359 52.4548 6.91819C50.9704 6.92221 49.9982 5.80586 50 4.42248C49.9963 3.00579 50.9937 1.91126 52.4987 1.90724C54.0045 1.90322 54.9804 2.98109 55 4.40812H54.9945ZM50.3157 27.9072L50.2682 9.55631L54.743 9.54426L54.7896 27.8946L50.3157 27.9072Z",
                                                fill: "#ADCBE4"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M62.7028 8.96412L64.628 17.5499C65.0682 19.568 65.4805 21.6199 65.8192 23.6831L65.9099 23.6825C66.2743 21.6401 66.8428 19.5242 67.3577 17.5754L69.7225 8.94397L73.4491 8.9339L75.7449 17.3347C76.3134 19.5313 76.8284 21.5938 77.2144 23.6511L77.2948 23.6505C77.5788 21.6081 77.9968 19.5259 78.4895 17.327L80.4848 8.91967L85 8.90723L79.3432 27.8628L75.064 27.8746L72.8617 20.1714C72.3035 18.1924 71.8815 16.4078 71.4675 14.1111H71.3928C71.0073 16.4493 70.5562 18.3032 70.0196 20.1732L67.7221 27.8954L63.4322 27.9072L58 8.9825L62.692 8.96946L62.7028 8.96412Z",
                                                fill: "#ADCBE4"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M98.0291 27.4789L97.7218 25.4564H97.6144C96.5618 26.8942 94.7457 27.9004 92.496 27.9072C88.9659 27.9169 87.0071 25.2881 87 22.5154C86.988 17.9272 90.892 15.5981 97.3017 15.6072L97.3011 15.3075C97.2984 14.1137 96.8418 12.1287 93.7617 12.1481C92.0563 12.1532 90.2741 12.7305 89.0879 13.5159L88.2091 10.5362C89.5195 9.69728 91.7714 8.91467 94.5076 8.90727C100.088 8.89192 101.69 12.565 101.7 16.548L101.717 23.0898C101.722 24.7438 101.802 26.3443 102 27.4681L98.0291 27.4789ZM97.4221 18.5779C94.3169 18.5437 91.3518 19.2371 91.3589 22.0052C91.3638 23.7826 92.4829 24.6198 93.8712 24.6158C95.629 24.6107 96.886 23.4243 97.3082 22.0899C97.3998 21.7686 97.4292 21.4097 97.4281 21.0889L97.4221 18.5779Z",
                                                fill: "#ADCBE4"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M107.16 15.3157C107.154 12.8289 107.102 11.0039 107 9.35321L110.848 9.34276L111.022 12.8672L111.146 12.8666C112.005 10.252 114.053 8.91309 115.947 8.90728C116.382 8.90612 116.636 8.9218 116.989 9.00831L117 13.4246C116.621 13.3433 116.232 13.2957 115.694 13.2968C113.577 13.3026 112.109 14.7281 111.716 16.8549C111.645 17.2707 111.604 17.7683 111.605 18.2705L111.63 27.895L107.181 27.9072L107.149 15.3215L107.16 15.3157Z",
                                                fill: "#ADCBE4"
                                            }), (0,
                                            n.jsx)("path", {
                                                d: "M123.478 19.7033C123.612 23 126.207 24.4345 129.197 24.4266C131.347 24.421 132.881 24.0849 134.296 23.5718L134.995 26.738C133.413 27.4009 131.221 27.9003 128.542 27.9072C122.543 27.9231 119.015 24.2825 119 18.7079C118.987 13.6852 122.066 8.92264 128.01 8.90727C133.956 8.89132 135.99 13.7472 136 17.7352C136.002 18.5929 135.928 19.274 135.841 19.6709L123.478 19.7033ZM131.597 16.4767C131.615 14.7933 130.861 12.0456 127.731 12.0542C124.856 12.0616 123.666 14.6379 123.464 16.4983L131.597 16.4767Z",
                                                fill: "#ADCBE4"
                                            })]
                                        })]
                                    }), (0,
                                    n.jsxs)("div", {
                                        className: "flex flex-col items-center gap-[10px] text-center",
                                        children: [(0,
                                        n.jsxs)("div", {
                                            children: [(0,
                                            n.jsxs)("div", {
                                                className: "text-[var(--accent)] text-xl",
                                                children: ["Failed to ", "download_failed" == L && "download", " ", "install_failed" == L && "install"]
                                            }), (0,
                                            n.jsx)("div", {
                                                className: "text-[var(--description)] w-sm",
                                                children: "Download by clicking button below and install manually"
                                            })]
                                        }), (0,
                                        n.jsxs)("div", {
                                            className: "w-md flex items-center justify-center flex-col gap-[10px]",
                                            children: [(0,
                                            n.jsx)("button", {
                                                className: "btn btn-primary flex items-center justify-center w-sm",
                                                onClick: () => {
                                                    (null == T ? void 0 : T.download_url) ? i8(T.download_url) : (console.error("Manual download URL missing"),
                                                    i8("https://seliware.com"))
                                                }
                                                ,
                                                children: "Download"
                                            }), (0,
                                            n.jsx)("button", {
                                                className: "btn btn-secondary  w-sm",
                                                onClick: () => {
                                                    _(!1),
                                                    A(!1),
                                                    j("available"),
                                                    E({
                                                        current: 0,
                                                        total: 0,
                                                        speed: 0,
                                                        remaining: 0
                                                    })
                                                }
                                                ,
                                                children: "Later"
                                            })]
                                        })]
                                    })]
                                }), "relaunch" == L && (0,
                                n.jsxs)("div", {
                                    role: "status",
                                    className: "flex items-center flex-col",
                                    children: [(0,
                                    n.jsx)("div", {
                                        className: "tracking-tight text-2xl font-bold",
                                        children: "Ready to relaunch"
                                    }), (0,
                                    n.jsx)("div", {
                                        className: "text-gray-300",
                                        children: "Relaunching..."
                                    })]
                                })]
                            })]
                        })
                    })]
                })]
            })
        }
        function sL(e) {
            let {children: t} = e
              , i = e => async t => {
                t.preventDefault(),
                t.stopPropagation();
                let i = await (0,
                l.uu)();
                i && await i.startResizeDragging(e)
            }
            ;
            return (0,
            n.jsxs)("div", {
                className: "relative w-full h-full select-none",
                children: [t, (0,
                n.jsx)("div", {
                    onMouseDown: i("North"),
                    className: "absolute top-0 left-0 w-full h-[8px] cursor-n-resize"
                }), (0,
                n.jsx)("div", {
                    onMouseDown: i("South"),
                    className: "absolute bottom-0 left-0 w-full h-[8px] cursor-s-resize"
                }), (0,
                n.jsx)("div", {
                    onMouseDown: i("West"),
                    className: "absolute top-0 left-0 w-[8px] h-full cursor-w-resize"
                }), (0,
                n.jsx)("div", {
                    onMouseDown: i("East"),
                    className: "absolute top-0 right-0 w-[8px] h-full cursor-e-resize"
                }), (0,
                n.jsx)("div", {
                    onMouseDown: i("NorthWest"),
                    className: "absolute top-0 left-0 w-[12px] h-[12px] cursor-nw-resize"
                }), (0,
                n.jsx)("div", {
                    onMouseDown: i("NorthEast"),
                    className: "absolute top-0 right-0 w-[12px] h-[12px] cursor-ne-resize"
                }), (0,
                n.jsx)("div", {
                    onMouseDown: i("SouthWest"),
                    className: "absolute bottom-0 left-0 w-[12px] h-[12px] cursor-sw-resize"
                }), (0,
                n.jsx)("div", {
                    onMouseDown: i("SouthEast"),
                    className: "absolute bottom-0 right-0 w-[12px] h-[12px] cursor-se-resize"
                })]
            })
        }
        let sj = e => {
            let {persistent: t=!1, isOpen: i, onClose: s, children: r, className: a, afterClose: l} = e
              , u = (0,
            o.useRef)(null)
              , [c,h] = (0,
            o.useState)(i)
              , [d,m] = (0,
            o.useState)(!1)
              , p = (0,
            o.useRef)(null)
              , f = (0,
            o.useRef)(i);
            return ((0,
            o.useEffect)( () => (i ? (f.current = !0,
            p.current && (clearTimeout(p.current),
            p.current = null),
            h(!0),
            requestAnimationFrame( () => requestAnimationFrame( () => m(!0)))) : f.current && (m(!1),
            p.current = window.setTimeout( () => {
                h(!1),
                null == l || l(),
                p.current = null,
                f.current = !1
            }
            , 200)),
            () => {
                p.current && (clearTimeout(p.current),
                p.current = null)
            }
            ), [i, l]),
            (0,
            o.useEffect)( () => {
                let e = e => {
                    if ("Escape" === e.key) {
                        if (t && u.current) {
                            u.current.classList.add("ring-2", "ring-blue-400"),
                            setTimeout( () => {
                                var e;
                                null == (e = u.current) || e.classList.remove("ring-2", "ring-blue-400")
                            }
                            , 1500);
                            return
                        }
                        s()
                    }
                }
                ;
                return i && document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e)
                }
            }
            , [i, s, t]),
            (0,
            o.useEffect)( () => {
                if (!i)
                    return;
                let e = e => {
                    if ("Tab" === e.key && u.current) {
                        let t = Array.from(u.current.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])')).filter(e => !e.hasAttribute("disabled"));
                        if (0 === t.length)
                            return;
                        let i = t[0]
                          , s = t[t.length - 1];
                        e.shiftKey || document.activeElement !== s ? e.shiftKey && document.activeElement === i && (e.preventDefault(),
                        s.focus()) : (e.preventDefault(),
                        i.focus())
                    }
                }
                ;
                return document.addEventListener("keydown", e),
                () => document.removeEventListener("keydown", e)
            }
            , [i]),
            c) ? (0,
            n.jsx)("div", {
                className: si()("bg-overlay fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-200", {
                    "opacity-100": d,
                    "opacity-0 pointer-events-none": !d
                }),
                onClick: e => {
                    !u.current || u.current.contains(e.target) || t || s()
                }
                ,
                children: (0,
                n.jsx)("div", {
                    className: si()("modal-container transition-transform duration-200", {
                        "scale-100": d,
                        "scale-95": !d
                    }),
                    children: (0,
                    n.jsx)("div", {
                        className: si()("modal", a),
                        ref: u,
                        children: r
                    })
                })
            }) : null
        }
        ;
        function sT(e) {
            let {value: t, anchor: i, items: s, onRequestClose: r, onChange: a, disabledValues: l} = e
              , u = (0,
            o.useMemo)( () => i ? {
                position: "absolute",
                right: 0,
                marginTop: "5px",
                zIndex: 50
            } : {
                display: "none"
            }, [i]);
            (0,
            o.useEffect)( () => {
                function e(e) {
                    "Escape" === e.key && r()
                }
                function t() {
                    r()
                }
                return window.addEventListener("keydown", e),
                window.addEventListener("mousedown", t),
                () => {
                    window.removeEventListener("keydown", e),
                    window.removeEventListener("mousedown", t)
                }
            }
            , [r]);
            let c = e => {
                a(e),
                r()
            }
            ;
            return (0,
            n.jsx)("div", {
                style: u,
                children: (0,
                n.jsx)(se.P.div, {
                    initial: {
                        opacity: 0,
                        scale: .98,
                        y: -2
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: .98,
                        y: -2
                    },
                    transition: {
                        duration: .08
                    },
                    className: si()("input-select-dropdown"),
                    style: {
                        width: null == i ? void 0 : i.width
                    },
                    role: "menu",
                    onMouseDown: e => e.stopPropagation(),
                    children: s.map( (e, i) => (0,
                    n.jsxs)("div", {
                        className: si()("i flex items-center gap-[5px] justify-between text-[var(--description)] py-[5px] px-[10px] hover:bg-[rgb(var(--card))]", l.includes(e) && "opacity-20 pointer-events-none"),
                        onClick: () => c(e),
                        children: [e, " ", e == t && (0,
                        n.jsx)("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 19 19",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            n.jsx)("path", {
                                d: "M19 9.5C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5ZM14.286 5.90148C13.9382 5.55367 13.3743 5.55367 13.0265 5.90148C13.0181 5.90988 13.0102 5.91878 13.0029 5.92812L8.87941 11.1824L6.39335 8.69633C6.04554 8.34852 5.48163 8.34852 5.13382 8.69633C4.78601 9.04414 4.78601 9.60805 5.13382 9.95586L8.27648 13.0985C8.62429 13.4463 9.1882 13.4463 9.53601 13.0985C9.54375 13.0908 9.55107 13.0826 9.55791 13.0741L14.2986 7.14812C14.6338 6.79941 14.6296 6.24503 14.286 5.90148Z",
                                fill: "#ADCBE4"
                            })
                        })]
                    }, i))
                })
            })
        }
        function sk(e) {
            let {value: t, defaultValue: i, id: s, options: r=[], onChange: a, disabledValues: l=[]} = e
              , {openId: u, setOpenId: c} = (0,
            sa.w)()
              , [h,d] = (0,
            o.useState)(null);
            return (0,
            o.useEffect)( () => {
                function e() {
                    c(null)
                }
                return window.addEventListener("blur", e),
                () => window.removeEventListener("blur", e)
            }
            , []),
            (0,
            n.jsxs)("div", {
                style: {
                    position: "relative"
                },
                className: "no-drag",
                children: [(0,
                n.jsxs)("div", {
                    className: "input-select",
                    style: {
                        position: "relative"
                    },
                    onClick: e => {
                        var t;
                        (t = e.currentTarget) && d(t.getBoundingClientRect()),
                        c(e => e === s ? null : s)
                    }
                    ,
                    onMouseDown: e => {
                        e.stopPropagation()
                    }
                    ,
                    children: [null != t ? t : i, (0,
                    n.jsx)(se.P.svg, {
                        initial: !1,
                        style: {
                            originY: "50%",
                            originX: "50%"
                        },
                        animate: {
                            rotate: 180 * (u === s)
                        },
                        transition: {
                            duration: .25,
                            ease: "easeInOut"
                        },
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        n.jsx)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z",
                            fill: "#748899"
                        })
                    })]
                }), (0,
                n.jsx)(i6.N, {
                    children: u === s && (0,
                    n.jsx)(sT, {
                        onChange: e => {
                            null == a || a(e),
                            c(null)
                        }
                        ,
                        disabledValues: l,
                        value: null != t ? t : i,
                        anchor: h,
                        items: r,
                        onRequestClose: () => c(null)
                    }, u)
                })]
            })
        }
        function sS(e) {
            let {value: t, anchor: i, items: s, onRequestClose: r, onChange: a} = e
              , l = (0,
            o.useMemo)( () => i ? {
                position: "absolute",
                right: 0,
                marginTop: "5px",
                zIndex: 50
            } : {
                display: "none"
            }, [i]);
            (0,
            o.useEffect)( () => {
                function e(e) {
                    "Escape" === e.key && r()
                }
                function t() {
                    r()
                }
                return window.addEventListener("keydown", e),
                window.addEventListener("mousedown", t),
                () => {
                    window.removeEventListener("keydown", e),
                    window.removeEventListener("mousedown", t)
                }
            }
            , [r]);
            let u = e => {
                a(e),
                r()
            }
            ;
            return (0,
            n.jsx)("div", {
                style: l,
                children: (0,
                n.jsx)(se.P.div, {
                    initial: {
                        opacity: 0,
                        scale: .98,
                        y: -2
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: .98,
                        y: -2
                    },
                    transition: {
                        duration: .08
                    },
                    className: si()("input-select-dropdown"),
                    style: {
                        width: null == i ? void 0 : i.width
                    },
                    role: "menu",
                    onMouseDown: e => e.stopPropagation(),
                    children: s.map( (e, i) => (0,
                    n.jsxs)("div", {
                        className: "flex items-center gap-[5px] justify-between text-[var(--description)] py-[5px] px-[10px] hover:bg-[rgb(var(--card))]",
                        onClick: () => u(e),
                        children: [e, "px ", e == t && (0,
                        n.jsx)("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 19 19",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            n.jsx)("path", {
                                d: "M19 9.5C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5ZM14.286 5.90148C13.9382 5.55367 13.3743 5.55367 13.0265 5.90148C13.0181 5.90988 13.0102 5.91878 13.0029 5.92812L8.87941 11.1824L6.39335 8.69633C6.04554 8.34852 5.48163 8.34852 5.13382 8.69633C4.78601 9.04414 4.78601 9.60805 5.13382 9.95586L8.27648 13.0985C8.62429 13.4463 9.1882 13.4463 9.53601 13.0985C9.54375 13.0908 9.55107 13.0826 9.55791 13.0741L14.2986 7.14812C14.6338 6.79941 14.6296 6.24503 14.286 5.90148Z",
                                fill: "#ADCBE4"
                            })
                        })]
                    }, i))
                })
            })
        }
        function sE(e) {
            let {value: t, defaultValue: i, id: s, options: r=[], onChange: a} = e
              , {openId: l, setOpenId: u} = (0,
            sa.w)()
              , [c,h] = (0,
            o.useState)(null);
            return (0,
            o.useEffect)( () => {
                function e() {
                    u(null)
                }
                return window.addEventListener("blur", e),
                () => window.removeEventListener("blur", e)
            }
            , []),
            (0,
            n.jsxs)("div", {
                style: {
                    position: "relative"
                },
                className: "no-drag",
                children: [(0,
                n.jsxs)("div", {
                    className: "input-select",
                    style: {
                        position: "relative"
                    },
                    onClick: e => {
                        var t;
                        (t = e.currentTarget) && h(t.getBoundingClientRect()),
                        u(e => e === s ? null : s)
                    }
                    ,
                    onMouseDown: e => {
                        e.stopPropagation()
                    }
                    ,
                    children: [null != t ? t : i, "px", (0,
                    n.jsx)(se.P.svg, {
                        initial: !1,
                        style: {
                            originY: "50%",
                            originX: "50%"
                        },
                        animate: {
                            rotate: 180 * (l === s)
                        },
                        transition: {
                            duration: .25,
                            ease: "easeInOut"
                        },
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        n.jsx)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z",
                            fill: "#748899"
                        })
                    })]
                }), (0,
                n.jsx)(i6.N, {
                    children: l === s && (0,
                    n.jsx)(sS, {
                        onChange: e => {
                            null == a || a(e),
                            u(null)
                        }
                        ,
                        value: null != t ? t : i,
                        anchor: c,
                        items: r,
                        onRequestClose: () => u(null)
                    }, l)
                })]
            })
        }
        let sM = [{
            icon: (0,
            n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                viewBox: "0 0 16 16",
                children: (0,
                n.jsx)("path", {
                    d: "M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
                })
            }),
            label: "general"
        }, {
            icon: (0,
            n.jsx)("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                n.jsx)("path", {
                    d: "M12.4333 10.0697C14.1336 10.585 16 11.1506 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C9.99573 16 9.8264 14.4956 9.64898 12.9194C9.52509 11.8186 9.39725 10.6829 10 10C10.4649 9.47326 11.4196 9.76255 12.4333 10.0697ZM8 5C7.17157 5 6.5 4.32843 6.5 3.5C6.5 2.67157 7.17157 2 8 2C8.82843 2 9.5 2.67157 9.5 3.5C9.5 4.32843 8.82843 5 8 5ZM12.5 8C11.6716 8 11 7.32843 11 6.5C11 5.67157 11.6716 5 12.5 5C13.3284 5 14 5.67157 14 6.5C14 7.32843 13.3284 8 12.5 8ZM5 6.5C5 7.32843 4.32843 8 3.5 8C2.67157 8 2 7.32843 2 6.5C2 5.67157 2.67157 5 3.5 5C4.32843 5 5 5.67157 5 6.5ZM5.5 13C4.67157 13 4 12.3284 4 11.5C4 10.6716 4.67157 10 5.5 10C6.32843 10 7 10.6716 7 11.5C7 12.3284 6.32843 13 5.5 13Z",
                    fill: "#ADCBE4"
                })
            }),
            label: "appearance"
        }, {
            icon: (0,
            n.jsx)("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                n.jsx)("path", {
                    d: "M13.4983 0.794674L13.6465 0.646522C14.1179 0.175118 14.8822 0.175117 15.3536 0.646522C15.825 1.11793 15.825 1.88222 15.3536 2.35363L15.2054 2.50178C15.7315 3.09078 15.7119 3.99531 15.1465 4.56074L4.85356 14.8536C4.78948 14.9177 4.70919 14.9632 4.62128 14.9851L0.621278 15.9851C0.450891 16.0277 0.270647 15.9778 0.146457 15.8536C0.022267 15.7294 -0.0276575 15.5492 0.0149394 15.3788L1.01494 11.3788C1.03692 11.2909 1.08238 11.2106 1.14646 11.1465L10.7877 1.50526C10.5926 1.36766 10.321 1.38616 10.1465 1.56074L6.85356 4.85363C6.6583 5.04889 6.34172 5.04889 6.14646 4.85363C5.95119 4.65837 5.95119 4.34178 6.14646 4.14652L9.43935 0.853629C10.0053 0.287656 10.9111 0.268512 11.5 0.7962C12.0678 0.287495 12.9299 0.286986 13.4983 0.794674Z",
                    fill: "#ADCBE4"
                })
            }),
            label: "editor"
        }, {
            icon: (0,
            n.jsx)("svg", {
                width: "12",
                height: "16",
                viewBox: "0 0 12 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                n.jsx)("path", {
                    d: "M6.5 0.0687942C5.96388 0.0159176 5.45211 0 5 0C4.40734 0 3.89568 0.157384 3.4727 0.463157C3.05454 0.765446 2.75569 1.18897 2.54269 1.67077C2.15676 2.54378 2.02145 3.68092 2.00242 4.87723L6.5 5.87669V0.0687942ZM1.70909 5.83644L1.38197 6C0.535006 6.42348 0 7.28914 0 8.23607V10.8125C0 13.658 2.21954 16 5 16H7C9.78046 16 12 13.658 12 10.8125V8.12331L3.00091 6.12351L3.00094 6.12609C3.0019 6.20896 3.00381 6.32963 3.00765 6.47937C3.01533 6.77912 3.03071 7.19395 3.06139 7.65424C3.12387 8.59142 3.24665 9.65881 3.47434 10.3419C3.56167 10.6039 3.42009 10.887 3.15811 10.9743C2.89614 11.0617 2.61298 10.9201 2.52566 10.6581C2.25335 9.84119 2.12613 8.65858 2.06361 7.72076C2.03179 7.24355 2.01592 6.81463 2.00798 6.505C2.004 6.35005 2.00201 6.22464 2.00101 6.13758C2.00049 6.09267 2.00017 6.04776 2 6.00284C1.99997 5.96941 2.00293 5.93598 2.00937 5.90317L1.70909 5.83644ZM12 7.09891V5.1875C12 4.05747 11.728 3.14305 11.2525 2.41507C10.7784 1.68914 10.1226 1.17995 9.4032 0.825039C8.80311 0.52898 8.1496 0.335869 7.5 0.211541V6.09891L12 7.09891Z",
                    fill: "#ADCBE4"
                })
            }),
            label: "keybinds"
        }]
          , sA = {
            general: {
                element: (0,
                n.jsx)(function(e) {
                    let {searchText: t=""} = e
                      , {userData: i} = (0,
                    r.k)()
                      , s = ["stable", "beta"]
                      , [a,u] = (0,
                    o.useState)("stable")
                      , [c,h] = (0,
                    o.useState)(!0)
                      , [d,m] = (0,
                    o.useState)("256");
                    (0,
                    o.useEffect)( () => {
                        !async function() {
                            try {
                                let e = await sv("user.json")
                                  , t = await e.get("always_on_top");
                                void 0 !== t && h(t);
                                let i = await e.get("channel");
                                void 0 !== i && u(i);
                                let s = await e.get("window_check_timeout");
                                void 0 !== s && m(s.toString()),
                                e.close()
                            } catch (e) {
                                console.error("Failed to load always on top value", e)
                            }
                        }()
                    }
                    , []);
                    let p = async e => {
                        await (0,
                        l.uu)().setAlwaysOnTop(e),
                        h(e);
                        let t = new sw("user.json");
                        try {
                            t.set("always_on_top", e)
                        } catch (e) {
                            console.error("Failed to set always on top value", e)
                        }
                    }
                      , f = async e => {
                        let t = new sw("user.json");
                        try {
                            t.set("channel", e)
                        } catch (e) {
                            console.error("Failed to set channel value", e)
                        }
                        u(e)
                    }
                      , g = async e => {
                        m(e);
                        let t = new sw("user.json");
                        try {
                            if ("" == e)
                                return void t.set("window_check_timeout", 256);
                            t.set("window_check_timeout", parseInt(e))
                        } catch (e) {
                            console.error("Failed to set window check timeout value", e)
                        }
                    }
                    ;
                    return (0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-[10px]",
                        children: [(0,
                        n.jsxs)("div", {
                            className: "flex flex-col gap-[10px] w-full",
                            children: [("" == t || ["always on top"].some(e => e.toLowerCase().includes(t.toLowerCase()))) && (0,
                            n.jsx)("div", {
                                className: "settings-item-divider",
                                children: "App"
                            }), ("" == t || ["always on top"].some(e => e.toLowerCase().includes(t.toLowerCase()))) && (0,
                            n.jsxs)("div", {
                                className: "settings-item-options",
                                children: [(0,
                                n.jsx)("div", {
                                    children: (0,
                                    n.jsx)("div", {
                                        className: "settings-item-options-title",
                                        children: "Always On Top"
                                    })
                                }), (0,
                                n.jsx)(i6.N, {
                                    mode: "wait",
                                    initial: !1,
                                    children: (0,
                                    n.jsx)("div", {
                                        onClick: () => p(!c),
                                        className: si()("cursor-pointer settings-item-options-toggle", c && "!bg-[#2B3B7D] cursor-pointer"),
                                        style: {
                                            justifyContent: "flex-" + (c ? "end" : "start")
                                        },
                                        children: (0,
                                        n.jsx)(se.P.div, {
                                            className: si()(c ? "bg-[var(--highlight)]" : "bg-[var(--description)]"),
                                            initial: !1,
                                            style: {
                                                width: "17px",
                                                height: "17px",
                                                borderRadius: "50%"
                                            },
                                            layout: !0,
                                            transition: {
                                                type: "spring",
                                                visualDuration: .2,
                                                bounce: .2
                                            }
                                        })
                                    })
                                })]
                            })]
                        }), (0,
                        n.jsxs)("div", {
                            className: "flex flex-col gap-[10px] w-full",
                            children: [("" == t || ["update channel"].some(e => e.toLowerCase().includes(t.toLowerCase()))) && (0,
                            n.jsx)("div", {
                                className: "settings-item-divider mt-[10px]",
                                children: "Updates"
                            }), ("" == t || ["update channel"].some(e => e.toLowerCase().includes(t.toLowerCase()))) && (0,
                            n.jsxs)("div", {
                                className: "settings-item-options",
                                children: [(0,
                                n.jsxs)("div", {
                                    children: [(0,
                                    n.jsx)("div", {
                                        className: "settings-item-options-title",
                                        children: "Update channel"
                                    }), (0,
                                    n.jsx)("div", {
                                        className: "settings-item-options-description",
                                        children: "Choose update channel"
                                    })]
                                }), (0,
                                n.jsx)(sk, {
                                    id: "font_size",
                                    options: s,
                                    defaultValue: s[0],
                                    value: a,
                                    disabledValues: [null === i || i.eligible ? "" : "beta"],
                                    onChange: e => f(e)
                                })]
                            })]
                        }), (0,
                        n.jsxs)("div", {
                            className: "flex flex-col gap-[10px] w-full",
                            children: [("" == t || ["window check timeout"].some(e => e.toLowerCase().includes(t.toLowerCase()))) && (0,
                            n.jsx)("div", {
                                className: "settings-item-divider mt-[10px]",
                                children: "Injection"
                            }), ("" == t || ["window check timeout"].some(e => e.toLowerCase().includes(t.toLowerCase()))) && (0,
                            n.jsxs)("div", {
                                className: "settings-item-options",
                                children: [(0,
                                n.jsxs)("div", {
                                    children: [(0,
                                    n.jsx)("div", {
                                        className: "settings-item-options-title",
                                        children: "Window check timeout"
                                    }), (0,
                                    n.jsx)("div", {
                                        className: "settings-item-options-description",
                                        children: "Checks for the Roblox window for X seconds"
                                    })]
                                }), (0,
                                n.jsx)("div", {
                                    className: "input-container !bg-[var(--inner-background)]",
                                    children: (0,
                                    n.jsx)("input", {
                                        autoComplete: "off",
                                        type: "number",
                                        name: "number",
                                        id: "text",
                                        value: d,
                                        onChange: e => g(e.target.value),
                                        onBlur: () => {
                                            "" == d && g("256")
                                        }
                                        ,
                                        className: "input-text !text-[var(--accent)]"
                                    })
                                })]
                            })]
                        })]
                    })
                }, {}),
                keywords: ["always on top", "update channel", "window check timeout"]
            },
            appearance: {
                element: (0,
                n.jsx)(function(e) {
                    let {searchText: t=""} = e
                      , {sidebarPosition: i, setSidebarPosition: s} = (0,
                    sh.a)();
                    (0,
                    o.useEffect)( () => {
                        !async function() {
                            try {
                                let e = await sv("user.json")
                                  , t = await e.get("sidebar_position");
                                if (void 0 == t || !sC(t))
                                    return s("left");
                                s(t),
                                e.close()
                            } catch (e) {
                                console.error("Failed to load sidebar position value", e)
                            }
                        }()
                    }
                    , []);
                    let r = async e => {
                        s(e);
                        let t = new sw("user.json");
                        try {
                            t.set("sidebar_position", e)
                        } catch (e) {
                            console.error("Failed to set sidebar position value", e)
                        }
                    }
                    ;
                    return console.log(t, "SEARCH TEXT"),
                    (0,
                    n.jsx)("div", {
                        className: "flex flex-col gap-[10px]",
                        children: (0,
                        n.jsxs)("div", {
                            className: "flex flex-col gap-[10px] w-full",
                            children: [("" == t || ["sidebar position"].some(e => e.toLowerCase().includes(t.toLowerCase()))) && (0,
                            n.jsx)("div", {
                                className: "settings-item-divider",
                                children: "Sidebar appearance"
                            }), ("" == t || ["sidebar position"].some(e => e.toLowerCase().includes(t.toLowerCase()))) && (0,
                            n.jsxs)("div", {
                                className: "settings-item-options",
                                children: [(0,
                                n.jsxs)("div", {
                                    children: [(0,
                                    n.jsx)("div", {
                                        className: "settings-item-options-title",
                                        children: "Sidebar position"
                                    }), (0,
                                    n.jsx)("div", {
                                        className: "settings-item-options-description",
                                        children: "Change the sidebar position"
                                    })]
                                }), (0,
                                n.jsx)(sk, {
                                    id: "sidebar_position",
                                    options: ["left", "right"],
                                    defaultValue: "left",
                                    value: i,
                                    onChange: e => r(e)
                                })]
                            })]
                        })
                    })
                }, {}),
                keywords: ["sidebar position"]
            },
            editor: {
                element: (0,
                n.jsx)(function(e) {
                    let {searchText: t=""} = e
                      , {editor: i, setEditorFontFamily: s, setEditorFontSize: r, toggleEditorMinimap: a} = (0,
                    sh.a)()
                      , [l,u] = (0,
                    o.useState)("seliware");
                    console.log(t, "SEARCH TEXT");
                    let c = async e => {
                        s(e);
                        let t = new sw("user.json");
                        try {
                            if ("" == e)
                                return void t.set("editor_font", "JetBrains Mono Regular");
                            t.set("editor_font", e)
                        } catch (e) {
                            console.error("Failed to set editor font", e)
                        }
                    }
                      , h = async e => {
                        r(e);
                        let t = new sw("user.json");
                        try {
                            t.set("editor_font_size", e)
                        } catch (e) {
                            console.error("Failed to set editor font size", e)
                        }
                    }
                      , d = async () => {
                        a();
                        let e = new sw("user.json");
                        try {
                            e.set("editor_minimap", !i.minimap)
                        } catch (e) {
                            console.error("Failed to set editor minimap", e)
                        }
                    }
                    ;
                    return (0,
                    n.jsx)("div", {
                        className: "flex flex-col gap-[10px]",
                        children: (0,
                        n.jsxs)("div", {
                            className: "flex flex-col gap-[10px] w-full",
                            children: [("" == t || ["font size", "font family", "color scheme"].some(e => e.toLowerCase().includes(t.toLowerCase()))) && (0,
                            n.jsx)("div", {
                                className: "settings-item-divider",
                                children: "Editor appearance"
                            }), ("" == t || ["font size"].some(e => e.toLowerCase().includes(t.toLowerCase()))) && (0,
                            n.jsxs)("div", {
                                className: "settings-item-options",
                                children: [(0,
                                n.jsxs)("div", {
                                    children: [(0,
                                    n.jsx)("div", {
                                        className: "settings-item-options-title",
                                        children: "Font size"
                                    }), (0,
                                    n.jsx)("div", {
                                        className: "settings-item-options-description",
                                        children: "Font size in pixels"
                                    })]
                                }), (0,
                                n.jsx)(sE, {
                                    id: "font_size",
                                    options: i.font.sizes,
                                    defaultValue: i.font.size,
                                    value: i.font.size,
                                    onChange: e => h(e)
                                })]
                            }), ("" == t || ["font family"].some(e => e.toLowerCase().includes(t.toLowerCase()))) && (0,
                            n.jsxs)("div", {
                                className: "settings-item-options",
                                children: [(0,
                                n.jsx)("div", {
                                    children: (0,
                                    n.jsx)("div", {
                                        className: "settings-item-options-title",
                                        children: "Font family"
                                    })
                                }), (0,
                                n.jsx)("div", {
                                    className: "input-container !bg-[var(--inner-background)]",
                                    children: (0,
                                    n.jsx)("input", {
                                        autoComplete: "off",
                                        type: "text",
                                        name: "text",
                                        id: "text",
                                        value: i.font.family,
                                        onChange: e => c(e.target.value),
                                        onBlur: () => {
                                            "" == i.font.family && c(i.font.defaultFont)
                                        }
                                        ,
                                        className: "input-text !text-[var(--accent)]"
                                    })
                                })]
                            }), ("" == t || ["color scheme"].some(e => e.toLowerCase().includes(t.toLowerCase()))) && (0,
                            n.jsx)("div", {
                                className: "settings-item-options w-full",
                                children: (0,
                                n.jsxs)("div", {
                                    className: "flex flex-col gap-[10px] w-full",
                                    children: [(0,
                                    n.jsxs)("div", {
                                        children: [(0,
                                        n.jsx)("div", {
                                            className: "settings-item-options-title",
                                            children: "Color scheme"
                                        }), (0,
                                        n.jsx)("div", {
                                            className: "settings-item-options-description",
                                            children: "Choose color scheme you want for editor"
                                        })]
                                    }), (0,
                                    n.jsx)("div", {
                                        children: Object.entries(sN).map(e => {
                                            let[t,i] = e;
                                            return (0,
                                            n.jsxs)("div", {
                                                className: si()("flex gap-[10px] items-center p-[10px] rounded-[10px]", l == t && "!bg-[rgb(var(--border))]"),
                                                children: [(0,
                                                n.jsx)("div", {
                                                    onClick: () => u(t),
                                                    className: si()("cursor-pointer settings-item-options-radiobutton flex items-center justify-center", l == t && "!bg-[rgb(var(--primary-background))]"),
                                                    children: l == t && (0,
                                                    n.jsx)("div", {
                                                        className: "w-[17px] h-[17px] rounded-full bg-[var(--accent)]"
                                                    })
                                                }), (0,
                                                n.jsxs)("div", {
                                                    children: [(0,
                                                    n.jsx)("div", {
                                                        className: "settings-item-options-title",
                                                        children: i.label
                                                    }), (0,
                                                    n.jsx)("div", {
                                                        className: "settings-item-options-description",
                                                        children: i.description
                                                    })]
                                                })]
                                            }, t)
                                        }
                                        )
                                    })]
                                })
                            }), ("" == t || ["minimap"].some(e => e.toLowerCase().includes(t.toLowerCase()))) && (0,
                            n.jsx)("div", {
                                className: "settings-item-divider mt-[10px]",
                                children: "Minimap"
                            }), ("" == t || ["minimap"].some(e => e.toLowerCase().includes(t.toLowerCase()))) && (0,
                            n.jsxs)("div", {
                                className: "settings-item-options",
                                children: [(0,
                                n.jsx)("div", {
                                    children: (0,
                                    n.jsx)("div", {
                                        className: "settings-item-options-title",
                                        children: "Enable minimap"
                                    })
                                }), (0,
                                n.jsx)(i6.N, {
                                    mode: "wait",
                                    initial: !1,
                                    children: (0,
                                    n.jsx)("div", {
                                        onClick: d,
                                        className: si()("cursor-pointer settings-item-options-toggle", i.minimap && "!bg-[#2B3B7D] cursor-pointer"),
                                        style: {
                                            justifyContent: "flex-" + (i.minimap ? "end" : "start")
                                        },
                                        children: (0,
                                        n.jsx)(se.P.div, {
                                            className: si()(i.minimap ? "bg-[var(--highlight)]" : "bg-[var(--description)]"),
                                            initial: !1,
                                            style: {
                                                width: "17px",
                                                height: "17px",
                                                borderRadius: "50%"
                                            },
                                            layout: !0,
                                            transition: {
                                                type: "spring",
                                                visualDuration: .2,
                                                bounce: .2
                                            }
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                }, {}),
                keywords: ["font size", "font family", "color scheme", "minimap"]
            },
            keybinds: {
                element: null,
                keywords: []
            }
        }
          , sN = {
            seliware: {
                label: "Seliware",
                description: "Seliware theme set by default"
            }
        };
        function sD(e) {
            let {title: t="", searchText: i} = e
              , {setShowSettings: s} = (0,
            sg.C)();
            return (0,
            n.jsxs)("div", {
                className: "settings-header",
                children: [(0,
                n.jsx)("div", {
                    children: t
                }), "" == i && (0,
                n.jsx)("div", {
                    onClick: () => s(!1),
                    className: "cursor-pointer",
                    children: (0,
                    n.jsx)("svg", {
                        width: "27",
                        height: "28",
                        viewBox: "0 0 27 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        n.jsx)("path", {
                            d: "M20.1667 20.6663L6.83325 7.33277M20.1668 7.33277L6.83325 20.6663",
                            stroke: "#748899",
                            "stroke-width": "1.8",
                            "stroke-linecap": "round"
                        })
                    })
                })]
            })
        }
        function s_(e) {
            let {searchText: t="", children: i} = e;
            return (0,
            n.jsx)("div", {
                className: si()("" == t && "overflow-auto height-[100%] h-[372px] max-h-[372px]"),
                children: (0,
                n.jsx)("div", {
                    className: si()("" == t && "mr-[10px]"),
                    children: i
                })
            })
        }
        function sV(e) {
            let {title: t="", searchText: i, children: s} = e;
            return (0,
            n.jsxs)("div", {
                className: "flex flex-col gap-[10px]",
                children: [(0,
                n.jsx)(sD, {
                    title: t,
                    searchText: i
                }), (0,
                n.jsx)(s_, {
                    searchText: i,
                    children: o.isValidElement(s) ? o.cloneElement(s, {
                        searchText: i
                    }) : s
                })]
            })
        }
        function sP() {
            let {settings: e, setShowSettings: t, setCurrentSetting: i} = (0,
            sg.C)()
              , [s,r] = (0,
            o.useState)("")
              , [a,l] = (0,
            o.useState)(!1)
              , u = (0,
            o.useRef)(null);
            return (0,
            n.jsx)(sj, {
                isOpen: e.show,
                onClose: () => t(!1),
                className: "p-[10px] modal-settings",
                children: (0,
                n.jsx)("div", {
                    className: "settings-categories",
                    ref: u,
                    children: (0,
                    n.jsxs)("div", {
                        className: "settings-content",
                        style: {
                            borderRight: "1px solid rgb(var(--gray))"
                        },
                        children: [(0,
                        n.jsxs)("div", {
                            className: "flex flex-col gap-[10px] w-[233px]",
                            children: [(0,
                            n.jsxs)("div", {
                                className: "input-search-container",
                                children: [(0,
                                n.jsx)("input", {
                                    onFocus: () => l(!0),
                                    onBlur: () => l(!1),
                                    autoComplete: "off",
                                    onChange: e => {
                                        r(e.target.value)
                                    }
                                    ,
                                    defaultValue: s,
                                    type: "email",
                                    name: "email",
                                    id: "email",
                                    className: "input-text"
                                }), !s && !a && (0,
                                n.jsxs)("div", {
                                    className: "absolute inset-y-0 left-2 flex items-center pointer-events-none text-[var(--description)] gap-[5px]",
                                    children: [(0,
                                    n.jsx)("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 18 18",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0,
                                        n.jsx)("path", {
                                            d: "M6.94737 0C10.7843 0 13.8947 3.11044 13.8947 6.94737C13.8947 8.52419 13.3694 9.97833 12.4842 11.1443L17.7225 16.3827C18.0925 16.7527 18.0925 17.3526 17.7225 17.7225C17.3862 18.0589 16.8599 18.0894 16.489 17.8143L16.3827 17.7225L11.1443 12.4842C9.97833 13.3694 8.52419 13.8947 6.94737 13.8947C3.11044 13.8947 0 10.7843 0 6.94737C0 3.11044 3.11044 0 6.94737 0ZM6.94737 1.89474C4.15688 1.89474 1.89474 4.15688 1.89474 6.94737C1.89474 9.73786 4.15688 12 6.94737 12C9.73786 12 12 9.73786 12 6.94737C12 4.15688 9.73786 1.89474 6.94737 1.89474Z",
                                            fill: "var(--description)"
                                        })
                                    }), "Search"]
                                })]
                            }), (0,
                            n.jsx)("div", {
                                className: "settings-content-categories",
                                children: sM.map( (t, r) => (0,
                                n.jsx)(o.Fragment, {
                                    children: (0,
                                    n.jsxs)("div", {
                                        onClick: () => i(t.label),
                                        className: si()("settings-category cursor-pointer", "" == s && e.current == t.label && "!cursor-default !bg-[rgb(var(--border))]"),
                                        children: [t.icon, t.label.charAt(0).toUpperCase() + t.label.slice(1)]
                                    })
                                }, r))
                            })]
                        }), (0,
                        n.jsx)(n.Fragment, {
                            children: (0,
                            n.jsxs)("div", {
                                className: "settings-content-item",
                                children: ["" !== s && (0,
                                n.jsx)(n.Fragment, {
                                    children: (0,
                                    n.jsxs)("div", {
                                        className: "settings-header",
                                        children: [(0,
                                        n.jsx)("div", {
                                            children: "Search results"
                                        }), (0,
                                        n.jsx)("div", {
                                            onClick: () => t(!1),
                                            className: "cursor-pointer",
                                            children: (0,
                                            n.jsx)("svg", {
                                                width: "27",
                                                height: "28",
                                                viewBox: "0 0 27 28",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: (0,
                                                n.jsx)("path", {
                                                    d: "M20.1667 20.6663L6.83325 7.33277M20.1668 7.33277L6.83325 20.6663",
                                                    stroke: "#748899",
                                                    "stroke-width": "1.8",
                                                    "stroke-linecap": "round"
                                                })
                                            })
                                        })]
                                    })
                                }), (0,
                                n.jsx)("div", {
                                    className: si()("" !== s && "overflow-auto flex flex-col gap-[10px] h-[372px] max-h-[372px]"),
                                    children: (0,
                                    n.jsxs)("div", {
                                        className: si()("" !== s && "mr-[10px]"),
                                        children: ["" !== s && Object.entries(sA).every(e => {
                                            let[,t] = e;
                                            return !Array.isArray(t.keywords) || !t.keywords.some(e => e.toLowerCase().includes(s.toLowerCase()))
                                        }
                                        ) && (0,
                                        n.jsxs)("div", {
                                            className: "flex items-center justify-center h-[20vh] flex-col gap-[5px]",
                                            children: [(0,
                                            n.jsx)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "40",
                                                height: "40",
                                                fill: "var(--accent)",
                                                viewBox: "0 0 16 16",
                                                children: (0,
                                                n.jsx)("path", {
                                                    d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                                                })
                                            }), (0,
                                            n.jsx)("span", {
                                                className: "text-[var(--accent)] text-2xl",
                                                children: "No results"
                                            })]
                                        }), Object.entries(sA).map(t => {
                                            let[i,r] = t
                                              , a = !o.isValidElement(r.element)
                                              , l = "" !== s && Array.isArray(r.keywords) && r.keywords.some(e => e.toLowerCase().includes(s.toLowerCase())) || "" == s && i === e.current;
                                            return (0,
                                            n.jsx)("div", {
                                                style: {
                                                    display: l ? "block " : "none"
                                                },
                                                children: (0,
                                                n.jsx)(o.Fragment, {
                                                    children: a ? (0,
                                                    n.jsx)(sV, {
                                                        title: i.charAt(0).toUpperCase() + i.slice(1),
                                                        searchText: s,
                                                        children: (0,
                                                        n.jsxs)("div", {
                                                            className: "flex items-center justify-center h-[30vh] flex-col gap-[10px] p-[10px] w-[596px] text-center",
                                                            children: [(0,
                                                            n.jsxs)("div", {
                                                                className: "flex",
                                                                children: [" ", (0,
                                                                n.jsx)("svg", {
                                                                    width: "60",
                                                                    height: "60",
                                                                    viewBox: "0 0 60 60",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: (0,
                                                                    n.jsx)("path", {
                                                                        d: "M3.75 0L0 3.75L8.25332 15.3046C8.95723 16.2901 10.0938 16.875 11.3048 16.875H11.5717C12.5663 16.875 13.5201 17.2701 14.2233 17.9734L24.2546 28.0046L14.4412 37.959C13.4295 37.6603 12.3585 37.5 11.25 37.5C5.0368 37.5 0 42.5368 0 48.75C0 54.9632 5.0368 60 11.25 60C17.4632 60 22.5 54.9632 22.5 48.75C22.5 47.6415 22.3397 46.5705 22.041 45.5588L31.9954 35.7454L35.625 39.375L34.4829 42.8013C34.0337 44.1488 34.3844 45.6344 35.3888 46.6388L47.6517 58.9017C48.3839 59.6339 49.3436 60 50.3033 60C51.263 60 52.2227 59.6339 52.9549 58.9016L58.9016 52.955C59.6339 52.2227 60 51.263 60 50.3033C60 49.3436 59.6339 48.3839 58.9017 47.6517L46.6388 35.3888C45.6344 34.3844 44.1488 34.0337 42.8013 34.4829L39.375 35.625L35.7722 32.0222L45.8217 22.1151C46.7554 22.3661 47.7371 22.5 48.75 22.5C54.9632 22.5 60 17.4632 60 11.25C60 10.2422 59.8675 9.26541 59.6189 8.33601L51.5901 16.3649L45 14.9999L43.6351 8.4099L51.664 0.381056C50.7346 0.132509 49.7578 0 48.75 0C42.5368 0 37.5 5.0368 37.5 11.25C37.5 12.263 37.6339 13.2447 37.8849 14.1784L27.9778 24.2278L17.9734 14.2233C17.2701 13.5201 16.875 12.5663 16.875 11.5717V11.3048C16.875 10.0938 16.2901 8.95723 15.3046 8.25332L3.75 0ZM39.9242 39.9242C40.6564 39.1919 41.8436 39.1919 42.5758 39.9242L53.5041 50.8525C54.2364 51.5847 54.2364 52.7719 53.5041 53.5041C52.7719 54.2364 51.5847 54.2364 50.8525 53.5041L39.9242 42.5758C39.1919 41.8436 39.1919 40.6564 39.9242 39.9242ZM11.25 41.2499L13.0164 42.1575L15 42.2547L16.076 43.9239L17.7452 44.9999L17.8424 46.9835L18.75 48.7499L17.8424 50.5164L17.7452 52.4999L16.076 53.5759L15 55.2451L13.0164 55.3424L11.25 56.2499L9.48356 55.3424L7.5 55.2451L6.424 53.5759L4.75481 52.4999L4.65756 50.5164L3.75 48.7499L4.65756 46.9835L4.75481 44.9999L6.424 43.9239L7.5 42.2547L9.48356 42.1575L11.25 41.2499Z",
                                                                        fill: "#C9C9BA"
                                                                    })
                                                                })]
                                                            }), (0,
                                                            n.jsxs)("div", {
                                                                className: "flex flex-col gap-[5px]",
                                                                children: [(0,
                                                                n.jsx)("span", {
                                                                    className: "text-(--highlight) font-semibold",
                                                                    children: "Work in progress"
                                                                }), (0,
                                                                n.jsx)("div", {
                                                                    className: "text-(--description) w-[430px]",
                                                                    children: "We are still building this section. It will be fully functional in future updates."
                                                                })]
                                                            })]
                                                        })
                                                    }) : r.element && (0,
                                                    n.jsx)(sV, {
                                                        title: i.charAt(0).toUpperCase() + i.slice(1),
                                                        searchText: s,
                                                        children: r.element
                                                    })
                                                }, i)
                                            }, "".concat(i))
                                        }
                                        )]
                                    })
                                })]
                            })
                        })]
                    })
                })
            })
        }
        let sO = {
            all: {
                label: "All",
                icon: null
            },
            update: {
                label: "Update",
                icon: (0,
                n.jsxs)("svg", {
                    width: "21",
                    height: "16",
                    viewBox: "0 0 21 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0,
                    n.jsx)("path", {
                        d: "M14.7663 6.5625H19.9276C20.2058 6.5625 20.3578 6.88697 20.1797 7.10069L17.599 10.1975C17.4678 10.3549 17.2261 10.3549 17.0949 10.1975L14.5142 7.10069C14.3361 6.88697 14.4881 6.5625 14.7663 6.5625Z",
                        fill: "#748899"
                    }), (0,
                    n.jsx)("path", {
                        d: "M0.328752 9.1875H5.49013C5.76833 9.1875 5.9203 8.86303 5.7422 8.64931L3.16151 5.55249C3.03033 5.39507 2.78855 5.39507 2.65737 5.55249L0.0766793 8.64931C-0.101418 8.86303 0.0505558 9.1875 0.328752 9.1875Z",
                        fill: "#748899"
                    }), (0,
                    n.jsx)("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M10.1282 1.3125C8.09055 1.3125 6.27018 2.24039 5.06547 3.69914C4.83468 3.97859 4.42104 4.01804 4.14158 3.78725C3.86213 3.55646 3.82268 3.14282 4.05347 2.86336C5.49683 1.11566 7.6825 0 10.1282 0C13.9892 0 17.2 2.77791 17.8734 6.44394C17.8806 6.48336 17.8876 6.52288 17.8942 6.5625H16.5595C15.9518 3.56709 13.3026 1.3125 10.1282 1.3125ZM3.69684 9.1875C4.30454 12.1829 6.95374 14.4375 10.1282 14.4375C12.1658 14.4375 13.9862 13.5096 15.1909 12.0509C15.4217 11.7714 15.8353 11.732 16.1148 11.9628C16.3943 12.1935 16.4337 12.6072 16.2029 12.8866C14.7596 14.6343 12.5739 15.75 10.1282 15.75C6.26721 15.75 3.05641 12.9721 2.38302 9.30606C2.37578 9.26664 2.36883 9.22712 2.36218 9.1875H3.69684Z",
                        fill: "#748899"
                    })]
                })
            },
            injector: {
                label: "Injector",
                icon: (0,
                n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "21",
                    height: "18",
                    fill: "currentColor",
                    className: "bi bi-capsule",
                    viewBox: "0 0 16 16",
                    children: (0,
                    n.jsx)("path", {
                        d: "M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z"
                    })
                })
            },
            info: {
                label: "Info",
                icon: (0,
                n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "21",
                    height: "18",
                    fill: "currentColor",
                    className: "bi bi-info-circle-fill",
                    viewBox: "0 0 16 16",
                    children: (0,
                    n.jsx)("path", {
                        d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
                    })
                })
            },
            error: {
                label: "Error",
                icon: (0,
                n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "21",
                    height: "18",
                    fill: "currentColor",
                    className: "bi bi-exclamation-triangle-fill",
                    viewBox: "0 0 16 16",
                    children: (0,
                    n.jsx)("path", {
                        d: "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
                    })
                })
            },
            network_error: {
                label: "Network",
                icon: (0,
                n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "21",
                    height: "18",
                    fill: "currentColor",
                    className: "bi bi-cloud-slash-fill",
                    viewBox: "0 0 16 16",
                    children: (0,
                    n.jsx)("path", {
                        "fill-rule": "evenodd",
                        d: "M3.112 5.112a3 3 0 0 0-.17.613C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13H11zm11.372 7.372L4.937 2.937A5.5 5.5 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773a3.2 3.2 0 0 1-1.516 2.711m-.838 1.87-12-12 .708-.708 12 12z"
                    })
                })
            }
        };
        function sI(e) {
            let {value: t, anchor: i, items: s, onRequestClose: r, onChange: a} = e
              , l = (0,
            o.useMemo)( () => i ? {
                position: "absolute",
                marginTop: "5px",
                zIndex: 50
            } : {
                display: "none"
            }, [i]);
            (0,
            o.useEffect)( () => {
                function e(e) {
                    "Escape" === e.key && r()
                }
                function t() {
                    r()
                }
                return window.addEventListener("keydown", e),
                window.addEventListener("mousedown", t),
                () => {
                    window.removeEventListener("keydown", e),
                    window.removeEventListener("mousedown", t)
                }
            }
            , [r]);
            let u = e => {
                a(e),
                r()
            }
            ;
            return (0,
            n.jsx)("div", {
                style: l,
                children: (0,
                n.jsx)(se.P.div, {
                    initial: {
                        opacity: 0,
                        scale: .98,
                        y: -2
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: .98,
                        y: -2
                    },
                    transition: {
                        duration: .08
                    },
                    className: si()("input-select-dropdown"),
                    style: {
                        width: null == i ? void 0 : i.width
                    },
                    role: "menu",
                    onMouseDown: e => e.stopPropagation(),
                    children: s.map( (e, i) => (0,
                    n.jsxs)("div", {
                        className: "flex items-center gap-[5px] justify-between text-[var(--description)] py-[5px] px-[10px] hover:bg-[rgb(var(--card))]",
                        onClick: () => u(e),
                        children: [(0,
                        n.jsxs)("div", {
                            className: "flex items-center gap-[5px]",
                            children: [sO[e].icon, sO[e].label]
                        }), " ", e == t && (0,
                        n.jsx)("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 19 19",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            n.jsx)("path", {
                                d: "M19 9.5C19 14.7467 14.7467 19 9.5 19C4.25329 19 0 14.7467 0 9.5C0 4.25329 4.25329 0 9.5 0C14.7467 0 19 4.25329 19 9.5ZM14.286 5.90148C13.9382 5.55367 13.3743 5.55367 13.0265 5.90148C13.0181 5.90988 13.0102 5.91878 13.0029 5.92812L8.87941 11.1824L6.39335 8.69633C6.04554 8.34852 5.48163 8.34852 5.13382 8.69633C4.78601 9.04414 4.78601 9.60805 5.13382 9.95586L8.27648 13.0985C8.62429 13.4463 9.1882 13.4463 9.53601 13.0985C9.54375 13.0908 9.55107 13.0826 9.55791 13.0741L14.2986 7.14812C14.6338 6.79941 14.6296 6.24503 14.286 5.90148Z",
                                fill: "#ADCBE4"
                            })
                        })]
                    }, i))
                })
            })
        }
        function sF(e) {
            var t, i;
            let {value: s, defaultValue: r, id: a, options: l=[], onChange: u} = e
              , {openId: c, setOpenId: h} = (0,
            sa.w)()
              , [d,m] = (0,
            o.useState)(null);
            return (0,
            o.useEffect)( () => {
                function e() {
                    h(null)
                }
                return window.addEventListener("blur", e),
                () => window.removeEventListener("blur", e)
            }
            , []),
            (0,
            n.jsxs)("div", {
                style: {
                    position: "relative"
                },
                className: "no-drag",
                children: [(0,
                n.jsxs)("div", {
                    className: "input-select w-[146px]",
                    style: {
                        position: "relative"
                    },
                    onClick: e => {
                        var t;
                        (t = e.currentTarget) && m(t.getBoundingClientRect()),
                        h(e => e === a ? null : a)
                    }
                    ,
                    onMouseDown: e => {
                        e.stopPropagation()
                    }
                    ,
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex items-center gap-[5px]",
                        children: [null != (t = sO[s].icon) ? t : sO[r].icon, " ", null != (i = sO[s].label) ? i : sO[r].label]
                    }), (0,
                    n.jsx)(se.P.svg, {
                        initial: !1,
                        style: {
                            originY: "50%",
                            originX: "50%"
                        },
                        animate: {
                            rotate: 180 * (c === a)
                        },
                        transition: {
                            duration: .25,
                            ease: "easeInOut"
                        },
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        n.jsx)("path", {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M1.64645 4.64645C1.84171 4.45118 2.15829 4.45118 2.35355 4.64645L8 10.2929L13.6464 4.64645C13.8417 4.45118 14.1583 4.45118 14.3536 4.64645C14.5488 4.84171 14.5488 5.15829 14.3536 5.35355L8.35355 11.3536C8.15829 11.5488 7.84171 11.5488 7.64645 11.3536L1.64645 5.35355C1.45118 5.15829 1.45118 4.84171 1.64645 4.64645Z",
                            fill: "#748899"
                        })
                    })]
                }), (0,
                n.jsx)(i6.N, {
                    children: c === a && (0,
                    n.jsx)(sI, {
                        onChange: e => {
                            null == u || u(e),
                            h(null)
                        }
                        ,
                        value: null != s ? s : r,
                        anchor: d,
                        items: l,
                        onRequestClose: () => h(null)
                    }, c)
                })]
            })
        }
        let sR = {
            update: "bg-[rgb(var(--primary-background))] border-[var(--primary-border)]",
            info: "bg-[rgb(var(--card))] border-[rgb(var(--border))]",
            injector: "bg-[rgb(var(--card))] border-[rgb(var(--border))]",
            error: "bg-[var(--red-background)] border-[var(--red-border)]",
            network_error: "bg-[rgb(var(--card))] border-[rgb(var(--border))]"
        }
          , sB = {
            update: (0,
            n.jsxs)("svg", {
                width: "44",
                height: "44",
                viewBox: "0 0 44 44",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                n.jsx)("path", {
                    d: "M31.7179 19.25H42.5322C43.1151 19.25 43.4335 19.9298 43.0603 20.3776L37.6532 26.8662C37.3783 27.196 36.8717 27.196 36.5969 26.8662L31.1897 20.3776C30.8166 19.9298 31.135 19.25 31.7179 19.25Z",
                    fill: "#ADCBE4"
                }), (0,
                n.jsx)("path", {
                    d: "M1.46787 24.75H12.2822C12.8651 24.75 13.1835 24.0702 12.8103 23.6224L7.40318 17.1338C7.12832 16.804 6.62173 16.804 6.34687 17.1338L0.939714 23.6224C0.566558 24.0702 0.884979 24.75 1.46787 24.75Z",
                    fill: "#ADCBE4"
                }), (0,
                n.jsx)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M22 8.25C17.7307 8.25 13.9166 10.1942 11.3924 13.2506C10.9088 13.8361 10.0422 13.9188 9.45665 13.4352C8.87113 12.9516 8.78847 12.085 9.27203 11.4994C12.2962 7.83757 16.8757 5.5 22 5.5C30.0897 5.5 36.8171 11.3204 38.228 19.0016C38.2432 19.0842 38.2577 19.167 38.2717 19.25H35.4753C34.202 12.9739 28.6513 8.25 22 8.25ZM8.5248 24.75C9.79809 31.0261 15.3488 35.75 22 35.75C26.2694 35.75 30.0835 33.8058 32.6076 30.7494C33.0912 30.1639 33.9579 30.0812 34.5434 30.5648C35.1289 31.0484 35.2116 31.915 34.728 32.5006C31.7038 36.1624 27.1243 38.5 22 38.5C13.9103 38.5 7.18297 32.6796 5.77205 24.9984C5.75687 24.9158 5.74232 24.833 5.72838 24.75H8.5248Z",
                    fill: "#ADCBE4"
                })]
            }),
            info: (0,
            n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "44",
                height: "38",
                fill: "#ADCBE4",
                viewBox: "0 0 16 16",
                children: (0,
                n.jsx)("path", {
                    d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
                })
            }),
            injector: (0,
            n.jsx)("svg", {
                width: "44",
                height: "43",
                viewBox: "0 0 44 43",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                n.jsx)("path", {
                    d: "M5.02798 23.9177L24.4734 4.91423C28.7692 0.716091 35.734 0.716091 40.0298 4.91423C44.3255 9.11236 44.3255 15.9189 40.0298 20.117L20.5843 39.1205C16.2886 43.3187 9.32374 43.3187 5.02798 39.1205C0.732211 34.9224 0.73221 28.1159 5.02798 23.9177ZM30.1294 25.9917L38.0852 18.2167C41.307 15.0681 41.307 9.96318 38.0852 6.81458C34.8634 3.66597 29.6398 3.66597 26.418 6.81458L18.4622 14.5896L30.1294 25.9917Z",
                    fill: "#ADCBE4"
                })
            }),
            error: (0,
            n.jsx)("svg", {
                width: "44",
                height: "38",
                viewBox: "0 0 44 38",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                n.jsx)("path", {
                    d: "M24.6944 1.53743C23.474 -0.512477 20.526 -0.512477 19.3056 1.53743L0.452634 33.2041C-0.803964 35.3148 0.70463 38 3.14702 38H40.853C43.2954 38 44.804 35.3148 43.5474 33.2041L24.6944 1.53743ZM21.9958 10.8571C23.4678 10.8571 24.6181 12.1119 24.4716 13.558L23.5073 23.0782C23.4296 23.8448 22.7762 24.4286 21.9958 24.4286C21.2153 24.4286 20.5619 23.8448 20.4842 23.0782L19.5199 13.558C19.3734 12.1119 20.5237 10.8571 21.9958 10.8571ZM22 27.1429C23.5185 27.1429 24.7495 28.3581 24.7495 29.8571C24.7495 31.3562 23.5185 32.5714 22 32.5714C20.4815 32.5714 19.2505 31.3562 19.2505 29.8571C19.2505 28.3581 20.4815 27.1429 22 27.1429Z",
                    fill: "#ADCBE4"
                })
            }),
            network_error: (0,
            n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "44",
                height: "38",
                fill: "var(--accent)",
                className: "bi bi-cloud-slash-fill",
                viewBox: "0 0 16 16",
                children: (0,
                n.jsx)("path", {
                    "fill-rule": "evenodd",
                    d: "M3.112 5.112a3 3 0 0 0-.17.613C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13H11zm11.372 7.372L4.937 2.937A5.5 5.5 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773a3.2 3.2 0 0 1-1.516 2.711m-.838 1.87-12-12 .708-.708 12 12z"
                })
            })
        }
          , sZ = e => {
            var t;
            let {show: i, item: s, index: r, itemOpened: a, setItemOpened: l} = e
              , [u,c] = (0,
            o.useState)(!1)
              , h = (0,
            o.useRef)(null)
              , d = a === r
              , m = void 0 !== s.message.context && s.message.context !== s.message.body;
            return (0,
            o.useLayoutEffect)( () => {
                if (h.current) {
                    let {scrollWidth: e, clientWidth: t} = h.current;
                    c(e > t)
                }
            }
            , [s.message.body]),
            (0,
            n.jsxs)(se.P.div, {
                initial: !1,
                onClick: () => l(d ? null : r),
                style: {
                    display: i ? "flex" : "none"
                },
                className: si()("journal-status", sR[s.type], m && "cursor-pointer"),
                id: "journal_status_" + r,
                animate: {
                    height: (m || u) && d ? "auto" : "0px"
                },
                children: [(0,
                n.jsxs)("div", {
                    className: "journal-status-header",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex items-center gap-[10px]",
                        children: [(0,
                        n.jsx)("div", {
                            className: "flex",
                            children: sB[s.type]
                        }), (0,
                        n.jsxs)("div", {
                            children: [(0,
                            n.jsxs)("div", {
                                className: "journal-status-title",
                                children: [s.message.title, " ", (0,
                                n.jsx)("span", {
                                    className: "journal-status-timestamp",
                                    children: i5.fromSeconds(s.timestamp).setZone(i5.local().zoneName).setLocale("en").toFormat("dd LLL yyyy, HH:mm")
                                })]
                            }), (0,
                            n.jsx)("div", {
                                ref: h,
                                className: "journal-status-description max-w-[590px] truncate",
                                title: u ? s.message.body : "",
                                children: null != (t = s.message.body) ? t : "No description here"
                            })]
                        })]
                    }), (m || u) && (0,
                    n.jsx)("div", {
                        className: "flex cursor-pointer",
                        children: (0,
                        n.jsx)(se.P.svg, {
                            initial: !1,
                            style: {
                                originY: "50%",
                                originX: "50%"
                            },
                            animate: {
                                rotate: 180 * !!d
                            },
                            transition: {
                                duration: .25,
                                ease: "easeInOut"
                            },
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            n.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M7.64645 4.64645C7.84171 4.45118 8.15829 4.45118 8.35355 4.64645L14.3536 10.6464C14.5488 10.8417 14.5488 11.1583 14.3536 11.3536C14.1583 11.5488 13.8417 11.5488 13.6464 11.3536L8 5.70711L2.35355 11.3536C2.15829 11.5488 1.84171 11.5488 1.64645 11.3536C1.45118 11.1583 1.45118 10.8417 1.64645 10.6464L7.64645 4.64645Z",
                                fill: "#ADCBE4"
                            })
                        })
                    })]
                }), d && (0,
                n.jsxs)("div", {
                    className: "journal-status-context",
                    children: [u && (0,
                    n.jsx)("div", {
                        style: {
                            whiteSpace: "pre-wrap"
                        },
                        children: s.message.body
                    }), m && (0,
                    n.jsx)("div", {
                        style: {
                            whiteSpace: "pre-wrap"
                        },
                        children: s.message.context
                    })]
                })]
            })
        }
        ;
        function sW() {
            let e = (0,
            o.useRef)(null)
              , {journal: t, setShowJournal: i} = (0,
            sh.a)()
              , [s,r] = (0,
            o.useState)("all")
              , [a,l] = (0,
            o.useState)(null)
              , [u,c] = (0,
            o.useState)(!1);
            return (0,
            o.useEffect)( () => {
                if (!t.show)
                    return;
                let i = setTimeout( () => {
                    let t = e.current;
                    t && c(t.scrollHeight > t.clientHeight)
                }
                , 0);
                return () => clearTimeout(i)
            }
            , [t.show, t.items]),
            (0,
            n.jsxs)(sj, {
                isOpen: t.show,
                onClose: () => i(!1),
                className: "flex flex-col p-[10px] gap-[10px] modal-journal",
                children: [(0,
                n.jsxs)("div", {
                    className: "journal-header",
                    children: [(0,
                    n.jsx)("div", {
                        children: "Logs"
                    }), (0,
                    n.jsx)("div", {
                        onClick: () => i(!1),
                        className: "cursor-pointer",
                        children: (0,
                        n.jsx)("svg", {
                            width: "27",
                            height: "28",
                            viewBox: "0 0 27 28",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            n.jsx)("path", {
                                d: "M20.1667 20.6663L6.83325 7.33277M20.1668 7.33277L6.83325 20.6663",
                                stroke: "#748899",
                                "stroke-width": "1.8",
                                "stroke-linecap": "round"
                            })
                        })
                    })]
                }), (0,
                n.jsx)(sF, {
                    id: "journal_type",
                    defaultValue: s,
                    value: s,
                    options: ["all", "update", "info", "injector", "error", "network_error"],
                    onChange: e => r(e)
                }), 0 == t.items.filter(e => "all" === s || e.type === s).length && (0,
                n.jsxs)("div", {
                    className: "flex items-center justify-center gap-[10px] rounded-[10px] h-full bg-[rgb(var(--card))] border-[1px] border-[rgb(var(--border))] shadow-[inset_0_0_1px_rgb(var(--border))]",
                    children: [(0,
                    n.jsx)("svg", {
                        width: "60",
                        height: "60",
                        viewBox: "0 0 60 60",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        n.jsx)("path", {
                            d: "M60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0C46.5685 0 60 13.4315 60 30ZM30 13.125C30 12.0895 29.1605 11.25 28.125 11.25C27.0895 11.25 26.25 12.0895 26.25 13.125V33.75C26.25 34.4229 26.6105 35.0441 27.1947 35.378L40.3197 42.878C41.2188 43.3917 42.3642 43.0794 42.878 42.1803C43.3917 41.2812 43.0794 40.1358 42.1803 39.622L30 32.6619V13.125Z",
                            fill: "#C9C9BA"
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0,
                        n.jsx)("span", {
                            className: "text-[var(--highlight)] font-semibold",
                            children: "All Quiet"
                        }), (0,
                        n.jsx)("span", {
                            className: "text-[var(--description)] max-w-[283px]",
                            children: "Nothing to report just yet. As you use the app, important events and messages will appear here."
                        })]
                    })]
                }), 0 !== t.items.filter(e => "all" === s || e.type === s).length && (0,
                n.jsx)("div", {
                    className: "journal-statuses",
                    ref: e,
                    children: (0,
                    n.jsx)("div", {
                        className: si()("journal-statuses-items", u && "mr-[10px]"),
                        children: (0,
                        n.jsx)(i6.N, {
                            mode: "wait",
                            initial: !1,
                            children: t.items.sort( (e, t) => t.timestamp - e.timestamp).map( (e, t) => (0,
                            n.jsx)(sZ, {
                                show: "all" === s || e.type === s,
                                item: e,
                                index: t,
                                itemOpened: a,
                                setItemOpened: l
                            }, t))
                        })
                    })
                })]
            })
        }
        let sz = () => (0,
        n.jsx)("svg", {
            width: "10",
            height: "12",
            viewBox: "0 0 10 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0,
            n.jsx)("path", {
                d: "M5.00002 0.750001C4.81096 0.750001 4.62973 0.824243 4.4949 0.959076L0.182403 5.27158C-0.0988012 5.55278 -0.0988012 6.00722 0.182403 6.28843C0.463607 6.56963 0.91804 6.56963 1.19924 6.28843L4.28424 3.20343V11.5312C4.28424 11.9284 4.60612 12.25 5.00002 12.25C5.39392 12.25 5.7158 11.9284 5.7158 11.5312V3.20343L8.8008 6.28843C8.98043 6.47766 9.24803 6.55523 9.50085 6.4901C9.75367 6.42498 9.9515 6.22715 10.0166 5.97433C10.0818 5.7215 10.0042 5.45268 9.81498 5.27305L5.50515 0.959076C5.37031 0.824243 5.18908 0.750001 5.00002 0.750001Z",
                fill: "#1A1B1F"
            })
        });
        function sU(e) {
            let {onClick: t, subscription_end: i} = e
              , [,s] = (0,
            o.useState)(0);
            (0,
            o.useEffect)( () => {
                let e = setInterval( () => {
                    s(e => e + 1)
                }
                , 1e3);
                return () => clearInterval(e)
            }
            , []);
            let r = {
                type: "spring",
                damping: 15,
                stiffness: 200
            };
            return (0,
            n.jsxs)(se.P.div, {
                style: sH.container,
                initial: "initial",
                whileHover: "hover",
                variants: {
                    initial: {},
                    hover: {}
                },
                onClick: t,
                className: "relative cursor-pointer",
                children: [(0,
                n.jsx)(se.P.div, {
                    style: sH.mountainImage,
                    variants: {
                        initial: {
                            y: 0
                        },
                        hover: {
                            y: -9
                        }
                    },
                    transition: r
                }), (0,
                n.jsxs)("div", {
                    style: sH.textContent,
                    children: [(0,
                    n.jsxs)("p", {
                        style: sH.daysLeftText,
                        children: ["You have ", function(e) {
                            let t = i5.now()
                              , i = i5.fromISO(e);
                            if (i <= t)
                                return "0 hours left";
                            let s = i.diff(t, ["years", "days", "hours", "minutes"]).toObject()
                              , n = Math.floor(s.years || 0)
                              , r = Math.floor(s.days || 0)
                              , a = Math.floor(s.hours || 0)
                              , o = Math.floor(s.minutes || 0);
                            return n > 0 ? 1 === n ? "1 year left" : "".concat(n, " years left") : r > 0 ? 1 === r ? "1 day left" : "".concat(r, " days left") : a > 0 ? 1 === a ? "1 hour left" : "".concat(a, " hours left") : 1 === o ? "1 minute left" : "".concat(a, " minutes left")
                        }(i) || "0", "."]
                    }), (0,
                    n.jsx)("p", {
                        style: sH.renewText,
                        children: "renew your plan now"
                    })]
                }), (0,
                n.jsx)(se.P.div, {
                    style: sH.arrowCircle,
                    variants: {
                        initial: {
                            y: 0
                        },
                        hover: {
                            y: -47
                        }
                    },
                    transition: r,
                    children: (0,
                    n.jsx)(sz, {})
                })]
            })
        }
        let sH = {
            container: {
                position: "relative",
                width: "482px",
                height: "155px",
                backgroundColor: "rgb(26, 27, 31)",
                border: "2px solid rgb(32, 35, 44)",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                fontFamily: '"Roboto", sans-serif',
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            },
            textContent: {
                textAlign: "center",
                position: "absolute",
                top: 5,
                zIndex: 10
            },
            daysLeftText: {
                margin: 0,
                fontSize: "20px",
                fontWeight: 600,
                color: "rgb(201, 201, 186)"
            },
            renewText: {
                margin: "1px 0 0 0",
                color: "rgb(173, 203, 228)"
            },
            mountainImage: {
                position: "absolute",
                bottom: "-220px",
                left: "0px",
                right: "0px",
                height: "302px",
                backgroundImage: "url(UI_Screen-1.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 1
            },
            arrowCircle: {
                position: "absolute",
                bottom: "10px",
                width: "23px",
                height: "23px",
                backgroundColor: "rgb(173, 203, 228)",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 10
            }
        };
        function s$() {
            let[,e] = (0,
            o.useState)(0);
            (0,
            o.useEffect)( () => {
                let t = setInterval( () => {
                    e(e => e + 1)
                }
                , 1e3);
                return () => clearInterval(t)
            }
            , []);
            let {profile: t, setShowProfile: i} = (0,
            sg.C)()
              , [s,a] = (0,
            o.useState)(!1)
              , {userData: l, logout: u} = (0,
            r.k)()
              , [c,h] = (0,
            o.useState)(!1)
              , [d,m] = (0,
            o.useState)(!1)
              , [p,f] = (0,
            o.useState)(!1)
              , {updateSubscriptionDate: g} = (0,
            r.k)()
              , [y,v] = (0,
            o.useState)(null)
              , w = (0,
            o.useRef)(null)
              , [x,C] = (0,
            o.useState)("")
              , b = async () => {
                v(null),
                f(!0);
                try {
                    let {status: e, data: t} = await i7.F.post("/users/update-subscription", {
                        key: x
                    });
                    if (200 == e) {
                        g(t.subscription_end),
                        C(""),
                        w.current && (w.current.value = "");
                        return
                    }
                    v(null == t ? void 0 : t.message)
                } catch (e) {
                    v(e instanceof Error ? e.message : "string" == typeof e ? e : "object" == typeof e && e && "message"in e ? String(e.message) : JSON.stringify(e))
                } finally {
                    f(!1)
                }
            }
            ;
            return (0,
            n.jsxs)(sj, {
                isOpen: t.show,
                onClose: () => i(!1),
                afterClose: () => {
                    m(!1),
                    v(null),
                    f(!1),
                    C(""),
                    c && (u(),
                    document.location.reload())
                }
                ,
                className: "flex flex-col p-[10px] gap-[10px] modal-profile",
                children: [(0,
                n.jsxs)("div", {
                    className: "profile-header",
                    children: [(0,
                    n.jsx)("div", {
                        children: "Profile"
                    }), (0,
                    n.jsx)("div", {
                        onClick: () => i(!1),
                        className: "cursor-pointer",
                        children: (0,
                        n.jsx)("svg", {
                            width: "27",
                            height: "28",
                            viewBox: "0 0 27 28",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            n.jsx)("path", {
                                d: "M20.1667 20.6663L6.83325 7.33277M20.1668 7.33277L6.83325 20.6663",
                                stroke: "#748899",
                                "stroke-width": "1.8",
                                "stroke-linecap": "round"
                            })
                        })
                    })]
                }), d && (0,
                n.jsx)(se.P.div, {
                    initial: {
                        opacity: 0,
                        x: -10
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0,
                        x: 10
                    },
                    className: "flex flex-col gap-[10px] bg-[rgb(var(--card))] p-[20px] rounded-[20px]",
                    children: (0,
                    n.jsxs)("form", {
                        className: "flex flex-col gap-[5px]",
                        noValidate: !0,
                        onSubmit: e => {
                            e.preventDefault(),
                            p || b()
                        }
                        ,
                        children: [(0,
                        n.jsxs)("span", {
                            className: "text-(--accent)",
                            children: ["Key activation ", y && (0,
                            n.jsx)("span", {
                                className: "text-red-400",
                                children: y
                            })]
                        }), (0,
                        n.jsxs)("div", {
                            className: "input-container",
                            children: [(0,
                            n.jsx)("input", {
                                autoComplete: "off",
                                onChange: e => {
                                    C(e.target.value)
                                }
                                ,
                                defaultValue: x,
                                style: {
                                    padding: "0px 15px 0px 37px"
                                },
                                type: "text",
                                name: "key",
                                id: "key",
                                className: "input-text",
                                ref: w
                            }), (0,
                            n.jsxs)("div", {
                                className: "absolute inset-y-0 left-2 flex items-center pointer-events-none text-[var(--description)] gap-[5px]",
                                children: [(0,
                                n.jsx)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0,
                                    n.jsx)("path", {
                                        d: "M5.25 17.25C2.35051 17.25 0 14.8995 0 12C0 9.10051 2.35051 6.75 5.25 6.75C7.3443 6.75 9.15218 7.97629 9.99478 9.75H21L23.25 12L21 14.25L19.5 12.75L18 14.25L16.5 12.75L15 14.25L13.5 12.75L12 14.25H9.99478C9.15218 16.0237 7.3443 17.25 5.25 17.25ZM3.75 13.5C4.57843 13.5 5.25 12.8284 5.25 12C5.25 11.1716 4.57843 10.5 3.75 10.5C2.92157 10.5 2.25 11.1716 2.25 12C2.25 12.8284 2.92157 13.5 3.75 13.5Z",
                                        fill: "#748899"
                                    })
                                }), !x && (0,
                                n.jsx)(n.Fragment, {
                                    children: "XXXX-XXXX-XXXX-XXXX"
                                })]
                            })]
                        }), (0,
                        n.jsxs)("span", {
                            className: "text-(--description)",
                            children: ["Find official key resellers in our ", (0,
                            n.jsx)("span", {
                                className: "text-(--highlight) border-b-1 cursor-pointer",
                                onClick: () => i8("https://seliware.com/discord"),
                                children: "Discord"
                            })]
                        }), (0,
                        n.jsxs)("span", {
                            className: "flex items-center gap-[5px] text-(--highlight)",
                            children: [(0,
                            n.jsx)("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0,
                                n.jsx)("path", {
                                    d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8 3.5C8 3.22386 7.77614 3 7.5 3C7.22386 3 7 3.22386 7 3.5V9C7 9.17943 7.09614 9.3451 7.25193 9.43412L10.7519 11.4341C10.9917 11.5711 11.2971 11.4878 11.4341 11.2481C11.5711 11.0083 11.4878 10.7029 11.2481 10.5659L8 8.70984V3.5Z",
                                    fill: "#C9C9BA"
                                })
                            }), "Time left: ", function(e) {
                                let t = i5.now()
                                  , i = i5.fromISO(e);
                                if (i <= t)
                                    return "0 minutes left";
                                let s = i.diff(t, ["years", "days", "hours", "minutes"]).toObject()
                                  , n = Math.floor(s.years || 0)
                                  , r = Math.floor(s.days || 0)
                                  , a = Math.floor(s.hours || 0)
                                  , o = Math.floor(s.minutes || 0)
                                  , l = [];
                                if (n > 0 && l.push("".concat(n, " year").concat(1 === n ? "" : "s")),
                                r > 0 && l.push("".concat(r, " day").concat(1 === r ? "" : "s")),
                                a > 0 && l.push("".concat(a, " hr").concat(1 === a ? "" : "s")),
                                o > 0 && l.push("".concat(o, " min").concat(1 === o ? "" : "s")),
                                0 === l.length)
                                    return "less than a minute left";
                                if (1 === l.length)
                                    return "".concat(l[0], " left");
                                let u = l.pop();
                                return "".concat(l.join(", "), " and ").concat(u)
                            }((null == l ? void 0 : l.subscription_end) || "unknown")]
                        }), (0,
                        n.jsxs)("button", {
                            className: "btn btn-primary",
                            type: "submit",
                            disabled: p,
                            children: [(0,
                            n.jsx)("svg", {
                                width: "23",
                                height: "23",
                                viewBox: "0 0 23 23",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0,
                                n.jsx)("path", {
                                    d: "M11.5 0C17.8513 0 23 5.14873 23 11.5C23 17.8513 17.8513 23 11.5 23C5.14873 23 0 17.8513 0 11.5C0 5.14873 5.14873 0 11.5 0ZM6.46875 10.7812C6.07179 10.7812 5.75 11.103 5.75 11.5C5.75 11.897 6.07179 12.2188 6.46875 12.2188H14.796L11.7105 15.3043C11.4298 15.585 11.4298 16.04 11.7105 16.3207C11.9912 16.6014 12.4463 16.6014 12.727 16.3207L17.0395 12.0082C17.3202 11.7275 17.3202 11.2725 17.0395 10.9918L12.727 6.67927C12.4463 6.39858 11.9912 6.39858 11.7105 6.67927C11.4298 6.95996 11.4298 7.41504 11.7105 7.69573L14.796 10.7812H6.46875Z",
                                    fill: "#ADCBE4"
                                })
                            }), "Renew"]
                        })]
                    })
                }), !d && (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex flex-col gap-[5px]",
                        children: [(0,
                        n.jsx)(sU, {
                            onClick: () => m(!0),
                            subscription_end: (null == l ? void 0 : l.subscription_end) || "unknown"
                        }), (0,
                        n.jsx)("span", {
                            className: "text-[var(--accent)]",
                            children: "Authorized as"
                        }), (0,
                        n.jsxs)("div", {
                            className: "input-container flex items-center justify-between text-[var(--description)] gap-[5px] px-2",
                            onMouseEnter: () => a(!0),
                            onMouseLeave: () => a(!1),
                            children: [(null == l ? void 0 : l.email) && (0,
                            n.jsx)(i6.N, {
                                mode: "wait",
                                children: s ? (0,
                                n.jsx)(se.P.span, {
                                    initial: {
                                        opacity: .5
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: .5
                                    },
                                    transition: {
                                        duration: .15
                                    },
                                    children: l.email
                                }, "full") : (0,
                                n.jsx)(se.P.span, {
                                    initial: {
                                        opacity: .5
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: .5
                                    },
                                    transition: {
                                        duration: .15
                                    },
                                    children: function(e) {
                                        let[t,i] = e.split("@")
                                          , {length: s} = t;
                                        return t[0] + "***" + t[s - 1] + "@" + i
                                    }(l.email)
                                }, "masked")
                            }), (0,
                            n.jsx)("svg", {
                                width: "18",
                                height: "18",
                                viewBox: "0 0 18 18",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0,
                                n.jsx)("path", {
                                    d: "M9 1.125C10.5464 1.125 11.8 2.13236 11.8 3.375V7.875H6.2V3.375C6.2 2.13236 7.4536 1.125 9 1.125ZM13.2 7.875V3.375C13.2 1.51104 11.3196 0 9 0C6.6804 0 4.8 1.51104 4.8 3.375V7.875C3.2536 7.875 2 8.88236 2 10.125V15.75C2 16.9926 3.2536 18 4.8 18H13.2C14.7464 18 16 16.9926 16 15.75V10.125C16 8.88236 14.7464 7.875 13.2 7.875Z",
                                    fill: "#748899"
                                })
                            })]
                        })]
                    }), (0,
                    n.jsx)("button", {
                        className: "btn",
                        disabled: !0,
                        children: "Reset password"
                    }), (0,
                    n.jsx)("button", {
                        className: "btn",
                        onClick: () => {
                            i(!1),
                            h(!0)
                        }
                        ,
                        children: "Logout"
                    })]
                })]
            })
        }
        function sq(e) {
            let {Component: t, pageProps: i} = e
              , s = (0,
            i9.i)(e => e.changeDefaultState)
              , u = (0,
            a.useRouter)()
              , {fetchUserData: c, isAuthenticated: h, uiLoaded: d, status: m, reset: p, cannotLoad: f, appLoaded: g} = (0,
            r.k)();
            return (0,
            o.useEffect)( () => {
                c(),
                console.log("[Mount] useEffect triggered");
                let e = setInterval( () => {
                    c()
                }
                , 3e5);
                return () => {
                    console.log("[Unmount] useEffect cleanup triggered"),
                    clearInterval(e)
                }
            }
            , []),
            (0,
            o.useEffect)( () => {
                sessionStorage.getItem("loadedOnce") ? console.log("\uD83D\uDD25 WEBVIEW RELOADED (unexpected)") : (console.log("✨ first load"),
                sessionStorage.setItem("loadedOnce", "1"))
            }
            , []),
            (0,
            o.useEffect)( () => {
                console.log(f, g, "APP LOADED AND CANNOT LOAD?"),
                f && !g && s("error")
            }
            , [f, g]),
            (0,
            o.useEffect)( () => {
                u.isReady && (async () => {
                    console.log(h);
                    let e = (0,
                    l.uu)().label;
                    (401 === m || 403 === m) && (console.log("is ui loaded", d),
                    "debug" === e || h || d || (console.log("test", 1e3 * Date.now()),
                    p()))
                }
                )()
            }
            , [h]),
            (0,
            n.jsx)(sa.A, {
                children: (0,
                n.jsxs)(sL, {
                    children: ["    ", (0,
                    n.jsx)(sW, {}), (0,
                    n.jsx)(sP, {}), (0,
                    n.jsx)(s$, {}), (0,
                    n.jsx)(sb, {
                        children: (0,
                        n.jsx)(t, {
                            ...i
                        })
                    })]
                })
            })
        }
    }
    ,
    6848: (e, t, i) => {
        "use strict";
        let s;
        i.d(t, {
            P: () => rS
        });
        var n = i(4232);
        let r = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , a = new Set(r)
          , o = e => 180 * e / Math.PI
          , l = e => c(o(Math.atan2(e[1], e[0])))
          , u = {
            x: 4,
            y: 5,
            translateX: 4,
            translateY: 5,
            scaleX: 0,
            scaleY: 3,
            scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
            rotate: l,
            rotateZ: l,
            skewX: e => o(Math.atan(e[1])),
            skewY: e => o(Math.atan(e[2])),
            skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
        }
          , c = e => ((e %= 360) < 0 && (e += 360),
        e)
          , h = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
          , d = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
          , m = {
            x: 12,
            y: 13,
            z: 14,
            translateX: 12,
            translateY: 13,
            translateZ: 14,
            scaleX: h,
            scaleY: d,
            scale: e => (h(e) + d(e)) / 2,
            rotateX: e => c(o(Math.atan2(e[6], e[5]))),
            rotateY: e => c(o(Math.atan2(-e[2], e[0]))),
            rotateZ: l,
            rotate: l,
            skewX: e => o(Math.atan(e[4])),
            skewY: e => o(Math.atan(e[1])),
            skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
        };
        function p(e) {
            return +!!e.includes("scale")
        }
        function f(e, t) {
            let i, s;
            if (!e || "none" === e)
                return p(t);
            let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
            if (n)
                i = m,
                s = n;
            else {
                let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
                i = u,
                s = t
            }
            if (!s)
                return p(t);
            let r = i[t]
              , a = s[1].split(",").map(y);
            return "function" == typeof r ? r(a) : a[r]
        }
        let g = (e, t) => {
            let {transform: i="none"} = getComputedStyle(e);
            return f(i, t)
        }
        ;
        function y(e) {
            return parseFloat(e.trim())
        }
        let v = e => t => "string" == typeof t && t.startsWith(e)
          , w = v("--")
          , x = v("var(--")
          , C = e => !!x(e) && b.test(e.split("/*")[0].trim())
          , b = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
        function L({top: e, left: t, right: i, bottom: s}) {
            return {
                x: {
                    min: t,
                    max: i
                },
                y: {
                    min: e,
                    max: s
                }
            }
        }
        let j = (e, t, i) => e + (t - e) * i;
        function T(e) {
            return void 0 === e || 1 === e
        }
        function k({scale: e, scaleX: t, scaleY: i}) {
            return !T(e) || !T(t) || !T(i)
        }
        function S(e) {
            return k(e) || E(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
        }
        function E(e) {
            var t, i;
            return (t = e.x) && "0%" !== t || (i = e.y) && "0%" !== i
        }
        function M(e, t, i, s, n) {
            return void 0 !== n && (e = s + n * (e - s)),
            s + i * (e - s) + t
        }
        function A(e, t=0, i=1, s, n) {
            e.min = M(e.min, t, i, s, n),
            e.max = M(e.max, t, i, s, n)
        }
        function N(e, {x: t, y: i}) {
            A(e.x, t.translate, t.scale, t.originPoint),
            A(e.y, i.translate, i.scale, i.originPoint)
        }
        function D(e, t) {
            e.min = e.min + t,
            e.max = e.max + t
        }
        function _(e, t, i, s, n=.5) {
            let r = j(e.min, e.max, n);
            A(e, t, i, r, s)
        }
        function V(e, t) {
            _(e.x, t.x, t.scaleX, t.scale, t.originX),
            _(e.y, t.y, t.scaleY, t.scale, t.originY)
        }
        function P(e, t) {
            return L(function(e, t) {
                if (!t)
                    return e;
                let i = t({
                    x: e.left,
                    y: e.top
                })
                  , s = t({
                    x: e.right,
                    y: e.bottom
                });
                return {
                    top: i.y,
                    left: i.x,
                    bottom: s.y,
                    right: s.x
                }
            }(e.getBoundingClientRect(), t))
        }
        let O = new Set(["width", "height", "top", "left", "right", "bottom", ...r])
          , I = (e, t, i) => i > t ? t : i < e ? e : i
          , F = {
            test: e => "number" == typeof e,
            parse: parseFloat,
            transform: e => e
        }
          , R = {
            ...F,
            transform: e => I(0, 1, e)
        }
          , B = {
            ...F,
            default: 1
        }
          , Z = e => ({
            test: t => "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
            parse: parseFloat,
            transform: t => `${t}${e}`
        })
          , W = Z("deg")
          , z = Z("%")
          , U = Z("px")
          , H = Z("vh")
          , $ = Z("vw")
          , q = {
            ...z,
            parse: e => z.parse(e) / 100,
            transform: e => z.transform(100 * e)
        }
          , Y = e => t => t.test(e)
          , X = [F, U, z, W, $, H, {
            test: e => "auto" === e,
            parse: e => e
        }]
          , G = e => X.find(Y(e))
          , J = () => {}
          , K = () => {}
          , Q = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
          , ee = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
          , et = e => e === F || e === U
          , ei = new Set(["x", "y", "z"])
          , es = r.filter(e => !ei.has(e))
          , en = {
            width: ({x: e}, {paddingLeft: t="0", paddingRight: i="0"}) => e.max - e.min - parseFloat(t) - parseFloat(i),
            height: ({y: e}, {paddingTop: t="0", paddingBottom: i="0"}) => e.max - e.min - parseFloat(t) - parseFloat(i),
            top: (e, {top: t}) => parseFloat(t),
            left: (e, {left: t}) => parseFloat(t),
            bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
            right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
            x: (e, {transform: t}) => f(t, "x"),
            y: (e, {transform: t}) => f(t, "y")
        };
        en.translateX = en.x,
        en.translateY = en.y;
        let er = e => e
          , ea = {}
          , eo = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
          , el = {
            value: null,
            addProjectionMetrics: null
        };
        function eu(e, t) {
            let i = !1
              , s = !0
              , n = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            }
              , r = () => i = !0
              , a = eo.reduce( (e, i) => (e[i] = function(e, t) {
                let i = new Set
                  , s = new Set
                  , n = !1
                  , r = !1
                  , a = new WeakSet
                  , o = {
                    delta: 0,
                    timestamp: 0,
                    isProcessing: !1
                }
                  , l = 0;
                function u(t) {
                    a.has(t) && (c.schedule(t),
                    e()),
                    l++,
                    t(o)
                }
                let c = {
                    schedule: (e, t=!1, r=!1) => {
                        let o = r && n ? i : s;
                        return t && a.add(e),
                        o.has(e) || o.add(e),
                        e
                    }
                    ,
                    cancel: e => {
                        s.delete(e),
                        a.delete(e)
                    }
                    ,
                    process: e => {
                        if (o = e,
                        n) {
                            r = !0;
                            return
                        }
                        n = !0,
                        [i,s] = [s, i],
                        i.forEach(u),
                        t && el.value && el.value.frameloop[t].push(l),
                        l = 0,
                        i.clear(),
                        n = !1,
                        r && (r = !1,
                        c.process(e))
                    }
                };
                return c
            }(r, t ? i : void 0),
            e), {})
              , {setup: o, read: l, resolveKeyframes: u, preUpdate: c, update: h, preRender: d, render: m, postRender: p} = a
              , f = () => {
                let r = ea.useManualTiming ? n.timestamp : performance.now();
                i = !1,
                ea.useManualTiming || (n.delta = s ? 1e3 / 60 : Math.max(Math.min(r - n.timestamp, 40), 1)),
                n.timestamp = r,
                n.isProcessing = !0,
                o.process(n),
                l.process(n),
                u.process(n),
                c.process(n),
                h.process(n),
                d.process(n),
                m.process(n),
                p.process(n),
                n.isProcessing = !1,
                i && t && (s = !1,
                e(f))
            }
              , g = () => {
                i = !0,
                s = !0,
                n.isProcessing || e(f)
            }
            ;
            return {
                schedule: eo.reduce( (e, t) => {
                    let s = a[t];
                    return e[t] = (e, t=!1, n=!1) => (i || g(),
                    s.schedule(e, t, n)),
                    e
                }
                , {}),
                cancel: e => {
                    for (let t = 0; t < eo.length; t++)
                        a[eo[t]].cancel(e)
                }
                ,
                state: n,
                steps: a
            }
        }
        let {schedule: ec, cancel: eh, state: ed, steps: em} = eu("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : er, !0)
          , ep = new Set
          , ef = !1
          , eg = !1
          , ey = !1;
        function ev() {
            if (eg) {
                let e = Array.from(ep).filter(e => e.needsMeasurement)
                  , t = new Set(e.map(e => e.element))
                  , i = new Map;
                t.forEach(e => {
                    let t = function(e) {
                        let t = [];
                        return es.forEach(i => {
                            let s = e.getValue(i);
                            void 0 !== s && (t.push([i, s.get()]),
                            s.set(+!!i.startsWith("scale")))
                        }
                        ),
                        t
                    }(e);
                    t.length && (i.set(e, t),
                    e.render())
                }
                ),
                e.forEach(e => e.measureInitialState()),
                t.forEach(e => {
                    e.render();
                    let t = i.get(e);
                    t && t.forEach( ([t,i]) => {
                        e.getValue(t)?.set(i)
                    }
                    )
                }
                ),
                e.forEach(e => e.measureEndState()),
                e.forEach(e => {
                    void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
                }
                )
            }
            eg = !1,
            ef = !1,
            ep.forEach(e => e.complete(ey)),
            ep.clear()
        }
        function ew() {
            ep.forEach(e => {
                e.readKeyframes(),
                e.needsMeasurement && (eg = !0)
            }
            )
        }
        class ex {
            constructor(e, t, i, s, n, r=!1) {
                this.state = "pending",
                this.isAsync = !1,
                this.needsMeasurement = !1,
                this.unresolvedKeyframes = [...e],
                this.onComplete = t,
                this.name = i,
                this.motionValue = s,
                this.element = n,
                this.isAsync = r
            }
            scheduleResolve() {
                this.state = "scheduled",
                this.isAsync ? (ep.add(this),
                ef || (ef = !0,
                ec.read(ew),
                ec.resolveKeyframes(ev))) : (this.readKeyframes(),
                this.complete())
            }
            readKeyframes() {
                let {unresolvedKeyframes: e, name: t, element: i, motionValue: s} = this;
                if (null === e[0]) {
                    let n = s?.get()
                      , r = e[e.length - 1];
                    if (void 0 !== n)
                        e[0] = n;
                    else if (i && t) {
                        let s = i.readValue(t, r);
                        null != s && (e[0] = s)
                    }
                    void 0 === e[0] && (e[0] = r),
                    s && void 0 === n && s.set(e[0])
                }
                for (let t = 1; t < e.length; t++)
                    e[t] ?? (e[t] = e[t - 1])
            }
            setFinalKeyframe() {}
            measureInitialState() {}
            renderEndStyles() {}
            measureEndState() {}
            complete(e=!1) {
                this.state = "complete",
                this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e),
                ep.delete(this)
            }
            cancel() {
                "scheduled" === this.state && (ep.delete(this),
                this.state = "pending")
            }
            resume() {
                "pending" === this.state && this.scheduleResolve()
            }
        }
        let eC = e => /^0[^.\s]+$/u.test(e)
          , eb = e => Math.round(1e5 * e) / 1e5
          , eL = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
          , ej = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
          , eT = (e, t) => i => !!("string" == typeof i && ej.test(i) && i.startsWith(e) || t && null != i && Object.prototype.hasOwnProperty.call(i, t))
          , ek = (e, t, i) => s => {
            if ("string" != typeof s)
                return s;
            let[n,r,a,o] = s.match(eL);
            return {
                [e]: parseFloat(n),
                [t]: parseFloat(r),
                [i]: parseFloat(a),
                alpha: void 0 !== o ? parseFloat(o) : 1
            }
        }
          , eS = e => I(0, 255, e)
          , eE = {
            ...F,
            transform: e => Math.round(eS(e))
        }
          , eM = {
            test: eT("rgb", "red"),
            parse: ek("red", "green", "blue"),
            transform: ({red: e, green: t, blue: i, alpha: s=1}) => "rgba(" + eE.transform(e) + ", " + eE.transform(t) + ", " + eE.transform(i) + ", " + eb(R.transform(s)) + ")"
        }
          , eA = {
            test: eT("#"),
            parse: function(e) {
                let t = ""
                  , i = ""
                  , s = ""
                  , n = "";
                return e.length > 5 ? (t = e.substring(1, 3),
                i = e.substring(3, 5),
                s = e.substring(5, 7),
                n = e.substring(7, 9)) : (t = e.substring(1, 2),
                i = e.substring(2, 3),
                s = e.substring(3, 4),
                n = e.substring(4, 5),
                t += t,
                i += i,
                s += s,
                n += n),
                {
                    red: parseInt(t, 16),
                    green: parseInt(i, 16),
                    blue: parseInt(s, 16),
                    alpha: n ? parseInt(n, 16) / 255 : 1
                }
            },
            transform: eM.transform
        }
          , eN = {
            test: eT("hsl", "hue"),
            parse: ek("hue", "saturation", "lightness"),
            transform: ({hue: e, saturation: t, lightness: i, alpha: s=1}) => "hsla(" + Math.round(e) + ", " + z.transform(eb(t)) + ", " + z.transform(eb(i)) + ", " + eb(R.transform(s)) + ")"
        }
          , eD = {
            test: e => eM.test(e) || eA.test(e) || eN.test(e),
            parse: e => eM.test(e) ? eM.parse(e) : eN.test(e) ? eN.parse(e) : eA.parse(e),
            transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? eM.transform(e) : eN.transform(e),
            getAnimatableNone: e => {
                let t = eD.parse(e);
                return t.alpha = 0,
                eD.transform(t)
            }
        }
          , e_ = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
          , eV = "number"
          , eP = "color"
          , eO = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
        function eI(e) {
            let t = e.toString()
              , i = []
              , s = {
                color: [],
                number: [],
                var: []
            }
              , n = []
              , r = 0
              , a = t.replace(eO, e => (eD.test(e) ? (s.color.push(r),
            n.push(eP),
            i.push(eD.parse(e))) : e.startsWith("var(") ? (s.var.push(r),
            n.push("var"),
            i.push(e)) : (s.number.push(r),
            n.push(eV),
            i.push(parseFloat(e))),
            ++r,
            "${}")).split("${}");
            return {
                values: i,
                split: a,
                indexes: s,
                types: n
            }
        }
        function eF(e) {
            return eI(e).values
        }
        function eR(e) {
            let {split: t, types: i} = eI(e)
              , s = t.length;
            return e => {
                let n = "";
                for (let r = 0; r < s; r++)
                    if (n += t[r],
                    void 0 !== e[r]) {
                        let t = i[r];
                        t === eV ? n += eb(e[r]) : t === eP ? n += eD.transform(e[r]) : n += e[r]
                    }
                return n
            }
        }
        let eB = e => "number" == typeof e ? 0 : eD.test(e) ? eD.getAnimatableNone(e) : e
          , eZ = {
            test: function(e) {
                return isNaN(e) && "string" == typeof e && (e.match(eL)?.length || 0) + (e.match(e_)?.length || 0) > 0
            },
            parse: eF,
            createTransformer: eR,
            getAnimatableNone: function(e) {
                let t = eF(e);
                return eR(e)(t.map(eB))
            }
        }
          , eW = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function ez(e) {
            let[t,i] = e.slice(0, -1).split("(");
            if ("drop-shadow" === t)
                return e;
            let[s] = i.match(eL) || [];
            if (!s)
                return e;
            let n = i.replace(s, "")
              , r = +!!eW.has(t);
            return s !== i && (r *= 100),
            t + "(" + r + n + ")"
        }
        let eU = /\b([a-z-]*)\(.*?\)/gu
          , eH = {
            ...eZ,
            getAnimatableNone: e => {
                let t = e.match(eU);
                return t ? t.map(ez).join(" ") : e
            }
        }
          , e$ = {
            ...F,
            transform: Math.round
        }
          , eq = {
            borderWidth: U,
            borderTopWidth: U,
            borderRightWidth: U,
            borderBottomWidth: U,
            borderLeftWidth: U,
            borderRadius: U,
            radius: U,
            borderTopLeftRadius: U,
            borderTopRightRadius: U,
            borderBottomRightRadius: U,
            borderBottomLeftRadius: U,
            width: U,
            maxWidth: U,
            height: U,
            maxHeight: U,
            top: U,
            right: U,
            bottom: U,
            left: U,
            padding: U,
            paddingTop: U,
            paddingRight: U,
            paddingBottom: U,
            paddingLeft: U,
            margin: U,
            marginTop: U,
            marginRight: U,
            marginBottom: U,
            marginLeft: U,
            backgroundPositionX: U,
            backgroundPositionY: U,
            rotate: W,
            rotateX: W,
            rotateY: W,
            rotateZ: W,
            scale: B,
            scaleX: B,
            scaleY: B,
            scaleZ: B,
            skew: W,
            skewX: W,
            skewY: W,
            distance: U,
            translateX: U,
            translateY: U,
            translateZ: U,
            x: U,
            y: U,
            z: U,
            perspective: U,
            transformPerspective: U,
            opacity: R,
            originX: q,
            originY: q,
            originZ: U,
            zIndex: e$,
            fillOpacity: R,
            strokeOpacity: R,
            numOctaves: e$
        }
          , eY = {
            ...eq,
            color: eD,
            backgroundColor: eD,
            outlineColor: eD,
            fill: eD,
            stroke: eD,
            borderColor: eD,
            borderTopColor: eD,
            borderRightColor: eD,
            borderBottomColor: eD,
            borderLeftColor: eD,
            filter: eH,
            WebkitFilter: eH
        }
          , eX = e => eY[e];
        function eG(e, t) {
            let i = eX(e);
            return i !== eH && (i = eZ),
            i.getAnimatableNone ? i.getAnimatableNone(t) : void 0
        }
        let eJ = new Set(["auto", "none", "0"]);
        class eK extends ex {
            constructor(e, t, i, s, n) {
                super(e, t, i, s, n, !0)
            }
            readKeyframes() {
                let {unresolvedKeyframes: e, element: t, name: i} = this;
                if (!t || !t.current)
                    return;
                super.readKeyframes();
                for (let i = 0; i < e.length; i++) {
                    let s = e[i];
                    if ("string" == typeof s && C(s = s.trim())) {
                        let n = function e(t, i, s=1) {
                            K(s <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
                            let[n,r] = function(e) {
                                let t = ee.exec(e);
                                if (!t)
                                    return [, ];
                                let[,i,s,n] = t;
                                return [`--${i ?? s}`, n]
                            }(t);
                            if (!n)
                                return;
                            let a = window.getComputedStyle(i).getPropertyValue(n);
                            if (a) {
                                let e = a.trim();
                                return Q(e) ? parseFloat(e) : e
                            }
                            return C(r) ? e(r, i, s + 1) : r
                        }(s, t.current);
                        void 0 !== n && (e[i] = n),
                        i === e.length - 1 && (this.finalKeyframe = s)
                    }
                }
                if (this.resolveNoneKeyframes(),
                !O.has(i) || 2 !== e.length)
                    return;
                let[s,n] = e
                  , r = G(s)
                  , a = G(n);
                if (r !== a)
                    if (et(r) && et(a))
                        for (let t = 0; t < e.length; t++) {
                            let i = e[t];
                            "string" == typeof i && (e[t] = parseFloat(i))
                        }
                    else
                        en[i] && (this.needsMeasurement = !0)
            }
            resolveNoneKeyframes() {
                let {unresolvedKeyframes: e, name: t} = this
                  , i = [];
                for (let t = 0; t < e.length; t++) {
                    var s;
                    (null === e[t] || ("number" == typeof (s = e[t]) ? 0 === s : null === s || "none" === s || "0" === s || eC(s))) && i.push(t)
                }
                i.length && function(e, t, i) {
                    let s, n = 0;
                    for (; n < e.length && !s; ) {
                        let t = e[n];
                        "string" == typeof t && !eJ.has(t) && eI(t).values.length && (s = e[n]),
                        n++
                    }
                    if (s && i)
                        for (let n of t)
                            e[n] = eG(i, s)
                }(e, i, t)
            }
            measureInitialState() {
                let {element: e, unresolvedKeyframes: t, name: i} = this;
                if (!e || !e.current)
                    return;
                "height" === i && (this.suspendedScrollY = window.pageYOffset),
                this.measuredOrigin = en[i](e.measureViewportBox(), window.getComputedStyle(e.current)),
                t[0] = this.measuredOrigin;
                let s = t[t.length - 1];
                void 0 !== s && e.getValue(i, s).jump(s, !1)
            }
            measureEndState() {
                let {element: e, name: t, unresolvedKeyframes: i} = this;
                if (!e || !e.current)
                    return;
                let s = e.getValue(t);
                s && s.jump(this.measuredOrigin, !1);
                let n = i.length - 1
                  , r = i[n];
                i[n] = en[t](e.measureViewportBox(), window.getComputedStyle(e.current)),
                null !== r && void 0 === this.finalKeyframe && (this.finalKeyframe = r),
                this.removedTransforms?.length && this.removedTransforms.forEach( ([t,i]) => {
                    e.getValue(t).set(i)
                }
                ),
                this.resolveNoneKeyframes()
            }
        }
        let eQ = e => !!(e && e.getVelocity);
        function e1() {
            s = void 0
        }
        let e0 = {
            now: () => (void 0 === s && e0.set(ed.isProcessing || ea.useManualTiming ? ed.timestamp : performance.now()),
            s),
            set: e => {
                s = e,
                queueMicrotask(e1)
            }
        };
        function e2(e, t) {
            -1 === e.indexOf(t) && e.push(t)
        }
        function e5(e, t) {
            let i = e.indexOf(t);
            i > -1 && e.splice(i, 1)
        }
        class e3 {
            constructor() {
                this.subscriptions = []
            }
            add(e) {
                return e2(this.subscriptions, e),
                () => e5(this.subscriptions, e)
            }
            notify(e, t, i) {
                let s = this.subscriptions.length;
                if (s)
                    if (1 === s)
                        this.subscriptions[0](e, t, i);
                    else
                        for (let n = 0; n < s; n++) {
                            let s = this.subscriptions[n];
                            s && s(e, t, i)
                        }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
        let e4 = e => !isNaN(parseFloat(e))
          , e7 = {
            current: void 0
        };
        class e8 {
            constructor(e, t={}) {
                this.canTrackVelocity = null,
                this.events = {},
                this.updateAndNotify = e => {
                    let t = e0.now();
                    if (this.updatedAt !== t && this.setPrevFrameValue(),
                    this.prev = this.current,
                    this.setCurrent(e),
                    this.current !== this.prev && (this.events.change?.notify(this.current),
                    this.dependents))
                        for (let e of this.dependents)
                            e.dirty()
                }
                ,
                this.hasAnimated = !1,
                this.setCurrent(e),
                this.owner = t.owner
            }
            setCurrent(e) {
                this.current = e,
                this.updatedAt = e0.now(),
                null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = e4(this.current))
            }
            setPrevFrameValue(e=this.current) {
                this.prevFrameValue = e,
                this.prevUpdatedAt = this.updatedAt
            }
            onChange(e) {
                return this.on("change", e)
            }
            on(e, t) {
                this.events[e] || (this.events[e] = new e3);
                let i = this.events[e].add(t);
                return "change" === e ? () => {
                    i(),
                    ec.read( () => {
                        this.events.change.getSize() || this.stop()
                    }
                    )
                }
                : i
            }
            clearListeners() {
                for (let e in this.events)
                    this.events[e].clear()
            }
            attach(e, t) {
                this.passiveEffect = e,
                this.stopPassiveEffect = t
            }
            set(e) {
                this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e)
            }
            setWithVelocity(e, t, i) {
                this.set(t),
                this.prev = void 0,
                this.prevFrameValue = e,
                this.prevUpdatedAt = this.updatedAt - i
            }
            jump(e, t=!0) {
                this.updateAndNotify(e),
                this.prev = e,
                this.prevUpdatedAt = this.prevFrameValue = void 0,
                t && this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
            dirty() {
                this.events.change?.notify(this.current)
            }
            addDependent(e) {
                this.dependents || (this.dependents = new Set),
                this.dependents.add(e)
            }
            removeDependent(e) {
                this.dependents && this.dependents.delete(e)
            }
            get() {
                return e7.current && e7.current.push(this),
                this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                var e;
                let t = e0.now();
                if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30)
                    return 0;
                let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                return e = parseFloat(this.current) - parseFloat(this.prevFrameValue),
                i ? 1e3 / i * e : 0
            }
            start(e) {
                return this.stop(),
                new Promise(t => {
                    this.hasAnimated = !0,
                    this.animation = e(t),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then( () => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.animation && (this.animation.stop(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.animation
            }
            clearAnimation() {
                delete this.animation
            }
            destroy() {
                this.dependents?.clear(),
                this.events.destroy?.notify(),
                this.clearListeners(),
                this.stop(),
                this.stopPassiveEffect && this.stopPassiveEffect()
            }
        }
        function e6(e, t) {
            return new e8(e,t)
        }
        let e9 = [...X, eD, eZ]
          , te = e => e9.find(Y(e))
          , {schedule: tt} = eu(queueMicrotask, !1)
          , ti = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        }
          , ts = {};
        for (let e in ti)
            ts[e] = {
                isEnabled: t => ti[e].some(e => !!t[e])
            };
        let tn = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , tr = () => ({
            x: tn(),
            y: tn()
        })
          , ta = () => ({
            min: 0,
            max: 0
        })
          , to = () => ({
            x: ta(),
            y: ta()
        });
        var tl = i(2205);
        let tu = {
            current: null
        }
          , tc = {
            current: !1
        }
          , th = new WeakMap;
        function td(e) {
            return null !== e && "object" == typeof e && "function" == typeof e.start
        }
        function tm(e) {
            return "string" == typeof e || Array.isArray(e)
        }
        let tp = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
          , tf = ["initial", ...tp];
        function tg(e) {
            return td(e.animate) || tf.some(t => tm(e[t]))
        }
        function ty(e) {
            return !!(tg(e) || e.variants)
        }
        function tv(e) {
            let t = [{}, {}];
            return e?.values.forEach( (e, i) => {
                t[0][i] = e.get(),
                t[1][i] = e.getVelocity()
            }
            ),
            t
        }
        function tw(e, t, i, s) {
            if ("function" == typeof t) {
                let[n,r] = tv(s);
                t = t(void 0 !== i ? i : e.custom, n, r)
            }
            if ("string" == typeof t && (t = e.variants && e.variants[t]),
            "function" == typeof t) {
                let[n,r] = tv(s);
                t = t(void 0 !== i ? i : e.custom, n, r)
            }
            return t
        }
        let tx = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
        class tC {
            scrapeMotionValuesFromProps(e, t, i) {
                return {}
            }
            constructor({parent: e, props: t, presenceContext: i, reducedMotionConfig: s, blockInitialAnimation: n, visualState: r}, a={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.KeyframeResolver = ex,
                this.features = {},
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = () => this.notify("Update", this.latestValues),
                this.render = () => {
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.renderScheduledAt = 0,
                this.scheduleRender = () => {
                    let e = e0.now();
                    this.renderScheduledAt < e && (this.renderScheduledAt = e,
                    ec.render(this.render, !1, !0))
                }
                ;
                let {latestValues: o, renderState: l} = r;
                this.latestValues = o,
                this.baseTarget = {
                    ...o
                },
                this.initialValues = t.initial ? {
                    ...o
                } : {},
                this.renderState = l,
                this.parent = e,
                this.props = t,
                this.presenceContext = i,
                this.depth = e ? e.depth + 1 : 0,
                this.reducedMotionConfig = s,
                this.options = a,
                this.blockInitialAnimation = !!n,
                this.isControllingVariants = tg(t),
                this.isVariantNode = ty(t),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(e && e.current);
                let {willChange: u, ...c} = this.scrapeMotionValuesFromProps(t, {}, this);
                for (let e in c) {
                    let t = c[e];
                    void 0 !== o[e] && eQ(t) && t.set(o[e])
                }
            }
            mount(e) {
                this.current = e,
                th.set(e, this),
                this.projection && !this.projection.instance && this.projection.mount(e),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
                this.values.forEach( (e, t) => this.bindToMotionValue(t, e)),
                tc.current || function() {
                    if (tc.current = !0,
                    tl.B)
                        if (window.matchMedia) {
                            let e = window.matchMedia("(prefers-reduced-motion)")
                              , t = () => tu.current = e.matches;
                            e.addEventListener("change", t),
                            t()
                        } else
                            tu.current = !1
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || tu.current),
                this.parent?.addChild(this),
                this.update(this.props, this.presenceContext)
            }
            unmount() {
                for (let e in this.projection && this.projection.unmount(),
                eh(this.notifyUpdate),
                eh(this.render),
                this.valueSubscriptions.forEach(e => e()),
                this.valueSubscriptions.clear(),
                this.removeFromVariantTree && this.removeFromVariantTree(),
                this.parent?.removeChild(this),
                this.events)
                    this.events[e].clear();
                for (let e in this.features) {
                    let t = this.features[e];
                    t && (t.unmount(),
                    t.isMounted = !1)
                }
                this.current = null
            }
            addChild(e) {
                this.children.add(e),
                this.enteringChildren ?? (this.enteringChildren = new Set),
                this.enteringChildren.add(e)
            }
            removeChild(e) {
                this.children.delete(e),
                this.enteringChildren && this.enteringChildren.delete(e)
            }
            bindToMotionValue(e, t) {
                let i;
                this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
                let s = a.has(e);
                s && this.onBindTransform && this.onBindTransform();
                let n = t.on("change", t => {
                    this.latestValues[e] = t,
                    this.props.onUpdate && ec.preRender(this.notifyUpdate),
                    s && this.projection && (this.projection.isTransformDirty = !0),
                    this.scheduleRender()
                }
                );
                window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)),
                this.valueSubscriptions.set(e, () => {
                    n(),
                    i && i(),
                    t.owner && t.stop()
                }
                )
            }
            sortNodePosition(e) {
                return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
            }
            updateFeatures() {
                let e = "animation";
                for (e in ts) {
                    let t = ts[e];
                    if (!t)
                        continue;
                    let {isEnabled: i, Feature: s} = t;
                    if (!this.features[e] && s && i(this.props) && (this.features[e] = new s(this)),
                    this.features[e]) {
                        let t = this.features[e];
                        t.isMounted ? t.update() : (t.mount(),
                        t.isMounted = !0)
                    }
                }
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : to()
            }
            getStaticValue(e) {
                return this.latestValues[e]
            }
            setStaticValue(e, t) {
                this.latestValues[e] = t
            }
            update(e, t) {
                (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.prevProps = this.props,
                this.props = e,
                this.prevPresenceContext = this.presenceContext,
                this.presenceContext = t;
                for (let t = 0; t < tx.length; t++) {
                    let i = tx[t];
                    this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
                    delete this.propEventSubscriptions[i]);
                    let s = e["on" + i];
                    s && (this.propEventSubscriptions[i] = this.on(i, s))
                }
                this.prevMotionValues = function(e, t, i) {
                    for (let s in t) {
                        let n = t[s]
                          , r = i[s];
                        if (eQ(n))
                            e.addValue(s, n);
                        else if (eQ(r))
                            e.addValue(s, e6(n, {
                                owner: e
                            }));
                        else if (r !== n)
                            if (e.hasValue(s)) {
                                let t = e.getValue(s);
                                !0 === t.liveStyle ? t.jump(n) : t.hasAnimated || t.set(n)
                            } else {
                                let t = e.getStaticValue(s);
                                e.addValue(s, e6(void 0 !== t ? t : n, {
                                    owner: e
                                }))
                            }
                    }
                    for (let s in i)
                        void 0 === t[s] && e.removeValue(s);
                    return t
                }(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues),
                this.handleChildMotionValue && this.handleChildMotionValue()
            }
            getProps() {
                return this.props
            }
            getVariant(e) {
                return this.props.variants ? this.props.variants[e] : void 0
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
            }
            addVariantChild(e) {
                let t = this.getClosestVariantNode();
                if (t)
                    return t.variantChildren && t.variantChildren.add(e),
                    () => t.variantChildren.delete(e)
            }
            addValue(e, t) {
                let i = this.values.get(e);
                t !== i && (i && this.removeValue(e),
                this.bindToMotionValue(e, t),
                this.values.set(e, t),
                this.latestValues[e] = t.get())
            }
            removeValue(e) {
                this.values.delete(e);
                let t = this.valueSubscriptions.get(e);
                t && (t(),
                this.valueSubscriptions.delete(e)),
                delete this.latestValues[e],
                this.removeValueFromRenderState(e, this.renderState)
            }
            hasValue(e) {
                return this.values.has(e)
            }
            getValue(e, t) {
                if (this.props.values && this.props.values[e])
                    return this.props.values[e];
                let i = this.values.get(e);
                return void 0 === i && void 0 !== t && (i = e6(null === t ? void 0 : t, {
                    owner: this
                }),
                this.addValue(e, i)),
                i
            }
            readValue(e, t) {
                let i = void 0 === this.latestValues[e] && this.current ? this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
                return null != i && ("string" == typeof i && (Q(i) || eC(i)) ? i = parseFloat(i) : !te(i) && eZ.test(t) && (i = eG(e, t)),
                this.setBaseTarget(e, eQ(i) ? i.get() : i)),
                eQ(i) ? i.get() : i
            }
            setBaseTarget(e, t) {
                this.baseTarget[e] = t
            }
            getBaseTarget(e) {
                let t, {initial: i} = this.props;
                if ("string" == typeof i || "object" == typeof i) {
                    let s = tw(this.props, i, this.presenceContext?.custom);
                    s && (t = s[e])
                }
                if (i && void 0 !== t)
                    return t;
                let s = this.getBaseTargetFromProps(this.props, e);
                return void 0 === s || eQ(s) ? void 0 !== this.initialValues[e] && void 0 === t ? void 0 : this.baseTarget[e] : s
            }
            on(e, t) {
                return this.events[e] || (this.events[e] = new e3),
                this.events[e].add(t)
            }
            notify(e, ...t) {
                this.events[e] && this.events[e].notify(...t)
            }
            scheduleRenderMicrotask() {
                tt.render(this.render)
            }
        }
        class tb extends tC {
            constructor() {
                super(...arguments),
                this.KeyframeResolver = eK
            }
            sortInstanceNodePosition(e, t) {
                return 2 & e.compareDocumentPosition(t) ? 1 : -1
            }
            getBaseTargetFromProps(e, t) {
                return e.style ? e.style[t] : void 0
            }
            removeValueFromRenderState(e, {vars: t, style: i}) {
                delete t[e],
                delete i[e]
            }
            handleChildMotionValue() {
                this.childSubscription && (this.childSubscription(),
                delete this.childSubscription);
                let {children: e} = this.props;
                eQ(e) && (this.childSubscription = e.on("change", e => {
                    this.current && (this.current.textContent = `${e}`)
                }
                ))
            }
        }
        let tL = (e, t) => t && "number" == typeof e ? t.transform(e) : e
          , tj = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , tT = r.length;
        function tk(e, t, i) {
            let {style: s, vars: n, transformOrigin: o} = e
              , l = !1
              , u = !1;
            for (let e in t) {
                let i = t[e];
                if (a.has(e)) {
                    l = !0;
                    continue
                }
                if (w(e)) {
                    n[e] = i;
                    continue
                }
                {
                    let t = tL(i, eq[e]);
                    e.startsWith("origin") ? (u = !0,
                    o[e] = t) : s[e] = t
                }
            }
            if (!t.transform && (l || i ? s.transform = function(e, t, i) {
                let s = ""
                  , n = !0;
                for (let a = 0; a < tT; a++) {
                    let o = r[a]
                      , l = e[o];
                    if (void 0 === l)
                        continue;
                    let u = !0;
                    if (!(u = "number" == typeof l ? l === +!!o.startsWith("scale") : 0 === parseFloat(l)) || i) {
                        let e = tL(l, eq[o]);
                        if (!u) {
                            n = !1;
                            let t = tj[o] || o;
                            s += `${t}(${e}) `
                        }
                        i && (t[o] = e)
                    }
                }
                return s = s.trim(),
                i ? s = i(t, n ? "" : s) : n && (s = "none"),
                s
            }(t, e.transform, i) : s.transform && (s.transform = "none")),
            u) {
                let {originX: e="50%", originY: t="50%", originZ: i=0} = o;
                s.transformOrigin = `${e} ${t} ${i}`
            }
        }
        function tS(e, {style: t, vars: i}, s, n) {
            let r, a = e.style;
            for (r in t)
                a[r] = t[r];
            for (r in n?.applyProjectionStyles(a, s),
            i)
                a.setProperty(r, i[r])
        }
        let tE = {};
        function tM(e, {layout: t, layoutId: i}) {
            return a.has(e) || e.startsWith("origin") || (t || void 0 !== i) && (!!tE[e] || "opacity" === e)
        }
        function tA(e, t, i) {
            let {style: s} = e
              , n = {};
            for (let r in s)
                (eQ(s[r]) || t.style && eQ(t.style[r]) || tM(r, e) || i?.getValue(r)?.liveStyle !== void 0) && (n[r] = s[r]);
            return n
        }
        class tN extends tb {
            constructor() {
                super(...arguments),
                this.type = "html",
                this.renderInstance = tS
            }
            readValueFromInstance(e, t) {
                if (a.has(t))
                    return this.projection?.isProjecting ? p(t) : g(e, t);
                {
                    let i = window.getComputedStyle(e)
                      , s = (w(t) ? i.getPropertyValue(t) : i[t]) || 0;
                    return "string" == typeof s ? s.trim() : s
                }
            }
            measureInstanceViewportBox(e, {transformPagePoint: t}) {
                return P(e, t)
            }
            build(e, t, i) {
                tk(e, t, i.transformTemplate)
            }
            scrapeMotionValuesFromProps(e, t, i) {
                return tA(e, t, i)
            }
        }
        let tD = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
          , t_ = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , tV = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function tP(e, {attrX: t, attrY: i, attrScale: s, pathLength: n, pathSpacing: r=1, pathOffset: a=0, ...o}, l, u, c) {
            if (tk(e, o, u),
            l) {
                e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
                return
            }
            e.attrs = e.style,
            e.style = {};
            let {attrs: h, style: d} = e;
            h.transform && (d.transform = h.transform,
            delete h.transform),
            (d.transform || h.transformOrigin) && (d.transformOrigin = h.transformOrigin ?? "50% 50%",
            delete h.transformOrigin),
            d.transform && (d.transformBox = c?.transformBox ?? "fill-box",
            delete h.transformBox),
            void 0 !== t && (h.x = t),
            void 0 !== i && (h.y = i),
            void 0 !== s && (h.scale = s),
            void 0 !== n && function(e, t, i=1, s=0, n=!0) {
                e.pathLength = 1;
                let r = n ? t_ : tV;
                e[r.offset] = U.transform(-s);
                let a = U.transform(t)
                  , o = U.transform(i);
                e[r.array] = `${a} ${o}`
            }(h, n, r, a, !1)
        }
        let tO = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
          , tI = e => "string" == typeof e && "svg" === e.toLowerCase();
        function tF(e, t, i) {
            let s = tA(e, t, i);
            for (let i in e)
                (eQ(e[i]) || eQ(t[i])) && (s[-1 !== r.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = e[i]);
            return s
        }
        class tR extends tb {
            constructor() {
                super(...arguments),
                this.type = "svg",
                this.isSVGTag = !1,
                this.measureInstanceViewportBox = to
            }
            getBaseTargetFromProps(e, t) {
                return e[t]
            }
            readValueFromInstance(e, t) {
                if (a.has(t)) {
                    let e = eX(t);
                    return e && e.default || 0
                }
                return t = tO.has(t) ? t : tD(t),
                e.getAttribute(t)
            }
            scrapeMotionValuesFromProps(e, t, i) {
                return tF(e, t, i)
            }
            build(e, t, i) {
                tP(e, t, this.isSVGTag, i.transformTemplate, i.style)
            }
            renderInstance(e, t, i, s) {
                for (let i in tS(e, t, void 0, s),
                t.attrs)
                    e.setAttribute(tO.has(i) ? i : tD(i), t.attrs[i])
            }
            mount(e) {
                this.isSVGTag = tI(e.tagName),
                super.mount(e)
            }
        }
        let tB = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function tZ(e) {
            if ("string" != typeof e || e.includes("-"))
                ;
            else if (tB.indexOf(e) > -1 || /[A-Z]/u.test(e))
                return !0;
            return !1
        }
        var tW = i(7876)
          , tz = i(5048);
        let tU = (0,
        n.createContext)({
            strict: !1
        });
        var tH = i(9751);
        let t$ = (0,
        n.createContext)({});
        function tq(e) {
            return Array.isArray(e) ? e.join(" ") : e
        }
        let tY = () => ({
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {}
        });
        function tX(e, t, i) {
            for (let s in t)
                eQ(t[s]) || tM(s, i) || (e[s] = t[s])
        }
        let tG = () => ({
            ...tY(),
            attrs: {}
        })
          , tJ = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
        function tK(e) {
            return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || tJ.has(e)
        }
        let tQ = e => !tK(e);
        try {
            !function(e) {
                "function" == typeof e && (tQ = t => t.startsWith("on") ? !tK(t) : e(t))
            }(require("@emotion/is-prop-valid").default)
        } catch {}
        var t1 = i(3866)
          , t0 = i(1200);
        function t2(e) {
            return eQ(e) ? e.get() : e
        }
        let t5 = e => (t, i) => {
            let s = (0,
            n.useContext)(t$)
              , r = (0,
            n.useContext)(t1.t)
              , a = () => (function({scrapeMotionValuesFromProps: e, createRenderState: t}, i, s, n) {
                return {
                    latestValues: function(e, t, i, s) {
                        let n = {}
                          , r = s(e, {});
                        for (let e in r)
                            n[e] = t2(r[e]);
                        let {initial: a, animate: o} = e
                          , l = tg(e)
                          , u = ty(e);
                        t && u && !l && !1 !== e.inherit && (void 0 === a && (a = t.initial),
                        void 0 === o && (o = t.animate));
                        let c = !!i && !1 === i.initial
                          , h = (c = c || !1 === a) ? o : a;
                        if (h && "boolean" != typeof h && !td(h)) {
                            let t = Array.isArray(h) ? h : [h];
                            for (let i = 0; i < t.length; i++) {
                                let s = tw(e, t[i]);
                                if (s) {
                                    let {transitionEnd: e, transition: t, ...i} = s;
                                    for (let e in i) {
                                        let t = i[e];
                                        if (Array.isArray(t)) {
                                            let e = c ? t.length - 1 : 0;
                                            t = t[e]
                                        }
                                        null !== t && (n[e] = t)
                                    }
                                    for (let t in e)
                                        n[t] = e[t]
                                }
                            }
                        }
                        return n
                    }(i, s, n, e),
                    renderState: t()
                }
            }
            )(e, t, s, r);
            return i ? a() : (0,
            t0.M)(a)
        }
          , t3 = t5({
            scrapeMotionValuesFromProps: tA,
            createRenderState: tY
        })
          , t4 = t5({
            scrapeMotionValuesFromProps: tF,
            createRenderState: tG
        })
          , t7 = Symbol.for("motionComponentSymbol");
        function t8(e) {
            return e && "object" == typeof e && Object.prototype.hasOwnProperty.call(e, "current")
        }
        let t6 = "data-" + tD("framerAppearId")
          , t9 = (0,
        n.createContext)({});
        var ie = i(181);
        function it(e, {forwardMotionProps: t=!1}={}, i, s) {
            i && function(e) {
                for (let t in e)
                    ts[t] = {
                        ...ts[t],
                        ...e[t]
                    }
            }(i);
            let r = tZ(e) ? t4 : t3;
            function a(i, a) {
                var o, l, u;
                let c, h = {
                    ...(0,
                    n.useContext)(tH.Q),
                    ...i,
                    layoutId: function({layoutId: e}) {
                        let t = (0,
                        n.useContext)(tz.L).id;
                        return t && void 0 !== e ? t + "-" + e : e
                    }(i)
                }, {isStatic: d} = h, m = function(e) {
                    let {initial: t, animate: i} = function(e, t) {
                        if (tg(e)) {
                            let {initial: t, animate: i} = e;
                            return {
                                initial: !1 === t || tm(t) ? t : void 0,
                                animate: tm(i) ? i : void 0
                            }
                        }
                        return !1 !== e.inherit ? t : {}
                    }(e, (0,
                    n.useContext)(t$));
                    return (0,
                    n.useMemo)( () => ({
                        initial: t,
                        animate: i
                    }), [tq(t), tq(i)])
                }(i), p = r(i, d);
                if (!d && tl.B) {
                    l = 0,
                    u = 0,
                    (0,
                    n.useContext)(tU).strict;
                    let t = function(e) {
                        let {drag: t, layout: i} = ts;
                        if (!t && !i)
                            return {};
                        let s = {
                            ...t,
                            ...i
                        };
                        return {
                            MeasureLayout: t?.isEnabled(e) || i?.isEnabled(e) ? s.MeasureLayout : void 0,
                            ProjectionNode: s.ProjectionNode
                        }
                    }(h);
                    c = t.MeasureLayout,
                    m.visualElement = function(e, t, i, s, r) {
                        let {visualElement: a} = (0,
                        n.useContext)(t$)
                          , o = (0,
                        n.useContext)(tU)
                          , l = (0,
                        n.useContext)(t1.t)
                          , u = (0,
                        n.useContext)(tH.Q).reducedMotion
                          , c = (0,
                        n.useRef)(null);
                        s = s || o.renderer,
                        !c.current && s && (c.current = s(e, {
                            visualState: t,
                            parent: a,
                            props: i,
                            presenceContext: l,
                            blockInitialAnimation: !!l && !1 === l.initial,
                            reducedMotionConfig: u
                        }));
                        let h = c.current
                          , d = (0,
                        n.useContext)(t9);
                        h && !h.projection && r && ("html" === h.type || "svg" === h.type) && function(e, t, i, s) {
                            let {layoutId: n, layout: r, drag: a, dragConstraints: o, layoutScroll: l, layoutRoot: u, layoutCrossfade: c} = t;
                            e.projection = new i(e.latestValues,t["data-framer-portal-id"] ? void 0 : function e(t) {
                                if (t)
                                    return !1 !== t.options.allowProjection ? t.projection : e(t.parent)
                            }(e.parent)),
                            e.projection.setOptions({
                                layoutId: n,
                                layout: r,
                                alwaysMeasureLayout: !!a || o && t8(o),
                                visualElement: e,
                                animationType: "string" == typeof r ? r : "both",
                                initialPromotionConfig: s,
                                crossfade: c,
                                layoutScroll: l,
                                layoutRoot: u
                            })
                        }(c.current, i, r, d);
                        let m = (0,
                        n.useRef)(!1);
                        (0,
                        n.useInsertionEffect)( () => {
                            h && m.current && h.update(i, l)
                        }
                        );
                        let p = i[t6]
                          , f = (0,
                        n.useRef)(!!p && !window.MotionHandoffIsComplete?.(p) && window.MotionHasOptimisedAnimation?.(p));
                        return (0,
                        ie.E)( () => {
                            h && (m.current = !0,
                            window.MotionIsMounted = !0,
                            h.updateFeatures(),
                            h.scheduleRenderMicrotask(),
                            f.current && h.animationState && h.animationState.animateChanges())
                        }
                        ),
                        (0,
                        n.useEffect)( () => {
                            h && (!f.current && h.animationState && h.animationState.animateChanges(),
                            f.current && (queueMicrotask( () => {
                                window.MotionHandoffMarkAsComplete?.(p)
                            }
                            ),
                            f.current = !1),
                            h.enteringChildren = void 0)
                        }
                        ),
                        h
                    }(e, p, h, s, t.ProjectionNode)
                }
                return (0,
                tW.jsxs)(t$.Provider, {
                    value: m,
                    children: [c && m.visualElement ? (0,
                    tW.jsx)(c, {
                        visualElement: m.visualElement,
                        ...h
                    }) : null, function(e, t, i, {latestValues: s}, r, a=!1) {
                        let o = (tZ(e) ? function(e, t, i, s) {
                            let r = (0,
                            n.useMemo)( () => {
                                let i = tG();
                                return tP(i, t, tI(s), e.transformTemplate, e.style),
                                {
                                    ...i.attrs,
                                    style: {
                                        ...i.style
                                    }
                                }
                            }
                            , [t]);
                            if (e.style) {
                                let t = {};
                                tX(t, e.style, e),
                                r.style = {
                                    ...t,
                                    ...r.style
                                }
                            }
                            return r
                        }
                        : function(e, t) {
                            let i = {}
                              , s = function(e, t) {
                                let i = e.style || {}
                                  , s = {};
                                return tX(s, i, e),
                                Object.assign(s, function({transformTemplate: e}, t) {
                                    return (0,
                                    n.useMemo)( () => {
                                        let i = tY();
                                        return tk(i, t, e),
                                        Object.assign({}, i.vars, i.style)
                                    }
                                    , [t])
                                }(e, t)),
                                s
                            }(e, t);
                            return e.drag && !1 !== e.dragListener && (i.draggable = !1,
                            s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none",
                            s.touchAction = !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`),
                            void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (i.tabIndex = 0),
                            i.style = s,
                            i
                        }
                        )(t, s, r, e)
                          , l = function(e, t, i) {
                            let s = {};
                            for (let n in e)
                                ("values" !== n || "object" != typeof e.values) && (tQ(n) || !0 === i && tK(n) || !t && !tK(n) || e.draggable && n.startsWith("onDrag")) && (s[n] = e[n]);
                            return s
                        }(t, "string" == typeof e, a)
                          , u = e !== n.Fragment ? {
                            ...l,
                            ...o,
                            ref: i
                        } : {}
                          , {children: c} = t
                          , h = (0,
                        n.useMemo)( () => eQ(c) ? c.get() : c, [c]);
                        return (0,
                        n.createElement)(e, {
                            ...u,
                            children: h
                        })
                    }(e, i, (o = m.visualElement,
                    (0,
                    n.useCallback)(e => {
                        e && p.onMount && p.onMount(e),
                        o && (e ? o.mount(e) : o.unmount()),
                        a && ("function" == typeof a ? a(e) : t8(a) && (a.current = e))
                    }
                    , [o])), p, d, t)]
                })
            }
            a.displayName = `motion.${"string" == typeof e ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
            let o = (0,
            n.forwardRef)(a);
            return o[t7] = e,
            o
        }
        function ii(e, t, i) {
            let s = e.getProps();
            return tw(s, t, void 0 !== i ? i : s.custom, e)
        }
        function is(e, t) {
            return e?.[t] ?? e?.default ?? e
        }
        let ir = e => Array.isArray(e);
        function ia(e, t) {
            let i = e.getValue("willChange");
            if (eQ(i) && i.add)
                return i.add(t);
            if (!i && ea.WillChange) {
                let i = new ea.WillChange("auto");
                e.addValue("willChange", i),
                i.add(t)
            }
        }
        function io(e) {
            e.duration = 0,
            e.type = "keyframes"
        }
        let il = (e, t) => i => t(e(i))
          , iu = (...e) => e.reduce(il)
          , ic = e => 1e3 * e
          , ih = e => e / 1e3
          , id = {
            layout: 0,
            mainThread: 0,
            waapi: 0
        };
        function im(e, t, i) {
            return (i < 0 && (i += 1),
            i > 1 && (i -= 1),
            i < 1 / 6) ? e + (t - e) * 6 * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
        }
        function ip(e, t) {
            return i => i > 0 ? t : e
        }
        let ig = (e, t, i) => {
            let s = e * e
              , n = i * (t * t - s) + s;
            return n < 0 ? 0 : Math.sqrt(n)
        }
          , iy = [eA, eM, eN]
          , iv = e => iy.find(t => t.test(e));
        function iw(e) {
            let t = iv(e);
            if (J(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
            !t)
                return !1;
            let i = t.parse(e);
            return t === eN && (i = function({hue: e, saturation: t, lightness: i, alpha: s}) {
                e /= 360,
                i /= 100;
                let n = 0
                  , r = 0
                  , a = 0;
                if (t /= 100) {
                    let s = i < .5 ? i * (1 + t) : i + t - i * t
                      , o = 2 * i - s;
                    n = im(o, s, e + 1 / 3),
                    r = im(o, s, e),
                    a = im(o, s, e - 1 / 3)
                } else
                    n = r = a = i;
                return {
                    red: Math.round(255 * n),
                    green: Math.round(255 * r),
                    blue: Math.round(255 * a),
                    alpha: s
                }
            }(i)),
            i
        }
        let ix = (e, t) => {
            let i = iw(e)
              , s = iw(t);
            if (!i || !s)
                return ip(e, t);
            let n = {
                ...i
            };
            return e => (n.red = ig(i.red, s.red, e),
            n.green = ig(i.green, s.green, e),
            n.blue = ig(i.blue, s.blue, e),
            n.alpha = j(i.alpha, s.alpha, e),
            eM.transform(n))
        }
          , iC = new Set(["none", "hidden"]);
        function ib(e, t) {
            return i => j(e, t, i)
        }
        function iL(e) {
            return "number" == typeof e ? ib : "string" == typeof e ? C(e) ? ip : eD.test(e) ? ix : ik : Array.isArray(e) ? ij : "object" == typeof e ? eD.test(e) ? ix : iT : ip
        }
        function ij(e, t) {
            let i = [...e]
              , s = i.length
              , n = e.map( (e, i) => iL(e)(e, t[i]));
            return e => {
                for (let t = 0; t < s; t++)
                    i[t] = n[t](e);
                return i
            }
        }
        function iT(e, t) {
            let i = {
                ...e,
                ...t
            }
              , s = {};
            for (let n in i)
                void 0 !== e[n] && void 0 !== t[n] && (s[n] = iL(e[n])(e[n], t[n]));
            return e => {
                for (let t in s)
                    i[t] = s[t](e);
                return i
            }
        }
        let ik = (e, t) => {
            let i = eZ.createTransformer(t)
              , s = eI(e)
              , n = eI(t);
            return s.indexes.var.length === n.indexes.var.length && s.indexes.color.length === n.indexes.color.length && s.indexes.number.length >= n.indexes.number.length ? iC.has(e) && !n.values.length || iC.has(t) && !s.values.length ? function(e, t) {
                return iC.has(e) ? i => i <= 0 ? e : t : i => i >= 1 ? t : e
            }(e, t) : iu(ij(function(e, t) {
                let i = []
                  , s = {
                    color: 0,
                    var: 0,
                    number: 0
                };
                for (let n = 0; n < t.values.length; n++) {
                    let r = t.types[n]
                      , a = e.indexes[r][s[r]]
                      , o = e.values[a] ?? 0;
                    i[n] = o,
                    s[r]++
                }
                return i
            }(s, n), n.values), i) : (J(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"),
            ip(e, t))
        }
        ;
        function iS(e, t, i) {
            return "number" == typeof e && "number" == typeof t && "number" == typeof i ? j(e, t, i) : iL(e)(e, t)
        }
        let iE = e => {
            let t = ({timestamp: t}) => e(t);
            return {
                start: (e=!0) => ec.update(t, e),
                stop: () => eh(t),
                now: () => ed.isProcessing ? ed.timestamp : e0.now()
            }
        }
          , iM = (e, t, i=10) => {
            let s = ""
              , n = Math.max(Math.round(t / i), 2);
            for (let t = 0; t < n; t++)
                s += Math.round(1e4 * e(t / (n - 1))) / 1e4 + ", ";
            return `linear(${s.substring(0, s.length - 2)})`
        }
        ;
        function iA(e) {
            let t = 0
              , i = e.next(t);
            for (; !i.done && t < 2e4; )
                t += 50,
                i = e.next(t);
            return t >= 2e4 ? 1 / 0 : t
        }
        function iN(e, t, i) {
            var s, n;
            let r = Math.max(t - 5, 0);
            return s = i - e(r),
            (n = t - r) ? 1e3 / n * s : 0
        }
        let iD = {
            stiffness: 100,
            damping: 10,
            mass: 1,
            velocity: 0,
            duration: 800,
            bounce: .3,
            visualDuration: .3,
            restSpeed: {
                granular: .01,
                default: 2
            },
            restDelta: {
                granular: .005,
                default: .5
            },
            minDuration: .01,
            maxDuration: 10,
            minDamping: .05,
            maxDamping: 1
        };
        function i_(e, t) {
            return e * Math.sqrt(1 - t * t)
        }
        let iV = ["duration", "bounce"]
          , iP = ["stiffness", "damping", "mass"];
        function iO(e, t) {
            return t.some(t => void 0 !== e[t])
        }
        function iI(e=iD.visualDuration, t=iD.bounce) {
            let i, s = "object" != typeof e ? {
                visualDuration: e,
                keyframes: [0, 1],
                bounce: t
            } : e, {restSpeed: n, restDelta: r} = s, a = s.keyframes[0], o = s.keyframes[s.keyframes.length - 1], l = {
                done: !1,
                value: a
            }, {stiffness: u, damping: c, mass: h, duration: d, velocity: m, isResolvedFromDuration: p} = function(e) {
                let t = {
                    velocity: iD.velocity,
                    stiffness: iD.stiffness,
                    damping: iD.damping,
                    mass: iD.mass,
                    isResolvedFromDuration: !1,
                    ...e
                };
                if (!iO(e, iP) && iO(e, iV))
                    if (e.visualDuration) {
                        let i = 2 * Math.PI / (1.2 * e.visualDuration)
                          , s = i * i
                          , n = 2 * I(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
                        t = {
                            ...t,
                            mass: iD.mass,
                            stiffness: s,
                            damping: n
                        }
                    } else {
                        let i = function({duration: e=iD.duration, bounce: t=iD.bounce, velocity: i=iD.velocity, mass: s=iD.mass}) {
                            let n, r;
                            J(e <= ic(iD.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                            let a = 1 - t;
                            a = I(iD.minDamping, iD.maxDamping, a),
                            e = I(iD.minDuration, iD.maxDuration, ih(e)),
                            a < 1 ? (n = t => {
                                let s = t * a
                                  , n = s * e;
                                return .001 - (s - i) / i_(t, a) * Math.exp(-n)
                            }
                            ,
                            r = t => {
                                let s = t * a * e
                                  , r = Math.pow(a, 2) * Math.pow(t, 2) * e
                                  , o = Math.exp(-s)
                                  , l = i_(Math.pow(t, 2), a);
                                return (s * i + i - r) * o * (-n(t) + .001 > 0 ? -1 : 1) / l
                            }
                            ) : (n = t => -.001 + Math.exp(-t * e) * ((t - i) * e + 1),
                            r = t => e * e * (i - t) * Math.exp(-t * e));
                            let o = function(e, t, i) {
                                let s = i;
                                for (let i = 1; i < 12; i++)
                                    s -= e(s) / t(s);
                                return s
                            }(n, r, 5 / e);
                            if (e = ic(e),
                            isNaN(o))
                                return {
                                    stiffness: iD.stiffness,
                                    damping: iD.damping,
                                    duration: e
                                };
                            {
                                let t = Math.pow(o, 2) * s;
                                return {
                                    stiffness: t,
                                    damping: 2 * a * Math.sqrt(s * t),
                                    duration: e
                                }
                            }
                        }(e);
                        (t = {
                            ...t,
                            ...i,
                            mass: iD.mass
                        }).isResolvedFromDuration = !0
                    }
                return t
            }({
                ...s,
                velocity: -ih(s.velocity || 0)
            }), f = m || 0, g = c / (2 * Math.sqrt(u * h)), y = o - a, v = ih(Math.sqrt(u / h)), w = 5 > Math.abs(y);
            if (n || (n = w ? iD.restSpeed.granular : iD.restSpeed.default),
            r || (r = w ? iD.restDelta.granular : iD.restDelta.default),
            g < 1) {
                let e = i_(v, g);
                i = t => o - Math.exp(-g * v * t) * ((f + g * v * y) / e * Math.sin(e * t) + y * Math.cos(e * t))
            } else if (1 === g)
                i = e => o - Math.exp(-v * e) * (y + (f + v * y) * e);
            else {
                let e = v * Math.sqrt(g * g - 1);
                i = t => {
                    let i = Math.exp(-g * v * t)
                      , s = Math.min(e * t, 300);
                    return o - i * ((f + g * v * y) * Math.sinh(s) + e * y * Math.cosh(s)) / e
                }
            }
            let x = {
                calculatedDuration: p && d || null,
                next: e => {
                    let t = i(e);
                    if (p)
                        l.done = e >= d;
                    else {
                        let s = 0 === e ? f : 0;
                        g < 1 && (s = 0 === e ? ic(f) : iN(i, e, t));
                        let a = Math.abs(o - t) <= r;
                        l.done = Math.abs(s) <= n && a
                    }
                    return l.value = l.done ? o : t,
                    l
                }
                ,
                toString: () => {
                    let e = Math.min(iA(x), 2e4)
                      , t = iM(t => x.next(e * t).value, e, 30);
                    return e + "ms " + t
                }
                ,
                toTransition: () => {}
            };
            return x
        }
        function iF({keyframes: e, velocity: t=0, power: i=.8, timeConstant: s=325, bounceDamping: n=10, bounceStiffness: r=500, modifyTarget: a, min: o, max: l, restDelta: u=.5, restSpeed: c}) {
            let h, d, m = e[0], p = {
                done: !1,
                value: m
            }, f = e => void 0 !== o && e < o || void 0 !== l && e > l, g = e => void 0 === o ? l : void 0 === l || Math.abs(o - e) < Math.abs(l - e) ? o : l, y = i * t, v = m + y, w = void 0 === a ? v : a(v);
            w !== v && (y = w - m);
            let x = e => -y * Math.exp(-e / s)
              , C = e => w + x(e)
              , b = e => {
                let t = x(e)
                  , i = C(e);
                p.done = Math.abs(t) <= u,
                p.value = p.done ? w : i
            }
              , L = e => {
                f(p.value) && (h = e,
                d = iI({
                    keyframes: [p.value, g(p.value)],
                    velocity: iN(C, e, p.value),
                    damping: n,
                    stiffness: r,
                    restDelta: u,
                    restSpeed: c
                }))
            }
            ;
            return L(0),
            {
                calculatedDuration: null,
                next: e => {
                    let t = !1;
                    return (d || void 0 !== h || (t = !0,
                    b(e),
                    L(e)),
                    void 0 !== h && e >= h) ? d.next(e - h) : (t || b(e),
                    p)
                }
            }
        }
        iI.applyToOptions = e => {
            let t = function(e, t=100, i) {
                let s = i({
                    ...e,
                    keyframes: [0, t]
                })
                  , n = Math.min(iA(s), 2e4);
                return {
                    type: "keyframes",
                    ease: e => s.next(n * e).value / t,
                    duration: ih(n)
                }
            }(e, 100, iI);
            return e.ease = t.ease,
            e.duration = ic(t.duration),
            e.type = "keyframes",
            e
        }
        ;
        let iR = (e, t, i) => (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e;
        function iB(e, t, i, s) {
            if (e === t && i === s)
                return er;
            let n = t => (function(e, t, i, s, n) {
                let r, a, o = 0;
                do
                    (r = iR(a = t + (i - t) / 2, s, n) - e) > 0 ? i = a : t = a;
                while (Math.abs(r) > 1e-7 && ++o < 12);
                return a
            }
            )(t, 0, 1, e, i);
            return e => 0 === e || 1 === e ? e : iR(n(e), t, s)
        }
        let iZ = iB(.42, 0, 1, 1)
          , iW = iB(0, 0, .58, 1)
          , iz = iB(.42, 0, .58, 1)
          , iU = e => Array.isArray(e) && "number" != typeof e[0]
          , iH = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
          , i$ = e => t => 1 - e(1 - t)
          , iq = iB(.33, 1.53, .69, .99)
          , iY = i$(iq)
          , iX = iH(iY)
          , iG = e => (e *= 2) < 1 ? .5 * iY(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
          , iJ = e => 1 - Math.sin(Math.acos(e))
          , iK = i$(iJ)
          , iQ = iH(iJ)
          , i1 = e => Array.isArray(e) && "number" == typeof e[0]
          , i0 = {
            linear: er,
            easeIn: iZ,
            easeInOut: iz,
            easeOut: iW,
            circIn: iJ,
            circInOut: iQ,
            circOut: iK,
            backIn: iY,
            backInOut: iX,
            backOut: iq,
            anticipate: iG
        }
          , i2 = e => "string" == typeof e
          , i5 = e => {
            if (i1(e)) {
                K(4 === e.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
                let[t,i,s,n] = e;
                return iB(t, i, s, n)
            }
            return i2(e) ? (K(void 0 !== i0[e], `Invalid easing type '${e}'`, "invalid-easing-type"),
            i0[e]) : e
        }
          , i3 = (e, t, i) => {
            let s = t - e;
            return 0 === s ? 1 : (i - e) / s
        }
        ;
        function i4({duration: e=300, keyframes: t, times: i, ease: s="easeInOut"}) {
            var n;
            let r = iU(s) ? s.map(i5) : i5(s)
              , a = {
                done: !1,
                value: t[0]
            }
              , o = function(e, t, {clamp: i=!0, ease: s, mixer: n}={}) {
                let r = e.length;
                if (K(r === t.length, "Both input and output ranges must be the same length", "range-length"),
                1 === r)
                    return () => t[0];
                if (2 === r && t[0] === t[1])
                    return () => t[1];
                let a = e[0] === e[1];
                e[0] > e[r - 1] && (e = [...e].reverse(),
                t = [...t].reverse());
                let o = function(e, t, i) {
                    let s = []
                      , n = i || ea.mix || iS
                      , r = e.length - 1;
                    for (let i = 0; i < r; i++) {
                        let r = n(e[i], e[i + 1]);
                        t && (r = iu(Array.isArray(t) ? t[i] || er : t, r)),
                        s.push(r)
                    }
                    return s
                }(t, s, n)
                  , l = o.length
                  , u = i => {
                    if (a && i < e[0])
                        return t[0];
                    let s = 0;
                    if (l > 1)
                        for (; s < e.length - 2 && !(i < e[s + 1]); s++)
                            ;
                    let n = i3(e[s], e[s + 1], i);
                    return o[s](n)
                }
                ;
                return i ? t => u(I(e[0], e[r - 1], t)) : u
            }((n = i && i.length === t.length ? i : function(e) {
                let t = [0];
                return !function(e, t) {
                    let i = e[e.length - 1];
                    for (let s = 1; s <= t; s++) {
                        let n = i3(0, t, s);
                        e.push(j(i, 1, n))
                    }
                }(t, e.length - 1),
                t
            }(t),
            n.map(t => t * e)), t, {
                ease: Array.isArray(r) ? r : t.map( () => r || iz).splice(0, t.length - 1)
            });
            return {
                calculatedDuration: e,
                next: t => (a.value = o(t),
                a.done = t >= e,
                a)
            }
        }
        let i7 = e => null !== e;
        function i8(e, {repeat: t, repeatType: i="loop"}, s, n=1) {
            let r = e.filter(i7)
              , a = n < 0 || t && "loop" !== i && t % 2 == 1 ? 0 : r.length - 1;
            return a && void 0 !== s ? s : r[a]
        }
        let i6 = {
            decay: iF,
            inertia: iF,
            tween: i4,
            keyframes: i4,
            spring: iI
        };
        function i9(e) {
            "string" == typeof e.type && (e.type = i6[e.type])
        }
        class se {
            constructor() {
                this.updateFinished()
            }
            get finished() {
                return this._finished
            }
            updateFinished() {
                this._finished = new Promise(e => {
                    this.resolve = e
                }
                )
            }
            notifyFinished() {
                this.resolve()
            }
            then(e, t) {
                return this.finished.then(e, t)
            }
        }
        let st = e => e / 100;
        class si extends se {
            constructor(e) {
                super(),
                this.state = "idle",
                this.startTime = null,
                this.isStopped = !1,
                this.currentTime = 0,
                this.holdTime = null,
                this.playbackSpeed = 1,
                this.stop = () => {
                    let {motionValue: e} = this.options;
                    e && e.updatedAt !== e0.now() && this.tick(e0.now()),
                    this.isStopped = !0,
                    "idle" !== this.state && (this.teardown(),
                    this.options.onStop?.())
                }
                ,
                id.mainThread++,
                this.options = e,
                this.initAnimation(),
                this.play(),
                !1 === e.autoplay && this.pause()
            }
            initAnimation() {
                let {options: e} = this;
                i9(e);
                let {type: t=i4, repeat: i=0, repeatDelay: s=0, repeatType: n, velocity: r=0} = e
                  , {keyframes: a} = e
                  , o = t || i4;
                o !== i4 && "number" != typeof a[0] && (this.mixKeyframes = iu(st, iS(a[0], a[1])),
                a = [0, 100]);
                let l = o({
                    ...e,
                    keyframes: a
                });
                "mirror" === n && (this.mirroredGenerator = o({
                    ...e,
                    keyframes: [...a].reverse(),
                    velocity: -r
                })),
                null === l.calculatedDuration && (l.calculatedDuration = iA(l));
                let {calculatedDuration: u} = l;
                this.calculatedDuration = u,
                this.resolvedDuration = u + s,
                this.totalDuration = this.resolvedDuration * (i + 1) - s,
                this.generator = l
            }
            updateTime(e) {
                let t = Math.round(e - this.startTime) * this.playbackSpeed;
                null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = t
            }
            tick(e, t=!1) {
                let {generator: i, totalDuration: s, mixKeyframes: n, mirroredGenerator: r, resolvedDuration: a, calculatedDuration: o} = this;
                if (null === this.startTime)
                    return i.next(0);
                let {delay: l=0, keyframes: u, repeat: c, repeatType: h, repeatDelay: d, type: m, onUpdate: p, finalKeyframe: f} = this.options;
                this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - s / this.speed, this.startTime)),
                t ? this.currentTime = e : this.updateTime(e);
                let g = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1)
                  , y = this.playbackSpeed >= 0 ? g < 0 : g > s;
                this.currentTime = Math.max(g, 0),
                "finished" === this.state && null === this.holdTime && (this.currentTime = s);
                let v = this.currentTime
                  , w = i;
                if (c) {
                    let e = Math.min(this.currentTime, s) / a
                      , t = Math.floor(e)
                      , i = e % 1;
                    !i && e >= 1 && (i = 1),
                    1 === i && t--,
                    (t = Math.min(t, c + 1)) % 2 && ("reverse" === h ? (i = 1 - i,
                    d && (i -= d / a)) : "mirror" === h && (w = r)),
                    v = I(0, 1, i) * a
                }
                let x = y ? {
                    done: !1,
                    value: u[0]
                } : w.next(v);
                n && (x.value = n(x.value));
                let {done: C} = x;
                y || null === o || (C = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
                let b = null === this.holdTime && ("finished" === this.state || "running" === this.state && C);
                return b && m !== iF && (x.value = i8(u, this.options, f, this.speed)),
                p && p(x.value),
                b && this.finish(),
                x
            }
            then(e, t) {
                return this.finished.then(e, t)
            }
            get duration() {
                return ih(this.calculatedDuration)
            }
            get iterationDuration() {
                let {delay: e=0} = this.options || {};
                return this.duration + ih(e)
            }
            get time() {
                return ih(this.currentTime)
            }
            set time(e) {
                e = ic(e),
                this.currentTime = e,
                null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed),
                this.driver?.start(!1)
            }
            get speed() {
                return this.playbackSpeed
            }
            set speed(e) {
                this.updateTime(e0.now());
                let t = this.playbackSpeed !== e;
                this.playbackSpeed = e,
                t && (this.time = ih(this.currentTime))
            }
            play() {
                if (this.isStopped)
                    return;
                let {driver: e=iE, startTime: t} = this.options;
                this.driver || (this.driver = e(e => this.tick(e))),
                this.options.onPlay?.();
                let i = this.driver.now();
                "finished" === this.state ? (this.updateFinished(),
                this.startTime = i) : null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = t ?? i),
                "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration),
                this.holdTime = null,
                this.state = "running",
                this.driver.start()
            }
            pause() {
                this.state = "paused",
                this.updateTime(e0.now()),
                this.holdTime = this.currentTime
            }
            complete() {
                "running" !== this.state && this.play(),
                this.state = "finished",
                this.holdTime = null
            }
            finish() {
                this.notifyFinished(),
                this.teardown(),
                this.state = "finished",
                this.options.onComplete?.()
            }
            cancel() {
                this.holdTime = null,
                this.startTime = 0,
                this.tick(0),
                this.teardown(),
                this.options.onCancel?.()
            }
            teardown() {
                this.state = "idle",
                this.stopDriver(),
                this.startTime = this.holdTime = null,
                id.mainThread--
            }
            stopDriver() {
                this.driver && (this.driver.stop(),
                this.driver = void 0)
            }
            sample(e) {
                return this.startTime = 0,
                this.tick(e, !0)
            }
            attachTimeline(e) {
                return this.options.allowFlatten && (this.options.type = "keyframes",
                this.options.ease = "linear",
                this.initAnimation()),
                this.driver?.stop(),
                e.observe(this)
            }
        }
        let ss = e => e.startsWith("--");
        function sn(e) {
            let t;
            return () => (void 0 === t && (t = e()),
            t)
        }
        let sr = sn( () => void 0 !== window.ScrollTimeline)
          , sa = {}
          , so = function(e, t) {
            let i = sn(e);
            return () => sa[t] ?? i()
        }( () => {
            try {
                document.createElement("div").animate({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch (e) {
                return !1
            }
            return !0
        }
        , "linearEasing")
          , sl = ([e,t,i,s]) => `cubic-bezier(${e}, ${t}, ${i}, ${s})`
          , su = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: sl([0, .65, .55, 1]),
            circOut: sl([.55, 0, 1, .45]),
            backIn: sl([.31, .01, .66, -.59]),
            backOut: sl([.33, 1.53, .69, .99])
        };
        function sc(e) {
            return "function" == typeof e && "applyToOptions"in e
        }
        class sh extends se {
            constructor(e) {
                if (super(),
                this.finishedTime = null,
                this.isStopped = !1,
                !e)
                    return;
                let {element: t, name: i, keyframes: s, pseudoElement: n, allowFlatten: r=!1, finalKeyframe: a, onComplete: o} = e;
                this.isPseudoElement = !!n,
                this.allowFlatten = r,
                this.options = e,
                K("string" != typeof e.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
                let l = function({type: e, ...t}) {
                    return sc(e) && so() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),
                    t.ease ?? (t.ease = "easeOut"),
                    t)
                }(e);
                this.animation = function(e, t, i, {delay: s=0, duration: n=300, repeat: r=0, repeatType: a="loop", ease: o="easeOut", times: l}={}, u) {
                    let c = {
                        [t]: i
                    };
                    l && (c.offset = l);
                    let h = function e(t, i) {
                        if (t)
                            return "function" == typeof t ? so() ? iM(t, i) : "ease-out" : i1(t) ? sl(t) : Array.isArray(t) ? t.map(t => e(t, i) || su.easeOut) : su[t]
                    }(o, n);
                    Array.isArray(h) && (c.easing = h),
                    el.value && id.waapi++;
                    let d = {
                        delay: s,
                        duration: n,
                        easing: Array.isArray(h) ? "linear" : h,
                        fill: "both",
                        iterations: r + 1,
                        direction: "reverse" === a ? "alternate" : "normal"
                    };
                    u && (d.pseudoElement = u);
                    let m = e.animate(c, d);
                    return el.value && m.finished.finally( () => {
                        id.waapi--
                    }
                    ),
                    m
                }(t, i, s, l, n),
                !1 === l.autoplay && this.animation.pause(),
                this.animation.onfinish = () => {
                    if (this.finishedTime = this.time,
                    !n) {
                        let e = i8(s, this.options, a, this.speed);
                        this.updateMotionValue ? this.updateMotionValue(e) : function(e, t, i) {
                            ss(t) ? e.style.setProperty(t, i) : e.style[t] = i
                        }(t, i, e),
                        this.animation.cancel()
                    }
                    o?.(),
                    this.notifyFinished()
                }
            }
            play() {
                this.isStopped || (this.animation.play(),
                "finished" === this.state && this.updateFinished())
            }
            pause() {
                this.animation.pause()
            }
            complete() {
                this.animation.finish?.()
            }
            cancel() {
                try {
                    this.animation.cancel()
                } catch (e) {}
            }
            stop() {
                if (this.isStopped)
                    return;
                this.isStopped = !0;
                let {state: e} = this;
                "idle" !== e && "finished" !== e && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
                this.isPseudoElement || this.cancel())
            }
            commitStyles() {
                this.isPseudoElement || this.animation.commitStyles?.()
            }
            get duration() {
                return ih(Number(this.animation.effect?.getComputedTiming?.().duration || 0))
            }
            get iterationDuration() {
                let {delay: e=0} = this.options || {};
                return this.duration + ih(e)
            }
            get time() {
                return ih(Number(this.animation.currentTime) || 0)
            }
            set time(e) {
                this.finishedTime = null,
                this.animation.currentTime = ic(e)
            }
            get speed() {
                return this.animation.playbackRate
            }
            set speed(e) {
                e < 0 && (this.finishedTime = null),
                this.animation.playbackRate = e
            }
            get state() {
                return null !== this.finishedTime ? "finished" : this.animation.playState
            }
            get startTime() {
                return Number(this.animation.startTime)
            }
            set startTime(e) {
                this.animation.startTime = e
            }
            attachTimeline({timeline: e, observe: t}) {
                return (this.allowFlatten && this.animation.effect?.updateTiming({
                    easing: "linear"
                }),
                this.animation.onfinish = null,
                e && sr()) ? (this.animation.timeline = e,
                er) : t(this)
            }
        }
        let sd = {
            anticipate: iG,
            backInOut: iX,
            circInOut: iQ
        };
        class sm extends sh {
            constructor(e) {
                !function(e) {
                    "string" == typeof e.ease && e.ease in sd && (e.ease = sd[e.ease])
                }(e),
                i9(e),
                super(e),
                e.startTime && (this.startTime = e.startTime),
                this.options = e
            }
            updateMotionValue(e) {
                let {motionValue: t, onUpdate: i, onComplete: s, element: n, ...r} = this.options;
                if (!t)
                    return;
                if (void 0 !== e)
                    return void t.set(e);
                let a = new si({
                    ...r,
                    autoplay: !1
                })
                  , o = ic(this.finishedTime ?? this.time);
                t.setWithVelocity(a.sample(o - 10).value, a.sample(o).value, 10),
                a.stop()
            }
        }
        let sp = (e, t) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (eZ.test(e) || "0" === e) && !e.startsWith("url("))
          , sf = new Set(["opacity", "clipPath", "filter", "transform"])
          , sg = sn( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
        class sy extends se {
            constructor({autoplay: e=!0, delay: t=0, type: i="keyframes", repeat: s=0, repeatDelay: n=0, repeatType: r="loop", keyframes: a, name: o, motionValue: l, element: u, ...c}) {
                super(),
                this.stop = () => {
                    this._animation && (this._animation.stop(),
                    this.stopTimeline?.()),
                    this.keyframeResolver?.cancel()
                }
                ,
                this.createdAt = e0.now();
                let h = {
                    autoplay: e,
                    delay: t,
                    type: i,
                    repeat: s,
                    repeatDelay: n,
                    repeatType: r,
                    name: o,
                    motionValue: l,
                    element: u,
                    ...c
                }
                  , d = u?.KeyframeResolver || ex;
                this.keyframeResolver = new d(a, (e, t, i) => this.onKeyframesResolved(e, t, h, !i),o,l,u),
                this.keyframeResolver?.scheduleResolve()
            }
            onKeyframesResolved(e, t, i, s) {
                this.keyframeResolver = void 0;
                let {name: n, type: r, velocity: a, delay: o, isHandoff: l, onUpdate: u} = i;
                this.resolvedAt = e0.now(),
                !function(e, t, i, s) {
                    let n = e[0];
                    if (null === n)
                        return !1;
                    if ("display" === t || "visibility" === t)
                        return !0;
                    let r = e[e.length - 1]
                      , a = sp(n, t)
                      , o = sp(r, t);
                    return J(a === o, `You are trying to animate ${t} from "${n}" to "${r}". "${a ? r : n}" is not an animatable value.`, "value-not-animatable"),
                    !!a && !!o && (function(e) {
                        let t = e[0];
                        if (1 === e.length)
                            return !0;
                        for (let i = 0; i < e.length; i++)
                            if (e[i] !== t)
                                return !0
                    }(e) || ("spring" === i || sc(i)) && s)
                }(e, n, r, a) && ((ea.instantAnimations || !o) && u?.(i8(e, i, t)),
                e[0] = e[e.length - 1],
                io(i),
                i.repeat = 0);
                let c = {
                    startTime: s ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                    finalKeyframe: t,
                    ...i,
                    keyframes: e
                }
                  , h = !l && function(e) {
                    let {motionValue: t, name: i, repeatDelay: s, repeatType: n, damping: r, type: a} = e;
                    if (!(t?.owner?.current instanceof HTMLElement))
                        return !1;
                    let {onUpdate: o, transformTemplate: l} = t.owner.getProps();
                    return sg() && i && sf.has(i) && ("transform" !== i || !l) && !o && !s && "mirror" !== n && 0 !== r && "inertia" !== a
                }(c) ? new sm({
                    ...c,
                    element: c.motionValue.owner.current
                }) : new si(c);
                h.finished.then( () => this.notifyFinished()).catch(er),
                this.pendingTimeline && (this.stopTimeline = h.attachTimeline(this.pendingTimeline),
                this.pendingTimeline = void 0),
                this._animation = h
            }
            get finished() {
                return this._animation ? this.animation.finished : this._finished
            }
            then(e, t) {
                return this.finished.finally(e).then( () => {}
                )
            }
            get animation() {
                return this._animation || (this.keyframeResolver?.resume(),
                ey = !0,
                ew(),
                ev(),
                ey = !1),
                this._animation
            }
            get duration() {
                return this.animation.duration
            }
            get iterationDuration() {
                return this.animation.iterationDuration
            }
            get time() {
                return this.animation.time
            }
            set time(e) {
                this.animation.time = e
            }
            get speed() {
                return this.animation.speed
            }
            get state() {
                return this.animation.state
            }
            set speed(e) {
                this.animation.speed = e
            }
            get startTime() {
                return this.animation.startTime
            }
            attachTimeline(e) {
                return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e,
                () => this.stop()
            }
            play() {
                this.animation.play()
            }
            pause() {
                this.animation.pause()
            }
            complete() {
                this.animation.complete()
            }
            cancel() {
                this._animation && this.animation.cancel(),
                this.keyframeResolver?.cancel()
            }
        }
        let sv = e => null !== e
          , sw = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        }
          , sx = e => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === e ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , sC = {
            type: "keyframes",
            duration: .8
        }
          , sb = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        }
          , sL = (e, {keyframes: t}) => t.length > 2 ? sC : a.has(e) ? e.startsWith("scale") ? sx(t[1]) : sw : sb
          , sj = (e, t, i, s={}, n, r) => a => {
            let o = is(s, e) || {}
              , l = o.delay || s.delay || 0
              , {elapsed: u=0} = s;
            u -= ic(l);
            let c = {
                keyframes: Array.isArray(i) ? i : [null, i],
                ease: "easeOut",
                velocity: t.getVelocity(),
                ...o,
                delay: -u,
                onUpdate: e => {
                    t.set(e),
                    o.onUpdate && o.onUpdate(e)
                }
                ,
                onComplete: () => {
                    a(),
                    o.onComplete && o.onComplete()
                }
                ,
                name: e,
                motionValue: t,
                element: r ? void 0 : n
            };
            !function({when: e, delay: t, delayChildren: i, staggerChildren: s, staggerDirection: n, repeat: r, repeatType: a, repeatDelay: o, from: l, elapsed: u, ...c}) {
                return !!Object.keys(c).length
            }(o) && Object.assign(c, sL(e, c)),
            c.duration && (c.duration = ic(c.duration)),
            c.repeatDelay && (c.repeatDelay = ic(c.repeatDelay)),
            void 0 !== c.from && (c.keyframes[0] = c.from);
            let h = !1;
            if (!1 !== c.type && (0 !== c.duration || c.repeatDelay) || (io(c),
            0 === c.delay && (h = !0)),
            (ea.instantAnimations || ea.skipAnimations) && (h = !0,
            io(c),
            c.delay = 0),
            c.allowFlatten = !o.type && !o.ease,
            h && !r && void 0 !== t.get()) {
                let e = function(e, {repeat: t, repeatType: i="loop"}, s) {
                    let n = e.filter(sv)
                      , r = t && "loop" !== i && t % 2 == 1 ? 0 : n.length - 1;
                    return n[r]
                }(c.keyframes, o);
                if (void 0 !== e)
                    return void ec.update( () => {
                        c.onUpdate(e),
                        c.onComplete()
                    }
                    )
            }
            return o.isSync ? new si(c) : new sy(c)
        }
        ;
        function sT(e, t, {delay: i=0, transitionOverride: s, type: n}={}) {
            let {transition: r=e.getDefaultTransition(), transitionEnd: a, ...o} = t;
            s && (r = s);
            let l = []
              , u = n && e.animationState && e.animationState.getState()[n];
            for (let t in o) {
                let s = e.getValue(t, e.latestValues[t] ?? null)
                  , n = o[t];
                if (void 0 === n || u && function({protectedKeys: e, needsAnimating: t}, i) {
                    let s = e.hasOwnProperty(i) && !0 !== t[i];
                    return t[i] = !1,
                    s
                }(u, t))
                    continue;
                let a = {
                    delay: i,
                    ...is(r || {}, t)
                }
                  , c = s.get();
                if (void 0 !== c && !s.isAnimating && !Array.isArray(n) && n === c && !a.velocity)
                    continue;
                let h = !1;
                if (window.MotionHandoffAnimation) {
                    let i = e.props[t6];
                    if (i) {
                        let e = window.MotionHandoffAnimation(i, t, ec);
                        null !== e && (a.startTime = e,
                        h = !0)
                    }
                }
                ia(e, t),
                s.start(sj(t, s, n, e.shouldReduceMotion && O.has(t) ? {
                    type: !1
                } : a, e, h));
                let d = s.animation;
                d && l.push(d)
            }
            return a && Promise.all(l).then( () => {
                ec.update( () => {
                    a && function(e, t) {
                        let {transitionEnd: i={}, transition: s={}, ...n} = ii(e, t) || {};
                        for (let t in n = {
                            ...n,
                            ...i
                        }) {
                            var r;
                            let i = ir(r = n[t]) ? r[r.length - 1] || 0 : r;
                            e.hasValue(t) ? e.getValue(t).set(i) : e.addValue(t, e6(i))
                        }
                    }(e, a)
                }
                )
            }
            ),
            l
        }
        function sk(e, t, i, s=0, n=1) {
            let r = Array.from(e).sort( (e, t) => e.sortNodePosition(t)).indexOf(t)
              , a = e.size
              , o = (a - 1) * s;
            return "function" == typeof i ? i(r, a) : 1 === n ? r * s : o - r * s
        }
        function sS(e, t, i={}) {
            let s = ii(e, t, "exit" === i.type ? e.presenceContext?.custom : void 0)
              , {transition: n=e.getDefaultTransition() || {}} = s || {};
            i.transitionOverride && (n = i.transitionOverride);
            let r = s ? () => Promise.all(sT(e, s, i)) : () => Promise.resolve()
              , a = e.variantChildren && e.variantChildren.size ? (s=0) => {
                let {delayChildren: r=0, staggerChildren: a, staggerDirection: o} = n;
                return function(e, t, i=0, s=0, n=0, r=1, a) {
                    let o = [];
                    for (let l of e.variantChildren)
                        l.notify("AnimationStart", t),
                        o.push(sS(l, t, {
                            ...a,
                            delay: i + ("function" == typeof s ? 0 : s) + sk(e.variantChildren, l, s, n, r)
                        }).then( () => l.notify("AnimationComplete", t)));
                    return Promise.all(o)
                }(e, t, s, r, a, o, i)
            }
            : () => Promise.resolve()
              , {when: o} = n;
            if (!o)
                return Promise.all([r(), a(i.delay)]);
            {
                let[e,t] = "beforeChildren" === o ? [r, a] : [a, r];
                return e().then( () => t())
            }
        }
        function sE(e, t) {
            if (!Array.isArray(t))
                return !1;
            let i = t.length;
            if (i !== e.length)
                return !1;
            for (let s = 0; s < i; s++)
                if (t[s] !== e[s])
                    return !1;
            return !0
        }
        let sM = tf.length
          , sA = [...tp].reverse()
          , sN = tp.length;
        function sD(e=!1) {
            return {
                isActive: e,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        function s_() {
            return {
                animate: sD(!0),
                whileInView: sD(),
                whileHover: sD(),
                whileTap: sD(),
                whileDrag: sD(),
                whileFocus: sD(),
                exit: sD()
            }
        }
        class sV {
            constructor(e) {
                this.isMounted = !1,
                this.node = e
            }
            update() {}
        }
        class sP extends sV {
            constructor(e) {
                super(e),
                e.animationState || (e.animationState = function(e) {
                    let t = t => Promise.all(t.map( ({animation: t, options: i}) => (function(e, t, i={}) {
                        let s;
                        if (e.notify("AnimationStart", t),
                        Array.isArray(t))
                            s = Promise.all(t.map(t => sS(e, t, i)));
                        else if ("string" == typeof t)
                            s = sS(e, t, i);
                        else {
                            let n = "function" == typeof t ? ii(e, t, i.custom) : t;
                            s = Promise.all(sT(e, n, i))
                        }
                        return s.then( () => {
                            e.notify("AnimationComplete", t)
                        }
                        )
                    }
                    )(e, t, i)))
                      , i = s_()
                      , s = !0
                      , n = t => (i, s) => {
                        let n = ii(e, s, "exit" === t ? e.presenceContext?.custom : void 0);
                        if (n) {
                            let {transition: e, transitionEnd: t, ...s} = n;
                            i = {
                                ...i,
                                ...s,
                                ...t
                            }
                        }
                        return i
                    }
                    ;
                    function r(r) {
                        let {props: a} = e
                          , o = function e(t) {
                            if (!t)
                                return;
                            if (!t.isControllingVariants) {
                                let i = t.parent && e(t.parent) || {};
                                return void 0 !== t.props.initial && (i.initial = t.props.initial),
                                i
                            }
                            let i = {};
                            for (let e = 0; e < sM; e++) {
                                let s = tf[e]
                                  , n = t.props[s];
                                (tm(n) || !1 === n) && (i[s] = n)
                            }
                            return i
                        }(e.parent) || {}
                          , l = []
                          , u = new Set
                          , c = {}
                          , h = 1 / 0;
                        for (let t = 0; t < sN; t++) {
                            var d, m;
                            let p = sA[t]
                              , f = i[p]
                              , g = void 0 !== a[p] ? a[p] : o[p]
                              , y = tm(g)
                              , v = p === r ? f.isActive : null;
                            !1 === v && (h = t);
                            let w = g === o[p] && g !== a[p] && y;
                            if (w && s && e.manuallyAnimateOnMount && (w = !1),
                            f.protectedKeys = {
                                ...c
                            },
                            !f.isActive && null === v || !g && !f.prevProp || td(g) || "boolean" == typeof g)
                                continue;
                            let x = (d = f.prevProp,
                            "string" == typeof (m = g) ? m !== d : !!Array.isArray(m) && !sE(m, d))
                              , C = x || p === r && f.isActive && !w && y || t > h && y
                              , b = !1
                              , L = Array.isArray(g) ? g : [g]
                              , j = L.reduce(n(p), {});
                            !1 === v && (j = {});
                            let {prevResolvedValues: T={}} = f
                              , k = {
                                ...T,
                                ...j
                            }
                              , S = t => {
                                C = !0,
                                u.has(t) && (b = !0,
                                u.delete(t)),
                                f.needsAnimating[t] = !0;
                                let i = e.getValue(t);
                                i && (i.liveStyle = !1)
                            }
                            ;
                            for (let e in k) {
                                let t = j[e]
                                  , i = T[e];
                                if (c.hasOwnProperty(e))
                                    continue;
                                let s = !1;
                                (ir(t) && ir(i) ? sE(t, i) : t === i) ? void 0 !== t && u.has(e) ? S(e) : f.protectedKeys[e] = !0 : null != t ? S(e) : u.add(e)
                            }
                            f.prevProp = g,
                            f.prevResolvedValues = j,
                            f.isActive && (c = {
                                ...c,
                                ...j
                            }),
                            s && e.blockInitialAnimation && (C = !1);
                            let E = w && x
                              , M = !E || b;
                            C && M && l.push(...L.map(t => {
                                let i = {
                                    type: p
                                };
                                if ("string" == typeof t && s && !E && e.manuallyAnimateOnMount && e.parent) {
                                    let {parent: s} = e
                                      , n = ii(s, t);
                                    if (s.enteringChildren && n) {
                                        let {delayChildren: t} = n.transition || {};
                                        i.delay = sk(s.enteringChildren, e, t)
                                    }
                                }
                                return {
                                    animation: t,
                                    options: i
                                }
                            }
                            ))
                        }
                        if (u.size) {
                            let t = {};
                            if ("boolean" != typeof a.initial) {
                                let i = ii(e, Array.isArray(a.initial) ? a.initial[0] : a.initial);
                                i && i.transition && (t.transition = i.transition)
                            }
                            u.forEach(i => {
                                let s = e.getBaseTarget(i)
                                  , n = e.getValue(i);
                                n && (n.liveStyle = !0),
                                t[i] = s ?? null
                            }
                            ),
                            l.push({
                                animation: t
                            })
                        }
                        let p = !!l.length;
                        return s && (!1 === a.initial || a.initial === a.animate) && !e.manuallyAnimateOnMount && (p = !1),
                        s = !1,
                        p ? t(l) : Promise.resolve()
                    }
                    return {
                        animateChanges: r,
                        setActive: function(t, s) {
                            if (i[t].isActive === s)
                                return Promise.resolve();
                            e.variantChildren?.forEach(e => e.animationState?.setActive(t, s)),
                            i[t].isActive = s;
                            let n = r(t);
                            for (let e in i)
                                i[e].protectedKeys = {};
                            return n
                        },
                        setAnimateFunction: function(i) {
                            t = i(e)
                        },
                        getState: () => i,
                        reset: () => {
                            i = s_()
                        }
                    }
                }(e))
            }
            updateAnimationControlsSubscription() {
                let {animate: e} = this.node.getProps();
                td(e) && (this.unmountControls = e.subscribe(this.node))
            }
            mount() {
                this.updateAnimationControlsSubscription()
            }
            update() {
                let {animate: e} = this.node.getProps()
                  , {animate: t} = this.node.prevProps || {};
                e !== t && this.updateAnimationControlsSubscription()
            }
            unmount() {
                this.node.animationState.reset(),
                this.unmountControls?.()
            }
        }
        let sO = 0;
        class sI extends sV {
            constructor() {
                super(...arguments),
                this.id = sO++
            }
            update() {
                if (!this.node.presenceContext)
                    return;
                let {isPresent: e, onExitComplete: t} = this.node.presenceContext
                  , {isPresent: i} = this.node.prevPresenceContext || {};
                if (!this.node.animationState || e === i)
                    return;
                let s = this.node.animationState.setActive("exit", !e);
                t && !e && s.then( () => {
                    t(this.id)
                }
                )
            }
            mount() {
                let {register: e, onExitComplete: t} = this.node.presenceContext || {};
                t && t(this.id),
                e && (this.unmount = e(this.id))
            }
            unmount() {}
        }
        let sF = {
            x: !1,
            y: !1
        };
        function sR(e, t, i, s={
            passive: !0
        }) {
            return e.addEventListener(t, i, s),
            () => e.removeEventListener(t, i)
        }
        let sB = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;
        function sZ(e) {
            return {
                point: {
                    x: e.pageX,
                    y: e.pageY
                }
            }
        }
        let sW = e => t => sB(t) && e(t, sZ(t));
        function sz(e, t, i, s) {
            return sR(e, t, sW(i), s)
        }
        function sU(e) {
            return e.max - e.min
        }
        function sH(e, t, i, s=.5) {
            e.origin = s,
            e.originPoint = j(t.min, t.max, e.origin),
            e.scale = sU(i) / sU(t),
            e.translate = j(i.min, i.max, e.origin) - e.originPoint,
            (e.scale >= .9999 && e.scale <= 1.0001 || isNaN(e.scale)) && (e.scale = 1),
            (e.translate >= -.01 && e.translate <= .01 || isNaN(e.translate)) && (e.translate = 0)
        }
        function s$(e, t, i, s) {
            sH(e.x, t.x, i.x, s ? s.originX : void 0),
            sH(e.y, t.y, i.y, s ? s.originY : void 0)
        }
        function sq(e, t, i) {
            e.min = i.min + t.min,
            e.max = e.min + sU(t)
        }
        function sY(e, t, i) {
            e.min = t.min - i.min,
            e.max = e.min + sU(t)
        }
        function sX(e, t, i) {
            sY(e.x, t.x, i.x),
            sY(e.y, t.y, i.y)
        }
        function sG(e) {
            return [e("x"), e("y")]
        }
        let sJ = ({current: e}) => e ? e.ownerDocument.defaultView : null
          , sK = (e, t) => Math.abs(e - t);
        class sQ {
            constructor(e, t, {transformPagePoint: i, contextWindow: s=window, dragSnapToOrigin: n=!1, distanceThreshold: r=3}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.contextWindow = window,
                this.updatePoint = () => {
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let e = s2(this.lastMoveEventInfo, this.history)
                      , t = null !== this.startEvent
                      , i = function(e, t) {
                        return Math.sqrt(sK(e.x, t.x) ** 2 + sK(e.y, t.y) ** 2)
                    }(e.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                    if (!t && !i)
                        return;
                    let {point: s} = e
                      , {timestamp: n} = ed;
                    this.history.push({
                        ...s,
                        timestamp: n
                    });
                    let {onStart: r, onMove: a} = this.handlers;
                    t || (r && r(this.lastMoveEvent, e),
                    this.startEvent = this.lastMoveEvent),
                    a && a(this.lastMoveEvent, e)
                }
                ,
                this.handlePointerMove = (e, t) => {
                    this.lastMoveEvent = e,
                    this.lastMoveEventInfo = s1(t, this.transformPagePoint),
                    ec.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (e, t) => {
                    this.end();
                    let {onEnd: i, onSessionEnd: s, resumeAnimation: n} = this.handlers;
                    if (this.dragSnapToOrigin && n && n(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let r = s2("pointercancel" === e.type ? this.lastMoveEventInfo : s1(t, this.transformPagePoint), this.history);
                    this.startEvent && i && i(e, r),
                    s && s(e, r)
                }
                ,
                !sB(e))
                    return;
                this.dragSnapToOrigin = n,
                this.handlers = t,
                this.transformPagePoint = i,
                this.distanceThreshold = r,
                this.contextWindow = s || window;
                let a = s1(sZ(e), this.transformPagePoint)
                  , {point: o} = a
                  , {timestamp: l} = ed;
                this.history = [{
                    ...o,
                    timestamp: l
                }];
                let {onSessionStart: u} = t;
                u && u(e, s2(a, this.history)),
                this.removeListeners = iu(sz(this.contextWindow, "pointermove", this.handlePointerMove), sz(this.contextWindow, "pointerup", this.handlePointerUp), sz(this.contextWindow, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(e) {
                this.handlers = e
            }
            end() {
                this.removeListeners && this.removeListeners(),
                eh(this.updatePoint)
            }
        }
        function s1(e, t) {
            return t ? {
                point: t(e.point)
            } : e
        }
        function s0(e, t) {
            return {
                x: e.x - t.x,
                y: e.y - t.y
            }
        }
        function s2({point: e}, t) {
            return {
                point: e,
                delta: s0(e, s5(t)),
                offset: s0(e, t[0]),
                velocity: function(e, t) {
                    if (e.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let i = e.length - 1
                      , s = null
                      , n = s5(e);
                    for (; i >= 0 && (s = e[i],
                    !(n.timestamp - s.timestamp > ic(.1))); )
                        i--;
                    if (!s)
                        return {
                            x: 0,
                            y: 0
                        };
                    let r = ih(n.timestamp - s.timestamp);
                    if (0 === r)
                        return {
                            x: 0,
                            y: 0
                        };
                    let a = {
                        x: (n.x - s.x) / r,
                        y: (n.y - s.y) / r
                    };
                    return a.x === 1 / 0 && (a.x = 0),
                    a.y === 1 / 0 && (a.y = 0),
                    a
                }(t, .1)
            }
        }
        function s5(e) {
            return e[e.length - 1]
        }
        function s3(e, t, i) {
            return {
                min: void 0 !== t ? e.min + t : void 0,
                max: void 0 !== i ? e.max + i - (e.max - e.min) : void 0
            }
        }
        function s4(e, t) {
            let i = t.min - e.min
              , s = t.max - e.max;
            return t.max - t.min < e.max - e.min && ([i,s] = [s, i]),
            {
                min: i,
                max: s
            }
        }
        function s7(e, t, i) {
            return {
                min: s8(e, t),
                max: s8(e, i)
            }
        }
        function s8(e, t) {
            return "number" == typeof e ? e : e[t] || 0
        }
        let s6 = new WeakMap;
        class s9 {
            constructor(e) {
                this.openDragLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = to(),
                this.latestPointerEvent = null,
                this.latestPanInfo = null,
                this.visualElement = e
            }
            start(e, {snapToCursor: t=!1, distanceThreshold: i}={}) {
                let {presenceContext: s} = this.visualElement;
                if (s && !1 === s.isPresent)
                    return;
                let {dragSnapToOrigin: n} = this.getProps();
                this.panSession = new sQ(e,{
                    onSessionStart: e => {
                        let {dragSnapToOrigin: i} = this.getProps();
                        i ? this.pauseAnimation() : this.stopAnimation(),
                        t && this.snapToCursor(sZ(e).point)
                    }
                    ,
                    onStart: (e, t) => {
                        let {drag: i, dragPropagation: s, onDragStart: n} = this.getProps();
                        if (i && !s && (this.openDragLock && this.openDragLock(),
                        this.openDragLock = function(e) {
                            if ("x" === e || "y" === e)
                                if (sF[e])
                                    return null;
                                else
                                    return sF[e] = !0,
                                    () => {
                                        sF[e] = !1
                                    }
                                    ;
                            return sF.x || sF.y ? null : (sF.x = sF.y = !0,
                            () => {
                                sF.x = sF.y = !1
                            }
                            )
                        }(i),
                        !this.openDragLock))
                            return;
                        this.latestPointerEvent = e,
                        this.latestPanInfo = t,
                        this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        sG(e => {
                            let t = this.getAxisMotionValue(e).get() || 0;
                            if (z.test(t)) {
                                let {projection: i} = this.visualElement;
                                if (i && i.layout) {
                                    let s = i.layout.layoutBox[e];
                                    s && (t = sU(s) * (parseFloat(t) / 100))
                                }
                            }
                            this.originPoint[e] = t
                        }
                        ),
                        n && ec.postRender( () => n(e, t)),
                        ia(this.visualElement, "transform");
                        let {animationState: r} = this.visualElement;
                        r && r.setActive("whileDrag", !0)
                    }
                    ,
                    onMove: (e, t) => {
                        this.latestPointerEvent = e,
                        this.latestPanInfo = t;
                        let {dragPropagation: i, dragDirectionLock: s, onDirectionLock: n, onDrag: r} = this.getProps();
                        if (!i && !this.openDragLock)
                            return;
                        let {offset: a} = t;
                        if (s && null === this.currentDirection) {
                            this.currentDirection = function(e, t=10) {
                                let i = null;
                                return Math.abs(e.y) > t ? i = "y" : Math.abs(e.x) > t && (i = "x"),
                                i
                            }(a),
                            null !== this.currentDirection && n && n(this.currentDirection);
                            return
                        }
                        this.updateAxis("x", t.point, a),
                        this.updateAxis("y", t.point, a),
                        this.visualElement.render(),
                        r && r(e, t)
                    }
                    ,
                    onSessionEnd: (e, t) => {
                        this.latestPointerEvent = e,
                        this.latestPanInfo = t,
                        this.stop(e, t),
                        this.latestPointerEvent = null,
                        this.latestPanInfo = null
                    }
                    ,
                    resumeAnimation: () => sG(e => "paused" === this.getAnimationState(e) && this.getAxisMotionValue(e).animation?.play())
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint(),
                    dragSnapToOrigin: n,
                    distanceThreshold: i,
                    contextWindow: sJ(this.visualElement)
                })
            }
            stop(e, t) {
                let i = e || this.latestPointerEvent
                  , s = t || this.latestPanInfo
                  , n = this.isDragging;
                if (this.cancel(),
                !n || !s || !i)
                    return;
                let {velocity: r} = s;
                this.startAnimation(r);
                let {onDragEnd: a} = this.getProps();
                a && ec.postRender( () => a(i, s))
            }
            cancel() {
                this.isDragging = !1;
                let {projection: e, animationState: t} = this.visualElement;
                e && (e.isAnimationBlocked = !1),
                this.panSession && this.panSession.end(),
                this.panSession = void 0;
                let {dragPropagation: i} = this.getProps();
                !i && this.openDragLock && (this.openDragLock(),
                this.openDragLock = null),
                t && t.setActive("whileDrag", !1)
            }
            updateAxis(e, t, i) {
                let {drag: s} = this.getProps();
                if (!i || !ne(e, s, this.currentDirection))
                    return;
                let n = this.getAxisMotionValue(e)
                  , r = this.originPoint[e] + i[e];
                this.constraints && this.constraints[e] && (r = function(e, {min: t, max: i}, s) {
                    return void 0 !== t && e < t ? e = s ? j(t, e, s.min) : Math.max(e, t) : void 0 !== i && e > i && (e = s ? j(i, e, s.max) : Math.min(e, i)),
                    e
                }(r, this.constraints[e], this.elastic[e])),
                n.set(r)
            }
            resolveConstraints() {
                let {dragConstraints: e, dragElastic: t} = this.getProps()
                  , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout
                  , s = this.constraints;
                e && t8(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && i ? this.constraints = function(e, {top: t, left: i, bottom: s, right: n}) {
                    return {
                        x: s3(e.x, i, n),
                        y: s3(e.y, t, s)
                    }
                }(i.layoutBox, e) : this.constraints = !1,
                this.elastic = function(e=.35) {
                    return !1 === e ? e = 0 : !0 === e && (e = .35),
                    {
                        x: s7(e, "left", "right"),
                        y: s7(e, "top", "bottom")
                    }
                }(t),
                s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && sG(e => {
                    !1 !== this.constraints && this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
                        let i = {};
                        return void 0 !== t.min && (i.min = t.min - e.min),
                        void 0 !== t.max && (i.max = t.max - e.min),
                        i
                    }(i.layoutBox[e], this.constraints[e]))
                }
                )
            }
            resolveRefConstraints() {
                var e;
                let {dragConstraints: t, onMeasureDragConstraints: i} = this.getProps();
                if (!t || !t8(t))
                    return !1;
                let s = t.current;
                K(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
                let {projection: n} = this.visualElement;
                if (!n || !n.layout)
                    return !1;
                let r = function(e, t, i) {
                    let s = P(e, i)
                      , {scroll: n} = t;
                    return n && (D(s.x, n.offset.x),
                    D(s.y, n.offset.y)),
                    s
                }(s, n.root, this.visualElement.getTransformPagePoint())
                  , a = (e = n.layout.layoutBox,
                {
                    x: s4(e.x, r.x),
                    y: s4(e.y, r.y)
                });
                if (i) {
                    let e = i(function({x: e, y: t}) {
                        return {
                            top: t.min,
                            right: e.max,
                            bottom: t.max,
                            left: e.min
                        }
                    }(a));
                    this.hasMutatedConstraints = !!e,
                    e && (a = L(e))
                }
                return a
            }
            startAnimation(e) {
                let {drag: t, dragMomentum: i, dragElastic: s, dragTransition: n, dragSnapToOrigin: r, onDragTransitionEnd: a} = this.getProps()
                  , o = this.constraints || {};
                return Promise.all(sG(a => {
                    if (!ne(a, t, this.currentDirection))
                        return;
                    let l = o && o[a] || {};
                    r && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: i ? e[a] : 0,
                        bounceStiffness: s ? 200 : 1e6,
                        bounceDamping: s ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...n,
                        ...l
                    };
                    return this.startAxisValueAnimation(a, u)
                }
                )).then(a)
            }
            startAxisValueAnimation(e, t) {
                let i = this.getAxisMotionValue(e);
                return ia(this.visualElement, e),
                i.start(sj(e, i, 0, t, this.visualElement, !1))
            }
            stopAnimation() {
                sG(e => this.getAxisMotionValue(e).stop())
            }
            pauseAnimation() {
                sG(e => this.getAxisMotionValue(e).animation?.pause())
            }
            getAnimationState(e) {
                return this.getAxisMotionValue(e).animation?.state
            }
            getAxisMotionValue(e) {
                let t = `_drag${e.toUpperCase()}`
                  , i = this.visualElement.getProps();
                return i[t] || this.visualElement.getValue(e, (i.initial ? i.initial[e] : void 0) || 0)
            }
            snapToCursor(e) {
                sG(t => {
                    let {drag: i} = this.getProps();
                    if (!ne(t, i, this.currentDirection))
                        return;
                    let {projection: s} = this.visualElement
                      , n = this.getAxisMotionValue(t);
                    if (s && s.layout) {
                        let {min: i, max: r} = s.layout.layoutBox[t];
                        n.set(e[t] - j(i, r, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                if (!this.visualElement.current)
                    return;
                let {drag: e, dragConstraints: t} = this.getProps()
                  , {projection: i} = this.visualElement;
                if (!t8(t) || !i || !this.constraints)
                    return;
                this.stopAnimation();
                let s = {
                    x: 0,
                    y: 0
                };
                sG(e => {
                    let t = this.getAxisMotionValue(e);
                    if (t && !1 !== this.constraints) {
                        let i = t.get();
                        s[e] = function(e, t) {
                            let i = .5
                              , s = sU(e)
                              , n = sU(t);
                            return n > s ? i = i3(t.min, t.max - s, e.min) : s > n && (i = i3(e.min, e.max - n, t.min)),
                            I(0, 1, i)
                        }({
                            min: i,
                            max: i
                        }, this.constraints[e])
                    }
                }
                );
                let {transformTemplate: n} = this.visualElement.getProps();
                this.visualElement.current.style.transform = n ? n({}, "") : "none",
                i.root && i.root.updateScroll(),
                i.updateLayout(),
                this.resolveConstraints(),
                sG(t => {
                    if (!ne(t, e, null))
                        return;
                    let i = this.getAxisMotionValue(t)
                      , {min: n, max: r} = this.constraints[t];
                    i.set(j(n, r, s[t]))
                }
                )
            }
            addListeners() {
                if (!this.visualElement.current)
                    return;
                s6.set(this.visualElement, this);
                let e = sz(this.visualElement.current, "pointerdown", e => {
                    let {drag: t, dragListener: i=!0} = this.getProps();
                    t && i && this.start(e)
                }
                )
                  , t = () => {
                    let {dragConstraints: e} = this.getProps();
                    t8(e) && e.current && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: i} = this.visualElement
                  , s = i.addEventListener("measure", t);
                i && !i.layout && (i.root && i.root.updateScroll(),
                i.updateLayout()),
                ec.read(t);
                let n = sR(window, "resize", () => this.scalePositionWithinConstraints())
                  , r = i.addEventListener("didUpdate", ({delta: e, hasLayoutChanged: t}) => {
                    this.isDragging && t && (sG(t => {
                        let i = this.getAxisMotionValue(t);
                        i && (this.originPoint[t] += e[t].translate,
                        i.set(i.get() + e[t].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return () => {
                    n(),
                    e(),
                    s(),
                    r && r()
                }
            }
            getProps() {
                let e = this.visualElement.getProps()
                  , {drag: t=!1, dragDirectionLock: i=!1, dragPropagation: s=!1, dragConstraints: n=!1, dragElastic: r=.35, dragMomentum: a=!0} = e;
                return {
                    ...e,
                    drag: t,
                    dragDirectionLock: i,
                    dragPropagation: s,
                    dragConstraints: n,
                    dragElastic: r,
                    dragMomentum: a
                }
            }
        }
        function ne(e, t, i) {
            return (!0 === t || t === e) && (null === i || i === e)
        }
        class nt extends sV {
            constructor(e) {
                super(e),
                this.removeGroupControls = er,
                this.removeListeners = er,
                this.controls = new s9(e)
            }
            mount() {
                let {dragControls: e} = this.node.getProps();
                e && (this.removeGroupControls = e.subscribe(this.controls)),
                this.removeListeners = this.controls.addListeners() || er
            }
            unmount() {
                this.removeGroupControls(),
                this.removeListeners()
            }
        }
        let ni = e => (t, i) => {
            e && ec.postRender( () => e(t, i))
        }
        ;
        class ns extends sV {
            constructor() {
                super(...arguments),
                this.removePointerDownListener = er
            }
            onPointerDown(e) {
                this.session = new sQ(e,this.createPanHandlers(),{
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: sJ(this.node)
                })
            }
            createPanHandlers() {
                let {onPanSessionStart: e, onPanStart: t, onPan: i, onPanEnd: s} = this.node.getProps();
                return {
                    onSessionStart: ni(e),
                    onStart: ni(t),
                    onMove: i,
                    onEnd: (e, t) => {
                        delete this.session,
                        s && ec.postRender( () => s(e, t))
                    }
                }
            }
            mount() {
                this.removePointerDownListener = sz(this.node.current, "pointerdown", e => this.onPointerDown(e))
            }
            update() {
                this.session && this.session.updateHandlers(this.createPanHandlers())
            }
            unmount() {
                this.removePointerDownListener(),
                this.session && this.session.end()
            }
        }
        var nn = i(3885);
        let nr = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function na(e, t) {
            return t.max === t.min ? 0 : e / (t.max - t.min) * 100
        }
        let no = {
            correct: (e, t) => {
                if (!t.target)
                    return e;
                if ("string" == typeof e)
                    if (!U.test(e))
                        return e;
                    else
                        e = parseFloat(e);
                let i = na(e, t.target.x)
                  , s = na(e, t.target.y);
                return `${i}% ${s}%`
            }
        }
          , nl = !1;
        class nu extends n.Component {
            componentDidMount() {
                let {visualElement: e, layoutGroup: t, switchLayoutGroup: i, layoutId: s} = this.props
                  , {projection: n} = e;
                for (let e in nh)
                    tE[e] = nh[e],
                    w(e) && (tE[e].isCSSVariable = !0);
                n && (t.group && t.group.add(n),
                i && i.register && s && i.register(n),
                nl && n.root.didUpdate(),
                n.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                n.setOptions({
                    ...n.options,
                    onExitComplete: () => this.safeToRemove()
                })),
                nr.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(e) {
                let {layoutDependency: t, visualElement: i, drag: s, isPresent: n} = this.props
                  , {projection: r} = i;
                return r && (r.isPresent = n,
                nl = !0,
                s || e.layoutDependency !== t || void 0 === t || e.isPresent !== n ? r.willUpdate() : this.safeToRemove(),
                e.isPresent !== n && (n ? r.promote() : r.relegate() || ec.postRender( () => {
                    let e = r.getStack();
                    e && e.members.length || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: e} = this.props.visualElement;
                e && (e.root.didUpdate(),
                tt.postRender( () => {
                    !e.currentAnimation && e.isLead() && this.safeToRemove()
                }
                ))
            }
            componentWillUnmount() {
                let {visualElement: e, layoutGroup: t, switchLayoutGroup: i} = this.props
                  , {projection: s} = e;
                nl = !0,
                s && (s.scheduleCheckAfterUnmount(),
                t && t.group && t.group.remove(s),
                i && i.deregister && i.deregister(s))
            }
            safeToRemove() {
                let {safeToRemove: e} = this.props;
                e && e()
            }
            render() {
                return null
            }
        }
        function nc(e) {
            let[t,i] = (0,
            nn.xQ)()
              , s = (0,
            n.useContext)(tz.L);
            return (0,
            tW.jsx)(nu, {
                ...e,
                layoutGroup: s,
                switchLayoutGroup: (0,
                n.useContext)(t9),
                isPresent: t,
                safeToRemove: i
            })
        }
        let nh = {
            borderRadius: {
                ...no,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: no,
            borderTopRightRadius: no,
            borderBottomLeftRadius: no,
            borderBottomRightRadius: no,
            boxShadow: {
                correct: (e, {treeScale: t, projectionDelta: i}) => {
                    let s = eZ.parse(e);
                    if (s.length > 5)
                        return e;
                    let n = eZ.createTransformer(e)
                      , r = +("number" != typeof s[0])
                      , a = i.x.scale * t.x
                      , o = i.y.scale * t.y;
                    s[0 + r] /= a,
                    s[1 + r] /= o;
                    let l = j(a, o, .5);
                    return "number" == typeof s[2 + r] && (s[2 + r] /= l),
                    "number" == typeof s[3 + r] && (s[3 + r] /= l),
                    n(s)
                }
            }
        };
        var nd = i(7594);
        function nm(e) {
            return (0,
            nd.G)(e) && "ownerSVGElement"in e
        }
        let np = (e, t) => e.depth - t.depth;
        class nf {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(e) {
                e2(this.children, e),
                this.isDirty = !0
            }
            remove(e) {
                e5(this.children, e),
                this.isDirty = !0
            }
            forEach(e) {
                this.isDirty && this.children.sort(np),
                this.isDirty = !1,
                this.children.forEach(e)
            }
        }
        let ng = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , ny = ng.length
          , nv = e => "string" == typeof e ? parseFloat(e) : e
          , nw = e => "number" == typeof e || U.test(e);
        function nx(e, t) {
            return void 0 !== e[t] ? e[t] : e.borderRadius
        }
        let nC = nL(0, .5, iK)
          , nb = nL(.5, .95, er);
        function nL(e, t, i) {
            return s => s < e ? 0 : s > t ? 1 : i(i3(e, t, s))
        }
        function nj(e, t) {
            e.min = t.min,
            e.max = t.max
        }
        function nT(e, t) {
            nj(e.x, t.x),
            nj(e.y, t.y)
        }
        function nk(e, t) {
            e.translate = t.translate,
            e.scale = t.scale,
            e.originPoint = t.originPoint,
            e.origin = t.origin
        }
        function nS(e, t, i, s, n) {
            return e -= t,
            e = s + 1 / i * (e - s),
            void 0 !== n && (e = s + 1 / n * (e - s)),
            e
        }
        function nE(e, t, [i,s,n], r, a) {
            !function(e, t=0, i=1, s=.5, n, r=e, a=e) {
                if (z.test(t) && (t = parseFloat(t),
                t = j(a.min, a.max, t / 100) - a.min),
                "number" != typeof t)
                    return;
                let o = j(r.min, r.max, s);
                e === r && (o -= t),
                e.min = nS(e.min, t, i, o, n),
                e.max = nS(e.max, t, i, o, n)
            }(e, t[i], t[s], t[n], t.scale, r, a)
        }
        let nM = ["x", "scaleX", "originX"]
          , nA = ["y", "scaleY", "originY"];
        function nN(e, t, i, s) {
            nE(e.x, t, nM, i ? i.x : void 0, s ? s.x : void 0),
            nE(e.y, t, nA, i ? i.y : void 0, s ? s.y : void 0)
        }
        function nD(e) {
            return 0 === e.translate && 1 === e.scale
        }
        function n_(e) {
            return nD(e.x) && nD(e.y)
        }
        function nV(e, t) {
            return e.min === t.min && e.max === t.max
        }
        function nP(e, t) {
            return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
        }
        function nO(e, t) {
            return nP(e.x, t.x) && nP(e.y, t.y)
        }
        function nI(e) {
            return sU(e.x) / sU(e.y)
        }
        function nF(e, t) {
            return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
        }
        class nR {
            constructor() {
                this.members = []
            }
            add(e) {
                e2(this.members, e),
                e.scheduleRender()
            }
            remove(e) {
                if (e5(this.members, e),
                e === this.prevLead && (this.prevLead = void 0),
                e === this.lead) {
                    let e = this.members[this.members.length - 1];
                    e && this.promote(e)
                }
            }
            relegate(e) {
                let t, i = this.members.findIndex(t => e === t);
                if (0 === i)
                    return !1;
                for (let e = i; e >= 0; e--) {
                    let i = this.members[e];
                    if (!1 !== i.isPresent) {
                        t = i;
                        break
                    }
                }
                return !!t && (this.promote(t),
                !0)
            }
            promote(e, t) {
                let i = this.lead;
                if (e !== i && (this.prevLead = i,
                this.lead = e,
                e.show(),
                i)) {
                    i.instance && i.scheduleRender(),
                    e.scheduleRender(),
                    e.resumeFrom = i,
                    t && (e.resumeFrom.preserveOpacity = !0),
                    i.snapshot && (e.snapshot = i.snapshot,
                    e.snapshot.latestValues = i.animationValues || i.latestValues),
                    e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
                    let {crossfade: s} = e.options;
                    !1 === s && i.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(e => {
                    let {options: t, resumingFrom: i} = e;
                    t.onExitComplete && t.onExitComplete(),
                    i && i.options.onExitComplete && i.options.onExitComplete()
                }
                )
            }
            scheduleRender() {
                this.members.forEach(e => {
                    e.instance && e.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        let nB = {
            nodes: 0,
            calculatedTargetDeltas: 0,
            calculatedProjections: 0
        }
          , nZ = ["", "X", "Y", "Z"]
          , nW = 0;
        function nz(e, t, i, s) {
            let {latestValues: n} = t;
            n[e] && (i[e] = n[e],
            t.setStaticValue(e, 0),
            s && (s[e] = 0))
        }
        function nU({attachResizeListener: e, defaultParent: t, measureScroll: i, checkIsScrollRoot: s, resetTransform: n}) {
            return class {
                constructor(e={}, i=t?.()) {
                    this.id = nW++,
                    this.animationId = 0,
                    this.animationCommitId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isProjectionDirty = !1,
                    this.isSharedProjectionDirty = !1,
                    this.isTransformDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.hasCheckedOptimisedAppear = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.hasTreeAnimated = !1,
                    this.updateScheduled = !1,
                    this.scheduleUpdate = () => this.update(),
                    this.projectionUpdateScheduled = !1,
                    this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = () => {
                        this.projectionUpdateScheduled = !1,
                        el.value && (nB.nodes = nB.calculatedTargetDeltas = nB.calculatedProjections = 0),
                        this.nodes.forEach(nq),
                        this.nodes.forEach(n1),
                        this.nodes.forEach(n0),
                        this.nodes.forEach(nY),
                        el.addProjectionMetrics && el.addProjectionMetrics(nB)
                    }
                    ,
                    this.resolvedRelativeTargetAt = 0,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.latestValues = e,
                    this.root = i ? i.root || i : this,
                    this.path = i ? [...i.path, i] : [],
                    this.parent = i,
                    this.depth = i ? i.depth + 1 : 0;
                    for (let e = 0; e < this.path.length; e++)
                        this.path[e].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new nf)
                }
                addEventListener(e, t) {
                    return this.eventHandlers.has(e) || this.eventHandlers.set(e, new e3),
                    this.eventHandlers.get(e).add(t)
                }
                notifyListeners(e, ...t) {
                    let i = this.eventHandlers.get(e);
                    i && i.notify(...t)
                }
                hasListeners(e) {
                    return this.eventHandlers.has(e)
                }
                mount(t) {
                    if (this.instance)
                        return;
                    this.isSVG = nm(t) && !(nm(t) && "svg" === t.tagName),
                    this.instance = t;
                    let {layoutId: i, layout: s, visualElement: n} = this.options;
                    if (n && !n.current && n.mount(t),
                    this.root.nodes.add(this),
                    this.parent && this.parent.children.add(this),
                    this.root.hasTreeAnimated && (s || i) && (this.isLayoutDirty = !0),
                    e) {
                        let i, s = 0, n = () => this.root.updateBlockedByResize = !1;
                        ec.read( () => {
                            s = window.innerWidth
                        }
                        ),
                        e(t, () => {
                            let e = window.innerWidth;
                            e !== s && (s = e,
                            this.root.updateBlockedByResize = !0,
                            i && i(),
                            i = function(e, t) {
                                let i = e0.now()
                                  , s = ({timestamp: n}) => {
                                    let r = n - i;
                                    r >= 250 && (eh(s),
                                    e(r - t))
                                }
                                ;
                                return ec.setup(s, !0),
                                () => eh(s)
                            }(n, 250),
                            nr.hasAnimatedSinceResize && (nr.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(nQ)))
                        }
                        )
                    }
                    i && this.root.registerSharedNode(i, this),
                    !1 !== this.options.animate && n && (i || s) && this.addEventListener("didUpdate", ({delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: i, layout: s}) => {
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let r = this.options.transition || n.getDefaultTransition() || n8
                          , {onLayoutAnimationStart: a, onLayoutAnimationComplete: o} = n.getProps()
                          , l = !this.targetLayout || !nO(this.targetLayout, s)
                          , u = !t && i;
                        if (this.options.layoutRoot || this.resumeFrom || u || t && (l || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0);
                            let t = {
                                ...is(r, "layout"),
                                onPlay: a,
                                onComplete: o
                            };
                            (n.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0,
                            t.type = !1),
                            this.startAnimation(t),
                            this.setAnimationOrigin(e, u)
                        } else
                            t || nQ(this),
                            this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                        this.targetLayout = s
                    }
                    )
                }
                unmount() {
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                    let e = this.getStack();
                    e && e.remove(this),
                    this.parent && this.parent.children.delete(this),
                    this.instance = void 0,
                    this.eventHandlers.clear(),
                    eh(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                }
                startUpdate() {
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    this.nodes && this.nodes.forEach(n2),
                    this.animationId++)
                }
                getTransformTemplate() {
                    let {visualElement: e} = this.options;
                    return e && e.getProps().transformTemplate
                }
                willUpdate(e=!0) {
                    if (this.root.hasTreeAnimated = !0,
                    this.root.isUpdateBlocked()) {
                        this.options.onExitComplete && this.options.onExitComplete();
                        return
                    }
                    if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function e(t) {
                        if (t.hasCheckedOptimisedAppear = !0,
                        t.root === t)
                            return;
                        let {visualElement: i} = t.options;
                        if (!i)
                            return;
                        let s = i.props[t6];
                        if (window.MotionHasOptimisedAnimation(s, "transform")) {
                            let {layout: e, layoutId: i} = t.options;
                            window.MotionCancelOptimisedAnimation(s, "transform", ec, !(e || i))
                        }
                        let {parent: n} = t;
                        n && !n.hasCheckedOptimisedAppear && e(n)
                    }(this),
                    this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let e = 0; e < this.path.length; e++) {
                        let t = this.path[e];
                        t.shouldResetTransform = !0,
                        t.updateScroll("snapshot"),
                        t.options.layoutRoot && t.willUpdate(!1)
                    }
                    let {layoutId: t, layout: i} = this.options;
                    if (void 0 === t && !i)
                        return;
                    let s = this.getTransformTemplate();
                    this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0,
                    this.updateSnapshot(),
                    e && this.notifyListeners("willUpdate")
                }
                update() {
                    if (this.updateScheduled = !1,
                    this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(nG);
                        return
                    }
                    if (this.animationId <= this.animationCommitId)
                        return void this.nodes.forEach(nJ);
                    this.animationCommitId = this.animationId,
                    this.isUpdating ? (this.isUpdating = !1,
                    this.nodes.forEach(nK),
                    this.nodes.forEach(nH),
                    this.nodes.forEach(n$)) : this.nodes.forEach(nJ),
                    this.clearAllSnapshots();
                    let e = e0.now();
                    ed.delta = I(0, 1e3 / 60, e - ed.timestamp),
                    ed.timestamp = e,
                    ed.isProcessing = !0,
                    em.update.process(ed),
                    em.preRender.process(ed),
                    em.render.process(ed),
                    ed.isProcessing = !1
                }
                didUpdate() {
                    this.updateScheduled || (this.updateScheduled = !0,
                    tt.read(this.scheduleUpdate))
                }
                clearAllSnapshots() {
                    this.nodes.forEach(nX),
                    this.sharedNodes.forEach(n5)
                }
                scheduleUpdateProjection() {
                    this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
                    ec.preRender(this.updateProjection, !1, !0))
                }
                scheduleCheckAfterUnmount() {
                    ec.postRender( () => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure(),
                    !this.snapshot || sU(this.snapshot.measuredBox.x) || sU(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
                }
                updateLayout() {
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let e = 0; e < this.path.length; e++)
                            this.path[e].updateScroll();
                    let e = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = to(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox);
                    let {visualElement: t} = this.options;
                    t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
                }
                updateScroll(e="measure") {
                    let t = !!(this.options.layoutScroll && this.instance);
                    if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1),
                    t && this.instance) {
                        let t = s(this.instance);
                        this.scroll = {
                            animationId: this.root.animationId,
                            phase: e,
                            isRoot: t,
                            offset: i(this.instance),
                            wasRoot: this.scroll ? this.scroll.isRoot : t
                        }
                    }
                }
                resetTransform() {
                    if (!n)
                        return;
                    let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
                      , t = this.projectionDelta && !n_(this.projectionDelta)
                      , i = this.getTransformTemplate()
                      , s = i ? i(this.latestValues, "") : void 0
                      , r = s !== this.prevTransformTemplateValue;
                    e && this.instance && (t || S(this.latestValues) || r) && (n(this.instance, s),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(e=!0) {
                    var t;
                    let i = this.measurePageBox()
                      , s = this.removeElementScroll(i);
                    return e && (s = this.removeTransform(s)),
                    re((t = s).x),
                    re(t.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: i,
                        layoutBox: s,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    let {visualElement: e} = this.options;
                    if (!e)
                        return to();
                    let t = e.measureViewportBox();
                    if (!(this.scroll?.wasRoot || this.path.some(ri))) {
                        let {scroll: e} = this.root;
                        e && (D(t.x, e.offset.x),
                        D(t.y, e.offset.y))
                    }
                    return t
                }
                removeElementScroll(e) {
                    let t = to();
                    if (nT(t, e),
                    this.scroll?.wasRoot)
                        return t;
                    for (let i = 0; i < this.path.length; i++) {
                        let s = this.path[i]
                          , {scroll: n, options: r} = s;
                        s !== this.root && n && r.layoutScroll && (n.wasRoot && nT(t, e),
                        D(t.x, n.offset.x),
                        D(t.y, n.offset.y))
                    }
                    return t
                }
                applyTransform(e, t=!1) {
                    let i = to();
                    nT(i, e);
                    for (let e = 0; e < this.path.length; e++) {
                        let s = this.path[e];
                        !t && s.options.layoutScroll && s.scroll && s !== s.root && V(i, {
                            x: -s.scroll.offset.x,
                            y: -s.scroll.offset.y
                        }),
                        S(s.latestValues) && V(i, s.latestValues)
                    }
                    return S(this.latestValues) && V(i, this.latestValues),
                    i
                }
                removeTransform(e) {
                    let t = to();
                    nT(t, e);
                    for (let e = 0; e < this.path.length; e++) {
                        let i = this.path[e];
                        if (!i.instance || !S(i.latestValues))
                            continue;
                        k(i.latestValues) && i.updateSnapshot();
                        let s = to();
                        nT(s, i.measurePageBox()),
                        nN(t, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, s)
                    }
                    return S(this.latestValues) && nN(t, this.latestValues),
                    t
                }
                setTargetDelta(e) {
                    this.targetDelta = e,
                    this.root.scheduleUpdateProjection(),
                    this.isProjectionDirty = !0
                }
                setOptions(e) {
                    this.options = {
                        ...this.options,
                        ...e,
                        crossfade: void 0 === e.crossfade || e.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                forceRelativeParentToResolveTarget() {
                    this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ed.timestamp && this.relativeParent.resolveTargetDelta(!0)
                }
                resolveTargetDelta(e=!1) {
                    let t = this.getLead();
                    this.isProjectionDirty || (this.isProjectionDirty = t.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = t.isTransformDirty),
                    this.isSharedProjectionDirty || (this.isSharedProjectionDirty = t.isSharedProjectionDirty);
                    let i = !!this.resumingFrom || this !== t;
                    if (!(e || i && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                        return;
                    let {layout: s, layoutId: n} = this.options;
                    if (this.layout && (s || n)) {
                        if (this.resolvedRelativeTargetAt = ed.timestamp,
                        !this.targetDelta && !this.relativeTarget) {
                            let e = this.getClosestProjectingParent();
                            e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e,
                            this.forceRelativeParentToResolveTarget(),
                            this.relativeTarget = to(),
                            this.relativeTargetOrigin = to(),
                            sX(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox),
                            nT(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if (this.relativeTarget || this.targetDelta) {
                            if (this.target || (this.target = to(),
                            this.targetWithTransforms = to()),
                            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                                var r, a, o;
                                this.forceRelativeParentToResolveTarget(),
                                r = this.target,
                                a = this.relativeTarget,
                                o = this.relativeParent.target,
                                sq(r.x, a.x, o.x),
                                sq(r.y, a.y, o.y)
                            } else
                                this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nT(this.target, this.layout.layoutBox),
                                N(this.target, this.targetDelta)) : nT(this.target, this.layout.layoutBox);
                            if (this.attemptToResolveRelativeTarget) {
                                this.attemptToResolveRelativeTarget = !1;
                                let e = this.getClosestProjectingParent();
                                e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e,
                                this.forceRelativeParentToResolveTarget(),
                                this.relativeTarget = to(),
                                this.relativeTargetOrigin = to(),
                                sX(this.relativeTargetOrigin, this.target, e.target),
                                nT(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            el.value && nB.calculatedTargetDeltas++
                        }
                    }
                }
                getClosestProjectingParent() {
                    if (!(!this.parent || k(this.parent.latestValues) || E(this.parent.latestValues)))
                        if (this.parent.isProjecting())
                            return this.parent;
                        else
                            return this.parent.getClosestProjectingParent()
                }
                isProjecting() {
                    return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                }
                calcProjection() {
                    let e = this.getLead()
                      , t = !!this.resumingFrom || this !== e
                      , i = !0;
                    if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (i = !1),
                    t && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1),
                    this.resolvedRelativeTargetAt === ed.timestamp && (i = !1),
                    i)
                        return;
                    let {layout: s, layoutId: n} = this.options;
                    if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(s || n))
                        return;
                    nT(this.layoutCorrected, this.layout.layoutBox);
                    let r = this.treeScale.x
                      , a = this.treeScale.y;
                    !function(e, t, i, s=!1) {
                        let n, r, a = i.length;
                        if (a) {
                            t.x = t.y = 1;
                            for (let o = 0; o < a; o++) {
                                r = (n = i[o]).projectionDelta;
                                let {visualElement: a} = n.options;
                                (!a || !a.props.style || "contents" !== a.props.style.display) && (s && n.options.layoutScroll && n.scroll && n !== n.root && V(e, {
                                    x: -n.scroll.offset.x,
                                    y: -n.scroll.offset.y
                                }),
                                r && (t.x *= r.x.scale,
                                t.y *= r.y.scale,
                                N(e, r)),
                                s && S(n.latestValues) && V(e, n.latestValues))
                            }
                            t.x < 1.0000000000001 && t.x > .999999999999 && (t.x = 1),
                            t.y < 1.0000000000001 && t.y > .999999999999 && (t.y = 1)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, t),
                    e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox,
                    e.targetWithTransforms = to());
                    let {target: o} = e;
                    if (!o) {
                        this.prevProjectionDelta && (this.createProjectionDeltas(),
                        this.scheduleRender());
                        return
                    }
                    this.projectionDelta && this.prevProjectionDelta ? (nk(this.prevProjectionDelta.x, this.projectionDelta.x),
                    nk(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(),
                    s$(this.projectionDelta, this.layoutCorrected, o, this.latestValues),
                    this.treeScale.x === r && this.treeScale.y === a && nF(this.projectionDelta.x, this.prevProjectionDelta.x) && nF(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", o)),
                    el.value && nB.calculatedProjections++
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(e=!0) {
                    if (this.options.visualElement?.scheduleRender(),
                    e) {
                        let e = this.getStack();
                        e && e.scheduleRender()
                    }
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                createProjectionDeltas() {
                    this.prevProjectionDelta = tr(),
                    this.projectionDelta = tr(),
                    this.projectionDeltaWithTransform = tr()
                }
                setAnimationOrigin(e, t=!1) {
                    let i, s = this.snapshot, n = s ? s.latestValues : {}, r = {
                        ...this.latestValues
                    }, a = tr();
                    this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    this.attemptToResolveRelativeTarget = !t;
                    let o = to()
                      , l = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0)
                      , u = this.getStack()
                      , c = !u || u.members.length <= 1
                      , h = !!(l && !c && !0 === this.options.crossfade && !this.path.some(n7));
                    this.animationProgress = 0,
                    this.mixTargetDelta = t => {
                        let s = t / 1e3;
                        if (n3(a.x, e.x, s),
                        n3(a.y, e.y, s),
                        this.setTargetDelta(a),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                            var u, d, m, p, f, g;
                            sX(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                            m = this.relativeTarget,
                            p = this.relativeTargetOrigin,
                            f = o,
                            g = s,
                            n4(m.x, p.x, f.x, g),
                            n4(m.y, p.y, f.y, g),
                            i && (u = this.relativeTarget,
                            d = i,
                            nV(u.x, d.x) && nV(u.y, d.y)) && (this.isProjectionDirty = !1),
                            i || (i = to()),
                            nT(i, this.relativeTarget)
                        }
                        l && (this.animationValues = r,
                        function(e, t, i, s, n, r) {
                            n ? (e.opacity = j(0, i.opacity ?? 1, nC(s)),
                            e.opacityExit = j(t.opacity ?? 1, 0, nb(s))) : r && (e.opacity = j(t.opacity ?? 1, i.opacity ?? 1, s));
                            for (let n = 0; n < ny; n++) {
                                let r = `border${ng[n]}Radius`
                                  , a = nx(t, r)
                                  , o = nx(i, r);
                                (void 0 !== a || void 0 !== o) && (a || (a = 0),
                                o || (o = 0),
                                0 === a || 0 === o || nw(a) === nw(o) ? (e[r] = Math.max(j(nv(a), nv(o), s), 0),
                                (z.test(o) || z.test(a)) && (e[r] += "%")) : e[r] = o)
                            }
                            (t.rotate || i.rotate) && (e.rotate = j(t.rotate || 0, i.rotate || 0, s))
                        }(r, n, this.latestValues, s, h, c)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = s
                    }
                    ,
                    this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
                }
                startAnimation(e) {
                    this.notifyListeners("animationStart"),
                    this.currentAnimation?.stop(),
                    this.resumingFrom?.currentAnimation?.stop(),
                    this.pendingAnimation && (eh(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = ec.update( () => {
                        nr.hasAnimatedSinceResize = !0,
                        id.layout++,
                        this.motionValue || (this.motionValue = e6(0)),
                        this.currentAnimation = function(e, t, i) {
                            let s = eQ(e) ? e : e6(e);
                            return s.start(sj("", s, t, i)),
                            s.animation
                        }(this.motionValue, [0, 1e3], {
                            ...e,
                            velocity: 0,
                            isSync: !0,
                            onUpdate: t => {
                                this.mixTargetDelta(t),
                                e.onUpdate && e.onUpdate(t)
                            }
                            ,
                            onStop: () => {
                                id.layout--
                            }
                            ,
                            onComplete: () => {
                                id.layout--,
                                e.onComplete && e.onComplete(),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0);
                    let e = this.getStack();
                    e && e.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let e = this.getLead()
                      , {targetWithTransforms: t, target: i, layout: s, latestValues: n} = e;
                    if (t && i && s) {
                        if (this !== e && this.layout && s && rt(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                            i = this.target || to();
                            let t = sU(this.layout.layoutBox.x);
                            i.x.min = e.target.x.min,
                            i.x.max = i.x.min + t;
                            let s = sU(this.layout.layoutBox.y);
                            i.y.min = e.target.y.min,
                            i.y.max = i.y.min + s
                        }
                        nT(t, i),
                        V(t, n),
                        s$(this.projectionDeltaWithTransform, this.layoutCorrected, t, n)
                    }
                }
                registerSharedNode(e, t) {
                    this.sharedNodes.has(e) || this.sharedNodes.set(e, new nR),
                    this.sharedNodes.get(e).add(t);
                    let i = t.options.initialPromotionConfig;
                    t.promote({
                        transition: i ? i.transition : void 0,
                        preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(t) : void 0
                    })
                }
                isLead() {
                    let e = this.getStack();
                    return !e || e.lead === this
                }
                getLead() {
                    let {layoutId: e} = this.options;
                    return e && this.getStack()?.lead || this
                }
                getPrevLead() {
                    let {layoutId: e} = this.options;
                    return e ? this.getStack()?.prevLead : void 0
                }
                getStack() {
                    let {layoutId: e} = this.options;
                    if (e)
                        return this.root.sharedNodes.get(e)
                }
                promote({needsReset: e, transition: t, preserveFollowOpacity: i}={}) {
                    let s = this.getStack();
                    s && s.promote(this, i),
                    e && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    t && this.setOptions({
                        transition: t
                    })
                }
                relegate() {
                    let e = this.getStack();
                    return !!e && e.relegate(this)
                }
                resetSkewAndRotation() {
                    let {visualElement: e} = this.options;
                    if (!e)
                        return;
                    let t = !1
                      , {latestValues: i} = e;
                    if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (t = !0),
                    !t)
                        return;
                    let s = {};
                    i.z && nz("z", e, s, this.animationValues);
                    for (let t = 0; t < nZ.length; t++)
                        nz(`rotate${nZ[t]}`, e, s, this.animationValues),
                        nz(`skew${nZ[t]}`, e, s, this.animationValues);
                    for (let t in e.render(),
                    s)
                        e.setStaticValue(t, s[t]),
                        this.animationValues && (this.animationValues[t] = s[t]);
                    e.scheduleRender()
                }
                applyProjectionStyles(e, t) {
                    if (!this.instance || this.isSVG)
                        return;
                    if (!this.isVisible) {
                        e.visibility = "hidden";
                        return
                    }
                    let i = this.getTransformTemplate();
                    if (this.needsReset) {
                        this.needsReset = !1,
                        e.visibility = "",
                        e.opacity = "",
                        e.pointerEvents = t2(t?.pointerEvents) || "",
                        e.transform = i ? i(this.latestValues, "") : "none";
                        return
                    }
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = t2(t?.pointerEvents) || ""),
                        this.hasProjected && !S(this.latestValues) && (e.transform = i ? i({}, "") : "none",
                        this.hasProjected = !1);
                        return
                    }
                    e.visibility = "";
                    let n = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget();
                    let r = function(e, t, i) {
                        let s = ""
                          , n = e.x.translate / t.x
                          , r = e.y.translate / t.y
                          , a = i?.z || 0;
                        if ((n || r || a) && (s = `translate3d(${n}px, ${r}px, ${a}px) `),
                        (1 !== t.x || 1 !== t.y) && (s += `scale(${1 / t.x}, ${1 / t.y}) `),
                        i) {
                            let {transformPerspective: e, rotate: t, rotateX: n, rotateY: r, skewX: a, skewY: o} = i;
                            e && (s = `perspective(${e}px) ${s}`),
                            t && (s += `rotate(${t}deg) `),
                            n && (s += `rotateX(${n}deg) `),
                            r && (s += `rotateY(${r}deg) `),
                            a && (s += `skewX(${a}deg) `),
                            o && (s += `skewY(${o}deg) `)
                        }
                        let o = e.x.scale * t.x
                          , l = e.y.scale * t.y;
                        return (1 !== o || 1 !== l) && (s += `scale(${o}, ${l})`),
                        s || "none"
                    }(this.projectionDeltaWithTransform, this.treeScale, n);
                    i && (r = i(n, r)),
                    e.transform = r;
                    let {x: a, y: o} = this.projectionDelta;
                    for (let t in e.transformOrigin = `${100 * a.origin}% ${100 * o.origin}% 0`,
                    s.animationValues ? e.opacity = s === this ? n.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : n.opacityExit : e.opacity = s === this ? void 0 !== n.opacity ? n.opacity : "" : void 0 !== n.opacityExit ? n.opacityExit : 0,
                    tE) {
                        if (void 0 === n[t])
                            continue;
                        let {correct: i, applyTo: a, isCSSVariable: o} = tE[t]
                          , l = "none" === r ? n[t] : i(n[t], s);
                        if (a) {
                            let t = a.length;
                            for (let i = 0; i < t; i++)
                                e[a[i]] = l
                        } else
                            o ? this.options.visualElement.renderState.vars[t] = l : e[t] = l
                    }
                    this.options.layoutId && (e.pointerEvents = s === this ? t2(t?.pointerEvents) || "" : "none")
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(e => e.currentAnimation?.stop()),
                    this.root.nodes.forEach(nG),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function nH(e) {
            e.updateLayout()
        }
        function n$(e) {
            let t = e.resumeFrom?.snapshot || e.snapshot;
            if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
                let {layoutBox: i, measuredBox: s} = e.layout
                  , {animationType: n} = e.options
                  , r = t.source !== e.layout.source;
                "size" === n ? sG(e => {
                    let s = r ? t.measuredBox[e] : t.layoutBox[e]
                      , n = sU(s);
                    s.min = i[e].min,
                    s.max = s.min + n
                }
                ) : rt(n, t.layoutBox, i) && sG(s => {
                    let n = r ? t.measuredBox[s] : t.layoutBox[s]
                      , a = sU(i[s]);
                    n.max = n.min + a,
                    e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
                    e.relativeTarget[s].max = e.relativeTarget[s].min + a)
                }
                );
                let a = tr();
                s$(a, i, t.layoutBox);
                let o = tr();
                r ? s$(o, e.applyTransform(s, !0), t.measuredBox) : s$(o, i, t.layoutBox);
                let l = !n_(a)
                  , u = !1;
                if (!e.resumeFrom) {
                    let s = e.getClosestProjectingParent();
                    if (s && !s.resumeFrom) {
                        let {snapshot: n, layout: r} = s;
                        if (n && r) {
                            let a = to();
                            sX(a, t.layoutBox, n.layoutBox);
                            let o = to();
                            sX(o, i, r.layoutBox),
                            nO(a, o) || (u = !0),
                            s.options.layoutRoot && (e.relativeTarget = o,
                            e.relativeTargetOrigin = a,
                            e.relativeParent = s)
                        }
                    }
                }
                e.notifyListeners("didUpdate", {
                    layout: i,
                    snapshot: t,
                    delta: o,
                    layoutDelta: a,
                    hasLayoutChanged: l,
                    hasRelativeLayoutChanged: u
                })
            } else if (e.isLead()) {
                let {onExitComplete: t} = e.options;
                t && t()
            }
            e.options.transition = void 0
        }
        function nq(e) {
            el.value && nB.nodes++,
            e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
            e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
        }
        function nY(e) {
            e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
        }
        function nX(e) {
            e.clearSnapshot()
        }
        function nG(e) {
            e.clearMeasurements()
        }
        function nJ(e) {
            e.isLayoutDirty = !1
        }
        function nK(e) {
            let {visualElement: t} = e.options;
            t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
            e.resetTransform()
        }
        function nQ(e) {
            e.finishAnimation(),
            e.targetDelta = e.relativeTarget = e.target = void 0,
            e.isProjectionDirty = !0
        }
        function n1(e) {
            e.resolveTargetDelta()
        }
        function n0(e) {
            e.calcProjection()
        }
        function n2(e) {
            e.resetSkewAndRotation()
        }
        function n5(e) {
            e.removeLeadSnapshot()
        }
        function n3(e, t, i) {
            e.translate = j(t.translate, 0, i),
            e.scale = j(t.scale, 1, i),
            e.origin = t.origin,
            e.originPoint = t.originPoint
        }
        function n4(e, t, i, s) {
            e.min = j(t.min, i.min, s),
            e.max = j(t.max, i.max, s)
        }
        function n7(e) {
            return e.animationValues && void 0 !== e.animationValues.opacityExit
        }
        let n8 = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        }
          , n6 = e => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
          , n9 = n6("applewebkit/") && !n6("chrome/") ? Math.round : er;
        function re(e) {
            e.min = n9(e.min),
            e.max = n9(e.max)
        }
        function rt(e, t, i) {
            return "position" === e || "preserve-aspect" === e && !(.2 >= Math.abs(nI(t) - nI(i)))
        }
        function ri(e) {
            return e !== e.root && e.scroll?.wasRoot
        }
        let rs = nU({
            attachResizeListener: (e, t) => sR(e, "resize", t),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        })
          , rn = {
            current: void 0
        }
          , rr = nU({
            measureScroll: e => ({
                x: e.scrollLeft,
                y: e.scrollTop
            }),
            defaultParent: () => {
                if (!rn.current) {
                    let e = new rs({});
                    e.mount(window),
                    e.setOptions({
                        layoutScroll: !0
                    }),
                    rn.current = e
                }
                return rn.current
            }
            ,
            resetTransform: (e, t) => {
                e.style.transform = void 0 !== t ? t : "none"
            }
            ,
            checkIsScrollRoot: e => "fixed" === window.getComputedStyle(e).position
        });
        function ra(e, t) {
            let i = function(e, t, i) {
                if (e instanceof EventTarget)
                    return [e];
                if ("string" == typeof e) {
                    let t = document
                      , i = (void 0) ?? t.querySelectorAll(e);
                    return i ? Array.from(i) : []
                }
                return Array.from(e)
            }(e)
              , s = new AbortController;
            return [i, {
                passive: !0,
                ...t,
                signal: s.signal
            }, () => s.abort()]
        }
        function ro(e) {
            return !("touch" === e.pointerType || sF.x || sF.y)
        }
        function rl(e, t, i) {
            let {props: s} = e;
            e.animationState && s.whileHover && e.animationState.setActive("whileHover", "Start" === i);
            let n = s["onHover" + i];
            n && ec.postRender( () => n(t, sZ(t)))
        }
        class ru extends sV {
            mount() {
                let {current: e} = this.node;
                e && (this.unmount = function(e, t, i={}) {
                    let[s,n,r] = ra(e, i)
                      , a = e => {
                        if (!ro(e))
                            return;
                        let {target: i} = e
                          , s = t(i, e);
                        if ("function" != typeof s || !i)
                            return;
                        let r = e => {
                            ro(e) && (s(e),
                            i.removeEventListener("pointerleave", r))
                        }
                        ;
                        i.addEventListener("pointerleave", r, n)
                    }
                    ;
                    return s.forEach(e => {
                        e.addEventListener("pointerenter", a, n)
                    }
                    ),
                    r
                }(e, (e, t) => (rl(this.node, t, "Start"),
                e => rl(this.node, e, "End"))))
            }
            unmount() {}
        }
        class rc extends sV {
            constructor() {
                super(...arguments),
                this.isActive = !1
            }
            onFocus() {
                let e = !1;
                try {
                    e = this.node.current.matches(":focus-visible")
                } catch (t) {
                    e = !0
                }
                e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0),
                this.isActive = !0)
            }
            onBlur() {
                this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1),
                this.isActive = !1)
            }
            mount() {
                this.unmount = iu(sR(this.node.current, "focus", () => this.onFocus()), sR(this.node.current, "blur", () => this.onBlur()))
            }
            unmount() {}
        }
        var rh = i(7990);
        let rd = (e, t) => !!t && (e === t || rd(e, t.parentElement))
          , rm = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"])
          , rp = new WeakSet;
        function rf(e) {
            return t => {
                "Enter" === t.key && e(t)
            }
        }
        function rg(e, t) {
            e.dispatchEvent(new PointerEvent("pointer" + t,{
                isPrimary: !0,
                bubbles: !0
            }))
        }
        let ry = (e, t) => {
            let i = e.currentTarget;
            if (!i)
                return;
            let s = rf( () => {
                if (rp.has(i))
                    return;
                rg(i, "down");
                let e = rf( () => {
                    rg(i, "up")
                }
                );
                i.addEventListener("keyup", e, t),
                i.addEventListener("blur", () => rg(i, "cancel"), t)
            }
            );
            i.addEventListener("keydown", s, t),
            i.addEventListener("blur", () => i.removeEventListener("keydown", s), t)
        }
        ;
        function rv(e) {
            return sB(e) && !(sF.x || sF.y)
        }
        function rw(e, t, i) {
            let {props: s} = e;
            if (e.current instanceof HTMLButtonElement && e.current.disabled)
                return;
            e.animationState && s.whileTap && e.animationState.setActive("whileTap", "Start" === i);
            let n = s["onTap" + ("End" === i ? "" : i)];
            n && ec.postRender( () => n(t, sZ(t)))
        }
        class rx extends sV {
            mount() {
                let {current: e} = this.node;
                e && (this.unmount = function(e, t, i={}) {
                    let[s,n,r] = ra(e, i)
                      , a = e => {
                        let s = e.currentTarget;
                        if (!rv(e))
                            return;
                        rp.add(s);
                        let r = t(s, e)
                          , a = (e, t) => {
                            window.removeEventListener("pointerup", o),
                            window.removeEventListener("pointercancel", l),
                            rp.has(s) && rp.delete(s),
                            rv(e) && "function" == typeof r && r(e, {
                                success: t
                            })
                        }
                          , o = e => {
                            a(e, s === window || s === document || i.useGlobalTarget || rd(s, e.target))
                        }
                          , l = e => {
                            a(e, !1)
                        }
                        ;
                        window.addEventListener("pointerup", o, n),
                        window.addEventListener("pointercancel", l, n)
                    }
                    ;
                    return s.forEach(e => {
                        ((i.useGlobalTarget ? window : e).addEventListener("pointerdown", a, n),
                        (0,
                        rh.s)(e)) && (e.addEventListener("focus", e => ry(e, n)),
                        rm.has(e.tagName) || -1 !== e.tabIndex || e.hasAttribute("tabindex") || (e.tabIndex = 0))
                    }
                    ),
                    r
                }(e, (e, t) => (rw(this.node, t, "Start"),
                (e, {success: t}) => rw(this.node, e, t ? "End" : "Cancel")), {
                    useGlobalTarget: this.node.props.globalTapTarget
                }))
            }
            unmount() {}
        }
        let rC = new WeakMap
          , rb = new WeakMap
          , rL = e => {
            let t = rC.get(e.target);
            t && t(e)
        }
          , rj = e => {
            e.forEach(rL)
        }
          , rT = {
            some: 0,
            all: 1
        };
        class rk extends sV {
            constructor() {
                super(...arguments),
                this.hasEnteredView = !1,
                this.isInView = !1
            }
            startObserver() {
                this.unmount();
                let {viewport: e={}} = this.node.getProps()
                  , {root: t, margin: i, amount: s="some", once: n} = e
                  , r = {
                    root: t ? t.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof s ? s : rT[s]
                };
                return function(e, t, i) {
                    let s = function({root: e, ...t}) {
                        let i = e || document;
                        rb.has(i) || rb.set(i, {});
                        let s = rb.get(i)
                          , n = JSON.stringify(t);
                        return s[n] || (s[n] = new IntersectionObserver(rj,{
                            root: e,
                            ...t
                        })),
                        s[n]
                    }(t);
                    return rC.set(e, i),
                    s.observe(e),
                    () => {
                        rC.delete(e),
                        s.unobserve(e)
                    }
                }(this.node.current, r, e => {
                    let {isIntersecting: t} = e;
                    if (this.isInView === t || (this.isInView = t,
                    n && !t && this.hasEnteredView))
                        return;
                    t && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", t);
                    let {onViewportEnter: i, onViewportLeave: s} = this.node.getProps()
                      , r = t ? i : s;
                    r && r(e)
                }
                )
            }
            mount() {
                this.startObserver()
            }
            update() {
                if ("undefined" == typeof IntersectionObserver)
                    return;
                let {props: e, prevProps: t} = this.node;
                ["amount", "margin", "root"].some(function({viewport: e={}}, {viewport: t={}}={}) {
                    return i => e[i] !== t[i]
                }(e, t)) && this.startObserver()
            }
            unmount() {}
        }
        let rS = function(e, t) {
            if ("undefined" == typeof Proxy)
                return it;
            let i = new Map
              , s = (i, s) => it(i, s, e, t);
            return new Proxy( (e, t) => s(e, t),{
                get: (n, r) => "create" === r ? s : (i.has(r) || i.set(r, it(r, void 0, e, t)),
                i.get(r))
            })
        }({
            animation: {
                Feature: sP
            },
            exit: {
                Feature: sI
            },
            inView: {
                Feature: rk
            },
            tap: {
                Feature: rx
            },
            focus: {
                Feature: rc
            },
            hover: {
                Feature: ru
            },
            pan: {
                Feature: ns
            },
            drag: {
                Feature: nt,
                ProjectionNode: rr,
                MeasureLayout: nc
            },
            layout: {
                ProjectionNode: rr,
                MeasureLayout: nc
            }
        }, (e, t) => tZ(e) ? new tR(t) : new tN(t,{
            allowProjection: e !== n.Fragment
        }))
    }
    ,
    7348: (e, t, i) => {
        var s = i(5364);
        "undefined" != typeof __nccwpck_require__ && (__nccwpck_require__.ab = "//"),
        ({
            189: function() {
                !function(e, t) {
                    "use strict";
                    if (!e.setImmediate) {
                        var i, n, r, a, o, l = 1, u = {}, c = !1, h = e.document, d = Object.getPrototypeOf && Object.getPrototypeOf(e);
                        d = d && d.setTimeout ? d : e,
                        "[object process]" === ({}).toString.call(e.process) ? o = function(e) {
                            s.nextTick(function() {
                                p(e)
                            })
                        }
                        : function() {
                            if (e.postMessage && !e.importScripts) {
                                var t = !0
                                  , i = e.onmessage;
                                return e.onmessage = function() {
                                    t = !1
                                }
                                ,
                                e.postMessage("", "*"),
                                e.onmessage = i,
                                t
                            }
                        }() ? (i = "setImmediate$" + Math.random() + "$",
                        n = function(t) {
                            t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(i) && p(+t.data.slice(i.length))
                        }
                        ,
                        e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n),
                        o = function(t) {
                            e.postMessage(i + t, "*")
                        }
                        ) : e.MessageChannel ? ((r = new MessageChannel).port1.onmessage = function(e) {
                            p(e.data)
                        }
                        ,
                        o = function(e) {
                            r.port2.postMessage(e)
                        }
                        ) : h && "onreadystatechange"in h.createElement("script") ? (a = h.documentElement,
                        o = function(e) {
                            var t = h.createElement("script");
                            t.onreadystatechange = function() {
                                p(e),
                                t.onreadystatechange = null,
                                a.removeChild(t),
                                t = null
                            }
                            ,
                            a.appendChild(t)
                        }
                        ) : o = function(e) {
                            setTimeout(p, 0, e)
                        }
                        ,
                        d.setImmediate = function(e) {
                            "function" != typeof e && (e = Function("" + e));
                            for (var t = Array(arguments.length - 1), i = 0; i < t.length; i++)
                                t[i] = arguments[i + 1];
                            var s = {
                                callback: e,
                                args: t
                            };
                            return u[l] = s,
                            o(l),
                            l++
                        }
                        ,
                        d.clearImmediate = m
                    }
                    function m(e) {
                        delete u[e]
                    }
                    function p(e) {
                        if (c)
                            setTimeout(p, 0, e);
                        else {
                            var i = u[e];
                            if (i) {
                                c = !0;
                                try {
                                    var s = i.callback
                                      , n = i.args;
                                    switch (n.length) {
                                    case 0:
                                        s();
                                        break;
                                    case 1:
                                        s(n[0]);
                                        break;
                                    case 2:
                                        s(n[0], n[1]);
                                        break;
                                    case 3:
                                        s(n[0], n[1], n[2]);
                                        break;
                                    default:
                                        s.apply(t, n)
                                    }
                                } finally {
                                    m(e),
                                    c = !1
                                }
                            }
                        }
                    }
                }("undefined" == typeof self ? void 0 === i.g ? this : i.g : self)
            }
        })[189](),
        e.exports = {}
    }
    ,
    7594: (e, t, i) => {
        "use strict";
        function s(e) {
            return "object" == typeof e && null !== e
        }
        i.d(t, {
            G: () => s
        })
    }
    ,
    7990: (e, t, i) => {
        "use strict";
        i.d(t, {
            s: () => n
        });
        var s = i(7594);
        function n(e) {
            return (0,
            s.G)(e) && "offsetHeight"in e
        }
    }
    ,
    8106: (e, t, i) => {
        "use strict";
        i.d(t, {
            v: () => l
        });
        var s = i(4232);
        let n = e => {
            let t, i = new Set, s = (e, s) => {
                let n = "function" == typeof e ? e(t) : e;
                if (!Object.is(n, t)) {
                    let e = t;
                    t = (null != s ? s : "object" != typeof n || null === n) ? n : Object.assign({}, t, n),
                    i.forEach(i => i(t, e))
                }
            }
            , n = () => t, r = {
                setState: s,
                getState: n,
                getInitialState: () => a,
                subscribe: e => (i.add(e),
                () => i.delete(e))
            }, a = t = e(s, n, r);
            return r
        }
          , r = e => e ? n(e) : n
          , a = e => e
          , o = e => {
            let t = r(e)
              , i = e => (function(e, t=a) {
                let i = s.useSyncExternalStore(e.subscribe, s.useCallback( () => t(e.getState()), [e, t]), s.useCallback( () => t(e.getInitialState()), [e, t]));
                return s.useDebugValue(i),
                i
            }
            )(t, e);
            return Object.assign(i, t),
            i
        }
          , l = e => e ? o(e) : o
    }
    ,
    8325: (e, t, i) => {
        "use strict";
        i.d(t, {
            k: () => l
        });
        var s = i(1059)
          , n = i(4125)
          , r = i(4899)
          , a = i(8106);
        let o = {
            email: "",
            key: "",
            password: "",
            registered: null,
            showPassword: !1,
            showKey: !1
        }
          , l = (0,
        a.v)( (e, t) => ({
            appLoaded: !1,
            uiLoaded: !1,
            userData: null,
            loading: !0,
            cannotLoad: !1,
            errorMessage: null,
            isAuthenticated: !1,
            status: null,
            authValues: o,
            fetchUserData: async () => {
                let i = t().appLoaded
                  , r = t().cannotLoad;
                if (i || !r)
                    try {
                        let {status: t, data: n} = await s.F.get("/users");
                        if (200 == t) {
                            i || r || e({
                                appLoaded: !0
                            }),
                            e({
                                status: t,
                                userData: n,
                                isAuthenticated: !0
                            });
                            return
                        }
                        if (401 == t || 403 == t) {
                            i || r || e({
                                appLoaded: !0
                            }),
                            e({
                                status: t,
                                isAuthenticated: !1
                            });
                            return
                        }
                        e({
                            status: t,
                            error: n,
                            cannotLoad: !0,
                            errorMessage: n.message,
                            isAuthenticated: !1
                        })
                    } catch (t) {
                        console.log(t),
                        e({
                            status: 500,
                            error: t,
                            cannotLoad: !0,
                            errorMessage: (0,
                            n.u)(t, !0),
                            isAuthenticated: !1
                        })
                    } finally {
                        e({
                            loading: !1
                        })
                    }
            }
            ,
            setUILoaded: t => e({
                uiLoaded: t
            }),
            setLoading: t => e({
                loading: t
            }),
            setAuthValue: t => {
                let {key: i, value: s} = t;
                return e(e => ({
                    authValues: {
                        ...e.authValues,
                        [i]: s
                    }
                }))
            }
            ,
            setUserData: t => {
                console.log(t, "NEW SUB DATA"),
                e({
                    userData: t,
                    isAuthenticated: !0
                })
            }
            ,
            updateSubscriptionDate: async t => {
                e(e => ({
                    userData: e.userData ? {
                        ...e.userData,
                        subscription_end: t
                    } : null
                }))
            }
            ,
            clearAuthValues: () => e({
                authValues: o
            }),
            reload: async () => {
                e({
                    isAuthenticated: !1,
                    status: null,
                    error: null,
                    userData: null,
                    loading: !0,
                    cannotLoad: !1,
                    authValues: {
                        email: "",
                        key: "",
                        password: "",
                        registered: null,
                        showPassword: !1,
                        showKey: !1
                    }
                }),
                t().fetchUserData()
            }
            ,
            reset: async () => {
                await (0,
                r.lA)("write_registry_value", {
                    subkey: "SOFTWARE\\Seliware",
                    valueName: "auth_token",
                    data: ""
                }),
                e({
                    userData: null
                })
            }
            ,
            logout: async () => {
                await (0,
                r.lA)("write_registry_value", {
                    subkey: "SOFTWARE\\Seliware",
                    valueName: "auth_token",
                    data: ""
                }),
                e({
                    isAuthenticated: !1,
                    status: null,
                    error: null,
                    userData: null,
                    loading: !1,
                    cannotLoad: !1,
                    authValues: {
                        email: "",
                        key: "",
                        password: "",
                        registered: null,
                        showPassword: !1,
                        showKey: !1
                    }
                })
            }
        }))
    }
    ,
    8792: () => {}
    ,
    9099: (e, t, i) => {
        e.exports = i(8253)
    }
    ,
    9148: (e, t, i) => {
        "use strict";
        i.d(t, {
            p8: () => y,
            uu: () => p
        });
        var s, n, r, a, o, l, u = i(2347), c = i(76), h = i(4899), d = i(1829);
        !function(e) {
            e[e.Critical = 1] = "Critical",
            e[e.Informational = 2] = "Informational"
        }(s || (s = {}));
        class m {
            constructor(e) {
                this._preventDefault = !1,
                this.event = e.event,
                this.id = e.id
            }
            preventDefault() {
                this._preventDefault = !0
            }
            isPreventDefault() {
                return this._preventDefault
            }
        }
        function p() {
            return new y(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{
                skip: !0
            })
        }
        async function f() {
            return (0,
            h.lA)("plugin:window|get_all_windows").then(e => e.map(e => new y(e,{
                skip: !0
            })))
        }
        !function(e) {
            e.None = "none",
            e.Normal = "normal",
            e.Indeterminate = "indeterminate",
            e.Paused = "paused",
            e.Error = "error"
        }(n || (n = {}));
        let g = ["tauri://created", "tauri://error"];
        class y {
            constructor(e, t={}) {
                var i;
                this.label = e,
                this.listeners = Object.create(null),
                (null == t ? void 0 : t.skip) || (0,
                h.lA)("plugin:window|create", {
                    options: {
                        ...t,
                        parent: "string" == typeof t.parent ? t.parent : null == (i = t.parent) ? void 0 : i.label,
                        label: e
                    }
                }).then(async () => this.emit("tauri://created")).catch(async e => this.emit("tauri://error", e))
            }
            static async getByLabel(e) {
                var t;
                return null != (t = (await f()).find(t => t.label === e)) ? t : null
            }
            static getCurrent() {
                return p()
            }
            static async getAll() {
                return f()
            }
            static async getFocusedWindow() {
                for (let e of (await f()))
                    if (await e.isFocused())
                        return e;
                return null
            }
            async listen(e, t) {
                return this._handleTauriEvent(e, t) ? () => {
                    let i = this.listeners[e];
                    i.splice(i.indexOf(t), 1)
                }
                : (0,
                c.KT)(e, t, {
                    target: {
                        kind: "Window",
                        label: this.label
                    }
                })
            }
            async once(e, t) {
                return this._handleTauriEvent(e, t) ? () => {
                    let i = this.listeners[e];
                    i.splice(i.indexOf(t), 1)
                }
                : (0,
                c.Oo)(e, t, {
                    target: {
                        kind: "Window",
                        label: this.label
                    }
                })
            }
            async emit(e, t) {
                if (g.includes(e)) {
                    for (let i of this.listeners[e] || [])
                        i({
                            event: e,
                            id: -1,
                            payload: t
                        });
                    return
                }
                return (0,
                c.Ic)(e, t)
            }
            async emitTo(e, t, i) {
                if (g.includes(t)) {
                    for (let e of this.listeners[t] || [])
                        e({
                            event: t,
                            id: -1,
                            payload: i
                        });
                    return
                }
                return (0,
                c.D4)(e, t, i)
            }
            _handleTauriEvent(e, t) {
                return !!g.includes(e) && (e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t],
                !0)
            }
            async scaleFactor() {
                return (0,
                h.lA)("plugin:window|scale_factor", {
                    label: this.label
                })
            }
            async innerPosition() {
                return (0,
                h.lA)("plugin:window|inner_position", {
                    label: this.label
                }).then(e => new u.xl(e))
            }
            async outerPosition() {
                return (0,
                h.lA)("plugin:window|outer_position", {
                    label: this.label
                }).then(e => new u.xl(e))
            }
            async innerSize() {
                return (0,
                h.lA)("plugin:window|inner_size", {
                    label: this.label
                }).then(e => new u.Lv(e))
            }
            async outerSize() {
                return (0,
                h.lA)("plugin:window|outer_size", {
                    label: this.label
                }).then(e => new u.Lv(e))
            }
            async isFullscreen() {
                return (0,
                h.lA)("plugin:window|is_fullscreen", {
                    label: this.label
                })
            }
            async isMinimized() {
                return (0,
                h.lA)("plugin:window|is_minimized", {
                    label: this.label
                })
            }
            async isMaximized() {
                return (0,
                h.lA)("plugin:window|is_maximized", {
                    label: this.label
                })
            }
            async isFocused() {
                return (0,
                h.lA)("plugin:window|is_focused", {
                    label: this.label
                })
            }
            async isDecorated() {
                return (0,
                h.lA)("plugin:window|is_decorated", {
                    label: this.label
                })
            }
            async isResizable() {
                return (0,
                h.lA)("plugin:window|is_resizable", {
                    label: this.label
                })
            }
            async isMaximizable() {
                return (0,
                h.lA)("plugin:window|is_maximizable", {
                    label: this.label
                })
            }
            async isMinimizable() {
                return (0,
                h.lA)("plugin:window|is_minimizable", {
                    label: this.label
                })
            }
            async isClosable() {
                return (0,
                h.lA)("plugin:window|is_closable", {
                    label: this.label
                })
            }
            async isVisible() {
                return (0,
                h.lA)("plugin:window|is_visible", {
                    label: this.label
                })
            }
            async title() {
                return (0,
                h.lA)("plugin:window|title", {
                    label: this.label
                })
            }
            async theme() {
                return (0,
                h.lA)("plugin:window|theme", {
                    label: this.label
                })
            }
            async isAlwaysOnTop() {
                return (0,
                h.lA)("plugin:window|is_always_on_top", {
                    label: this.label
                })
            }
            async center() {
                return (0,
                h.lA)("plugin:window|center", {
                    label: this.label
                })
            }
            async requestUserAttention(e) {
                let t = null;
                return e && (t = e === s.Critical ? {
                    type: "Critical"
                } : {
                    type: "Informational"
                }),
                (0,
                h.lA)("plugin:window|request_user_attention", {
                    label: this.label,
                    value: t
                })
            }
            async setResizable(e) {
                return (0,
                h.lA)("plugin:window|set_resizable", {
                    label: this.label,
                    value: e
                })
            }
            async setEnabled(e) {
                return (0,
                h.lA)("plugin:window|set_enabled", {
                    label: this.label,
                    value: e
                })
            }
            async isEnabled() {
                return (0,
                h.lA)("plugin:window|is_enabled", {
                    label: this.label
                })
            }
            async setMaximizable(e) {
                return (0,
                h.lA)("plugin:window|set_maximizable", {
                    label: this.label,
                    value: e
                })
            }
            async setMinimizable(e) {
                return (0,
                h.lA)("plugin:window|set_minimizable", {
                    label: this.label,
                    value: e
                })
            }
            async setClosable(e) {
                return (0,
                h.lA)("plugin:window|set_closable", {
                    label: this.label,
                    value: e
                })
            }
            async setTitle(e) {
                return (0,
                h.lA)("plugin:window|set_title", {
                    label: this.label,
                    value: e
                })
            }
            async maximize() {
                return (0,
                h.lA)("plugin:window|maximize", {
                    label: this.label
                })
            }
            async unmaximize() {
                return (0,
                h.lA)("plugin:window|unmaximize", {
                    label: this.label
                })
            }
            async toggleMaximize() {
                return (0,
                h.lA)("plugin:window|toggle_maximize", {
                    label: this.label
                })
            }
            async minimize() {
                return (0,
                h.lA)("plugin:window|minimize", {
                    label: this.label
                })
            }
            async unminimize() {
                return (0,
                h.lA)("plugin:window|unminimize", {
                    label: this.label
                })
            }
            async show() {
                return (0,
                h.lA)("plugin:window|show", {
                    label: this.label
                })
            }
            async hide() {
                return (0,
                h.lA)("plugin:window|hide", {
                    label: this.label
                })
            }
            async close() {
                return (0,
                h.lA)("plugin:window|close", {
                    label: this.label
                })
            }
            async destroy() {
                return (0,
                h.lA)("plugin:window|destroy", {
                    label: this.label
                })
            }
            async setDecorations(e) {
                return (0,
                h.lA)("plugin:window|set_decorations", {
                    label: this.label,
                    value: e
                })
            }
            async setShadow(e) {
                return (0,
                h.lA)("plugin:window|set_shadow", {
                    label: this.label,
                    value: e
                })
            }
            async setEffects(e) {
                return (0,
                h.lA)("plugin:window|set_effects", {
                    label: this.label,
                    value: e
                })
            }
            async clearEffects() {
                return (0,
                h.lA)("plugin:window|set_effects", {
                    label: this.label,
                    value: null
                })
            }
            async setAlwaysOnTop(e) {
                return (0,
                h.lA)("plugin:window|set_always_on_top", {
                    label: this.label,
                    value: e
                })
            }
            async setAlwaysOnBottom(e) {
                return (0,
                h.lA)("plugin:window|set_always_on_bottom", {
                    label: this.label,
                    value: e
                })
            }
            async setContentProtected(e) {
                return (0,
                h.lA)("plugin:window|set_content_protected", {
                    label: this.label,
                    value: e
                })
            }
            async setSize(e) {
                return (0,
                h.lA)("plugin:window|set_size", {
                    label: this.label,
                    value: e instanceof u.or ? e : new u.or(e)
                })
            }
            async setMinSize(e) {
                return (0,
                h.lA)("plugin:window|set_min_size", {
                    label: this.label,
                    value: e instanceof u.or ? e : e ? new u.or(e) : null
                })
            }
            async setMaxSize(e) {
                return (0,
                h.lA)("plugin:window|set_max_size", {
                    label: this.label,
                    value: e instanceof u.or ? e : e ? new u.or(e) : null
                })
            }
            async setSizeConstraints(e) {
                function t(e) {
                    return e ? {
                        Logical: e
                    } : null
                }
                return (0,
                h.lA)("plugin:window|set_size_constraints", {
                    label: this.label,
                    value: {
                        minWidth: t(null == e ? void 0 : e.minWidth),
                        minHeight: t(null == e ? void 0 : e.minHeight),
                        maxWidth: t(null == e ? void 0 : e.maxWidth),
                        maxHeight: t(null == e ? void 0 : e.maxHeight)
                    }
                })
            }
            async setPosition(e) {
                return (0,
                h.lA)("plugin:window|set_position", {
                    label: this.label,
                    value: e instanceof u.yX ? e : new u.yX(e)
                })
            }
            async setFullscreen(e) {
                return (0,
                h.lA)("plugin:window|set_fullscreen", {
                    label: this.label,
                    value: e
                })
            }
            async setSimpleFullscreen(e) {
                return (0,
                h.lA)("plugin:window|set_simple_fullscreen", {
                    label: this.label,
                    value: e
                })
            }
            async setFocus() {
                return (0,
                h.lA)("plugin:window|set_focus", {
                    label: this.label
                })
            }
            async setFocusable(e) {
                return (0,
                h.lA)("plugin:window|set_focusable", {
                    label: this.label,
                    value: e
                })
            }
            async setIcon(e) {
                return (0,
                h.lA)("plugin:window|set_icon", {
                    label: this.label,
                    value: (0,
                    d.a)(e)
                })
            }
            async setSkipTaskbar(e) {
                return (0,
                h.lA)("plugin:window|set_skip_taskbar", {
                    label: this.label,
                    value: e
                })
            }
            async setCursorGrab(e) {
                return (0,
                h.lA)("plugin:window|set_cursor_grab", {
                    label: this.label,
                    value: e
                })
            }
            async setCursorVisible(e) {
                return (0,
                h.lA)("plugin:window|set_cursor_visible", {
                    label: this.label,
                    value: e
                })
            }
            async setCursorIcon(e) {
                return (0,
                h.lA)("plugin:window|set_cursor_icon", {
                    label: this.label,
                    value: e
                })
            }
            async setBackgroundColor(e) {
                return (0,
                h.lA)("plugin:window|set_background_color", {
                    color: e
                })
            }
            async setCursorPosition(e) {
                return (0,
                h.lA)("plugin:window|set_cursor_position", {
                    label: this.label,
                    value: e instanceof u.yX ? e : new u.yX(e)
                })
            }
            async setIgnoreCursorEvents(e) {
                return (0,
                h.lA)("plugin:window|set_ignore_cursor_events", {
                    label: this.label,
                    value: e
                })
            }
            async startDragging() {
                return (0,
                h.lA)("plugin:window|start_dragging", {
                    label: this.label
                })
            }
            async startResizeDragging(e) {
                return (0,
                h.lA)("plugin:window|start_resize_dragging", {
                    label: this.label,
                    value: e
                })
            }
            async setBadgeCount(e) {
                return (0,
                h.lA)("plugin:window|set_badge_count", {
                    label: this.label,
                    value: e
                })
            }
            async setBadgeLabel(e) {
                return (0,
                h.lA)("plugin:window|set_badge_label", {
                    label: this.label,
                    value: e
                })
            }
            async setOverlayIcon(e) {
                return (0,
                h.lA)("plugin:window|set_overlay_icon", {
                    label: this.label,
                    value: e ? (0,
                    d.a)(e) : void 0
                })
            }
            async setProgressBar(e) {
                return (0,
                h.lA)("plugin:window|set_progress_bar", {
                    label: this.label,
                    value: e
                })
            }
            async setVisibleOnAllWorkspaces(e) {
                return (0,
                h.lA)("plugin:window|set_visible_on_all_workspaces", {
                    label: this.label,
                    value: e
                })
            }
            async setTitleBarStyle(e) {
                return (0,
                h.lA)("plugin:window|set_title_bar_style", {
                    label: this.label,
                    value: e
                })
            }
            async setTheme(e) {
                return (0,
                h.lA)("plugin:window|set_theme", {
                    label: this.label,
                    value: e
                })
            }
            async onResized(e) {
                return this.listen(c.es.WINDOW_RESIZED, t => {
                    t.payload = new u.Lv(t.payload),
                    e(t)
                }
                )
            }
            async onMoved(e) {
                return this.listen(c.es.WINDOW_MOVED, t => {
                    t.payload = new u.xl(t.payload),
                    e(t)
                }
                )
            }
            async onCloseRequested(e) {
                return this.listen(c.es.WINDOW_CLOSE_REQUESTED, async t => {
                    let i = new m(t);
                    await e(i),
                    i.isPreventDefault() || await this.destroy()
                }
                )
            }
            async onDragDropEvent(e) {
                let t = await this.listen(c.es.DRAG_ENTER, t => {
                    e({
                        ...t,
                        payload: {
                            type: "enter",
                            paths: t.payload.paths,
                            position: new u.xl(t.payload.position)
                        }
                    })
                }
                )
                  , i = await this.listen(c.es.DRAG_OVER, t => {
                    e({
                        ...t,
                        payload: {
                            type: "over",
                            position: new u.xl(t.payload.position)
                        }
                    })
                }
                )
                  , s = await this.listen(c.es.DRAG_DROP, t => {
                    e({
                        ...t,
                        payload: {
                            type: "drop",
                            paths: t.payload.paths,
                            position: new u.xl(t.payload.position)
                        }
                    })
                }
                )
                  , n = await this.listen(c.es.DRAG_LEAVE, t => {
                    e({
                        ...t,
                        payload: {
                            type: "leave"
                        }
                    })
                }
                );
                return () => {
                    t(),
                    s(),
                    i(),
                    n()
                }
            }
            async onFocusChanged(e) {
                let t = await this.listen(c.es.WINDOW_FOCUS, t => {
                    e({
                        ...t,
                        payload: !0
                    })
                }
                )
                  , i = await this.listen(c.es.WINDOW_BLUR, t => {
                    e({
                        ...t,
                        payload: !1
                    })
                }
                );
                return () => {
                    t(),
                    i()
                }
            }
            async onScaleChanged(e) {
                return this.listen(c.es.WINDOW_SCALE_FACTOR_CHANGED, e)
            }
            async onThemeChanged(e) {
                return this.listen(c.es.WINDOW_THEME_CHANGED, e)
            }
        }
        !function(e) {
            e.Disabled = "disabled",
            e.Throttle = "throttle",
            e.Suspend = "suspend"
        }(r || (r = {})),
        function(e) {
            e.Default = "default",
            e.FluentOverlay = "fluentOverlay"
        }(a || (a = {})),
        function(e) {
            e.AppearanceBased = "appearanceBased",
            e.Light = "light",
            e.Dark = "dark",
            e.MediumLight = "mediumLight",
            e.UltraDark = "ultraDark",
            e.Titlebar = "titlebar",
            e.Selection = "selection",
            e.Menu = "menu",
            e.Popover = "popover",
            e.Sidebar = "sidebar",
            e.HeaderView = "headerView",
            e.Sheet = "sheet",
            e.WindowBackground = "windowBackground",
            e.HudWindow = "hudWindow",
            e.FullScreenUI = "fullScreenUI",
            e.Tooltip = "tooltip",
            e.ContentBackground = "contentBackground",
            e.UnderWindowBackground = "underWindowBackground",
            e.UnderPageBackground = "underPageBackground",
            e.Mica = "mica",
            e.Blur = "blur",
            e.Acrylic = "acrylic",
            e.Tabbed = "tabbed",
            e.TabbedDark = "tabbedDark",
            e.TabbedLight = "tabbedLight"
        }(o || (o = {})),
        function(e) {
            e.FollowsWindowActiveState = "followsWindowActiveState",
            e.Active = "active",
            e.Inactive = "inactive"
        }(l || (l = {}))
    }
    ,
    9551: (e, t, i) => {
        "use strict";
        function s(e, t, i, s) {
            if ("a" === i && !s)
                throw TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !s : !t.has(e))
                throw TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === i ? s : "a" === i ? s.call(e) : s ? s.value : t.get(e)
        }
        function n(e, t, i, s, n) {
            if ("m" === s)
                throw TypeError("Private method is not writable");
            if ("a" === s && !n)
                throw TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === s ? n.call(e, i) : n ? n.value = i : t.set(e, i),
            i
        }
        i.d(t, {
            G: () => n,
            g: () => s
        }),
        "function" == typeof SuppressedError && SuppressedError
    }
    ,
    9751: (e, t, i) => {
        "use strict";
        i.d(t, {
            Q: () => s
        });
        let s = (0,
        i(4232).createContext)({
            transformPagePoint: e => e,
            isStatic: !1,
            reducedMotion: "never"
        })
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [593, 792], () => (t(92),
    t(8253))),
    _N_E = e.O()
}
]);
