module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		12: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"0":"components/header-off-canvas-mobile-menu","1":"components/counter-up","2":"components/button-primary-button","3":"components/button-signup-button","4":"components/contact-banner","5":"components/contact-details","6":"components/games-game-details","7":"components/header-main-menu","8":"components/header-mobile-navigation","9":"components/live-stream","10":"components/matches-match-details","11":"components/players-team-player","13":"components/about-us","14":"components/all-games","15":"components/all-players","16":"components/blog","17":"components/blog-grid","18":"components/blog-list","19":"components/blog-list-dynamic","20":"components/blog-listin-details","21":"components/blog-post","22":"components/blog-sidebar","23":"components/contact-form","24":"components/faq-accordion","25":"components/gamer-team","26":"components/games-popular-game","27":"components/gaming-world","28":"components/google-maps","29":"components/hero-banner","30":"components/sign-up","31":"components/testimonial","32":"components/title-section","33":"components/upcoming-matches","34":"components/upcoming-matches-home","35":"pages/404Error","36":"pages/FAQ","37":"pages/about","38":"pages/blog","39":"pages/blog-grid-left-sidebar","40":"pages/blog-grid-right-sidebar","41":"pages/blog-grid-without-sidebar","42":"pages/blog-left-sidebar","43":"pages/blog-right-sidebar","44":"pages/blog/11","45":"pages/blog/_slug","46":"pages/contact","47":"pages/game/_slug","48":"pages/game/index","49":"pages/index","50":"pages/match/_slug","51":"pages/match/index","52":"pages/player/_slug","53":"pages/player/index","54":"pages/signup"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=template&id=21446269
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
  }), _vm._ssrNode(" "), _c('NuxtError'), _vm._ssrNode(" "), _c('Footer')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./layouts/error.vue?vue&type=template&id=21446269

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/error.vue?vue&type=script&lang=js
/* harmony default export */ var errorvue_type_script_lang_js = ({
  components: {
    HeaderSection: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 15)),
    OffCanvasMobileMenu: () => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, 97)),
    Breadcrumb: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 17)),
    NuxtError: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)),
    ContactBanner: () => __webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(null, 43)),
    Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16))
  },
  data() {
    return {
      navOpen: false,
      BreadcrumbTitle: "Error Page",
      BreadcrumbSubTitle: "Pages"
    };
  }
});
// CONCATENATED MODULE: ./layouts/error.vue?vue&type=script&lang=js
 /* harmony default export */ var layouts_errorvue_type_script_lang_js = (errorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./layouts/error.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1e0bb966"
  
)

/* harmony default export */ var error = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderSection: __webpack_require__(15).default,Breadcrumb: __webpack_require__(17).default,NuxtError: __webpack_require__(32).default,Footer: __webpack_require__(16).default})


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("709683a2", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterWidgetTitle.vue?vue&type=template&id=0db4b256
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "xl:mb-14 sm:mb-8 mb-6"
  }, [_vm._ssrNode("<h3 class=\"xl:text-2xl text-xl text-white uppercase font-bold leading-8\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h3>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer/FooterWidgetTitle.vue?vue&type=template&id=0db4b256

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterWidgetTitle.vue?vue&type=script&lang=js
/* harmony default export */ var FooterWidgetTitlevue_type_script_lang_js = ({
  props: ['title']
});
// CONCATENATED MODULE: ./components/Footer/FooterWidgetTitle.vue?vue&type=script&lang=js
 /* harmony default export */ var Footer_FooterWidgetTitlevue_type_script_lang_js = (FooterWidgetTitlevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Footer/FooterWidgetTitle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Footer_FooterWidgetTitlevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8c0fade2"
  
)

/* harmony default export */ var FooterWidgetTitle = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("node-fetch-native");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderSection.vue?vue&type=template&id=2aac3612
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    staticClass: "fixed left-0 right-0 z-99",
    class: {
      'is-sticky': _vm.isSticky
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"flex py-3 items-center justify-between\">", "</div>", [_c('HeaderLogo'), _vm._ssrNode(" "), _c('MainMenu'), _vm._ssrNode(" "), _c('SignupButton')], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HeaderSection.vue?vue&type=template&id=2aac3612

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderSection.vue?vue&type=script&lang=js
/* harmony default export */ var HeaderSectionvue_type_script_lang_js = ({
  components: {
    HeaderLogo: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 37)),
    MainMenu: () => __webpack_require__.e(/* import() */ 7).then(__webpack_require__.bind(null, 104)),
    SignupButton: () => __webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 98))
  },
  data() {
    return {
      isSticky: false
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  }
});
// CONCATENATED MODULE: ./components/HeaderSection.vue?vue&type=script&lang=js
 /* harmony default export */ var components_HeaderSectionvue_type_script_lang_js = (HeaderSectionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeaderSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderSectionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6d94fed1"
  
)

