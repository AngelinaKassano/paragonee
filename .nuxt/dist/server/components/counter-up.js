exports.ids = [1];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=counter-up.js.map