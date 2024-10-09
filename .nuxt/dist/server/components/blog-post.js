exports.ids = [21,32,56];
exports.modules = {

/***/ 42:
/***/ (function(module) {

module.exports = JSON.parse("[{\"slug\":\"1\",\"date\":\"20 January 2022\",\"title\":\"Wartales is serious making an army of hogs\",\"imgSrc\":\"/images/blog/blog1.webp\",\"imgLarge\":\"/images/blog/blog-sticky.webp\",\"blogGrid\":\"/images/blog/blog-grid-1.webp\",\"tag\":\"Gamer\",\"slugTag\":\"Gamer\"},{\"slug\":\"2\",\"date\":\"12 Сентября 2024\",\"title\":\"Страница нашей игры доступна в Steam.\",\"imgSrc\":\"/images/blog/blog2.webp\",\"imgLarge\":\"/images/blog/blog-sticky.webp\",\"blogGrid\":\"/images/blog/blog-grid-2.webp\",\"tag\":\"Adventure\",\"slugTag\":\"Adventure\"}]");

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/TitleSection.vue?vue&type=template&id=6e4a2a40
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center lg:mb-15 md:mb-12 mb-8"
  }, [_vm._ssrNode((_vm.title ? "<h2 class=\"text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto\">" + _vm._ssrEscape(" " + _vm._s(_vm.title) + " ") + "</h2>" : "<!---->") + " " + (_vm.text ? "<p class=\"max-w-lg text-gray-100 mx-auto text-base sm:text-lg leading-8 mt-3\">" + _vm._ssrEscape(" " + _vm._s(_vm.text) + " ") + "</p>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Title/TitleSection.vue?vue&type=template&id=6e4a2a40

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/TitleSection.vue?vue&type=script&lang=js
/* harmony default export */ var TitleSectionvue_type_script_lang_js = ({
  props: {
    title: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
    }
  }
});
// CONCATENATED MODULE: ./components/Title/TitleSection.vue?vue&type=script&lang=js
 /* harmony default export */ var Title_TitleSectionvue_type_script_lang_js = (TitleSectionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Title/TitleSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Title_TitleSectionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "47f9caa8"
  
)

/* harmony default export */ var TitleSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPost.vue?vue&type=template&id=4fe87e5a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container pt-32"
  }, [_c('TitleSection', {
    attrs: {
      "title": _vm.title,
      "text": _vm.text
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-12 sm:px-0 px-10\">", "</div>", _vm._l(_vm.blogData.slice(0, 4), function (blog, index) {
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
  }), 0)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/BlogPost.vue?vue&type=template&id=4fe87e5a

// EXTERNAL MODULE: ./data/blog.json
var blog = __webpack_require__(42);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogPost.vue?vue&type=script&lang=js

/* harmony default export */ var BlogPostvue_type_script_lang_js = ({
  components: {
    TitleSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 44))
  },
  data() {
    return {
      blogData: blog,
      title: "Paragone Bomb ",
      text: "Шутер с видом сверху, в котором представлены различные враги, оружие и способности для нашего главного героя. "
    };
  }
});
// CONCATENATED MODULE: ./components/BlogPost.vue?vue&type=script&lang=js
 /* harmony default export */ var components_BlogPostvue_type_script_lang_js = (BlogPostvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BlogPost.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogPostvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "9cc9008e"
  
)

/* harmony default export */ var BlogPost = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TitleSection: __webpack_require__(44).default})


/***/ })

};;
//# sourceMappingURL=blog-post.js.map