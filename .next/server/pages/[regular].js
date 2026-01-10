"use strict";
(() => {
var exports = {};
exports.id = 493;
exports.ids = [493];
exports.modules = {

/***/ 8332:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1360);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__]);
_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const NotFound = ({ data  })=>{
    const { frontmatter , content  } = data;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "section",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex h-[40vh] items-center justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "mb-4",
                            children: frontmatter.title
                        }),
                        (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .markdownify */ .gI)(content, "div", "content")
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 798:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1360);
/* harmony import */ var _shortcodes_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(837);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9961);
/* harmony import */ var _components_ImageFallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(297);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__, _shortcodes_all__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__, _shortcodes_all__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const About = ({ data  })=>{
    const { frontmatter , mdxContent  } = data;
    const { title , image , education , experience  } = frontmatter;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "section mt-16",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container text-center",
            children: [
                image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mb-8",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageFallback__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        src: image,
                        width: 1298,
                        height: 616,
                        alt: title,
                        className: "rounded-lg"
                    })
                }),
                (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .markdownify */ .gI)(title, "h1", "h1 text-left lg:text-[55px] mt-12"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "content text-left",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__.MDXRemote, {
                        ...mdxContent,
                        components: _shortcodes_all__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row mt-24 text-left lg:flex-nowrap",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "lg:col-6 ",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "rounded border border-border p-6 dark:border-darkmode-border ",
                                children: [
                                    (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .markdownify */ .gI)(education.title, "h2", "section-title mb-12"),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "row",
                                        children: education.degrees.map((degree, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mb-7 md:col-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                        className: "text-base lg:text-[25px]",
                                                        children: degree.university
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "mt-2",
                                                        children: degree.content
                                                    })
                                                ]
                                            }, "degree-" + index))
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "experience mt-10 lg:mt-0 lg:col-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "rounded border border-border p-6 dark:border-darkmode-border ",
                                children: [
                                    (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .markdownify */ .gI)(experience.title, "h2", "section-title mb-12"),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "row",
                                        children: experience?.list?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "mb-5 text-lg font-bold text-dark dark:text-darkmode-light lg:col-6",
                                                children: item
                                            }, "experience-" + index))
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6722:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1360);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ImageFallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(297);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__]);
_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Contact = ({ data  })=>{
    const { frontmatter  } = data;
    const { title , form_action , phone , mail , location  } = frontmatter;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "section lg:mt-16",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row relative pb-16",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageFallback__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: "absolute -z-[1] object-cover object-top",
                        src: "/images/map.svg",
                        fill: "true",
                        alt: "map bg",
                        priority: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lg:col-6",
                        children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .markdownify */ .gI)(title, "h1", "h1 my-10 lg:my-11 lg:pt-11 text-center lg:text-left lg:text-[64px]")
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contact-form-wrapper rounded border border-border p-6 lg:col-6 dark:border-darkmode-border",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                children: [
                                    "Send Us A",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "ml-1.5 inline-flex items-center text-primary",
                                        children: [
                                            "Message",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsArrowRightShort, {})
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                className: "contact-form mt-12",
                                method: "POST",
                                action: form_action,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "mb-2 block font-secondary",
                                                htmlFor: "name",
                                                children: [
                                                    "Full name",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                        className: "font-secondary text-sm text-primary",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "form-input w-full placeholder:text-gray-400 placeholder:opacity-50",
                                                name: "name",
                                                type: "text",
                                                placeholder: "Enter your full name",
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "mb-2 block font-secondary",
                                                htmlFor: "email",
                                                children: [
                                                    "Email Address",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                        className: "font-secondary text-sm text-primary",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "form-input w-full placeholder:text-gray-400 placeholder:opacity-50",
                                                name: "email",
                                                type: "email",
                                                placeholder: "Enter your email address",
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "mb-2 block font-secondary",
                                                htmlFor: "subject",
                                                children: [
                                                    "Subject",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                        className: "font-secondary text-sm text-primary",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                className: "form-input w-full placeholder:text-gray-400 placeholder:opacity-50",
                                                name: "subject",
                                                type: "text",
                                                placeholder: "Enter the subject",
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                className: "mb-2 block font-secondary",
                                                htmlFor: "message",
                                                children: [
                                                    "Your Message Here",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                                        className: "font-secondary text-sm text-primary",
                                                        children: "*"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                className: "form-input w-full placeholder:text-gray-400 placeholder:opacity-50",
                                                placeholder: "Enter your message here",
                                                rows: "7"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "btn btn-primary",
                                        type: "submit",
                                        value: "Send Now"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 550:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1360);
/* harmony import */ var _shortcodes_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(837);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9961);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__, _shortcodes_all__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__, _shortcodes_all__WEBPACK_IMPORTED_MODULE_2__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Default = ({ data  })=>{
    const { frontmatter , mdxContent  } = data;
    const { title  } = frontmatter;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "section",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .markdownify */ .gI)(title, "h1", "h2 mb-8 text-center"),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "content",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_3__.MDXRemote, {
                        ...mdxContent,
                        components: _shortcodes_all__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Default);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1836:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8332);
/* harmony import */ var _layouts_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(798);
/* harmony import */ var _layouts_Baseof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(697);
/* harmony import */ var _layouts_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6722);
/* harmony import */ var _layouts_Default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(550);
/* harmony import */ var _lib_contentParser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4879);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_404__WEBPACK_IMPORTED_MODULE_1__, _layouts_About__WEBPACK_IMPORTED_MODULE_2__, _layouts_Baseof__WEBPACK_IMPORTED_MODULE_3__, _layouts_Contact__WEBPACK_IMPORTED_MODULE_4__, _layouts_Default__WEBPACK_IMPORTED_MODULE_5__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_6__]);
([_layouts_404__WEBPACK_IMPORTED_MODULE_1__, _layouts_About__WEBPACK_IMPORTED_MODULE_2__, _layouts_Baseof__WEBPACK_IMPORTED_MODULE_3__, _layouts_Contact__WEBPACK_IMPORTED_MODULE_4__, _layouts_Default__WEBPACK_IMPORTED_MODULE_5__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// for all regular pages
const RegularPages = ({ data  })=>{
    const { title , meta_title , description , image , noindex , canonical , layout  } = data.frontmatter;
    const { content  } = data;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Baseof__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        title: title,
        description: description ? description : content.slice(0, 120),
        meta_title: meta_title,
        image: image,
        noindex: noindex,
        canonical: canonical,
        children: layout === "404" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_404__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            data: data
        }) : layout === "about" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_About__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            data: data
        }) : layout === "contact" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Contact__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            data: data
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Default__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            data: data
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegularPages);
// for regular page routes
const getStaticPaths = async ()=>{
    const slugs = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_6__/* .getSinglePage */ .il)("content");
    const paths = slugs.map((item)=>({
            params: {
                regular: item.slug
            }
        }));
    return {
        paths,
        fallback: false
    };
};
// for regular page data
const getStaticProps = async ({ params  })=>{
    const { regular  } = params;
    const allPages = await (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_6__/* .getRegularPage */ .bk)(regular);
    return {
        props: {
            slug: regular,
            data: allPages
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 9989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

/***/ }),

/***/ 727:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 7079:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/hljs");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1578:
/***/ ((module) => {

module.exports = import("github-slugger");;

/***/ }),

/***/ 8974:
/***/ ((module) => {

module.exports = import("marked");;

/***/ }),

/***/ 9961:
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ 4818:
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 1817:
/***/ ((module) => {

module.exports = import("react-lite-youtube-embed");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = import("rehype-slug");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,626,697,879,837], () => (__webpack_exec__(1836)));
module.exports = __webpack_exports__;

})();