/* harmony default export */ var HeaderSection = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderLogo: __webpack_require__(37).default})


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=36adb322
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"py-32\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"grid grid-cols-1 sm:grid-cols-12\">", "</div>", [_vm._ssrNode("<div class=\"sm:col-span-6 lg:col-span-4\">", "</div>", [_c('FooterInfoWidget')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sm:col-span-6 lg:col-span-3 mt-10 sm:mt-0\">", "</div>", [_c('FooterContactInfoWidget')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sm:col-span-6 lg:col-span-3 mt-10 lg:mt-0\">", "</div>", [_c('FooterWinnerWidget')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"sm:col-span-6 lg:col-span-2 mt-10 lg:mt-0\">", "</div>", [_c('FooterMenuList')], 1)], 2)])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"bg-gray-800 py-5\">", "</div>", [_vm._ssrNode("<div class=\"container flex justify-between relative items-center md:flex-row flex-col-reverse\">", "</div>", [_vm._ssrNode("<p class=\"text-gray-500 text-sm uppercase font-medium mb-0\">© 2024  <i class=\"icofont-heart text-primary\"></i> <a href=\"https://millant.ru\" class=\"transition-all hover:text-primary text-white\">Millant</a></p> "), _c('client-only', [_c('back-to-top', {
    staticClass: "md:absolute-center position-absolute cursor-pointer z-999 left-3/4 md:left-1/2 mb-15 sm:mb-auto",
    attrs: {
      "bottom": "auto",
      "right": "auto"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/icon/scroll-top.webp",
      "alt": ""
    }
  })])], 1), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"flex\">", "</ul>", _vm._l(_vm.links, function (link, index) {
    return _vm._ssrNode("<li tw-content-last-child-before=\"||\" class=\"text-white content-last-child-before before:ml-3 before:mr-3 before:inline-block content-before\">", "</li>", [_c('n-link', {
      staticClass: "text-gray-500 text-sm uppercase font-medium transition-all hover:text-primary",
      attrs: {
        "to": `${link.pageLink}`
      }
    }, [_vm._v(_vm._s(link.linkName))])], 1);
  }), 0)], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=36adb322

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js
/* harmony default export */ var Footervue_type_script_lang_js = ({
  components: {
    FooterInfoWidget: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33)),
    FooterContactInfoWidget: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 34)),
    FooterWinnerWidget: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 35)),
    FooterMenuList: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 36))
  },
  data() {
    return {
      links: [{
        contentBefore: "",
        pageLink: "/contact",
        linkName: "Правила поведения"
      }, {
        contentBefore: "||",
        pageLink: "/contact",
        linkName: "Пользовательское соглашение"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Footervue_type_script_lang_js = (Footervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Footer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a3270d9c"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FooterInfoWidget: __webpack_require__(33).default,FooterContactInfoWidget: __webpack_require__(34).default,FooterWinnerWidget: __webpack_require__(35).default,FooterMenuList: __webpack_require__(36).default})


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=template&id=c32dee12
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500",
    staticStyle: {
      "background-image": "url(/images/bg/breadcrumbs-bg.webp)"
    }
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center\">", "</div>", [_vm._ssrNode((_vm.BreadcrumbTitle ? "<h1 class=\"text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow\">" + _vm._ssrEscape(_vm._s(_vm.BreadcrumbTitle)) + "</h1>" : "<!---->") + " "), _vm._ssrNode("<ul class=\"flex\">", "</ul>", [_vm._ssrNode("<li>", "</li>", [_c('n-link', {
    staticClass: "text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" <li><span class=\"text-white uppercase text-base sm:text-lg font-bold mr-2\">//</span></li> <li>" + (_vm.BreadcrumbSubTitle ? "<span class=\"text-primary uppercase text-base sm:text-lg font-bold\">" + _vm._ssrEscape(_vm._s(_vm.BreadcrumbSubTitle)) + "</span>" : "<!---->") + "</li>")], 2)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=template&id=c32dee12

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Breadcrumb.vue?vue&type=script&lang=js
/* harmony default export */ var Breadcrumbvue_type_script_lang_js = ({
  props: {
    BreadcrumbTitle: {
      type: String,
      required: false
    },
    BreadcrumbSubTitle: {
      type: String,
      required: false
    }
  },
  components: {}
});
// CONCATENATED MODULE: ./components/Breadcrumb.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Breadcrumbvue_type_script_lang_js = (Breadcrumbvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Breadcrumb.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Breadcrumbvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4157afcc"
  
)

/* harmony default export */ var Breadcrumb = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("50dcbbc0", content, true)

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
module.exports = __webpack_require__(31);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_id_b64bf7b2_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{background-color:#000;height:2px;left:0;opacity:1;position:fixed;right:0;top:0;transition:width .1s,opacity .4s;width:0;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("d706d280", content, true)

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */html{line-height:1.15;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-text-size-adjust:100%}body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,\"Segoe UI\",Helvetica,Arial,\"Apple Color Emoji\",\"Segoe UI Emoji\";margin:0}hr{color:inherit;height:0}abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Consolas,\"Liberation Mono\",Menlo,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=button],[type=submit],button{-webkit-appearance:button}::-moz-focus-inner{border-style:none;padding:0}legend{padding:0}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Arial,\"Noto Sans\",\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";line-height:1.5}body{font-family:inherit;line-height:inherit}*,:after,:before{border:0 solid;box-sizing:border-box}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::-moz-placeholder, textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{color:inherit;line-height:inherit;padding:0}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-opacity:1;border-color:#e5e7eb;border-color:rgba(229,231,235,var(--tw-border-opacity))}body{font-family:\"Exo\",sans-serif;--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}img{display:inline-block}p{margin-bottom:1rem}p:last-child{margin-bottom:0}p{font-family:\"Exo\",sans-serif;line-height:1.75rem;--tw-text-opacity:1;color:#f3f3f3;color:rgba(243,243,243,var(--tw-text-opacity))}li:last-child{margin-right:0}.container{margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px;width:100%}@media (min-width:640px){.container{max-width:640px;padding-left:15px;padding-right:15px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px;padding-left:15px;padding-right:15px}}@media (min-width:1200px){.container{max-width:1200px;padding-left:15px;padding-right:15px}}.signup-btn:hover .group-hover\\:visible{visibility:visible}.signup-btn:hover .group-hover\\:bottom-8{bottom:2rem}.signup-btn:hover .group-hover\\:mr-4{margin-right:1rem}.signup-btn:hover .group-hover\\:ml-3{margin-left:.75rem}.signup-btn:hover .group-hover\\:ml-4{margin-left:1rem}.signup-btn{align-items:center;display:flex;height:3.75rem;justify-content:center;width:9.813rem}.signup-btn:hover .group-hover\\:bg-team-hover-shape{background-image:url(/images/others/tam-text-shape2.webp)}.signup-btn{font-family:\"Exo\",sans-serif;font-size:1rem;font-weight:700;line-height:1.5rem;line-height:3.75rem;text-transform:uppercase}.signup-btn,.signup-btn:hover .group-hover\\:text-white{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.signup-btn:hover .group-hover\\:opacity-70{opacity:.7}.signup-btn:hover .group-hover\\:opacity-100{opacity:1}.signup-btn:hover{opacity:.8}.primary-btn:hover .group-hover\\:visible{visibility:visible}.primary-btn:hover .group-hover\\:bottom-8{bottom:2rem}.primary-btn:hover .group-hover\\:mr-4{margin-right:1rem}.primary-btn:hover .group-hover\\:ml-3{margin-left:.75rem}.primary-btn:hover .group-hover\\:ml-4{margin-left:1rem}.primary-btn{align-items:center;display:flex;height:4.563rem;justify-content:center;width:14.375rem}.primary-btn:hover .group-hover\\:bg-team-hover-shape{background-image:url(/images/others/tam-text-shape2.webp)}.primary-btn{font-family:\"Exo\",sans-serif;font-size:1.25rem;font-weight:700;line-height:1.75rem;line-height:4.375rem}.primary-btn,.primary-btn:hover .group-hover\\:text-white{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.primary-btn:hover .group-hover\\:opacity-70{opacity:.7}.primary-btn:hover .group-hover\\:opacity-100{opacity:1}.primary-btn:hover{opacity:.8}@media (min-width:768px){.primary-btn{font-size:1.5rem;line-height:2rem;line-height:3.75rem}}.absolute-center{left:50%;position:absolute;top:50%;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(-50%) translateY(-50%) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));--tw-translate-x:-50%;--tw-translate-y:-50%;transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.is-sticky{left:0;--tw-bg-opacity:1;background-color:rgba(20,14,56,.9);background-color:rgba(20,14,56,var(--tw-bg-opacity));--tw-bg-opacity:0.9}.is-sticky,.popup-mobile-menu{position:fixed;top:0;width:100%;z-index:99}.popup-mobile-menu{height:100vh;opacity:0;right:0;transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);visibility:hidden}.show-mobile-menu{opacity:1;visibility:visible}.mobile-menu-overlay{cursor:not-allowed;height:100%;left:0;position:absolute;top:0;width:100%;--tw-bg-opacity:1;background-color:rgba(0,0,0,.5);background-color:rgba(0,0,0,var(--tw-bg-opacity));--tw-bg-opacity:0.5;content:\"\"}.menu-expand{cursor:pointer;height:2.25rem;position:absolute;right:0;top:.625rem;width:2.25rem;--tw-bg-opacity:1;background-color:#140e38;background-color:rgba(20,14,56,var(--tw-bg-opacity))}.menu-expand:hover{--tw-bg-opacity:1;background-color:#374151;background-color:rgba(55,65,81,var(--tw-bg-opacity))}.menu-expand{--tw-bg-opacity:0.8;line-height:2.25rem;opacity:.75;text-align:center}.plus-minus{position:relative}.plus-minus:before{position:absolute}.plus-minus{left:50%;top:50%}.plus-minus:before{top:0}.plus-minus,.plus-minus:before{display:block}.plus-minus{width:.75rem}.plus-minus:before{width:100%}.plus-minus,.plus-minus:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.plus-minus{--tw-translate-x:-50%;--tw-translate-y:-50%}.plus-minus:before{--tw-rotate:90deg}.plus-minus,.plus-minus:before{border-bottom-width:1px}.plus-minus{text-align:center;transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.plus-minus:before{content:attr(tw-content-before)}.menu-item-has-children .sub-menu{height:0;opacity:0;transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);visibility:hidden}.menu-item-has-children.active .sub-menu{height:100%;opacity:1;padding-left:0;visibility:visible}.menu-item-has-children.active .menu-expand{--tw-bg-opacity:1;background-color:rgba(55,65,81,.8);background-color:rgba(55,65,81,var(--tw-bg-opacity));--tw-bg-opacity:0.8}.menu-item-has-children.active .menu-expand .plus-minus:before{--tw-rotate:0deg}.menu-item-has-children.active .menu-expand .plus-minus{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.visible{visibility:visible}.invisible{visibility:hidden}.group:hover .group-hover\\:visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.after\\:absolute:after,.before\\:absolute:before{position:absolute}.top-0{top:0}.top-2\\/4{top:50%}.right-0{right:0}.right-3{right:.75rem}.bottom-0{bottom:0}.left-0{left:0}.left-3{left:.75rem}.left-1\\/2{left:50%}.left-3\\/4{left:75%}.before\\:top-0:before{top:0}.before\\:top-1\\/2:before{top:50%}.before\\:right-0:before{right:0}.before\\:bottom-0:before{bottom:0}.before\\:left-0:before{left:0}.before\\:left-1\\/2:before{left:50%}.after\\:top-3:after{top:.75rem}.after\\:right-4:after{right:1rem}.group:hover .group-hover\\:bottom-8{bottom:2rem}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-99{z-index:99}.z-999{z-index:999}.z-n1{z-index:-1}.before\\:z-20:before{z-index:20}.before\\:z-n1:before{z-index:-1}.col-span-2{grid-column:span 2/span 2}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.m-auto{margin:auto}.mx-auto{margin-left:auto;margin-right:auto}.my-1{margin-bottom:.25rem;margin-top:.25rem}.my-8{margin-bottom:2rem;margin-top:2rem}.my-15{margin-bottom:3.75rem;margin-top:3.75rem}.my-16{margin-bottom:4rem;margin-top:4rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.mt-8{margin-top:2rem}.mt-10{margin-top:2.5rem}.mt-14{margin-top:3.5rem}.mt-16{margin-top:4rem}.mt-20{margin-top:5rem}.mt-24{margin-top:6rem}.mt-28{margin-top:7rem}.mt-32{margin-top:8rem}.mt-73{margin-top:4.563rem}.mr-0{margin-right:0}.mr-2{margin-right:.5rem}.mr-3{margin-right:.75rem}.mr-4{margin-right:1rem}.mr-5{margin-right:1.25rem}.mr-6{margin-right:1.5rem}.mr-8{margin-right:2rem}.mr-12{margin-right:3rem}.mr-14{margin-right:3.5rem}.mb-0{margin-bottom:0}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mb-7{margin-bottom:1.75rem}.mb-8{margin-bottom:2rem}.mb-9{margin-bottom:2.25rem}.mb-10{margin-bottom:2.5rem}.mb-12{margin-bottom:3rem}.mb-15{margin-bottom:3.75rem}.mb-16{margin-bottom:4rem}.mb-20{margin-bottom:5rem}.mb-68{margin-bottom:4.25rem}.mb-120{margin-bottom:7.5rem}.mb-7\\.5{margin-bottom:30px}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.ml-4{margin-left:1rem}.ml-9{margin-left:2.25rem}.group:hover .group-hover\\:mr-4{margin-right:1rem}.group:hover .group-hover\\:ml-3{margin-left:.75rem}.group:hover .group-hover\\:ml-4{margin-left:1rem}.last\\:mr-0:last-child{margin-right:0}.last\\:mb-0:last-child{margin-bottom:0}.before\\:mr-3:before{margin-right:.75rem}.before\\:ml-3:before{margin-left:.75rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.before\\:inline-block:before{display:inline-block}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-12{height:3rem}.h-14{height:3.5rem}.h-20{height:5rem}.h-24{height:6rem}.h-28{height:7rem}.h-37{height:9.813rem}.h-64{height:16rem}.h-73{height:4.563rem}.h-88{height:5.5rem}.h-120{height:7.5rem}.h-300{height:18.75rem}.h-365{height:22.813rem}.h-460{height:28.75rem}.h-620{height:38.75rem}.h-auto{height:auto}.h-full{height:100%}.before\\:h-0:before{height:0}.before\\:h-1:before{height:.25rem}.before\\:h-11:before{height:2.75rem}.before\\:h-120:before{height:7.5rem}.before\\:h-0\\.5:before{height:.125rem}.before\\:h-full:before{height:100%}.after\\:h-1:after{height:.25rem}.hover\\:before\\:h-32:hover:before{height:8rem}.w-0{width:0}.w-4{width:1rem}.w-5{width:1.25rem}.w-10{width:2.5rem}.w-12{width:3rem}.w-20{width:5rem}.w-32{width:8rem}.w-36{width:9rem}.w-55{width:3.438rem}.w-88{width:5.5rem}.w-120{width:7.5rem}.w-230{width:14.375rem}.w-300{width:18.75rem}.w-450{width:28.125rem}.w-auto{width:auto}.w-0\\.5{width:.125rem}.w-full{width:100%}.before\\:w-7:before{width:1.75rem}.before\\:w-16:before{width:4rem}.before\\:w-120:before{width:7.5rem}.before\\:w-7\\.5:before{width:30px}.before\\:w-23\\.5:before{width:5.875rem}.before\\:w-full:before{width:100%}.after\\:w-1:after{width:.25rem}.hover\\:before\\:w-32:hover:before{width:8rem}.max-w-sm{max-width:24rem}.max-w-lg{max-width:32rem}.max-w-4xl{max-width:56rem}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}.before\\:transform:before,.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-x-2\\/4{--tw-translate-x:-50%}.-translate-y-2\\/4{--tw-translate-y:-50%}.before\\:-translate-x-2\\/4:before{--tw-translate-x:-50%}.before\\:-translate-y-1\\/2:before,.before\\:-translate-y-2\\/4:before{--tw-translate-y:-50%}.rotate-12{--tw-rotate:12deg}.hover\\:rotate-90:hover{--tw-rotate:90deg}@keyframes spin{to{transform:rotate(1turn)}}@keyframes ping{75%,to{opacity:0;transform:scale(2)}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}.cursor-pointer{cursor:pointer}.cursor-text{cursor:text}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-3{gap:.75rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.gap-9{gap:2.25rem}.gap-10{gap:2.5rem}.gap-12{gap:3rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.5rem;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-x-3>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:.75rem;margin-left:calc(.75rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(.75rem*var(--tw-space-x-reverse))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:1rem;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:0;margin-right:calc(1rem*var(--tw-space-x-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-scroll{overflow-y:scroll}.rounded-50{border-radius:3.125rem}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:9999px}.rounded-4xl{border-radius:2.375rem}.before\\:rounded-full:before{border-radius:9999px}.before\\:rounded-4xl:before{border-radius:2.375rem}.after\\:rounded-full:after{border-radius:9999px}.border-2{border-width:2px}.before\\:border-4:before,.border-4{border-width:4px}.border-t-2{border-top-width:2px}.border-b-1{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-solid{border-style:solid}.border-gray-200{--tw-border-opacity:1;border-color:#ededed;border-color:rgba(237,237,237,var(--tw-border-opacity))}.border-gray-400{--tw-border-opacity:1;border-color:#9ca3af;border-color:rgba(156,163,175,var(--tw-border-opacity))}.border-yellow{--tw-border-opacity:1;border-color:#ffb300;border-color:rgba(255,179,0,var(--tw-border-opacity))}.border-secondary-80{--tw-border-opacity:1;border-color:#281d59;border-color:rgba(40,29,89,var(--tw-border-opacity))}.border-bright{--tw-border-opacity:1;border-color:#1de3eb;border-color:rgba(29,227,235,var(--tw-border-opacity))}.border-punch{--tw-border-opacity:1;border-color:#df4c21;border-color:rgba(223,76,33,var(--tw-border-opacity))}.border-light-blue-500{--tw-border-opacity:1;border-color:#281e4d;border-color:rgba(40,30,77,var(--tw-border-opacity))}.hover\\:border-yellow:hover{--tw-border-opacity:1;border-color:#ffb300;border-color:rgba(255,179,0,var(--tw-border-opacity))}.hover\\:border-primary:hover{--tw-border-opacity:1;border-color:#b154f0;border-color:rgba(177,84,240,var(--tw-border-opacity))}.hover\\:border-bright:hover{--tw-border-opacity:1;border-color:#1de3eb;border-color:rgba(29,227,235,var(--tw-border-opacity))}.hover\\:border-punch:hover{--tw-border-opacity:1;border-color:#df4c21;border-color:rgba(223,76,33,var(--tw-border-opacity))}.before\\:border-white:before{--tw-border-opacity:1;border-color:#fff;border-color:rgba(255,255,255,var(--tw-border-opacity))}.before\\:border-opacity-20:before{--tw-border-opacity:0.2}.bg-transparent{background-color:transparent}.bg-black{--tw-bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-gray-800{--tw-bg-opacity:1;background-color:#140e38;background-color:rgba(20,14,56,var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity:1;background-color:#111827;background-color:rgba(17,24,39,var(--tw-bg-opacity))}.bg-primary{--tw-bg-opacity:1;background-color:#b154f0;background-color:rgba(177,84,240,var(--tw-bg-opacity))}.bg-secondary-80{--tw-bg-opacity:1;background-color:#281d59;background-color:rgba(40,29,89,var(--tw-bg-opacity))}.bg-secondary-100{--tw-bg-opacity:1;background-color:#09002a;background-color:rgba(9,0,42,var(--tw-bg-opacity))}.hover\\:bg-yellow:hover{--tw-bg-opacity:1;background-color:#ffb300;background-color:rgba(255,179,0,var(--tw-bg-opacity))}.hover\\:bg-primary:hover{--tw-bg-opacity:1;background-color:#b154f0;background-color:rgba(177,84,240,var(--tw-bg-opacity))}.hover\\:bg-secondary-80:hover{--tw-bg-opacity:1;background-color:#281d59;background-color:rgba(40,29,89,var(--tw-bg-opacity))}.hover\\:bg-bright:hover{--tw-bg-opacity:1;background-color:#1de3eb;background-color:rgba(29,227,235,var(--tw-bg-opacity))}.hover\\:bg-punch:hover{--tw-bg-opacity:1;background-color:#df4c21;background-color:rgba(223,76,33,var(--tw-bg-opacity))}.before\\:bg-transparent:before{background-color:transparent}.before\\:bg-black:before{--tw-bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.after\\:bg-primary:after,.before\\:bg-primary:before{--tw-bg-opacity:1;background-color:#b154f0;background-color:rgba(177,84,240,var(--tw-bg-opacity))}.bg-arrow-shape{background-image:url(/images/icon/navigation-bg1.webp)}.bg-arrow-hover-shape{background-image:url(/images/icon/navigation-bg2.webp)}.bg-team-shape{background-image:url(/images/others/tam-text-shape.webp)}.group:hover .group-hover\\:bg-team-hover-shape{background-image:url(/images/others/tam-text-shape2.webp)}.before\\:bg-nav-shape:before{background-image:url(/images/others/menu_shape.webp)}.hover\\:bg-arrow-shape:hover{background-image:url(/images/icon/navigation-bg1.webp)}.hover\\:bg-arrow-hover-shape:hover{background-image:url(/images/icon/navigation-bg2.webp)}.bg-cover{background-size:cover}.bg-scroll{background-attachment:scroll}.bg-center{background-position:50%}.bg-no-repeat{background-repeat:no-repeat}.object-cover{-o-object-fit:cover;object-fit:cover}.p-8{padding:2rem}.px-0{padding-left:0;padding-right:0}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.px-9{padding-left:2.25rem;padding-right:2.25rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-20{padding-left:5rem;padding-right:5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-5{padding-bottom:1.25rem;padding-top:1.25rem}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.py-7{padding-bottom:1.75rem;padding-top:1.75rem}.py-8{padding-bottom:2rem;padding-top:2rem}.py-9{padding-bottom:2.25rem;padding-top:2.25rem}.py-10{padding-bottom:2.5rem;padding-top:2.5rem}.py-12{padding-bottom:3rem;padding-top:3rem}.py-14{padding-bottom:3.5rem;padding-top:3.5rem}.py-32{padding-bottom:8rem;padding-top:8rem}.pt-0{padding-top:0}.pt-4{padding-top:1rem}.pt-8{padding-top:2rem}.pt-12{padding-top:3rem}.pt-32{padding-top:8rem}.pt-120{padding-top:7.5rem}.pr-6{padding-right:1.5rem}.pr-8{padding-right:2rem}.pr-16{padding-right:4rem}.pb-4{padding-bottom:1rem}.pb-8{padding-bottom:2rem}.pb-32{padding-bottom:8rem}.pb-120{padding-bottom:7.5rem}.pl-12{padding-left:3rem}.pl-15{padding-left:3.75rem}.pl-24{padding-left:6rem}.text-left{text-align:left}.text-center{text-align:center}.font-metal{font-family:\"Metal Mania\",cursive}.font-exo{font-family:\"Exo\",sans-serif}.text-sm{font-size:.875rem;line-height:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem}.text-lg,.text-xl{line-height:1.75rem}.text-xl{font-size:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-5xl{font-size:3rem;line-height:1}.font-normal{font-weight:400}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.italic{font-style:italic}.leading-8{line-height:2rem}.leading-9{line-height:2.25rem}.leading-10{line-height:2.5rem}.leading-70{line-height:4.375rem}.leading-tight{line-height:1.25}.tracking-wide{letter-spacing:.02em}.text-black{--tw-text-opacity:1;color:#000;color:rgba(0,0,0,var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.text-gray-100{--tw-text-opacity:1;color:#f3f3f3;color:rgba(243,243,243,var(--tw-text-opacity))}.text-gray-300{--tw-text-opacity:1;color:#d1d5db;color:rgba(209,213,219,var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:#9ca3af;color:rgba(156,163,175,var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:#aaa6b9;color:rgba(170,166,185,var(--tw-text-opacity))}.text-yellow{--tw-text-opacity:1;color:#ffb300;color:rgba(255,179,0,var(--tw-text-opacity))}.text-primary{--tw-text-opacity:1;color:#b154f0;color:rgba(177,84,240,var(--tw-text-opacity))}.text-warning{--tw-text-opacity:1;color:#ffa700;color:rgba(255,167,0,var(--tw-text-opacity))}.group:hover .group-hover\\:text-white{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.hover\\:text-primary:hover{--tw-text-opacity:1;color:#b154f0;color:rgba(177,84,240,var(--tw-text-opacity))}.opacity-0{opacity:0}.opacity-100{opacity:1}.group:hover .group-hover\\:opacity-70{opacity:.7}.group:hover .group-hover\\:opacity-100{opacity:1}.hover\\:opacity-80:hover{opacity:.8}.before\\:opacity-0:before{opacity:0}.before\\:opacity-50:before{opacity:.5}.hover\\:before\\:opacity-70:hover:before{opacity:.7}.hover\\:before\\:opacity-100:hover:before{opacity:1}*,:after,:before{--tw-shadow:0 0 transparent}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}*,:after,:before{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 transparent;--tw-ring-shadow:0 0 transparent}.before\\:transition-all:before,.hover\\:before\\:transition-all:hover:before,.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.content-before:before{content:attr(tw-content-before)}.content-last-child-before:last-child:before{content:attr(tw-content-last-child-before)}.content-after:after{content:attr(tw-content-after)}.before\\:empty-content:before{content:\"\"}.text-shadow{text-shadow:3px 3px 0 #b154f0}.position-absolute{position:absolute!important}@media (min-width:640px){.sm\\:col-span-6{grid-column:span 6/span 6}.sm\\:mt-0{margin-top:0}.sm\\:mt-5{margin-top:1.25rem}.sm\\:mr-12{margin-right:3rem}.sm\\:mb-0{margin-bottom:0}.sm\\:mb-5{margin-bottom:1.25rem}.sm\\:mb-8{margin-bottom:2rem}.sm\\:mb-auto{margin-bottom:auto}.sm\\:h-20{height:5rem}.sm\\:h-620{height:38.75rem}.sm\\:h-full{height:100%}.sm\\:w-37{width:9.813rem}.sm\\:w-64{width:16rem}.sm\\:w-auto{width:auto}.sm\\:w-full{width:100%}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:gap-x-8{-moz-column-gap:2rem;column-gap:2rem}.sm\\:px-0{padding-left:0;padding-right:0}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-14{padding-bottom:3.5rem;padding-top:3.5rem}.sm\\:pt-8{padding-top:2rem}.sm\\:text-base{font-size:1rem;line-height:1.5rem}.sm\\:text-lg{font-size:1.125rem;line-height:1.75rem}.sm\\:text-xl{font-size:1.25rem;line-height:1.75rem}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.sm\\:text-6xl{font-size:3.75rem;line-height:1}}@media (min-width:768px){.md\\:right-32{right:8rem}.md\\:left-1\\/2{left:50%}.md\\:col-span-5{grid-column:span 5/span 5}.md\\:col-span-7{grid-column:span 7/span 7}.md\\:col-start-1{grid-column-start:1}.md\\:col-start-7{grid-column-start:7}.md\\:col-end-7{grid-column-end:7}.md\\:col-end-9{grid-column-end:9}.md\\:col-end-13{grid-column-end:13}.md\\:row-auto{grid-row:auto}.md\\:my-auto{margin-bottom:auto;margin-top:auto}.md\\:mt-0{margin-top:0}.md\\:mb-0{margin-bottom:0}.md\\:mb-6{margin-bottom:1.5rem}.md\\:mb-12{margin-bottom:3rem}.md\\:mb-20{margin-bottom:5rem}.md\\:ml-9{margin-left:2.25rem}.md\\:h-20{height:5rem}.md\\:h-28{height:7rem}.md\\:h-55{height:3.438rem}.md\\:h-120{height:7.5rem}.md\\:h-460{height:28.75rem}.md\\:h-650{height:40.625rem}.md\\:w-44{width:11rem}.md\\:w-68{width:4.25rem}.md\\:w-120{width:7.5rem}.md\\:w-620{width:38.75rem}.md\\:w-2\\/5{width:40%}.md\\:w-3\\/5{width:60%}.md\\:max-w-sm{max-width:24rem}.md\\:max-w-xl{max-width:36rem}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.md\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:items-start{align-items:flex-start}.md\\:justify-start{justify-content:flex-start}.md\\:justify-end{justify-content:flex-end}.md\\:justify-between{justify-content:space-between}.md\\:gap-6{gap:1.5rem}.md\\:p-68{padding:4.25rem}.md\\:px-4{padding-left:1rem;padding-right:1rem}.md\\:px-12{padding-left:3rem;padding-right:3rem}.md\\:pt-10{padding-top:2.5rem}.md\\:pt-14{padding-top:3.5rem}.md\\:pb-12{padding-bottom:3rem}.md\\:pl-10{padding-left:2.5rem}.md\\:text-left{text-align:left}.md\\:text-center{text-align:center}.md\\:text-base{font-size:1rem;line-height:1.5rem}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}.md\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.md\\:text-6xl{font-size:3.75rem;line-height:1}.md\\:text-7xl{font-size:4.5rem;line-height:1}.md\\:leading-12{line-height:3.75rem}}@media (min-width:1024px){.lg\\:right-0{right:0}.lg\\:right-5{right:1.25rem}.lg\\:left-auto{left:auto}.lg\\:col-span-2{grid-column:span 2/span 2}.lg\\:col-span-3{grid-column:span 3/span 3}.lg\\:col-span-4{grid-column:span 4/span 4}.lg\\:col-span-8{grid-column:span 8/span 8}.lg\\:mt-0{margin-top:0}.lg\\:mr-9{margin-right:2.25rem}.lg\\:mr-12{margin-right:3rem}.lg\\:mr-16{margin-right:4rem}.lg\\:mr-20{margin-right:5rem}.lg\\:mb-0{margin-bottom:0}.lg\\:mb-6{margin-bottom:1.5rem}.lg\\:mb-7{margin-bottom:1.75rem}.lg\\:mb-15{margin-bottom:3.75rem}.lg\\:mb-32{margin-bottom:8rem}.lg\\:ml-6{margin-left:1.5rem}.lg\\:block{display:block}.lg\\:hidden{display:none}.lg\\:h-24{height:6rem}.lg\\:h-120{height:7.5rem}.lg\\:h-500{height:31.25rem}.lg\\:h-780{height:48.75rem}.lg\\:w-40{width:10rem}.lg\\:w-120{width:7.5rem}.lg\\:w-650{width:40.625rem}.lg\\:w-1\\/2{width:50%}.lg\\:max-w-2xl{max-width:43.125rem}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:flex-row{flex-direction:row}.lg\\:items-start{align-items:flex-start}.lg\\:gap-8{gap:2rem}.lg\\:px-7{padding-left:1.75rem;padding-right:1.75rem}.lg\\:px-16{padding-left:4rem;padding-right:4rem}.lg\\:px-100{padding-left:6.25rem;padding-right:6.25rem}.lg\\:pt-16{padding-top:4rem}.lg\\:pr-16{padding-right:4rem}.lg\\:pr-20{padding-right:5rem}.lg\\:text-left{text-align:left}.lg\\:text-lg{font-size:1.125rem;line-height:1.75rem}.lg\\:text-xl{font-size:1.25rem;line-height:1.75rem}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.lg\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.lg\\:text-5xl{font-size:3rem;line-height:1}.lg\\:text-5\\.5xl{font-size:5.5rem}.lg\\:text-10xl{font-size:5rem}.lg\\:leading-8{line-height:2rem}.lg\\:leading-12{line-height:3.75rem}.lg\\:leading-70{line-height:4.375rem}}@media (min-width:1280px){.xl\\:right-14{right:3.5rem}.xl\\:mr-100{margin-right:6.25rem}.xl\\:mb-4{margin-bottom:1rem}.xl\\:mb-9{margin-bottom:2.25rem}.xl\\:mb-14{margin-bottom:3.5rem}.xl\\:ml-9{margin-left:2.25rem}.xl\\:h-32{height:8rem}.xl\\:h-820{height:51.25rem}.xl\\:w-52{width:13rem}.xl\\:w-780{width:48.75rem}.xl\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.xl\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.xl\\:px-8{padding-left:2rem;padding-right:2rem}.xl\\:px-9{padding-left:2.25rem;padding-right:2.25rem}.xl\\:pl-16{padding-left:4rem}.xl\\:text-2xl{font-size:1.5rem;line-height:2rem}.xl\\:text-7xl{font-size:4.5rem;line-height:1}.xl\\:text-title{font-size:3.438rem}.xl\\:leading-70{line-height:4.375rem}}@media (min-width:1536px){.\\32xl\\:-right-28{right:-7rem}.\\32xl\\:left-auto{left:auto}.\\32xl\\:-left-28{left:-7rem}.\\32xl\\:h-32{height:8rem}.\\32xl\\:h-940{height:58.75rem}.\\32xl\\:w-52{width:13rem}.\\32xl\\:w-940{width:58.75rem}.\\32xl\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.\\32xl\\:pt-20{padding-top:5rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("5ac1ba5a", content, true)

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(27);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(28);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(29);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! \n* @package IcoFont \n* @version 1.0.1 \n* @author IcoFont https://icofont.com \n* @copyright Copyright (c) 2015 - 2018 IcoFont \n* @license - https://icofont.com/license/\n*/@font-face{font-family:IcoFont;font-style:Regular;font-weight:400;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\")}[class*=\" icofont-\"],[class^=icofont-]{font-family:IcoFont!important;speak:none;font-feature-settings:normal;font-style:normal;font-variant:normal;font-weight:400;text-transform:none;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\"liga\";line-height:1;-webkit-font-smoothing:antialiased}.icofont-angry-monster:before{content:\"\\e800\"}.icofont-bathtub:before{content:\"\\e801\"}.icofont-bird-wings:before{content:\"\\e802\"}.icofont-bow:before{content:\"\\e803\"}.icofont-castle:before{content:\"\\e804\"}.icofont-circuit:before{content:\"\\e805\"}.icofont-crown-king:before{content:\"\\e806\"}.icofont-crown-queen:before{content:\"\\e807\"}.icofont-dart:before{content:\"\\e808\"}.icofont-disability-race:before{content:\"\\e809\"}.icofont-diving-goggle:before{content:\"\\e80a\"}.icofont-eye-open:before{content:\"\\e80b\"}.icofont-flora-flower:before{content:\"\\e80c\"}.icofont-flora:before{content:\"\\e80d\"}.icofont-gift-box:before{content:\"\\e80e\"}.icofont-halloween-pumpkin:before{content:\"\\e80f\"}.icofont-hand-power:before{content:\"\\e810\"}.icofont-hand-thunder:before{content:\"\\e811\"}.icofont-king-monster:before{content:\"\\e812\"}.icofont-love:before{content:\"\\e813\"}.icofont-magician-hat:before{content:\"\\e814\"}.icofont-native-american:before{content:\"\\e815\"}.icofont-owl-look:before{content:\"\\e816\"}.icofont-phoenix:before{content:\"\\e817\"}.icofont-robot-face:before{content:\"\\e818\"}.icofont-sand-clock:before{content:\"\\e819\"}.icofont-shield-alt:before{content:\"\\e81a\"}.icofont-ship-wheel:before{content:\"\\e81b\"}.icofont-skull-danger:before{content:\"\\e81c\"}.icofont-skull-face:before{content:\"\\e81d\"}.icofont-snowmobile:before{content:\"\\e81e\"}.icofont-space-shuttle:before{content:\"\\e81f\"}.icofont-star-shape:before{content:\"\\e820\"}.icofont-swirl:before{content:\"\\e821\"}.icofont-tattoo-wing:before{content:\"\\e822\"}.icofont-throne:before{content:\"\\e823\"}.icofont-tree-alt:before{content:\"\\e824\"}.icofont-triangle:before{content:\"\\e825\"}.icofont-unity-hand:before{content:\"\\e826\"}.icofont-weed:before{content:\"\\e827\"}.icofont-woman-bird:before{content:\"\\e828\"}.icofont-bat:before{content:\"\\e829\"}.icofont-bear-face:before{content:\"\\e82a\"}.icofont-bear-tracks:before{content:\"\\e82b\"}.icofont-bear:before{content:\"\\e82c\"}.icofont-bird-alt:before{content:\"\\e82d\"}.icofont-bird-flying:before{content:\"\\e82e\"}.icofont-bird:before{content:\"\\e82f\"}.icofont-birds:before{content:\"\\e830\"}.icofont-bone:before{content:\"\\e831\"}.icofont-bull:before{content:\"\\e832\"}.icofont-butterfly-alt:before{content:\"\\e833\"}.icofont-butterfly:before{content:\"\\e834\"}.icofont-camel-alt:before{content:\"\\e835\"}.icofont-camel-head:before{content:\"\\e836\"}.icofont-camel:before{content:\"\\e837\"}.icofont-cat-alt-1:before{content:\"\\e838\"}.icofont-cat-alt-2:before{content:\"\\e839\"}.icofont-cat-alt-3:before{content:\"\\e83a\"}.icofont-cat-dog:before{content:\"\\e83b\"}.icofont-cat-face:before{content:\"\\e83c\"}.icofont-cat:before{content:\"\\e83d\"}.icofont-cow-head:before{content:\"\\e83e\"}.icofont-cow:before{content:\"\\e83f\"}.icofont-crab:before{content:\"\\e840\"}.icofont-crocodile:before{content:\"\\e841\"}.icofont-deer-head:before{content:\"\\e842\"}.icofont-dog-alt:before{content:\"\\e843\"}.icofont-dog-barking:before{content:\"\\e844\"}.icofont-dog:before{content:\"\\e845\"}.icofont-dolphin:before{content:\"\\e846\"}.icofont-duck-tracks:before{content:\"\\e847\"}.icofont-eagle-head:before{content:\"\\e848\"}.icofont-eaten-fish:before{content:\"\\e849\"}.icofont-elephant-alt:before{content:\"\\e84a\"}.icofont-elephant-head-alt:before{content:\"\\e84b\"}.icofont-elephant-head:before{content:\"\\e84c\"}.icofont-elephant:before{content:\"\\e84d\"}.icofont-elk:before{content:\"\\e84e\"}.icofont-fish-1:before{content:\"\\e84f\"}.icofont-fish-2:before{content:\"\\e850\"}.icofont-fish-3:before{content:\"\\e851\"}.icofont-fish-4:before{content:\"\\e852\"}.icofont-fish-5:before{content:\"\\e853\"}.icofont-fish:before{content:\"\\e854\"}.icofont-fox-alt:before{content:\"\\e855\"}.icofont-fox:before{content:\"\\e856\"}.icofont-frog-tracks:before{content:\"\\e857\"}.icofont-frog:before{content:\"\\e858\"}.icofont-froggy:before{content:\"\\e859\"}.icofont-giraffe-head-1:before{content:\"\\e85a\"}.icofont-giraffe-head-2:before{content:\"\\e85b\"}.icofont-giraffe-head:before{content:\"\\e85c\"}.icofont-giraffe:before{content:\"\\e85d\"}.icofont-goat-head:before{content:\"\\e85e\"}.icofont-gorilla:before{content:\"\\e85f\"}.icofont-hen-tracks:before{content:\"\\e860\"}.icofont-horse-head-1:before{content:\"\\e861\"}.icofont-horse-head-2:before{content:\"\\e862\"}.icofont-horse-head:before{content:\"\\e863\"}.icofont-horse-tracks:before{content:\"\\e864\"}.icofont-jellyfish:before{content:\"\\e865\"}.icofont-kangaroo:before{content:\"\\e866\"}.icofont-lemur:before{content:\"\\e867\"}.icofont-lion-head-1:before{content:\"\\e868\"}.icofont-lion-head-2:before{content:\"\\e869\"}.icofont-lion-head:before{content:\"\\e86a\"}.icofont-lion:before{content:\"\\e86b\"}.icofont-monkey-2:before{content:\"\\e86c\"}.icofont-monkey-3:before{content:\"\\e86d\"}.icofont-monkey-face:before{content:\"\\e86e\"}.icofont-monkey:before{content:\"\\e86f\"}.icofont-octopus-alt:before{content:\"\\e870\"}.icofont-octopus:before{content:\"\\e871\"}.icofont-owl:before{content:\"\\e872\"}.icofont-panda-face:before{content:\"\\e873\"}.icofont-panda:before{content:\"\\e874\"}.icofont-panther:before{content:\"\\e875\"}.icofont-parrot-lip:before{content:\"\\e876\"}.icofont-parrot:before{content:\"\\e877\"}.icofont-paw:before{content:\"\\e878\"}.icofont-pelican:before{content:\"\\e879\"}.icofont-penguin:before{content:\"\\e87a\"}.icofont-pig-face:before{content:\"\\e87b\"}.icofont-pig:before{content:\"\\e87c\"}.icofont-pigeon-1:before{content:\"\\e87d\"}.icofont-pigeon-2:before{content:\"\\e87e\"}.icofont-pigeon:before{content:\"\\e87f\"}.icofont-rabbit:before{content:\"\\e880\"}.icofont-rat:before{content:\"\\e881\"}.icofont-rhino-head:before{content:\"\\e882\"}.icofont-rhino:before{content:\"\\e883\"}.icofont-rooster:before{content:\"\\e884\"}.icofont-seahorse:before{content:\"\\e885\"}.icofont-seal:before{content:\"\\e886\"}.icofont-shrimp-alt:before{content:\"\\e887\"}.icofont-shrimp:before{content:\"\\e888\"}.icofont-snail-1:before{content:\"\\e889\"}.icofont-snail-2:before{content:\"\\e88a\"}.icofont-snail-3:before{content:\"\\e88b\"}.icofont-snail:before{content:\"\\e88c\"}.icofont-snake:before{content:\"\\e88d\"}.icofont-squid:before{content:\"\\e88e\"}.icofont-squirrel:before{content:\"\\e88f\"}.icofont-tiger-face:before{content:\"\\e890\"}.icofont-tiger:before{content:\"\\e891\"}.icofont-turtle:before{content:\"\\e892\"}.icofont-whale:before{content:\"\\e893\"}.icofont-woodpecker:before{content:\"\\e894\"}.icofont-zebra:before{content:\"\\e895\"}.icofont-brand-acer:before{content:\"\\e896\"}.icofont-brand-adidas:before{content:\"\\e897\"}.icofont-brand-adobe:before{content:\"\\e898\"}.icofont-brand-air-new-zealand:before{content:\"\\e899\"}.icofont-brand-airbnb:before{content:\"\\e89a\"}.icofont-brand-aircell:before{content:\"\\e89b\"}.icofont-brand-airtel:before{content:\"\\e89c\"}.icofont-brand-alcatel:before{content:\"\\e89d\"}.icofont-brand-alibaba:before{content:\"\\e89e\"}.icofont-brand-aliexpress:before{content:\"\\e89f\"}.icofont-brand-alipay:before{content:\"\\e8a0\"}.icofont-brand-amazon:before{content:\"\\e8a1\"}.icofont-brand-amd:before{content:\"\\e8a2\"}.icofont-brand-american-airlines:before{content:\"\\e8a3\"}.icofont-brand-android-robot:before{content:\"\\e8a4\"}.icofont-brand-android:before{content:\"\\e8a5\"}.icofont-brand-aol:before{content:\"\\e8a6\"}.icofont-brand-apple:before{content:\"\\e8a7\"}.icofont-brand-appstore:before{content:\"\\e8a8\"}.icofont-brand-asus:before{content:\"\\e8a9\"}.icofont-brand-ati:before{content:\"\\e8aa\"}.icofont-brand-att:before{content:\"\\e8ab\"}.icofont-brand-audi:before{content:\"\\e8ac\"}.icofont-brand-axiata:before{content:\"\\e8ad\"}.icofont-brand-bada:before{content:\"\\e8ae\"}.icofont-brand-bbc:before{content:\"\\e8af\"}.icofont-brand-bing:before{content:\"\\e8b0\"}.icofont-brand-blackberry:before{content:\"\\e8b1\"}.icofont-brand-bmw:before{content:\"\\e8b2\"}.icofont-brand-box:before{content:\"\\e8b3\"}.icofont-brand-burger-king:before{content:\"\\e8b4\"}.icofont-brand-business-insider:before{content:\"\\e8b5\"}.icofont-brand-buzzfeed:before{content:\"\\e8b6\"}.icofont-brand-cannon:before{content:\"\\e8b7\"}.icofont-brand-casio:before{content:\"\\e8b8\"}.icofont-brand-china-mobile:before{content:\"\\e8b9\"}.icofont-brand-china-telecom:before{content:\"\\e8ba\"}.icofont-brand-china-unicom:before{content:\"\\e8bb\"}.icofont-brand-cisco:before{content:\"\\e8bc\"}.icofont-brand-citibank:before{content:\"\\e8bd\"}.icofont-brand-cnet:before{content:\"\\e8be\"}.icofont-brand-cnn:before{content:\"\\e8bf\"}.icofont-brand-cocal-cola:before{content:\"\\e8c0\"}.icofont-brand-compaq:before{content:\"\\e8c1\"}.icofont-brand-debian:before{content:\"\\e8c2\"}.icofont-brand-delicious:before{content:\"\\e8c3\"}.icofont-brand-dell:before{content:\"\\e8c4\"}.icofont-brand-designbump:before{content:\"\\e8c5\"}.icofont-brand-designfloat:before{content:\"\\e8c6\"}.icofont-brand-disney:before{content:\"\\e8c7\"}.icofont-brand-dodge:before{content:\"\\e8c8\"}.icofont-brand-dove:before{content:\"\\e8c9\"}.icofont-brand-drupal:before{content:\"\\e8ca\"}.icofont-brand-ebay:before{content:\"\\e8cb\"}.icofont-brand-eleven:before{content:\"\\e8cc\"}.icofont-brand-emirates:before{content:\"\\e8cd\"}.icofont-brand-espn:before{content:\"\\e8ce\"}.icofont-brand-etihad-airways:before{content:\"\\e8cf\"}.icofont-brand-etisalat:before{content:\"\\e8d0\"}.icofont-brand-etsy:before{content:\"\\e8d1\"}.icofont-brand-fastrack:before{content:\"\\e8d2\"}.icofont-brand-fedex:before{content:\"\\e8d3\"}.icofont-brand-ferrari:before{content:\"\\e8d4\"}.icofont-brand-fitbit:before{content:\"\\e8d5\"}.icofont-brand-flikr:before{content:\"\\e8d6\"}.icofont-brand-forbes:before{content:\"\\e8d7\"}.icofont-brand-foursquare:before{content:\"\\e8d8\"}.icofont-brand-foxconn:before{content:\"\\e8d9\"}.icofont-brand-fujitsu:before{content:\"\\e8da\"}.icofont-brand-general-electric:before{content:\"\\e8db\"}.icofont-brand-gillette:before{content:\"\\e8dc\"}.icofont-brand-gizmodo:before{content:\"\\e8dd\"}.icofont-brand-gnome:before{content:\"\\e8de\"}.icofont-brand-google:before{content:\"\\e8df\"}.icofont-brand-gopro:before{content:\"\\e8e0\"}.icofont-brand-gucci:before{content:\"\\e8e1\"}.icofont-brand-hallmark:before{content:\"\\e8e2\"}.icofont-brand-hi5:before{content:\"\\e8e3\"}.icofont-brand-honda:before{content:\"\\e8e4\"}.icofont-brand-hp:before{content:\"\\e8e5\"}.icofont-brand-hsbc:before{content:\"\\e8e6\"}.icofont-brand-htc:before{content:\"\\e8e7\"}.icofont-brand-huawei:before{content:\"\\e8e8\"}.icofont-brand-hulu:before{content:\"\\e8e9\"}.icofont-brand-hyundai:before{content:\"\\e8ea\"}.icofont-brand-ibm:before{content:\"\\e8eb\"}.icofont-brand-icofont:before{content:\"\\e8ec\"}.icofont-brand-icq:before{content:\"\\e8ed\"}.icofont-brand-ikea:before{content:\"\\e8ee\"}.icofont-brand-imdb:before{content:\"\\e8ef\"}.icofont-brand-indiegogo:before{content:\"\\e8f0\"}.icofont-brand-intel:before{content:\"\\e8f1\"}.icofont-brand-ipair:before{content:\"\\e8f2\"}.icofont-brand-jaguar:before{content:\"\\e8f3\"}.icofont-brand-java:before{content:\"\\e8f4\"}.icofont-brand-joomla:before{content:\"\\e8f5\"}.icofont-brand-kickstarter:before{content:\"\\e8f6\"}.icofont-brand-kik:before{content:\"\\e8f7\"}.icofont-brand-lastfm:before{content:\"\\e8f8\"}.icofont-brand-lego:before{content:\"\\e8f9\"}.icofont-brand-lenovo:before{content:\"\\e8fa\"}.icofont-brand-levis:before{content:\"\\e8fb\"}.icofont-brand-lexus:before{content:\"\\e8fc\"}.icofont-brand-lg:before{content:\"\\e8fd\"}.icofont-brand-life-hacker:before{content:\"\\e8fe\"}.icofont-brand-linux-mint:before{content:\"\\e8ff\"}.icofont-brand-linux:before{content:\"\\e900\"}.icofont-brand-lionix:before{content:\"\\e901\"}.icofont-brand-loreal:before{content:\"\\e902\"}.icofont-brand-louis-vuitton:before{content:\"\\e903\"}.icofont-brand-mac-os:before{content:\"\\e904\"}.icofont-brand-marvel-app:before{content:\"\\e905\"}.icofont-brand-mashable:before{content:\"\\e906\"}.icofont-brand-mazda:before{content:\"\\e907\"}.icofont-brand-mcdonals:before{content:\"\\e908\"}.icofont-brand-mercedes:before{content:\"\\e909\"}.icofont-brand-micromax:before{content:\"\\e90a\"}.icofont-brand-microsoft:before{content:\"\\e90b\"}.icofont-brand-mobileme:before{content:\"\\e90c\"}.icofont-brand-mobily:before{content:\"\\e90d\"}.icofont-brand-motorola:before{content:\"\\e90e\"}.icofont-brand-msi:before{content:\"\\e90f\"}.icofont-brand-mts:before{content:\"\\e910\"}.icofont-brand-myspace:before{content:\"\\e911\"}.icofont-brand-mytv:before{content:\"\\e912\"}.icofont-brand-nasa:before{content:\"\\e913\"}.icofont-brand-natgeo:before{content:\"\\e914\"}.icofont-brand-nbc:before{content:\"\\e915\"}.icofont-brand-nescafe:before{content:\"\\e916\"}.icofont-brand-nestle:before{content:\"\\e917\"}.icofont-brand-netflix:before{content:\"\\e918\"}.icofont-brand-nexus:before{content:\"\\e919\"}.icofont-brand-nike:before{content:\"\\e91a\"}.icofont-brand-nokia:before{content:\"\\e91b\"}.icofont-brand-nvidia:before{content:\"\\e91c\"}.icofont-brand-omega:before{content:\"\\e91d\"}.icofont-brand-opensuse:before{content:\"\\e91e\"}.icofont-brand-oracle:before{content:\"\\e91f\"}.icofont-brand-panasonic:before{content:\"\\e920\"}.icofont-brand-paypal:before{content:\"\\e921\"}.icofont-brand-pepsi:before{content:\"\\e922\"}.icofont-brand-philips:before{content:\"\\e923\"}.icofont-brand-pizza-hut:before{content:\"\\e924\"}.icofont-brand-playstation:before{content:\"\\e925\"}.icofont-brand-puma:before{content:\"\\e926\"}.icofont-brand-qatar-air:before{content:\"\\e927\"}.icofont-brand-qvc:before{content:\"\\e928\"}.icofont-brand-readernaut:before{content:\"\\e929\"}.icofont-brand-redbull:before{content:\"\\e92a\"}.icofont-brand-reebok:before{content:\"\\e92b\"}.icofont-brand-reuters:before{content:\"\\e92c\"}.icofont-brand-samsung:before{content:\"\\e92d\"}.icofont-brand-sap:before{content:\"\\e92e\"}.icofont-brand-saudia-airlines:before{content:\"\\e92f\"}.icofont-brand-scribd:before{content:\"\\e930\"}.icofont-brand-shell:before{content:\"\\e931\"}.icofont-brand-siemens:before{content:\"\\e932\"}.icofont-brand-sk-telecom:before{content:\"\\e933\"}.icofont-brand-slideshare:before{content:\"\\e934\"}.icofont-brand-smashing-magazine:before{content:\"\\e935\"}.icofont-brand-snapchat:before{content:\"\\e936\"}.icofont-brand-sony-ericsson:before{content:\"\\e937\"}.icofont-brand-sony:before{content:\"\\e938\"}.icofont-brand-soundcloud:before{content:\"\\e939\"}.icofont-brand-sprint:before{content:\"\\e93a\"}.icofont-brand-squidoo:before{content:\"\\e93b\"}.icofont-brand-starbucks:before{content:\"\\e93c\"}.icofont-brand-stc:before{content:\"\\e93d\"}.icofont-brand-steam:before{content:\"\\e93e\"}.icofont-brand-suzuki:before{content:\"\\e93f\"}.icofont-brand-symbian:before{content:\"\\e940\"}.icofont-brand-t-mobile:before{content:\"\\e941\"}.icofont-brand-tango:before{content:\"\\e942\"}.icofont-brand-target:before{content:\"\\e943\"}.icofont-brand-tata-indicom:before{content:\"\\e944\"}.icofont-brand-techcrunch:before{content:\"\\e945\"}.icofont-brand-telenor:before{content:\"\\e946\"}.icofont-brand-teliasonera:before{content:\"\\e947\"}.icofont-brand-tesla:before{content:\"\\e948\"}.icofont-brand-the-verge:before{content:\"\\e949\"}.icofont-brand-thenextweb:before{content:\"\\e94a\"}.icofont-brand-toshiba:before{content:\"\\e94b\"}.icofont-brand-toyota:before{content:\"\\e94c\"}.icofont-brand-tribenet:before{content:\"\\e94d\"}.icofont-brand-ubuntu:before{content:\"\\e94e\"}.icofont-brand-unilever:before{content:\"\\e94f\"}.icofont-brand-vaio:before{content:\"\\e950\"}.icofont-brand-verizon:before{content:\"\\e951\"}.icofont-brand-viber:before{content:\"\\e952\"}.icofont-brand-vodafone:before{content:\"\\e953\"}.icofont-brand-volkswagen:before{content:\"\\e954\"}.icofont-brand-walmart:before{content:\"\\e955\"}.icofont-brand-warnerbros:before{content:\"\\e956\"}.icofont-brand-whatsapp:before{content:\"\\e957\"}.icofont-brand-wikipedia:before{content:\"\\e958\"}.icofont-brand-windows:before{content:\"\\e959\"}.icofont-brand-wire:before{content:\"\\e95a\"}.icofont-brand-wordpress:before{content:\"\\e95b\"}.icofont-brand-xiaomi:before{content:\"\\e95c\"}.icofont-brand-yahoobuzz:before{content:\"\\e95d\"}.icofont-brand-yamaha:before{content:\"\\e95e\"}.icofont-brand-youtube:before{content:\"\\e95f\"}.icofont-brand-zain:before{content:\"\\e960\"}.icofont-bank-alt:before{content:\"\\e961\"}.icofont-bank:before{content:\"\\e962\"}.icofont-barcode:before{content:\"\\e963\"}.icofont-bill-alt:before{content:\"\\e964\"}.icofont-billboard:before{content:\"\\e965\"}.icofont-briefcase-1:before{content:\"\\e966\"}.icofont-briefcase-2:before{content:\"\\e967\"}.icofont-businessman:before{content:\"\\e968\"}.icofont-businesswoman:before{content:\"\\e969\"}.icofont-chair:before{content:\"\\e96a\"}.icofont-coins:before{content:\"\\e96b\"}.icofont-company:before{content:\"\\e96c\"}.icofont-contact-add:before{content:\"\\e96d\"}.icofont-files-stack:before{content:\"\\e96e\"}.icofont-handshake-deal:before{content:\"\\e96f\"}.icofont-id-card:before{content:\"\\e970\"}.icofont-meeting-add:before{content:\"\\e971\"}.icofont-money-bag:before{content:\"\\e972\"}.icofont-pie-chart:before{content:\"\\e973\"}.icofont-presentation-alt:before{content:\"\\e974\"}.icofont-presentation:before{content:\"\\e975\"}.icofont-stamp:before{content:\"\\e976\"}.icofont-stock-mobile:before{content:\"\\e977\"}.icofont-chart-arrows-axis:before{content:\"\\e978\"}.icofont-chart-bar-graph:before{content:\"\\e979\"}.icofont-chart-flow-1:before{content:\"\\e97a\"}.icofont-chart-flow-2:before{content:\"\\e97b\"}.icofont-chart-flow:before{content:\"\\e97c\"}.icofont-chart-growth:before{content:\"\\e97d\"}.icofont-chart-histogram-alt:before{content:\"\\e97e\"}.icofont-chart-histogram:before{content:\"\\e97f\"}.icofont-chart-line-alt:before{content:\"\\e980\"}.icofont-chart-line:before{content:\"\\e981\"}.icofont-chart-pie-alt:before{content:\"\\e982\"}.icofont-chart-pie:before{content:\"\\e983\"}.icofont-chart-radar-graph:before{content:\"\\e984\"}.icofont-architecture-alt:before{content:\"\\e985\"}.icofont-architecture:before{content:\"\\e986\"}.icofont-barricade:before{content:\"\\e987\"}.icofont-bolt:before{content:\"\\e988\"}.icofont-bricks:before{content:\"\\e989\"}.icofont-building-alt:before{content:\"\\e98a\"}.icofont-bull-dozer:before{content:\"\\e98b\"}.icofont-calculations:before{content:\"\\e98c\"}.icofont-cement-mix:before{content:\"\\e98d\"}.icofont-cement-mixer:before{content:\"\\e98e\"}.icofont-concrete-mixer:before{content:\"\\e98f\"}.icofont-danger-zone:before{content:\"\\e990\"}.icofont-drill:before{content:\"\\e991\"}.icofont-eco-energy:before{content:\"\\e992\"}.icofont-eco-environmen:before{content:\"\\e993\"}.icofont-energy-air:before{content:\"\\e994\"}.icofont-energy-oil:before{content:\"\\e995\"}.icofont-energy-savings:before{content:\"\\e996\"}.icofont-energy-solar:before{content:\"\\e997\"}.icofont-energy-water:before{content:\"\\e998\"}.icofont-engineer:before{content:\"\\e999\"}.icofont-fire-extinguisher-alt:before{content:\"\\e99a\"}.icofont-fire-extinguisher:before{content:\"\\e99b\"}.icofont-fix-tools:before{content:\"\\e99c\"}.icofont-fork-lift:before{content:\"\\e99d\"}.icofont-glue-oil:before{content:\"\\e99e\"}.icofont-hammer-alt:before{content:\"\\e99f\"}.icofont-hammer:before{content:\"\\e9a0\"}.icofont-help-robot:before{content:\"\\e9a1\"}.icofont-industries-1:before{content:\"\\e9a2\"}.icofont-industries-2:before{content:\"\\e9a3\"}.icofont-industries-3:before{content:\"\\e9a4\"}.icofont-industries-4:before{content:\"\\e9a5\"}.icofont-industries-5:before{content:\"\\e9a6\"}.icofont-industries:before{content:\"\\e9a7\"}.icofont-labour:before{content:\"\\e9a8\"}.icofont-mining:before{content:\"\\e9a9\"}.icofont-paint-brush:before{content:\"\\e9aa\"}.icofont-pollution:before{content:\"\\e9ab\"}.icofont-power-zone:before{content:\"\\e9ac\"}.icofont-radio-active:before{content:\"\\e9ad\"}.icofont-recycle-alt:before{content:\"\\e9ae\"}.icofont-recycling-man:before{content:\"\\e9af\"}.icofont-safety-hat-light:before{content:\"\\e9b0\"}.icofont-safety-hat:before{content:\"\\e9b1\"}.icofont-saw:before{content:\"\\e9b2\"}.icofont-screw-driver:before{content:\"\\e9b3\"}.icofont-tools-1:before{content:\"\\e9b4\"}.icofont-tools-bag:before{content:\"\\e9b5\"}.icofont-tow-truck:before{content:\"\\e9b6\"}.icofont-trolley:before{content:\"\\e9b7\"}.icofont-trowel:before{content:\"\\e9b8\"}.icofont-under-construction-alt:before{content:\"\\e9b9\"}.icofont-under-construction:before{content:\"\\e9ba\"}.icofont-vehicle-cement:before{content:\"\\e9bb\"}.icofont-vehicle-crane:before{content:\"\\e9bc\"}.icofont-vehicle-delivery-van:before{content:\"\\e9bd\"}.icofont-vehicle-dozer:before{content:\"\\e9be\"}.icofont-vehicle-excavator:before{content:\"\\e9bf\"}.icofont-vehicle-trucktor:before{content:\"\\e9c0\"}.icofont-vehicle-wrecking:before{content:\"\\e9c1\"}.icofont-worker:before{content:\"\\e9c2\"}.icofont-workers-group:before{content:\"\\e9c3\"}.icofont-wrench:before{content:\"\\e9c4\"}.icofont-afghani-false:before{content:\"\\e9c5\"}.icofont-afghani-minus:before{content:\"\\e9c6\"}.icofont-afghani-plus:before{content:\"\\e9c7\"}.icofont-afghani-true:before{content:\"\\e9c8\"}.icofont-afghani:before{content:\"\\e9c9\"}.icofont-baht-false:before{content:\"\\e9ca\"}.icofont-baht-minus:before{content:\"\\e9cb\"}.icofont-baht-plus:before{content:\"\\e9cc\"}.icofont-baht-true:before{content:\"\\e9cd\"}.icofont-baht:before{content:\"\\e9ce\"}.icofont-bitcoin-false:before{content:\"\\e9cf\"}.icofont-bitcoin-minus:before{content:\"\\e9d0\"}.icofont-bitcoin-plus:before{content:\"\\e9d1\"}.icofont-bitcoin-true:before{content:\"\\e9d2\"}.icofont-bitcoin:before{content:\"\\e9d3\"}.icofont-dollar-flase:before{content:\"\\e9d4\"}.icofont-dollar-minus:before{content:\"\\e9d5\"}.icofont-dollar-plus:before{content:\"\\e9d6\"}.icofont-dollar-true:before{content:\"\\e9d7\"}.icofont-dollar:before{content:\"\\e9d8\"}.icofont-dong-false:before{content:\"\\e9d9\"}.icofont-dong-minus:before{content:\"\\e9da\"}.icofont-dong-plus:before{content:\"\\e9db\"}.icofont-dong-true:before{content:\"\\e9dc\"}.icofont-dong:before{content:\"\\e9dd\"}.icofont-euro-false:before{content:\"\\e9de\"}.icofont-euro-minus:before{content:\"\\e9df\"}.icofont-euro-plus:before{content:\"\\e9e0\"}.icofont-euro-true:before{content:\"\\e9e1\"}.icofont-euro:before{content:\"\\e9e2\"}.icofont-frank-false:before{content:\"\\e9e3\"}.icofont-frank-minus:before{content:\"\\e9e4\"}.icofont-frank-plus:before{content:\"\\e9e5\"}.icofont-frank-true:before{content:\"\\e9e6\"}.icofont-frank:before{content:\"\\e9e7\"}.icofont-hryvnia-false:before{content:\"\\e9e8\"}.icofont-hryvnia-minus:before{content:\"\\e9e9\"}.icofont-hryvnia-plus:before{content:\"\\e9ea\"}.icofont-hryvnia-true:before{content:\"\\e9eb\"}.icofont-hryvnia:before{content:\"\\e9ec\"}.icofont-lira-false:before{content:\"\\e9ed\"}.icofont-lira-minus:before{content:\"\\e9ee\"}.icofont-lira-plus:before{content:\"\\e9ef\"}.icofont-lira-true:before{content:\"\\e9f0\"}.icofont-lira:before{content:\"\\e9f1\"}.icofont-peseta-false:before{content:\"\\e9f2\"}.icofont-peseta-minus:before{content:\"\\e9f3\"}.icofont-peseta-plus:before{content:\"\\e9f4\"}.icofont-peseta-true:before{content:\"\\e9f5\"}.icofont-peseta:before{content:\"\\e9f6\"}.icofont-peso-false:before{content:\"\\e9f7\"}.icofont-peso-minus:before{content:\"\\e9f8\"}.icofont-peso-plus:before{content:\"\\e9f9\"}.icofont-peso-true:before{content:\"\\e9fa\"}.icofont-peso:before{content:\"\\e9fb\"}.icofont-pound-false:before{content:\"\\e9fc\"}.icofont-pound-minus:before{content:\"\\e9fd\"}.icofont-pound-plus:before{content:\"\\e9fe\"}.icofont-pound-true:before{content:\"\\e9ff\"}.icofont-pound:before{content:\"\\ea00\"}.icofont-renminbi-false:before{content:\"\\ea01\"}.icofont-renminbi-minus:before{content:\"\\ea02\"}.icofont-renminbi-plus:before{content:\"\\ea03\"}.icofont-renminbi-true:before{content:\"\\ea04\"}.icofont-renminbi:before{content:\"\\ea05\"}.icofont-riyal-false:before{content:\"\\ea06\"}.icofont-riyal-minus:before{content:\"\\ea07\"}.icofont-riyal-plus:before{content:\"\\ea08\"}.icofont-riyal-true:before{content:\"\\ea09\"}.icofont-riyal:before{content:\"\\ea0a\"}.icofont-rouble-false:before{content:\"\\ea0b\"}.icofont-rouble-minus:before{content:\"\\ea0c\"}.icofont-rouble-plus:before{content:\"\\ea0d\"}.icofont-rouble-true:before{content:\"\\ea0e\"}.icofont-rouble:before{content:\"\\ea0f\"}.icofont-rupee-false:before{content:\"\\ea10\"}.icofont-rupee-minus:before{content:\"\\ea11\"}.icofont-rupee-plus:before{content:\"\\ea12\"}.icofont-rupee-true:before{content:\"\\ea13\"}.icofont-rupee:before{content:\"\\ea14\"}.icofont-taka-false:before{content:\"\\ea15\"}.icofont-taka-minus:before{content:\"\\ea16\"}.icofont-taka-plus:before{content:\"\\ea17\"}.icofont-taka-true:before{content:\"\\ea18\"}.icofont-taka:before{content:\"\\ea19\"}.icofont-turkish-lira-false:before{content:\"\\ea1a\"}.icofont-turkish-lira-minus:before{content:\"\\ea1b\"}.icofont-turkish-lira-plus:before{content:\"\\ea1c\"}.icofont-turkish-lira-true:before{content:\"\\ea1d\"}.icofont-turkish-lira:before{content:\"\\ea1e\"}.icofont-won-false:before{content:\"\\ea1f\"}.icofont-won-minus:before{content:\"\\ea20\"}.icofont-won-plus:before{content:\"\\ea21\"}.icofont-won-true:before{content:\"\\ea22\"}.icofont-won:before{content:\"\\ea23\"}.icofont-yen-false:before{content:\"\\ea24\"}.icofont-yen-minus:before{content:\"\\ea25\"}.icofont-yen-plus:before{content:\"\\ea26\"}.icofont-yen-true:before{content:\"\\ea27\"}.icofont-yen:before{content:\"\\ea28\"}.icofont-android-nexus:before{content:\"\\ea29\"}.icofont-android-tablet:before{content:\"\\ea2a\"}.icofont-apple-watch:before{content:\"\\ea2b\"}.icofont-drawing-tablet:before{content:\"\\ea2c\"}.icofont-earphone:before{content:\"\\ea2d\"}.icofont-flash-drive:before{content:\"\\ea2e\"}.icofont-game-console:before{content:\"\\ea2f\"}.icofont-game-controller:before{content:\"\\ea30\"}.icofont-game-pad:before{content:\"\\ea31\"}.icofont-game:before{content:\"\\ea32\"}.icofont-headphone-alt-1:before{content:\"\\ea33\"}.icofont-headphone-alt-2:before{content:\"\\ea34\"}.icofont-headphone-alt-3:before{content:\"\\ea35\"}.icofont-headphone-alt:before{content:\"\\ea36\"}.icofont-headphone:before{content:\"\\ea37\"}.icofont-htc-one:before{content:\"\\ea38\"}.icofont-imac:before{content:\"\\ea39\"}.icofont-ipad:before{content:\"\\ea3a\"}.icofont-iphone:before{content:\"\\ea3b\"}.icofont-ipod-nano:before{content:\"\\ea3c\"}.icofont-ipod-touch:before{content:\"\\ea3d\"}.icofont-keyboard-alt:before{content:\"\\ea3e\"}.icofont-keyboard-wireless:before{content:\"\\ea3f\"}.icofont-keyboard:before{content:\"\\ea40\"}.icofont-laptop-alt:before{content:\"\\ea41\"}.icofont-laptop:before{content:\"\\ea42\"}.icofont-macbook:before{content:\"\\ea43\"}.icofont-magic-mouse:before{content:\"\\ea44\"}.icofont-micro-chip:before{content:\"\\ea45\"}.icofont-microphone-alt:before{content:\"\\ea46\"}.icofont-microphone:before{content:\"\\ea47\"}.icofont-monitor:before{content:\"\\ea48\"}.icofont-mouse:before{content:\"\\ea49\"}.icofont-mp3-player:before{content:\"\\ea4a\"}.icofont-nintendo:before{content:\"\\ea4b\"}.icofont-playstation-alt:before{content:\"\\ea4c\"}.icofont-psvita:before{content:\"\\ea4d\"}.icofont-radio-mic:before{content:\"\\ea4e\"}.icofont-radio:before{content:\"\\ea4f\"}.icofont-refrigerator:before{content:\"\\ea50\"}.icofont-samsung-galaxy:before{content:\"\\ea51\"}.icofont-surface-tablet:before{content:\"\\ea52\"}.icofont-ui-head-phone:before{content:\"\\ea53\"}.icofont-ui-keyboard:before{content:\"\\ea54\"}.icofont-washing-machine:before{content:\"\\ea55\"}.icofont-wifi-router:before{content:\"\\ea56\"}.icofont-wii-u:before{content:\"\\ea57\"}.icofont-windows-lumia:before{content:\"\\ea58\"}.icofont-wireless-mouse:before{content:\"\\ea59\"}.icofont-xbox-360:before{content:\"\\ea5a\"}.icofont-arrow-down:before{content:\"\\ea5b\"}.icofont-arrow-left:before{content:\"\\ea5c\"}.icofont-arrow-right:before{content:\"\\ea5d\"}.icofont-arrow-up:before{content:\"\\ea5e\"}.icofont-block-down:before{content:\"\\ea5f\"}.icofont-block-left:before{content:\"\\ea60\"}.icofont-block-right:before{content:\"\\ea61\"}.icofont-block-up:before{content:\"\\ea62\"}.icofont-bubble-down:before{content:\"\\ea63\"}.icofont-bubble-left:before{content:\"\\ea64\"}.icofont-bubble-right:before{content:\"\\ea65\"}.icofont-bubble-up:before{content:\"\\ea66\"}.icofont-caret-down:before{content:\"\\ea67\"}.icofont-caret-left:before{content:\"\\ea68\"}.icofont-caret-right:before{content:\"\\ea69\"}.icofont-caret-up:before{content:\"\\ea6a\"}.icofont-circled-down:before{content:\"\\ea6b\"}.icofont-circled-left:before{content:\"\\ea6c\"}.icofont-circled-right:before{content:\"\\ea6d\"}.icofont-circled-up:before{content:\"\\ea6e\"}.icofont-collapse:before{content:\"\\ea6f\"}.icofont-cursor-drag:before{content:\"\\ea70\"}.icofont-curved-double-left:before{content:\"\\ea71\"}.icofont-curved-double-right:before{content:\"\\ea72\"}.icofont-curved-down:before{content:\"\\ea73\"}.icofont-curved-left:before{content:\"\\ea74\"}.icofont-curved-right:before{content:\"\\ea75\"}.icofont-curved-up:before{content:\"\\ea76\"}.icofont-dotted-down:before{content:\"\\ea77\"}.icofont-dotted-left:before{content:\"\\ea78\"}.icofont-dotted-right:before{content:\"\\ea79\"}.icofont-dotted-up:before{content:\"\\ea7a\"}.icofont-double-left:before{content:\"\\ea7b\"}.icofont-double-right:before{content:\"\\ea7c\"}.icofont-expand-alt:before{content:\"\\ea7d\"}.icofont-hand-down:before{content:\"\\ea7e\"}.icofont-hand-drag:before{content:\"\\ea7f\"}.icofont-hand-drag1:before{content:\"\\ea80\"}.icofont-hand-drag2:before{content:\"\\ea81\"}.icofont-hand-drawn-alt-down:before{content:\"\\ea82\"}.icofont-hand-drawn-alt-left:before{content:\"\\ea83\"}.icofont-hand-drawn-alt-right:before{content:\"\\ea84\"}.icofont-hand-drawn-alt-up:before{content:\"\\ea85\"}.icofont-hand-drawn-down:before{content:\"\\ea86\"}.icofont-hand-drawn-left:before{content:\"\\ea87\"}.icofont-hand-drawn-right:before{content:\"\\ea88\"}.icofont-hand-drawn-up:before{content:\"\\ea89\"}.icofont-hand-grippers:before{content:\"\\ea8a\"}.icofont-hand-left:before{content:\"\\ea8b\"}.icofont-hand-right:before{content:\"\\ea8c\"}.icofont-hand-up:before{content:\"\\ea8d\"}.icofont-line-block-down:before{content:\"\\ea8e\"}.icofont-line-block-left:before{content:\"\\ea8f\"}.icofont-line-block-right:before{content:\"\\ea90\"}.icofont-line-block-up:before{content:\"\\ea91\"}.icofont-long-arrow-down:before{content:\"\\ea92\"}.icofont-long-arrow-left:before{content:\"\\ea93\"}.icofont-long-arrow-right:before{content:\"\\ea94\"}.icofont-long-arrow-up:before{content:\"\\ea95\"}.icofont-rounded-collapse:before{content:\"\\ea96\"}.icofont-rounded-double-left:before{content:\"\\ea97\"}.icofont-rounded-double-right:before{content:\"\\ea98\"}.icofont-rounded-down:before{content:\"\\ea99\"}.icofont-rounded-expand:before{content:\"\\ea9a\"}.icofont-rounded-left-down:before{content:\"\\ea9b\"}.icofont-rounded-left-up:before{content:\"\\ea9c\"}.icofont-rounded-left:before{content:\"\\ea9d\"}.icofont-rounded-right-down:before{content:\"\\ea9e\"}.icofont-rounded-right-up:before{content:\"\\ea9f\"}.icofont-rounded-right:before{content:\"\\eaa0\"}.icofont-rounded-up:before{content:\"\\eaa1\"}.icofont-scroll-bubble-down:before{content:\"\\eaa2\"}.icofont-scroll-bubble-left:before{content:\"\\eaa3\"}.icofont-scroll-bubble-right:before{content:\"\\eaa4\"}.icofont-scroll-bubble-up:before{content:\"\\eaa5\"}.icofont-scroll-double-down:before{content:\"\\eaa6\"}.icofont-scroll-double-left:before{content:\"\\eaa7\"}.icofont-scroll-double-right:before{content:\"\\eaa8\"}.icofont-scroll-double-up:before{content:\"\\eaa9\"}.icofont-scroll-down:before{content:\"\\eaaa\"}.icofont-scroll-left:before{content:\"\\eaab\"}.icofont-scroll-long-down:before{content:\"\\eaac\"}.icofont-scroll-long-left:before{content:\"\\eaad\"}.icofont-scroll-long-right:before{content:\"\\eaae\"}.icofont-scroll-long-up:before{content:\"\\eaaf\"}.icofont-scroll-right:before{content:\"\\eab0\"}.icofont-scroll-up:before{content:\"\\eab1\"}.icofont-simple-down:before{content:\"\\eab2\"}.icofont-simple-left-down:before{content:\"\\eab3\"}.icofont-simple-left-up:before{content:\"\\eab4\"}.icofont-simple-left:before{content:\"\\eab5\"}.icofont-simple-right-down:before{content:\"\\eab6\"}.icofont-simple-right-up:before{content:\"\\eab7\"}.icofont-simple-right:before{content:\"\\eab8\"}.icofont-simple-up:before{content:\"\\eab9\"}.icofont-square-down:before{content:\"\\eaba\"}.icofont-square-left:before{content:\"\\eabb\"}.icofont-square-right:before{content:\"\\eabc\"}.icofont-square-up:before{content:\"\\eabd\"}.icofont-stylish-down:before{content:\"\\eabe\"}.icofont-stylish-left:before{content:\"\\eabf\"}.icofont-stylish-right:before{content:\"\\eac0\"}.icofont-stylish-up:before{content:\"\\eac1\"}.icofont-swoosh-down:before{content:\"\\eac2\"}.icofont-swoosh-left:before{content:\"\\eac3\"}.icofont-swoosh-right:before{content:\"\\eac4\"}.icofont-swoosh-up:before{content:\"\\eac5\"}.icofont-thin-double-left:before{content:\"\\eac6\"}.icofont-thin-double-right:before{content:\"\\eac7\"}.icofont-thin-down:before{content:\"\\eac8\"}.icofont-thin-left:before{content:\"\\eac9\"}.icofont-thin-right:before{content:\"\\eaca\"}.icofont-thin-up:before{content:\"\\eacb\"}.icofont-abc:before{content:\"\\eacc\"}.icofont-atom:before{content:\"\\eacd\"}.icofont-award:before{content:\"\\eace\"}.icofont-bell-alt:before{content:\"\\eacf\"}.icofont-black-board:before{content:\"\\ead0\"}.icofont-book-alt:before{content:\"\\ead1\"}.icofont-book:before{content:\"\\ead2\"}.icofont-brainstorming:before{content:\"\\ead3\"}.icofont-certificate-alt-1:before{content:\"\\ead4\"}.icofont-certificate-alt-2:before{content:\"\\ead5\"}.icofont-certificate:before{content:\"\\ead6\"}.icofont-education:before{content:\"\\ead7\"}.icofont-electron:before{content:\"\\ead8\"}.icofont-fountain-pen:before{content:\"\\ead9\"}.icofont-globe-alt:before{content:\"\\eada\"}.icofont-graduate-alt:before{content:\"\\eadb\"}.icofont-graduate:before{content:\"\\eadc\"}.icofont-group-students:before{content:\"\\eadd\"}.icofont-hat-alt:before{content:\"\\eade\"}.icofont-hat:before{content:\"\\eadf\"}.icofont-instrument:before{content:\"\\eae0\"}.icofont-lamp-light:before{content:\"\\eae1\"}.icofont-medal:before{content:\"\\eae2\"}.icofont-microscope-alt:before{content:\"\\eae3\"}.icofont-microscope:before{content:\"\\eae4\"}.icofont-paper:before{content:\"\\eae5\"}.icofont-pen-alt-4:before{content:\"\\eae6\"}.icofont-pen-nib:before{content:\"\\eae7\"}.icofont-pencil-alt-5:before{content:\"\\eae8\"}.icofont-quill-pen:before{content:\"\\eae9\"}.icofont-read-book-alt:before{content:\"\\eaea\"}.icofont-read-book:before{content:\"\\eaeb\"}.icofont-school-bag:before{content:\"\\eaec\"}.icofont-school-bus:before{content:\"\\eaed\"}.icofont-student-alt:before{content:\"\\eaee\"}.icofont-student:before{content:\"\\eaef\"}.icofont-teacher:before{content:\"\\eaf0\"}.icofont-test-bulb:before{content:\"\\eaf1\"}.icofont-test-tube-alt:before{content:\"\\eaf2\"}.icofont-university:before{content:\"\\eaf3\"}.icofont-angry:before{content:\"\\eaf4\"}.icofont-astonished:before{content:\"\\eaf5\"}.icofont-confounded:before{content:\"\\eaf6\"}.icofont-confused:before{content:\"\\eaf7\"}.icofont-crying:before{content:\"\\eaf8\"}.icofont-dizzy:before{content:\"\\eaf9\"}.icofont-expressionless:before{content:\"\\eafa\"}.icofont-heart-eyes:before{content:\"\\eafb\"}.icofont-laughing:before{content:\"\\eafc\"}.icofont-nerd-smile:before{content:\"\\eafd\"}.icofont-open-mouth:before{content:\"\\eafe\"}.icofont-rage:before{content:\"\\eaff\"}.icofont-rolling-eyes:before{content:\"\\eb00\"}.icofont-sad:before{content:\"\\eb01\"}.icofont-simple-smile:before{content:\"\\eb02\"}.icofont-slightly-smile:before{content:\"\\eb03\"}.icofont-smirk:before{content:\"\\eb04\"}.icofont-stuck-out-tongue:before{content:\"\\eb05\"}.icofont-wink-smile:before{content:\"\\eb06\"}.icofont-worried:before{content:\"\\eb07\"}.icofont-file-alt:before{content:\"\\eb08\"}.icofont-file-audio:before{content:\"\\eb09\"}.icofont-file-avi-mp4:before{content:\"\\eb0a\"}.icofont-file-bmp:before{content:\"\\eb0b\"}.icofont-file-code:before{content:\"\\eb0c\"}.icofont-file-css:before{content:\"\\eb0d\"}.icofont-file-document:before{content:\"\\eb0e\"}.icofont-file-eps:before{content:\"\\eb0f\"}.icofont-file-excel:before{content:\"\\eb10\"}.icofont-file-exe:before{content:\"\\eb11\"}.icofont-file-file:before{content:\"\\eb12\"}.icofont-file-flv:before{content:\"\\eb13\"}.icofont-file-gif:before{content:\"\\eb14\"}.icofont-file-html5:before{content:\"\\eb15\"}.icofont-file-image:before{content:\"\\eb16\"}.icofont-file-iso:before{content:\"\\eb17\"}.icofont-file-java:before{content:\"\\eb18\"}.icofont-file-javascript:before{content:\"\\eb19\"}.icofont-file-jpg:before{content:\"\\eb1a\"}.icofont-file-midi:before{content:\"\\eb1b\"}.icofont-file-mov:before{content:\"\\eb1c\"}.icofont-file-mp3:before{content:\"\\eb1d\"}.icofont-file-pdf:before{content:\"\\eb1e\"}.icofont-file-php:before{content:\"\\eb1f\"}.icofont-file-png:before{content:\"\\eb20\"}.icofont-file-powerpoint:before{content:\"\\eb21\"}.icofont-file-presentation:before{content:\"\\eb22\"}.icofont-file-psb:before{content:\"\\eb23\"}.icofont-file-psd:before{content:\"\\eb24\"}.icofont-file-python:before{content:\"\\eb25\"}.icofont-file-ruby:before{content:\"\\eb26\"}.icofont-file-spreadsheet:before{content:\"\\eb27\"}.icofont-file-sql:before{content:\"\\eb28\"}.icofont-file-svg:before{content:\"\\eb29\"}.icofont-file-text:before{content:\"\\eb2a\"}.icofont-file-tiff:before{content:\"\\eb2b\"}.icofont-file-video:before{content:\"\\eb2c\"}.icofont-file-wave:before{content:\"\\eb2d\"}.icofont-file-wmv:before{content:\"\\eb2e\"}.icofont-file-word:before{content:\"\\eb2f\"}.icofont-file-zip:before{content:\"\\eb30\"}.icofont-cycling-alt:before{content:\"\\eb31\"}.icofont-cycling:before{content:\"\\eb32\"}.icofont-dumbbell:before{content:\"\\eb33\"}.icofont-dumbbells:before{content:\"\\eb34\"}.icofont-gym-alt-1:before{content:\"\\eb35\"}.icofont-gym-alt-2:before{content:\"\\eb36\"}.icofont-gym-alt-3:before{content:\"\\eb37\"}.icofont-gym:before{content:\"\\eb38\"}.icofont-muscle-weight:before{content:\"\\eb39\"}.icofont-muscle:before{content:\"\\eb3a\"}.icofont-apple:before{content:\"\\eb3b\"}.icofont-arabian-coffee:before{content:\"\\eb3c\"}.icofont-artichoke:before{content:\"\\eb3d\"}.icofont-asparagus:before{content:\"\\eb3e\"}.icofont-avocado:before{content:\"\\eb3f\"}.icofont-baby-food:before{content:\"\\eb40\"}.icofont-banana:before{content:\"\\eb41\"}.icofont-bbq:before{content:\"\\eb42\"}.icofont-beans:before{content:\"\\eb43\"}.icofont-beer:before{content:\"\\eb44\"}.icofont-bell-pepper-capsicum:before{content:\"\\eb45\"}.icofont-birthday-cake:before{content:\"\\eb46\"}.icofont-bread:before{content:\"\\eb47\"}.icofont-broccoli:before{content:\"\\eb48\"}.icofont-burger:before{content:\"\\eb49\"}.icofont-cabbage:before{content:\"\\eb4a\"}.icofont-carrot:before{content:\"\\eb4b\"}.icofont-cauli-flower:before{content:\"\\eb4c\"}.icofont-cheese:before{content:\"\\eb4d\"}.icofont-chef:before{content:\"\\eb4e\"}.icofont-cherry:before{content:\"\\eb4f\"}.icofont-chicken-fry:before{content:\"\\eb50\"}.icofont-chicken:before{content:\"\\eb51\"}.icofont-cocktail:before{content:\"\\eb52\"}.icofont-coconut-water:before{content:\"\\eb53\"}.icofont-coconut:before{content:\"\\eb54\"}.icofont-coffee-alt:before{content:\"\\eb55\"}.icofont-coffee-cup:before{content:\"\\eb56\"}.icofont-coffee-mug:before{content:\"\\eb57\"}.icofont-coffee-pot:before{content:\"\\eb58\"}.icofont-cola:before{content:\"\\eb59\"}.icofont-corn:before{content:\"\\eb5a\"}.icofont-croissant:before{content:\"\\eb5b\"}.icofont-crop-plant:before{content:\"\\eb5c\"}.icofont-cucumber:before{content:\"\\eb5d\"}.icofont-culinary:before{content:\"\\eb5e\"}.icofont-cup-cake:before{content:\"\\eb5f\"}.icofont-dining-table:before{content:\"\\eb60\"}.icofont-donut:before{content:\"\\eb61\"}.icofont-egg-plant:before{content:\"\\eb62\"}.icofont-egg-poached:before{content:\"\\eb63\"}.icofont-farmer-alt:before{content:\"\\eb64\"}.icofont-farmer:before{content:\"\\eb65\"}.icofont-fast-food:before{content:\"\\eb66\"}.icofont-food-basket:before{content:\"\\eb67\"}.icofont-food-cart:before{content:\"\\eb68\"}.icofont-fork-and-knife:before{content:\"\\eb69\"}.icofont-french-fries:before{content:\"\\eb6a\"}.icofont-fruits:before{content:\"\\eb6b\"}.icofont-grapes:before{content:\"\\eb6c\"}.icofont-honey:before{content:\"\\eb6d\"}.icofont-hot-dog:before{content:\"\\eb6e\"}.icofont-ice-cream-alt:before{content:\"\\eb6f\"}.icofont-ice-cream:before{content:\"\\eb70\"}.icofont-juice:before{content:\"\\eb71\"}.icofont-ketchup:before{content:\"\\eb72\"}.icofont-kiwi:before{content:\"\\eb73\"}.icofont-layered-cake:before{content:\"\\eb74\"}.icofont-lemon-alt:before{content:\"\\eb75\"}.icofont-lemon:before{content:\"\\eb76\"}.icofont-lobster:before{content:\"\\eb77\"}.icofont-mango:before{content:\"\\eb78\"}.icofont-milk:before{content:\"\\eb79\"}.icofont-mushroom:before{content:\"\\eb7a\"}.icofont-noodles:before{content:\"\\eb7b\"}.icofont-onion:before{content:\"\\eb7c\"}.icofont-orange:before{content:\"\\eb7d\"}.icofont-pear:before{content:\"\\eb7e\"}.icofont-peas:before{content:\"\\eb7f\"}.icofont-pepper:before{content:\"\\eb80\"}.icofont-pie-alt:before{content:\"\\eb81\"}.icofont-pie:before{content:\"\\eb82\"}.icofont-pineapple:before{content:\"\\eb83\"}.icofont-pizza-slice:before{content:\"\\eb84\"}.icofont-pizza:before{content:\"\\eb85\"}.icofont-plant:before{content:\"\\eb86\"}.icofont-popcorn:before{content:\"\\eb87\"}.icofont-potato:before{content:\"\\eb88\"}.icofont-pumpkin:before{content:\"\\eb89\"}.icofont-raddish:before{content:\"\\eb8a\"}.icofont-restaurant-menu:before{content:\"\\eb8b\"}.icofont-restaurant:before{content:\"\\eb8c\"}.icofont-salt-and-pepper:before{content:\"\\eb8d\"}.icofont-sandwich:before{content:\"\\eb8e\"}.icofont-sausage:before{content:\"\\eb8f\"}.icofont-soft-drinks:before{content:\"\\eb90\"}.icofont-soup-bowl:before{content:\"\\eb91\"}.icofont-spoon-and-fork:before{content:\"\\eb92\"}.icofont-steak:before{content:\"\\eb93\"}.icofont-strawberry:before{content:\"\\eb94\"}.icofont-sub-sandwich:before{content:\"\\eb95\"}.icofont-sushi:before{content:\"\\eb96\"}.icofont-taco:before{content:\"\\eb97\"}.icofont-tea-pot:before{content:\"\\eb98\"}.icofont-tea:before{content:\"\\eb99\"}.icofont-tomato:before{content:\"\\eb9a\"}.icofont-watermelon:before{content:\"\\eb9b\"}.icofont-wheat:before{content:\"\\eb9c\"}.icofont-baby-backpack:before{content:\"\\eb9d\"}.icofont-baby-cloth:before{content:\"\\eb9e\"}.icofont-baby-milk-bottle:before{content:\"\\eb9f\"}.icofont-baby-trolley:before{content:\"\\eba0\"}.icofont-baby:before{content:\"\\eba1\"}.icofont-candy:before{content:\"\\eba2\"}.icofont-holding-hands:before{content:\"\\eba3\"}.icofont-infant-nipple:before{content:\"\\eba4\"}.icofont-kids-scooter:before{content:\"\\eba5\"}.icofont-safety-pin:before{content:\"\\eba6\"}.icofont-teddy-bear:before{content:\"\\eba7\"}.icofont-toy-ball:before{content:\"\\eba8\"}.icofont-toy-cat:before{content:\"\\eba9\"}.icofont-toy-duck:before{content:\"\\ebaa\"}.icofont-toy-elephant:before{content:\"\\ebab\"}.icofont-toy-hand:before{content:\"\\ebac\"}.icofont-toy-horse:before{content:\"\\ebad\"}.icofont-toy-lattu:before{content:\"\\ebae\"}.icofont-toy-train:before{content:\"\\ebaf\"}.icofont-burglar:before{content:\"\\ebb0\"}.icofont-cannon-firing:before{content:\"\\ebb1\"}.icofont-cc-camera:before{content:\"\\ebb2\"}.icofont-cop-badge:before{content:\"\\ebb3\"}.icofont-cop:before{content:\"\\ebb4\"}.icofont-court-hammer:before{content:\"\\ebb5\"}.icofont-court:before{content:\"\\ebb6\"}.icofont-finger-print:before{content:\"\\ebb7\"}.icofont-gavel:before{content:\"\\ebb8\"}.icofont-handcuff-alt:before{content:\"\\ebb9\"}.icofont-handcuff:before{content:\"\\ebba\"}.icofont-investigation:before{content:\"\\ebbb\"}.icofont-investigator:before{content:\"\\ebbc\"}.icofont-jail:before{content:\"\\ebbd\"}.icofont-judge:before{content:\"\\ebbe\"}.icofont-law-alt-1:before{content:\"\\ebbf\"}.icofont-law-alt-2:before{content:\"\\ebc0\"}.icofont-law-alt-3:before{content:\"\\ebc1\"}.icofont-law-book:before{content:\"\\ebc2\"}.icofont-law-document:before{content:\"\\ebc3\"}.icofont-law-order:before{content:\"\\ebc4\"}.icofont-law-protect:before{content:\"\\ebc5\"}.icofont-law-scales:before{content:\"\\ebc6\"}.icofont-law:before{content:\"\\ebc7\"}.icofont-lawyer-alt-1:before{content:\"\\ebc8\"}.icofont-lawyer-alt-2:before{content:\"\\ebc9\"}.icofont-lawyer:before{content:\"\\ebca\"}.icofont-legal:before{content:\"\\ebcb\"}.icofont-pistol:before{content:\"\\ebcc\"}.icofont-police-badge:before{content:\"\\ebcd\"}.icofont-police-cap:before{content:\"\\ebce\"}.icofont-police-car-alt-1:before{content:\"\\ebcf\"}.icofont-police-car-alt-2:before{content:\"\\ebd0\"}.icofont-police-car:before{content:\"\\ebd1\"}.icofont-police-hat:before{content:\"\\ebd2\"}.icofont-police-van:before{content:\"\\ebd3\"}.icofont-police:before{content:\"\\ebd4\"}.icofont-thief-alt:before{content:\"\\ebd5\"}.icofont-thief:before{content:\"\\ebd6\"}.icofont-abacus-alt:before{content:\"\\ebd7\"}.icofont-abacus:before{content:\"\\ebd8\"}.icofont-angle-180:before{content:\"\\ebd9\"}.icofont-angle-45:before{content:\"\\ebda\"}.icofont-angle-90:before{content:\"\\ebdb\"}.icofont-angle:before{content:\"\\ebdc\"}.icofont-calculator-alt-1:before{content:\"\\ebdd\"}.icofont-calculator-alt-2:before{content:\"\\ebde\"}.icofont-calculator:before{content:\"\\ebdf\"}.icofont-circle-ruler-alt:before{content:\"\\ebe0\"}.icofont-circle-ruler:before{content:\"\\ebe1\"}.icofont-compass-alt-1:before{content:\"\\ebe2\"}.icofont-compass-alt-2:before{content:\"\\ebe3\"}.icofont-compass-alt-3:before{content:\"\\ebe4\"}.icofont-compass-alt-4:before{content:\"\\ebe5\"}.icofont-golden-ratio:before{content:\"\\ebe6\"}.icofont-marker-alt-1:before{content:\"\\ebe7\"}.icofont-marker-alt-2:before{content:\"\\ebe8\"}.icofont-marker-alt-3:before{content:\"\\ebe9\"}.icofont-marker:before{content:\"\\ebea\"}.icofont-math:before{content:\"\\ebeb\"}.icofont-mathematical-alt-1:before{content:\"\\ebec\"}.icofont-mathematical-alt-2:before{content:\"\\ebed\"}.icofont-mathematical:before{content:\"\\ebee\"}.icofont-pen-alt-1:before{content:\"\\ebef\"}.icofont-pen-alt-2:before{content:\"\\ebf0\"}.icofont-pen-alt-3:before{content:\"\\ebf1\"}.icofont-pen-holder-alt-1:before{content:\"\\ebf2\"}.icofont-pen-holder:before{content:\"\\ebf3\"}.icofont-pen:before{content:\"\\ebf4\"}.icofont-pencil-alt-1:before{content:\"\\ebf5\"}.icofont-pencil-alt-2:before{content:\"\\ebf6\"}.icofont-pencil-alt-3:before{content:\"\\ebf7\"}.icofont-pencil-alt-4:before{content:\"\\ebf8\"}.icofont-pencil:before{content:\"\\ebf9\"}.icofont-ruler-alt-1:before{content:\"\\ebfa\"}.icofont-ruler-alt-2:before{content:\"\\ebfb\"}.icofont-ruler-compass-alt:before{content:\"\\ebfc\"}.icofont-ruler-compass:before{content:\"\\ebfd\"}.icofont-ruler-pencil-alt-1:before{content:\"\\ebfe\"}.icofont-ruler-pencil-alt-2:before{content:\"\\ebff\"}.icofont-ruler-pencil:before{content:\"\\ec00\"}.icofont-ruler:before{content:\"\\ec01\"}.icofont-rulers-alt:before{content:\"\\ec02\"}.icofont-rulers:before{content:\"\\ec03\"}.icofont-square-root:before{content:\"\\ec04\"}.icofont-ui-calculator:before{content:\"\\ec05\"}.icofont-aids:before{content:\"\\ec06\"}.icofont-ambulance-crescent:before{content:\"\\ec07\"}.icofont-ambulance-cross:before{content:\"\\ec08\"}.icofont-ambulance:before{content:\"\\ec09\"}.icofont-autism:before{content:\"\\ec0a\"}.icofont-bandage:before{content:\"\\ec0b\"}.icofont-blind:before{content:\"\\ec0c\"}.icofont-blood-drop:before{content:\"\\ec0d\"}.icofont-blood-test:before{content:\"\\ec0e\"}.icofont-blood:before{content:\"\\ec0f\"}.icofont-brain-alt:before{content:\"\\ec10\"}.icofont-brain:before{content:\"\\ec11\"}.icofont-capsule:before{content:\"\\ec12\"}.icofont-crutch:before{content:\"\\ec13\"}.icofont-disabled:before{content:\"\\ec14\"}.icofont-dna-alt-1:before{content:\"\\ec15\"}.icofont-dna-alt-2:before{content:\"\\ec16\"}.icofont-dna:before{content:\"\\ec17\"}.icofont-doctor-alt:before{content:\"\\ec18\"}.icofont-doctor:before{content:\"\\ec19\"}.icofont-drug-pack:before{content:\"\\ec1a\"}.icofont-drug:before{content:\"\\ec1b\"}.icofont-first-aid-alt:before{content:\"\\ec1c\"}.icofont-first-aid:before{content:\"\\ec1d\"}.icofont-heart-beat-alt:before{content:\"\\ec1e\"}.icofont-heart-beat:before{content:\"\\ec1f\"}.icofont-heartbeat:before{content:\"\\ec20\"}.icofont-herbal:before{content:\"\\ec21\"}.icofont-hospital:before{content:\"\\ec22\"}.icofont-icu:before{content:\"\\ec23\"}.icofont-injection-syringe:before{content:\"\\ec24\"}.icofont-laboratory:before{content:\"\\ec25\"}.icofont-medical-sign-alt:before{content:\"\\ec26\"}.icofont-medical-sign:before{content:\"\\ec27\"}.icofont-nurse-alt:before{content:\"\\ec28\"}.icofont-nurse:before{content:\"\\ec29\"}.icofont-nursing-home:before{content:\"\\ec2a\"}.icofont-operation-theater:before{content:\"\\ec2b\"}.icofont-paralysis-disability:before{content:\"\\ec2c\"}.icofont-patient-bed:before{content:\"\\ec2d\"}.icofont-patient-file:before{content:\"\\ec2e\"}.icofont-pills:before{content:\"\\ec2f\"}.icofont-prescription:before{content:\"\\ec30\"}.icofont-pulse:before{content:\"\\ec31\"}.icofont-stethoscope-alt:before{content:\"\\ec32\"}.icofont-stethoscope:before{content:\"\\ec33\"}.icofont-stretcher:before{content:\"\\ec34\"}.icofont-surgeon-alt:before{content:\"\\ec35\"}.icofont-surgeon:before{content:\"\\ec36\"}.icofont-tablets:before{content:\"\\ec37\"}.icofont-test-bottle:before{content:\"\\ec38\"}.icofont-test-tube:before{content:\"\\ec39\"}.icofont-thermometer-alt:before{content:\"\\ec3a\"}.icofont-thermometer:before{content:\"\\ec3b\"}.icofont-tooth:before{content:\"\\ec3c\"}.icofont-xray:before{content:\"\\ec3d\"}.icofont-ui-add:before{content:\"\\ec3e\"}.icofont-ui-alarm:before{content:\"\\ec3f\"}.icofont-ui-battery:before{content:\"\\ec40\"}.icofont-ui-block:before{content:\"\\ec41\"}.icofont-ui-bluetooth:before{content:\"\\ec42\"}.icofont-ui-brightness:before{content:\"\\ec43\"}.icofont-ui-browser:before{content:\"\\ec44\"}.icofont-ui-calendar:before{content:\"\\ec45\"}.icofont-ui-call:before{content:\"\\ec46\"}.icofont-ui-camera:before{content:\"\\ec47\"}.icofont-ui-cart:before{content:\"\\ec48\"}.icofont-ui-cell-phone:before{content:\"\\ec49\"}.icofont-ui-chat:before{content:\"\\ec4a\"}.icofont-ui-check:before{content:\"\\ec4b\"}.icofont-ui-clip-board:before{content:\"\\ec4c\"}.icofont-ui-clip:before{content:\"\\ec4d\"}.icofont-ui-clock:before{content:\"\\ec4e\"}.icofont-ui-close:before{content:\"\\ec4f\"}.icofont-ui-contact-list:before{content:\"\\ec50\"}.icofont-ui-copy:before{content:\"\\ec51\"}.icofont-ui-cut:before{content:\"\\ec52\"}.icofont-ui-delete:before{content:\"\\ec53\"}.icofont-ui-dial-phone:before{content:\"\\ec54\"}.icofont-ui-edit:before{content:\"\\ec55\"}.icofont-ui-email:before{content:\"\\ec56\"}.icofont-ui-file:before{content:\"\\ec57\"}.icofont-ui-fire-wall:before{content:\"\\ec58\"}.icofont-ui-flash-light:before{content:\"\\ec59\"}.icofont-ui-flight:before{content:\"\\ec5a\"}.icofont-ui-folder:before{content:\"\\ec5b\"}.icofont-ui-game:before{content:\"\\ec5c\"}.icofont-ui-handicapped:before{content:\"\\ec5d\"}.icofont-ui-home:before{content:\"\\ec5e\"}.icofont-ui-image:before{content:\"\\ec5f\"}.icofont-ui-laoding:before{content:\"\\ec60\"}.icofont-ui-lock:before{content:\"\\ec61\"}.icofont-ui-love-add:before{content:\"\\ec62\"}.icofont-ui-love-broken:before{content:\"\\ec63\"}.icofont-ui-love-remove:before{content:\"\\ec64\"}.icofont-ui-love:before{content:\"\\ec65\"}.icofont-ui-map:before{content:\"\\ec66\"}.icofont-ui-message:before{content:\"\\ec67\"}.icofont-ui-messaging:before{content:\"\\ec68\"}.icofont-ui-movie:before{content:\"\\ec69\"}.icofont-ui-music-player:before{content:\"\\ec6a\"}.icofont-ui-music:before{content:\"\\ec6b\"}.icofont-ui-mute:before{content:\"\\ec6c\"}.icofont-ui-network:before{content:\"\\ec6d\"}.icofont-ui-next:before{content:\"\\ec6e\"}.icofont-ui-note:before{content:\"\\ec6f\"}.icofont-ui-office:before{content:\"\\ec70\"}.icofont-ui-password:before{content:\"\\ec71\"}.icofont-ui-pause:before{content:\"\\ec72\"}.icofont-ui-play-stop:before{content:\"\\ec73\"}.icofont-ui-play:before{content:\"\\ec74\"}.icofont-ui-pointer:before{content:\"\\ec75\"}.icofont-ui-power:before{content:\"\\ec76\"}.icofont-ui-press:before{content:\"\\ec77\"}.icofont-ui-previous:before{content:\"\\ec78\"}.icofont-ui-rate-add:before{content:\"\\ec79\"}.icofont-ui-rate-blank:before{content:\"\\ec7a\"}.icofont-ui-rate-remove:before{content:\"\\ec7b\"}.icofont-ui-rating:before{content:\"\\ec7c\"}.icofont-ui-record:before{content:\"\\ec7d\"}.icofont-ui-remove:before{content:\"\\ec7e\"}.icofont-ui-reply:before{content:\"\\ec7f\"}.icofont-ui-rotation:before{content:\"\\ec80\"}.icofont-ui-rss:before{content:\"\\ec81\"}.icofont-ui-search:before{content:\"\\ec82\"}.icofont-ui-settings:before{content:\"\\ec83\"}.icofont-ui-social-link:before{content:\"\\ec84\"}.icofont-ui-tag:before{content:\"\\ec85\"}.icofont-ui-text-chat:before{content:\"\\ec86\"}.icofont-ui-text-loading:before{content:\"\\ec87\"}.icofont-ui-theme:before{content:\"\\ec88\"}.icofont-ui-timer:before{content:\"\\ec89\"}.icofont-ui-touch-phone:before{content:\"\\ec8a\"}.icofont-ui-travel:before{content:\"\\ec8b\"}.icofont-ui-unlock:before{content:\"\\ec8c\"}.icofont-ui-user-group:before{content:\"\\ec8d\"}.icofont-ui-user:before{content:\"\\ec8e\"}.icofont-ui-v-card:before{content:\"\\ec8f\"}.icofont-ui-video-chat:before{content:\"\\ec90\"}.icofont-ui-video-message:before{content:\"\\ec91\"}.icofont-ui-video-play:before{content:\"\\ec92\"}.icofont-ui-video:before{content:\"\\ec93\"}.icofont-ui-volume:before{content:\"\\ec94\"}.icofont-ui-weather:before{content:\"\\ec95\"}.icofont-ui-wifi:before{content:\"\\ec96\"}.icofont-ui-zoom-in:before{content:\"\\ec97\"}.icofont-ui-zoom-out:before{content:\"\\ec98\"}.icofont-cassette-player:before{content:\"\\ec99\"}.icofont-cassette:before{content:\"\\ec9a\"}.icofont-forward:before{content:\"\\ec9b\"}.icofont-guiter:before{content:\"\\ec9c\"}.icofont-movie:before{content:\"\\ec9d\"}.icofont-multimedia:before{content:\"\\ec9e\"}.icofont-music-alt:before{content:\"\\ec9f\"}.icofont-music-disk:before{content:\"\\eca0\"}.icofont-music-note:before{content:\"\\eca1\"}.icofont-music-notes:before{content:\"\\eca2\"}.icofont-music:before{content:\"\\eca3\"}.icofont-mute-volume:before{content:\"\\eca4\"}.icofont-pause:before{content:\"\\eca5\"}.icofont-play-alt-1:before{content:\"\\eca6\"}.icofont-play-alt-2:before{content:\"\\eca7\"}.icofont-play-alt-3:before{content:\"\\eca8\"}.icofont-play-pause:before{content:\"\\eca9\"}.icofont-play:before{content:\"\\ecaa\"}.icofont-record:before{content:\"\\ecab\"}.icofont-retro-music-disk:before{content:\"\\ecac\"}.icofont-rewind:before{content:\"\\ecad\"}.icofont-song-notes:before{content:\"\\ecae\"}.icofont-sound-wave-alt:before{content:\"\\ecaf\"}.icofont-sound-wave:before{content:\"\\ecb0\"}.icofont-stop:before{content:\"\\ecb1\"}.icofont-video-alt:before{content:\"\\ecb2\"}.icofont-video-cam:before{content:\"\\ecb3\"}.icofont-video-clapper:before{content:\"\\ecb4\"}.icofont-video:before{content:\"\\ecb5\"}.icofont-volume-bar:before{content:\"\\ecb6\"}.icofont-volume-down:before{content:\"\\ecb7\"}.icofont-volume-mute:before{content:\"\\ecb8\"}.icofont-volume-off:before{content:\"\\ecb9\"}.icofont-volume-up:before{content:\"\\ecba\"}.icofont-youtube-play:before{content:\"\\ecbb\"}.icofont-2checkout-alt:before{content:\"\\ecbc\"}.icofont-2checkout:before{content:\"\\ecbd\"}.icofont-amazon-alt:before{content:\"\\ecbe\"}.icofont-amazon:before{content:\"\\ecbf\"}.icofont-american-express-alt:before{content:\"\\ecc0\"}.icofont-american-express:before{content:\"\\ecc1\"}.icofont-apple-pay-alt:before{content:\"\\ecc2\"}.icofont-apple-pay:before{content:\"\\ecc3\"}.icofont-bank-transfer-alt:before{content:\"\\ecc4\"}.icofont-bank-transfer:before{content:\"\\ecc5\"}.icofont-braintree-alt:before{content:\"\\ecc6\"}.icofont-braintree:before{content:\"\\ecc7\"}.icofont-cash-on-delivery-alt:before{content:\"\\ecc8\"}.icofont-cash-on-delivery:before{content:\"\\ecc9\"}.icofont-diners-club-alt-1:before{content:\"\\ecca\"}.icofont-diners-club-alt-2:before{content:\"\\eccb\"}.icofont-diners-club-alt-3:before{content:\"\\eccc\"}.icofont-diners-club:before{content:\"\\eccd\"}.icofont-discover-alt:before{content:\"\\ecce\"}.icofont-discover:before{content:\"\\eccf\"}.icofont-eway-alt:before{content:\"\\ecd0\"}.icofont-eway:before{content:\"\\ecd1\"}.icofont-google-wallet-alt-1:before{content:\"\\ecd2\"}.icofont-google-wallet-alt-2:before{content:\"\\ecd3\"}.icofont-google-wallet-alt-3:before{content:\"\\ecd4\"}.icofont-google-wallet:before{content:\"\\ecd5\"}.icofont-jcb-alt:before{content:\"\\ecd6\"}.icofont-jcb:before{content:\"\\ecd7\"}.icofont-maestro-alt:before{content:\"\\ecd8\"}.icofont-maestro:before{content:\"\\ecd9\"}.icofont-mastercard-alt:before{content:\"\\ecda\"}.icofont-mastercard:before{content:\"\\ecdb\"}.icofont-payoneer-alt:before{content:\"\\ecdc\"}.icofont-payoneer:before{content:\"\\ecdd\"}.icofont-paypal-alt:before{content:\"\\ecde\"}.icofont-paypal:before{content:\"\\ecdf\"}.icofont-sage-alt:before{content:\"\\ece0\"}.icofont-sage:before{content:\"\\ece1\"}.icofont-skrill-alt:before{content:\"\\ece2\"}.icofont-skrill:before{content:\"\\ece3\"}.icofont-stripe-alt:before{content:\"\\ece4\"}.icofont-stripe:before{content:\"\\ece5\"}.icofont-visa-alt:before{content:\"\\ece6\"}.icofont-visa-electron:before{content:\"\\ece7\"}.icofont-visa:before{content:\"\\ece8\"}.icofont-western-union-alt:before{content:\"\\ece9\"}.icofont-western-union:before{content:\"\\ecea\"}.icofont-boy:before{content:\"\\eceb\"}.icofont-business-man-alt-1:before{content:\"\\ecec\"}.icofont-business-man-alt-2:before{content:\"\\eced\"}.icofont-business-man-alt-3:before{content:\"\\ecee\"}.icofont-business-man:before{content:\"\\ecef\"}.icofont-female:before{content:\"\\ecf0\"}.icofont-funky-man:before{content:\"\\ecf1\"}.icofont-girl-alt:before{content:\"\\ecf2\"}.icofont-girl:before{content:\"\\ecf3\"}.icofont-group:before{content:\"\\ecf4\"}.icofont-hotel-boy-alt:before{content:\"\\ecf5\"}.icofont-hotel-boy:before{content:\"\\ecf6\"}.icofont-kid:before{content:\"\\ecf7\"}.icofont-man-in-glasses:before{content:\"\\ecf8\"}.icofont-people:before{content:\"\\ecf9\"}.icofont-support:before{content:\"\\ecfa\"}.icofont-user-alt-1:before{content:\"\\ecfb\"}.icofont-user-alt-2:before{content:\"\\ecfc\"}.icofont-user-alt-3:before{content:\"\\ecfd\"}.icofont-user-alt-4:before{content:\"\\ecfe\"}.icofont-user-alt-5:before{content:\"\\ecff\"}.icofont-user-alt-6:before{content:\"\\ed00\"}.icofont-user-alt-7:before{content:\"\\ed01\"}.icofont-user-female:before{content:\"\\ed02\"}.icofont-user-male:before{content:\"\\ed03\"}.icofont-user-suited:before{content:\"\\ed04\"}.icofont-user:before{content:\"\\ed05\"}.icofont-users-alt-1:before{content:\"\\ed06\"}.icofont-users-alt-2:before{content:\"\\ed07\"}.icofont-users-alt-3:before{content:\"\\ed08\"}.icofont-users-alt-4:before{content:\"\\ed09\"}.icofont-users-alt-5:before{content:\"\\ed0a\"}.icofont-users-alt-6:before{content:\"\\ed0b\"}.icofont-users-social:before{content:\"\\ed0c\"}.icofont-users:before{content:\"\\ed0d\"}.icofont-waiter-alt:before{content:\"\\ed0e\"}.icofont-waiter:before{content:\"\\ed0f\"}.icofont-woman-in-glasses:before{content:\"\\ed10\"}.icofont-search-1:before{content:\"\\ed11\"}.icofont-search-2:before{content:\"\\ed12\"}.icofont-search-document:before{content:\"\\ed13\"}.icofont-search-folder:before{content:\"\\ed14\"}.icofont-search-job:before{content:\"\\ed15\"}.icofont-search-map:before{content:\"\\ed16\"}.icofont-search-property:before{content:\"\\ed17\"}.icofont-search-restaurant:before{content:\"\\ed18\"}.icofont-search-stock:before{content:\"\\ed19\"}.icofont-search-user:before{content:\"\\ed1a\"}.icofont-search:before{content:\"\\ed1b\"}.icofont-500px:before{content:\"\\ed1c\"}.icofont-aim:before{content:\"\\ed1d\"}.icofont-badoo:before{content:\"\\ed1e\"}.icofont-baidu-tieba:before{content:\"\\ed1f\"}.icofont-bbm-messenger:before{content:\"\\ed20\"}.icofont-bebo:before{content:\"\\ed21\"}.icofont-behance:before{content:\"\\ed22\"}.icofont-blogger:before{content:\"\\ed23\"}.icofont-bootstrap:before{content:\"\\ed24\"}.icofont-brightkite:before{content:\"\\ed25\"}.icofont-cloudapp:before{content:\"\\ed26\"}.icofont-concrete5:before{content:\"\\ed27\"}.icofont-delicious:before{content:\"\\ed28\"}.icofont-designbump:before{content:\"\\ed29\"}.icofont-designfloat:before{content:\"\\ed2a\"}.icofont-deviantart:before{content:\"\\ed2b\"}.icofont-digg:before{content:\"\\ed2c\"}.icofont-dotcms:before{content:\"\\ed2d\"}.icofont-dribbble:before{content:\"\\ed2e\"}.icofont-dribble:before{content:\"\\ed2f\"}.icofont-dropbox:before{content:\"\\ed30\"}.icofont-ebuddy:before{content:\"\\ed31\"}.icofont-ello:before{content:\"\\ed32\"}.icofont-ember:before{content:\"\\ed33\"}.icofont-envato:before{content:\"\\ed34\"}.icofont-evernote:before{content:\"\\ed35\"}.icofont-facebook-messenger:before{content:\"\\ed36\"}.icofont-facebook:before{content:\"\\ed37\"}.icofont-feedburner:before{content:\"\\ed38\"}.icofont-flikr:before{content:\"\\ed39\"}.icofont-folkd:before{content:\"\\ed3a\"}.icofont-foursquare:before{content:\"\\ed3b\"}.icofont-friendfeed:before{content:\"\\ed3c\"}.icofont-ghost:before{content:\"\\ed3d\"}.icofont-github:before{content:\"\\ed3e\"}.icofont-gnome:before{content:\"\\ed3f\"}.icofont-google-buzz:before{content:\"\\ed40\"}.icofont-google-hangouts:before{content:\"\\ed41\"}.icofont-google-map:before{content:\"\\ed42\"}.icofont-google-plus:before{content:\"\\ed43\"}.icofont-google-talk:before{content:\"\\ed44\"}.icofont-hype-machine:before{content:\"\\ed45\"}.icofont-instagram:before{content:\"\\ed46\"}.icofont-kakaotalk:before{content:\"\\ed47\"}.icofont-kickstarter:before{content:\"\\ed48\"}.icofont-kik:before{content:\"\\ed49\"}.icofont-kiwibox:before{content:\"\\ed4a\"}.icofont-line-messenger:before{content:\"\\ed4b\"}.icofont-line:before{content:\"\\ed4c\"}.icofont-linkedin:before{content:\"\\ed4d\"}.icofont-linux-mint:before{content:\"\\ed4e\"}.icofont-live-messenger:before{content:\"\\ed4f\"}.icofont-livejournal:before{content:\"\\ed50\"}.icofont-magento:before{content:\"\\ed51\"}.icofont-meetme:before{content:\"\\ed52\"}.icofont-meetup:before{content:\"\\ed53\"}.icofont-mixx:before{content:\"\\ed54\"}.icofont-newsvine:before{content:\"\\ed55\"}.icofont-nimbuss:before{content:\"\\ed56\"}.icofont-odnoklassniki:before{content:\"\\ed57\"}.icofont-opencart:before{content:\"\\ed58\"}.icofont-oscommerce:before{content:\"\\ed59\"}.icofont-pandora:before{content:\"\\ed5a\"}.icofont-photobucket:before{content:\"\\ed5b\"}.icofont-picasa:before{content:\"\\ed5c\"}.icofont-pinterest:before{content:\"\\ed5d\"}.icofont-prestashop:before{content:\"\\ed5e\"}.icofont-qik:before{content:\"\\ed5f\"}.icofont-qq:before{content:\"\\ed60\"}.icofont-readernaut:before{content:\"\\ed61\"}.icofont-reddit:before{content:\"\\ed62\"}.icofont-renren:before{content:\"\\ed63\"}.icofont-rss:before{content:\"\\ed64\"}.icofont-shopify:before{content:\"\\ed65\"}.icofont-silverstripe:before{content:\"\\ed66\"}.icofont-skype:before{content:\"\\ed67\"}.icofont-slack:before{content:\"\\ed68\"}.icofont-slashdot:before{content:\"\\ed69\"}.icofont-slidshare:before{content:\"\\ed6a\"}.icofont-smugmug:before{content:\"\\ed6b\"}.icofont-snapchat:before{content:\"\\ed6c\"}.icofont-soundcloud:before{content:\"\\ed6d\"}.icofont-spotify:before{content:\"\\ed6e\"}.icofont-stack-exchange:before{content:\"\\ed6f\"}.icofont-stack-overflow:before{content:\"\\ed70\"}.icofont-steam:before{content:\"\\ed71\"}.icofont-stumbleupon:before{content:\"\\ed72\"}.icofont-tagged:before{content:\"\\ed73\"}.icofont-technorati:before{content:\"\\ed74\"}.icofont-telegram:before{content:\"\\ed75\"}.icofont-tinder:before{content:\"\\ed76\"}.icofont-trello:before{content:\"\\ed77\"}.icofont-tumblr:before{content:\"\\ed78\"}.icofont-twitch:before{content:\"\\ed79\"}.icofont-twitter:before{content:\"\\ed7a\"}.icofont-typo3:before{content:\"\\ed7b\"}.icofont-ubercart:before{content:\"\\ed7c\"}.icofont-viber:before{content:\"\\ed7d\"}.icofont-viddler:before{content:\"\\ed7e\"}.icofont-vimeo:before{content:\"\\ed7f\"}.icofont-vine:before{content:\"\\ed80\"}.icofont-virb:before{content:\"\\ed81\"}.icofont-virtuemart:before{content:\"\\ed82\"}.icofont-vk:before{content:\"\\ed83\"}.icofont-wechat:before{content:\"\\ed84\"}.icofont-weibo:before{content:\"\\ed85\"}.icofont-whatsapp:before{content:\"\\ed86\"}.icofont-xing:before{content:\"\\ed87\"}.icofont-yahoo:before{content:\"\\ed88\"}.icofont-yelp:before{content:\"\\ed89\"}.icofont-youku:before{content:\"\\ed8a\"}.icofont-youtube:before{content:\"\\ed8b\"}.icofont-zencart:before{content:\"\\ed8c\"}.icofont-badminton-birdie:before{content:\"\\ed8d\"}.icofont-baseball:before{content:\"\\ed8e\"}.icofont-baseballer:before{content:\"\\ed8f\"}.icofont-basketball-hoop:before{content:\"\\ed90\"}.icofont-basketball:before{content:\"\\ed91\"}.icofont-billiard-ball:before{content:\"\\ed92\"}.icofont-boot-alt-1:before{content:\"\\ed93\"}.icofont-boot-alt-2:before{content:\"\\ed94\"}.icofont-boot:before{content:\"\\ed95\"}.icofont-bowling-alt:before{content:\"\\ed96\"}.icofont-bowling:before{content:\"\\ed97\"}.icofont-canoe:before{content:\"\\ed98\"}.icofont-cheer-leader:before{content:\"\\ed99\"}.icofont-climbing:before{content:\"\\ed9a\"}.icofont-corner:before{content:\"\\ed9b\"}.icofont-field-alt:before{content:\"\\ed9c\"}.icofont-field:before{content:\"\\ed9d\"}.icofont-football-alt:before{content:\"\\ed9e\"}.icofont-football-american:before{content:\"\\ed9f\"}.icofont-football:before{content:\"\\eda0\"}.icofont-foul:before{content:\"\\eda1\"}.icofont-goal-keeper:before{content:\"\\eda2\"}.icofont-goal:before{content:\"\\eda3\"}.icofont-golf-alt:before{content:\"\\eda4\"}.icofont-golf-bag:before{content:\"\\eda5\"}.icofont-golf-cart:before{content:\"\\eda6\"}.icofont-golf-field:before{content:\"\\eda7\"}.icofont-golf:before{content:\"\\eda8\"}.icofont-golfer:before{content:\"\\eda9\"}.icofont-helmet:before{content:\"\\edaa\"}.icofont-hockey-alt:before{content:\"\\edab\"}.icofont-hockey:before{content:\"\\edac\"}.icofont-ice-skate:before{content:\"\\edad\"}.icofont-jersey-alt:before{content:\"\\edae\"}.icofont-jersey:before{content:\"\\edaf\"}.icofont-jumping:before{content:\"\\edb0\"}.icofont-kick:before{content:\"\\edb1\"}.icofont-leg:before{content:\"\\edb2\"}.icofont-match-review:before{content:\"\\edb3\"}.icofont-medal-sport:before{content:\"\\edb4\"}.icofont-offside:before{content:\"\\edb5\"}.icofont-olympic-logo:before{content:\"\\edb6\"}.icofont-olympic:before{content:\"\\edb7\"}.icofont-padding:before{content:\"\\edb8\"}.icofont-penalty-card:before{content:\"\\edb9\"}.icofont-racer:before{content:\"\\edba\"}.icofont-racing-car:before{content:\"\\edbb\"}.icofont-racing-flag-alt:before{content:\"\\edbc\"}.icofont-racing-flag:before{content:\"\\edbd\"}.icofont-racings-wheel:before{content:\"\\edbe\"}.icofont-referee:before{content:\"\\edbf\"}.icofont-refree-jersey:before{content:\"\\edc0\"}.icofont-result-sport:before{content:\"\\edc1\"}.icofont-rugby-ball:before{content:\"\\edc2\"}.icofont-rugby-player:before{content:\"\\edc3\"}.icofont-rugby:before{content:\"\\edc4\"}.icofont-runner-alt-1:before{content:\"\\edc5\"}.icofont-runner-alt-2:before{content:\"\\edc6\"}.icofont-runner:before{content:\"\\edc7\"}.icofont-score-board:before{content:\"\\edc8\"}.icofont-skiing-man:before{content:\"\\edc9\"}.icofont-skydiving-goggles:before{content:\"\\edca\"}.icofont-snow-mobile:before{content:\"\\edcb\"}.icofont-steering:before{content:\"\\edcc\"}.icofont-stopwatch:before{content:\"\\edcd\"}.icofont-substitute:before{content:\"\\edce\"}.icofont-swimmer:before{content:\"\\edcf\"}.icofont-table-tennis:before{content:\"\\edd0\"}.icofont-team-alt:before{content:\"\\edd1\"}.icofont-team:before{content:\"\\edd2\"}.icofont-tennis-player:before{content:\"\\edd3\"}.icofont-tennis:before{content:\"\\edd4\"}.icofont-tracking:before{content:\"\\edd5\"}.icofont-trophy-alt:before{content:\"\\edd6\"}.icofont-trophy:before{content:\"\\edd7\"}.icofont-volleyball-alt:before{content:\"\\edd8\"}.icofont-volleyball-fire:before{content:\"\\edd9\"}.icofont-volleyball:before{content:\"\\edda\"}.icofont-water-bottle:before{content:\"\\eddb\"}.icofont-whistle-alt:before{content:\"\\eddc\"}.icofont-whistle:before{content:\"\\eddd\"}.icofont-win-trophy:before{content:\"\\edde\"}.icofont-align-center:before{content:\"\\eddf\"}.icofont-align-left:before{content:\"\\ede0\"}.icofont-align-right:before{content:\"\\ede1\"}.icofont-all-caps:before{content:\"\\ede2\"}.icofont-bold:before{content:\"\\ede3\"}.icofont-brush:before{content:\"\\ede4\"}.icofont-clip-board:before{content:\"\\ede5\"}.icofont-code-alt:before{content:\"\\ede6\"}.icofont-color-bucket:before{content:\"\\ede7\"}.icofont-color-picker:before{content:\"\\ede8\"}.icofont-copy-invert:before{content:\"\\ede9\"}.icofont-copy:before{content:\"\\edea\"}.icofont-cut:before{content:\"\\edeb\"}.icofont-delete-alt:before{content:\"\\edec\"}.icofont-edit-alt:before{content:\"\\eded\"}.icofont-eraser-alt:before{content:\"\\edee\"}.icofont-font:before{content:\"\\edef\"}.icofont-heading:before{content:\"\\edf0\"}.icofont-indent:before{content:\"\\edf1\"}.icofont-italic-alt:before{content:\"\\edf2\"}.icofont-italic:before{content:\"\\edf3\"}.icofont-justify-all:before{content:\"\\edf4\"}.icofont-justify-center:before{content:\"\\edf5\"}.icofont-justify-left:before{content:\"\\edf6\"}.icofont-justify-right:before{content:\"\\edf7\"}.icofont-link-broken:before{content:\"\\edf8\"}.icofont-outdent:before{content:\"\\edf9\"}.icofont-paper-clip:before{content:\"\\edfa\"}.icofont-paragraph:before{content:\"\\edfb\"}.icofont-pin:before{content:\"\\edfc\"}.icofont-printer:before{content:\"\\edfd\"}.icofont-redo:before{content:\"\\edfe\"}.icofont-rotation:before{content:\"\\edff\"}.icofont-save:before{content:\"\\ee00\"}.icofont-small-cap:before{content:\"\\ee01\"}.icofont-strike-through:before{content:\"\\ee02\"}.icofont-sub-listing:before{content:\"\\ee03\"}.icofont-subscript:before{content:\"\\ee04\"}.icofont-superscript:before{content:\"\\ee05\"}.icofont-table:before{content:\"\\ee06\"}.icofont-text-height:before{content:\"\\ee07\"}.icofont-text-width:before{content:\"\\ee08\"}.icofont-trash:before{content:\"\\ee09\"}.icofont-underline:before{content:\"\\ee0a\"}.icofont-undo:before{content:\"\\ee0b\"}.icofont-air-balloon:before{content:\"\\ee0c\"}.icofont-airplane-alt:before{content:\"\\ee0d\"}.icofont-airplane:before{content:\"\\ee0e\"}.icofont-articulated-truck:before{content:\"\\ee0f\"}.icofont-auto-mobile:before{content:\"\\ee10\"}.icofont-auto-rickshaw:before{content:\"\\ee11\"}.icofont-bicycle-alt-1:before{content:\"\\ee12\"}.icofont-bicycle-alt-2:before{content:\"\\ee13\"}.icofont-bicycle:before{content:\"\\ee14\"}.icofont-bus-alt-1:before{content:\"\\ee15\"}.icofont-bus-alt-2:before{content:\"\\ee16\"}.icofont-bus-alt-3:before{content:\"\\ee17\"}.icofont-bus:before{content:\"\\ee18\"}.icofont-cab:before{content:\"\\ee19\"}.icofont-cable-car:before{content:\"\\ee1a\"}.icofont-car-alt-1:before{content:\"\\ee1b\"}.icofont-car-alt-2:before{content:\"\\ee1c\"}.icofont-car-alt-3:before{content:\"\\ee1d\"}.icofont-car-alt-4:before{content:\"\\ee1e\"}.icofont-car:before{content:\"\\ee1f\"}.icofont-delivery-time:before{content:\"\\ee20\"}.icofont-fast-delivery:before{content:\"\\ee21\"}.icofont-fire-truck-alt:before{content:\"\\ee22\"}.icofont-fire-truck:before{content:\"\\ee23\"}.icofont-free-delivery:before{content:\"\\ee24\"}.icofont-helicopter:before{content:\"\\ee25\"}.icofont-motor-bike-alt:before{content:\"\\ee26\"}.icofont-motor-bike:before{content:\"\\ee27\"}.icofont-motor-biker:before{content:\"\\ee28\"}.icofont-oil-truck:before{content:\"\\ee29\"}.icofont-rickshaw:before{content:\"\\ee2a\"}.icofont-rocket-alt-1:before{content:\"\\ee2b\"}.icofont-rocket-alt-2:before{content:\"\\ee2c\"}.icofont-rocket:before{content:\"\\ee2d\"}.icofont-sail-boat-alt-1:before{content:\"\\ee2e\"}.icofont-sail-boat-alt-2:before{content:\"\\ee2f\"}.icofont-sail-boat:before{content:\"\\ee30\"}.icofont-scooter:before{content:\"\\ee31\"}.icofont-sea-plane:before{content:\"\\ee32\"}.icofont-ship-alt:before{content:\"\\ee33\"}.icofont-ship:before{content:\"\\ee34\"}.icofont-speed-boat:before{content:\"\\ee35\"}.icofont-taxi:before{content:\"\\ee36\"}.icofont-tractor:before{content:\"\\ee37\"}.icofont-train-line:before{content:\"\\ee38\"}.icofont-train-steam:before{content:\"\\ee39\"}.icofont-tram:before{content:\"\\ee3a\"}.icofont-truck-alt:before{content:\"\\ee3b\"}.icofont-truck-loaded:before{content:\"\\ee3c\"}.icofont-truck:before{content:\"\\ee3d\"}.icofont-van-alt:before{content:\"\\ee3e\"}.icofont-van:before{content:\"\\ee3f\"}.icofont-yacht:before{content:\"\\ee40\"}.icofont-5-star-hotel:before{content:\"\\ee41\"}.icofont-air-ticket:before{content:\"\\ee42\"}.icofont-beach-bed:before{content:\"\\ee43\"}.icofont-beach:before{content:\"\\ee44\"}.icofont-camping-vest:before{content:\"\\ee45\"}.icofont-direction-sign:before{content:\"\\ee46\"}.icofont-hill-side:before{content:\"\\ee47\"}.icofont-hill:before{content:\"\\ee48\"}.icofont-hotel:before{content:\"\\ee49\"}.icofont-island-alt:before{content:\"\\ee4a\"}.icofont-island:before{content:\"\\ee4b\"}.icofont-sandals-female:before{content:\"\\ee4c\"}.icofont-sandals-male:before{content:\"\\ee4d\"}.icofont-travelling:before{content:\"\\ee4e\"}.icofont-breakdown:before{content:\"\\ee4f\"}.icofont-celsius:before{content:\"\\ee50\"}.icofont-clouds:before{content:\"\\ee51\"}.icofont-cloudy:before{content:\"\\ee52\"}.icofont-dust:before{content:\"\\ee53\"}.icofont-eclipse:before{content:\"\\ee54\"}.icofont-fahrenheit:before{content:\"\\ee55\"}.icofont-forest-fire:before{content:\"\\ee56\"}.icofont-full-night:before{content:\"\\ee57\"}.icofont-full-sunny:before{content:\"\\ee58\"}.icofont-hail-night:before{content:\"\\ee59\"}.icofont-hail-rainy-night:before{content:\"\\ee5a\"}.icofont-hail-rainy-sunny:before{content:\"\\ee5b\"}.icofont-hail-rainy:before{content:\"\\ee5c\"}.icofont-hail-sunny:before{content:\"\\ee5d\"}.icofont-hail-thunder-night:before{content:\"\\ee5e\"}.icofont-hail-thunder-sunny:before{content:\"\\ee5f\"}.icofont-hail-thunder:before{content:\"\\ee60\"}.icofont-hail:before{content:\"\\ee61\"}.icofont-hill-night:before{content:\"\\ee62\"}.icofont-hill-sunny:before{content:\"\\ee63\"}.icofont-hurricane:before{content:\"\\ee64\"}.icofont-meteor:before{content:\"\\ee65\"}.icofont-night:before{content:\"\\ee66\"}.icofont-rainy-night:before{content:\"\\ee67\"}.icofont-rainy-sunny:before{content:\"\\ee68\"}.icofont-rainy-thunder:before{content:\"\\ee69\"}.icofont-rainy:before{content:\"\\ee6a\"}.icofont-snow-alt:before{content:\"\\ee6b\"}.icofont-snow-flake:before{content:\"\\ee6c\"}.icofont-snow-temp:before{content:\"\\ee6d\"}.icofont-snow:before{content:\"\\ee6e\"}.icofont-snowy-hail:before{content:\"\\ee6f\"}.icofont-snowy-night-hail:before{content:\"\\ee70\"}.icofont-snowy-night-rainy:before{content:\"\\ee71\"}.icofont-snowy-night:before{content:\"\\ee72\"}.icofont-snowy-rainy:before{content:\"\\ee73\"}.icofont-snowy-sunny-hail:before{content:\"\\ee74\"}.icofont-snowy-sunny-rainy:before{content:\"\\ee75\"}.icofont-snowy-sunny:before{content:\"\\ee76\"}.icofont-snowy-thunder-night:before{content:\"\\ee77\"}.icofont-snowy-thunder-sunny:before{content:\"\\ee78\"}.icofont-snowy-thunder:before{content:\"\\ee79\"}.icofont-snowy-windy-night:before{content:\"\\ee7a\"}.icofont-snowy-windy-sunny:before{content:\"\\ee7b\"}.icofont-snowy-windy:before{content:\"\\ee7c\"}.icofont-snowy:before{content:\"\\ee7d\"}.icofont-sun-alt:before{content:\"\\ee7e\"}.icofont-sun-rise:before{content:\"\\ee7f\"}.icofont-sun-set:before{content:\"\\ee80\"}.icofont-sun:before{content:\"\\ee81\"}.icofont-sunny-day-temp:before{content:\"\\ee82\"}.icofont-sunny:before{content:\"\\ee83\"}.icofont-thunder-light:before{content:\"\\ee84\"}.icofont-tornado:before{content:\"\\ee85\"}.icofont-umbrella-alt:before{content:\"\\ee86\"}.icofont-umbrella:before{content:\"\\ee87\"}.icofont-volcano:before{content:\"\\ee88\"}.icofont-wave:before{content:\"\\ee89\"}.icofont-wind-scale-0:before{content:\"\\ee8a\"}.icofont-wind-scale-1:before{content:\"\\ee8b\"}.icofont-wind-scale-10:before{content:\"\\ee8c\"}.icofont-wind-scale-11:before{content:\"\\ee8d\"}.icofont-wind-scale-12:before{content:\"\\ee8e\"}.icofont-wind-scale-2:before{content:\"\\ee8f\"}.icofont-wind-scale-3:before{content:\"\\ee90\"}.icofont-wind-scale-4:before{content:\"\\ee91\"}.icofont-wind-scale-5:before{content:\"\\ee92\"}.icofont-wind-scale-6:before{content:\"\\ee93\"}.icofont-wind-scale-7:before{content:\"\\ee94\"}.icofont-wind-scale-8:before{content:\"\\ee95\"}.icofont-wind-scale-9:before{content:\"\\ee96\"}.icofont-wind-waves:before{content:\"\\ee97\"}.icofont-wind:before{content:\"\\ee98\"}.icofont-windy-hail:before{content:\"\\ee99\"}.icofont-windy-night:before{content:\"\\ee9a\"}.icofont-windy-raining:before{content:\"\\ee9b\"}.icofont-windy-sunny:before{content:\"\\ee9c\"}.icofont-windy-thunder-raining:before{content:\"\\ee9d\"}.icofont-windy-thunder:before{content:\"\\ee9e\"}.icofont-windy:before{content:\"\\ee9f\"}.icofont-addons:before{content:\"\\eea0\"}.icofont-address-book:before{content:\"\\eea1\"}.icofont-adjust:before{content:\"\\eea2\"}.icofont-alarm:before{content:\"\\eea3\"}.icofont-anchor:before{content:\"\\eea4\"}.icofont-archive:before{content:\"\\eea5\"}.icofont-at:before{content:\"\\eea6\"}.icofont-attachment:before{content:\"\\eea7\"}.icofont-audio:before{content:\"\\eea8\"}.icofont-automation:before{content:\"\\eea9\"}.icofont-badge:before{content:\"\\eeaa\"}.icofont-bag-alt:before{content:\"\\eeab\"}.icofont-bag:before{content:\"\\eeac\"}.icofont-ban:before{content:\"\\eead\"}.icofont-bar-code:before{content:\"\\eeae\"}.icofont-bars:before{content:\"\\eeaf\"}.icofont-basket:before{content:\"\\eeb0\"}.icofont-battery-empty:before{content:\"\\eeb1\"}.icofont-battery-full:before{content:\"\\eeb2\"}.icofont-battery-half:before{content:\"\\eeb3\"}.icofont-battery-low:before{content:\"\\eeb4\"}.icofont-beaker:before{content:\"\\eeb5\"}.icofont-beard:before{content:\"\\eeb6\"}.icofont-bed:before{content:\"\\eeb7\"}.icofont-bell:before{content:\"\\eeb8\"}.icofont-beverage:before{content:\"\\eeb9\"}.icofont-bill:before{content:\"\\eeba\"}.icofont-bin:before{content:\"\\eebb\"}.icofont-binary:before{content:\"\\eebc\"}.icofont-binoculars:before{content:\"\\eebd\"}.icofont-bluetooth:before{content:\"\\eebe\"}.icofont-bomb:before{content:\"\\eebf\"}.icofont-book-mark:before{content:\"\\eec0\"}.icofont-box:before{content:\"\\eec1\"}.icofont-briefcase:before{content:\"\\eec2\"}.icofont-broken:before{content:\"\\eec3\"}.icofont-bucket:before{content:\"\\eec4\"}.icofont-bucket1:before{content:\"\\eec5\"}.icofont-bucket2:before{content:\"\\eec6\"}.icofont-bug:before{content:\"\\eec7\"}.icofont-building:before{content:\"\\eec8\"}.icofont-bulb-alt:before{content:\"\\eec9\"}.icofont-bullet:before{content:\"\\eeca\"}.icofont-bullhorn:before{content:\"\\eecb\"}.icofont-bullseye:before{content:\"\\eecc\"}.icofont-calendar:before{content:\"\\eecd\"}.icofont-camera-alt:before{content:\"\\eece\"}.icofont-camera:before{content:\"\\eecf\"}.icofont-card:before{content:\"\\eed0\"}.icofont-cart-alt:before{content:\"\\eed1\"}.icofont-cart:before{content:\"\\eed2\"}.icofont-cc:before{content:\"\\eed3\"}.icofont-charging:before{content:\"\\eed4\"}.icofont-chat:before{content:\"\\eed5\"}.icofont-check-alt:before{content:\"\\eed6\"}.icofont-check-circled:before{content:\"\\eed7\"}.icofont-check:before{content:\"\\eed8\"}.icofont-checked:before{content:\"\\eed9\"}.icofont-children-care:before{content:\"\\eeda\"}.icofont-clip:before{content:\"\\eedb\"}.icofont-clock-time:before{content:\"\\eedc\"}.icofont-close-circled:before{content:\"\\eedd\"}.icofont-close-line-circled:before{content:\"\\eede\"}.icofont-close-line-squared-alt:before{content:\"\\eedf\"}.icofont-close-line-squared:before{content:\"\\eee0\"}.icofont-close-line:before{content:\"\\eee1\"}.icofont-close-squared-alt:before{content:\"\\eee2\"}.icofont-close-squared:before{content:\"\\eee3\"}.icofont-close:before{content:\"\\eee4\"}.icofont-cloud-download:before{content:\"\\eee5\"}.icofont-cloud-refresh:before{content:\"\\eee6\"}.icofont-cloud-upload:before{content:\"\\eee7\"}.icofont-cloud:before{content:\"\\eee8\"}.icofont-code-not-allowed:before{content:\"\\eee9\"}.icofont-code:before{content:\"\\eeea\"}.icofont-comment:before{content:\"\\eeeb\"}.icofont-compass-alt:before{content:\"\\eeec\"}.icofont-compass:before{content:\"\\eeed\"}.icofont-computer:before{content:\"\\eeee\"}.icofont-connection:before{content:\"\\eeef\"}.icofont-console:before{content:\"\\eef0\"}.icofont-contacts:before{content:\"\\eef1\"}.icofont-contrast:before{content:\"\\eef2\"}.icofont-copyright:before{content:\"\\eef3\"}.icofont-credit-card:before{content:\"\\eef4\"}.icofont-crop:before{content:\"\\eef5\"}.icofont-crown:before{content:\"\\eef6\"}.icofont-cube:before{content:\"\\eef7\"}.icofont-cubes:before{content:\"\\eef8\"}.icofont-dashboard-web:before{content:\"\\eef9\"}.icofont-dashboard:before{content:\"\\eefa\"}.icofont-data:before{content:\"\\eefb\"}.icofont-database-add:before{content:\"\\eefc\"}.icofont-database-locked:before{content:\"\\eefd\"}.icofont-database-remove:before{content:\"\\eefe\"}.icofont-database:before{content:\"\\eeff\"}.icofont-delete:before{content:\"\\ef00\"}.icofont-diamond:before{content:\"\\ef01\"}.icofont-dice-multiple:before{content:\"\\ef02\"}.icofont-dice:before{content:\"\\ef03\"}.icofont-disc:before{content:\"\\ef04\"}.icofont-diskette:before{content:\"\\ef05\"}.icofont-document-folder:before{content:\"\\ef06\"}.icofont-download-alt:before{content:\"\\ef07\"}.icofont-download:before{content:\"\\ef08\"}.icofont-downloaded:before{content:\"\\ef09\"}.icofont-drag:before{content:\"\\ef0a\"}.icofont-drag1:before{content:\"\\ef0b\"}.icofont-drag2:before{content:\"\\ef0c\"}.icofont-drag3:before{content:\"\\ef0d\"}.icofont-earth:before{content:\"\\ef0e\"}.icofont-ebook:before{content:\"\\ef0f\"}.icofont-edit:before{content:\"\\ef10\"}.icofont-eject:before{content:\"\\ef11\"}.icofont-email:before{content:\"\\ef12\"}.icofont-envelope-open:before{content:\"\\ef13\"}.icofont-envelope:before{content:\"\\ef14\"}.icofont-eraser:before{content:\"\\ef15\"}.icofont-error:before{content:\"\\ef16\"}.icofont-excavator:before{content:\"\\ef17\"}.icofont-exchange:before{content:\"\\ef18\"}.icofont-exclamation-circle:before{content:\"\\ef19\"}.icofont-exclamation-square:before{content:\"\\ef1a\"}.icofont-exclamation-tringle:before{content:\"\\ef1b\"}.icofont-exclamation:before{content:\"\\ef1c\"}.icofont-exit:before{content:\"\\ef1d\"}.icofont-expand:before{content:\"\\ef1e\"}.icofont-external-link:before{content:\"\\ef1f\"}.icofont-external:before{content:\"\\ef20\"}.icofont-eye-alt:before{content:\"\\ef21\"}.icofont-eye-blocked:before{content:\"\\ef22\"}.icofont-eye-dropper:before{content:\"\\ef23\"}.icofont-eye:before{content:\"\\ef24\"}.icofont-favourite:before{content:\"\\ef25\"}.icofont-fax:before{content:\"\\ef26\"}.icofont-file-fill:before{content:\"\\ef27\"}.icofont-film:before{content:\"\\ef28\"}.icofont-filter:before{content:\"\\ef29\"}.icofont-fire-alt:before{content:\"\\ef2a\"}.icofont-fire-burn:before{content:\"\\ef2b\"}.icofont-fire:before{content:\"\\ef2c\"}.icofont-flag-alt-1:before{content:\"\\ef2d\"}.icofont-flag-alt-2:before{content:\"\\ef2e\"}.icofont-flag:before{content:\"\\ef2f\"}.icofont-flame-torch:before{content:\"\\ef30\"}.icofont-flash-light:before{content:\"\\ef31\"}.icofont-flash:before{content:\"\\ef32\"}.icofont-flask:before{content:\"\\ef33\"}.icofont-focus:before{content:\"\\ef34\"}.icofont-folder-open:before{content:\"\\ef35\"}.icofont-folder:before{content:\"\\ef36\"}.icofont-foot-print:before{content:\"\\ef37\"}.icofont-garbage:before{content:\"\\ef38\"}.icofont-gear-alt:before{content:\"\\ef39\"}.icofont-gear:before{content:\"\\ef3a\"}.icofont-gears:before{content:\"\\ef3b\"}.icofont-gift:before{content:\"\\ef3c\"}.icofont-glass:before{content:\"\\ef3d\"}.icofont-globe:before{content:\"\\ef3e\"}.icofont-graffiti:before{content:\"\\ef3f\"}.icofont-grocery:before{content:\"\\ef40\"}.icofont-hand:before{content:\"\\ef41\"}.icofont-hanger:before{content:\"\\ef42\"}.icofont-hard-disk:before{content:\"\\ef43\"}.icofont-heart-alt:before{content:\"\\ef44\"}.icofont-heart:before{content:\"\\ef45\"}.icofont-history:before{content:\"\\ef46\"}.icofont-home:before{content:\"\\ef47\"}.icofont-horn:before{content:\"\\ef48\"}.icofont-hour-glass:before{content:\"\\ef49\"}.icofont-id:before{content:\"\\ef4a\"}.icofont-image:before{content:\"\\ef4b\"}.icofont-inbox:before{content:\"\\ef4c\"}.icofont-infinite:before{content:\"\\ef4d\"}.icofont-info-circle:before{content:\"\\ef4e\"}.icofont-info-square:before{content:\"\\ef4f\"}.icofont-info:before{content:\"\\ef50\"}.icofont-institution:before{content:\"\\ef51\"}.icofont-interface:before{content:\"\\ef52\"}.icofont-invisible:before{content:\"\\ef53\"}.icofont-jacket:before{content:\"\\ef54\"}.icofont-jar:before{content:\"\\ef55\"}.icofont-jewlery:before{content:\"\\ef56\"}.icofont-karate:before{content:\"\\ef57\"}.icofont-key-hole:before{content:\"\\ef58\"}.icofont-key:before{content:\"\\ef59\"}.icofont-label:before{content:\"\\ef5a\"}.icofont-lamp:before{content:\"\\ef5b\"}.icofont-layers:before{content:\"\\ef5c\"}.icofont-layout:before{content:\"\\ef5d\"}.icofont-leaf:before{content:\"\\ef5e\"}.icofont-leaflet:before{content:\"\\ef5f\"}.icofont-learn:before{content:\"\\ef60\"}.icofont-lego:before{content:\"\\ef61\"}.icofont-lens:before{content:\"\\ef62\"}.icofont-letter:before{content:\"\\ef63\"}.icofont-letterbox:before{content:\"\\ef64\"}.icofont-library:before{content:\"\\ef65\"}.icofont-license:before{content:\"\\ef66\"}.icofont-life-bouy:before{content:\"\\ef67\"}.icofont-life-buoy:before{content:\"\\ef68\"}.icofont-life-jacket:before{content:\"\\ef69\"}.icofont-life-ring:before{content:\"\\ef6a\"}.icofont-light-bulb:before{content:\"\\ef6b\"}.icofont-lighter:before{content:\"\\ef6c\"}.icofont-lightning-ray:before{content:\"\\ef6d\"}.icofont-like:before{content:\"\\ef6e\"}.icofont-line-height:before{content:\"\\ef6f\"}.icofont-link-alt:before{content:\"\\ef70\"}.icofont-link:before{content:\"\\ef71\"}.icofont-list:before{content:\"\\ef72\"}.icofont-listening:before{content:\"\\ef73\"}.icofont-listine-dots:before{content:\"\\ef74\"}.icofont-listing-box:before{content:\"\\ef75\"}.icofont-listing-number:before{content:\"\\ef76\"}.icofont-live-support:before{content:\"\\ef77\"}.icofont-location-arrow:before{content:\"\\ef78\"}.icofont-location-pin:before{content:\"\\ef79\"}.icofont-lock:before{content:\"\\ef7a\"}.icofont-login:before{content:\"\\ef7b\"}.icofont-logout:before{content:\"\\ef7c\"}.icofont-lollipop:before{content:\"\\ef7d\"}.icofont-long-drive:before{content:\"\\ef7e\"}.icofont-look:before{content:\"\\ef7f\"}.icofont-loop:before{content:\"\\ef80\"}.icofont-luggage:before{content:\"\\ef81\"}.icofont-lunch:before{content:\"\\ef82\"}.icofont-lungs:before{content:\"\\ef83\"}.icofont-magic-alt:before{content:\"\\ef84\"}.icofont-magic:before{content:\"\\ef85\"}.icofont-magnet:before{content:\"\\ef86\"}.icofont-mail-box:before{content:\"\\ef87\"}.icofont-mail:before{content:\"\\ef88\"}.icofont-male:before{content:\"\\ef89\"}.icofont-map-pins:before{content:\"\\ef8a\"}.icofont-map:before{content:\"\\ef8b\"}.icofont-maximize:before{content:\"\\ef8c\"}.icofont-measure:before{content:\"\\ef8d\"}.icofont-medicine:before{content:\"\\ef8e\"}.icofont-mega-phone:before{content:\"\\ef8f\"}.icofont-megaphone-alt:before{content:\"\\ef90\"}.icofont-megaphone:before{content:\"\\ef91\"}.icofont-memorial:before{content:\"\\ef92\"}.icofont-memory-card:before{content:\"\\ef93\"}.icofont-mic-mute:before{content:\"\\ef94\"}.icofont-mic:before{content:\"\\ef95\"}.icofont-military:before{content:\"\\ef96\"}.icofont-mill:before{content:\"\\ef97\"}.icofont-minus-circle:before{content:\"\\ef98\"}.icofont-minus-square:before{content:\"\\ef99\"}.icofont-minus:before{content:\"\\ef9a\"}.icofont-mobile-phone:before{content:\"\\ef9b\"}.icofont-molecule:before{content:\"\\ef9c\"}.icofont-money:before{content:\"\\ef9d\"}.icofont-moon:before{content:\"\\ef9e\"}.icofont-mop:before{content:\"\\ef9f\"}.icofont-muffin:before{content:\"\\efa0\"}.icofont-mustache:before{content:\"\\efa1\"}.icofont-navigation-menu:before{content:\"\\efa2\"}.icofont-navigation:before{content:\"\\efa3\"}.icofont-network-tower:before{content:\"\\efa4\"}.icofont-network:before{content:\"\\efa5\"}.icofont-news:before{content:\"\\efa6\"}.icofont-newspaper:before{content:\"\\efa7\"}.icofont-no-smoking:before{content:\"\\efa8\"}.icofont-not-allowed:before{content:\"\\efa9\"}.icofont-notebook:before{content:\"\\efaa\"}.icofont-notepad:before{content:\"\\efab\"}.icofont-notification:before{content:\"\\efac\"}.icofont-numbered:before{content:\"\\efad\"}.icofont-opposite:before{content:\"\\efae\"}.icofont-optic:before{content:\"\\efaf\"}.icofont-options:before{content:\"\\efb0\"}.icofont-package:before{content:\"\\efb1\"}.icofont-page:before{content:\"\\efb2\"}.icofont-paint:before{content:\"\\efb3\"}.icofont-paper-plane:before{content:\"\\efb4\"}.icofont-paperclip:before{content:\"\\efb5\"}.icofont-papers:before{content:\"\\efb6\"}.icofont-pay:before{content:\"\\efb7\"}.icofont-penguin-linux:before{content:\"\\efb8\"}.icofont-pestle:before{content:\"\\efb9\"}.icofont-phone-circle:before{content:\"\\efba\"}.icofont-phone:before{content:\"\\efbb\"}.icofont-picture:before{content:\"\\efbc\"}.icofont-pine:before{content:\"\\efbd\"}.icofont-pixels:before{content:\"\\efbe\"}.icofont-plugin:before{content:\"\\efbf\"}.icofont-plus-circle:before{content:\"\\efc0\"}.icofont-plus-square:before{content:\"\\efc1\"}.icofont-plus:before{content:\"\\efc2\"}.icofont-polygonal:before{content:\"\\efc3\"}.icofont-power:before{content:\"\\efc4\"}.icofont-price:before{content:\"\\efc5\"}.icofont-print:before{content:\"\\efc6\"}.icofont-puzzle:before{content:\"\\efc7\"}.icofont-qr-code:before{content:\"\\efc8\"}.icofont-queen:before{content:\"\\efc9\"}.icofont-question-circle:before{content:\"\\efca\"}.icofont-question-square:before{content:\"\\efcb\"}.icofont-question:before{content:\"\\efcc\"}.icofont-quote-left:before{content:\"\\efcd\"}.icofont-quote-right:before{content:\"\\efce\"}.icofont-random:before{content:\"\\efcf\"}.icofont-recycle:before{content:\"\\efd0\"}.icofont-refresh:before{content:\"\\efd1\"}.icofont-repair:before{content:\"\\efd2\"}.icofont-reply-all:before{content:\"\\efd3\"}.icofont-reply:before{content:\"\\efd4\"}.icofont-resize:before{content:\"\\efd5\"}.icofont-responsive:before{content:\"\\efd6\"}.icofont-retweet:before{content:\"\\efd7\"}.icofont-road:before{content:\"\\efd8\"}.icofont-robot:before{content:\"\\efd9\"}.icofont-royal:before{content:\"\\efda\"}.icofont-rss-feed:before{content:\"\\efdb\"}.icofont-safety:before{content:\"\\efdc\"}.icofont-sale-discount:before{content:\"\\efdd\"}.icofont-satellite:before{content:\"\\efde\"}.icofont-send-mail:before{content:\"\\efdf\"}.icofont-server:before{content:\"\\efe0\"}.icofont-settings-alt:before{content:\"\\efe1\"}.icofont-settings:before{content:\"\\efe2\"}.icofont-share-alt:before{content:\"\\efe3\"}.icofont-share-boxed:before{content:\"\\efe4\"}.icofont-share:before{content:\"\\efe5\"}.icofont-shield:before{content:\"\\efe6\"}.icofont-shopping-cart:before{content:\"\\efe7\"}.icofont-sign-in:before{content:\"\\efe8\"}.icofont-sign-out:before{content:\"\\efe9\"}.icofont-signal:before{content:\"\\efea\"}.icofont-site-map:before{content:\"\\efeb\"}.icofont-smart-phone:before{content:\"\\efec\"}.icofont-soccer:before{content:\"\\efed\"}.icofont-sort-alt:before{content:\"\\efee\"}.icofont-sort:before{content:\"\\efef\"}.icofont-space:before{content:\"\\eff0\"}.icofont-spanner:before{content:\"\\eff1\"}.icofont-speech-comments:before{content:\"\\eff2\"}.icofont-speed-meter:before{content:\"\\eff3\"}.icofont-spinner-alt-1:before{content:\"\\eff4\"}.icofont-spinner-alt-2:before{content:\"\\eff5\"}.icofont-spinner-alt-3:before{content:\"\\eff6\"}.icofont-spinner-alt-4:before{content:\"\\eff7\"}.icofont-spinner-alt-5:before{content:\"\\eff8\"}.icofont-spinner-alt-6:before{content:\"\\eff9\"}.icofont-spinner:before{content:\"\\effa\"}.icofont-spreadsheet:before{content:\"\\effb\"}.icofont-square:before{content:\"\\effc\"}.icofont-ssl-security:before{content:\"\\effd\"}.icofont-star-alt-1:before{content:\"\\effe\"}.icofont-star-alt-2:before{content:\"\\efff\"}.icofont-star:before{content:\"\\f000\"}.icofont-street-view:before{content:\"\\f001\"}.icofont-support-faq:before{content:\"\\f002\"}.icofont-tack-pin:before{content:\"\\f003\"}.icofont-tag:before{content:\"\\f004\"}.icofont-tags:before{content:\"\\f005\"}.icofont-tasks-alt:before{content:\"\\f006\"}.icofont-tasks:before{content:\"\\f007\"}.icofont-telephone:before{content:\"\\f008\"}.icofont-telescope:before{content:\"\\f009\"}.icofont-terminal:before{content:\"\\f00a\"}.icofont-thumbs-down:before{content:\"\\f00b\"}.icofont-thumbs-up:before{content:\"\\f00c\"}.icofont-tick-boxed:before{content:\"\\f00d\"}.icofont-tick-mark:before{content:\"\\f00e\"}.icofont-ticket:before{content:\"\\f00f\"}.icofont-tie:before{content:\"\\f010\"}.icofont-toggle-off:before{content:\"\\f011\"}.icofont-toggle-on:before{content:\"\\f012\"}.icofont-tools-alt-2:before{content:\"\\f013\"}.icofont-tools:before{content:\"\\f014\"}.icofont-touch:before{content:\"\\f015\"}.icofont-traffic-light:before{content:\"\\f016\"}.icofont-transparent:before{content:\"\\f017\"}.icofont-tree:before{content:\"\\f018\"}.icofont-unique-idea:before{content:\"\\f019\"}.icofont-unlock:before{content:\"\\f01a\"}.icofont-unlocked:before{content:\"\\f01b\"}.icofont-upload-alt:before{content:\"\\f01c\"}.icofont-upload:before{content:\"\\f01d\"}.icofont-usb-drive:before{content:\"\\f01e\"}.icofont-usb:before{content:\"\\f01f\"}.icofont-vector-path:before{content:\"\\f020\"}.icofont-verification-check:before{content:\"\\f021\"}.icofont-wall-clock:before{content:\"\\f022\"}.icofont-wall:before{content:\"\\f023\"}.icofont-wallet:before{content:\"\\f024\"}.icofont-warning-alt:before{content:\"\\f025\"}.icofont-warning:before{content:\"\\f026\"}.icofont-water-drop:before{content:\"\\f027\"}.icofont-web:before{content:\"\\f028\"}.icofont-wheelchair:before{content:\"\\f029\"}.icofont-wifi-alt:before{content:\"\\f02a\"}.icofont-wifi:before{content:\"\\f02b\"}.icofont-world:before{content:\"\\f02c\"}.icofont-zigzag:before{content:\"\\f02d\"}.icofont-zipped:before{content:\"\\f02e\"}.icofont-xs{font-size:.5em}.icofont-sm{font-size:.75em}.icofont-md{font-size:1.25em}.icofont-lg{font-size:1.5em}.icofont-1x{font-size:1em}.icofont-2x{font-size:2em}.icofont-3x{font-size:3em}.icofont-4x{font-size:4em}.icofont-5x{font-size:5em}.icofont-6x{font-size:6em}.icofont-7x{font-size:7em}.icofont-8x{font-size:8em}.icofont-9x{font-size:9em}.icofont-10x{font-size:10em}.icofont-fw{text-align:center;width:1.25em}.icofont-ul{list-style-type:none;margin-left:0;padding-left:0}.icofont-ul>li{line-height:2em;position:relative}.icofont-ul>li .icofont{display:inline-block;vertical-align:middle}.icofont-border{border:.08em solid #f1f1f1;border-radius:.1em;padding:.2em .25em .15em}.icofont-pull-left{float:left}.icofont-pull-right{float:right}.icofont.icofont-pull-left{margin-right:.3em}.icofont.icofont-pull-right{margin-left:.3em}.icofont-spin{animation:icofont-spin 2s linear infinite;display:inline-block}.icofont-pulse{animation:icofont-spin 1s steps(8) infinite;display:inline-block}@keyframes icofont-spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.icofont-rotate-90{transform:rotate(90deg)}.icofont-rotate-180{transform:rotate(180deg)}.icofont-rotate-270{transform:rotate(270deg)}.icofont-flip-horizontal{transform:scaleX(-1)}.icofont-flip-vertical{transform:scaleY(-1)}.icofont-flip-horizontal.icofont-flip-vertical{transform:scale(-1)}:root .icofont-flip-horizontal,:root .icofont-flip-vertical,:root .icofont-rotate-180,:root .icofont-rotate-270,:root .icofont-rotate-90{display:inline-block;filter:none}.icofont-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icofont.50a4ab7.woff2";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/icofont.f6ab04a.woff";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-container{list-style:none;margin-left:auto;margin-right:auto;overflow:hidden;padding:0;position:relative;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{box-sizing:content-box;display:flex;height:100%;position:relative;transition-property:transform;width:100%;z-index:1}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-direction:column;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{margin:0 auto;transition-timing-function:ease-out}.swiper-slide{flex-shrink:0;height:100%;position:relative;transition-property:transform;width:100%}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;--step1:calc(var(--swiper-navigation-size)/44);height:44px;height:var(--swiper-navigation-size);width:27px;width:calc(var(--step1)*27);--step2:calc(var(--swiper-navigation-size)*-1);align-items:center;color:var(--swiper-theme-color);color:var(--swiper-navigation-color,var(--swiper-theme-color));cursor:pointer;display:flex;justify-content:center;margin-top:-22px;margin-top:calc(var(--step2)/2);z-index:10}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{cursor:auto;opacity:.35;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:44px;font-size:var(--swiper-navigation-size);font-variant:normal;letter-spacing:0;line-height:1;text-transform:none!important;text-transform:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:\"prev\"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{left:auto;right:10px}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:\"next\"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transform:translateZ(0);transition:opacity .3s;z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{font-size:0;overflow:hidden}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{position:relative;transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{background:#000;border-radius:100%;display:inline-block;height:8px;opacity:.2;width:8px}button.swiper-pagination-bullet{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;box-shadow:none;margin:0;padding:0}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color));opacity:1}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{display:block;margin:6px 0}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color));height:100%;left:0;position:absolute;top:0;transform:scale(0);transform-origin:left top;width:100%}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{height:4px;left:0;top:0;width:100%}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{height:100%;left:0;top:0;width:4px}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{background:rgba(0,0,0,.1);border-radius:10px;position:relative}.swiper-container-horizontal>.swiper-scrollbar{bottom:3px;height:5px;left:1%;position:absolute;width:98%;z-index:50}.swiper-container-vertical>.swiper-scrollbar{height:98%;position:absolute;right:3px;top:1%;width:5px;z-index:50}.swiper-scrollbar-drag{background:rgba(0,0,0,.5);border-radius:10px;height:100%;left:0;position:relative;top:0;width:100%}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{align-items:center;display:flex;height:100%;justify-content:center;text-align:center;width:100%}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-height:100%;max-width:100%;-o-object-fit:contain;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s linear infinite;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent;box-sizing:border-box;height:42px;left:50%;margin-left:-21px;margin-top:-21px;position:absolute;top:50%;transform-origin:50%;width:42px;z-index:10}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{left:0;opacity:0;pointer-events:none;position:absolute;top:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{backface-visibility:hidden;height:100%;pointer-events:none;transform-origin:0 0;visibility:hidden;width:100%;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{backface-visibility:hidden;z-index:0}.swiper-container-cube .swiper-cube-shadow{background:#000;bottom:0;filter:blur(50px);height:100%;left:0;opacity:.6;position:absolute;width:100%;z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{backface-visibility:hidden;pointer-events:none;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{backface-visibility:hidden;z-index:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "AboutUs", function() { return AboutUs; });
__webpack_require__.d(components_namespaceObject, "AllGames", function() { return AllGames; });
__webpack_require__.d(components_namespaceObject, "AllPlayers", function() { return AllPlayers; });
__webpack_require__.d(components_namespaceObject, "BlogPost", function() { return BlogPost; });
__webpack_require__.d(components_namespaceObject, "Breadcrumb", function() { return Breadcrumb; });
__webpack_require__.d(components_namespaceObject, "ContactBanner", function() { return ContactBanner; });
__webpack_require__.d(components_namespaceObject, "ContactDetails", function() { return ContactDetails; });
__webpack_require__.d(components_namespaceObject, "ContactForm", function() { return ContactForm; });
__webpack_require__.d(components_namespaceObject, "CounterUp", function() { return CounterUp; });
__webpack_require__.d(components_namespaceObject, "FaqAccordion", function() { return FaqAccordion; });
__webpack_require__.d(components_namespaceObject, "Footer", function() { return Footer; });
__webpack_require__.d(components_namespaceObject, "GamerTeam", function() { return GamerTeam; });
__webpack_require__.d(components_namespaceObject, "GamingWorld", function() { return GamingWorld; });
__webpack_require__.d(components_namespaceObject, "GoogleMaps", function() { return GoogleMaps; });
__webpack_require__.d(components_namespaceObject, "HeaderSection", function() { return HeaderSection; });
__webpack_require__.d(components_namespaceObject, "HeroBanner", function() { return HeroBanner; });
__webpack_require__.d(components_namespaceObject, "LiveStream", function() { return LiveStream; });
__webpack_require__.d(components_namespaceObject, "NuxtError", function() { return NuxtError; });
__webpack_require__.d(components_namespaceObject, "SignUp", function() { return SignUp; });
__webpack_require__.d(components_namespaceObject, "Testimonial", function() { return Testimonial; });
__webpack_require__.d(components_namespaceObject, "UpcomingMatches", function() { return UpcomingMatches; });
__webpack_require__.d(components_namespaceObject, "UpcomingMatchesHome", function() { return UpcomingMatchesHome; });
__webpack_require__.d(components_namespaceObject, "Blog", function() { return Blog; });
__webpack_require__.d(components_namespaceObject, "BlogGrid", function() { return BlogGrid; });
__webpack_require__.d(components_namespaceObject, "BlogList", function() { return BlogList; });
__webpack_require__.d(components_namespaceObject, "BlogListDynamic", function() { return BlogListDynamic; });
__webpack_require__.d(components_namespaceObject, "BlogListinDetails", function() { return BlogListinDetails; });
__webpack_require__.d(components_namespaceObject, "BlogSidebar", function() { return BlogSidebar; });
__webpack_require__.d(components_namespaceObject, "ButtonPrimaryButton", function() { return ButtonPrimaryButton; });
__webpack_require__.d(components_namespaceObject, "ButtonSignupButton", function() { return ButtonSignupButton; });
__webpack_require__.d(components_namespaceObject, "FooterContactInfoWidget", function() { return FooterContactInfoWidget; });
__webpack_require__.d(components_namespaceObject, "FooterInfoWidget", function() { return FooterInfoWidget; });
__webpack_require__.d(components_namespaceObject, "FooterMenuList", function() { return FooterMenuList; });
__webpack_require__.d(components_namespaceObject, "FooterWidgetTitle", function() { return FooterWidgetTitle; });
__webpack_require__.d(components_namespaceObject, "FooterWinnerWidget", function() { return FooterWinnerWidget; });
__webpack_require__.d(components_namespaceObject, "GamesGameDetails", function() { return GamesGameDetails; });
__webpack_require__.d(components_namespaceObject, "GamesPopularGame", function() { return GamesPopularGame; });
__webpack_require__.d(components_namespaceObject, "HeaderLogo", function() { return HeaderLogo; });
__webpack_require__.d(components_namespaceObject, "HeaderMainMenu", function() { return HeaderMainMenu; });
__webpack_require__.d(components_namespaceObject, "HeaderMobileNavigation", function() { return HeaderMobileNavigation; });
__webpack_require__.d(components_namespaceObject, "HeaderOffCanvasMobileMenu", function() { return HeaderOffCanvasMobileMenu; });
__webpack_require__.d(components_namespaceObject, "MatchesMatchDetails", function() { return MatchesMatchDetails; });
__webpack_require__.d(components_namespaceObject, "PlayersTeamPlayer", function() { return PlayersTeamPlayer; });
__webpack_require__.d(components_namespaceObject, "TitleSection", function() { return TitleSection; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch-native"
var external_node_fetch_native_ = __webpack_require__(13);
var external_node_fetch_native_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_native_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js



// window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
if (false) {}
function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }
  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (
  // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function () {
    const data = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return {
      ...data,
      ...asyncData
    };
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  // If no component name defined, set file path as name, (also fixes #5703)
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          try {
            const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload'));
            // check for previous reload time not to reload infinitely
            if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
              window.sessionStorage.setItem('nuxt-reload', timeNow);
              window.location.reload(true /* skip cache */);
            }
          } catch {
            // don't throw an error if we have issues reading sessionStorage
          }
        }
        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  // Make sure the components are resolved (code-splitting)
  await resolveRouteComponents(route);
  // Send back a copy of route with meta based on Component definition
  return {
    ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return {
        ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    // Only set once

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
      let pathType = typeof path;
      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      }
      // "/absolute/route", "./relative/route" or "../relative/route"
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);
        if (true) {
          app.context.next({
            path,
            status
          });
        }
        if (false) {}
      }
    };
    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
    if (false) {}
  }

  // Dynamic keys
  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  if (context.error) {
    app.context.error = context.error;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext, renderState) {
  if (!promises.length || appContext._redirected || appContext._errored || renderState && renderState.aborted) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext, renderState);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }
  return Promise.resolve(promise);
}

// Imported from vue-router
function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }
  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = {
    ...toQuery,
    ...fromQuery
  };
  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }
  return diff;
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return {
    ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
const PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }
  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }
  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === 'string') {
        path += token;
        continue;
      }
      const value = data[token.name || 'pathMatch'];
      let segment;
      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js


