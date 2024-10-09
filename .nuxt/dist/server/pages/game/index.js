exports.ids = [48,1,4,14];
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

/***/ 45:
/***/ (function(module) {

module.exports = JSON.parse("[{\"teamOne\":\"/images/others/upcoming-game-thumb3.webp\",\"teamVs\":\"/images/others/game-vs2.webp\",\"teamTwo\":\"/images/others/upcoming-game-thumb4.webp\",\"title\":\"Страница игры в Steam\",\"description\":\"Стала доступна страница нашей игры на площадке Steam\",\"playBtn\":\"/images/others/play-btn2.webp\",\"playAlt\":\"Gaming BG\",\"src\":\"https://www.youtube.com/embed/eS9Qm4AOOBY\",\"autoplay\":true,\"slug\":\"2\",\"videoShapeBg\":\"/images/others/text-mini-shape.webp\",\"gamingBg\":\"/images/bg/gaming-bg1.webp\",\"gamingAlt\":\"Gaming BG\",\"playBtnOne\":\"/images/others/play-btn.webp\",\"shapeTitle\":\"Watch Live Streaming 2 \"}]");

/***/ }),

/***/ 48:
/***/ (function(module) {

module.exports = JSON.parse("[{\"gameImage\":\"/images/others/434.jpg\",\"btnName\":\"Подробнее\",\"title\":\"Paragone Bomb\",\"slug\":\"1\",\"category\":\"1\"}]");

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CounterUp.vue?vue&type=template&id=c8b45204
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container mt-32 pb-32"
  }, [_c('div', {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: {
        callback: _vm.visibilityChanged,
        once: true
      },
      expression: "{callback: visibilityChanged, once: true}"
    }]
  }, [_vm.commentsVisible ? _vm._ssrNode("<div class=\"grid md:grid-cols-4 grid-cols-2 gap-9\">", "</div>", _vm._l(_vm.counter, function (count, imageIndex) {
    return _vm._ssrNode("<div class=\"text-white text-center\">", "</div>", [_c('countTo', {
      staticClass: "text-white text-5xl lg:text-10xl uppercase font-metal font-normal block",
      class: count.className,
      attrs: {
        "startVal": count.startVal,
        "endVal": count.endVal,
        "duration": 3000,
        "autoplay": true
      }
    }), _vm._ssrNode(" <p class=\"uppercase mt-3 sm:mt-5 text-base lg:text-lg\">" + _vm._ssrEscape(_vm._s(count.text)) + "</p>")], 2);
  }), 0) : _vm._e()])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CounterUp.vue?vue&type=template&id=c8b45204

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(40);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CounterUp.vue?vue&type=script&lang=js

/* harmony default export */ var CounterUpvue_type_script_lang_js = ({
  components: {
    countTo: external_vue_count_to_default.a
  },
  data() {
    return {
      commentsVisible: false,
      counter: []
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.commentsVisible = isVisible;
    }
  }
});
// CONCATENATED MODULE: ./components/CounterUp.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CounterUpvue_type_script_lang_js = (CounterUpvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/CounterUp.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CounterUpvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "175375f0"
  
)

