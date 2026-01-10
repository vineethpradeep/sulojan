exports.id = 837;
exports.ids = [837];
exports.modules = {

/***/ 585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Accordion = ({ title , children , className  })=>{
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `rounded border border-border dark:border-darkmode-border ${className}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "relative block w-full bg-theme-light px-4 py-3 text-left text-dark dark:bg-darkmode-theme-dark dark:text-darkmode-light",
                onClick: ()=>setShow(!show),
                children: [
                    title,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        className: `absolute right-4 top-1/2 m-0 h-4 w-4 -translate-y-1/2 ${show && "rotate-180"}`,
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 512.011 512.011",
                        xmlSpace: "preserve",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fill: "currentColor",
                            d: "M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `px-4 py-3 ${!show && "hidden"}`,
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Accordion);


/***/ }),

/***/ 9199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Button = ({ href , type , rel , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        target: "_blank",
        rel: `noopener noreferrer ${rel ? rel === "follow" ? "" : rel : "nofollow"}`,
        className: `btn me-4 mb-4 ${type === "outline" ? "btn-outline-primary" : "btn-primary"} border-primary hover:text-white hover:no-underline`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 1149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7079);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_2__);



const HighlightedCode = ({ children , language  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1___default()), {
        language: language,
        style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_2__.a11yDark,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HighlightedCode);


/***/ }),

/***/ 6550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Notice({ type , children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `notice ${type} relative mb-8`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "notice-head absolute top-0 left-0 z-10 flex h-[30px] w-full items-center px-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        width: "16px",
                        height: "16px",
                        viewBox: "0 0 512 512",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fill: "#fff",
                            d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "my-0 ml-1.5 text-base capitalize text-white dark:text-white",
                        children: type
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "notice-body my-0 p-3 pt-[40px] dark:text-darkmode-light",
                children: children
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notice);


/***/ }),

/***/ 4703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Tab({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: "tab-item my-0 hidden",
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab);


/***/ }),

/***/ 2758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Tabs({ children  }) {
    //select tabItems
    const tabItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    //change tab item on click
    const handleChangTab = (event, index)=>{
        const tabLinks = [
            ...event.currentTarget.parentElement.children
        ];
        const items = [
            ...tabItemsRef.current.children
        ];
        const activeItem = items.find((item)=>!item.classList.contains("hidden"));
        const activeTabLink = tabLinks.find((item)=>item.classList.contains("active-tab"));
        if (activeItem === items[index]) return;
        activeTabLink.classList.remove("active-tab");
        event.currentTarget.classList.add("active-tab");
        activeItem.classList.add("hidden");
        items[index].classList.remove("hidden");
    };
    //show first tab-item
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let allItems = [
            ...tabItemsRef.current.children
        ];
        allItems[0].classList.remove("hidden");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "mb-0 flex list-none items-center space-x-4 pl-0",
                children: children.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: ` m-0 cursor-pointer rounded px-8 py-3 font-bold  text-dark dark:text-darkmode-light ${index === 0 && "active-tab"}`,
                        onClick: (e)=>handleChangTab(e, index),
                        children: item.props.name
                    }, index))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "mt-1 mb-0 list-none rounded bg-theme-light p-6 dark:bg-darkmode-theme-dark",
                ref: tabItemsRef,
                children: children
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);


/***/ }),

/***/ 7993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Video({ title , width =500 , height ="auto" , src , ...rest }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", {
        className: "overflow-hidden rounded",
        width: width,
        height: height,
        controls: true,
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                src: src.match(/^http/) ? src : `/videos/${src}`,
                type: "video/mp4"
            }),
            title
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);


/***/ }),

/***/ 8135:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1817);
/* harmony import */ var react_lite_youtube_embed_dist_LiteYouTubeEmbed_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9093);
/* harmony import */ var react_lite_youtube_embed_dist_LiteYouTubeEmbed_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lite_youtube_embed_dist_LiteYouTubeEmbed_css__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1__]);
react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Youtube = ({ id , title , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "overflow-hidden rounded",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_1__["default"], {
            id: id,
            title: title,
            ...rest
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Youtube);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 837:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(585);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9199);
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1149);
/* harmony import */ var _Notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6550);
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4703);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2758);
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7993);
/* harmony import */ var _Youtube__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Youtube__WEBPACK_IMPORTED_MODULE_7__]);
_Youtube__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const shortcodes = {
    Button: _Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    Accordion: _Accordion__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
    Video: _Video__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    Tab: _Tab__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    Tabs: _Tabs__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    Notice: _Notice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    Code: _Code__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    Youtube: _Youtube__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shortcodes);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9093:
/***/ (() => {



/***/ })

};
;