/*! builder: @ewizardjs/dev-builder - version: 4.4.2  framework: ewizardjs - version: 5.23.0 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["editor"] = factory();
	else
		root["Content"] = root["Content"] || {}, root["Content"]["editor"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/entry-editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib/index.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/@blocks/module-placeholder/index.vue?vue&type=custom&index=0&blockType=i18n":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/@blocks/module-placeholder/index.vue?vue&type=custom&index=0&blockType=i18n ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"eng":{}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib/index.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block01/index.vue?vue&type=custom&index=0&blockType=i18n":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block01/index.vue?vue&type=custom&index=0&blockType=i18n ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"eng":{"title":"<div style=\u0027line-height: 60px; text-align: center;\u0027><span style=\u0027font-size: 40px; color:{textColorToken};font-family:{fontFamilyToken};\u0027><strong>eWizard — Content Production Accelerator<br class=\u0027m-hide\u0027> Demo for Powerful Pharma Marketing</strong></span></div>","description":"<div style=\u0027line-height: 24px; text-align: left;\u0027><span style=\u0027font-size: 14px;color:{textColorToken};font-family:{fontFamilyToken};\u0027>eWizard enables to manage all the content for different channels (e-Detailing, Email, Landing pages) in a single platform with convenient UI; allows creating new content based on pre-approved templates, saving time and effort; other direct integration with Veeva suite, compatibility with IQVIA, Agnitio and other major platforms, as well as automatic publish to Salesforce Marketing Cloud; the platform also has multiple possibilities for quick content localization.</span></div>","buttonText":"<div style=\u0027line-height: 32px; text-align: center;\u0027><span style=\u0027font-size: 20px;color:{textColorToken};font-family:{fontFamilyToken};\u0027><strong>GET A FREE DEMO</strong></span></div>"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib/index.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block02/index.vue?vue&type=custom&index=0&blockType=i18n":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block02/index.vue?vue&type=custom&index=0&blockType=i18n ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"eng":{"title":"<div style=\u0027line-height: 60px; text-align: center;\u0027><span style=\u0027color:{textColorToken}; font-size: 40px; font-family:{fontFamilyToken};\u0027>Bringing standards in content creation on<br class=\u0027m-hide\u0027> multiple levels</span></div>","card1title":"<div style=\u0027line-height: 36px; text-align: left;\u0027><span style=\u0027color:{textColorToken}; font-size: 24px; font-family:{fontFamilyToken};\u0027>Concept</span></div>","card1desc":"<div style=\u0027line-height: 24px; text-align: left;\u0027><span style=\u0027color:{textColorToken}; font-size: 14px; font-family:{fontFamilyToken};\u0027>Deliver unified storyboard template, readable and reusable across affiliates</span></div>","card2title":"<div style=\u0027line-height: 36px; text-align: left;\u0027><span style=\u0027color:{textColorToken}; font-size: 24px; font-family:{fontFamilyToken};\u0027>Creative design</span></div>","card2desc":"<div style=\u0027line-height: 24px; text-align: left;\u0027><span style=\u0027color:{textColorToken}; font-size: 14px; font-family:{fontFamilyToken};\u0027>Unity and consistency of navigation, single style across brands within one portfolio</span></div>","card3title":"<div style=\u0027line-height: 36px; text-align: left;\u0027><span style=\u0027color:{textColorToken}; font-size: 24px; font-family:{fontFamilyToken};\u0027>Technology</span></div>","card3desc":"<div style=\u0027line-height: 24px; text-align: left;\u0027><span style=\u0027color:{textColorToken}; font-size: 14px; font-family:{fontFamilyToken};\u0027>Writing code according to eWizard Framework HTML5 Standard — content is 100% editable in eWizard</span></div>"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib/index.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block03/index.vue?vue&type=custom&index=0&blockType=i18n":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block03/index.vue?vue&type=custom&index=0&blockType=i18n ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"eng":{"title":"<div style=\u0027line-height: 60px; text-align: center;\u0027><span style=\u0027color:{textColorToken}; font-size: 40px; font-family:{fontFamilyToken};\u0027><strong>Estimate Your Content Strategy — <br class=\u0027m-hide\u0027>Get eWizard Pulse Today</strong></span></div>","subtitle":"<div style=\u0027line-height: 24px; text-align: center;\u0027><span style=\u0027color:{textColorToken}; font-size: 14px; font-family:{fontFamilyToken};\u0027>eWizard Pulse is the application, directly connected with eWizard online platform and analytical engine in place</span></div>","buttonText1":"<div style=\u0027line-height: 32px; text-align: center; text-indent:20px;\u0027><span style=\u0027color:{textColorToken}; font-size: 20px; font-family:{fontFamilyToken};\u0027><strong>DOWNLOAD</strong></span></div>"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib/index.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block04/index.vue?vue&type=custom&index=0&blockType=i18n":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block04/index.vue?vue&type=custom&index=0&blockType=i18n ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"eng":{"title":"<div style=\u0027line-height: 60px; text-align: center;\u0027><span style=\u0027color:{textColorToken}; font-size: 40px; font-family:{fontFamilyToken};\u0027><strong>Stay Connected to Viseven</strong></span></div>","subtitle":"<div style=\u0027line-height: 24px; text-align: center;\u0027><span style=\u0027color:{textColorToken}; font-size: 14px; font-family:{fontFamilyToken};\u0027>Subscribe to your pharma marketing newsletter</span></div>","buttonText":"<div style=\u0027line-height: 32px; text-align: center;\u0027><span style=\u0027color:{textColorToken}; font-size: 20px; font-family:{fontFamilyToken};\u0027><strong>SUBSCRIBE</strong></span></div>"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib/index.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-footer/index.vue?vue&type=custom&index=0&blockType=i18n":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-footer/index.vue?vue&type=custom&index=0&blockType=i18n ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"eng":{"address":"<div style=\u0027line-height:{lineHeightToken};text-align:{textAlign};\u0027><span style=\u0027color:{textColorToken};font-size:{fontSizeToken};font-family:{fontFamilyToken};\u0027>Our mailing address:<br>Lõõtsa St. 2a, Lasnamäe district, Tallinn, Harju county<br>Estonia, 11415<br><a href=\u0027tel:+3726980460\u0027 target=\u0027_blank\u0027><span style=\u0027color:{textColorToken};font-size:{fontSizeToken};font-family:{fontFamilyToken};\u0027>+37 269 80 460</span></a></span></div>","link":"<div style=\u0027line-height:{lineHeightToken};text-align:{textAlign};\u0027><span style=\u0027color:{textColorToken};font-size:{fontSizeToken};font-family:{fontFamilyToken};\u0027><a href=\u0027https://viseven.com/\u0027 target=\u0027_blank\u0027><span style=\u0027color:{textColorToken};font-size:{fontSizeToken};font-family:{fontFamilyToken};\u0027><b>viseven.com</b></span></a></span></div>","copy":"<div style=\u0027line-height:{lineHeightToken};text-align:{textAlign};\u0027><span style=\u0027color:{textColorToken};font-size:{fontSizeToken};font-family:{fontFamilyToken};\u0027><b>Copyright © 2020 Viseven Europe OÜ, All rights reserved</b></span></div>"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib/index.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-header/index.vue?vue&type=custom&index=0&blockType=i18n":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-header/index.vue?vue&type=custom&index=0&blockType=i18n ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"eng":{"title":"<div style=\u0027line-height: 36px; text-align: right;\u0027><span style=\u0027color:{textColorToken}; font-size: 24px; font-family:{fontFamilyToken};\u0027><strong>DIGITAL CONTENT FACTORY: Strategic approach to digital leadership</strong></span></div>"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/compound-manifest.js":
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/compound-manifest.js ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.requiredBlocks = {};exports.requiredBlocks['module-placeholder'] = __webpack_require__(/*! template-loader?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./node_modules/@blocks/module-placeholder/index.vue */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./node_modules/@blocks/module-placeholder/index.vue");exports.requiredBlocks['default-site-header'] = __webpack_require__(/*! template-loader?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-header/index.vue */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-header/index.vue");exports.requiredBlocks['default-site-block01'] = __webpack_require__(/*! template-loader?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block01/index.vue */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block01/index.vue");exports.requiredBlocks['default-site-block02'] = __webpack_require__(/*! template-loader?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block02/index.vue */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block02/index.vue");exports.requiredBlocks['default-site-block03'] = __webpack_require__(/*! template-loader?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block03/index.vue */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block03/index.vue");exports.requiredBlocks['default-site-block04'] = __webpack_require__(/*! template-loader?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block04/index.vue */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block04/index.vue");exports.requiredBlocks['default-site-footer'] = __webpack_require__(/*! template-loader?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-footer/index.vue */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-footer/index.vue");exports.blockManifest={"components":[{"id":"module-placeholder","name":"Module Placeholder","model":{},"path":"node_modules/@blocks/module-placeholder","metadata":[],"icon":{"empty-icon":__webpack_require__(/*! @/node_modules/@blocks/module-placeholder/empty-icon.png */ "./node_modules/@blocks/module-placeholder/empty-icon.png"),"icon":__webpack_require__(/*! @/node_modules/@blocks/module-placeholder/icon.png */ "./node_modules/@blocks/module-placeholder/icon.png")}},{"id":"default-site-header","name":"Header","model":{},"path":"common/blocks-library/default-site-header","metadata":[],"icon":{"icon":__webpack_require__(/*! @/common/blocks-library/default-site-header/icon.png */ "./common/blocks-library/default-site-header/icon.png")}},{"id":"default-site-block01","name":"Block 01","model":{},"path":"common/blocks-library/default-site-block01","metadata":[],"icon":{"icon":__webpack_require__(/*! @/common/blocks-library/default-site-block01/icon.png */ "./common/blocks-library/default-site-block01/icon.png")}},{"id":"default-site-block02","name":"Block 02","model":{},"path":"common/blocks-library/default-site-block02","metadata":[],"icon":{"icon":__webpack_require__(/*! @/common/blocks-library/default-site-block02/icon.png */ "./common/blocks-library/default-site-block02/icon.png")}},{"id":"default-site-block03","name":"Block 03","model":{},"path":"common/blocks-library/default-site-block03","metadata":[],"icon":{"icon":__webpack_require__(/*! @/common/blocks-library/default-site-block03/icon.png */ "./common/blocks-library/default-site-block03/icon.png")}},{"id":"default-site-block04","name":"Block 04","model":{},"path":"common/blocks-library/default-site-block04","metadata":[],"icon":{"icon":__webpack_require__(/*! @/common/blocks-library/default-site-block04/icon.png */ "./common/blocks-library/default-site-block04/icon.png")}},{"id":"default-site-footer","name":"Footer","model":{},"path":"common/blocks-library/default-site-footer","metadata":[],"icon":{"icon":__webpack_require__(/*! @/common/blocks-library/default-site-footer/icon.png */ "./common/blocks-library/default-site-footer/icon.png")}}]};exports.componentManifest={"components":[{"id":"wiz-text","name":{"eng":"Text"},"icon":__webpack_require__(/*! @/node_modules/@site/wiz-text/icon.png */ "./node_modules/@site/wiz-text/icon.png")},{"id":"wiz-image","name":{"eng":"Image"},"icon":__webpack_require__(/*! @/node_modules/@site/wiz-image/icon.png */ "./node_modules/@site/wiz-image/icon.png")},{"id":"wiz-video","name":{"eng":"Video"},"icon":__webpack_require__(/*! @/node_modules/@site/wiz-video/icon.png */ "./node_modules/@site/wiz-video/icon.png")},{"id":"wiz-button","name":{"eng":"Button"},"icon":__webpack_require__(/*! @/node_modules/@site/wiz-button/icon.png */ "./node_modules/@site/wiz-button/icon.png")},{"id":"wiz-references","name":{"eng":"References"},"icon":__webpack_require__(/*! @/node_modules/@site/wiz-references/icon.png */ "./node_modules/@site/wiz-references/icon.png")}],"ignore":[]};exports.blockThemesManifest={"components":[]};exports.componentsThemesManifest={"components":[]};

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/entry-editor.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/entry-editor.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./public-path */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/public-path.js");

var _path = __webpack_require__(/*! path */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/path-browserify/index.js");

var packageJson = _interopRequireWildcard(__webpack_require__(/*! @/package.json */ "./package.json"));

var _utils = __webpack_require__(/*! ./utils */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/utils.js");

var _clone = _interopRequireDefault(__webpack_require__(/*! clone */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/clone/clone.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable */
window.__components = window.__components || [];
window.__localBlocks = [];
window.__blocks = [];
window.__blocksList = [];
window.__blocksGroups = [];
window.__blocksFilters = [];
window.__brandsList = [];
window.__componentsList = [];
window.__modulesList = [];
window.__componentsFileProps = {};
window.__installedComponents = {};

if (true) {
  if (true) {
    const manifest = __webpack_require__(/*! ./compound-manifest.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/compound-manifest.js");

    (0, _utils.setPropManifestToWindow)(manifest.blockManifest, 'components', '__blocksList');
    (0, _utils.setPropManifestToWindow)(manifest.blockManifest, 'groups', '__blocksGroups');
    (0, _utils.setPropManifestToWindow)(manifest.blockManifest, 'filters', '__blocksFilters');
    (0, _utils.setPropManifestToWindow)(manifest.blockManifest, 'brands', '__brandsList');

    window.__blocksList.forEach(block => {
      const requiredBlock = manifest.requiredBlocks[block.id];
      const blockModule = requiredBlock.default || requiredBlock;

      if (blockModule.methods) {
        replaceMethods(blockModule);
      }

      const clonedBlock = (0, _clone.default)(blockModule, {
        includeNonEnumerable: true
      });

      window.__blocks.push(clonedBlock);
    });
  }

  if (false) {}

  if (false) {}

  if (true) {
    const manifest = __webpack_require__(/*! ./compound-manifest.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/compound-manifest.js");

    window.__componentsList = window.__componentsList.concat(manifest.componentManifest.components);
  }

  if (true) {
    const modulesManifest = __webpack_require__(/*! ./common/blocks-library/modules.json */ "./common/blocks-library/modules.json");

    window.__modulesList = window.__modulesList.concat(modulesManifest.components || []);
  }

  if ({"wiz-block":["module-source"],"wiz-layout":[],"wiz-video":["src","poster","play-icon"],"wiz-image":["src"],"wiz-link":[],"wiz-link-wrapper":[],"wiz-references":[],"wiz-social-follow-icons":[],"wiz-utility-button":["icon-src"],"wiz-button":[],"wiz-text":[]}) {
    window.__componentsFileProps = {"wiz-block":["module-source"],"wiz-layout":[],"wiz-video":["src","poster","play-icon"],"wiz-image":["src"],"wiz-link":[],"wiz-link-wrapper":[],"wiz-references":[],"wiz-social-follow-icons":[],"wiz-utility-button":["icon-src"],"wiz-button":[],"wiz-text":[]};
  }

  if (window.__modulesList) {
    window.__modulesList.forEach(requireBlock);
  }

  /marker-components-start/
 const blocksList = {};

        var block0 = __webpack_require__(/*! ./node_modules/@blocks/module-placeholder/index.vue */ "./node_modules/@blocks/module-placeholder/index.vue");

        block0 = block0.default || block0;

        window.__components.push(block0);

        blocksList['module-placeholder']=block0;

        var block1 = __webpack_require__(/*! ./common/blocks-library/default-site-header/index.vue */ "./common/blocks-library/default-site-header/index.vue");

        block1 = block1.default || block1;

        window.__components.push(block1);

        blocksList['default-site-header']=block1;

        var block2 = __webpack_require__(/*! ./common/blocks-library/default-site-block01/index.vue */ "./common/blocks-library/default-site-block01/index.vue");

        block2 = block2.default || block2;

        window.__components.push(block2);

        blocksList['default-site-block01']=block2;

        var block3 = __webpack_require__(/*! ./common/blocks-library/default-site-block02/index.vue */ "./common/blocks-library/default-site-block02/index.vue");

        block3 = block3.default || block3;

        window.__components.push(block3);

        blocksList['default-site-block02']=block3;

        var block4 = __webpack_require__(/*! ./common/blocks-library/default-site-block03/index.vue */ "./common/blocks-library/default-site-block03/index.vue");

        block4 = block4.default || block4;

        window.__components.push(block4);

        blocksList['default-site-block03']=block4;

        var block5 = __webpack_require__(/*! ./common/blocks-library/default-site-block04/index.vue */ "./common/blocks-library/default-site-block04/index.vue");

        block5 = block5.default || block5;

        window.__components.push(block5);

        blocksList['default-site-block04']=block5;

        var block6 = __webpack_require__(/*! ./common/blocks-library/default-site-footer/index.vue */ "./common/blocks-library/default-site-footer/index.vue");

        block6 = block6.default || block6;

        window.__components.push(block6);

        blocksList['default-site-footer']=block6;
/marker-components-end/;
} else {}

if (packageJson) {
  window.__installedComponents = getInstalledComponents();
}

function requireBlock(_ref) {
  let {
    id
  } = _ref;
  /marker-blocks-start/
 const block = blocksList[id]; 
/marker-blocks-end/;

  if (block.methods) {
    replaceMethods(block);
  }

  window.__blocks.push(block);
}

function replaceMethods(block) {
  Object.keys(block.methods).forEach(method => {
    const methodFunction = block.methods[method];

    block.methods[method] = function () {
      console.error(`Methods are not supported in Block content type`);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return methodFunction.call(this, args);
    };
  });
}

function getInstalledComponents() {
  return Object.keys(packageJson.dependencies || {}).reduce(function (data, key) {
    data[key] = {
      path: './node_modules/' + key
    };
    return data;
  }, {});
}

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/public-path.js":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/public-path.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */
__webpack_require__.p = window.__publicPath || './';

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/utils.js":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/assets/utils.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentTheme = getCurrentTheme;
exports.setPropManifestToWindow = setPropManifestToWindow;

function getCurrentTheme(settings) {
  if (settings.getCurrentTheme) {
    return settings.getCurrentTheme();
  }

  return settings.getRawByPath('theme', '');
}

function setPropManifestToWindow(manifest, prop, windowProp) {
  const propExist = manifest[prop] !== undefined;

  if (propExist) {
    window[windowProp] = window[windowProp].concat(manifest[prop]);
  }

  window[windowProp] = window[windowProp].concat([]);
}

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/@blocks/module-placeholder/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/@blocks/module-placeholder/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _wizBlock = _interopRequireDefault(__webpack_require__(/*! wiz-block */ "./node_modules/wiz-block/index.vue"));

var _wizPlaceholder = __webpack_require__(/*! wiz-placeholder */ "./node_modules/wiz-placeholder/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'module-placeholder',
  components: {
    wizBlock: _wizBlock.default,
    wizPlaceholder: _wizPlaceholder.wizPlaceholder,
    wizColumn: _wizPlaceholder.wizColumn
  }
};
exports.default = _default;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-block/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-block/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
var _default = {
  name: 'wiz-block',
  props: {},

  data() {
    return {
      empty: false
    };
  },

  mounted() {
    this.observer = new MutationObserver(mutations => {
      this.empty = !this.$slots.default;
    });
    this.observer.observe(this.$el, {
      childList: true,
      subtree: true,
      attributes: true
    });
  },

  beforeDestroy() {
    this.observer.disconnect();
  }

};
exports.default = _default;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-layout/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-layout/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
var _default = {
  name: 'wiz-layout',
  container: true,
  props: {
    type: {
      type: String,
      default: 'horizontal'
    },
    align: String,
    width: String
  }
};
exports.default = _default;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/@blocks/module-placeholder/index.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/@blocks/module-placeholder/index.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&lang=css& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/@blocks/module-placeholder/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-block/index.vue?vue&type=style&index=0&id=153ffc34&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-block/index.vue?vue&type=style&index=0&id=153ffc34&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_id_153ffc34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&id=153ffc34&scoped=true&lang=css& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-block/index.vue?vue&type=style&index=0&id=153ffc34&scoped=true&lang=css&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_id_153ffc34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_id_153ffc34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_id_153ffc34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_id_153ffc34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-layout/index.vue?vue&type=style&index=0&id=74d93279&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-layout/index.vue?vue&type=style&index=0&id=74d93279&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_id_74d93279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&id=74d93279&scoped=true&lang=css& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-layout/index.vue?vue&type=style&index=0&id=74d93279&scoped=true&lang=css&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_id_74d93279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_id_74d93279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_id_74d93279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_id_74d93279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block01/index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block01/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1c81c288___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1c81c288& */ "./common/blocks-library/default-site-block01/index.vue?vue&type=template&id=1c81c288&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./common/blocks-library/default-site-block01/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./common/blocks-library/default-site-block01/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=custom&index=0&blockType=i18n */ "./common/blocks-library/default-site-block01/index.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1c81c288___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1c81c288___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "common/blocks-library/default-site-block01/index.vue"
;component.options.template = '<wiz-block class="default-site-block01"><wiz-placeholder class="wrapper"><wiz-column :width="100"><wiz-text class="title m-p-0 m-p-b-20" :text="$t(\'title\', {            textColorToken: \'#ffffff\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text><wiz-video class="video-block" src="https://www.youtube.com/watch?v=SWhNcRKEFcM?vq=high"></wiz-video><wiz-text class="description mt-t-20 m-p-0 m-p-b-20" :text="$t(\'description\', {            textColorToken: \'#ffffff\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text><wiz-button :width="236" :height="64" class="button-free-demo" :text="$t(\'buttonText\', {            textColorToken: \'#ffffff\',            fontFamilyToken: \'OpenSans\',          })" link="https://www.viseven.com/"></wiz-button></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-block01';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-block01/index.vue';
    ;component.options.template = '<wiz-block class="default-site-block01"><wiz-placeholder class="wrapper"><wiz-column :width="100"><wiz-text class="title m-p-0 m-p-b-20" :text="$t(\'title\', {            textColorToken: \'#ffffff\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text><wiz-video class="video-block" src="https://www.youtube.com/watch?v=SWhNcRKEFcM?vq=high"></wiz-video><wiz-text class="description mt-t-20 m-p-0 m-p-b-20" :text="$t(\'description\', {            textColorToken: \'#ffffff\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text><wiz-button :width="236" :height="64" class="button-free-demo" :text="$t(\'buttonText\', {            textColorToken: \'#ffffff\',            fontFamilyToken: \'OpenSans\',          })" link="https://www.viseven.com/"></wiz-button></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-block01';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-block01/index.vue';
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block02/index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block02/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_f2b85d06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=f2b85d06& */ "./common/blocks-library/default-site-block02/index.vue?vue&type=template&id=f2b85d06&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./common/blocks-library/default-site-block02/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./common/blocks-library/default-site-block02/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=custom&index=0&blockType=i18n */ "./common/blocks-library/default-site-block02/index.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_f2b85d06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_f2b85d06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "common/blocks-library/default-site-block02/index.vue"
;component.options.template = '<wiz-block class="default-site-block02"><wiz-placeholder class="wrapper m-p-20" style="padding: 60px 0 0"><wiz-column :width="100"><wiz-text class="title" :text="$t(\'title\', {            textColorToken: \'#212121\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="wrapper m-direction-column m-p-t-0" style="padding: 60px 0"><wiz-column class="card-column m-direction-column m-full-width m-m-0 mt-center m-m-b-20 m-p-20" :width="30"><wiz-placeholder style="padding: 0 0 30px" class="m-direction-column title-wrapper"><wiz-column class="m-p-b-10" :width="30"><wiz-image src="./media/images/icon-1.png" align="left" alt="Icon" style="padding: 0" :width="60" :height="54"></wiz-image></wiz-column><wiz-column class="m-center" :width="70"><wiz-text class="m-p-0" :text="$t(\'card1title\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="description-wrapper m-p-0"><wiz-column class="m-center" :width="100"><wiz-text :text="$t(\'card1desc\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder></wiz-column><wiz-column class="card-column m-direction-column m-full-width mt-center m-m-0 m-m-b-20 m-p-20" :width="30"><wiz-placeholder style="padding: 0 0 30px" class="title-wrapper m-direction-column"><wiz-column class="m-p-b-10" :width="30"><wiz-image src="./media/images/icon-2.png" align="left" alt="Icon" style="padding: 0" :width="66" :height="66"></wiz-image></wiz-column><wiz-column class="m-center" :width="70"><wiz-text class="m-p-0" :text="$t(\'card2title\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="description-wrapper m-p-0"><wiz-column class="m-center" :width="100"><wiz-text :text="$t(\'card2desc\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder></wiz-column><wiz-column class="card-column m-direction-column m-full-width mt-center m-m-0 m-m-b-20 m-p-20" :width="30"><wiz-placeholder style="padding: 0 0 30px 0" class="title-wrapper m-direction-column"><wiz-column class="m-p-b-10" :width="30"><wiz-image src="./media/images/icon-3.png" align="left" alt="Icon" style="padding: 0" :width="54" :height="54"></wiz-image></wiz-column><wiz-column class="m-center" :width="70"><wiz-text class="m-p-0" :text="$t(\'card3title\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="description-wrapper m-p-0"><wiz-column class="m-center" :width="100"><wiz-text :text="$t(\'card3desc\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-block02';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-block02/index.vue';
    ;component.options.template = '<wiz-block class="default-site-block02"><wiz-placeholder class="wrapper m-p-20" style="padding: 60px 0 0"><wiz-column :width="100"><wiz-text class="title" :text="$t(\'title\', {            textColorToken: \'#212121\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="wrapper m-direction-column m-p-t-0" style="padding: 60px 0"><wiz-column class="card-column m-direction-column m-full-width m-m-0 mt-center m-m-b-20 m-p-20" :width="30"><wiz-placeholder style="padding: 0 0 30px" class="m-direction-column title-wrapper"><wiz-column class="m-p-b-10" :width="30"><wiz-image src="./media/images/icon-1.png" align="left" alt="Icon" style="padding: 0" :width="60" :height="54"></wiz-image></wiz-column><wiz-column class="m-center" :width="70"><wiz-text class="m-p-0" :text="$t(\'card1title\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="description-wrapper m-p-0"><wiz-column class="m-center" :width="100"><wiz-text :text="$t(\'card1desc\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder></wiz-column><wiz-column class="card-column m-direction-column m-full-width mt-center m-m-0 m-m-b-20 m-p-20" :width="30"><wiz-placeholder style="padding: 0 0 30px" class="title-wrapper m-direction-column"><wiz-column class="m-p-b-10" :width="30"><wiz-image src="./media/images/icon-2.png" align="left" alt="Icon" style="padding: 0" :width="66" :height="66"></wiz-image></wiz-column><wiz-column class="m-center" :width="70"><wiz-text class="m-p-0" :text="$t(\'card2title\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="description-wrapper m-p-0"><wiz-column class="m-center" :width="100"><wiz-text :text="$t(\'card2desc\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder></wiz-column><wiz-column class="card-column m-direction-column m-full-width mt-center m-m-0 m-m-b-20 m-p-20" :width="30"><wiz-placeholder style="padding: 0 0 30px 0" class="title-wrapper m-direction-column"><wiz-column class="m-p-b-10" :width="30"><wiz-image src="./media/images/icon-3.png" align="left" alt="Icon" style="padding: 0" :width="54" :height="54"></wiz-image></wiz-column><wiz-column class="m-center" :width="70"><wiz-text class="m-p-0" :text="$t(\'card3title\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="description-wrapper m-p-0"><wiz-column class="m-center" :width="100"><wiz-text :text="$t(\'card3desc\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-block02';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-block02/index.vue';
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block03/index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block03/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1b88843e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1b88843e& */ "./common/blocks-library/default-site-block03/index.vue?vue&type=template&id=1b88843e&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./common/blocks-library/default-site-block03/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./common/blocks-library/default-site-block03/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=custom&index=0&blockType=i18n */ "./common/blocks-library/default-site-block03/index.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1b88843e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1b88843e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "common/blocks-library/default-site-block03/index.vue"
;component.options.template = '<wiz-block class="default-site-block03"><wiz-placeholder class="wrapper" style="padding: 60px 0 0"><wiz-column class="align-content-center" :width="100"><wiz-text class="title m-full-width" style="padding: 0px 10px" :text="$t(\'title\', {            textColorToken: \'#0277BD\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text><wiz-text class="m-full-width m-p-tb-20" style="padding: 40px 10px 29px" :text="$t(\'subtitle\', {            textColorToken: \'#212121\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="wrapper" style="padding: 31px 0 59px" align="center"><wiz-column class="align-content-center" :width="100"><wiz-utility-button class="download-btn" style="padding: 0 0 0 28px" :style="{            borderRadius: \'64px\',            backgroundColor: \'#039BE5\',            width: \'232px\',          }" :text="$t(\'buttonText1\', {            textColorToken: \'#ffffff\',            fontFamilyToken: \'OpenSans\',          })" align="center" width="auto" button-type="download" icon-src="./media/images/image1.svg" link="https://apps.apple.com/us/app/ewizard-pulse/id1502819286"></wiz-utility-button></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-block03';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-block03/index.vue';
    ;component.options.template = '<wiz-block class="default-site-block03"><wiz-placeholder class="wrapper" style="padding: 60px 0 0"><wiz-column class="align-content-center" :width="100"><wiz-text class="title m-full-width" style="padding: 0px 10px" :text="$t(\'title\', {            textColorToken: \'#0277BD\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text><wiz-text class="m-full-width m-p-tb-20" style="padding: 40px 10px 29px" :text="$t(\'subtitle\', {            textColorToken: \'#212121\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="wrapper" style="padding: 31px 0 59px" align="center"><wiz-column class="align-content-center" :width="100"><wiz-utility-button class="download-btn" style="padding: 0 0 0 28px" :style="{            borderRadius: \'64px\',            backgroundColor: \'#039BE5\',            width: \'232px\',          }" :text="$t(\'buttonText1\', {            textColorToken: \'#ffffff\',            fontFamilyToken: \'OpenSans\',          })" align="center" width="auto" button-type="download" icon-src="./media/images/image1.svg" link="https://apps.apple.com/us/app/ewizard-pulse/id1502819286"></wiz-utility-button></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-block03';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-block03/index.vue';
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block04/index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-block04/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9f259202___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9f259202& */ "./common/blocks-library/default-site-block04/index.vue?vue&type=template&id=9f259202&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./common/blocks-library/default-site-block04/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./common/blocks-library/default-site-block04/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=custom&index=0&blockType=i18n */ "./common/blocks-library/default-site-block04/index.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_9f259202___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9f259202___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "common/blocks-library/default-site-block04/index.vue"
;component.options.template = '<wiz-block class="default-site-block04"><wiz-placeholder class="wrapper" style="padding: 60px 0 0"><wiz-column class="align-content-center" :width="100"><wiz-text class="title m-full-width" :text="$t(\'title\', {            textColorToken: \'#212121\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text><wiz-text class="m-full-width m-p-tb-20" style="padding: 40px 0 35px" :text="$t(\'subtitle\', {            textColorToken: \'#212121\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="wrapper" style="padding: 27px 0 60px"><wiz-column class="align-content-center" :width="100"><wiz-button class="default-button" style="padding: 64px 0 0; border-radius: 64px" :style="{            borderRadius: \'64px\',            backgroundColor: \'#0277BD\',          }" :width="169" :text="$t(\'buttonText\', {            textColorToken: \'#ffffff\',            fontFamilyToken: \'OpenSans\',          })" component-name="Subscribe Button" link="https://viseven.com.ua/products/ewizard"></wiz-button></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-block04';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-block04/index.vue';
    ;component.options.template = '<wiz-block class="default-site-block04"><wiz-placeholder class="wrapper" style="padding: 60px 0 0"><wiz-column class="align-content-center" :width="100"><wiz-text class="title m-full-width" :text="$t(\'title\', {            textColorToken: \'#212121\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text><wiz-text class="m-full-width m-p-tb-20" style="padding: 40px 0 35px" :text="$t(\'subtitle\', {            textColorToken: \'#212121\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="wrapper" style="padding: 27px 0 60px"><wiz-column class="align-content-center" :width="100"><wiz-button class="default-button" style="padding: 64px 0 0; border-radius: 64px" :style="{            borderRadius: \'64px\',            backgroundColor: \'#0277BD\',          }" :width="169" :text="$t(\'buttonText\', {            textColorToken: \'#ffffff\',            fontFamilyToken: \'OpenSans\',          })" component-name="Subscribe Button" link="https://viseven.com.ua/products/ewizard"></wiz-button></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-block04';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-block04/index.vue';
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-footer/index.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-footer/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3e976ac3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3e976ac3& */ "./common/blocks-library/default-site-footer/index.vue?vue&type=template&id=3e976ac3&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./common/blocks-library/default-site-footer/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./common/blocks-library/default-site-footer/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=custom&index=0&blockType=i18n */ "./common/blocks-library/default-site-footer/index.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3e976ac3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3e976ac3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "common/blocks-library/default-site-footer/index.vue"
;component.options.template = '<wiz-block class="default-site-footer m-center"><wiz-placeholder style="padding: 60px 0 0; min-height: auto"><wiz-column content-align="left" style="width: 35%"><wiz-image class="white-logo" src="./media/images/logo.svg" align="left" alt="Viseven" :width="146" :height="60" style="padding: 0; width: 146px"></wiz-image><wiz-social-follow-icons class="social-follow-icons" align-icons="left" style="padding: 58px 0 0; background-color: transparent" icon-border-color="transparent" :item-border-width="0" :item-width="48" :items="[    {        link: \'https://www.linkedin.com/company/viseven\',        enableLinkTracking: false,        alt: \'LinkedIn\',        icon: \'{publicPath}common/blocks-library/default-site-footer/media/images/linkedin.png\',        __label: \'LinkedIn\'    },    {        link: \'https://twitter.com/viseven_CLM\',        enableLinkTracking: false,        alt: \'Twitter\',        icon: \'{publicPath}common/blocks-library/default-site-footer/media/images/twitter.png\',        __label: \'Twitter\'    },    {        link: \'https://www.youtube.com/channel/UCWlpXCeBtfM8GVFf6hOR1Yg?view_as=subscriber\',        enableLinkTracking: false,        alt: \'YouTube\',        icon: \'{publicPath}common/blocks-library/default-site-footer/media/images/youtube.png\',        __label: \'YouTube\'    },    {        link: \'https://www.facebook.com/VisevenDigitalContentFactory/\',        enableLinkTracking: false,        alt: \'Facebook\',        icon: \'{publicPath}common/blocks-library/default-site-footer/media/images/facebook.png\',        __label: \'Facebook\'    }]"></wiz-social-follow-icons></wiz-column><wiz-column content-align="right" style="width: 61.6%"><wiz-text :text="$t(\'address\', {            textColorToken: \'#ffffff\',            textAlign: \'right\',            lineHeightToken: \'28px\',            fontSizeToken: \'14px\',            fontFamilyToken: \'OpenSans, sans-serif\',          })" style="padding: 0"></wiz-text><wiz-text :text="$t(\'link\', {            textColorToken: \'#ffffff\',            textAlign: \'right\',            lineHeightToken: \'36px\',            fontSizeToken: \'24px\',            fontFamilyToken: \'OpenSans, sans-serif\',          })" style="padding: 28px 0 0"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder style="padding: 25px 0 30px; min-height: auto"><wiz-column :width="100" content-align="center"><wiz-text :text="$t(\'copy\', {            textColorToken: \'#ffffff\',            textAlign: \'center\',            lineHeightToken: \'12px\',            fontSizeToken: \'10px\',            fontFamilyToken: \'OpenSans, sans-serif\',          })" style="padding: 0"></wiz-text></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-footer';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-footer/index.vue';
    ;component.options.template = '<wiz-block class="default-site-footer m-center"><wiz-placeholder style="padding: 60px 0 0; min-height: auto"><wiz-column content-align="left" style="width: 35%"><wiz-image class="white-logo" src="./media/images/logo.svg" align="left" alt="Viseven" :width="146" :height="60" style="padding: 0; width: 146px"></wiz-image><wiz-social-follow-icons class="social-follow-icons" align-icons="left" style="padding: 58px 0 0; background-color: transparent" icon-border-color="transparent" :item-border-width="0" :item-width="48" :items="[    {        link: \'https://www.linkedin.com/company/viseven\',        enableLinkTracking: false,        alt: \'LinkedIn\',        icon: \'{publicPath}common/blocks-library/default-site-footer/media/images/linkedin.png\',        __label: \'LinkedIn\'    },    {        link: \'https://twitter.com/viseven_CLM\',        enableLinkTracking: false,        alt: \'Twitter\',        icon: \'{publicPath}common/blocks-library/default-site-footer/media/images/twitter.png\',        __label: \'Twitter\'    },    {        link: \'https://www.youtube.com/channel/UCWlpXCeBtfM8GVFf6hOR1Yg?view_as=subscriber\',        enableLinkTracking: false,        alt: \'YouTube\',        icon: \'{publicPath}common/blocks-library/default-site-footer/media/images/youtube.png\',        __label: \'YouTube\'    },    {        link: \'https://www.facebook.com/VisevenDigitalContentFactory/\',        enableLinkTracking: false,        alt: \'Facebook\',        icon: \'{publicPath}common/blocks-library/default-site-footer/media/images/facebook.png\',        __label: \'Facebook\'    }]"></wiz-social-follow-icons></wiz-column><wiz-column content-align="right" style="width: 61.6%"><wiz-text :text="$t(\'address\', {            textColorToken: \'#ffffff\',            textAlign: \'right\',            lineHeightToken: \'28px\',            fontSizeToken: \'14px\',            fontFamilyToken: \'OpenSans, sans-serif\',          })" style="padding: 0"></wiz-text><wiz-text :text="$t(\'link\', {            textColorToken: \'#ffffff\',            textAlign: \'right\',            lineHeightToken: \'36px\',            fontSizeToken: \'24px\',            fontFamilyToken: \'OpenSans, sans-serif\',          })" style="padding: 28px 0 0"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder style="padding: 25px 0 30px; min-height: auto"><wiz-column :width="100" content-align="center"><wiz-text :text="$t(\'copy\', {            textColorToken: \'#ffffff\',            textAlign: \'center\',            lineHeightToken: \'12px\',            fontSizeToken: \'10px\',            fontFamilyToken: \'OpenSans, sans-serif\',          })" style="padding: 0"></wiz-text></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-footer';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-footer/index.vue';
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-header/index.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./common/blocks-library/default-site-header/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3cd79135___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3cd79135& */ "./common/blocks-library/default-site-header/index.vue?vue&type=template&id=3cd79135&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./common/blocks-library/default-site-header/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./common/blocks-library/default-site-header/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=custom&index=0&blockType=i18n */ "./common/blocks-library/default-site-header/index.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3cd79135___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3cd79135___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "common/blocks-library/default-site-header/index.vue"
;component.options.template = '<wiz-block class="default-site-header"><wiz-placeholder class="wrapper"><wiz-column class="m-p-b-10" :width="25"><wiz-image src="./media/images/logo.svg" align="left" alt="Viseven" style="padding: 0 0 10px" :width="146" :height="60"></wiz-image></wiz-column><wiz-column class="m-center m-p-lr-0" style="padding: 0 0 0px 30px" :width="75"><wiz-text class="header-title" :text="$t(\'title\', {            textColorToken: \'#0277BD\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-header';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-header/index.vue';
    ;component.options.template = '<wiz-block class="default-site-header"><wiz-placeholder class="wrapper"><wiz-column class="m-p-b-10" :width="25"><wiz-image src="./media/images/logo.svg" align="left" alt="Viseven" style="padding: 0 0 10px" :width="146" :height="60"></wiz-image></wiz-column><wiz-column class="m-center m-p-lr-0" style="padding: 0 0 0px 30px" :width="75"><wiz-text class="header-title" :text="$t(\'title\', {            textColorToken: \'#0277BD\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-header';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-header/index.vue';
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./node_modules/@blocks/module-placeholder/index.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?baseDir=C:/Users/a.batalin/Desktop/worckDate/27702/Default Microsite Template&filePathProps=%7B%22wiz-block%22%3A%5B%5D%2C%22wiz-layout%22%3A%5B%5D%2C%22wiz-video%22%3A%5B%5D%2C%22wiz-image%22%3A%5B%5D%2C%22wiz-link%22%3A%5B%5D%2C%22wiz-link-wrapper%22%3A%5B%5D%2C%22wiz-references%22%3A%5B%5D%2C%22wiz-social-follow-icons%22%3A%5B%22items.icon%22%5D%2C%22wiz-utility-button%22%3A%5B%5D%2C%22wiz-button%22%3A%5B%5D%2C%22wiz-text%22%3A%5B%5D%7D&componentType=block!./node_modules/@blocks/module-placeholder/index.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_544a8176___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=544a8176& */ "./node_modules/@blocks/module-placeholder/index.vue?vue&type=template&id=544a8176&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./node_modules/@blocks/module-placeholder/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/@blocks/module-placeholder/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=custom&index=0&blockType=i18n */ "./node_modules/@blocks/module-placeholder/index.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_544a8176___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_544a8176___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@blocks/module-placeholder/index.vue"
;component.options.template = '<wiz-block class="module-placeholder"><wiz-placeholder><wiz-column :width="100"></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'module-placeholder';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'node_modules/@blocks/module-placeholder/index.vue';
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block01/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block01/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'default-site-block01'
};
exports.default = _default;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block02/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block02/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'default-site-block02'
};
exports.default = _default;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block03/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block03/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'default-site-block03'
};
exports.default = _default;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block04/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block04/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'default-site-block04'
};
exports.default = _default;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-footer/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-footer/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'default-site-footer'
};
exports.default = _default;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-header/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-header/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'default-site-header'
};
exports.default = _default;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _componentTypes = __webpack_require__(/*! component-types */ "./node_modules/component-types/dist/index.js");

