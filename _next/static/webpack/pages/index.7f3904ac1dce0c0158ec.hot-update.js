webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/contents/settings/index.tsx":
/*!************************************************!*\
  !*** ./Components/contents/settings/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_css_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-css-grid */ \"./node_modules/styled-css-grid/dist/styled-css-grid.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./Components/contents/settings/styles.ts\");\n/* harmony import */ var _search_components_seachBox_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search/components/seachBox/styles */ \"./Components/contents/search/components/seachBox/styles.ts\");\n/* harmony import */ var _Helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Helpers */ \"./Helpers/index.ts\");\n\n\nvar _jsxFileName = \"/Users/sayjeyhi/Desktop/Projects/github/iconbox_app/Components/contents/settings/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Settings = function Settings() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      settings = _useState[0],\n      setSettings = _useState[1];\n\n  var handleChangeSetting = function handleChangeSetting(name) {\n    return function () {\n      console.log(\"Changing \", name);\n    };\n  };\n\n  var settingItems = [{\n    name: \"iconsSize\",\n    title: \"Icons size\",\n    values: _Helpers__WEBPACK_IMPORTED_MODULE_5__[\"iconSizes\"]\n  }, {\n    name: \"iconsColor\",\n    title: \"Icons color\",\n    values: _Helpers__WEBPACK_IMPORTED_MODULE_5__[\"iconColors\"]\n  }, {\n    name: \"iconDetailPageCTA\",\n    title: \"Icons detail page CTA\",\n    values: _Helpers__WEBPACK_IMPORTED_MODULE_5__[\"iconDetailPageCTAs\"]\n  }, {\n    name: \"copyButtonAction\",\n    title: \"List copy button action\",\n    values: _Helpers__WEBPACK_IMPORTED_MODULE_5__[\"listCopyButtonActions\"]\n  }, {\n    name: \"language\",\n    title: \"Language\",\n    values: _Helpers__WEBPACK_IMPORTED_MODULE_5__[\"languages\"]\n  }, {\n    name: \"mode\",\n    title: \"Theme mode\",\n    values: _Helpers__WEBPACK_IMPORTED_MODULE_5__[\"modes\"]\n  }, {\n    name: \"animation\",\n    title: \"Animation\",\n    values: _Helpers__WEBPACK_IMPORTED_MODULE_5__[\"animations\"]\n  }, {\n    name: \"dragDropFunctionality\",\n    title: \"Drag&Drop functionality\",\n    values: _Helpers__WEBPACK_IMPORTED_MODULE_5__[\"dragDropFunctionalities\"]\n  }, {\n    name: \"packagesOrder\",\n    title: \"Packages order\",\n    values: _Helpers__WEBPACK_IMPORTED_MODULE_5__[\"packagesOrders\"]\n  }];\n\n  var renderSettingItem = function renderSettingItem(item, index) {\n    var title = item.title,\n        name = item.name,\n        values = item.values;\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_search_components_seachBox_styles__WEBPACK_IMPORTED_MODULE_4__[\"StyledFiltersWrapper\"], {\n      initial: {\n        opacity: 0,\n        y: -20\n      },\n      animate: {\n        opacity: 1,\n        y: 0\n      },\n      transition: {\n        duration: 0.3,\n        y: -20\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_search_components_seachBox_styles__WEBPACK_IMPORTED_MODULE_4__[\"FormItem\"], {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n        onChange: handleChangeSetting(name),\n        onBlur: handleChangeSetting(name),\n        children: values.map(function (p) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n            value: p,\n            children: p\n          }, p, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"StyledContent\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"StyledHeadBar\"], {\n      columns: 7,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_css_grid__WEBPACK_IMPORTED_MODULE_2__[\"Cell\"], {\n        width: 4,\n        top: 1,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"strong\", {\n            children: \"Settings\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_3__[\"StyledForm\"], {\n      children: settingItems.map(function (item, index) {\n        return renderSettingItem(item, index);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 116,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Settings, \"U0Rrj4RGL1Zv6mfG+w4sOD2O5bg=\");\n\n_c = Settings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\nvar _c;\n\n$RefreshReg$(_c, \"Settings\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9jb250ZW50cy9zZXR0aW5ncy9pbmRleC50c3g/MTM4NSJdLCJuYW1lcyI6WyJTZXR0aW5ncyIsInVzZVN0YXRlIiwic2V0dGluZ3MiLCJzZXRTZXR0aW5ncyIsImhhbmRsZUNoYW5nZVNldHRpbmciLCJuYW1lIiwiY29uc29sZSIsImxvZyIsInNldHRpbmdJdGVtcyIsInRpdGxlIiwidmFsdWVzIiwiaWNvblNpemVzIiwiaWNvbkNvbG9ycyIsImljb25EZXRhaWxQYWdlQ1RBcyIsImxpc3RDb3B5QnV0dG9uQWN0aW9ucyIsImxhbmd1YWdlcyIsIm1vZGVzIiwiYW5pbWF0aW9ucyIsImRyYWdEcm9wRnVuY3Rpb25hbGl0aWVzIiwicGFja2FnZXNPcmRlcnMiLCJyZW5kZXJTZXR0aW5nSXRlbSIsIml0ZW0iLCJpbmRleCIsIm9wYWNpdHkiLCJ5IiwiZHVyYXRpb24iLCJtYXAiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQThCQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQVcsRUFBWCxDQURuQjtBQUFBLE1BQ2RDLFFBRGM7QUFBQSxNQUNKQyxXQURJOztBQUdyQixNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLElBQUQ7QUFBQSxXQUFrQixZQUFNO0FBQ2xEQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCRixJQUF6QjtBQUNELEtBRjJCO0FBQUEsR0FBNUI7O0FBSUEsTUFBTUcsWUFBMkIsR0FBRyxDQUNsQztBQUNFSCxRQUFJLEVBQUUsV0FEUjtBQUVFSSxTQUFLLEVBQUUsWUFGVDtBQUdFQyxVQUFNLEVBQUVDLGtEQUFTQTtBQUhuQixHQURrQyxFQU1sQztBQUNFTixRQUFJLEVBQUUsWUFEUjtBQUVFSSxTQUFLLEVBQUUsYUFGVDtBQUdFQyxVQUFN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Q0MsSUFBRCxFQUFPQyxLQUFQLENBQWxDO0FBQUEsT0FBakI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQTVGRDs7R0FBTXRCLFE7O0tBQUFBLFE7QUE4RlNBLHVFQUFmIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9jb250ZW50cy9zZXR0aW5ncy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENlbGwgfSBmcm9tIFwic3R5bGVkLWNzcy1ncmlkXCI7XG5pbXBvcnQgeyBTdHlsZWRIZWFkQmFyLCBTdHlsZWRDb250ZW50LCBTdHlsZWRGb3JtIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQge1xuICBGb3JtSXRlbSxcbiAgU3R5bGVkRmlsdGVyc1dyYXBwZXIsXG59IGZyb20gXCIuLi9zZWFyY2gvY29tcG9uZW50cy9zZWFjaEJveC9zdHlsZXNcIjtcbmltcG9ydCB7XG4gIGFuaW1hdGlvbnMsXG4gIGRyYWdEcm9wRnVuY3Rpb25hbGl0aWVzLFxuICBpY29uQ29sb3JzLFxuICBpY29uRGV0YWlsUGFnZUNUQXMsXG4gIGljb25TaXplcyxcbiAgbGFuZ3VhZ2VzLFxuICBsaXN0Q29weUJ1dHRvbkFjdGlvbnMsXG4gIG1vZGVzLFxuICBwYWNrYWdlc09yZGVycyxcbn0gZnJvbSBcIi4uLy4uLy4uL0hlbHBlcnNcIjtcblxudHlwZSBTZXR0aW5ncyA9IHtcbiAgaWNvbnNTaXplPzogdHlwZW9mIGljb25TaXplc1tudW1iZXJdO1xuICBpY29uc0NvbG9yPzogdHlwZW9mIGljb25Db2xvcnNbbnVtYmVyXTtcbiAgaWNvbkRldGFpbFBhZ2VDVEE/OiB0eXBlb2YgaWNvbkRldGFpbFBhZ2VDVEFzW251bWJlcl07XG4gIGNvcHlCdXR0b25BY3Rpb24/OiB0eXBlb2YgbGlzdENvcHlCdXR0b25BY3Rpb25zW251bWJlcl07XG4gIGxhbmd1YWdlPzogdHlwZW9mIGxhbmd1YWdlc1tudW1iZXJdO1xuICBtb2RlPzogdHlwZW9mIG1vZGVzW251bWJlcl07XG4gIGFuaW1hdGlvbj86IHR5cGVvZiBhbmltYXRpb25zW251bWJlcl07XG4gIGRyYWdEcm9wRnVuY3Rpb25hbGl0eT86IHR5cGVvZiBkcmFnRHJvcEZ1bmN0aW9uYWxpdGllc1tudW1iZXJdO1xuICBwYWNrYWdlc09yZGVyPzogdHlwZW9mIHBhY2thZ2VzT3JkZXJzW251bWJlcl07XG59O1xuXG50eXBlIFNldHRpbmdJdGVtID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHZhbHVlczogc3RyaW5nW107XG59O1xuXG5jb25zdCBTZXR0aW5ncyA9ICgpID0+IHtcbiAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSB1c2VTdGF0ZTxTZXR0aW5ncz4oe30pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVNldHRpbmcgPSAobmFtZTogc3RyaW5nKSA9PiAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDaGFuZ2luZyBcIiwgbmFtZSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0dGluZ0l0ZW1zOiBTZXR0aW5nSXRlbVtdID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiaWNvbnNTaXplXCIsXG4gICAgICB0aXRsZTogXCJJY29ucyBzaXplXCIsXG4gICAgICB2YWx1ZXM6IGljb25TaXplcyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiaWNvbnNDb2xvclwiLFxuICAgICAgdGl0bGU6IFwiSWNvbnMgY29sb3JcIixcbiAgICAgIHZhbHVlczogaWNvbkNvbG9ycyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiaWNvbkRldGFpbFBhZ2VDVEFcIixcbiAgICAgIHRpdGxlOiBcIkljb25zIGRldGFpbCBwYWdlIENUQVwiLFxuICAgICAgdmFsdWVzOiBpY29uRGV0YWlsUGFnZUNUQXMsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImNvcHlCdXR0b25BY3Rpb25cIixcbiAgICAgIHRpdGxlOiBcIkxpc3QgY29weSBidXR0b24gYWN0aW9uXCIsXG4gICAgICB2YWx1ZXM6IGxpc3RDb3B5QnV0dG9uQWN0aW9ucyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwibGFuZ3VhZ2VcIixcbiAgICAgIHRpdGxlOiBcIkxhbmd1YWdlXCIsXG4gICAgICB2YWx1ZXM6IGxhbmd1YWdlcyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwibW9kZVwiLFxuICAgICAgdGl0bGU6IFwiVGhlbWUgbW9kZVwiLFxuICAgICAgdmFsdWVzOiBtb2RlcyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiYW5pbWF0aW9uXCIsXG4gICAgICB0aXRsZTogXCJBbmltYXRpb25cIixcbiAgICAgIHZhbHVlczogYW5pbWF0aW9ucyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiZHJhZ0Ryb3BGdW5jdGlvbmFsaXR5XCIsXG4gICAgICB0aXRsZTogXCJEcmFnJkRyb3AgZnVuY3Rpb25hbGl0eVwiLFxuICAgICAgdmFsdWVzOiBkcmFnRHJvcEZ1bmN0aW9uYWxpdGllcyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwicGFja2FnZXNPcmRlclwiLFxuICAgICAgdGl0bGU6IFwiUGFja2FnZXMgb3JkZXJcIixcbiAgICAgIHZhbHVlczogcGFja2FnZXNPcmRlcnMsXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgcmVuZGVyU2V0dGluZ0l0ZW0gPSAoaXRlbTogU2V0dGluZ0l0ZW0sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7IHRpdGxlLCBuYW1lLCB2YWx1ZXMgfSA9IGl0ZW07XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRGaWx0ZXJzV3JhcHBlclxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0yMCB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zLCB5OiAtMjAgfX1cbiAgICAgID5cbiAgICAgICAgPEZvcm1JdGVtPnt0aXRsZX08L0Zvcm1JdGVtPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNldHRpbmcobmFtZSl9XG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVDaGFuZ2VTZXR0aW5nKG5hbWUpfVxuICAgICAgICA+XG4gICAgICAgICAge3ZhbHVlcy5tYXAoKHApID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwfSB2YWx1ZT17cH0+XG4gICAgICAgICAgICAgIHtwfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9TdHlsZWRGaWx0ZXJzV3JhcHBlcj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZENvbnRlbnQ+XG4gICAgICA8U3R5bGVkSGVhZEJhciBjb2x1bW5zPXs3fT5cbiAgICAgICAgPENlbGwgd2lkdGg9ezR9IHRvcD17MX0+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgPHN0cm9uZz5TZXR0aW5nczwvc3Ryb25nPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgIDwvQ2VsbD5cbiAgICAgIDwvU3R5bGVkSGVhZEJhcj5cblxuICAgICAgPFN0eWxlZEZvcm0+XG4gICAgICAgIHtzZXR0aW5nSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gcmVuZGVyU2V0dGluZ0l0ZW0oaXRlbSwgaW5kZXgpKX1cbiAgICAgIDwvU3R5bGVkRm9ybT5cbiAgICA8L1N0eWxlZENvbnRlbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/contents/settings/index.tsx\n");

/***/ })

})