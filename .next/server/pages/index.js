"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,882];
exports.modules = {

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var _layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(697);
/* harmony import */ var _layouts_components_ImageFallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(297);
/* harmony import */ var _layouts_components_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4037);
/* harmony import */ var _layouts_partials_Post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5959);
/* harmony import */ var _layouts_partials_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5393);
/* harmony import */ var _lib_contentParser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4879);
/* harmony import */ var _lib_taxonomyParser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(933);
/* harmony import */ var _lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4996);
/* harmony import */ var _lib_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4928);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1360);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__, _layouts_partials_Sidebar__WEBPACK_IMPORTED_MODULE_6__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_7__, _lib_taxonomyParser__WEBPACK_IMPORTED_MODULE_8__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_10__]);
([_layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__, _layouts_partials_Sidebar__WEBPACK_IMPORTED_MODULE_6__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_7__, _lib_taxonomyParser__WEBPACK_IMPORTED_MODULE_8__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const { blog_folder , pagination  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.settings;
const Home = ({ banner , posts , featured_posts , recent_posts , categories , promotion  })=>{
    // define state
    const sortPostByDate = (0,_lib_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_13__/* .sortByDate */ .d)(posts);
    const featuredPosts = sortPostByDate.filter((post)=>post.frontmatter.featured);
    const showPosts = pagination;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "section banner relative pb-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_components_ImageFallback__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: "absolute bottom-0 left-0 z-[-1] w-full",
                        src: "/images/banner-bg-shape.svg",
                        width: 1905,
                        height: 295,
                        alt: "banner-shape",
                        priority: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row flex-wrap-reverse items-center justify-center lg:flex-row",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: banner.image_enable ? "mt-12 text-center lg:col-6 lg:mt-0 lg:text-left" : "mt-12 text-center lg:col-12 lg:mt-0 lg:text-left",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "banner-title",
                                            children: [
                                                (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_10__/* .markdownify */ .gI)(banner.title, "h1"),
                                                (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_10__/* .markdownify */ .gI)(banner.title_small, "span")
                                            ]
                                        }),
                                        (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_10__/* .markdownify */ .gI)(banner.content, "p", "mt-4"),
                                        banner.button.enable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                            className: "btn btn-primary mt-6",
                                            href: banner.button.link,
                                            rel: banner.button.rel,
                                            children: banner.button.label
                                        })
                                    ]
                                }),
                                banner.image_enable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-9 lg:col-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_components_ImageFallback__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        className: "mx-auto object-contain",
                                        src: banner.image,
                                        width: 548,
                                        height: 443,
                                        priority: true,
                                        alt: "Banner Image"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "section",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row items-start",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-12 lg:col-8 lg:mb-0",
                                children: [
                                    featured_posts.enable && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "section",
                                        children: [
                                            (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_10__/* .markdownify */ .gI)(featured_posts.title, "h2", "section-title"),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "rounded border border-border p-6 dark:border-darkmode-border",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "md:col-6",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_partials_Post__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                post: featuredPosts[0]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "scrollbar-w-[10px] mt-8 max-h-[480px] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-border md:col-6 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-darkmode-theme-dark md:mt-0",
                                                            children: featuredPosts.slice(1, featuredPosts.length).map((post, i, arr)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: `mb-6 flex items-center pb-6 ${i !== arr.length - 1 && "border-b border-border dark:border-darkmode-border"}`,
                                                                    children: [
                                                                        post.frontmatter.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_components_ImageFallback__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                            className: "mr-3 h-[85px] rounded object-cover",
                                                                            src: post.frontmatter.image,
                                                                            alt: post.frontmatter.title,
                                                                            width: 105,
                                                                            height: 85
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                    className: "h5 mb-2",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                                        href: `/${blog_folder}/${post.slug}`,
                                                                                        className: "block hover:text-primary",
                                                                                        children: post.frontmatter.title
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                    className: "inline-flex items-center font-bold",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__.FaRegCalendar, {
                                                                                            className: "mr-1.5"
                                                                                        }),
                                                                                        (0,_lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(post.frontmatter.date)
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }, `key-${i}`))
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    recent_posts.enable && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "section pt-0",
                                        children: [
                                            (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_10__/* .markdownify */ .gI)(recent_posts.title, "h2", "section-title"),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "rounded border border-border px-6 pt-6 dark:border-darkmode-border",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "row",
                                                    children: sortPostByDate.slice(0, showPosts).map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mb-8 md:col-6",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_partials_Post__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                                post: post
                                                            })
                                                        }, post.slug))
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_components_Pagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        totalPages: Math.ceil(posts.length / showPosts),
                                        currentPage: 1
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_partials_Sidebar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: "lg:mt-[9.5rem]",
                                posts: posts,
                                categories: categories
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
// for homepage data
const getStaticProps = async ()=>{
    const homepage = await (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_7__/* .getListPage */ .di)("content/_index.md");
    const { frontmatter  } = homepage;
    const { banner , featured_posts , recent_posts , promotion  } = frontmatter;
    const posts = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_7__/* .getSinglePage */ .il)(`content/${blog_folder}`);
    const categories = (0,_lib_taxonomyParser__WEBPACK_IMPORTED_MODULE_8__/* .getTaxonomy */ .p)(`content/${blog_folder}`, "categories");
    const categoriesWithPostsCount = categories.map((category)=>{
        const filteredPosts = posts.filter((post)=>post.frontmatter.categories.includes(category));
        return {
            name: category,
            posts: filteredPosts.length
        };
    });
    return {
        props: {
            banner: banner,
            posts: posts,
            featured_posts,
            recent_posts,
            promotion,
            categories: categoriesWithPostsCount
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5465:
/***/ ((module) => {

module.exports = require("date-fns-tz");

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

/***/ 3286:
/***/ ((module) => {

module.exports = require("react-mailchimp-subscribe");

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

/***/ 4818:
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

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
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,626,697,879,959,558,37], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();