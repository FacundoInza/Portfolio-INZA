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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/axios */ \"./services/axios.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n\n\n\n\n\n\n\nconst apiData = (0,_services_axios__WEBPACK_IMPORTED_MODULE_4__.fetchData)();\nconst Projects = ()=>{\n    const projects = apiData.read().data;\n    const settings = {\n        dots: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 3,\n        slidesToScroll: 1\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        borderRadius: 40,\n        background: \"linear-gradient(90deg, rgba(110, 0, 194, 0.20) 0%, #2F0743 100%)\",\n        height: \"800px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                fontSize: \"40px\",\n                padding: 10,\n                textAlign: \"center\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {\n                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    ...settings,\n                    children: projects.map((project, i)=>{\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                            maxW: \"sm\",\n                            height: \"xl\",\n                            backgroundColor: \"rgba(7, 2, 26, 0.5)\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {\n                                        src: project.image,\n                                        alt: project.name,\n                                        borderRadius: \"10px 10px 0px 0px\",\n                                        height: \"250px\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.CardBody, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                                            spacing: \"3\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                                    size: \"md\",\n                                                    children: project.name\n                                                }, void 0, false, {\n                                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                                    children: project.description.length > 195 ? project.description.substring(0, 195) + \"...\" : project.description\n                                                }, void 0, false, {\n                                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        project.tecnologies.map((tech, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tag, {\n                                                size: \"sm\",\n                                                variant: \"solid\",\n                                                colorScheme: \"teal\",\n                                                children: tech\n                                            }, i, false, {\n                                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {}, void 0, false, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.CardFooter, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {\n                                            spacing: \"2\",\n                                            children: [\n                                                (project === null || project === void 0 ? void 0 : project.videoDemo) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                    paddingLeft: 8,\n                                                    paddingRight: 8,\n                                                    borderRadius: 45,\n                                                    border: \"solid 1px #C7A052\",\n                                                    color: \"#C7A052\",\n                                                    children: \"Go to Demo\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                (project === null || project === void 0 ? void 0 : project.urlDeploy) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                    paddingLeft: 8,\n                                                    paddingRight: 8,\n                                                    borderRadius: 45,\n                                                    border: \"solid 1px #C7A052\",\n                                                    color: \"#C7A052\",\n                                                    children: \"Deploy\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        !project.urlDeploy && !project.videoDemo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                            color: \"blue.600\",\n                                            fontSize: \"2xl\",\n                                            children: \"Developing...\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                            lineNumber: 104,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, i, true, {\n                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBYXlCO0FBQ2M7QUFDTTtBQUNOO0FBQ1M7QUFDaEI7QUFFaEMsTUFBTWdCLFVBQVVGLDBEQUFTQTtBQUV6QixNQUFNRyxXQUFXO0lBQ2YsTUFBTUMsV0FBV0YsUUFBUUcsT0FBT0M7SUFFaEMsTUFBTUMsV0FBVztRQUNmQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxjQUFjO1FBQ2RDLGdCQUFnQjtJQUNsQjtJQUVBLHFCQUNFLDhEQUFDMUIsaURBQUdBO1FBQ0YyQixjQUFjO1FBQ2RDLFlBQWE7UUFDYkMsUUFBTzs7MEJBRVAsOERBQUN0QixxREFBT0E7Z0JBQUN1QixVQUFVO2dCQUFRQyxTQUFTO2dCQUFJQyxXQUFXOzBCQUFVOzs7Ozs7MEJBRzdELDhEQUFDbkIsMkNBQVFBO2dCQUFDb0Isd0JBQVUsOERBQUNDOzhCQUFJOzswQkFDdkIsNEVBQUNuQixtREFBTUE7b0JBQUUsR0FBR00sUUFBUTs4QkFDakJILFNBQVNpQixJQUFJLENBQUNDLFNBQVNDO3NDQUN0QixxRUFBQ2xDLGtEQUFJQTs0QkFFSG1DLE1BQUs7NEJBQ0xULFFBQVE7NEJBQ1JVLGlCQUFpQjs7OENBRWpCLDhEQUFDdkMsaURBQUdBOzhDQUNGLDRFQUFDUSxtREFBS0E7d0NBQ0pnQyxLQUFLSixRQUFRSzt3Q0FDYkMsS0FBS04sUUFBUU87d0NBQ2JoQixjQUFhO3dDQUNiRSxRQUFROzs7Ozs7Ozs7Ozs4Q0FJWiw4REFBQ3pCLHNEQUFRQTs7c0RBQ1AsOERBQUNLLG1EQUFLQTs0Q0FBQ21DLFNBQVE7OzhEQUNiLDhEQUFDckMscURBQU9BO29EQUFDc0MsTUFBSzs4REFBTVQsUUFBUU87Ozs7Ozs4REFDNUIsOERBQUNoQyxrREFBSUE7OERBQ0Z5QixRQUFRVSxZQUFZQyxTQUFTLE1BQzFCWCxRQUFRVSxZQUFZRSxVQUFVLEdBQUcsT0FBTyxRQUN4Q1osUUFBUVU7Ozs7Ozs7Ozs7Ozt3Q0FJZlYsUUFBUWEsWUFBWWQsSUFBSSxDQUFDZSxNQUFNYixrQkFDOUIsOERBQUMzQixpREFBR0E7Z0RBQUNtQyxNQUFNO2dEQUFjTSxTQUFRO2dEQUFRQyxhQUFZOzBEQUNsREY7K0NBRG1CYjs7Ozs7Ozs7Ozs7OENBSzFCLDhEQUFDL0IscURBQU9BOzs7Ozs4Q0FDUiw4REFBQ0Qsd0RBQVVBOztzREFDVCw4REFBQ0gseURBQVdBOzRDQUFDMEMsU0FBUTs7Z0RBQ2xCUixDQUFBQSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNpQixTQUFRLG1CQUNoQiw4REFBQ3BELG9EQUFNQTtvREFDTHFELGFBQWE7b0RBQ2JDLGNBQWM7b0RBQ2Q1QixjQUFjO29EQUNkNkIsUUFBUTtvREFDUkMsT0FBTzs4REFDUjs7Ozs7O2dEQUlGckIsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTc0IsU0FBUSxtQkFDaEIsOERBQUN6RCxvREFBTUE7b0RBQ0xxRCxhQUFhO29EQUNiQyxjQUFjO29EQUNkNUIsY0FBYztvREFDZDZCLFFBQVE7b0RBQ1JDLE9BQU87OERBQ1I7Ozs7Ozs7Ozs7Ozt3Q0FLSixDQUFDckIsUUFBUXNCLGFBQWEsQ0FBQ3RCLFFBQVFpQiwyQkFDOUIsOERBQUMxQyxrREFBSUE7NENBQUM4QyxPQUFNOzRDQUFXM0IsVUFBUztzREFBTTs7Ozs7Ozs7Ozs7OzsyQkF6RHJDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FbkI7S0E1Rk1wQjtBQThGTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzLmpzeD9mODVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBCdXR0b25Hcm91cCxcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRGb290ZXIsXG4gIERpdmlkZXIsXG4gIEhlYWRpbmcsXG4gIEltYWdlLFxuICBTdGFjayxcbiAgVGFnLFxuICBUZXh0LFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcydcbmltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZmV0Y2hEYXRhIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXhpb3MnXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJ1xuXG5jb25zdCBhcGlEYXRhID0gZmV0Y2hEYXRhKClcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gYXBpRGF0YS5yZWFkKCkuZGF0YVxuXG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGRvdHM6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGJvcmRlclJhZGl1cz17NDB9XG4gICAgICBiYWNrZ3JvdW5kPXtgbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDExMCwgMCwgMTk0LCAwLjIwKSAwJSwgIzJGMDc0MyAxMDAlKWB9XG4gICAgICBoZWlnaHQ9XCI4MDBweFwiXG4gICAgPlxuICAgICAgPEhlYWRpbmcgZm9udFNpemU9eyc0MHB4J30gcGFkZGluZz17MTB9IHRleHRBbGlnbj17J2NlbnRlcid9PlxuICAgICAgICBQcm9qZWN0c1xuICAgICAgPC9IZWFkaW5nPlxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8ZGl2PkxvYWRpbmcuLi48L2Rpdj59PlxuICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaSkgPT4gKFxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICBtYXhXPVwic21cIlxuICAgICAgICAgICAgICBoZWlnaHQ9eyd4bCd9XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17J3JnYmEoNywgMiwgMjYsIDAuNSknfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlfVxuICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIxMHB4IDEwcHggMHB4IDBweFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9eycyNTBweCd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCI+e3Byb2plY3QubmFtZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuZGVzY3JpcHRpb24ubGVuZ3RoID4gMTk1XG4gICAgICAgICAgICAgICAgICAgICAgPyBwcm9qZWN0LmRlc2NyaXB0aW9uLnN1YnN0cmluZygwLCAxOTUpICsgJy4uLidcbiAgICAgICAgICAgICAgICAgICAgICA6IHByb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRlY25vbG9naWVzLm1hcCgodGVjaCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRhZyBzaXplPXsnc20nfSBrZXk9e2l9IHZhcmlhbnQ9XCJzb2xpZFwiIGNvbG9yU2NoZW1lPVwidGVhbFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGVjaH1cbiAgICAgICAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICA8Q2FyZEZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgc3BhY2luZz1cIjJcIj5cbiAgICAgICAgICAgICAgICAgIHtwcm9qZWN0Py52aWRlb0RlbW8gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ9ezh9XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0PXs4fVxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17NDV9XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXsnc29saWQgMXB4ICNDN0EwNTInfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXsnI0M3QTA1Mid9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBHbyB0byBEZW1vXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHtwcm9qZWN0Py51cmxEZXBsb3kgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ9ezh9XG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0PXs4fVxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17NDV9XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyPXsnc29saWQgMXB4ICNDN0EwNTInfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXsnI0M3QTA1Mid9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBEZXBsb3lcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgICAgeyFwcm9qZWN0LnVybERlcGxveSAmJiAhcHJvamVjdC52aWRlb0RlbW8gJiYgKFxuICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJibHVlLjYwMFwiIGZvbnRTaXplPVwiMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgIERldmVsb3BpbmcuLi5cbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0NhcmRGb290ZXI+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU2xpZGVyPlxuICAgICAgPC9TdXNwZW5zZT5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1xuIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwiQ2FyZCIsIkNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsIkRpdmlkZXIiLCJIZWFkaW5nIiwiSW1hZ2UiLCJTdGFjayIsIlRhZyIsIlRleHQiLCJSZWFjdCIsIlN1c3BlbnNlIiwiZmV0Y2hEYXRhIiwiU2xpZGVyIiwiYXBpRGF0YSIsIlByb2plY3RzIiwicHJvamVjdHMiLCJyZWFkIiwiZGF0YSIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJmb250U2l6ZSIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJmYWxsYmFjayIsImRpdiIsIm1hcCIsInByb2plY3QiLCJpIiwibWF4VyIsImJhY2tncm91bmRDb2xvciIsInNyYyIsImltYWdlIiwiYWx0IiwibmFtZSIsInNwYWNpbmciLCJzaXplIiwiZGVzY3JpcHRpb24iLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJ0ZWNub2xvZ2llcyIsInRlY2giLCJ2YXJpYW50IiwiY29sb3JTY2hlbWUiLCJ2aWRlb0RlbW8iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJvcmRlciIsImNvbG9yIiwidXJsRGVwbG95Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sections/Projects.jsx\n"));

/***/ })

});