/* harmony default export */ var CounterUp = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AllGames.vue?vue&type=template&id=7689551e
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container mb-120"
  }, [_vm._ssrNode("<div class=\"filter-wrap bg-secondary-100 rounded-2xl px-5 py-7 mb-10\"><div class=\"flex flex-col sm:flex-row justify-between\"><div class=\"category-filter\"><div class=\"filter-option\"><select id=\"selectgame\" class=\"px-5 h-14 w-full mb-8 sm:mb-0 sm:w-64 text-white bg-secondary-100 border-2 border-solid rounded-lg focus:outline-none border-gray-400 block\"><option value class=\"bg-black\">Все категории</option> <option value=\"1\">Шутер с верху</option> <option value=\"2\">Остальное</option></select></div></div> <div class=\"search-filter\"><div class=\"search-bx\"><form action=\"#\" class=\"relative\"><input type=\"text\" placeholder=\"Поиск игры\" class=\"px-5 h-14 w-full sm:w-64 bg-secondary-100 border-2 border-solid rounded-lg focus:outline-none\"> <button type=\"submit\" class=\"absolute px-5 top-0 right-0 bg-transparent transition-all inline-block h-full text-white hover:text-primary\"><i class=\"icofont-search-1\"></i></button></form></div></div></div></div> "), _vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 item-display\">", "</div>", _vm._l(_vm.gameHome, function (games, index) {
    return _vm._ssrNode("<div class=\"item relative group before:empty-content before:absolute before:w-full before:h-full before:opacity-0 before:bg-black before:top-0 before:left-0 before:right-0 before:bottom-0 overflow-hidden hover:before:opacity-70 transition-all hover:before:transition-all before:border-4 before:border-white before:rounded-4xl before:border-opacity-20\">", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", games.gameImage) + " alt=\"Feature Icon\" class=\"w-full rounded-4xl\"> "), _c('n-link', {
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

// CONCATENATED MODULE: ./components/AllGames.vue?vue&type=template&id=7689551e

// EXTERNAL MODULE: ./data/games.json
var games = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AllGames.vue?vue&type=script&lang=js

/* harmony default export */ var AllGamesvue_type_script_lang_js = ({
  data() {
    return {
      gameHome: games
    };
  },
  head() {
    return {
      title: 'Contact4 - Bonx Gaming',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Find answers to frequently asked questions about Bonx gaming services and products.'
      },
      // Добавляем описание
      {
        name: 'format-detection',
        content: 'telephone=no'
      }, {
        hid: 'keywords',
        name: 'keywords',
        content: 'Bonx, gaming, FAQ, questions, support'
      },
      // Добавляем ключевые слова для SEO
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'FAQ - Bonx Gaming Website'
      },
      // Open Graph теги для соцсетей
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Find answers to frequently asked questions about Bonx gaming services.'
      }, {
        hid: 'og:image',
        name: 'og:image',
        content: '/images/og/faq.jpg'
      },
      // Ссылка на изображение для соцсетей
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/AllGames.vue?vue&type=script&lang=js
 /* harmony default export */ var components_AllGamesvue_type_script_lang_js = (AllGamesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/AllGames.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AllGamesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ae958a12"
  
)

/* harmony default export */ var AllGames = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/game/index.vue?vue&type=template&id=6d9bf51e
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
  }), _vm._ssrNode(" "), _c('AllGames'), _vm._ssrNode(" "), _c('CounterUp'), _vm._ssrNode(" "), _c('ContactBanner', {
    attrs: {
      "paddingTop": _vm.paddingTop
    }
  }), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/game/index.vue?vue&type=template&id=6d9bf51e

// EXTERNAL MODULE: ./data/matches.json
var matches = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/game/index.vue?vue&type=script&lang=js

/* harmony default export */ var gamevue_type_script_lang_js = ({
  components: {
    HeaderSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 15)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 97)),
    Breadcrumb: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 17)),
    CounterUp: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 49)),
    ContactBanner: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 43)),
    Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16)),
    AllGames: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 66))
  },
  data() {
    return {
      matchesData: matches,
      navOpen: false,
      BreadcrumbTitle: "Игры",
      BreadcrumbSubTitle: "Games",
      paddingTop: "pt-0"
    };
  }
});
// CONCATENATED MODULE: ./pages/game/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_gamevue_type_script_lang_js = (gamevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/game/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_gamevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bed5f5c2"
  
)

/* harmony default export */ var game = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderSection: __webpack_require__(15).default,Breadcrumb: __webpack_require__(17).default,AllGames: __webpack_require__(66).default,CounterUp: __webpack_require__(49).default,ContactBanner: __webpack_require__(43).default,Footer: __webpack_require__(16).default})


/***/ })

};;
//# sourceMappingURL=index.js.map