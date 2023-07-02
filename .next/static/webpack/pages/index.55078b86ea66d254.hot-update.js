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

/***/ "./components/sections/AboutMe.jsx":
/*!*****************************************!*\
  !*** ./components/sections/AboutMe.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AboutMe = ()=>{\n    _s();\n    const refAbout = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useInView)(refAbout);\n    const mainControls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isInView) {\n            mainControls.start(\"visible\");\n        } else {\n            mainControls.start(\"hidden\");\n        }\n    });\n    const handleDownload = ()=>{\n        window.open(\"https://docdro.id/MwYXEKW\", \"_blank\");\n    };\n    const containerVariants = {\n        hidden: {\n            filter: \"blur(20px)\",\n            scale: 1.5\n        },\n        visible: {\n            filter: \"blur(0px)\",\n            transition: {\n                duration: 1\n            }\n        }\n    };\n    const rightVariants = {\n        hidden: {\n            opacity: 0,\n            x: \"-20vw\"\n        },\n        visible: {\n            opacity: 1,\n            x: 0,\n            transition: {\n                type: \"tween\",\n                duration: 0.9\n            }\n        }\n    };\n    const leftVariants = {\n        hidden: {\n            opacity: 0,\n            x: \"20vw\"\n        },\n        visible: {\n            opacity: 1,\n            x: 0,\n            transition: {\n                type: \"tween\",\n                duration: 0.9\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        variants: containerVariants,\n        initial: \"initial\",\n        animate: mainControls,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            borderRadius: \"20px\",\n            background: \"linear-gradient(90deg, rgba(110, 0, 194, 0.20) 0%, #2F0743 100%)\",\n            width: \"100%\",\n            height: {\n                base: \"1150px\",\n                lg: \"700px\"\n            },\n            display: \"flex\",\n            alignItems: \"center\",\n            flexDirection: {\n                base: \"column\",\n                lg: \"row\"\n            },\n            padding: {\n                base: 2,\n                lg: 20\n            },\n            ref: refAbout,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    variants: rightVariants,\n                    initial: \"hidden\",\n                    animate: mainControls,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        backgroundColor: \"rgba(0, 0, 0, 0.5)\",\n                        backgroundImage: \"url(https://i.imgur.com/Z7IUGBy.png)\",\n                        backgroundSize: \"cover\",\n                        backgroundPosition: \"center\",\n                        width: \"330px\",\n                        height: \"440px\",\n                        borderRadius: \"45px\",\n                        margin: {\n                            base: 3,\n                            md: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    variants: leftVariants,\n                    initial: \"hidden\",\n                    animate: mainControls,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        width: {\n                            base: \"100%\",\n                            md: \"80%\"\n                        },\n                        marginLeft: {\n                            base: 2,\n                            md: 20\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                                fontSize: {\n                                    base: 40,\n                                    md: 56\n                                },\n                                children: \"About Me\"\n                            }, void 0, false, {\n                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                                fontSize: {\n                                    base: 20,\n                                    md: 25\n                                },\n                                color: \"#C7A052\",\n                                children: \"STUDENTS OF COMPUTER SCIENCE\"\n                            }, void 0, false, {\n                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    marginTop: 8\n                                },\n                                children: \"Hello! I am a computer engineering student passionate about the world of technology and programming. I am currently in active job search.\"\n                            }, void 0, false, {\n                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    marginTop: 8\n                                },\n                                children: \"I have studied computer engineering for 3 years, but due to my upcoming move to Valencia, I am completely focused on getting a job in the IT world and continuing to develop as a professional. I am enthusiastic about learning new technologies and keeping up with the latest trends in the field of computing.\"\n                            }, void 0, false, {\n                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    marginTop: 8\n                                },\n                                children: \"I consider myself a proactive person, passionate about learning and innovation, and I am sure that I can contribute a lot to any company that gives me the opportunity. I am excited for what the future holds for me and I look forward to contributing my skills to the world of technology!\"\n                            }, void 0, false, {\n                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                marginTop: 5,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            paddingLeft: 8,\n                                            paddingRight: 8,\n                                            borderRadius: 45,\n                                            border: \"solid 1px #C7A052\",\n                                            color: \"#C7A052\",\n                                            children: \"Contact Me\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                            lineNumber: 133,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            marginLeft: 1,\n                                            paddingLeft: 8,\n                                            paddingRight: 8,\n                                            borderRadius: 45,\n                                            border: \"solid 1px #C7A052\",\n                                            color: \"#C7A052\",\n                                            onClick: handleDownload,\n                                            children: \"Download CV\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                            lineNumber: 143,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                lineNumber: 131,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AboutMe, \"Th7nlsXDbsMOG0zhUaLcmlAhVs4=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation\n    ];\n});\n_c = AboutMe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMe);\nvar _c;\n$RefreshReg$(_c, \"AboutMe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHlEQUFXQTs7c0RBQ1YsOERBQUNELG9EQUFNQTs0Q0FDTHdELGFBQWE7NENBQ2JDLGNBQWM7NENBQ2R4QixjQUFjOzRDQUNkeUIsUUFBUTs0Q0FDUk4sT0FBTztzREFDUjs7Ozs7O3NEQUlELDhEQUFDcEQsb0RBQU1BOzRDQUNMa0QsWUFBWTs0Q0FDWk0sYUFBYTs0Q0FDYkMsY0FBYzs0Q0FDZHhCLGNBQWM7NENBQ2R5QixRQUFROzRDQUNSTixPQUFPOzRDQUNQTyxTQUFTNUM7c0RBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqQjtHQTVKTUw7O1FBRWFILG9EQUFTQTtRQUVMQyx1REFBWUE7OztLQUo3QkU7QUE4Sk4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9BYm91dE1lLmpzeD9jMzFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBCdXR0b25Hcm91cCwgSGVhZGluZyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlSW5WaWV3LCB1c2VBbmltYXRpb24sIGFuaW1hdGUgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBBYm91dE1lID0gKCkgPT4ge1xuICBjb25zdCByZWZBYm91dCA9IHVzZVJlZihudWxsKVxuICBjb25zdCBpc0luVmlldyA9IHVzZUluVmlldyhyZWZBYm91dClcblxuICBjb25zdCBtYWluQ29udHJvbHMgPSB1c2VBbmltYXRpb24oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzSW5WaWV3KSB7XG4gICAgICBtYWluQ29udHJvbHMuc3RhcnQoJ3Zpc2libGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICBtYWluQ29udHJvbHMuc3RhcnQoJ2hpZGRlbicpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gKCkgPT4ge1xuICAgIHdpbmRvdy5vcGVuKCdodHRwczovL2RvY2Ryby5pZC9Nd1lYRUtXJywgJ19ibGFuaycpXG4gIH1cbiAgY29uc3QgY29udGFpbmVyVmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7XG4gICAgICBmaWx0ZXI6ICdibHVyKDIwcHgpJyxcbiAgICAgIHNjYWxlOiAxLjUsXG4gICAgfSxcbiAgICB2aXNpYmxlOiB7XG4gICAgICBmaWx0ZXI6ICdibHVyKDBweCknLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0IHJpZ2h0VmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgeDogJy0yMHZ3JyxcbiAgICB9LFxuICAgIHZpc2libGU6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB4OiAwLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICB0eXBlOiAndHdlZW4nLFxuICAgICAgICBkdXJhdGlvbjogMC45LFxuICAgICAgfSxcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgbGVmdFZhcmlhbnRzID0ge1xuICAgIGhpZGRlbjoge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHg6ICcyMHZ3JyxcbiAgICB9LFxuICAgIHZpc2libGU6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB4OiAwLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICB0eXBlOiAndHdlZW4nLFxuICAgICAgICBkdXJhdGlvbjogMC45LFxuICAgICAgfSxcbiAgICB9LFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgdmFyaWFudHM9e2NvbnRhaW5lclZhcmlhbnRzfVxuICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgYW5pbWF0ZT17bWFpbkNvbnRyb2xzfVxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiMjBweFwiXG4gICAgICAgIGJhY2tncm91bmQ9e2BsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTEwLCAwLCAxOTQsIDAuMjApIDAlLCAjMkYwNzQzIDEwMCUpYH1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgaGVpZ2h0PXt7IGJhc2U6ICcxMTUwcHgnLCBsZzogJzcwMHB4JyB9fVxuICAgICAgICBkaXNwbGF5PXsnZmxleCd9XG4gICAgICAgIGFsaWduSXRlbXM9eydjZW50ZXInfVxuICAgICAgICBmbGV4RGlyZWN0aW9uPXt7IGJhc2U6ICdjb2x1bW4nLCBsZzogJ3JvdycgfX1cbiAgICAgICAgcGFkZGluZz17eyBiYXNlOiAyLCBsZzogMjAgfX1cbiAgICAgICAgcmVmPXtyZWZBYm91dH1cbiAgICAgID5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICB2YXJpYW50cz17cmlnaHRWYXJpYW50c31cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICBhbmltYXRlPXttYWluQ29udHJvbHN9XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJyZ2JhKDAsIDAsIDAsIDAuNSlcIlxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlPVwidXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vWjdJVUdCeS5wbmcpXCJcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplPVwiY292ZXJcIlxuICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgIHdpZHRoPXsnMzMwcHgnfVxuICAgICAgICAgICAgaGVpZ2h0PXsnNDQwcHgnfVxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXsnNDVweCd9XG4gICAgICAgICAgICBtYXJnaW49e3sgYmFzZTogMywgbWQ6IDEwIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgdmFyaWFudHM9e2xlZnRWYXJpYW50c31cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICBhbmltYXRlPXttYWluQ29udHJvbHN9XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICB3aWR0aD17eyBiYXNlOiAnMTAwJScsIG1kOiAnODAlJyB9fVxuICAgICAgICAgICAgbWFyZ2luTGVmdD17eyBiYXNlOiAyLCBtZDogMjAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT17eyBiYXNlOiA0MCwgbWQ6IDU2IH19PkFib3V0IE1lPC9IZWFkaW5nPlxuICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9e3sgYmFzZTogMjAsIG1kOiAyNSB9fSBjb2xvcj17JyNDN0EwNTInfT5cbiAgICAgICAgICAgICAgU1RVREVOVFMgT0YgQ09NUFVURVIgU0NJRU5DRVxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlxuICAgICAgICAgICAgICBIZWxsbyEgSSBhbSBhIGNvbXB1dGVyIGVuZ2luZWVyaW5nIHN0dWRlbnQgcGFzc2lvbmF0ZSBhYm91dCB0aGVcbiAgICAgICAgICAgICAgd29ybGQgb2YgdGVjaG5vbG9neSBhbmQgcHJvZ3JhbW1pbmcuIEkgYW0gY3VycmVudGx5IGluIGFjdGl2ZSBqb2JcbiAgICAgICAgICAgICAgc2VhcmNoLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luVG9wOiA4IH19PlxuICAgICAgICAgICAgICBJIGhhdmUgc3R1ZGllZCBjb21wdXRlciBlbmdpbmVlcmluZyBmb3IgMyB5ZWFycywgYnV0IGR1ZSB0byBteVxuICAgICAgICAgICAgICB1cGNvbWluZyBtb3ZlIHRvIFZhbGVuY2lhLCBJIGFtIGNvbXBsZXRlbHkgZm9jdXNlZCBvbiBnZXR0aW5nIGFcbiAgICAgICAgICAgICAgam9iIGluIHRoZSBJVCB3b3JsZCBhbmQgY29udGludWluZyB0byBkZXZlbG9wIGFzIGEgcHJvZmVzc2lvbmFsLiBJXG4gICAgICAgICAgICAgIGFtIGVudGh1c2lhc3RpYyBhYm91dCBsZWFybmluZyBuZXcgdGVjaG5vbG9naWVzIGFuZCBrZWVwaW5nIHVwXG4gICAgICAgICAgICAgIHdpdGggdGhlIGxhdGVzdCB0cmVuZHMgaW4gdGhlIGZpZWxkIG9mIGNvbXB1dGluZy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5cbiAgICAgICAgICAgICAgSSBjb25zaWRlciBteXNlbGYgYSBwcm9hY3RpdmUgcGVyc29uLCBwYXNzaW9uYXRlIGFib3V0IGxlYXJuaW5nXG4gICAgICAgICAgICAgIGFuZCBpbm5vdmF0aW9uLCBhbmQgSSBhbSBzdXJlIHRoYXQgSSBjYW4gY29udHJpYnV0ZSBhIGxvdCB0byBhbnlcbiAgICAgICAgICAgICAgY29tcGFueSB0aGF0IGdpdmVzIG1lIHRoZSBvcHBvcnR1bml0eS4gSSBhbSBleGNpdGVkIGZvciB3aGF0IHRoZVxuICAgICAgICAgICAgICBmdXR1cmUgaG9sZHMgZm9yIG1lIGFuZCBJIGxvb2sgZm9yd2FyZCB0byBjb250cmlidXRpbmcgbXkgc2tpbGxzXG4gICAgICAgICAgICAgIHRvIHRoZSB3b3JsZCBvZiB0ZWNobm9sb2d5IVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPEJveCBtYXJnaW5Ub3A9ezV9PlxuICAgICAgICAgICAgICA8QnV0dG9uR3JvdXA+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ9ezh9XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezh9XG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9ezQ1fVxuICAgICAgICAgICAgICAgICAgYm9yZGVyPXsnc29saWQgMXB4ICNDN0EwNTInfVxuICAgICAgICAgICAgICAgICAgY29sb3I9eycjQzdBMDUyJ31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDb250YWN0IE1lXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PXsxfVxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ9ezh9XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezh9XG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9ezQ1fVxuICAgICAgICAgICAgICAgICAgYm9yZGVyPXsnc29saWQgMXB4ICNDN0EwNTInfVxuICAgICAgICAgICAgICAgICAgY29sb3I9eycjQzdBMDUyJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIERvd25sb2FkIENWXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9Cb3g+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0TWVcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJCdXR0b25Hcm91cCIsIkhlYWRpbmciLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIm1vdGlvbiIsInVzZUluVmlldyIsInVzZUFuaW1hdGlvbiIsImFuaW1hdGUiLCJBYm91dE1lIiwicmVmQWJvdXQiLCJpc0luVmlldyIsIm1haW5Db250cm9scyIsInN0YXJ0IiwiaGFuZGxlRG93bmxvYWQiLCJ3aW5kb3ciLCJvcGVuIiwiY29udGFpbmVyVmFyaWFudHMiLCJoaWRkZW4iLCJmaWx0ZXIiLCJzY2FsZSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJyaWdodFZhcmlhbnRzIiwib3BhY2l0eSIsIngiLCJ0eXBlIiwibGVmdFZhcmlhbnRzIiwiZGl2IiwidmFyaWFudHMiLCJpbml0aWFsIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFzZSIsImxnIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZyIsInJlZiIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwibWFyZ2luIiwibWQiLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiLCJjb2xvciIsInAiLCJzdHlsZSIsIm1hcmdpblRvcCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwiYm9yZGVyIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sections/AboutMe.jsx\n"));

/***/ })

});