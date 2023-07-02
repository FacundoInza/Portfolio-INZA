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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/axios */ \"./services/axios.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst apiData = (0,_services_axios__WEBPACK_IMPORTED_MODULE_4__.fetchData)();\nconst Projects = ()=>{\n    _s();\n    const projects = apiData.read().data;\n    const slidesToShow = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useBreakpointValue)({\n        base: 1,\n        sm: 2,\n        lg: 2,\n        xl: 3\n    });\n    const settings = {\n        dots: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: slidesToShow,\n        slidesToScroll: 1,\n        autoplay: true,\n        speed: 2000,\n        autoplaySpeed: 100\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        borderRadius: 40,\n        background: \"linear-gradient(90deg, rgba(110, 0, 194, 0.20) 0%, #2F0743 100%)\",\n        height: \"800px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                fontSize: \"40px\",\n                color: \"#C7A052\",\n                padding: 10,\n                textAlign: \"center\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {\n                fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    ...settings,\n                    children: projects.map((project, i)=>{\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                            maxW: \"sm\",\n                            height: \"600px\",\n                            backgroundColor: \"rgba(7, 2, 26, 0.5)\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {\n                                        src: project.image,\n                                        alt: project.name,\n                                        borderRadius: \"10px 10px 0px 0px\",\n                                        height: \"250px\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.CardBody, {\n                                    height: \"255px\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                                            spacing: \"3\",\n                                            marginBottom: 2,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                                    size: \"md\",\n                                                    children: project.name\n                                                }, void 0, false, {\n                                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                                    children: project.description.length > 195 ? project.description.substring(0, 195) + \"...\" : project.description\n                                                }, void 0, false, {\n                                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        project.tecnologies.map((tech, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tag, {\n                                                marginRight: 1,\n                                                size: \"sm\",\n                                                variant: \"solid\",\n                                                background: \"#070328\",\n                                                color: \"#C7A052\",\n                                                children: tech\n                                            }, i, false, {\n                                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Divider, {}, void 0, false, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.CardFooter, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ButtonGroup, {\n                                            spacing: \"2\",\n                                            children: [\n                                                (project === null || project === void 0 ? void 0 : project.videoDemo) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                    paddingLeft: 8,\n                                                    paddingRight: 8,\n                                                    borderRadius: 45,\n                                                    border: \"solid 1px #C7A052\",\n                                                    color: \"#C7A052\",\n                                                    children: \"Go to Demo\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                    lineNumber: 104,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                (project === null || project === void 0 ? void 0 : project.urlDeploy) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                    paddingLeft: 8,\n                                                    paddingRight: 8,\n                                                    borderRadius: 45,\n                                                    border: \"solid 1px #C7A052\",\n                                                    color: \"#C7A052\",\n                                                    children: \"Deploy\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                    lineNumber: 115,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        !project.urlDeploy && !project.videoDemo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                            color: \"#C7A052\",\n                                            fontSize: \"2xl\",\n                                            children: \"Developing...\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                            lineNumber: 127,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, i, true, {\n                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Projects, \"kc0LSwngc4LTw6Ft1quyb7fROLs=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useBreakpointValue\n    ];\n});\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Olsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzLmpzeD9mODVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBCdXR0b25Hcm91cCxcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRGb290ZXIsXG4gIERpdmlkZXIsXG4gIEhlYWRpbmcsXG4gIEltYWdlLFxuICBTdGFjayxcbiAgVGFnLFxuICBUZXh0LFxuICB1c2VCcmVha3BvaW50VmFsdWUsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcydcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzJ1xuaW1wb3J0IFJlYWN0LCB7IFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmZXRjaERhdGEgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9heGlvcydcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snXG5cbmNvbnN0IGFwaURhdGEgPSBmZXRjaERhdGEoKVxuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBhcGlEYXRhLnJlYWQoKS5kYXRhXG5cbiAgY29uc3Qgc2xpZGVzVG9TaG93ID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcbiAgICBiYXNlOiAxLFxuICAgIHNtOiAyLFxuICAgIGxnOiAyLFxuICAgIHhsOiAzLFxuICB9KVxuXG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGRvdHM6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IHNsaWRlc1RvU2hvdyxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBhdXRvcGxheTogdHJ1ZSwgLy8gSGFiaWxpdGFyIGxhIHJlcHJvZHVjY2nDs24gYXV0b23DoXRpY2FcbiAgICBzcGVlZDogMjAwMCxcbiAgICBhdXRvcGxheVNwZWVkOiAxMDAsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGJvcmRlclJhZGl1cz17NDB9XG4gICAgICBiYWNrZ3JvdW5kPXtgbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDExMCwgMCwgMTk0LCAwLjIwKSAwJSwgIzJGMDc0MyAxMDAlKWB9XG4gICAgICBoZWlnaHQ9XCI4MDBweFwiXG4gICAgPlxuICAgICAgPEhlYWRpbmdcbiAgICAgICAgZm9udFNpemU9eyc0MHB4J31cbiAgICAgICAgY29sb3I9eycjQzdBMDUyJ31cbiAgICAgICAgcGFkZGluZz17MTB9XG4gICAgICAgIHRleHRBbGlnbj17J2NlbnRlcid9XG4gICAgICA+XG4gICAgICAgIFByb2plY3RzXG4gICAgICA8L0hlYWRpbmc+XG4gICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBpKSA9PiAoXG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIG1heFc9XCJzbVwiXG4gICAgICAgICAgICAgIGhlaWdodD17JzYwMHB4J31cbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXsncmdiYSg3LCAyLCAyNiwgMC41KSd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9e3Byb2plY3QubmFtZX1cbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjEwcHggMTBweCAwcHggMHB4XCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17JzI1MHB4J31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICA8Q2FyZEJvZHkgaGVpZ2h0PXsnMjU1cHgnfT5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz1cIjNcIiBtYXJnaW5Cb3R0b209ezJ9PlxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCI+e3Byb2plY3QubmFtZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuZGVzY3JpcHRpb24ubGVuZ3RoID4gMTk1XG4gICAgICAgICAgICAgICAgICAgICAgPyBwcm9qZWN0LmRlc2NyaXB0aW9uLnN1YnN0cmluZygwLCAxOTUpICsgJy4uLidcbiAgICAgICAgICAgICAgICAgICAgICA6IHByb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRlY25vbG9naWVzLm1hcCgodGVjaCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFRhZ1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD17MX1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17J3NtJ31cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic29saWRcIlxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kPVwiIzA3MDMyOFwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXsnI0M3QTA1Mid9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt0ZWNofVxuICAgICAgICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxDYXJkRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b25Hcm91cCBzcGFjaW5nPVwiMlwiPlxuICAgICAgICAgICAgICAgICAge3Byb2plY3Q/LnZpZGVvRGVtbyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdD17OH1cbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezh9XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs0NX1cbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9eydzb2xpZCAxcHggI0M3QTA1Mid9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9eycjQzdBMDUyJ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEdvIHRvIERlbW9cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge3Byb2plY3Q/LnVybERlcGxveSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdD17OH1cbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezh9XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs0NX1cbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9eydzb2xpZCAxcHggI0M3QTA1Mid9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9eycjQzdBMDUyJ31cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIERlcGxveVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICB7IXByb2plY3QudXJsRGVwbG95ICYmICFwcm9qZWN0LnZpZGVvRGVtbyAmJiAoXG4gICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIiNDN0EwNTJcIiBmb250U2l6ZT1cIjJ4bFwiPlxuICAgICAgICAgICAgICAgICAgICBEZXZlbG9waW5nLi4uXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIkNhcmQiLCJDYXJkQm9keSIsIkNhcmRGb290ZXIiLCJEaXZpZGVyIiwiSGVhZGluZyIsIkltYWdlIiwiU3RhY2siLCJUYWciLCJUZXh0IiwidXNlQnJlYWtwb2ludFZhbHVlIiwiUmVhY3QiLCJTdXNwZW5zZSIsImZldGNoRGF0YSIsIlNsaWRlciIsImFwaURhdGEiLCJQcm9qZWN0cyIsInByb2plY3RzIiwicmVhZCIsImRhdGEiLCJzbGlkZXNUb1Nob3ciLCJiYXNlIiwic20iLCJsZyIsInhsIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsImhlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJwYWRkaW5nIiwidGV4dEFsaWduIiwiZmFsbGJhY2siLCJkaXYiLCJtYXAiLCJwcm9qZWN0IiwiaSIsIm1heFciLCJiYWNrZ3JvdW5kQ29sb3IiLCJzcmMiLCJpbWFnZSIsImFsdCIsIm5hbWUiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwic2l6ZSIsImRlc2NyaXB0aW9uIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwidGVjbm9sb2dpZXMiLCJ0ZWNoIiwibWFyZ2luUmlnaHQiLCJ2YXJpYW50IiwidmlkZW9EZW1vIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJib3JkZXIiLCJ1cmxEZXBsb3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sections/Projects.jsx\n"));

/***/ })

});