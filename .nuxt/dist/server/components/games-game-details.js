exports.ids = [6];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Games/GameDetails.vue?vue&type=template&id=e6d3b35e
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container relative"
  }, [_vm._ssrNode("<p class=\"date text-primary font-bold mb-3\">22 Сентября 2024 года </p> <h2 class=\"text-white font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10\">" + _vm._ssrEscape(_vm._s(_vm.games.title)) + "</h2> "), _vm._ssrNode("<div class=\"content-details\">", "</div>", [_vm._ssrNode("<div class=\"description mt-6\"><p class=\"leading-8\">Топдаун-шутер с видом сверху – эпическая охота на врагов. Исследуйте разнообразные локации, применяйте тактические манёвры для обхода противников, используйте широкий арсенал оружия и уникальные способности главного героя. Вас ждут интенсивные сражения и захватывающие миссии против разных типов врагов. Испытайте захватывающий геймплей и стратегические бои в динамичной игре с видом сверху.</p></div> "), _vm._ssrNode("<div class=\"gameslide my-15\">", "</div>", [_c('swiper', {
    staticClass: "swiper",
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.gameslide, function (game, imageIndex) {
    return _c('swiper-slide', {
      key: imageIndex
    }, [_c('div', {
      staticClass: "relative"
    }, [_c('img', {
      staticClass: "sm:h-full h-64 w-full object-cover",
      attrs: {
        "src": `${game.gamingBg}`
      }
    })])]);
  }), 1), _vm._ssrNode(" <div class=\"flex mt-10\"><div class=\"gameslide-button-prev swipper-arrow text-white md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all z-50 mr-2\"><img src=\"/images/icon/navigation-arrow2.webp\" alt class=\"w-4 h-6\"></div> <div class=\"gameslide-button-next swipper-arrow text-white md:w-68 w-55 md:h-55 h-11 flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape bg-cover transition-all z-50 ml-2\"><img src=\"/images/icon/navigation-arrow1.webp\" alt class=\"w-4 h-6\"></div></div>")], 2), _vm._ssrNode(" <div class=\"description mt-6\"><h3 class=\"text-2xl text-white uppercase font-bold mb-5\">Описание:</h3> <p class=\"leading-8\">Наша игра предлагает вам захватывающий геймплей с элементами стратегии. Благодаря поддержке Steam Workshop, вы можете создавать и делиться уникальными пользовательскими картами и испытаниями, добавляя бесконечное количество контента от сообщества. В одиночном режиме вы столкнётесь с продвинутыми и умными ботами на разнообразных картах. Развивайте свои навыки, улучшайте оружие, способности и модули, чтобы стать сильнее по ходу игры. Посещайте внутриигровой магазин, чтобы приобрести боеприпасы, новое оружие, модули, аптечки и многое другое, используя ресурсы, собранные во время миссий. Исследуйте все возможности для тактической победы и погружайтесь в богатый мир с бесконечными стратегическими решениями..</p></div> <div class=\"additional-information-area bg-secondary-100 px-9 py-9 rounded-2xl mb-9\"><h3 class=\"text-2xl text-white uppercase font-bold mb-6\">Системные требования:</h3> <div class=\"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 text-white\"><div class=\"additional_information_text\"><h4 class=\"font-bold mb-5\">Процессор:</h4> <p class=\"text-gray-400\">Intel Core i3 7100</p></div> <div class=\"additional_information_text\"><h4 class=\"font-bold mb-5\">Видеокарта:</h4> <p class=\"text-gray-400\">NVIDIA GeForce GTX 960</p></div> <div class=\"additional_information_text\"><h4 class=\"font-bold mb-5\">Оперативная память:</h4> <p class=\"text-gray-400\">Не менее 8 Gb</p></div> <div class=\"additional_information_text\"><h4 class=\"font-bold mb-5\">ОС:</h4> <p class=\"text-gray-400\">Windows 10 (64 bits)</p></div> <div class=\"additional_information_text\"><h4 class=\"font-bold mb-5\">Место на диске:</h4> <p class=\"text-gray-400\">20 Gb</p></div></div></div> <div class=\"description mt-6\"></div>")], 2), _vm._ssrNode(" "), _c('Disqus', {
    staticClass: "mt-10",
    attrs: {
      "shortname": "Admin"
    }
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Games/GameDetails.vue?vue&type=template&id=e6d3b35e

// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(39);

// EXTERNAL MODULE: external "vue-disqus"
var external_vue_disqus_ = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Games/GameDetails.vue?vue&type=script&lang=js


/* harmony default export */ var GameDetailsvue_type_script_lang_js = ({
  components: {
    Swiper: external_vue_awesome_swiper_["Swiper"],
    SwiperSlide: external_vue_awesome_swiper_["SwiperSlide"],
    Disqus: external_vue_disqus_["Disqus"]
  },
  props: ["games"],
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: false,
        navigation: {
          nextEl: '.gameslide .gameslide-button-next',
          prevEl: '.gameslide .gameslide-button-prev'
        }
      },
      gameslide: [{
        gamingBg: "/images/others/3.png"
      }, {
        gamingBg: "/images/others/4.png"
      }, {
        gamingBg: "/images/others/5.png"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/Games/GameDetails.vue?vue&type=script&lang=js
 /* harmony default export */ var Games_GameDetailsvue_type_script_lang_js = (GameDetailsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Games/GameDetails.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Games_GameDetailsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "68350524"
  
)

/* harmony default export */ var GameDetails = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=games-game-details.js.map