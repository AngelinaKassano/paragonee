exports.ids = [57];
exports.modules = {

/***/ 48:
/***/ (function(module) {

module.exports = JSON.parse("[{\"gameImage\":\"/images/others/434.jpg\",\"btnName\":\"Подробнее\",\"title\":\"Paragone Bomb\",\"slug\":\"1\",\"category\":\"1\"}]");

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Games/PopularGame.vue?vue&type=template&id=583210a4
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
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6\">", "</div>", _vm._l(_vm.gameHome.slice(0, 4), function (games, index) {
    return _vm._ssrNode("<div class=\"relative group before:empty-content before:absolute before:w-full before:h-full before:opacity-0 before:bg-black before:top-0 before:left-0 before:right-0 before:bottom-0 overflow-hidden hover:before:opacity-70 transition-all hover:before:transition-all before:border-4 before:border-white before:rounded-4xl before:border-opacity-20\">", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", games.gameImage) + " alt=\"Feature Icon\" class=\"w-full rounded-4xl\"> "), _c('n-link', {
      staticClass: "group primary-btn absolute-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all",
      staticStyle: {
        "background-image": "url(/images/others/btn-bg.webp)"
      },
      attrs: {
        "to": `/game/${games.slug}`
      }
    }, [_vm._v("\n                " + _vm._s(games.btnName) + "\n                "), _c('img', {
      staticClass: "ml-3 w-5 h-5 group-hover:ml-4 transition-all",
      attrs: {
        "src": "/images/icon/arrrow-icon.webp",
        "alt": "Arrow Icon"
      }
    })])], 2);
  }), 0)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Games/PopularGame.vue?vue&type=template&id=583210a4

// EXTERNAL MODULE: ./data/games.json
var games = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Games/PopularGame.vue?vue&type=script&lang=js

/* harmony default export */ var PopularGamevue_type_script_lang_js = ({
  components: {
    TitleSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 44))
  },
  data() {
    return {
      gameHome: games,
      title: "Наши игры",
      text: "Познакомьтесь со списком игр, которые мы предлагаем"
    };
  }
});
// CONCATENATED MODULE: ./components/Games/PopularGame.vue?vue&type=script&lang=js
 /* harmony default export */ var Games_PopularGamevue_type_script_lang_js = (PopularGamevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Games/PopularGame.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Games_PopularGamevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a765c72e"
  
)

/* harmony default export */ var PopularGame = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TitleSection: __webpack_require__(44).default})


/***/ })

};;
//# sourceMappingURL=57.js.map