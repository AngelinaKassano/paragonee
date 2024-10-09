exports.ids = [8];
exports.modules = {

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header/MobileNavigation.vue?vue&type=template&id=ec4b379a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mobile-navigation"
  }, [_vm._ssrNode("<nav id=\"offcanvas-navigation\" class=\"offcanvas-navigation\">", "</nav>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li class=\"menu-item-has-children\">", "</li>", [_c('n-link', {
    staticClass: "text-base font-semibold capitalize block pb-4 pt-4 pt- border-b-1 border-gray-200 transition-all hover:text-primary text-black text-dark",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Главная")])], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-item-has-children relative block\">", "</li>", [_c('n-link', {
    staticClass: "text-base font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black",
    attrs: {
      "to": "/game"
    }
  }, [_vm._v("Наши игры")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"menu-item-has-children relative block\">", "</li>", [_c('n-link', {
    staticClass: "text-base font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black",
    attrs: {
      "to": "/blog"
    }
  }, [_vm._v("Блог")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_c('n-link', {
    staticClass: "text-base font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black",
    attrs: {
      "to": "/contact"
    }
  }, [_vm._v("Контакты")])], 1)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Header/MobileNavigation.vue?vue&type=template&id=ec4b379a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header/MobileNavigation.vue?vue&type=script&lang=js
/* harmony default export */ var MobileNavigationvue_type_script_lang_js = ({
  name: 'MobileNavMenu',
  mounted() {
    const offCanvasNav = document.querySelector('#offcanvas-navigation');
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
    const anchorLinks = offCanvasNav.querySelectorAll('a');
    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i class='plus-minus'></i></span>");
    }
    const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
    const numMenuExpand = menuExpand.length;
    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }
    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
    const sideMenuExpand = e => {
      e.currentTarget.parentElement.classList.toggle('active');
    };
    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
      offcanvasMobileMenu === null || offcanvasMobileMenu === void 0 ? void 0 : offcanvasMobileMenu.classList.remove('active');
    };
  }
});
// CONCATENATED MODULE: ./components/Header/MobileNavigation.vue?vue&type=script&lang=js
 /* harmony default export */ var Header_MobileNavigationvue_type_script_lang_js = (MobileNavigationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header/MobileNavigation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Header_MobileNavigationvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7e334d44"
  
)

/* harmony default export */ var MobileNavigation = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=header-mobile-navigation.js.map