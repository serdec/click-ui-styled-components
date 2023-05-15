var $k9mZt$swchelperslib_tagged_template_literaljs = require("@swc/helpers/lib/_tagged_template_literal.js");
var $k9mZt$reactjsxruntime = require("react/jsx-runtime");
var $k9mZt$process = require("process");
var $k9mZt$reactis = require("react-is");
var $k9mZt$react = require("react");
var $k9mZt$shallowequal = require("shallowequal");
var $k9mZt$emotionstylis = require("@emotion/stylis");
var $k9mZt$emotionunitless = require("@emotion/unitless");
var $k9mZt$emotionispropvalid = require("@emotion/is-prop-valid");
var $k9mZt$hoistnonreactstatics = require("hoist-non-react-statics");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "Card", function () { return $ecaf9ad8f9fb2e64$export$60332b2344f7fe41; });










function $d3862d922b52373a$var$v() {
    return ($d3862d922b52373a$var$v = Object.assign || function(e) {
        for(var t = 1; t < arguments.length; t++){
            var n = arguments[t];
            for(var _$r in n)Object.prototype.hasOwnProperty.call(n, _$r) && (e[_$r] = n[_$r]);
        }
        return e;
    }).apply(this, arguments);
}
var $d3862d922b52373a$var$g = function g(e, t) {
    for(var n = [
        e[0]
    ], _$r = 0, o = t.length; _$r < o; _$r += 1)n.push(t[_$r], e[_$r + 1]);
    return n;
}, $d3862d922b52373a$var$S = function S(t) {
    return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !(0, $k9mZt$reactis.typeOf)(t);
}, $d3862d922b52373a$var$w = Object.freeze([]), $d3862d922b52373a$var$E = Object.freeze({});
function $d3862d922b52373a$var$b(e) {
    return "function" == typeof e;
}
function $d3862d922b52373a$var$_(e) {
    return (0, e.displayName) || e.name || "Component";
}
function $d3862d922b52373a$export$7ba318d8d2f06c76(e) {
    return e && "string" == typeof e.styledComponentId;
}
var $d3862d922b52373a$var$A = ("undefined" != typeof $k9mZt$process && void 0 !== $k9mZt$process.env && undefined, "data-styled"), $d3862d922b52373a$export$83d89fbfd8236492 = "5.3.10", $d3862d922b52373a$var$I = "undefined" != typeof window && "HTMLElement" in window, $d3862d922b52373a$var$P = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof $k9mZt$process && void 0 !== $k9mZt$process.env && false), $d3862d922b52373a$var$O = {}, $d3862d922b52373a$var$R = {};
function $d3862d922b52373a$var$D() {
    for(var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], n = 1, _$r = arguments.length; n < _$r; n += 1)t.push(n < 0 || arguments.length <= n ? void 0 : arguments[n]);
    return t.forEach(function(t) {
        e = e.replace(/%[a-z]/, t);
    }), e;
}
function $d3862d922b52373a$var$j(e) {
    for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), _$r = 1; _$r < t; _$r++)n[_$r - 1] = arguments[_$r];
    throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""));
}
var $d3862d922b52373a$var$T = function() {
    var e = function e(e) {
        this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
    };
    var t = e.prototype;
    return t.indexOfGroup = function(e) {
        for(var t = 0, n = 0; n < e; n++)t += this.groupSizes[n];
        return t;
    }, t.insertRules = function(e, t) {
        if (e >= this.groupSizes.length) {
            for(var n = this.groupSizes, _$r = n.length, o = _$r; e >= o;)(o <<= 1) < 0 && $d3862d922b52373a$var$j(16, "" + e);
            this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
            for(var s = _$r; s < o; s++)this.groupSizes[s] = 0;
        }
        for(var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++)this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
    }, t.clearGroup = function(e) {
        if (e < this.length) {
            var t = this.groupSizes[e], n = this.indexOfGroup(e), _$r = n + t;
            this.groupSizes[e] = 0;
            for(var o = n; o < _$r; o++)this.tag.deleteRule(n);
        }
    }, t.getGroup = function(e) {
        var t = "";
        if (e >= this.length || 0 === this.groupSizes[e]) return t;
        for(var n = this.groupSizes[e], _$r = this.indexOfGroup(e), o = _$r + n, s = _$r; s < o; s++)t += this.tag.getRule(s) + "/*!sc*/\n";
        return t;
    }, e;
}(), $d3862d922b52373a$var$x = new Map, $d3862d922b52373a$var$k = new Map, $d3862d922b52373a$var$V = 1, $d3862d922b52373a$var$B = function B(e) {
    if ($d3862d922b52373a$var$x.has(e)) return $d3862d922b52373a$var$x.get(e);
    for(; $d3862d922b52373a$var$k.has($d3862d922b52373a$var$V);)$d3862d922b52373a$var$V++;
    var t = $d3862d922b52373a$var$V++;
    return $d3862d922b52373a$var$x.set(e, t), $d3862d922b52373a$var$k.set(t, e), t;
}, $d3862d922b52373a$var$z = function z(e) {
    return $d3862d922b52373a$var$k.get(e);
}, $d3862d922b52373a$var$M = function M(e, t) {
    t >= $d3862d922b52373a$var$V && ($d3862d922b52373a$var$V = t + 1), $d3862d922b52373a$var$x.set(e, t), $d3862d922b52373a$var$k.set(t, e);
}, $d3862d922b52373a$var$G = "style[" + $d3862d922b52373a$var$A + '][data-styled-version="5.3.10"]', $d3862d922b52373a$var$L = new RegExp("^" + $d3862d922b52373a$var$A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), $d3862d922b52373a$var$F = function F(e, t, n) {
    for(var _$r, o = n.split(","), s = 0, i = o.length; s < i; s++)(_$r = o[s]) && e.registerName(t, _$r);
}, $d3862d922b52373a$var$Y = function Y(e, t) {
    for(var n = (t.textContent || "").split("/*!sc*/\n"), _$r = [], o = 0, s = n.length; o < s; o++){
        var i = n[o].trim();
        if (i) {
            var a = i.match($d3862d922b52373a$var$L);
            if (a) {
                var c = 0 | parseInt(a[1], 10), u = a[2];
                0 !== c && ($d3862d922b52373a$var$M(u, c), $d3862d922b52373a$var$F(e, u, a[3]), e.getTag().insertRules(c, _$r)), _$r.length = 0;
            } else _$r.push(i);
        }
    }
}, $d3862d922b52373a$var$q = function q() {
    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}, $d3862d922b52373a$var$H = function H(e) {
    var t = document.head, n = e || t, _$r = document.createElement("style"), o = function(e) {
        for(var t = e.childNodes, n = t.length; n >= 0; n--){
            var _$r = t[n];
            if (_$r && 1 === _$r.nodeType && _$r.hasAttribute($d3862d922b52373a$var$A)) return _$r;
        }
    }(n), s = void 0 !== o ? o.nextSibling : null;
    _$r.setAttribute($d3862d922b52373a$var$A, "active"), _$r.setAttribute("data-styled-version", "5.3.10");
    var i = $d3862d922b52373a$var$q();
    return i && _$r.setAttribute("nonce", i), n.insertBefore(_$r, s), _$r;
}, $d3862d922b52373a$var$$ = function() {
    var e = function e(e) {
        var t = this.element = $d3862d922b52373a$var$H(e);
        t.appendChild(document.createTextNode("")), this.sheet = function(e) {
            if (e.sheet) return e.sheet;
            for(var t = document.styleSheets, n = 0, _$r = t.length; n < _$r; n++){
                var o = t[n];
                if (o.ownerNode === e) return o;
            }
            $d3862d922b52373a$var$j(17);
        }(t), this.length = 0;
    };
    var t = e.prototype;
    return t.insertRule = function(e, t) {
        try {
            return this.sheet.insertRule(t, e), this.length++, !0;
        } catch (e) {
            return !1;
        }
    }, t.deleteRule = function(e) {
        this.sheet.deleteRule(e), this.length--;
    }, t.getRule = function(e) {
        var t = this.sheet.cssRules[e];
        return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
    }, e;
}(), $d3862d922b52373a$var$W = function() {
    var e = function e(e) {
        var t = this.element = $d3862d922b52373a$var$H(e);
        this.nodes = t.childNodes, this.length = 0;
    };
    var t = e.prototype;
    return t.insertRule = function(e, t) {
        if (e <= this.length && e >= 0) {
            var n = document.createTextNode(t), _$r = this.nodes[e];
            return this.element.insertBefore(n, _$r || null), this.length++, !0;
        }
        return !1;
    }, t.deleteRule = function(e) {
        this.element.removeChild(this.nodes[e]), this.length--;
    }, t.getRule = function(e) {
        return e < this.length ? this.nodes[e].textContent : "";
    }, e;
}(), $d3862d922b52373a$var$U = function() {
    var e = function e(e) {
        this.rules = [], this.length = 0;
    };
    var t = e.prototype;
    return t.insertRule = function(e, t) {
        return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
    }, t.deleteRule = function(e) {
        this.rules.splice(e, 1), this.length--;
    }, t.getRule = function(e) {
        return e < this.length ? this.rules[e] : "";
    }, e;
}(), $d3862d922b52373a$var$J = $d3862d922b52373a$var$I, $d3862d922b52373a$var$X = {
    isServer: !$d3862d922b52373a$var$I,
    useCSSOMInjection: !$d3862d922b52373a$var$P
}, $d3862d922b52373a$var$Z = function() {
    var e = function e(e, t, n) {
        void 0 === e && (e = $d3862d922b52373a$var$E), void 0 === t && (t = {}), this.options = $d3862d922b52373a$var$v({}, $d3862d922b52373a$var$X, {}, e), this.gs = t, this.names = new Map(n), this.server = !!e.isServer, !this.server && $d3862d922b52373a$var$I && $d3862d922b52373a$var$J && ($d3862d922b52373a$var$J = !1, function(e) {
            for(var _$t = document.querySelectorAll($d3862d922b52373a$var$G), _$n = 0, _$r = _$t.length; _$n < _$r; _$n++){
                var o = _$t[_$n];
                o && "active" !== o.getAttribute($d3862d922b52373a$var$A) && ($d3862d922b52373a$var$Y(e, o), o.parentNode && o.parentNode.removeChild(o));
            }
        }(this));
    };
    e.registerId = function(e) {
        return $d3862d922b52373a$var$B(e);
    };
    var t = e.prototype;
    return t.reconstructWithOptions = function(t, n) {
        return void 0 === n && (n = !0), new e($d3862d922b52373a$var$v({}, this.options, {}, t), this.gs, n && this.names || void 0);
    }, t.allocateGSInstance = function(e) {
        return this.gs[e] = (this.gs[e] || 0) + 1;
    }, t.getTag = function() {
        var e, t, n, _$r, o;
        return this.tag || (this.tag = (n = (t = this.options).isServer, _$r = t.useCSSOMInjection, o = t.target, e = n ? new $d3862d922b52373a$var$U(o) : _$r ? new $d3862d922b52373a$var$$(o) : new $d3862d922b52373a$var$W(o), new $d3862d922b52373a$var$T(e)));
    }, t.hasNameForId = function(e, t) {
        return this.names.has(e) && this.names.get(e).has(t);
    }, t.registerName = function(e, t) {
        if ($d3862d922b52373a$var$B(e), this.names.has(e)) this.names.get(e).add(t);
        else {
            var n = new Set;
            n.add(t), this.names.set(e, n);
        }
    }, t.insertRules = function(e, t, n) {
        this.registerName(e, t), this.getTag().insertRules($d3862d922b52373a$var$B(e), n);
    }, t.clearNames = function(e) {
        this.names.has(e) && this.names.get(e).clear();
    }, t.clearRules = function(e) {
        this.getTag().clearGroup($d3862d922b52373a$var$B(e)), this.clearNames(e);
    }, t.clearTag = function() {
        this.tag = void 0;
    }, t.toString = function() {
        return function(e) {
            for(var t = e.getTag(), n = t.length, _$r = "", o = 0; o < n; o++){
                var s = $d3862d922b52373a$var$z(o);
                if (void 0 !== s) {
                    var i = e.names.get(s), a = t.getGroup(o);
                    if (i && a && i.size) {
                        var c = $d3862d922b52373a$var$A + ".g" + o + '[id="' + s + '"]', u = "";
                        void 0 !== i && i.forEach(function(e) {
                            e.length > 0 && (u += e + ",");
                        }), _$r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
                    }
                }
            }
            return _$r;
        }(this);
    }, e;
}(), $d3862d922b52373a$var$K = /(a)(d)/gi, $d3862d922b52373a$var$Q = function Q(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function $d3862d922b52373a$var$ee(e) {
    var t, n = "";
    for(t = Math.abs(e); t > 52; t = t / 52 | 0)n = $d3862d922b52373a$var$Q(t % 52) + n;
    return ($d3862d922b52373a$var$Q(t % 52) + n).replace($d3862d922b52373a$var$K, "$1-$2");
}
var $d3862d922b52373a$var$te = function te(e, t) {
    for(var n = t.length; n;)e = 33 * e ^ t.charCodeAt(--n);
    return e;
}, $d3862d922b52373a$var$ne = function ne(e) {
    return $d3862d922b52373a$var$te(5381, e);
};
function $d3862d922b52373a$var$re(e) {
    for(var t = 0; t < e.length; t += 1){
        var n = e[t];
        if ($d3862d922b52373a$var$b(n) && !$d3862d922b52373a$export$7ba318d8d2f06c76(n)) return !1;
    }
    return !0;
}
var $d3862d922b52373a$var$oe = $d3862d922b52373a$var$ne("5.3.10"), $d3862d922b52373a$var$se = function() {
    var e = function e(e, t, n) {
        this.rules = e, this.staticRulesId = "", this.isStatic = (void 0 === n || n.isStatic) && $d3862d922b52373a$var$re(e), this.componentId = t, this.baseHash = $d3862d922b52373a$var$te($d3862d922b52373a$var$oe, t), this.baseStyle = n, $d3862d922b52373a$var$Z.registerId(t);
    };
    return e.prototype.generateAndInjectStyles = function(e, t, n) {
        var _$r = this.componentId, o = [];
        if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) {
            if (this.staticRulesId && t.hasNameForId(_$r, this.staticRulesId)) o.push(this.staticRulesId);
            else {
                var s = $d3862d922b52373a$var$Ne(this.rules, e, t, n).join(""), i = $d3862d922b52373a$var$ee($d3862d922b52373a$var$te(this.baseHash, s) >>> 0);
                if (!t.hasNameForId(_$r, i)) {
                    var a = n(s, "." + i, void 0, _$r);
                    t.insertRules(_$r, i, a);
                }
                o.push(i), this.staticRulesId = i;
            }
        } else {
            for(var c = this.rules.length, u = $d3862d922b52373a$var$te(this.baseHash, n.hash), l = "", d = 0; d < c; d++){
                var h = this.rules[d];
                if ("string" == typeof h) l += h;
                else if (h) {
                    var p = $d3862d922b52373a$var$Ne(h, e, t, n), f = Array.isArray(p) ? p.join("") : p;
                    u = $d3862d922b52373a$var$te(u, f + d), l += f;
                }
            }
            if (l) {
                var m = $d3862d922b52373a$var$ee(u >>> 0);
                if (!t.hasNameForId(_$r, m)) {
                    var y = n(l, "." + m, void 0, _$r);
                    t.insertRules(_$r, m, y);
                }
                o.push(m);
            }
        }
        return o.join(" ");
    }, e;
}(), $d3862d922b52373a$var$ie = /^\s*\/\/.*$/gm, $d3862d922b52373a$var$ae = [
    ":",
    "[",
    ".",
    "#"
];
function $d3862d922b52373a$var$ce(e) {
    var m = function m(e, s, i, a) {
        void 0 === a && (a = "&");
        var c = e.replace($d3862d922b52373a$var$ie, ""), u = s && i ? i + " " + s + " { " + c + " }" : c;
        return t = a, n = s, _$r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(i || !s ? "" : s, u);
    };
    var t, n, _$r, o, s = void 0 === e ? $d3862d922b52373a$var$E : e, i = s.options, a = void 0 === i ? $d3862d922b52373a$var$E : i, c = s.plugins, u = void 0 === c ? $d3862d922b52373a$var$w : c, l = new (0, ($parcel$interopDefault($k9mZt$emotionstylis)))(a), d = [], h = function(e) {
        var t = function t(t) {
            if (t) try {
                e(t + "}");
            } catch (e) {}
        };
        return function(n, r, o, s, i, a, c, u, l, d) {
            switch(n){
                case 1:
                    if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                    break;
                case 2:
                    if (0 === u) return r + "/*|*/";
                    break;
                case 3:
                    switch(u){
                        case 102:
                        case 112:
                            return e(o[0] + r), "";
                        default:
                            return r + (0 === d ? "/*|*/" : "");
                    }
                case -2:
                    r.split("/*|*/}").forEach(t);
            }
        };
    }(function(e) {
        d.push(e);
    }), f = function f(e, r, s) {
        return 0 === r && -1 !== $d3862d922b52373a$var$ae.indexOf(s[n.length]) || s.match(o) ? e : "." + t;
    };
    return l.use([].concat(u, [
        function(e, t, o) {
            2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(_$r, f));
        },
        h,
        function(e) {
            if (-2 === e) {
                var t = d;
                return d = [], t;
            }
        }
    ])), m.hash = u.length ? u.reduce(function(e, t) {
        return t.name || $d3862d922b52373a$var$j(15), $d3862d922b52373a$var$te(e, t.name);
    }, 5381).toString() : "", m;
}
var $d3862d922b52373a$export$8c190ef828af4c86 = (0, ($parcel$interopDefault($k9mZt$react))).createContext(), $d3862d922b52373a$export$91317688fc694efa = $d3862d922b52373a$export$8c190ef828af4c86.Consumer, $d3862d922b52373a$var$de = (0, ($parcel$interopDefault($k9mZt$react))).createContext(), $d3862d922b52373a$var$he = ($d3862d922b52373a$var$de.Consumer, new $d3862d922b52373a$var$Z), $d3862d922b52373a$var$pe = $d3862d922b52373a$var$ce();
function $d3862d922b52373a$var$fe() {
    return (0, $k9mZt$react.useContext)($d3862d922b52373a$export$8c190ef828af4c86) || $d3862d922b52373a$var$he;
}
function $d3862d922b52373a$var$me() {
    return (0, $k9mZt$react.useContext)($d3862d922b52373a$var$de) || $d3862d922b52373a$var$pe;
}
function $d3862d922b52373a$export$a473771da2f0ff7c(e) {
    var t = (0, $k9mZt$react.useState)(e.stylisPlugins), n = t[0], s = t[1], c = $d3862d922b52373a$var$fe(), u = (0, $k9mZt$react.useMemo)(function() {
        var t = c;
        return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
            target: e.target
        }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
            useCSSOMInjection: !1
        })), t;
    }, [
        e.disableCSSOMInjection,
        e.sheet,
        e.target
    ]), l = (0, $k9mZt$react.useMemo)(function() {
        return $d3862d922b52373a$var$ce({
            options: {
                prefix: !e.disableVendorPrefixes
            },
            plugins: n
        });
    }, [
        e.disableVendorPrefixes,
        n
    ]);
    return (0, $k9mZt$react.useEffect)(function() {
        (0, ($parcel$interopDefault($k9mZt$shallowequal)))(n, e.stylisPlugins) || s(e.stylisPlugins);
    }, [
        e.stylisPlugins
    ]), (0, ($parcel$interopDefault($k9mZt$react))).createElement($d3862d922b52373a$export$8c190ef828af4c86.Provider, {
        value: u
    }, (0, ($parcel$interopDefault($k9mZt$react))).createElement($d3862d922b52373a$var$de.Provider, {
        value: l
    }, (0, e.children)));
}
var $d3862d922b52373a$var$ve = function() {
    var e = function e(e, t) {
        var n = this;
        this.inject = function(e, t) {
            void 0 === t && (t = $d3862d922b52373a$var$pe);
            var _$r = n.name + t.hash;
            e.hasNameForId(n.id, _$r) || e.insertRules(n.id, _$r, t(n.rules, _$r, "@keyframes"));
        }, this.toString = function() {
            return $d3862d922b52373a$var$j(12, String(n.name));
        }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
    };
    return e.prototype.getName = function(e) {
        return void 0 === e && (e = $d3862d922b52373a$var$pe), this.name + e.hash;
    }, e;
}(), $d3862d922b52373a$var$ge = /([A-Z])/, $d3862d922b52373a$var$Se = /([A-Z])/g, $d3862d922b52373a$var$we = /^ms-/, $d3862d922b52373a$var$Ee = function Ee(e) {
    return "-" + e.toLowerCase();
};
function $d3862d922b52373a$var$be(e) {
    return $d3862d922b52373a$var$ge.test(e) ? e.replace($d3862d922b52373a$var$Se, $d3862d922b52373a$var$Ee).replace($d3862d922b52373a$var$we, "-ms-") : e;
}
var $d3862d922b52373a$var$_e = function _e(e) {
    return null == e || !1 === e || "" === e;
};
function $d3862d922b52373a$var$Ne(e, n, r, o) {
    if (Array.isArray(e)) {
        for(var s, i = [], a = 0, c = e.length; a < c; a += 1)"" !== (s = $d3862d922b52373a$var$Ne(e[a], n, r, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
        return i;
    }
    if ($d3862d922b52373a$var$_e(e)) return "";
    if ($d3862d922b52373a$export$7ba318d8d2f06c76(e)) return "." + e.styledComponentId;
    if ($d3862d922b52373a$var$b(e)) {
        if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n) return e;
        var u = e(n);
        return $d3862d922b52373a$var$Ne(u, n, r, o);
    }
    var l;
    return e instanceof $d3862d922b52373a$var$ve ? r ? (e.inject(r, o), e.getName(o)) : e : $d3862d922b52373a$var$S(e) ? function e(t, n) {
        var _$r, _$o, s = [];
        for(var i in t)t.hasOwnProperty(i) && !$d3862d922b52373a$var$_e(t[i]) && (Array.isArray(t[i]) && t[i].isCss || $d3862d922b52373a$var$b(t[i]) ? s.push($d3862d922b52373a$var$be(i) + ":", t[i], ";") : $d3862d922b52373a$var$S(t[i]) ? s.push.apply(s, e(t[i], i)) : s.push($d3862d922b52373a$var$be(i) + ": " + (_$r = i, null == (_$o = t[i]) || "boolean" == typeof _$o || "" === _$o ? "" : "number" != typeof _$o || 0 === _$o || _$r in (0, ($parcel$interopDefault($k9mZt$emotionunitless))) || _$r.startsWith("--") ? String(_$o).trim() : _$o + "px") + ";"));
        return n ? [
            n + " {"
        ].concat(s, [
            "}"
        ]) : s;
    }(e) : e.toString();
}
var $d3862d922b52373a$var$Ae = function Ae(e) {
    return Array.isArray(e) && (e.isCss = !0), e;
};
function $d3862d922b52373a$export$dbf350e5966cf602(e) {
    for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), _$r = 1; _$r < t; _$r++)n[_$r - 1] = arguments[_$r];
    return $d3862d922b52373a$var$b(e) || $d3862d922b52373a$var$S(e) ? $d3862d922b52373a$var$Ae($d3862d922b52373a$var$Ne($d3862d922b52373a$var$g($d3862d922b52373a$var$w, [
        e
    ].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : $d3862d922b52373a$var$Ae($d3862d922b52373a$var$Ne($d3862d922b52373a$var$g(e, n)));
}
var $d3862d922b52373a$var$Ie = /invalid hook call/i, $d3862d922b52373a$var$Pe = new Set, $d3862d922b52373a$var$Oe = function Oe(e, t) {
    var n, _$r, o, e1;
}, $d3862d922b52373a$var$Re = function Re(e, t, n) {
    return void 0 === n && (n = $d3862d922b52373a$var$E), e.theme !== n.theme && e.theme || t || n.theme;
}, $d3862d922b52373a$var$De = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, $d3862d922b52373a$var$je = /(^-|-$)/g;
function $d3862d922b52373a$var$Te(e) {
    return e.replace($d3862d922b52373a$var$De, "-").replace($d3862d922b52373a$var$je, "");
}
var $d3862d922b52373a$var$xe = function xe(e) {
    return $d3862d922b52373a$var$ee($d3862d922b52373a$var$ne(e) >>> 0);
};
function $d3862d922b52373a$var$ke(e) {
    return "string" == typeof e && true;
}
var $d3862d922b52373a$var$Ve = function Ve(e) {
    return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e);
}, $d3862d922b52373a$var$Be = function Be(e) {
    return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
};
function $d3862d922b52373a$var$ze(e, t, n) {
    var _$r = e[n];
    $d3862d922b52373a$var$Ve(t) && $d3862d922b52373a$var$Ve(_$r) ? $d3862d922b52373a$var$Me(_$r, t) : e[n] = t;
}
function $d3862d922b52373a$var$Me(e) {
    for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), _$r = 1; _$r < t; _$r++)n[_$r - 1] = arguments[_$r];
    for(var o = 0, s = n; o < s.length; o++){
        var i = s[o];
        if ($d3862d922b52373a$var$Ve(i)) for(var a in i)$d3862d922b52373a$var$Be(a) && $d3862d922b52373a$var$ze(e, i[a], a);
    }
    return e;
}
var $d3862d922b52373a$export$2c657da244d00bd6 = (0, ($parcel$interopDefault($k9mZt$react))).createContext(), $d3862d922b52373a$export$b631efc24e9d5e2f = $d3862d922b52373a$export$2c657da244d00bd6.Consumer;
function $d3862d922b52373a$export$d8964aec282183a3(e) {
    var t = (0, $k9mZt$react.useContext)($d3862d922b52373a$export$2c657da244d00bd6), n = (0, $k9mZt$react.useMemo)(function() {
        return function(e, t) {
            if (!e) return $d3862d922b52373a$var$j(14);
            if ($d3862d922b52373a$var$b(e)) {
                var n = e(t);
                return n;
            }
            return Array.isArray(e) || "object" != typeof e ? $d3862d922b52373a$var$j(8) : t ? $d3862d922b52373a$var$v({}, t, {}, e) : e;
        }(e.theme, t);
    }, [
        e.theme,
        t
    ]);
    return e.children ? (0, ($parcel$interopDefault($k9mZt$react))).createElement($d3862d922b52373a$export$2c657da244d00bd6.Provider, {
        value: n
    }, e.children) : null;
}
var $d3862d922b52373a$var$Ye = {};
function $d3862d922b52373a$var$qe(e, t, n) {
    var o = $d3862d922b52373a$export$7ba318d8d2f06c76(e), i = !$d3862d922b52373a$var$ke(e), a = t.attrs, c = void 0 === a ? $d3862d922b52373a$var$w : a, d = t.componentId, h = void 0 === d ? function(e, t) {
        var _$n = "string" != typeof e ? "sc" : $d3862d922b52373a$var$Te(e);
        $d3862d922b52373a$var$Ye[_$n] = ($d3862d922b52373a$var$Ye[_$n] || 0) + 1;
        var _$r = _$n + "-" + $d3862d922b52373a$var$xe("5.3.10" + _$n + $d3862d922b52373a$var$Ye[_$n]);
        return t ? t + "-" + _$r : _$r;
    }(t.displayName, t.parentComponentId) : d, p = t.displayName, f = void 0 === p ? function(e) {
        return $d3862d922b52373a$var$ke(e) ? "styled." + e : "Styled(" + $d3862d922b52373a$var$_(e) + ")";
    }(e) : p, g = t.displayName && t.componentId ? $d3862d922b52373a$var$Te(t.displayName) + "-" + t.componentId : t.componentId || h, S = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c, A = t.shouldForwardProp;
    o && e.shouldForwardProp && (A = t.shouldForwardProp ? function A(n, r, o) {
        return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o);
    } : e.shouldForwardProp);
    var C, I = new $d3862d922b52373a$var$se(n, g, o ? e.componentStyle : void 0), P = I.isStatic && 0 === c.length, O = function O(e, t) {
        return function(e, t, n, r) {
            var o = e.attrs, i = e.componentStyle, a = e.defaultProps, c = e.foldedComponentIds, d = e.shouldForwardProp, h = e.styledComponentId, p = e.target;
            var f = function(e, t, n) {
                void 0 === e && (e = $d3862d922b52373a$var$E);
                var _$r = $d3862d922b52373a$var$v({}, t, {
                    theme: e
                }), o = {};
                return n.forEach(function(e) {
                    var _$t, _$n, _$s, i = e;
                    for(_$t in $d3862d922b52373a$var$b(i) && (i = i(_$r)), i)_$r[_$t] = o[_$t] = "className" === _$t ? (_$n = o[_$t], _$s = i[_$t], _$n && _$s ? _$n + " " + _$s : _$n || _$s) : i[_$t];
                }), [
                    _$r,
                    o
                ];
            }($d3862d922b52373a$var$Re(t, (0, $k9mZt$react.useContext)($d3862d922b52373a$export$2c657da244d00bd6), a) || $d3862d922b52373a$var$E, t, o), _$y = f[0], g = f[1], S = function(e, t, n, r) {
                var o = $d3862d922b52373a$var$fe(), _$s = $d3862d922b52373a$var$me(), i = t ? e.generateAndInjectStyles($d3862d922b52373a$var$E, o, _$s) : e.generateAndInjectStyles(n, o, _$s);
                return i;
            }(i, r, _$y, void 0), w = n, _ = g.$as || t.$as || g.as || t.as || p, _$N = $d3862d922b52373a$var$ke(_), A = g !== t ? $d3862d922b52373a$var$v({}, t, {}, g) : t, C = {};
            for(var I in A)"$" !== I[0] && "as" !== I && ("forwardedAs" === I ? C.as = A[I] : (d ? d(I, (0, ($parcel$interopDefault($k9mZt$emotionispropvalid))), _) : !_$N || (0, ($parcel$interopDefault($k9mZt$emotionispropvalid)))(I)) && (C[I] = A[I]));
            return t.style && g.style !== t.style && (C.style = $d3862d922b52373a$var$v({}, t.style, {}, g.style)), C.className = Array.prototype.concat(c, h, S !== h ? S : null, t.className, g.className).filter(Boolean).join(" "), C.ref = w, (0, $k9mZt$react.createElement)(_, C);
        }(C, e, t, P);
    };
    return O.displayName = f, (C = (0, ($parcel$interopDefault($k9mZt$react))).forwardRef(O)).attrs = S, C.componentStyle = I, C.displayName = f, C.shouldForwardProp = A, C.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : $d3862d922b52373a$var$w, C.styledComponentId = g, C.target = o ? e.target : e, C.withComponent = function(e) {
        var _$r = t.componentId, o = function(e, t) {
            if (null == e) return {};
            var _$n, _$r, o = {}, s = Object.keys(e);
            for(_$r = 0; _$r < s.length; _$r++)_$n = s[_$r], t.indexOf(_$n) >= 0 || (o[_$n] = e[_$n]);
            return o;
        }(t, [
            "componentId"
        ]), s = _$r && _$r + "-" + ($d3862d922b52373a$var$ke(e) ? e : $d3862d922b52373a$var$Te($d3862d922b52373a$var$_(e)));
        return $d3862d922b52373a$var$qe(e, $d3862d922b52373a$var$v({}, o, {
            attrs: S,
            componentId: s
        }), n);
    }, Object.defineProperty(C, "defaultProps", {
        get: function get() {
            return this._foldedDefaultProps;
        },
        set: function set(t) {
            this._foldedDefaultProps = o ? $d3862d922b52373a$var$Me({}, e.defaultProps, t) : t;
        }
    }), Object.defineProperty(C, "toString", {
        value: function value() {
            return "." + C.styledComponentId;
        }
    }), i && (0, ($parcel$interopDefault($k9mZt$hoistnonreactstatics)))(C, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0
    }), C;
}
var $d3862d922b52373a$var$He = function He(e) {
    return function e(t, r, o) {
        if (void 0 === o && (o = $d3862d922b52373a$var$E), !(0, $k9mZt$reactis.isValidElementType)(r)) return $d3862d922b52373a$var$j(1, String(r));
        var s = function s() {
            return t(r, o, $d3862d922b52373a$export$dbf350e5966cf602.apply(void 0, arguments));
        };
        return s.withConfig = function(n) {
            return e(t, r, $d3862d922b52373a$var$v({}, o, {}, n));
        }, s.attrs = function(n) {
            return e(t, r, $d3862d922b52373a$var$v({}, o, {
                attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
            }));
        }, s;
    }($d3862d922b52373a$var$qe, e);
};
[
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "textPath",
    "tspan"
].forEach(function(e) {
    $d3862d922b52373a$var$He[e] = $d3862d922b52373a$var$He(e);
});
var $d3862d922b52373a$var$$e = function() {
    var e = function e(e, t) {
        this.rules = e, this.componentId = t, this.isStatic = $d3862d922b52373a$var$re(e), $d3862d922b52373a$var$Z.registerId(this.componentId + 1);
    };
    var t = e.prototype;
    return t.createStyles = function(e, t, n, r) {
        var o = r($d3862d922b52373a$var$Ne(this.rules, t, n, r).join(""), ""), s = this.componentId + e;
        n.insertRules(s, s, o);
    }, t.removeStyles = function(e, t) {
        t.clearRules(this.componentId + e);
    }, t.renderStyles = function(e, t, n, r) {
        e > 2 && $d3862d922b52373a$var$Z.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
    }, e;
}();
function $d3862d922b52373a$export$f0f03736edb61697(e) {
    var l = function l(e) {
        var t = $d3862d922b52373a$var$fe(), n = $d3862d922b52373a$var$me(), o = (0, $k9mZt$react.useContext)($d3862d922b52373a$export$2c657da244d00bd6), l = (0, $k9mZt$react.useRef)(t.allocateGSInstance(a)).current;
        return t.server && h(l, e, t, o, n), (0, $k9mZt$react.useLayoutEffect)(function() {
            if (!t.server) return h(l, e, t, o, n), function() {
                return u.removeStyles(l, t);
            };
        }, [
            l,
            e,
            t,
            o,
            n
        ]), null;
    };
    var h = function h(e, t, n, r, o) {
        if (u.isStatic) u.renderStyles(e, $d3862d922b52373a$var$O, n, o);
        else {
            var s = $d3862d922b52373a$var$v({}, t, {
                theme: $d3862d922b52373a$var$Re(t, r, l.defaultProps)
            });
            u.renderStyles(e, s, n, o);
        }
    };
    for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)n[o - 1] = arguments[o];
    var i = $d3862d922b52373a$export$dbf350e5966cf602.apply(void 0, [
        e
    ].concat(n)), a = "sc-global-" + $d3862d922b52373a$var$xe(JSON.stringify(i)), u = new $d3862d922b52373a$var$$e(i, a);
    return (0, ($parcel$interopDefault($k9mZt$react))).memo(l);
}
function $d3862d922b52373a$export$d25ddfdf17c3ad3e(e) {
    for(var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), _$r = 1; _$r < t; _$r++)n[_$r - 1] = arguments[_$r];
    var o = $d3862d922b52373a$export$dbf350e5966cf602.apply(void 0, [
        e
    ].concat(n)).join(""), s = $d3862d922b52373a$var$xe(o);
    return new $d3862d922b52373a$var$ve(s, o);
}
var $d3862d922b52373a$export$ae8c7d15c8b89a20 = function() {
    var e = function e() {
        var e = this;
        this._emitSheetCSS = function() {
            var t = e.instance.toString();
            if (!t) return "";
            var n = $d3862d922b52373a$var$q();
            return "<style " + [
                n && 'nonce="' + n + '"',
                $d3862d922b52373a$var$A + '="true"',
                'data-styled-version="5.3.10"'
            ].filter(Boolean).join(" ") + ">" + t + "</style>";
        }, this.getStyleTags = function() {
            return e.sealed ? $d3862d922b52373a$var$j(2) : e._emitSheetCSS();
        }, this.getStyleElement = function() {
            var t;
            if (e.sealed) return $d3862d922b52373a$var$j(2);
            var n = ((t = {})[$d3862d922b52373a$var$A] = "", t["data-styled-version"] = "5.3.10", t.dangerouslySetInnerHTML = {
                __html: e.instance.toString()
            }, t), o = $d3862d922b52373a$var$q();
            return o && (n.nonce = o), [
                (0, ($parcel$interopDefault($k9mZt$react))).createElement("style", $d3862d922b52373a$var$v({}, n, {
                    key: "sc-0-0"
                }))
            ];
        }, this.seal = function() {
            e.sealed = !0;
        }, this.instance = new $d3862d922b52373a$var$Z({
            isServer: !0
        }), this.sealed = !1;
    };
    var t = e.prototype;
    return t.collectStyles = function(e) {
        return this.sealed ? $d3862d922b52373a$var$j(2) : (0, ($parcel$interopDefault($k9mZt$react))).createElement($d3862d922b52373a$export$a473771da2f0ff7c, {
            sheet: this.instance
        }, e);
    }, t.interleaveWithNodeStream = function(e) {
        return $d3862d922b52373a$var$j(3);
    }, e;
}(), $d3862d922b52373a$export$e8748c6a27b910dc = function Xe(e) {
    var t = (0, ($parcel$interopDefault($k9mZt$react))).forwardRef(function(t, n) {
        var o = (0, $k9mZt$react.useContext)($d3862d922b52373a$export$2c657da244d00bd6), i = e.defaultProps, a = $d3862d922b52373a$var$Re(t, o, i);
        return (0, ($parcel$interopDefault($k9mZt$react))).createElement(e, $d3862d922b52373a$var$v({}, t, {
            theme: a,
            ref: n
        }));
    });
    return (0, ($parcel$interopDefault($k9mZt$hoistnonreactstatics)))(t, e), t.displayName = "WithTheme(" + $d3862d922b52373a$var$_(e) + ")", t;
}, $d3862d922b52373a$export$93d4e7f90805808f = function Ze() {
    return (0, $k9mZt$react.useContext)($d3862d922b52373a$export$2c657da244d00bd6);
}, $d3862d922b52373a$export$5c87cfe6c475f500 = {
    StyleSheet: $d3862d922b52373a$var$Z,
    masterSheet: $d3862d922b52373a$var$he
};
var $d3862d922b52373a$export$2e2bcd8739ae039 = $d3862d922b52373a$var$He;


function $ecaf9ad8f9fb2e64$var$_templateObject() {
    var data = (0, ($parcel$interopDefault($k9mZt$swchelperslib_tagged_template_literaljs)))([
        "\n  background-color: deeppink;\n  border: none;\n  padding: 24px;\n  border-radius: 16px;\n"
    ]);
    $ecaf9ad8f9fb2e64$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var $ecaf9ad8f9fb2e64$export$60332b2344f7fe41 = function() {
    return /*#__PURE__*/ (0, $k9mZt$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $k9mZt$reactjsxruntime.jsx)("p", {
                style: {
                    backgroundColor: "deeppink"
                },
                children: "Hello! this is a card in the click-ui!"
            }),
            /*#__PURE__*/ (0, $k9mZt$reactjsxruntime.jsx)($ecaf9ad8f9fb2e64$var$CardButton, {
                children: "I'm a click-ui button"
            })
        ]
    });
};
var $ecaf9ad8f9fb2e64$var$CardButton = (0, $d3862d922b52373a$export$2e2bcd8739ae039).button($ecaf9ad8f9fb2e64$var$_templateObject());




//# sourceMappingURL=main.js.map
