(function(e) {
    function t(t) {
        for (var n, o, i = t[0], s = t[1], u = t[2], f = 0, d = []; f < i.length; f++) o = i[f], Object.prototype.hasOwnProperty.call(a, o) && a[o] && d.push(a[o][0]), a[o] = 0;
        for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
        l && l(t);
        while (d.length) d.shift()();
        return c.push.apply(c, u || []), r()
    }

    function r() {
        for (var e, t = 0; t < c.length; t++) {
            for (var r = c[t], n = !0, i = 1; i < r.length; i++) {
                var s = r[i];
                0 !== a[s] && (n = !1)
            }
            n && (c.splice(t--, 1), e = o(o.s = r[0]))
        }
        return e
    }
    var n = {},
        a = { app: 0 },
        c = [];

    function o(t) { if (n[t]) return n[t].exports; var r = n[t] = { i: t, l: !1, exports: {} }; return e[t].call(r.exports, r, r.exports, o), r.l = !0, r.exports }
    o.m = e, o.c = n, o.d = function(e, t, r) { o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, o.r = function(e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var n in e) o.d(r, n, function(t) { return e[t] }.bind(null, n));
        return r
    }, o.n = function(e) { var t = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return o.d(t, "a", t), t }, o.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, o.p = "";
    var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var u = 0; u < i.length; u++) t(i[u]);
    var l = s;
    c.push([0, "chunk-vendors"]), r()
})({
    0: function(e, t, r) { e.exports = r("56d7") },
    "034f": function(e, t, r) {
        "use strict";
        var n = r("85ec"),
            a = r.n(n);
        a.a
    },
    "06dc": function(e, t, r) {
        "use strict";
        r.d(t, "c", (function() { return a })), r.d(t, "a", (function() { return s })), r.d(t, "d", (function() { return u })), r.d(t, "f", (function() { return f })), r.d(t, "e", (function() { return d })), r.d(t, "g", (function() { return p })), r.d(t, "b", (function() { return m }));
        r("a623"), r("fb6a"), r("d3b7"), r("ac1f"), r("3ca3"), r("1276"), r("498a"), r("ddb0"), r("2b3d"), r("96cf");
        var n = r("1da1"),
            a = [102, 76, 97, 67],
            c = [73, 68, 51],
            o = [79, 103, 103, 83],
            i = [102, 116, 121, 112],
            s = { mp3: "audio/mpeg", flac: "audio/flac", m4a: "audio/mp4", ogg: "audio/ogg" };

        function u(e) { return l.apply(this, arguments) }

        function l() {
            return l = Object(n["a"])(regeneratorRuntime.mark((function e(t) {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, new Promise((function(e) {
                                var r = new FileReader;
                                r.onload = function(t) { e(t.target.result) }, r.readAsArrayBuffer(t)
                            }));
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), l.apply(this, arguments)
        }

        function f(e, t, r) {
            var n = "",
                a = "",
                c = r.split("-");
            return c.length > 1 ? (n = c[0].trim(), a = c[1].trim()) : 1 === c.length && (a = c[0].trim()), "string" == typeof e && "" !== e && (n = e), "string" == typeof t && "" !== t && (a = t), { artist: n, title: a }
        }

        function d(e) {
            var t = "";
            if (void 0 !== e.common.picture && e.common.picture.length > 0) {
                var r = new Blob([e.common.picture[0].data], { type: e.common.picture[0].format });
                t = URL.createObjectURL(r)
            }
            return t
        }

        function p(e, t) { return e.every((function(e, r) { return e === t[r] })) }

        function m(e, t) { return p(c, e.slice(0, c.length)) ? "mp3" : p(a, e.slice(0, a.length)) ? "flac" : p(o, e.slice(0, o.length)) ? "ogg" : p(i, e.slice(4, 8)) ? "m4a" : t }
    },
    1: function(e, t) {},
    2: function(e, t) {},
    "56d7": function(e, t, r) {
        "use strict";
        r.r(t);
        r("46a1"), r("450d");
        var n = r("e5f2"),
            a = r.n(n),
            c = (r("b5d8"), r("f494")),
            o = r.n(c),
            i = (r("560b"), r("dcdc")),
            s = r.n(i),
            u = (r("f225"), r("89a9")),
            l = r.n(u),
            f = (r("f4f9"), r("c2cc")),
            d = r.n(f),
            p = (r("7a0f"), r("0f6c")),
            m = r.n(p),
            h = (r("aaa5"), r("a578")),
            b = r.n(h),
            g = (r("adec"), r("3d2d")),
            w = r.n(g),
            v = (r("bdc7"), r("aa2f")),
            y = r.n(v),
            k = (r("de31"), r("c69e")),
            x = r.n(k),
            _ = (r("5466"), r("ecdf")),
            O = r.n(_),
            j = (r("38a0"), r("ad41")),
            D = r.n(j),
            S = (r("1951"), r("eedf")),
            A = r.n(S),
            M = (r("acb6"), r("c673")),
            U = r.n(M),
            R = (r("fd71"), r("a447")),
            C = r.n(R),
            F = (r("e260"), r("e6cf"), r("cca6"), r("a79d"), r("2b0e")),
            P = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("el-container", { attrs: { id: "app" } }, [r("el-main", [r("x-upload", { on: { handle_finish: e.showSuccess, handle_error: e.showFail } }), r("el-row", { attrs: { id: "app-control" } }, [r("el-row", { staticStyle: { "padding-bottom": "1em", "font-size": "14px" } }, [e._v(" 歌曲命名格式： "), r("el-radio", { attrs: { name: "format", label: "1" }, model: { value: e.download_format, callback: function(t) { e.download_format = t }, expression: "download_format" } }, [e._v("歌曲名")]), r("el-radio", { attrs: { name: "format", label: "2" }, model: { value: e.download_format, callback: function(t) { e.download_format = t }, expression: "download_format" } }, [e._v("歌手-歌曲名")]), r("el-radio", { attrs: { name: "format", label: "3" }, model: { value: e.download_format, callback: function(t) { e.download_format = t }, expression: "download_format" } }, [e._v("歌曲名-歌手")]), r("el-checkbox", { attrs: { border: "" }, model: { value: e.instant_download, callback: function(t) { e.instant_download = t }, expression: "instant_download" } }, [e._v("立即保存")])], 1), r("el-button", { attrs: { icon: "el-icon-download", plain: "" }, on: { click: e.handleDownloadAll } }, [e._v("下载全部")]), r("el-button", { attrs: { icon: "el-icon-delete", plain: "", type: "danger" }, on: { click: e.handleDeleteAll } }, [e._v("删除全部")])], 1), r("audio", { attrs: { autoplay: e.playing_auto, src: e.playing_url, controls: "" } }), r("x-preview", { attrs: { "table-data": e.tableData, download_format: e.download_format }, on: { music_changed: e.changePlaying } })], 1), r("el-footer", { attrs: { id: "app-footer" } }, [r("el-row", [e._v(" 音乐解锁：移除已购音乐的加密保护。 目前支持网易云音乐(ncm)、QQ音乐(qmc, mflac, tkm, ogg) "), e._v("。 "), ])], 1)], 1)
            },
            B = [],
            E = (r("4160"), r("159b"), function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("el-upload", { attrs: { "auto-upload": !1, "on-change": e.handleFile, "show-file-list": !1, action: "", drag: "", multiple: "" } }, [r("i", { staticClass: "el-icon-upload" }), r("div", { staticClass: "el-upload__text" }, [e._v("将文件拖到此处，或"), r("em", [e._v("点击选择")])]), r("div", { staticClass: "el-upload__tip", attrs: { slot: "tip" }, slot: "tip" }, [e._v("本工具可以在浏览器内对文件进行解锁，无需消耗流量")])])
            }),
            L = [],
            T = (r("b0c0"), {
                name: "upload",
                data: function() { return { cacheQueue: [], workers: [], idle_workers: [], thread_num: 1 } },
                mounted: function() {
                    var e = this;
                    if ("" !== document.location.host) {
                        this.thread_num = navigator.hardwareConcurrency || 1;
                        var t = r("bfa2");
                        this.workers.push(t().CommonDecrypt), this.idle_workers.push(0), setTimeout((function() { for (var r = 1; r < e.thread_num; r++) e.workers.push(t().CommonDecrypt), e.idle_workers.push(r) }), 1e3)
                    } else {
                        var n = r("bd2e");
                        this.workers.push(n.CommonDecrypt), this.idle_workers.push(0)
                    }
                },
                methods: {
                    handleFile: function(e) { this.idle_workers.length > 0 ? this.handleDoFile(e, this.idle_workers.shift()) : this.cacheQueue.push(e) },
                    handleCacheQueue: function(e) { 0 !== this.cacheQueue.length ? this.handleDoFile(this.cacheQueue.shift(), e) : this.idle_workers.push(e) },
                    handleDoFile: function(e, t) {
                        var r = this;
                        this.workers[t](e).then((function(e) { r.$emit("handle_finish", e), r.handleCacheQueue(t) })).catch((function(n) { r.$emit("handle_error", n, e.name), r.handleCacheQueue(t) }))
                    }
                }
            }),
            q = T,
            $ = (r("b646"), r("2877")),
            I = Object($["a"])(q, E, L, !1, null, "36dd009c", null),
            N = I.exports,
            Q = function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("el-table", { staticStyle: { width: "100%" }, attrs: { data: e.tableData } }, [r("el-table-column", { attrs: { label: "封面" }, scopedSlots: e._u([{ key: "default", fn: function(t) { return [r("el-image", { staticStyle: { width: "100px", height: "100px" }, attrs: { src: t.row.picture } }, [r("div", { staticClass: "image-slot el-image__error", attrs: { slot: "error" }, slot: "error" }, [e._v(" 暂无封面 ")])])] } }]) }), r("el-table-column", { attrs: { label: "歌曲" }, scopedSlots: e._u([{ key: "default", fn: function(t) { return [r("span", { staticStyle: { "margin-left": "10px" } }, [e._v(e._s(t.row.title))])] } }]) }), r("el-table-column", { attrs: { label: "歌手" }, scopedSlots: e._u([{ key: "default", fn: function(t) { return [r("p", [e._v(e._s(t.row.artist))])] } }]) }), r("el-table-column", { attrs: { label: "专辑" }, scopedSlots: e._u([{ key: "default", fn: function(t) { return [r("p", [e._v(e._s(t.row.album))])] } }]) }), r("el-table-column", { attrs: { label: "操作" }, scopedSlots: e._u([{ key: "default", fn: function(t) { return [r("el-button", { attrs: { circle: "", icon: "el-icon-video-play", type: "success" }, on: { click: function(r) { return e.handlePlay(t.$index, t.row) } } }), r("el-button", { attrs: { circle: "", icon: "el-icon-download" }, on: { click: function(r) { return e.handleDownload(t.row) } } }), r("el-button", { attrs: { circle: "", icon: "el-icon-delete", type: "danger" }, on: { click: function(r) { return e.handleDelete(t.$index, t.row) } } })] } }]) })], 1)
            },
            J = [];
        r("a434"), r("d3b7"), r("3ca3"), r("ddb0"), r("2b3d");

        function H(e, t) {
            var r = document.createElement("a");
            switch (r.href = e.file, t) {
                case "1":
                    r.download = e.title + "." + e.ext;
                    break;
                default:
                case "2":
                    r.download = e.artist + " - " + e.title + "." + e.ext;
                    break;
                case "3":
                    r.download = e.title + " - " + e.artist + "." + e.ext;
                    break
            }
            document.body.append(r), r.click(), r.remove()
        }

        function W(e) { URL.revokeObjectURL(e.file), URL.revokeObjectURL(e.picture) }
        var K = { name: "preview", props: { tableData: { type: Array, required: !0 }, download_format: { type: String, required: !0 } }, methods: { handlePlay: function(e, t) { this.$emit("music_changed", t.file) }, handleDelete: function(e, t) { W(t), this.tableData.splice(e, 1) }, handleDownload: function(e) { H(e, this.download_format) } } },
            z = K,
            V = Object($["a"])(z, Q, J, !1, null, "6856848d", null),
            X = V.exports,
            Y = {
                name: "app",
                components: { xUpload: N, xPreview: X },
                data: function() { return { activeIndex: "1", tableData: [], playing_url: "", playing_auto: !1, download_format: "2", instant_download: !1 } },
                created: function() { this.$nextTick((function() { this.finishLoad() })) },
                methods: {
                    finishLoad: function() {
                        var e = document.getElementById("loader-mask");
                        e && e.remove(), this.$notify.info({ title: "", message: '我们使用PWA技术，无网络也能使用<br/>最近更新：提供实验性ogg支持', dangerouslyUseHTMLString: !0, duration: 1e4, position: "top-left" })
                    },
                    showSuccess: function(e) {
                        if (e.status) {
                            this.instant_download ? (H(e, this.download_format), W(e)) : (this.tableData.push(e), this.$notify.success({ title: "解锁成功", message: "成功解锁 " + e.title, duration: 3e3 }));
                            var t = [e.title, e.artist, e.album];
                            window._paq.push(["trackEvent", "Unlock", e.rawExt + "," + e.mime, JSON.stringify(t)])
                        } else this.showFail(e.message, e.rawFilename + "." + e.rawExt)
                    },
                    showFail: function(e, t) { this.$notify.error({ title: "出现问题", message: e + "，" + t + '，参考<a target="_blank" href="https://github.com/ix64/unlock-music/wiki/使用提示">使用提示</a>', dangerouslyUseHTMLString: !0, duration: 6e3 }), window._paq.push(["trackEvent", "Error", e, t]), console.error(e, t) },
                    changePlaying: function(e) { this.playing_url = e, this.playing_auto = !0 },
                    handleDeleteAll: function() { this.tableData.forEach((function(e) { W(e) })), this.tableData = [] },
                    handleDownloadAll: function() {
                        var e = this,
                            t = 0,
                            r = setInterval((function() { t < e.tableData.length ? (H(e.tableData[t], e.download_format), t++) : clearInterval(r) }), 300)
                    }
                }
            },
            G = Y,
            Z = (r("034f"), Object($["a"])(G, P, B, !1, null, null, null)),
            ee = Z.exports,
            te = r("9483");
        Object(te["a"])("".concat("", "service-worker.js"), { ready: function() { console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB") }, registered: function() { console.log("Service worker has been registered.") }, cached: function() { console.log("Content has been cached for offline use.") }, updatefound: function() { console.log("New content is downloading.") }, updated: function() { console.log("New content is available; please refresh.") }, offline: function() { console.log("No internet connection found. App is running in offline mode.") }, error: function(e) { console.error("Error during service worker registration:", e) } });
        r("0fae");
        F["default"].use(C.a), F["default"].use(U.a), F["default"].use(A.a), F["default"].use(D.a), F["default"].use(O.a), F["default"].use(x.a), F["default"].use(y.a), F["default"].use(w.a), F["default"].use(b.a), F["default"].use(m.a), F["default"].use(d.a), F["default"].use(l.a), F["default"].use(s.a), F["default"].use(o.a), F["default"].prototype.$notify = a.a, F["default"].config.productionTip = !1, new F["default"]({ render: function(e) { return e(ee) } }).$mount("#app")
    },
    "85ec": function(e, t, r) {},
    "8a1e": function(e, t, r) {},
    a8ee: function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "Decrypt", (function() { return i }));
        r("ace4"), r("d3b7"), r("5cc6"), r("9a8c"), r("a975"), r("735e"), r("c1ac"), r("d139"), r("3a7b"), r("d5d6"), r("82f8"), r("e91f"), r("60bd"), r("5f96"), r("3280"), r("3fcc"), r("ca91"), r("25a1"), r("cd26"), r("3c5d"), r("2954"), r("649e"), r("219c"), r("170b"), r("b39a"), r("72f7"), r("96cf");
        var n = r("1da1"),
            a = r("fd2f"),
            c = r("06dc"),
            o = [0, 0, 0, 32, 102, 116, 121, 112];

        function i(e, t) { return s.apply(this, arguments) }

        function s() {
            return s = Object(n["a"])(regeneratorRuntime.mark((function e(t, r) {
                var n, i, s, u;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(c["d"])(t);
                        case 2:
                            for (n = e.sent, i = new Uint8Array(n), s = 0; s < 8; ++s) i[s] = o[s];
                            return u = new Blob([i], { type: "audio/mp4" }), e.next = 8, Object(a["Decrypt"])(u, r, "m4a", !1);
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), s.apply(this, arguments)
        }
    },
    b646: function(e, t, r) {
        "use strict";
        var n = r("8a1e"),
            a = r.n(n);
        a.a
    },
    b6cf: function(e, t, r) {
        "use strict";
        r.r(t);
        r("a630"), r("fb6a"), r("ace4"), r("d3b7"), r("3ca3"), r("5cc6"), r("9a8c"), r("a975"), r("735e"), r("c1ac"), r("d139"), r("3a7b"), r("d5d6"), r("82f8"), r("e91f"), r("60bd"), r("5f96"), r("3280"), r("3fcc"), r("ca91"), r("25a1"), r("cd26"), r("3c5d"), r("2954"), r("649e"), r("219c"), r("170b"), r("b39a"), r("72f7"), r("ddb0"), r("2b3d"), r("96cf");
        var n = r("1da1"),
            a = r("06dc"),
            c = (r("99af"), r("d4ec")),
            o = r("bee2"),
            i = [79, 103, 103, 83, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 30, 1, 118, 111, 114, 98, 105, 115, 0, 0, 0, 0, 2, 68, 172, 0, 0, 0, 0, 0, 0, 0, 238, 2, 0, 0, 0, 0, 0, 184, 1, 79, 103, 103, 83, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 16, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 3, 118, 111, 114, 98, 105, 115, 44, 0, 0, 0, 88, 105, 112, 104, 46, 79, 114, 103, 32, 108, 105, 98, 86, 111, 114, 98, 105, 115, 32, 73, 32, 50, 48, 49, 53, 48, 49, 48, 53, 32, 40, 226, 155, 132, 226, 155, 132, 226, 155, 132, 226, 155, 132, 41, 0, 0, 0, 0, 0, 0, 0, 0, 84, 73, 84, 76, 69, 61],
            s = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 6, 3, 3, 3, 3, 6, 6, 6, 6, 3, 3, 3, 3, 6, 6, 6, 6, 6, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 9, 9, 9, 9, 0, 0, 0, 0, 6, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 0, 1, 9, 9, 0, 1, 9, 9, 9, 9, 9, 9, 9, 9],
            u = [74, 214, 202, 144, 103, 247, 82, 94, 149, 35, 159, 19, 17, 126, 71, 116, 61, 144, 170, 63, 81, 198, 9, 213, 159, 250, 102, 249, 243, 214, 161, 144, 160, 247, 240, 29, 149, 222, 159, 132, 17, 244, 14, 116, 187, 144, 188, 63, 146, 0, 9, 91, 159, 98, 102, 161],
            l = 195,
            f = 216,
            d = function() {
                function e(t, r, n) { Object(c["a"])(this, e), void 0 === r || void 0 === n ? (this.Matrix128 = t, this.generateMask58from128()) : (this.Matrix58 = t, this.Super58A = r, this.Super58B = n, this.generateMask128from58()) }
                return Object(o["a"])(e, [{
                    key: "generateMask128from58",
                    value: function() {
                        if (56 !== this.Matrix58.length) throw "incorrect mask58 matrix length";
                        for (var e = [], t = 0; t < 8; t += 1) e = e.concat([this.Super58A], this.Matrix58.slice(7 * t, 7 * t + 7), [this.Super58B], this.Matrix58.slice(49 - 7 * t, 56 - 7 * t).reverse());
                        this.Matrix128 = e
                    }
                }, {
                    key: "generateMask58from128",
                    value: function() {
                        if (128 !== this.Matrix128.length) throw "incorrect mask128 length";
                        for (var e = this.Matrix128[0], t = this.Matrix128[8], r = [], n = 0; n < 8; n += 1) {
                            var c = 16 * n,
                                o = 120 - c;
                            if (this.Matrix128[c] !== e || this.Matrix128[c + 8] !== t) throw "decode mask-128 to mask-58 failed";
                            var i = this.Matrix128.slice(c + 1, c + 8),
                                s = this.Matrix128.slice(o + 1, o + 8).reverse();
                            if (!Object(a["g"])(i, s)) throw "decode mask-128 to mask-58 failed";
                            r = r.concat(i)
                        }
                        this.Matrix58 = r, this.Super58A = e, this.Super58B = t
                    }
                }, { key: "Decrypt", value: function(e) { for (var t = e.slice(0), r = -1, n = -1, a = 0; a < e.length; a++) r++, n++, (32768 === r || r > 32768 && (r + 1) % 32768 === 0) && (r++, n++), n >= 128 && (n -= 128), t[a] ^= this.Matrix128[n]; return t } }]), e
            }();

        function p() { return new d(u, l, f) }

        function m(e) {
            for (var t, r = Math.min(32768, e.length), n = 0; n < r; n += 128) try { if (t = new d(e.slice(n, n + 128)), Object(a["g"])(a["c"], t.Decrypt(e.slice(0, a["c"].length)))) break } catch (c) {}
            return t
        }

        function h(e) {
            if (!(e.length < i.length)) {
                for (var t = {}, r = 0; r < 58; r++) t[r] = {};
                for (var n = 0; n < i.length; n++)
                    if (0 !== s[n]) {
                        var a = w(n),
                            c = e[n] ^ i[n],
                            o = s[n];
                        c in t[a] ? t[a][c] += o : t[a][c] = o
                    }
                var u, l, f = [];
                try {
                    for (var p = 0; p < 56; p++) f[p] = g(t[p]);
                    u = g(t[56]), l = g(t[57])
                } catch (m) { return }
                return new d(f, u, l)
            }
        }

        function b(e, t, r) { return new d(e, t, r) }

        function g(e) { if (0 === e.length) throw "can not match at least one key"; var t, r = 0; for (var n in e) e[n] > r && (t = n, r = e[n]); return parseInt(t) }

        function w(e) {
            e > 127 && (e %= 128);
            var t = e % 16,
                r = (e - t) / 16;
            switch (t) {
                case 0:
                    r = 8, t = 0;
                    break;
                case 8:
                    r = 8, t = 1;
                    break;
                default:
                    t > 7 ? (r = 7 - r, t = 15 - t) : t -= 1;
                    break
            }
            return 7 * r + t
        }
        r.d(t, "Decrypt", (function() { return k }));
        var v = r("cb96"),
            y = { mgg: { handler: h, ext: "ogg", detect: !0 }, mflac: { handler: m, ext: "flac", detect: !0 }, qmc0: { handler: p, ext: "mp3", detect: !1 }, qmc3: { handler: p, ext: "mp3", detect: !1 }, qmcogg: { handler: p, ext: "ogg", detect: !1 }, qmcflac: { handler: p, ext: "flac", detect: !1 }, bkcmp3: { handler: p, ext: "mp3", detect: !1 }, bkcflac: { handler: p, ext: "flac", detect: !1 }, tkm: { handler: p, ext: "m4a", detect: !1 } };

        function k(e, t, r) { return x.apply(this, arguments) }

        function x() {
            return x = Object(n["a"])(regeneratorRuntime.mark((function e(t, r, n) {
                var c, o, i, s, u, l, f, d, p, m, h;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (n in y) { e.next = 2; break }
                            return e.abrupt("return", { status: !1, message: "File type is incorrect!" });
                        case 2:
                            return c = y[n], e.t0 = Uint8Array, e.next = 6, Object(a["d"])(t);
                        case 6:
                            if (e.t1 = e.sent, o = new e.t0(e.t1), !c.detect) { e.next = 20; break }
                            if (i = o.slice(0, -368), s = c.handler(i), u = o.slice(-368), void 0 !== s) { e.next = 16; break }
                            return e.next = 15, O(u, r, n);
                        case 15:
                            s = e.sent;
                        case 16:
                            if (void 0 !== s) { e.next = 18; break }
                            return e.abrupt("return", { status: !1, message: n + "格式仅提供实验性支持！" });
                        case 18:
                            e.next = 22;
                            break;
                        case 20:
                            i = o, s = c.handler(i);
                        case 22:
                            return l = s.Decrypt(i), f = Object(a["b"])(l, c.ext), d = a["a"][f], p = new Blob([l], { type: d }), e.next = 28, v.parseBlob(p);
                        case 28:
                            return m = e.sent, h = Object(a["f"])(m.common.artist, m.common.title, r), c.detect && _(u, s.Matrix128, h.artist, h.title, m.common.album, r, n), e.abrupt("return", { status: !0, title: h.title, artist: h.artist, ext: f, album: m.common.album, picture: Object(a["e"])(m), file: URL.createObjectURL(p), mime: d });
                        case 32:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), x.apply(this, arguments)
        }

        function _(e, t, r, n, a, c, o) { fetch("https://stats.ixarea.com/collect/qmcmask/usage", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ Mask: Array.from(t), Key: Array.from(e), Artist: r, Title: n, Album: a, Filename: c, Format: o }) }).then().catch() }

        function O(e, t, r) { return j.apply(this, arguments) }

        function j() {
            return j = Object(n["a"])(regeneratorRuntime.mark((function e(t, r, n) {
                var a, c;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, fetch("https://stats.ixarea.com/collect/qmcmask/query", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ Format: n, Key: Array.from(t), Filename: r }) });
                        case 3:
                            return a = e.sent, e.next = 6, a.json();
                        case 6:
                            return c = e.sent, e.abrupt("return", b(c.Matrix58, c.Super58A, c.Super58B));
                        case 10:
                            e.prev = 10, e.t0 = e["catch"](0);
                        case 12:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 10]
                ])
            }))), j.apply(this, arguments)
        }
    },
    bd2e: function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "CommonDecrypt", (function() { return s }));
        r("baa5"), r("b0c0"), r("96cf");
        var n = r("1da1"),
            a = r("dde9"),
            c = r("b6cf"),
            o = r("fd2f"),
            i = r("a8ee");

        function s(e) { return u.apply(this, arguments) }

        function u() {
            return u = Object(n["a"])(regeneratorRuntime.mark((function e(t) {
                var r, n, s;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            r = t.name.substring(t.name.lastIndexOf(".") + 1, t.name.length).toLowerCase(), n = t.name.substring(0, t.name.lastIndexOf(".")), e.t0 = r, e.next = "ncm" === e.t0 ? 5 : "mp3" === e.t0 ? 9 : "flac" === e.t0 ? 9 : "m4a" === e.t0 ? 9 : "ogg" === e.t0 ? 9 : "tm0" === e.t0 ? 13 : "tm3" === e.t0 ? 13 : "qmc3" === e.t0 ? 17 : "qmc0" === e.t0 ? 17 : "qmcflac" === e.t0 ? 17 : "qmcogg" === e.t0 ? 17 : "tkm" === e.t0 ? 17 : "bkcmp3" === e.t0 ? 17 : "bkcflac" === e.t0 ? 17 : "mflac" === e.t0 ? 17 : "mgg" === e.t0 ? 17 : "tm2" === e.t0 ? 21 : "tm6" === e.t0 ? 21 : 25;
                            break;
                        case 5:
                            return e.next = 7, a.Decrypt(t.raw);
                        case 7:
                            return s = e.sent, e.abrupt("break", 26);
                        case 9:
                            return e.next = 11, o.Decrypt(t.raw, n, r);
                        case 11:
                            return s = e.sent, e.abrupt("break", 26);
                        case 13:
                            return e.next = 15, o.Decrypt(t.raw, n, "mp3");
                        case 15:
                            return s = e.sent, e.abrupt("break", 26);
                        case 17:
                            return e.next = 19, c.Decrypt(t.raw, n, r);
                        case 19:
                            return s = e.sent, e.abrupt("break", 26);
                        case 21:
                            return e.next = 23, i.Decrypt(t.raw, n);
                        case 23:
                            return s = e.sent, e.abrupt("break", 26);
                        case 25:
                            s = { status: !1, message: "不支持此文件格式" };
                        case 26:
                            return s.rawExt = r, s.rawFilename = n, e.abrupt("return", s);
                        case 29:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), u.apply(this, arguments)
        }
    },
    bfa2: function(e, t, r) {
        var n = r("3d67"),
            a = ["CommonDecrypt"];
        e.exports = function() { var e = new Worker(r.p + "e495d03829e7f9f45920.worker.js", { name: "[hash].worker.js" }); return n(e, a), e }
    },
    dde9: function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "Decrypt", (function() { return u }));
        r("4160"), r("a15b"), r("d81d"), r("fb6a"), r("ace4"), r("d3b7"), r("ac1f"), r("25f0"), r("3ca3"), r("5319"), r("5cc6"), r("9a8c"), r("a975"), r("735e"), r("c1ac"), r("d139"), r("3a7b"), r("d5d6"), r("82f8"), r("e91f"), r("60bd"), r("5f96"), r("3280"), r("3fcc"), r("ca91"), r("25a1"), r("cd26"), r("3c5d"), r("2954"), r("649e"), r("219c"), r("170b"), r("b39a"), r("72f7"), r("159b"), r("ddb0"), r("2b3d"), r("96cf");
        var n = r("1da1"),
            a = r("06dc"),
            c = r("3452"),
            o = r("7907"),
            i = c.enc.Hex.parse("687a4852416d736f356b496e62617857"),
            s = c.enc.Hex.parse("2331346C6A6B5F215C5D2630553C2728");

        function u(e) { return l.apply(this, arguments) }

        function l() {
            return l = Object(n["a"])(regeneratorRuntime.mark((function e(t) {
                var r, n, c, o, i, s, u, l, d, b, g, w;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(a["d"])(t);
                        case 2:
                            if (r = e.sent, n = new DataView(r), 1313166403 === n.getUint32(0, !0) && 1296122950 === n.getUint32(4, !0)) { e.next = 6; break }
                            return e.abrupt("return", { status: !1, message: "此ncm文件已损坏" });
                        case 6:
                            for (c = p(n, r, 10), o = m(c.data), i = h(n, r, c.offset), s = i.data, u = i.offset + n.getUint32(i.offset + 5, !0) + 13, l = new Uint8Array(r, u), d = 0; d < l.length; ++d) l[d] ^= o[255 & d];
                            if (void 0 === s.format && (s.format = Object(a["b"])(l, "mp3")), b = a["a"][s.format], g = [], s.artist.forEach((function(e) { return g.push(e[0]) })), "mp3" !== s.format) { e.next = 21; break }
                            return e.next = 20, f(l, g, s.musicName, s.album, s.albumPic);
                        case 20:
                            l = e.sent;
                        case 21:
                            return w = new Blob([l], { type: b }), e.abrupt("return", { status: !0, title: s.musicName, artist: g.join(" & "), ext: s.format, album: s.album, picture: s.albumPic, file: URL.createObjectURL(w), mime: b });
                        case 23:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), l.apply(this, arguments)
        }

        function f(e, t, r, n, a) { return d.apply(this, arguments) }

        function d() {
            return d = Object(n["a"])(regeneratorRuntime.mark((function e(t, r, n, a, c) {
                var i, s;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (i = new o(t), i.setFrame("TPE1", r).setFrame("TIT2", n).setFrame("TALB", a), "" === c) { e.next = 15; break }
                            return e.prev = 3, e.next = 6, fetch(c);
                        case 6:
                            return e.next = 8, e.sent.arrayBuffer();
                        case 8:
                            s = e.sent, i.setFrame("APIC", { type: 3, data: s, description: "Cover" }), e.next = 15;
                            break;
                        case 12:
                            e.prev = 12, e.t0 = e["catch"](3), console.log("Fail to write cover image!");
                        case 15:
                            return i.addTag(), e.abrupt("return", i.arrayBuffer);
                        case 17:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [3, 12]
                ])
            }))), d.apply(this, arguments)
        }

        function p(e, t, r) {
            var n = e.getUint32(r, !0);
            r += 4;
            var a = new Uint8Array(t, r, n).map((function(e) { return 100 ^ e }));
            r += n;
            for (var o = c.AES.decrypt({ ciphertext: c.lib.WordArray.create(a) }, i, { mode: c.mode.ECB, padding: c.pad.Pkcs7 }), s = new Uint8Array(o.sigBytes), u = o.words, l = o.sigBytes, f = 0; f < l; f++) s[f] = u[f >>> 2] >>> 24 - f % 4 * 8 & 255;
            return { offset: r, data: s.slice(17) }
        }

        function m(e) {
            for (var t = new Uint8Array(Array(256).keys()), r = e.length, n = 0, a = 0; a < 256; a++) {
                n = t[a] + n + e[a % r] & 255;
                var c = [t[n], t[a]];
                t[a] = c[0], t[n] = c[1]
            }
            return t.map((function(e, t, r) {
                t = t + 1 & 255;
                var n = r[t],
                    a = r[t + n & 255];
                return r[n + a & 255]
            }))
        }

        function h(e, t, r) {
            var n = e.getUint32(r, !0);
            if (r += 4, 0 === n) return {};
            var a = new Uint8Array(t, r, n).map((function(e) { return 99 ^ e }));
            r += n;
            var o = c.AES.decrypt({ ciphertext: c.enc.Base64.parse(c.lib.WordArray.create(a.slice(22)).toString(c.enc.Utf8)) }, s, { mode: c.mode.ECB, padding: c.pad.Pkcs7 }),
                i = JSON.parse(o.toString(c.enc.Utf8).slice(6));
            return i.albumPic = i.albumPic.replace("http:", "https:"), { data: i, offset: r }
        }
    },
    fd2f: function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "Decrypt", (function() { return o }));
        r("ace4"), r("d3b7"), r("3ca3"), r("5cc6"), r("9a8c"), r("a975"), r("735e"), r("c1ac"), r("d139"), r("3a7b"), r("d5d6"), r("82f8"), r("e91f"), r("60bd"), r("5f96"), r("3280"), r("3fcc"), r("ca91"), r("25a1"), r("cd26"), r("3c5d"), r("2954"), r("649e"), r("219c"), r("170b"), r("b39a"), r("72f7"), r("ddb0"), r("2b3d"), r("96cf");
        var n = r("1da1"),
            a = r("06dc"),
            c = r("cb96");

        function o(e, t, r) { return i.apply(this, arguments) }

        function i() {
            return i = Object(n["a"])(regeneratorRuntime.mark((function e(t, r, n) {
                var o, i, s, u, l, f = arguments;
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            if (o = !(f.length > 3 && void 0 !== f[3]) || f[3], i = n, !o) { e.next = 10; break }
                            return e.t0 = Uint8Array, e.next = 6, Object(a["d"])(t);
                        case 6:
                            e.t1 = e.sent, s = new e.t0(e.t1), i = Object(a["b"])(s, n), i !== n && (t = new Blob([s], { type: a["a"][i] }));
                        case 10:
                            return e.next = 12, c.parseBlob(t);
                        case 12:
                            return u = e.sent, l = Object(a["f"])(u.common.artist, u.common.title, r), e.abrupt("return", { status: !0, title: l.title, artist: l.artist, ext: i, album: u.common.album, picture: Object(a["e"])(u), file: URL.createObjectURL(t), mime: a["a"][i] });
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), i.apply(this, arguments)
        }
    }
});
//# sourceMappingURL=app.7646e312.js.map