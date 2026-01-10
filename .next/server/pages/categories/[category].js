"use strict";
(() => {
var exports = {};
exports.id = 410;
exports.ids = [410];
exports.modules = {

/***/ 411:
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
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var _layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(697);
/* harmony import */ var _layouts_partials_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5393);
/* harmony import */ var _lib_contentParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4879);
/* harmony import */ var _lib_taxonomyParser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(933);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1360);
/* harmony import */ var _partials_Post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__, _layouts_partials_Sidebar__WEBPACK_IMPORTED_MODULE_3__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_4__, _lib_taxonomyParser__WEBPACK_IMPORTED_MODULE_5__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_6__]);
([_layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__, _layouts_partials_Sidebar__WEBPACK_IMPORTED_MODULE_3__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_4__, _lib_taxonomyParser__WEBPACK_IMPORTED_MODULE_5__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const { blog_folder  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.settings;
// category page
const Category = ({ postsByCategories , category , posts , categories  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: category,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "section mt-16",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: "h2 mb-12",
                        children: [
                            "Showing posts from",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "section-title ml-1 inline-block capitalize",
                                children: category.replace("-", " ")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "lg:col-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row rounded border border-border p-4 px-3 dark:border-darkmode-border lg:p-6",
                                    children: postsByCategories.map((post, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-12 mb-8 sm:col-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_Post__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                post: post
                                            })
                                        }, `key-${i}`))
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_partials_Sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                posts: posts,
                                categories: categories
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);
// category page routes
const getStaticPaths = ()=>{
    const allCategories = (0,_lib_taxonomyParser__WEBPACK_IMPORTED_MODULE_5__/* .getTaxonomy */ .p)(`content/${blog_folder}`, "categories");
    const paths = allCategories.map((category)=>({
            params: {
                category: category
            }
        }));
    return {
        paths,
        fallback: false
    };
};
// category page data
const getStaticProps = ({ params  })=>{
    const posts = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_4__/* .getSinglePage */ .il)(`content/${blog_folder}`);
    const filterPosts = posts.filter((post)=>post.frontmatter.categories.find((category)=>(0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_6__/* .slugify */ .lV)(category).includes(params.category)));
    const categories = (0,_lib_taxonomyParser__WEBPACK_IMPORTED_MODULE_5__/* .getTaxonomy */ .p)(`content/${blog_folder}`, "categories");
    const categoriesWithPostsCount = categories.map((category)=>{
        const filteredPosts = posts.filter((post)=>post.frontmatter.categories.map((e)=>(0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_6__/* .slugify */ .lV)(e)).includes(category));
        return {
            name: category,
            posts: filteredPosts.length
        };
    });
    return {
        props: {
            posts,
            postsByCategories: filterPosts,
            category: params.category,
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,626,697,879,959,558], () => (__webpack_exec__(411)));
module.exports = __webpack_exports__;

})();