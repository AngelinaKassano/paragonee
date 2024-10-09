exports.ids = [19];
exports.modules = {

/***/ 42:
/***/ (function(module) {

module.exports = JSON.parse("[{\"slug\":\"1\",\"date\":\"20 January 2022\",\"title\":\"Wartales is serious making an army of hogs\",\"imgSrc\":\"/images/blog/blog1.webp\",\"imgLarge\":\"/images/blog/blog-sticky.webp\",\"blogGrid\":\"/images/blog/blog-grid-1.webp\",\"tag\":\"Gamer\",\"slugTag\":\"Gamer\"},{\"slug\":\"2\",\"date\":\"12 Сентября 2024\",\"title\":\"Страница нашей игры доступна в Steam.\",\"imgSrc\":\"/images/blog/blog2.webp\",\"imgLarge\":\"/images/blog/blog-sticky.webp\",\"blogGrid\":\"/images/blog/blog-grid-2.webp\",\"tag\":\"Adventure\",\"slugTag\":\"Adventure\"}]");

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/BlogListDynamic.vue?vue&type=template&id=0f1e3df0
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', _vm._l(_vm.blogData, function (blog, index) {
    return _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<div class=\"flex sm:items-center flex-col sm:flex-row mt-7\">", "</div>", [_vm._ssrNode("<div class=\"lg:w-40 xl:w-52 2xl:w-52 md:w-44 sm:w-37 w-32 mb-7 sm:mb-0 flex-shrink-0\">", "</div>", [_c('n-link', {
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

// CONCATENATED MODULE: ./components/Blog/BlogListDynamic.vue?vue&type=template&id=0f1e3df0

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/BlogListDynamic.vue?vue&type=script&lang=js

/* harmony default export */ var BlogListDynamicvue_type_script_lang_js = ({
  data() {
    return {
      blogData: blog
    };
  }
});
// CONCATENATED MODULE: ./components/Blog/BlogListDynamic.vue?vue&type=script&lang=js
 /* harmony default export */ var Blog_BlogListDynamicvue_type_script_lang_js = (BlogListDynamicvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Blog/BlogListDynamic.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blog_BlogListDynamicvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "00055cbc"
  
)

/* harmony default export */ var BlogListDynamic = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-list-dynamic.js.map