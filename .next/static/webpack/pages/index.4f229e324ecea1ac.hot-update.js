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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/axios */ \"./services/axios.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n\n\n\n\n\n\n\nconst apiData = (0,_services_axios__WEBPACK_IMPORTED_MODULE_4__.fetchData)();\nconst Projects = ()=>{\n    const projects = apiData.read().data;\n    const settings = {\n        dots: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        autoplay: true,\n        speed: 500,\n        autoplaySpeed: 100\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        borderRadius: 40,\n        background: \"linear-gradient(90deg, rgba(110, 0, 194, 0.20) 0%, #2F0743 100%)\",\n        height: \"800px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                fontSize: \"40px\",\n                color: \"#C7A052\",\n                padding: 10,\n                textAlign: \"center\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {\n                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    ...settings,\n                    children: projects.map((project, i)=>{\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                            maxW: \"sm\",\n                            height: \"xl\",\n                            backgroundColor: \"rgba(7, 2, 26, 0.5)\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {\n                                        src: project.image,\n                                        alt: project.name,\n                                        borderRadius: \"10px 10px 0px 0px\",\n                                        height: \"250px\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.CardBody, {\n                                    height: \"240px\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                                            spacing: \"3\",\n                                            marginBottom: 2,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                                    size: \"md\",\n                                                    children: project.name\n                                                }, void 0, false, {\n                                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                                    children: project.description.length > 195 ? project.description.substring(0, 195) + \"...\" : project.description\n                                                }, void 0, false, {\n                                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        project.tecnologies.map((tech, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tag, {\n                                                marginRight: 1,\n                                                size: \"sm\",\n                                                variant: \"solid\",\n                                                background: \"#070328\",\n                                                color: \"#C7A052\",\n                                                children: tech\n                                            }, i, false, {\n                                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {}, void 0, false, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.CardFooter, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {\n                                            spacing: \"2\",\n                                            children: [\n                                                (project === null || project === void 0 ? void 0 : project.videoDemo) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                    paddingLeft: 8,\n                                                    paddingRight: 8,\n                                                    borderRadius: 45,\n                                                    border: \"solid 1px #C7A052\",\n                                                    color: \"#C7A052\",\n                                                    children: \"Go to Demo\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                (project === null || project === void 0 ? void 0 : project.urlDeploy) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                    paddingLeft: 8,\n                                                    paddingRight: 8,\n                                                    borderRadius: 45,\n                                                    border: \"solid 1px #C7A052\",\n                                                    color: \"#C7A052\",\n                                                    children: \"Deploy\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        !project.urlDeploy && !project.videoDemo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                            color: \"#C7A052\",\n                                            fontSize: \"2xl\",\n                                            children: \"Developing...\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, i, true, {\n                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBYXlCO0FBQ2M7QUFDTTtBQUNOO0FBQ1M7QUFDaEI7QUFFaEMsTUFBTWdCLFVBQVVGLDBEQUFTQTtBQUV6QixNQUFNRyxXQUFXO0lBQ2YsTUFBTUMsV0FBV0YsUUFBUUcsT0FBT0M7SUFFaEMsTUFBTUMsV0FBVztRQUNmQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxjQUFjO1FBQ2RDLGdCQUFnQjtRQUNoQkMsVUFBVTtRQUNWSCxPQUFPO1FBQ1BJLGVBQWU7SUFDakI7SUFFQSxxQkFDRSw4REFBQzVCLGlEQUFHQTtRQUNGNkIsY0FBYztRQUNkQyxZQUFhO1FBQ2JDLFFBQU87OzBCQUVQLDhEQUFDeEIscURBQU9BO2dCQUNOeUIsVUFBVTtnQkFDVkMsT0FBTztnQkFDUEMsU0FBUztnQkFDVEMsV0FBVzswQkFDWjs7Ozs7OzBCQUdELDhEQUFDdEIsMkNBQVFBO2dCQUFDdUIsd0JBQVUsOERBQUNDOzhCQUFJOzswQkFDdkIsNEVBQUN0QixtREFBTUE7b0JBQUUsR0FBR00sUUFBUTs4QkFDakJILFNBQVNvQixJQUFJLENBQUNDLFNBQVNDO3NDQUN0QixxRUFBQ3JDLGtEQUFJQTs0QkFFSHNDLE1BQUs7NEJBQ0xWLFFBQVE7NEJBQ1JXLGlCQUFpQjs7OENBRWpCLDhEQUFDMUMsaURBQUdBOzhDQUNGLDRFQUFDUSxtREFBS0E7d0NBQ0ptQyxLQUFLSixRQUFRSzt3Q0FDYkMsS0FBS04sUUFBUU87d0NBQ2JqQixjQUFhO3dDQUNiRSxRQUFROzs7Ozs7Ozs7Ozs4Q0FJWiw4REFBQzNCLHNEQUFRQTtvQ0FBQzJCLFFBQVE7O3NEQUNoQiw4REFBQ3RCLG1EQUFLQTs0Q0FBQ3NDLFNBQVE7NENBQUlDLGNBQWM7OzhEQUMvQiw4REFBQ3pDLHFEQUFPQTtvREFBQzBDLE1BQUs7OERBQU1WLFFBQVFPOzs7Ozs7OERBQzVCLDhEQUFDbkMsa0RBQUlBOzhEQUNGNEIsUUFBUVcsWUFBWUMsU0FBUyxNQUMxQlosUUFBUVcsWUFBWUUsVUFBVSxHQUFHLE9BQU8sUUFDeENiLFFBQVFXOzs7Ozs7Ozs7Ozs7d0NBSWZYLFFBQVFjLFlBQVlmLElBQUksQ0FBQ2dCLE1BQU1kLGtCQUM5Qiw4REFBQzlCLGlEQUFHQTtnREFDRjZDLGFBQWE7Z0RBQ2JOLE1BQU07Z0RBRU5PLFNBQVE7Z0RBQ1IxQixZQUFXO2dEQUNYRyxPQUFPOzBEQUVOcUI7K0NBTElkOzs7Ozs7Ozs7Ozs4Q0FTWCw4REFBQ2xDLHFEQUFPQTs7Ozs7OENBQ1IsOERBQUNELHdEQUFVQTs7c0RBQ1QsOERBQUNILHlEQUFXQTs0Q0FBQzZDLFNBQVE7O2dEQUNsQlIsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTa0IsU0FBUSxtQkFDaEIsOERBQUN4RCxvREFBTUE7b0RBQ0x5RCxhQUFhO29EQUNiQyxjQUFjO29EQUNkOUIsY0FBYztvREFDZCtCLFFBQVE7b0RBQ1IzQixPQUFPOzhEQUNSOzs7Ozs7Z0RBSUZNLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU3NCLFNBQVEsbUJBQ2hCLDhEQUFDNUQsb0RBQU1BO29EQUNMeUQsYUFBYTtvREFDYkMsY0FBYztvREFDZDlCLGNBQWM7b0RBQ2QrQixRQUFRO29EQUNSM0IsT0FBTzs4REFDUjs7Ozs7Ozs7Ozs7O3dDQUtKLENBQUNNLFFBQVFzQixhQUFhLENBQUN0QixRQUFRa0IsMkJBQzlCLDhEQUFDOUMsa0RBQUlBOzRDQUFDc0IsT0FBTTs0Q0FBVUQsVUFBUztzREFBTTs7Ozs7Ozs7Ozs7OzsyQkFoRXBDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJFbkI7S0EzR012QjtBQTZHTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzLmpzeD9mODVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBCdXR0b25Hcm91cCxcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRGb290ZXIsXG4gIERpdmlkZXIsXG4gIEhlYWRpbmcsXG4gIEltYWdlLFxuICBTdGFjayxcbiAgVGFnLFxuICBUZXh0LFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcydcbmltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXhpb3MnXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJ1xuXG5jb25zdCBhcGlEYXRhID0gZmV0Y2hEYXRhKClcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gYXBpRGF0YS5yZWFkKCkuZGF0YVxuXG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGRvdHM6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgYXV0b3BsYXk6IHRydWUsIC8vIEhhYmlsaXRhciBsYSByZXByb2R1Y2Npw7NuIGF1dG9tw6F0aWNhXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBhdXRvcGxheVNwZWVkOiAxMDAsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGJvcmRlclJhZGl1cz17NDB9XG4gICAgICBiYWNrZ3JvdW5kPXtgbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDExMCwgMCwgMTk0LCAwLjIwKSAwJSwgIzJGMDc0MyAxMDAlKWB9XG4gICAgICBoZWlnaHQ9XCI4MDBweFwiXG4gICAgPlxuICAgICAgPEhlYWRpbmdcbiAgICAgICAgZm9udFNpemU9eyc0MHB4J31cbiAgICAgICAgY29sb3I9eycjQzdBMDUyJ31cbiAgICAgICAgcGFkZGluZz17MTB9XG4gICAgICAgIHRleHRBbGlnbj17J2NlbnRlcid9XG4gICAgICA+XG4gICAgICAgIFByb2plY3RzXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpKSA9PiAoXG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIG1heFc9XCJzbVwiXG4gICAgICAgICAgICAgIGhlaWdodD17J3hsJ31cbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXsncmdiYSg3LCAyLCAyNiwgMC41KSd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9e3Byb2plY3QubmFtZX1cbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjEwcHggMTBweCAwcHggMHB4XCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17JzI1MHB4J31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgaGVpZ2h0PXsnMjQwcHgnfT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz1cIjNcIiBtYXJnaW5Cb3R0b209ezJ9PlxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCI+e3Byb2plY3QubmFtZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuZGVzY3JpcHRpb24ubGVuZ3RoID4gMTk1XG4gICAgICAgICAgICAgICAgICAgICAgPyBwcm9qZWN0LmRlc2NyaXB0aW9uLnN1YnN0cmluZygwLCAxOTUpICsgJy4uLidcbiAgICAgICAgICAgICAgICAgICAgICA6IHByb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRlY25vbG9naWVzLm1hcCgodGVjaCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRhZ1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD17MX1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17J3NtJ31cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic29saWRcIlxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPVwiIzA3MDMyOFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXsnI0M3QTA1Mid9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0ZWNofVxuICAgICAgICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxDYXJkRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBzcGFjaW5nPVwiMlwiPlxuICAgICAgICAgICAgICAgICAge3Byb2plY3Q/LnZpZGVvRGVtbyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdD17OH1cbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezh9XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs0NX1cbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9eydzb2xpZCAxcHggI0M3QTA1Mid9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9eycjQzdBMDUyJ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEdvIHRvIERlbW9cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge3Byb2plY3Q/LnVybERlcGxveSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdD17OH1cbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezh9XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs0NX1cbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9eydzb2xpZCAxcHggI0M3QTA1Mid9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9eycjQzdBMDUyJ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIERlcGxveVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICB7IXByb2plY3QudXJsRGVwbG95ICYmICFwcm9qZWN0LnZpZGVvRGVtbyAmJiAoXG4gICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIiNDN0EwNTJcIiBmb250U2l6ZT1cIjJ4bFwiPlxuICAgICAgICAgICAgICAgICAgICBEZXZlbG9waW5nLi4uXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIkNhcmQiLCJDYXJkQm9keSIsIkNhcmRGb290ZXIiLCJEaXZpZGVyIiwiSGVhZGluZyIsIkltYWdlIiwiU3RhY2siLCJUYWciLCJUZXh0IiwiUmVhY3QiLCJTdXNwZW5zZSIsImZldGNoRGF0YSIsIlNsaWRlciIsImFwaURhdGEiLCJQcm9qZWN0cyIsInByb2plY3RzIiwicmVhZCIsImRhdGEiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJmYWxsYmFjayIsImRpdiIsIm1hcCIsInByb2plY3QiLCJpIiwibWF4VyIsImJhY2tncm91bmRDb2xvciIsInNyYyIsImltYWdlIiwiYWx0IiwibmFtZSIsInNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJzaXplIiwiZGVzY3JpcHRpb24iLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJ0ZWNub2xvZ2llcyIsInRlY2giLCJtYXJnaW5SaWdodCIsInZhcmlhbnQiLCJ2aWRlb0RlbW8iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJvcmRlciIsInVybERlcGxveSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sections/Projects.jsx\n"));

/***/ })

});