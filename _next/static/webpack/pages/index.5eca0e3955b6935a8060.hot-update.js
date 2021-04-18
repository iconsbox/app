webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/contents/settings/index.tsx":
/*!************************************************!*\
  !*** ./Components/contents/settings/index.tsx ***!
  \************************************************/
/*! exports provided: iconSizes, defaultColor, iconDetailCTA, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iconSizes\", function() { return iconSizes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultColor\", function() { return defaultColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iconDetailCTA\", function() { return iconDetailCTA; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_css_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-css-grid */ \"./node_modules/styled-css-grid/dist/styled-css-grid.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./Components/contents/settings/styles.ts\");\n/* harmony import */ var _search_components_seachBox_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/components/seachBox/styles */ \"./Components/contents/search/components/seachBox/styles.ts\");\n\n\nvar _jsxFileName = \"/Users/sayjeyhi/Desktop/Projects/github/iconbox_app/Components/contents/settings/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar iconSizes = [\"14px\", \"18px\", \"24px\", \"32px\"];\nvar defaultColor = [\"#333\", \"#888\", \"#D23E3E\", \"#184fb5\", \"#75ae49\"];\nvar iconDetailCTA = [\"Download SVG file\", \"Copy react import\", \"Copy svg import\", \"Copy react sprite import\", \"Copy vue import\", \"Copy svelte import\"];\n\nvar Settings = function Settings() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      settings = _useState[0],\n      setSettings = _useState[1];\n\n  var handleChangeSetting = function handleChangeSetting(name) {\n    return function () {};\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"StyledContent\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"StyledHeadBar\"], {\n      columns: 7,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_css_grid__WEBPACK_IMPORTED_MODULE_2__[\"Cell\"], {\n        width: 4,\n        top: 1,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: \"Settings\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"StyledForm\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_search_components_seachBox_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledFiltersWrapper\"], {\n        initial: {\n          opacity: 0,\n          y: -20\n        },\n        animate: {\n          opacity: 1,\n          y: 0\n        },\n        transition: {\n          duration: 0.3,\n          y: -20\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_search_components_seachBox_styles__WEBPACK_IMPORTED_MODULE_4__[\"FormItem\"], {\n          children: [\"Package\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n            onChange: handleChangeSetting(\"iconsSize\"),\n            onBlur: handleSelectPackageFilter,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n              value: \"all\",\n              children: \"All\"\n            }, \"all\", false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, _this), Object.keys(packages).map(function (p) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n                value: p,\n                children: p\n              }, p, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 17\n              }, _this);\n            })]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Settings, \"U0Rrj4RGL1Zv6mfG+w4sOD2O5bg=\");\n\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\nvar _c;\n\n$RefreshReg$(_c, \"Settings\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9jb250ZW50cy9zZXR0aW5ncy9pbmRleC50c3g/MTM4NSJdLCJuYW1lcyI6WyJpY29uU2l6ZXMiLCJkZWZhdWx0Q29sb3IiLCJpY29uRGV0YWlsQ1RBIiwiU2V0dGluZ3MiLCJ1c2VTdGF0ZSIsInNldHRpbmdzIiwic2V0U2V0dGluZ3MiLCJoYW5kbGVDaGFuZ2VTZXR0aW5nIiwibmFtZSIsIm9wYWNpdHkiLCJ5IiwiZHVyYXRpb24iLCJoYW5kbGVTZWxlY3RQYWNrYWdlRmlsdGVyIiwiT2JqZWN0Iiwia2V5cyIsInBhY2thZ2VzIiwibWFwIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUtPLElBQU1BLFNBQVMsR0FBRyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLENBQWxCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsU0FBakIsRUFBNEIsU0FBNUIsRUFBdUMsU0FBdkMsQ0FBckI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsQ0FDM0IsbUJBRDJCLEVBRTNCLG1CQUYyQixFQUczQixpQkFIMkIsRUFJM0IsMEJBSjJCLEVBSzNCLGlCQUwyQixFQU0zQixvQkFOMkIsQ0FBdEI7O0FBNEJQLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQyxFQUFELENBRG5CO0FBQUEsTUFDZEMsUUFEYztBQUFBLE1BQ0pDLFdBREk7O0FBR3JCLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsSUFBRDtBQUFBLFdBQWtCLFlBQU0sQ0FBRSxDQUExQjtBQUFBLEdBQTVCOztBQUVBLHNCQUNFLHFFQUFDLHFEQUFEO0FBQUEsNEJBQ0UscUVBQUMscURBQUQ7QUFBZSxhQUFPLEVBQUUsQ0FBeEI7QUFBQSw2QkFDRSxxRUFBQyxvREFBRDtBQUFNLGFBQUssRUFBRSxDQUFiO0FBQWdCLFdBQUcsRUFBRSxDQUFyQjtBQUFBLCtCQUNFO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVNFLHFFQUFDLGtEQUFEO0FBQUEsNkJBQ0UscUVBQUMsdUZBQUQ7QUFDRSxlQUFPLEVBQUU7QUFBRUMsaUJBQU8sRUFBRSxDQUFYO0FBQWNDLFdBQUMsRUFBRSxDQUFDO0FBQWxCLFNBRFg7QUFFRSxlQUFPLEVBQUU7QUFBRUQsaUJBQU8sRUFBRSxDQUFYO0FBQWNDLFdBQUMsRUFBRTtBQUFqQixTQUZYO0FBR0Usa0JBQVUsRUFBRTtBQUFFQyxrQkFBUSxFQUFFLEdBQVo7QUFBaUJELFdBQUMsRUFBRSxDQUFDO0FBQXJCLFNBSGQ7QUFBQSwrQkFLRSxxRUFBQywyRUFBRDtBQUFBLGdDQUNVLEdBRFYsZUFFRTtBQUNFLG9CQUFRLEVBQUVILG1CQUFtQixDQUFDLFdBQUQsQ0FEL0I7QUFFRSxrQkFBTSxFQUFFSyx5QkFGVjtBQUFBLG9DQUlFO0FBQWtCLG1CQUFLLEVBQUMsS0FBeEI7QUFBQTtBQUFBLGVBQVksS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLEVBT0dDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxRQUFaLEVBQXNCQyxHQUF0QixDQUEwQixVQUFDQyxDQUFEO0FBQUEsa0NBQ3pCO0FBQWdCLHFCQUFLLEVBQUVBLENBQXZCO0FBQUEsMEJBQ0dBO0FBREgsaUJBQWFBLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEeUI7QUFBQSxhQUExQixDQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0NELENBekNEOztHQUFNZCxROztLQUFBQSxRO0FBMkNTQSx1RUFBZiIsImZpbGUiOiIuL0NvbXBvbmVudHMvY29udGVudHMvc2V0dGluZ3MvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDZWxsIH0gZnJvbSBcInN0eWxlZC1jc3MtZ3JpZFwiO1xuaW1wb3J0IHsgU3R5bGVkSGVhZEJhciwgU3R5bGVkQ29udGVudCwgU3R5bGVkRm9ybSB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHtcbiAgRm9ybUl0ZW0sXG4gIFN0eWxlZEZpbHRlcnNXcmFwcGVyLFxufSBmcm9tIFwiLi4vc2VhcmNoL2NvbXBvbmVudHMvc2VhY2hCb3gvc3R5bGVzXCI7XG5cbmV4cG9ydCBjb25zdCBpY29uU2l6ZXMgPSBbXCIxNHB4XCIsIFwiMThweFwiLCBcIjI0cHhcIiwgXCIzMnB4XCJdO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb2xvciA9IFtcIiMzMzNcIiwgXCIjODg4XCIsIFwiI0QyM0UzRVwiLCBcIiMxODRmYjVcIiwgXCIjNzVhZTQ5XCJdO1xuZXhwb3J0IGNvbnN0IGljb25EZXRhaWxDVEEgPSBbXG4gIFwiRG93bmxvYWQgU1ZHIGZpbGVcIixcbiAgXCJDb3B5IHJlYWN0IGltcG9ydFwiLFxuICBcIkNvcHkgc3ZnIGltcG9ydFwiLFxuICBcIkNvcHkgcmVhY3Qgc3ByaXRlIGltcG9ydFwiLFxuICBcIkNvcHkgdnVlIGltcG9ydFwiLFxuICBcIkNvcHkgc3ZlbHRlIGltcG9ydFwiLFxuXTtcblxudHlwZSBTZXR0aW5ncyA9IHtcbiAgaWNvbnNTaXplczogdHlwZW9mIGljb25TaXplc1tudW1iZXJdO1xuICBkZWZhdWx0Q29sb3I6IHR5cGVvZiBkZWZhdWx0Q29sb3JbbnVtYmVyXTtcbiAgaWNvbkRldGFpbENUQTogdHlwZW9mIGljb25EZXRhaWxDVEFbbnVtYmVyXTtcbiAgY29weUJ1dHRvbkFjdGlvbjogW1xuICAgIFwiQ29weSBwdXJlIHN2Z1wiLFxuICAgIFwiQ29weSByZWFjdCBpbXBvcnRcIixcbiAgICBcIkNvcHkgc3ZnIGltcG9ydFwiLFxuICAgIFwiQ29weSByZWFjdCBzcHJpdGUgaW1wb3J0XCIsXG4gICAgXCJDb3B5IHZ1ZSBpbXBvcnRcIixcbiAgICBcIkNvcHkgc3ZlbHRlIGltcG9ydFwiXG4gIF07XG4gIGxhbmd1YWdlOiBbXCJFbmdsaXNoXCJdO1xuICBtb2RlOiBbXCJMaWdodFwiLCBcIkRhcmtcIl07XG4gIGFuaW1hdGlvbnM6IFtcIkFjdGl2ZVwiLCBcIkRlQWN0aXZlXCJdO1xuICBkcmFnRHJvcDogW1wiUGFzdGUgc3ZnXCIsIFwiUGFzdGUgc3ZnIHVybFwiXTtcbiAgcGFja2FnZXNPcmRlcjogW1wiQWxwaGFiZXRpY2FsXCIsIFwiSWNvbnMgY291bnRcIiwgXCJQYWNrYWdlIHBvcHVsYXJpdHlcIl07XG59O1xuXG5jb25zdCBTZXR0aW5ncyA9ICgpID0+IHtcbiAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlU2V0dGluZyA9IChuYW1lOiBzdHJpbmcpID0+ICgpID0+IHt9O1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZENvbnRlbnQ+XG4gICAgICA8U3R5bGVkSGVhZEJhciBjb2x1bW5zPXs3fT5cbiAgICAgICAgPENlbGwgd2lkdGg9ezR9IHRvcD17MX0+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgPHN0cm9uZz5TZXR0aW5nczwvc3Ryb25nPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvQ2VsbD5cbiAgICAgIDwvU3R5bGVkSGVhZEJhcj5cblxuICAgICAgPFN0eWxlZEZvcm0+XG4gICAgICAgIDxTdHlsZWRGaWx0ZXJzV3JhcHBlclxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogLTIwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zLCB5OiAtMjAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgIFBhY2thZ2V7XCIgXCJ9XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTZXR0aW5nKFwiaWNvbnNTaXplXCIpfVxuICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZVNlbGVjdFBhY2thZ2VGaWx0ZXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PVwiYWxsXCIgdmFsdWU9XCJhbGxcIj5cbiAgICAgICAgICAgICAgICBBbGxcbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhwYWNrYWdlcykubWFwKChwKSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3B9IHZhbHVlPXtwfT5cbiAgICAgICAgICAgICAgICAgIHtwfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgIDwvU3R5bGVkRmlsdGVyc1dyYXBwZXI+XG4gICAgICA8L1N0eWxlZEZvcm0+XG4gICAgPC9TdHlsZWRDb250ZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/contents/settings/index.tsx\n");

/***/ })

})