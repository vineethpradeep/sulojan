"use strict";
exports.id = 558;
exports.ids = [558];
exports.modules = {

/***/ 4689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);



function CustomForm({ status , message , onValidated  }) {
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const resetForm = ()=>setEmail("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (email && email.includes("@")) {
            if (onValidated) {
                onValidated({
                    EMAIL: email
                });
                resetForm();
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                action: "#",
                className: "py-6",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "relative w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "newsletter-email",
                                name: "email",
                                type: "email",
                                autoComplete: "email",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                placeholder: "Enter your email address",
                                required: true,
                                className: " form-input relative z-0 h-12 w-full rounded-3xl border-none bg-theme-light px-5 pr-12 text-dark placeholder:text-xs dark:bg-darkmode-theme-dark "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaEnvelope, {
                                className: " pointer-events-none absolute right-4 top-1/2 z-10 -translate-y-1/2 text-xl text-dark/60 dark:text-white/60 "
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn btn-primary mt-4 block w-full",
                        type: "submit",
                        children: "Sign In"
                    })
                ]
            }),
            status === "sending" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-4 text-primary",
                children: "sending..."
            }),
            status === "error" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-4 text-red-700",
                dangerouslySetInnerHTML: {
                    __html: message
                }
            }),
            status === "success" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-4 text-green-700",
                children: "Subscribed!"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomForm);


/***/ }),

