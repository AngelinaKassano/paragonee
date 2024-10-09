exports.ids = [0];
exports.modules = {

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header/OffCanvasMobileMenu.vue?vue&type=template&id=4f8cd21a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "popup-mobile-menu popup-mobile-visiable",
    attrs: {
      "id": "offcanvas-menu"
    }
  }, [_vm._ssrNode("<div class=\"mobile-menu-overlay\"></div> "), _vm._ssrNode("<div class=\"bg-white w-300 h-full left-0 top-0 absolute text-left transition-all py-8 px-5 overflow-y-scroll\">", "</div>", [_vm._ssrNode("<div class=\"flex justify-between pb-8\">", "</div>", [_c('NuxtLink', {
    staticClass: "signup-btn transition-all group",
    staticStyle: {
      "background-image": "url(/images/others/btn-signup.webp)"
    },
    attrs: {
      "to": "/signup"
    }
  }, [_c('img', {
    staticClass: "w-4 h-4 ml-2 group-hover:ml-3 transition-all",
    attrs: {
      "src": "/images/icon/arrrow-icon2.webp",
      "alt": "Arrow Icon"
    }
  })]), _vm._ssrNode(" <button class=\"icofont-close-line z-999 font-bold text-3xl text-black hover:text-primary transition-all transform hover:rotate-90\"></button>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"menu-content\">", "</div>", [_c('MobileNavigation')], 1)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Header/OffCanvasMobileMenu.vue?vue&type=template&id=4f8cd21a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header/OffCanvasMobileMenu.vue?vue&type=script&lang=js
/* harmony default export */ var OffCanvasMobileMenuvue_type_script_lang_js = ({
  components: {
    MobileNavigation: () => __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, 101))
  },
  methods: {
    // offcanvas menu close
    mobiletoggleClass(addRemoveClass, className) {
      const el = document.querySelector('#offcanvas-menu');
      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/Header/OffCanvasMobileMenu.vue?vue&type=script&lang=js
 /* harmony default export */ var Header_OffCanvasMobileMenuvue_type_script_lang_js = (OffCanvasMobileMenuvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header/OffCanvasMobileMenu.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Header_OffCanvasMobileMenuvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c136a960"
  
)

/* harmony default export */ var OffCanvasMobileMenu = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=header-off-canvas-mobile-menu.js.map