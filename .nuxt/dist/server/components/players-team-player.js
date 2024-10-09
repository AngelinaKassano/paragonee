exports.ids = [11];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Players/TeamPlayer.vue?vue&type=template&id=46f4f03b
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "my-16"
  }, [_vm._ssrNode("<div class=\"team-one\">", "</div>", [_vm._ssrNode("<span class=\"text-primary text-lg uppercase font-semibold mb-4 block\">Team - 01</span> <h2 class=\"font-bold uppercase text-xl md:text-4xl mb-8\">Fanda’S players</h2> "), _c('swiper', {
    staticClass: "swiper",
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.teamplayers, function (team, index) {
    return _c('swiper-slide', {
      key: index
    }, [_c('div', {
      staticClass: "rounded-50"
    }, [_c('div', {}, [_c('img', {
      attrs: {
        "src": team.teamImage,
        "alt": "Team Image"
      }
    })])])]);
  }), 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"team-one mt-16\">", "</div>", [_vm._ssrNode("<span class=\"text-primary text-lg uppercase font-semibold mb-4 block\">Team - 02</span> <h2 class=\"font-bold uppercase text-xl md:text-4xl mb-8\">Ninja’S players</h2> "), _c('swiper', {
    staticClass: "swiper",
    attrs: {
      "options": _vm.swiperOption
    }
  }, _vm._l(_vm.teamplayers.slice(2, 9), function (team, index) {
    return _c('swiper-slide', {
      key: index
    }, [_c('div', {
      staticClass: "rounded-50"
    }, [_c('div', {}, [_c('img', {
      attrs: {
        "src": team.teamImage,
        "alt": "Team Image"
      }
    })])])]);
  }), 1)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Players/TeamPlayer.vue?vue&type=template&id=46f4f03b

// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Players/TeamPlayer.vue?vue&type=script&lang=js

/* harmony default export */ var TeamPlayervue_type_script_lang_js = ({
  components: {
    Swiper: external_vue_awesome_swiper_["Swiper"],
    SwiperSlide: external_vue_awesome_swiper_["SwiperSlide"]
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        pagination: false,
        navigation: false,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 6,
            spaceBetween: 40
          }
        }
      },
      teamplayers: [{
        teamImage: "/images/others/players1.webp"
      }, {
        teamImage: "/images/others/players2.webp"
      }, {
        teamImage: "/images/others/players3.webp"
      }, {
        teamImage: "/images/others/players4.webp"
      }, {
        teamImage: "/images/others/players5.webp"
      }, {
        teamImage: "/images/others/players6.webp"
      }, {
        teamImage: "/images/others/players3.webp"
      }, {
        teamImage: "/images/others/players1.webp"
      }, {
        teamImage: "/images/others/players2.webp"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/Players/TeamPlayer.vue?vue&type=script&lang=js
 /* harmony default export */ var Players_TeamPlayervue_type_script_lang_js = (TeamPlayervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Players/TeamPlayer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Players_TeamPlayervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "36cc72bf"
  
)

/* harmony default export */ var TeamPlayer = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=players-team-player.js.map