async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }

  // Call and await on $fetch
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;

  // Define an ssrKey for hydration
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++;

  // Add data-fetch-key on parent element of Component
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey;

  // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}
/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    }

    // Added for remove vue undefined warning while ssr
    this.$fetch = () => {}; // issue #8043
    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }
});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(14);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(9);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(7);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(10);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js

if (false) {}
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from;

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }
  const nuxt = window.$nuxt;
  if (
  // Initial load (vuejs/vue-router#3199)
  !isRouteChanged ||
  // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }
  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }
        try {
          const el = document.querySelector(hash);
          if (el) {
            var _getComputedStyle$scr;
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
            // Respect any scroll-margin-top set in CSS when scrolling to anchor
            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));
            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }
      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _e3909f2e = () => interopDefault(__webpack_require__.e(/* import() | pages/404Error */ 35).then(__webpack_require__.bind(null, 78)));
const _90b1adb8 = () => interopDefault(__webpack_require__.e(/* import() | pages/about */ 37).then(__webpack_require__.bind(null, 79)));
const _5f06984a = () => interopDefault(__webpack_require__.e(/* import() | pages/blog */ 38).then(__webpack_require__.bind(null, 80)));
const _2584880a = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/11 */ 44).then(__webpack_require__.bind(null, 76)));
const _3ca102ff = () => interopDefault(__webpack_require__.e(/* import() | pages/blog/_slug */ 45).then(__webpack_require__.bind(null, 81)));
const _603d634b = () => interopDefault(__webpack_require__.e(/* import() | pages/blog-grid-left-sidebar */ 39).then(__webpack_require__.bind(null, 82)));
const _3629e946 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog-grid-right-sidebar */ 40).then(__webpack_require__.bind(null, 83)));
const _9db49d9c = () => interopDefault(__webpack_require__.e(/* import() | pages/blog-grid-without-sidebar */ 41).then(__webpack_require__.bind(null, 84)));
const _c2de0e10 = () => interopDefault(__webpack_require__.e(/* import() | pages/blog-left-sidebar */ 42).then(__webpack_require__.bind(null, 85)));
const _7b6ded8e = () => interopDefault(__webpack_require__.e(/* import() | pages/blog-right-sidebar */ 43).then(__webpack_require__.bind(null, 86)));
const _6cfe4477 = () => interopDefault(__webpack_require__.e(/* import() | pages/contact */ 46).then(__webpack_require__.bind(null, 87)));
const _1bb58bcd = () => interopDefault(__webpack_require__.e(/* import() | pages/FAQ */ 36).then(__webpack_require__.bind(null, 88)));
const _5eafb5f7 = () => interopDefault(__webpack_require__.e(/* import() | pages/game/index */ 48).then(__webpack_require__.bind(null, 89)));
const _4529dcb4 = () => interopDefault(__webpack_require__.e(/* import() | pages/match/index */ 51).then(__webpack_require__.bind(null, 90)));
const _7f1577e8 = () => interopDefault(__webpack_require__.e(/* import() | pages/player/index */ 53).then(__webpack_require__.bind(null, 91)));
const _67afb3de = () => interopDefault(__webpack_require__.e(/* import() | pages/signup */ 54).then(__webpack_require__.bind(null, 92)));
const _5141f82e = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 49).then(__webpack_require__.bind(null, 93)));
const _5cf914af = () => interopDefault(__webpack_require__.e(/* import() | pages/game/_slug */ 47).then(__webpack_require__.bind(null, 94)));
const _48971f44 = () => interopDefault(__webpack_require__.e(/* import() | pages/match/_slug */ 50).then(__webpack_require__.bind(null, 95)));
const _7d5ed6a0 = () => interopDefault(__webpack_require__.e(/* import() | pages/player/_slug */ 52).then(__webpack_require__.bind(null, 96)));
const emptyFn = () => {};
external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/404Error",
    component: _e3909f2e,
    name: "404Error"
  }, {
    path: "/about",
    component: _90b1adb8,
    name: "about"
  }, {
    path: "/blog",
    component: _5f06984a,
    name: "blog",
    children: [{
      path: "11",
      component: _2584880a,
      name: "blog-11"
    }, {
      path: ":slug?",
      component: _3ca102ff,
      name: "blog-slug"
    }]
  }, {
    path: "/blog-grid-left-sidebar",
    component: _603d634b,
    name: "blog-grid-left-sidebar"
  }, {
    path: "/blog-grid-right-sidebar",
    component: _3629e946,
    name: "blog-grid-right-sidebar"
  }, {
    path: "/blog-grid-without-sidebar",
    component: _9db49d9c,
    name: "blog-grid-without-sidebar"
  }, {
    path: "/blog-left-sidebar",
    component: _c2de0e10,
    name: "blog-left-sidebar"
  }, {
    path: "/blog-right-sidebar",
    component: _7b6ded8e,
    name: "blog-right-sidebar"
  }, {
    path: "/contact",
    component: _6cfe4477,
    name: "contact"
  }, {
    path: "/FAQ",
    component: _1bb58bcd,
    name: "FAQ"
  }, {
    path: "/game",
    component: _5eafb5f7,
    name: "game"
  }, {
    path: "/match",
    component: _4529dcb4,
    name: "match"
  }, {
    path: "/player",
    component: _7f1577e8,
    name: "player"
  }, {
    path: "/signup",
    component: _67afb3de,
    name: "signup"
  }, {
    path: "/",
    component: _5141f82e,
    name: "index"
  }, {
    path: "/game/:slug",
    component: _5cf914af,
    name: "game-slug"
  }, {
    path: "/match/:slug",
    component: _48971f44,
    name: "match-slug"
  }, {
    path: "/player/:slug",
    component: _7d5ed6a0,
    name: "player-slug"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({
    ...routerOptions,
    base
  });

  // TODO: remove in Nuxt 3
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },
  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (false) {}

    // make sure that leave is called asynchronous (fix #5703)
    if (transition.css === false) {
      const leave = listeners.leave;

      // only add leave listener when user didnt provide one
      // or when it misses the done argument
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h('routerView', data);
    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// EXTERNAL MODULE: ./layouts/error.vue + 4 modules
var layouts_error = __webpack_require__(3);

// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error["default"]
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },
  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const {
          options
        } = Component;
        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }
  },
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },
  render(h) {
    // if there is no error or
    // error page has not been loaded yet on client
    if (!this.nuxt.err ||  false && false) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    }

    // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    }

    // track if we are showing the NuxtError component
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(layouts_error["default"], {
      props: {
        error: this.nuxt.err
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js = ({
  name: 'NuxtLoading',
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      clearTimeout(this._hide);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      this._hide = setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }
    return el;
  }
});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js = (nuxt_loadingvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var render, staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(21)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "65903584"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/css/tailwind.css
var tailwind = __webpack_require__(23);

// EXTERNAL MODULE: ./assets/css/icofont.min.css
var icofont_min = __webpack_require__(25);

// EXTERNAL MODULE: ./assets/css/swiper.css
var swiper = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/layouts/default.vue?vue&type=template&id=0040005c
var defaultvue_type_template_id_0040005c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('Nuxt');
};
var defaultvue_type_template_id_0040005c_staticRenderFns = [];

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue?vue&type=template&id=0040005c

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_0040005c_render,
  defaultvue_type_template_id_0040005c_staticRenderFns,
  false,
  null,
  null,
  "6fe09e98"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js









const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }
      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),
  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },
  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;
    if (false) {}
    // Add $nuxt.error()
    this.error = this.nuxt.error;
    // Add $nuxt.context
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }
      await this.refresh();
      this.$loading.finish();
    }
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    },
    isPreview() {
      return Boolean(this.$options.previewData);
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map(async page => {
        let p = [];

        // Old fetch
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        // Wait for asyncData & old fetch to finish
        await Promise.all(p);
        // Cleanup refs
        p = [];
        if (page.$fetch) {
          p.push(page.$fetch());
        }
        // Get all component instance to call $fetch
        for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
          p.push(component.$fetch());
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (layouts_error["default"].options || layouts_error["default"]).layout;
        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }
        this.nuxt.errPageReady = true;
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }
      return Promise.resolve(layouts['_' + layout]);
    },
    getRouterBase() {
      return Object(external_ufo_["withoutTrailingSlash"])(this.$router.options.base);
    },
    getRoutePath(route = '/') {
      const base = this.getRouterBase();
      return Object(external_ufo_["withoutTrailingSlash"])(Object(external_ufo_["withoutBase"])(Object(external_ufo_["parsePath"])(route).pathname, base));
    },
    getStaticAssetsPath(route = '/') {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },
    async fetchStaticManifest() {
      return window.__NUXT_IMPORT__('manifest.js', Object(external_ufo_["normalizeURL"])(urlJoin(this.getStaticAssetsPath(), 'manifest.js')));
    },
    setPagePayload(payload) {
      this._pagePayload = payload;
      this._fetchCounters = {};
    },
    async fetchPayload(route, prefetch) {
      const path = Object(external_ufo_["decode"])(this.getRoutePath(route));
      const manifest = await this.fetchStaticManifest();
      if (!manifest.routes.includes(path)) {
        if (!prefetch) {
          this.setPagePayload(false);
        }
        throw new Error(`Route ${path} is not pre-rendered`);
      }
      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js');
      try {
        const payload = await window.__NUXT_IMPORT__(path, Object(external_ufo_["normalizeURL"])(src));
        if (!prefetch) {
          this.setPagePayload(payload);
        }
        return payload;
      } catch (err) {
        if (!prefetch) {
          this.setPagePayload(false);
        }
        throw err;
      }
    }
  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const AboutUs = () => __webpack_require__.e(/* import() | components/about-us */ 13).then(__webpack_require__.bind(null, 60)).then(c => wrapFunctional(c.default || c));
