"use strict";
exports.id = 566;
exports.ids = [566];
exports.modules = {

/***/ 4928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sortByDate)
/* harmony export */ });
/* unused harmony export sortByWeight */
// sort by date
const sortByDate = (array)=>{
    const sortedArray = array.sort((a, b)=>new Date(b.frontmatter.date && b.frontmatter.date) - new Date(a.frontmatter.date && a.frontmatter.date));
    return sortedArray;
};
// sort product by weight
const sortByWeight = (array)=>{
    const withWeight = array.filter((item)=>item.frontmatter.weight);
    const withoutWeight = array.filter((item)=>!item.frontmatter.weight);
    const sortedWeightedArray = withWeight.sort((a, b)=>a.frontmatter.weight - b.frontmatter.weight);
    const sortedArray = [
        ...new Set([
            ...sortedWeightedArray,
            ...withoutWeight
        ])
    ];
    return sortedArray;
};


/***/ }),

/***/ 5566:
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
/* harmony import */ var _layouts_components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4037);
/* harmony import */ var _lib_contentParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4879);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1360);
/* harmony import */ var _lib_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4928);
/* harmony import */ var _partials_Post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_4__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_5__]);
([_layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_4__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const { blog_folder , summary_length  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.settings;
// blog pagination
const BlogPagination = ({ postIndex , posts , currentPage , pagination  })=>{
    const indexOfLastPost = currentPage * pagination;
    const indexOfFirstPost = indexOfLastPost - pagination;
    const orderedPosts = (0,_lib_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_7__/* .sortByDate */ .d)(posts);
    const currentPosts = orderedPosts.slice(indexOfFirstPost, indexOfLastPost);
    const { frontmatter  } = postIndex;
    const { title  } = frontmatter;
    const totalPages = Math.ceil(posts.length / pagination);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: title,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "section",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_5__/* .markdownify */ .gI)(title, "h1", "h2 mb-8 text-center"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row mb-16",
                        children: currentPosts.map((post, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-16 lg:col-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_Post__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    post: post
                                })
                            }, post.slug))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_components_Pagination__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        totalPages: totalPages,
                        currentPage: currentPage
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPagination);
// get blog pagination slug
const getStaticPaths = ()=>{
    const getAllSlug = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_4__/* .getSinglePage */ .il)(`content/${blog_folder}`);
    const allSlug = getAllSlug.map((item)=>item.slug);
    const { pagination  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.settings;
    const totalPages = Math.ceil(allSlug.length / pagination);
    let paths = [];
    for(let i = 1; i < totalPages; i++){
        paths.push({
            params: {
                slug: (i + 1).toString()
            }
        });
    }
    return {
        paths,
        fallback: false
    };
};
// get blog pagination content
const getStaticProps = async ({ params  })=>{
    const currentPage = parseInt(params && params.slug || 1);
    const { pagination  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.settings;
    const posts = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_4__/* .getSinglePage */ .il)(`content/${blog_folder}`);
    const postIndex = await (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_4__/* .getListPage */ .di)(`content/${blog_folder}/_index.md`);
    return {
        props: {
            pagination: pagination,
            posts: posts,
            currentPage: currentPage,
            postIndex: postIndex
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;