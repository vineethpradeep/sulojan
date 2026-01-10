"use strict";
exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 4879:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bk": () => (/* binding */ getRegularPage),
/* harmony export */   "di": () => (/* binding */ getListPage),
/* harmony export */   "il": () => (/* binding */ getSinglePage)
/* harmony export */ });
/* harmony import */ var _lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(960);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_0__]);
_lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// get list page data, ex: _index.md
const getListPage = async (filePath)=>{
    const pageData = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filePath, "utf-8");
    const pageDataParsed = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(pageData);
    const notFoundPage = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync("content/404.md", "utf-8");
    const notFoundDataParsed = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(notFoundPage);
    let frontmatter, content;
    if (pageDataParsed) {
        content = pageDataParsed.content;
        frontmatter = pageDataParsed.data;
    } else {
        content = notFoundDataParsed.content;
        frontmatter = notFoundDataParsed.data;
    }
    const mdxContent = await (0,_lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(content);
    return {
        frontmatter,
        content,
        mdxContent
    };
};
// get all single pages, ex: blog/post.md
const getSinglePage = (folder)=>{
    const filesPath = fs__WEBPACK_IMPORTED_MODULE_1___default().readdirSync(folder);
    const sanitizeFiles = filesPath.filter((file)=>file.endsWith(".md"));
    const filterSingleFiles = sanitizeFiles.filter((file)=>file.match(/^(?!_)/));
    const singlePages = filterSingleFiles.map((filename)=>{
        const slug = filename.replace(".md", "");
        const pageData = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join(folder, filename), "utf-8");
        const pageDataParsed = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(pageData);
        const frontmatterString = JSON.stringify(pageDataParsed.data);
        const frontmatter = JSON.parse(frontmatterString);
        const content = pageDataParsed.content;
        const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;
        return {
            frontmatter: frontmatter,
            slug: url,
            content: content
        };
    });
    const publishedPages = singlePages.filter((page)=>!page.frontmatter.draft && page.frontmatter.layout !== "404" && page);
    const filterByDate = publishedPages.filter((page)=>new Date(page.frontmatter.date || new Date()) <= new Date());
    return filterByDate;
};
// get a regular page data from many pages, ex: about.md
const getRegularPage = async (slug)=>{
    const publishedPages = getSinglePage("content");
    const pageData = publishedPages.filter((data)=>data.slug === slug);
    const notFoundPage = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync("content/404.md", "utf-8");
    const notFoundDataParsed = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(notFoundPage);
    let frontmatter, content;
    if (pageData[0]) {
        content = pageData[0].content;
        frontmatter = pageData[0].frontmatter;
    } else {
        content = notFoundDataParsed.content;
        frontmatter = notFoundDataParsed.data;
    }
    const mdxContent = await (0,_lib_utils_mdxParser__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(content);
    return {
        frontmatter,
        content,
        mdxContent
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 960:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4818);
/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7752);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6809);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__, rehype_slug__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__]);
([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__, rehype_slug__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// mdx content parser
const parseMDX = async (content)=>{
    const options = {
        mdxOptions: {
            rehypePlugins: [
                rehype_slug__WEBPACK_IMPORTED_MODULE_1__["default"]
            ],
            remarkPlugins: [
                remark_gfm__WEBPACK_IMPORTED_MODULE_2__["default"]
            ]
        }
    };
    return await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_0__.serialize)(content, options);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parseMDX);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;