/***/ 5393:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var _config_social_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1639);
/* harmony import */ var _layouts_components_ImageFallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(297);
/* harmony import */ var _layouts_components_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5813);
/* harmony import */ var _layouts_components_NewsLetterForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4689);
/* harmony import */ var _layouts_components_Social__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8342);
/* harmony import */ var _lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4996);
/* harmony import */ var _lib_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4928);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1360);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3286);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_8__]);
_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const { blog_folder  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .settings */ .Xd;
const { about , featured_posts , newsletter  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .widgets */ .DA;
const Sidebar = ({ posts , categories , className  })=>{
    const sortPostByDate = (0,_lib_utils_sortFunctions__WEBPACK_IMPORTED_MODULE_13__/* .sortByDate */ .d)(posts);
    const featuredPosts = sortPostByDate.filter((post)=>post.frontmatter.featured);
    const [showRecent, setShowRecent] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(true);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
        className: `${className} px-0 lg:col-4 lg:px-6`,
        children: [
            categories.enable && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative rounded border border-border p-6 dark:border-darkmode-border",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "section-title mb-12 text-center",
                        children: featured_posts.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        children: categories.map((category, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: `relative mb-2 flex items-center justify-between pl-6 text-[16px] font-bold capitalize text-dark dark:text-darkmode-light ${i !== categories.length - 1 && "border-b border-border  dark:border-darkmode-border"}`,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        className: "absolute left-0 top-2.5",
                                        width: "20px",
                                        height: "20px",
                                        viewBox: "0 0 20 20",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M11.7318 9.35984C12.0854 8.93556 12.7159 8.87824 13.1402 9.2318C13.5645 9.58537 13.6218 10.2159 13.2682 10.6402L8.26825 16.6402C7.91468 17.0645 7.28412 17.1218 6.85984 16.7682C6.43556 16.4147 6.37824 15.7841 6.7318 15.3598L11.7318 9.35984Z",
                                                fill: "#2ba283"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M6.7318 4.64021C6.37824 4.21593 6.43556 3.58537 6.85984 3.2318C7.28412 2.87824 7.91468 2.93556 8.26825 3.35984L13.2682 9.35984C13.6218 9.78412 13.5645 10.4147 13.1402 10.7682C12.7159 11.1218 12.0854 11.0645 11.7318 10.6402L6.7318 4.64021Z",
                                                fill: "#2ba283"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                        className: "py-2",
                                        href: `/categories/${category.name}`,
                                        children: [
                                            category.name.replace("-", " "),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "absolute right-0 top-1/2 -translate-y-1/2 text-[10px] text-gray-500",
                                                children: category.posts
                                            })
                                        ]
                                    })
                                ]
                            }, i))
                    })
                ]
            }),
            featured_posts.enable && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "rounded border border-border p-6 dark:border-darkmode-border",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "section-title mb-12 text-center",
                        children: "Featured"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-12 flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `btn px-5 py-2 ${showRecent ? "btn-outline-primary" : "btn-primary"}`,
                                onClick: ()=>setShowRecent(false),
                                children: "Featured"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `btn ml-3  px-5 py-2 ${showRecent ? "btn-primary" : "btn-outline-primary"}`,
                                onClick: ()=>setShowRecent(true),
                                children: "Recent"
                            })
                        ]
                    }),
                    showRecent ? sortPostByDate.slice(0, featured_posts.showPost).map((post, i, arr)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `flex items-center ${i !== arr.length - 1 && "mb-6 border-b border-border pb-6 dark:border-darkmode-border"}`,
                            children: [
                                post.frontmatter.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_components_ImageFallback__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    className: "mr-3 h-[85px] w-[85px] rounded-full object-cover",
                                    src: post.frontmatter.image,
                                    alt: post.frontmatter.title,
                                    width: 105,
                                    height: 85
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "h5 mb-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                href: `/${blog_folder}/${post.slug}`,
                                                className: "block hover:text-primary",
                                                children: post.frontmatter.title
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "inline-flex items-center font-secondary text-xs",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaRegCalendar, {
                                                    className: "mr-1.5"
                                                }),
                                                (0,_lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(post.frontmatter.date)
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, `key-${i}`)) : featuredPosts.slice(0, featured_posts.showPost).map((post, i, arr)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `flex items-center pb-6 ${i !== arr.length - 1 && "mb-6 border-b dark:border-b-darkmode-border"}`,
                            children: [
                                post.frontmatter.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_components_ImageFallback__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    className: "mr-3 h-[85px] w-[85px] rounded-full object-cover",
                                    src: post.frontmatter.image,
                                    alt: post.frontmatter.title,
                                    width: 105,
                                    height: 85
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "h5 mb-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                href: `/${blog_folder}/${post.slug}`,
                                                className: "block hover:text-primary",
                                                children: post.frontmatter.title
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "inline-flex items-center font-secondary text-xs",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_11__.FaRegCalendar, {
                                                    className: "mr-1.5"
                                                }),
                                                (0,_lib_utils_dateFormat__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(post.frontmatter.date)
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, `key-${i}`))
                ]
            }),
            newsletter.enable && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-6 rounded border border-border p-6 text-center dark:border-darkmode-border",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "section-title",
                        children: newsletter.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-10 text-xs",
                        children: newsletter.content
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_12___default()), {
                        url: newsletter.malichip_url,
                        render: ({ subscribe , status , message  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_components_NewsLetterForm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                onValidated: (formData)=>subscribe(formData),
                                status: status,
                                message: message
                            })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-xs",
                        children: [
                            "By Singing Up, You Agree To",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                                href: newsletter.privacy_policy_page,
                                onClick: (e)=>{
                                    e.preventDefault();
                                },
                                className: "ml-1 text-primary",
                                children: "Privacy Policy"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 933:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ getTaxonomy)
/* harmony export */ });
/* harmony import */ var _lib_contentParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4879);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1360);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_contentParser__WEBPACK_IMPORTED_MODULE_0__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__]);
([_lib_contentParser__WEBPACK_IMPORTED_MODULE_0__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// get all taxonomies from frontmatter
const getTaxonomy = (folder, name)=>{
    const singlePages = (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_0__/* .getSinglePage */ .il)(folder);
    const taxonomyPages = singlePages.map((page)=>page.frontmatter[name]);
    let taxonomies = [];
    for(let i = 0; i < taxonomyPages.length; i++){
        if (taxonomyPages[i] === undefined) {
            continue;
        }
        const isArray = Array.isArray(taxonomyPages[i]);
        const categoryArray = isArray ? taxonomyPages[i] : [
            taxonomyPages[i]
        ];
        for(let j = 0; j < categoryArray.length; j++){
            taxonomies.push((0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_1__/* .slugify */ .lV)(categoryArray[j]));
        }
    }
    const taxonomy = [
        ...new Set(taxonomies)
    ];
    return taxonomy;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

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


/***/ })

};
;