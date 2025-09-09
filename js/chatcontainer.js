(self.webpackChunkwidget_react = self.webpackChunkwidget_react || []).push([[535], {
    93379: function(e) {
        var t = {
            animationIterationCount: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridColumn: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            stopOpacity: !0,
            strokeDashoffset: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        };
        e.exports = function(e, n) {
            return "number" != typeof n || t[e] ? n : n + "px"
        }
    },
    79601: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(67375))
          , r = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = M(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , i = n(29865)
          , l = a(n(45697))
          , s = a(n(94184))
          , u = a(n(96394))
          , c = n(73549)
          , d = n(97490)
          , f = n(21476)
          , p = n(74002)
          , h = a(n(65885))
          , m = n(18276)
          , g = n(60067)
          , _ = n(80797)
          , v = n(80352)
          , b = n(12796)
          , y = n(11710)
          , w = n(8717)
          , E = n(81351)
          , T = n(32891)
          , S = a(n(57597));
        function M(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (M = function(e) {
                return e ? n : t
            }
            )(e)
        }
        const C = r.default.lazy(( () => n.e(437).then(n.bind(n, 93713))))
          , O = r.default.lazy(( () => n.e(772).then(n.bind(n, 93393))))
          , k = [d.Route.CHAT, d.Route.CHAT_CALL, d.Route.CHAT_MIN, d.Route.CHAT_SOCIAL, d.Route.CHAT_SETUP_CALL, d.Route.DEPARTMENTS, d.Route.INTRODUCE, d.Route.DEBUG]
          , j = [d.Route.CHAT, d.Route.CHAT_CALL, d.Route.CHAT_SOCIAL]
          , N = [d.Route.CHAT, d.Route.CHAT_CALL, d.Route.CHAT_SOCIAL]
          , I = e => {
            let t = e.showHeaderText
              , n = e.showBody
              , a = e.hasIntegration
              , i = e.route
              , l = e.callbackStatus;
            const M = (0,
            r.useRef)(null)
              , I = (0,
            r.useState)({
                inputHeight: 0
            })
              , x = (0,
            o.default)(I, 2)
              , R = x[0]
              , P = x[1]
              , A = (0,
            _.useWidgetConstructorContext)().isWidgetConstructor
              , D = !v.platform.isMobileOrTablet && (f.Router.getCurrentRoute() === d.Route.INTRODUCE || "cw_connected" === l && f.Router.getCurrentRoute() === d.Route.CALL)
              , L = () => {
                if ("sb" === a)
                    return;
                return u.default.joint && (u.default.joint.vk || u.default.joint.fb || u.default.joint.sb) ? r.default.createElement(c.Path, {
                    paths: [d.Route.CHAT_SOCIAL],
                    withMountTransition: !0,
                    withUnmountTransition: !0,
                    transition: "PopupSlideUpEULA",
                    name: "ChatSocialPopup",
                    duration: 300,
                    cheap: !0
                }, r.default.createElement("jdiv", {
                    className: S.default.popupFull
                }, r.default.createElement(h.default, {
                    onClose: () => {
                        f.Router.next(d.RouterEvent.ToChat)
                    }
                }))) : null
            }
            ;
            return r.default.createElement("jdiv", {
                className: (0,
                s.default)({
                    [S.default.main]: !v.platform.isMobileOrTablet && !v.platform.isChatPage,
                    [S.default.mobile]: v.platform.isMobileOrChatpage,
                    [S.default.__static]: D,
                    [S.default.noShadow]: !t
                }),
                ref: M
            }, r.default.createElement(c.Path, {
                paths: k,
                name: "ChatHeader",
                className: S.default.headerBox,
                isStatic: D
            }, r.default.createElement("jdiv", {
                className: S.default.header
            }, r.default.createElement(p.HeaderPure, {
                showBody: n
            }))), r.default.createElement(c.Path, {
                paths: j,
                name: "ChatBody",
                className: S.default.bodyWrap
            }, r.default.createElement("jdiv", {
                className: (0,
                s.default)({
                    [S.default.body]: !0,
                    [S.default.show]: n
                })
            }, r.default.createElement(y.MessagesMainTs, null)), r.default.createElement(E.DisconnectAlert, null), L()), ( () => {
                if (-1 !== N.indexOf(i))
                    return r.default.createElement(c.Path, {
                        paths: N,
                        name: "ChatInput",
                        transition: "Fade",
                        shouldWait: 0,
                        className: (0,
                        s.default)({
                            [S.default.input]: !0,
                            [S.default.show]: !0,
                            [S.default.__widgetConstructor]: A
                        })
                    }, r.default.createElement(T.InputContainer, {
                        onInputChangeHeight: e => {
                            R.inputHeight !== e && P({
                                inputHeight: e
                            })
                        }
                    }))
            }
            )(), (0,
            w.shouldRedirectToIntroduce)() ? r.default.createElement(c.Path, {
                paths: [d.Route.INTRODUCE],
                name: "Introduce",
                withMountTransition: !0,
                transition: f.Router.getPrevRoute() === d.Route.LABEL ? "FadeWithDelay" : "Fade",
                waitBeforeUnmount: 100
            }, i === d.Route.INTRODUCE && r.default.createElement("jdiv", {
                className: (0,
                s.default)({
                    [S.default.body]: !0,
                    [S.default.show]: n
                })
            }, r.default.createElement(g.Introduce, null))) : null, u.default.departments ? r.default.createElement(c.Path, {
                paths: [d.Route.DEPARTMENTS],
                name: "Departments",
                shouldWait: 0,
                className: (0,
                s.default)({
                    [S.default.body]: !0,
                    [S.default.show]: n
                })
            }, r.default.createElement(b.Departments, null)) : null, i !== d.Route.DEBUG ? null : r.default.createElement(c.Path, {
                paths: [d.Route.DEBUG],
                name: "Debug",
                shouldWait: 0,
                className: (0,
                s.default)({
                    [S.default.body]: !0,
                    [S.default.show]: n
                })
            }, r.default.createElement(r.default.Suspense, {
                fallback: r.default.createElement("jdiv", {
                    className: S.default.loading
                }, (0,
                m.l10n)("cb_loading"))
            }, r.default.createElement(C, null))), i !== d.Route.CHAT_SETUP_CALL ? null : r.default.createElement(c.Path, {
                paths: [d.Route.CHAT_SETUP_CALL],
                withMountTransition: !0,
                withUnmountTransition: !0,
                transition: "PopupSlideUpEULA",
                name: "ChatBodySetupCallPopup",
                fixed: !0,
                duration: 300,
                cheap: !0
            }, r.default.createElement("jdiv", {
                className: S.default.popupFull
            }, r.default.createElement(r.default.Suspense, {
                fallback: r.default.createElement("jdiv", {
                    className: S.default.loading
                }, (0,
                m.l10n)("cb_loading"))
            }, r.default.createElement(O, null)))))
        }
        ;
        I.propTypes = {
            showHeaderText: l.default.bool,
            showBody: l.default.bool,
            hasIntegration: l.default.bool,
            route: l.default.string,
            callbackStatus: l.default.oneOfType([l.default.string, l.default.bool])
        };
        var x = (0,
        i.connect)((e => ({
            route: e.app.route,
            callbackStatus: e.callback.status,
            hasIntegration: e.client.hasIntegration
        })))(I);
        t.default = x
    },
    32325: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(98661))
          , r = a(n(40704))
          , i = a(n(42805))
          , l = n(21476)
          , s = n(97490)
          , u = a(n(45697));
        const c = e => {
            let t = e.onClose;
            return o.default.createElement("jdiv", {
                className: i.default.popupClose,
                onClick: e => {
                    e.stopPropagation(),
                    l.Router.next(s.RouterEvent.Cancel),
                    t && t(e)
                }
            }, o.default.createElement(r.default, {
                className: i.default.closeIcon,
                iconName: "icon-popup-close",
                color: "#959DA5",
                hoverColor: "#222D38"
            }))
        }
        ;
        c.propTypes = {
            onClose: u.default.func
        };
        var d = o.default.memo(c);
        t.default = d
    },
    88155: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(33119))
          , r = a(n(92664))
          , i = a(n(7819))
          , l = a(n(84827))
          , s = a(n(85299))
          , u = a(n(55536))
          , c = a(n(61125))
          , d = a(n(88436))
          , f = a(n(23101))
          , p = k(n(98661))
          , h = a(n(53879))
          , m = k(n(54087))
          , g = n(21951)
          , _ = n(32183)
          , v = n(45926)
          , b = n(44240)
          , y = n(80352)
          , w = n(61699);
        const E = ["style"]
          , T = ["style"]
          , S = ["style"]
          , M = ["style"]
          , C = ["onScroll", "onScrollFrame", "onScrollStart", "onScrollStop", "onUpdate", "renderView", "renderTrackHorizontal", "renderTrackVertical", "renderThumbHorizontal", "renderThumbVertical", "tagName", "hideTracksWhenNotNeeded", "autoHide", "autoHideTimeout", "autoHideDuration", "thumbSize", "thumbMinSize", "onlyY", "universal", "autoHeight", "autoHeightMin", "autoHeightMax", "scrollMarginTop", "railClass", "scrollWrapClass", "position", "style", "children"];
        function O(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (O = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function k(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = O(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            return a.default = e,
            n && n.set(e, a),
            a
        }
        function j(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                u.default)(e);
                if (t) {
                    var o = (0,
                    u.default)(this).constructor;
                    n = Reflect.construct(a, arguments, o)
                } else
                    n = a.apply(this, arguments);
                return (0,
                s.default)(this, n)
            }
        }
        function N(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function I(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? N(Object(n), !0).forEach((function(t) {
                    (0,
                    c.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const x = () => !1;
        let R, P;
        Math.easeInOutQuad = function(e, t, n, a) {
            return (e /= a / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
        }
        ;
        let A = function(e) {
            (0,
            l.default)(n, e);
            var t = j(n);
            function n(e) {
                var a;
                (0,
                o.default)(this, n);
                for (var r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
                    l[s - 1] = arguments[s];
                return (a = t.call.apply(t, [this, e].concat(l))).getScrollLeft = a.getScrollLeft.bind((0,
                i.default)(a)),
                a.getScrollTop = a.getScrollTop.bind((0,
                i.default)(a)),
                a.getScrollWidth = a.getScrollWidth.bind((0,
                i.default)(a)),
                a.getScrollHeight = a.getScrollHeight.bind((0,
                i.default)(a)),
                a.getClientWidth = a.getClientWidth.bind((0,
                i.default)(a)),
                a.getClientHeight = a.getClientHeight.bind((0,
                i.default)(a)),
                a.getValues = a.getValues.bind((0,
                i.default)(a)),
                a.getThumbHorizontalWidth = a.getThumbHorizontalWidth.bind((0,
                i.default)(a)),
                a.getThumbVerticalHeight = a.getThumbVerticalHeight.bind((0,
                i.default)(a)),
                a.getScrollLeftForOffset = a.getScrollLeftForOffset.bind((0,
                i.default)(a)),
                a.getScrollTopForOffset = a.getScrollTopForOffset.bind((0,
                i.default)(a)),
                a.getScrollDiff = a.getScrollDiff.bind((0,
                i.default)(a)),
                a.scrollLeft = a.scrollLeft.bind((0,
                i.default)(a)),
                a.scrollTop = a.scrollTop.bind((0,
                i.default)(a)),
                a.scrollToLeft = a.scrollToLeft.bind((0,
                i.default)(a)),
                a.scrollToTop = a.scrollToTop.bind((0,
                i.default)(a)),
                a.scrollToRight = a.scrollToRight.bind((0,
                i.default)(a)),
                a.scrollToBottom = a.scrollToBottom.bind((0,
                i.default)(a)),
                a.handleTrackMouseEnter = a.handleTrackMouseEnter.bind((0,
                i.default)(a)),
                a.handleTrackMouseLeave = a.handleTrackMouseLeave.bind((0,
                i.default)(a)),
                a.handleHorizontalTrackMouseDown = a.handleHorizontalTrackMouseDown.bind((0,
                i.default)(a)),
                a.handleVerticalTrackMouseDown = a.handleVerticalTrackMouseDown.bind((0,
                i.default)(a)),
                a.handleHorizontalThumbMouseDown = a.handleHorizontalThumbMouseDown.bind((0,
                i.default)(a)),
                a.handleVerticalThumbMouseDown = a.handleVerticalThumbMouseDown.bind((0,
                i.default)(a)),
                a.handleWindowResize = a.handleWindowResize.bind((0,
                i.default)(a)),
                a.handleScroll = a.handleScroll.bind((0,
                i.default)(a)),
                a.handleMouseWheel = a.handleMouseWheel.bind((0,
                i.default)(a)),
                a.handleDrag = a.handleDrag.bind((0,
                i.default)(a)),
                a.handleDragEnd = a.handleDragEnd.bind((0,
                i.default)(a)),
                a.state = {
                    didMountUniversal: !1
                },
                a.animated = !1,
                a.ignore = !1,
                a.callbackCounter = 0,
                a.view = {},
                a
            }
            return (0,
            r.default)(n, [{
                key: "componentDidMount",
                value: function() {
                    this.addListeners(),
                    this.update(),
                    this.componentDidMountUniversal()
                }
            }, {
                key: "componentDidMountUniversal",
                value: function() {
                    this.props.universal && this.setState({
                        didMountUniversal: !0
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.update()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.removeListeners(),
                    this.requestFrame && (0,
                    m.cancel)(this.requestFrame),
                    clearTimeout(this.hideTracksTimeout),
                    clearInterval(this.detectScrollingInterval)
                }
            }, {
                key: "setIgnore",
                value: function(e) {
                    this.ignore = e
                }
            }, {
                key: "getIgnore",
                value: function() {
                    return this.ignore
                }
            }, {
                key: "getScrollLeft",
                value: function() {
                    return this.view ? this.view.scrollLeft : 0
                }
            }, {
                key: "getScrollTop",
                value: function() {
                    return this.view.scrollTop
                }
            }, {
                key: "getScrollWidth",
                value: function() {
                    return this.view.scrollWidth
                }
            }, {
                key: "getScrollHeight",
                value: function() {
                    return this.view.scrollHeight
                }
            }, {
                key: "getScrollDiff",
                value: function() {
                    return this.getScrollHeight() - this.getScrollTop() - this.getClientHeight()
                }
            }, {
                key: "hasScroll",
                value: function() {
                    return this.getScrollHeight() > this.getClientHeight()
                }
            }, {
                key: "getClientWidth",
                value: function() {
                    return this.view.clientWidth
                }
            }, {
                key: "getClientHeight",
                value: function() {
                    return this.view.clientHeight
                }
            }, {
                key: "getValues",
                value: function() {
                    const e = this.view
                      , t = e.scrollLeft
                      , n = e.scrollTop
                      , a = e.scrollWidth
                      , o = e.scrollHeight
                      , r = e.clientWidth
                      , i = e.clientHeight;
                    return {
                        left: t / (a - r) || 0,
                        top: n / (o - i) || 0,
                        scrollLeft: t,
                        scrollTop: n,
                        scrollWidth: a,
                        scrollHeight: o,
                        clientWidth: r,
                        clientHeight: i
                    }
                }
            }, {
                key: "getThumbHorizontalWidth",
                value: function() {
                    const e = this.props
                      , t = e.thumbSize
                      , n = e.thumbMinSize
                      , a = this.view
                      , o = a.scrollWidth
                      , r = a.clientWidth
                      , i = (0,
                    _.getInnerWidth)(this.trackHorizontal)
                      , l = Math.ceil(r / o * i);
                    return i === l ? 0 : t || Math.max(l, n)
                }
            }, {
                key: "getThumbVerticalHeight",
                value: function() {
                    const e = this.props
                      , t = e.thumbSize
                      , n = e.thumbMinSize
                      , a = this.view
                      , o = a.scrollHeight
                      , r = a.clientHeight
                      , i = (0,
                    _.getInnerHeight)(this.trackVertical)
                      , l = Math.ceil(r / o * i);
                    return i === l ? 0 : t || Math.max(l, n)
                }
            }, {
                key: "getScrollLeftForOffset",
                value: function(e) {
                    const t = this.view
                      , n = t.scrollWidth
                      , a = t.clientWidth;
                    return e / ((0,
                    _.getInnerWidth)(this.trackHorizontal) - this.getThumbHorizontalWidth()) * (n - a)
                }
            }, {
                key: "getScrollTopForOffset",
                value: function(e) {
                    const t = this.view
                      , n = t.scrollHeight
                      , a = t.clientHeight;
                    return e / ((0,
                    _.getInnerHeight)(this.trackVertical) - this.getThumbVerticalHeight()) * (n - a)
                }
            }, {
                key: "scrollLeft",
                value: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.view.scrollLeft = e
                }
            }, {
                key: "scrollTop",
                value: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.view.scrollTop = e
                }
            }, {
                key: "scrollToLeft",
                value: function() {
                    this.view.scrollLeft = 0
                }
            }, {
                key: "scrollToTop",
                value: function() {
                    this.view.scrollTop = 0
                }
            }, {
                key: "scrollToRight",
                value: function() {
                    this.view.scrollLeft = this.view.scrollWidth
                }
            }, {
                key: "scrollToBottom",
                value: function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!this.hasScroll())
                        return;
                    const t = this.getScrollHeight();
                    0 !== t ? e ? this.view.scrollTo({
                        top: t,
                        behavior: "smooth"
                    }) : this.view.scrollTop = this.view.scrollHeight : this.view.scrollTop = t
                }
            }, {
                key: "addListeners",
                value: function() {
                    if ("undefined" == typeof document)
                        return;
                    const e = this.view
                      , t = this.trackHorizontal
                      , n = this.trackVertical
                      , a = this.thumbHorizontal
                      , o = this.thumbVertical
                      , r = this.container;
                    (0,
                    g.addListener)(e, "scroll", this.handleScroll, !0),
                    (0,
                    g.addListener)(e, "mousewheel", this.handleMouseWheel),
                    (0,
                    _.getScrollBarWidth)() && (t && (t.addEventListener("mouseenter", this.handleTrackMouseEnter),
                    t.addEventListener("mouseleave", this.handleTrackMouseLeave),
                    t.addEventListener("mousedown", this.handleHorizontalTrackMouseDown)),
                    r && r.addEventListener("mouseenter", this.handleTrackCheckHide.bind(this)),
                    n && (n.addEventListener("mouseenter", this.handleTrackMouseEnter),
                    n.addEventListener("mouseleave", this.handleTrackMouseLeave),
                    n.addEventListener("mousedown", this.handleVerticalTrackMouseDown)),
                    a && a.addEventListener("mousedown", this.handleHorizontalThumbMouseDown),
                    o && o.addEventListener("mousedown", this.handleVerticalThumbMouseDown),
                    window.addEventListener("resize", this.handleWindowResize))
                }
            }, {
                key: "removeListeners",
                value: function() {
                    if ("undefined" == typeof document)
                        return;
                    const e = this.view
                      , t = this.trackHorizontal
                      , n = this.trackVertical
                      , a = this.thumbHorizontal
                      , o = this.thumbVertical;
                    e.removeEventListener("scroll", this.handleScroll),
                    e.removeEventListener("mousewheel", this.handleMouseWheel),
                    (0,
                    _.getScrollBarWidth)() && (t && (t.removeEventListener("mouseenter", this.handleTrackMouseEnter),
                    t.removeEventListener("mouseleave", this.handleTrackMouseLeave),
                    t.removeEventListener("mousedown", this.handleHorizontalTrackMouseDown)),
                    n && (n.removeEventListener("mouseenter", this.handleTrackMouseEnter),
                    n.removeEventListener("mouseleave", this.handleTrackMouseLeave),
                    n.removeEventListener("mousedown", this.handleVerticalTrackMouseDown)),
                    a && a.removeEventListener("mousedown", this.handleHorizontalThumbMouseDown),
                    o && o.removeEventListener("mousedown", this.handleVerticalThumbMouseDown),
                    window.removeEventListener("resize", this.handleWindowResize),
                    this.teardownDragging())
                }
            }, {
                key: "handleScroll",
                value: function(e) {
                    const t = this.props
                      , n = t.onScroll
                      , a = t.onScrollFrame;
                    n && n(e),
                    this.update((e => {
                        const t = e.scrollLeft
                          , n = e.scrollTop;
                        this.viewScrollLeft = t,
                        this.viewScrollTop = n,
                        a && a(e)
                    }
                    )),
                    this.detectScrolling()
                }
            }, {
                key: "handleTouchMove",
                value: function(e) {
                    if ((0,
                    _.isInput)(e.target.tagName)) {
                        e.stopPropagation(),
                        e.preventDefault();
                        const t = this.view.childNodes[0].clientHeight - this.container.parentNode.clientHeight
                          , n = R - (e.touches[0].pageY + P);
                        t > n && 0 < n && (R -= e.touches[0].pageY + P,
                        this.view.style.bottom = R + "px")
                    }
                }
            }, {
                key: "handleTouchStart",
                value: function(e) {
                    -1 === ["INPUT", "TEXTAREA", "A"].indexOf(e.target.tagName) && (e.stopPropagation(),
                    e.preventDefault(),
                    P = -1 * e.touches[0].pageY)
                }
            }, {
                key: "handleMouseWheel",
                value: function(e) {
                    e.stopPropagation();
                    const t = e.wheelDelta || e.originalEvent && e.originalEvent.wheelDelta || -e.detail
                      , n = this.view.scrollTop + this.view.clientHeight - this.view.scrollHeight >= 0
                      , a = this.view.scrollTop <= 0;
                    (t < 0 && n || t > 0 && a) && e.preventDefault()
                }
            }, {
                key: "handleScrollStart",
                value: function() {
                    const e = this.props.onScrollStart;
                    e && e(),
                    this.handleScrollStartAutoHide()
                }
            }, {
                key: "handleScrollStartAutoHide",
                value: function() {
                    this.props.autoHide && this.showTracks()
                }
            }, {
                key: "handleScrollStop",
                value: function() {
                    const e = this.props.onScrollStop;
                    e && e(),
                    this.handleScrollStopAutoHide()
                }
            }, {
                key: "handleScrollStopAutoHide",
                value: function() {
                    this.props.autoHide && this.hideTracks()
                }
            }, {
                key: "handleWindowResize",
                value: function() {
                    this.update()
                }
            }, {
                key: "handleHorizontalTrackMouseDown",
                value: function(e) {
                    e.preventDefault();
                    const t = e.target
                      , n = e.clientX
                      , a = t.getBoundingClientRect().left
                      , o = this.getThumbHorizontalWidth()
                      , r = Math.abs(a - n) - o / 2;
                    this.view.scrollLeft = this.getScrollLeftForOffset(r)
                }
            }, {
                key: "handleVerticalTrackMouseDown",
                value: function(e) {
                    e.preventDefault();
                    const t = e.target
                      , n = e.clientY
                      , a = t.getBoundingClientRect().top
                      , o = this.getThumbVerticalHeight()
                      , r = Math.abs(a - n) - o / 2;
                    this.view.scrollTop = this.getScrollTopForOffset(r)
                }
            }, {
                key: "handleHorizontalThumbMouseDown",
                value: function(e) {
                    e.preventDefault(),
                    this.handleDragStart(e);
                    const t = e.target
                      , n = e.clientX
                      , a = t.offsetWidth
                      , o = t.getBoundingClientRect().left;
                    this.prevPageX = a - (n - o)
                }
            }, {
                key: "handleVerticalThumbMouseDown",
                value: function(e) {
                    e.preventDefault(),
                    this.handleDragStart(e);
                    const t = e.target
                      , n = e.clientY
                      , a = t.offsetHeight
                      , o = t.getBoundingClientRect().top;
                    this.prevPageY = a - (n - o)
                }
            }, {
                key: "setupDragging",
                value: function() {
                    const e = (0,
                    v.getPageWindow)().document;
                    (0,
                    h.default)(e.body, w.disableSelectStyle),
                    e.addEventListener("mousemove", this.handleDrag),
                    e.addEventListener("mouseup", this.handleDragEnd),
                    e.onselectstart = x
                }
            }, {
                key: "teardownDragging",
                value: function() {
                    const e = (0,
                    v.getPageWindow)().document;
                    (0,
                    h.default)(e.body, w.disableSelectStyleReset),
                    e.removeEventListener("mousemove", this.handleDrag),
                    e.removeEventListener("mouseup", this.handleDragEnd),
                    e.onselectstart = void 0
                }
            }, {
                key: "handleDragStart",
                value: function(e) {
                    this.dragging = !0,
                    e.stopImmediatePropagation(),
                    this.setupDragging()
                }
            }, {
                key: "handleDrag",
                value: function(e) {
                    if (this.prevPageX) {
                        const t = e.clientX
                          , n = this.trackHorizontal.getBoundingClientRect().left
                          , a = this.getThumbHorizontalWidth() - this.prevPageX
                          , o = -n + t - a;
                        this.view.scrollLeft = this.getScrollLeftForOffset(o)
                    }
                    if (this.prevPageY) {
                        const t = e.clientY
                          , n = this.trackVertical.getBoundingClientRect().top
                          , a = this.getThumbVerticalHeight() - this.prevPageY
                          , o = -n + t - a;
                        this.view.scrollTop = this.getScrollTopForOffset(o)
                    }
                    return !1
                }
            }, {
                key: "handleDragEnd",
                value: function() {
                    this.dragging = !1,
                    this.prevPageX = this.prevPageY = 0,
                    this.teardownDragging(),
                    this.handleDragEndAutoHide()
                }
            }, {
                key: "handleDragEndAutoHide",
                value: function() {
                    this.props.autoHide && this.hideTracks()
                }
            }, {
                key: "handleTrackCheckHide",
                value: function() {
                    this.props.autoHide && this.view && this.trackVertical && (this.hasScroll() ? this.showTracks() : (0,
                    h.default)(this.trackVertical, {
                        opacity: 0
                    }))
                }
            }, {
                key: "handleTrackMouseEnter",
                value: function() {
                    this.hasScroll() && (this.trackMouseOver = !0,
                    this.handleTrackMouseEnterAutoHide())
                }
            }, {
                key: "handleTrackMouseEnterAutoHide",
                value: function() {
                    this.props.autoHide && this.showTracks()
                }
            }, {
                key: "handleTrackMouseLeave",
                value: function() {
                    this.dragging || (this.trackMouseOver = !1,
                    this.handleTrackMouseLeaveAutoHide())
                }
            }, {
                key: "handleTrackMouseLeaveAutoHide",
                value: function() {
                    this.props.autoHide && this.hideTracks()
                }
            }, {
                key: "showTracks",
                value: function() {
                    clearTimeout(this.hideTracksTimeout),
                    this.trackHorizontal && (0,
                    h.default)(this.trackHorizontal, {
                        opacity: 1
                    }),
                    (0,
                    h.default)(this.trackVertical, {
                        opacity: 1
                    })
                }
            }, {
                key: "hideTracks",
                value: function() {
                    if (this.dragging)
                        return;
                    if (this.scrolling)
                        return;
                    if (this.trackMouseOver)
                        return;
                    const e = this.props.autoHideTimeout;
                    clearTimeout(this.hideTracksTimeout),
                    this.hideTracksTimeout = setTimeout(( () => {
                        this.trackHorizontal && (0,
                        h.default)(this.trackHorizontal, {
                            opacity: 0
                        }),
                        (0,
                        h.default)(this.trackVertical, {
                            opacity: 0
                        })
                    }
                    ), e)
                }
            }, {
                key: "detectScrolling",
                value: function() {
                    this.scrolling || (this.scrolling = !0,
                    this.handleScrollStart(),
                    this.detectScrollingInterval = setInterval(( () => {
                        this.lastViewScrollLeft === this.viewScrollLeft && this.lastViewScrollTop === this.viewScrollTop && (clearInterval(this.detectScrollingInterval),
                        this.scrolling = !1,
                        this.handleScrollStop()),
                        this.lastViewScrollLeft = this.viewScrollLeft,
                        this.lastViewScrollTop = this.viewScrollTop
                    }
                    ), 100))
                }
            }, {
                key: "raf",
                value: function(e) {
                    this.requestFrame && (0,
                    m.cancel)(this.requestFrame);
                    const t = this.enableFallback ? (0,
                    v.getPageWindow)().requestAnimationFrame : m.default;
                    this.requestFrame = t(( () => {
                        this.requestFrame = void 0,
                        this.callbackCounter++,
                        e()
                    }
                    ))
                }
            }, {
                key: "update",
                value: function(e) {
                    this.raf(( () => this._update(e))),
                    setTimeout(( () => {
                        const e = (0,
                        v.getPageWindow)();
                        !this.callbackCounter && e.requestAnimationFrame && (this.enableFallback = !0)
                    }
                    ), 1e3)
                }
            }, {
                key: "_update",
                value: function(e) {
                    const t = this.props
                      , n = t.onUpdate
                      , a = t.hideTracksWhenNotNeeded;
                    if (!this.view)
                        return;
                    const o = this.getValues();
                    if ((0,
                    _.getScrollBarWidth)()) {
                        const e = o.scrollTop
                          , t = o.clientHeight
                          , n = o.scrollHeight
                          , r = (0,
                        _.getInnerHeight)(this.trackVertical)
                          , i = this.getThumbVerticalHeight()
                          , l = {
                            height: i,
                            transform: `translateY(${e / (n - t) * (r - i)}px)`
                        };
                        if (a) {
                            if (this.trackHorizontal) {
                                const e = {
                                    visibility: scrollWidth > clientWidth ? "visible" : "hidden"
                                };
                                (0,
                                h.default)(this.trackHorizontal, e)
                            }
                            const e = {
                                visibility: n > t ? "visible" : "hidden"
                            };
                            (0,
                            h.default)(this.trackVertical, e)
                        }
                        this.thumbHorizontal && (0,
                        h.default)(this.thumbHorizontal, thumbHorizontalStyle),
                        (0,
                        h.default)(this.thumbVertical, l)
                    }
                    n && n(o),
                    "function" == typeof e && e(o)
                }
            }, {
                key: "render",
                value: function() {
                    const e = (0,
                    _.getScrollBarWidth)()
                      , t = this.props
                      , n = (t.onScroll,
                    t.onScrollFrame,
                    t.onScrollStart,
                    t.onScrollStop,
                    t.onUpdate,
                    t.renderView)
                      , a = t.renderTrackHorizontal
                      , o = t.renderTrackVertical
                      , r = t.renderThumbHorizontal
                      , i = t.renderThumbVertical
                      , l = t.tagName
                      , s = (t.hideTracksWhenNotNeeded,
                    t.autoHide)
                      , u = (t.autoHideTimeout,
                    t.autoHideDuration)
                      , c = (t.thumbSize,
                    t.thumbMinSize,
                    t.onlyY)
                      , f = t.universal
                      , h = t.autoHeight
                      , m = t.autoHeightMin
                      , g = t.autoHeightMax
                      , v = (t.scrollMarginTop,
                    t.railClass,
                    t.scrollWrapClass)
                      , E = t.position
                      , T = t.style
                      , S = t.children
                      , M = (0,
                    d.default)(t, C)
                      , O = this.state.didMountUniversal
                      , k = I(I(I({}, w.containerStyleDefault), h && I(I({}, w.containerStyleAutoHeight), {}, {
                        minHeight: m,
                        maxHeight: g
                    })), T)
                      , j = I(I(I(I({}, w.viewStyleDefault), {}, {
                        display: "block",
                        marginRight: e ? -e : 0,
                        marginBottom: !c && e ? -e : 0
                    }, h && I(I({}, w.viewStyleAutoHeight), {}, {
                        minHeight: (0,
                        b.isString)(m) ? `calc(${m} + ${e}px)` : m + e,
                        maxHeight: (0,
                        b.isString)(g) ? `calc(${g} + ${e}px)` : g + e
                    })), h && f && !O && {
                        minHeight: m,
                        maxHeight: g
                    }), f && !O && w.viewStyleUniversalInitial);
                    E && (j.position = E),
                    c && (j.overflowX = "hidden",
                    y.platform.isMobileOrTablet || (j.overflowY = "scroll"));
                    const N = {
                        transition: `opacity ${u}ms`,
                        opacity: 0
                    }
                      , x = I(I(I({}, w.trackHorizontalStyleDefault), s && N), (!e || f && !O) && {
                        display: "none"
                    })
                      , R = I(I(I({}, w.trackVerticalStyleDefault), s && N), (!e || f && !O) && {
                        display: "none"
                    })
                      , P = [(0,
                    p.cloneElement)(n({
                        style: j
                    }, v), {
                        key: "view",
                        ref: e => {
                            this.view = e
                        }
                    }, S)];
                    return c || P.push((0,
                    p.cloneElement)(a({
                        style: x
                    }), {
                        key: "trackHorizontal",
                        ref: e => {
                            this.trackHorizontal = e
                        }
                    }, (0,
                    p.cloneElement)(r({
                        style: w.thumbHorizontalStyleDefault
                    }), {
                        ref: e => {
                            this.thumbHorizontal = e
                        }
                    }))),
                    P.push((0,
                    p.cloneElement)(o({
                        style: R
                    }, this.props.scrollMarginTop, this.props.railClass), {
                        key: "trackVertical",
                        ref: e => {
                            this.trackVertical = e
                        }
                    }, (0,
                    p.cloneElement)(i({
                        style: w.thumbVerticalStyleDefault
                    }), {
                        ref: e => {
                            this.thumbVertical = e
                        }
                    }))),
                    (0,
                    p.createElement)(l, I(I({}, M), {}, {
                        style: k,
                        ref: e => {
                            this.container = e
                        }
                    }), P)
                }
            }]),
            n
        }(p.Component);
        t.default = A,
        A.defaultProps = {
            renderView: function(e, t) {
                return p.default.createElement("jdiv", (0,
                f.default)({
                    className: t
                }, e))
            },
            renderTrackHorizontal: function(e) {
                let t = e.style
                  , n = (0,
                d.default)(e, E);
                const a = I(I({}, t), {}, {
                    right: 2,
                    bottom: 2,
                    left: 2,
                    borderRadius: 3
                });
                return p.default.createElement("jdiv", (0,
                f.default)({
                    style: a
                }, n))
            },
            renderTrackVertical: function(e, t, n) {
                let a = e.style
                  , o = (0,
                d.default)(e, T);
                const r = I(I({}, a), {}, {
                    right: 3,
                    bottom: 2,
                    top: t || 2,
                    borderRadius: 4,
                    width: 8
                });
                return p.default.createElement("jdiv", (0,
                f.default)({
                    className: n,
                    style: r
                }, o))
            },
            renderThumbHorizontal: function(e) {
                let t = e.style
                  , n = (0,
                d.default)(e, S);
                const a = I(I({}, t), {}, {
                    cursor: "pointer",
                    borderRadius: "inherit",
                    backgroundColor: "#d6dce4"
                });
                return p.default.createElement("jdiv", (0,
                f.default)({
                    style: a
                }, n))
            },
            renderThumbVertical: function(e) {
                let t = e.style
                  , n = (0,
                d.default)(e, M);
                const a = I(I({}, t), {}, {
                    cursor: "pointer",
                    borderRadius: "inherit",
                    backgroundColor: "#d6d4d4"
                });
                return p.default.createElement("jdiv", (0,
                f.default)({
                    style: a
                }, n))
            },
            tagName: "jdiv",
            thumbMinSize: 30,
            hideTracksWhenNotNeeded: !0,
            autoHide: !1,
            autoHideTimeout: 1e3,
            autoHideDuration: 200,
            autoHeight: !1,
            autoHeightMin: 0,
            autoHeightMax: 200,
            onlyY: !0,
            universal: !1,
            railClass: "null",
            scrollWrapClass: null
        }
    },
    61699: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.viewStyleUniversalInitial = t.viewStyleDefault = t.viewStyleAutoHeight = t.trackVerticalStyleDefault = t.trackHorizontalStyleDefault = t.thumbVerticalStyleDefault = t.thumbHorizontalStyleDefault = t.disableSelectStyleReset = t.disableSelectStyle = t.containerStyleDefault = t.containerStyleAutoHeight = void 0;
        t.containerStyleDefault = {
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "100%",
            display: "block",
            WebkitOverflowScrolling: "touch"
        };
        t.containerStyleAutoHeight = {
            height: "auto"
        };
        t.viewStyleDefault = {
            position: "absolute",
            maxHeight: "100%",
            top: "auto",
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "scroll",
            WebkitOverflowScrolling: "touch"
        };
        const n = {
            position: "relative",
            top: void 0,
            left: void 0,
            right: void 0,
            bottom: void 0
        };
        t.viewStyleAutoHeight = n;
        t.viewStyleUniversalInitial = {
            overflow: "hidden",
            marginRight: 0,
            marginBottom: 0
        };
        t.trackHorizontalStyleDefault = {
            position: "absolute",
            height: 0
        };
        t.trackVerticalStyleDefault = {
            position: "absolute",
            width: 8
        };
        t.thumbHorizontalStyleDefault = {
            position: "relative",
            display: "block",
            height: "100%"
        };
        t.thumbVerticalStyleDefault = {
            position: "relative",
            display: "block",
            width: "100%"
        };
        t.disableSelectStyle = {
            userSelect: "none"
        };
        t.disableSelectStyleReset = {
            userSelect: ""
        }
    },
    19367: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = m;
        var o = a(n(23101))
          , r = a(n(98661))
          , i = a(n(94184))
          , l = a(n(45697))
          , s = n(18276)
          , u = a(n(43973))
          , c = n(53400)
          , d = n(57930)
          , f = n(59643)
          , p = a(n(78269))
          , h = n(83549);
        function m(e) {
            let t = e.top
              , n = e.bottom;
            (0,
            h.useErrorCatcher)(m.displayName);
            const a = (0,
            f.useEnhanced)()
              , l = a.hidden
              , g = a.fontColor
              , _ = a.isMobile
              , v = a.isTablet
              , b = a.billRu
              , y = a.isOnline
              , w = a.reportTelemetry
              , E = a.route
              , T = (0,
            i.default)({
                [u.default.chatCopyright]: !0,
                [u.default.__mobile]: _,
                [u.default.__tablet]: v,
                [u.default.__hidden]: l,
                [u.default.__chat]: !0,
                [u.default.__call]: n,
                [u.default.__top]: t
            });
            return r.default.createElement("jdiv", (0,
            o.default)({
                className: T
            }, (0,
            c.locator)(d.Locator.CHAT_COPYRIGHT)), r.default.createElement("jdiv", {
                className: u.default.text
            }, r.default.createElement(p.default, {
                billRu: b,
                isOnline: y,
                fontColor: g,
                onClick: () => {
                    w("logo_click", E)
                }
                ,
                startText: (0,
                s.l10n)("businessCopyright", {
                    0: ""
                }),
                isChat: !0
            })))
        }
        m.displayName = "ChatCopyrightContainer",
        m.propTypes = {
            top: l.default.bool,
            bottom: l.default.bool
        }
    },
    78269: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = p;
        var o = a(n(23101))
          , r = a(n(98661))
          , i = a(n(94184))
          , l = a(n(45697))
          , s = n(36874)
          , u = n(45683)
          , c = n(53400)
          , d = a(n(43973))
          , f = a(n(40704));
        function p(e) {
            let t = e.billRu
              , n = e.isOnline
              , a = e.fontColor
              , l = e.onClick
              , p = e.startText
              , h = e.isChat;
            const m = t ? "logo-jivosite" : "logo-jivochat"
              , g = n || h ? s.colorsFromFigma.GREEN_80 : "#62666c"
              , _ = h ? "#323648" : a
              , v = (0,
            u.getUTMLink)("label_tooltip")
              , b = (0,
            i.default)({
                [d.default.link]: !0,
                [d.default.__ru]: t
            });
            return r.default.createElement("a", (0,
            o.default)({
                href: v,
                rel: "nofollow noopener noreferrer",
                target: "_blank",
                className: b,
                onClick: l
            }, (0,
            c.locator)("CHAT_COPYRIGHT_LOGO_LINK")), p, r.default.createElement(f.default, {
                iconName: m,
                color: _,
                color2: g,
                className: d.default.logoIcon
            }))
        }
        p.propTypes = {
            billRu: l.default.bool,
            isOnline: l.default.bool,
            fontColor: l.default.string,
            onClick: l.default.func,
            startText: l.default.string,
            isChat: l.default.bool
        }
    },
    40754: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.reportTelemetry = t.getTooltipPosition = t.getBgBorderStyle = void 0;
        var a = n(32183)
          , o = n(38042);
        t.reportTelemetry = (e, t) => {
            const n = t ? {
                param1: t
            } : void 0;
            (0,
            o.telemetry)(e, n)
        }
        ;
        t.getBgBorderStyle = (e, t, n) => {
            let a = {};
            const o = t || e;
            switch (n) {
            case "left":
                a = {
                    borderRightColor: e
                };
                break;
            case "right":
                a = {
                    borderLeftColor: o
                };
                break;
            case "bottom":
                a = {
                    borderTopColor: o
                }
            }
            return a
        }
        ;
        t.getTooltipPosition = (e, t, n, o) => {
            let r, i, l = {
                top: 0,
                left: 0
            };
            switch (null !== e && t && t() && (i = (0,
            a.getElementPosition)(t())),
            n) {
            case "left":
                r = 10,
                l = {
                    top: 20 + (i ? i.top : 0) + "px",
                    left: 40 + r + "px"
                };
                break;
            case "right":
                r = "en" === o ? 80 : 60,
                l = {
                    top: 20 + (i ? i.top : 0) + "px",
                    right: "50px"
                };
                break;
            case "bottom":
                l = {
                    bottom: "48px",
                    right: (i ? i.windowWidth - i.width - i.left + 30 : 42) + "px"
                }
            }
            return l
        }
    },
    59643: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useEnhanced = function() {
            const e = f.platform.isMobileOrChatpage
              , t = f.platform.isTablet || f.platform.isDesktop && f.platform.isChatPage
              , n = (0,
            i.useSelector)(u.selectWidgetFontColor)
              , a = (0,
            i.useSelector)(u.selectWidgetColor)
              , h = (0,
            i.useSelector)(u.selectWidgetColor2)
              , m = (0,
            i.useSelector)(u.selectWidgetOrientation)
              , g = (0,
            i.useSelector)(u.selectBillRu)
              , _ = (0,
            i.useSelector)(s.selectIsOnline)
              , v = (0,
            i.useSelector)(s.selectRoute)
              , b = (0,
            l.getTextColor)(n)
              , y = (0,
            r.useState)(!0)
              , w = (0,
            o.default)(y, 2)
              , E = w[0]
              , T = w[1]
              , S = (0,
            r.useRef)((0,
            d.getPageWindow)().document.getElementById("jivo_copyright"));
            return (0,
            r.useEffect)(( () => {
                T(v == c.Route.LABEL)
            }
            ), [v]),
            {
                color: a,
                color2: h,
                enabled: E,
                fontColor: b,
                isMobile: e,
                isTablet: t,
                billRu: g,
                isOnline: _,
                orientation: m,
                route: v,
                customEl: S,
                reportTelemetry: p.reportTelemetry
            }
        }
        ;
        var o = a(n(67375))
          , r = n(98661)
          , i = n(29865)
          , l = n(80598)
          , s = n(35233)
          , u = n(87692)
          , c = n(97490)
          , d = n(45926)
          , f = n(80352)
          , p = n(40754)
    },
    59963: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(98661))
          , r = a(n(3501))
          , i = n(18073);
        const l = [];
        var s = () => o.default.createElement(o.default.Fragment, null, l.length ? l : (Object.keys(i.emojiList).forEach((e => {
            l.push(o.default.createElement(r.default, {
                icon: e
            }))
        }
        )),
        Object.entries(i.emojiList)));
        t.default = s
    },
    3501: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(98661))
          , r = a(n(45697))
          , i = a(n(94184))
          , l = n(69882)
          , s = n(18073)
          , u = n(66488)
          , c = a(n(89411))
          , d = a(n(69427))
          , f = n(45683)
          , p = n(38042);
        const h = e => {
            let t = e.icon
              , n = e.customStyle
              , a = e.className
              , r = e.alone
              , h = void 0 !== r && r;
            const m = (0,
            i.default)({
                [d.default.emojiIcon]: !0,
                [d.default[a]]: a,
                [d.default.__alone]: h
            });
            if (!(0,
            c.default)(t)) {
                const e = s.emojiList[t] ? s.emojiList[t] : t
                  , n = (0,
                u.fromCodePoint)(e)
                  , a = (0,
                f.getEmojiURL)(e);
                return a.endsWith("/.svg") ? ((0,
                p.telemetry)("asset_error", {
                    param1: "emoji",
                    param2: t
                }, {
                    once: !0
                }),
                null) : o.default.createElement("jdiv", {
                    className: m,
                    draggable: !1,
                    alt: n,
                    style: {
                        backgroundImage: `url('${a}')`
                    }
                }, (0,
                l.isTextEmojiDisabled)() ? null : n)
            }
            const g = `url("data:image/svg+xml,${encodeURIComponent((0,
            c.default)(t))}")`
              , _ = (0,
            u.fromCodePoint)(s.emojiList[t]);
            return o.default.createElement("jdiv", {
                className: m,
                style: n,
                "jv-emoji": t
            }, o.default.createElement("jdiv", {
                className: d.default.icon,
                style: {
                    backgroundImage: g
                },
                alt: _
            }, (0,
            l.isTextEmojiDisabled)() ? null : _))
        }
        ;
        h.propTypes = {
            icon: r.default.string.isRequired,
            customStyle: r.default.object,
            className: r.default.oneOf(["emojiMessages", "iconSuccess"]),
            alone: r.default.bool
        };
        var m = o.default.memo(h);
        t.default = m
    },
    89411: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(69861))
          , r = a(n(22783))
          , i = a(n(69860))
          , l = a(n(44544))
          , s = a(n(12239))
          , u = a(n(70881))
          , c = a(n(92380))
          , d = a(n(74373))
          , f = a(n(67567))
          , p = a(n(57737))
          , h = a(n(14534))
          , m = a(n(78393))
          , g = a(n(79378))
          , _ = a(n(5541))
          , v = a(n(87966))
          , b = a(n(94475))
          , y = a(n(45152))
          , w = a(n(63365))
          , E = a(n(22426))
          , T = a(n(56482))
          , S = a(n(23791));
        var M = function(e) {
            return {
                angel: o.default,
                unicorn_face: r.default,
                confused: i.default,
                rage: l.default,
                imp: s.default,
                disappointed: u.default,
                kissing_heart: c.default,
                yum: d.default,
                disappointed_relieved: f.default,
                weary: p.default,
                grin: h.default,
                laughing: m.default,
                wink: g.default,
                sunglasses: _.default,
                neutral_face: v.default,
                winking_eye: b.default,
                hushed: y.default,
                thumbsup: T.default,
                thumbsdown: w.default,
                smile: E.default,
                tada: S.default
            }[e]
        };
        t.default = M
    },
    23535: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.FileUpload = _;
        var o = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = m(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , r = n(29865)
          , i = a(n(45697))
          , l = n(44145)
          , s = n(90061)
          , u = n(83549)
          , c = n(16016)
          , d = n(35233)
          , f = n(66934)
          , p = a(n(4578))
          , h = n(25466);
        function m(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (m = function(e) {
                return e ? n : t
            }
            )(e)
        }
        const g = (0,
        s.createLogger)("FileUpload");
        function _(e) {
            let t = e.disabled;
            (0,
            u.useErrorCatcher)(_.displayName);
            const n = (0,
            r.useSelector)(d.selectQuoteMsgId)
              , a = (0,
            o.useContext)(h.CurrentUploadProgress)
              , i = a.loadedSize
              , s = a.setLoadedSize;
            return o.default.createElement(p.default, {
                disabled: t || i > 0,
                onClick: (e => {
                    !(0,
                    l.getApp)().isOnline && t || (0,
                    f.openIntroduce)(e)
                }
                ).bind(this),
                onChange: e => {
                    (e => {
                        if (!e.target.files)
                            return;
                        const t = e.target.files[0];
                        g.log("fileinfo:", t),
                        t && (t && t.name && (0,
                        f.startUploadMedia)(t, {
                            privateId: (0,
                            c.generateGUID)(),
                            repliedMsgId: null != n ? n : null,
                            onUploadProgress: s,
                            onCancel: () => {
                                s(0)
                            }
                        }),
                        e.target.value = "")
                    }
                    )(e)
                }
            })
        }
        _.displayName = "FileUpload",
        _.propTypes = {
            disabled: i.default.bool
        }
    },
    4578: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(23101))
          , r = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = m(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , i = a(n(40704))
          , l = a(n(45697))
          , s = a(n(94184))
          , u = n(53400)
          , c = n(57930)
          , d = n(97615)
          , f = n(31238)
          , p = n(25466)
          , h = a(n(39771));
        function m(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (m = function(e) {
                return e ? n : t
            }
            )(e)
        }
        const g = d.EnvironmentManager.getAllowedFileTypes().map((e => "." + e.extension)).join(",")
          , _ = e => {
            let t = e.disabled
              , n = e.onClick
              , a = e.onChange;
            const l = (0,
            r.useRef)(null)
              , d = (0,
            s.default)({
                [h.default.wrap]: !0,
                [h.default.__disabled]: t
            })
              , m = (0,
            r.useContext)(p.CurrentUploadProgress).loadedSize;
            return r.default.createElement("jdiv", {
                className: d
            }, m > 0 ? r.default.createElement(f.DotsIcon, {
                animation: "pulse"
            }) : r.default.createElement(i.default, {
                iconName: "icon-attach",
                color: t ? "#c9cdd3" : "#a3aab5",
                className: h.default.iconAttach2
            }), r.default.createElement("jdiv", {
                className: h.default.uploadFwrap
            }, r.default.createElement("input", (0,
            o.default)({
                className: h.default.uploadButton,
                type: "file",
                ref: l,
                onClick: n,
                onChange: a,
                disabled: t,
                accept: g
            }, (0,
            u.locator)(c.Locator.INPUT_UPLOAD_ICON)))))
        }
        ;
        _.propTypes = {
            disabled: l.default.bool.isRequired,
            onClick: l.default.func.isRequired,
            onChange: l.default.func.isRequired
        };
        var v = r.default.memo(_);
        t.default = v
    },
    17196: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(23101))
          , r = a(n(67375))
          , i = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = _(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , l = n(29865)
          , s = a(n(94184))
          , u = a(n(71192))
          , c = n(26932)
          , d = n(35233)
          , f = n(52661)
          , p = n(38042)
          , h = n(83549)
          , m = n(53400)
          , g = a(n(861));
        function _(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (_ = function(e) {
                return e ? n : t
            }
            )(e)
        }
        var v = () => {
            (0,
            h.useErrorCatcher)("InputQuote");
            const e = (0,
            i.useState)(!0)
              , t = (0,
            r.default)(e, 2)
              , n = t[0]
              , a = t[1]
              , _ = (0,
            l.useSelector)(d.selectQuoteMsgId);
            return (0,
            i.useEffect)(( () => {
                _ || a(!1)
            }
            ), [_]),
            i.default.createElement("jdiv", (0,
            o.default)({
                className: (0,
                s.default)(g.default.quoteContainer, {
                    [g.default.__show]: n,
                    [g.default.__hide]: !n
                })
            }, (0,
            m.locator)("INPUT_QUOTE")), i.default.createElement("jdiv", {
                className: g.default.quote
            }, i.default.createElement(f.ReplyIcon, {
                className: g.default.quoteIcon
            }), i.default.createElement(u.default, {
                msgId: _,
                active: !0,
                qaId: "INPUT_QUOTE"
            }), i.default.createElement("jdiv", (0,
            o.default)({
                className: g.default.quoteClose,
                onClick: () => {
                    a(!1),
                    (0,
                    p.telemetry)("visitor_reply_button_deleted"),
                    setTimeout(( () => {
                        c.appDispatchers.setQuoteMsgId(null)
                    }
                    ), 100)
                }
            }, (0,
            m.locator)("INPUT_QUOTE_CLOSE")), i.default.createElement(f.CloseIcon, {
                className: g.default.quoteCloseIcon,
                withoutBubbleColor: !0
            }))))
        }
        ;
        t.default = v
    },
    32891: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.InputContainer = void 0;
        var o = a(n(61125))
          , r = a(n(67375))
          , i = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = H(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , l = n(29865)
          , s = a(n(45697))
          , u = n(21476)
          , c = n(97490)
          , d = a(n(3807))
          , f = a(n(75686))
          , p = n(70859)
          , h = a(n(94184))
          , m = n(62096)
          , g = n(32183)
          , _ = n(52028)
          , v = a(n(9836))
          , b = a(n(94722))
          , y = a(n(63925))
          , w = n(26932)
          , E = n(73262)
          , T = n(89177)
          , S = n(90061)
          , M = a(n(19367))
          , C = n(8717)
          , O = n(83549)
          , k = n(35233)
          , j = a(n(17196))
          , N = a(n(861))
          , I = n(38495)
          , x = n(25466)
          , R = n(80352)
          , P = n(89505)
          , A = n(26613)
          , D = n(59767)
          , L = n(84749)
          , B = n(38042);
        function H(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (H = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function Z(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function W(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Z(Object(n), !0).forEach((function(t) {
                    (0,
                    o.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const F = (0,
        S.createLogger)("InputContainer")
          , U = e => {
            let t = e.onInputChangeHeight;
            (0,
            O.useErrorCatcher)(U.displayName);
            const n = (0,
            i.useRef)(null)
              , a = (0,
            I.useEnhanced)()
              , o = a.agentTyping
              , s = a.isOnline
              , S = a.route
              , H = a.contactsAsk
              , Z = a.disableEmoji
              , V = a.isUploadDisabled
              , z = a.isInputDisabled
              , q = a.isMaintenance
              , G = a.isIntroduced
              , Y = a.inputText
              , $ = a.isBotBlocked
              , X = a.isBotTyping
              , J = a.hasAgentMessages
              , K = (0,
            i.useState)({
                hasError: !1,
                text: Y || "",
                disabled: !!((0,
                T.getDisabled)(q) || z || $)
            })
              , Q = (0,
            r.default)(K, 2)
              , ee = Q[0]
              , te = Q[1];
            (0,
            i.useEffect)(( () => {
                ee.text !== Y && Se(Y)
            }
            ), [Y]);
            const ne = (0,
            i.useState)((0,
            T.getColorTheme)(ee.disabled))
              , ae = (0,
            r.default)(ne, 2)[1]
              , oe = (0,
            i.useState)(0)
              , re = (0,
            r.default)(oe, 2)
              , ie = re[0]
              , le = re[1]
              , se = (0,
            i.useState)(0)
              , ue = (0,
            r.default)(se, 2)
              , ce = ue[0]
              , de = ue[1]
              , fe = (0,
            i.useState)(0)
              , pe = (0,
            r.default)(fe, 2)
              , he = pe[0]
              , me = pe[1]
              , ge = (0,
            i.useState)(!1)
              , _e = (0,
            r.default)(ge, 2)
              , ve = _e[0]
              , be = _e[1]
              , ye = f.default.get(p.Component.AUTORESIZER)
              , we = (0,
            l.useSelector)(k.selectQuoteMsgId)
              , Ee = R.platform.isMobileOrChatpage
              , Te = e => {
                (0,
                T.startTyping)(e)
            }
            ;
            ce || de({
                run: (0,
                E.throttle)(Te, 1e3)
            }),
            (0,
            i.useEffect)(( () => {
                (0,
                T.checkOfflineForm)(),
                ae((0,
                T.getColorTheme)(ee.disabled)),
                (0,
                _.designerBind)("setBubbleColor", ( () => {
                    ae((0,
                    T.getColorTheme)(ee.disabled))
                }
                ));
                const e = f.default.get(p.Component.INPUT);
                F.log("init", e),
                f.default.set(p.Component.AUTORESIZER, new v.default(e,{
                    maxSize: 90,
                    minSize: Ee ? 16 : 60,
                    onResize: () => {
                        ( () => {
                            const e = n.current.base;
                            if (!e)
                                return;
                            const a = e.parentNode.offsetHeight;
                            he !== a && (t && t(a),
                            me(a))
                        }
                        )()
                    }
                })),
                Oe(ee.disabled),
                !Ee && (0,
                C.isChatInputRoute)(S) && e && !(0,
                T.isActiveElementFocused)() && e.focus()
            }
            ), []);
            const Se = e => {
                te((t => W(W({}, t), {}, {
                    text: e
                })))
            }
              , Me = (e, t) => {
                e && (e.preventDefault(),
                e.stopPropagation());
                const a = t || ee.text;
                F.log("inputSendMessage", a);
                const o = !!a && (0,
                T.replaceEmojiValue)((0,
                T.getText)(a));
                if (o) {
                    if (w.clientDispatchers.setLastMessage(o),
                    Se(""),
                    1 === H && !G && s)
                        return w.appDispatchers.setAppIsFocused(!0),
                        u.Router.next(c.RouterEvent.ToIntroduce),
                        Se(""),
                        void w.clientDispatchers.setInputText("");
                    if (!o.trim())
                        return te((e => W(W({}, e), {}, {
                            hasError: !0
                        }))),
                        !1;
                    Se(""),
                    w.clientDispatchers.setInputText(""),
                    (0,
                    T.onInputSubmit)({
                        value: o,
                        repliedMsgId: null != we ? we : null
                    }),
                    we && w.appDispatchers.setQuoteMsgId(null),
                    setTimeout(( () => {
                        ye && ye.check();
                        const e = f.default.get(p.Component.INPUT);
                        e && e.focus()
                    }
                    ), 50),
                    Ee && document.activeElement === n && e && e.preventDefault()
                }
            }
              , Ce = e => {
                ee.disabled !== e && (te((t => W(W({}, t), {}, {
                    text: e ? "" : Y,
                    disabled: !!e
                }))),
                ae((0,
                T.getColorTheme)(!!e)),
                Oe(e))
            }
              , Oe = e => {
                (0,
                T.setPlaceholder)((0,
                T.getPlaceholder)(e, $))
            }
              , ke = () => {
                clearTimeout(ie),
                le(setTimeout(T.stopTyping, 5e3))
            }
              , je = e => e.replace(/[\u202E]/gi, "")
              , Ne = m.reduxStore.getState().settings.features
              , Ie = (0,
            h.default)({
                [N.default.input]: !0,
                [N.default.__mobile]: Ee,
                [N.default.inputPhone]: R.platform.isWindowsPhone
            })
              , xe = () => (0,
            T.getDisabled)(q) || z || $ ? (Ce(!0),
            !0) : (Ce(!1),
            !1)
              , Re = R.platform.isTablet && R.platform.isChromeIos;
            Re && (0,
            T.setPaddingForFocus)(ve);
            const Pe = (0,
            i.useContext)(x.CurrentUploadProgress)
              , Ae = Pe.loadedSize
              , De = Pe.setLoadedSize;
            return i.default.createElement("jdiv", {
                className: N.default.wrapMargin,
                style: {
                    marginBottom: Re && ve ? 44 : null
                }
            }, i.default.createElement("jdiv", {
                className: Ie,
                ref: e => {
                    e && f.default.set(p.Component.CHAT_INPUT, e)
                }
            }, Ee && (0,
            A.isCopyrightEnabled)() ? i.default.createElement(M.default, {
                type: "chat"
            }) : null, Ee && 1 == Ne.typingInsight ? i.default.createElement(P.Typing, {
                show: o,
                isBot: X
            }) : null, we && i.default.createElement(j.default, null), i.default.createElement("jdiv", {
                className: (0,
                h.default)(N.default.inputContainer)
            }, i.default.createElement(d.default, {
                text: ee.text,
                disabled: xe(),
                onInput: e => {
                    e.stopPropagation();
                    const t = je(e.target.value);
                    if ("" === t)
                        return e.target.value = "",
                        "" !== ee.text && te((e => W(W({}, e), {}, {
                            text: "",
                            hasError: !0
                        }))),
                        w.clientDispatchers.setInputText(t),
                        void (0,
                        D.connectionTypingInsight)("");
                    te((e => W(W({}, e), {}, {
                        text: t,
                        hasError: !1
                    }))),
                    ae((0,
                    T.getColorTheme)(!!ee.disabled)),
                    w.clientDispatchers.setInputText(t),
                    setTimeout(( () => {
                        ye && ye.check()
                    }
                    ), 150),
                    ce.run(t),
                    ke()
                }
                ,
                onKeyPress: e => {
                    ( (e, t) => {
                        let n = je(e.target.value);
                        F.log("onKeyPress", n, t),
                        e.stopPropagation(),
                        ee.text && (n = ee.text);
                        const a = e.keyCode;
                        if (!Ee && "" !== n && (e.ctrlKey || e.metaKey || e.shiftKey) && -1 !== [10, 13].indexOf(a)) {
                            if (!e.shiftKey && !R.platform.isEdge) {
                                const t = (0,
                                g.addNewLine)(e.target, n);
                                t && (te((e => W(W({}, e), {}, {
                                    text: t
                                }))),
                                w.clientDispatchers.setInputText(t))
                            }
                            return !1
                        }
                        13 === a ? (e.preventDefault(),
                        Me(e, n)) : 8 === a && "" === n && (te((e => W(W({}, e), {}, {
                            text: ""
                        }))),
                        w.clientDispatchers.setInputText(""))
                    }
                    )(e, ee.text)
                }
                ,
                onFocus: e => {
                    (0,
                    T.onFocus)(e),
                    be(!0)
                }
                ,
                onBlur: () => {
                    be(!1)
                }
                ,
                onPaste: e => {
                    Ee && te((e => W(W({}, e), {}, {
                        hasError: !1
                    }))),
                    Ae > 0 || (0,
                    T.onPaste)(e, null != we ? we : null, De)
                }
                ,
                disableFileUpload: V,
                ref: n
            }), i.default.createElement(L.SendIcon, {
                isMobile: Ee,
                disabled: xe(),
                onClick: Me,
                hasError: ee.hasError || !ee.text,
                theme: (0,
                T.getColorTheme)(ee.disabled),
                styles: N.default,
                isPointer: R.platform.supports.pointer
            }))), i.default.createElement(b.default, {
                disabled: xe(),
                disableFileUpload: V,
                insertEmoji: e => {
                    if (!s && ee.disabled)
                        return;
                    const t = e.target.getAttribute("jv-emoji");
                    if (null === t)
                        return;
                    const n = ":" + t + ":";
                    if (ee.text && 0 === ee.text.length)
                        Me(null, n);
                    else {
                        const e = ee.text + n;
                        te((t => W(W({}, t), {}, {
                            text: e
                        }))),
                        w.clientDispatchers.setInputText(e)
                    }
                    ce.run(n),
                    ke(),
                    (0,
                    B.telemetry)("emoji_insert_smile"),
                    setTimeout(( () => {
                        (0,
                        T.afterEmojiInserted)(ye),
                        w.appDispatchers.setAppIsFocused(!0)
                    }
                    ), 150)
                }
                ,
                isPopupMenuVisible: R.platform.isDesktop && !R.platform.isChatPage && J,
                isOnline: s,
                disableEmoji: Ee || Z
            }), (0,
            T.isSocialButtonEnabled)() ? i.default.createElement(y.default, null) : null)
        }
        ;
        t.InputContainer = U,
        U.propTypes = {
            onInputChangeHeight: s.default.func
        },
        U.displayName = "InputContainer"
    },
    3807: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(23101))
          , r = a(n(98661))
          , i = a(n(861))
          , l = a(n(94184))
          , s = a(n(45697))
          , u = n(53400)
          , c = n(57930)
          , d = a(n(75686))
          , f = n(70859)
          , p = n(80352);
        const h = e => {
            let t = e.text
              , n = e.disabled
              , a = e.onInput
              , s = e.onFocus
              , h = e.onBlur
              , m = e.onPaste
              , g = e.onKeyPress
              , _ = e.disableFileUpload;
            const v = (0,
            l.default)({
                [i.default.tdTextarea]: !0,
                [i.default.__filedisabled]: _
            });
            return r.default.createElement("jdiv", {
                className: v
            }, r.default.createElement("textarea", (0,
            o.default)({
                maxLength: "1000",
                className: (0,
                l.default)({
                    [i.default.inputField]: !0
                }),
                key: "inputField",
                onInput: a,
                onKeyPress: g,
                onKeyUp: e => {
                    e.stopPropagation()
                }
                ,
                onKeyDown: e => {
                    e.stopPropagation()
                }
                ,
                onFocus: e => {
                    null == s || s();
                    const t = e.currentTarget;
                    p.platform.isAndroid && p.platform.isMobile && t && setTimeout(( () => {
                        t.scrollIntoView({
                            block: "center"
                        })
                    }
                    ), 200)
                }
                ,
                onTouchEnd: e => {
                    const t = e.currentTarget;
                    p.platform.isAndroid && p.platform.isMobile && t && setTimeout(( () => {
                        t.scrollIntoView({
                            block: "center"
                        })
                    }
                    ), 200)
                }
                ,
                onBlur: h,
                onPaste: m,
                value: n ? "" : t,
                disabled: n,
                autoComplete: "false",
                "data-gramm": "false",
                "data-gramm_editor": "false",
                "data-enable-grammarly": "false",
                ref: e => {
                    e && d.default.set(f.Component.INPUT, e)
                }
            }, (0,
            u.locator)(c.Locator.INPUT))))
        }
        ;
        h.propTypes = {
            text: s.default.string,
            disabled: s.default.bool,
            onInput: s.default.func.isRequired,
            onFocus: s.default.func.isRequired,
            onBlur: s.default.func,
            onPaste: s.default.func.isRequired,
            onKeyPress: s.default.func.isRequired,
            disableFileUpload: s.default.bool
        };
        var m = r.default.memo(h);
        t.default = m
    },
    38495: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useEnhanced = void 0;
        var a = n(29865)
          , o = n(35233)
          , r = n(65138)
          , i = n(87692)
          , l = n(45959)
          , s = n(79105)
          , u = n(97979)
          , c = n(90189)
          , d = n(79814)
          , f = n(89177);
        t.useEnhanced = () => {
            const e = (0,
            a.useSelector)(d.selectLastBlockMessage)
              , t = (0,
            a.useSelector)(o.selectLastChatOpened)
              , n = (0,
            a.useSelector)(c.selectBotJoinedIds)
              , p = (0,
            a.useSelector)(c.selectAgentJoinedIds)
              , h = (0,
            a.useSelector)(c.selectCurrentChat)
              , m = !!h && h.agentTyping
              , g = (0,
            a.useSelector)(r.selectApp)
              , _ = g.isOnline
              , v = g.route
              , b = (0,
            a.useSelector)(i.selectContactsAsk)
              , y = (0,
            a.useSelector)(i.selectDisableEmoji)
              , w = (0,
            a.useSelector)(r.selectIsInputDisabled)
              , E = (0,
            a.useSelector)(r.selectMaintenance)
              , T = (0,
            a.useSelector)(l.selectIsIntroduced)
              , S = Boolean((0,
            a.useSelector)(s.selectDisableFiletransfer) || (0,
            f.isFileUploadDisabled)())
              , M = (0,
            a.useSelector)(u.selectClient).inputText
              , C = Boolean((0,
            a.useSelector)(d.selectAgentMessagesCount))
              , O = !!e && e.body.force_reply;
            return {
                agentTyping: m,
                isOnline: _,
                route: v,
                contactsAsk: b,
                disableEmoji: y,
                isUploadDisabled: S,
                isInputDisabled: w,
                isMaintenance: E,
                isIntroduced: T,
                inputText: M,
                isBotBlocked: t && n.length && O,
                isBotTyping: n.length && !p.length,
                hasAgentMessages: C
            }
        }
    },
    64713: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(23101))
          , r = a(n(98661))
          , i = a(n(40704))
          , l = a(n(91059))
          , s = a(n(45697))
          , u = a(n(59963))
          , c = a(n(67061))
          , d = a(n(94184))
          , f = n(53400)
          , p = n(57930);
        const h = e => {
            let t = e.opened
              , n = void 0 !== t && t
              , a = e.disabled
              , s = void 0 !== a && a
              , h = e.width
              , m = void 0 === h ? 227 : h
              , g = e.height
              , _ = void 0 === g ? 182 : g
              , v = e.offsetRight
              , b = void 0 === v ? 15 : v
              , y = e.onClick
              , w = e.onItemClick;
            return r.default.createElement("jdiv", (0,
            o.default)({
                className: l.default.emojiWrap,
                onClick: s ? null : y
            }, (0,
            f.locator)(p.Locator.INPUT_EMOJI_PANEL)), r.default.createElement(i.default, {
                iconName: "icon-emoji",
                color: s ? "#c9cdd3" : "#a3aab5",
                className: (0,
                d.default)({
                    [l.default.iconEmoji]: !0,
                    [l.default.__disabled]: s
                })
            }), r.default.createElement(c.default, {
                show: n,
                onClick: w,
                width: m,
                height: _,
                offsetRight: b
            }, r.default.createElement(u.default, null)))
        }
        ;
        h.propTypes = {
            opened: s.default.bool.isRequired,
            onClick: s.default.func.isRequired,
            onItemClick: s.default.func.isRequired,
            width: s.default.number,
            height: s.default.number,
            offsetRight: s.default.number,
            disabled: s.default.bool
        };
        var m = r.default.memo(h);
        t.default = m
    },
    94722: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.componentProps = void 0;
        var o = a(n(61125))
          , r = a(n(67375))
          , i = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = b(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , l = a(n(45697))
          , s = a(n(94184))
          , u = n(21951)
          , c = a(n(22866))
          , d = n(23535)
          , f = a(n(64713))
          , p = a(n(64508))
          , h = n(45926)
          , m = n(90061)
          , g = n(80352)
          , _ = n(38042)
          , v = a(n(31308));
        function b(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (b = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function y(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function w(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? y(Object(n), !0).forEach((function(t) {
                    (0,
                    o.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const E = (0,
        m.createLogger)("InputIconsPure")
          , T = e => {
            let t = e.disabled
              , n = void 0 !== t && t
              , a = e.disableFileUpload
              , o = void 0 !== a && a
              , l = e.insertEmoji
              , m = e.isPopupMenuVisible
              , b = e.isOnline
              , y = e.disableEmoji;
            const T = (0,
            i.useState)({
                emojiListOpened: !1,
                menuOpened: !1,
                link: {
                    fileName: "",
                    url: ""
                }
            })
              , S = (0,
            r.default)(T, 2)
              , M = S[0]
              , C = S[1]
              , O = () => {
                E.log("closeMenu"),
                (0,
                u.removeEvent)((0,
                h.getPageWindow)(), "click", O),
                C((e => w(w({}, e), {}, {
                    menuOpened: !1
                })))
            }
              , k = e => {
                if (E.log("menuClick"),
                e.stopPropagation(),
                n)
                    return;
                M.menuOpened || (0,
                u.addListener)((0,
                h.getPageWindow)(), "click", O);
                const t = c.default.getInstance().messagesFormatter.getMessagesAsHTML();
                C((e => w(w({}, e), {}, {
                    menuOpened: !e.menuOpened,
                    emojiListOpened: !1,
                    link: t
                }))),
                (0,
                _.telemetry)("more_click", void 0, {
                    once: !0
                }),
                t.url || (0,
                _.telemetry)("error_downloading_chat_log", {
                    param1: e.message
                }, {
                    once: !0
                })
            }
              , j = () => {
                E.log("closeEmojiList"),
                (0,
                u.removeEvent)((0,
                h.getPageWindow)(), "click", j),
                C((e => w(w({}, e), {}, {
                    emojiListOpened: !1
                })))
            }
              , N = e => {
                E.log("toggleEmojiList"),
                e.stopPropagation(),
                !b && n || (M.emojiListOpened || (0,
                u.addListener)((0,
                h.getPageWindow)(), "click", j),
                C((e => w(w({}, e), {}, {
                    emojiListOpened: !e.emojiListOpened,
                    menuOpened: !1
                }))),
                M.emojiListOpened && (0,
                _.telemetry)("emoji_open_smile_list", void 0, {
                    once: !0
                }))
            }
              , I = () => {
                const e = !o;
                return m && !e ? 15 : m && e ? 45 : m || e ? 15 : 0
            }
              , x = (0,
            s.default)({
                [v.default.iconPanel]: !0,
                [v.default.__mobile]: g.platform.isMobileOrChatpage
            });
            return i.default.createElement("jdiv", {
                className: x
            }, ( () => {
                if (m)
                    return i.default.createElement(p.default, {
                        show: M.menuOpened,
                        disabled: n,
                        link: M.link,
                        onClick: k,
                        onItemClick: () => {
                            (0,
                            _.telemetry)("download_chat_log_click", void 0, {
                                once: !0
                            })
                        }
                    })
            }
            )(), ( () => {
                if (!o)
                    return i.default.createElement(d.FileUpload, {
                        disabled: n
                    })
            }
            )(), ( () => {
                if (!y)
                    return i.default.createElement(f.default, {
                        disabled: n,
                        opened: M.emojiListOpened,
                        onClick: N,
                        onItemClick: l,
                        offsetRight: I()
                    })
            }
            )())
        }
          , S = T.propTypes = {
            disabled: l.default.bool.isRequired,
            disableFileUpload: l.default.bool.isRequired,
            insertEmoji: l.default.func.isRequired,
            isOnline: l.default.bool,
            isPopupMenuVisible: l.default.bool,
            disableEmoji: l.default.bool
        };
        t.componentProps = S;
        var M = i.default.memo(T);
        t.default = M
    },
    67061: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(98661))
          , r = a(n(30240))
          , i = a(n(94184))
          , l = a(n(45697));
        const s = e => {
            let t = e.show
              , n = void 0 === t || t
              , a = e.width
              , l = void 0 === a ? 100 : a
              , s = e.height
              , u = void 0 === s ? 100 : s
              , c = e.offsetRight
              , d = void 0 === c ? 0 : c
              , f = e.children
              , p = e.onClick;
            return o.default.createElement("jdiv", {
                className: (0,
                i.default)({
                    [r.default.popup]: !0,
                    [r.default.show]: !!n
                }),
                style: {
                    width: `${l}px`,
                    height: `${u}px`,
                    right: `${d}px`,
                    top: `-${38 + u}px`
                },
                onClick: p
            }, o.default.createElement("jdiv", {
                className: r.default.childrenWrap
            }, f), o.default.createElement("jdiv", {
                className: r.default.pip,
                style: {
                    left: `${2 + d}px`
                }
            }))
        }
        ;
        s.propTypes = {
            show: l.default.bool.isRequired,
            width: l.default.number.isRequired,
            onClick: l.default.func.isRequired,
            children: l.default.oneOfType([l.default.arrayOf(l.default.node), l.default.node]).isRequired,
            height: l.default.number,
            offsetRight: l.default.number
        };
        var u = o.default.memo(s);
        t.default = u
    },
    64508: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(23101))
          , r = a(n(98661))
          , i = a(n(2037))
          , l = a(n(40704))
          , s = a(n(45697))
          , u = a(n(94184))
          , c = n(18276)
          , d = n(53400)
          , f = n(57930);
        const p = e => {
            let t = e.disabled
              , n = e.onClick
              , a = e.onItemClick
              , s = e.link
              , p = e.show;
            return r.default.createElement("jdiv", {
                className: i.default.menuWrap
            }, r.default.createElement("jdiv", (0,
            o.default)({
                onClick: n
            }, (0,
            d.locator)(f.Locator.INPUT_MORE_BTN)), r.default.createElement(l.default, {
                iconName: "icon-more",
                color: t ? "#c9cdd3" : "#a3aab5",
                hoverColor: t ? null : "#a3aab5",
                disabled: t,
                className: (0,
                u.default)({
                    [i.default.iconMenu]: !0,
                    [i.default.__disabled]: t
                })
            })), r.default.createElement("jdiv", {
                className: (0,
                u.default)({
                    [i.default.menu]: !0,
                    [i.default.show]: !!p
                })
            }, r.default.createElement("jdiv", {
                className: i.default.menuItem,
                onClick: a
            }, r.default.createElement("a", {
                download: s.fileName,
                href: s.url,
                target: "_blank",
                rel: "nofollow noopener noreferrer"
            }, (0,
            c.l10n)("downloadChatText"))), r.default.createElement("jdiv", {
                className: i.default.pip
            })))
        }
        ;
        p.propTypes = {
            show: s.default.bool.isRequired,
            onClick: s.default.func.isRequired,
            onItemClick: s.default.func.isRequired,
            link: s.default.shape({
                fileName: s.default.string.isRequired,
                url: s.default.string.isRequired
            }).isRequired,
            disabled: s.default.bool
        };
        var h = r.default.memo(p);
        t.default = h
    },
    25095: function(e, t, n) {
        "use strict";
        var a = n(17907);
        t._ = function(e) {
            const t = (0,
            m.useWidgetConstructorContext)()
              , n = t.isWidgetConstructor || !e.toJSON ? e : e.toJSON()
              , a = n.text
              , v = n.type
              , b = (0,
            r.useSelector)(u.selectLastMessage)
              , y = (0,
            r.useSelector)(s.selectDisableBotLabel)
              , w = (0,
            r.useSelector)((e => (0,
            l.selectBotById)(e, +n.from_id)))
              , E = (0,
            r.useSelector)((0,
            _.selectAgentById)(+n.from_id))
              , T = (0,
            o.useRef)(null)
              , S = (0,
            c.useListenedStyle)("textSize")
              , M = n.type === i.MessageType.COBROWSE
              , C = n.type === i.MessageType.INVOICE
              , O = n.from === i.MessageInitiator.FORM
              , k = n.from_id || O
              , j = h.platform.isIos
              , N = h.platform.isMobileOrTablet;
            return {
                ref: T,
                text: a,
                type: v,
                textSize: S,
                isInvoice: C,
                agent: O ? null !== (I = n.body) && void 0 !== I && I.agent_info ? (0,
                g.agentToReduxFormat)(null === (x = n.body) || void 0 === x ? void 0 : x.agent_info) : w : n.type === i.MessageType.PROACTIVE ? null !== (R = n.body) && void 0 !== R && R.agent_info ? (0,
                g.agentToReduxFormat)(null === (A = n.body) || void 0 === A ? void 0 : A.agent_info) : null !== (P = n.body) && void 0 !== P && P.agent_id ? {
                    name: n.body.display_name,
                    avatarUrl: n.body.avatar_url
                } : d.default.toReduxFormat() : E,
                isAgent: k,
                isBot: O,
                isIos: j,
                isMobile: N,
                isCobrowse: M,
                isScrollLower: function() {
                    const e = T.current
                      , t = f.default.getComponent(p.Component.SCROLL_CONTAINER);
                    if (e && t && b) {
                        const n = b.type
                          , a = b.from
                          , o = e.nextSibling
                          , r = n === i.MessageType.MESSAGE
                          , l = a === i.MessageInitiator.AGENT || a === i.MessageInitiator.FORM;
                        return !o && r && l && t.animated
                    }
                    return !1
                }(),
                disableBotLabel: y
            };
            var I, x, R, P, A
        }
        ;
        var o = n(98661)
          , r = n(29865)
          , i = n(81152)
          , l = n(14376)
          , s = n(87692)
          , u = n(66311)
          , c = n(77389)
          , d = a(n(26754))
          , f = a(n(75686))
          , p = n(70859)
          , h = n(80352)
          , m = n(80797)
          , g = n(40694)
          , _ = n(70051)
    },
    96150: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(98661))
          , r = a(n(94184))
          , i = a(n(45697))
          , l = a(n(4867))
          , s = n(80352)
          , u = n(20738)
          , c = a(n(8292));
        function d(e) {
            let t = e.messages
              , n = e.children;
            const a = (0,
            u.useEnhanced)(t[0])
              , i = a.textSize
              , l = a.color
              , d = a.isIos
              , f = a.isMobile
              , p = (0,
            r.default)({
                [c.default.main]: !0,
                [c.default._mobile]: f,
                [c.default.__chatPage]: s.platform.isChatPage,
                [c.default["__" + l]]: !0
            })
              , h = d ? {
                "-webkit-text-size-adjust": i
            } : null;
            return o.default.createElement("jdiv", {
                style: h,
                className: p
            }, o.default.createElement("jdiv", {
                className: c.default.content
            }, n))
        }
        d.propTypes = {
            messages: i.default.oneOfType([i.default.instanceOf(l.default).isRequired, i.default.array]),
            children: i.default.node.isRequired
        };
        var f = d;
        t.default = f
    },
    20738: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useEnhanced = function(e) {
            const t = null != e && e.toJSON ? e.toJSON() : e
              , n = (0,
            a.useSelector)(r.selectBubbleColor)
              , s = t.type === o.MessageType.INVOICE ? "white" : n
              , u = (0,
            i.useListenedStyle)("textSize")
              , c = l.platform.isIos
              , d = l.platform.isMobileOrTablet;
            return {
                textSize: u,
                color: s,
                isIos: c,
                isMobile: d
            }
        }
        ;
        var a = n(29865)
          , o = n(81152)
          , r = n(87692)
          , i = n(77389)
          , l = n(80352)
    },
    48333: function(e, t, n) {
        "use strict";
        var a = n(17907);
        t.Z = l;
        var o = a(n(98661))
          , r = a(n(45697))
          , i = a(n(7900));
        function l(e) {
            let t = e.messages;
            const n = t[0].toJSON().body;
            return "tinkoffInvoice" === (null == n ? void 0 : n.type) ? o.default.createElement(i.default, {
                messages: t
            }) : null
        }
        l.propTypes = {
            messages: r.default.arrayOf(r.default.object)
        }
    },
    7900: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = f;
        var o = a(n(98661))
          , r = a(n(45697))
          , i = a(n(94184))
          , l = n(10457)
          , s = a(n(30295))
          , u = n(18276)
          , c = a(n(64545))
          , d = a(n(40704));
        function f(e) {
            let t = e.messages;
            const n = t[0].toJSON()
              , a = n.body
              , r = n.created_ts
              , f = (0,
            i.default)({
                [c.default.main]: !0,
                [c.default._tinkoff]: !0
            })
              , p = (0,
            i.default)({
                [c.default.message]: !0,
                [c.default.__success]: "SUCCESS" === a.status
            });
            return o.default.createElement(l.AgentMessageWrap, {
                messages: t
            }, o.default.createElement("jdiv", {
                className: f,
                title: (0,
                s.default)(r, "dd.mm.yy H:MM:ss")
            }, o.default.createElement("jdiv", {
                className: p
            }, o.default.createElement("jdiv", {
                className: c.default.successIcon
            }), o.default.createElement("jdiv", {
                className: c.default.info
            }, o.default.createElement("jdiv", {
                className: c.default.text
            }, (0,
            u.l10n)("paymentsInvoice"), a.invoice_id, ":"), o.default.createElement("jdiv", {
                className: c.default.productName
            }, a.comment, ",", " "), o.default.createElement("jdiv", {
                className: c.default.amountWrap
            }, o.default.createElement("jdiv", {
                className: c.default.amount
            }, " ", a.amount), o.default.createElement(d.default, {
                className: c.default.rubleIcon,
                color: "#222d38",
                iconName: "icon-ruble"
            })), o.default.createElement("jdiv", {
                className: c.default.successText
            }, (0,
            u.l10n)("paymentsSuccess"))), o.default.createElement("a", {
                href: a.payment_url,
                className: c.default.actionBtn,
                "data-css": "notreset",
                rel: "nofollow noopener noreferrer",
                target: "_blank",
                title: (0,
                u.l10n)("paymentsPay")
            }, o.default.createElement("jdiv", {
                className: c.default.actionText
            }, (0,
            u.l10n)("paymentsPay"))))))
        }
        f.propTypes = {
            messages: r.default.arrayOf(r.default.object)
        }
    },
    67250: function(e, t, n) {
        "use strict";
        var a = n(17907);
        t.Z = void 0;
        var o = a(n(98661))
          , r = a(n(80833))
          , i = n(91471)
          , l = n(83549);
        var s = o.default.memo((e => {
            if ((0,
            l.useErrorCatcher)("MediaContainer"),
            e.messages && e.messages[0]) {
                const t = e.messages[0];
                return t.get("body") && t.get("body").status ? o.default.createElement(i.MediaMessageContainer, {
                    message: t.toJSON(),
                    messages: e.messages
                }) : o.default.createElement(r.default, e)
            }
        }
        ));
        t.Z = s
    },
    80833: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(98661))
          , r = n(29865)
          , i = a(n(94184))
          , l = a(n(45697))
          , s = n(83549)
          , u = n(80352)
          , c = a(n(4867))
          , d = a(n(30295))
          , f = n(87692)
          , p = n(42958)
          , h = n(77294)
          , m = n(48785)
          , g = n(95140)
          , _ = n(98034)
          , v = n(25373)
          , b = n(10457)
          , y = a(n(96150))
          , w = a(n(63960))
          , E = n(35636);
        const T = e => {
            (0,
            s.useErrorCatcher)("MediaMessage");
            const t = e.messages[0].toJSON()
              , n = t.body
              , a = t.created_ts
              , l = (0,
            v.useEnhanced)(t)
              , c = l.mediaState
              , T = l.loaderRef
              , S = l.abortUploading
              , M = (0,
            r.useSelector)(f.selectBubbleColor);
            function C(e) {
                e.preventDefault(),
                window.open(e.currentTarget.getAttribute("href"))
            }
            const O = c.file.file_url || n.file_url || n.file || n.name
              , k = (0,
            h.isAgentMessage)(t)
              , j = (N = O,
            I = n.type,
            N ? (0,
            h.isNewMedia)(N) ? c.complete && ["photo"].includes(I) : c.complete && (0,
            h.isPreviewImage)(N) : ((0,
            g.reportName)(t),
            !1));
            var N, I;
            const x = c.file.file_name || n.file_name || n.name
              , R = function(e) {
                return e ? "grey" : M
            }(k)
              , P = (0,
            d.default)(a, "dd.mm.yy H:MM:ss")
              , A = c.url || e.url
              , D = n.thumb || c.imagePreview || A
              , L = k ? b.AgentMessageWrap : y.default
              , B = (0,
            i.default)({
                [w.default.main]: !0,
                [w.default["_" + R]]: !0,
                [w.default._mobile]: u.platform.isMobileOrTablet,
                [w.default._client]: !k,
                [w.default._preview]: j
            });
            return o.default.createElement(L, {
                messages: e.messages,
                isPreview: j
            }, o.default.createElement("jdiv", {
                className: B,
                title: P
            }, j ? o.default.createElement(_.Preview, {
                message: t,
                name: x,
                src: D,
                href: A,
                isAgentMessage: k,
                onClick: C
            }) : o.default.createElement(m.Loader, {
                ref: T,
                name: x,
                data: c,
                message: t,
                isFromAgent: k,
                color: R,
                handleAbort: S,
                handleClick: C
            })), o.default.createElement(E.SendAgain, {
                message: e.messages[0],
                isShow: (0,
                p.isErrorMessage)(e.messages[0])
            }))
        }
        ;
        T.propTypes = {
            messages: l.default.arrayOf(l.default.instanceOf(c.default)),
            url: l.default.string
        };
        var S = T;
        t.default = S
    },
    48785: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Loader = void 0;
        var o = a(n(23101))
          , r = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = _(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , i = a(n(94184))
          , l = a(n(45697))
          , s = n(18276)
          , u = n(58271)
          , c = a(n(40704))
          , d = n(31001)
          , f = n(64607)
          , p = n(77294)
          , h = a(n(4867))
          , m = n(43417)
          , g = a(n(63960));
        function _(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (_ = function(e) {
                return e ? n : t
            }
            )(e)
        }
        const v = (0,
        r.forwardRef)(( (e, t) => {
            let n = e.color
              , a = e.data
              , l = e.message
              , h = e.isFromAgent
              , _ = e.name
              , v = e.handleAbort
              , b = e.handleClick;
            const y = a.uploading && a.loaded > 1
              , w = e => ({
                display: e ? "block" : "none"
            })
              , E = {
                icon: (0,
                p.getIconColor)(n),
                circle: (0,
                p.getCircleColor)(n)
            }
              , T = {
                iconMain: {
                    cursor: a.uploading ? "pointer" : "default"
                },
                iconError: w(a.error),
                iconUpload: w(a.complete),
                loader: w(a.uploading)
            }
              , S = {
                iconCancel: (0,
                i.default)([g.default.iconUpload], [g.default.iconLoading]),
                iconError: (0,
                i.default)([g.default.iconError]),
                iconUpload: (0,
                i.default)([g.default.iconUpload]),
                mediaComplete: (0,
                i.default)([g.default.mediaComplete], {
                    [g.default._agent]: h
                })
            };
            return r.default.createElement(r.default.Fragment, null, r.default.createElement("jdiv", (0,
            o.default)({
                className: g.default.mediaIcon
            }, a.complete ? null : (0,
            m.onClickHandler)(v, !0, !0), {
                style: T.iconMain
            }), r.default.createElement("jdiv", {
                className: g.default.loaderCont,
                style: T.loader
            }, r.default.createElement("svg", {
                width: "42",
                height: "42",
                viewBox: "0 0 21 21",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg"
            }, r.default.createElement("circle", {
                r: "18",
                cx: "21",
                cy: "21",
                fill: "#ffffff",
                strokeDasharray: "119.38",
                strokeDashoffset: "0"
            }), r.default.createElement("circle", {
                ref: e => e,
                className: g.default.loaderBar,
                r: "18",
                cx: "21",
                cy: "21",
                fill: "transparent",
                stroke: E.circle,
                strokeDasharray: "119.38",
                strokeDashoffset: "0"
            })), r.default.createElement(c.default, {
                color: E.icon,
                iconName: "icon-cancel",
                className: S.iconCancel
            })), r.default.createElement("jdiv", null, !a.error && r.default.createElement(c.default, {
                color: E.icon,
                iconName: `icon-${a.type}`,
                className: S.iconUpload,
                style: T.iconUpload
            }), !h && r.default.createElement(c.default, {
                color: E.icon,
                iconName: "icon-error",
                className: S.iconError,
                style: T.iconError
            }))), r.default.createElement("jdiv", {
                className: g.default.mediaText
            }, r.default.createElement("jdiv", {
                className: g.default.mediaFname,
                title: _
            }, _), y && r.default.createElement("jdiv", {
                className: g.default.mediaPerc
            }, (0,
            u.fileSize)(a.loaded) || "", " /", " ", (0,
            u.fileSize)(a.total) || ""), a.complete ? r.default.createElement("jdiv", {
                className: S.mediaComplete
            }, (0,
            u.fileSize)(a.total), " ", r.default.createElement("a", (0,
            o.default)({
                href: (0,
                p.getUrl)(a.url)
            }, (0,
            m.onClickHandler)(b, !0, !0), {
                target: "_blank",
                rel: "noopener noreferrer"
            }), (0,
            s.l10n)("file_upl_download"))) : null, a.error && r.default.createElement("jdiv", {
                className: g.default.mediaComplete
            }, a.error)), r.default.createElement(d.MessageStatusIcon, {
                className: g.default.time,
                message: l,
                colorSet: f.COLORS_SET.DARK,
                isRenderStatus: !h
            }))
        }
        ));
        t.Loader = v,
        v.displayName = "Loader",
        v.propTypes = {
            color: l.default.string,
            data: l.default.object,
            message: l.default.instanceOf(h.default),
            isFromAgent: l.default.bool,
            name: l.default.string,
            handleAbort: l.default.func,
            handleClick: l.default.func
        }
    },
    95140: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.initialMediaState = function(e) {
            const t = e.sign
              , n = e.error
              , o = e.file_url
              , r = e.file
              , i = e.icon_type
              , l = e.type
              , s = e.mime_type
              , u = e.size
              , c = e.file_size
              , d = e.thumb;
            let f = !1;
            (t || n) && (f = !1);
            (o || r) && (f = !0);
            const p = !!f && (o || r)
              , h = !!f && (i || l || (0,
            a.detectType)(s));
            return {
                file: !1,
                url: p,
                type: h,
                uploading: !f,
                complete: f,
                percentComplete: 0,
                loaded: 0,
                total: f ? (u || c) >> 0 : 0,
                error: !1,
                imagePreview: null != d ? d : null
            }
        }
        ,
        t.isGif = function(e) {
            let t = e.mediaExt
              , n = e.message;
            if (!t)
                return r(n),
                !1;
            const a = t.toLowerCase();
            return /\.(gif)$/i.test(a)
        }
        ,
        t.reportName = r;
        var a = n(75141)
          , o = n(38042);
        function r(e) {
            (0,
            o.telemetry)("media_data_name", {
                param1: JSON.stringify(e || null)
            }, {
                once: !0
            })
        }
    },
    25373: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useEnhanced = void 0;
        var o = a(n(61125))
          , r = a(n(67375))
          , i = n(98661)
          , l = n(95140)
          , s = n(18276);
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function(t) {
                    (0,
                    o.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const d = {
            uploading: null,
            progress: null,
            complete: null,
            error: null
        };
        t.useEnhanced = e => {
            const t = e.body
              , n = e.private_id
              , a = (0,
            i.useState)(( () => (0,
            l.initialMediaState)(t)))
              , o = (0,
            r.default)(a, 2)
              , u = o[0]
              , f = o[1]
              , p = (0,
            i.useRef)();
            function h(e) {
                f((t => c(c({}, t), e)))
            }
            function m() {
                Object.values(d).forEach((e => null == e ? void 0 : e.remove()))
            }
            return (0,
            i.useEffect)((function() {
                if (!u.complete)
                    return !t.name || t.error ? h({
                        file: t,
                        uploading: !1,
                        complete: !1,
                        error: t.error
                    }) : () => {
                        m()
                    }
            }
            ), [t, n, u.complete]),
            {
                mediaState: u,
                loaderRef: p,
                abortUploading: function() {
                    u.uploading && (h({
                        file: {},
                        uploading: !1,
                        complete: !1,
                        error: (0,
                        s.l10n)("file_upl_cancel")
                    }),
                    m())
                }
            }
        }
    },
    2602: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = v(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , r = a(n(45697))
          , i = n(64607)
          , l = n(81152)
          , s = n(77294)
          , u = n(31001)
          , c = a(n(79325))
          , d = a(n(63960))
          , f = a(n(4387))
          , p = n(95911)
          , h = n(44145)
          , m = n(25466)
          , g = n(83549)
          , _ = n(38042);
        function v(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (v = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function b(e) {
            let t = e.message
              , n = e.url
              , a = e.color
              , r = e.isMobile
              , v = e.isFromAgentMessage
              , b = e.onError
              , y = e.onCancel;
            (0,
            g.useErrorCatcher)("Loader");
            const w = t.body
              , E = w.file_name
              , T = w.status || l.MediaStatus.COMPLETE
              , S = w.file_size
              , M = (0,
            o.useContext)(m.CurrentUploadProgress).loadedSize
              , C = w.type
              , O = w.error
              , k = T === l.MediaStatus.UPLOADING
              , j = T === l.MediaStatus.COMPLETE
              , N = !!O || T === l.MediaStatus.ERROR || T === l.MediaStatus.EXPIRED;
            return o.default.createElement("jdiv", {
                className: d.default.loaderInner
            }, o.default.createElement(c.default, {
                color: a,
                totalSize: S,
                loadedSize: M,
                mediaType: C,
                isUploading: k,
                isComplete: j,
                isError: N,
                onClick: y
            }), o.default.createElement(f.default, {
                url: n,
                title: E,
                totalSize: S,
                loadedSize: M,
                error: O,
                isUploading: k,
                isComplete: j,
                isError: N,
                isMobile: r,
                isFromAgentMessage: v,
                onClick: () => {
                    r || p.xhrRequest.head(n, ( (e, t) => {
                        if (e)
                            return (0,
                            h.getFeatures)().botMedia ? window.open((0,
                            s.getUrl)(n), "_blank") : b(e.status),
                            void (0,
                            _.telemetry)("download_media_click", {
                                param1: "error",
                                param2: e.status
                            });
                        window.open((0,
                        s.getUrl)(n), "_blank"),
                        (0,
                        _.telemetry)("download_media_click", {
                            param1: "success",
                            param2: t.status
                        })
                    }
                    ))
                }
            }), o.default.createElement(u.MessageStatusIcon, {
                className: d.default.time,
                isRenderStatus: !v,
                message: t,
                colorSet: i.COLORS_SET.DARK
            }))
        }
        b.propTypes = {
            message: r.default.object.isRequired,
            color: r.default.string.isRequired,
            isMobile: r.default.bool.isRequired,
            url: r.default.string,
            onError: r.default.func.isRequired,
            onCancel: r.default.func.isRequired
        };
        var y = b;
        t.default = y
    },
    79325: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = d(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , r = a(n(94184))
          , i = a(n(45697))
          , l = n(77294)
          , s = a(n(63960))
          , u = a(n(40704))
          , c = a(n(98132));
        function d(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (d = function(e) {
                return e ? n : t
            }
            )(e)
        }
        const f = e => {
            let t = e.color
              , n = e.mediaType
              , a = e.totalSize
              , i = e.loadedSize
              , d = e.isError
              , f = e.isUploading
              , p = e.isComplete
              , h = e.onClick;
            const m = (0,
            o.useRef)(null)
              , g = (0,
            l.getIconName)(n)
              , _ = (0,
            l.getIconColor)(t);
            (0,
            o.useEffect)((function() {
                i >= 0 && (0,
                l.setSvgProgress)(p, m, a, i)
            }
            ), [p, i, a]);
            const v = (0,
            r.default)({
                [s.default.mediaIcon]: !0,
                [s.default._uploading]: f
            })
              , b = (0,
            r.default)({
                [s.default.loaderCont]: !0,
                [s.default._uploading]: f
            })
              , y = (0,
            r.default)({
                [s.default.iconUpload]: !0,
                [s.default.iconLoading]: !0
            })
              , w = (0,
            r.default)({
                [s.default.iconUpload]: !0,
                [s.default._hidden]: !p
            })
              , E = (0,
            r.default)({
                [s.default.iconError]: !0,
                [s.default._hidden]: !d
            });
            return o.default.createElement("jdiv", {
                className: v,
                onClick: f ? h : null
            }, o.default.createElement("jdiv", {
                ref: m,
                className: b
            }, o.default.createElement(c.default, {
                color: t,
                loaderBarStyle: s.default.loaderBar
            }), o.default.createElement(u.default, {
                iconName: "icon-cancel",
                className: y,
                color: _
            })), o.default.createElement("jdiv", null, d ? o.default.createElement(u.default, {
                iconName: "icon-error",
                className: E,
                color: _
            }) : o.default.createElement(u.default, {
                iconName: g,
                className: w,
                color: _
            })))
        }
        ;
        f.propTypes = {
            color: i.default.string.isRequired,
            isComplete: i.default.bool.isRequired,
            isError: i.default.bool.isRequired,
            isUploading: i.default.bool.isRequired,
            mediaType: i.default.string.isRequired,
            totalSize: i.default.number,
            loadedSize: i.default.number,
            onClick: i.default.func.isRequired
        };
        var p = f;
        t.default = p
    },
    4387: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(23101))
          , r = a(n(98661))
          , i = a(n(45697))
          , l = a(n(94184))
          , s = n(58271)
          , u = n(43417)
          , c = n(18276)
          , d = a(n(63960));
        const f = e => {
            let t = e.url
              , n = e.title
              , a = e.totalSize
              , i = e.loadedSize
              , f = e.isUploading
              , p = e.isError
              , h = e.isComplete
              , m = e.isMobile
              , g = e.isFromAgentMessage
              , _ = e.error
              , v = e.onClick;
            const b = (0,
            s.fileSize)(i)
              , y = a ? (0,
            s.fileSize)(a) : 0
              , w = (0,
            l.default)({
                [d.default.mediaComplete]: !0,
                [d.default._agent]: g
            });
            return r.default.createElement("jdiv", {
                className: d.default.mediaText
            }, r.default.createElement("jdiv", {
                className: d.default.mediaFname,
                title: n
            }, n), p && r.default.createElement("jdiv", {
                className: d.default.mediaComplete
            }, _), f && r.default.createElement("jdiv", {
                className: d.default.mediaPerc
            }, a && r.default.createElement(r.default.Fragment, null, b, " / ", y)), h && r.default.createElement("jdiv", {
                className: w
            }, a ? y + " " : null, r.default.createElement("a", (0,
            o.default)({
                href: t,
                target: "_blank",
                rel: "noopener noreferrer"
            }, (0,
            u.onClickHandler)(v, !0, !m)), (0,
            c.l10n)("file_upl_download"))))
        }
        ;
        f.propTypes = {
            title: i.default.string.isRequired,
            isUploading: i.default.bool.isRequired,
            isError: i.default.bool.isRequired,
            isComplete: i.default.bool.isRequired,
            isMobile: i.default.bool.isRequired,
            isFromAgentMessage: i.default.bool.isRequired,
            url: i.default.string,
            totalSize: i.default.number,
            loadedSize: i.default.number,
            error: i.default.string,
            onClick: i.default.func.isRequired
        };
        var p = f;
        t.default = p
    },
    29043: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(98661))
          , r = a(n(45697))
          , i = n(64607)
          , l = n(31001)
          , s = n(14045)
          , u = a(n(63960));
        const c = e => {
            let t = e.message
              , n = e.isFromAgentMessage;
            return o.default.createElement("jdiv", {
                className: u.default.locationContainer
            }, o.default.createElement("jdiv", {
                className: u.default.mediaFname
            }, "Location"), o.default.createElement("jdiv", {
                className: u.default.locationLink
            }, o.default.createElement(s.Text, null, t.text)), o.default.createElement(l.MessageStatusIcon, {
                className: u.default.time,
                isRenderStatus: !n,
                message: t,
                colorSet: i.COLORS_SET.DARK
            }))
        }
        ;
        c.propTypes = {
            message: r.default.object.isRequired,
            isFromAgentMessage: r.default.bool.isRequired
        };
        var d = c;
        t.default = d
    },
    91471: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.MediaMessageContainer = void 0;
        var o = a(n(61125))
          , r = a(n(67375))
          , i = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = y(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , l = n(29865)
          , s = a(n(45697))
          , u = n(81152)
          , c = n(87692)
          , d = n(80352)
          , f = n(18276)
          , p = n(83549)
          , h = n(26932)
          , m = n(97615)
          , g = n(90061)
          , _ = n(25466)
          , v = n(38042)
          , b = a(n(30679));
        function y(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (y = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function w(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function E(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? w(Object(n), !0).forEach((function(t) {
                    (0,
                    o.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const T = e => {
            let t = e.message
              , n = e.messages;
            (0,
            p.useErrorCatcher)(T.displayName);
            const a = (0,
            l.useSelector)(c.selectBubbleColor)
              , o = t.private_id
              , s = (0,
            i.useState)(!1)
              , g = (0,
            r.default)(s, 2)
              , y = g[0]
              , w = g[1]
              , M = (0,
            i.useContext)(_.CurrentUploadProgress).setLoadedSize
              , C = (e, n) => {
                M(0),
                h.messagesDispatchers.updateMessageBody(o, E(E({}, t.body), {}, {
                    status: n || u.MediaStatus.ERROR,
                    error: e
                }))
            }
              , O = e => 401 === e ? C((0,
            f.l10n)("file_upl_expired"), u.MediaStatus.EXPIRED) : C((0,
            f.l10n)("file_upl_error"), u.MediaStatus.ERROR);
            return (0,
            i.useEffect)(( () => {
                const e = t.body || t.media
                  , n = (null == e ? void 0 : e.file_url) || (null == e ? void 0 : e.file) || !1;
                !n || /^http?s:\/\//gi.test(n) || m.EnvironmentManager.isSelfhosted() || (S.error(`Bad URL (xss: ${n})`),
                O(401))
            }
            ), []),
            t && t.body ? i.default.createElement(b.default, {
                message: t,
                storedMessages: n,
                bubbleColor: a,
                isMobile: d.platform.isMobileOrTablet,
                isPreviewError: y,
                onPreviewError: () => w(!0),
                onCancelError: () => C((0,
                f.l10n)("file_upl_cancel"), u.MediaStatus.ERROR),
                onUploadError: O,
                onLoadPreview: () => {
                    h.messagesDispatchers.updateMessageBody(o, E(E({}, t.body), {}, {
                        loaded: !0
                    }))
                }
            }) : ((0,
            v.telemetry)("media_data_name", {
                param1: o,
                param2: JSON.stringify((null == t ? void 0 : t.media) || null),
                param3: JSON.stringify(t || null)
            }, {
                once: !0
            }),
            null)
        }
        ;
        t.MediaMessageContainer = T,
        T.displayName = "MediaMessageContainer";
        const S = (0,
        g.createLogger)(T.displayName);
        T.propTypes = {
            message: s.default.object.isRequired,
            messages: s.default.arrayOf(s.default.object).isRequired
        }
    },
    30679: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(67375))
          , r = R(n(98661))
          , i = n(17356)
          , l = a(n(94184))
          , s = a(n(45697))
          , u = n(81152)
          , c = a(n(96394))
          , d = n(10457)
          , f = a(n(96150))
          , p = a(n(30295))
          , h = a(n(21704))
          , m = a(n(32138))
          , g = a(n(75686))
          , _ = n(70859)
          , v = R(n(71192))
          , b = n(83549)
          , y = n(56227)
          , w = n(70382)
          , E = n(36148)
          , T = n(50937)
          , S = a(n(63960))
          , M = a(n(29043))
          , C = a(n(4659))
          , O = a(n(56378))
          , k = a(n(47532))
          , j = n(77294)
          , N = a(n(2602))
          , I = n(35636);
        function x(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (x = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function R(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = x(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            return a.default = e,
            n && n.set(e, a),
            a
        }
        const P = e => {
            let t = e.message
              , n = e.storedMessages
              , a = e.bubbleColor
              , s = e.isMobile
              , x = e.isPreviewError
              , R = e.onPreviewError
              , A = e.onLoadPreview
              , D = e.onCancelError
              , L = e.onUploadError;
            (0,
            b.useErrorCatcher)(P.displayName);
            const B = t.body || t.media
              , H = Boolean(c.default.enable_reply)
              , Z = B.file_url || B.file
              , W = B.status || u.MediaStatus.COMPLETE
              , F = B.thumb
              , U = B.type
              , V = B.mime_type
              , z = t.replied_message
              , q = W === u.MediaStatus.COMPLETE
              , G = U === u.MediaType.VIDEO
              , Y = U === u.MediaType.PHOTO
              , $ = U === u.MediaType.LOCATION
              , X = U === u.MediaType.VOICE
              , J = U === u.MediaType.STICKER
              , K = U === u.MediaType.RICH_LINK
              , Q = (0,
            j.isFileGif)(V)
              , ee = q && (F && Y || G) && !x
              , te = (0,
            j.isAgentMessage)(t)
              , ne = te ? d.AgentMessageWrap : f.default
              , ae = (0,
            p.default)(t.created_ts, "dd.mm.yy H:MM:ss")
              , oe = te ? "grey" : a
              , re = (0,
            r.useState)(!1)
              , ie = (0,
            o.default)(re, 2)
              , le = ie[0]
              , se = ie[1]
              , ue = (0,
            r.useRef)(null)
              , ce = (0,
            l.default)(S.default.main, {
                [S.default._mobile]: s,
                [S.default._client]: !te,
                [S.default._preview]: ee,
                [S.default._notPreview]: !ee,
                [S.default[`_${oe}`]]: !0,
                [S.default.__flash]: le,
                [S.default.__quote]: H && z
            })
              , de = () => r.default.createElement(r.default.Fragment, null, H && t.msg_id ? r.default.createElement(r.default.Fragment, null, r.default.createElement(h.default, {
                msgId: t.msg_id,
                isDeleted: W === E.MessageStatus.DELETED,
                isAgentMessage: te
            }), r.default.createElement("jdiv", {
                ref: pe
            })) : r.default.createElement("jdiv", {
                ref: pe
            }), (0,
            w.isErrorMessage)(t) ? r.default.createElement(I.SendAgain, {
                privateId: t.private_id,
                isShow: !0
            }) : null)
              , fe = e => {
                const n = g.default.getComponent(_.Component.SCROLL_CONTAINER);
                e === t.msg_id && (n.scrollTop(ue.current.offsetParent.offsetTop + ue.current.offsetTop - 30),
                se(!0),
                setTimeout(( () => {
                    se(!1)
                }
                ), 400))
            }
            ;
            (0,
            r.useEffect)(( () => {
                const e = v.QuoteEventEmitter.addListener(v.QuoteEventClick, fe);
                return () => e.remove()
            }
            ), []);
            const pe = (0,
            i.useInView)({
                triggerOnce: !0,
                onChange: e => {
                    e && te && (0,
                    y.readMessageOnView)(t)
                }
            }).ref;
            return K ? r.default.createElement(ne, {
                messages: n
            }, r.default.createElement("jdiv", {
                className: ce,
                title: ae,
                ref: ue
            }, r.default.createElement(k.default, {
                message: t,
                bubbleColor: a,
                isMobile: s
            })), de()) : X ? r.default.createElement(ne, {
                messages: n
            }, r.default.createElement("jdiv", {
                className: ce,
                title: ae,
                ref: ue
            }, r.default.createElement(C.default, {
                message: t,
                url: Z,
                color: oe,
                isMobile: s,
                isFromAgentMessage: te,
                onError: L,
                onCancel: D
            })), de()) : J ? r.default.createElement(ne, {
                messages: n
            }, r.default.createElement("jdiv", {
                className: ce,
                title: ae,
                ref: ue
            }, r.default.createElement(O.default, {
                message: t,
                url: Z,
                color: oe,
                isMobile: s,
                isFromAgentMessage: te,
                onError: L,
                onCancel: D
            })), de()) : $ ? r.default.createElement(ne, {
                messages: n
            }, r.default.createElement("jdiv", {
                className: ce,
                title: ae,
                ref: ue
            }, r.default.createElement(M.default, {
                message: t,
                isFromAgentMessage: te
            })), de()) : r.default.createElement(ne, {
                messages: n,
                isPreview: ee
            }, r.default.createElement("jdiv", {
                className: (0,
                l.default)(m.default.container, {
                    [m.default.__client]: !te,
                    [m.default.__withError]: (0,
                    w.isErrorMessage)(t)
                }),
                ref: ue,
                "jv-private-id": t.private_id
            }, r.default.createElement("jdiv", {
                className: ce,
                title: ae
            }, H && z && r.default.createElement(v.default, {
                msgId: z.msg_id,
                palette: te ? v.PALETTE.DARK : v.PALETTE.LIGHT,
                isParentMessageFromAgent: te,
                isMediaMessage: !0
            }), ee ? r.default.createElement(T.Preview, {
                message: t,
                url: Z,
                isVideo: G,
                isGif: Q,
                isFromAgentMessage: te,
                onError: R,
                onLoadPreview: A
            }) : r.default.createElement(N.default, {
                message: t,
                url: Z,
                color: oe,
                isMobile: s,
                isFromAgentMessage: te,
                onError: L,
                onCancel: D
            })), de()))
        }
        ;
        P.propTypes = {
            message: s.default.object.isRequired,
            storedMessages: s.default.arrayOf(s.default.object).isRequired,
            bubbleColor: s.default.string.isRequired,
            isMobile: s.default.bool.isRequired,
            isPreviewError: s.default.bool.isRequired,
            onPreviewError: s.default.func.isRequired,
            onCancelError: s.default.func.isRequired,
            onUploadError: s.default.func.isRequired
        },
        P.displayName = "MediaMessagePure";
        var A = P;
        t.default = A
    },
    54072: function(e, t, n) {
        "use strict";
        var a = n(17907);
        t.Z = void 0;
        var o = a(n(67375))
          , r = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = s(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , i = a(n(45697))
          , l = a(n(63960));
        function s(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (s = function(e) {
                return e ? n : t
            }
            )(e)
        }
        const u = e => {
            let t = e.file
              , n = e.onClick;
            const a = (0,
            r.useState)(!0)
              , i = (0,
            o.default)(a, 2)
              , s = i[0]
              , u = i[1];
            return s ? r.default.createElement(r.default.Fragment, null, r.default.createElement("jdiv", {
                className: l.default.overlayText
            }, "GIF"), r.default.createElement("jdiv", {
                className: l.default.playIcon,
                onClick: e => {
                    e.preventDefault(),
                    n(t, ( () => u(!1)))
                }
            })) : null
        }
        ;
        u.propTypes = {
            file: i.default.string.isRequired,
            onClick: i.default.func.isRequired
        };
        var c = u;
        t.Z = c
    },
    63070: function(e, t, n) {
        "use strict";
        var a = n(17907);
        t.Z = void 0;
        var o = a(n(98661))
          , r = a(n(45697));
        function i(e) {
            let t = e.title
              , n = e.src
              , a = e.poster
              , r = e.onError;
            return o.default.createElement("video", {
                controls: !0,
                width: "250",
                preload: a ? "none" : null,
                poster: null != a ? a : null,
                title: t
            }, o.default.createElement("source", {
                src: n,
                onError: r
            }), "Video is not supported.")
        }
        i.propTypes = {
            title: r.default.string.isRequired,
            src: r.default.string.isRequired,
            poster: r.default.string,
            onError: r.default.func.isRequired
        };
        var l = i;
        t.Z = l
    },
    47532: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(23101))
          , r = a(n(98661))
          , i = a(n(45697))
          , l = n(16016)
          , s = n(18276)
          , u = n(53400)
          , c = a(n(30295))
          , d = n(38669)
          , f = n(14045)
          , p = a(n(23360));
        function h(e) {
            let t = e.message;
            const n = t.body.title == t.body.text
              , a = (0,
            c.default)(t.created_ts, "H:MM");
            return r.default.createElement("jdiv", {
                className: p.default.linkWrap
            }, r.default.createElement("jdiv", {
                className: p.default.link
            }, r.default.createElement(f.Text, null, t.body.url)), r.default.createElement("jdiv", {
                className: p.default.contentWrap
            }, r.default.createElement("a", {
                href: t.body.url,
                className: p.default.content,
                title: t.body.title,
                rel: "noopener noreferrer",
                target: "_blank"
            }, t.body.title ? r.default.createElement("jdiv", {
                className: p.default.title
            }, (0,
            l.formatTextLen)(t.body.title, 128)) : null, !n && t.body.text ? r.default.createElement("jdiv", {
                className: p.default.text
            }, (0,
            l.formatTextLen)(t.body.text, 128)) : null, t.body.thumb ? r.default.createElement("jdiv", {
                className: p.default.imgWrap
            }, r.default.createElement("img", {
                src: t.body.thumb,
                title: t.body.title
            })) : null)), r.default.createElement(d.Button, {
                fullWidth: !0,
                onClick: () => {
                    window.open(t.body.url, "_blank")
                }
            }, (0,
            s.l10n)("lblView")), r.default.createElement("jdiv", (0,
            o.default)({
                className: p.default.time
            }, (0,
            u.locator)("msg_agent_time")), a))
        }
        h.propTypes = {
            message: i.default.object.isRequired
        };
        var m = h;
        t.default = m
    },
    56378: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(61125))
          , r = a(n(98661))
          , i = a(n(45697))
          , l = a(n(2602));
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function(t) {
                    (0,
                    o.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const c = e => {
            let t = e.message
              , n = e.url
              , a = e.color
              , o = e.isMobile
              , i = e.isFromAgentMessage
              , s = e.onError
              , c = e.onCancel;
            const d = u(u({}, t), {}, {
                body: u(u({}, t.body), {}, {
                    file_name: "Sticker: " + t.body.file_name
                })
            });
            return r.default.createElement(l.default, {
                message: d,
                url: n,
                color: a,
                isMobile: o,
                isFromAgentMessage: i,
                onError: s,
                onCancel: c
            })
        }
        ;
        c.propTypes = {
            message: i.default.object.isRequired,
            color: i.default.string.isRequired,
            isMobile: i.default.bool.isRequired,
            isFromAgentMessage: i.default.bool.isRequired,
            url: i.default.string,
            onError: i.default.func.isRequired,
            onCancel: i.default.func.isRequired
        };
        var d = c;
        t.default = d
    },
    4659: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(61125))
          , r = a(n(98661))
          , i = a(n(45697))
          , l = a(n(2602));
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function(t) {
                    (0,
                    o.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function c(e) {
            let t = e.message
              , n = e.url
              , a = e.color
              , o = e.isMobile
              , i = e.isFromAgentMessage
              , s = e.onError
              , c = e.onCancel;
            const d = u(u({}, t), {}, {
                body: u(u({}, t.body), {}, {
                    file_name: "Voice: " + t.body.file_name
                })
            });
            return r.default.createElement(l.default, {
                message: d,
                url: n,
                color: a,
                isMobile: o,
                isFromAgentMessage: i,
                onError: s,
                onCancel: c
            })
        }
        c.propTypes = {
            message: i.default.object.isRequired,
            color: i.default.string.isRequired,
            isMobile: i.default.bool.isRequired,
            isFromAgentMessage: i.default.bool.isRequired,
            url: i.default.string,
            onError: i.default.func.isRequired,
            onCancel: i.default.func.isRequired
        };
        var d = c;
        t.default = d
    },
    98132: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(98661))
          , r = a(n(45697))
          , i = n(77294);
        const l = e => {
            let t = e.color
              , n = void 0 === t ? "green" : t
              , a = e.loaderBarStyle;
            return o.default.createElement(o.default.Fragment, null, o.default.createElement("svg", {
                width: "42",
                height: "42",
                viewPort: "0 0 21 21",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg"
            }, o.default.createElement("circle", {
                r: "18",
                cx: "21",
                cy: "21",
                fill: "#ffffff",
                strokeDasharray: "119.38",
                strokeDashoffset: "0"
            }), o.default.createElement("circle", {
                className: a,
                r: "18",
                cx: "21",
                cy: "21",
                fill: "transparent",
                stroke: (0,
                i.getCircleColor)(n),
                strokeDasharray: "119.38",
                strokeDashoffset: "0"
            })))
        }
        ;
        l.propTypes = {
            color: r.default.string,
            loaderBarStyle: r.default.string
        };
        var s = o.default.memo(l);
        t.default = s
    },
    21704: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(23101))
          , r = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = v(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , i = a(n(94184))
          , l = a(n(45697))
          , s = n(26932)
          , u = n(70859)
          , c = a(n(75686))
          , d = n(80352)
          , f = n(52661)
          , p = n(18276)
          , h = n(83549)
          , m = n(38042)
          , g = n(53400)
          , _ = a(n(64615));
        function v(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (v = function(e) {
                return e ? n : t
            }
            )(e)
        }
        const b = e => {
            let t = e.msgId
              , n = e.isAloneMessage
              , a = e.isDeleted
              , l = e.isAgentMessage;
            (0,
            h.useErrorCatcher)("Reply");
            if (!a)
                return r.default.createElement("jdiv", (0,
                o.default)({
                    onClick: () => {
                        s.appDispatchers.setQuoteMsgId(t),
                        c.default.get(u.Component.INPUT).focus(),
                        (0,
                        m.telemetry)("visitor_reply_button_click")
                    }
                    ,
                    className: (0,
                    i.default)(_.default.reply, {
                        [_.default.__client]: !l,
                        [_.default.__agent]: l,
                        [_.default.__desktop]: d.platform.isDesktop,
                        [_.default.__aloneReply]: n
                    })
                }, (0,
                g.locator)(`REPLY_${l ? "AGENT" : "CLIENT"}_${t}`)), r.default.createElement(f.ReplyIcon, {
                    className: _.default.replyIcon,
                    title: (0,
                    p.l10n)("lblReply")
                }))
        }
        ;
        b.propTypes = {
            msgId: l.default.number,
            isAloneMessage: l.default.bool,
            isDeleted: l.default.bool,
            isAgentMessage: l.default.bool
        };
        var y = (0,
        r.memo)(b);
        t.default = y
    },
    60936: function(e, t, n) {
        "use strict";
        var a = n(17907);
        t.Z = void 0;
        var o = a(n(98661))
          , r = n(83549)
          , i = a(n(68531))
          , l = n(91471);
        var s = o.default.memo((e => {
            if ((0,
            r.useErrorCatcher)("TemporaryMessage"),
            e.messages && e.messages[0]) {
                const t = e.messages[0];
                if (t.get("body") && t.get("body").type) {
                    const n = t.toJSON();
                    return o.default.createElement(l.MediaMessageContainer, {
                        message: n,
                        messages: e.messages
                    })
                }
                return o.default.createElement(i.default, e)
            }
        }
        ));
        t.Z = s
    },
    38282: function(e, t, n) {
        "use strict";
        var a = n(17907);
        t.U = s;
        var o = a(n(98661))
          , r = a(n(45697))
          , i = n(56443)
          , l = n(78692);
        function s(e) {
            let t = e.text
              , n = e.customerIO
              , a = e.theme;
            const r = n && l.ApiInvitationsManager.sendUrlClickTelemetry;
            return o.default.createElement(i.Markdown, {
                onLinkClick: r,
                theme: a
            }, t)
        }
        s.propTypes = {
            text: r.default.string.isRequired,
            customerIO: r.default.bool
        }
    },
    60569: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Wrap = c;
        var o = a(n(23101))
          , r = a(n(88436))
          , i = a(n(98661))
          , l = a(n(45697))
          , s = a(n(32138));
        const u = ["children", "lineHeight"];
        function c(e) {
            let t = e.children
              , n = e.lineHeight
              , a = (0,
            r.default)(e, u);
            const l = {
                lineHeight: n
            };
            return i.default.createElement("jdiv", (0,
            o.default)({
                className: s.default.textWrap,
                style: l
            }, a), t)
        }
        c.propTypes = {
            children: l.default.node,
            lineHeight: l.default.string
        }
    },
    25153: function(e, t, n) {
        "use strict";
        var a = n(17907);
        t.Z = u;
        var o = a(n(98661))
          , r = a(n(45697))
          , i = n(60569)
          , l = n(18276)
          , s = a(n(32138));
        function u(e) {
            let t = e.children
              , n = e.isDeletedMessage
              , a = e.lineHeight;
            return n ? o.default.createElement(i.Wrap, {
                lineHeight: a
            }, o.default.createElement("jdiv", {
                className: s.default.text
            }, (0,
            l.l10n)("messageDeleted"))) : o.default.createElement(i.Wrap, {
                lineHeight: a
            }, t)
        }
        u.propTypes = {
            children: r.default.node,
            isDeletedMessage: r.default.bool.isRequired,
            lineHeight: r.default.string
        }
    },
    68531: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = d;
        var o = a(n(98661))
          , r = a(n(45697))
          , i = n(80352)
          , l = a(n(4867))
          , s = n(83549)
          , u = a(n(20110))
          , c = n(32444);
        function d(e) {
            let t = e.messages;
            (0,
            s.useErrorCatcher)("TextMessageContainer");
            const n = (0,
            c.useEnhanced)()
              , a = n.bubbleColor
              , r = n.lineHeight
              , l = i.platform.isMobileOrTablet;
            return o.default.createElement(u.default, {
                messages: t,
                isMobile: l,
                bubbleColor: a,
                lineHeight: r
            })
        }
        d.propTypes = {
            messages: r.default.arrayOf(r.default.instanceOf(l.default))
        }
    },
    20110: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = h;
        var o = a(n(98661))
          , r = a(n(94184))
          , i = a(n(45697))
          , l = n(10457)
          , s = a(n(96150))
          , u = a(n(4867))
          , c = n(80797)
          , d = n(496)
          , f = n(70382)
          , p = a(n(32138));
        function h(e) {
            let t = e.messages
              , n = e.isMobile
              , a = e.bubbleColor
              , i = e.lineHeight;
            const u = (0,
            c.useWidgetConstructorContext)().isWidgetConstructor
              , h = u ? t : t[0].toJSON()
              , m = u ? {
                fromAgent: !0,
                fromClient: !1
            } : (0,
            f.messageInitiator)(h)
              , g = m.fromClient
              , _ = m.fromAgent
              , v = "proactive" === h.type
              , b = _ ? l.AgentMessageWrap : s.default
              , y = (0,
            r.default)({
                [p.default.main]: !0,
                [p.default.__client]: g,
                [p.default.__agent]: _,
                [p.default.__mobile]: n
            });
            return o.default.createElement(b, {
                messages: t
            }, o.default.createElement("jdiv", {
                className: y
            }, u ? o.default.createElement(d.TextBox, {
                message: h,
                bubbleColor: a,
                lineHeight: i,
                isProactiveMessage: v,
                isClientMessage: g,
                isAgentMessage: _,
                isWidgetConstructor: u
            }) : t.map(( (e, t) => {
                const n = e.toJSON ? e.toJSON() : e;
                return o.default.createElement(d.TextBox, {
                    key: t,
                    message: n,
                    bubbleColor: a,
                    lineHeight: i,
                    isProactiveMessage: v,
                    isClientMessage: g,
                    isAgentMessage: _,
                    isDeletedMessage: (0,
                    f.messageStatus)(n).isDeleted,
                    isErrorMessage: (0,
                    f.isErrorMessage)(n)
                })
            }
            ))))
        }
        h.propTypes = {
            messages: i.default.arrayOf(i.default.instanceOf(u.default)).isRequired,
            isMobile: i.default.bool.isRequired,
            bubbleColor: i.default.string.isRequired,
            lineHeight: i.default.string
        }
    },
    32444: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useEnhanced = function() {
            const e = (0,
            i.useSelector)(l.selectBubbleColor)
              , t = (0,
            r.useState)(( () => s.platform.isIos ? u.default.getLineHeight() : null))
              , n = (0,
            o.default)(t, 2)
              , a = n[0]
              , c = n[1];
            return (0,
            r.useEffect)((function() {
                u.default.listenChangeZoom(( () => {
                    if (s.platform.isIos) {
                        const e = u.default.getLineHeight();
                        c(e)
                    }
                }
                ))
            }
            ), []),
            {
                bubbleColor: e,
                lineHeight: a
            }
        }
        ;
        var o = a(n(67375))
          , r = n(98661)
          , i = n(29865)
          , l = n(87692)
          , s = n(80352)
          , u = a(n(74379))
    },
    42958: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isErrorMessage = function(e) {
            const t = !(0,
            o.getClient)().isIntroduced && !(0,
            o.getApp)().isOnline
              , n = r(e).fromAgent
              , a = i(e).isNotDelivered;
            return !n && a && !t
        }
        ,
        t.messageInitiator = r,
        t.messageStatus = i;
        var a = n(81152)
          , o = n(44145);
        function r(e) {
            const t = e.toJSON()
              , n = t.from
              , o = t.type;
            return {
                fromClient: n === a.MessageInitiator.CLIENT,
                fromBot: n === a.MessageInitiator.FORM,
                fromAgent: n === a.MessageInitiator.FORM || n === a.MessageInitiator.AGENT || o === a.MessageType.PROACTIVE
            }
        }
        function i(e) {
            const t = e.toJSON().status;
            return {
                isDeleted: t === a.MessageStatus.DELETED,
                isNotDelivered: t === a.MessageStatus.NOT_DELIVERED
            }
        }
    },
    25117: function(e, t, n) {
        "use strict";
        var a = n(17907);
        t.Z = void 0;
        var o = a(n(98661))
          , r = n(83549)
          , i = n(52028)
          , l = n(80797)
          , s = n(24111)
          , u = n(65138)
          , c = n(93179)
          , d = n(31694);
        const f = e => {
            let t = e.messages;
            (0,
            r.useErrorCatcher)(f.displayName);
            const n = (0,
            l.useWidgetConstructorContext)().isWidgetConstructor
              , a = (0,
            d.useEnhanced)()
              , p = a.componentRef
              , h = a.bubbleColor
              , m = a.isIos
              , g = a.phrases
              , _ = a.isHidden
              , v = a.enablePrechat
              , b = a.sendPhrase
              , y = (0,
            s.useAppSelector)(u.selectApp).chatStarted
              , w = n ? t.body.prechats : g;
            return !n && (!i.isDesignerEditor && !v || y) ? null : o.default.createElement(c.PrechatMessagePure, {
                ref: p,
                bubbleColor: h,
                phrases: w,
                isHidden: _,
                isIos: m,
                sendPhrase: b
            })
        }
        ;
        f.displayName = "PrechatMessageContainer";
        var p = f;
        t.Z = p
    },
    93179: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.PrechatMessagePure = void 0;
        var o = a(n(23101))
          , r = a(n(67375))
          , i = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = m(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , l = a(n(94184))
          , s = a(n(45697))
          , u = n(43417)
          , c = n(38669)
          , d = n(50339)
          , f = n(14045)
          , p = n(80797)
          , h = a(n(77335));
        function m(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (m = function(e) {
                return e ? n : t
            }
            )(e)
        }
        const g = (0,
        i.forwardRef)(( (e, t) => {
            let n = e.phrases
              , a = e.isHidden
              , s = e.isMobile
              , m = e.isIos
              , g = e.sendPhrase;
            const _ = (0,
            p.useWidgetConstructorContext)()
              , v = _.isWidgetConstructor
              , b = _.isPreview
              , y = (0,
            l.default)({
                [h.default.main]: !0,
                [h.default.__mobile]: s,
                [h.default.__ios]: m,
                [h.default.__hide]: a
            })
              , w = (0,
            i.useState)(!1)
              , E = (0,
            r.default)(w, 2)
              , T = E[0]
              , S = E[1];
            return i.default.createElement("jdiv", {
                ref: t,
                className: y
            }, n.map(( (e, t) => {
                let n = e.id
                  , a = e.text
                  , r = e.background
                  , s = e.text_color;
                const p = Boolean(r)
                  , m = p ? (0,
                d.buildBackground)(r) : null;
                return i.default.createElement(c.Button, (0,
                o.default)({
                    key: n,
                    variant: "outline",
                    className: (0,
                    l.default)(h.default.button, h.default.__buttonModifier, {
                        [h.default.__background]: p
                    }),
                    onTouchMove: () => S(!0),
                    onTouchStart: () => S(!1),
                    onTouchCancel: () => S(!1),
                    rounded: !0,
                    style: {
                        "--jv-button-background": m,
                        "--jv-button-hover-background": m,
                        "--jv-button-color": p ? s : null
                    }
                }, (0,
                u.onClickHandler)(( () => !v && !b && g(a, n)), !0, !0, T), {
                    qaId: `PRECHAT_BUTTON_${t + 1}`
                }), i.default.createElement(f.Text, {
                    disableAloneEmoji: !0,
                    disableLinkify: !0
                }, a))
            }
            )))
        }
        ));
        t.PrechatMessagePure = g,
        g.displayName = "PrechatMessage",
        g.propTypes = {
            bubbleColor: s.default.string,
            phrases: s.default.arrayOf(s.default.shape({
                id: s.default.number,
                text: s.default.string
            })),
            isHidden: s.default.bool,
            isMobile: s.default.bool,
            isIos: s.default.bool,
            formatText: s.default.func,
            sendPhrase: s.default.func
        }
    },
    68168: function(e, t, n) {
        "use strict";
        var a = n(17907);
        t.Z = void 0;
        var o = a(n(98661))
          , r = a(n(45697))
          , i = a(n(9097))
          , l = a(n(30295))
          , s = n(18276);
        const u = e => {
            const t = e.messages[0].time;
            return o.default.createElement("jdiv", {
                className: i.default.main
            }, (e => {
                const t = new Date(e)
                  , n = new Date
                  , a = t.getFullYear() === n.getFullYear()
                  , o = t.getMonth() === n.getMonth()
                  , r = t.getDate() === n.getDate()
                  , i = t.getDate() === n.getDate() - 1;
                return a && o ? r ? (0,
                s.l10n)("today") : i ? (0,
                s.l10n)("yesterday") : (0,
                l.default)(e, "dd.mm.yyyy") : (0,
                l.default)(e, "dd.mm.yyyy")
            }
            )(t))
        }
        ;
        u.propTypes = {
            messages: r.default.arrayOf(r.default.object)
        };
        var c = u;
        t.Z = c
    },
    94613: function(e, t, n) {
        "use strict";
        var a = n(17907);
        t.Z = void 0;
        var o = a(n(33119))
          , r = a(n(92664))
          , i = a(n(84827))
          , l = a(n(85299))
          , s = a(n(55536))
          , u = a(n(98661))
          , c = a(n(94184))
          , d = a(n(96394))
          , f = n(80352)
          , p = a(n(53429))
          , h = a(n(79868))
          , m = a(n(14890))
          , g = a(n(89315));
        function _(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                s.default)(e);
                if (t) {
                    var o = (0,
                    s.default)(this).constructor;
                    n = Reflect.construct(a, arguments, o)
                } else
                    n = a.apply(this, arguments);
                return (0,
                l.default)(this, n)
            }
        }
        let v = function(e) {
            (0,
            i.default)(n, e);
            var t = _(n);
            function n(e) {
                var a;
                (0,
                o.default)(this, n),
                a = t.call(this, e);
                const r = h.default.getSocial();
                return h.default.isLoginned() && (a.state = {
                    vk: r.vk,
                    fb: r.fb,
                    mode: r.mode
                }),
                a
            }
            return (0,
            r.default)(n, [{
                key: "componentWillMount",
                value: function() {
                    d.default.joint && !f.platform.isMobileOrTablet || 3 != d.default.contacts_ask || this.setState({
                        mode: "email"
                    })
                }
            }, {
                key: "render",
                value: function() {
                    if (this.props.messages && this.state.mode)
                        return u.default.createElement(p.default, {
                            padding: "sm",
                            addClassname: (0,
                            c.default)({
                                [g.default.wrapper]: !0
                            })
                        }, u.default.createElement(m.default, {
                            mode: this.state
                        }))
                }
            }]),
            n
        }(u.default.Component);
        t.Z = v
    },
    99762: function(e, t, n) {
        "use strict";
        var a = n(17907);
        t.I = void 0;
        var o = a(n(98661))
          , r = a(n(45697))
          , i = n(45683)
          , l = a(n(25648));
        const s = e => {
            let t = e.agentAvatar;
            const n = t && (0,
            i.getAvatarApiURL)(t)
              , a = {
                backgroundImage: `url(${n})`
            };
            return o.default.createElement("jdiv", {
                className: l.default.avatar
            }, n && o.default.createElement("jdiv", {
                className: l.default.img,
                style: a
            }))
        }
        ;
        t.I = s,
        s.propTypes = {
            agentAvatar: r.default.string
        }
    },
    79232: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(98661))
          , r = a(n(94184))
          , i = a(n(45697))
          , l = a(n(40704))
          , s = a(n(48524))
          , u = n(14045);
        const c = e => {
            let t = e.message
              , n = e.isMobile;
            const a = t.body
              , i = t.text
              , c = t.private_id
              , d = (0,
            r.default)({
                [s.default.main]: !0,
                [s.default["__" + a.name]]: !0,
                [s.default.__mobile]: n
            })
              , f = (0,
            r.default)({
                [s.default.text]: !0,
                [s.default.__mobile]: n
            });
            return o.default.createElement("jdiv", {
                className: d,
                "jv-private-id": c
            }, o.default.createElement("jdiv", {
                className: f
            }, o.default.createElement(l.default, {
                color: "#18C139",
                iconName: a.name + "Icon",
                className: s.default.callIcon
            }), o.default.createElement("jdiv", null, o.default.createElement(u.Text, null, i))))
        }
        ;
        c.propTypes = {
            message: i.default.object.isRequired,
            isMobile: i.default.bool.isRequired
        };
        var d = c;
        t.default = d
    },
    55961: function(e, t, n) {
        "use strict";
        var a = n(17907);
        t.Z = f;
        var o = a(n(98661))
          , r = a(n(45697))
          , i = n(83549)
          , l = a(n(4867))
          , s = n(32195)
          , u = a(n(79232))
          , c = a(n(28558))
          , d = n(60152);
        function f(e) {
            var t;
            let n = e.messages;
            (0,
            i.useErrorCatcher)(f.displayName);
            const a = (0,
            d.useEnhanced)()
              , r = a.isMobile
              , l = a.isIos
              , p = a.textSize
              , h = a.lineHeight
              , m = n[0].toJSON();
            switch (null === (t = m.body) || void 0 === t ? void 0 : t.type) {
            case "call":
                return o.default.createElement(u.default, {
                    message: m,
                    isMobile: r
                });
            case "chat":
                return o.default.createElement(s.AgentInviteMessage, {
                    message: m
                });
            default:
                return o.default.createElement(c.default, {
                    message: m,
                    isMobile: r,
                    isIos: l,
                    textSize: p,
                    lineHeight: h
                })
            }
        }
        f.displayName = "SystemMessageContainer",
        f.propTypes = {
            messages: r.default.arrayOf(r.default.instanceOf(l.default))
        }
    },
    28558: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(98661))
          , r = a(n(94184))
          , i = a(n(45697))
          , l = n(81152)
          , s = a(n(30295))
          , u = a(n(81084))
          , c = n(14045);
        const d = e => {
            let t = e.message
              , n = e.isMobile
              , a = e.isIos
              , i = e.textSize
              , d = e.lineHeight;
            const f = t.body
              , p = t.created_ts
              , h = t.type
              , m = t.text
              , g = t.private_id
              , _ = h === l.MessageType.PREFORM
              , v = null == f ? void 0 : f.type
              , b = (0,
            s.default)(p, "dd.mm.yy H:MM:ss")
              , y = (0,
            r.default)({
                [u.default.main]: !0,
                [u.default.__mobile]: n,
                [u.default["__" + v]]: v && "text" !== v
            })
              , w = (0,
            r.default)({
                [u.default.text]: !0,
                [u.default.__bot]: _
            })
              , E = {
                WebkitTextSizeAdjust: a ? i : "none",
                lineHeight: a ? d : null
            };
            return o.default.createElement("jdiv", {
                className: y,
                title: b,
                "jv-private-id": g
            }, o.default.createElement("jdiv", {
                className: w,
                style: E
            }, o.default.createElement(c.Text, null, m)))
        }
        ;
        d.propTypes = {
            message: i.default.shape({
                created_ts: i.default.number,
                private_id: i.default.string,
                status: i.default.string,
                text: i.default.string,
                type: i.default.string,
                body: i.default.shape({
                    type: i.default.string,
                    name: i.default.string
                })
            }),
            isIos: i.default.bool,
            isMobile: i.default.bool,
            textSize: i.default.string,
            lineHeight: i.default.string
        };
        var f = o.default.memo(d);
        t.default = f
    },
    60152: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useEnhanced = function() {
            const e = r.platform.isMobileOrTablet || r.platform.isChatPage
              , t = r.platform.isIos
              , n = o.default.getTextSize()
              , a = o.default.getLineHeight();
            return {
                isMobile: e,
                isIos: t,
                textSize: n,
                lineHeight: a
            }
        }
        ;
        var o = a(n(74379))
          , r = n(80352)
    },
    95066: function(e, t, n) {
        "use strict";
        var a = n(17907);
        t.Z = void 0;
        var o = a(n(98661))
          , r = a(n(45697))
          , i = n(18276)
          , l = a(n(96394))
          , s = n(10457);
        const u = o.default.lazy(( () => n.e(772).then(n.bind(n, 66302))))
          , c = e => {
            let t = e.messages;
            return l.default.enable_webrtc_calls ? o.default.createElement(s.AgentMessageWrap, {
                messages: t
            }, o.default.createElement(o.default.Suspense, {
                fallback: o.default.createElement("jdiv", null, (0,
                i.l10n)("cb_loading"))
            }, o.default.createElement(u, {
                message: t[0]
            }))) : null
        }
        ;
        c.propTypes = {
            messages: r.default.any
        };
        var d = o.default.memo(c);
        t.Z = d
    },
    71192: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = t.QuoteEventEmitter = t.QuoteEventClick = t.PALETTE = void 0;
        var o = a(n(23101))
          , r = a(n(67375))
          , i = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = M(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , l = a(n(94184))
          , s = a(n(45697))
          , u = n(89766)
          , c = n(45959)
          , d = n(77294)
          , f = n(87692)
          , p = n(18276)
          , h = n(69845)
          , m = n(83549)
          , g = n(14045)
          , _ = n(81152)
          , v = n(56443)
          , b = n(38042)
          , y = n(70051)
          , w = n(24111)
          , E = n(79814)
          , T = n(53400)
          , S = a(n(86940));
        function M(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (M = function(e) {
                return e ? n : t
            }
            )(e)
        }
        const C = {
            LIGHT: "light",
            DARK: "dark"
        };
        t.PALETTE = C;
        const O = new u.EventEmitter;
        t.QuoteEventEmitter = O;
        const k = "clickOnQuote";
        t.QuoteEventClick = k;
        const j = e => {
            let t = e.palette
              , n = void 0 === t ? C.DARK : t
              , a = e.msgId
              , s = e.active
              , u = void 0 !== s && s
              , M = e.isAloneMessage
              , j = e.isMediaMessage
              , N = e.isParentMessageFromAgent
              , I = e.qaId
              , x = void 0 === I ? "QUOTE" : I;
            (0,
            m.useErrorCatcher)("InputQuote");
            const R = (0,
            w.useAppSelector)(c.selectClientName)
              , P = (0,
            w.useAppSelector)(f.selectBubbleColor)
              , A = (0,
            w.useAppSelector)((0,
            E.selectByMsgId)(+a));
            if (!A)
                return;
            const D = A.type
              , L = A.text
              , B = A.from_id
              , H = A.body
              , Z = (0,
            w.useAppSelector)(B ? (0,
            y.selectAgentById)(+B) : () => null)
              , W = (0,
            d.isAgentMessage)(A) ? (null == Z ? void 0 : Z.name) || "Bot" : R || (0,
            p.l10n)("lblYou")
              , F = null == H ? void 0 : H.type
              , U = Boolean(null == H ? void 0 : H.is_markdown)
              , V = (0,
            i.useState)("media" === D && "photo" === F && (null == H ? void 0 : H.thumb))
              , z = (0,
            r.default)(V, 2)
              , q = z[0]
              , G = z[1]
              , Y = "photo" === F && q ? (0,
            p.l10n)("lblPhoto") : "media" === D ? H.file_name || (null == H ? void 0 : H.title) || L : "cobrowse" === F ? (null == H ? void 0 : H.text) || (0,
            p.l10n)("lblDefaultCobrowseComment") : L;
            return A.status === _.MessageStatus.DELETED ? null : i.default.createElement("jdiv", {
                className: (0,
                l.default)(S.default.quote, S.default[`__${n}`], {
                    [S.default.__active]: u,
                    [S.default.__aloneQuote]: M,
                    [S.default.__media]: j,
                    [S.default[`__${P}`]]: !N
                }),
                onClick: () => {
                    O.emit(k, a),
                    (0,
                    b.telemetry)("visitor_reply_message_click_scroll")
                }
            }, q && i.default.createElement("img", (0,
            o.default)({
                className: S.default.previewMediaPhoto,
                alt: L,
                title: L,
                src: null == H ? void 0 : H.thumb,
                width: 30,
                height: 30,
                loading: "lazy",
                onError: () => {
                    G(!1)
                }
            }, (0,
            T.locator)(`${x}_${a}_MEDIA_THUMB`))), i.default.createElement("jdiv", {
                className: S.default.container
            }, i.default.createElement("jdiv", (0,
            o.default)({
                className: S.default.author
            }, (0,
            T.locator)(`${x}_${a}_AUTHOR`)), A.status ? W : (0,
            p.l10n)("messageDeleted")), i.default.createElement("jdiv", (0,
            o.default)({
                className: (0,
                l.default)(S.default.message, {
                    [S.default.aloneEmoji]: (0,
                    h.checkAlone)(Y),
                    [S.default.markdown]: U
                })
            }, (0,
            T.locator)(`${x}_${a}_TEXT`)), U ? i.default.createElement(v.Markdown, {
                theme: "boolean" != typeof N || N ? void 0 : {
                    text: S.default.mdtext
                },
                qaId: `${x}_${a}_MARKDOWN`
            }, Y) : i.default.createElement(g.Text, {
                qaId: `${x}_${a}_TEXT`
            }, Y))))
        }
        ;
        j.propTypes = {
            msgId: s.default.number.isRequired,
            palette: s.default.oneOf(Object.values(C)),
            active: s.default.bool,
            isMediaMessage: s.default.bool,
            isAloneMessage: s.default.bool,
            isParentMessageFromAgent: s.default.bool
        };
        var N = j;
        t.default = N
    },
    63925: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(67375))
          , r = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = m(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , i = n(29865)
          , l = a(n(7468))
          , s = a(n(45697))
          , u = n(44506)
          , c = n(68403)
          , d = a(n(80282))
          , f = n(44145)
          , p = n(81152)
          , h = n(65465);
        function m(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (m = function(e) {
                return e ? n : t
            }
            )(e)
        }
        const g = (0,
        n(90061).createLogger)("SocialButtonContainer")
          , _ = e => {
            let t = e.isOnline
              , n = e.chatStarted
              , a = e.clientIntegration
              , i = e.messages
              , s = e.socialState;
            const m = e => !!(0,
            f.getMessagesByType)(e, p.MessageType.FORM).length
              , _ = (0,
            r.useState)(m(i))
              , v = (0,
            o.default)(_, 2)
              , b = v[0]
              , y = v[1];
            if (!b && ( () => {
                if ((0,
                c.hasIntegration)(a))
                    return g.log("Already connected with vk/fb."),
                    h.messageActions.hideEmailForm(),
                    !1;
                if (m(i))
                    return y(!0),
                    !1;
                if (t && n) {
                    const e = (0,
                    f.getClientMessages)(i);
                    return !(!e || !e.length)
                }
                return !1
            }
            )())
                return r.default.createElement("jdiv", {
                    className: l.default.socialPanel
                }, r.default.createElement(d.default, {
                    show: !0,
                    mode: s,
                    processSocial: u.processSocial
                }))
        }
        ;
        _.propTypes = {
            isOnline: s.default.bool,
            chatStarted: s.default.bool,
            clientIntegration: s.default.oneOfType([s.default.bool, s.default.string]),
            messages: s.default.array,
            socialState: s.default.shape({
                vk: s.default.bool,
                fb: s.default.bool,
                mode: s.default.oneOfType([s.default.bool, s.default.string])
            })
        };
        var v = (0,
        i.connect)((e => ({
            isOnline: e.app.isOnline,
            chatStarted: e.app.chatStarted,
            clientIntegration: e.client.hasIntegration,
            messages: e.messages,
            socialState: e.social
        })), {})(_);
        t.default = v
    },
    80282: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(98661))
          , r = n(18276)
          , i = a(n(45697))
          , l = a(n(36683))
          , s = a(n(74783))
          , u = n(48177)
          , c = a(n(7468));
        const d = e => {
            let t = e.show
              , n = e.mode
              , a = e.processSocial;
            if (!t)
                return;
            return "sb" == n.mode ? o.default.createElement("jdiv", {
                className: c.default.wrap
            }, o.default.createElement("jdiv", {
                className: c.default.socialLink,
                onClick: e => {
                    a(e, "sb")
                }
                ,
                title: (0,
                r.l10n)("omni_sb_link")
            }, (0,
            r.l10n)("social_process_in_sb"), "  ", o.default.createElement(u.SvgIcon, {
                iconName: "sb",
                className: c.default.iconSb
            }), " ", (0,
            r.l10n)("omni_sb_link"))) : o.default.createElement("jdiv", {
                className: c.default.wrap
            }, n.vk ? o.default.createElement("jdiv", {
                className: c.default.socialLink,
                onClick: e => {
                    a(e, "vk")
                }
                ,
                title: (0,
                r.l10n)("social_vk")
            }, (0,
            r.l10n)("social_process_in"), " ", o.default.createElement(u.SvgIcon, {
                icon: s.default,
                className: c.default.iconVk
            }), " ", (0,
            r.l10n)("social_vk")) : null, n.fb ? o.default.createElement("jdiv", {
                className: c.default.socialLink,
                onClick: e => {
                    a(e, "fb")
                }
                ,
                title: (0,
                r.l10n)("social_fb")
            }, (0,
            r.l10n)("social_process_in_fb"), "  ", o.default.createElement(u.SvgIcon, {
                icon: l.default,
                className: c.default.iconFb
            }), " ", "Messenger") : null)
        }
        ;
        d.propTypes = {
            show: i.default.bool.isRequired,
            mode: i.default.object.isRequired,
            processSocial: i.default.func.isRequired
        };
        var f = o.default.memo(d);
        t.default = f
    },
    14890: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(33119))
          , r = a(n(92664))
          , i = a(n(84827))
          , l = a(n(85299))
          , s = a(n(55536))
          , u = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = M(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , c = a(n(94184))
          , d = a(n(45697))
          , f = n(90061)
          , p = a(n(96394))
          , h = n(18276)
          , m = n(80352)
          , g = a(n(14264))
          , _ = a(n(79868))
          , v = n(68403)
          , b = n(35333)
          , y = n(14045)
          , w = a(n(7468))
          , E = n(21476)
          , T = n(97490)
          , S = n(29865);
        function M(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (M = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function C(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                s.default)(e);
                if (t) {
                    var o = (0,
                    s.default)(this).constructor;
                    n = Reflect.construct(a, arguments, o)
                } else
                    n = a.apply(this, arguments);
                return (0,
                l.default)(this, n)
            }
        }
        const O = (0,
        f.createLogger)("SocialButtonChat");
        let k = function(e) {
            (0,
            i.default)(n, e);
            var t = C(n);
            function n(e) {
                var a;
                return (0,
                o.default)(this, n),
                (a = t.call(this, e)).state = {
                    show: !0,
                    vk: e.mode.vk,
                    fb: e.mode.fb,
                    mode: e.mode.mode
                },
                a
            }
            return (0,
            r.default)(n, [{
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.client.hasIntegration !== e.client.hasIntegration && this.checkIntegration.bind(this)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    O.log("mounted"),
                    this.checkIntegration.bind(this),
                    (p.default.joint || 3 != p.default.contacts_ask) && (3 != p.default.contacts_ask || m.platform.isDesktop) || this.setState({
                        vk: !1,
                        fb: !1,
                        mode: "email"
                    })
                }
            }, {
                key: "checkIntegration",
                value: function() {
                    (0,
                    v.hasIntegration)(this.props.client.hasIntegration) && (O.log("Already connected with vk/fb."),
                    this.show(!1),
                    (0,
                    b.each)(g.default.getMessagesByType("email"), (e => {
                        O.log("remove email message (integration vk/fb)."),
                        e && e.destroy && e.destroy()
                    }
                    )),
                    E.Router.getCurrentRoute() === T.Route.CHAT_SOCIAL && (O.log("hide popup, navigate to chat"),
                    E.Router.next(T.RouterEvent.ToChat)))
                }
            }, {
                key: "show",
                value: function(e) {
                    O.log("show", e),
                    this.setState({
                        show: e
                    })
                }
            }, {
                key: "renderIframe",
                value: function() {
                    const e = _.default.getIframeUrl(this.state.mode)
                      , t = "vk" == this.state.mode ? 50 : 74
                      , n = {
                        position: "fb" === this.state.mode ? "relative" : null
                    };
                    return u.default.createElement("iframe", {
                        className: (0,
                        c.default)({
                            [w.default.iframe]: !0,
                            [w.default["__" + this.state.mode]]: !0
                        }),
                        style: n,
                        width: "100%",
                        border: "0",
                        height: t,
                        src: e
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return u.default.createElement("jdiv", {
                        className: w.default.box
                    }, (this.state.vk || this.state.fb) && u.default.createElement("jdiv", {
                        className: w.default.infoText
                    }, u.default.createElement(y.Text, null, "vk" == this.state.mode ? (0,
                    h.l10n)("social_get_access") : (0,
                    h.l10n)("social_get_access_fb"))), this.renderIframe())
                }
            }]),
            n
        }(u.Component);
        k.propTypes = {
            vk: d.default.bool,
            fb: d.default.bool,
            mode: d.default.oneOf(["vk", "fb", "email"]),
            client: d.default.object
        };
        var j = (0,
        S.connect)((e => ({
            client: e.client
        })))(k);
        t.default = j
    },
    65885: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(98661))
          , r = n(29865)
          , i = n(80352)
          , l = a(n(79868))
          , s = a(n(45697))
          , u = a(n(28431))
          , c = n(38042);
        const d = e => {
            let t = e.onClose
              , n = e.mode
              , a = e.clientId
              , r = e.visitorId
              , s = e.widgetId
              , d = e.chatStarted;
            const f = l.default.getIframeUrl(n)
              , p = l.default.checkSocial();
            return o.default.createElement(u.default, {
                onClose: t,
                mode: n,
                clientId: a,
                visitorId: r,
                widgetId: s,
                chatStarted: d,
                isMobile: i.platform.isMobileOrTablet,
                socialIframeUrl: f,
                isSocialEnabled: !(!n || !p),
                onQrError: e => {
                    (0,
                    c.telemetry)("qr_error", {
                        param1: e ? e.message : null
                    }, {
                        once: !0
                    })
                }
            })
        }
        ;
        d.propTypes = {
            onClose: s.default.func.isRequired,
            mode: s.default.oneOf(["sb", "vk", "fb"]),
            joint: s.default.object,
            projectId: s.default.string,
            clientId: s.default.string,
            visitorId: s.default.string,
            widgetId: s.default.string,
            chatStarted: s.default.bool
        };
        var f = (0,
        r.connect)(( (e, t) => ({
            onClose: t.onClose,
            mode: e.social.mode,
            joint: e.settings.features.joint,
            clientId: e.client.clientId,
            visitorId: e.client.visitorId,
            widgetId: e.settings.system.widgetId,
            chatStarted: e.app.chatStarted
        })), {})(d);
        t.default = f
    },
    28431: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(98661))
          , r = a(n(45697))
          , i = a(n(94184))
          , l = n(18276)
          , s = n(14045)
          , u = a(n(32325))
          , c = a(n(49563));
        const d = e => {
            let t = e.onClose
              , n = e.mode
              , a = (e.isMobile,
            e.projectId,
            e.clientId,
            e.visitorId,
            e.widgetId,
            e.chatStarted,
            e.socialIframeUrl)
              , r = e.isSocialEnabled;
            e.onQrError;
            const d = (0,
            i.default)({
                [c.default.iconHeader]: !0,
                [c.default["__" + n]]: !0
            });
            return o.default.createElement("jdiv", {
                className: c.default.wrap
            }, o.default.createElement(u.default, {
                onClose: e => {
                    e.stopPropagation(),
                    t()
                }
            }), o.default.createElement("jdiv", {
                className: d
            }), o.default.createElement("jdiv", {
                className: c.default.textBox
            }, o.default.createElement("jdiv", {
                className: c.default.text
            }, o.default.createElement(s.Text, null, (e => {
                switch (e) {
                case "vk":
                    return (0,
                    l.l10n)("social_get_access");
                case "sb":
                    return (0,
                    l.l10n)("social_get_access_sb");
                default:
                    return (0,
                    l.l10n)("social_get_access_fb")
                }
            }
            )(n))), ( () => {
                if ("sb" != n)
                    return n && r ? o.default.createElement("iframe", {
                        width: "300",
                        border: "0",
                        height: "vk" == n ? 52 : 74,
                        src: a
                    }) : void 0
            }
            )()), o.default.createElement("jdiv", {
                className: c.default.linkBox
            }, o.default.createElement("jdiv", {
                onClick: t,
                className: c.default.link
            }, (0,
            l.l10n)("lnkCloseThisWindow"))))
        }
        ;
        d.propTypes = {
            onClose: r.default.func.isRequired,
            mode: r.default.oneOf(["sb", "vk", "fb"]),
            isMobile: r.default.bool,
            projectId: r.default.string,
            clientId: r.default.string,
            visitorId: r.default.string,
            widgetId: r.default.string,
            chatStarted: r.default.bool,
            socialIframeUrl: r.default.string,
            isSocialEnabled: r.default.bool,
            onQrError: r.default.func
        };
        var f = o.default.memo(d);
        t.default = f
    },
    44506: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.processSocial = void 0;
        var o = a(n(138))
          , r = n(21476)
          , i = n(97490)
          , l = a(n(79868))
          , s = n(38042);
        t.processSocial = (e, t) => {
            e.preventDefault(),
            l.default.setPopupMode(t),
            r.Router.next(i.RouterEvent.ToSocial),
            (0,
            s.telemetry)("vk" === t ? "Continue_in_VK" : "Continue_in_FB"),
            o.default.trackContinueInSocial(t)
        }
    },
    50304: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CheapTransition = void 0;
        var o = a(n(61125))
          , r = a(n(33119))
          , i = a(n(92664))
          , l = a(n(7819))
          , s = a(n(84827))
          , u = a(n(85299))
          , c = a(n(55536))
          , d = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = p(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , f = n(80352);
        function p(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (p = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    (0,
                    o.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function g(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                c.default)(e);
                if (t) {
                    var o = (0,
                    c.default)(this).constructor;
                    n = Reflect.construct(a, arguments, o)
                } else
                    n = a.apply(this, arguments);
                return (0,
                u.default)(this, n)
            }
        }
        const _ = (0,
        n(90061).createLogger)("CheapTransitionComponent")
          , v = "UNMOUNTED"
          , b = "BEFORE_ENTER"
          , y = "ENTER"
          , w = "BEFORE_EXIT"
          , E = "EXIT";
        let T = function(e) {
            (0,
            s.default)(n, e);
            var t = g(n);
            function n(e) {
                var a;
                return (0,
                r.default)(this, n),
                (a = t.call(this, e)).state = {
                    status: v,
                    show: e.show
                },
                a.getStyles = a.getStyles.bind((0,
                l.default)(a)),
                a.changeStatus = a.changeStatus.bind((0,
                l.default)(a)),
                a.handleDebugProp = a.handleDebugProp.bind((0,
                l.default)(a)),
                a.getFinalStyle = a.getFinalStyle.bind((0,
                l.default)(a)),
                a
            }
            return (0,
            i.default)(n, [{
                key: "componentDidMount",
                value: function() {
                    this.props.show && this.setState({
                        status: b,
                        show: this.props.show
                    })
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return t.status !== v || this.state.status !== v
                }
            }, {
                key: "changeStatus",
                value: function(e, t, n) {
                    n ? setTimeout(( () => {
                        this.state.status === e && this.setState({
                            status: t
                        })
                    }
                    ), n) : this.state.status === e && this.setState({
                        status: t
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    switch (this.state.status) {
                    case b:
                        this.changeStatus(b, y);
                        break;
                    case w:
                        this.changeStatus(w, E);
                        break;
                    case E:
                        this.props.transition || this.changeStatus(E, v, this.props.waitBeforeUnmount)
                    }
                }
            }, {
                key: "onTransitionEnd",
                value: function(e) {
                    this.state.status === E && e && e.propertyName && ("PopupSlideUpEULA" === this.props.transition && "transform" === e.propertyName && this.changeStatus(E, v, this.props.waitBeforeUnmount),
                    "Fade" === this.props.transition && "opacity" === e.propertyName && this.changeStatus(E, v, this.props.waitBeforeUnmount))
                }
            }, {
                key: "getStyles",
                value: function() {
                    let e = this.state.status
                      , t = this.props
                      , n = t.transitionStyles
                      , a = t.shouldAnimate;
                    if ("object" == typeof n.main) {
                        switch (e) {
                        case v:
                            break;
                        case b:
                            if (a.mount)
                                return m(m({}, n.main), n.enterActive);
                            break;
                        case y:
                            if (a.mount)
                                return m(m(m({}, n.main), n.enterActive), n.enterDone);
                            break;
                        case w:
                            if (a.unmount)
                                return m(m({}, n.mainExit), n.exitActive);
                            break;
                        case E:
                            if (a.unmount)
                                return m(m(m({}, n.mainExit), n.exitActive), n.exitDone)
                        }
                        return null
                    }
                }
            }, {
                key: "getFinalStyle",
                value: function() {
                    let e = this.state.status === v ? "none" : "block"
                      , t = !f.platform.isMobileOrTablet && !this.props.fixed
                      , n = m(m({}, this.props.style), {}, t ? {
                        height: t ? "100%" : "",
                        display: e
                    } : {
                        display: e
                    }, this.getStyles());
                    return this.props.isStatic && this.state.status === y && (n = m(m({}, n), {}, {
                        height: "auto"
                    })),
                    n
                }
            }, {
                key: "handleDebugProp",
                value: function(e) {
                    this.props.debugCallback && ("function" == typeof this.props.debugCallback ? this.props.debugCallback(this.props, this.state, e) : _.log(this.props.name, this.state.status, e))
                }
            }, {
                key: "render",
                value: function() {
                    let e = "function" == typeof this.props.children
                      , t = this.getFinalStyle();
                    return this.handleDebugProp(t),
                    d.default.createElement("jdiv", {
                        id: this.props.id,
                        className: this.props.className,
                        style: t,
                        onTransitionEnd: this.onTransitionEnd.bind(this)
                    }, e ? this.props.children() : this.props.children)
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return !1 === e.show && !0 === t.show ? {
                        status: w,
                        show: e.show
                    } : !0 === e.show && !1 === t.show ? {
                        status: b,
                        show: e.show
                    } : null
                }
            }]),
            n
        }(d.Component);
        t.CheapTransition = T
    },
    63237: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.MobileTransition = void 0;
        var o = a(n(61125))
          , r = a(n(33119))
          , i = a(n(92664))
          , l = a(n(7819))
          , s = a(n(84827))
          , u = a(n(85299))
          , c = a(n(55536))
          , d = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = f(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661));
        function f(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (f = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(n), !0).forEach((function(t) {
                    (0,
                    o.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function m(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                c.default)(e);
                if (t) {
                    var o = (0,
                    c.default)(this).constructor;
                    n = Reflect.construct(a, arguments, o)
                } else
                    n = a.apply(this, arguments);
                return (0,
                u.default)(this, n)
            }
        }
        const g = (0,
        n(90061).createLogger)("MobileTransition");
        let _ = function(e) {
            (0,
            s.default)(n, e);
            var t = m(n);
            function n(e) {
                var a;
                return (0,
                r.default)(this, n),
                (a = t.call(this, e)).handleDebugProp = a.handleDebugProp.bind((0,
                l.default)(a)),
                a
            }
            return (0,
            i.default)(n, [{
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return !(!e.show && !this.props.show)
                }
            }, {
                key: "handleDebugProp",
                value: function(e) {
                    this.props.debugCallback && ("function" == typeof this.props.debugCallback ? this.props.debugCallback(this.props, this.state, e) : g.log(this.props.name, e))
                }
            }, {
                key: "render",
                value: function() {
                    let e = this.props.show ? "block" : "none"
                      , t = "function" == typeof this.props.children
                      , n = h(h({}, this.props.style), {}, {
                        display: e
                    });
                    return this.handleDebugProp(n),
                    d.default.createElement("jdiv", {
                        id: this.props.id,
                        className: this.props.className,
                        style: n
                    }, t ? this.props.children() : this.props.children)
                }
            }]),
            n
        }(d.Component);
        t.MobileTransition = _
    },
    78461: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Transition = void 0;
        var o = a(n(61125))
          , r = a(n(33119))
          , i = a(n(92664))
          , l = a(n(7819))
          , s = a(n(84827))
          , u = a(n(85299))
          , c = a(n(55536))
          , d = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = p(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , f = n(80352);
        function p(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (p = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    (0,
                    o.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function g(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                c.default)(e);
                if (t) {
                    var o = (0,
                    c.default)(this).constructor;
                    n = Reflect.construct(a, arguments, o)
                } else
                    n = a.apply(this, arguments);
                return (0,
                u.default)(this, n)
            }
        }
        const _ = (0,
        n(90061).createLogger)("TransitionComponent")
          , v = "UNMOUNTED"
          , b = "ENTER"
          , y = "ENTERING"
          , w = "ENTERED"
          , E = "EXIT"
          , T = "EXITING"
          , S = "EXITED";
        let M = function(e) {
            (0,
            s.default)(n, e);
            var t = g(n);
            function n(e) {
                var a;
                return (0,
                r.default)(this, n),
                (a = t.call(this, e)).state = {
                    status: v,
                    show: e.show
                },
                a.statusCallbacks = {
                    onEnter: !1,
                    onEntered: !1,
                    onExit: !1,
                    onExited: !1
                },
                a.getStyles = a.getStyles.bind((0,
                l.default)(a)),
                a.statusCallback = a.statusCallback.bind((0,
                l.default)(a)),
                a.changeStatus = a.changeStatus.bind((0,
                l.default)(a)),
                a.handleDebugProp = a.handleDebugProp.bind((0,
                l.default)(a)),
                a.getParentState = a.getParentState.bind((0,
                l.default)(a)),
                a.getFinalStyle = a.getFinalStyle.bind((0,
                l.default)(a)),
                a
            }
            return (0,
            i.default)(n, [{
                key: "componentDidMount",
                value: function() {
                    this.props.show && this.setState({
                        status: this.props.shouldAnimate.mount ? b : w
                    })
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e, t) {
                    return t.status !== v || this.state.status !== v
                }
            }, {
                key: "statusCallback",
                value: function(e) {
                    this.statusCallbacks[e] || (this.props[e] && this.props[e](),
                    this.statusCallbacks[e] = !0)
                }
            }, {
                key: "changeStatus",
                value: function(e, t, n) {
                    n ? setTimeout(( () => {
                        this.state.status === e && this.setState({
                            status: t
                        })
                    }
                    ), n) : this.state.status === e && this.setState({
                        status: t
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function(e, t) {
                    switch (this.state.status) {
                    case b:
                        this.statusCallbacks = {
                            onEnter: !1,
                            onEntered: !1,
                            onExit: !1,
                            onExited: !1
                        },
                        this.changeStatus(b, y);
                        break;
                    case y:
                        this.statusCallback("onEnter"),
                        this.changeStatus(y, w, this.props.duration);
                        break;
                    case w:
                        this.statusCallbacks.onExit = !1,
                        this.statusCallbacks.onExited = !1,
                        this.statusCallback("onEntered");
                        break;
                    case E:
                        this.changeStatus(E, T);
                        break;
                    case T:
                        this.statusCallback("onExit"),
                        this.changeStatus(T, S, this.props.duration);
                        break;
                    case S:
                        this.statusCallbacks.onEnter = !1,
                        this.statusCallbacks.onEntered = !1,
                        this.changeStatus(S, v, this.props.waitBeforeUnmount),
                        this.statusCallback("onExited")
                    }
                }
            }, {
                key: "getStyles",
                value: function() {
                    let e = this.state.status
                      , t = this.props
                      , n = t.transitionStyles
                      , a = t.shouldAnimate;
                    if ("object" == typeof n.main) {
                        switch (e) {
                        case v:
                            return m({}, n.main);
                        case b:
                            if (a.mount)
                                return m(m({}, n.main), n.enterActive);
                            break;
                        case y:
                        case w:
                            if (a.mount)
                                return m(m(m({}, n.main), n.enterActive), n.enterDone);
                            break;
                        case E:
                            if (a.unmount)
                                return m(m({}, n.mainExit), n.exitActive);
                            break;
                        case T:
                        case S:
                            if (a.unmount)
                                return m(m(m({}, n.mainExit), n.exitActive), n.exitDone)
                        }
                        return null
                    }
                }
            }, {
                key: "getFinalStyle",
                value: function() {
                    let e = this.state.status === v ? "none" : "block"
                      , t = !f.platform.isMobileOrTablet && !this.props.fixed
                      , n = m(m({}, this.props.style), {}, t ? {
                        height: t ? "100%" : "",
                        display: e
                    } : {
                        display: e
                    }, this.getStyles());
                    return this.props.isStatic && this.state.status === w && (n = m(m({}, n), {}, {
                        height: "auto"
                    })),
                    n
                }
            }, {
                key: "getParentState",
                value: function() {
                    let e = {
                        status: this.state.status,
                        name: this.props.name,
                        show: this.state.show
                    };
                    return this.props.parentState ? (e.parentState = this.props.parentState,
                    e.level = this.props.parentState.level + 1) : e.level = 0,
                    e
                }
            }, {
                key: "handleDebugProp",
                value: function(e) {
                    this.props.debugCallback && ("function" == typeof this.props.debugCallback ? this.props.debugCallback(this.props, this.state, e) : _.log(this.props.name, this.state.status, e))
                }
            }, {
                key: "render",
                value: function() {
                    let e = "function" == typeof this.props.children
                      , t = this.getFinalStyle();
                    return this.handleDebugProp(t),
                    d.default.createElement("jdiv", {
                        id: this.props.id,
                        className: this.props.className,
                        style: t,
                        onTransitionEnd: e => {
                            this.props.animationEnd && this.props.animationEnd(e)
                        }
                    }, e ? this.props.children(this.getParentState()) : this.props.children)
                }
            }], [{
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    return !1 === e.show && !0 === t.show ? this.handleUnmount(e, t) : !0 === e.show && !1 === t.show ? this.handleMount(e, t) : null
                }
            }, {
                key: "handleUnmount",
                value: function(e, t) {
                    return e.parentState ? e.parentState.status === v ? {
                        status: v,
                        show: e.show
                    } : !0 === e.parentState.show ? e.parentState.parentState && e.parentState.parentState.status !== w ? {
                        status: t.status,
                        show: t.show
                    } : {
                        status: e.shouldAnimate.unmount ? E : S,
                        show: e.show
                    } : {
                        status: t.status,
                        show: t.show
                    } : {
                        status: e.shouldAnimate.unmount ? E : S,
                        show: e.show
                    }
                }
            }, {
                key: "handleMount",
                value: function(e, t) {
                    if (e.parentState) {
                        if (e.shouldWait >= 0) {
                            return this.findLevelStatus(e.shouldWait, e.parentState) === w ? {
                                status: e.shouldAnimate.mount ? b : w,
                                show: e.show
                            } : {
                                status: t.status,
                                show: t.show
                            }
                        }
                        return {
                            status: e.shouldAnimate.mount ? b : w,
                            show: e.show
                        }
                    }
                    return {
                        status: e.shouldAnimate.mount ? b : w,
                        show: e.show
                    }
                }
            }, {
                key: "findLevelStatus",
                value: function(e, t) {
                    return t.level === e ? t.status : t.level > e ? this.findLevelStatus(e, t.parentState) : void 0
                }
            }]),
            n
        }(d.Component);
        t.Transition = M
    },
    38121: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(61125))
          , r = a(n(96394))
          , i = n(80352);
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach((function(t) {
                    (0,
                    o.default)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        const u = "cubic-bezier(0.39, 0.24, 0.21, 0.99)";
        var c = {
            NoTransition: function() {
                return {
                    main: {},
                    enterActive: {},
                    enterDone: {},
                    mainExit: {},
                    exitActive: {},
                    exitDone: {}
                }
            },
            Container: function(e) {
                let t = e.marginRight
                  , n = e.width;
                const a = +r.default.widget_padding
                  , o = () => 0 === a ? "" : 50 === a ? `${a}%` : "30px"
                  , l = `width 300ms ${u}, margin-right 300ms ${u}, right 300ms ${u}, transform 300ms ${u}, opacity 300ms ${u}, height 300ms ${u}, left 300ms ${u}`
                  , c = i.platform.isEdge || i.platform.isSafari ? "translateY(92%)" : "translateY(calc(100% - 40px))";
                return {
                    main: {
                        width: `${n}px`,
                        marginRight: t || (50 === a ? -150 : 0),
                        right: o(),
                        left: 0 === a ? "30px" : "",
                        transition: l,
                        willChange: "width, margin-right, right, transform, opacity, left, height",
                        transform: c
                    },
                    enterActive: s({
                        width: `${n}px`,
                        marginRight: t,
                        right: o(),
                        transform: c
                    }, (i.platform.isEdge || i.platform.isSafari) && {
                        height: "40px"
                    }),
                    enterDone: {
                        width: "",
                        marginRight: "",
                        right: "",
                        transform: "translateY(0%)"
                    },
                    mainExit: {
                        transition: l,
                        willChange: "width, margin-right, right, transform, opacity, left, height"
                    },
                    exitActive: {
                        transform: "translateY(0%)"
                    },
                    exitDone: {
                        width: `${n}px`,
                        marginRight: t,
                        right: o(),
                        left: 0 === a ? "30px" : "",
                        transform: c
                    }
                }
            },
            ContainerRight: function(e) {
                let t = e.marginBottom
                  , n = e.height;
                e.width;
                const a = `height 300ms ${u}, margin-bottom 300ms ${u}, right 300ms ${u}, transform 300ms ${u}, opacity 300ms ${u}, bottom 300ms ${u}`
                  , o = "translateX(100%) translateY(0)"
                  , i = +r.default.widget_padding
                  , l = 100 !== i ? `${i}%` : "0px";
                return {
                    main: {
                        height: `${n}px`,
                        marginBottom: t || (100 !== i ? -248 : null),
                        transition: a,
                        transform: o,
                        bottom: l,
                        right: "40px",
                        willChange: "height, margin-bottom, right, transform, opacity, bottom",
                        opacity: 0
                    },
                    enterActive: {
                        height: `${n}px`,
                        marginBottom: t,
                        bottom: l,
                        transform: o,
                        right: "40px",
                        opacity: 0
                    },
                    enterDone: {
                        height: "",
                        marginBottom: "",
                        bottom: "",
                        transform: "translateX(0) translateY(0)",
                        opacity: 1
                    },
                    mainExit: {
                        transition: a,
                        willChange: "height, margin-bottom, right, transform, opacity, bottom"
                    },
                    exitActive: {
                        height: `${n}px`,
                        marginBottom: t,
                        bottom: l,
                        transform: o,
                        opacity: 1
                    },
                    exitDone: {
                        height: `${n}px`,
                        marginBottom: t,
                        bottom: l,
                        transform: o,
                        right: "40px",
                        opacity: 0
                    }
                }
            },
            ContainerLeft: function(e) {
                let t = e.marginBottom
                  , n = e.height;
                e.width;
                const a = `height 300ms ${u}, margin-bottom 300ms ${u}, left 300ms ${u}, transform 300ms ${u}, opacity 300ms ${u}, bottom 300ms ${u}`
                  , o = i.platform.isEdge ? "translateX(-100%) translateY(0)" : "translateX(calc(-100% - 10px)) translateY(0)"
                  , l = +r.default.widget_padding
                  , s = 100 !== l ? `${l}%` : "";
                return {
                    main: {
                        height: `${n}px`,
                        marginBottom: t || (100 !== l ? -248 : null),
                        transition: a,
                        bottom: s,
                        left: "40px",
                        willChange: "height, margin-bottom, left, transform, opacity, bottom",
                        transform: o,
                        opacity: 0
                    },
                    enterActive: {
                        height: `${n}px`,
                        marginBottom: t,
                        bottom: s,
                        transform: o,
                        left: "40px",
                        opacity: 0
                    },
                    enterDone: {
                        height: "",
                        marginBottom: "",
                        bottom: "",
                        transform: "translateX(0) translateY(0)",
                        opacity: 1
                    },
                    mainExit: {
                        transition: a,
                        willChange: "height, margin-bottom, left, transform, opacity, bottom"
                    },
                    exitActive: {
                        height: `${n}px`,
                        marginBottom: t,
                        bottom: s,
                        transform: o,
                        opacity: 1
                    },
                    exitDone: {
                        height: `${n}px`,
                        marginBottom: t,
                        bottom: s,
                        transform: o,
                        left: "40px",
                        opacity: 0
                    }
                }
            },
            Fade: function() {
                return {
                    main: {
                        transition: `opacity 200ms ${u}`,
                        opacity: 0
                    },
                    enterActive: {
                        transition: `opacity 200ms ${u}`,
                        opacity: 0
                    },
                    enterDone: {
                        opacity: 1
                    },
                    mainExit: {
                        transition: `opacity 200ms ${u}`,
                        opacity: 1
                    },
                    exitActive: {
                        opacity: 1
                    },
                    exitDone: {
                        opacity: 0
                    }
                }
            },
            FadeWithDelay: function() {
                return {
                    main: {
                        transition: `opacity 200ms ${u} 400ms`,
                        opacity: 0
                    },
                    enterActive: {
                        transition: `opacity 200ms ${u} 400ms`,
                        opacity: 0
                    },
                    enterDone: {
                        opacity: 1
                    },
                    mainExit: {
                        transition: `opacity 200ms ${u} 400ms`,
                        opacity: 1
                    },
                    exitActive: {
                        opacity: 1
                    },
                    exitDone: {
                        opacity: 0
                    }
                }
            },
            LabelFade: function() {
                const e = i.platform.isEdge ? 0 : 250
                  , t = i.platform.isEdge ? 1500 : 250;
                return {
                    main: {
                        transition: `opacity ${t}ms ease ${e}ms`,
                        opacity: 0
                    },
                    enterActive: {
                        transition: `opacity ${t}ms ease ${e}ms`,
                        opacity: 0
                    },
                    enterDone: {
                        opacity: 1
                    },
                    mainExit: {
                        transition: "opacity 50ms ease",
                        opacity: 1
                    },
                    exitActive: {
                        transition: "opacity 50ms ease",
                        opacity: 0
                    },
                    exitDone: {
                        opacity: 0
                    }
                }
            },
            PopupSlideUpEULA: function() {
                return {
                    main: {
                        width: "100%",
                        transition: `transform 300ms ${u}`,
                        opacity: 1,
                        position: "absolute",
                        bottom: 0,
                        top: 0,
                        zIndex: 25,
                        willChange: "transform"
                    },
                    enterActive: {
                        transform: "translateY(100%)"
                    },
                    enterDone: {
                        transform: "translateY(0)"
                    },
                    mainExit: {
                        width: "100%",
                        transition: `transform 300ms ${u}`,
                        transform: "translateY(0)",
                        opacity: 1,
                        position: "absolute",
                        bottom: 0,
                        top: 0,
                        zIndex: 25,
                        willChange: "transform"
                    },
                    exitActive: {
                        transform: "translateY(0)"
                    },
                    exitDone: {
                        transform: "translateY(100%)"
                    }
                }
            }
        };
        t.default = c
    },
    73549: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Path = void 0;
        var o = a(n(33119))
          , r = a(n(92664))
          , i = a(n(7819))
          , l = a(n(84827))
          , s = a(n(85299))
          , u = a(n(55536))
          , c = function(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var n = b(t);
            if (n && n.has(e))
                return n.get(e);
            var a = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                    var i = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                    i && (i.get || i.set) ? Object.defineProperty(a, r, i) : a[r] = e[r]
                }
            a.default = e,
            n && n.set(e, a);
            return a
        }(n(98661))
          , d = a(n(45697))
          , f = n(50304)
          , p = n(63237)
          , h = n(21476)
          , m = n(78461)
          , g = n(80352)
          , _ = a(n(40202))
          , v = n(44145);
        function b(e) {
            if ("function" != typeof WeakMap)
                return null;
            var t = new WeakMap
              , n = new WeakMap;
            return (b = function(e) {
                return e ? n : t
            }
            )(e)
        }
        function y(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = (0,
                u.default)(e);
                if (t) {
                    var o = (0,
                    u.default)(this).constructor;
                    n = Reflect.construct(a, arguments, o)
                } else
                    n = a.apply(this, arguments);
                return (0,
                s.default)(this, n)
            }
        }
        let w = function(e) {
            (0,
            l.default)(n, e);
            var t = y(n);
            function n(e) {
                var a;
                return (0,
                o.default)(this, n),
                (a = t.call(this, e)).state = {
                    show: a.getShow((0,
                    v.getApp)().route || h.Router.getCurrentRoute())
                },
                a.getTransitionStylesProp = a.getTransitionStylesProp.bind((0,
                i.default)(a)),
                a.getShouldAnimateProp = a.getShouldAnimateProp.bind((0,
                i.default)(a)),
                a.getTransitionComponent = a.getTransitionComponent.bind((0,
                i.default)(a)),
                a.getShow = a.getShow.bind((0,
                i.default)(a)),
                a.onRouteChange = a.onRouteChange.bind((0,
                i.default)(a)),
                a
            }
            return (0,
            r.default)(n, [{
                key: "onRouteChange",
                value: function(e) {
                    const t = this.getShow(e);
                    this.state.show !== t && this.setState({
                        show: t
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    h.Router.on("route_change", this.onRouteChange)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    h.Router.off("route_change", this.onRouteChange)
                }
            }, {
                key: "getShow",
                value: function(e) {
                    return this.props.paths.includes(e)
                }
            }, {
                key: "getTransitionStylesProp",
                value: function() {
                    return this.props.transition ? _.default.getTransitionByName(this.props.transition) : _.default.getEmptyTransition()
                }
            }, {
                key: "getShouldAnimateProp",
                value: function() {
                    return g.platform.isMobileOrTablet ? {
                        mount: null,
                        unmount: null
                    } : {
                        mount: this.props.withMountTransition,
                        unmount: this.props.withUnmountTransition
                    }
                }
            }, {
                key: "getTransitionComponent",
                value: function() {
                    return g.platform.isMobileOrTablet ? p.MobileTransition : !g.platform.isEdge && this.props.cheap ? f.CheapTransition : m.Transition
                }
            }, {
                key: "render",
                value: function() {
                    const e = this.getTransitionComponent()
                      , t = (0,
                    v.getApp)().route;
                    return c.default.createElement(e, {
                        id: this.props.id,
                        show: this.getShow(t),
                        shouldAnimate: this.getShouldAnimateProp(),
                        duration: this.props.duration || 200,
                        className: this.props.className,
                        style: this.props.style,
                        transitionStyles: this.getTransitionStylesProp(),
                        transition: this.props.transition,
                        fixed: this.props.fixed,
                        onEnter: this.props.onEnter,
                        onExit: this.props.onExit,
                        onEntered: this.props.onEntered,
                        onExited: this.props.onExited,
                        parentState: this.props.parentState,
                        name: this.props.name,
                        shouldWait: this.props.shouldWait,
                        isStatic: this.props.isStatic,
                        waitBeforeUnmount: this.props.waitBeforeUnmount,
                        debugCallback: this.props.debugCallback,
                        animationEnd: this.props.animationEnd
                    }, this.props.children)
                }
            }]),
            n
        }(c.Component);
        t.Path = w,
        w.propTypes = {
            paths: d.default.arrayOf(d.default.string).isRequired,
            withMountTransition: d.default.bool,
            withUnmountTransition: d.default.bool,
            transition: d.default.string,
            fixed: d.default.bool,
            isStatic: d.default.bool,
            waitBeforeUnmount: d.default.number,
            name: d.default.string,
            duration: d.default.number,
            onEnter: d.default.func,
            onEntered: d.default.func,
            onExit: d.default.func,
            onExited: d.default.func,
            animationEnd: d.default.func,
            children: d.default.oneOfType([d.default.arrayOf(d.default.node), d.default.node, d.default.func]).isRequired,
            debugCallback: d.default.oneOfType([d.default.bool, d.default.func]),
            shouldWait: d.default.number,
            parentState: d.default.object,
            style: d.default.object,
            cheap: d.default.bool,
            className: d.default.string,
            id: d.default.oneOfType([d.default.string, d.default.number])
        }
    },
    40202: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(33119))
          , r = a(n(92664))
          , i = a(n(38121))
          , l = a(n(96394));
        let s = function() {
            function e() {
                (0,
                o.default)(this, e)
            }
            return (0,
            r.default)(e, null, [{
                key: "getEmptyTransition",
                value: function() {
                    return i.default.NoTransition
                }
            }, {
                key: "getTransitionByName",
                value: function(e) {
                    return "function" == typeof i.default[e] ? i.default[e](( () => {
                        const e = window.parent.document.getElementById("jvlabelWrap");
                        if (e) {
                            if ("bottom" === l.default.widget_orientation)
                                return {
                                    marginRight: e.style.marginRight,
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                };
                            if ("right" === l.default.widget_orientation)
                                return {
                                    marginBottom: e.style.marginBottom,
                                    height: e.offsetWidth,
                                    width: e.offsetWidth
                                };
                            if ("left" === l.default.widget_orientation)
                                return {
                                    marginBottom: e.style.marginBottom,
                                    height: e.offsetWidth,
                                    width: e.offsetWidth
                                }
                        }
                        return 0
                    }
                    )()) : i.default[e]
                }
            }]),
            e
        }();
        t.default = s
    },
    69845: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.checkAlone = s,
        t.createEmoji = function(e) {
            const t = s(e);
            return (0,
            l.replace)(e, (e => {
                var n;
                const a = (0,
                l.toCodePoint)(e)
                  , s = document.createElement("jdiv");
                return (0,
                r.createRoot)(s).render(o.default.createElement(i.default, {
                    icon: a,
                    alone: t,
                    className: "emojiMessages",
                    style: {}
                })),
                (null === (n = s.childNodes[0]) || void 0 === n ? void 0 : n.outerHTML) || ""
            }
            ))
        }
        ;
        var o = a(n(98661))
          , r = n(68367)
          , i = a(n(3501))
          , l = n(66488);
        function s(e) {
            let t = !1
              , n = 0;
            const a = (0,
            l.replace)(e, ( () => (n++,
            ""))).match(/\S/gu);
            return 1 !== n || a || (t = !0),
            t
        }
    },
    3415: function(e, t, n) {
        "use strict";
        var a = n(17907);
        t.Z = void 0;
        var o = a(n(98661))
          , r = n(68367)
          , i = a(n(96394))
          , l = n(18276)
          , s = n(32183)
          , u = a(n(90842))
          , c = a(n(93867))
          , d = n(97615)
          , f = n(86383)
          , p = n(90061)
          , h = n(35333)
          , m = n(10904)
          , g = n(38632)
          , _ = n(52161)
          , v = n(21951)
          , b = n(44240)
          , y = n(45926)
          , w = n(45683)
          , E = n(80352)
          , T = n(38042)
          , S = n(69882)
          , M = n(95911)
          , C = a(n(74379));
        const O = (0,
        p.createLogger)("cobrowse")
          , k = window.parent.document
          , j = function(e, t) {
            const n = window.top;
            "function" == typeof n.history.replaceState ? n.history.replaceState({}, t, e) : "function" == typeof n.history.pushState && n.history.pushState({}, t, e)
        }
          , N = {
            init: function() {
                this.source = null,
                this.origin = null;
                var e, t, n = !1, a = {};
                u.default.install(window.parent),
                this._process = t = function(t, o) {
                    n ? (O.log("controller of childSandboxBridge set as for NodeWebkit"),
                    (e = R).setLangpack(a),
                    e.init(),
                    "in_node_webkit" === t && window.parent.jivo_cobrowse.source.postMessage({
                        name: "widget_ready"
                    }, window.parent.jivo_cobrowse.origin)) : e = x,
                    e[t] && "is_node_webkit" !== t && e[t](o)
                }
                ,
                (0,
                v.addListener)(window.parent, "message", (e => {
                    if (e && e.data && "object" == typeof e.data) {
                        var o = e.data;
                        -1 !== ["startSelection", "stopSelection", "in_node_webkit"].indexOf(o.name) && e.source && e.origin && (this.source = e.source,
                        this.origin = e.origin,
                        n = !0,
                        o.langpack && (a = o.langpack),
                        t(o.name, o))
                    }
                }
                ), !1)
            },
            process: function(e, t) {
                this._process || this.init(),
                this._process(e, t)
            },
            create: function(e, t) {
                N.process("highlight", e),
                N.process("renderTooltip", e),
                j(t, k.title)
            },
            postMessage: function(e) {
                setTimeout((function() {
                    window.parent.jivo_cobrowse.source.postMessage(e, window.parent.jivo_cobrowse.origin)
                }
                ), 0)
            },
            isNodeWebkit: function() {
                return isNodeWebkit
            },
            isOldCobrowse: e => {
                if (10 == e.length)
                    return !0;
                let t = null;
                try {
                    t = window.atob(e),
                    (0,
                    y.getPageWindow)().document.querySelector(t)
                } catch (e) {
                    t = !1
                }
                return !t
            }
            ,
            getCobrowseData: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
                  , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                if (O.log("getCobrowseData", e, t, n, a),
                !N.isOldCobrowse(e)) {
                    const r = (0,
                    y.getPageWindow)().location.href.replace((0,
                    y.getPageWindow)().location.hash, "");
                    if (t && t !== r)
                        (0,
                        y.getPageWindow)().document.location.href = `${t}#jvhs_${e}`;
                    else {
                        t = (0,
                        y.getPageWindow)().document.location.href;
                        const r = `${t.split("#")[0]}#jvhs_${e}`;
                        let i = null;
                        try {
                            i = window.atob(e)
                        } catch (t) {
                            return O.error(t),
                            void (0,
                            T.telemetry)("cobrowse_failed", {
                                param1: e,
                                param2: t
                            })
                        }
                        N.create({
                            comment: n ? (0,
                            _.escape)(n) : (0,
                            l.l10n)("lblDefaultCobrowseComment"),
                            element: i,
                            hash: e,
                            page: r,
                            show: !0,
                            agentId: a && a.agentId,
                            agent: a,
                            cb: o
                        }, r)
                    }
                    return
                }
                const r = i.default.base_url + `/script/cobrowsing?hash=${e}`;
                M.xhrRequest.get(r, ( (n, a) => {
                    if (n)
                        return (0,
                        b.isFunction)(o) && o(!1),
                        (0,
                        T.telemetry)("cobrowse_failed");
                    const r = a.data;
                    if ((0,
                    b.isObject)(r)) {
                        if (r.isDeleted)
                            return (0,
                            b.isFunction)(o) && o(!1),
                            (0,
                            T.telemetry)("cobrowse_failed");
                        0 === r.comment.length && (r.comment = (0,
                        l.l10n)("lblDefaultCobrowseComment")),
                        r.comment = (0,
                        _.escape)(r.comment),
                        f.TitleManager.cancelBlink();
                        const n = (0,
                        y.getPageWindow)().document.location.href.split("#")[0]
                          , a = t && t + "#jvhs_" + e;
                        t && n !== t && n !== encodeURI(t) ? (0,
                        y.getPageWindow)().document.location.href = a : (o && (r.cb = o),
                        N.create(r, a))
                    }
                }
                ))
            }
        };
        function I(e) {
            var t = function(e) {
                var t = ""
                  , n = e.split(" > ");
                return (0,
                h.each)(n, (function(e) {
                    t += "/*",
                    -1 !== e.indexOf(":") && (t += "[" + e.substr(e.indexOf("(") + 1, e.indexOf(")") - e.indexOf("(") - 1) + "]")
                }
                )),
                t
            }(e)
              , n = k.querySelector(e);
            return n || k.evaluate(t, k, null, u.default.XPathResultType.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        }
        var x = {
            is_inited: !1,
            isCobrowseVisible: function(e) {
                return (0,
                s.isVisible)(e) && "HTML" != e.tagName && "hidden" != e.style.visibility && "jivo-iframe-container" != e.id && "jivo_container" != e.id
            },
            highlight: function(e) {
                if (O.log("highlight"),
                "cobrowser-iframe" === window.parent.name && !this.is_inited && !R.is_inited) {
                    var t = k.createElement("link");
                    t.setAttribute("rel", "stylesheet"),
                    t.setAttribute("href", (0,
                    w.getStaticURL)((d.EnvironmentManager.isDevelopment() ? "/public" : "") + "/css/for_app.css")),
                    k.body.appendChild(t),
                    this.is_inited = !0
                }
                var n;
                if (P(n = "string" == typeof e.element ? I(e.element) : e.element)) {
                    if (e.hash && null !== k.getElementById("#jivo_cobrowsing_element_id_" + e.hash))
                        return this.animateScroll(e);
                    (0,
                    h.each)(["jivo_cobrowsing_element", "jivo_cobrowsing_tooltip"], (function(e) {
                        (0,
                        h.each)(k.getElementsByClassName(e), (function(e) {
                            e.parentNode.removeChild(e)
                        }
                        ))
                    }
                    ));
                    var a, o = P(n), r = o.width, i = o.height;
                    if (O.log(n, e),
                    !this.isCobrowseVisible(n))
                        return "cobrowser-iframe" !== window.parent.name && (0,
                        T.telemetry)("cobrowse_failed"),
                        void (e.cb && e.cb(!1));
                    O.log("overlayCreate"),
                    u(),
                    O.log("overlayCss"),
                    s(o, r, i),
                    O.log("overlayAppend"),
                    c(),
                    window.parent && "cobrowser-iframe" !== window.parent.name && (0,
                    T.telemetry)("cobrowse_success", {
                        param1: e.hash ? e.hash.length : 0
                    });
                    var l = function() {
                        var t;
                        if (t = "string" == typeof e.element ? I(e.element) : e.element,
                        a || (u(),
                        c()),
                        t) {
                            var n = P(t);
                            s(n, n.width, n.height)
                        }
                        if (a)
                            return a
                    };
                    return setTimeout((function() {
                        l()
                    }
                    ), 50),
                    (0,
                    v.addListener)(window.parent, "resize", l),
                    a || void 0
                }
                function s(e, t, o) {
                    a.style.width = t + "px",
                    a.style.height = o + "px",
                    a.style.left = e.left - 8 + "px",
                    a.style.top = e.top - 8 + "px",
                    A(n) && (a.style.position = "fixed")
                }
                function u() {
                    a || ((a = k.createElement("jdiv")).className = "jivo_cobrowsing_element",
                    a.id = "jivo_cobrowsing_element_id_" + e.hash,
                    k.body.appendChild(a))
                }
                function c() {
                    if (!a) {
                        var e = k.createElement("jdiv");
                        a.className = "jivo_cobrowsing_element_inner",
                        a.appendChild(e)
                    }
                }
                O.log("cobrowse element position failed.")
            },
            renderTooltip: function(e) {
                O.log("renderTooltip", e);
                var t, n = null !== k.getElementById("#jivo_cobrowsing_element_id_" + e.hash);
                if (!1 !== n)
                    return this.animateScroll(e),
                    n;
                if (t = "string" == typeof e.element ? I(e.element) : e.element,
                !this.isCobrowseVisible(t))
                    return O.log("Error render tooltip, element not visible"),
                    void (e.cb && e.cb(!1));
                var a = k.createElement("jdiv");
                a.className = "",
                a.id = "jivo_content_cobrowsing_tooltip",
                a.style.width = "100%",
                a.style.height = "auto",
                E.platform.isMobileOrTablet && (a.style.zoom = C.default.getAppZoom());
                var o = k.createElement("jdiv");
                return o.className = "jivo_cobrowsing_tooltip",
                o.id = "jivo_cobrowsing_tooltip_" + e.hash,
                A(t) && (o.style.position = "fixed"),
                o.appendChild(a),
                e.show && (o = this.addTooltipContent(o, e, t),
                e.cb && e.cb(!0)),
                o
            },
            appendTooltip: function(e, t) {
                var n = e.childNodes[0];
                k.body.appendChild(e);
                var a = function() {
                    if ((0,
                    s.addClass)(n, "jivo-bottom"),
                    (0,
                    s.removeClass)(n, "jivo-top jivo-left jivo-right"),
                    t) {
                        var a = P(t)
                          , o = (0,
                        y.getPageWindow)()
                          , r = a.width
                          , i = a.height
                          , l = a.left + r / 2
                          , u = a.top - 30 + 15
                          , c = P(e)
                          , d = P(n)
                          , f = o.innerWidth || o.outerWidth
                          , p = c.width / 2 * -1;
                        u < d.height + 10 ? (u = a.top + i + 10,
                        n.className += " jivo-top") : (n.style.position = "absolute",
                        n.style.bottom = "10px"),
                        l + p < 10 && (l = 35,
                        p = 0,
                        n.className += " jivo-left"),
                        E.platform.isMobile ? l + c.width + p > f && (p = 0,
                        l = f - c.width) : l + c.width > f && (p = -1 * c.width,
                        l = a.left + r - 30,
                        n.className += " jivo-right"),
                        e.style.left = (0 !== l ? l : 35) + "px",
                        e.style.top = u + "px",
                        e.style.marginLeft = p + "px"
                    }
                };
                a(),
                e.style.opacity = 0,
                this.animateScroll(null, t, n),
                setTimeout((function() {
                    a(),
                    e.style.opacity = 1
                }
                ), 300),
                (0,
                v.addListener)(window.parent, "resize", a)
            },
            addTooltipContent: function(e, t, n) {
                O.log("addTooltipContent", t);
                const a = e.childNodes[0]
                  , l = 32 & i.default.options && t.agent
                  , s = k.createElement("jdiv");
                s.dir = "ltr",
                s.id = "jivo_action",
                s.className = "jivo-desktop";
                const u = window.parent.document.createElement("jdiv");
                if (u.id = "jivo_close_button",
                u.innerHTML = c.default,
                s.appendChild(u),
                a.appendChild(s),
                u.addEventListener("click", (function(n) {
                    n.preventDefault();
                    var a = k.getElementsByClassName("jivo_cobrowsing_element")[0];
                    a.parentNode.removeChild(a),
                    function(e) {
                        const t = window.top;
                        t.location.href.indexOf("#jvhs_" + e) > 0 && j(t.location.href.replace("#jvhs_" + e, ""), (0,
                        S.getCurrentPage)().title)
                    }(t.hash),
                    e.parentNode.removeChild(e)
                }
                )),
                l && t.agent) {
                    if (t.agent.avatarUrl) {
                        const e = k.createElement("jdiv");
                        e.className = "jivo_cobrowsing_tooltip_avatar",
                        a.appendChild(e);
                        (0,
                        r.createRoot)(e).render(o.default.createElement(m.Avatar, {
                            dark: !1,
                            inChat: !0,
                            url: (0,
                            w.getAvatarApiURL)(t.agent.avatarUrl)
                        }))
                    }
                    const e = k.createElement("jdiv");
                    e.innerText = t.agent.name,
                    e.className = "jivo_cobrowsing_tooltip_agent",
                    a.appendChild(e)
                }
                const d = k.createElement("jdiv");
                return d.innerHTML = t.comment.split("\n").join("<br />"),
                d.className = "jivo_cobrowsing_tooltip_text",
                a.appendChild(d),
                this.appendTooltip(e, n),
                e
            },
            animateScroll: function(e, t, n) {
                if (e && (t = k.getElementById("#jivo_cobrowsing_element_id_" + e.hash),
                n = k.getElementById("#jivo_cobrowsing_tooltip_" + e.hash).childNodes[0]),
                A(t))
                    O.log("Ignore scroll for fixed element");
                else {
                    var a = {
                        top: (n && (0,
                        s.hasClass)(n, "jivo-top") ? P(t).top : P(n.parentNode).top) - 300
                    };
                    k.documentElement && "scrollBehavior"in k.documentElement.style && (a.behavior = "smooth"),
                    O.log("scrollTo", a),
                    window.parent.scrollTo(a)
                }
            }
        }
          , R = {
            is_selecting: !1,
            is_tooltip_open: !1,
            is_inited: !1,
            langpack: {},
            init: function() {
                if (!this.is_inited) {
                    var e = k.createElement("link");
                    e.setAttribute("rel", "stylesheet"),
                    e.setAttribute("href", (0,
                    w.getStaticURL)((d.EnvironmentManager.isDevelopment() ? "/public" : "") + "/css/for_app.css")),
                    k.body.appendChild(e),
                    (0,
                    v.removeEvent)(window.parent, "keydown", this.keydownListener),
                    (0,
                    v.addListener)(window.parent, "keydown", this.keydownListener),
                    this.is_inited = !0
                }
            },
            keydownListener: function(e) {
                27 === e.keyCode && R.onEsc()
            },
            setLangpack: function(e) {
                this.langpack = e
            },
            i18n: function(e) {
                return this.langpack[e] ? this.langpack[e] : e
            },
            startSelection: function() {
                var e = R;
                (0,
                s.addClass)(k.body, "jivo_selecting"),
                e.is_selecting = !0,
                (0,
                h.each)(["input", "textarea", "select", "button"], (function(e) {
                    (0,
                    h.each)(k.getElementsByTagName(e), (function(e) {
                        const t = k.createElement("jdiv")
                          , n = P(e);
                        t.style.width = n.width + "px",
                        t.style.height = n.height + "px",
                        t.style.left = n.left + "px",
                        t.style.top = n.top + "px",
                        t.style.position = "absolute",
                        t.realNode = e,
                        e.disabled = !0,
                        k.body.appendChild(t)
                    }
                    ))
                }
                )),
                (0,
                h.each)(k.getElementsByTagName("*"), (function(t) {
                    (0,
                    v.addListener)(t, "mouseover", e.mouseoverListener),
                    (0,
                    v.addListener)(t, "mouseout", e.clearSelection)
                }
                ))
            },
            stopTagsA: function() {
                (0,
                h.each)(k.getElementsByTagName("a"), (function(e) {
                    (0,
                    v.addListener)(e, "click", (function(e) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        !1
                    }
                    ))
                }
                ))
            },
            mouseoverListener: function(e) {
                var t = R;
                if ("OPTION" === this.tagName)
                    return !1;
                t.clearSelection(),
                x.highlight({
                    element: e.target
                }),
                t.stopTagsA(),
                (0,
                v.removeEvent)(e.currentTarget, "click", t.clickListener),
                (0,
                v.addListener)(e.currentTarget, "click", t.clickListener)
            },
            clickListener: function(e) {
                var t = R;
                e.preventDefault(),
                e.stopPropagation();
                var n = this.realNode ? this.realNode : this;
                t.stopSelection(),
                t.toolTip(n)
            },
            stopSelection: function() {
                var e = R;
                (0,
                s.removeClass)(k.body, "jivo_selecting"),
                (0,
                h.each)(["input", "textarea", "select", "button"], (function(e) {
                    (0,
                    h.each)(k.getElementsByTagName(e), (function(e) {
                        e.disabled = !1
                    }
                    ))
                }
                )),
                (0,
                h.each)(k.getElementsByClassName("fake_cb_element"), (function(e) {
                    e.parentNode.removeChild(e)
                }
                )),
                (0,
                h.each)(k.getElementsByTagName("*"), (function(t) {
                    (0,
                    v.removeEvent)(t, "mouseover", e.mouseoverListener),
                    (0,
                    v.removeEvent)(t, "mouseout", e.clearSelection),
                    (0,
                    v.removeEvent)(t, "click", e.clickListener)
                }
                )),
                e.is_selecting = !1
            },
            clearSelection: function() {
                (0,
                h.each)(["jivo_cobrowsing_element", "jivo_cobrowsing_tooltip"], (function(e) {
                    (0,
                    h.each)(k.getElementsByClassName(e), (function(e) {
                        e.parentNode.removeChild(e)
                    }
                    ))
                }
                ))
            },
            toolTip: function(e) {
                var t = R
                  , n = x.renderTooltip({
                    element: e
                })
                  , a = n.childNodes[0];
                n.className += " air",
                n.style.width = "auto",
                a.style.padding = "8px",
                a.style.width = "auto",
                a.style.backgroundColor = "";
                var o = k.createElement("textarea");
                o.id = "cobrowsing_textarea_comment",
                o.maxLength = 200,
                o.placeholder = t.i18n("cb_enterComment"),
                o.value = "",
                o.onkeypress = function(n) {
                    13 === n.keyCode && (n.preventDefault(),
                    n.stopPropagation(),
                    t.send(e))
                }
                ,
                t.textInput = o;
                var r = k.createElement("button");
                r.className = "btn btn-mimi blue on_dark large",
                r.innerText = t.i18n("cb_send"),
                r.style.float = "right",
                r.style.position = "relative",
                r.style.marginRight = "8px",
                r.onclick = function() {
                    t.send(e)
                }
                ;
                var i = k.createElement("button");
                i.className = "btn btn-mimi grey on_dark large",
                i.innerText = t.i18n("cb_cancel"),
                i.style.float = "right",
                i.style.position = "relative",
                i.style.marginRight = "5px",
                i.onclick = function() {
                    t.closeTooltip()
                }
                ;
                var l = k.createElement("jdiv");
                l.style.clear = "both",
                a.appendChild(o),
                a.appendChild(i),
                a.appendChild(r),
                a.appendChild(l),
                x.appendTooltip(n, e),
                o.focus(),
                t.is_tooltip_open = !0
            },
            send: function(e) {
                var t = this.textInput.value;
                t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                var n = {
                    name: "on_send",
                    page_element: function(e) {
                        for (var t = []; e.parentNode; ) {
                            if (e.id) {
                                t.unshift("#" + e.id);
                                break
                            }
                            if (e == e.ownerDocument.documentElement)
                                t.unshift(e.tagName);
                            else {
                                for (var n = 1, a = e; a.previousElementSibling; a = a.previousElementSibling,
                                n++)
                                    ;
                                t.unshift(e.tagName + ":nth-child(" + n + ")")
                            }
                            e = e.parentNode
                        }
                        return t.join(" > ")
                    }(e),
                    page_url: window.parent.location.href,
                    comment: t
                };
                O.log("postMessage", n),
                N.postMessage(n),
                E.platform.supports.localStorage && g.parentLS.remove(`jv_${i.default.widget_id}_tmp_app`)
            },
            closeTooltip: function() {
                var e = R;
                e.stopSelection(),
                e.is_tooltip_open = !1,
                e.startSelection(),
                N.postMessage({
                    name: "on_cancel"
                })
            },
            onEsc: function() {
                this.is_tooltip_open ? this.closeTooltip() : this.is_selecting ? (this.stopSelection(),
                N.postMessage({
                    name: "reset"
                })) : N.postMessage({
                    name: "close"
                })
            }
        };
        function P(e) {
            var t, n, a = 0, o = 0, r = 0, i = 0, l = {
                top: 0,
                left: 0
            }, s = k, u = s.body;
            return t = s.documentElement,
            e && void 0 !== e.getBoundingClientRect ? (l = e.getBoundingClientRect(),
            e && !A(e) && (n = (0,
            y.getPageWindow)(),
            a = t.clientTop || u.clientTop || 0,
            o = t.clientLeft || u.clientLeft || 0,
            r = n.pageYOffset || t.scrollTop,
            i = n.pageXOffset || t.scrollLeft),
            {
                top: l.top + r - a,
                left: l.left + i - o,
                right: l.right,
                width: e.offsetWidth,
                height: e.offsetHeight,
                windowWidth: u.innerWidth,
                windowHeight: u.innerHeight
            }) : ((0,
            T.telemetry)("cobrowse_failed"),
            !1)
        }
        function A(e) {
            var t = !1;
            if (e)
                for (var n = e, a = []; n && "HTML" !== n.tagName; ) {
                    if (a.unshift(n),
                    window.parent.window.Polymer && !window.parent.jivo_cobrowse && n.treeScope_) {
                        var o = n[Object.keys(n)[0]];
                        "fixed" === getComputedStyle(o).position && (t = !0)
                    } else
                        "fixed" === getComputedStyle(n).position && (t = !0);
                    n = n.parentNode
                }
            return t
        }
        var D = N;
        t.Z = D
    },
    77389: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useListenedStyle = function(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            const n = (0,
            o.useRef)(s(e, t));
            return (0,
            o.useEffect)((function() {
                i.default.listenChangeZoom(( () => {
                    n.current = s(e, t)
                }
                ))
            }
            ), [t, e]),
            n.current
        }
        ;
        var o = n(98661)
          , r = n(44240)
          , i = a(n(74379));
        function l(e, t) {
            return {
                textSize: i.default.getTextSize(),
                lineHeight: i.default.getLineHeight(t),
                zoom: i.default.getAppZoom()
            }[e]
        }
        function s(e, t) {
            return t ? (0,
            r.isArray)(e) ? e.map((e => (0,
            r.isObject)(e) ? l(e.name, e.repass) : l(e))) : (0,
            r.isObject)(e) ? l(e.name, e.repass) : l(e) : []
        }
    },
    9836: function(e, t, n) {
        "use strict";
        var a = n(17907);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(33119))
          , r = a(n(92664))
          , i = n(35333)
          , l = n(32183)
          , s = n(80352)
          , u = n(90061)
          , c = n(52161)
          , d = n(21951);
        const f = (0,
        u.createLogger)("autoResizer")
          , p = ["lineHeight", "textDecoration", "letterSpacing", "fontSize", "fontFamily", "fontStyle", "fontWeight", "textTransform", "textAlign", "direction", "wordSpacing", "fontSizeAdjust", "paddingLeft", "paddingRight", "width", "boxSizing", "whiteSpace", "wordWrap", "paddingTop"];
        let h;
        var m = function() {
            function e(t, n) {
                if ((0,
                o.default)(this, e),
                h)
                    return h.element = t,
                    h.config = n,
                    h.bindEvents(),
                    h;
                if (!t)
                    return void f.warn("no element provided to resize!");
                this.element = t;
                const a = t.offsetHeight;
                "original" === n.maxSize && (n.maxSize = a),
                "original" === n.minSize && (n.minSize = a),
                this.config = n,
                this.bindEvents(),
                this.container = this.initializeContainer(),
                this.clone = this.initializeClone(),
                h = this
            }
            return (0,
            r.default)(e, [{
                key: "bindEvents",
                value: function() {
                    (0,
                    d.addListener)(this.element, "keyup", this.check.bind(this)),
                    (0,
                    d.addListener)(this.element, "keypress", this.check.bind(this)),
                    (0,
                    d.addListener)(this.element, "change", this.check.bind(this)),
                    (0,
                    d.addListener)(this.element, "paste", this.check.bind(this))
                }
            }, {
                key: "initializeContainer",
                value: function() {
                    if (f.log("initializeContainer"),
                    this.container)
                        return this.container;
                    let e = null;
                    return e = document.createElement("jdiv"),
                    e.style.position = "absolute",
                    e.style.top = "-9999px",
                    e.style.width = "0px",
                    e.style.height = "0px",
                    e.style.padding = "0px",
                    e.style.overflow = "hidden",
                    document.body.appendChild(e),
                    e
                }
            }, {
                key: "initializeClone",
                value: function() {
                    if (this.clone)
                        return this.clone;
                    f.log("initializeClone");
                    const e = document.createElement("jdiv");
                    return e.setAttribute("id", "jv-autoresize"),
                    this.container.appendChild(e),
                    e
                }
            }, {
                key: "updateClone",
                value: function() {
                    (0,
                    i.each)(p, (e => {
                        const t = (0,
                        l.getComputedStyleAll)(this.element, e);
                        t && (this.clone.style[e] = t)
                    }
                    )),
                    this.clone.style.display = "block"
                }
            }, {
                key: "afterResize",
                value: function() {
                    (s.platform.isTablet ? this.element.scrollHeight : this.element.offsetHeight) >= this.config.maxSize && this.element.style.setProperty("overflow-y", "auto", "important")
                }
            }, {
                key: "updateConfig",
                value: function(e) {
                    f.log("updateConfig", e),
                    Object.assign(this.config, e)
                }
            }, {
                key: "check",
                value: function() {
                    this.updateClone();
                    let e = this.element.value || this.element.getAttribute("placeholder") || "";
                    const t = this.element.offsetHeight;
                    let n, a;
                    e = e.length ? e : " ",
                    e === this.prevValue && "" == e || (this.clone.innerHTML = (0,
                    c.escape)(e).replace(new RegExp("\\r?\\n","ig"), "<div>.</div>"),
                    n = Math.min(Math.max(this.clone.offsetHeight, this.config.minSize >> 0), this.config.maxSize),
                    "" == this.element.value && (n = this.clone.offsetHeight),
                    t !== n && (a = {
                        height: n
                    }),
                    this.prevValue = e,
                    a && (s.platform.isMobile && (n += parseInt((0,
                    l.getComputedStyleAll)(this.element, "paddingTop")) + parseInt((0,
                    l.getComputedStyleAll)(this.element, "paddingBottom"))),
                    this.element.setAttribute("style", `height: ${n}px!important`),
                    this.config.onResize && this.config.onResize.call(this.element),
                    this.config.initCheck = !1,
                    this.afterResize()))
                }
            }]),
            e
        }();
        t.default = m
    },
    30295: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var n, a, o, r, i = (n = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        a = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        o = /[^-+\dA-Z]/g,
        r = function(e, t) {
            for (e = String(e),
            t = t || 2; e.length < t; )
                e = "0" + e;
            return e
        }
        ,
        function(e, t, l) {
            var s = i;
            if (1 != arguments.length || "[object String]" != Object.prototype.toString.call(e) || /\d/.test(e) || (t = e,
            e = void 0),
            "string" == typeof e && isNaN(new Date(e)) && (e = e.replace(/-/g, "/").replace("T", " ").split(".").shift() + "Z"),
            e = e ? new Date(e) : new Date,
            isNaN(e))
                throw SyntaxError("invalid date");
            "UTC:" == (t = String(s.masks[t] || t || s.masks.default)).slice(0, 4) && (t = t.slice(4),
            l = !0);
            var u = l ? "getUTC" : "get"
              , c = e[u + "Date"]()
              , d = e[u + "Day"]()
              , f = e[u + "Month"]()
              , p = e[u + "FullYear"]()
              , h = e[u + "Hours"]()
              , m = e[u + "Minutes"]()
              , g = e[u + "Seconds"]()
              , _ = e[u + "Milliseconds"]()
              , v = l ? 0 : e.getTimezoneOffset()
              , b = {
                d: c,
                dd: r(c),
                ddd: s.i18n.dayNames[d],
                dddd: s.i18n.dayNames[d + 7],
                m: f + 1,
                mm: r(f + 1),
                mmm: s.i18n.monthNames[f],
                mmmm: s.i18n.monthNames[f + 12],
                yy: String(p).slice(2),
                yyyy: p,
                h: h % 12 || 12,
                hh: r(h % 12 || 12),
                H: h,
                HH: r(h),
                M: m,
                MM: r(m),
                s: g,
                ss: r(g),
                l: r(_, 3),
                L: r(_ > 99 ? Math.round(_ / 10) : _),
                t: h < 12 ? "a" : "p",
                tt: h < 12 ? "am" : "pm",
                T: h < 12 ? "A" : "P",
                TT: h < 12 ? "AM" : "PM",
                Z: l ? "UTC" : (String(e).match(a) || [""]).pop().replace(o, ""),
                o: (v > 0 ? "-" : "+") + r(100 * Math.floor(Math.abs(v) / 60) + Math.abs(v) % 60, 4),
                S: ["th", "st", "nd", "rd"][c % 10 > 3 ? 0 : (c % 100 - c % 10 != 10) * c % 10]
            };
            return t.replace(n, (function(e) {
                return e in b ? b[e] : e.slice(1, e.length - 1)
            }
            ))
        }
        );
        i.masks = {
            default: "ddd mmm dd yyyy HH:MM:ss",
            shortDate: "m/d/yy",
            mediumDate: "mmm d, yyyy",
            longDate: "mmmm d, yyyy",
            fullDate: "dddd, mmmm d, yyyy",
            shortTime: "h:MM TT",
            mediumTime: "h:MM:ss TT",
            longTime: "h:MM:ss TT Z",
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
        },
        i.i18n = {
            dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        };
        var l = i;
        t.default = l
    },
    14376: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.selectBots = t.selectBotById = void 0;
        const n = e => e.bots;
        t.selectBots = n;
        t.selectBotById = (e, t) => n(e).find((e => e.id === t))
    },
    73151: function(e, t, n) {
        var a = n(9534);
        e.exports = a
    },
    45012: function(e, t, n) {
        var a = n(23059);
        e.exports = a
    },
    30498: function(e, t, n) {
        n(35824);
        var a = n(54058);
        e.exports = a.Object.getOwnPropertySymbols
    },
    48494: function(e, t, n) {
        n(21724);
        var a = n(54058);
        e.exports = a.Object.keys
    },
    84710: function(e, t, n) {
        e.exports = n(14058)
    },
    93799: function(e, t, n) {
        e.exports = n(92093)
    },
    14058: function(e, t, n) {
        var a = n(73151);
        e.exports = a
    },
    92093: function(e, t, n) {
        var a = n(45012);
        e.exports = a
    },
    21724: function(e, t, n) {
        var a = n(76887)
          , o = n(89678)
          , r = n(14771);
        a({
            target: "Object",
            stat: !0,
            forced: n(95981)((function() {
                r(1)
            }
            ))
        }, {
            keys: function(e) {
                return r(o(e))
            }
        })
    },
    9534: function(e, t, n) {
        var a = n(30498);
        e.exports = a
    },
    23059: function(e, t, n) {
        var a = n(48494);
        e.exports = a
    },
    53879: function(e, t, n) {
        var a = n(87236)
          , o = n(6189)
          , r = {
            float: "cssFloat"
        }
          , i = n(93379);
        function l(e, t, n) {
            var l = r[t];
            if (void 0 === l && (l = function(e) {
                var t = o(e)
                  , n = a(t);
                return r[t] = r[e] = r[n] = n,
                n
            }(t)),
            l) {
                if (void 0 === n)
                    return e.style[l];
                e.style[l] = i(l, n)
            }
        }
        function s(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && l(e, n, t[n])
        }
        function u() {
            2 === arguments.length ? "string" == typeof arguments[1] ? arguments[0].style.cssText = arguments[1] : s(arguments[0], arguments[1]) : l(arguments[0], arguments[1], arguments[2])
        }
        e.exports = u,
        e.exports.set = u,
        e.exports.get = function(e, t) {
            return Array.isArray(t) ? t.reduce((function(t, n) {
                return t[n] = l(e, n || ""),
                t
            }
            ), {}) : l(e, t || "")
        }
    },
    57597: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            main: "main__tOfuS",
            "background-transparent": "background-transparent__nxpaI",
            __static: "__static__NoCN5",
            header: "header__DgUa1",
            body: "body__ZPrko",
            noShadow: "noShadow__QOdef",
            mobile: "mobile__qPhOk",
            input: "input__cRvYy",
            popup: "popup__auwFV",
            bodyWrap: "bodyWrap__muAoJ",
            show: "show__D9ENT",
            popupFull: "popupFull__zF_QC",
            hide: "hide__JkSqB",
            headerBox: "headerBox__iBSgq",
            fadeIn: "fadeIn__jlLIx",
            fadeOut: "fadeOut__AXhCT",
            loading: "loading__VnIWV",
            __widgetConstructor: "__widgetConstructor__LeCgP"
        }
    },
    42805: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            closeButton: "closeButton__GheGj",
            closeIcon: "closeIcon__ocWTK",
            action: "action__DBT1E",
            drag: "drag__LbNzL",
            __call: "__call__nAPbl",
            popupClose: "popupClose__Y3USJ"
        }
    },
    43973: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            copyright: "copyright__XWGFP",
            _bottom: "_bottom__LUD7k",
            __ru: "__ru__l8DqH",
            _right: "_right__vkFjM",
            _left: "_left__6Lnor",
            hide: "hide__K1_8U",
            logoIcon: "logoIcon__zNTMH",
            link: "link__qdjTv",
            __mobile: "__mobile__IdXiM",
            text: "text__TeTjW",
            corner: "corner__IHFPR",
            __bottom: "__bottom__Bkblt",
            __left: "__left__oQAYh",
            __right: "__right__bFEMx",
            chatCopyright: "chatCopyright__hBZa5",
            __tablet: "__tablet__dgB7D",
            __call: "__call__H_y_w",
            __chat: "__chat__l6lF6",
            __offline: "__offline__wkc8H",
            __top: "__top__Q8QbF",
            __hidden: "__hidden__NUrbz",
            customWrap: "customWrap__QB7JT"
        }
    },
    69427: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            emojiIcon: "emojiIcon__fLQOf",
            emojiMessages: "emojiMessages__vHWUf",
            __alone: "__alone__EzUKy",
            iconSuccess: "iconSuccess__NCXsN",
            icon: "icon__Sxii1"
        }
    },
    39771: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            wrap: "wrap__azImf",
            __disabled: "__disabled__nFr7W",
            iconFile: "iconFile__cDfrY",
            iconAttach2: "iconAttach2__eSlBa",
            uploadFwrap: "uploadFwrap__qa4zg",
            uploadButton: "uploadButton__V3azK"
        }
    },
    861: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            input: "input__Ccr8k",
            __mobile: "__mobile__Y78gu",
            tdTextarea: "tdTextarea__PWcUO",
            inputField: "inputField__Qs3EQ",
            sendButton: "sendButton__JCgjH",
            __filedisabled: "__filedisabled__EUQiU",
            inputContainer: "inputContainer__xTDdH",
            windowsPhone: "windowsPhone__l4Z1P",
            "input-field": "input-field__AegmG",
            __disabled: "__disabled__caTBf",
            socialPanel: "socialPanel__zyzns",
            iconEmoji: "iconEmoji__ZVljk",
            wrapMargin: "wrapMargin__YqRjR",
            quoteContainer: "quoteContainer__VrIzS",
            __show: "__show__jOxDG",
            show: "show__qKGDD",
            __hide: "__hide__TRgXm",
            hide: "hide__Dwlhf",
            quote: "quote__lqh9T",
            quoteIcon: "quoteIcon__eRx2L",
            quoteClose: "quoteClose__b3VcB",
            quoteCloseIcon: "quoteCloseIcon__QK6QH"
        }
    },
    91059: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            iconEmoji: "iconEmoji__hmuZv",
            __disabled: "__disabled__UwNSx",
            emojiWrap: "emojiWrap__kA8Ol"
        }
    },
    31308: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            iconPanel: "iconPanel__ZMHuN",
            __mobile: "__mobile__yGX1S"
        }
    },
    30240: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            popup: "popup__vBfmg",
            hidePopup: "hidePopup__H3qn8",
            show: "show___2bRz",
            showPopup: "showPopup__mBkWg",
            childrenWrap: "childrenWrap__u0LFg",
            pip: "pip__S2DaX"
        }
    },
    2037: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            iconMenu: "iconMenu__GngEa",
            __disabled: "__disabled__wdtdS",
            menuWrap: "menuWrap__fXXnP",
            menu: "menu__EnNi7",
            hidePopup: "hidePopup___v4wG",
            menuItem: "menuItem__Xw6nZ",
            pip: "pip__g4v0c",
            show: "show__lQJLt",
            showPopup: "showPopup__Uuygp"
        }
    },
    99493: function(e, t) {
        "use strict";
        t.Z = {
            main: "main__sRknh",
            _mobile: "_mobile__T6wB5",
            _transparent: "_transparent__duK62",
            content: "content__B5iAu",
            _noagent: "_noagent__V2OH8",
            __chatPage: "__chatPage__Ifhe0",
            agentName: "agentName__XftUm",
            avatarBox: "avatarBox__ktr9W",
            __isAnimated: "__isAnimated__Qc8sh",
            time: "time__pRZS6",
            _agentName: "_agentName__yOovX",
            botBadge: "botBadge__b64I7"
        }
    },
    8292: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            main: "main__YSnFf",
            _mobile: "_mobile__LVX4H",
            __chatPage: "__chatPage__rGS5X",
            content: "content__N3uRy",
            __green: "__green__ehMCO",
            message: "message__NsUL8",
            __grey: "__grey__sW85q",
            __blue: "__blue__UCOJu",
            time: "time__hU5fo"
        }
    },
    64545: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            main: "main__QBTAy",
            message: "message__bL9Fd",
            successIcon: "successIcon__uesWV",
            rubleIcon: "rubleIcon__XNf9L",
            text: "text__N0QZA",
            info: "info__zwc_X",
            productName: "productName__s56s2",
            amountWrap: "amountWrap__V33O_",
            amount: "amount__fmbX_",
            actionBtn: "actionBtn__IrK7h",
            __error: "__error__oFmEp",
            _tinkoff: "_tinkoff__UdBh1",
            actionText: "actionText__mQE9h",
            successText: "successText__NRCL9",
            __success: "__success__sLhtK"
        }
    },
    63960: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            container: "container__p79tj",
            main: "main__ObUrI",
            time: "time__YRk_W",
            _preview: "_preview__jnBKH",
            _notPreview: "_notPreview__UEYEb",
            _client: "_client__SCUAE",
            _green: "_green__UDyF1",
            _grey: "_grey__Fx6e5",
            _blue: "_blue__V5yLh",
            previewLink: "previewLink__krlTi",
            __flash: "__flash__NHiqy",
            flash: "flash__yfgvm",
            __quote: "__quote__G5HAr",
            mediaWrapper: "mediaWrapper__uzx4q",
            clientMediaWrapper: "clientMediaWrapper__Gluqe",
            mediaIcon: "mediaIcon__x0VhT",
            _uploading: "_uploading__i0xRP",
            iconMedia: "iconMedia__bpfRK",
            mediaComplete: "mediaComplete__Zh7X1",
            _agent: "_agent__FSziw",
            _mobile: "_mobile__ZFSzP",
            mediaText: "mediaText__Pw1lY",
            mediaFname: "mediaFname__dWu8v",
            locationContainer: "locationContainer__WxvJT",
            locationLink: "locationLink__faV0a",
            mediaPerc: "mediaPerc__jw138",
            iconError: "iconError__pX86_",
            iconUpload: "iconUpload__mQtke",
            _hidden: "_hidden___BElc",
            iconLoading: "iconLoading__Y10Rs",
            loaderInner: "loaderInner__zY6eC",
            loaderCont: "loaderCont__zhs8O",
            loaderBar: "loaderBar__nb2AL",
            previewMediaPhoto: "previewMediaPhoto__PdgFv",
            smallImage: "smallImage__JYPmk",
            overlayText: "overlayText__jq8o0",
            playIcon: "playIcon__avqdc"
        }
    },
    23360: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            linkWrap: "linkWrap__O9X6v",
            link: "link__kFUBd",
            title: "title__ydNgu",
            text: "text__C33fs",
            contentWrap: "contentWrap__N13TP",
            content: "content__mFqDV",
            imgWrap: "imgWrap__u_jtN",
            time: "time__L217j"
        }
    },
    64615: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            reply: "reply__H799Y",
            __client: "__client__Tslr8",
            __agent: "__agent__Ui_47",
            __desktop: "__desktop__Vf_CH",
            __aloneReply: "__aloneReply__G2cF8",
            replyIcon: "replyIcon__Vhfgg"
        }
    },
    32138: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            main: "main__CU3DQ",
            message: "message__vLDF0",
            showmessage: "showmessage__kpwio",
            readBox: "readBox__XU_Hp",
            __mobile: "__mobile__tzdRx",
            text: "text__lP6Ci",
            textWrap: "textWrap__oSqY7",
            container: "container__Uzm4O",
            __client: "__client__ghcVf",
            __withError: "__withError__Sm_Jq",
            __alone: "__alone__k6PjO",
            _green: "_green__zBkUV",
            _grey: "_grey__dPcoD",
            _blue: "_blue__jtp6w",
            __agent: "__agent__LXY7R",
            time: "time__S2erJ",
            __proactive: "__proactive__Qtkw1",
            __background: "__background__GnQ4I",
            __bottom_width: "__bottom_width__zgUNI",
            __top_width: "__top_width__My9Ib",
            image: "image__J48Tm",
            __deleted: "__deleted__mUN5G",
            __edited: "__edited__UBSF3",
            __flash: "__flash__BsMxL",
            flash: "flash__bITR5",
            editedText: "editedText__wHdSF"
        }
    },
    77335: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            main: "main__WjKUH",
            __hide: "__hide__r0Cuq",
            button: "button__UPq11",
            __mobile: "__mobile__wy1tH",
            __background: "__background__DY9P8",
            __bot: "__bot__ghSIP",
            __buttonModifier: "__buttonModifier__SdXf0",
            __ios: "__ios__ZFBEE",
            __withLink: "__withLink__fDlaU",
            icon: "icon__KpYOi"
        }
    },
    9097: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            main: "main__bFztV"
        }
    },
    89315: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            wrapper: "wrapper__yrUXd"
        }
    },
    25648: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            main: "main__dfpsw",
            avatar: "avatar__EN0ZX",
            img: "img__qtjFI",
            text: "text__IqgPW",
            _mobile: "_mobile__whlZZ"
        }
    },
    48524: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            main: "main__QvKnc",
            text: "text__ly_FO",
            __mobile: "__mobile__w3dgp",
            __callMessageStart: "__callMessageStart__ggh_b",
            __callEnd: "__callEnd__PvLaZ",
            __delayedCallSuccess: "__delayedCallSuccess___q8Eq",
            callIcon: "callIcon__JZtY7"
        }
    },
    81084: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            main: "main__b9TQz",
            __mobile: "__mobile__NiYRv",
            text: "text__h5MZR",
            __bot: "__bot__H_Eqz",
            __social: "__social__owLxM"
        }
    },
    86940: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            quote: "quote__fRhBG",
            author: "author__JEjJa",
            message: "message__iGQkS",
            container: "container__bDumh",
            __dark: "__dark__jnaI_",
            __light: "__light__wbEjr",
            __active: "__active__ZDafS",
            __green: "__green__VKrDB",
            __grey: "__grey__LF8Bg",
            __blue: "__blue__S4yvi",
            __aloneQuote: "__aloneQuote__yrDti",
            __media: "__media__uZ5zm",
            aloneEmoji: "aloneEmoji__gbGir",
            markdown: "markdown__mhnCJ",
            mdtext: "mdtext__kBaFq",
            previewMediaPhoto: "previewMediaPhoto__rEVKf"
        }
    },
    7468: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            socialPanel: "socialPanel__pIDIu",
            wrap: "wrap__hA2hv",
            socialLink: "socialLink__MhyE3",
            infoText: "infoText__mMH97",
            iconVk: "iconVk__XyXwW",
            iconFb: "iconFb__rzFx7",
            iconSb: "iconSb__jJWIf",
            box: "box__yogLZ",
            iframe: "iframe__D1yHR",
            __vk: "__vk__z11qK"
        }
    },
    49563: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = {
            wrap: "wrap__LX5Mw",
            textBox: "textBox__LNIm8",
            text: "text__S36Dr",
            iconHeader: "iconHeader__Dvt2z",
            __vk: "__vk__JVwrp",
            __fb: "__fb__QZrim",
            linkBox: "linkBox__vW1Dd",
            link: "link__yMiY0"
        }
    },
    91153: function(e, t) {
        "use strict";
        t.Z = {
            avatar: "avatar__YL2ld",
            _chatStyle: "_chatStyle__YIlbE",
            avatarItem: "avatarItem__bNWd3",
            avatarListImg: "avatarListImg__wKJBQ",
            avatarImg: "avatarImg__VS3W4",
            lightAvatar: "lightAvatar__gQErf",
            darkAvatar: "darkAvatar__kWTbo",
            _width1: "_width1__h9J8Y",
            _width2: "_width2__JVTCr",
            _width3: "_width3__TPR4j",
            _connected: "_connected__Hry1r",
            _expanded: "_expanded__kxqGk",
            _mobile: "_mobile__boi2j",
            _tablet: "_tablet__fshni",
            __isBot: "__isBot__Z1Auc",
            onlineBadge: "onlineBadge__mvdXi",
            avatarList: "avatarList__SusCN",
            dotsItem: "dotsItem__VIbES",
            _light: "_light__DyXAP",
            _dark: "_dark__Svggr",
            botIcon: "botIcon__mCU5d",
            __header: "__header__ZPkYl",
            img: "img__LWxHH"
        }
    },
    75: function(e) {
        (function() {
            var t, n, a, o, r, i;
            "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                return performance.now()
            }
            : "undefined" != typeof process && null !== process && process.hrtime ? (e.exports = function() {
                return (t() - r) / 1e6
            }
            ,
            n = process.hrtime,
            o = (t = function() {
                var e;
                return 1e9 * (e = n())[0] + e[1]
            }
            )(),
            i = 1e9 * process.uptime(),
            r = o - i) : Date.now ? (e.exports = function() {
                return Date.now() - a
            }
            ,
            a = Date.now()) : (e.exports = function() {
                return (new Date).getTime() - a
            }
            ,
            a = (new Date).getTime())
        }
        ).call(this)
    },
    87236: function(e) {
        var t = null
          , n = ["Webkit", "Moz", "O", "ms"];
        e.exports = function(e) {
            t || (t = document.createElement("div"));
            var a = t.style;
            if (e in a)
                return e;
            for (var o = e.charAt(0).toUpperCase() + e.slice(1), r = n.length; r >= 0; r--) {
                var i = n[r] + o;
                if (i in a)
                    return i
            }
            return !1
        }
    },
    54087: function(e, t, n) {
        for (var a = n(75), o = "undefined" == typeof window ? n.g : window, r = ["moz", "webkit"], i = "AnimationFrame", l = o["request" + i], s = o["cancel" + i] || o["cancelRequest" + i], u = 0; !l && u < r.length; u++)
            l = o[r[u] + "Request" + i],
            s = o[r[u] + "Cancel" + i] || o[r[u] + "CancelRequest" + i];
        if (!l || !s) {
            var c = 0
              , d = 0
              , f = [];
            l = function(e) {
                if (0 === f.length) {
                    var t = a()
                      , n = Math.max(0, 16.666666666666668 - (t - c));
                    c = n + t,
                    setTimeout((function() {
                        var e = f.slice(0);
                        f.length = 0;
                        for (var t = 0; t < e.length; t++)
                            if (!e[t].cancelled)
                                try {
                                    e[t].callback(c)
                                } catch (e) {
                                    setTimeout((function() {
                                        throw e
                                    }
                                    ), 0)
                                }
                    }
                    ), Math.round(n))
                }
                return f.push({
                    handle: ++d,
                    callback: e,
                    cancelled: !1
                }),
                d
            }
            ,
            s = function(e) {
                for (var t = 0; t < f.length; t++)
                    f[t].handle === e && (f[t].cancelled = !0)
            }
        }
        e.exports = function(e) {
            return l.call(o, e)
        }
        ,
        e.exports.cancel = function() {
            s.apply(o, arguments)
        }
        ,
        e.exports.polyfill = function(e) {
            e || (e = o),
            e.requestAnimationFrame = l,
            e.cancelAnimationFrame = s
        }
    },
    93867: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = '<svg id="jivo-icon-closewidget" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><style>.jivo-st0{opacity:.8;fill:#FFF;stroke:#000;enable-background:new}.jivo-st0,.jivo-st1{stroke-width:1.5;stroke-linecap:round}.jivo-st1{fill:none;stroke:#383d45}</style><circle class="jivo-st0" cx="12" cy="12" r="11"/><path class="jivo-st1" d="M7.5 16.5l9-9M16.5 16.5l-9-9"/></svg>'
    },
    36683: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1="3.556%" x2="50%" y2="97.988%" id="a"><stop stop-color="#00C6FF" offset="0%"/><stop stop-color="#0371FF" offset="100%"/></linearGradient></defs><path d="M7.5 0C3.375 0 0 3.105 0 6.938c0 2.16 1.065 4.087 2.737 5.362l.046 2.7 2.587-1.41-.022-.008a8.106 8.106 0 0 0 2.152.293c4.125 0 7.5-3.105 7.5-6.938C15 3.106 11.625 0 7.5 0zm.773 9.307L6.405 7.335l-3.78 1.972L6.66 5.085l1.935 1.853 3.637-1.853-3.96 4.222z" transform="translate(1)" fill="url(#a)"/></svg>'
    },
    74783: function(e, t, n) {
        "use strict";
        n.r(t),
        t.default = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><mask id="a" width="14" height="14" x="1" y="1" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M14.9307 1H1.06934v14H14.9307V1Z"/></mask><g mask="url(#a)"><path fill="#07F" d="M1.06934 7.72c0-3.16784 0-4.75175.97437-5.73588C3.01809 1 4.58633 1 7.7228 1h.55446c3.13644 0 4.70474 0 5.67904.98412.9744.98413.9744 2.56804.9744 5.73588v.56c0 3.1678 0 4.7518-.9744 5.7359C12.982 15 11.4137 15 8.27726 15H7.7228c-3.13647 0-4.70471 0-5.67909-.9841-.97437-.9841-.97437-2.5681-.97437-5.7359v-.56Z"/><path fill="#fff" d="M8.44475 11.0859c-3.15925 0-4.96122-2.18754-5.0363-5.82754h1.58251c.05198 2.67166 1.21862 3.80333 2.14271 4.03666V5.25836h1.49015v2.30415c.91254-.09916 1.87118-1.14915 2.19458-2.30415h1.4902c-.2484 1.42334-1.288 2.47333-2.0273 2.90499.7393.35 1.9234 1.26584 2.3739 2.92255h-1.6404c-.3523-1.10838-1.23009-1.96588-2.39098-2.08255v2.08255h-.17907Z"/></g></svg>'
    },
    18954: function(e, t) {
        "use strict";
        t.Z = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 37 37">\n  <g clip-path="url(#a)">\n    <path fill="_COLOR1_" d="M35.1385 18.5001a16.65 16.65 0 0 1-32.9801 3.2483A16.6502 16.6502 0 0 1 18.4885 1.8501a16.65 16.65 0 0 1 16.65 16.65Z"/>\n    <path fill="#586069" d="M13.8143 19.4272c0 1.3388-.7694 2.4275-1.7081 2.4275s-1.7081-1.0887-1.7081-2.4275c0-1.3387.7694-2.4274 1.7081-2.4274s1.7081 1.0848 1.7081 2.4274ZM26.598 19.4272c0 1.3388-.7694 2.4275-1.7119 2.4275-.9426 0-1.7081-1.0887-1.7081-2.4275 0-1.3387.7694-2.4274 1.7081-2.4274.9386 0 1.7119 1.0848 1.7119 2.4274ZM14.8261 17.8306a.4655.4655 0 0 1-.4501-.3347c-.504-1.7081-2.2121-3.0122-4.2318-3.243a.4714.4714 0 0 1-.1845-.0474.4706.4706 0 0 1-.242-.2839.4689.4689 0 0 1 .1675-.5134.4687.4687 0 0 1 .3629-.0863c2.4082.2731 4.4395 1.8427 5.0473 3.9086a.4691.4691 0 0 1-.3193.5809.3855.3855 0 0 1-.15.0192ZM22.17 17.8306a.3824.3824 0 0 1-.1307 0 .4693.4693 0 0 1-.3193-.5809c.6078-2.0658 2.6352-3.6354 5.0434-3.9086a.4696.4696 0 0 1 .4036.7496.4691.4691 0 0 1-.2959.1814c-2.0389.2309-3.747 1.5389-4.2317 3.2431a.4692.4692 0 0 1-.4694.3154ZM21.847 27.2828a.7697.7697 0 0 1-.5156-.2038 4.1314 4.1314 0 0 0-2.6929-1.0695 4.0662 4.0662 0 0 0-2.9853 1.0618.7704.7704 0 0 1-.5707.3186.77.77 0 0 1-.6098-.2353.769.769 0 0 1-.0994-.9359.7697.7697 0 0 1 .2335-.24 5.7974 5.7974 0 0 1 7.7403 0 .7692.7692 0 0 1-.5155 1.3118l.0154-.0077Z"/>\n  </g>\n  <defs>\n    <clipPath id="a">\n      <path fill="#fff" d="M0 0h33.3v33.3H0z" transform="translate(1.85 1.8501)"/>\n    </clipPath>\n  </defs>\n</svg>'
    },
    23808: function(e, t) {
        "use strict";
        t.Z = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">\n  <g clip-path="url(#a)">\n    <path fill="_COLOR1_" d="M19 10A9.0001 9.0001 0 1 1 1.6843 6.566 9 9 0 0 1 19 10Z"/>\n    <path fill="#586069" d="M15.8059 9.3617a1.1647 1.1647 0 0 1-1.393 1.1398 1.1655 1.1655 0 0 1-.5957-.3192 1.1642 1.1642 0 0 1 .8242-1.9872 1.1644 1.1644 0 0 1 1.1645 1.1666ZM13.1192 8.2055a.2934.2934 0 0 1-.2703-.4034c.0229-.0541.5573-1.2914 2.4309-.9379a.2932.2932 0 0 1-.1081.576c-1.3891-.262-1.7655.5532-1.7821.5885a.2953.2953 0 0 1-.2704.1768ZM6.7186 9.3617a1.1648 1.1648 0 0 1-.7203 1.0743 1.1644 1.1644 0 1 1-.4442-2.241 1.1646 1.1646 0 0 1 1.1645 1.1667ZM4.0152 8.5445a.2848.2848 0 0 1-.1143-.025.289.289 0 0 1-.156-.3785c.0208-.054.5573-1.2892 2.431-.9378a.2933.2933 0 0 1-.1103.576c-1.387-.262-1.7634.5532-1.78.5885a.2973.2973 0 0 1-.2704.1768ZM8.531 13.5239a.441.441 0 0 0 .5455.6907 4.6315 4.6315 0 0 1 3.637-.7895.4397.4397 0 0 0 .3474-.0478.4409.4409 0 0 0-.1667-.8132 5.5099 5.5099 0 0 0-4.3449.9363l-.0182.0235Z"/>\n  </g>\n  <defs>\n    <clipPath id="a">\n      <path fill="#fff" d="M0 0h18v18H0z" transform="translate(1 1)"/>\n    </clipPath>\n  </defs>\n</svg>'
    },
    83088: function(e, t) {
        "use strict";
        t.Z = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 32">\n  <path fill="_COLOR1_" d="M29.072 16.0747c0 .4471-.1067.8666-.2853 1.248-1.192 3.8453-6.7725 3.5644-14.7103 3.752-1.3271.0311-.568 1.5982-.1022 5.0382.3031 2.2373-1.1395 5.6729-3.5644 5.6729-3.9982 0-.152-3.1538-3.6871-10.9529C4.8337 16.6658.6116 19 .6116 14.8142v-9.527c0-1.6294.16-3.1956 2.4515-3.4534C5.2844 1.583 4.785 0 7.9893 0h16.0391a2.966 2.966 0 0 1 2.9627 2.9636c0 .6773-.2373 1.2942-.6204 1.7937.9066.5076 1.5289 1.4658 1.5289 2.577 0 .6755-.2365 1.2924-.6187 1.791.9093.5067 1.5333 1.4658 1.5333 2.5787 0 .808-.3271 1.5404-.8542 2.0764a2.944 2.944 0 0 1 1.112 2.2943Z"/>\n  <path fill="_COLOR2_" d="M18.4622 13.1121h7.648c1.04 0 2.016.5564 2.5476 1.4515a.779.779 0 0 1-.2898 1.0373.7786.7786 0 0 1-1.0489-.2444 1.411 1.411 0 0 0-1.2098-.6889h-7.8311c-.776 0-1.4071.6312-1.4071 1.4072s.6311 1.4071 1.4071 1.4071h5.2329a.7777.7777 0 1 1 0 1.5555h-5.2338a2.966 2.966 0 0 1-2.9626-2.9626c0-.9112.4222-1.7174 1.0711-2.2614a2.95 2.95 0 0 1-.8871-2.1093c0-.9138.4249-1.7227 1.0773-2.2658a2.9486 2.9486 0 0 1-.4908-3.5686 2.9502 2.9502 0 0 1 .8632-.947 2.938 2.938 0 0 1-.7573-1.959A2.9665 2.9665 0 0 1 19.1538.001h4.8746a2.9778 2.9778 0 0 1 2.5485 1.4506.778.778 0 0 1-.8606 1.1395.7776.7776 0 0 1-.4763-.3448 1.4172 1.4172 0 0 0-1.2116-.6898h-4.8746c-.776 0-1.4071.6311-1.4071 1.4071s.6311 1.4072 1.4071 1.4072h5.7831c1.04 0 2.0178.5564 2.5484 1.4515a.7768.7768 0 0 1-.035.8733.7769.7769 0 0 1-.518.3079.7776.7776 0 0 1-.7839-.3865 1.3968 1.3968 0 0 0-1.2115-.6907h-6.2782a1.4088 1.4088 0 0 0 0 2.8151h7.192a2.9775 2.9775 0 0 1 2.5484 1.4507.7774.7774 0 0 1-.279 1.0524.778.778 0 0 1-1.0579-.2577 1.398 1.398 0 0 0-1.2115-.6898h-7.3885a1.4092 1.4092 0 0 0-1.3476 1.4075 1.4092 1.4092 0 0 0 1.3476 1.4076Z"/>\n</svg>'
    },
    50996: function(e, t) {
        "use strict";
        t.Z = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">\n  <path fill="_COLOR1_" d="M10 19c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"/>\n  <path fill="#586069" d="M14.7787 6.8871a1.8045 1.8045 0 0 1-.1581.7528.2474.2474 0 0 1-.3639.106.7215.7215 0 0 0-.8859 0 .2451.2451 0 0 1-.3701-.1102 1.771 1.771 0 0 1-.158-.7527c0-.7549.4304-1.3684.9628-1.3684.5323 0 .9732.6177.9732 1.3725ZM7.149 6.8871a1.8027 1.8027 0 0 1-.158.7528.2454.2454 0 0 1-.3618.106.7466.7466 0 0 0-.445-.1518.7341.7341 0 0 0-.4409.1518.2473.2473 0 0 1-.3639-.106 1.803 1.803 0 0 1-.158-.7528c0-.7549.4304-1.3683.9628-1.3683.5323 0 .9649.6134.9649 1.3683ZM5.4251 10.4034a.3984.3984 0 0 0-.3188.1615.3997.3997 0 0 0-.0617.3521c.47 1.7156 2.4953 3.009 4.9533 3.009 2.4579 0 4.5062-1.3101 4.9596-3.0423a.3907.3907 0 0 0-.2146-.4434.3912.3912 0 0 0-.1722-.0369H5.4251Z"/>\n  <path fill="#fff" d="M9.9958 11.0771a9.0292 9.0292 0 0 0 3.5351-.6738H6.4607a9.0185 9.0185 0 0 0 3.5351.6738Z"/>\n</svg>'
    },
    90270: function(e, t) {
        "use strict";
        t.Z = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">\n  <g clip-path="url(#a)">\n    <path fill="_COLOR1_" d="M11.4205 18.8924c4.9082-.7853 8.2504-5.4007 7.4651-10.3089-.7852-4.9081-5.4007-8.2504-10.3088-7.465C3.6686 1.9036.3264 6.519 1.1117 11.4272c.7853 4.9081 5.4007 8.2503 10.3088 7.4651Z"/>\n    <path fill="#586069" d="M15.2153 8.8397a.1415.1415 0 0 0 .208-.1186 1.1896 1.1896 0 1 0-2.3769 0 .1416.1416 0 0 0 .208.1185 1.8466 1.8466 0 0 1 1.9443 0h.0166ZM6.7373 8.8397a.1414.1414 0 0 0 .208-.1186 1.1894 1.1894 0 1 0-2.3769 0 .1415.1415 0 0 0 .208.1186 1.8465 1.8465 0 0 1 1.9443 0h.0166ZM10.0478 14.1091a6.0655 6.0655 0 0 1-4.0883-1.597.441.441 0 0 1 .599-.6446 5.1512 5.1512 0 0 0 6.8893.0811.4404.4404 0 0 1 .608.0496.4407.4407 0 0 1-.0237.6095 6.0028 6.0028 0 0 1-3.9843 1.5014Z"/>\n  </g>\n  <defs>\n    <clipPath id="a">\n      <path fill="#fff" d="M0 0h18v18H0z" transform="translate(1 1)"/>\n    </clipPath>\n  </defs>\n</svg>'
    },
    94939: function(e, t) {
        "use strict";
        t.Z = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 32">\n  <path fill="_COLOR1_" d="M29.072 15.9252c0-.4471-.1067-.8666-.2853-1.248-1.192-3.8453-6.7725-3.5644-14.7103-3.752-1.3271-.0311-.568-1.5982-.1022-5.0382.3031-2.2373-1.1395-5.6729-3.5644-5.6729-3.9982 0-.152 3.1538-3.6871 10.9529-1.889 4.1671-6.1111 1.8329-6.1111 6.0187v9.528c0 1.6293.16 3.1955 2.4515 3.4533 2.2213.2498 1.7218 1.8329 4.9262 1.8329h16.0391a2.9663 2.9663 0 0 0 2.9627-2.9636c0-.6773-.2373-1.2942-.6204-1.7937.9066-.5076 1.5289-1.4658 1.5289-2.5769 0-.6756-.2365-1.2925-.6187-1.7911.9093-.5067 1.5333-1.4658 1.5333-2.5787 0-.808-.3271-1.5405-.8542-2.0765a2.9427 2.9427 0 0 0 1.112-2.2942Z"/>\n  <path fill="_COLOR2_" d="M18.4622 18.888h7.648c1.04 0 2.016-.5565 2.5476-1.4516a.7788.7788 0 0 0-1.3387-.7929 1.4113 1.4113 0 0 1-1.2098.6889h-7.8311c-.776 0-1.4071-.6311-1.4071-1.4071s.6311-1.4071 1.4071-1.4071h5.2329a.7777.7777 0 1 0 0-1.5556h-5.2338a2.9664 2.9664 0 0 0-2.9626 2.9627c0 .9111.4222 1.7173 1.0711 2.2613a2.9508 2.9508 0 0 0-.8871 2.1094c0 .9138.4249 1.7226 1.0773 2.2658a2.9496 2.9496 0 0 0-.871 2.3449 2.9485 2.9485 0 0 0 1.2434 2.1706 2.938 2.938 0 0 0-.7573 1.9591 2.9665 2.9665 0 0 0 2.9627 2.9627h4.8746a2.9782 2.9782 0 0 0 2.5485-1.4507.778.778 0 0 0-.8606-1.1395.7776.7776 0 0 0-.4763.3449 1.4166 1.4166 0 0 1-1.2116.6897h-4.8746c-.776 0-1.4071-.6311-1.4071-1.4071s.6311-1.4071 1.4071-1.4071h5.7831a2.9768 2.9768 0 0 0 1.4653-.3903 2.9767 2.9767 0 0 0 1.0831-1.0612.7768.7768 0 0 0 .0953-.595.7783.7783 0 0 0-.6483-.5862.7776.7776 0 0 0-.7839.3865 1.3971 1.3971 0 0 1-1.2115.6907h-6.2782a1.4086 1.4086 0 0 1-1.3476-1.4076 1.4087 1.4087 0 0 1 1.3476-1.4076h7.192a2.9767 2.9767 0 0 0 2.5484-1.4506.7775.7775 0 0 0-.279-1.0524.778.778 0 0 0-1.0579.2577 1.3986 1.3986 0 0 1-1.2115.6898h-7.3885a1.4092 1.4092 0 0 1-1.3476-1.4076 1.4091 1.4091 0 0 1 1.3476-1.4075Z"/>\n</svg>'
    },
    43205: function(e, t) {
        "use strict";
        t.Z = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">\n  <g clip-path="url(#a)">\n    <path fill="_COLOR1_" d="M18.7573 12.0764c1.146-4.8367-1.8458-9.6866-6.6825-10.8326C7.2382.0978 2.3883 3.0897 1.2423 7.9263.0963 12.763 3.088 17.613 7.9248 18.759c4.8366 1.146 9.6865-1.8459 10.8325-6.6825Z"/>\n    <path fill="#586069" d="M14.107 12.7928H5.893a.4407.4407 0 1 1 0-.8817h8.214a.4408.4408 0 0 1 0 .8817ZM14.708 8.4696a.9504.9504 0 1 1-.9483-.9503.9486.9486 0 0 1 .8767.5868.9502.9502 0 0 1 .0716.3635ZM7.1906 8.4696a.9503.9503 0 1 1-.9503-.9503.9483.9483 0 0 1 .9503.9503Z"/>\n  </g>\n  <defs>\n    <clipPath id="a">\n      <path fill="#fff" d="M0 0h18v18H0z" transform="translate(1 1)"/>\n    </clipPath>\n  </defs>\n</svg>'
    },
    37491: function(e, t) {
        "use strict";
        t.Z = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 33"><path fill="url(#a)" d="M32.1102 15.0133c.37-.2801.6445-.6708.7849-1.1173.1405-.4466.1398-.9266-.0018-1.3728-.1416-.4462-.4171-.8361-.7878-1.1152-.3708-.2791-.8182-.4332-1.2795-.4409l-8.96-.3439c-.044-.0031-.0863-.0191-.1216-.046s-.0622-.0636-.0775-.1057l-3.0962-8.49702c-.1555-.43229-.4381-.80558-.8093-1.069308C17.3901.641441 16.948.5 16.495.5c-.453 0-.8951.141441-1.2663.405172-.3713.263728-.6538.637018-.8094 1.069308l-3.0862 8.52732c-.0153.0421-.0422.0788-.0775.1058-.0353.0269-.0776.0428-.1216.0459l-8.95997.344c-.46133.0076-.90874.1618-1.279487.4408-.370749.2791-.646246.6691-.787863 1.1152-.1416169.4462-.1422523.9262-.001817 1.3728.140436.4466.4149.8373.784908 1.1173l7.028589 5.6141c.03517.0281.06146.0661.07562.1093.01415.0431.01555.0895.00402.1335l-2.41919 8.7094c-.12536.4435-.11321.9155.03479 1.3517.148.4363.42466.8156.79236 1.0864.3677.2708.80858.4199 1.26267.4271.45408.0072.89932-.1279 1.27514-.3869l7.42683-5.0578c.0366-.0256.08-.0394.1244-.0394.0445 0 .0879.0138.1245.0394l7.4268 5.0578c.3707.2679.8144.4118 1.2693.4118.4549 0 .8986-.1439 1.2693-.4118.3678-.2683.6448-.6458.7927-1.0805.148-.4348.1597-.9054.0336-1.3472l-2.4391-8.7398c-.0129-.0439-.0122-.0907.0021-.1342.0142-.0434.0413-.0813.0776-.1086l7.0584-5.6646Z"/><defs><linearGradient id="a" x1="16.5" x2="16.5" y1=".5" y2="32.5" gradientUnits="userSpaceOnUse"><stop stop-color="#FFCE00"/><stop offset="1" stop-color="#FFDD4F"/></linearGradient></defs></svg>'
    },
    6189: function(e, t, n) {
        var a = n(7966);
        e.exports = function(e) {
            return a(e).replace(/\s(\w)/g, (function(e, t) {
                return t.toUpperCase()
            }
            ))
        }
    },
    71788: function(e) {
        e.exports = function(e) {
            return t.test(e) ? e.toLowerCase() : n.test(e) ? (function(e) {
                return e.replace(o, (function(e, t) {
                    return t ? " " + t : ""
                }
                ))
            }(e) || e).toLowerCase() : a.test(e) ? function(e) {
                return e.replace(r, (function(e, t, n) {
                    return t + " " + n.toLowerCase().split("").join(" ")
                }
                ))
            }(e).toLowerCase() : e.toLowerCase()
        }
        ;
        var t = /\s/
          , n = /(_|-|\.|:)/
          , a = /([a-z][A-Z]|[A-Z][a-z])/;
        var o = /[\W_]+(.|$)/g;
        var r = /(.)([A-Z]+)/g
    },
    7966: function(e, t, n) {
        var a = n(71788);
        e.exports = function(e) {
            return a(e).replace(/[\W_]+(.|$)/g, (function(e, t) {
                return t ? " " + t : ""
            }
            )).trim()
        }
    },
    53429: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            Paper: function() {
                return u
            }
        });
        var a = n(16584)
          , o = n(98661)
          , r = n(94184)
          , i = n.n(r)
          , l = {
            root: "root__E2Wac",
            __withBorder: "__withBorder__XIyYj",
            __xsShadow: "__xsShadow__L9hvI",
            __smShadow: "__smShadow__EIgEv",
            __mdShadow: "__mdShadow__uEBsV",
            __lgShadow: "__lgShadow__cKpDQ",
            __xlShadow: "__xlShadow___6Bso",
            __xsRadius: "__xsRadius__W4fGv",
            __smRadius: "__smRadius__tWnn7",
            __mdRadius: "__mdRadius__sog8V",
            __lgRadius: "__lgRadius__yUG69",
            __xlRadius: "__xlRadius__GcR_y",
            __xsPadding: "__xsPadding__yeTJ7",
            __smPadding: "__smPadding__KGOYV",
            __mdPadding: "__mdPadding__Zp9H6",
            __lgPadding: "__lgPadding__HAbL_",
            __xlPadding: "__xlPadding__slFly"
        }
          , s = function(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (a = Object.getOwnPropertySymbols(e); o < a.length; o++)
                    t.indexOf(a[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[o]) && (n[a[o]] = e[a[o]])
            }
            return n
        };
        const u = (0,
        o.forwardRef)(( (e, t) => {
            var {children: n, component: o, radius: r="sm", shadow: u="sm", padding: c, withBorder: d, addClassname: f, addStyle: p} = e
              , h = s(e, ["children", "component", "radius", "shadow", "padding", "withBorder", "addClassname", "addStyle"]);
            const m = o || "div"
              , g = i()({
                [l.root]: !0,
                [l[`__${r}Radius`]]: r,
                [l[`__${c}Padding`]]: c,
                [l[`__${u}Shadow`]]: u,
                [l.__withBorder]: d,
                [f]: f
            });
            return (0,
            a.tZ)(m, Object.assign({
                ref: t,
                className: g
            }, h, {
                style: p,
                children: n
            }))
        }
        ));
        u.displayName = "Paper"
    },
    10457: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            AgentMessageWrap: function() {
                return m
            }
        });
        var a = n(16584)
          , o = (n(98661),
        n(94184))
          , r = n.n(o)
          , i = n(45683)
          , l = n(83549)
          , s = n(80352)
          , u = n(91469)
          , c = n(10904)
          , d = n(41189)
          , f = n(44240)
          , p = n(25095)
          , h = n(99493);
        const m = ({messages: e, children: t, isPreview: n=!1}) => {
            (0,
            l.useErrorCatcher)("AgentMessageWrap");
            const {ref: o, textSize: m, agent: g, isInvoice: _, isAgent: v, isBot: b, isIos: y, isMobile: w, isCobrowse: E, isScrollLower: T, disableBotLabel: S, text: M, type: C} = (0,
            p._)(Array.isArray(e) ? e[0] : e)
              , O = null == g ? void 0 : g.name
              , k = null == g ? void 0 : g.avatarUrl
              , j = k ? (0,
            i.getAvatarApiURL)(k) : ""
              , N = r()({
                [h.Z.main]: !0,
                [h.Z._mobile]: w,
                [h.Z.__chatPage]: s.platform.isChatPage,
                [h.Z._transparent]: n || _,
                [h.Z._noagent]: !v
            })
              , I = {
                "-webkit-text-size-adjust": y ? m : null
            };
            if (!(0,
            f.isEmpty)(M) || "webrtccall" === C || E)
                return (0,
                a.BX)("jdiv", {
                    ref: o,
                    style: I,
                    className: N,
                    children: [(b || O) && !d.V.chatPageYClients && (0,
                    a.tZ)("jdiv", {
                        className: h.Z.agentName,
                        children: b ? (0,
                        a.BX)(a.HY, {
                            children: [O || "Bot", S ? null : (0,
                            a.tZ)("jdiv", {
                                className: h.Z.botBadge,
                                children: "bot"
                            })]
                        }) : O
                    }), (0,
                    a.tZ)("jdiv", {
                        className: r()({
                            [h.Z.avatarBox]: !0,
                            [h.Z.__isAnimated]: T
                        }),
                        title: O,
                        children: b ? (0,
                        a.tZ)(u.k, {
                            url: j
                        }) : (0,
                        a.tZ)(c.Avatar, {
                            dark: !0,
                            expanded: !1,
                            inChat: !0,
                            isMobile: w,
                            inCall: !1,
                            url: j
                        })
                    }), (0,
                    a.tZ)("jdiv", {
                        className: h.Z.content,
                        children: t
                    })]
                })
        }
    },
    98034: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            Preview: function() {
                return d
            }
        });
        var a = n(16584)
          , o = n(98661)
          , r = n(31001)
          , i = n(64607)
          , l = n(80352)
          , s = n(77294)
          , u = n(95140)
          , c = n(63960);
        const d = ({message: e, name: t, src: n, href: d, isAgentMessage: f, onClick: p}) => {
            const h = e.body
              , m = (0,
            o.useRef)(n)
              , g = (0,
            s.getSize)(h)
              , _ = (0,
            u.isGif)({
                mediaExt: h.file_url || h.file || h.name,
                message: e
            })
              , v = (0,
            o.useCallback)(( () => {
                console.log("image loaded")
            }
            ), [])
              , b = (0,
            o.useCallback)((e => {
                e.preventDefault(),
                l.platform.supports.pointer || p(e)
            }
            ), [p]);
            return (0,
            o.useEffect)(( () => {
                if ((0,
                s.isNewMedia)(m.current)) {
                    const e = (0,
                    s.getSize)(h);
                    h.width && h.width < 209 && (e.width = h.width,
                    e.height = null),
                    m.current = `${h.file}?thumb&width=${e.width}`
                }
            }
            ), [m, h]),
            (0,
            a.tZ)("jdiv", {
                className: f ? "" : c.default.mediaWrapper,
                children: (0,
                a.BX)("a", {
                    className: c.default.previewLink,
                    href: d,
                    onPointerUp: p,
                    onTouchStart: b,
                    title: t,
                    target: "_blank",
                    rel: "nofollow noopener noreferrer",
                    children: [(0,
                    a.tZ)("img", {
                        width: g.width || void 0,
                        height: g.height || void 0,
                        onLoad: v,
                        src: m.current,
                        title: t,
                        className: c.default.previewMediaPhoto,
                        loading: "lazy"
                    }), _ && (0,
                    a.tZ)("jdiv", {
                        className: c.default.overlayText,
                        children: "GIF"
                    }), (0,
                    a.tZ)(r.MessageStatusIcon, {
                        className: c.default.time,
                        message: e,
                        colorSet: i.COLORS_SET.DARK,
                        isRenderStatus: !f
                    })]
                })
            })
        }
    },
    50937: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            Preview: function() {
                return h
            }
        });
        var a = n(16584)
          , o = n(98661)
          , r = n(64607)
          , i = n(81152)
          , l = n(31001)
          , s = n(77294)
          , u = n(54072)
          , c = n(52274)
          , d = n(63960);
        const f = (0,
        o.forwardRef)(( ({src: e, title: t, size: n, isNewMedia: o, onError: r, onLoad: i}, l) => {
            const s = o ? `${e}?thumb&width=${n.width || c.MAX_IMAGE_WIDTH}` : e
              , u = (0,
            a.tZ)("img", {
                ref: l,
                className: d.default.previewMediaPhoto,
                title: t,
                src: s,
                width: n.width || void 0,
                height: n.height || void 0,
                loading: "lazy",
                onError: r,
                onLoad: i
            })
              , f = "string" == typeof n.width ? parseInt(n.width, 10) : n.width
              , p = "string" == typeof n.height ? parseInt(n.height, 10) : n.height;
            return f && f <= c.MIN_IMG_WH || p && p <= c.MIN_IMG_WH ? (0,
            a.tZ)("jdiv", {
                className: d.default.smallImage,
                children: u
            }) : u
        }
        ));
        f.displayName = "Image";
        var p = n(63070);
        const h = ({message: e, url: t, isVideo: n, isGif: c, isFromAgentMessage: h, onError: m, onLoadPreview: g}) => {
            const _ = e.body
              , v = _.file
              , b = _.file_name
              , y = _.thumb
              , w = _.status || i.MediaStatus.COMPLETE
              , E = (0,
            o.useRef)(null)
              , T = !(n || w === i.MediaStatus.EXPIRED)
              , S = c && !(null == t ? void 0 : t.endsWith("gif"));
            return (0,
            a.BX)("jdiv", {
                className: h ? d.default.mediaWrapper : d.default.clientMediaWrapper,
                children: [(0,
                a.BX)("a", {
                    className: d.default.previewLink,
                    href: v,
                    title: b,
                    target: "_blank",
                    rel: "nofollow noopener noreferrer",
                    children: [T && (0,
                    a.tZ)(f, {
                        ref: E,
                        src: v,
                        title: b,
                        size: (0,
                        s.getSize)(_),
                        isNewMedia: (0,
                        s.isNewMedia)(y),
                        onError: m,
                        onLoad: () => {
                            null == g || g()
                        }
                    }), S && (0,
                    a.tZ)(u.Z, {
                        file: v,
                        onClick: (e, t) => {
                            (null == E ? void 0 : E.current) && (E.current.src = e,
                            t())
                        }
                    }), (0,
                    a.tZ)(l.MessageStatusIcon, {
                        className: d.default.time,
                        isRenderStatus: !h,
                        message: e,
                        colorSet: r.COLORS_SET.DARK
                    })]
                }), n && (0,
                a.tZ)(p.Z, {
                    title: b,
                    src: v,
                    poster: y,
                    onError: m
                })]
            })
        }
    },
    35636: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            SendAgain: function() {
                return S
            }
        });
        var a = n(16584)
          , o = n(98661)
          , r = n(94184)
          , i = n.n(r)
          , l = n(95421)
          , s = n(81152)
          , u = n(66934)
          , c = n(44145)
          , d = n(65465)
          , f = n(14264)
          , p = n(26932)
          , h = n(6693)
          , m = n(18276)
          , g = n(43417)
          , _ = n(5895)
          , v = "container__gOO0j"
          , b = "__show__EB0tK"
          , y = "__sending__VGbja"
          , w = "send__wDH2d"
          , E = n(38042)
          , T = function(e, t, n, a) {
            return new (n || (n = Promise))((function(o, r) {
                function i(e) {
                    try {
                        s(a.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(e) {
                    try {
                        s(a.throw(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(i, l)
                }
                s((a = a.apply(e, t || [])).next())
            }
            ))
        };
        const S = (0,
        o.memo)(( ({privateId: e, isShow: t}) => {
            const n = (0,
            l.c)()
              , [r,S] = (0,
            o.useState)(!1);
            return (0,
            a.tZ)("jdiv", {
                className: i()(v, {
                    [b]: t,
                    [y]: r
                }),
                children: t && (0,
                a.tZ)(a.HY, {
                    children: r ? `${(0,
                    m.l10n)("error_message_sending")}...` : (0,
                    a.BX)(a.HY, {
                        children: [`${(0,
                        m.l10n)("error_send")}, `, n ? (0,
                        a.tZ)("jdiv", Object.assign({
                            className: w
                        }, (0,
                        g.onClickHandler)(( () => T(void 0, void 0, void 0, (function*() {
                            S(!0);
                            const t = f.default.getMessageByPrivateId(e)
                              , {body: n, private_id: a, type: o, text: r} = t.toJSON();
                            if ((0,
                            E.telemetry)("resend_click"),
                            o === s.MessageType.MEDIA) {
                                const {media: e} = (0,
                                u.getMediaData)(t)
                                  , o = {
                                    name: "client_message",
                                    message: r,
                                    private_id: a,
                                    media: e,
                                    widget_department_id: (0,
                                    c.getClient)().departmentId || null,
                                    is_prechat_btn: Boolean(n.is_prechat)
                                };
                                (0,
                                u.sendMedia)(o),
                                setTimeout(( () => {
                                    (0,
                                    _.checkForDelivered)(t.private_id),
                                    S(!1)
                                }
                                ), h.Timeouts.MESSAGE_SEND_ERROR_TIMEOUT)
                            } else {
                                d.messageActions.sendClientMessage({
                                    text: r,
                                    privateId: a
                                });
                                const {isNotDelivered: e} = yield d.messageActions.checkMessageStatus(a, 3e3);
                                if (S(!1),
                                e)
                                    return
                            }
                            p.messagesDispatchers.updateMessage({
                                privateId: a,
                                messageId: null
                            }, {
                                created_ts: Date.now(),
                                status: s.MessageStatus.SENT
                            }),
                            f.default.sort(),
                            f.default.trigger("update")
                        }
                        )))), {
                            children: (0,
                            m.l10n)("error_resend")
                        })) : (0,
                        m.l10n)("disconnect_msg").toLowerCase()]
                    })
                })
            })
        }
        ))
    },
    32195: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            AgentInviteMessage: function() {
                return p
            }
        });
        var a = n(16584)
          , o = (n(98661),
        n(94184))
          , r = n.n(o)
          , i = n(80352)
          , l = n(18276)
          , s = n(14045)
          , u = n(44145)
          , c = n(80598)
          , d = n(99762)
          , f = n(25648);
        const p = ({message: e}) => {
            const {body: t, private_id: n} = e
              , o = (0,
            u.getAgentById)(+t.from_id);
            if (!o)
                return;
            const p = (0,
            l.l10n)("chat_agent_" + t.action, {
                agent: o.name
            });
            return (0,
            a.BX)("jdiv", {
                className: r()({
                    [f.default.main]: !0,
                    [f.default._mobile]: i.platform.isMobileOrTablet
                }),
                "jv-private-id": n,
                children: ["join" === t.action && (0,
                a.tZ)(d.I, {
                    agentAvatar: o.avatarUrl
                }), (0,
                a.tZ)("jdiv", {
                    className: f.default.text,
                    style: {
                        "-webkit-text-size-adjust": i.platform.isIos ? (0,
                        c.getTextSize)() : null
                    },
                    children: (0,
                    a.tZ)(s.Text, {
                        children: p
                    })
                })]
            })
        }
    },
    10904: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            Avatar: function() {
                return u
            }
        });
        var a = n(16584)
          , o = (n(98661),
        n(94184))
          , r = n.n(o)
          , i = n(57930)
          , l = n(53400)
          , s = n(91153);
        const u = ({url: e=null, headerColor: t=null, expanded: n=!1, dark: o=!0, inCall: u=!1, inChat: c=!1, isMobile: d=!1, isTablet: f=!1, isBot: p=!1}) => {
            const h = e ? {
                backgroundImage: `url(${e})`
            } : {}
              , m = r()({
                [s.Z.avatar]: !0,
                [s.Z._connected]: !c && u,
                [s.Z._expanded]: n,
                [s.Z._mobile]: d,
                [s.Z._tablet]: f,
                [s.Z._chatStyle]: c
            })
              , g = r()({
                [s.Z.avatarImg]: !0,
                [s.Z.__isBot]: !e && p
            })
              , _ = c ? "CHAT" : "HEADER"
              , v = e ? i.Locator[`${_}_AVATAR`] : i.Locator[`${_}_AVATAR_ANON`];
            return (0,
            a.tZ)("jdiv", {
                className: m,
                children: (0,
                a.BX)("jdiv", Object.assign({
                    className: o ? s.Z.darkAvatar : s.Z.lightAvatar
                }, (0,
                l.locator)(v), {
                    children: [(0,
                    a.tZ)("jdiv", {
                        className: g,
                        style: h
                    }), c || p ? null : (0,
                    a.tZ)("jdiv", {
                        className: s.Z.onlineBadge,
                        style: {
                            borderColor: t
                        }
                    })]
                }))
            })
        }
    },
    91469: function(e, t, n) {
        "use strict";
        n.d(t, {
            k: function() {
                return l
            }
        });
        var a = n(16584)
          , o = (n(98661),
        n(94184))
          , r = n.n(o)
          , i = n(91153);
        const l = ({isHeader: e=!1, url: t=null}) => (0,
        a.tZ)("jdiv", {
            className: r()({
                [i.Z.botIcon]: !0,
                [i.Z.__header]: e
            }),
            children: t && (0,
            a.tZ)("jdiv", {
                className: i.Z.img,
                style: {
                    backgroundImage: `url(${t})`
                }
            })
        })
    },
    12796: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            Departments: function() {
                return T
            }
        });
        var a = n(16584)
          , o = (n(98661),
        n(24111))
          , r = n(79105)
          , i = n(26613)
          , l = n(19367)
          , s = n(90061)
          , u = n(21476)
          , c = n(97490)
          , d = n(26932)
          , f = n(94184)
          , p = n.n(f)
          , h = n(53400)
          , m = n(80352)
          , g = "list__wF0Yq"
          , _ = "__showAd__bqKcw"
          , v = "item___ki0I"
          , b = "dot__g_07A"
          , y = "text__Z5LR8";
        const w = ({departments: e, isShowAd: t, onClick: n}) => (0,
        a.tZ)("jdiv", Object.assign({
            className: p()(g, {
                [_]: t && !m.platform.isMobileOrChatpage
            })
        }, (0,
        h.locator)("DEPARTMENTS_LIST"), {
            children: e.map(( ({id: e, name: t}, o) => (0,
            a.BX)("jdiv", Object.assign({
                className: v,
                onClick: () => n(parseInt(e))
            }, (0,
            h.locator)(`DEPARTMENTS_ITEM_${o + 1}`), {
                children: [(0,
                a.tZ)("jdiv", {
                    className: b
                }), (0,
                a.tZ)("jdiv", {
                    className: y,
                    children: t
                })]
            }), e)))
        }))
          , E = (0,
        s.createLogger)("Departments")
          , T = () => {
            const e = (0,
            o.useAppSelector)(r.selectDepartments)
              , t = (0,
            i.isCopyrightEnabled)();
            return (0,
            a.BX)(a.HY, {
                children: [t && (0,
                a.tZ)(l.default, {
                    bottom: !0
                }), e && (0,
                a.tZ)(w, {
                    departments: e,
                    isShowAd: t,
                    onClick: e => {
                        E.log("Selected department", e),
                        d.clientDispatchers.setDepartmentId(e),
                        u.Router.next(c.RouterEvent.Navigate)
                    }
                })]
            })
        }
    },
    74002: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            HeaderPure: function() {
                return je
            }
        });
        var a = n(16584)
          , o = n(98661)
          , r = n(94184)
          , i = n.n(r)
          , l = n(53400)
          , s = n(43417)
          , u = n(80797)
          , c = n(16217)
          , d = n(21579)
          , f = n(54442)
          , p = n(4231)
          , h = n(32183)
          , m = n(51730)
          , g = n(83549)
          , _ = n(60698)
          , v = n(17094)
          , b = n(10838)
          , y = n(27104)
          , w = n(87692)
          , E = n(97490)
          , T = n(80598)
          , S = n(45683)
          , M = n(80352)
          , C = n(88996)
          , O = n(70051)
          , k = n(24111)
          , j = n(97296)
          , N = n(90189)
          , I = n(65138)
          , x = n(69882)
          , R = n(18276)
          , P = n(50754)
          , A = n.n(P)
          , D = n(45926)
          , L = n(44145)
          , B = n(25886)
          , H = n(44240);
        const Z = (e, t, n=!1) => {
            if (e.length > t.length)
                return [];
            const a = [];
            return t.forEach((t => {
                if (e.includes(t.id) && t.isBot === n) {
                    const e = Object.assign(Object.assign({}, t), {
                        avatarUrl: t.avatarUrl || null
                    });
                    a.push(e)
                }
            }
            )),
            a
        }
          , W = () => {
            const e = (0,
            D.getPageWindow)().location.hostname.replace("www.", "");
            if ((0,
            H.isEmpty)(e))
                return (0,
                R.l10n)("lblOperatorsOnline");
            try {
                return A().toUnicode(e)
            } catch (t) {
                return e
            }
        }
          , F = () => {
            const e = (0,
            k.useAppSelector)(N.selectCurrentChat)
              , t = (0,
            k.useAppSelector)(j.T);
            (null == t ? void 0 : t.name) && (t.agentId && (e.joinedAgents = [t.agentId]),
            t.botId && (e.joinedBots = [t.botId]));
            const n = e && e.joinedAgents ? e.joinedAgents : []
              , a = e.joinedBots ? e.joinedBots : []
              , o = (0,
            k.useAppSelector)(I.selectIsOnline)
              , r = (0,
            k.useAppSelector)(w.selectPattern)
              , i = (0,
            k.useAppSelector)(w.selectWidgetColor)
              , l = (0,
            k.useAppSelector)(w.selectWidgetColor2)
              , s = (0,
            k.useAppSelector)(w.selectPowerButtonColor)
              , u = (0,
            k.useAppSelector)(w.selectPowerGradient)
              , d = (0,
            k.useAppSelector)(w.selectPowerButtonPhone)
              , f = (0,
            k.useAppSelector)(w.selectWidgetFontColor)
              , p = (0,
            k.useAppSelector)(w.selectWixAgentDisplayName)
              , h = (0,
            k.useAppSelector)(w.selectWixAgentTitle)
              , m = (0,
            k.useAppSelector)(w.selectOfflineWidgetLabel)
              , g = (0,
            k.useAppSelector)(w.selectOfflineFormTitle)
              , _ = (0,
            k.useAppSelector)(I.selectRoute)
              , b = (0,
            k.useAppSelector)(O.selectAgents)
              , P = (0,
            k.useAppSelector)(N.selectBots)
              , A = (0,
            k.useAppSelector)(C.Fl)
              , D = (e => e === E.Route.CHAT_MIN)(_)
              , H = M.platform.isIos
              , F = M.platform.isTablet || M.platform.isDesktop && M.platform.isChatPage
              , U = Boolean(l && "black" === y.default.getContrast(l))
              , V = _ === E.Route.INTRODUCE
              , z = _ === E.Route.CHAT_MIN
              , q = (0,
            c.isCallActive)()
              , G = [E.Route.INTRODUCE, E.Route.DEPARTMENTS].includes(_) || M.platform.isChatPage && _ === E.Route.CHAT_CALL
              , Y = !M.platform.isDesktop && !M.platform.isChatPage
              , $ = M.platform.isDesktop && !M.platform.isChatPage
              , X = !G && ( () => {
                const {count: e, links: t} = (0,
                B.getJoints)()
                  , n = !!e;
                return (1 !== e || !0 !== t.callback) && !(!M.platform.isChatPage || !n)
            }
            )()
              , J = ((e => ((0,
            c.isCallbackEnabled)() || M.platform.isMobileOrTablet && Boolean(e)) && !(0,
            c.isCallActive)())(d) || A) && (!X || _ === E.Route.CHAT_CALL) && _ !== E.Route.DEPARTMENTS
              , K = (e => "dark" === e)(f)
              , Q = l || i
              , ee = r ? (0,
            S.getPatternURL)(r) : null
              , te = (0,
            v.NW)()
              , {mainText: ne, subText: ae} = ( (e, t, n, a, o, r, i, l, s) => {
                if (!e)
                    return {
                        mainText: o || a,
                        subText: ""
                    };
                const u = (0,
                L.getApp)().route;
                if (u === E.Route.DEPARTMENTS)
                    return {
                        mainText: (0,
                        R.l10n)("lblSelectDep"),
                        subText: ""
                    };
                if (u === E.Route.INTRODUCE && !(0,
                c.isCallActive)())
                    return {
                        mainText: (0,
                        R.l10n)("lblIntroduceRequestBefore"),
                        subText: ""
                    };
                if ((0,
                x.isWixEditor)() && (t || n))
                    return {
                        mainText: t || (0,
                        R.l10n)("lblConnectedToAgent"),
                        subText: n || (0,
                        R.l10n)("lblOperatorsOnline")
                    };
                const d = Z(r, i, !1)
                  , f = Z(l, s, !0);
                if (1 === d.length)
                    return {
                        mainText: d[0].name || "",
                        subText: d[0].title || ""
                    };
                if (d.length > 3)
                    return {
                        mainText: W(),
                        subText: ""
                    };
                if (d.length > 1) {
                    const e = [];
                    return d.forEach((t => {
                        var n;
                        e.push((null === (n = t.name) || void 0 === n ? void 0 : n.replace(/ /g, " ")) || "")
                    }
                    )),
                    {
                        mainText: e.join(", "),
                        subText: ""
                    }
                }
                return f.length ? {
                    mainText: f[0].name || "",
                    subText: f[0].title || ""
                } : {
                    mainText: (0,
                    R.l10n)("lblConnectedToAgent"),
                    subText: (0,
                    R.l10n)("lblOperatorsOnline")
                }
            }
            )(o, p, h, m, g, n, b, a, P)
              , oe = ( (e, t, n, a) => {
                const o = Z(e, t)
                  , r = Z(n, a, !0);
                if (o.length || r.length)
                    return o.length ? o.map((e => ({
                        url: e.avatarUrl ? (0,
                        S.getAvatarApiURL)(e.avatarUrl) : null
                    }))) : r.map((e => ({
                        url: e.avatarUrl ? (0,
                        S.getAvatarApiURL)(e.avatarUrl) : null
                    })));
                return []
            }
            )(n, b, a, P);
            return {
                isOnline: o,
                color: i,
                joinedBots: a,
                mainText: ne,
                subText: ae,
                avatars: oe,
                background: (0,
                T.getBackground)(i, l, u, s, M.platform.isMobileOrTablet),
                showBackButton: Y,
                showCallButton: J,
                showLeaf: $,
                showMenu: X,
                isChatPage: M.platform.isChatPage,
                isPowerPhone: (0,
                v.Ws)(),
                isClickable: D,
                isIOS: H,
                isTablet: F,
                isLightColor2: U,
                isIntroduce: V,
                isChatMin: z,
                inCall: q,
                darkText: K,
                leafBackground: Q,
                patternUrl: ee,
                powerPhone: te
            }
        }
        ;
        var U = "headerBox__PdVjy"
          , V = "__mobile__Ve_iQ"
          , z = "hideCorners__E8hJ_"
          , q = "header__HxTxZ"
          , G = "info__gOJf2"
          , Y = "_expanded__Q0niA"
          , $ = "_light__ws4An"
          , X = "title__DDdr4"
          , J = "agentName__s5DNF"
          , K = "_dark__GjqAO"
          , Q = "_offline__S9XLV"
          , ee = "callMe__PsT39"
          , te = "_mobile__AFhej"
          , ne = "__ios__Cow7U"
          , ae = "headerContainer__X8_bJ"
          , oe = "__chatpage__kmESp"
          , re = "_tablet__TTp8M"
          , ie = "closeBox__T4hRn"
          , le = "__call__SibPG"
          , se = "callIcon__DBc4_"
          , ue = "__showContent__uWI8W"
          , ce = "__agents__Z9Rtj"
          , de = "mobileBack__f5UoM"
          , fe = "pattern__I7_FD"
          , pe = "menuButtonWrap__vHqfx"
          , he = "menuIcon__IbJsn"
          , me = "toDebugPanel__wJlLv"
          , ge = "_leftButton__zmg6C"
          , _e = "_rightButton__JOFiF"
          , ve = n(10904)
          , be = n(91153);
        const ye = ({urls: e, bgColor: t, dark: n=!1, expanded: o=!1, inCall: r=!1, inChat: l=!1, isMobile: s=!1, isTablet: u=!1}) => {
            const c = `_width${e.length}`
              , d = i()({
                [be.Z.avatar]: !0,
                [be.Z._connected]: !l && r,
                [be.Z._expanded]: o,
                [be.Z._mobile]: s,
                [be.Z._tablet]: u,
                [be.Z._chatStyle]: l,
                [be.Z[c]]: !0
            });
            return (0,
            a.tZ)("jdiv", {
                className: d,
                children: (0,
                a.tZ)("jdiv", {
                    className: be.Z.avatarList,
                    children: e.map(( (o, r) => e.length > 3 && r === e.length - 1 ? (0,
                    a.tZ)("jdiv", {
                        className: i()({
                            [be.Z.dotsItem]: !0,
                            [be.Z._dark]: n,
                            [be.Z._light]: !n
                        }),
                        style: {
                            borderColor: t
                        },
                        children: (0,
                        a.tZ)("jdiv", {
                            children: "..."
                        })
                    }, r) : (0,
                    a.tZ)("jdiv", {
                        className: i()({
                            [be.Z.avatarItem]: !0,
                            [be.Z.darkAvatar]: n,
                            [be.Z.lightAvatar]: !n
                        }),
                        style: {
                            backgroundColor: t,
                            borderColor: t
                        },
                        children: (0,
                        a.tZ)("jdiv", {
                            className: be.Z.avatarListImg,
                            style: {
                                backgroundImage: o ? `url(${o})` : null
                            }
                        })
                    }, r)))
                })
            })
        }
          , we = ({isIntroduce: e, isOnline: t, avatars: n, joinedBots: o, inCall: r, color: i, background: l, showLeaf: s, isClickable: u, isTablet: c, darkText: d}) => {
            if (e || !t || 0 === n.length || n.length > 3)
                return null;
            if (1 === n.length) {
                const e = n[0].url || null
                  , t = !(!o || !o.length);
                return (0,
                a.tZ)(ve.Avatar, {
                    dark: d,
                    expanded: u,
                    isMobile: !s,
                    inCall: r,
                    url: e,
                    headerColor: i,
                    isBot: t
                })
            }
            {
                const e = n.map((e => e.url));
                return (0,
                a.tZ)(ye, {
                    bgColor: l,
                    urls: e,
                    dark: d,
                    expanded: u,
                    inCall: r,
                    isMobile: !s,
                    isTablet: c
                })
            }
        }
        ;
        var Ee = n(28122)
          , Te = n(48177);
        const Se = ({showLeaf: e, darkText: t}) => e ? (0,
        a.tZ)("jdiv", {
            className: se
        }) : (0,
        a.tZ)(Te.SvgIcon, {
            icon: Ee.default,
            color: t ? "#272433" : "#fff",
            className: se
        })
          , Me = ({showIcon: e, showCallButton: t, isWidgetConstructor: n, isPowerPhone: o, powerPhone: r, showLeaf: i, darkText: u}) => e || !t || n ? null : o ? (0,
        a.tZ)("a", Object.assign({
            href: r,
            className: ee
        }, (0,
        s.onClickHandler)(v.ss), (0,
        l.locator)("HEADER_CALLBACK_BUTTON"), {
            children: (0,
            a.tZ)(Se, {
                showLeaf: i,
                darkText: u
            })
        })) : (0,
        a.tZ)("jdiv", Object.assign({
            className: ee
        }, (0,
        s.onClickHandler)(v.ss, !0, !0), (0,
        l.locator)("HEADER_CALLBACK_BUTTON"), {
            children: (0,
            a.tZ)(Se, {
                showLeaf: i,
                darkText: u
            })
        }));
        var Ce = n(34948);
        const Oe = ({showLeaf: e, showBackButton: t, darkText: n}) => e || !t ? null : (0,
        a.tZ)("jdiv", Object.assign({
            className: ie
        }, (0,
        s.onClickHandler)(( () => (0,
        v.B6)(!1)), !0, !0), (0,
        l.locator)("HEADER_CLOSE"), {
            children: (0,
            a.tZ)(Te.SvgIcon, {
                icon: Ce.default,
                color: n ? "#272433" : "#fff",
                className: de
            })
        }));
        const ke = ({showIcon: e, showLeaf: t, darkText: n, isLightColor2: o, onToggleMenu: r}) => e ? (0,
        a.tZ)("jdiv", Object.assign({
            className: pe
        }, (0,
        s.onClickHandler)(( () => r(!0)), !0, !0), (0,
        l.locator)("HEADER_CALLBACK_BUTTON"), {
            children: t ? (0,
            a.tZ)("jdiv", {
                className: he
            }) : (0,
            a.tZ)(Te.SvgIcon, {
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="_COLOR1_" d="M14 12v1.5H3V12h11zm0-5v1.5H3V7h11zm0-5v1.5H3V2h11z" fill-rule="evenodd"/></svg>',
                color: n || o ? "#272433" : "#fff",
                className: he
            })
        })) : null
          , je = ({showBody: e}) => {
            (0,
            g.useErrorCatcher)("HeaderPure");
            const {isWidgetConstructor: t} = (0,
            u.useWidgetConstructorContext)()
              , [n,r] = (0,
            f.useToggle)(!1)
              , [y,w] = (0,
            o.useState)(!1)
              , E = (0,
            o.useRef)(null)
              , T = (0,
            o.useRef)(null)
              , S = (0,
            o.useRef)(null)
              , {isOnline: M, color: C, joinedBots: O, mainText: k, subText: j, avatars: N, background: I, showBackButton: x, showCallButton: R, showLeaf: P, showMenu: A, isChatPage: D, isPowerPhone: L, isClickable: B, isIOS: H, isTablet: Z, isLightColor2: W, isIntroduce: ee, inCall: ie, darkText: se, leafBackground: de, patternUrl: pe, powerPhone: ve} = F();
            (0,
            _.K)(T, ( () => (0,
            v.B6)(!0))),
            (0,
            p.useClickOutside)(S, (e => {
                e.target && !(0,
                h.hasClass)(e.target, he) && r(!1)
            }
            ));
            const be = i()(q, {
                [Y]: B,
                [$]: !se,
                [K]: se,
                [te]: !P,
                [ne]: H,
                [re]: Z,
                [Q]: !M,
                [ue]: e
            });
            return (0,
            a.tZ)("jdiv", Object.assign({
                ref: E,
                className: i()(U, {
                    [z]: !1,
                    [V]: !P
                }),
                style: {
                    background: I
                }
            }, (0,
            l.locator)("HEADER"), {
                children: (0,
                a.BX)("jdiv", {
                    className: i()({
                        [fe]: pe
                    }),
                    style: {
                        backgroundImage: pe ? `url(${pe})` : void 0
                    },
                    children: [P ? (0,
                    a.tZ)(b.Leaf, Object.assign({
                        orientation: "bottom",
                        backgroundColor: de,
                        online: M
                    }, (0,
                    s.onClickHandler)(v.u1), {
                        qaId: "HEADER_LEAF"
                    })) : null, (0,
                    a.BX)("jdiv", Object.assign({
                        className: be
                    }, (0,
                    s.onClickHandler)(v.Bq, !1, !1), {
                        children: [(0,
                        a.BX)("jdiv", {
                            className: i()(ae, {
                                [oe]: D
                            }),
                            children: [(0,
                            a.tZ)(we, {
                                isIntroduce: ee,
                                isOnline: M,
                                avatars: N,
                                joinedBots: O,
                                inCall: ie,
                                color: C,
                                background: I,
                                showLeaf: P,
                                isClickable: B,
                                isTablet: Z,
                                darkText: se
                            }), (0,
                            a.BX)("jdiv", Object.assign({
                                className: G
                            }, (0,
                            l.locator)("HEADER_TEXT"), {
                                children: [P ? null : (0,
                                a.tZ)("jdiv", Object.assign({
                                    ref: T,
                                    className: i()({
                                        [me]: !0,
                                        [ge]: x,
                                        [_e]: A || R
                                    })
                                }, D && (0,
                                s.onClickHandler)(v.u1))), (0,
                                a.tZ)(( () => (0,
                                a.tZ)("jdiv", Object.assign({
                                    className: i()({
                                        [J]: !0,
                                        [ce]: !j,
                                        [le]: R || A
                                    })
                                }, (0,
                                l.locator)("HEADER_AGENT_NAME"), {
                                    children: k
                                }))), {}), (0,
                                a.tZ)(( () => j ? (0,
                                a.tZ)("jdiv", Object.assign({
                                    className: i()({
                                        [X]: !0,
                                        [le]: R
                                    })
                                }, (0,
                                l.locator)("HEADER_AGENT_POSITION"), {
                                    children: j
                                })) : null), {})]
                            }))]
                        }), (0,
                        a.tZ)(Me, {
                            showIcon: y,
                            showCallButton: R,
                            isWidgetConstructor: t,
                            isPowerPhone: L,
                            powerPhone: ve,
                            showLeaf: P,
                            darkText: se
                        }), (0,
                        c.isCallbackEnabled)() && (0,
                        a.tZ)(d.CallbackLazy, {
                            type: "chat",
                            onClose: () => {
                                r(!1),
                                null === v.ss || void 0 === v.ss || (0,
                                v.ss)()
                            }
                        }), (0,
                        a.tZ)(Oe, {
                            showLeaf: P,
                            showBackButton: x,
                            darkText: se
                        }), (0,
                        a.tZ)(ke, {
                            showIcon: y,
                            showLeaf: P,
                            darkText: se,
                            isLightColor2: W,
                            onToggleMenu: r
                        }), A ? (0,
                        a.tZ)("jdiv", {
                            ref: S,
                            children: (0,
                            a.tZ)(m.c, {
                                show: n,
                                onCancelClick: () => {
                                    r(!1)
                                }
                                ,
                                onLoad: () => {
                                    w(!0)
                                }
                            })
                        }) : null]
                    }))]
                })
            }))
        }
    },
    17094: function(e, t, n) {
        "use strict";
        n.d(t, {
            B6: function() {
                return _
            },
            Bq: function() {
                return v
            },
            NW: function() {
                return m
            },
            Ws: function() {
                return h
            },
            ss: function() {
                return g
            },
            u1: function() {
                return b
            }
        });
        var a = n(21476)
          , o = n(97490)
          , r = n(26932)
          , i = n(44145)
          , l = n(90061)
          , s = n(50402)
          , u = n(138)
          , c = n(34930)
          , d = n(80352)
          , f = n(38042);
        const p = (0,
        l.createLogger)("HeaderContainer")
          , h = () => Boolean(!(0,
        i.getCallback)().available && (0,
        i.getUserSettings)().powerButtonPhone && d.platform.isMobileOrChatpage)
          , m = () => `tel:${(0,
        i.getUserSettings)().powerButtonPhone}`
          , g = () => {
            p.log("onCallClick");
            const e = a.Router.getCurrentRoute();
            h() ? u.default.trackMobileCallClick() : e === o.Route.CHAT_MIN ? (a.Router.next(o.RouterEvent.ToCall),
            r.transitionDispatchers.startTransition(s.ScriptName.MAXIMIZE_WIDGET)) : a.Router.getCurrentRoute() === o.Route.CHAT_CALL ? a.Router.next(o.RouterEvent.ToChat) : a.Router.next(o.RouterEvent.ToCall)
        }
          , _ = e => {
            (0,
            c.closeWidget)(),
            a.Router.next(o.RouterEvent.CloseWindow),
            (0,
            f.telemetry)("mobile_chat_close", {
                param1: e ? "bySwipeDown" : "byTap"
            })
        }
          , v = () => {
            (0,
            i.getApp)().route === o.Route.CHAT_MIN && (r.appDispatchers.setAppIsFocused(!0),
            a.Router.next(o.RouterEvent.Navigate),
            r.transitionDispatchers.startTransition(s.ScriptName.MAXIMIZE_WIDGET))
        }
          , b = () => {
            a.Router.next(o.RouterEvent.ToDebug)
        }
    },
    60698: function(e, t, n) {
        "use strict";
        n.d(t, {
            K: function() {
                return c
            }
        });
        var a = n(75686)
          , o = n(21476)
          , r = n(70859)
          , i = n(80352)
          , l = n(98661);
        var s = n(97490);
        const u = e => {
            const t = a.default.get(r.Component.MOBILE_CONTAINER);
            t && t.style && t.style.setProperty("transform", e ? `translateY(${Math.abs(e)}px)` : null, "important")
        }
          , c = (e, t) => {
            ( ({element: e, onLeftSwipe: t, onRightSwipe: n, onUpSwipe: a, onDownSwipe: o, onDownCount: r, onTouchEnd: i, verticalSwipeThreshold: s=70, horizontalSwipeThreshold: u=30}) => {
                const [c,d] = (0,
                l.useState)(null)
                  , f = (0,
                l.useRef)(null)
                  , p = (0,
                l.useRef)(null);
                (0,
                l.useEffect)(( () => {
                    if (!e || !e.current)
                        return;
                    if (d(e.current),
                    !c)
                        return;
                    if (!c.addEventListener)
                        return;
                    const l = e => {
                        const t = e.touches[0];
                        f.current = t.clientX,
                        p.current = t.clientY
                    }
                      , h = e => {
                        if (!f.current || !p.current)
                            return;
                        const i = e.touches[0];
                        if (!i)
                            return;
                        const l = i.clientX
                          , c = i.clientY
                          , d = f.current - l
                          , h = p.current - c;
                        Math.abs(d) > Math.abs(h) ? d > u ? n && n() : d < -u && t && t() : h > s ? a && a() : h < -s ? o && o(h) : r && r(h)
                    }
                      , m = () => {
                        f.current = null,
                        p.current = null,
                        i && i()
                    }
                    ;
                    return c.addEventListener("touchstart", l, !1),
                    c.addEventListener("touchmove", h, !1),
                    c.addEventListener("touchend", m, !1),
                    () => {
                        c.removeEventListener("touchstart", l),
                        c.removeEventListener("touchmove", h),
                        c.removeEventListener("touchend", m)
                    }
                }
                ), [e, c, t, n, a, o, r, i, s, u])
            }
            )({
                element: !i.platform.isChatPage && i.platform.isMobileOrTablet ? e : null,
                horizontalSwipeThreshold: 120,
                onDownSwipe: () => {
                    t && t(!0)
                }
                ,
                onLeftSwipe: () => {}
                ,
                onDownCount: e => {
                    o.Router.debugClicks = 0,
                    u(e)
                }
                ,
                onTouchEnd: () => {
                    u(0),
                    o.Router.next(s.RouterEvent.ToDebug)
                }
            })
        }
    },
    84749: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            SendIcon: function() {
                return u
            }
        });
        var a = n(16584)
          , o = (n(98661),
        n(94184))
          , r = n.n(o)
          , i = n(43417)
          , l = n(36874)
          , s = n(48177);
        const u = ({isMobile: e, disabled: t, onClick: n, hasError: o, theme: u, styles: c}) => (u.color = o || t ? "#f1f0f0" : u.color,
        (0,
        a.tZ)("jdiv", Object.assign({}, (0,
        i.onClickHandler)(n), {
            children: (0,
            a.tZ)(s.SvgIcon, {
                icon: e ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="_COLOR1_" fill-rule="evenodd"><path fill="_COLOR2_" fill-rule="nonzero" d="m11.35 22.482.697-4.32 8.84-2.16-8.84-2.16-.697-4.32 13.355 6.48-13.355 6.48zm.301.65c-.513.25-1.087-.194-.995-.768l.697-4.32a.713.713 0 0 1 .53-.583l8.841-2.16v1.4l-8.84-2.16a.713.713 0 0 1-.531-.582l-.697-4.32c-.092-.574.482-1.017.995-.768l13.355 6.48c.537.26.537 1.041 0 1.301l-13.355 6.48z"/></g></svg>' : '<svg width="34" height="34" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="_COLOR1_" cx="17" cy="17" r="17"/><g transform="translate(10 9)" fill="#FFF"><rect x="6" y="2" width="2" height="14" rx="1"/><rect transform="rotate(-45 9.879 4.879)" x="8.879" y="-.121" width="2" height="10" rx="1"/><rect transform="scale(-1 1) rotate(-45 0 15)" x="3.2" y="0" width="2" height="10" rx="1"/></g></g></svg>\n',
                color: u.color,
                color2: o ? "#dedede" : l.colorsFromFigma.WHITE_100,
                hoverColor: o ? void 0 : u.hoverColor,
                className: r()({
                    [c.sendButton]: !0,
                    [c.__disabled]: o || t
                }),
                qaId: "INPUT_SUBMIT",
                style: {
                    backgroundColor: u.color
                }
            })
        })))
    },
    52661: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            CloseIcon: function() {
                return m
            },
            ReplyIcon: function() {
                return d
            }
        });
        var a = n(16584)
          , o = (n(98661),
        n(94184))
          , r = n.n(o)
          , i = n(48177)
          , l = n(24111)
          , s = n(79105)
          , u = "icon__WGtbC";
        const c = {
            green: "#18c139",
            blue: "#0b82f7",
            grey: "#445669"
        }
          , d = ({className: e, title: t, withoutBubbleColor: n}) => {
            const o = (0,
            l.useAppSelector)(s.selectBubbleColor);
            return (0,
            a.tZ)(i.SvgIcon, {
                className: r()(u, e),
                color: n ? "currentColor" : c[o],
                icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="_COLOR1_" d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11Z"/></svg>',
                title: t
            })
        }
        ;
        var f = n(40704)
          , p = "icon__a6XAb";
        const h = {
            green: "#18c139",
            blue: "#0b82f7",
            grey: "#445669"
        }
          , m = ({className: e, title: t, withoutBubbleColor: n}) => {
            const o = (0,
            l.useAppSelector)(s.selectBubbleColor);
            return (0,
            a.tZ)(f.default, {
                className: r()(p, e),
                color: n ? "currentColor" : h[o],
                iconName: "icon-close",
                title: t
            })
        }
    },
    60067: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            Introduce: function() {
                return te
            }
        });
        var a = n(16584)
          , o = n(98661)
          , r = n(87536)
          , i = n(2305)
          , l = n(83549)
          , s = n(75686)
          , u = n(90061)
          , c = n(19367)
          , d = n(26932)
          , f = n(23336)
          , p = n(15787)
          , h = n(21476)
          , m = n(97490)
          , g = n(33813)
          , _ = n(96394)
          , v = n(45691)
          , b = n(81351)
          , y = n(44240)
          , w = n(93907)
          , E = n(53130)
          , T = n(18166)
          , S = n(87826)
          , M = n(38042)
          , C = n(47367)
          , O = n(24111)
          , k = n(79105)
          , j = n(97979)
          , N = n(65138)
          , I = n(95421)
          , x = n(26613)
          , R = n(99915)
          , P = n(80352);
        var A = n(94184)
          , D = n.n(A)
          , L = n(38669)
          , B = n(18276)
          , H = n(60478)
          , Z = n(3501)
          , W = n(52274)
          , F = "container__MgJl1"
          , U = "input__CeQtn"
          , V = "checkbox__LJx4s"
          , z = "__hidden__NOYNd"
          , q = "checkboxForm__UTL6m"
          , G = "checkboxTextWrapper__r67qO"
          , Y = "checkboxText__e9OPZ"
          , $ = "button__xCuvr"
          , X = "helloBox__Iljw2";
        const J = (0,
        o.forwardRef)(( ({control: e, fields: t, departmentsOptions: n, clientPhone: r, isMobile: i, isEULA: l, isMailing: s, isOnline: u, onCountryChange: c, onSubmit: d}, f) => {
            const p = (0,
            o.useMemo)(( () => t.filter((e => e.show && "message" !== e.name)).length), []);
            return (0,
            o.useEffect)(( () => {
                var e;
                if (!i) {
                    const t = f;
                    if (!t || !t.current)
                        return;
                    null === (e = t.current.querySelector("input")) || void 0 === e || e.focus()
                }
            }
            ), []),
            (0,
            a.BX)("jdiv", {
                ref: f,
                className: F,
                children: [p < 2 && (0,
                a.tZ)("jdiv", {
                    className: X,
                    children: (0,
                    a.tZ)(Z.default, {
                        icon: "1f44b",
                        className: "emojiMessages",
                        alone: !0
                    })
                }), t.map(( ({name: t, required: o, title: i, show: l, attribute_type: s, settings: u}) => {
                    if (!l || "country" === t)
                        return null;
                    const d = (0,
                    w.Ql)(null != s ? s : t)
                      , f = i || (0,
                    w.ph)(t)
                      , p = `CONTACTS_FORM_${t.toUpperCase()}${o ? "_REQUIRED" : ""}`
                      , h = (null == u ? void 0 : u.options) && u.options.length > 0 ? u.options.map((e => ({
                        value: e,
                        label: e
                    }))) : null;
                    return "departmentId" === t ? (0,
                    a.tZ)(H.Ph, {
                        control: e,
                        name: t,
                        containerClassName: U,
                        options: n,
                        label: (0,
                        B.l10n)("lblSelectDep"),
                        qaId: p
                    }, t) : "number" === d ? (0,
                    a.tZ)(H.Y2, {
                        control: e,
                        name: t,
                        containerClassName: U,
                        label: f,
                        required: o,
                        maxLength: W.MAX_ATTRIBUTE_NUMBER_LENGTH,
                        qaId: p
                    }, t) : "date" === d ? (0,
                    a.tZ)(H.Wr, {
                        control: e,
                        name: t,
                        containerClassName: U,
                        label: f,
                        required: o,
                        qaId: p
                    }, t) : "list" === d && h ? (0,
                    a.tZ)(H.Ph, {
                        control: e,
                        name: t,
                        options: h,
                        containerClassName: U,
                        label: f,
                        required: o,
                        showSearch: !0,
                        showReset: !0,
                        searchPlaceholder: (0,
                        B.l10n)("attribute_list_search_placeholder"),
                        qaId: p
                    }, t) : "checkbox" === d ? (0,
                    a.tZ)(H.XZ, {
                        control: e,
                        name: t,
                        labelClassName: q,
                        textClassName: G,
                        label: (0,
                        a.tZ)("jdiv", {
                            className: Y,
                            children: f
                        }),
                        required: o,
                        qaId: p
                    }, t) : "phone" === t ? (0,
                    a.tZ)(H.sb, {
                        control: e,
                        name: t,
                        containerClassName: U,
                        watchValue: r,
                        label: f,
                        required: o,
                        onCountryChange: c,
                        qaId: p
                    }, t) : (0,
                    a.tZ)(H.II, {
                        control: e,
                        name: t,
                        containerClassName: U,
                        type: d,
                        label: f,
                        required: o,
                        maxLength: s ? W.MAX_ATTRIBUTE_STRING_LENGTH : void 0,
                        qaId: p
                    }, t)
                }
                )), l && (0,
                a.tZ)(H.wc, {
                    control: e,
                    name: "eula",
                    labelClassName: V,
                    required: !0,
                    qaId: "CONTACTS_FORM_EULA",
                    telemetryLinkParams: {
                        param1: "from_introduce"
                    }
                }), (0,
                a.tZ)(H._M, {
                    control: e,
                    name: "mailing",
                    labelClassName: D()(V, {
                        [z]: !s
                    }),
                    qaId: "CONTACTS_FORM_MAILING",
                    telemetryLinkParams: {
                        param1: "from_introduce"
                    }
                }), (0,
                a.tZ)(L.Button, {
                    size: "md",
                    tabIndex: 0,
                    className: $,
                    fullWidth: !0,
                    disabled: !u,
                    qaId: "CONTACTS_FORM_SUBMIT",
                    onClick: d,
                    onKeyDown: e => {
                        "Enter" === e.key && d()
                    }
                    ,
                    children: (0,
                    B.l10n)("lblSendBefore")
                })]
            })
        }
        ));
        J.displayName = "IntroduceForm";
        var K = "container__zhk3z";
        const Q = ({children: e}) => (0,
        a.tZ)("jdiv", {
            className: K,
            children: e
        })
          , ee = (0,
        u.createLogger)("Introduce")
          , te = () => {
            (0,
            l.useErrorCatcher)("Introduce");
            const {client: e, formShape: t, messageText: n, departmentsOptions: u, hasEULA: A, isMailingEnabled: D, hasNetworkConnection: L, hasCopyright: B, isMobile: H, isAppOnline: Z} = ( () => {
                const e = (0,
                R.R)()
                  , t = (0,
                O.useAppSelector)(N.selectIsOnline)
                  , n = (0,
                O.useAppSelector)(j.selectClient)
                  , a = (0,
                O.useAppSelector)(k.selectEula)
                  , r = (0,
                O.useAppSelector)(k.selectMailing)
                  , i = (0,
                O.useAppSelector)(k.selectDepartments)
                  , l = Boolean(r)
                  , s = n.inputText || n.lastMessage || ""
                  , u = (0,
                I.c)()
                  , c = Boolean(a && !n.eulaAccepted)
                  , d = (0,
                x.isCopyrightEnabled)()
                  , f = P.platform.isMobileOrTablet
                  , p = (0,
                o.useMemo)(( () => (0,
                w.dc)({
                    client: n,
                    departments: i,
                    settings: e,
                    isEULA: c,
                    isMailing: l
                })), [n, c, l])
                  , h = (0,
                o.useMemo)(( () => i ? i.map(( ({id: e, name: t}) => ({
                    value: e,
                    label: t
                }))) : []), [i]);
                return {
                    client: n,
                    formShape: p,
                    messageText: s,
                    departmentsOptions: h,
                    hasNetworkConnection: u,
                    hasEULA: c,
                    isMailingEnabled: l,
                    hasCopyright: d,
                    isMobile: f,
                    isAppOnline: t
                }
            }
            )()
              , W = (0,
            o.useRef)(null)
              , {control: F, watch: U, getValues: V, setValue: z, handleSubmit: q, formState: {errors: G, defaultValues: Y}} = (0,
            r.cI)({
                defaultValues: t.values,
                resolver: (0,
                i.X)(t.resolver),
                mode: "onChange"
            })
              , $ = (0,
            T.X)({
                values: U(["email", "phone"]),
                isMailingEnabled: D,
                mailing: e.mailing
            }, Y)
              , X = q(( () => {
                const n = V();
                if (ee.log("BEFORE CHAT CONTACTS", n),
                (0,
                M.telemetry)("chat_introduce", {
                    param1: "formSubmit",
                    param2: (0,
                    w.OQ)()
                }),
                n.departmentId && d.clientDispatchers.setDepartmentId(parseInt(n.departmentId)),
                A && (0,
                S.D)(),
                D && (n.mailing ? (0,
                E.O)(n) : (0,
                E.f)(n)),
                null === _.default || void 0 === _.default ? void 0 : _.default.enable_client_attributes) {
                    const a = t.fields.filter(( ({attribute_type: e}) => e)).reduce(( (e, t) => {
                        if (!n[t.name])
                            return e;
                        const a = n[t.name];
                        return e[t.name] = "date" === t.attribute_type ? (0,
                        C.Al)(a) : a,
                        e
                    }
                    ), {});
                    (0,
                    y.isEmpty)(a) || (0,
                    v.sendClientAttributes)(a, e.clientId)
                }
                (0,
                f.reportCampaignContactsStat)(),
                d.clientDispatchers.setIsIntroduced(!0),
                (0,
                p.sendIntroduceAndMessage)(n, n.message),
                h.Router.next(m.RouterEvent.Submit),
                setTimeout(( () => {
                    (0,
                    g.fixSafariKeyframes)(!0)
                }
                ), 0)
            }
            ), ( () => {
                (0,
                w.ql)(Z, G)
            }
            ));
            return (0,
            o.useEffect)(( () => {
                const t = V();
                ["name", "email", "phone"].forEach((n => {
                    const a = e[n];
                    n in t && !(0,
                    y.isNil)(a) && a !== t[n] && (("email" === n || "phone" === n) && D && e.mailing[n] && (0,
                    E.f)(t),
                    z(n, a, {
                        shouldDirty: !0,
                        shouldValidate: !0
                    }))
                }
                ))
            }
            ), [e.name, e.email, e.phone, e.mailing, D]),
            (0,
            o.useEffect)(( () => {
                if (!e.attributes)
                    return;
                const n = V();
                t.attributeKeys.forEach((t => {
                    var a;
                    e.attributes && t in n && !(0,
                    y.isNil)(e.attributes[t]) && n[t] !== e.attributes[t] && z(t, null !== (a = e.attributes[t]) && void 0 !== a ? a : "", {
                        shouldDirty: !0,
                        shouldValidate: !0
                    })
                }
                ))
            }
            ), [e.attributes]),
            (0,
            o.useEffect)(( () => {
                s.default.set("Introduce", W.current),
                n && z("message", n),
                (0,
                M.telemetry)("chat_introduce", {
                    param1: "show",
                    param2: (0,
                    w.OQ)()
                })
            }
            ), []),
            (0,
            a.BX)(Q, {
                children: [(0,
                a.tZ)(b.DisconnectAlert, {}), B && (0,
                a.tZ)(c.default, {
                    bottom: !0
                }), (0,
                a.tZ)(J, {
                    ref: W,
                    control: F,
                    fields: t.fields,
                    departmentsOptions: u,
                    clientPhone: e.phone,
                    isMobile: H,
                    isEULA: A,
                    isMailing: $,
                    isOnline: L,
                    onCountryChange: e => {
                        z("country", e)
                    }
                    ,
                    onSubmit: X
                })]
            })
        }
        ;
        te.displayName = "Introduce"
    },
    31001: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            MessageStatusIcon: function() {
                return g
            }
        });
        var a = n(16584)
          , o = (n(98661),
        n(94184))
          , r = n.n(o)
          , i = n(43832)
          , l = n(81152)
          , s = n(30295)
          , u = n(4867)
          , c = n(18276)
          , d = n(48177)
          , f = "baseBox__EpcxN"
          , p = "icon__bHqzo"
          , h = n(64607)
          , m = function(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (a = Object.getOwnPropertySymbols(e); o < a.length; o++)
                    t.indexOf(a[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[o]) && (n[a[o]] = e[a[o]])
            }
            return n
        };
        const g = e => {
            var {className: t, colorSet: n, message: o, isRenderStatus: g=!1} = e
              , _ = m(e, ["className", "colorSet", "message", "isRenderStatus"]);
            const v = o instanceof u.default ? o.toJSON() : o
              , {status: b, created_ts: y, updated_ts: w, type: E, body: T} = v
              , S = (0,
            s.default)(y, "H:MM")
              , M = (0,
            s.default)(w, "H:MM")
              , C = (0,
            h.defineIcon)({
                colorSet: n,
                status: b,
                mediaStatus: E === l.MessageType.MEDIA ? null == T ? void 0 : T.status : E,
                type: E
            })
              , O = {
                check: i.Z,
                checks: '<svg width="14" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 1.084 9.678.262 5.979 3.96l.823.823L10.5 1.084Zm2.473-.822L6.802 6.433 4.363 4.001l-.822.822L6.8 8.084l7-7-.828-.822ZM.24 4.823 3.5 8.084l.823-.822L1.068 4l-.829.822Z" fill="_COLOR1_"/></svg>',
                clock: '<svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.994.166A5.83 5.83 0 0 0 .167 5.999a5.83 5.83 0 0 0 5.827 5.834 5.837 5.837 0 0 0 5.84-5.834A5.837 5.837 0 0 0 5.993.166ZM6 10.666a4.665 4.665 0 0 1-4.667-4.667A4.665 4.665 0 0 1 6 1.333a4.665 4.665 0 0 1 4.667 4.666A4.665 4.665 0 0 1 6 10.666Zm.292-7.583h-.875v3.5L8.479 8.42l.438-.717-2.625-1.558V3.083Z" fill="_COLOR1_"/></svg>'
            }
              , k = C ? O[C.iconName] : ""
              , j = w ? `\n${(0,
            c.l10n)("messageEdit")} ${M}` : "";
            return (0,
            a.BX)("jdiv", Object.assign({
                className: r()(f, t)
            }, _, {
                title: `${S}${j}`,
                children: [w ? j : S, g && C && "" !== C.iconName ? (0,
                a.tZ)(d.SvgIcon, {
                    icon: k,
                    color: C.iconColor,
                    className: p
                }) : null]
            }))
        }
    },
    64607: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            COLORS_SET: function() {
                return i
            },
            defineIcon: function() {
                return s
            }
        });
        var a = n(36874)
          , o = n(81152)
          , r = n(96394);
        const i = {
            LIGHT: "LIGHT",
            DARK: "DARK"
        }
          , l = {
            LIGHT_GREY: "#FFF9",
            DARK_GREY: "#737B83",
            GREEN: a.colorsFromFigma.GREEN_80,
            WHITE: a.colorsFromFigma.WHITE_100
        }
          , s = ({colorSet: e, status: t, mediaStatus: n, type: a}) => {
            if (!a || a === o.MessageType.TEMPORARY || n && [o.MessageType.TEMPORARY, o.MediaStatus.ERROR, o.MediaStatus.EXPIRED].includes(n))
                return;
            const s = e => t => ({
                iconName: e,
                iconColor: t
            })
              , u = s("check")
              , c = s("checks")
              , d = s("clock");
            if (!t)
                return e === i.LIGHT ? d(l.DARK_GREY) : d(l.LIGHT_GREY);
            const f = {
                [i.LIGHT]: {
                    [o.MessageStatus.SENT]: u(l.DARK_GREY),
                    [o.MessageStatus.SENDED]: c(l.DARK_GREY),
                    [o.MessageStatus.DELIVERED]: c(l.GREEN),
                    [o.MessageStatus.READ]: c(l.GREEN),
                    [o.MessageStatus.SEEN]: c(l.GREEN)
                },
                [i.DARK]: {
                    [o.MessageStatus.SENT]: u(l.LIGHT_GREY),
                    [o.MessageStatus.SENDED]: u(l.LIGHT_GREY),
                    [o.MessageStatus.DELIVERED]: c(l.WHITE),
                    [o.MessageStatus.READ]: c(l.WHITE),
                    [o.MessageStatus.SEEN]: c(l.WHITE)
                }
            };
            return r.default.enable_bot_seen_status && (f[i.LIGHT] = {
                [o.MessageStatus.SENT]: {
                    iconName: "",
                    iconColor: ""
                },
                [o.MessageStatus.SENDED]: u(l.GREEN),
                [o.MessageStatus.DELIVERED]: u(l.GREEN),
                [o.MessageStatus.READ]: c(l.GREEN),
                [o.MessageStatus.SEEN]: c(l.GREEN)
            },
            f[i.DARK] = {
                [o.MessageStatus.SENT]: {
                    iconName: "",
                    iconColor: ""
                },
                [o.MessageStatus.SENDED]: u(l.WHITE),
                [o.MessageStatus.DELIVERED]: u(l.WHITE),
                [o.MessageStatus.READ]: c(l.WHITE),
                [o.MessageStatus.SEEN]: c(l.WHITE)
            }),
            f[e][t]
        }
    },
    496: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            TextBox: function() {
                return j
            }
        });
        var a = n(16584)
          , o = n(98661)
          , r = n(18357)
          , i = n(94184)
          , l = n.n(i)
          , s = n(96394)
          , u = n(69845)
          , c = n(64607)
          , d = n(31001)
          , f = n(30295)
          , p = n(81152)
          , h = n(21704)
          , m = n(71192)
          , g = n(75686)
          , _ = n(70859)
          , v = n(50339)
          , b = n(14045)
          , y = n(53400)
          , w = n(83549)
          , E = n(56227)
          , T = n(70382)
          , S = n(25153)
          , M = n(35636)
          , C = n(38282)
          , O = n(32138)
          , k = n(44240);
        const j = ({message: e, bubbleColor: t, lineHeight: n, isProactiveMessage: i, isClientMessage: j, isAgentMessage: N, isDeletedMessage: I, isErrorMessage: x, isWidgetConstructor: R}) => {
            (0,
            w.useErrorCatcher)("TextBox");
            const {body: P, text: A, updated_ts: D, created_ts: L, replied_message: B, msg_id: H, private_id: Z} = e
              , W = null == P ? void 0 : P.extra
              , F = Boolean(s.default.enable_reply)
              , U = !s.default.disable_emoji && (0,
            u.checkAlone)(A)
              , V = (0,
            f.default)(D || L, "dd.mm.yy H:MM:ss")
              , z = `msg_${j ? p.MessageInitiator.CLIENT : p.MessageInitiator.AGENT}`
              , [q,G] = (0,
            o.useState)(!1)
              , Y = (0,
            o.useRef)(null)
              , $ = l()({
                [O.default.message]: !0,
                [O.default[`_${t}`]]: !0,
                [O.default.__alone]: U,
                [O.default.__client]: j,
                [O.default.__edited]: !!D,
                [O.default.__deleted]: I,
                [O.default.__proactive]: i,
                [O.default.__background]: i && (null == W ? void 0 : W.background),
                [O.default[`__${null == W ? void 0 : W.img_position}`]]: i && (null == W ? void 0 : W.img_src) && ["top_width", "bottom_width"].includes(null == W ? void 0 : W.img_position),
                [O.default.__flash]: q
            })
              , X = e => {
                var t;
                const n = g.default.getComponent(_.Component.SCROLL_CONTAINER);
                e === H && (null == Y ? void 0 : Y.current) && (n.scrollTop((null === (t = Y.current.offsetParent) || void 0 === t ? void 0 : t.offsetTop) + Y.current.offsetTop - 30),
                G(!0),
                setTimeout(( () => {
                    G(!1)
                }
                ), 500))
            }
            ;
            (0,
            o.useEffect)(( () => {
                g.default.set(_.Component.PROACTIVE_MESSAGE, Y.current)
            }
            ), []),
            (0,
            o.useEffect)(( () => {
                const e = m.QuoteEventEmitter.addListener(m.QuoteEventClick, X);
                return () => e.remove()
            }
            ), [H]);
            const {ref: J} = (0,
            r.YD)({
                triggerOnce: !0,
                onChange: t => {
                    !R && t && N && (0,
                    E.readMessageOnView)(e)
                }
            })
              , K = R ? A : (0,
            T.renderMessageText)(e);
            if ((0,
            k.isEmpty)(K))
                return;
            const Q = !I && F && B
              , ee = !I && H && F && !x;
            return (0,
            a.BX)("jdiv", {
                className: l()(O.default.container, {
                    [O.default.__client]: j,
                    [O.default.__withError]: x
                }),
                ref: Y,
                "jv-private-id": Z,
                children: [(0,
                a.BX)("jdiv", Object.assign({
                    className: $,
                    title: V,
                    style: {
                        "--jv-proactive-message-color": i && (null == W ? void 0 : W.text_color) ? W.text_color : null,
                        "--jv-proactive-message-background": i && (null == W ? void 0 : W.background) ? (0,
                        v.buildBackground)(W.background) : null
                    }
                }, (0,
                y.locator)(z), i && {
                    "data-proactive": !0
                }, {
                    children: [K && (0,
                    a.BX)(S.Z, {
                        lineHeight: n,
                        isDeletedMessage: I,
                        children: [Q && (0,
                        a.tZ)(m.default, {
                            msgId: B.msg_id,
                            palette: N ? m.PALETTE.DARK : m.PALETTE.LIGHT,
                            isAloneMessage: U,
                            isParentMessageFromAgent: N,
                            isMediaMessage: !1
                        }), R || (0,
                        T.isMarkdownMessage)(e) ? (0,
                        a.tZ)("jdiv", {
                            className: O.default.text,
                            children: (0,
                            a.tZ)(C.U, {
                                text: A,
                                customerIO: null == P ? void 0 : P.customerIO,
                                theme: {
                                    text: O.default.text,
                                    image: {
                                        container: O.default.image
                                    }
                                }
                            })
                        }) : (0,
                        a.tZ)("jdiv", {
                            className: O.default.text,
                            children: (0,
                            a.tZ)(b.Text, {
                                children: K
                            })
                        }), (0,
                        a.tZ)(d.MessageStatusIcon, Object.assign({}, (0,
                        y.locator)(z + "_time"), {
                            className: O.default.time,
                            isRenderStatus: j,
                            message: e,
                            colorSet: N ? c.COLORS_SET.LIGHT : c.COLORS_SET.DARK
                        }))]
                    }), (0,
                    a.tZ)("jdiv", {
                        className: O.default.readBox,
                        ref: J
                    })]
                })), ee && (0,
                a.tZ)(h.default, {
                    msgId: H,
                    isDeleted: I,
                    isAloneMessage: U,
                    isAgentMessage: N
                }), (0,
                a.tZ)(M.SendAgain, {
                    privateId: Z,
                    isShow: x
                })]
            })
        }
    },
    70382: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            isErrorMessage: function() {
                return u
            },
            isMarkdownMessage: function() {
                return s
            },
            messageInitiator: function() {
                return r
            },
            messageStatus: function() {
                return i
            },
            renderMessageText: function() {
                return l
            }
        });
        var a = n(81152)
          , o = n(44145);
        const r = e => {
            const {from: t, type: n} = e;
            return {
                fromClient: t === a.MessageInitiator.CLIENT,
                fromBot: t === a.MessageInitiator.FORM,
                fromAgent: t === a.MessageInitiator.FORM || t === a.MessageInitiator.AGENT || t === a.MessageInitiator.AGENT_BOT || n === a.MessageType.PROACTIVE
            }
        }
          , i = e => {
            const {status: t} = e;
            return {
                isDeleted: t === a.MessageStatus.DELETED,
                isNotDelivered: t === a.MessageStatus.NOT_DELIVERED
            }
        }
          , l = e => e.text
          , s = e => {
            const t = e.body
              , n = null == t ? void 0 : t.is_markdown
              , a = null == t ? void 0 : t.customerIO;
            return Boolean(n || a)
        }
          , u = e => {
            const t = !(0,
            o.getClient)().isIntroduced && !(0,
            o.getApp)().isOnline;
            return e.from === a.MessageInitiator.CLIENT && e.status === a.MessageStatus.NOT_DELIVERED && !t
        }
    },
    56227: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            addMessagesOnChatOpen: function() {
                return D
            },
            getMessagesGroup: function() {
                return j
            },
            getMessagesGroupTs: function() {
                return N
            },
            needShowMore: function() {
                return L
            },
            onMessagesScrollEnd: function() {
                return B
            },
            onWrapTouch: function() {
                return R
            },
            readMessageOnView: function() {
                return P
            },
            readMessages: function() {
                return A
            },
            scrollToElement: function() {
                return I
            },
            scrollToForm: function() {
                return x
            }
        });
        const a = e => "object" == typeof e && null != e && 1 === e.nodeType
          , o = (e, t) => (!t || "hidden" !== e) && "visible" !== e && "clip" !== e
          , r = (e, t) => {
            if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
                const n = getComputedStyle(e, null);
                return o(n.overflowY, t) || o(n.overflowX, t) || (e => {
                    const t = (e => {
                        if (!e.ownerDocument || !e.ownerDocument.defaultView)
                            return null;
                        try {
                            return e.ownerDocument.defaultView.frameElement
                        } catch (e) {
                            return null
                        }
                    }
                    )(e);
                    return !!t && (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth)
                }
                )(e)
            }
            return !1
        }
          , i = (e, t, n, a, o, r, i, l) => r < e && i > t || r > e && i < t ? 0 : r <= e && l <= n || i >= t && l >= n ? r - e - a : i > t && l < n || r < e && l > n ? i - t + o : 0
          , l = e => {
            const t = e.parentElement;
            return null == t ? e.getRootNode().host || null : t
        }
        ;
        var s = n(18276)
          , u = n(14264)
          , c = n(65465)
          , d = n(70859)
          , f = n(90061)
          , p = n(81152)
          , h = n(26932)
          , m = n(23116)
          , g = n(15787)
          , _ = n(32183)
          , v = n(80352)
          , b = n(44240)
          , y = n(45926)
          , w = n(75686)
          , E = n(8717)
          , T = n(44145)
          , S = n(81722)
          , M = n(42634)
          , C = n(38042);
        const O = (0,
        f.createLogger)("MessagesMainUtils")
          , k = e => Math.round(Math.abs((e - (new Date).getTime()) / 864e5))
          , j = e => {
            const t = [];
            let n, a, o, r, i = 0;
            if (u.default.sort(),
            u.default.getAll().forEach((e => {
                const l = e.toJSON()
                  , s = new Date(l.created_ts);
                let u = !1;
                !a || a.getMonth() === s.getMonth() && a.getDate() === s.getDate() || (u = !0),
                l.type !== p.MessageType.MESSAGE || l.type !== o || l.from !== n || l.from_id !== r || u ? (u && (t.push([{
                    type: p.MessageType.SEPARATOR,
                    time: s.getTime(),
                    from: p.MessageInitiator.SYSTEM
                }]),
                i++),
                t.push([e])) : t[t.length - 1].push(e),
                n = l.from,
                o = l.type || "",
                r = l.from_id,
                a = s
            }
            )),
            u.default.store.length > 0 && t.length > 0) {
                const e = t[0][0].get("created_ts")
                  , n = k(e);
                (i > 0 || n >= 1) && t.unshift([{
                    type: p.MessageType.SEPARATOR,
                    time: e,
                    from: p.MessageInitiator.SYSTEM
                }])
            }
            return t
        }
          , N = e => {
            const t = [];
            let n, a, o, r, i = 0;
            if (e.forEach((e => {
                const l = new Date(e.created_ts);
                let s = !1;
                !a || a.getMonth() === l.getMonth() && a.getDate() === l.getDate() || (s = !0),
                e.type !== p.MessageType.MESSAGE || e.type !== o || e.from !== n || e.from_id !== r || s ? (s && (t.push([{
                    type: p.MessageType.SEPARATOR,
                    time: l.getTime(),
                    from: p.MessageInitiator.SYSTEM
                }]),
                i++),
                t.push([e])) : t[t.length - 1].push(e),
                n = e.from,
                o = e.type || "",
                r = e.from_id,
                a = l
            }
            )),
            u.default.store.length > 0 && t.length > 0) {
                const e = t[0][0].created_ts
                  , n = k(e);
                (i > 0 || n >= 1) && t.unshift([{
                    type: p.MessageType.SEPARATOR,
                    time: e,
                    from: p.MessageInitiator.SYSTEM
                }])
            }
            return t
        }
          , I = ({elId: e, options: t, offset: n}) => {
            var o, s;
            const u = (null == t ? void 0 : t.boundary) || (null === (o = w.default.get("MESSAGES_CONTAINER")) || void 0 === o ? void 0 : o.parentElement);
            if (!u)
                return;
            const c = {
                boundary: u,
                block: (null == t ? void 0 : t.block) ? t.block : "start"
            }
              , d = (0,
            _.getDomMessageByPrivateId)(e);
            if (!d)
                return;
            const f = ( (e, t) => {
                var n, o, s, u;
                if ("undefined" == typeof document)
                    return [];
                const {scrollMode: c, block: d, inline: f, boundary: p, skipOverflowHiddenElements: h} = t
                  , m = "function" == typeof p ? p : e => e !== p;
                if (!a(e))
                    throw new TypeError("Invalid target");
                const g = document.scrollingElement || document.documentElement
                  , _ = [];
                let v = e;
                for (; a(v) && m(v); ) {
                    if (v = l(v),
                    v === g) {
                        _.push(v);
                        break
                    }
                    null != v && v === document.body && r(v) && !r(document.documentElement) || null != v && r(v, h) && _.push(v)
                }
                const b = null != (o = null == (n = window.visualViewport) ? void 0 : n.width) ? o : innerWidth
                  , y = null != (u = null == (s = window.visualViewport) ? void 0 : s.height) ? u : innerHeight
                  , {scrollX: w, scrollY: E} = window
                  , {height: T, width: S, top: M, right: C, bottom: O, left: k} = e.getBoundingClientRect()
                  , {top: j, right: N, bottom: I, left: x} = (e => {
                    const t = window.getComputedStyle(e);
                    return {
                        top: parseFloat(t.scrollMarginTop) || 0,
                        right: parseFloat(t.scrollMarginRight) || 0,
                        bottom: parseFloat(t.scrollMarginBottom) || 0,
                        left: parseFloat(t.scrollMarginLeft) || 0
                    }
                }
                )(e);
                let R = "start" === d || "nearest" === d ? M - j : "end" === d ? O + I : M + T / 2 - j + I
                  , P = "center" === f ? k + S / 2 - x + N : "end" === f ? C + N : k - x;
                const A = [];
                for (let e = 0; e < _.length; e++) {
                    const t = _[e]
                      , {height: n, width: a, top: o, right: l, bottom: s, left: u} = t.getBoundingClientRect();
                    if ("if-needed" === c && M >= 0 && k >= 0 && O <= y && C <= b && (t === g && !r(t) || M >= o && O <= s && k >= u && C <= l))
                        return A;
                    const p = getComputedStyle(t)
                      , h = parseInt(p.borderLeftWidth, 10)
                      , m = parseInt(p.borderTopWidth, 10)
                      , v = parseInt(p.borderRightWidth, 10)
                      , j = parseInt(p.borderBottomWidth, 10);
                    let N = 0
                      , I = 0;
                    const x = "offsetWidth"in t ? t.offsetWidth - t.clientWidth - h - v : 0
                      , D = "offsetHeight"in t ? t.offsetHeight - t.clientHeight - m - j : 0
                      , L = "offsetWidth"in t ? 0 === t.offsetWidth ? 0 : a / t.offsetWidth : 0
                      , B = "offsetHeight"in t ? 0 === t.offsetHeight ? 0 : n / t.offsetHeight : 0;
                    if (g === t)
                        N = "start" === d ? R : "end" === d ? R - y : "nearest" === d ? i(E, E + y, y, m, j, E + R, E + R + T, T) : R - y / 2,
                        I = "start" === f ? P : "center" === f ? P - b / 2 : "end" === f ? P - b : i(w, w + b, b, h, v, w + P, w + P + S, S),
                        N = Math.max(0, N + E),
                        I = Math.max(0, I + w);
                    else {
                        N = "start" === d ? R - o - m : "end" === d ? R - s + j + D : "nearest" === d ? i(o, s, n, m, j + D, R, R + T, T) : R - (o + n / 2) + D / 2,
                        I = "start" === f ? P - u - h : "center" === f ? P - (u + a / 2) + x / 2 : "end" === f ? P - l + v + x : i(u, l, a, h, v + x, P, P + S, S);
                        const {scrollLeft: e, scrollTop: r} = t;
                        N = 0 === B ? 0 : Math.max(0, Math.min(r + N / B, t.scrollHeight - n / B + D)),
                        I = 0 === L ? 0 : Math.max(0, Math.min(e + I / L, t.scrollWidth - a / L + x)),
                        R += r - N,
                        P += e - I
                    }
                    A.push({
                        el: t,
                        top: N,
                        left: I
                    })
                }
                return A
            }
            )(d, Object.assign(Object.assign({}, c), t));
            return f.length && (null === (s = f[0].el) || void 0 === s || s.scroll({
                top: f[0].top - (n || 0),
                behavior: "smooth"
            })),
            d
        }
          , x = (e, t) => {
            var n;
            if (t) {
                I({
                    elId: t
                }),
                v.platform.isMobileOrTablet || null === (n = w.default.get("ContactFormObserver")) || void 0 === n || n.focusFirstInput();
                const a = e ? (0,
                s.l10n)("lblIntroduceRequest") : (0,
                s.l10n)("offlineIntroductionText");
                h.messagesDispatchers.updateMessage({
                    privateId: t,
                    messageId: null
                }, {
                    text: a
                })
            }
            (0,
            C.telemetry)("chat_introduce", {
                param1: "btnform"
            })
        }
          , R = e => {
            if (v.platform.isMobileOrTablet) {
                if (v.platform.isSafari)
                    return;
                const t = (0,
                y.getPageWindow)().document.activeElement
                  , n = d.Component.CHAT_INPUT
                  , a = w.default.get(n)
                  , o = e.target;
                t && (0,
                _.isTextArea)(t.tagName) && (e => {
                    if (e)
                        return "none" !== e.style.display
                }
                )(a) && o && !(0,
                _.isParentA)(o.parentNode) && (O.log("onWrapTouch", t),
                setTimeout(( () => {
                    t.blur()
                }
                ), 300))
            }
        }
          , P = e => {
            const {msg_id: t, chat_id: n, status: a, private_id: o} = e;
            O.log("readMessageOnView", e),
            [p.MessageStatus.SEEN, p.MessageStatus.READ, p.MessageStatus.NOT_DELIVERED, p.MessageStatus.DELETED].includes(a) || ((0,
            g.agentMessageRead)([t], n),
            h.messagesDispatchers.updateMessage({
                messageId: t,
                privateId: o
            }, {
                status: p.MessageStatus.SEEN
            }))
        }
          , A = () => {
            if (!m.default.isActive)
                return;
            const e = (0,
            T.getChats)()
              , t = e[e.length ? e.length - 1 : 0]
              , n = (0,
            T.getUnreadMessages)()
              , a = [];
            if (n.forEach((e => {
                const t = e.msg_id;
                t && (0,
                b.isNumeric)(t) && !a.includes(t) && a.push(t)
            }
            )),
            a.length && h.messagesDispatchers.updateMessages({
                messageIds: a,
                privateIds: null
            }, {
                status: p.MessageStatus.READ
            }),
            (0,
            M.readSystemMessages)(),
            a.length && (0,
            E.isChatInputRoute)((0,
            T.getApp)().route)) {
                const e = t.id ? t.id : a[0];
                (0,
                g.agentMessageRead)(a, e)
            }
        }
          , D = () => {
            const {maintenance: e} = (0,
            T.getApp)();
            !e && (0,
            S.isOfflineCanSend)() && 0 === u.default.getFormMessage().length && c.messageActions.startFormSequence((0,
            s.l10n)("offlineIntroductionText")),
            e && c.messageActions.addMaintenanceMessage()
        }
          , L = e => !!e && (e.getScrollDiff() >= 40 && 0 != e.getScrollDiff())
          , B = (e, t) => {
            var n;
            const a = L(e);
            let o = !1;
            const r = u.default.getFormMessage();
            if (t || !r.length) {
                return u.default.getMessagesByType(p.MessageType.RATE_FORM).length && (o = null === (n = w.default.get("RateFormObserver")) || void 0 === n ? void 0 : n.inView),
                {
                    showMore: a,
                    hideScrollButton: o
                }
            }
            const i = w.default.get("ContactFormObserver");
            return o = null == i ? void 0 : i.inView,
            {
                showMore: a,
                hideScrollButton: o
            }
        }
    },
    11710: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            MessagesMainTs: function() {
                return bn
            }
        });
        var a = n(16584)
          , o = n(98661)
          , r = n(94184)
          , i = n.n(r)
          , l = n(89505)
          , s = n(90061)
          , u = n(43417)
          , c = n(97615)
          , d = n(80352)
          , f = n(19367)
          , p = n(47361)
          , h = n(75686)
          , m = n(70859)
          , g = n(36972)
          , _ = n(80598)
          , v = n(36874)
          , b = n(48177)
          , y = "moreBox__oaxzC"
          , w = "__show__jrrkF"
          , E = "moreBtn__UIqw8"
          , T = n(42413);
        const S = ({show: e, showBadge: t, color: n, onClick: r, unreadCount: l}) => {
            const s = (0,
            o.useRef)(null);
            return (0,
            o.useEffect)(( () => {
                s.current && h.default.set(m.Component.MORE_BUTTON, s.current)
            }
            ), [s]),
            c.EnvironmentManager.isWidgetConstructor() ? null : (0,
            a.BX)("jdiv", Object.assign({
                className: i()({
                    [y]: !0,
                    [w]: e
                })
            }, (0,
            u.onClickHandler)(r, !0, !0), {
                ref: s,
                children: [(0,
                a.tZ)(b.SvgIcon, {
                    className: E,
                    icon: g.default,
                    color: (0,
                    v.getTokenColor)("--jv-button-secondary-active"),
                    color2: v.colorsFromFigma.BLUE_80,
                    hoverColor: (0,
                    _.getThemeColor)(n),
                    qaId: "more-icon"
                }), l ? (0,
                a.tZ)(T.C, {
                    show: t,
                    text: l
                }) : null]
            }))
        }
        ;
        var M = n(26613)
          , C = n(83549)
          , O = n(39733)
          , k = n(45683)
          , j = n(41189)
          , N = n(32183)
          , I = n(8717)
          , x = n(45926)
          , R = n(56227)
          , P = n(96394)
          , A = n(3501)
          , D = n(53400)
          , L = "scrollForm__Sxd9Z"
          , B = "__ad__cDnwl"
          , H = "__hide__z4aQf"
          , Z = "__mobile__x71kD"
          , W = "textToForm__EUgd5";
        const F = ({hide: e, onClick: t, icon: n, text: o}) => {
            const r = i()({
                [L]: !0,
                [H]: e,
                [B]: (0,
                M.isCopyrightEnabled)(),
                [Z]: d.platform.isMobileOrTablet
            });
            return (0,
            a.tZ)("jdiv", Object.assign({
                className: r
            }, (0,
            u.onClickHandler)(t), (0,
            D.locator)("CHAT_INTRODUCE_BUTTON"), {
                children: (0,
                a.BX)("jdiv", {
                    className: W,
                    children: [(0,
                    a.tZ)(A.default, {
                        icon: n,
                        alone: !1,
                        className: "emojiMessages"
                    }), " ", o]
                })
            }))
        }
        ;
        var U = n(18276)
          , V = n(45959)
          , z = n(24111)
          , q = n(65138)
          , G = n(79814);
        const Y = ({hideScrollButton: e}) => {
            var t, n;
            const o = (0,
            z.useAppSelector)(G.selectFormIntroduceText)
              , r = (0,
            z.useAppSelector)(G.selectRateFormMessage)
              , i = (0,
            z.useAppSelector)(V.selectIsIntroduced)
              , l = (0,
            z.useAppSelector)(q.selectIsOnline)
              , s = (0,
            z.useAppSelector)(q.selectIsInDrag)
              , u = e || s;
            if (!i && o)
                return (0,
                a.tZ)(F, {
                    hide: u,
                    onClick: () => {
                        (0,
                        R.scrollToForm)(l, o.private_id)
                    }
                    ,
                    icon: "1f44b-1f3fb",
                    text: (0,
                    U.l10n)("lblIntroduceRequest")
                });
            if (r) {
                const e = null === (t = r.body) || void 0 === t ? void 0 : t.submited
                  , o = null === (n = r.body) || void 0 === n ? void 0 : n.closed
                  , i = Boolean(null === P.default || void 0 === P.default ? void 0 : P.default.enable_rate_reset)
                  , l = !!(u || !i && e || o)
                  , s = e => {
                    e.preventDefault(),
                    (0,
                    R.scrollToElement)({
                        elId: r.private_id,
                        offset: 30
                    })
                }
                ;
                return (0,
                a.tZ)(F, {
                    hide: l,
                    onClick: s,
                    icon: "270d-1f3fb",
                    text: (0,
                    U.l10n)("rateFormTitle")
                })
            }
            return null
        }
        ;
        var $ = n(45007)
          , X = n(79105)
          , J = n(52274)
          , K = n(81152)
          , Q = n(7193)
          , ee = n(35233)
          , te = n(97979)
          , ne = n(44145);
        var ae = n(90189)
          , oe = n(42634)
          , re = n(38042);
        const ie = ({scrollComponent: e, input: t}) => {
            var n, a;
            const r = (0,
            z.useAppSelector)(q.selectRoute)
              , i = d.platform.isMobileOrChatpage
              , l = (0,
            z.useAppSelector)(X.selectTypingInsight)
              , s = (0,
            z.useAppSelector)(ae.selectCurrentChat)
              , u = (0,
            z.useAppSelector)(X.selectBubbleColor)
              , c = (0,
            z.useAppSelector)(Q.selectProactive)
              , f = (0,
            z.useAppSelector)(V.selectIsIntroduced)
              , p = (0,
            z.useAppSelector)(q.selectIsOnline)
              , h = !!s && s.agentTyping
              , m = (0,
            z.useAppSelector)(G.selectMessages, $.wU)
              , g = (0,
            z.useAppSelector)(G.selectAgentMessages, $.wU)
              , _ = (0,
            z.useAppSelector)(ee.selectQuoteMsgId)
              , {inputText: v} = (0,
            z.useAppSelector)(te.selectClient)
              , b = (0,
            z.useAppSelector)(G.selectUnreadMessages, $.wU)
              , y = b.length
              , w = (0,
            z.useAppSelector)(ae.selectBotJoinedIds)
              , E = (0,
            z.useAppSelector)(ae.selectAgentJoinedIds)
              , T = Boolean(w.length && !E.length)
              , S = ( () => {
                const e = (0,
                z.useAppSelector)(G.selectAgentMessages)
                  , t = e[e.length - 1];
                return (0,
                o.useMemo)(( () => {
                    const n = {
                        isBot: !1,
                        info: null
                    };
                    if (e.length && [K.MessageInitiator.AGENT, K.MessageInitiator.BOT].includes(t.from) && [K.MessageType.MEDIA, K.MessageType.MESSAGE].includes(t.type)) {
                        const e = t.from === K.MessageInitiator.BOT
                          , a = Number(t.from_id);
                        n.isBot = e,
                        n.info = e ? (0,
                        ne.getBotById)(a) : (0,
                        ne.getAgentById)(a)
                    }
                    return n
                }
                ), [t, e.length])
            }
            )()
              , C = S.isBot
              , O = Boolean(S && e && e.animated)
              , N = (null === (n = S.info) || void 0 === n ? void 0 : n.avatarUrl) ? (0,
            k.getAvatarApiURL)(null === (a = S.info) || void 0 === a ? void 0 : a.avatarUrl) : null
              , [x,P] = (0,
            o.useState)(!1)
              , [A,D] = (0,
            o.useState)(Boolean(b.length))
              , [L,B] = (0,
            o.useState)(!0)
              , H = (0,
            o.useMemo)(( () => m.find((e => e.type === K.MessageType.PRECHAT))), [m])
              , Z = (0,
            o.useMemo)(( () => (0,
            R.getMessagesGroup)(m)), [m])
              , [W,F] = (0,
            o.useState)(0);
            (0,
            o.useEffect)(( () => {
                const e = j.V.chatPageYClients ? 44 : d.platform.isMobileOrChatpage ? J.INPUT_MOBILE_HEIGHT : J.INPUT_HEIGHT
                  , n = (null == t ? void 0 : t.offsetHeight) || e;
                let a = n || e;
                a < e && (a = e),
                i && (0,
                M.isCopyrightEnabled)() && (a += 35),
                W !== a && F(a)
            }
            ), [W, t, i, _, v]),
            (0,
            o.useEffect)(( () => {
                (0,
                I.isChatInputRoute)(r) && (0,
                oe.readSystemMessages)()
            }
            ), [r]);
            const U = () => {
                if (b.length) {
                    !(0,
                    R.scrollToElement)({
                        elId: b[0].private_id,
                        block: "start"
                    }) && e && e.view && e.scrollToBottom()
                }
            }
            ;
            return {
                typingInsight: l,
                isAgentTyping: h,
                bubbleColor: u,
                messages: m,
                messagesGroups: Z,
                showMore: x,
                showBadge: A,
                proactive: c,
                hideScrollButton: L,
                isOnline: p,
                unreadMsg: b,
                isBot: C,
                isBotTyping: T,
                avatarUrl: N,
                isShowAvatarShadow: O,
                route: r,
                prechatMsg: H,
                getBottom: () => W,
                onScrollEnd: () => {
                    if (!(0,
                    I.isChatInputRoute)(r) || !e.view)
                        return {
                            showMore: !1,
                            showBadge: !1,
                            hideScrollButton: !0
                        };
                    const {showMore: t, hideScrollButton: n} = (0,
                    R.onMessagesScrollEnd)(e, f);
                    B(n),
                    P(t);
                    const a = t && g.length > 1 || m.filter((e => e.type === K.MessageType.PRECHAT)).length > 0;
                    return D(a),
                    {
                        showMore: t,
                        showBadge: a,
                        hideScrollButton: n
                    }
                }
                ,
                onMoreClick: () => {
                    P(!1),
                    e && e.view && (e.setIgnore(!1),
                    y ? U() : e.scrollToBottom()),
                    (0,
                    re.telemetry)("more_btn_click", {
                        param1: c.text ? "1" : "0",
                        param2: String(y)
                    })
                }
                ,
                scrollToFirstUnread: U
            }
        }
        ;
        var le = n(10904)
          , se = n(91469);
        const ue = ({isBot: e, url: t}) => e ? (0,
        a.tZ)(se.k, {
            url: t
        }) : (0,
        a.tZ)(le.Avatar, {
            inChat: !0,
            dark: !0,
            isMobile: d.platform.isMobileOrTablet,
            isTablet: d.platform.isTablet,
            url: t
        });
        var ce = n(80797)
          , de = n(88155)
          , fe = n(6131)
          , pe = n(17739)
          , he = n(26932)
          , me = n(14264)
          , ge = n(49963)
          , _e = n(41504);
        const ve = (e, t) => {
            const n = h.default.getComponent(m.Component.SCROLL_CONTAINER);
            n && ((e => {
                const t = me.default.getLastMessage();
                return t && (null == t ? void 0 : t.toJSON().private_id) === e
            }
            )(e) ? ( () => {
                const e = h.default.getComponent(m.Component.SCROLL_CONTAINER);
                e && e.scrollToBottom()
            }
            )() : t && n.scrollTop(n.getScrollTop() + 80))
        }
          , be = (e, t) => {
            const n = null === P.default || void 0 === P.default ? void 0 : P.default.enable_rate_reset
              , a = n ? {} : {
                created_ts: (new Date).getTime()
            };
            he.messagesDispatchers.updateMessage({
                privateId: e,
                messageId: null
            }, Object.assign(Object.assign({}, a), {
                body: {
                    rate: t.rateSelected,
                    submited: t.isSubmited,
                    chatId: t.chatId,
                    comment: t.comment
                }
            })),
            n || me.default.sort()
        }
        ;
        var ye = n(18357)
          , we = n(88921)
          , Ee = n(57930)
          , Te = {
            main: "main__ggXnO",
            __green: "__green__k22EL",
            __blue: "__blue__y3WCv",
            __grey: "__grey__aFz4a",
            title: "title__JkMGT",
            text: "text__DlpGd",
            __hide: "__hide__TVBQn",
            label: "label__ew6eU",
            formBlock: "formBlock__M5zV5",
            __show: "__show__h2HBD",
            button: "button__XFYEs",
            inputField: "inputField__EcZAm",
            close: "close__v2mho",
            closeIcon: "closeIcon__Yf7CM",
            iconBox: "iconBox__ZJplB",
            icon: "icon__UHAeI",
            __star: "__star__BqFj5",
            __selected: "__selected__nM7xS",
            iconSmile: "iconSmile__qZoA1",
            iconUp: "iconUp__YTnGP",
            iconDown: "iconDown__hyhwc"
        };
        var Se = n(14045);
        const Me = {
            BAD: "bad",
            BAD_NORMAL: "badnormal",
            NORMAL: "normal",
            GOOD_NORMAL: "goodnormal",
            GOOD: "good"
        }
          , Ce = {
            TWO: "two",
            THREE: "three",
            FIVE: "five"
        }
          , Oe = "star"
          , ke = {
            two: [Me.BAD, Me.good],
            three: [Me.BAD, Me.NORMAL, Me.GOOD],
            five: [Me.BAD, Me.BAD_NORMAL, Me.NORMAL, Me.GOOD_NORMAL, Me.GOOD]
        }
          , je = "#FFCE00"
          , Ne = "#EE9547"
          , Ie = "#FFDB5E"
          , xe = "#D1D5DA"
          , Re = "#83878C"
          , Pe = ({rateSelected: e, rateSettings: t}) => {
            const n = e && [Me.GOOD_NORMAL, Me.GOOD].includes(e)
              , o = t.goodRateTitle || (0,
            U.l10n)("rateFormFinishText")
              , r = t.badRateTitle || (0,
            U.l10n)("rateFormFinishTextNegative");
            return (0,
            a.BX)(a.HY, {
                children: [(0,
                a.tZ)("jdiv", {
                    className: Te.title,
                    children: (0,
                    a.tZ)(Se.Text, {
                        children: (0,
                        U.l10n)("rateFormFinishTitle")
                    })
                }), n ? (0,
                a.tZ)("jdiv", Object.assign({
                    className: Te.text
                }, (0,
                D.locator)(Ee.Locator.RATE_POSITIVE_SUBMIT_TEXT), {
                    children: (0,
                    a.tZ)(Se.Text, {
                        children: o
                    })
                })) : (0,
                a.tZ)("jdiv", Object.assign({
                    className: Te.text
                }, (0,
                D.locator)(Ee.Locator.RATE_NEGATIVE_SUBMIT_TEXT), {
                    children: (0,
                    a.tZ)(Se.Text, {
                        children: r
                    })
                }))]
            })
        }
        ;
        var Ae = n(6400)
          , De = n(18954)
          , Le = n(23808)
          , Be = n(43205)
          , He = n(90270)
          , Ze = n(50996)
          , We = n(94939)
          , Fe = n(83088)
          , Ue = n(37491);
        const Ve = {
            badRate: De.Z,
            badnormalRate: Le.Z,
            normalRate: Be.Z,
            goodnormalRate: He.Z,
            goodRate: Ze.Z,
            iconLike: We.Z,
            iconDislike: Fe.Z,
            iconStar: Ue.Z
        }
          , ze = ({type: e, icon: t, iconSelected: n, onRateSelect: o}) => (0,
        a.BX)(a.HY, {
            children: [e == Ce.TWO ? ( () => {
                const e = n === Me.GOOD
                  , t = n === Me.BAD;
                return (0,
                a.BX)("jdiv", {
                    className: Te.iconBox,
                    children: [(0,
                    a.tZ)("jdiv", Object.assign({
                        className: Te.icon,
                        onClick: () => {
                            o(Me.GOOD)
                        }
                    }, (0,
                    D.locator)(Ee.Locator.RATE_GOOD), {
                        children: (0,
                        a.tZ)(b.SvgIcon, {
                            icon: Ve.iconLike,
                            color: e ? Ie : t ? xe : je,
                            color2: e ? Ne : t ? Re : Ne,
                            hoverColor: Ie,
                            className: Te.iconUp
                        })
                    })), (0,
                    a.tZ)("jdiv", Object.assign({
                        className: Te.icon,
                        onClick: () => {
                            o(Me.BAD)
                        }
                    }, (0,
                    D.locator)(Ee.Locator.RATE_BAD), {
                        children: (0,
                        a.tZ)(b.SvgIcon, {
                            icon: Ve.iconDislike,
                            color: t ? Ie : e ? xe : je,
                            color2: e ? Re : Ne,
                            hoverColor: Ie,
                            className: Te.iconDown
                        })
                    }))]
                })
            }
            )() : null, [Ce.THREE, Ce.FIVE].includes(e) ? ( () => {
                const r = t == Oe;
                return (0,
                a.tZ)("jdiv", {
                    className: Te.iconBox,
                    children: ke[e].map((e => {
                        let t = je;
                        n && (t = n == e ? je : xe);
                        const l = i()({
                            [Te.icon]: !0,
                            [Te.__star]: r,
                            [Te.__selected]: n && n == e
                        });
                        return (0,
                        Ae.createElement)("jdiv", Object.assign({
                            className: l
                        }, (0,
                        u.onClickHandler)(( () => {
                            o(e)
                        }
                        )), {
                            key: e
                        }, (0,
                        D.locator)(`RATE_${e.toUpperCase()}` + (r ? "_STAR" : "_SMILE"))), (0,
                        a.tZ)(b.SvgIcon, {
                            icon: r ? Ve.iconStar : Ve[`${e}Rate`],
                            color: t,
                            className: Te.iconSmile
                        }))
                    }
                    ))
                })
            }
            )() : null]
        })
          , qe = ({rateSelected: e, rateSettings: t, onRateSelect: n}) => (0,
        a.BX)(a.HY, {
            children: [(0,
            a.tZ)("jdiv", Object.assign({
                className: Te.title
            }, (0,
            D.locator)(Ee.Locator.RATE_TITLE), {
                children: (0,
                a.tZ)(Se.Text, {
                    children: (0,
                    U.l10n)("rateFormTitle")
                })
            })), (0,
            a.tZ)("jdiv", Object.assign({
                className: Te.text
            }, (0,
            D.locator)(Ee.Locator.RATE_FORM_TEXT), {
                children: (0,
                a.tZ)(Se.Text, {
                    children: t.customTitle || (0,
                    U.l10n)("rateFormText")
                })
            })), (0,
            a.tZ)(ze, {
                type: t.type,
                icon: t.icon,
                onRateSelect: n,
                iconSelected: e
            })]
        });
        var Ge = n(38669)
          , Ye = n(40388);
        const $e = ({isSubmited: e, rateSelected: t, value: n, onInput: o, onSubmit: r, onSubmitClick: i, onTextareaFocus: l}) => (0,
        a.BX)("jdiv", {
            className: Te.formBlock,
            children: [(0,
            a.tZ)(Ye.II, {
                type: "textarea",
                containerClassName: Te.inputField,
                value: n,
                label: (0,
                U.l10n)("rateFormCommentTitle"),
                maxLength: 255,
                autoHeight: !0,
                showMaxLengthCounter: !1,
                onChange: o,
                onFocus: l,
                qaId: "RATE_FORM_INPUT"
            }), (0,
            a.tZ)(Ge.Button, {
                size: "md",
                tabIndex: 0,
                fullWidth: !0,
                disabled: e,
                onClick: () => {
                    null == r || r(),
                    i(n, t)
                }
                ,
                qaId: "RATE_SUBMIT_BUTTON",
                onKeyDown: e => {
                    "Enter" === e.key && (null == r || r())
                }
                ,
                children: (0,
                a.tZ)(Se.Text, {
                    children: e ? (0,
                    U.l10n)("lblThanks") : (0,
                    U.l10n)("lblSend")
                })
            })]
        })
          , Xe = (0,
        o.forwardRef)(( ({message: e, rateSettings: t, onRateSelect: n, onSubmitClick: r, onCloseClick: l, onTextareaFocus: s, bubbleColor: c, enableRateReset: d}, f) => {
            (0,
            C.useErrorCatcher)("RateFormPure");
            const {submited: p, rate: m, comment: g} = e.body
              , {onRate: _, onClose: v, isSubmited: y, hideForm: w, rateSelected: E, focused: T, value: S, onSetValue: M, onSubmit: O} = ( ({submited: e, rate: t, comment: n, enableRateReset: a}) => {
                const [r,i] = (0,
                o.useState)(e)
                  , [l,s] = (0,
                o.useState)(!1)
                  , [u,c] = (0,
                o.useState)(a ? null : t)
                  , [d,f] = (0,
                o.useState)(!1)
                  , [p,h] = (0,
                o.useState)(n);
                return {
                    isSubmited: r,
                    hideForm: l,
                    rateSelected: u,
                    focused: d,
                    value: p,
                    onSetValue: e => {
                        i(!1),
                        h(e)
                    }
                    ,
                    onRate: e => {
                        i(!1),
                        c(e),
                        f(!0)
                    }
                    ,
                    onClose: e => {
                        s(e)
                    }
                    ,
                    onSubmit: () => {
                        i(!0)
                    }
                }
            }
            )({
                submited: p,
                rate: m,
                comment: g || "",
                enableRateReset: d
            })
              , [k] = (0,
            ye.YD)({
                delay: 100,
                trackVisibility: !0,
                onChange: (e, t) => {
                    h.default.set("RateFormObserver", {
                        entry: t,
                        inView: e
                    })
                }
            });
            return (0,
            a.tZ)("jdiv", {
                className: i()(Te.main, Te[`__${c}`], {
                    [Te.__hide]: w
                }),
                ref: f,
                "jv-private-id": e.private_id,
                children: (0,
                a.BX)("jdiv", {
                    ref: k,
                    children: [(0,
                    a.tZ)("jdiv", Object.assign({
                        className: Te.close
                    }, (0,
                    u.onClickHandler)((e => {
                        l(e),
                        v(!0)
                    }
                    ), !0, !0), (0,
                    D.locator)(Ee.Locator.RATE_FORM_CLOSE_ICON), {
                        children: (0,
                        a.tZ)(b.SvgIcon, {
                            icon: we.default,
                            color: "#959BA0",
                            hoverColor: "#222D38",
                            className: Te.closeIcon
                        })
                    })), !y || d ? (0,
                    a.BX)(a.HY, {
                        children: [(0,
                        a.tZ)(qe, {
                            rateSelected: E,
                            rateSettings: t,
                            onRateSelect: e => {
                                _(e),
                                n(e)
                            }
                        }), E ? (0,
                        a.tZ)($e, {
                            bubbleColor: c,
                            comment: g,
                            value: S,
                            isSubmited: y,
                            rateSelected: E,
                            focused: T,
                            onInput: M,
                            onSubmit: O,
                            onSubmitClick: r,
                            onTextareaFocus: s
                        }) : null]
                    }) : (0,
                    a.tZ)(Pe, {
                        rateSelected: E,
                        rateSettings: t
                    })]
                })
            })
        }
        ));
        Xe.displayName = "RateFormPure";
        const Je = e => {
            var t;
            (0,
            C.useErrorCatcher)(Je.displayName);
            const n = (0,
            o.useRef)(null)
              , r = (0,
            $.v9)(X.selectRateSettings)
              , i = (0,
            $.v9)(X.selectBubbleColor)
              , l = null === (t = null == e ? void 0 : e.messages[0]) || void 0 === t ? void 0 : t.toJSON()
              , s = Boolean(null === P.default || void 0 === P.default ? void 0 : P.default.enable_rate_reset);
            if (!r || !l || l.body && l.body.closed)
                return null;
            const {private_id: u} = l
              , c = () => {
                setTimeout(( () => {
                    ve(u, d.platform.isMobileOrTablet)
                }
                ), 200)
            }
            ;
            return (0,
            a.tZ)(Xe, {
                message: l,
                rateSettings: r,
                onRateSelect: e => {
                    (e => {
                        d.platform.isMobileOrTablet || setTimeout(( () => {
                            var e, t;
                            null === (t = null === (e = null == n ? void 0 : n.current) || void 0 === e ? void 0 : e.querySelector("textarea")) || void 0 === t || t.focus()
                        }
                        ), 200),
                        (0,
                        re.telemetry)("rate_form_select", {
                            param1: e
                        })
                    }
                    )(e),
                    c()
                }
                ,
                onSubmitClick: (e, t) => {
                    ( (e, t) => {
                        if (!t.rateSelected)
                            return;
                        const {chat_id: n, private_id: a} = t.message
                          , {type: o, conditionName: r} = t.rateSettings
                          , i = new _e.Rate(t.rateSelected,n,e);
                        ge.connectionAdapter.sendEvent(i),
                        be(a, {
                            rateSelected: t.rateSelected,
                            chatId: n,
                            isSubmited: !0,
                            comment: e
                        }),
                        he.chatsDispatchers.setChatEvaluated(!0),
                        (0,
                        re.telemetry)("rate_form_submit", {
                            param1: t.rateSelected,
                            param2: r,
                            param3: e ? "withcomment" : "",
                            param4: o
                        })
                    }
                    )(e, {
                        rateSelected: t,
                        rateSettings: r,
                        message: l
                    })
                }
                ,
                onCloseClick: () => {
                    setTimeout(( () => {
                        he.messagesDispatchers.updateMessage({
                            privateId: u,
                            messageId: null
                        }, {
                            body: Object.assign(Object.assign({}, l.body), {
                                closed: !0
                            })
                        }),
                        he.chatsDispatchers.setChatEvaluated(!0)
                    }
                    ), 300),
                    (0,
                    re.telemetry)("rate_form_close")
                }
                ,
                onTextareaFocus: c,
                bubbleColor: i,
                enableRateReset: s,
                ref: n
            })
        }
        ;
        Je.displayName = "RateFormContainer";
        var Ke = n(68168)
          , Qe = n(48333)
          , et = n(3415)
          , tt = n(21476)
          , nt = n(97490)
          , at = n(21704)
          , ot = n(30295)
          , rt = n(71192)
          , it = n(36148)
          , lt = n(10457)
          , st = n(70051);
        const ut = e => (0,
        z.useAppSelector)((0,
        G.selectByPrivateId)(e), $.wU);
        var ct = {
            main: "main__LfkJn",
            __mobile: "__mobile__oCuSs",
            text: "text__Frcm5",
            error: "error__YArUi",
            __flash: "__flash__hek10",
            flash: "flash__ScCA4",
            showBtn: "showBtn__Z0LDJ",
            __disabled: "__disabled__bIBcd",
            __green: "__green__moyG_",
            __blue: "__blue__HMV1X",
            __grey: "__grey__jJPCi",
            time: "time__qEkt9"
        };
        var dt = n(55961)
          , ft = n(94613)
          , pt = n(67250)
          , ht = n(60936)
          , mt = n(25117)
          , gt = n(32138)
          , _t = n(99493);
        var vt = n(89177)
          , bt = n(65465)
          , yt = n(87692)
          , wt = n(138)
          , Et = n(77335)
          , Tt = n(44240)
          , St = "buttonsWrap__HV3X6"
          , Mt = "__disabled__qiQPf"
          , Ct = "linkIcon__hJGSG"
          , Ot = "icon__i0pQ5";
        const kt = ({button: e, onButtonClick: t, bubbleColor: n, answerId: r, index: l, isIos: s}) => {
            const [c,d] = (0,
            o.useState)(!1)
              , [f,p] = (0,
            o.useState)(!1)
              , h = (0,
            _.getThemeColor)(n)
              , {url: m, title: g, text: v} = e
              , y = i()({
                [Et.default.button]: !0,
                [Et.default.__buttonModifier]: !0,
                [Et.default.__bot]: !0,
                [Et.default.__ios]: s,
                [Et.default.__withLink]: !!m,
                [Mt]: null !== r
            });
            return (0,
            a.tZ)(Ge.Button, Object.assign({
                className: y,
                variant: "outline",
                title: `${g || ""} ${m || ""}`,
                icon: (0,
                a.tZ)(a.HY, {
                    children: m && (0,
                    a.tZ)("jdiv", {
                        className: Ct,
                        children: (0,
                        a.tZ)(b.SvgIcon, {
                            icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 16"><g clip-path="url(#a)"><path fill="_COLOR1_" d="M1.14295 0C.722161 0 .381045.341116.381045.761905c0 .420785.341116.761905.761905.761905h4.25899L.53714 6.38858c-.296654.29665-.296657.77762-.000005 1.07428.296653.29665.777625.29665 1.074285 0L6.47621 2.5981v4.25905c0 .42079.34111.7619.7619.7619.42078 0 .76189-.34111.76189-.7619V0H1.14295Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h8v16H0z"/></clipPath></defs></svg>',
                            color: c ? "#fff" : h,
                            className: Ot
                        })
                    })
                }),
                justify: "end",
                onMouseOver: () => d(!0),
                onMouseLeave: () => d(!1),
                onFocus: () => d(!0),
                onBlur: () => d(!1),
                onTouchMove: () => p(!0),
                onTouchStart: () => {
                    d(!0),
                    p(!1)
                }
                ,
                onTouchCancel: () => {
                    d(!1),
                    p(!1)
                }
            }, (0,
            u.onClickHandler)(t, !0, !0, f), (0,
            D.locator)(Ee.Locator.PRECHAT_BUTTON + l), {
                rounded: !0,
                children: (0,
                a.tZ)(Se.Text, {
                    disableAloneEmoji: !0,
                    disableLinkify: !0,
                    children: v
                })
            }))
        }
          , jt = ({message: e, bubbleColor: t, onClick: n}) => {
            var o, r;
            (0,
            C.useErrorCatcher)("Listpicker");
            const {isWidgetConstructor: i} = (0,
            ce.useWidgetConstructorContext)();
            e.msg_id && (e.msg_id = 0 | e.msg_id);
            const {ref: l} = (0,
            ye.YD)({
                triggerOnce: !0,
                onChange: t => {
                    (0,
                    Tt.isEmpty)(String(e.text).trim()) && !i && t && (0,
                    R.readMessageOnView)(e)
                }
            });
            if (!e)
                return;
            const s = null === (o = e.body) || void 0 === o ? void 0 : o.answer_id
              , u = null === (r = e.body) || void 0 === r ? void 0 : r.keyboard;
            return (0,
            a.BX)("jdiv", {
                className: Et.default.main,
                "jv-private-id": e.private_id,
                children: [(0,
                a.tZ)("jdiv", {
                    className: St,
                    children: u.map(( (e, o) => {
                        if (!e)
                            return;
                        const r = e.url
                          , i = o + 1;
                        return (0,
                        a.tZ)(kt, {
                            button: e,
                            answerId: s,
                            onButtonClick: t => {
                                !r && s || n(t, i, e)
                            }
                            ,
                            bubbleColor: t,
                            index: i,
                            isIos: d.platform.isMobileOrTablet && d.platform.isIos
                        }, i)
                    }
                    ))
                }), (0,
                a.tZ)("jdiv", {
                    ref: l
                })]
            })
        }
          , Nt = (0,
        s.createLogger)("ListpickerWrap");
        var It = n(95066)
          , xt = n(87536)
          , Rt = n(2305)
          , Pt = n(18166)
          , At = n(87826)
          , Dt = n(53130)
          , Lt = n(79523)
          , Bt = n(82594);
        const Ht = () => {
            const e = (0,
            z.useAppSelector)(te.selectClientEmail)
              , t = (0,
            z.useAppSelector)(te.selectClientMailing)
              , n = (0,
            z.useAppSelector)(X.selectEula)
              , a = (0,
            z.useAppSelector)(te.selectClientEulaAccepted)
              , r = (0,
            z.useAppSelector)(X.selectMailing)
              , i = Boolean(n && !a)
              , l = Boolean(r)
              , s = (0,
            o.useMemo)(( () => ( (e, t, {hasEULA: n, hasMailing: a}) => {
                const o = {
                    email: ""
                }
                  , r = {
                    email: (0,
                    Bt.l1)(Bt.z2.email)
                }
                  , i = [{
                    name: "email",
                    required: !0
                }];
                return e && (o.email = e),
                n && (o.eula = !1,
                r.eula = Bt.z2.eula,
                i.push({
                    name: "eula",
                    required: !0
                })),
                a && (o.mailing = Boolean(t.email || t.phone) || !1,
                r.mailing = Bt.z2.mailing,
                i.push({
                    name: "mailing",
                    required: !1
                })),
                {
                    defaultValues: o,
                    fields: i,
                    resolver: (0,
                    Bt.A3)(r)
                }
            }
            )(e, t, {
                hasEULA: i,
                hasMailing: l
            })), [e, i, l]);
            return {
                clientEmail: e,
                clientMailing: t,
                form: s,
                hasEULA: i,
                hasMailing: l
            }
        }
        ;
        var Zt = "container__VxnhD";
        const Wt = ({children: e}) => (0,
        a.tZ)("jdiv", {
            className: Zt,
            children: e
        });
        var Ft = n(60478)
          , Ut = "form__FGwBT"
          , Vt = "title__H9uxe"
          , zt = "__isSubmitted__F8Y1p"
          , qt = "input__sbE9_"
          , Gt = "checkbox__dR4qy"
          , Yt = "__hidden__AEAEw"
          , $t = "button__l7QnH";
        const Xt = ({control: e, fields: t, title: n, clientEmail: o, computedMailing: r, isSubmitted: l, onSubmit: s, onEnterDown: u}) => {
            const c = l ? (0,
            U.l10n)("social_success_email", {
                email: o
            }) : n
              , d = e => {
                "Enter" === e.key && u()
            }
            ;
            return (0,
            a.BX)("jdiv", {
                className: Ut,
                children: [(0,
                a.tZ)("jdiv", {
                    className: i()(Vt, {
                        [zt]: l
                    }),
                    children: c
                }), !l && (0,
                a.BX)(a.HY, {
                    children: [t.map(( ({name: t, required: n}) => "eula" === t ? (0,
                    a.tZ)(Ft.wc, {
                        control: e,
                        name: t,
                        labelClassName: Gt,
                        required: !0,
                        qaId: "EMAIL_FORM_EULA",
                        telemetryLinkParams: {
                            param1: "from_email_form"
                        }
                    }, t) : "mailing" === t ? (0,
                    a.tZ)(Ft._M, {
                        control: e,
                        name: t,
                        labelClassName: i()(Gt, {
                            [Yt]: !r
                        }),
                        qaId: "EMAIL_FORM_MAILING",
                        telemetryLinkParams: {
                            param1: "from_email_form"
                        }
                    }, t) : (0,
                    a.tZ)(Ft.II, {
                        control: e,
                        name: t,
                        type: t,
                        containerClassName: qt,
                        label: (0,
                        U.l10n)("lblYourEmail"),
                        required: n,
                        qaId: "EMAIL_FORM_EMAIL",
                        onKeyDown: d
                    }, t))), (0,
                    a.tZ)(Ge.Button, {
                        size: "md",
                        tabIndex: 0,
                        className: $t,
                        fullWidth: !0,
                        qaId: "EMAIL_FORM_SUBMIT",
                        onClick: s,
                        onKeyDown: d,
                        children: (0,
                        U.l10n)("lblSend")
                    })]
                })]
            })
        }
        ;
        var Jt = n(96150)
          , Kt = n(70382)
          , Qt = n(496);
        const en = e => {
            (0,
            C.useErrorCatcher)("TextMessageContainer");
            const {messagesIds: t} = e
              , {isWidgetConstructor: n} = (0,
            ce.useWidgetConstructorContext)()
              , o = n ? [e.messages] : (0,
            z.useAppSelector)((0,
            G.selectMessagesByPrivateIds)(t), $.wU)
              , r = (0,
            z.useAppSelector)(X.selectBubbleColor);
            if (!(null == o ? void 0 : o.length))
                return;
            const {fromClient: l, fromAgent: s} = n ? {
                fromAgent: !0,
                fromClient: !1
            } : (0,
            Kt.messageInitiator)(o[0])
              , u = o[0]
              , c = u.type === K.MessageType.PROACTIVE
              , f = s ? lt.AgentMessageWrap : Jt.default;
            return (0,
            a.tZ)(f, {
                messages: o,
                children: (0,
                a.tZ)("jdiv", {
                    className: i()({
                        [gt.default.main]: !0,
                        [gt.default.__client]: l,
                        [gt.default.__agent]: s,
                        [gt.default.__mobile]: d.platform.isMobileOrTablet
                    }),
                    children: n ? (0,
                    a.tZ)(Qt.TextBox, {
                        message: u,
                        bubbleColor: r,
                        lineHeight: "auto",
                        isProactiveMessage: c,
                        isClientMessage: l,
                        isAgentMessage: s,
                        isDeletedMessage: !1,
                        isErrorMessage: !1,
                        isWidgetConstructor: n
                    }) : o.map(( (e, t) => e.type === K.MessageType.LISTPICKER ? null : (0,
                    a.tZ)(Qt.TextBox, {
                        message: e,
                        bubbleColor: r,
                        lineHeight: "auto",
                        isProactiveMessage: c,
                        isClientMessage: l,
                        isAgentMessage: s,
                        isDeletedMessage: (0,
                        Kt.messageStatus)(e).isDeleted,
                        isErrorMessage: (0,
                        Kt.isErrorMessage)(e),
                        isWidgetConstructor: !1
                    }, t)))
                })
            })
        }
          , tn = {
            [K.MessageType.MESSAGE]: en,
            [K.MessageType.PROACTIVE]: en,
            [K.MessageType.SEPARATOR]: Ke.Z,
            [K.MessageType.INVOICE]: Qe.Z,
            [K.MessageType.COBROWSE]: ({messages: e, privateId: t}) => {
                var n;
                (0,
                C.useErrorCatcher)("CobrowseMessage");
                const r = t ? ut(t) : e[0].toJSON()
                  , l = null == r ? void 0 : r.body
                  , s = (0,
                o.useRef)(null)
                  , u = (0,
                z.useAppSelector)(X.selectBubbleColor)
                  , [c,f] = (0,
                o.useState)(null == l ? void 0 : l.error)
                  , [p,g] = (0,
                o.useState)(!1)
                  , {isWidgetConstructor: _} = (0,
                ce.useWidgetConstructorContext)()
                  , v = (null == r ? void 0 : r.updated_ts) || (null == r ? void 0 : r.created_ts)
                  , b = (0,
                ot.default)(v, "dd.mm.yy H:MM:ss");
                if (!r || !r.from_id && "highlight" !== (null === (n = r.body) || void 0 === n ? void 0 : n.type))
                    return null;
                let y = null == l ? void 0 : l.hash
                  , w = null == l ? void 0 : l.page_url
                  , E = null;
                r.from_id && (E = +r.from_id,
                r.text = (null == l ? void 0 : l.text) || "",
                y = null == l ? void 0 : l.address,
                w = l.url);
                const T = (0,
                z.useAppSelector)(E ? (0,
                st.selectAgentById)(E) : () => null)
                  , S = (0,
                o.useCallback)((e => {
                    !e && t && (he.messagesDispatchers.updateMessageBody(t, {
                        error: !0
                    }),
                    f(!0))
                }
                ), [t])
                  , {ref: M} = (0,
                ye.YD)({
                    triggerOnce: !0,
                    onChange: e => {
                        !_ && e && (0,
                        R.readMessageOnView)(r)
                    }
                })
                  , O = (0,
                o.useCallback)(( () => {
                    const e = () => {
                        et.Z.getCobrowseData(y || null, w || null, r.text || null, T || null, S)
                    }
                    ;
                    d.platform.isMobileOrTablet ? (tt.Router.next(nt.RouterEvent.CloseWindow),
                    setTimeout(( () => {
                        e()
                    }
                    ), 1e3)) : e()
                }
                ), [T, y, r.text, S, w])
                  , k = (0,
                o.useCallback)((e => {
                    c || (e.preventDefault(),
                    O(),
                    (0,
                    re.telemetry)("cobrowse_click_button"))
                }
                ), [c, O])
                  , j = (0,
                o.useCallback)((e => {
                    var t;
                    const n = h.default.getComponent(m.Component.SCROLL_CONTAINER);
                    if (e === r.msg_id && (null === (t = s.current) || void 0 === t ? void 0 : t.offsetParent)) {
                        const e = s.current.offsetParent;
                        n.scrollTop(e.offsetTop + s.current.offsetTop - 30),
                        g(!0),
                        setTimeout(( () => {
                            g(!1)
                        }
                        ), 500)
                    }
                }
                ), [r.msg_id]);
                return (0,
                o.useEffect)(( () => {
                    const e = rt.QuoteEventEmitter.addListener(rt.QuoteEventClick, j);
                    return () => e.remove()
                }
                ), [j]),
                (0,
                a.BX)(lt.AgentMessageWrap, {
                    messages: [r],
                    children: [(0,
                    a.BX)("jdiv", {
                        ref: s,
                        className: i()({
                            [ct.main]: !0,
                            [ct["__" + u || 0]]: !0,
                            [ct.__mobile]: d.platform.isMobileOrTablet,
                            [ct.__flash]: p
                        }),
                        title: b,
                        "jv-private-id": r.private_id,
                        children: [(0,
                        a.tZ)("jdiv", {
                            className: ct.text,
                            children: r.text ? r.text : (0,
                            U.l10n)("lblDefaultCobrowseComment")
                        }), (0,
                        a.tZ)("jdiv", {
                            className: i()({
                                [ct.showBtn]: !0,
                                [ct.__disabled]: c
                            }),
                            onPointerDown: k,
                            onTouchStart: e => {
                                e.preventDefault(),
                                d.platform.supports.pointer || k(e)
                            }
                            ,
                            title: (0,
                            U.l10n)("lblDefaultCobrowseComment"),
                            children: (0,
                            U.l10n)("lblView")
                        }), c ? (0,
                        a.tZ)("jdiv", {
                            className: ct.error,
                            children: (0,
                            U.l10n)("cobrowseError")
                        }) : null, (0,
                        a.tZ)("jdiv", {
                            className: ct.time,
                            children: (0,
                            ot.default)(v, "H:MM")
                        }), (0,
                        a.tZ)("jdiv", {
                            className: ct.readBox,
                            ref: M
                        })]
                    }), Boolean(P.default.enable_reply) && r.msg_id && (0,
                    a.tZ)(at.default, {
                        msgId: r.msg_id,
                        isDeleted: r.status === it.MessageStatus.DELETED,
                        isAgentMessage: !0,
                        isAloneMessage: !1
                    })]
                })
            }
            ,
            [K.MessageType.SYSTEM]: dt.Z,
            [K.MessageType.INVITE]: dt.Z,
            [K.MessageType.PREFORM]: dt.Z,
            [K.MessageType.SOCIAL]: ft.Z,
            [K.MessageType.MEDIA]: pt.Z,
            [K.MessageType.EMAIL]: ({messages: e=[]}) => {
                (0,
                C.useErrorCatcher)("EmailForm");
                const {form: t, clientEmail: n, clientMailing: o, hasEULA: r, hasMailing: i} = Ht()
                  , l = e[0]
                  , {control: s, formState: {isSubmitSuccessful: u, errors: c}, watch: d, getValues: f, handleSubmit: p} = (0,
                xt.cI)({
                    defaultValues: t.defaultValues,
                    resolver: (0,
                    Rt.X)(t.resolver),
                    mode: "onChange"
                })
                  , h = (0,
                Pt.X)({
                    values: d(["email"]),
                    isMailingEnabled: i,
                    mailing: o
                }, t.defaultValues)
                  , m = p(( () => {
                    const e = f();
                    r && (0,
                    At.D)(),
                    i && (e.mailing ? (0,
                    Dt.O)(e) : (0,
                    Dt.f)(e)),
                    Lt.introduceActions.setClientContactInfo(e, !0),
                    wt.default.trackSystemMessageEmailSubmitted(),
                    (0,
                    re.telemetry)("submit_email_form_success")
                }
                ), ( () => {
                    (0,
                    re.telemetry)("submit_email_form_error", {
                        param1: JSON.stringify(c || null)
                    })
                }
                ));
                return (0,
                Tt.isEmpty)(e) ? null : (0,
                a.tZ)(Wt, {
                    children: (0,
                    a.tZ)(Xt, {
                        control: s,
                        fields: t.fields,
                        title: null == l ? void 0 : l.get("text"),
                        clientEmail: String(n),
                        computedMailing: h,
                        isSubmitted: u,
                        onSubmit: m,
                        onEnterDown: () => {
                            m()
                        }
                    })
                })
            }
            ,
            [K.MessageType.FORM]: pe.t,
            [K.MessageType.TEMPORARY]: ht.Z,
            [K.MessageType.FOR_TEST]: ({privateId: e}) => {
                (0,
                C.useErrorCatcher)("OfflineTextMessage");
                const t = ut(e);
                if (!t)
                    return;
                const {created_ts: n, text: o} = t
                  , r = (0,
                ot.default)(n, "dd.mm.yy H:MM:ss");
                return (0,
                a.tZ)("jdiv", {
                    className: i()(_t.Z.main, _t.Z._noagent, {
                        [_t.Z._mobile]: d.platform.isMobileOrChatpage
                    }),
                    children: (0,
                    a.tZ)("jdiv", {
                        className: _t.Z.content,
                        children: (0,
                        a.tZ)("jdiv", {
                            className: i()(gt.default.main, gt.default.__agent, {
                                [gt.default.__mobile]: d.platform.isMobileOrTablet
                            }),
                            children: (0,
                            a.tZ)("jdiv", {
                                className: i()(gt.default.message, gt.default.textWrap),
                                title: r,
                                children: (0,
                                a.tZ)("jdiv", {
                                    className: gt.default.text,
                                    children: (0,
                                    a.tZ)(Se.Text, {
                                        children: o
                                    })
                                })
                            })
                        })
                    })
                })
            }
            ,
            [K.MessageType.PRECHAT]: mt.Z,
            [K.MessageType.BOT]: en,
            [K.MessageType.LISTPICKER]: ({privateId: e}) => {
                (0,
                C.useErrorCatcher)("ListpickerWrap");
                const t = (0,
                z.useAppSelector)((0,
                G.selectMessagesByPrivateIds)([e]))
                  , n = (0,
                z.useAppSelector)(yt.selectBubbleColor);
                if (!(null == t ? void 0 : t.length))
                    return;
                const o = t[1];
                if (!o)
                    return;
                const r = o.msg_id;
                return (0,
                a.tZ)(jt, {
                    message: o,
                    onClick: (e, t, n) => {
                        e.preventDefault();
                        const {text: a, url: o, id: i} = n
                          , l = Boolean(o);
                        if (bt.messageActions.setListpickerAnswer(r, i || t, l),
                        l) {
                            (0,
                            x.getPageWindow)().open(o, "_blank") || Nt.warn("cant open url", o)
                        } else
                            bt.messageActions.sendClientMessage({
                                text: a,
                                buttonId: i
                            }),
                            d.platform.isMobileOrTablet || (0,
                            vt.afterEmojiInserted)();
                        (0,
                        re.telemetry)("bot_button_click", {
                            param1: o ? "url_open" : "send_message"
                        }),
                        wt.default.trackBotButtonClick(o || a)
                    }
                    ,
                    bubbleColor: n
                })
            }
            ,
            [K.MessageType.WEB_RTC_CALL]: It.Z,
            [K.MessageType.RATE_FORM]: Je
        };
        var nn = "main__JwKJf"
          , an = "container__JR1eD"
          , on = "__ad__tSvTE"
          , rn = "__mobile__DIFjG"
          , ln = "wrap__caNCM"
          , sn = "__tablet__dkn2S"
          , un = "scroll__R6TU6"
          , cn = "rail__YoqR8"
          , dn = "avatarShadow__YpYWz"
          , fn = "__show__iFbNe"
          , pn = "__widgetConstructor__X9Prf"
          , hn = n(59699);
        const mn = (0,
        s.createLogger)("MessagesContainer")
          , gn = ({messagesGroups: e, diff: t, bottomOffset: n, onMessagesAnimationEnd: o, onScrollEnd: r}) => {
            (0,
            C.useErrorCatcher)("MessagesContainer");
            const {isWidgetConstructor: l} = (0,
            ce.useWidgetConstructorContext)()
              , s = (0,
            z.useAppSelector)(X.selectCampaignWidgetMessageFeed)
              , u = d.platform.isMobileOrTablet ? 40 : 30
              , c = {
                transform: t ? `translateY(${-1 * t}px)` : "translateY(0)",
                bottom: n || 0,
                transition: 0 === t ? "none" : "transform 0.2s cubic-bezier(0, 0.76, 0.28, 1)"
            };
            return (0,
            a.tZ)(de.default, {
                onScrollStop: r,
                className: un,
                autoHide: !0,
                scrollMarginTop: (0,
                M.isCopyrightEnabled)() ? u : 0,
                railClass: cn,
                ref: e => {
                    e && h.default.set(m.Component.SCROLL_CONTAINER, e)
                }
                ,
                children: (0,
                a.tZ)("jdiv", {
                    className: i()({
                        [an]: !0,
                        [sn]: d.platform.isTablet
                    }),
                    onTransitionEnd: e => {
                        null == o || o(e)
                    }
                    ,
                    ref: e => {
                        e && h.default.set(m.Component.MESSAGES_CONTAINER, e)
                    }
                    ,
                    style: c,
                    children: l ? s.map(( (e, t) => {
                        const n = e.type
                          , o = tn[n];
                        if (o)
                            return (0,
                            a.tZ)(o, {
                                messages: e
                            }, t)
                    }
                    )) : e.map(( (e, t) => {
                        var n, o;
                        const r = e[0]instanceof fe.default ? e[0].toJSON() : e[0];
                        if (r && r.type == K.MessageType.MEDIA && (null === (n = r.body) || void 0 === n ? void 0 : n.type) == K.MessageType.COBROWSE && r.from_id && (r.type = K.MessageType.COBROWSE),
                        !r.type)
                            return;
                        const i = tn[r.type];
                        if (r.type === K.MessageType.FOR_TEST)
                            return (0,
                            a.tZ)(hn.R, {
                                children: (0,
                                a.tZ)(i, {
                                    privateId: r.private_id
                                })
                            }, t);
                        if (r.type === K.MessageType.LISTPICKER && (null === (o = r.body) || void 0 === o ? void 0 : o.keyboard))
                            return (0,
                            a.tZ)(hn.R, {
                                children: (0,
                                a.tZ)(i, {
                                    privateId: r.private_id
                                })
                            }, t);
                        if (r.type === K.MessageType.COBROWSE)
                            return (0,
                            a.tZ)(hn.R, {
                                children: (0,
                                a.tZ)(i, {
                                    privateId: r.private_id
                                })
                            }, t);
                        if ([K.MessageType.PROACTIVE, K.MessageType.MESSAGE, K.MessageType.BOT].includes(r.type)) {
                            const n = [];
                            return e.map((e => {
                                const t = e.get("private_id");
                                n.includes(t) || n.push(t)
                            }
                            )),
                            (0,
                            a.tZ)(hn.R, {
                                children: (0,
                                a.tZ)(i, {
                                    messagesIds: n
                                })
                            }, t)
                        }
                        return i ? (0,
                        a.tZ)(hn.R, {
                            children: (0,
                            a.tZ)(i, {
                                messages: e
                            })
                        }, t) : void mn.warn("Message type is not supported")
                    }
                    ))
                })
            })
        }
          , _n = (0,
        s.createLogger)("MessagesMain")
          , vn = d.platform.isMobileOrChatpage
          , bn = () => {
            var e;
            (0,
            C.useErrorCatcher)("MessagesMain");
            const t = (0,
            o.useRef)(null)
              , n = h.default.getComponent(m.Component.SCROLL_CONTAINER)
              , r = h.default.get(m.Component.CHAT_INPUT)
              , {typingInsight: s, isAgentTyping: d, bubbleColor: g, messagesGroups: _, messages: v, proactive: b, showMore: y, showBadge: w, hideScrollButton: E, unreadMsg: T, isBot: P, isBotTyping: A, avatarUrl: D, isShowAvatarShadow: L, getBottom: B, onScrollEnd: H, onMoreClick: Z, scrollToFirstUnread: W, route: F, prechatMsg: U} = ie({
                scrollComponent: n,
                input: r
            })
              , V = (0,
            o.useCallback)(( (e=!1) => {
                if ((0,
                I.isChatInputRoute)(F) && n && n.view) {
                    const t = (0,
                    x.getPageWindow)().document.activeElement;
                    if ((0,
                    N.isInputFocused)() && t && (0,
                    N.isParentHasElement)(t, n.view))
                        return void _n.log("Ignore auto scroll, form focused.", t);
                    _n.warn("SCROLL TO BOTTOM"),
                    n.scrollToBottom(e)
                }
            }
            ), [n, F]);
            (0,
            o.useEffect)(( () => {
                T.length || b.name || !(0,
                I.isChatInputRoute)(F) || setTimeout(( () => {
                    V(!0)
                }
                ), 500)
            }
            ), [U, T.length, F, V, b]),
            (0,
            O.r)(( () => {
                _n.log("update messages count"),
                V(!0)
            }
            ), [v.length]);
            const z = v[v.length - 1];
            (0,
            O.r)(( () => {
                const e = z.body;
                (0,
                I.isChatInputRoute)(F) && "media" === (null == z ? void 0 : z.type) && (null == e ? void 0 : e.loaded) && V(!0)
            }
            ), [null === (e = null == z ? void 0 : z.body) || void 0 === e ? void 0 : e.loaded, null == z ? void 0 : z.type]);
            const [q,G] = (0,
            o.useState)(!1);
            return (0,
            o.useEffect)(( () => {
                if (q)
                    return;
                (0,
                I.isChatInputRoute)(F) && n && n.view && setTimeout(( () => {
                    b.name ? (0,
                    R.scrollToElement)({
                        elId: b.privateId,
                        offset: 30
                    }) : T.length ? W() : V(),
                    G(!0)
                }
                ), 200)
            }
            ), [n, b, F, T, W, V, q]),
            (0,
            a.BX)("jdiv", {
                className: i()({
                    [nn]: !0,
                    [rn]: vn,
                    [on]: (0,
                    M.isCopyrightEnabled)(),
                    [pn]: c.EnvironmentManager.isWidgetConstructor()
                }),
                style: {
                    bottom: B() + "px",
                    backgroundImage: j.V.chatPageYClients ? `url(${(0,
                    k.getPatternURL)("15")})` : void 0,
                    backgroundSize: j.V.chatPageYClients ? 250 : void 0
                },
                children: [(0,
                a.tZ)(Y, {
                    hideScrollButton: E
                }), (0,
                a.BX)("jdiv", Object.assign({
                    className: ln
                }, (0,
                u.onClickHandler)((e => {
                    (0,
                    R.onWrapTouch)(e)
                }
                )), {
                    ref: t,
                    children: [(0,
                    a.tZ)(gn, {
                        messagesGroups: _,
                        onScrollEnd: (0,
                        p.debounce)(H, 200),
                        diff: 0,
                        bottomOffset: "0px"
                    }), s && !vn ? (0,
                    a.tZ)(l.Typing, {
                        show: d,
                        isBot: A
                    }) : null, (0,
                    M.isCopyrightEnabled)() && !vn ? (0,
                    a.tZ)(f.default, {
                        top: !1,
                        bottom: !0
                    }) : null, (0,
                    a.tZ)("jdiv", {
                        className: i()({
                            [dn]: !0,
                            [rn]: vn,
                            [fn]: L
                        }),
                        style: {
                            marginBottom: B()
                        },
                        children: (0,
                        a.tZ)(ue, {
                            isBot: P,
                            url: D
                        })
                    }), (0,
                    a.tZ)(S, {
                        color: g,
                        show: y,
                        showBadge: w,
                        onClick: Z,
                        unreadCount: T.length
                    })]
                }))]
            })
        }
    },
    89505: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            Typing: function() {
                return c
            }
        });
        var a = n(16584)
          , o = (n(98661),
        n(94184))
          , r = n.n(o)
          , i = n(18276)
          , l = n(31238)
          , s = "typing__fHIwW"
          , u = "__show__Gzvj5";
        const c = ({show: e=!1, isBot: t}) => (0,
        a.BX)("jdiv", {
            className: r()(s, {
                [u]: e
            }),
            children: [(0,
            i.l10n)(t ? "botTyping" : "lblPencilHint"), (0,
            a.tZ)(l.DotsIcon, {
                animation: "pulseWave"
            })]
        })
    },
    70051: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            selectAgentById: function() {
                return r
            },
            selectAgents: function() {
                return o
            }
        });
        var a = n(19119);
        const o = e => e.agents
          , r = e => (0,
        a.P1)([e => e.agents], (t => t.find((t => t.id === +e))))
    },
    90842: function(e, t, n) {
        (function() {
            "use strict";
            var e = this;
            function t(e) {
                return "string" == typeof e
            }
            function n(e, t, n) {
                return e.call.apply(e.bind, arguments)
            }
            function a(e, t, n) {
                if (!e)
                    throw Error();
                if (2 < arguments.length) {
                    var a = Array.prototype.slice.call(arguments, 2);
                    return function() {
                        var n = Array.prototype.slice.call(arguments);
                        return Array.prototype.unshift.apply(n, a),
                        e.apply(t, n)
                    }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
            function o(e, t, r) {
                return (o = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n : a).apply(null, arguments)
            }
            function r(e) {
                var t = ie;
                function n() {}
                n.prototype = t.prototype,
                e.G = t.prototype,
                e.prototype = new n,
                e.prototype.constructor = e,
                e.F = function(e, n, a) {
                    for (var o = Array(arguments.length - 2), r = 2; r < arguments.length; r++)
                        o[r - 2] = arguments[r];
                    return t.prototype[n].apply(e, o)
                }
            }
            var i = String.prototype.trim ? function(e) {
                return e.trim()
            }
            : function(e) {
                return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
            }
            ;
            function l(e, t) {
                return -1 != e.indexOf(t)
            }
            function s(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }
            var u, c = Array.prototype.indexOf ? function(e, t, n) {
                return Array.prototype.indexOf.call(e, t, n)
            }
            : function(e, n, a) {
                if (a = null == a ? 0 : 0 > a ? Math.max(0, e.length + a) : a,
                t(e))
                    return t(n) && 1 == n.length ? e.indexOf(n, a) : -1;
                for (; a < e.length; a++)
                    if (a in e && e[a] === n)
                        return a;
                return -1
            }
            , d = Array.prototype.forEach ? function(e, t, n) {
                Array.prototype.forEach.call(e, t, n)
            }
            : function(e, n, a) {
                for (var o = e.length, r = t(e) ? e.split("") : e, i = 0; i < o; i++)
                    i in r && n.call(a, r[i], i, e)
            }
            , f = Array.prototype.filter ? function(e, t, n) {
                return Array.prototype.filter.call(e, t, n)
            }
            : function(e, n, a) {
                for (var o = e.length, r = [], i = 0, l = t(e) ? e.split("") : e, s = 0; s < o; s++)
                    if (s in l) {
                        var u = l[s];
                        n.call(a, u, s, e) && (r[i++] = u)
                    }
                return r
            }
            , p = Array.prototype.reduce ? function(e, t, n, a) {
                return a && (t = o(t, a)),
                Array.prototype.reduce.call(e, t, n)
            }
            : function(e, t, n, a) {
                var o = n;
                return d(e, (function(n, r) {
                    o = t.call(a, o, n, r, e)
                }
                )),
                o
            }
            , h = Array.prototype.some ? function(e, t, n) {
                return Array.prototype.some.call(e, t, n)
            }
            : function(e, n, a) {
                for (var o = e.length, r = t(e) ? e.split("") : e, i = 0; i < o; i++)
                    if (i in r && n.call(a, r[i], i, e))
                        return !0;
                return !1
            }
            ;
            function m(e, t, n) {
                return 2 >= arguments.length ? Array.prototype.slice.call(e, t) : Array.prototype.slice.call(e, t, n)
            }
            e: {
                var g = e.navigator;
                if (g) {
                    var _ = g.userAgent;
                    if (_) {
                        u = _;
                        break e
                    }
                }
                u = ""
            }
            var v, b, y = l(u, "Opera") || l(u, "OPR"), w = l(u, "Trident") || l(u, "MSIE"), E = l(u, "Edge"), T = l(u, "Gecko") && !(l(u.toLowerCase(), "webkit") && !l(u, "Edge")) && !(l(u, "Trident") || l(u, "MSIE")) && !l(u, "Edge"), S = l(u.toLowerCase(), "webkit") && !l(u, "Edge");
            function M() {
                var t = e.document;
                return t ? t.documentMode : void 0
            }
            e: {
                var C = ""
                  , O = (b = u,
                T ? /rv\:([^\);]+)(\)|;)/.exec(b) : E ? /Edge\/([\d\.]+)/.exec(b) : w ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(b) : S ? /WebKit\/(\S+)/.exec(b) : y ? /(?:Version)[ \/]?(\S+)/.exec(b) : void 0);
                if (O && (C = O ? O[1] : ""),
                w) {
                    var k = M();
                    if (null != k && k > parseFloat(C)) {
                        v = String(k);
                        break e
                    }
                }
                v = C
            }
            var j = {};
            function N(e) {
                if (!j[e]) {
                    for (var t = 0, n = i(String(v)).split("."), a = i(String(e)).split("."), o = Math.max(n.length, a.length), r = 0; 0 == t && r < o; r++) {
                        var l = n[r] || ""
                          , u = a[r] || ""
                          , c = /(\d*)(\D*)/g
                          , d = /(\d*)(\D*)/g;
                        do {
                            var f = c.exec(l) || ["", "", ""]
                              , p = d.exec(u) || ["", "", ""];
                            if (0 == f[0].length && 0 == p[0].length)
                                break;
                            t = s(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || s(0 == f[2].length, 0 == p[2].length) || s(f[2], p[2])
                        } while (0 == t)
                    }
                    j[e] = 0 <= t
                }
            }
            var I = e.document
              , x = I && w ? M() || ("CSS1Compat" == I.compatMode ? parseInt(v, 10) : 5) : void 0
              , R = w && !(9 <= Number(x))
              , P = w && !(8 <= Number(x));
            function A(e, t, n, a) {
                this.a = e,
                this.nodeName = n,
                this.nodeValue = a,
                this.nodeType = 2,
                this.parentNode = this.ownerElement = t
            }
            function D(e, t) {
                var n = P && "href" == t.nodeName ? e.getAttribute(t.nodeName, 2) : t.nodeValue;
                return new A(t,e,t.nodeName,n)
            }
            function L(e) {
                var t = null;
                if (1 == (n = e.nodeType) && (t = null == (t = null == (t = e.textContent) || null == t ? e.innerText : t) || null == t ? "" : t),
                "string" != typeof t)
                    if (R && "title" == e.nodeName.toLowerCase() && 1 == n)
                        t = e.text;
                    else if (9 == n || 1 == n) {
                        e = 9 == n ? e.documentElement : e.firstChild;
                        var n = 0
                          , a = [];
                        for (t = ""; e; ) {
                            do {
                                1 != e.nodeType && (t += e.nodeValue),
                                R && "title" == e.nodeName.toLowerCase() && (t += e.text),
                                a[n++] = e
                            } while (e = e.firstChild);
                            for (; n && !(e = a[--n].nextSibling); )
                                ;
                        }
                    } else
                        t = e.nodeValue;
                return "" + t
            }
            function B(e, t, n) {
                if (null === t)
                    return !0;
                try {
                    if (!e.getAttribute)
                        return !1
                } catch (e) {
                    return !1
                }
                return P && "class" == t && (t = "className"),
                null == n ? !!e.getAttribute(t) : e.getAttribute(t, 2) == n
            }
            function H(e, n, a, o, r) {
                return (R ? Z : W).call(null, e, n, t(a) ? a : null, t(o) ? o : null, r || new X)
            }
            function Z(e, t, n, a, o) {
                if (e instanceof Pe || 8 == e.b || n && null === e.b) {
                    var r = t.all;
                    if (!r)
                        return o;
                    if ("*" != (e = z(e)) && !(r = t.getElementsByTagName(e)))
                        return o;
                    if (n) {
                        for (var i = [], l = 0; t = r[l++]; )
                            B(t, n, a) && i.push(t);
                        r = i
                    }
                    for (l = 0; t = r[l++]; )
                        "*" == e && "!" == t.tagName || ee(o, t);
                    return o
                }
                return V(e, t, n, a, o),
                o
            }
            function W(e, t, n, a, o) {
                return t.getElementsByName && a && "name" == n && !w ? (t = t.getElementsByName(a),
                d(t, (function(t) {
                    e.a(t) && ee(o, t)
                }
                ))) : t.getElementsByClassName && a && "class" == n ? (t = t.getElementsByClassName(a),
                d(t, (function(t) {
                    t.className == a && e.a(t) && ee(o, t)
                }
                ))) : e instanceof Me ? V(e, t, n, a, o) : t.getElementsByTagName && (t = t.getElementsByTagName(e.f()),
                d(t, (function(e) {
                    B(e, n, a) && ee(o, e)
                }
                ))),
                o
            }
            function F(e, t, n, a, o) {
                var r;
                if ((e instanceof Pe || 8 == e.b || n && null === e.b) && (r = t.childNodes)) {
                    var i = z(e);
                    return "*" == i || (r = f(r, (function(e) {
                        return e.tagName && e.tagName.toLowerCase() == i
                    }
                    )),
                    r) ? (n && (r = f(r, (function(e) {
                        return B(e, n, a)
                    }
                    ))),
                    d(r, (function(e) {
                        "*" == i && ("!" == e.tagName || "*" == i && 1 != e.nodeType) || ee(o, e)
                    }
                    )),
                    o) : o
                }
                return U(e, t, n, a, o)
            }
            function U(e, t, n, a, o) {
                for (t = t.firstChild; t; t = t.nextSibling)
                    B(t, n, a) && e.a(t) && ee(o, t);
                return o
            }
            function V(e, t, n, a, o) {
                for (t = t.firstChild; t; t = t.nextSibling)
                    B(t, n, a) && e.a(t) && ee(o, t),
                    V(e, t, n, a, o)
            }
            function z(e) {
                if (e instanceof Me) {
                    if (8 == e.b)
                        return "!";
                    if (null === e.b)
                        return "*"
                }
                return e.f()
            }
            function q(e, t) {
                if (!e || !t)
                    return !1;
                if (e.contains && 1 == t.nodeType)
                    return e == t || e.contains(t);
                if (void 0 !== e.compareDocumentPosition)
                    return e == t || !!(16 & e.compareDocumentPosition(t));
                for (; t && e != t; )
                    t = t.parentNode;
                return t == e
            }
            function G(t, n) {
                if (t == n)
                    return 0;
                if (t.compareDocumentPosition)
                    return 2 & t.compareDocumentPosition(n) ? 1 : -1;
                if (w && !(9 <= Number(x))) {
                    if (9 == t.nodeType)
                        return -1;
                    if (9 == n.nodeType)
                        return 1
                }
                if ("sourceIndex"in t || t.parentNode && "sourceIndex"in t.parentNode) {
                    var a = 1 == t.nodeType
                      , o = 1 == n.nodeType;
                    if (a && o)
                        return t.sourceIndex - n.sourceIndex;
                    var r = t.parentNode
                      , i = n.parentNode;
                    return r == i ? $(t, n) : !a && q(r, n) ? -1 * Y(t, n) : !o && q(i, t) ? Y(n, t) : (a ? t.sourceIndex : r.sourceIndex) - (o ? n.sourceIndex : i.sourceIndex)
                }
                return (a = (o = 9 == t.nodeType ? t : t.ownerDocument || t.document).createRange()).selectNode(t),
                a.collapse(!0),
                (o = o.createRange()).selectNode(n),
                o.collapse(!0),
                a.compareBoundaryPoints(e.Range.START_TO_END, o)
            }
            function Y(e, t) {
                var n = e.parentNode;
                if (n == t)
                    return -1;
                for (var a = t; a.parentNode != n; )
                    a = a.parentNode;
                return $(a, e)
            }
            function $(e, t) {
                for (var n = t; n = n.previousSibling; )
                    if (n == e)
                        return -1;
                return 1
            }
            function X() {
                this.b = this.a = null,
                this.l = 0
            }
            function J(e) {
                this.node = e,
                this.a = this.b = null
            }
            function K(e, t) {
                if (!e.a)
                    return t;
                if (!t.a)
                    return e;
                for (var n = e.a, a = t.a, o = null, r = null, i = 0; n && a; ) {
                    r = n.node;
                    var l = a.node;
                    r == l || r instanceof A && l instanceof A && r.a == l.a ? (r = n,
                    n = n.a,
                    a = a.a) : 0 < G(n.node, a.node) ? (r = a,
                    a = a.a) : (r = n,
                    n = n.a),
                    (r.b = o) ? o.a = r : e.a = r,
                    o = r,
                    i++
                }
                for (r = n || a; r; )
                    r.b = o,
                    o = o.a = r,
                    i++,
                    r = r.a;
                return e.b = o,
                e.l = i,
                e
            }
            function Q(e, t) {
                var n = new J(t);
                n.a = e.a,
                e.b ? e.a.b = n : e.a = e.b = n,
                e.a = n,
                e.l++
            }
            function ee(e, t) {
                var n = new J(t);
                n.b = e.b,
                e.a ? e.b.a = n : e.a = e.b = n,
                e.b = n,
                e.l++
            }
            function te(e) {
                return (e = e.a) ? e.node : null
            }
            function ne(e) {
                return (e = te(e)) ? L(e) : ""
            }
            function ae(e, t) {
                return new oe(e,!!t)
            }
            function oe(e, t) {
                this.f = e,
                this.b = (this.c = t) ? e.b : e.a,
                this.a = null
            }
            function re(e) {
                var t = e.b;
                if (null == t)
                    return null;
                var n = e.a = t;
                return e.b = e.c ? t.b : t.a,
                n.node
            }
            function ie(e) {
                this.i = e,
                this.b = this.g = !1,
                this.f = null
            }
            function le(e) {
                return "\n  " + e.toString().split("\n").join("\n  ")
            }
            function se(e, t) {
                e.g = t
            }
            function ue(e, t) {
                e.b = t
            }
            function ce(e, t) {
                var n = e.a(t);
                return n instanceof X ? +ne(n) : +n
            }
            function de(e, t) {
                var n = e.a(t);
                return n instanceof X ? ne(n) : "" + n
            }
            function fe(e, t) {
                var n = e.a(t);
                return n instanceof X ? !!n.l : !!n
            }
            function pe(e, t, n) {
                ie.call(this, e.i),
                this.c = e,
                this.h = t,
                this.o = n,
                this.g = t.g || n.g,
                this.b = t.b || n.b,
                this.c == ve && (n.b || n.g || 4 == n.i || 0 == n.i || !t.f ? t.b || t.g || 4 == t.i || 0 == t.i || !n.f || (this.f = {
                    name: n.f.name,
                    s: t
                }) : this.f = {
                    name: t.f.name,
                    s: n
                })
            }
            function he(e, t, n, a, o) {
                var r;
                if (t = t.a(a),
                n = n.a(a),
                t instanceof X && n instanceof X) {
                    for (a = re(t = ae(t)); a; a = re(t))
                        for (r = re(o = ae(n)); r; r = re(o))
                            if (e(L(a), L(r)))
                                return !0;
                    return !1
                }
                if (t instanceof X || n instanceof X) {
                    t instanceof X ? (o = t,
                    a = n) : (o = n,
                    a = t);
                    for (var i = typeof a, l = re(r = ae(o)); l; l = re(r)) {
                        switch (i) {
                        case "number":
                            l = +L(l);
                            break;
                        case "boolean":
                            l = !!L(l);
                            break;
                        case "string":
                            l = L(l);
                            break;
                        default:
                            throw Error("Illegal primitive type for comparison.")
                        }
                        if (o == t && e(l, a) || o == n && e(a, l))
                            return !0
                    }
                    return !1
                }
                return o ? "boolean" == typeof t || "boolean" == typeof n ? e(!!t, !!n) : "number" == typeof t || "number" == typeof n ? e(+t, +n) : e(t, n) : e(+t, +n)
            }
            function me(e, t, n, a) {
                this.a = e,
                this.w = t,
                this.i = n,
                this.m = a
            }
            !T && !w || w && 9 <= Number(x) || T && N("1.9.1"),
            w && N("9"),
            r(pe),
            pe.prototype.a = function(e) {
                return this.c.m(this.h, this.o, e)
            }
            ,
            pe.prototype.toString = function() {
                return "Binary Expression: " + this.c + le(this.h) + le(this.o)
            }
            ,
            me.prototype.toString = function() {
                return this.a
            }
            ;
            var ge = {};
            function _e(e, t, n, a) {
                if (ge.hasOwnProperty(e))
                    throw Error("Binary operator already created: " + e);
                return e = new me(e,t,n,a),
                ge[e.toString()] = e
            }
            _e("div", 6, 1, (function(e, t, n) {
                return ce(e, n) / ce(t, n)
            }
            )),
            _e("mod", 6, 1, (function(e, t, n) {
                return ce(e, n) % ce(t, n)
            }
            )),
            _e("*", 6, 1, (function(e, t, n) {
                return ce(e, n) * ce(t, n)
            }
            )),
            _e("+", 5, 1, (function(e, t, n) {
                return ce(e, n) + ce(t, n)
            }
            )),
            _e("-", 5, 1, (function(e, t, n) {
                return ce(e, n) - ce(t, n)
            }
            )),
            _e("<", 4, 2, (function(e, t, n) {
                return he((function(e, t) {
                    return e < t
                }
                ), e, t, n)
            }
            )),
            _e(">", 4, 2, (function(e, t, n) {
                return he((function(e, t) {
                    return e > t
                }
                ), e, t, n)
            }
            )),
            _e("<=", 4, 2, (function(e, t, n) {
                return he((function(e, t) {
                    return e <= t
                }
                ), e, t, n)
            }
            )),
            _e(">=", 4, 2, (function(e, t, n) {
                return he((function(e, t) {
                    return e >= t
                }
                ), e, t, n)
            }
            ));
            var ve = _e("=", 3, 2, (function(e, t, n) {
                return he((function(e, t) {
                    return e == t
                }
                ), e, t, n, !0)
            }
            ));
            function be(e, t, n) {
                this.a = e,
                this.b = t || 1,
                this.f = n || 1
            }
            function ye(e, t) {
                if (t.a.length && 4 != e.i)
                    throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");
                ie.call(this, e.i),
                this.c = e,
                this.h = t,
                this.g = e.g,
                this.b = e.b
            }
            function we(e, t) {
                if (t.length < e.A)
                    throw Error("Function " + e.j + " expects at least" + e.A + " arguments, " + t.length + " given");
                if (null !== e.v && t.length > e.v)
                    throw Error("Function " + e.j + " expects at most " + e.v + " arguments, " + t.length + " given");
                e.B && d(t, (function(t, n) {
                    if (4 != t.i)
                        throw Error("Argument " + n + " to function " + e.j + " is not of type Nodeset: " + t)
                }
                )),
                ie.call(this, e.i),
                this.h = e,
                this.c = t,
                se(this, e.g || h(t, (function(e) {
                    return e.g
                }
                ))),
                ue(this, e.D && !t.length || e.C && !!t.length || h(t, (function(e) {
                    return e.b
                }
                )))
            }
            function Ee(e, t, n, a, o, r, i, l, s) {
                this.j = e,
                this.i = t,
                this.g = n,
                this.D = a,
                this.C = o,
                this.m = r,
                this.A = i,
                this.v = void 0 !== l ? l : i,
                this.B = !!s
            }
            _e("!=", 3, 2, (function(e, t, n) {
                return he((function(e, t) {
                    return e != t
                }
                ), e, t, n, !0)
            }
            )),
            _e("and", 2, 2, (function(e, t, n) {
                return fe(e, n) && fe(t, n)
            }
            )),
            _e("or", 1, 2, (function(e, t, n) {
                return fe(e, n) || fe(t, n)
            }
            )),
            r(ye),
            ye.prototype.a = function(e) {
                return e = this.c.a(e),
                ze(this.h, e)
            }
            ,
            ye.prototype.toString = function() {
                return "Filter:" + le(this.c) + le(this.h)
            }
            ,
            r(we),
            we.prototype.a = function(e) {
                return this.h.m.apply(null, function(e) {
                    return Array.prototype.concat.apply(Array.prototype, arguments)
                }(e, this.c))
            }
            ,
            we.prototype.toString = function() {
                var e = "Function: " + this.h;
                if (this.c.length) {
                    var t = p(this.c, (function(e, t) {
                        return e + le(t)
                    }
                    ), "Arguments:");
                    e = e + le(t)
                }
                return e
            }
            ,
            Ee.prototype.toString = function() {
                return this.j
            }
            ;
            var Te = {};
            function Se(e, t, n, a, o, r, i, l) {
                if (Te.hasOwnProperty(e))
                    throw Error("Function already created: " + e + ".");
                Te[e] = new Ee(e,t,n,a,!1,o,r,i,l)
            }
            function Me(e, t) {
                switch (this.h = e,
                this.c = void 0 !== t ? t : null,
                this.b = null,
                e) {
                case "comment":
                    this.b = 8;
                    break;
                case "text":
                    this.b = 3;
                    break;
                case "processing-instruction":
                    this.b = 7;
                    break;
                case "node":
                    break;
                default:
                    throw Error("Unexpected argument")
                }
            }
            function Ce(e) {
                return "comment" == e || "text" == e || "processing-instruction" == e || "node" == e
            }
            function Oe(e) {
                this.b = e,
                this.a = 0
            }
            Se("boolean", 2, !1, !1, (function(e, t) {
                return fe(t, e)
            }
            ), 1),
            Se("ceiling", 1, !1, !1, (function(e, t) {
                return Math.ceil(ce(t, e))
            }
            ), 1),
            Se("concat", 3, !1, !1, (function(e, t) {
                return p(m(arguments, 1), (function(t, n) {
                    return t + de(n, e)
                }
                ), "")
            }
            ), 2, null),
            Se("contains", 2, !1, !1, (function(e, t, n) {
                return l(de(t, e), de(n, e))
            }
            ), 2),
            Se("count", 1, !1, !1, (function(e, t) {
                return t.a(e).l
            }
            ), 1, 1, !0),
            Se("false", 2, !1, !1, (function() {
                return !1
            }
            ), 0),
            Se("floor", 1, !1, !1, (function(e, t) {
                return Math.floor(ce(t, e))
            }
            ), 1),
            Se("id", 4, !1, !1, (function(e, n) {
                function a(e) {
                    if (R) {
                        var n = o.all[e];
                        if (n) {
                            if (n.nodeType && e == n.id)
                                return n;
                            if (n.length)
                                return function(e, n) {
                                    var a;
                                    e: {
                                        a = e.length;
                                        for (var o = t(e) ? e.split("") : e, r = 0; r < a; r++)
                                            if (r in o && n.call(void 0, o[r], r, e)) {
                                                a = r;
                                                break e
                                            }
                                        a = -1
                                    }
                                    return 0 > a ? null : t(e) ? e.charAt(a) : e[a]
                                }(n, (function(t) {
                                    return e == t.id
                                }
                                ))
                        }
                        return null
                    }
                    return o.getElementById(e)
                }
                var o = 9 == (r = e.a).nodeType ? r : r.ownerDocument
                  , r = de(n, e).split(/\s+/)
                  , i = [];
                d(r, (function(e) {
                    !(e = a(e)) || 0 <= c(i, e) || i.push(e)
                }
                )),
                i.sort(G);
                var l = new X;
                return d(i, (function(e) {
                    ee(l, e)
                }
                )),
                l
            }
            ), 1),
            Se("lang", 2, !1, !1, (function() {
                return !1
            }
            ), 1),
            Se("last", 1, !0, !1, (function(e) {
                if (1 != arguments.length)
                    throw Error("Function last expects ()");
                return e.f
            }
            ), 0),
            Se("local-name", 3, !1, !0, (function(e, t) {
                var n = t ? te(t.a(e)) : e.a;
                return n ? n.localName || n.nodeName.toLowerCase() : ""
            }
            ), 0, 1, !0),
            Se("name", 3, !1, !0, (function(e, t) {
                var n = t ? te(t.a(e)) : e.a;
                return n ? n.nodeName.toLowerCase() : ""
            }
            ), 0, 1, !0),
            Se("namespace-uri", 3, !0, !1, (function() {
                return ""
            }
            ), 0, 1, !0),
            Se("normalize-space", 3, !1, !0, (function(e, t) {
                return (t ? de(t, e) : L(e.a)).replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
            }
            ), 0, 1),
            Se("not", 2, !1, !1, (function(e, t) {
                return !fe(t, e)
            }
            ), 1),
            Se("number", 1, !1, !0, (function(e, t) {
                return t ? ce(t, e) : +L(e.a)
            }
            ), 0, 1),
            Se("position", 1, !0, !1, (function(e) {
                return e.b
            }
            ), 0),
            Se("round", 1, !1, !1, (function(e, t) {
                return Math.round(ce(t, e))
            }
            ), 1),
            Se("starts-with", 2, !1, !1, (function(e, t, n) {
                return t = de(t, e),
                e = de(n, e),
                0 == t.lastIndexOf(e, 0)
            }
            ), 2),
            Se("string", 3, !1, !0, (function(e, t) {
                return t ? de(t, e) : L(e.a)
            }
            ), 0, 1),
            Se("string-length", 1, !1, !0, (function(e, t) {
                return (t ? de(t, e) : L(e.a)).length
            }
            ), 0, 1),
            Se("substring", 3, !1, !1, (function(e, t, n, a) {
                if (n = ce(n, e),
                isNaN(n) || 1 / 0 == n || -1 / 0 == n)
                    return "";
                if (a = a ? ce(a, e) : 1 / 0,
                isNaN(a) || -1 / 0 === a)
                    return "";
                n = Math.round(n) - 1;
                var o = Math.max(n, 0);
                return e = de(t, e),
                1 / 0 == a ? e.substring(o) : e.substring(o, n + Math.round(a))
            }
            ), 2, 3),
            Se("substring-after", 3, !1, !1, (function(e, t, n) {
                return t = de(t, e),
                e = de(n, e),
                -1 == (n = t.indexOf(e)) ? "" : t.substring(n + e.length)
            }
            ), 2),
            Se("substring-before", 3, !1, !1, (function(e, t, n) {
                return t = de(t, e),
                e = de(n, e),
                -1 == (e = t.indexOf(e)) ? "" : t.substring(0, e)
            }
            ), 2),
            Se("sum", 1, !1, !1, (function(e, t) {
                for (var n = ae(t.a(e)), a = 0, o = re(n); o; o = re(n))
                    a += +L(o);
                return a
            }
            ), 1, 1, !0),
            Se("translate", 3, !1, !1, (function(e, t, n, a) {
                t = de(t, e),
                n = de(n, e);
                var o = de(a, e);
                for (e = {},
                a = 0; a < n.length; a++) {
                    var r = n.charAt(a);
                    r in e || (e[r] = o.charAt(a))
                }
                for (n = "",
                a = 0; a < t.length; a++)
                    n += (r = t.charAt(a))in e ? e[r] : r;
                return n
            }
            ), 3),
            Se("true", 2, !1, !1, (function() {
                return !0
            }
            ), 0),
            Me.prototype.a = function(e) {
                return null === this.b || this.b == e.nodeType
            }
            ,
            Me.prototype.f = function() {
                return this.h
            }
            ,
            Me.prototype.toString = function() {
                var e = "Kind Test: " + this.h;
                return null === this.c || (e += le(this.c)),
                e
            }
            ;
            var ke = /\$?(?:(?![0-9-\.])(?:\*|[\w-\.]+):)?(?![0-9-\.])(?:\*|[\w-\.]+)|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|\s+|./g
              , je = /^\s/;
            function Ne(e, t) {
                return e.b[e.a + (t || 0)]
            }
            function Ie(e) {
                return e.b[e.a++]
            }
            function xe(e) {
                return e.b.length <= e.a
            }
            function Re(e) {
                ie.call(this, 3),
                this.c = e.substring(1, e.length - 1)
            }
            function Pe(e, t) {
                var n;
                this.j = e.toLowerCase(),
                n = "*" == this.j ? "*" : "http://www.w3.org/1999/xhtml",
                this.c = t ? t.toLowerCase() : n
            }
            function Ae(e) {
                switch (e.nodeType) {
                case 1:
                    return function(e, t) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            var t = n.slice();
                            return t.push.apply(t, arguments),
                            e.apply(this, t)
                        }
                    }(Le, e);
                case 9:
                    return Ae(e.documentElement);
                case 11:
                case 10:
                case 6:
                case 12:
                    return De;
                default:
                    return e.parentNode ? Ae(e.parentNode) : De
                }
            }
            function De() {
                return null
            }
            function Le(e, t) {
                if (e.prefix == t)
                    return e.namespaceURI || "http://www.w3.org/1999/xhtml";
                var n = e.getAttributeNode("xmlns:" + t);
                return n && n.specified ? n.value || null : e.parentNode && 9 != e.parentNode.nodeType ? Le(e.parentNode, t) : null
            }
            function Be(e) {
                ie.call(this, 1),
                this.c = e
            }
            function He(e, t) {
                if (ie.call(this, e.i),
                this.h = e,
                this.c = t,
                this.g = e.g,
                this.b = e.b,
                1 == this.c.length) {
                    var n = this.c[0];
                    n.u || n.c != Xe || "*" != (n = n.o).f() && (this.f = {
                        name: n.f(),
                        s: null
                    })
                }
            }
            function Ze() {
                ie.call(this, 4)
            }
            function We() {
                ie.call(this, 4)
            }
            function Fe(e) {
                return "/" == e || "//" == e
            }
            function Ue(e) {
                ie.call(this, 4),
                this.c = e,
                se(this, h(this.c, (function(e) {
                    return e.g
                }
                ))),
                ue(this, h(this.c, (function(e) {
                    return e.b
                }
                )))
            }
            function Ve(e, t) {
                this.a = e,
                this.b = !!t
            }
            function ze(e, t, n) {
                for (n = n || 0; n < e.a.length; n++)
                    for (var a, o = e.a[n], r = ae(t), i = t.l, l = 0; a = re(r); l++) {
                        var s = e.b ? i - l : l + 1;
                        if ("number" == typeof (a = o.a(new be(a,s,i))))
                            s = s == a;
                        else if ("string" == typeof a || "boolean" == typeof a)
                            s = !!a;
                        else {
                            if (!(a instanceof X))
                                throw Error("Predicate.evaluate returned an unexpected type.");
                            s = 0 < a.l
                        }
                        if (!s) {
                            if (a = (s = r).f,
                            !(c = s.a))
                                throw Error("Next must be called at least once before remove.");
                            var u = c.b
                              , c = c.a;
                            u ? u.a = c : a.a = c,
                            c ? c.b = u : a.b = u,
                            a.l--,
                            s.a = null
                        }
                    }
                return t
            }
            function qe(e, t, n, a) {
                ie.call(this, 4),
                this.c = e,
                this.o = t,
                this.h = n || new Ve([]),
                this.u = !!a,
                t = 0 < (t = this.h).a.length ? t.a[0].f : null,
                e.b && t && (e = t.name,
                e = R ? e.toLowerCase() : e,
                this.f = {
                    name: e,
                    s: t.s
                });
                e: {
                    for (e = this.h,
                    t = 0; t < e.a.length; t++)
                        if ((n = e.a[t]).g || 1 == n.i || 0 == n.i) {
                            e = !0;
                            break e
                        }
                    e = !1
                }
                this.g = e
            }
            function Ge(e, t, n, a) {
                this.j = e,
                this.f = t,
                this.a = n,
                this.b = a
            }
            r(Re),
            Re.prototype.a = function() {
                return this.c
            }
            ,
            Re.prototype.toString = function() {
                return "Literal: " + this.c
            }
            ,
            Pe.prototype.a = function(e) {
                var t = e.nodeType;
                return (1 == t || 2 == t) && (("*" == this.j || this.j == e.localName.toLowerCase()) && ("*" == this.c || this.c == (e.namespaceURI ? e.namespaceURI.toLowerCase() : "http://www.w3.org/1999/xhtml")))
            }
            ,
            Pe.prototype.f = function() {
                return this.j
            }
            ,
            Pe.prototype.toString = function() {
                return "Name Test: " + ("http://www.w3.org/1999/xhtml" == this.c ? "" : this.c + ":") + this.j
            }
            ,
            r(Be),
            Be.prototype.a = function() {
                return this.c
            }
            ,
            Be.prototype.toString = function() {
                return "Number: " + this.c
            }
            ,
            r(He),
            r(Ze),
            Ze.prototype.a = function(e) {
                var t = new X;
                return 9 == (e = e.a).nodeType ? ee(t, e) : ee(t, e.ownerDocument),
                t
            }
            ,
            Ze.prototype.toString = function() {
                return "Root Helper Expression"
            }
            ,
            r(We),
            We.prototype.a = function(e) {
                var t = new X;
                return ee(t, e.a),
                t
            }
            ,
            We.prototype.toString = function() {
                return "Context Helper Expression"
            }
            ,
            He.prototype.a = function(e) {
                var t = this.h.a(e);
                if (!(t instanceof X))
                    throw Error("Filter expression must evaluate to nodeset.");
                for (var n = 0, a = (e = this.c).length; n < a && t.l; n++) {
                    var o, r = e[n], i = ae(t, r.c.a);
                    if (r.g || r.c != Qe)
                        if (r.g || r.c != tt)
                            for (o = re(i),
                            t = r.a(new be(o)); null != (o = re(i)); )
                                t = K(t, o = r.a(new be(o)));
                        else
                            o = re(i),
                            t = r.a(new be(o));
                    else {
                        for (o = re(i); (t = re(i)) && (!o.contains || o.contains(t)) && 8 & t.compareDocumentPosition(o); o = t)
                            ;
                        t = r.a(new be(o))
                    }
                }
                return t
            }
            ,
            He.prototype.toString = function() {
                var e;
                if (e = "Path Expression:" + le(this.h),
                this.c.length) {
                    var t = p(this.c, (function(e, t) {
                        return e + le(t)
                    }
                    ), "Steps:");
                    e += le(t)
                }
                return e
            }
            ,
            r(Ue),
            Ue.prototype.a = function(e) {
                var t = new X;
                return d(this.c, (function(n) {
                    if (!((n = n.a(e))instanceof X))
                        throw Error("Path expression must evaluate to NodeSet.");
                    t = K(t, n)
                }
                )),
                t
            }
            ,
            Ue.prototype.toString = function() {
                return p(this.c, (function(e, t) {
                    return e + le(t)
                }
                ), "Union Expression:")
            }
            ,
            Ve.prototype.toString = function() {
                return p(this.a, (function(e, t) {
                    return e + le(t)
                }
                ), "Predicates:")
            }
            ,
            r(qe),
            qe.prototype.a = function(e) {
                var t = e.a
                  , n = null
                  , a = null
                  , o = null
                  , r = 0;
                if ((n = this.f) && (a = n.name,
                o = n.s ? de(n.s, e) : null,
                r = 1),
                this.u)
                    if (this.g || this.c != Je)
                        if (t = re(e = ae(new qe(Ke,new Me("node")).a(e))))
                            for (n = this.m(t, a, o, r); null != (t = re(e)); )
                                n = K(n, this.m(t, a, o, r));
                        else
                            n = new X;
                    else
                        n = H(this.o, t, a, o),
                        n = ze(this.h, n, r);
                else
                    n = this.m(e.a, a, o, r);
                return n
            }
            ,
            qe.prototype.m = function(e, t, n, a) {
                return e = this.c.f(this.o, e, t, n),
                ze(this.h, e, a)
            }
            ,
            qe.prototype.toString = function() {
                var e;
                if (e = "Step:" + le("Operator: " + (this.u ? "//" : "/")),
                this.c.j && (e += le("Axis: " + this.c)),
                e += le(this.o),
                this.h.a.length) {
                    var t = p(this.h.a, (function(e, t) {
                        return e + le(t)
                    }
                    ), "Predicates:");
                    e += le(t)
                }
                return e
            }
            ,
            Ge.prototype.toString = function() {
                return this.j
            }
            ;
            var Ye = {};
            function $e(e, t, n, a) {
                if (Ye.hasOwnProperty(e))
                    throw Error("Axis already created: " + e);
                return t = new Ge(e,t,n,!!a),
                Ye[e] = t
            }
            $e("ancestor", (function(e, t) {
                for (var n = new X, a = t; a = a.parentNode; )
                    e.a(a) && Q(n, a);
                return n
            }
            ), !0),
            $e("ancestor-or-self", (function(e, t) {
                var n = new X
                  , a = t;
                do {
                    e.a(a) && Q(n, a)
                } while (a = a.parentNode);
                return n
            }
            ), !0);
            var Xe = $e("attribute", (function(e, t) {
                var n = new X;
                if ("style" == (r = e.f()) && t.style && R)
                    return ee(n, new A(t.style,t,"style",t.style.cssText)),
                    n;
                var a = t.attributes;
                if (a)
                    if (e instanceof Me && null === e.b || "*" == r)
                        for (var o, r = 0; o = a[r]; r++)
                            R ? o.nodeValue && ee(n, D(t, o)) : ee(n, o);
                    else
                        (o = a.getNamedItem(r)) && (R ? o.nodeValue && ee(n, D(t, o)) : ee(n, o));
                return n
            }
            ), !1)
              , Je = $e("child", (function(e, n, a, o, r) {
                return (R ? F : U).call(null, e, n, t(a) ? a : null, t(o) ? o : null, r || new X)
            }
            ), !1, !0);
            $e("descendant", H, !1, !0);
            var Ke = $e("descendant-or-self", (function(e, t, n, a) {
                var o = new X;
                return B(t, n, a) && e.a(t) && ee(o, t),
                H(e, t, n, a, o)
            }
            ), !1, !0)
              , Qe = $e("following", (function(e, t, n, a) {
                var o = new X;
                do {
                    for (var r = t; r = r.nextSibling; )
                        B(r, n, a) && e.a(r) && ee(o, r),
                        o = H(e, r, n, a, o)
                } while (t = t.parentNode);
                return o
            }
            ), !1, !0);
            $e("following-sibling", (function(e, t) {
                for (var n = new X, a = t; a = a.nextSibling; )
                    e.a(a) && ee(n, a);
                return n
            }
            ), !1),
            $e("namespace", (function() {
                return new X
            }
            ), !1);
            var et = $e("parent", (function(e, t) {
                var n = new X;
                if (9 == t.nodeType)
                    return n;
                if (2 == t.nodeType)
                    return ee(n, t.ownerElement),
                    n;
                var a = t.parentNode;
                return e.a(a) && ee(n, a),
                n
            }
            ), !1)
              , tt = $e("preceding", (function(e, t, n, a) {
                var o = new X
                  , r = [];
                do {
                    r.unshift(t)
                } while (t = t.parentNode);
                for (var i = 1, l = r.length; i < l; i++) {
                    var s = [];
                    for (t = r[i]; t = t.previousSibling; )
                        s.unshift(t);
                    for (var u = 0, c = s.length; u < c; u++)
                        B(t = s[u], n, a) && e.a(t) && ee(o, t),
                        o = H(e, t, n, a, o)
                }
                return o
            }
            ), !0, !0);
            $e("preceding-sibling", (function(e, t) {
                for (var n = new X, a = t; a = a.previousSibling; )
                    e.a(a) && Q(n, a);
                return n
            }
            ), !0);
            var nt = $e("self", (function(e, t) {
                var n = new X;
                return e.a(t) && ee(n, t),
                n
            }
            ), !1);
            function at(e) {
                ie.call(this, 1),
                this.c = e,
                this.g = e.g,
                this.b = e.b
            }
            function ot(e, t) {
                this.a = e,
                this.b = t
            }
            function rt(e) {
                for (var t, n = []; ; ) {
                    it(e, "Missing right hand side of binary expression."),
                    t = pt(e);
                    var a = Ie(e.a);
                    if (!a)
                        break;
                    var o = (a = ge[a] || null) && a.w;
                    if (!o) {
                        e.a.a--;
                        break
                    }
                    for (; n.length && o <= n[n.length - 1].w; )
                        t = new pe(n.pop(),n.pop(),t);
                    n.push(t, a)
                }
                for (; n.length; )
                    t = new pe(n.pop(),n.pop(),t);
                return t
            }
            function it(e, t) {
                if (xe(e.a))
                    throw Error(t)
            }
            function lt(e, t) {
                var n = Ie(e.a);
                if (n != t)
                    throw Error("Bad token, expected: " + t + " got: " + n)
            }
            function st(e) {
                if (")" != (e = Ie(e.a)))
                    throw Error("Bad token: " + e)
            }
            function ut(e) {
                if (2 > (e = Ie(e.a)).length)
                    throw Error("Unclosed literal string");
                return new Re(e)
            }
            function ct(e) {
                var t, n, a = [];
                if (Fe(Ne(e.a))) {
                    if (t = Ie(e.a),
                    n = Ne(e.a),
                    "/" == t && (xe(e.a) || "." != n && ".." != n && "@" != n && "*" != n && !/(?![0-9])[\w]/.test(n)))
                        return new Ze;
                    n = new Ze,
                    it(e, "Missing next location step."),
                    t = dt(e, t),
                    a.push(t)
                } else {
                    e: {
                        switch (n = (t = Ne(e.a)).charAt(0)) {
                        case "$":
                            throw Error("Variable reference not allowed in HTML XPath");
                        case "(":
                            Ie(e.a),
                            t = rt(e),
                            it(e, 'unclosed "("'),
                            lt(e, ")");
                            break;
                        case '"':
                        case "'":
                            t = ut(e);
                            break;
                        default:
                            if (isNaN(+t)) {
                                if (Ce(t) || !/(?![0-9])[\w]/.test(n) || "(" != Ne(e.a, 1)) {
                                    t = null;
                                    break e
                                }
                                for (t = Ie(e.a),
                                t = Te[t] || null,
                                Ie(e.a),
                                n = []; ")" != Ne(e.a) && (it(e, "Missing function argument list."),
                                n.push(rt(e)),
                                "," == Ne(e.a)); )
                                    Ie(e.a);
                                it(e, "Unclosed function argument list."),
                                st(e),
                                t = new we(t,n)
                            } else
                                t = new Be(+Ie(e.a))
                        }
                        "[" == Ne(e.a) && (t = new ye(t,n = new Ve(ft(e))))
                    }
                    if (t) {
                        if (!Fe(Ne(e.a)))
                            return t;
                        n = t
                    } else
                        t = dt(e, "/"),
                        n = new We,
                        a.push(t)
                }
                for (; Fe(Ne(e.a)); )
                    t = Ie(e.a),
                    it(e, "Missing next location step."),
                    t = dt(e, t),
                    a.push(t);
                return new He(n,a)
            }
            function dt(e, t) {
                var n, a, o, r;
                if ("/" != t && "//" != t)
                    throw Error('Step op should be "/" or "//"');
                if ("." == Ne(e.a))
                    return a = new qe(nt,new Me("node")),
                    Ie(e.a),
                    a;
                if (".." == Ne(e.a))
                    return a = new qe(et,new Me("node")),
                    Ie(e.a),
                    a;
                if ("@" == Ne(e.a))
                    r = Xe,
                    Ie(e.a),
                    it(e, "Missing attribute name");
                else if ("::" == Ne(e.a, 1)) {
                    if (!/(?![0-9])[\w]/.test(Ne(e.a).charAt(0)))
                        throw Error("Bad token: " + Ie(e.a));
                    if (n = Ie(e.a),
                    !(r = Ye[n] || null))
                        throw Error("No axis with name: " + n);
                    Ie(e.a),
                    it(e, "Missing node name")
                } else
                    r = Je;
                if (n = Ne(e.a),
                !/(?![0-9])[\w\*]/.test(n.charAt(0)))
                    throw Error("Bad token: " + Ie(e.a));
                if ("(" == Ne(e.a, 1)) {
                    if (!Ce(n))
                        throw Error("Invalid node type: " + n);
                    if (!Ce(n = Ie(e.a)))
                        throw Error("Invalid type name: " + n);
                    lt(e, "("),
                    it(e, "Bad nodetype");
                    var i = null;
                    '"' != (o = Ne(e.a).charAt(0)) && "'" != o || (i = ut(e)),
                    it(e, "Bad nodetype"),
                    st(e),
                    n = new Me(n,i)
                } else if (-1 == (o = (n = Ie(e.a)).indexOf(":")))
                    n = new Pe(n);
                else {
                    var l;
                    if ("*" == (i = n.substring(0, o)))
                        l = "*";
                    else if (!(l = e.b(i)))
                        throw Error("Namespace prefix not declared: " + i);
                    n = new Pe(n = n.substr(o + 1),l)
                }
                return o = new Ve(ft(e),r.a),
                a || new qe(r,n,o,"//" == t)
            }
            function ft(e) {
                for (var t = []; "[" == Ne(e.a); ) {
                    Ie(e.a),
                    it(e, "Missing predicate expression.");
                    var n = rt(e);
                    t.push(n),
                    it(e, "Unclosed predicate expression."),
                    lt(e, "]")
                }
                return t
            }
            function pt(e) {
                if ("-" == Ne(e.a))
                    return Ie(e.a),
                    new at(pt(e));
                var t = ct(e);
                if ("|" != Ne(e.a))
                    e = t;
                else {
                    for (t = [t]; "|" == Ie(e.a); )
                        it(e, "Missing next union location path."),
                        t.push(ct(e));
                    e.a.a--,
                    e = new Ue(t)
                }
                return e
            }
            function ht(e, t) {
                if (!e.length)
                    throw Error("Empty XPath expression.");
                var n = function(e) {
                    e = e.match(ke);
                    for (var t = 0; t < e.length; t++)
                        je.test(e[t]) && e.splice(t, 1);
                    return new Oe(e)
                }(e);
                if (xe(n))
                    throw Error("Invalid XPath expression.");
                t ? "function" == function(e) {
                    var t = typeof e;
                    if ("object" == t) {
                        if (!e)
                            return "null";
                        if (e instanceof Array)
                            return "array";
                        if (e instanceof Object)
                            return t;
                        var n = Object.prototype.toString.call(e);
                        if ("[object Window]" == n)
                            return "object";
                        if ("[object Array]" == n || "number" == typeof e.length && void 0 !== e.splice && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("splice"))
                            return "array";
                        if ("[object Function]" == n || void 0 !== e.call && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("call"))
                            return "function"
                    } else if ("function" == t && void 0 === e.call)
                        return "object";
                    return t
                }(t) || (t = o(t.lookupNamespaceURI, t)) : t = function() {
                    return null
                }
                ;
                var a = rt(new ot(n,t));
                if (!xe(n))
                    throw Error("Bad token: " + Ie(n));
                this.evaluate = function(e, t) {
                    return new mt(a.a(new be(e)),t)
                }
            }
            function mt(e, t) {
                if (0 == t)
                    if (e instanceof X)
                        t = 4;
                    else if ("string" == typeof e)
                        t = 2;
                    else if ("number" == typeof e)
                        t = 1;
                    else {
                        if ("boolean" != typeof e)
                            throw Error("Unexpected evaluation result.");
                        t = 3
                    }
                if (2 != t && 1 != t && 3 != t && !(e instanceof X))
                    throw Error("value could not be converted to the specified type");
                var n;
                switch (this.resultType = t,
                t) {
                case 2:
                    this.stringValue = e instanceof X ? ne(e) : "" + e;
                    break;
                case 1:
                    this.numberValue = e instanceof X ? +ne(e) : +e;
                    break;
                case 3:
                    this.booleanValue = e instanceof X ? 0 < e.l : !!e;
                    break;
                case 4:
                case 5:
                case 6:
                case 7:
                    var a = ae(e);
                    n = [];
                    for (var o = re(a); o; o = re(a))
                        n.push(o instanceof A ? o.a : o);
                    this.snapshotLength = e.l,
                    this.invalidIteratorState = !1;
                    break;
                case 8:
                case 9:
                    a = te(e),
                    this.singleNodeValue = a instanceof A ? a.a : a;
                    break;
                default:
                    throw Error("Unknown XPathResult type.")
                }
                var r = 0;
                this.iterateNext = function() {
                    if (4 != t && 5 != t)
                        throw Error("iterateNext called with wrong result type");
                    return r >= n.length ? null : n[r++]
                }
                ,
                this.snapshotItem = function(e) {
                    if (6 != t && 7 != t)
                        throw Error("snapshotItem called with wrong result type");
                    return e >= n.length || 0 > e ? null : n[e]
                }
            }
            function gt(e) {
                this.lookupNamespaceURI = Ae(e)
            }
            function _t(t, n) {
                var a = t || e
                  , o = a.document;
                o.evaluate && !n || (a.XPathResult = mt,
                o.evaluate = function(e, t, n, a) {
                    return new ht(e,n).evaluate(t, a)
                }
                ,
                o.createExpression = function(e, t) {
                    return new ht(e,t)
                }
                ,
                o.createNSResolver = function(e) {
                    return new gt(e)
                }
                )
            }
            r(at),
            at.prototype.a = function(e) {
                return -ce(this.c, e)
            }
            ,
            at.prototype.toString = function() {
                return "Unary Expression: -" + le(this.c)
            }
            ,
            mt.ANY_TYPE = 0,
            mt.NUMBER_TYPE = 1,
            mt.STRING_TYPE = 2,
            mt.BOOLEAN_TYPE = 3,
            mt.UNORDERED_NODE_ITERATOR_TYPE = 4,
            mt.ORDERED_NODE_ITERATOR_TYPE = 5,
            mt.UNORDERED_NODE_SNAPSHOT_TYPE = 6,
            mt.ORDERED_NODE_SNAPSHOT_TYPE = 7,
            mt.ANY_UNORDERED_NODE_TYPE = 8,
            mt.FIRST_ORDERED_NODE_TYPE = 9;
            var vt, bt = ["wgxpath", "install"], yt = e;
            bt[0]in yt || !yt.execScript || yt.execScript("var " + bt[0]);
            for (; bt.length && (vt = bt.shift()); )
                bt.length || void 0 === _t ? yt = yt[vt] ? yt[vt] : yt[vt] = {} : yt[vt] = _t
        }
        ).call(n.g),
        e.exports.install = wgxpath.install,
        e.exports.XPathResultType = {
            ANY_TYPE: 0,
            NUMBER_TYPE: 1,
            STRING_TYPE: 2,
            BOOLEAN_TYPE: 3,
            UNORDERED_NODE_ITERATOR_TYPE: 4,
            ORDERED_NODE_ITERATOR_TYPE: 5,
            UNORDERED_NODE_SNAPSHOT_TYPE: 6,
            ORDERED_NODE_SNAPSHOT_TYPE: 7,
            ANY_UNORDERED_NODE_TYPE: 8,
            FIRST_ORDERED_NODE_TYPE: 9
        }
    },
    52020: function(e, t, n) {
        e.exports = n(84710)
    },
    62079: function(e, t, n) {
        e.exports = n(93799)
    },
    88436: function(e, t, n) {
        var a = n(52020)
          , o = n(51791)
          , r = n(80300);
        e.exports = function(e, t) {
            if (null == e)
                return {};
            var n, i, l = r(e, t);
            if (a) {
                var s = a(e);
                for (i = 0; i < s.length; i++)
                    n = s[i],
                    o(t).call(t, n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
            }
            return l
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    80300: function(e, t, n) {
        var a = n(62079)
          , o = n(51791);
        e.exports = function(e, t) {
            if (null == e)
                return {};
            var n, r, i = {}, l = a(e);
            for (r = 0; r < l.length; r++)
                n = l[r],
                o(t).call(t, n) >= 0 || (i[n] = e[n]);
            return i
        }
        ,
        e.exports.__esModule = !0,
        e.exports.default = e.exports
    },
    17356: function(e, t, n) {
        "use strict";
        var a, o = Object.create, r = Object.defineProperty, i = Object.getOwnPropertyDescriptor, l = Object.getOwnPropertyNames, s = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty, c = (e, t, n, a) => {
            if (t && "object" == typeof t || "function" == typeof t)
                for (let o of l(t))
                    u.call(e, o) || o === n || r(e, o, {
                        get: () => t[o],
                        enumerable: !(a = i(t, o)) || a.enumerable
                    });
            return e
        }
        , d = (e, t, n) => (n = null != e ? o(s(e)) : {},
        c(!t && e && e.__esModule ? n : r(n, "default", {
            value: e,
            enumerable: !0
        }), e)), f = (e, t, n) => ( (e, t, n) => t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n)(e, "symbol" != typeof t ? t + "" : t, n), p = {};
        ( (e, t) => {
            for (var n in t)
                r(e, n, {
                    get: t[n],
                    enumerable: !0
                })
        }
        )(p, {
            InView: () => E,
            defaultFallbackInView: () => b,
            observe: () => w,
            useInView: () => S
        }),
        e.exports = (a = p,
        c(r({}, "__esModule", {
            value: !0
        }), a));
        var h = d(n(98661))
          , m = new Map
          , g = new WeakMap
          , _ = 0
          , v = void 0;
        function b(e) {
            v = e
        }
        function y(e) {
            return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                return `${t}_${"root" === t ? (n = e.root,
                n ? (g.has(n) || (_ += 1,
                g.set(n, _.toString())),
                g.get(n)) : "0") : e[t]}`;
                var n
            }
            )).toString()
        }
        function w(e, t, n={}, a=v) {
            if (void 0 === window.IntersectionObserver && void 0 !== a) {
                const o = e.getBoundingClientRect();
                return t(a, {
                    isIntersecting: a,
                    target: e,
                    intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
                    time: 0,
                    boundingClientRect: o,
                    intersectionRect: o,
                    rootBounds: o
                }),
                () => {}
            }
            const {id: o, observer: r, elements: i} = function(e) {
                const t = y(e);
                let n = m.get(t);
                if (!n) {
                    const a = new Map;
                    let o;
                    const r = new IntersectionObserver((t => {
                        t.forEach((t => {
                            var n;
                            const r = t.isIntersecting && o.some((e => t.intersectionRatio >= e));
                            e.trackVisibility && void 0 === t.isVisible && (t.isVisible = r),
                            null == (n = a.get(t.target)) || n.forEach((e => {
                                e(r, t)
                            }
                            ))
                        }
                        ))
                    }
                    ),e);
                    o = r.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]),
                    n = {
                        id: t,
                        observer: r,
                        elements: a
                    },
                    m.set(t, n)
                }
                return n
            }(n)
              , l = i.get(e) || [];
            return i.has(e) || i.set(e, l),
            l.push(t),
            r.observe(e),
            function() {
                l.splice(l.indexOf(t), 1),
                0 === l.length && (i.delete(e),
                r.unobserve(e)),
                0 === i.size && (r.disconnect(),
                m.delete(o))
            }
        }
        var E = class extends h.Component {
            constructor(e) {
                super(e),
                f(this, "node", null),
                f(this, "_unobserveCb", null),
                f(this, "handleNode", (e => {
                    this.node && (this.unobserve(),
                    e || this.props.triggerOnce || this.props.skip || this.setState({
                        inView: !!this.props.initialInView,
                        entry: void 0
                    })),
                    this.node = e || null,
                    this.observeNode()
                }
                )),
                f(this, "handleChange", ( (e, t) => {
                    e && this.props.triggerOnce && this.unobserve(),
                    function(e) {
                        return "function" != typeof e.children
                    }(this.props) || this.setState({
                        inView: e,
                        entry: t
                    }),
                    this.props.onChange && this.props.onChange(e, t)
                }
                )),
                this.state = {
                    inView: !!e.initialInView,
                    entry: void 0
                }
            }
            componentDidMount() {
                this.unobserve(),
                this.observeNode()
            }
            componentDidUpdate(e) {
                e.rootMargin === this.props.rootMargin && e.root === this.props.root && e.threshold === this.props.threshold && e.skip === this.props.skip && e.trackVisibility === this.props.trackVisibility && e.delay === this.props.delay || (this.unobserve(),
                this.observeNode())
            }
            componentWillUnmount() {
                this.unobserve()
            }
            observeNode() {
                if (!this.node || this.props.skip)
                    return;
                const {threshold: e, root: t, rootMargin: n, trackVisibility: a, delay: o, fallbackInView: r} = this.props;
                this._unobserveCb = w(this.node, this.handleChange, {
                    threshold: e,
                    root: t,
                    rootMargin: n,
                    trackVisibility: a,
                    delay: o
                }, r)
            }
            unobserve() {
                this._unobserveCb && (this._unobserveCb(),
                this._unobserveCb = null)
            }
            render() {
                const {children: e} = this.props;
                if ("function" == typeof e) {
                    const {inView: t, entry: n} = this.state;
                    return e({
                        inView: t,
                        entry: n,
                        ref: this.handleNode
                    })
                }
                const {as: t, triggerOnce: n, threshold: a, root: o, rootMargin: r, onChange: i, skip: l, trackVisibility: s, delay: u, initialInView: c, fallbackInView: d, ...f} = this.props;
                return h.createElement(t || "div", {
                    ref: this.handleNode,
                    ...f
                }, e)
            }
        }
          , T = d(n(98661));
        function S({threshold: e, delay: t, trackVisibility: n, rootMargin: a, root: o, triggerOnce: r, skip: i, initialInView: l, fallbackInView: s, onChange: u}={}) {
            var c;
            const [d,f] = T.useState(null)
              , p = T.useRef()
              , [h,m] = T.useState({
                inView: !!l,
                entry: void 0
            });
            p.current = u,
            T.useEffect(( () => {
                if (i || !d)
                    return;
                let l;
                return l = w(d, ( (e, t) => {
                    m({
                        inView: e,
                        entry: t
                    }),
                    p.current && p.current(e, t),
                    t.isIntersecting && r && l && (l(),
                    l = void 0)
                }
                ), {
                    root: o,
                    rootMargin: a,
                    threshold: e,
                    trackVisibility: n,
                    delay: t
                }, s),
                () => {
                    l && l()
                }
            }
            ), [Array.isArray(e) ? e.toString() : e, d, o, a, r, i, n, s, t]);
            const g = null == (c = h.entry) ? void 0 : c.target
              , _ = T.useRef();
            d || !g || r || i || _.current === g || (_.current = g,
            m({
                inView: !!l,
                entry: void 0
            }));
            const v = [f, h.inView, h.entry];
            return v.ref = v[0],
            v.inView = v[1],
            v.entry = v[2],
            v
        }
    }
}]);
