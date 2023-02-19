var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import hljs from "highlight.js";
// import { useEffect } from 'react'
import "./rayCode.css";
export default function RayCode(_a) {
    var code = _a.code, _b = _a.title, title = _b === void 0 ? "Untitled-1" : _b, padding = _a.padding, language = _a.language;
    useEffect(function () {
        document.body.style.setProperty("--padding", "".concat(padding ? padding : 64, "px"));
        return function () {
            document.body.style.removeProperty("--padding");
        };
    }, [padding]);
    return (_jsx("div", __assign({ className: "ray-code" }, { children: _jsxs("div", __assign({ className: "ray-code__inside" }, { children: [_jsxs("div", __assign({ className: "ray-code__header" }, { children: [_jsxs("section", { children: [_jsx("div", {}), _jsx("div", {}), _jsx("div", {})] }), _jsx("div", __assign({ className: "ray-code__header-title" }, { children: _jsx("p", { children: title }) }))] })), _jsx("pre", { children: _jsx("code", { className: "ray-code__code", dangerouslySetInnerHTML: {
                            __html: hljs.highlight(code, { language: language }).value,
                        } }) })] })) })));
}
//# sourceMappingURL=RayCode.js.map