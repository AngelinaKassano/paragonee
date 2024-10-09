exports.ids = [15];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=all-players.js.map