"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BACKEND_URL: function() { return /* binding */ BACKEND_URL; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar BACKEND_URL = \"http://127.0.0.1:8000\";\nvar Home = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), data = _useState[0], setData = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"\".concat(BACKEND_URL, \"/api/hello\")).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            return setData(data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Next.js!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\ShinhaSoft\\\\django_nextjs_portfolio\\\\frontend\\\\nextjs_part\\\\nextjs_portfolio\\\\pages\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data\n            }, void 0, false, {\n                fileName: \"C:\\\\ShinhaSoft\\\\django_nextjs_portfolio\\\\frontend\\\\nextjs_part\\\\nextjs_portfolio\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\ShinhaSoft\\\\django_nextjs_portfolio\\\\frontend\\\\nextjs_part\\\\nextjs_portfolio\\\\pages\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 3\n    }, _this);\n};\n_s(Home, \"VZqd8eS65aqgHhr94QvD8B0VC/4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBRTVDLElBQU1HLGNBQWMsd0JBQXdCO0FBRW5ELElBQU1DLE9BQU87O0lBRVosSUFBd0JILFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUExQkksT0FBaUJKLGNBQVhLLFVBQVdMO0lBRXhCQyxnREFBU0EsQ0FBQztRQUNUSyxNQUFNLEdBQWUsT0FBWkosYUFBWSxlQUNuQkssSUFBSSxDQUFDLFNBQUNDO21CQUFhQSxTQUFTQyxJQUFJO1dBQ2hDRixJQUFJLENBQUMsU0FBQ0g7bUJBQVNDLFFBQVFEOztJQUMxQixHQUFHLEVBQUU7SUFFTCxxQkFDQyw4REFBQ007OzBCQUNBLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQzswQkFBR1I7Ozs7Ozs7Ozs7OztBQUdQO0dBaEJNRDtLQUFBQTtBQWtCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJBQ0tFTkRfVVJMID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwMDBcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblxyXG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZldGNoKGAke0JBQ0tFTkRfVVJMfS9hcGkvaGVsbG9gKVxyXG5cdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0LnRoZW4oKGRhdGEpID0+IHNldERhdGEoZGF0YSkpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxoMT5XZWxjb21lIHRvIE5leHQuanMhPC9oMT5cclxuXHRcdFx0PHA+e2RhdGF9PC9wPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCQUNLRU5EX1VSTCIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRpdiIsImgxIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});