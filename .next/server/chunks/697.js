"use strict";
exports.id = 697;
exports.ids = [697];
exports.modules = {

/***/ 697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1360);
/* harmony import */ var _partials_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9183);
/* harmony import */ var _partials_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5958);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__, _partials_Footer__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__, _partials_Footer__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Base = ({ title , meta_title , description , image , noindex , canonical , children  })=>{
    const { meta_image , meta_author , meta_description  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.metadata;
    const { base_url  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site.title)
                    }),
                    canonical && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: canonical,
                        itemProp: "url"
                    }),
                    noindex && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "robots",
                        content: "noindex,nofollow"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        content: meta_author
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site.title)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: `${base_url}/${router.asPath.replace("/", "")}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(meta_title ? meta_title : title ? title : _config_config_json__WEBPACK_IMPORTED_MODULE_1__.site.title)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_2__/* .plainify */ .ab)(description ? description : meta_description)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: `${base_url}${image ? image : meta_image}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: `${base_url}${image ? image : meta_image}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_Header__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_partials_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable jsx-a11y/alt-text */ 

const ImageFallback = (props)=>{
    const { src , fallback , width , height , alt , className , priority , ...rest } = props;
    // For static export with basePath, prepend the basePath to relative image paths
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    const processedSrc = src.startsWith("/") && !src.startsWith("//") && !src.startsWith("http") ? `${basePath}${src}` : src;
    const [imgSrc, setImgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(processedSrc);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setImgSrc(processedSrc);
    }, [
        processedSrc
    ]);
    // Use regular img tag for static export to avoid Next.js Image component issues
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        ...rest,
        src: imgSrc,
        width: width,
        height: height,
        alt: alt,
        className: className,
        onError: ()=>{
            setImgSrc(fallback);
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageFallback);


/***/ }),

/***/ 5813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ImageFallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6626);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






const Logo = ({ src  })=>{
    // destructuring items from config object
    const { logo , logo_white , logo_width , logo_height , logo_text , title  } = _config_config_json__WEBPACK_IMPORTED_MODULE_2__.site;
    const { theme , resolvedTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>setMounted(true), []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: "/",
        className: "navbar-brand",
        children: src || logo ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageFallback__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            width: logo_width.replace("px", "") * 2,
            height: logo_height.replace("px", "") * 2,
            src: mounted && (theme === "dark" || resolvedTheme === "dark") ? logo_white : logo,
            alt: title,
            priority: true,
            style: {
                height: logo_height.replace("px", "") + "px",
                width: logo_width.replace("px", "") + "px"
            },
            className: "m-auto"
        }) : logo_text ? logo_text : title
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 8342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9989);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__);


const Social = ({ source , className  })=>{
    const { facebook , stackoverflow , twitter , instagram , youtube , linkedin , github , gitlab , discord , slack , medium , codepen , bitbucket , dribbble , behance , pinterest , soundcloud , tumblr , reddit , vk , whatsapp , snapchat , vimeo , tiktok , foursquare , rss , email , phone , address , skype , website  } = source;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: className,
        children: [
            facebook && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "facebook",
                    href: `${facebook}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoFacebook, {})
                })
            }),
            stackoverflow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "stackoverflow",
                    href: `${stackoverflow}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoStackoverflow, {})
                })
            }),
            twitter && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "twitter",
                    href: `${twitter}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoTwitter, {})
                })
            }),
            instagram && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "instagram",
                    href: `${instagram}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoInstagram, {})
                })
            }),
            youtube && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "youtube",
                    href: `${youtube}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoYoutube, {})
                })
            }),
            linkedin && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "linkedin",
                    href: `${linkedin}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoLinkedin, {})
                })
            }),
            github && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "github",
                    href: `${github}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoGithub, {})
                })
            }),
            gitlab && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "gitlab",
                    href: `${gitlab}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoGitlab, {})
                })
            }),
            discord && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "discord",
                    href: `${discord}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoDiscord, {})
                })
            }),
            slack && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "slack",
                    href: `${slack}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoSlack, {})
                })
            }),
            medium && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "medium",
                    href: `${medium}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoMedium, {})
                })
            }),
            codepen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "codepen",
                    href: `${codepen}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoCodepen, {})
                })
            }),
            bitbucket && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "bitbucket",
                    href: `${bitbucket}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoBitbucket, {})
                })
            }),
            dribbble && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "dribbble",
                    href: `${dribbble}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoDribbble, {})
                })
            }),
            behance && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "behance",
                    href: `${behance}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoBehance, {})
                })
            }),
            pinterest && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "pinterest",
                    href: `${pinterest}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoPinterest, {})
                })
            }),
            soundcloud && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "soundcloud",
                    href: `${soundcloud}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoSoundcloud, {})
                })
            }),
            tumblr && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "tumblr",
                    href: `${tumblr}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoTumblr, {})
                })
            }),
            reddit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "reddit",
                    href: `${reddit}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoReddit, {})
                })
            }),
            vk && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "vk",
                    href: `${vk}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoVk, {})
                })
            }),
            whatsapp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "whatsapp",
                    href: `${whatsapp}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoWhatsapp, {})
                })
            }),
            snapchat && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "snapchat",
                    href: `${snapchat}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoSnapchat, {})
                })
            }),
            vimeo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "vimeo",
                    href: `${vimeo}/#!`,
                    target: "_blank",
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoVimeo, {})
                })
            }),
            tiktok && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "tiktok",
                    href: `${tiktok}/#!`,
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoTiktok, {})
                })
            }),
            foursquare && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "foursquare",
                    href: `${foursquare}/#!`,
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoFoursquare, {})
                })
            }),
            skype && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "skype",
                    href: `${skype}/#!`,
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoSkype, {})
                })
            }),
            website && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "website",
                    href: `${website}/#!`,
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoGlobeOutline, {})
                })
            }),
            rss && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "rss feed",
                    href: `${rss}/#!`,
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLogoRss, {})
                })
            }),
            email && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "email",
                    href: `mailto:${email}`,
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoMail, {})
                })
            }),
            phone && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "telephone",
                    href: `tel:${phone}`,
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoCall, {})
                })
            }),
            address && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                className: "inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    "aria-label": "location",
                    href: `${address}/#!`,
                    onClick: (e)=>{
                        e.preventDefault();
                    },
                    target: "_blank",
                    rel: "noopener noreferrer nofollow",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_1__.IoLocation, {})
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Social);