const AllGames = () => __webpack_require__.e(/* import() | components/all-games */ 14).then(__webpack_require__.bind(null, 66)).then(c => wrapFunctional(c.default || c));
const AllPlayers = () => __webpack_require__.e(/* import() | components/all-players */ 15).then(__webpack_require__.bind(null, 68)).then(c => wrapFunctional(c.default || c));
const BlogPost = () => __webpack_require__.e(/* import() | components/blog-post */ 21).then(__webpack_require__.bind(null, 72)).then(c => wrapFunctional(c.default || c));
const Breadcrumb = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 17)).then(c => wrapFunctional(c.default || c));
const ContactBanner = () => __webpack_require__.e(/* import() | components/contact-banner */ 4).then(__webpack_require__.bind(null, 43)).then(c => wrapFunctional(c.default || c));
const ContactDetails = () => __webpack_require__.e(/* import() | components/contact-details */ 5).then(__webpack_require__.bind(null, 99)).then(c => wrapFunctional(c.default || c));
const ContactForm = () => __webpack_require__.e(/* import() | components/contact-form */ 23).then(__webpack_require__.bind(null, 59)).then(c => wrapFunctional(c.default || c));
const CounterUp = () => __webpack_require__.e(/* import() | components/counter-up */ 1).then(__webpack_require__.bind(null, 49)).then(c => wrapFunctional(c.default || c));
const FaqAccordion = () => __webpack_require__.e(/* import() | components/faq-accordion */ 24).then(__webpack_require__.bind(null, 65)).then(c => wrapFunctional(c.default || c));
const Footer = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16)).then(c => wrapFunctional(c.default || c));
const GamerTeam = () => __webpack_require__.e(/* import() | components/gamer-team */ 25).then(__webpack_require__.bind(null, 62)).then(c => wrapFunctional(c.default || c));
const GamingWorld = () => __webpack_require__.e(/* import() | components/gaming-world */ 27).then(__webpack_require__.bind(null, 71)).then(c => wrapFunctional(c.default || c));
const GoogleMaps = () => __webpack_require__.e(/* import() | components/google-maps */ 28).then(__webpack_require__.bind(null, 73)).then(c => wrapFunctional(c.default || c));
const HeaderSection = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 15)).then(c => wrapFunctional(c.default || c));
const HeroBanner = () => __webpack_require__.e(/* import() | components/hero-banner */ 29).then(__webpack_require__.bind(null, 70)).then(c => wrapFunctional(c.default || c));
const LiveStream = () => __webpack_require__.e(/* import() | components/live-stream */ 9).then(__webpack_require__.bind(null, 61)).then(c => wrapFunctional(c.default || c));
const NuxtError = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)).then(c => wrapFunctional(c.default || c));
const SignUp = () => __webpack_require__.e(/* import() | components/sign-up */ 30).then(__webpack_require__.bind(null, 69)).then(c => wrapFunctional(c.default || c));
const Testimonial = () => __webpack_require__.e(/* import() | components/testimonial */ 31).then(__webpack_require__.bind(null, 56)).then(c => wrapFunctional(c.default || c));
const UpcomingMatches = () => __webpack_require__.e(/* import() | components/upcoming-matches */ 33).then(__webpack_require__.bind(null, 67)).then(c => wrapFunctional(c.default || c));
const UpcomingMatchesHome = () => __webpack_require__.e(/* import() | components/upcoming-matches-home */ 34).then(__webpack_require__.bind(null, 74)).then(c => wrapFunctional(c.default || c));
const Blog = () => __webpack_require__.e(/* import() | components/blog */ 16).then(__webpack_require__.bind(null, 77)).then(c => wrapFunctional(c.default || c));
const BlogGrid = () => __webpack_require__.e(/* import() | components/blog-grid */ 17).then(__webpack_require__.bind(null, 57)).then(c => wrapFunctional(c.default || c));
const BlogList = () => __webpack_require__.e(/* import() | components/blog-list */ 18).then(__webpack_require__.bind(null, 63)).then(c => wrapFunctional(c.default || c));
const BlogListDynamic = () => __webpack_require__.e(/* import() | components/blog-list-dynamic */ 19).then(__webpack_require__.bind(null, 58)).then(c => wrapFunctional(c.default || c));
const BlogListinDetails = () => __webpack_require__.e(/* import() | components/blog-listin-details */ 20).then(__webpack_require__.bind(null, 64)).then(c => wrapFunctional(c.default || c));
const BlogSidebar = () => __webpack_require__.e(/* import() | components/blog-sidebar */ 22).then(__webpack_require__.bind(null, 51)).then(c => wrapFunctional(c.default || c));
const ButtonPrimaryButton = () => __webpack_require__.e(/* import() | components/button-primary-button */ 2).then(__webpack_require__.bind(null, 105)).then(c => wrapFunctional(c.default || c));
const ButtonSignupButton = () => __webpack_require__.e(/* import() | components/button-signup-button */ 3).then(__webpack_require__.bind(null, 98)).then(c => wrapFunctional(c.default || c));
const FooterContactInfoWidget = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 34)).then(c => wrapFunctional(c.default || c));
const FooterInfoWidget = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 33)).then(c => wrapFunctional(c.default || c));
const FooterMenuList = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 36)).then(c => wrapFunctional(c.default || c));
const FooterWidgetTitle = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 12)).then(c => wrapFunctional(c.default || c));
const FooterWinnerWidget = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 35)).then(c => wrapFunctional(c.default || c));
const GamesGameDetails = () => __webpack_require__.e(/* import() | components/games-game-details */ 6).then(__webpack_require__.bind(null, 100)).then(c => wrapFunctional(c.default || c));
const GamesPopularGame = () => __webpack_require__.e(/* import() | components/games-popular-game */ 26).then(__webpack_require__.bind(null, 75)).then(c => wrapFunctional(c.default || c));
const HeaderLogo = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 37)).then(c => wrapFunctional(c.default || c));
const HeaderMainMenu = () => __webpack_require__.e(/* import() | components/header-main-menu */ 7).then(__webpack_require__.bind(null, 104)).then(c => wrapFunctional(c.default || c));
const HeaderMobileNavigation = () => __webpack_require__.e(/* import() | components/header-mobile-navigation */ 8).then(__webpack_require__.bind(null, 101)).then(c => wrapFunctional(c.default || c));
const HeaderOffCanvasMobileMenu = () => __webpack_require__.e(/* import() | components/header-off-canvas-mobile-menu */ 0).then(__webpack_require__.bind(null, 97)).then(c => wrapFunctional(c.default || c));
const MatchesMatchDetails = () => __webpack_require__.e(/* import() | components/matches-match-details */ 10).then(__webpack_require__.bind(null, 102)).then(c => wrapFunctional(c.default || c));
const PlayersTeamPlayer = () => __webpack_require__.e(/* import() | components/players-team-player */ 11).then(__webpack_require__.bind(null, 103)).then(c => wrapFunctional(c.default || c));
const TitleSection = () => __webpack_require__.e(/* import() | components/title-section */ 32).then(__webpack_require__.bind(null, 44)).then(c => wrapFunctional(c.default || c));

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }
  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};
      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }
      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }
  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(8);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./.nuxt/moment.js

