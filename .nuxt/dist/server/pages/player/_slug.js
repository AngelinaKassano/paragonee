exports.ids = [52,1,4];
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

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/player/_slug.vue?vue&type=template&id=57461232
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
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"flex md:flex-row flex-col bg-secondary-100 p-8 md:p-68 rounded-50\">", "</div>", [_vm._ssrNode("<div class=\"md:w-2/5\">", "</div>", [_vm._ssrNode("<div class=\"border-4 border-gray-400 rounded-3xl d-flex max-w-full md:max-w-sm overflow-hidden\"><img" + _vm._ssrAttr("src", _vm.playerData.imgSrc) + " alt class=\"w-full\"></div> "), _vm._ssrNode("<div class=\"flex flex-col justify-center items-center relative mt-8 max-w-full md:max-w-sm z-10 py-7\">", "</div>", [_vm._ssrNode("<h3 class=\"text-white font-bold text-lg md:text-2xl uppercase\">", "</h3>", [_c('n-link', {
    attrs: {
      "to": `/player/${_vm.playerData.slug}`
    }
  }, [_vm._v(_vm._s(_vm.playerData.name))])], 1), _vm._ssrNode(" <span class=\"text-white text-sm md:text-base transition-all\">" + _vm._ssrEscape(_vm._s(_vm.playerData.subtitle)) + "</span> <div class=\"absolute top-0 left-0 w-full z-n1\"><img src=\"/images/others/tam-text-shape2.webp\" alt class=\"absolute w-full h-120\"></div>")], 2), _vm._ssrNode(" <ul class=\"flex justify-center text-white mt-8 max-w-full md:max-w-sm\"><li class=\"mr-2\"><a href=\"https://www.twitch.tv\" class=\"w-12 h-12 rounded-full border-2 border-yellow flex justify-center items-center hover:border-yellow hover:bg-yellow transition-all\"><i class=\"icofont-twitch\"></i></a></li> <li class=\"mr-2 ml-2\"><a href=\"https://www.youtube.com\" class=\"w-12 h-12 rounded-full border-2 border-bright flex justify-center items-center hover:border-bright hover:bg-bright transition-all\"><i class=\"icofont-youtube-play\"></i></a></li> <li class=\"ml-2\"><a href=\"https://www.twitter.com\" class=\"w-12 h-12 rounded-full border-2 border-punch flex justify-center items-center hover:border-punch hover:bg-punch transition-all\"><i class=\"icofont-twitter\"></i></a></li></ul>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"md:w-3/5 md:pl-10 mt-16 md:mt-0\">", "</div>", [_vm._ssrNode("<div class=\"about_title lg:mb-6 mb-4\"><h5 class=\"text-primary text-xl uppercase font-bold pl-24 lg:mb-6 mb-4 relative before:absolute content-before before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-1 before:bg-primary before:w-16\">Player Profile</h5> <h2 class=\"text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl\">" + _vm._ssrEscape(" " + _vm._s(_vm.playerData.title) + " ") + "</h2></div> <div class=\"about_desc mb-10\"><p class=\"lg:text-xl lg:leading-8\">It is a long established fact that a reader will be distracted the readable content of page when looking at it layout the point using lorem Ipsum is that it has a more-or-less normal distribution.</p> <p class=\"lg:text-xl lg:leading-8\">It is a long established fact that a reader will be distracted the readable content of page when looking at it layout the point using lorem Ipsum is that it has a more-or-less normal distribution.</p></div> "), _vm._ssrNode("<div class=\"about_btn\">", "</div>", [_c('n-link', {
    staticClass: "group primary-btn opacity-100 transition-all",
    staticStyle: {
      "background-image": "url(/images/others/btn-bg.webp)"
    },
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("Contact Now "), _c('img', {
    staticClass: "ml-3 w-5 h-5 group-hover:ml-4 transition-all",
    attrs: {
      "src": "/images/icon/arrrow-icon.webp",
      "alt": "Arrow Icon"
    }
  })])], 1)], 2)], 2)]), _vm._ssrNode(" "), _c('CounterUp'), _vm._ssrNode(" "), _c('ContactBanner', {
    attrs: {
      "paddingTop": _vm.paddingTop
    }
  }), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/player/_slug.vue?vue&type=template&id=57461232

// EXTERNAL MODULE: ./data/player.json
var player = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/player/_slug.vue?vue&type=script&lang=js

/* harmony default export */ var _slugvue_type_script_lang_js = ({
  components: {
    HeaderSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 15)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 97)),
    Breadcrumb: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 17)),
    CounterUp: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 49)),
    ContactBanner: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 43)),
    Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16))
  },
  data() {
    return {
      playerData: player,
      navOpen: false,
      BreadcrumbTitle: "Player Details",
      BreadcrumbSubTitle: "Player",
      paddingTop: "pt-0",
      slug: this.$route.params.slug
    };
  },
  mounted() {
    this.playerData = player.find(player => player.slug == this.$route.params.slug);
  }
});
// CONCATENATED MODULE: ./pages/player/_slug.vue?vue&type=script&lang=js
 /* harmony default export */ var player_slugvue_type_script_lang_js = (_slugvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/player/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  player_slugvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7f5def74"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderSection: __webpack_require__(15).default,Breadcrumb: __webpack_require__(17).default,CounterUp: __webpack_require__(49).default,ContactBanner: __webpack_require__(43).default,Footer: __webpack_require__(16).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map