/***/ }),

/***/ 9183:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Social__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8342);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6626);
/* harmony import */ var _config_menu_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9012);
/* harmony import */ var _config_social_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1639);
/* harmony import */ var _layouts_components_ImageFallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(297);
/* harmony import */ var _layouts_components_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5813);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1360);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_7__]);
_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Footer = ()=>{
    const { copyright , footer_content  } = _config_config_json__WEBPACK_IMPORTED_MODULE_2__.params;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "relative left-1/2 right-1/2 -mx-[50vw] mt-12 w-screen overflow-hidden pt-[70px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_components_ImageFallback__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                src: "/images/footer-bg-shape.svg",
                alt: "footer background",
                fill: true,
                className: "absolute inset-0 -z-[1] h-full w-full object-fill"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "section relative z-10 text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-6 inline-flex",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_components_Logo__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    }),
                    (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_7__/* .markdownify */ .gI)(footer_content, "p", "max-w-[638px] mx-auto"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "mb-12 mt-6 flex-wrap space-x-2 lg:space-x-4",
                        children: _config_menu_json__WEBPACK_IMPORTED_MODULE_3__.footer.map((menu)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "inline-block",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                    href: `${menu.url}/#!`,
                                    onClick: (e)=>e.preventDefault(),
                                    className: "p-2 font-bold text-dark hover:text-primary dark:text-darkmode-light lg:p-4",
                                    children: menu.name
                                })
                            }, menu.name))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "inline-flex",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Social__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            source: _config_social_json__WEBPACK_IMPORTED_MODULE_4__,
                            className: "socials mb-12 justify-center"
                        })
                    }),
                    (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_7__/* .markdownify */ .gI)(copyright, "p")
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ partials_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./layouts/components/Logo.js
var Logo = __webpack_require__(5813);
// EXTERNAL MODULE: ./config/menu.json
var menu = __webpack_require__(9012);
// EXTERNAL MODULE: ./config/social.json
var social = __webpack_require__(1639);
// EXTERNAL MODULE: ./layouts/components/Social.js
var Social = __webpack_require__(8342);
// EXTERNAL MODULE: ./config/config.json
var config = __webpack_require__(6626);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./layouts/components/ThemeSwitcher.js