var _wizLayout = _interopRequireDefault(__webpack_require__(/*! wiz-layout */ "./node_modules/wiz-layout/index.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
var _default = {
  name: 'wiz-column',
  container: true,
  components: {
    wizLayout: _wizLayout.default
  },
  props: {
    width: {
      type: Number,
      __label: 'Width',
      actualType: _componentTypes.PropType.Number
    }
  },

  data() {
    return {
      empty: true
    };
  },

  watch: {
    width(value) {
      this.$emit('resize', value);
    }

  },
  computed: {
    cssWidth() {
      return this.width != undefined ? `${this.width}%` : '';
    },

    isViewMode() {
      return this.$editor.mode === 'view';
    }

  },

  mounted() {
    this.empty = !!this.$refs.fallbackContent;
    this.columnFullnessObserver = new MutationObserver(mutations => {
      this.empty = !!this.$refs.fallbackContent;
    });
    this.columnFullnessObserver.observe(this.$el, {
      childList: true,
      subtree: true,
      attributes: true
    });
  },

  beforeDestroy() {
    this.columnFullnessObserver.disconnect();
  }

};
exports.default = _default;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _wizLayout = _interopRequireDefault(__webpack_require__(/*! wiz-layout */ "./node_modules/wiz-layout/index.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
var _default = {
  name: 'wiz-placeholder',
  components: {
    wizLayout: _wizLayout.default
  },

  data() {
    return {
      empty: false,
      columns: [],
      columnsObserver: null
    };
  },

  props: {
    align: String
  },

  mounted() {
    this.columnsObserver = new MutationObserver(mutations => {
      const filledColumnsHeight = this.columns.filter(column => !column.empty).map(column => column.$el.offsetHeight);
      this.empty = this.columns.every(column => column.empty);
    });
    this.columnsObserver.observe(this.$el, {
      childList: true,
      subtree: true,
      attributes: true
    });
    this.columns = this.$children[0].$children;
  },

  beforeDestroy() {
    this.columnsObserver.disconnect();
  }

};
exports.default = _default;

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/base64-js/index.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/base64-js/index.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;

  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/clone/clone.js":
/*!************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/clone/clone.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var clone = function () {
  'use strict';

  function _instanceof(obj, type) {
    return type != null && obj instanceof type;
  }

  var nativeMap;

  try {
    nativeMap = Map;
  } catch (_) {
    // maybe a reference error because no `Map`. Give it a dummy value that no
    // value will ever be an instanceof.
    nativeMap = function () {};
  }

  var nativeSet;

  try {
    nativeSet = Set;
  } catch (_) {
    nativeSet = function () {};
  }

  var nativePromise;

  try {
    nativePromise = Promise;
  } catch (_) {
    nativePromise = function () {};
  }
  /**
   * Clones (copies) an Object using deep copying.
   *
   * This function supports circular references by default, but if you are certain
   * there are no circular references in your object, you can save some CPU time
   * by calling clone(obj, false).
   *
   * Caution: if `circular` is false and `parent` contains circular references,
   * your program may enter an infinite loop and crash.
   *
   * @param `parent` - the object to be cloned
   * @param `circular` - set to true if the object to be cloned may contain
   *    circular references. (optional - true by default)
   * @param `depth` - set to a number if the object is only to be cloned to
   *    a particular depth. (optional - defaults to Infinity)
   * @param `prototype` - sets the prototype to be used when cloning an object.
   *    (optional - defaults to parent prototype).
   * @param `includeNonEnumerable` - set to true if the non-enumerable properties
   *    should be cloned as well. Non-enumerable properties on the prototype
   *    chain will be ignored. (optional - false by default)
  */


  function clone(parent, circular, depth, prototype, includeNonEnumerable) {
    if (typeof circular === 'object') {
      depth = circular.depth;
      prototype = circular.prototype;
      includeNonEnumerable = circular.includeNonEnumerable;
      circular = circular.circular;
    } // maintain two arrays for circular references, where corresponding parents
    // and children have the same index


    var allParents = [];
    var allChildren = [];
    var useBuffer = typeof Buffer != 'undefined';
    if (typeof circular == 'undefined') circular = true;
    if (typeof depth == 'undefined') depth = Infinity; // recurse this function so we don't reset allParents and allChildren

    function _clone(parent, depth) {
      // cloning null always returns null
      if (parent === null) return null;
      if (depth === 0) return parent;
      var child;
      var proto;

      if (typeof parent != 'object') {
        return parent;
      }

      if (_instanceof(parent, nativeMap)) {
        child = new nativeMap();
      } else if (_instanceof(parent, nativeSet)) {
        child = new nativeSet();
      } else if (_instanceof(parent, nativePromise)) {
        child = new nativePromise(function (resolve, reject) {
          parent.then(function (value) {
            resolve(_clone(value, depth - 1));
          }, function (err) {
            reject(_clone(err, depth - 1));
          });
        });
      } else if (clone.__isArray(parent)) {
        child = [];
      } else if (clone.__isRegExp(parent)) {
        child = new RegExp(parent.source, __getRegExpFlags(parent));
        if (parent.lastIndex) child.lastIndex = parent.lastIndex;
      } else if (clone.__isDate(parent)) {
        child = new Date(parent.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent)) {
        if (Buffer.allocUnsafe) {
          // Node.js >= 4.5.0
          child = Buffer.allocUnsafe(parent.length);
        } else {
          // Older Node.js versions
          child = new Buffer(parent.length);
        }

        parent.copy(child);
        return child;
      } else if (_instanceof(parent, Error)) {
        child = Object.create(parent);
      } else {
        if (typeof prototype == 'undefined') {
          proto = Object.getPrototypeOf(parent);
          child = Object.create(proto);
        } else {
          child = Object.create(prototype);
          proto = prototype;
        }
      }

      if (circular) {
        var index = allParents.indexOf(parent);

        if (index != -1) {
          return allChildren[index];
        }

        allParents.push(parent);
        allChildren.push(child);
      }

      if (_instanceof(parent, nativeMap)) {
        parent.forEach(function (value, key) {
          var keyChild = _clone(key, depth - 1);

          var valueChild = _clone(value, depth - 1);

          child.set(keyChild, valueChild);
        });
      }

      if (_instanceof(parent, nativeSet)) {
        parent.forEach(function (value) {
          var entryChild = _clone(value, depth - 1);

          child.add(entryChild);
        });
      }

      for (var i in parent) {
        var attrs;

        if (proto) {
          attrs = Object.getOwnPropertyDescriptor(proto, i);
        }

        if (attrs && attrs.set == null) {
          continue;
        }

        child[i] = _clone(parent[i], depth - 1);
      }

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(parent);

        for (var i = 0; i < symbols.length; i++) {
          // Don't need to worry about cloning a symbol because it is a primitive,
          // like a number or string.
          var symbol = symbols[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);

          if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
            continue;
          }

          child[symbol] = _clone(parent[symbol], depth - 1);

          if (!descriptor.enumerable) {
            Object.defineProperty(child, symbol, {
              enumerable: false
            });
          }
        }
      }

      if (includeNonEnumerable) {
        var allPropertyNames = Object.getOwnPropertyNames(parent);

        for (var i = 0; i < allPropertyNames.length; i++) {
          var propertyName = allPropertyNames[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);

          if (descriptor && descriptor.enumerable) {
            continue;
          }

          child[propertyName] = _clone(parent[propertyName], depth - 1);
          Object.defineProperty(child, propertyName, {
            enumerable: false
          });
        }
      }

      return child;
    }

    return _clone(parent, depth);
  }
  /**
   * Simple flat clone using prototype, accepts only objects, usefull for property
   * override on FLAT configuration object (no nested props).
   *
   * USE WITH CAUTION! This may not behave as you wish if you do not know how this
   * works.
   */


  clone.clonePrototype = function clonePrototype(parent) {
    if (parent === null) return null;

    var c = function () {};

    c.prototype = parent;
    return new c();
  }; // private utility functions


  function __objToStr(o) {
    return Object.prototype.toString.call(o);
  }

  clone.__objToStr = __objToStr;

  function __isDate(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Date]';
  }

  clone.__isDate = __isDate;

  function __isArray(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Array]';
  }

  clone.__isArray = __isArray;

  function __isRegExp(o) {
    return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
  }

  clone.__isRegExp = __isRegExp;

  function __getRegExpFlags(re) {
    var flags = '';
    if (re.global) flags += 'g';
    if (re.ignoreCase) flags += 'i';
    if (re.multiline) flags += 'm';
    return flags;
  }

  clone.__getRegExpFlags = __getRegExpFlags;
  return clone;
}();

