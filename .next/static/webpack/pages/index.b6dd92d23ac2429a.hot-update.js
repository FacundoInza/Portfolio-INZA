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

/***/ "./components/sections/Projects.jsx":
/*!******************************************!*\
  !*** ./components/sections/Projects.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/axios */ \"./services/axios.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n\n\n\n\n\n\n\nconst apiData = (0,_services_axios__WEBPACK_IMPORTED_MODULE_4__.fetchData)();\nconst Projects = ()=>{\n    const projects = apiData.read().data;\n    const settings = {\n        dots: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 3,\n        slidesToScroll: 1\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        borderRadius: 40,\n        background: \"linear-gradient(90deg, rgba(110, 0, 194, 0.20) 0%, #2F0743 100%)\",\n        height: \"800px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                fontSize: \"40px\",\n                padding: 10,\n                textAlign: \"center\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {\n                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    ...settings,\n                    children: projects.map((project, i)=>{\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                            maxW: \"sm\",\n                            height: \"xl\",\n                            backgroundColor: \"rgba(7, 2, 26, 0.5)\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {\n                                        src: project.image,\n                                        alt: project.name,\n                                        borderRadius: \"10px 10px 0px 0px\",\n                                        height: \"250px\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.CardBody, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                                        spacing: \"3\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                                size: \"md\",\n                                                children: project.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                                children: project.description.length > 195 ? project.description.substring(0, 195) + \"...\" : project.description\n                                            }, void 0, false, {\n                                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {}, void 0, false, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.CardFooter, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {\n                                            spacing: \"2\",\n                                            children: [\n                                                (project === null || project === void 0 ? void 0 : project.videoDemo) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                    paddingLeft: 8,\n                                                    paddingRight: 8,\n                                                    borderRadius: 45,\n                                                    border: \"solid 1px #C7A052\",\n                                                    color: \"#C7A052\",\n                                                    children: \"Go to Demo\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                (project === null || project === void 0 ? void 0 : project.urlDeploy) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                    paddingLeft: 8,\n                                                    paddingRight: 8,\n                                                    borderRadius: 45,\n                                                    border: \"solid 1px #C7A052\",\n                                                    color: \"#C7A052\",\n                                                    children: \"Deploy\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        !project.urlDeploy && !project.videoDemo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                            color: \"blue.600\",\n                                            fontSize: \"2xl\",\n                                            children: \"Developing...\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, i, true, {\n                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWXlCO0FBQ2M7QUFDTTtBQUNOO0FBQ1M7QUFDaEI7QUFFaEMsTUFBTWUsVUFBVUYsMERBQVNBO0FBRXpCLE1BQU1HLFdBQVc7SUFDZixNQUFNQyxXQUFXRixRQUFRRyxPQUFPQztJQUVoQyxNQUFNQyxXQUFXO1FBQ2ZDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLGNBQWM7UUFDZEMsZ0JBQWdCO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUN6QixpREFBR0E7UUFDRjBCLGNBQWM7UUFDZEMsWUFBYTtRQUNiQyxRQUFPOzswQkFFUCw4REFBQ3JCLHFEQUFPQTtnQkFBQ3NCLFVBQVU7Z0JBQVFDLFNBQVM7Z0JBQUlDLFdBQVc7MEJBQVU7Ozs7OzswQkFHN0QsOERBQUNuQiwyQ0FBUUE7Z0JBQUNvQix3QkFBVSw4REFBQ0M7OEJBQUk7OzBCQUN2Qiw0RUFBQ25CLG1EQUFNQTtvQkFBRSxHQUFHTSxRQUFROzhCQUNqQkgsU0FBU2lCLElBQUksQ0FBQ0MsU0FBU0M7c0NBQ3RCLHFFQUFDakMsa0RBQUlBOzRCQUVIa0MsTUFBSzs0QkFDTFQsUUFBUTs0QkFDUlUsaUJBQWlCOzs4Q0FFakIsOERBQUN0QyxpREFBR0E7OENBQ0YsNEVBQUNRLG1EQUFLQTt3Q0FDSitCLEtBQUtKLFFBQVFLO3dDQUNiQyxLQUFLTixRQUFRTzt3Q0FDYmhCLGNBQWE7d0NBQ2JFLFFBQVE7Ozs7Ozs7Ozs7OzhDQUlaLDhEQUFDeEIsc0RBQVFBOzhDQUNQLDRFQUFDSyxtREFBS0E7d0NBQUNrQyxTQUFROzswREFDYiw4REFBQ3BDLHFEQUFPQTtnREFBQ3FDLE1BQUs7MERBQU1ULFFBQVFPOzs7Ozs7MERBQzVCLDhEQUFDaEMsa0RBQUlBOzBEQUNGeUIsUUFBUVUsWUFBWUMsU0FBUyxNQUMxQlgsUUFBUVUsWUFBWUUsVUFBVSxHQUFHLE9BQU8sUUFDeENaLFFBQVFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJbEIsOERBQUN2QyxxREFBT0E7Ozs7OzhDQUNSLDhEQUFDRCx3REFBVUE7O3NEQUNULDhEQUFDSCx5REFBV0E7NENBQUN5QyxTQUFROztnREFDbEJSLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU2EsU0FBUSxtQkFDaEIsOERBQUMvQyxvREFBTUE7b0RBQ0xnRCxhQUFhO29EQUNiQyxjQUFjO29EQUNkeEIsY0FBYztvREFDZHlCLFFBQVE7b0RBQ1JDLE9BQU87OERBQ1I7Ozs7OztnREFJRmpCLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU2tCLFNBQVEsbUJBQ2hCLDhEQUFDcEQsb0RBQU1BO29EQUNMZ0QsYUFBYTtvREFDYkMsY0FBYztvREFDZHhCLGNBQWM7b0RBQ2R5QixRQUFRO29EQUNSQyxPQUFPOzhEQUNSOzs7Ozs7Ozs7Ozs7d0NBS0osQ0FBQ2pCLFFBQVFrQixhQUFhLENBQUNsQixRQUFRYSwyQkFDOUIsOERBQUN0QyxrREFBSUE7NENBQUMwQyxPQUFNOzRDQUFXdkIsVUFBUztzREFBTTs7Ozs7Ozs7Ozs7OzsyQkFuRHJDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEbkI7S0F0Rk1wQjtBQXdGTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzLmpzeD9mODVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBCdXR0b25Hcm91cCxcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRGb290ZXIsXG4gIERpdmlkZXIsXG4gIEhlYWRpbmcsXG4gIEltYWdlLFxuICBTdGFjayxcbiAgVGV4dCxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzJ1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F4aW9zJ1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljaydcblxuY29uc3QgYXBpRGF0YSA9IGZldGNoRGF0YSgpXG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IGFwaURhdGEucmVhZCgpLmRhdGFcblxuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBkb3RzOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiAzLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBib3JkZXJSYWRpdXM9ezQwfVxuICAgICAgYmFja2dyb3VuZD17YGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMTAsIDAsIDE5NCwgMC4yMCkgMCUsICMyRjA3NDMgMTAwJSlgfVxuICAgICAgaGVpZ2h0PVwiODAwcHhcIlxuICAgID5cbiAgICAgIDxIZWFkaW5nIGZvbnRTaXplPXsnNDBweCd9IHBhZGRpbmc9ezEwfSB0ZXh0QWxpZ249eydjZW50ZXInfT5cbiAgICAgICAgUHJvamVjdHNcbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PGRpdj5Mb2FkaW5nLi4uPC9kaXY+fT5cbiAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGkpID0+IChcbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgbWF4Vz1cInNtXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsneGwnfVxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9eydyZ2JhKDcsIDIsIDI2LCAwLjUpJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIGFsdD17cHJvamVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiMTBweCAxMHB4IDBweCAwcHhcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsnMjUwcHgnfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz1cIjNcIj5cbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJtZFwiPntwcm9qZWN0Lm5hbWV9PC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgPFRleHQ+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmRlc2NyaXB0aW9uLmxlbmd0aCA+IDE5NVxuICAgICAgICAgICAgICAgICAgICAgID8gcHJvamVjdC5kZXNjcmlwdGlvbi5zdWJzdHJpbmcoMCwgMTk1KSArICcuLi4nXG4gICAgICAgICAgICAgICAgICAgICAgOiBwcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxDYXJkRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBzcGFjaW5nPVwiMlwiPlxuICAgICAgICAgICAgICAgICAge3Byb2plY3Q/LnZpZGVvRGVtbyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdD17OH1cbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezh9XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs0NX1cbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9eydzb2xpZCAxcHggI0M3QTA1Mid9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9eycjQzdBMDUyJ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEdvIHRvIERlbW9cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge3Byb2plY3Q/LnVybERlcGxveSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdD17OH1cbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezh9XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs0NX1cbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9eydzb2xpZCAxcHggI0M3QTA1Mid9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9eycjQzdBMDUyJ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIERlcGxveVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICB7IXByb2plY3QudXJsRGVwbG95ICYmICFwcm9qZWN0LnZpZGVvRGVtbyAmJiAoXG4gICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImJsdWUuNjAwXCIgZm9udFNpemU9XCIyeGxcIj5cbiAgICAgICAgICAgICAgICAgICAgRGV2ZWxvcGluZy4uLlxuICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICA8L1N1c3BlbnNlPlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzXG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJDYXJkIiwiQ2FyZEJvZHkiLCJDYXJkRm9vdGVyIiwiRGl2aWRlciIsIkhlYWRpbmciLCJJbWFnZSIsIlN0YWNrIiwiVGV4dCIsIlJlYWN0IiwiU3VzcGVuc2UiLCJmZXRjaERhdGEiLCJTbGlkZXIiLCJhcGlEYXRhIiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsInJlYWQiLCJkYXRhIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImZvbnRTaXplIiwicGFkZGluZyIsInRleHRBbGlnbiIsImZhbGxiYWNrIiwiZGl2IiwibWFwIiwicHJvamVjdCIsImkiLCJtYXhXIiwiYmFja2dyb3VuZENvbG9yIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJuYW1lIiwic3BhY2luZyIsInNpemUiLCJkZXNjcmlwdGlvbiIsImxlbmd0aCIsInN1YnN0cmluZyIsInZpZGVvRGVtbyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiYm9yZGVyIiwiY29sb3IiLCJ1cmxEZXBsb3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sections/Projects.jsx\n"));

/***/ })

});