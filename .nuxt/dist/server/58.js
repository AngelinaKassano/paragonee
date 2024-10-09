exports.ids = [58];
exports.modules = {

/***/ 48:
/***/ (function(module) {

module.exports = JSON.parse("[{\"gameImage\":\"/images/others/434.jpg\",\"btnName\":\"Подробнее\",\"title\":\"Paragone Bomb\",\"slug\":\"1\",\"category\":\"1\"}]");

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GoogleMaps.vue?vue&type=template&id=f0c87964
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container mb-120"
  }, [_c('TitleSection', {
    attrs: {
      "title": _vm.title,
      "text": _vm.text
    }
  }), _vm._ssrNode(" <div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6\">" + _vm._ssrList(_vm.gameHome.slice(0, 4), function (games, index) {
    return "<div class=\"relative group before:empty-content before:absolute before:w-full before:h-full before:bg-transparent before:top-0 before:left-0 before:right-0 before:bottom-0 overflow-hidden transition-all\"><img" + _vm._ssrAttr("src", games.gameImage) + " alt=\"Feature Icon\" class=\"w-full rounded-4xl\"></div>";
  }) + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GoogleMaps.vue?vue&type=template&id=f0c87964

// EXTERNAL MODULE: ./data/games.json
var games = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GoogleMaps.vue?vue&type=script&lang=js

/* harmony default export */ var GoogleMapsvue_type_script_lang_js = ({
  components: {
    TitleSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 44))
  },
  data() {
    return {
      gameHome: games,
      title: "Скриншоты",
      text: "Познакомьтесь со списком игр, которые мы предлагаем"
    };
  }
});
// CONCATENATED MODULE: ./components/GoogleMaps.vue?vue&type=script&lang=js
 /* harmony default export */ var components_GoogleMapsvue_type_script_lang_js = (GoogleMapsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/GoogleMaps.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GoogleMapsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1a71e3f2"
  
)

/* harmony default export */ var GoogleMaps = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TitleSection: __webpack_require__(44).default})


/***/ })

};;
//# sourceMappingURL=58.js.map