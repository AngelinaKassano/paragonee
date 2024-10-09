exports.ids = [25,32];
exports.modules = {

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/TitleSection.vue?vue&type=template&id=6e4a2a40
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center lg:mb-15 md:mb-12 mb-8"
  }, [_vm._ssrNode((_vm.title ? "<h2 class=\"text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl mx-auto\">" + _vm._ssrEscape(" " + _vm._s(_vm.title) + " ") + "</h2>" : "<!---->") + " " + (_vm.text ? "<p class=\"max-w-lg text-gray-100 mx-auto text-base sm:text-lg leading-8 mt-3\">" + _vm._ssrEscape(" " + _vm._s(_vm.text) + " ") + "</p>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Title/TitleSection.vue?vue&type=template&id=6e4a2a40

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Title/TitleSection.vue?vue&type=script&lang=js
/* harmony default export */ var TitleSectionvue_type_script_lang_js = ({
  props: {
    title: {
      type: String,
      required: false
    },
    text: {
      type: String,
      required: false
    }
  }
});
// CONCATENATED MODULE: ./components/Title/TitleSection.vue?vue&type=script&lang=js
 /* harmony default export */ var Title_TitleSectionvue_type_script_lang_js = (TitleSectionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Title/TitleSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Title_TitleSectionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "47f9caa8"
  
)

/* harmony default export */ var TitleSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GamerTeam.vue?vue&type=template&id=360ebe04
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container pt-32"
  }, [_c('TitleSection', {
    attrs: {
      "title": _vm.title,
      "text": _vm.text
    }
  }), _vm._ssrNode(" <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10\">" + _vm._ssrList(_vm.services, function (service, index) {
    return "<div class=\"relative group w-300 sm:w-full mx-auto\"><div><img" + _vm._ssrAttr("src", service.imgSrc) + _vm._ssrAttr("alt", service.alt) + "></div> <div class=\"flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 bg-team-shape bg-cover h-24 sm:h-20 md:h-28 lg:h-24 xl:h-32 2xl:h-32 group-hover:bg-team-hover-shape hover:transition-all\"><h3 class=\"text-white font-bold text-lg md:text-2xl uppercase mb-2 xl:mb-4 leading-tight\">" + _vm._ssrEscape(_vm._s(service.name)) + "</h3> <span class=\"text-primary text-sm md:text-base group-hover:text-white transition-all\">" + _vm._ssrEscape(_vm._s(service.subtitle)) + "</span></div></div>";
  }) + "</div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GamerTeam.vue?vue&type=template&id=360ebe04

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GamerTeam.vue?vue&type=script&lang=js
/* harmony default export */ var GamerTeamvue_type_script_lang_js = ({
  components: {
    TitleSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 44))
  },
  data() {
    return {
      title: "Meet Gamer Team",
      text: "When unknown printer took type and scrambled it to make type specimen book centuries",
      services: [{
        imgSrc: "/images/others/team1.webp",
        alt: "Service Image",
        name: "Tasia Mancuso",
        subtitle: "SEO & Founder"
      }, {
        imgSrc: "/images/others/team2.webp",
        alt: "Service Image",
        name: "Rosaline Emmons",
        subtitle: "Team Leader"
      }, {
        imgSrc: "/images/others/team3.webp",
        alt: "Service Image",
        name: "Willbarn Beharn",
        subtitle: "Team Member"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/GamerTeam.vue?vue&type=script&lang=js
 /* harmony default export */ var components_GamerTeamvue_type_script_lang_js = (GamerTeamvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/GamerTeam.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GamerTeamvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7e0ffa76"
  
)

/* harmony default export */ var GamerTeam = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TitleSection: __webpack_require__(44).default})


/***/ })

};;
//# sourceMappingURL=gamer-team.js.map