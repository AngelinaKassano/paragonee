exports.ids = [45,4,20];
exports.modules = {

/***/ 42:
/***/ (function(module) {

module.exports = JSON.parse("[{\"slug\":\"1\",\"date\":\"20 January 2022\",\"title\":\"Wartales is serious making an army of hogs\",\"imgSrc\":\"/images/blog/blog1.webp\",\"imgLarge\":\"/images/blog/blog-sticky.webp\",\"blogGrid\":\"/images/blog/blog-grid-1.webp\",\"tag\":\"Gamer\",\"slugTag\":\"Gamer\"},{\"slug\":\"2\",\"date\":\"12 Сентября 2024\",\"title\":\"Страница нашей игры доступна в Steam.\",\"imgSrc\":\"/images/blog/blog2.webp\",\"imgLarge\":\"/images/blog/blog-sticky.webp\",\"blogGrid\":\"/images/blog/blog-grid-2.webp\",\"tag\":\"Adventure\",\"slugTag\":\"Adventure\"}]");

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactBanner.vue?vue&type=template&id=d448d336
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div");
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ContactBanner.vue?vue&type=template&id=d448d336

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactBanner.vue?vue&type=script&lang=js
/* harmony default export */ var ContactBannervue_type_script_lang_js = ({
  props: {
    paddingTop: String
  },
  data() {
    return {
      videoBannerBg: "/images/bg/gaming-update.webp",
      btnName: "Contact Now"
    };
  }
});
// CONCATENATED MODULE: ./components/ContactBanner.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ContactBannervue_type_script_lang_js = (ContactBannervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ContactBanner.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactBannervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "55ca40a5"
  
)

/* harmony default export */ var ContactBanner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/BlogListinDetails.vue?vue&type=template&id=69e657ab
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-12 px-0"
  }, _vm._l(_vm.blogData.slice(0, 4), function (blog, index) {
    return _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div class=\"flex sm:items-center flex-col sm:flex-row\">", "</div>", [_vm._ssrNode("<div class=\"lg:w-40 xl:w-52 2xl:w-52 md:w-44 sm:w-37 w-32 mb-7 sm:mb-0 flex-shrink-0\">", "</div>", [_c('n-link', {
      attrs: {
        "to": `/blog/${blog.slug}`
      }
    }, [_c('img', {
      attrs: {
        "src": blog.imgSrc,
        "alt": blog.alt
      }
    })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"xl:ml-9 lg:ml-6 md:ml-9 ml-3 flex flex-col flex-1\">", "</div>", [_vm._ssrNode("<span class=\"text-sm text-white font-exo font-normal mb-2 sm:mb-5\"><i class=\"icofont-calendar text-primary mr-2\"></i>" + _vm._ssrEscape(_vm._s(blog.date)) + "</span> "), _vm._ssrNode("<h2 class=\"text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase font-exo hover:text-primary transition-all mb-2 sm:mb-5 leading-9\">", "</h2>", [_c('n-link', {
      attrs: {
        "to": `/blog/${blog.slug}`
      }
    }, [_vm._v(_vm._s(blog.title))])], 1), _vm._ssrNode(" "), _c('n-link', {
      staticClass: "uppercase font-exo relative pl-12 text-sm text-white transition-all hover:text-primary before:empty-content before:absolute before:h-0.5 before:w-7.5 before:bg-primary before:left-0 before:top-1/2 before:transform before:-translate-y-1/2",
      attrs: {
        "to": `/blog/${blog.slug}`
      }
    }, [_vm._v("Подробнее")])], 2)], 2)]);
  }), 0);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Blog/BlogListinDetails.vue?vue&type=template&id=69e657ab

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/BlogListinDetails.vue?vue&type=script&lang=js

/* harmony default export */ var BlogListinDetailsvue_type_script_lang_js = ({
  data() {
    return {
      blogData: blog
    };
  }
});
// CONCATENATED MODULE: ./components/Blog/BlogListinDetails.vue?vue&type=script&lang=js
 /* harmony default export */ var Blog_BlogListinDetailsvue_type_script_lang_js = (BlogListinDetailsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Blog/BlogListinDetails.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blog_BlogListinDetailsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "11cca1ba"
  
)

