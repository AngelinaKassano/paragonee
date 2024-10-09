exports.ids = [27,32];
exports.modules = {

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

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GamingWorld.vue?vue&type=template&id=19fa894a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "lg:mb-32 md:mb-20 mb-15"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('TitleSection', {
    staticClass: "mt-24",
    attrs: {
      "title": _vm.title
    }
  })], 1), _vm._ssrNode(" <div class=\"container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10\">" + _vm._ssrList(_vm.services, function (service, index) {
    return "<div class=\"text-white text-center align-center bg-no-repeat bg-scroll bg-center bg-cover md:pt-14 md:pb-12 md:px-12 sm:py-14 sm:px-6 py-14 px-10 h-460\"" + _vm._ssrStyle(null, {
      backgroundImage: `url(${service.videoBannerBg})`
    }, null) + "><div class=\"mb-12 text-center align-center\"><img" + _vm._ssrAttr("src", service.imgSrc) + _vm._ssrAttr("alt", service.name) + " class=\"h-37 w-36\"></div> <div class=\"block\"><h3 class=\"text-white font-exo text-xl md:text-2xl font-bold uppercase mb-4\">" + _vm._ssrEscape(_vm._s(service.live)) + "</h3> <p>" + _vm._ssrEscape(_vm._s(service.text)) + "</p></div></div>";
  }) + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GamingWorld.vue?vue&type=template&id=19fa894a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GamingWorld.vue?vue&type=script&lang=js
/* harmony default export */ var GamingWorldvue_type_script_lang_js = ({
  components: {
    TitleSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 44))
  },
  data() {
    return {
      title: "Особенность игры",
      services: [{
        imgSrc: "/images/others/13.png",
        name: "Service Image",
        live: "",
        text: "Интенсивный экшен: Топ-даун вид и быстрая динамика игры обещают захватывающий и напряженный геймплей. "
      }, {
        imgSrc: "/images/others/11.png",
        name: "Service Image",
        live: "",
        text: "Стратегические элементы: Важно не только точное прицеливание, но и умение планировать свои действия, чтобы одолеть противников."
      }, {
        imgSrc: "/images/others/12.png",
        name: "Service Image",
        live: "",
        text: "Разнообразие контента: В игре планируется множество уровней и врагов, что обеспечит долгие часы увлекательного игрового процесса."
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/GamingWorld.vue?vue&type=script&lang=js
 /* harmony default export */ var components_GamingWorldvue_type_script_lang_js = (GamingWorldvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/GamingWorld.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GamingWorldvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2a62c69c"
  
)

/* harmony default export */ var GamingWorld = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TitleSection: __webpack_require__(44).default})


/***/ })

};;
//# sourceMappingURL=gaming-world.js.map