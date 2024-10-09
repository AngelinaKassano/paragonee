exports.ids = [5];
exports.modules = {

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactDetails.vue?vue&type=template&id=097fe3ca
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "lg:mb-32 md:mb-20 mb-15"
  }, [_vm._ssrNode("<div class=\"container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10\">" + _vm._ssrList(_vm.services, function (service, index) {
    return "<div class=\"text-white align-cener bg-no-repeat bg-scroll bg-center bg-cover md:pt-14 md:pb-12 md:px-12 sm:py-14 sm:px-6 py-14 px-10 h-460 pl-15\"" + _vm._ssrStyle(null, {
      backgroundImage: `url(${service.videoBannerBg})`
    }, null) + "><div" + _vm._ssrClass("mb-120 align-center", service.imageposition) + "><img" + _vm._ssrAttr("src", service.imgSrc) + _vm._ssrAttr("alt", service.name) + "></div> <div" + _vm._ssrClass("block", service.contentposition) + "><h3 class=\"text-white font-exo text-xl md:text-3xl font-bold uppercase mb-4\">" + _vm._ssrEscape(_vm._s(service.live)) + "</h3> <span class=\"text-white\"><p class=\"text-lg leading-9\">" + _vm._ssrEscape(_vm._s(service.text)) + "</p> <a" + _vm._ssrAttr("href", service.linkOnehref) + " class=\"block mb-2 last:mb-0 text-lg transition-all hover:text-primary\">" + _vm._ssrEscape(_vm._s(service.linkOne)) + "</a> <a" + _vm._ssrAttr("href", service.linkTwohref) + " class=\"block mb-2 last:mb-0 text-lg transition-all hover:text-primary\">" + _vm._ssrEscape(_vm._s(service.linkTwo)) + "</a></span></div></div>";
  }) + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ContactDetails.vue?vue&type=template&id=097fe3ca

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactDetails.vue?vue&type=script&lang=js
/* harmony default export */ var ContactDetailsvue_type_script_lang_js = ({
  data() {
    return {
      services: []
    };
  }
});
// CONCATENATED MODULE: ./components/ContactDetails.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ContactDetailsvue_type_script_lang_js = (ContactDetailsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ContactDetails.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactDetailsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5e9fcb19"
  
)

/* harmony default export */ var ContactDetails = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact-details.js.map