/* harmony default export */ var BlogListinDetails = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=template&id=593f1e33
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "bg-cover bg-gray-800",
    staticStyle: {
      "background-image": "url(/images/bg/body-bg2.webp)"
    }
  }, [_c('HeaderSection'), _vm._ssrNode(" "), _c('OffCanvasMobileMenu', {
    class: {
      'show-mobile-menu': _vm.navOpen
    },
    on: {
      "togglenav": function ($event) {
        _vm.navOpen = !_vm.navOpen;
      }
    }
  }), _vm._ssrNode(" "), _c('Breadcrumb', {
    attrs: {
      "BreadcrumbTitle": _vm.BreadcrumbTitle,
      "BreadcrumbSubTitle": _vm.BreadcrumbSubTitle
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"details\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"grid mb-20\">", "</div>", [_vm._ssrNode("<div class=\"single-grid\">", "</div>", [_vm._ssrNode("<div class=\"post-top-area max-w-4xl m-auto text-center mb-16\"><ul class=\"flex mb-8 justify-center text-white\"><li class=\"relative pr-8 content-after after:bg-primary after:absolute after:top-3 after:right-4 after:w-1 after:h-1 after:rounded-full\">\n                              By <span>Harold Leonard</span></li> <li class=\"relative pr-8 content-after after:bg-primary after:absolute after:top-3 after:right-4 after:w-1 after:h-1 after:rounded-full\"><span>" + _vm._ssrEscape(_vm._s(_vm.blogData.date)) + "</span></li> <li><span>5 min read</span></li></ul> <h2 class=\"text-white font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10\">" + _vm._ssrEscape(_vm._s(_vm.blogData.title)) + "</h2></div> "), _vm._ssrNode("<div class=\"post-tags my-8 space-x-3 text-white text-center\">", "</div>", [_c('n-link', {
    staticClass: "px-4 py-2 border-secondary-80 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid inline-block rounded-md",
    attrs: {
      "to": "/"
    }
  }, [_vm._v(" Esports")]), _vm._ssrNode(" "), _c('n-link', {
    staticClass: "px-4 py-2 border-secondary-80 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid inline-block rounded-md",
    attrs: {
      "to": "/"
    }
  }, [_vm._v(" Racing")])], 2), _vm._ssrNode(" <div class=\"text-center\"><img" + _vm._ssrAttr("src", _vm.blogData.imgLarge) + " alt></div> <div class=\"content max-w-4xl m-auto mt-20\"><div class=\"description\"><h4 class=\"text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase transition-all mb-2 sm:mb-5 leading-9\">Make your store stand out from the others by converting more shoppers into buyers!</h4> <p class=\"leading-8\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p class=\"leading-8\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <h4 class=\"text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase transition-all mb-2 sm:mb-5 leading-9 mt-10\">Our company fails the real world test in all kinds of ways.</h4> <p class=\"leading-8\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <img src=\"/images/blog/blog_details_layer.webp\" alt class=\"rounded-3xl\"> <blockquote class=\"py-5 mb-5\"><p class=\"font-bold text-yellow italic lg:text-3xl text-xl\">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500 printer took galley of type scrambled it to make a type specimen book.</p></blockquote> <h4 class=\"text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-lg font-bold uppercase transition-all mb-2 sm:mb-5 leading-9 mt-10\">Our company fails the real world test in all kinds of ways.</h4> <p class=\"leading-8\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <div class=\"social-share-wrap items-center mt-14 py-6 border-b-2 border-t-2 border-secondary-80 flex flex-col sm:flex-row justify-between\"><h3 class=\"share font-bold text-2xl uppercase\">Share This Article:</h3> <ul class=\"post-social-list space-x-2 mt-5 sm:mt-0\"><li class=\"inline-block\"><a href=\"https://www.facebook.com\" class=\"px-3 py-2 border-secondary-80 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid rounded-md\"><i class=\"icofont-facebook\"></i></a></li> <li class=\"inline-block\"><a href=\"https://www.twitter.com\" class=\"px-3 py-2 border-secondary-80 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid rounded-md\"><i class=\"icofont-twitter\"></i></a></li> <li class=\"inline-block\"><a href=\"https://www.instagram.com\" class=\"px-3 py-2 border-secondary-80 bg-secondary-100 hover:bg-primary hover:border-primary transition-all border-2 border-solid rounded-md\"><i class=\"icofont-instagram\"></i></a></li></ul></div></div></div>")], 2)]), _vm._ssrNode(" "), _c('BlogListinDetails'), _vm._ssrNode(" "), _c('Disqus', {
    staticClass: "mt-20",
    attrs: {
      "shortname": "Admin"
    }
  })], 2)]), _vm._ssrNode(" "), _c('ContactBanner', {
    attrs: {
      "paddingTop": _vm.paddingTop
    }
  }), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=template&id=593f1e33

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(42);

// EXTERNAL MODULE: external "vue-disqus"
var external_vue_disqus_ = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=script&lang=js


/* harmony default export */ var _slugvue_type_script_lang_js = ({
  props: ["match"],
  components: {
    HeaderSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 15)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 97)),
    Breadcrumb: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 17)),
    BlogListinDetails: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 64)),
    ContactBanner: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 43)),
    Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16)),
    Disqus: external_vue_disqus_["Disqus"]
  },
  data() {
    return {
      blogData: blog,
      slug: this.$route.params.slug,
      navOpen: false,
      BreadcrumbTitle: "Blog Without Sidebar",
      BreadcrumbSubTitle: "Blog without sidebar",
      paddingTop: "pt-32"
    };
  },
  mounted() {
    this.blogData = blog.find(blog => blog.slug == this.$route.params.slug);
  }
});
// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=script&lang=js
 /* harmony default export */ var blog_slugvue_type_script_lang_js = (_slugvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/blog/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_slugvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a35128f2"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderSection: __webpack_require__(15).default,Breadcrumb: __webpack_require__(17).default,BlogListinDetails: __webpack_require__(64).default,ContactBanner: __webpack_require__(43).default,Footer: __webpack_require__(16).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map