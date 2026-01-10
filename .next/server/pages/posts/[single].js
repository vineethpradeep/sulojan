"use strict";
(() => {
var exports = {};
exports.id = 823;
exports.ids = [823];
exports.modules = {

/***/ 2204:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var _layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(697);
/* harmony import */ var _layouts_components_ImageFallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(297);
/* harmony import */ var _layouts_components_InnerPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6486);
/* harmony import */ var _lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4996);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1360);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1527);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9961);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _partials_Post__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5959);
/* harmony import */ var _partials_Sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5393);
/* harmony import */ var _shortcodes_all__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(837);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_6__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_8__, _partials_Sidebar__WEBPACK_IMPORTED_MODULE_13__, _shortcodes_all__WEBPACK_IMPORTED_MODULE_14__]);
([_layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_6__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_8__, _partials_Sidebar__WEBPACK_IMPORTED_MODULE_13__, _shortcodes_all__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const { disqus  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__;
const { meta_author  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.metadata;
const PostSingle = ({ frontmatter , content , mdxContent , slug , posts , allCategories , relatedPosts  })=>{
    let { description , title , date , image , categories  } = frontmatter;
    description = description ? description : content.slice(0, 120);
    const { theme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_9__.useTheme)();
    const author = frontmatter.author ? frontmatter.author : meta_author;
    // Local copy so we don't modify global config.
    let disqusConfig = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.disqus.settings;
    disqusConfig.identifier = frontmatter.disqusId ? frontmatter.disqusId : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.settings.blog_folder + "/" + slug;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: title,
        description: description,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "section single-blog mt-6",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "lg:col-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "relative",
                                                children: [
                                                    image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_components_ImageFallback__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                        src: image,
                                                        height: "500",
                                                        width: "1000",
                                                        alt: title,
                                                        className: "rounded-lg"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                        className: "absolute top-3 left-2 flex flex-wrap items-center",
                                                        children: categories.map((tag, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "mx-2 inline-flex h-7 rounded-[35px] bg-primary px-3 text-white",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                                    className: "capitalize",
                                                                    href: `/categories/${tag.replace(" ", "-")}`,
                                                                    children: tag
                                                                })
                                                            }, "tag-" + index))
                                                    })
                                                ]
                                            }),
                                            _config_config_json__WEBPACK_IMPORTED_MODULE_1__.settings.InnerPaginationOptions.enableTop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_components_InnerPagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    posts: posts,
                                                    date: date
                                                })
                                            }),
                                            (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_6__/* .markdownify */ .gI)(title, "h1", "lg:text-[42px] mt-4"),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "flex items-center space-x-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_10___default()), {
                                                            className: "inline-flex items-center font-secondary text-xs leading-3",
                                                            href: "/about",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaUserAlt, {
                                                                    className: "mr-1.5"
                                                                }),
                                                                author
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                        className: "inline-flex items-center font-secondary text-xs leading-3",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaRegCalendar, {
                                                                className: "mr-1.5"
                                                            }),
                                                            (0,_lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(date)
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "content mb-16",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_8__.MDXRemote, {
                                                    ...mdxContent,
                                                    components: _shortcodes_all__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z
                                                })
                                            }),
                                            _config_config_json__WEBPACK_IMPORTED_MODULE_1__.settings.InnerPaginationOptions.enableBottom && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_components_InnerPagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                posts: posts,
                                                date: date
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-16",
                                        children: disqus.enable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(disqus_react__WEBPACK_IMPORTED_MODULE_7__.DiscussionEmbed, {
                                            shortname: disqus.shortname,
                                            config: disqusConfig
                                        }, theme)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_Sidebar__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                posts: posts.filter((post)=>post.slug !== slug),
                                categories: allCategories
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container mt-20",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "section-title",
                            children: "Related Posts"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row mt-16",
                            children: relatedPosts.slice(0, 3).map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "mb-12 lg:col-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_Post__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        post: post
                                    })
                                }, "post-" + index))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostSingle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4928);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



const InnerPagination = ({ posts , date  })=>{
    const orderedPosts = (0,_lib_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_2__/* .sortByDate */ .d)(posts);
    const lastIndex = orderedPosts.length - 1;
    const postIndex = orderedPosts.findIndex((post)=>post.frontmatter.date == date);
    const next = postIndex == 0 ? undefined : orderedPosts[postIndex - 1].slug;
    const prev = postIndex == lastIndex ? undefined : orderedPosts[postIndex + 1].slug;
    const prevButton = prev && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: prev,
        className: "btn btn-primary",
        children: "Prev"
    });
    const nextButton = next && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: next,
        className: "btn btn-primary",
        children: "Next"
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "col",
                children: prevButton
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "col-8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "col",
                children: nextButton
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InnerPagination);


/***/ }),

/***/ 3711:
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
/* harmony import */ var _layouts_PostSingle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2204);
/* harmony import */ var _lib_contentParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4879);
/* harmony import */ var _lib_taxonomyParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(933);
/* harmony import */ var _lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(960);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_PostSingle__WEBPACK_IMPORTED_MODULE_2__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_3__, _lib_taxonomyParser__WEBPACK_IMPORTED_MODULE_4__, _lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_5__]);
([_layouts_PostSingle__WEBPACK_IMPORTED_MODULE_2__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_3__, _lib_taxonomyParser__WEBPACK_IMPORTED_MODULE_4__, _lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const { blog_folder  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.settings;
// post single layout
const Article = ({ post , mdxContent , slug , allCategories , relatedPosts , posts  })=>{
    const { frontmatter , content  } = post;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_PostSingle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        frontmatter: frontmatter,
        content: content,
        mdxContent: mdxContent,
        slug: slug,
        allCategories: allCategories,
        relatedPosts: relatedPosts,
        posts: posts
    });
};
// get post single slug
const getStaticPaths = ()=>{
    const allSlug = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_3__/* .getSinglePage */ .il)(`content/${blog_folder}`);
    const paths = allSlug.map((item)=>({
            params: {
                single: item.slug
            }
        }));
    return {
        paths,
        fallback: false
    };
};
// get post single content
const getStaticProps = async ({ params  })=>{
    const { single  } = params;
    const posts = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_3__/* .getSinglePage */ .il)(`content/${blog_folder}`);
    const post = posts.find((p)=>p.slug == single);
    const mdxContent = await (0,_lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(post.content);
    // related posts
    const relatedPosts = posts.filter((p)=>post.frontmatter.categories.some((cate)=>p.frontmatter.categories.includes(cate)));
    //all categories
    const categories = (0,_lib_taxonomyParser__WEBPACK_IMPORTED_MODULE_4__/* .getTaxonomy */ .p)(`content/${blog_folder}`, "categories");
    const categoriesWithPostsCount = categories.map((category)=>{
        const filteredPosts = posts.filter((post)=>post.frontmatter.categories.includes(category));
        return {
            name: category,
            posts: filteredPosts.length
        };
    });
    return {
        props: {
            post: post,
            mdxContent: mdxContent,
            slug: single,
            allCategories: categoriesWithPostsCount,
            relatedPosts: relatedPosts,
            posts: posts
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5465:
/***/ ((module) => {

module.exports = require("date-fns-tz");

/***/ }),

/***/ 1527:
/***/ ((module) => {

module.exports = require("disqus-react");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,626,697,879,959,558,837], () => (__webpack_exec__(3711)));
module.exports = __webpack_exports__;

})();