/* harmony default export */ var moment = ((ctx, inject) => {
  ctx.$moment = external_moment_default.a;
  inject('moment', external_moment_default.a);
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(6);

// CONCATENATED MODULE: ./.nuxt/index.js











/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')
 // Source: .\\moment.js (mode: 'all')
 // Source: ..\\plugins\\vue-awesome-swiper.js (mode: 'client')
 // Source: ..\\plugins\\directive.client.js (mode: 'client')
 // Source: ..\\plugins\\vue-backtotop.js (mode: 'client')
 // Source: ..\\plugins\\vue-js-modal (mode: 'client')

// Component: <ClientOnly>
external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a);

// TODO: Remove in Nuxt 3: <NoSsr>
external_vue_default.a.component(external_vue_no_ssr_default.a.name, {
  ...external_vue_no_ssr_default.a,
  render(h, ctx) {
    if (false) {}
    return external_vue_no_ssr_default.a.render(h, ctx);
  }
});

// Component: <NuxtChild>
external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child);

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;
    if (false) {}
    return globalNuxt;
  },
  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
async function createApp(ssrContext, config = {}) {
  const store = null;
  const router = await createRouter(ssrContext, config, {
    store
  });

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {
      "title": "Millant - Инди студия разработки игр на Unreal Engine",
      "htmlAttrs": {
        "lang": "ru"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      errPageReady: false,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        nuxt.errPageReady = false;
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location);
  // Resolve route
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = '$' + key;
    // Add into app
    app[key] = value;
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value;
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__';
    if (external_vue_default.a[installKey]) {
      return;
    }
    external_vue_default.a[installKey] = true;
    // Call Vue.use() to install the plugin into vm
    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }

  // Inject runtime config as $config
  inject('config', config);

  // Add enablePreview(previewData = {}) in context for plugins
  if (false) {}
  // Plugin execution

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }
  if (typeof moment === 'function') {
    await moment(app.context, inject);
  }
  if (false) {}
  if (false) {}
  if (false) {}
  if (false) {}

  // Lock enablePreview in context
  if (false) {}

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve();

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}

// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js

// Update serverPrefetch strategy
external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created;

// Fetch mixin
if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
}

// Component: <NuxtLink>
external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);
if (!global.fetch) {
  global.fetch = external_node_fetch_native_default.a;
}
const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});
const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;
  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';
  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  }
  // Avoid loop redirect
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
};

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  // Used for beforeNuxtRender({ Components, nuxtState })
  ssrContext.beforeRenderFns = [];
  // for beforeSerialize(nuxtState)
  ssrContext.beforeSerializeFns = [];
  // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)
  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {};

  // Remove query from url is static target

  if (ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  }

  // Public runtime config
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  // Create the app definition and the instance (created for each request)
  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new external_vue_default.a(app);
  // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr
  ssrContext.nuxt.routePath = app.context.route.path;

  // Add meta infos (used in renderer.js)
  ssrContext.meta = _app.$meta();

  // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));
    };
  };
  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    }

    // Load layout for error page
    const layout = (layouts_error["default"].options || layouts_error["default"]).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error["default"], app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  };

  // Components are already resolved by setContext -> getRouteData (app/utils.js)
  const Components = getMatchedComponents(app.context.route);

  /*
  ** Call global middleware (nuxt.config.js)
  */
  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Set layout
  */
  let layout = Components.length ? Components[0].options.layout : layouts_error["default"].layout;
  if (typeof layout === 'function') {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;

  /*
  ** Call middleware (layout + pages)
  */
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }
    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }
    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context);
  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  /*
  ** Call .validate()
  */
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  }

  // ...If .validate() returned false
  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  }

  // If no Components found, returns 404
  if (!Components.length) {
    return render404Page();
  }

  // Call asyncData & fetch hooks on components matched by the route.
  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = [];

    // Call asyncData(context)
    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context).then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }

    // Call fetch(context)
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));

  // datas are the first row of each
  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {});

  // ...If there is a redirect or an error, stop the process
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  // Call beforeNuxtRender methods & add store state
  await beforeRender();
  return _app;
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NuxtError.vue?vue&type=template&id=0f355c42
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "py-10"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"error_inner text-center\">", "</div>", [_vm._ssrNode("<div class=\"title text-white mb-16\"><h3 class=\"sm:text-6xl text-4xl mb-5 font-bold\">OPPS...</h3> <p class=\"sm:text-4xl text-2xl uppercase font-bold\">SORRY, this page is not found.</p></div> <div class=\"error-404 mb-68\"><img src=\"/images/others/404.webp\" alt></div> "), _vm._ssrNode("<div class=\"flex justify-center\">", "</div>", [_c('n-link', {
    staticClass: "group primary-btn opacity-100 transition-all",
    staticStyle: {
      "background-image": "url(/images/others/btn-bg.webp)"
    },
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "mr-3 w-5 h-5 group-hover:mr-4 transition-all",
    attrs: {
      "src": "/images/icon/arrrow-left-icon.webp",
      "alt": "Arrow Icon"
    }
  }), _vm._v("\n                    " + _vm._s(_vm.btnName) + "\n                ")])], 1)], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NuxtError.vue?vue&type=template&id=0f355c42

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NuxtError.vue?vue&type=script&lang=js
/* harmony default export */ var NuxtErrorvue_type_script_lang_js = ({
  data() {
    return {
      btnName: "Go to Home"
    };
  }
});
// CONCATENATED MODULE: ./components/NuxtError.vue?vue&type=script&lang=js
 /* harmony default export */ var components_NuxtErrorvue_type_script_lang_js = (NuxtErrorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/NuxtError.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NuxtErrorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "37de71fe"
  
)

