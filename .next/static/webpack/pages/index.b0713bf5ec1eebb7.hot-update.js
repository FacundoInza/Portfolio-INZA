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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/axios */ \"./services/axios.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst apiData = (0,_services_axios__WEBPACK_IMPORTED_MODULE_4__.fetchData)();\nconst Projects = ()=>{\n    _s();\n    const projects = apiData.read().data;\n    const refProjects = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useInView)(refProjects);\n    const mainControls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation)();\n    const [autoplay, setAutoplay] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (isInView) {\n            mainControls.start(\"visible\");\n        } else {\n            mainControls.start(\"hidden\");\n        }\n    });\n    const handleClick = (url)=>{\n        if ( true && window.open) {\n            window.open(url, \"_blank\");\n        }\n    };\n    const containerVariants = {\n        hidden: {\n            filter: \"blur(20px)\",\n            scale: 1.5\n        },\n        visible: {\n            scale: 1,\n            filter: \"blur(0px)\",\n            transition: {\n                duration: 1\n            }\n        }\n    };\n    const slidesToShow = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useBreakpointValue)({\n        base: 1,\n        sm: 2,\n        lg: 2,\n        xl: 3\n    });\n    const settings = {\n        dots: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: slidesToShow,\n        slidesToScroll: 1,\n        autoplay: autoplay,\n        speed: 2000,\n        autoplaySpeed: 100\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n        variant: containerVariants,\n        initial: \"hidden\",\n        animate: mainControls,\n        ref: refProjects,\n        style: {\n            marginTop: 150,\n            borderRadius: 20,\n            background: \"linear-gradient(90deg, rgba(110, 0, 194, 0.20) 0%, #2F0743 100%)\",\n            height: \"800px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n            borderRadius: 20,\n            background: \"linear-gradient(90deg, rgba(110, 0, 194, 0.20) 0%, #2F0743 100%)\",\n            height: \"800px\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                    fontSize: \"40px\",\n                    color: \"#C7A052\",\n                    padding: 10,\n                    textAlign: \"center\",\n                    children: \"Projects\"\n                }, void 0, false, {\n                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {\n                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Loading...\"\n                    }, void 0, false, void 0, void 0),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        ...settings,\n                        children: projects.map((project, i)=>{\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card, {\n                                maxW: \"sm\",\n                                height: \"600px\",\n                                backgroundColor: \"rgba(7, 2, 26, 0.5)\",\n                                onFocus: ()=>setAutoplay(false),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Image, {\n                                            src: project.image,\n                                            alt: project.name,\n                                            borderRadius: \"10px 10px 0px 0px\",\n                                            height: \"250px\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                            lineNumber: 121,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.CardBody, {\n                                        height: \"255px\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n                                                spacing: \"3\",\n                                                marginBottom: 2,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                                                        size: \"md\",\n                                                        children: project.name\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                        lineNumber: 131,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                                        children: project.description.length > 195 ? project.description.substring(0, 195) + \"...\" : project.description\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                        lineNumber: 132,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                lineNumber: 130,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            project.tecnologies.map((tech, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Tag, {\n                                                    marginRight: 1,\n                                                    size: \"sm\",\n                                                    variant: \"solid\",\n                                                    background: \"#070328\",\n                                                    color: \"#C7A052\",\n                                                    children: tech\n                                                }, i, false, {\n                                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                    lineNumber: 140,\n                                                    columnNumber: 21\n                                                }, undefined))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {}, void 0, false, {\n                                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                        lineNumber: 152,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.CardFooter, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ButtonGroup, {\n                                                spacing: \"2\",\n                                                children: [\n                                                    (project === null || project === void 0 ? void 0 : project.videoDemo) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                                        paddingLeft: 8,\n                                                        paddingRight: 8,\n                                                        borderRadius: 45,\n                                                        border: \"solid 1px #C7A052\",\n                                                        color: \"#C7A052\",\n                                                        onClick: ()=>handleClick(project.videoDemo),\n                                                        children: \"Go to Demo\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                        lineNumber: 156,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    (project === null || project === void 0 ? void 0 : project.urlDeploy) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                                        paddingLeft: 8,\n                                                        paddingRight: 8,\n                                                        borderRadius: 45,\n                                                        border: \"solid 1px #C7A052\",\n                                                        color: \"#C7A052\",\n                                                        onClick: ()=>handleClick(project.urlDeploy),\n                                                        children: \"Deploy\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                        lineNumber: 168,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                lineNumber: 154,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            !project.urlDeploy && !project.videoDemo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                                color: \"#C7A052\",\n                                                fontSize: \"2xl\",\n                                                children: \"Developing...\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                                lineNumber: 181,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                        lineNumber: 153,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, i, true, {\n                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                                lineNumber: 113,\n                                columnNumber: 15\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n            lineNumber: 97,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/Projects.jsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Projects, \"6HGr1fjbh1EOL7+26uK4HTDEcDc=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useBreakpointValue\n    ];\n});\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1hHLE9BQU87OERBRU5xQjttREFMSWY7Ozs7Ozs7Ozs7O2tEQVNYLDhEQUFDbkUscURBQU9BOzs7OztrREFDUiw4REFBQ0Qsd0RBQVVBOzswREFDVCw4REFBQ0gseURBQVdBO2dEQUFDK0UsU0FBUTs7b0RBQ2xCVCxDQUFBQSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNrQixTQUFRLG1CQUNoQiw4REFBQ3pGLG9EQUFNQTt3REFDTDBGLGFBQWE7d0RBQ2JDLGNBQWM7d0RBQ2Q3QixjQUFjO3dEQUNkOEIsUUFBUTt3REFDUjFCLE9BQU87d0RBQ1AyQixTQUFTLElBQU01RCxZQUFZc0MsUUFBUWtCO2tFQUNwQzs7Ozs7O29EQUlGbEIsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTdUIsU0FBUSxtQkFDaEIsOERBQUM5RixvREFBTUE7d0RBQ0wwRixhQUFhO3dEQUNiQyxjQUFjO3dEQUNkN0IsY0FBYzt3REFDZDhCLFFBQVE7d0RBQ1IxQixPQUFPO3dEQUNQMkIsU0FBUyxJQUFNNUQsWUFBWXNDLFFBQVF1QjtrRUFDcEM7Ozs7Ozs7Ozs7Ozs0Q0FLSixDQUFDdkIsUUFBUXVCLGFBQWEsQ0FBQ3ZCLFFBQVFrQiwyQkFDOUIsOERBQUMvRSxrREFBSUE7Z0RBQUN3RCxPQUFNO2dEQUFVRCxVQUFTOzBEQUFNOzs7Ozs7Ozs7Ozs7OytCQW5FcENPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRXJCO0dBdEtNakQ7O1FBSWFILG9EQUFTQTtRQUVMQyx1REFBWUE7UUFnQ1pWLGdFQUFrQkE7OztLQXRDbkNZO0FBd0tOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VjdGlvbnMvUHJvamVjdHMuanN4P2Y4NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEJ1dHRvbkdyb3VwLFxuICBDYXJkLFxuICBDYXJkQm9keSxcbiAgQ2FyZEZvb3RlcixcbiAgRGl2aWRlcixcbiAgSGVhZGluZyxcbiAgSW1hZ2UsXG4gIFN0YWNrLFxuICBUYWcsXG4gIFRleHQsXG4gIHVzZUJyZWFrcG9pbnRWYWx1ZSxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suY3NzJ1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MnXG5cbmltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IGZldGNoRGF0YSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F4aW9zJ1xuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljaydcbmltcG9ydCB7IG1vdGlvbiwgdXNlSW5WaWV3LCB1c2VBbmltYXRpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBhcGlEYXRhID0gZmV0Y2hEYXRhKClcblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gYXBpRGF0YS5yZWFkKCkuZGF0YVxuXG4gIGNvbnN0IHJlZlByb2plY3RzID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IGlzSW5WaWV3ID0gdXNlSW5WaWV3KHJlZlByb2plY3RzKVxuXG4gIGNvbnN0IG1haW5Db250cm9scyA9IHVzZUFuaW1hdGlvbigpXG5cbiAgY29uc3QgW2F1dG9wbGF5LCBzZXRBdXRvcGxheV0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzSW5WaWV3KSB7XG4gICAgICBtYWluQ29udHJvbHMuc3RhcnQoJ3Zpc2libGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBtYWluQ29udHJvbHMuc3RhcnQoJ2hpZGRlbicpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHVybCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cub3Blbikge1xuICAgICAgd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBjb250YWluZXJWYXJpYW50cyA9IHtcbiAgICBoaWRkZW46IHtcbiAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgc2NhbGU6IDEuNSxcbiAgICB9LFxuICAgIHZpc2libGU6IHtcbiAgICAgIHNjYWxlOiAxLFxuICAgICAgZmlsdGVyOiAnYmx1cigwcHgpJyxcbiAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICB9LFxuICAgIH0sXG4gIH1cblxuICBjb25zdCBzbGlkZXNUb1Nob3cgPSB1c2VCcmVha3BvaW50VmFsdWUoe1xuICAgIGJhc2U6IDEsXG4gICAgc206IDIsXG4gICAgbGc6IDIsXG4gICAgeGw6IDMsXG4gIH0pXG5cbiAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgZG90czogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogc2xpZGVzVG9TaG93LFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGF1dG9wbGF5OiBhdXRvcGxheSwgLy8gSGFiaWxpdGFyIGxhIHJlcHJvZHVjY2nDs24gYXV0b23DoXRpY2FcbiAgICBzcGVlZDogMjAwMCxcbiAgICBhdXRvcGxheVNwZWVkOiAxMDAsXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICB2YXJpYW50PXtjb250YWluZXJWYXJpYW50c31cbiAgICAgIGluaXRpYWw9eydoaWRkZW4nfVxuICAgICAgYW5pbWF0ZT17bWFpbkNvbnRyb2xzfVxuICAgICAgcmVmPXtyZWZQcm9qZWN0c31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIG1hcmdpblRvcDogMTUwLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDIwLFxuICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICdsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTEwLCAwLCAxOTQsIDAuMjApIDAlLCAjMkYwNzQzIDEwMCUpJyxcbiAgICAgICAgaGVpZ2h0OiAnODAwcHgnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIGJvcmRlclJhZGl1cz17MjB9XG4gICAgICAgIGJhY2tncm91bmQ9e2BsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTEwLCAwLCAxOTQsIDAuMjApIDAlLCAjMkYwNzQzIDEwMCUpYH1cbiAgICAgICAgaGVpZ2h0PVwiODAwcHhcIlxuICAgICAgPlxuICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgIGZvbnRTaXplPXsnNDBweCd9XG4gICAgICAgICAgY29sb3I9eycjQzdBMDUyJ31cbiAgICAgICAgICBwYWRkaW5nPXsxMH1cbiAgICAgICAgICB0ZXh0QWxpZ249eydjZW50ZXInfVxuICAgICAgICA+XG4gICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxkaXY+TG9hZGluZy4uLjwvZGl2Pn0+XG4gICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBtYXhXPVwic21cIlxuICAgICAgICAgICAgICAgIGhlaWdodD17JzYwMHB4J31cbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9eydyZ2JhKDcsIDIsIDI2LCAwLjUpJ31cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRBdXRvcGxheShmYWxzZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjEwcHggMTBweCAwcHggMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsnMjUwcHgnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICAgIDxDYXJkQm9keSBoZWlnaHQ9eycyNTVweCd9PlxuICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9XCIzXCIgbWFyZ2luQm90dG9tPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCI+e3Byb2plY3QubmFtZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmRlc2NyaXB0aW9uLmxlbmd0aCA+IDE5NVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9qZWN0LmRlc2NyaXB0aW9uLnN1YnN0cmluZygwLCAxOTUpICsgJy4uLidcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICAgICAgICAgICAge3Byb2plY3QudGVjbm9sb2dpZXMubWFwKCh0ZWNoLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxUYWdcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodD17MX1cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPXsnc20nfVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic29saWRcIlxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ9XCIjMDcwMzI4XCJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17JyNDN0EwNTInfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3RlY2h9XG4gICAgICAgICAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxuICAgICAgICAgICAgICAgIDxDYXJkRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIHNwYWNpbmc9XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0Py52aWRlb0RlbW8gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0PXs4fVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0PXs4fVxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs0NX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcj17J3NvbGlkIDFweCAjQzdBMDUyJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXsnI0M3QTA1Mid9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhwcm9qZWN0LnZpZGVvRGVtbyl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgR28gdG8gRGVtb1xuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdD8udXJsRGVwbG95ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdD17OH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodD17OH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17NDV9XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI9eydzb2xpZCAxcHggI0M3QTA1Mid9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17JyNDN0EwNTInfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2socHJvamVjdC51cmxEZXBsb3kpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIERlcGxveVxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICAgIHshcHJvamVjdC51cmxEZXBsb3kgJiYgIXByb2plY3QudmlkZW9EZW1vICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCIjQzdBMDUyXCIgZm9udFNpemU9XCIyeGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICBEZXZlbG9waW5nLi4uXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgPC9TdXNwZW5zZT5cbiAgICAgIDwvQm94PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1xuIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwiQ2FyZCIsIkNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsIkRpdmlkZXIiLCJIZWFkaW5nIiwiSW1hZ2UiLCJTdGFjayIsIlRhZyIsIlRleHQiLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJSZWFjdCIsIlN1c3BlbnNlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJmZXRjaERhdGEiLCJTbGlkZXIiLCJtb3Rpb24iLCJ1c2VJblZpZXciLCJ1c2VBbmltYXRpb24iLCJhcGlEYXRhIiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsInJlYWQiLCJkYXRhIiwicmVmUHJvamVjdHMiLCJpc0luVmlldyIsIm1haW5Db250cm9scyIsImF1dG9wbGF5Iiwic2V0QXV0b3BsYXkiLCJzdGFydCIsImhhbmRsZUNsaWNrIiwidXJsIiwid2luZG93Iiwib3BlbiIsImNvbnRhaW5lclZhcmlhbnRzIiwiaGlkZGVuIiwiZmlsdGVyIiwic2NhbGUiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic2xpZGVzVG9TaG93IiwiYmFzZSIsInNtIiwibGciLCJ4bCIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5U3BlZWQiLCJkaXYiLCJ2YXJpYW50IiwiaW5pdGlhbCIsImFuaW1hdGUiLCJyZWYiLCJzdHlsZSIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJoZWlnaHQiLCJmb250U2l6ZSIsImNvbG9yIiwicGFkZGluZyIsInRleHRBbGlnbiIsImZhbGxiYWNrIiwibWFwIiwicHJvamVjdCIsImkiLCJtYXhXIiwiYmFja2dyb3VuZENvbG9yIiwib25Gb2N1cyIsInNyYyIsImltYWdlIiwiYWx0IiwibmFtZSIsInNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJzaXplIiwiZGVzY3JpcHRpb24iLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJ0ZWNub2xvZ2llcyIsInRlY2giLCJtYXJnaW5SaWdodCIsInZpZGVvRGVtbyIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiYm9yZGVyIiwib25DbGljayIsInVybERlcGxveSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sections/Projects.jsx\n"));

/***/ })

});