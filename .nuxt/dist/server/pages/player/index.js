exports.ids = [53,1,4,15];
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

/***/ 55:
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Thundarman Game Expert\",\"imgSrc\":\"/images/player/list/player-1.webp\",\"alt\":\"Service Image\",\"name\":\"Thunderman\",\"subtitle\":\"40 LEVEL COMPLETED\",\"slug\":\"1\"},{\"title\":\"Lion King Game Expert\",\"imgSrc\":\"/images/player/list/player-2.webp\",\"alt\":\"Service Image\",\"name\":\"Rosaline Emmons\",\"subtitle\":\"26 LEVEL COMPLETED\",\"slug\":\"2\"},{\"title\":\"Wolf Smart Game Expert\",\"imgSrc\":\"/images/player/list/player-3.webp\",\"alt\":\"Service Image\",\"name\":\"Willbarn Beharn\",\"subtitle\":\"47 LEVEL COMPLETED\",\"slug\":\"3\"},{\"title\":\"JOHNNYBRAVO Game Expert\",\"imgSrc\":\"/images/player/list/player-4.webp\",\"alt\":\"Service Image\",\"name\":\"Tasia Mancuso\",\"subtitle\":\"83 LEVEL COMPLETED\",\"slug\":\"4\"},{\"title\":\"Super Power Game Expert\",\"imgSrc\":\"/images/player/list/player-5.webp\",\"alt\":\"Service Image\",\"name\":\"Rosaline Emmons\",\"subtitle\":\"72 LEVEL COMPLETED\",\"slug\":\"5\"},{\"title\":\"Warrior-782 Game Expert\",\"imgSrc\":\"/images/player/list/player-6.webp\",\"alt\":\"Service Image\",\"name\":\"Willbarn Beharn\",\"subtitle\":\"128 LEVEL COMPLETED\",\"slug\":\"6\"}]");

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AllPlayers.vue?vue&type=template&id=2be2425d
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container"
  }, [_vm._ssrNode("<div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10\">", "</div>", _vm._l(_vm.playerData, function (player, index) {
    return _vm._ssrNode("<div class=\"relative group w-300 sm:w-full mx-auto\">", "</div>", [_vm._ssrNode("<div class=\"w-full rounded-4xl overflow-hidden relative\">", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", player.imgSrc) + _vm._ssrAttr("alt", player.alt) + "> "), _c('n-link', {
      staticClass: "w-full h-full absolute left-0 top-0 bg-gray-900 rounded-5xl opacity-0 group-hover:opacity-70 border-4 border-gray-400 rounded-4xl",
      attrs: {
        "to": `/player/${player.slug}`
      }
    }), _vm._ssrNode(" <ul class=\"social-link absolute left-0 text-center bottom-0 group-hover:bottom-8 w-full space-x-2 opacity-0 group-hover:opacity-100 transition-all z-20 text-white\"><li class=\"text-center inline-block\"><a href=\"https://www.twitch.tv\" class=\"w-12 h-10 flex items-center justify-center transition-all bg-cover text-white hover:bg-arrow-shape bg-arrow-hover-shape z-50\"><i class=\"icofont-twitch\"></i></a></li> <li class=\"text-center inline-block\"><a href=\"https://www.facebook.com\" class=\"w-12 h-10 flex items-center justify-center transition-all bg-cover text-white hover:bg-arrow-shape bg-arrow-hover-shape z-50\"><i class=\"icofont-facebook\"></i></a></li> <li class=\"text-center inline-block\"><a href=\"https://www.youtube.com\" class=\"w-12 h-10 flex items-center justify-center transition-all bg-cover text-white hover:bg-arrow-shape bg-arrow-hover-shape z-50\"><i class=\"icofont-youtube-play\"></i></a></li> <li class=\"text-center inline-block\"><a href=\"https://www.twitter.com\" class=\"w-12 h-10 flex items-center justify-center transition-all bg-cover text-white hover:bg-arrow-shape bg-arrow-hover-shape z-50\"><i class=\"icofont-twitter\"></i></a></li></ul>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex flex-col justify-center items-center mt-8 bg-team-shape bg-cover h-24 sm:h-20 md:h-28 lg:h-24 xl:h-32 2xl:h-32 group-hover:bg-team-hover-shape hover:transition-all\">", "</div>", [_vm._ssrNode("<h3 class=\"text-white font-bold text-lg md:text-2xl uppercase mb-2 xl:mb-4 leading-tight\">", "</h3>", [_c('n-link', {
      attrs: {
        "to": `/player/${player.slug}`
      }
    }, [_vm._v(_vm._s(player.name))])], 1), _vm._ssrNode(" <span class=\"text-white text-sm group-hover:text-white transition-all\">" + _vm._ssrEscape(_vm._s(player.subtitle)) + "</span>")], 2)], 2);
  }), 0)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AllPlayers.vue?vue&type=template&id=2be2425d

// EXTERNAL MODULE: ./data/player.json
var player = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AllPlayers.vue?vue&type=script&lang=js

/* harmony default export */ var AllPlayersvue_type_script_lang_js = ({
  components: {},
  data() {
    return {
      playerData: player
    };
  }
});
// CONCATENATED MODULE: ./components/AllPlayers.vue?vue&type=script&lang=js
 /* harmony default export */ var components_AllPlayersvue_type_script_lang_js = (AllPlayersvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/AllPlayers.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AllPlayersvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "75e24c30"
  
)

/* harmony default export */ var AllPlayers = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/player/index.vue?vue&type=template&id=759c8cef
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
  }), _vm._ssrNode(" "), _c('AllPlayers'), _vm._ssrNode(" "), _c('CounterUp'), _vm._ssrNode(" "), _c('ContactBanner', {
    attrs: {
      "paddingTop": _vm.paddingTop
    }
  }), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/player/index.vue?vue&type=template&id=759c8cef

// EXTERNAL MODULE: ./data/matches.json
var matches = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/player/index.vue?vue&type=script&lang=js

/* harmony default export */ var playervue_type_script_lang_js = ({
  components: {
    HeaderSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 15)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 97)),
    Breadcrumb: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 17)),
    CounterUp: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 49)),
    ContactBanner: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 43)),
    Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16)),
    AllPlayers: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 68))
  },
  head() {
    return {
      title: 'Contact - Bonx Gaming',
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
// CONCATENATED MODULE: ./pages/player/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_playervue_type_script_lang_js = (playervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/player/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_playervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7bf0ace4"
  
)

/* harmony default export */ var player = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderSection: __webpack_require__(15).default,Breadcrumb: __webpack_require__(17).default,AllPlayers: __webpack_require__(68).default,CounterUp: __webpack_require__(49).default,ContactBanner: __webpack_require__(43).default,Footer: __webpack_require__(16).default})


/***/ })

};;
//# sourceMappingURL=index.js.map