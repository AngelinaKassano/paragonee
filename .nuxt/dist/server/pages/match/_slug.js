exports.ids = [50,4];
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

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/match/_slug.vue?vue&type=template&id=0777085c
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
  }), _vm._ssrNode(" <div class=\"container mb-12\"><div class=\"border-4 border-light-blue-500 rounded-4xl px-10 lg:px-16 py-8 max-w-lg mx-auto\"><div class=\"grid grid-cols-1 items-center\"><div class=\"flex justify-center items-center w-full px-20 sm:px-0\"><img" + _vm._ssrAttr("src", _vm.matchesData.teamOne) + " alt=\"Feature Icon\" class=\"lg:mr-9 mr-5\"> <img" + _vm._ssrAttr("src", _vm.matchesData.teamVs) + " alt=\"Feature Icon\" class=\"lg:mr-9 mr-5\"> <img" + _vm._ssrAttr("src", _vm.matchesData.teamTwo) + " alt=\"Feature Icon\"></div></div></div></div> "), _vm._ssrNode("<div class=\"container relative\">", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", `${_vm.matchesData.gamingBg}`) + _vm._ssrAttr("alt", _vm.matchesData.gamingAlt) + " class=\"sm:h-full h-64 w-full object-cover\"> <div class=\"absolute-center\"><img" + _vm._ssrAttr("src", `${_vm.matchesData.playBtnOne}`) + _vm._ssrAttr("alt", _vm.matchesData.playAlt) + " class=\"md:w-120 w-20 h-20 md:h-120 cursor-pointer rounded\"></div> "), _c('client-only', [_c('modal', {
    staticClass: "bg-transparent",
    attrs: {
      "name": "my-modal",
      "width": 1000,
      "height": 700,
      "adaptive": true
    }
  }, [_c('div', {
    staticClass: "modal-content w-full h-full"
  }, [_c('iframe', {
    staticClass: "w-full h-full",
    attrs: {
      "src": `${_vm.matchesData.src}`,
      "title": "YouTube video player",
      "frameborder": "0",
      "allow": "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      "allowfullscreen": ""
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "absolute top-0 right-0 icofont-close-line z-999 font-bold text-3xl text-black hover:text-primary transition-all transform hover:rotate-90",
    on: {
      "click": function ($event) {
        return _vm.$modal.hide('my-modal');
      }
    }
  })])])], 1), _vm._ssrNode(" <div class=\"absolute md:h-20 h-12 left-1/2 bottom-0 transform -translate-x-2/4 bg-no-repeat bg-center w-full flex justify-center items-center\"" + _vm._ssrStyle(null, {
    backgroundImage: `url(${_vm.matchesData.videoShapeBg})`
  }, null) + "><h3 class=\"text-white font-exo font-bold uppercase text-base sm:text-xl md:text-2xl\">" + _vm._ssrEscape(_vm._s(_vm.matchesData.shapeTitle)) + "</h3></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"match_details_counterup flex flex-col sm:flex-row justify-between items-center py-12 mb-12 border-b-2 border-secondary-80\">", "</div>", [_c('div', {
    directives: [{
      name: "observe-visibility",
      rawName: "v-observe-visibility",
      value: {
        callback: _vm.visibilityChanged,
        once: true
      },
      expression: "{callback: visibilityChanged, once: true}"
    }]
  }, [_vm.commentsVisible ? _vm._ssrNode("<div class=\"grid grid-cols-3\">", "</div>", [_vm._ssrNode("<div class=\"mr-6 pr-6 lg:mr-16 lg:pr-16 relative pt-4\">", "</div>", [_vm._ssrNode("<p class=\"uppercase md:text-lg text-sm font-semibold text-primary\">Player:</p> "), _c('countTo', {
    staticClass: "text-white text-4xl lg:text-5xl font-bold",
    attrs: {
      "startVal": 0,
      "endVal": 280,
      "duration": 3000,
      "autoplay": true
    }
  }), _vm._ssrNode(" <span class=\"absolute right-0 top-0 transform rotate-12 bg-secondary-80 h-28 w-0.5\"></span>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mr-6 pr-6 lg:mr-20 lg:pr-20 relative pt-4\">", "</div>", [_vm._ssrNode("<p class=\"uppercase md:text-lg text-sm font-semibold text-primary\">Team:</p> "), _c('countTo', {
    staticClass: "text-white text-4xl lg:text-5xl font-bold",
    attrs: {
      "startVal": 0,
      "endVal": 16,
      "duration": 3000,
      "autoplay": true
    }
  }), _vm._ssrNode(" <span class=\"absolute right-0 top-0 transform rotate-12 bg-secondary-80 h-28 w-0.5\"></span>")], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"mr-6 pr-6 lg:mr-16 lg:pr-16 relative pt-4\">", "</div>", [_vm._ssrNode("<p class=\"uppercase md:text-lg text-sm font-semibold text-primary\">Winning Prize:</p> "), _c('countTo', {
    staticClass: "text-white text-4xl lg:text-5xl font-bold",
    attrs: {
      "startVal": 0,
      "endVal": 6800,
      "duration": 3000,
      "autoplay": true
    }
  })], 2)], 2) : _vm._e()]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex justify-end mt-16 md:mt-0\">", "</div>", [_c('n-link', {
    staticClass: "group primary-btn opacity-100 transition-all",
    staticStyle: {
      "background-image": "url(/images/others/btn-bg.webp)"
    },
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.btnName) + "\n                    "), _c('img', {
    staticClass: "ml-3 w-5 h-5 group-hover:ml-4 transition-all",
    attrs: {
      "src": "/images/icon/arrrow-icon.webp",
      "alt": "Arrow Icon"
    }
  })])], 1)], 2)]), _vm._ssrNode(" "), _c('MatchDetails', {
    attrs: {
      "match": _vm.matchesData
    }
  }), _vm._ssrNode(" "), _c('ContactBanner', {
    attrs: {
      "paddingTop": _vm.paddingTop
    }
  }), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/match/_slug.vue?vue&type=template&id=0777085c

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(40);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(39);

// EXTERNAL MODULE: ./data/matches.json
var matches = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/match/_slug.vue?vue&type=script&lang=js



/* harmony default export */ var _slugvue_type_script_lang_js = ({
  components: {
    Swiper: external_vue_awesome_swiper_["Swiper"],
    SwiperSlide: external_vue_awesome_swiper_["SwiperSlide"],
    countTo: external_vue_count_to_default.a,
    MatchDetails: () => __webpack_require__.e(/* import() */ 10).then(__webpack_require__.bind(null, 102)),
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
      commentsVisible: false,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: false,
        navigation: {
          nextEl: '.live-section .livesection-button-next',
          prevEl: '.live-section .livesection-button-prev'
        }
      },
      matchesData: matches,
      navOpen: false,
      BreadcrumbTitle: "Match Details",
      BreadcrumbSubTitle: "Match",
      paddingTop: "pt-32",
      slug: this.$route.params.slug
    };
  },
  mounted() {
    this.matchesData = matches.find(match => match.slug == this.$route.params.slug);
  },
  methods: {
    visibilityChanged(isVisible) {
      this.commentsVisible = isVisible;
    }
  }
});
// CONCATENATED MODULE: ./pages/match/_slug.vue?vue&type=script&lang=js
 /* harmony default export */ var match_slugvue_type_script_lang_js = (_slugvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/match/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  match_slugvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6cbe5d8c"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderSection: __webpack_require__(15).default,Breadcrumb: __webpack_require__(17).default,ContactBanner: __webpack_require__(43).default,Footer: __webpack_require__(16).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map