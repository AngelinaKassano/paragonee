exports.ids = [47,4];
exports.modules = {

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

/***/ 48:
/***/ (function(module) {

module.exports = JSON.parse("[{\"gameImage\":\"/images/others/434.jpg\",\"btnName\":\"Подробнее\",\"title\":\"Paragone Bomb\",\"slug\":\"1\",\"category\":\"1\"}]");

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/game/_slug.vue?vue&type=template&id=076ee82b
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
  }), _vm._ssrNode(" "), _c('GameDetails', {
    attrs: {
      "games": _vm.gameHome
    }
  }), _vm._ssrNode(" "), _c('ContactBanner', {
    attrs: {
      "paddingTop": _vm.paddingTop
    }
  }), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/game/_slug.vue?vue&type=template&id=076ee82b

// EXTERNAL MODULE: ./data/games.json
var games = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/game/_slug.vue?vue&type=script&lang=js

/* harmony default export */ var _slugvue_type_script_lang_js = ({
  components: {
    GameDetails: () => __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, 100)),
    HeaderSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 15)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 97)),
    Breadcrumb: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 17)),
    CounterUp: () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 49)),
    ContactBanner: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 43)),
    Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16))
  },
  data() {
    return {
      btnName: "JOIN NOW",
      gameHome: games,
      navOpen: false,
      BreadcrumbTitle: "Paragone",
      BreadcrumbSubTitle: "Game",
      paddingTop: "pt-32",
      slug: this.$route.params.slug
    };
  },
  mounted() {
    this.gameHome = games.find(games => games.slug == this.$route.params.slug);
  }
});
// CONCATENATED MODULE: ./pages/game/_slug.vue?vue&type=script&lang=js
 /* harmony default export */ var game_slugvue_type_script_lang_js = (_slugvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/game/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  game_slugvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c2433852"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderSection: __webpack_require__(15).default,Breadcrumb: __webpack_require__(17).default,ContactBanner: __webpack_require__(43).default,Footer: __webpack_require__(16).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map