if ( true && module.exports) {
  module.exports = clone;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/node_modules/buffer/index.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/@blocks/module-placeholder/index.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/@blocks/module-placeholder/index.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/getUrl.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./assets/ic-module.png */ "./node_modules/@blocks/module-placeholder/assets/ic-module.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "\n[ewizardjs-content] .module-placeholder .wiz-placeholder .wiz-column:empty:after {\r\n  background: rgb(179 157 219 / 65%) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center 97px/116px 86px no-repeat;\r\n  height: 240px;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-block/index.vue?vue&type=style&index=0&id=153ffc34&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-block/index.vue?vue&type=style&index=0&id=153ffc34&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n[ewizardjs-content] .wiz-block[data-v-153ffc34] {\r\n  min-width: 100%;\r\n  width: 100%;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-layout/index.vue?vue&type=style&index=0&id=74d93279&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-layout/index.vue?vue&type=style&index=0&id=74d93279&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n[ewizardjs-content] .wiz-layout[data-v-74d93279] {\n  display: flex;\n}\n[ewizardjs-content] .wiz-layout.horizontal[data-v-74d93279] {\n  flex-direction: row;\n}\n[ewizardjs-content] .wiz-layout.vertical[data-v-74d93279] {\n  flex-direction: column;\n}\n[ewizardjs-content] .wiz-layout.horizontal.center[data-v-74d93279] {\n  justify-content: center;\n}\n[ewizardjs-content] .wiz-layout.horizontal.left[data-v-74d93279] {\n  justify-content: flex-start;\n}\n[ewizardjs-content] .wiz-layout.horizontal.right[data-v-74d93279] {\n  justify-content: flex-end;\n}\n[ewizardjs-content] .wiz-layout.vertical.center[data-v-74d93279] {\n  align-items: center;\n}\n[ewizardjs-content] .wiz-layout.vertical.left[data-v-74d93279] {\n  align-items: flex-start;\n}\n[ewizardjs-content] .wiz-layout.vertical.right[data-v-74d93279] {\n  align-items: flex-end;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block01/index.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block01/index.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[ewizardjs-content] .default-site-block01 {\n  width: 100%;\n  margin: 0 auto;\n  background: #0277bd;\n}\n[ewizardjs-content] .default-site-block01 .wrapper {\n  max-width: 950px;\n  min-width: 280px;\n  margin: 0 auto;\n  padding: 30px 20px 60px !important;\n}\n[ewizardjs-content] .default-site-block01 .wrapper .title {\n  padding: 30px 0;\n}\n[ewizardjs-content] .default-site-block01 .wrapper .video-block video {\n  height: auto !important;\n}\n[ewizardjs-content] .default-site-block01 .wrapper .description {\n  padding: 60px 0;\n  font-weight: normal;\n}\n[ewizardjs-content] .default-site-block01 .wrapper .button-free-demo {\n  margin: 0 auto;\n  padding: 30px 0;\n  background: #039be5;\n  border-radius: 64px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block02/index.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block02/index.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[ewizardjs-content] .default-site-block02 {\n  width: 100%;\n  min-height: 100px;\n  height: auto;\n  margin: 0 auto;\n  background: #c0eafd;\n}\n[ewizardjs-content] .default-site-block02 .card-column {\n  box-sizing: border-box;\n  max-width: 360px;\n  min-width: 280px;\n  width: 360px;\n  min-height: 250px;\n  padding: 40px;\n  background: #0277bd;\n}\n[ewizardjs-content] .default-site-block02 .card-column:nth-of-type(1) {\n  margin-right: 20px;\n}\n[ewizardjs-content] .default-site-block02 .card-column:nth-of-type(3) {\n  margin-left: 20px;\n}\n[ewizardjs-content] .default-site-block02 .card-column .wiz-placeholder {\n  padding-left: 0 !important;\n}\n[ewizardjs-content] .default-site-block02 .card-column .wiz-placeholder {\n  padding-right: 0 !important;\n}\n[ewizardjs-content] .default-site-block02 .wrapper {\n  max-width: 1140px;\n  margin: 0 auto;\n}\n[ewizardjs-content] .default-site-block02 .title-wrapper {\n  width: 100%;\n  align-items: center;\n}\n[ewizardjs-content] .default-site-block02 .title-wrapper .wiz-text {\n  padding-left: 10px;\n}\n[ewizardjs-content] .default-site-block02 .description-wrapper {\n  max-width: 100%;\n  margin: 0 auto;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block03/index.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block03/index.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[ewizardjs-content] .default-site-block03 {\n  width: 100%;\n  height: auto;\n  min-height: 100px;\n  margin: 0 auto;\n  background: #fff;\n}\n[ewizardjs-content] .default-site-block03 .align-content-center {\n  align-items: center;\n}\n[ewizardjs-content] .default-site-block03 .align-content-left {\n  align-items: flex-start;\n}\n[ewizardjs-content] .default-site-block03 .align-content-right {\n  align-items: flex-end;\n}\n[ewizardjs-content] .default-site-block03 .wrapper {\n  max-width: 950px;\n  min-width: 280px;\n  margin: 0 auto;\n}\n[ewizardjs-content] .default-site-block03 .wiz-text {\n  max-width: 100%;\n}\n[ewizardjs-content] .download-btn .wiz-utility-button-image {\n  width: 22px !important;\n  padding: 15px 0;\n  box-sizing: content-box;\n}\n[ewizardjs-content] .download-btn .wiz-utility-button-image img {\n  min-width: auto !important;\n}\n[ewizardjs-content] .download-btn .wiz-link {\n  padding: 15px 35px 15px 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block04/index.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block04/index.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[ewizardjs-content] .default-site-block04 {\n  width: 100%;\n  height: auto;\n  min-height: 100px;\n  margin: 0 auto;\n  background: #c0eafd;\n}\n[ewizardjs-content] .default-site-block04 .align-content-center {\n  align-items: center;\n}\n[ewizardjs-content] .default-site-block04 .wrapper {\n  max-width: 950px;\n  min-width: 280px;\n  margin: 0 auto;\n}\n[ewizardjs-content] .default-site-block04 .wiz-text {\n  max-width: 100%;\n}\n[ewizardjs-content] .default-site-block04 .wiz-button.default-button {\n  background-color: #0277bd;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-footer/index.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-footer/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[ewizardjs-content] .default-site-footer {\n  width: 100%;\n  margin: 0 auto;\n  background: #0277bd;\n}\n[ewizardjs-content] .default-site-footer .wiz-placeholder {\n  max-width: 1140px;\n  min-width: 280px;\n  margin: 0 auto;\n}\n[ewizardjs-content] .default-site-footer .social-follow-icons img {\n  width: 48px !important;\n  max-height: 100% !important;\n}\n[ewizardjs-content] .default-site-footer .social-follow-icons td.item {\n  padding: 0 5px;\n}\n[ewizardjs-content] .default-site-footer .social-follow-icons td.item.first-item {\n  padding-right: 5px;\n}\n[ewizardjs-content] .default-site-footer .social-follow-icons td.item.last-item {\n  padding-left: 5px;\n}\n[ewizardjs-content] .default-site-footer a {\n  text-decoration: none;\n}\n[ewizardjs-content] .default-site-footer .wiz-text {\n  max-width: 100%;\n}\n@media screen and (max-width: 599px), screen and (max-width: 599px) and (min-width: 1px) {\n[ewizardjs-content] div.default-site-footer {\n    padding: 30px 0 !important;\n}\n[ewizardjs-content] div.default-site-footer .social-follow-icons {\n    padding-top: 35px !important;\n}\n[ewizardjs-content] div.default-site-footer .social-follow-icons img {\n    width: 40px !important;\n}\n[ewizardjs-content] div.default-site-footer .social-follow-icons td.item {\n    padding: 0 5px;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-header/index.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-header/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[ewizardjs-content] .default-site-header {\n  width: 100%;\n  height: auto;\n  min-height: 100px;\n  margin: 0 auto;\n  background: #ffffff;\n}\n[ewizardjs-content] .default-site-header .wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-width: 1140px;\n  min-width: 280px;\n  height: 100%;\n  min-height: 100px;\n  margin: 0 auto;\n}\n[ewizardjs-content] .default-site-header .wrapper .title {\n  font-weight: 600;\n}\n@media screen and (min-width: 960px) {\n[ewizardjs-content] .default-site-header .wrapper:after {\n    content: \"\";\n    min-height: inherit;\n    font-size: 0;\n}\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=style&index=0&id=f9c57788&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=style&index=0&id=f9c57788&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/getUrl.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./empty.png */ "./node_modules/wiz-placeholder/components/empty.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "\n[ewizardjs-content] .wiz-column[data-v-f9c57788] {\n  flex-grow: 1;\n}\n[ewizardjs-content] .wiz-column__fallback-content[data-v-f9c57788] {\n  background-color: rgb(244, 244, 244);\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 100%;\n  height: 100%;\n  min-height: 100px;\n}\n[ewizardjs-content] .wiz-column__fallback-content.view[data-v-f9c57788] {\n  opacity: 0;\n  visibility: hidden;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=style&index=0&id=30258dfd&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=style&index=0&id=30258dfd&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n[ewizardjs-content] .wiz-placeholder[data-v-30258dfd] {\r\n  padding: 5px 0;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/api.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/getUrl.js":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
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
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/ieee754/index.js":
/*!**************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/ieee754/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/isarray/index.js":
/*!**************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/isarray/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/node-libs-browser/node_modules/buffer/index.js":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/node-libs-browser/node_modules/buffer/index.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


var base64 = __webpack_require__(/*! base64-js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/base64-js/index.js");

var ieee754 = __webpack_require__(/*! ieee754 */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/ieee754/index.js");

var isArray = __webpack_require__(/*! isarray */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/isarray/index.js");

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
/*
 * Export kMaxLength after typed array support is determined.
 */

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function () {
        return 42;
      }
    };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/path-browserify/index.js":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/path-browserify/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;

  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];

    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  } // if the path is allowed to go above the root, restore leading ..s


  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
} // path.resolve([from ...], to)
// posix version


exports.resolve = function () {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : process.cwd(); // Skip empty and invalid entries

    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  } // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)
  // Normalize the path


  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');
  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
}; // path.normalize(path)
// posix version


exports.normalize = function (path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/'; // Normalize the path

  path = normalizeArray(filter(path.split('/'), function (p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }

  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
}; // posix version


exports.isAbsolute = function (path) {
  return path.charAt(0) === '/';
}; // posix version


exports.join = function () {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function (p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }

    return p;
  }).join('/'));
}; // path.relative(from, to)
// posix version


