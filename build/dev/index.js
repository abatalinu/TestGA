/*! builder: @ewizardjs/dev-builder - version: 4.4.2  framework: ewizardjs - version: 5.23.0 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Content")["app"]);
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory(require("Content")["app"]);
	else
		root["Content"] = root["Content"] || {}, root["Content"]["index"] = factory(root["Content"]["app"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__app__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/ewizardjs/entries/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app":
/*!******************************************************************************************************!*\
  !*** external {"commonjs":["Content","app"],"commonjs2":["Content","app"],"root":["Content","app"]} ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__app__;

/***/ }),

/***/ "./node_modules/ewizardjs/entries/index.js":
/*!*************************************************!*\
  !*** ./node_modules/ewizardjs/entries/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _app = _interopRequireDefault(__webpack_require__(/*! ./app */ "./app"));

var _base = __webpack_require__(/*! ./utils/base */ "./node_modules/ewizardjs/entries/utils/base.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

window.ewizardjs = {
  initApp: _app.default
};

if (true) {
  const PUBLIC_PATH = /{publicPath}/g;

  function transformLocalization(localization) {
    return Object.entries(localization).reduce((transformedLocalization, _ref) => {
      let [key, value] = _ref;
      transformedLocalization[key] = typeof value === 'string' ? value.replace(PUBLIC_PATH, '') : value;
      return transformedLocalization;
    }, {});
  }

  function transformReferences(references) {
    return Object.entries(references).reduce((transformedReferences, _ref2) => {
      let [key, value] = _ref2;
      transformedReferences[key] = _objectSpread(_objectSpread({}, value), {}, {
        name: value.name.replace(PUBLIC_PATH, '')
      });
      return transformedReferences;
    }, {});
  }

  function extendVue(vueApp, state) {
    var _state$footnotes, _state$components, _state$components2, _state$components2$ap;

    const {
      Vue,
      components,
      references,
      footnotes,
      claims,
      triggeredEmailJson
    } = vueApp;

    Vue.prototype.$getComponentType = function () {
      return this.$options.__componentType || 'component';
    };

    const currentLocale = Vue.prototype.$settings.getRaw().localization.current;

    if (triggeredEmailJson && state !== null && state !== void 0 && state.triggeredEmail) {
      triggeredEmailJson = state.triggeredEmail;
    }

    if (footnotes && state !== null && state !== void 0 && (_state$footnotes = state.footnotes) !== null && _state$footnotes !== void 0 && _state$footnotes[currentLocale]) {
      footnotes.setFootnotesList(state.footnotes[currentLocale]);
    }

    if (references && state !== null && state !== void 0 && state.references) {
      references.references = transformReferences(state.references);
    }

    if (claims && (_state$components = state.components) !== null && _state$components !== void 0 && _state$components.app && (_state$components2 = state.components) !== null && _state$components2 !== void 0 && (_state$components2$ap = _state$components2.app) !== null && _state$components2$ap !== void 0 && _state$components2$ap.claims) {
      claims.setClaims(state.components.app.claims.list);
    }

    extendSlides(Vue, components, state);
  }

  function extendSlides(Vue, slides, state) {
    if (state.components) {
      slides.forEach(slide => extendSlide(slide.slideId, slide, state, Vue));
    }
  }

  const editableComponent = {
    name: 'v-slide',
    computed: {
      template() {
        var _this$component, _this$component$templ;

        return (_this$component = this.component) === null || _this$component === void 0 ? void 0 : (_this$component$templ = _this$component.template) === null || _this$component$templ === void 0 ? void 0 : _this$component$templ.replace(PUBLIC_PATH, '');
      },

      component() {
        var _this$state;

        return ((_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.components) && this.state.components[this.slideId];
      }

    },

    created() {
      var _this$component2, _this$component3;

      if (!this.$root.$i18n.missing) {
        this.$root.$i18n.missing = () => {
          return '';
        };
      }

      const currentLocale = this.$settings.getRaw().localization.current;
      const commonI18n = (_this$component2 = this.component) === null || _this$component2 === void 0 ? void 0 : _this$component2.commonI18n;

      if (commonI18n) {
        this.$root.$i18n.locale = currentLocale;
        Object.entries(commonI18n).forEach(_ref3 => {
          let [locale, messages = {}] = _ref3;
          this.$root.$i18n.mergeLocaleMessage(locale, transformLocalization(messages));
        });
      }

      const i18n = (_this$component3 = this.component) === null || _this$component3 === void 0 ? void 0 : _this$component3.i18n;

      if (i18n) {
        Object.entries(i18n).forEach(_ref4 => {
          let [locale, messages = {}] = _ref4;
          this.$i18n.mergeLocaleMessage(locale, transformLocalization(messages));
        });
      }
    }

  };

  function extendSlide(slideId, slideComponent, state, Vue) {
    const editorSlideMixin = {
      computed: {
        slideId() {
          if (this.$getComponentType() === 'slide') {
            return this.$navigator.structure.currentSubslide || this.$navigator.getCurrentSlide().slide;
          }

          return slideId;
        },

        state() {
          return state;
        }

      }
    };

    if (Array.isArray(slideComponent.mixins)) {
      slideComponent.mixins.push(editorSlideMixin, editableComponent);
    } else {
      slideComponent.mixins = [editorSlideMixin, editableComponent];
    }

    const __baseRenderer = slideComponent.render;

    slideComponent.render = function () {
      return this.template ? Vue.compile(this.template).render.call(this) : __baseRenderer.call(this);
    };
  }

  function importInteractiveComponents(components) {
    const importedComponents = [];
    return Promise.all(Object.values(components).map(async _ref5 => {
      let {
        interactiveComponents
      } = _ref5;
      if (!interactiveComponents || interactiveComponents.length === 0) return;
      return Promise.all(interactiveComponents.map(_ref6 => {
        let {
          name,
          path
        } = _ref6;
        if (importedComponents.includes(name)) return;
        importedComponents.push(name);
        const publicPath = path.endsWith('/') ? path : `${path}/`;
        window[`__publicPath_${name}`] = publicPath;
        return appendAsyncScript(`${publicPath}dist/build.js`);
      }));
    }));
  }

  function registerInteractiveComponents(Vue, components) {
    return Object.values(components).forEach(_ref7 => {
      let {
        interactiveComponents
      } = _ref7;
      interactiveComponents === null || interactiveComponents === void 0 ? void 0 : interactiveComponents.forEach(_ref8 => {
        let {
          name
        } = _ref8;
        const build = window[name];
        Vue.component(name, build.__esModule ? build.default : build);
      });
    });
  }

  function appendScript(src) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    document.body.appendChild(script);
  }

  function appendAsyncScript(src) {
    return new Promise((resolve, reject) => {
      try {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.onload = resolve;
        document.body.appendChild(script);
      } catch (e) {
        reject(e);
      }
    });
  }

  try {
    appendScript('./build/dev/templates.js');
  } catch {
    window.Templates = [];
  }

  try {
    appendScript('./build/dev/state.js');
  } catch {
    window.__contentState = undefined;
  }

  window.addEventListener('load', async () => {
    var _window, _window2, _window2$Templates, _state$getters;

    const state = ((_window = window) === null || _window === void 0 ? void 0 : _window.__contentState) || undefined;
    const templatedComponents = ((_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$Templates = _window2.Templates) === null || _window2$Templates === void 0 ? void 0 : _window2$Templates.templates) || [];
    const [vueApp] = await Promise.all([(0, _app.default)(undefined, {
      templatedComponents,
      structure: state === null || state === void 0 ? void 0 : (_state$getters = state.getters) === null || _state$getters === void 0 ? void 0 : _state$getters.structure,
      storeState: state === null || state === void 0 ? void 0 : state.storeState
    }), state !== null && state !== void 0 && state.components ? importInteractiveComponents(state === null || state === void 0 ? void 0 : state.components) : Promise.resolve()]);
    const {
      Vue,
      navigator
    } = vueApp;

    if (state) {
      var _navigator$navigation;

      registerInteractiveComponents(Vue, (state === null || state === void 0 ? void 0 : state.components) || {});
      extendVue(vueApp, state);

      if (navigator !== null && navigator !== void 0 && (_navigator$navigation = navigator.navigation) !== null && _navigator$navigation !== void 0 && _navigator$navigation.vueRouter) {
        extendSlides(Vue, navigator.navigation.vueRouter.getTemplatedComponents(), state);
      }
    }

    const app = vueApp.create('#app');
    app.$once("hook:destroyed", _base.unsubscribeEwizardjs);
    window.ewizardjs.navigator = app.$navigator;
    window.ewizardjs.monitoring = app.$options.externalMonitoringAPI;
    window.ewizardjs.structure = app.$structure;
    window.ewizardjs.settings = app.$settings;
    window.ewizardjs.triggeredEmail = app.$triggeredEmail;
  });
} else {}

/***/ }),

/***/ "./node_modules/ewizardjs/entries/utils/base.js":
/*!******************************************************!*\
  !*** ./node_modules/ewizardjs/entries/utils/base.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsubscribeEwizardjs = unsubscribeEwizardjs;

function unsubscribeEwizardjs() {
  if (window.ewizardjs) window.ewizardjs = null;
}

/***/ })

/******/ });
});