const ThemeSwitcher = ()=>{
    const { theme_switcher  } = config.settings;
    const [mounted, setMounted] = (0,external_react_.useState)(false);
    const { theme , setTheme , resolvedTheme  } = (0,external_next_themes_.useTheme)();
    (0,external_react_.useEffect)(()=>setMounted(true), []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: theme_switcher && /*#__PURE__*/ jsx_runtime_.jsx("button", {
            "aria-label": "Toggle Theme",
            type: "button",
            className: "ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",
            onClick: ()=>setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"),
            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                className: "text-gray-900 dark:text-gray-100",
                children: mounted && (theme === "dark" || resolvedTheme === "dark") ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    fillRule: "evenodd",
                    d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                    clipRule: "evenodd"
                }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                })
            })
        })
    });
};
/* harmony default export */ const components_ThemeSwitcher = (ThemeSwitcher);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(9989);
;// CONCATENATED MODULE: ./layouts/partials/SearchModal.js




const SearchModal = ({ searchModal , setSearchModal  })=>{
    const router = (0,router_.useRouter)();
    const [input, setInput] = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        if (searchModal) {
            document.getElementById("searchModal").focus();
            document.addEventListener("keydown", (e)=>{
                if (e.key === "Enter") {
                    router.push({
                        pathname: "/search",
                        query: {
                            key: input
                        }
                    });
                    setSearchModal(false);
                }
                if (e.key === "Escape") {
                    setSearchModal(false);
                }
            });
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `search-modal ${searchModal ? "open" : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>setSearchModal(false),
                className: "search-close",
                children: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoCloseCircleOutline, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "text",
                className: "form-input bg-body placeholder:text-base dark:bg-darkmode-body",
                id: "searchModal",
                placeholder: "Type and hit enter...",
                onChange: (e)=>setInput(e.target.value)
            })
        ]
    });
};
/* harmony default export */ const partials_SearchModal = (SearchModal);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./layouts/partials/Header.js











const Header = ()=>{
    // distructuring the main menu from menu object
    const { main  } = menu;
    // states declaration
    const [searchModal, setSearchModal] = (0,external_react_.useState)(false);
    const [showMenu, setShowMenu] = (0,external_react_.useState)(false);
    // Router
    const router = (0,router_.useRouter)();
    //stop scrolling when nav is open
    (0,external_react_.useEffect)(()=>{
        if (showMenu) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }
    }, [
        showMenu
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "header",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "navbar container px-1 sm:px-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "order-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center space-x-4 xl:space-x-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `collapse-menu ${!showMenu && "translate-x-full"} lg:flex lg:translate-x-0`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "absolute right-6 top-11 lg:hidden",
                                        onClick: ()=>setShowMenu(false),
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            className: "h-4 w-4 fill-current",
                                            viewBox: "0 0 20 20",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                    children: "Menu Close"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                                    points: "11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2",
                                                    transform: "rotate(45 10 10)"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        id: "nav-menu",
                                        className: "navbar-nav w-full md:w-auto md:space-x-1 lg:flex xl:space-x-2",
                                        children: main.map((menu, i)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
                                                children: menu.hasChildren ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: "nav-item nav-dropdown group relative",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: `nav-link ${menu.children.map((c)=>c.url).includes(router.asPath) && "active"} inline-flex items-center`,
                                                            children: [
                                                                menu.name,
                                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                    className: "h-4 w-4 fill-current",
                                                                    viewBox: "0 0 20 20",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                            className: "nav-dropdown-list hidden transition-all duration-300 group-hover:top-[46px] group-hover:block md:invisible md:absolute md:top-[60px] md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100",
                                                            children: menu.children.map((child, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                    className: "nav-dropdown-item",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: child.url,
                                                                        className: `nav-dropdown-link block ${router.asPath === child.url && "active"}`,
                                                                        children: child.name
                                                                    })
                                                                }, `children-${i}`))
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "nav-item",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: menu.url,
                                                        className: `nav-link block ${router.asPath === menu.url && "active"}`,
                                                        children: menu.name
                                                    })
                                                })
                                            }, `menu-${i}`))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Social/* default */.Z, {
                                        source: social,
                                        className: "socials"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitcher, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "search-icon",
                                onClick: ()=>{
                                    setSearchModal(true);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoSearch, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>setShowMenu(!showMenu),
                                className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white lg:hidden",
                                children: showMenu ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    className: "h-4 w-4 fill-current",
                                    viewBox: "0 0 20 20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                            children: "Menu Close"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("polygon", {
                                            points: "11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2",
                                            transform: "rotate(45 10 10)"
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                    className: "h-4 w-4 fill-current",
                                    viewBox: "0 0 20 20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                            children: "Menu Open"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(partials_SearchModal, {
                        searchModal: searchModal,
                        setSearchModal: setSearchModal
                    })
                ]
            }),
            showMenu && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-backdrop absolute top-0 left-0 h-[100vh] w-full bg-black/50 lg:hidden"
            })
        ]
    });
};
/* harmony default export */ const partials_Header = (Header);


/***/ }),

/***/ 1360:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OI": () => (/* binding */ humanize),
/* harmony export */   "ab": () => (/* binding */ plainify),
/* harmony export */   "gI": () => (/* binding */ markdownify),
/* harmony export */   "lV": () => (/* binding */ slugify)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1578);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8974);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([github_slugger__WEBPACK_IMPORTED_MODULE_1__, marked__WEBPACK_IMPORTED_MODULE_2__]);
([github_slugger__WEBPACK_IMPORTED_MODULE_1__, marked__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// Configure marked to add target="_blank" to all links
const renderer = new marked__WEBPACK_IMPORTED_MODULE_2__.marked.Renderer();
renderer.link = (href, title, text)=>{
    const titleAttr = title ? ` title="${title}"` : "";
    return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer">${text}</a>`;
};
marked__WEBPACK_IMPORTED_MODULE_2__.marked.setOptions({
    renderer: renderer
});
// slugify
const slugify = (content)=>{
    if (!content) return null;
    return (0,github_slugger__WEBPACK_IMPORTED_MODULE_1__.slug)(content);
};
// markdownify
const markdownify = (content, tag, className)=>{
    if (!content) return null;
    const Tag = tag;
    return tag ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
        className: className,
        dangerouslySetInnerHTML: {
            __html: tag === "div" ? marked__WEBPACK_IMPORTED_MODULE_2__.marked.parse(content) : marked__WEBPACK_IMPORTED_MODULE_2__.marked.parseInline(content)
        }
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: className,
        dangerouslySetInnerHTML: {
            __html: marked__WEBPACK_IMPORTED_MODULE_2__.marked.parseInline(content)
        }
    });
};
// humanize
const humanize = (content)=>{
    if (!content) return null;
    return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/^[a-z]/, function(m) {
        return m.toUpperCase();
    });
};
// plainify
const plainify = (content)=>{
    if (!content) return null;
    const mdParsed = marked__WEBPACK_IMPORTED_MODULE_2__.marked.parseInline(String(content));
    const filterBrackets = mdParsed.replace(/<\/?[^>]+(>|$)/gm, "");
    const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
    const stripHTML = htmlEntityDecoder(filterSpaces);
    return stripHTML;
};
// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities)=>{
    let entityList = {
        "&nbsp;": " ",
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&#39;": "'"
    };
    let htmlWithoutEntities = htmlWithEntities.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g, (entity)=>{
        return entityList[entity];
    });
    return htmlWithoutEntities;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9012:
/***/ ((module) => {

module.exports = JSON.parse('{"main":[{"name":"Home","url":"/"},{"name":"About","url":"/about"},{"name":"Contact","url":"/contact"}],"footer":[{"name":"Home","url":"/"},{"name":"About","url":"/about"},{"name":"Contact","url":"/contact"}]}');

/***/ }),

/***/ 1639:
/***/ ((module) => {

module.exports = JSON.parse('{"facebook":"https://facebook.com/","stackoverflow":"https://stackoverflow.com/","twitter":"https://twitter.com/","instagram":"https://instagram.com/","youtube":"","linkedin":"https://linkedin.com/","github":"https://github.com/","gitlab":"","discord":"","slack":"","medium":"","codepen":"","bitbucket":"","dribbble":"","behance":"","pinterest":"","soundcloud":"","tumblr":"","reddit":"","vk":"","whatsapp":"","snapchat":"","vimeo":"","tiktok":"","foursquare":"","rss":"","email":"","phone":"","address":"","skype":"","website":""}');

/***/ })

};
;