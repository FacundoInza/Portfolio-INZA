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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AboutMe = ()=>{\n    _s();\n    const refAbout = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useInView)(refAbout);\n    const mainControls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isInView) {\n            mainControls.start(\"visible\");\n        } else {\n            mainControls.start(\"hidden\");\n        }\n    });\n    const handleDownload = ()=>{\n        window.open(\"https://docdro.id/MwYXEKW\", \"_blank\");\n    };\n    const containerVariants = {\n        hidden: {\n            filter: \"blur(20px)\",\n            scale: 1.2\n        },\n        visible: {\n            scale: 1,\n            filter: \"blur(0px)\",\n            transition: {\n                duration: 1\n            }\n        }\n    };\n    const rightVariants = {\n        hidden: {\n            opacity: 0,\n            x: \"-20vw\"\n        },\n        visible: {\n            opacity: 1,\n            x: 0,\n            transition: {\n                type: \"tween\",\n                duration: 0.9\n            }\n        }\n    };\n    const leftVariants = {\n        hidden: {\n            opacity: 0,\n            x: \"20vw\"\n        },\n        visible: {\n            opacity: 1,\n            x: 0,\n            transition: {\n                type: \"tween\",\n                duration: 0.9\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        variants: containerVariants,\n        initial: \"initial\",\n        animate: mainControls,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            borderRadius: \"20px\",\n            background: \"linear-gradient(90deg, rgba(110, 0, 194, 0.20) 0%, #2F0743 100%)\",\n            width: \"100%\",\n            height: {\n                base: \"1150px\",\n                lg: \"700px\"\n            },\n            display: \"flex\",\n            alignItems: \"center\",\n            flexDirection: {\n                base: \"column\",\n                lg: \"row\"\n            },\n            padding: {\n                base: 2,\n                lg: 20\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    variants: rightVariants,\n                    initial: \"hidden\",\n                    animate: mainControls,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        backgroundColor: \"rgba(0, 0, 0, 0.5)\",\n                        backgroundImage: \"url(https://i.imgur.com/Z7IUGBy.png)\",\n                        backgroundSize: \"cover\",\n                        backgroundPosition: \"center\",\n                        width: \"330px\",\n                        height: \"440px\",\n                        borderRadius: \"45px\",\n                        margin: {\n                            base: 3,\n                            md: 10\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    variants: leftVariants,\n                    initial: \"hidden\",\n                    animate: mainControls,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        ref: refAbout,\n                        width: {\n                            base: \"100%\",\n                            md: \"80%\"\n                        },\n                        marginLeft: {\n                            base: 2,\n                            md: 20\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                                fontSize: {\n                                    base: 40,\n                                    md: 56\n                                },\n                                children: \"About Me\"\n                            }, void 0, false, {\n                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                                fontSize: {\n                                    base: 20,\n                                    md: 25\n                                },\n                                color: \"#C7A052\",\n                                children: \"STUDENTS OF COMPUTER SCIENCE\"\n                            }, void 0, false, {\n                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    marginTop: 8\n                                },\n                                children: \"Hello! I am a computer engineering student passionate about the world of technology and programming. I am currently in active job search.\"\n                            }, void 0, false, {\n                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    marginTop: 8\n                                },\n                                children: \"I have studied computer engineering for 3 years, but due to my upcoming move to Valencia, I am completely focused on getting a job in the IT world and continuing to develop as a professional. I am enthusiastic about learning new technologies and keeping up with the latest trends in the field of computing.\"\n                            }, void 0, false, {\n                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    marginTop: 8\n                                },\n                                children: \"I consider myself a proactive person, passionate about learning and innovation, and I am sure that I can contribute a lot to any company that gives me the opportunity. I am excited for what the future holds for me and I look forward to contributing my skills to the world of technology!\"\n                            }, void 0, false, {\n                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                lineNumber: 125,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                marginTop: 5,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            paddingLeft: 8,\n                                            paddingRight: 8,\n                                            borderRadius: 45,\n                                            border: \"solid 1px #C7A052\",\n                                            color: \"#C7A052\",\n                                            children: \"Contact Me\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                            lineNumber: 134,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                            marginLeft: 1,\n                                            paddingLeft: 8,\n                                            paddingRight: 8,\n                                            borderRadius: 45,\n                                            border: \"solid 1px #C7A052\",\n                                            color: \"#C7A052\",\n                                            onClick: handleDownload,\n                                            children: \"Download CV\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                            lineNumber: 144,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/inza01/Desktop/Projects/Portfolio/components/sections/AboutMe.jsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AboutMe, \"Th7nlsXDbsMOG0zhUaLcmlAhVs4=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation\n    ];\n});\n_c = AboutMe;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMe);\nvar _c;\n$RefreshReg$(_c, \"AboutMe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MENBQ2QsNEVBQUN0RCx5REFBV0E7O3NEQUNWLDhEQUFDRCxvREFBTUE7NENBQ0x3RCxhQUFhOzRDQUNiQyxjQUFjOzRDQUNkeEIsY0FBYzs0Q0FDZHlCLFFBQVE7NENBQ1JOLE9BQU87c0RBQ1I7Ozs7OztzREFJRCw4REFBQ3BELG9EQUFNQTs0Q0FDTGtELFlBQVk7NENBQ1pNLGFBQWE7NENBQ2JDLGNBQWM7NENBQ2R4QixjQUFjOzRDQUNkeUIsUUFBUTs0Q0FDUk4sT0FBTzs0Q0FDUE8sU0FBUzdDO3NEQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVakI7R0E3Sk1MOztRQUVhRixvREFBU0E7UUFFTEMsdURBQVlBOzs7S0FKN0JDO0FBK0pOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VjdGlvbnMvQWJvdXRNZS5qc3g/YzMxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgQnV0dG9uR3JvdXAsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUluVmlldywgdXNlQW5pbWF0aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgQWJvdXRNZSA9ICgpID0+IHtcbiAgY29uc3QgcmVmQWJvdXQgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgaXNJblZpZXcgPSB1c2VJblZpZXcocmVmQWJvdXQpXG5cbiAgY29uc3QgbWFpbkNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0luVmlldykge1xuICAgICAgbWFpbkNvbnRyb2xzLnN0YXJ0KCd2aXNpYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgbWFpbkNvbnRyb2xzLnN0YXJ0KCdoaWRkZW4nKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBoYW5kbGVEb3dubG9hZCA9ICgpID0+IHtcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9kb2Nkcm8uaWQvTXdZWEVLVycsICdfYmxhbmsnKVxuICB9XG4gIGNvbnN0IGNvbnRhaW5lclZhcmlhbnRzID0ge1xuICAgIGhpZGRlbjoge1xuICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICBzY2FsZTogMS4yLFxuICAgIH0sXG4gICAgdmlzaWJsZToge1xuICAgICAgc2NhbGU6IDEsXG4gICAgICBmaWx0ZXI6ICdibHVyKDBweCknLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxuXG4gIGNvbnN0IHJpZ2h0VmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgeDogJy0yMHZ3JyxcbiAgICB9LFxuICAgIHZpc2libGU6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB4OiAwLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICB0eXBlOiAndHdlZW4nLFxuICAgICAgICBkdXJhdGlvbjogMC45LFxuICAgICAgfSxcbiAgICB9LFxuICB9XG5cbiAgY29uc3QgbGVmdFZhcmlhbnRzID0ge1xuICAgIGhpZGRlbjoge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHg6ICcyMHZ3JyxcbiAgICB9LFxuICAgIHZpc2libGU6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB4OiAwLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICB0eXBlOiAndHdlZW4nLFxuICAgICAgICBkdXJhdGlvbjogMC45LFxuICAgICAgfSxcbiAgICB9LFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgdmFyaWFudHM9e2NvbnRhaW5lclZhcmlhbnRzfVxuICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgYW5pbWF0ZT17bWFpbkNvbnRyb2xzfVxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiMjBweFwiXG4gICAgICAgIGJhY2tncm91bmQ9e2BsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTEwLCAwLCAxOTQsIDAuMjApIDAlLCAjMkYwNzQzIDEwMCUpYH1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgaGVpZ2h0PXt7IGJhc2U6ICcxMTUwcHgnLCBsZzogJzcwMHB4JyB9fVxuICAgICAgICBkaXNwbGF5PXsnZmxleCd9XG4gICAgICAgIGFsaWduSXRlbXM9eydjZW50ZXInfVxuICAgICAgICBmbGV4RGlyZWN0aW9uPXt7IGJhc2U6ICdjb2x1bW4nLCBsZzogJ3JvdycgfX1cbiAgICAgICAgcGFkZGluZz17eyBiYXNlOiAyLCBsZzogMjAgfX1cbiAgICAgID5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICB2YXJpYW50cz17cmlnaHRWYXJpYW50c31cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICBhbmltYXRlPXttYWluQ29udHJvbHN9XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJyZ2JhKDAsIDAsIDAsIDAuNSlcIlxuICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlPVwidXJsKGh0dHBzOi8vaS5pbWd1ci5jb20vWjdJVUdCeS5wbmcpXCJcbiAgICAgICAgICAgIGJhY2tncm91bmRTaXplPVwiY292ZXJcIlxuICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICAgIHdpZHRoPXsnMzMwcHgnfVxuICAgICAgICAgICAgaGVpZ2h0PXsnNDQwcHgnfVxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXsnNDVweCd9XG4gICAgICAgICAgICBtYXJnaW49e3sgYmFzZTogMywgbWQ6IDEwIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgdmFyaWFudHM9e2xlZnRWYXJpYW50c31cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICBhbmltYXRlPXttYWluQ29udHJvbHN9XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICByZWY9e3JlZkFib3V0fVxuICAgICAgICAgICAgd2lkdGg9e3sgYmFzZTogJzEwMCUnLCBtZDogJzgwJScgfX1cbiAgICAgICAgICAgIG1hcmdpbkxlZnQ9e3sgYmFzZTogMiwgbWQ6IDIwIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9e3sgYmFzZTogNDAsIG1kOiA1NiB9fT5BYm91dCBNZTwvSGVhZGluZz5cbiAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPXt7IGJhc2U6IDIwLCBtZDogMjUgfX0gY29sb3I9eycjQzdBMDUyJ30+XG4gICAgICAgICAgICAgIFNUVURFTlRTIE9GIENPTVBVVEVSIFNDSUVOQ0VcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5cbiAgICAgICAgICAgICAgSGVsbG8hIEkgYW0gYSBjb21wdXRlciBlbmdpbmVlcmluZyBzdHVkZW50IHBhc3Npb25hdGUgYWJvdXQgdGhlXG4gICAgICAgICAgICAgIHdvcmxkIG9mIHRlY2hub2xvZ3kgYW5kIHByb2dyYW1taW5nLiBJIGFtIGN1cnJlbnRseSBpbiBhY3RpdmUgam9iXG4gICAgICAgICAgICAgIHNlYXJjaC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpblRvcDogOCB9fT5cbiAgICAgICAgICAgICAgSSBoYXZlIHN0dWRpZWQgY29tcHV0ZXIgZW5naW5lZXJpbmcgZm9yIDMgeWVhcnMsIGJ1dCBkdWUgdG8gbXlcbiAgICAgICAgICAgICAgdXBjb21pbmcgbW92ZSB0byBWYWxlbmNpYSwgSSBhbSBjb21wbGV0ZWx5IGZvY3VzZWQgb24gZ2V0dGluZyBhXG4gICAgICAgICAgICAgIGpvYiBpbiB0aGUgSVQgd29ybGQgYW5kIGNvbnRpbnVpbmcgdG8gZGV2ZWxvcCBhcyBhIHByb2Zlc3Npb25hbC4gSVxuICAgICAgICAgICAgICBhbSBlbnRodXNpYXN0aWMgYWJvdXQgbGVhcm5pbmcgbmV3IHRlY2hub2xvZ2llcyBhbmQga2VlcGluZyB1cFxuICAgICAgICAgICAgICB3aXRoIHRoZSBsYXRlc3QgdHJlbmRzIGluIHRoZSBmaWVsZCBvZiBjb21wdXRpbmcuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+XG4gICAgICAgICAgICAgIEkgY29uc2lkZXIgbXlzZWxmIGEgcHJvYWN0aXZlIHBlcnNvbiwgcGFzc2lvbmF0ZSBhYm91dCBsZWFybmluZ1xuICAgICAgICAgICAgICBhbmQgaW5ub3ZhdGlvbiwgYW5kIEkgYW0gc3VyZSB0aGF0IEkgY2FuIGNvbnRyaWJ1dGUgYSBsb3QgdG8gYW55XG4gICAgICAgICAgICAgIGNvbXBhbnkgdGhhdCBnaXZlcyBtZSB0aGUgb3Bwb3J0dW5pdHkuIEkgYW0gZXhjaXRlZCBmb3Igd2hhdCB0aGVcbiAgICAgICAgICAgICAgZnV0dXJlIGhvbGRzIGZvciBtZSBhbmQgSSBsb29rIGZvcndhcmQgdG8gY29udHJpYnV0aW5nIG15IHNraWxsc1xuICAgICAgICAgICAgICB0byB0aGUgd29ybGQgb2YgdGVjaG5vbG9neSFcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxCb3ggbWFyZ2luVG9wPXs1fT5cbiAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0PXs4fVxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0PXs4fVxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs0NX1cbiAgICAgICAgICAgICAgICAgIGJvcmRlcj17J3NvbGlkIDFweCAjQzdBMDUyJ31cbiAgICAgICAgICAgICAgICAgIGNvbG9yPXsnI0M3QTA1Mid9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ29udGFjdCBNZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdD17MX1cbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0PXs4fVxuICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0PXs4fVxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs0NX1cbiAgICAgICAgICAgICAgICAgIGJvcmRlcj17J3NvbGlkIDFweCAjQzdBMDUyJ31cbiAgICAgICAgICAgICAgICAgIGNvbG9yPXsnI0M3QTA1Mid9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBEb3dubG9hZCBDVlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvQm94PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dE1lXG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiQnV0dG9uR3JvdXAiLCJIZWFkaW5nIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJtb3Rpb24iLCJ1c2VJblZpZXciLCJ1c2VBbmltYXRpb24iLCJBYm91dE1lIiwicmVmQWJvdXQiLCJpc0luVmlldyIsIm1haW5Db250cm9scyIsInN0YXJ0IiwiaGFuZGxlRG93bmxvYWQiLCJ3aW5kb3ciLCJvcGVuIiwiY29udGFpbmVyVmFyaWFudHMiLCJoaWRkZW4iLCJmaWx0ZXIiLCJzY2FsZSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJyaWdodFZhcmlhbnRzIiwib3BhY2l0eSIsIngiLCJ0eXBlIiwibGVmdFZhcmlhbnRzIiwiZGl2IiwidmFyaWFudHMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJ3aWR0aCIsImhlaWdodCIsImJhc2UiLCJsZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm1hcmdpbiIsIm1kIiwicmVmIiwibWFyZ2luTGVmdCIsImZvbnRTaXplIiwiY29sb3IiLCJwIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImJvcmRlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sections/AboutMe.jsx\n"));

/***/ })

});