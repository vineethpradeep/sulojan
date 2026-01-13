"use strict";
exports.id = 875;
exports.ids = [875];
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
/* harmony import */ var _components_PostComments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8545);
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















const { meta_author  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .metadata */ .Pu;
const PostSingle = ({ frontmatter ={} , content ="" , mdxContent =null , slug ="" , posts =[] , allCategories =[] , relatedPosts =[] , comments =[]  })=>{
    let { description , title , date , image , categories =[]  } = frontmatter || {};
    description = description ? description : content.slice(0, 120);
    const { theme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_9__.useTheme)();
    const author = frontmatter.author ? frontmatter.author : meta_author;
    // Local copy so we don't modify global config.
    let disqusConfig = _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .disqus.settings */ .PF.Xd;
    disqusConfig.identifier = frontmatter.disqusId ? frontmatter.disqusId : _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .settings.blog_folder */ .Xd.blog_folder + "/" + slug;
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
                                                        className: "absolute left-2 top-3 flex flex-wrap items-center",
                                                        children: Array.isArray(categories) && categories.map((tag, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
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
                                            _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .settings.InnerPaginationOptions.enableTop */ .Xd.InnerPaginationOptions.enableTop && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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
                                            _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .settings.InnerPaginationOptions.enableBottom */ .Xd.InnerPaginationOptions.enableBottom && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_components_InnerPagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                posts: posts,
                                                date: date
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mt-16",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostComments__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            initialComments: comments
                                        })
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
                            children: Array.isArray(relatedPosts) && relatedPosts.slice(0, 3).map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
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

/***/ 8545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PostComments)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./layouts/components/CommentForm.js


function CommentForm({ onSubmit  }) {
    const [form, setForm] = (0,external_react_.useState)({
        name: "",
        email: "",
        comment: ""
    });
    const submit = (e)=>{
        e.preventDefault();
        onSubmit({
            id: Date.now(),
            name: form.name,
            date: new Date().toISOString(),
            comment: form.comment,
            pending: true
        });
        setForm({
            name: "",
            email: "",
            comment: ""
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: submit,
        className: "space-y-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                required: true,
                placeholder: "Your name",
                className: "form-input w-full",
                value: form.name,
                onChange: (e)=>setForm({
                        ...form,
                        name: e.target.value
                    })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                required: true,
                type: "email",
                placeholder: "Your email",
                className: "form-input w-full",
                value: form.email,
                onChange: (e)=>setForm({
                        ...form,
                        email: e.target.value
                    })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                required: true,
                placeholder: "Your comment",
                rows: "4",
                className: "form-textarea w-full",
                value: form.comment,
                onChange: (e)=>setForm({
                        ...form,
                        comment: e.target.value
                    })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "btn btn-primary",
                children: "Post Comment"
            })
        ]
    });
}

// EXTERNAL MODULE: ./lib/utils/dateFormat.js
var dateFormat = __webpack_require__(4996);
;// CONCATENATED MODULE: ./layouts/components/CommentItem.js


function CommentItem({ comment  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "rounded-lg border p-4",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex gap-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 font-bold",
                    children: comment.name?.charAt(0)
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-semibold",
                            children: comment.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-xs text-gray-500",
                            children: (0,dateFormat/* default */.Z)(comment.date)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mt-2",
                            children: comment.comment
                        }),
                        comment.pending && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mt-2 text-sm text-yellow-600",
                            children: "Your comment is awaiting moderation."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "mt-2 text-sm text-primary",
                            children: "Reply"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./layouts/components/PostComments.js




function PostComments({ initialComments =[]  }) {
    const [comments, setComments] = (0,external_react_.useState)(initialComments);
    const addComment = (comment)=>{
        setComments([
            comment,
            ...comments
        ]);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-16",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: "mb-6 text-2xl font-bold",
                children: [
                    "Comments (",
                    comments.length,
                    ")"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CommentForm, {
                onSubmit: addComment
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-8 space-y-6",
                children: comments.map((c)=>/*#__PURE__*/ jsx_runtime_.jsx(CommentItem, {
                        comment: c
                    }, c.id))
            })
        ]
    });
}


/***/ }),

/***/ 4115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ getPostComments)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


function getPostComments(slug) {
    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "content/comments", `${slug}.md`);
    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(filePath)) return [];
    const raw = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, "utf-8");
    return raw.split("- name:").filter(Boolean).map((block, index)=>({
            id: index + 1,
            name: block.match(/^(.*)/)?.[1]?.trim() || "Anonymous",
            date: block.match(/date:(.*)/)?.[1]?.trim() || "",
            comment: block.match(/comment:(.*)/)?.[1]?.trim() || "",
            pending: true
        })).reverse();
}


/***/ })

};
;