exports.relative = function (from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;

    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;

    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;

  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];

  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47
  /*/*/
  ;
  var end = -1;
  var matchedSlash = true;

  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);

    if (code === 47
    /*/*/
    ) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';

  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }

  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';
  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47
    /*/*/
    ) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now
      if (!matchedSlash) {
        start = i + 1;
        break;
      }
    } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
} // Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here


exports.basename = function (path, ext) {
  var f = basename(path);

  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }

  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true; // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find

  var preDotState = 0;

  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);

    if (code === 47
    /*/*/
    ) {
      // If we reached a path separator that was not part of a set of path
      // separators at the end of the string, stop now
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }

      continue;
    }

    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }

    if (code === 46
    /*.*/
    ) {
      // If this is our first dot, mark it as the start of our extension
      if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }

  return path.slice(startDot, end);
};

function filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }

  return res;
} // String.prototype.substr - negative index don't work in IE8


var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
  return str.substr(start, len);
} : function (str, start, len) {
  if (start < 0) start = str.length + start;
  return str.substr(start, len);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/process/browser.js")))

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/process/browser.js":
/*!****************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/process/browser.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block01/index.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block01/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&lang=scss& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block01/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block02/index.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block02/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&lang=scss& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block02/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block03/index.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block03/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&lang=scss& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block03/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block04/index.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block04/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&lang=scss& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block04/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-footer/index.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-footer/index.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&lang=scss& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-footer/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-header/index.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-header/index.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&lang=scss& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-header/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=style&index=0&id=f9c57788&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=style&index=0&id=f9c57788&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_column_vue_vue_type_style_index_0_id_f9c57788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./wiz-column.vue?vue&type=style&index=0&id=f9c57788&scoped=true&lang=css& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=style&index=0&id=f9c57788&scoped=true&lang=css&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_column_vue_vue_type_style_index_0_id_f9c57788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_column_vue_vue_type_style_index_0_id_f9c57788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_column_vue_vue_type_style_index_0_id_f9c57788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_column_vue_vue_type_style_index_0_id_f9c57788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=style&index=0&id=30258dfd&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=style&index=0&id=30258dfd&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_placeholder_vue_vue_type_style_index_0_id_30258dfd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./wiz-placeholder.vue?vue&type=style&index=0&id=30258dfd&scoped=true&lang=css& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=style&index=0&id=30258dfd&scoped=true&lang=css&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_placeholder_vue_vue_type_style_index_0_id_30258dfd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_placeholder_vue_vue_type_style_index_0_id_30258dfd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_placeholder_vue_vue_type_style_index_0_id_30258dfd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_placeholder_vue_vue_type_style_index_0_id_30258dfd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/@blocks/module-placeholder/index.vue?vue&type=template&id=544a8176&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/@blocks/module-placeholder/index.vue?vue&type=template&id=544a8176& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "wiz-block",
    { staticClass: "module-placeholder" },
    [
      _c(
        "wiz-placeholder",
        [
          _c("wiz-column", {
            staticDataProps: { width: "100" },
            attrs: { width: 100 },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-block/index.vue?vue&type=template&id=153ffc34&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-block/index.vue?vue&type=template&id=153ffc34&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wiz-block", class: { empty: _vm.empty } },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-layout/index.vue?vue&type=template&id=74d93279&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-layout/index.vue?vue&type=template&id=74d93279&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "wiz-layout",
      class: [_vm.type, _vm.align],
      style: { width: _vm.width },
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block01/index.vue?vue&type=template&id=1c81c288&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block01/index.vue?vue&type=template&id=1c81c288& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "wiz-block",
    { staticClass: "default-site-block01" },
    [
      _c(
        "wiz-placeholder",
        { staticClass: "wrapper" },
        [
          _c(
            "wiz-column",
            { staticDataProps: { width: "100" }, attrs: { width: 100 } },
            [
              _c("wiz-text", {
                staticClass: "title m-p-0 m-p-b-20",
                staticDataProps: {
                  text: "$t('title', {\n          textColorToken: '#ffffff',\n          fontFamilyToken: 'OpenSans',\n        })",
                },
                attrs: {
                  text: _vm.$t("title", {
                    textColorToken: "#ffffff",
                    fontFamilyToken: "OpenSans",
                  }),
                },
              }),
              _vm._v(" "),
              _c("wiz-video", {
                staticClass: "video-block",
                staticDataProps: {
                  src: '"https://www.youtube.com/watch?v=SWhNcRKEFcM?vq=high"',
                },
                attrs: {
                  src: "https://www.youtube.com/watch?v=SWhNcRKEFcM?vq=high",
                },
              }),
              _vm._v(" "),
              _c("wiz-text", {
                staticClass: "description mt-t-20 m-p-0 m-p-b-20",
                staticDataProps: {
                  text: "$t('description', {\n          textColorToken: '#ffffff',\n          fontFamilyToken: 'OpenSans',\n        })",
                },
                attrs: {
                  text: _vm.$t("description", {
                    textColorToken: "#ffffff",
                    fontFamilyToken: "OpenSans",
                  }),
                },
              }),
              _vm._v(" "),
              _c("wiz-button", {
                staticClass: "button-free-demo",
                staticDataProps: {
                  width: "236",
                  height: "64",
                  text: "$t('buttonText', {\n          textColorToken: '#ffffff',\n          fontFamilyToken: 'OpenSans',\n        })",
                  link: '"https://www.viseven.com/"',
                },
                attrs: {
                  width: 236,
                  height: 64,
                  text: _vm.$t("buttonText", {
                    textColorToken: "#ffffff",
                    fontFamilyToken: "OpenSans",
                  }),
                  link: "https://www.viseven.com/",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block02/index.vue?vue&type=template&id=f2b85d06&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block02/index.vue?vue&type=template&id=f2b85d06& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "wiz-block",
    { staticClass: "default-site-block02" },
    [
      _c(
        "wiz-placeholder",
        { staticClass: "wrapper m-p-20", staticStyle: { padding: "60px 0 0" } },
        [
          _c(
            "wiz-column",
            { staticDataProps: { width: "100" }, attrs: { width: 100 } },
            [
              _c("wiz-text", {
                staticClass: "title",
                staticDataProps: {
                  text: "$t('title', {\n          textColorToken: '#212121',\n          fontFamilyToken: 'OpenSans',\n        })",
                },
                attrs: {
                  text: _vm.$t("title", {
                    textColorToken: "#212121",
                    fontFamilyToken: "OpenSans",
                  }),
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "wiz-placeholder",
        {
          staticClass: "wrapper m-direction-column m-p-t-0",
          staticStyle: { padding: "60px 0" },
        },
        [
          _c(
            "wiz-column",
            {
              staticClass:
                "card-column m-direction-column m-full-width m-m-0 mt-center m-m-b-20 m-p-20",
              staticDataProps: { width: "30" },
              attrs: { width: 30 },
            },
            [
              _c(
                "wiz-placeholder",
                {
                  staticClass: "m-direction-column title-wrapper",
                  staticStyle: { padding: "0 0 30px" },
                },
                [
                  _c(
                    "wiz-column",
                    {
                      staticClass: "m-p-b-10",
                      staticDataProps: { width: "30" },
                      attrs: { width: 30 },
                    },
                    [
                      _c("wiz-image", {
                        staticStyle: { padding: "0" },
                        staticDataProps: {
                          src: 'require("./media/images/icon-1.png")',
                          align: '"left"',
                          alt: '"Icon"',
                          width: "60",
                          height: "54",
                        },
                        attrs: {
                          src: __webpack_require__(/*! ./media/images/icon-1.png */ "./common/blocks-library/default-site-block02/media/images/icon-1.png"),
                          align: "left",
                          alt: "Icon",
                          width: 60,
                          height: 54,
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "wiz-column",
                    {
                      staticClass: "m-center",
                      staticDataProps: { width: "70" },
                      attrs: { width: 70 },
                    },
                    [
                      _c("wiz-text", {
                        staticClass: "m-p-0",
                        staticDataProps: {
                          text: "$t('card1title', {\n              textColorToken: '#ffffff',\n              fontFamilyToken: 'OpenSans',\n            })",
                        },
                        attrs: {
                          text: _vm.$t("card1title", {
                            textColorToken: "#ffffff",
                            fontFamilyToken: "OpenSans",
                          }),
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "wiz-placeholder",
                { staticClass: "description-wrapper m-p-0" },
                [
                  _c(
                    "wiz-column",
                    {
                      staticClass: "m-center",
                      staticDataProps: { width: "100" },
                      attrs: { width: 100 },
                    },
                    [
                      _c("wiz-text", {
                        staticDataProps: {
                          text: "$t('card1desc', {\n              textColorToken: '#ffffff',\n              fontFamilyToken: 'OpenSans',\n            })",
                        },
                        attrs: {
                          text: _vm.$t("card1desc", {
                            textColorToken: "#ffffff",
                            fontFamilyToken: "OpenSans",
                          }),
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "wiz-column",
            {
              staticClass:
                "card-column m-direction-column m-full-width mt-center m-m-0 m-m-b-20 m-p-20",
              staticDataProps: { width: "30" },
              attrs: { width: 30 },
            },
            [
              _c(
                "wiz-placeholder",
                {
                  staticClass: "title-wrapper m-direction-column",
                  staticStyle: { padding: "0 0 30px" },
                },
                [
                  _c(
                    "wiz-column",
                    {
                      staticClass: "m-p-b-10",
                      staticDataProps: { width: "30" },
                      attrs: { width: 30 },
                    },
                    [
                      _c("wiz-image", {
                        staticStyle: { padding: "0" },
                        staticDataProps: {
                          src: 'require("./media/images/icon-2.png")',
                          align: '"left"',
                          alt: '"Icon"',
                          width: "66",
                          height: "66",
                        },
                        attrs: {
                          src: __webpack_require__(/*! ./media/images/icon-2.png */ "./common/blocks-library/default-site-block02/media/images/icon-2.png"),
                          align: "left",
                          alt: "Icon",
                          width: 66,
                          height: 66,
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "wiz-column",
                    {
                      staticClass: "m-center",
                      staticDataProps: { width: "70" },
                      attrs: { width: 70 },
                    },
                    [
                      _c("wiz-text", {
                        staticClass: "m-p-0",
                        staticDataProps: {
                          text: "$t('card2title', {\n              textColorToken: '#ffffff',\n              fontFamilyToken: 'OpenSans',\n            })",
                        },
                        attrs: {
                          text: _vm.$t("card2title", {
                            textColorToken: "#ffffff",
                            fontFamilyToken: "OpenSans",
                          }),
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "wiz-placeholder",
                { staticClass: "description-wrapper m-p-0" },
                [
                  _c(
                    "wiz-column",
                    {
                      staticClass: "m-center",
                      staticDataProps: { width: "100" },
                      attrs: { width: 100 },
                    },
                    [
                      _c("wiz-text", {
                        staticDataProps: {
                          text: "$t('card2desc', {\n              textColorToken: '#ffffff',\n              fontFamilyToken: 'OpenSans',\n            })",
                        },
                        attrs: {
                          text: _vm.$t("card2desc", {
                            textColorToken: "#ffffff",
                            fontFamilyToken: "OpenSans",
                          }),
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "wiz-column",
            {
              staticClass:
                "card-column m-direction-column m-full-width mt-center m-m-0 m-m-b-20 m-p-20",
              staticDataProps: { width: "30" },
              attrs: { width: 30 },
            },
            [
              _c(
                "wiz-placeholder",
                {
                  staticClass: "title-wrapper m-direction-column",
                  staticStyle: { padding: "0 0 30px 0" },
                },
                [
                  _c(
                    "wiz-column",
                    {
                      staticClass: "m-p-b-10",
                      staticDataProps: { width: "30" },
                      attrs: { width: 30 },
                    },
                    [
                      _c("wiz-image", {
                        staticStyle: { padding: "0" },
                        staticDataProps: {
                          src: 'require("./media/images/icon-3.png")',
                          align: '"left"',
                          alt: '"Icon"',
                          width: "54",
                          height: "54",
                        },
                        attrs: {
                          src: __webpack_require__(/*! ./media/images/icon-3.png */ "./common/blocks-library/default-site-block02/media/images/icon-3.png"),
                          align: "left",
                          alt: "Icon",
                          width: 54,
                          height: 54,
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "wiz-column",
                    {
                      staticClass: "m-center",
                      staticDataProps: { width: "70" },
                      attrs: { width: 70 },
                    },
                    [
                      _c("wiz-text", {
                        staticClass: "m-p-0",
                        staticDataProps: {
                          text: "$t('card3title', {\n              textColorToken: '#ffffff',\n              fontFamilyToken: 'OpenSans',\n            })",
                        },
                        attrs: {
                          text: _vm.$t("card3title", {
                            textColorToken: "#ffffff",
                            fontFamilyToken: "OpenSans",
                          }),
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "wiz-placeholder",
                { staticClass: "description-wrapper m-p-0" },
                [
                  _c(
                    "wiz-column",
                    {
                      staticClass: "m-center",
                      staticDataProps: { width: "100" },
                      attrs: { width: 100 },
                    },
                    [
                      _c("wiz-text", {
                        staticDataProps: {
                          text: "$t('card3desc', {\n              textColorToken: '#ffffff',\n              fontFamilyToken: 'OpenSans',\n            })",
                        },
                        attrs: {
                          text: _vm.$t("card3desc", {
                            textColorToken: "#ffffff",
                            fontFamilyToken: "OpenSans",
                          }),
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block03/index.vue?vue&type=template&id=1b88843e&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block03/index.vue?vue&type=template&id=1b88843e& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "wiz-block",
    { staticClass: "default-site-block03" },
    [
      _c(
        "wiz-placeholder",
        { staticClass: "wrapper", staticStyle: { padding: "60px 0 0" } },
        [
          _c(
            "wiz-column",
            {
              staticClass: "align-content-center",
              staticDataProps: { width: "100" },
              attrs: { width: 100 },
            },
            [
              _c("wiz-text", {
                staticClass: "title m-full-width",
                staticStyle: { padding: "0px 10px" },
                staticDataProps: {
                  text: "$t('title', {\n          textColorToken: '#0277BD',\n          fontFamilyToken: 'OpenSans',\n        })",
                },
                attrs: {
                  text: _vm.$t("title", {
                    textColorToken: "#0277BD",
                    fontFamilyToken: "OpenSans",
                  }),
                },
              }),
              _vm._v(" "),
              _c("wiz-text", {
                staticClass: "m-full-width m-p-tb-20",
                staticStyle: { padding: "40px 10px 29px" },
                staticDataProps: {
                  text: "$t('subtitle', {\n          textColorToken: '#212121',\n          fontFamilyToken: 'OpenSans',\n        })",
                },
                attrs: {
                  text: _vm.$t("subtitle", {
                    textColorToken: "#212121",
                    fontFamilyToken: "OpenSans",
                  }),
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "wiz-placeholder",
        {
          staticClass: "wrapper",
          staticStyle: { padding: "31px 0 59px" },
          staticDataProps: { align: '"center"' },
          attrs: { align: "center" },
        },
        [
          _c(
            "wiz-column",
            {
              staticClass: "align-content-center",
              staticDataProps: { width: "100" },
              attrs: { width: 100 },
            },
            [
              _c("wiz-utility-button", {
                staticClass: "download-btn",
                staticStyle: { padding: "0 0 0 28px" },
                style: {
                  borderRadius: "64px",
                  backgroundColor: "#039BE5",
                  width: "232px",
                },
                staticDataProps: {
                  text: "$t('buttonText1', {\n          textColorToken: '#ffffff',\n          fontFamilyToken: 'OpenSans',\n        })",
                  align: '"center"',
                  width: '"auto"',
                  "button-type": '"download"',
                  "icon-src": 'require("./media/images/image1.svg")',
                  link: '"https://apps.apple.com/us/app/ewizard-pulse/id1502819286"',
                },
                attrs: {
                  text: _vm.$t("buttonText1", {
                    textColorToken: "#ffffff",
                    fontFamilyToken: "OpenSans",
                  }),
                  align: "center",
                  width: "auto",
                  "button-type": "download",
                  "icon-src": __webpack_require__(/*! ./media/images/image1.svg */ "./common/blocks-library/default-site-block03/media/images/image1.svg"),
                  link: "https://apps.apple.com/us/app/ewizard-pulse/id1502819286",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block04/index.vue?vue&type=template&id=9f259202&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block04/index.vue?vue&type=template&id=9f259202& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "wiz-block",
    { staticClass: "default-site-block04" },
    [
      _c(
        "wiz-placeholder",
        { staticClass: "wrapper", staticStyle: { padding: "60px 0 0" } },
        [
          _c(
            "wiz-column",
            {
              staticClass: "align-content-center",
              staticDataProps: { width: "100" },
              attrs: { width: 100 },
            },
            [
              _c("wiz-text", {
                staticClass: "title m-full-width",
                staticDataProps: {
                  text: "$t('title', {\n          textColorToken: '#212121',\n          fontFamilyToken: 'OpenSans',\n        })",
                },
                attrs: {
                  text: _vm.$t("title", {
                    textColorToken: "#212121",
                    fontFamilyToken: "OpenSans",
                  }),
                },
              }),
              _vm._v(" "),
              _c("wiz-text", {
                staticClass: "m-full-width m-p-tb-20",
                staticStyle: { padding: "40px 0 35px" },
                staticDataProps: {
                  text: "$t('subtitle', {\n          textColorToken: '#212121',\n          fontFamilyToken: 'OpenSans',\n        })",
                },
                attrs: {
                  text: _vm.$t("subtitle", {
                    textColorToken: "#212121",
                    fontFamilyToken: "OpenSans",
                  }),
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "wiz-placeholder",
        { staticClass: "wrapper", staticStyle: { padding: "27px 0 60px" } },
        [
          _c(
            "wiz-column",
            {
              staticClass: "align-content-center",
              staticDataProps: { width: "100" },
              attrs: { width: 100 },
            },
            [
              _c("wiz-button", {
                staticClass: "default-button",
                staticStyle: { padding: "64px 0 0", "border-radius": "64px" },
                style: {
                  borderRadius: "64px",
                  backgroundColor: "#0277BD",
                },
                staticDataProps: {
                  width: "169",
                  text: "$t('buttonText', {\n          textColorToken: '#ffffff',\n          fontFamilyToken: 'OpenSans',\n        })",
                  "component-name": '"Subscribe Button"',
                  link: '"https://viseven.com.ua/products/ewizard"',
                },
                attrs: {
                  width: 169,
                  text: _vm.$t("buttonText", {
                    textColorToken: "#ffffff",
                    fontFamilyToken: "OpenSans",
                  }),
                  "component-name": "Subscribe Button",
                  link: "https://viseven.com.ua/products/ewizard",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-footer/index.vue?vue&type=template&id=3e976ac3&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-footer/index.vue?vue&type=template&id=3e976ac3& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "wiz-block",
    { staticClass: "default-site-footer m-center" },
    [
      _c(
        "wiz-placeholder",
        { staticStyle: { padding: "60px 0 0", "min-height": "auto" } },
        [
          _c(
            "wiz-column",
            {
              staticStyle: { width: "35%" },
              staticDataProps: { "content-align": '"left"' },
              attrs: { "content-align": "left" },
            },
            [
              _c("wiz-image", {
                staticClass: "white-logo",
                staticStyle: { padding: "0", width: "146px" },
                staticDataProps: {
                  src: 'require("./media/images/logo.svg")',
                  align: '"left"',
                  alt: '"Viseven"',
                  width: "146",
                  height: "60",
                },
                attrs: {
                  src: __webpack_require__(/*! ./media/images/logo.svg */ "./common/blocks-library/default-site-footer/media/images/logo.svg"),
                  align: "left",
                  alt: "Viseven",
                  width: 146,
                  height: 60,
                },
              }),
              _vm._v(" "),
              _c("wiz-social-follow-icons", {
                staticClass: "social-follow-icons",
                staticStyle: {
                  padding: "58px 0 0",
                  "background-color": "transparent",
                },
                staticDataProps: {
                  "align-icons": '"left"',
                  "icon-border-color": '"transparent"',
                  "item-border-width": "0",
                  "item-width": "48",
                  items:
                    "[\n    {\n        link: 'https://www.linkedin.com/company/viseven',\n        enableLinkTracking: false,\n        alt: 'LinkedIn',\n        icon: require('./media/images/linkedin.png'),\n        __label: 'LinkedIn'\n    },\n    {\n        link: 'https://twitter.com/viseven_CLM',\n        enableLinkTracking: false,\n        alt: 'Twitter',\n        icon: require('./media/images/twitter.png'),\n        __label: 'Twitter'\n    },\n    {\n        link: 'https://www.youtube.com/channel/UCWlpXCeBtfM8GVFf6hOR1Yg?view_as=subscriber',\n        enableLinkTracking: false,\n        alt: 'YouTube',\n        icon: require('./media/images/youtube.png'),\n        __label: 'YouTube'\n    },\n    {\n        link: 'https://www.facebook.com/VisevenDigitalContentFactory/',\n        enableLinkTracking: false,\n        alt: 'Facebook',\n        icon: require('./media/images/facebook.png'),\n        __label: 'Facebook'\n    }\n]",
                },
                attrs: {
                  "align-icons": "left",
                  "icon-border-color": "transparent",
                  "item-border-width": 0,
                  "item-width": 48,
                  items: [
                    {
                      link: "https://www.linkedin.com/company/viseven",
                      enableLinkTracking: false,
                      alt: "LinkedIn",
                      icon: __webpack_require__(/*! ./media/images/linkedin.png */ "./common/blocks-library/default-site-footer/media/images/linkedin.png"),
                      __label: "LinkedIn",
                    },
                    {
                      link: "https://twitter.com/viseven_CLM",
                      enableLinkTracking: false,
                      alt: "Twitter",
                      icon: __webpack_require__(/*! ./media/images/twitter.png */ "./common/blocks-library/default-site-footer/media/images/twitter.png"),
                      __label: "Twitter",
                    },
                    {
                      link: "https://www.youtube.com/channel/UCWlpXCeBtfM8GVFf6hOR1Yg?view_as=subscriber",
                      enableLinkTracking: false,
                      alt: "YouTube",
                      icon: __webpack_require__(/*! ./media/images/youtube.png */ "./common/blocks-library/default-site-footer/media/images/youtube.png"),
                      __label: "YouTube",
                    },
                    {
                      link: "https://www.facebook.com/VisevenDigitalContentFactory/",
                      enableLinkTracking: false,
                      alt: "Facebook",
                      icon: __webpack_require__(/*! ./media/images/facebook.png */ "./common/blocks-library/default-site-footer/media/images/facebook.png"),
                      __label: "Facebook",
                    },
                  ],
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "wiz-column",
            {
              staticStyle: { width: "61.6%" },
              staticDataProps: { "content-align": '"right"' },
              attrs: { "content-align": "right" },
            },
            [
              _c("wiz-text", {
                staticStyle: { padding: "0" },
                staticDataProps: {
                  text: "$t('address', {\n          textColorToken: '#ffffff',\n          textAlign: 'right',\n          lineHeightToken: '28px',\n          fontSizeToken: '14px',\n          fontFamilyToken: 'OpenSans, sans-serif',\n        })",
                },
                attrs: {
                  text: _vm.$t("address", {
                    textColorToken: "#ffffff",
                    textAlign: "right",
                    lineHeightToken: "28px",
                    fontSizeToken: "14px",
                    fontFamilyToken: "OpenSans, sans-serif",
                  }),
                },
              }),
              _vm._v(" "),
              _c("wiz-text", {
                staticStyle: { padding: "28px 0 0" },
                staticDataProps: {
                  text: "$t('link', {\n          textColorToken: '#ffffff',\n          textAlign: 'right',\n          lineHeightToken: '36px',\n          fontSizeToken: '24px',\n          fontFamilyToken: 'OpenSans, sans-serif',\n        })",
                },
                attrs: {
                  text: _vm.$t("link", {
                    textColorToken: "#ffffff",
                    textAlign: "right",
                    lineHeightToken: "36px",
                    fontSizeToken: "24px",
                    fontFamilyToken: "OpenSans, sans-serif",
                  }),
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "wiz-placeholder",
        { staticStyle: { padding: "25px 0 30px", "min-height": "auto" } },
        [
          _c(
            "wiz-column",
            {
              staticDataProps: { width: "100", "content-align": '"center"' },
              attrs: { width: 100, "content-align": "center" },
            },
            [
              _c("wiz-text", {
                staticStyle: { padding: "0" },
                staticDataProps: {
                  text: "$t('copy', {\n          textColorToken: '#ffffff',\n          textAlign: 'center',\n          lineHeightToken: '12px',\n          fontSizeToken: '10px',\n          fontFamilyToken: 'OpenSans, sans-serif',\n        })",
                },
                attrs: {
                  text: _vm.$t("copy", {
                    textColorToken: "#ffffff",
                    textAlign: "center",
                    lineHeightToken: "12px",
                    fontSizeToken: "10px",
                    fontFamilyToken: "OpenSans, sans-serif",
                  }),
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-header/index.vue?vue&type=template&id=3cd79135&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-header/index.vue?vue&type=template&id=3cd79135& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "wiz-block",
    { staticClass: "default-site-header" },
    [
      _c(
        "wiz-placeholder",
        { staticClass: "wrapper" },
        [
          _c(
            "wiz-column",
            {
              staticClass: "m-p-b-10",
              staticDataProps: { width: "25" },
              attrs: { width: 25 },
            },
            [
              _c("wiz-image", {
                staticStyle: { padding: "0 0 10px" },
                staticDataProps: {
                  src: 'require("./media/images/logo.svg")',
                  align: '"left"',
                  alt: '"Viseven"',
                  width: "146",
                  height: "60",
                },
                attrs: {
                  src: __webpack_require__(/*! ./media/images/logo.svg */ "./common/blocks-library/default-site-header/media/images/logo.svg"),
                  align: "left",
                  alt: "Viseven",
                  width: 146,
                  height: 60,
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "wiz-column",
            {
              staticClass: "m-center m-p-lr-0",
              staticStyle: { padding: "0 0 0px 30px" },
              staticDataProps: { width: "75" },
              attrs: { width: 75 },
            },
            [
              _c("wiz-text", {
                staticClass: "header-title",
                staticDataProps: {
                  text: "$t('title', {\n          textColorToken: '#0277BD',\n          fontFamilyToken: 'OpenSans',\n        })",
                },
                attrs: {
                  text: _vm.$t("title", {
                    textColorToken: "#0277BD",
                    fontFamilyToken: "OpenSans",
                  }),
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=template&id=f9c57788&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=template&id=f9c57788&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "wiz-layout",
    {
      staticClass: "wiz-column wiz-column-wrapper",
      class: { empty: _vm.empty },
      staticDataProps: { width: "cssWidth", type: '"vertical"' },
      attrs: { width: _vm.cssWidth, type: "vertical" },
    },
    [
      _vm._t("default", function () {
        return [
          _c("div", {
            ref: "fallbackContent",
            staticClass: "wiz-column__fallback-content",
            class: { view: _vm.isViewMode },
          }),
        ]
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=template&id=30258dfd&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=template&id=30258dfd&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "wiz-layout",
    {
      staticClass: "wiz-placeholder",
      class: { empty: _vm.empty },
      staticDataProps: { type: '"horizontal"', align: "align" },
      attrs: { type: "horizontal", align: _vm.align },
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/a.batalin/AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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
  if (moduleIdentifier) { // server build
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
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./common/blocks-library/default-site-block01/icon.png":
/*!*************************************************************!*\
  !*** ./common/blocks-library/default-site-block01/icon.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-block01/icon.png";

/***/ }),

/***/ "./common/blocks-library/default-site-block01/index.vue":
/*!**************************************************************!*\
  !*** ./common/blocks-library/default-site-block01/index.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1c81c288___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1c81c288& */ "./common/blocks-library/default-site-block01/index.vue?vue&type=template&id=1c81c288&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./common/blocks-library/default-site-block01/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./common/blocks-library/default-site-block01/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=custom&index=0&blockType=i18n */ "./common/blocks-library/default-site-block01/index.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1c81c288___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1c81c288___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "common/blocks-library/default-site-block01/index.vue"
;component.options.template = '<wiz-block class="default-site-block01"><wiz-placeholder class="wrapper"><wiz-column :width="100"><wiz-text class="title m-p-0 m-p-b-20" :text="$t(\'title\', {            textColorToken: \'#ffffff\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text><wiz-video class="video-block" src="https://www.youtube.com/watch?v=SWhNcRKEFcM?vq=high"></wiz-video><wiz-text class="description mt-t-20 m-p-0 m-p-b-20" :text="$t(\'description\', {            textColorToken: \'#ffffff\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text><wiz-button :width="236" :height="64" class="button-free-demo" :text="$t(\'buttonText\', {            textColorToken: \'#ffffff\',            fontFamilyToken: \'OpenSans\',          })" link="https://www.viseven.com/"></wiz-button></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-block01';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-block01/index.vue';
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./common/blocks-library/default-site-block01/index.vue?vue&type=custom&index=0&blockType=i18n":
/*!*****************************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block01/index.vue?vue&type=custom&index=0&blockType=i18n ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=custom&index=0&blockType=i18n */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib/index.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block01/index.vue?vue&type=custom&index=0&blockType=i18n");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./common/blocks-library/default-site-block01/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block01/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=script&lang=js& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block01/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./common/blocks-library/default-site-block01/index.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block01/index.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_cjs_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&lang=scss& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block01/index.vue?vue&type=style&index=0&lang=scss&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./common/blocks-library/default-site-block01/index.vue?vue&type=template&id=1c81c288&":
/*!*********************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block01/index.vue?vue&type=template&id=1c81c288& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_1c81c288___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=template&id=1c81c288& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block01/index.vue?vue&type=template&id=1c81c288&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_1c81c288___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_1c81c288___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./common/blocks-library/default-site-block02/icon.png":
/*!*************************************************************!*\
  !*** ./common/blocks-library/default-site-block02/icon.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-block02/icon.png";

/***/ }),

/***/ "./common/blocks-library/default-site-block02/index.vue":
/*!**************************************************************!*\
  !*** ./common/blocks-library/default-site-block02/index.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_f2b85d06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=f2b85d06& */ "./common/blocks-library/default-site-block02/index.vue?vue&type=template&id=f2b85d06&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./common/blocks-library/default-site-block02/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./common/blocks-library/default-site-block02/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=custom&index=0&blockType=i18n */ "./common/blocks-library/default-site-block02/index.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_f2b85d06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_f2b85d06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "common/blocks-library/default-site-block02/index.vue"
;component.options.template = '<wiz-block class="default-site-block02"><wiz-placeholder class="wrapper m-p-20" style="padding: 60px 0 0"><wiz-column :width="100"><wiz-text class="title" :text="$t(\'title\', {            textColorToken: \'#212121\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="wrapper m-direction-column m-p-t-0" style="padding: 60px 0"><wiz-column class="card-column m-direction-column m-full-width m-m-0 mt-center m-m-b-20 m-p-20" :width="30"><wiz-placeholder style="padding: 0 0 30px" class="m-direction-column title-wrapper"><wiz-column class="m-p-b-10" :width="30"><wiz-image src="./media/images/icon-1.png" align="left" alt="Icon" style="padding: 0" :width="60" :height="54"></wiz-image></wiz-column><wiz-column class="m-center" :width="70"><wiz-text class="m-p-0" :text="$t(\'card1title\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="description-wrapper m-p-0"><wiz-column class="m-center" :width="100"><wiz-text :text="$t(\'card1desc\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder></wiz-column><wiz-column class="card-column m-direction-column m-full-width mt-center m-m-0 m-m-b-20 m-p-20" :width="30"><wiz-placeholder style="padding: 0 0 30px" class="title-wrapper m-direction-column"><wiz-column class="m-p-b-10" :width="30"><wiz-image src="./media/images/icon-2.png" align="left" alt="Icon" style="padding: 0" :width="66" :height="66"></wiz-image></wiz-column><wiz-column class="m-center" :width="70"><wiz-text class="m-p-0" :text="$t(\'card2title\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="description-wrapper m-p-0"><wiz-column class="m-center" :width="100"><wiz-text :text="$t(\'card2desc\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder></wiz-column><wiz-column class="card-column m-direction-column m-full-width mt-center m-m-0 m-m-b-20 m-p-20" :width="30"><wiz-placeholder style="padding: 0 0 30px 0" class="title-wrapper m-direction-column"><wiz-column class="m-p-b-10" :width="30"><wiz-image src="./media/images/icon-3.png" align="left" alt="Icon" style="padding: 0" :width="54" :height="54"></wiz-image></wiz-column><wiz-column class="m-center" :width="70"><wiz-text class="m-p-0" :text="$t(\'card3title\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="description-wrapper m-p-0"><wiz-column class="m-center" :width="100"><wiz-text :text="$t(\'card3desc\', {                textColorToken: \'#ffffff\',                fontFamilyToken: \'OpenSans\',              })"></wiz-text></wiz-column></wiz-placeholder></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-block02';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-block02/index.vue';
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./common/blocks-library/default-site-block02/index.vue?vue&type=custom&index=0&blockType=i18n":
/*!*****************************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block02/index.vue?vue&type=custom&index=0&blockType=i18n ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=custom&index=0&blockType=i18n */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib/index.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block02/index.vue?vue&type=custom&index=0&blockType=i18n");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./common/blocks-library/default-site-block02/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block02/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=script&lang=js& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block02/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./common/blocks-library/default-site-block02/index.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block02/index.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_cjs_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&lang=scss& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block02/index.vue?vue&type=style&index=0&lang=scss&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./common/blocks-library/default-site-block02/index.vue?vue&type=template&id=f2b85d06&":
/*!*********************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block02/index.vue?vue&type=template&id=f2b85d06& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_f2b85d06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=template&id=f2b85d06& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block02/index.vue?vue&type=template&id=f2b85d06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_f2b85d06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_f2b85d06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./common/blocks-library/default-site-block02/media/images/icon-1.png":
/*!****************************************************************************!*\
  !*** ./common/blocks-library/default-site-block02/media/images/icon-1.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-block02/media/images/icon-1.png";

/***/ }),

/***/ "./common/blocks-library/default-site-block02/media/images/icon-2.png":
/*!****************************************************************************!*\
  !*** ./common/blocks-library/default-site-block02/media/images/icon-2.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-block02/media/images/icon-2.png";

/***/ }),

/***/ "./common/blocks-library/default-site-block02/media/images/icon-3.png":
/*!****************************************************************************!*\
  !*** ./common/blocks-library/default-site-block02/media/images/icon-3.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-block02/media/images/icon-3.png";

/***/ }),

/***/ "./common/blocks-library/default-site-block03/icon.png":
/*!*************************************************************!*\
  !*** ./common/blocks-library/default-site-block03/icon.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-block03/icon.png";

/***/ }),

/***/ "./common/blocks-library/default-site-block03/index.vue":
/*!**************************************************************!*\
  !*** ./common/blocks-library/default-site-block03/index.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1b88843e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1b88843e& */ "./common/blocks-library/default-site-block03/index.vue?vue&type=template&id=1b88843e&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./common/blocks-library/default-site-block03/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./common/blocks-library/default-site-block03/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=custom&index=0&blockType=i18n */ "./common/blocks-library/default-site-block03/index.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1b88843e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1b88843e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "common/blocks-library/default-site-block03/index.vue"
;component.options.template = '<wiz-block class="default-site-block03"><wiz-placeholder class="wrapper" style="padding: 60px 0 0"><wiz-column class="align-content-center" :width="100"><wiz-text class="title m-full-width" style="padding: 0px 10px" :text="$t(\'title\', {            textColorToken: \'#0277BD\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text><wiz-text class="m-full-width m-p-tb-20" style="padding: 40px 10px 29px" :text="$t(\'subtitle\', {            textColorToken: \'#212121\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="wrapper" style="padding: 31px 0 59px" align="center"><wiz-column class="align-content-center" :width="100"><wiz-utility-button class="download-btn" style="padding: 0 0 0 28px" :style="{            borderRadius: \'64px\',            backgroundColor: \'#039BE5\',            width: \'232px\',          }" :text="$t(\'buttonText1\', {            textColorToken: \'#ffffff\',            fontFamilyToken: \'OpenSans\',          })" align="center" width="auto" button-type="download" icon-src="./media/images/image1.svg" link="https://apps.apple.com/us/app/ewizard-pulse/id1502819286"></wiz-utility-button></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-block03';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-block03/index.vue';
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./common/blocks-library/default-site-block03/index.vue?vue&type=custom&index=0&blockType=i18n":
/*!*****************************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block03/index.vue?vue&type=custom&index=0&blockType=i18n ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=custom&index=0&blockType=i18n */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib/index.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block03/index.vue?vue&type=custom&index=0&blockType=i18n");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./common/blocks-library/default-site-block03/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block03/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=script&lang=js& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block03/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./common/blocks-library/default-site-block03/index.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block03/index.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_cjs_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&lang=scss& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block03/index.vue?vue&type=style&index=0&lang=scss&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./common/blocks-library/default-site-block03/index.vue?vue&type=template&id=1b88843e&":
/*!*********************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block03/index.vue?vue&type=template&id=1b88843e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_1b88843e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=template&id=1b88843e& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block03/index.vue?vue&type=template&id=1b88843e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_1b88843e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_1b88843e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./common/blocks-library/default-site-block03/media/images/image1.svg":
/*!****************************************************************************!*\
  !*** ./common/blocks-library/default-site-block03/media/images/image1.svg ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-block03/media/images/image1.svg";

/***/ }),

/***/ "./common/blocks-library/default-site-block04/icon.png":
/*!*************************************************************!*\
  !*** ./common/blocks-library/default-site-block04/icon.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-block04/icon.png";

/***/ }),

/***/ "./common/blocks-library/default-site-block04/index.vue":
/*!**************************************************************!*\
  !*** ./common/blocks-library/default-site-block04/index.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_9f259202___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=9f259202& */ "./common/blocks-library/default-site-block04/index.vue?vue&type=template&id=9f259202&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./common/blocks-library/default-site-block04/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./common/blocks-library/default-site-block04/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=custom&index=0&blockType=i18n */ "./common/blocks-library/default-site-block04/index.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_9f259202___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_9f259202___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "common/blocks-library/default-site-block04/index.vue"
;component.options.template = '<wiz-block class="default-site-block04"><wiz-placeholder class="wrapper" style="padding: 60px 0 0"><wiz-column class="align-content-center" :width="100"><wiz-text class="title m-full-width" :text="$t(\'title\', {            textColorToken: \'#212121\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text><wiz-text class="m-full-width m-p-tb-20" style="padding: 40px 0 35px" :text="$t(\'subtitle\', {            textColorToken: \'#212121\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder class="wrapper" style="padding: 27px 0 60px"><wiz-column class="align-content-center" :width="100"><wiz-button class="default-button" style="padding: 64px 0 0; border-radius: 64px" :style="{            borderRadius: \'64px\',            backgroundColor: \'#0277BD\',          }" :width="169" :text="$t(\'buttonText\', {            textColorToken: \'#ffffff\',            fontFamilyToken: \'OpenSans\',          })" component-name="Subscribe Button" link="https://viseven.com.ua/products/ewizard"></wiz-button></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-block04';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-block04/index.vue';
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./common/blocks-library/default-site-block04/index.vue?vue&type=custom&index=0&blockType=i18n":
/*!*****************************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block04/index.vue?vue&type=custom&index=0&blockType=i18n ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=custom&index=0&blockType=i18n */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib/index.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block04/index.vue?vue&type=custom&index=0&blockType=i18n");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./common/blocks-library/default-site-block04/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block04/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=script&lang=js& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block04/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./common/blocks-library/default-site-block04/index.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block04/index.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_cjs_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&lang=scss& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block04/index.vue?vue&type=style&index=0&lang=scss&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./common/blocks-library/default-site-block04/index.vue?vue&type=template&id=9f259202&":
/*!*********************************************************************************************!*\
  !*** ./common/blocks-library/default-site-block04/index.vue?vue&type=template&id=9f259202& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_9f259202___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=template&id=9f259202& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-block04/index.vue?vue&type=template&id=9f259202&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_9f259202___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_9f259202___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./common/blocks-library/default-site-footer/icon.png":
/*!************************************************************!*\
  !*** ./common/blocks-library/default-site-footer/icon.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-footer/icon.png";

/***/ }),

/***/ "./common/blocks-library/default-site-footer/index.vue":
/*!*************************************************************!*\
  !*** ./common/blocks-library/default-site-footer/index.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3e976ac3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3e976ac3& */ "./common/blocks-library/default-site-footer/index.vue?vue&type=template&id=3e976ac3&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./common/blocks-library/default-site-footer/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./common/blocks-library/default-site-footer/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=custom&index=0&blockType=i18n */ "./common/blocks-library/default-site-footer/index.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3e976ac3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3e976ac3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "common/blocks-library/default-site-footer/index.vue"
;component.options.template = '<wiz-block class="default-site-footer m-center"><wiz-placeholder style="padding: 60px 0 0; min-height: auto"><wiz-column content-align="left" style="width: 35%"><wiz-image class="white-logo" src="./media/images/logo.svg" align="left" alt="Viseven" :width="146" :height="60" style="padding: 0; width: 146px"></wiz-image><wiz-social-follow-icons class="social-follow-icons" align-icons="left" style="padding: 58px 0 0; background-color: transparent" icon-border-color="transparent" :item-border-width="0" :item-width="48" :items="[    {        link: \'https://www.linkedin.com/company/viseven\',        enableLinkTracking: false,        alt: \'LinkedIn\',        icon: \'{publicPath}common/blocks-library/default-site-footer/media/images/linkedin.png\',        __label: \'LinkedIn\'    },    {        link: \'https://twitter.com/viseven_CLM\',        enableLinkTracking: false,        alt: \'Twitter\',        icon: \'{publicPath}common/blocks-library/default-site-footer/media/images/twitter.png\',        __label: \'Twitter\'    },    {        link: \'https://www.youtube.com/channel/UCWlpXCeBtfM8GVFf6hOR1Yg?view_as=subscriber\',        enableLinkTracking: false,        alt: \'YouTube\',        icon: \'{publicPath}common/blocks-library/default-site-footer/media/images/youtube.png\',        __label: \'YouTube\'    },    {        link: \'https://www.facebook.com/VisevenDigitalContentFactory/\',        enableLinkTracking: false,        alt: \'Facebook\',        icon: \'{publicPath}common/blocks-library/default-site-footer/media/images/facebook.png\',        __label: \'Facebook\'    }]"></wiz-social-follow-icons></wiz-column><wiz-column content-align="right" style="width: 61.6%"><wiz-text :text="$t(\'address\', {            textColorToken: \'#ffffff\',            textAlign: \'right\',            lineHeightToken: \'28px\',            fontSizeToken: \'14px\',            fontFamilyToken: \'OpenSans, sans-serif\',          })" style="padding: 0"></wiz-text><wiz-text :text="$t(\'link\', {            textColorToken: \'#ffffff\',            textAlign: \'right\',            lineHeightToken: \'36px\',            fontSizeToken: \'24px\',            fontFamilyToken: \'OpenSans, sans-serif\',          })" style="padding: 28px 0 0"></wiz-text></wiz-column></wiz-placeholder><wiz-placeholder style="padding: 25px 0 30px; min-height: auto"><wiz-column :width="100" content-align="center"><wiz-text :text="$t(\'copy\', {            textColorToken: \'#ffffff\',            textAlign: \'center\',            lineHeightToken: \'12px\',            fontSizeToken: \'10px\',            fontFamilyToken: \'OpenSans, sans-serif\',          })" style="padding: 0"></wiz-text></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-footer';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-footer/index.vue';
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./common/blocks-library/default-site-footer/index.vue?vue&type=custom&index=0&blockType=i18n":
/*!****************************************************************************************************!*\
  !*** ./common/blocks-library/default-site-footer/index.vue?vue&type=custom&index=0&blockType=i18n ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=custom&index=0&blockType=i18n */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib/index.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-footer/index.vue?vue&type=custom&index=0&blockType=i18n");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./common/blocks-library/default-site-footer/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./common/blocks-library/default-site-footer/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=script&lang=js& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-footer/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./common/blocks-library/default-site-footer/index.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./common/blocks-library/default-site-footer/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_cjs_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&lang=scss& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-footer/index.vue?vue&type=style&index=0&lang=scss&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./common/blocks-library/default-site-footer/index.vue?vue&type=template&id=3e976ac3&":
/*!********************************************************************************************!*\
  !*** ./common/blocks-library/default-site-footer/index.vue?vue&type=template&id=3e976ac3& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_3e976ac3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=template&id=3e976ac3& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-footer/index.vue?vue&type=template&id=3e976ac3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_3e976ac3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_3e976ac3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./common/blocks-library/default-site-footer/media/images/facebook.png":
/*!*****************************************************************************!*\
  !*** ./common/blocks-library/default-site-footer/media/images/facebook.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-footer/media/images/facebook.png";

/***/ }),

/***/ "./common/blocks-library/default-site-footer/media/images/linkedin.png":
/*!*****************************************************************************!*\
  !*** ./common/blocks-library/default-site-footer/media/images/linkedin.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-footer/media/images/linkedin.png";

/***/ }),

/***/ "./common/blocks-library/default-site-footer/media/images/logo.svg":
/*!*************************************************************************!*\
  !*** ./common/blocks-library/default-site-footer/media/images/logo.svg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-footer/media/images/logo.svg";

/***/ }),

/***/ "./common/blocks-library/default-site-footer/media/images/twitter.png":
/*!****************************************************************************!*\
  !*** ./common/blocks-library/default-site-footer/media/images/twitter.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-footer/media/images/twitter.png";

/***/ }),

/***/ "./common/blocks-library/default-site-footer/media/images/youtube.png":
/*!****************************************************************************!*\
  !*** ./common/blocks-library/default-site-footer/media/images/youtube.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-footer/media/images/youtube.png";

/***/ }),

/***/ "./common/blocks-library/default-site-header/icon.png":
/*!************************************************************!*\
  !*** ./common/blocks-library/default-site-header/icon.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-header/icon.png";

/***/ }),

/***/ "./common/blocks-library/default-site-header/index.vue":
/*!*************************************************************!*\
  !*** ./common/blocks-library/default-site-header/index.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3cd79135___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3cd79135& */ "./common/blocks-library/default-site-header/index.vue?vue&type=template&id=3cd79135&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./common/blocks-library/default-site-header/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./common/blocks-library/default-site-header/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=custom&index=0&blockType=i18n */ "./common/blocks-library/default-site-header/index.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3cd79135___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3cd79135___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "common/blocks-library/default-site-header/index.vue"
;component.options.template = '<wiz-block class="default-site-header"><wiz-placeholder class="wrapper"><wiz-column class="m-p-b-10" :width="25"><wiz-image src="./media/images/logo.svg" align="left" alt="Viseven" style="padding: 0 0 10px" :width="146" :height="60"></wiz-image></wiz-column><wiz-column class="m-center m-p-lr-0" style="padding: 0 0 0px 30px" :width="75"><wiz-text class="header-title" :text="$t(\'title\', {            textColorToken: \'#0277BD\',            fontFamilyToken: \'OpenSans\',          })"></wiz-text></wiz-column></wiz-placeholder></wiz-block>';
    component.options.slideId = 'default-site-header';
    component.options.__componentType = 'block';
    component.options.resourcePath = 'common/blocks-library/default-site-header/index.vue';
    /* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./common/blocks-library/default-site-header/index.vue?vue&type=custom&index=0&blockType=i18n":
/*!****************************************************************************************************!*\
  !*** ./common/blocks-library/default-site-header/index.vue?vue&type=custom&index=0&blockType=i18n ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=custom&index=0&blockType=i18n */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib/index.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-header/index.vue?vue&type=custom&index=0&blockType=i18n");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./common/blocks-library/default-site-header/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./common/blocks-library/default-site-header/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=script&lang=js& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-header/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./common/blocks-library/default-site-header/index.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./common/blocks-library/default-site-header/index.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_cjs_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_20_oneOf_1_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_20_oneOf_1_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_sass_loader_dist_cjs_js_ref_20_oneOf_1_3_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_epegzz_sass_vars_loader_src_sassVarsLoader_js_ref_20_oneOf_1_4_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--20-oneOf-1-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--20-oneOf-1-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js??ref--20-oneOf-1-3!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js??ref--20-oneOf-1-4!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&lang=scss& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/sass-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@epegzz/sass-vars-loader/src/sassVarsLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-header/index.vue?vue&type=style&index=0&lang=scss&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./common/blocks-library/default-site-header/index.vue?vue&type=template&id=3cd79135&":
/*!********************************************************************************************!*\
  !*** ./common/blocks-library/default-site-header/index.vue?vue&type=template&id=3cd79135& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_3cd79135___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js??ref--5-0!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=template&id=3cd79135& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/template-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./common/blocks-library/default-site-header/index.vue?vue&type=template&id=3cd79135&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_3cd79135___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_template_loader_js_ref_5_0_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_3cd79135___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./common/blocks-library/default-site-header/media/images/logo.svg":
/*!*************************************************************************!*\
  !*** ./common/blocks-library/default-site-header/media/images/logo.svg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "common/blocks-library/default-site-header/media/images/logo.svg";

/***/ }),

/***/ "./common/blocks-library/modules.json":
/*!********************************************!*\
  !*** ./common/blocks-library/modules.json ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"components": []
}


/***/ }),

/***/ "./node_modules/@blocks/module-placeholder/assets/ic-module.png":
/*!**********************************************************************!*\
  !*** ./node_modules/@blocks/module-placeholder/assets/ic-module.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "node_modules/@blocks/module-placeholder/assets/ic-module.png";

/***/ }),

/***/ "./node_modules/@blocks/module-placeholder/empty-icon.png":
/*!****************************************************************!*\
  !*** ./node_modules/@blocks/module-placeholder/empty-icon.png ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "node_modules/@blocks/module-placeholder/empty-icon.png";

/***/ }),

/***/ "./node_modules/@blocks/module-placeholder/icon.png":
/*!**********************************************************!*\
  !*** ./node_modules/@blocks/module-placeholder/icon.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "node_modules/@blocks/module-placeholder/icon.png";

/***/ }),

/***/ "./node_modules/@blocks/module-placeholder/index.vue":
/*!***********************************************************!*\
  !*** ./node_modules/@blocks/module-placeholder/index.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_544a8176___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=544a8176& */ "./node_modules/@blocks/module-placeholder/index.vue?vue&type=template&id=544a8176&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./node_modules/@blocks/module-placeholder/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/@blocks/module-placeholder/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.vue?vue&type=custom&index=0&blockType=i18n */ "./node_modules/@blocks/module-placeholder/index.vue?vue&type=custom&index=0&blockType=i18n");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_544a8176___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_544a8176___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@blocks/module-placeholder/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@blocks/module-placeholder/index.vue?vue&type=custom&index=0&blockType=i18n":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@blocks/module-placeholder/index.vue?vue&type=custom&index=0&blockType=i18n ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=custom&index=0&blockType=i18n */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/resolve-bound-media.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@intlify/vue-i18n-loader/lib/index.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/@blocks/module-placeholder/index.vue?vue&type=custom&index=0&blockType=i18n");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_resolve_bound_media_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_intlify_vue_i18n_loader_lib_index_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_custom_index_0_blockType_i18n__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@blocks/module-placeholder/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./node_modules/@blocks/module-placeholder/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=script&lang=js& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/@blocks/module-placeholder/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@blocks/module-placeholder/index.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./node_modules/@blocks/module-placeholder/index.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_cjs_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&lang=css& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/@blocks/module-placeholder/index.vue?vue&type=style&index=0&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@blocks/module-placeholder/index.vue?vue&type=template&id=544a8176&":
/*!******************************************************************************************!*\
  !*** ./node_modules/@blocks/module-placeholder/index.vue?vue&type=template&id=544a8176& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_544a8176___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=template&id=544a8176& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/@blocks/module-placeholder/index.vue?vue&type=template&id=544a8176&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_544a8176___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_544a8176___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@site/wiz-button/icon.png":
/*!************************************************!*\
  !*** ./node_modules/@site/wiz-button/icon.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "node_modules/@site/wiz-button/icon.png";

/***/ }),

/***/ "./node_modules/@site/wiz-image/icon.png":
/*!***********************************************!*\
  !*** ./node_modules/@site/wiz-image/icon.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "node_modules/@site/wiz-image/icon.png";

/***/ }),

/***/ "./node_modules/@site/wiz-references/icon.png":
/*!****************************************************!*\
  !*** ./node_modules/@site/wiz-references/icon.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "node_modules/@site/wiz-references/icon.png";

/***/ }),

/***/ "./node_modules/@site/wiz-text/icon.png":
/*!**********************************************!*\
  !*** ./node_modules/@site/wiz-text/icon.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "node_modules/@site/wiz-text/icon.png";

/***/ }),

/***/ "./node_modules/@site/wiz-video/icon.png":
/*!***********************************************!*\
  !*** ./node_modules/@site/wiz-video/icon.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "node_modules/@site/wiz-video/icon.png";

/***/ }),

/***/ "./node_modules/component-types/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/component-types/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var PropType;

(function (PropType) {
  PropType["Array"] = "array";
  PropType["Boolean"] = "boolean";
  PropType["Color"] = "color";
  PropType["Enum"] = "enum";
  PropType["File"] = "file";
  PropType["Number"] = "number";
  PropType["Object"] = "object";
  PropType["String"] = "string";
  PropType["Text"] = "text";
  PropType["Url"] = "url";
  PropType["LinkedText"] = "linked-text";
  PropType["VaultRemoteObjectList"] = "vault-remote-object-list";
  PropType["Date"] = "date";
  PropType["Time"] = "time";
  PropType["IcsCalendar"] = "ics-calendar";
  PropType["TableView"] = "table-view";
  PropType["Slide"] = "slide";
  PropType["Slides"] = "slides";
  PropType["Chapter"] = "chapter";
  PropType["Chapters"] = "chapters";
  PropType["FixedText"] = "fixed-text";
})(PropType = exports.PropType || (exports.PropType = {}));

;
var FileType;

(function (FileType) {
  FileType["Audio"] = "audio";
  FileType["Image"] = "image";
  FileType["Video"] = "video";
  FileType["Module"] = "module";
  FileType["Document"] = "document";
})(FileType = exports.FileType || (exports.FileType = {}));

;
var VaultRemoteObjectList;

(function (VaultRemoteObjectList) {
  VaultRemoteObjectList["KeyMessage"] = "keymessage";
})(VaultRemoteObjectList = exports.VaultRemoteObjectList || (exports.VaultRemoteObjectList = {}));

;

/***/ }),

/***/ "./node_modules/wiz-block/ewizard.config.js":
/*!**************************************************!*\
  !*** ./node_modules/wiz-block/ewizard.config.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _componentTypes = __webpack_require__(/*! component-types */ "./node_modules/component-types/dist/index.js");

var _default = {
  props: {
    moduleSource: {
      actualType: _componentTypes.PropType.File,
      subtype: _componentTypes.FileType.Module
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/wiz-block/index.vue":
/*!******************************************!*\
  !*** ./node_modules/wiz-block/index.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_153ffc34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=153ffc34&scoped=true& */ "./node_modules/wiz-block/index.vue?vue&type=template&id=153ffc34&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./node_modules/wiz-block/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_153ffc34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=153ffc34&scoped=true&lang=css& */ "./node_modules/wiz-block/index.vue?vue&type=style&index=0&id=153ffc34&scoped=true&lang=css&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_153ffc34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_153ffc34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "153ffc34",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/wiz-block/index.vue"

      ;component.options.ewizardConfig = __webpack_require__(/*! ./ewizard.config.js */ "./node_modules/wiz-block/ewizard.config.js").default;
      /* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/wiz-block/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./node_modules/wiz-block/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=script&lang=js& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-block/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/wiz-block/index.vue?vue&type=style&index=0&id=153ffc34&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./node_modules/wiz-block/index.vue?vue&type=style&index=0&id=153ffc34&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_cjs_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_id_153ffc34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&id=153ffc34&scoped=true&lang=css& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-block/index.vue?vue&type=style&index=0&id=153ffc34&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/wiz-block/index.vue?vue&type=template&id=153ffc34&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./node_modules/wiz-block/index.vue?vue&type=template&id=153ffc34&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_153ffc34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=template&id=153ffc34&scoped=true& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-block/index.vue?vue&type=template&id=153ffc34&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_153ffc34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_153ffc34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/wiz-layout/ewizard.config.js":
/*!***************************************************!*\
  !*** ./node_modules/wiz-layout/ewizard.config.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    type: {
      sealed: true
    },
    align: {
      sealed: true
    },
    width: {
      sealed: true
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/wiz-layout/index.vue":
/*!*******************************************!*\
  !*** ./node_modules/wiz-layout/index.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_74d93279_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=74d93279&scoped=true& */ "./node_modules/wiz-layout/index.vue?vue&type=template&id=74d93279&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./node_modules/wiz-layout/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_74d93279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=74d93279&scoped=true&lang=css& */ "./node_modules/wiz-layout/index.vue?vue&type=style&index=0&id=74d93279&scoped=true&lang=css&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_74d93279_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_74d93279_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "74d93279",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/wiz-layout/index.vue"

      ;component.options.ewizardConfig = __webpack_require__(/*! ./ewizard.config.js */ "./node_modules/wiz-layout/ewizard.config.js").default;
      /* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/wiz-layout/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./node_modules/wiz-layout/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=script&lang=js& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-layout/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/wiz-layout/index.vue?vue&type=style&index=0&id=74d93279&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/wiz-layout/index.vue?vue&type=style&index=0&id=74d93279&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_cjs_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_style_index_0_id_74d93279_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=style&index=0&id=74d93279&scoped=true&lang=css& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-layout/index.vue?vue&type=style&index=0&id=74d93279&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/wiz-layout/index.vue?vue&type=template&id=74d93279&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./node_modules/wiz-layout/index.vue?vue&type=template&id=74d93279&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_74d93279_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./index.vue?vue&type=template&id=74d93279&scoped=true& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/content-type-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/dev-builder/dist/loaders/config-loader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-layout/index.vue?vue&type=template&id=74d93279&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_74d93279_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_content_type_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_dev_builder_dist_loaders_config_loader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_index_vue_vue_type_template_id_74d93279_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/wiz-placeholder/components/empty.png":
/*!***********************************************************!*\
  !*** ./node_modules/wiz-placeholder/components/empty.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "node_modules/wiz-placeholder/components/empty.png";

/***/ }),

/***/ "./node_modules/wiz-placeholder/components/wiz-column.vue":
/*!****************************************************************!*\
  !*** ./node_modules/wiz-placeholder/components/wiz-column.vue ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wiz_column_vue_vue_type_template_id_f9c57788_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wiz-column.vue?vue&type=template&id=f9c57788&scoped=true& */ "./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=template&id=f9c57788&scoped=true&");
/* harmony import */ var _wiz_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wiz-column.vue?vue&type=script&lang=js& */ "./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wiz_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wiz_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _wiz_column_vue_vue_type_style_index_0_id_f9c57788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wiz-column.vue?vue&type=style&index=0&id=f9c57788&scoped=true&lang=css& */ "./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=style&index=0&id=f9c57788&scoped=true&lang=css&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _wiz_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wiz_column_vue_vue_type_template_id_f9c57788_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wiz_column_vue_vue_type_template_id_f9c57788_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f9c57788",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/wiz-placeholder/components/wiz-column.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./wiz-column.vue?vue&type=script&lang=js& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=script&lang=js&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_column_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=style&index=0&id=f9c57788&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=style&index=0&id=f9c57788&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_cjs_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_column_vue_vue_type_style_index_0_id_f9c57788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./wiz-column.vue?vue&type=style&index=0&id=f9c57788&scoped=true&lang=css& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=style&index=0&id=f9c57788&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=template&id=f9c57788&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=template&id=f9c57788&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_column_vue_vue_type_template_id_f9c57788_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./wiz-column.vue?vue&type=template&id=f9c57788&scoped=true& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-column.vue?vue&type=template&id=f9c57788&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_column_vue_vue_type_template_id_f9c57788_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_column_vue_vue_type_template_id_f9c57788_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/wiz-placeholder/components/wiz-placeholder.vue":
/*!*********************************************************************!*\
  !*** ./node_modules/wiz-placeholder/components/wiz-placeholder.vue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wiz_placeholder_vue_vue_type_template_id_30258dfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wiz-placeholder.vue?vue&type=template&id=30258dfd&scoped=true& */ "./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=template&id=30258dfd&scoped=true&");
/* harmony import */ var _wiz_placeholder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wiz-placeholder.vue?vue&type=script&lang=js& */ "./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wiz_placeholder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wiz_placeholder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _wiz_placeholder_vue_vue_type_style_index_0_id_30258dfd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wiz-placeholder.vue?vue&type=style&index=0&id=30258dfd&scoped=true&lang=css& */ "./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=style&index=0&id=30258dfd&scoped=true&lang=css&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _wiz_placeholder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wiz_placeholder_vue_vue_type_template_id_30258dfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wiz_placeholder_vue_vue_type_template_id_30258dfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "30258dfd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/wiz-placeholder/components/wiz-placeholder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_placeholder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib??ref--22!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./wiz-placeholder.vue?vue&type=script&lang=js& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/babel-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=script&lang=js&");
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_placeholder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_placeholder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_placeholder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_placeholder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_babel_loader_lib_index_js_ref_22_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_placeholder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=style&index=0&id=30258dfd&scoped=true&lang=css&":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=style&index=0&id=30258dfd&scoped=true&lang=css& ***!
  \******************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_style_loader_dist_cjs_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_css_loader_dist_cjs_js_ref_21_1_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_postcss_loader_src_index_js_ref_21_2_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_placeholder_vue_vue_type_style_index_0_id_30258dfd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js??ref--21-1!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src??ref--21-2!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./wiz-placeholder.vue?vue&type=style&index=0&id=30258dfd&scoped=true&lang=css& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/style-loader/dist/cjs.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/css-loader/dist/cjs.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/postcss-loader/src/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=style&index=0&id=30258dfd&scoped=true&lang=css&");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=template&id=30258dfd&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=template&id=30258dfd&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_placeholder_vue_vue_type_template_id_30258dfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js??ref--9!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./wiz-placeholder.vue?vue&type=template&id=30258dfd&scoped=true& */ "../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/loaders/templateLoader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/image-loader.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/vue-loader/lib/index.js?!../../../../AppData/Roaming/nvm/v14.17.3/node_modules/ewizard-cli/node_modules/@ewizardjs/builder-utils/dist/loaders/theme-vars/theme-vars-loader.js!./node_modules/wiz-placeholder/components/wiz-placeholder.vue?vue&type=template&id=30258dfd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_placeholder_vue_vue_type_template_id_30258dfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_image_loader_js_ref_9_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_AppData_Roaming_nvm_v14_17_3_node_modules_ewizard_cli_node_modules_ewizardjs_builder_utils_dist_loaders_theme_vars_theme_vars_loader_js_wiz_placeholder_vue_vue_type_template_id_30258dfd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/wiz-placeholder/index.js":
/*!***********************************************!*\
  !*** ./node_modules/wiz-placeholder/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
Object.defineProperty(exports, "wizColumn", {
  enumerable: true,
  get: function () {
    return _wizColumn.default;
  }
});
Object.defineProperty(exports, "wizPlaceholder", {
  enumerable: true,
  get: function () {
    return _wizPlaceholder.default;
  }
});

var _wizPlaceholder = _interopRequireDefault(__webpack_require__(/*! ./components/wiz-placeholder.vue */ "./node_modules/wiz-placeholder/components/wiz-placeholder.vue"));

var _wizColumn = _interopRequireDefault(__webpack_require__(/*! ./components/wiz-column.vue */ "./node_modules/wiz-placeholder/components/wiz-column.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  install
};
exports.default = _default;

function install(Vue) {
  Vue.component('wiz-placeholder', _wizPlaceholder.default);
  Vue.component('wiz-column', _wizColumn.default);
}

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "name": "default-viseven-site",
  "templateId": "site-template",
  "version": "1.0.2",
  "description": "default site template",
  "main": "./build/dev/app.js",
  "scripts": {
    "clear": "npx del-cli package-lock.json node_modules/",
    "init": " npm run clear && wiz i",
    "archive": "wiz dev && wiz archive",
    "dev": "wiz dev --live --fix"
  },
  "repository": {
    "type": "git",
    "url": ""
  },
  "cobalt": {
    "type": "layout"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@blocks/module-placeholder": "git+https://git.qapint.com/ewizardjs/site/blocks/module-placeholder.git#1.0.10",
    "@email/wiz-social-follow-icons": "^3.0.0",
    "@email/wiz-utility-button": "^2.0.0",
    "@site/wiz-block": "^3.0.0",
    "@site/wiz-button": "^2.0.0",
    "@site/wiz-image": "^2.0.0",
    "@site/wiz-placeholder": "^2.0.0",
    "@site/wiz-references": "^2.0.2",
    "@site/wiz-text": "^2.0.0",
    "@site/wiz-video": "^1.0.1",
    "ewizardjs": "~5.23.0"
  }
}


/***/ })

/******/ });
});