/* harmony default export */ var NuxtError = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterInfoWidget.vue?vue&type=template&id=24f96048
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flex flex-col mr-12 xl:mr-100"
  }, [_c('NuxtLink', {
    staticClass: "mb-10",
    attrs: {
      "to": "/"
    }
  }), _vm._ssrNode(" <p></p> <ul class=\"flex mt-4\">" + _vm._ssrList(_vm.links, function (link, index) {
    return "<li class=\"mr-4 last:mr-0\"><a" + _vm._ssrAttr("href", `${link.href}`) + " class=\"w-10 h-10 leading-10 text-center inline-block\"" + _vm._ssrStyle(null, {
      backgroundImage: `url(${link.BgShape})`
    }, null) + "><i" + _vm._ssrClass(null, link.className) + "></i></a></li>";
  }) + "</ul>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer/FooterInfoWidget.vue?vue&type=template&id=24f96048

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterInfoWidget.vue?vue&type=script&lang=js
/* harmony default export */ var FooterInfoWidgetvue_type_script_lang_js = ({
  data() {
    return {
      links: [{
        href: "https://www.facebook.com",
        BgShape: "/images/icon/facebook-bg.webp",
        className: "icofont-facebook text-white"
      }, {
        href: "https://www.dribble.com",
        BgShape: "/images/icon/dribble.webp",
        className: "icofont-dribbble text-white"
      }, {
        href: "https://www.youtube.com",
        BgShape: "/images/icon/youtobe-bg.webp",
        className: "icofont-youtube-play text-white"
      }, {
        href: "https://www.twitter.com",
        BgShape: "/images/icon/twittre.webp",
        className: "icofont-twitter text-white"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/Footer/FooterInfoWidget.vue?vue&type=script&lang=js
 /* harmony default export */ var Footer_FooterInfoWidgetvue_type_script_lang_js = (FooterInfoWidgetvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Footer/FooterInfoWidget.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Footer_FooterInfoWidgetvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0f18e072"
  
)

/* harmony default export */ var FooterInfoWidget = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterContactInfoWidget.vue?vue&type=template&id=d8c34498
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {}, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer/FooterContactInfoWidget.vue?vue&type=template&id=d8c34498

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterContactInfoWidget.vue?vue&type=script&lang=js
/* harmony default export */ var FooterContactInfoWidgetvue_type_script_lang_js = ({
  components: {
    FooterWidgetTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 12))
  },
  data() {
    return {
      title: "Контакты"
    };
  }
});
// CONCATENATED MODULE: ./components/Footer/FooterContactInfoWidget.vue?vue&type=script&lang=js
 /* harmony default export */ var Footer_FooterContactInfoWidgetvue_type_script_lang_js = (FooterContactInfoWidgetvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Footer/FooterContactInfoWidget.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Footer_FooterContactInfoWidgetvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6bdfa22d"
  
)

/* harmony default export */ var FooterContactInfoWidget = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterWinnerWidget.vue?vue&type=template&id=3f56cdbc
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mr-8"
  }, [_c('FooterWidgetTitle', {
    attrs: {
      "title": _vm.title
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"grid grid-cols-3 sm:grid-cols-3 gap-3\">", "</div>", [_vm._l(_vm.matches, function (match, index) {
    return match.gamingLink && match.gamingLink.startsWith('/') ? _c('n-link', {
      key: index,
      attrs: {
        "to": match.gamingLink
      }
    }, [_c('img', {
      attrs: {
        "src": `${match.gamingBg}`,
        "alt": match.gamingAlt
      }
    })]) : _vm._e();
  }), _vm._ssrNode(" " + _vm._ssrList(_vm.matches, function (match, index) {
    return match.gamingLink && !match.gamingLink.startsWith('/') ? "<a" + _vm._ssrAttr("href", match.gamingLink) + " target=\"_blank\"><img" + _vm._ssrAttr("src", `${match.gamingBg}`) + _vm._ssrAttr("alt", match.gamingAlt) + "></a>" : "<!---->";
  }) + " "), _vm._l(_vm.matches, function (match, index) {
    return !match.gamingLink ? _c('n-link', {
      key: index,
      attrs: {
        "to": "/player"
      }
    }, [_c('img', {
      attrs: {
        "src": `${match.gamingBg}`,
        "alt": match.gamingAlt
      }
    })]) : _vm._e();
  })], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer/FooterWinnerWidget.vue?vue&type=template&id=3f56cdbc

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterWinnerWidget.vue?vue&type=script&lang=js
/* harmony default export */ var FooterWinnerWidgetvue_type_script_lang_js = ({
  components: {
    FooterWidgetTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 12))
  },
  data() {
    return {
      title: "",
      matches: [{
        gamingBg: "/images/others/vk.webp",
        gamingAlt: "vkplay"
      }, {
        gamingBg: "/images/others/steam.webp",
        gamingAlt: "steam",
        gamingLink: "https://store.steampowered.com/app/3193780/Paragone_Bomb/"
      }, {
        gamingBg: "/images/others/16+.webp",
        gamingAlt: "16+"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/Footer/FooterWinnerWidget.vue?vue&type=script&lang=js
 /* harmony default export */ var Footer_FooterWinnerWidgetvue_type_script_lang_js = (FooterWinnerWidgetvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Footer/FooterWinnerWidget.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Footer_FooterWinnerWidgetvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0d86b6d8"
  
)

/* harmony default export */ var FooterWinnerWidget = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FooterWidgetTitle: __webpack_require__(12).default})


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterMenuList.vue?vue&type=template&id=59f888e8
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "xl:pl-16"
  }, [_c('FooterWidgetTitle', {
    attrs: {
      "title": _vm.title
    }
  }), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"flex flex-col\">", "</ul>", _vm._l(_vm.links, function (link, index) {
    return _vm._ssrNode("<li class=\"mb-4 last:mb-0\">", "</li>", [_c('n-link', {
      staticClass: "text-white transition-all hover:text-primary",
      attrs: {
        "to": link.pageLink
      }
    }, [_vm._v(_vm._s(link.className))])], 1);
  }), 0)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Footer/FooterMenuList.vue?vue&type=template&id=59f888e8

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer/FooterMenuList.vue?vue&type=script&lang=js
/* harmony default export */ var FooterMenuListvue_type_script_lang_js = ({
  components: {
    FooterWidgetTitle: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 12))
  },
  data() {
    return {
      title: "Другое",
      links: [{
        pageLink: "/about",
        className: "Сотрудничество"
      }, {
        pageLink: "/contact",
        className: "Блоггерам"
      }, {
        pageLink: "/content",
        className: "Вакансии"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/Footer/FooterMenuList.vue?vue&type=script&lang=js
 /* harmony default export */ var Footer_FooterMenuListvue_type_script_lang_js = (FooterMenuListvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Footer/FooterMenuList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Footer_FooterMenuListvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "592cd792"
  
)

/* harmony default export */ var FooterMenuList = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FooterWidgetTitle: __webpack_require__(12).default})


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header/HeaderLogo.vue?vue&type=template&id=24abfcf1
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('NuxtLink', {
    attrs: {
      "to": "/"
    }
  });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Header/HeaderLogo.vue?vue&type=template&id=24abfcf1

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header/HeaderLogo.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2f2fd440"
  
)

/* harmony default export */ var HeaderLogo = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("vue-cool-lightbox");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("vue-awesome-swiper");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("vue-count-to");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("vue-disqus");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map