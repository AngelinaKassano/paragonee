exports.ids = [31];
exports.modules = {

/***/ 52:
/***/ (function(module) {

module.exports = JSON.parse("[{\"clientImage\":\"/images/others/1.png\"},{\"clientImage\":\"/images/others/2.png\"},{\"clientImage\":\"/images/others/3.png\"},{\"clientImage\":\"/images/others/4.png\"},{\"clientImage\":\"/images/others/5.png\"}]");

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonial.vue?vue&type=template&id=bb54d9d8
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "testimonial-section"
  }, [_vm._ssrNode("<div class=\"relative pt-120 pb-120\" style=\"background-image:url(/images/others/testimonial-bg-fullwidth.webp)\">", "</div>", [_vm._ssrNode("<div class=\"container relative\">", "</div>", [_c('swiper', {
    staticClass: "swiper",
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.testimonialData, function (testimonial, index) {
    return _c('swiper-slide', {
      key: index
    }, [_c('div', {
      staticClass: "flex flex-col items-center bg-cover py-10 px-8 rounded-50",
      staticStyle: {
        "background-image": "url(/images/others/testimonial-bg.webp)"
      }
    }, [_c('img', {
      attrs: {
        "src": testimonial.clientImage,
        "alt": "Testimonial",
        "width": "800",
        "height": "600"
      }
    })])]);
  }), 1), _vm._ssrNode(" <div class=\"flex justify-center mt-14\"><div class=\"testimonial-button-prev swipper-arrow text-white md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all mr-4 cursor-pointer\"><img src=\"/images/icon/navigation-arrow2.webp\" alt=\"Arrow\" class=\"w-4 h-6\"></div> <div class=\"testimonial-button-next swipper-arrow text-white md:w-68 w-55 md:h-55 h-11 bg-cover flex items-center justify-center hover:bg-arrow-hover-shape bg-arrow-shape transition-all ml-4 cursor-pointer\"><img src=\"/images/icon/navigation-arrow1.webp\" alt=\"Arrow\" class=\"w-4 h-6\"></div></div>")], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Testimonial.vue?vue&type=template&id=bb54d9d8

// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(39);

// EXTERNAL MODULE: ./data/testimonial.json
var testimonial = __webpack_require__(52);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Testimonial.vue?vue&type=script&lang=js


/* harmony default export */ var Testimonialvue_type_script_lang_js = ({
  components: {
    Swiper: external_vue_awesome_swiper_["Swiper"],
    SwiperSlide: external_vue_awesome_swiper_["SwiperSlide"]
  },
  data() {
    return {
      testimonialData: testimonial,
      // Массив данных
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: false,
        navigation: {
          nextEl: '.testimonial-section .testimonial-button-next',
          prevEl: '.testimonial-section .testimonial-button-prev'
        },
        autoplay: {
          delay: 10000,
          // Промежуток в 10 секунд
          disableOnInteraction: false // Автопрокрутка не будет отключаться при взаимодействии
        },
        loop: true // Включаем цикл
      }
    };
  }
});
// CONCATENATED MODULE: ./components/Testimonial.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Testimonialvue_type_script_lang_js = (Testimonialvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Testimonial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Testimonialvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e1df5ed0"
  
)

/* harmony default export */ var Testimonial = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=testimonial.js.map