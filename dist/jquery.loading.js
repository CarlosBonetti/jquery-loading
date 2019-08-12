(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/loading.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/loading.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/loading.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/* Default jquery-loading styles */\\r\\n\\r\\n.loading-overlay {\\r\\n  display: table;\\r\\n  opacity: 0.7;\\r\\n}\\r\\n\\r\\n.loading-overlay-content {\\r\\n  text-transform: uppercase;\\r\\n  letter-spacing: 0.4em;\\r\\n  font-size: 1.15em;\\r\\n  font-weight: bold;\\r\\n  text-align: center;\\r\\n  display: table-cell;\\r\\n  vertical-align: middle;\\r\\n}\\r\\n\\r\\n.loading-overlay.loading-theme-light {\\r\\n  background-color: #fff;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n.loading-overlay.loading-theme-dark {\\r\\n  background-color: #000;\\r\\n  color: #fff;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/loading.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/loading.css":
/*!*************************!*\
  !*** ./src/loading.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./loading.css */ \"./node_modules/css-loader/dist/cjs.js!./src/loading.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/loading.css?");

/***/ }),

/***/ "./src/loading.js":
/*!************************!*\
  !*** ./src/loading.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.css */ \"./src/loading.css\");\n/* harmony import */ var _loading_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loading_css__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst Loading = function(element, options) {\r\n  this.element = element;\r\n  this.settings = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Loading.defaults, options);\r\n  this.settings.fullPage = this.element.is(\"body\");\r\n\r\n  this.init();\r\n\r\n  if (this.settings.start) {\r\n    this.start();\r\n  }\r\n};\r\n\r\nLoading.defaults = {\r\n  /**\r\n   * jQuery element to be used as overlay\r\n   * If not defined, a default overlay will be created\r\n   */\r\n  overlay: undefined,\r\n\r\n  /**\r\n   * z-index to be used by the default overlay\r\n   * If not defined, a z-index will be calculated based on the\r\n   * target's z-index\r\n   * Has no effect if a custom overlay is defined\r\n   */\r\n  zIndex: undefined,\r\n\r\n  /**\r\n   * Message to be rendered on the overlay content\r\n   * Has no effect if a custom overlay is defined\r\n   */\r\n  message: \"Loading...\",\r\n\r\n  /**\r\n   * Theme to be applied on the loading element\r\n   *\r\n   * Some default themes are implemented on `jquery.loading.css`, but you can\r\n   *  define your own. Just add a `.loading-theme-my_awesome_theme` selector\r\n   *  somewhere with your custom styles and change this option\r\n   *  to 'my_awesome_theme'. The class is applied to the parent overlay div\r\n   *\r\n   * Has no effect if a custom overlay is defined\r\n   */\r\n  theme: \"light\",\r\n\r\n  /**\r\n   * Class(es) to be applied to the overlay element when the loading state is started\r\n   */\r\n  shownClass: \"loading-shown\",\r\n\r\n  /**\r\n   * Class(es) to be applied to the overlay element when the loading state is stopped\r\n   */\r\n  hiddenClass: \"loading-hidden\",\r\n\r\n  /**\r\n   * Set to true to stop the loading state if the overlay is clicked\r\n   * This options does NOT override the onClick event\r\n   */\r\n  stoppable: false,\r\n\r\n  /**\r\n   * Set to false to not start the loading state when initialized\r\n   */\r\n  start: true,\r\n\r\n  /**\r\n   * Function to be executed when the loading state is started\r\n   * Receives the loading object as parameter\r\n   *\r\n   * The function is attached to the `loading.start` event\r\n   */\r\n  onStart: function(loading) {\r\n    loading.overlay.fadeIn(150);\r\n  },\r\n\r\n  /**\r\n   * Function to be executed when the loading state is stopped\r\n   * Receives the loading object as parameter\r\n   *\r\n   * The function is attached to the `loading.stop` event\r\n   */\r\n  onStop: function(loading) {\r\n    loading.overlay.fadeOut(150);\r\n  },\r\n\r\n  /**\r\n   * Function to be executed when the overlay is clicked\r\n   * Receives the loading object as parameter\r\n   *\r\n   * The function is attached to the `loading.click` event\r\n   */\r\n  onClick: function() {}\r\n};\r\n\r\n/**\r\n * Extend the Loading plugin default settings with the user options\r\n * Use it as `$.Loading.setDefaults({ ... })`\r\n *\r\n * @param {Object} options Custom options to override the plugin defaults\r\n */\r\nLoading.setDefaults = function(options) {\r\n  Loading.defaults = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, Loading.defaults, options);\r\n};\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(Loading.prototype, {\r\n  /**\r\n   * Initializes the overlay and attach handlers to the appropriate events\r\n   */\r\n  init: function() {\r\n    this.isActive = false;\r\n    this.overlay = this.settings.overlay || this.createOverlay();\r\n    this.resize();\r\n    this.attachMethodsToExternalEvents();\r\n    this.attachOptionsHandlers();\r\n  },\r\n\r\n  /**\r\n   * Return a new default overlay\r\n   *\r\n   * @return {jQuery} A new overlay already appended to the page's body\r\n   */\r\n  createOverlay: function() {\r\n    var overlay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\r\n      '<div class=\"loading-overlay loading-theme-' +\r\n        this.settings.theme +\r\n        '\"><div class=\"loading-overlay-content\">' +\r\n        this.settings.message +\r\n        \"</div></div>\"\r\n    )\r\n      .addClass(this.settings.hiddenClass)\r\n      .hide()\r\n      .appendTo(\"body\");\r\n\r\n    var elementID = this.element.attr(\"id\");\r\n    if (elementID) {\r\n      overlay.attr(\"id\", elementID + \"_loading-overlay\");\r\n    }\r\n\r\n    return overlay;\r\n  },\r\n\r\n  /**\r\n   * Attach some internal methods to external events\r\n   * e.g. overlay click, window resize etc\r\n   */\r\n  attachMethodsToExternalEvents: function() {\r\n    var self = this;\r\n\r\n    // Add `shownClass` and remove `hiddenClass` from overlay when loading state\r\n    // is activated\r\n    self.element.on(\"loading.start\", function() {\r\n      self.overlay\r\n        .removeClass(self.settings.hiddenClass)\r\n        .addClass(self.settings.shownClass);\r\n    });\r\n\r\n    // Add `hiddenClass` and remove `shownClass` from overlay when loading state\r\n    // is stopped\r\n    self.element.on(\"loading.stop\", function() {\r\n      self.overlay\r\n        .removeClass(self.settings.shownClass)\r\n        .addClass(self.settings.hiddenClass);\r\n    });\r\n\r\n    // Attach the 'stop loading on click' behaviour if the `stoppable` option is set\r\n    if (self.settings.stoppable) {\r\n      self.overlay.on(\"click\", function() {\r\n        self.stop();\r\n      });\r\n    }\r\n\r\n    // Trigger the `loading.click` event if the overlay is clicked\r\n    self.overlay.on(\"click\", function() {\r\n      self.element.trigger(\"loading.click\", self);\r\n    });\r\n\r\n    // Bind the `resize` method to `window.resize`\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on(\"resize\", function() {\r\n      self.resize();\r\n    });\r\n\r\n    // Bind the `resize` method to `document.ready` to guarantee right\r\n    // positioning and dimensions after the page is loaded\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(function() {\r\n      self.resize();\r\n    });\r\n  },\r\n\r\n  /**\r\n   * Attach the handlers defined on `options` for the respective events\r\n   */\r\n  attachOptionsHandlers: function() {\r\n    var self = this;\r\n\r\n    self.element.on(\"loading.start\", function(event, loading) {\r\n      self.settings.onStart(loading);\r\n    });\r\n\r\n    self.element.on(\"loading.stop\", function(event, loading) {\r\n      self.settings.onStop(loading);\r\n    });\r\n\r\n    self.element.on(\"loading.click\", function(event, loading) {\r\n      self.settings.onClick(loading);\r\n    });\r\n  },\r\n\r\n  /**\r\n   * Calculate the z-index for the default overlay element\r\n   * Return the z-index passed as setting to the plugin or calculate it\r\n   * based on the target's z-index\r\n   */\r\n  calcZIndex: function() {\r\n    if (this.settings.zIndex !== undefined) {\r\n      return this.settings.zIndex;\r\n    } else {\r\n      return (\r\n        (parseInt(this.element.css(\"z-index\")) || 0) +\r\n        1 +\r\n        this.settings.fullPage\r\n      );\r\n    }\r\n  },\r\n\r\n  /**\r\n   * Reposition the overlay on the top of the target element\r\n   * This method needs to be called if the target element changes position\r\n   *  or dimension\r\n   */\r\n  resize: function() {\r\n    var self = this;\r\n\r\n    var element = self.element,\r\n      totalWidth = element.outerWidth(),\r\n      totalHeight = element.outerHeight();\r\n\r\n    if (this.settings.fullPage) {\r\n      totalHeight = \"100%\";\r\n      totalWidth = \"100%\";\r\n    }\r\n\r\n    this.overlay.css({\r\n      position: self.settings.fullPage ? \"fixed\" : \"absolute\",\r\n      zIndex: self.calcZIndex(),\r\n      top: element.offset().top,\r\n      left: element.offset().left,\r\n      width: totalWidth,\r\n      height: totalHeight\r\n    });\r\n  },\r\n\r\n  /**\r\n   * Trigger the `loading.start` event and turn on the loading state\r\n   */\r\n  start: function() {\r\n    this.isActive = true;\r\n    this.resize();\r\n    this.element.trigger(\"loading.start\", this);\r\n  },\r\n\r\n  /**\r\n   * Trigger the `loading.stop` event and turn off the loading state\r\n   */\r\n  stop: function() {\r\n    this.isActive = false;\r\n    this.element.trigger(\"loading.stop\", this);\r\n  },\r\n\r\n  /**\r\n   * Check whether the loading state is active or not\r\n   *\r\n   * @return {Boolean}\r\n   */\r\n  active: function() {\r\n    return this.isActive;\r\n  },\r\n\r\n  /**\r\n   * Toggle the state of the loading overlay\r\n   */\r\n  toggle: function() {\r\n    if (this.active()) {\r\n      this.stop();\r\n    } else {\r\n      this.start();\r\n    }\r\n  },\r\n\r\n  /**\r\n   * Destroy plugin instance.\r\n   */\r\n  destroy: function() {\r\n    this.overlay.remove();\r\n  }\r\n});\r\n\r\n/**\r\n * Name of the data attribute where the plugin object will be stored\r\n */\r\nvar dataAttr = \"jquery-loading\";\r\n\r\n/**\r\n * Initializes the plugin and return a chainable jQuery object\r\n *\r\n * @param {Object} [options] Initialization options. Extends `Loading.defaults`\r\n * @return {jQuery}\r\n */\r\njquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.loading = function(options) {\r\n  return this.each(function() {\r\n    // (Try to) retrieve an existing plugin object associated with element\r\n    var loading = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(this, dataAttr);\r\n\r\n    if (!loading) {\r\n      // First call. Initialize and save plugin object\r\n      if (\r\n        options === undefined ||\r\n        typeof options === \"object\" ||\r\n        options === \"start\" ||\r\n        options === \"toggle\"\r\n      ) {\r\n        // Initialize it just if argument is undefined, a config object\r\n        // or a direct call to 'start' or 'toggle' methods\r\n        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(this, dataAttr, new Loading(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), options));\r\n      }\r\n    } else {\r\n      // Already initialized\r\n      if (options === undefined) {\r\n        // $(...).loading() call. Call the 'start' by default\r\n        loading.start();\r\n      } else if (typeof options === \"string\") {\r\n        // $(...).loading('method') call. Execute 'method'\r\n        loading[options].apply(loading);\r\n      } else {\r\n        // $(...).loading({...}) call. New configurations. Reinitialize\r\n        // plugin object with new config options and start the plugin\r\n        // Also, destroy the old overlay instance\r\n        loading.destroy();\r\n        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(this, dataAttr, new Loading(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), options));\r\n      }\r\n    }\r\n  });\r\n};\r\n\r\n/**\r\n * Return the loading object associated to the element or initialize it\r\n * This method is interesting if you need the plugin object to access the\r\n * internal API\r\n * Example: `$('#some-element').Loading().toggle()`\r\n *\r\n * @param {Object} [options] Initialization options. If new options are given\r\n * to a previously initialized object, the old ones are overriden and the\r\n * plugin restarted\r\n * @return {Loading}\r\n */\r\njquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.Loading = function(options) {\r\n  var loading = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(dataAttr);\r\n\r\n  if (!loading || options !== undefined) {\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(dataAttr, (loading = new Loading(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), options)));\r\n  }\r\n\r\n  return loading;\r\n};\r\n\r\n/**\r\n * Create the `:loading` jQuery selector\r\n * Return all the jQuery elements with the loading state active\r\n *\r\n * Using the `:not(:loading)` will return all jQuery elements that are not\r\n *  loading, even the ones with the plugin not attached.\r\n *\r\n * Examples of usage:\r\n *  `$(':loading')` to get all the elements with the loading state active\r\n *  `$('#my-element').is(':loading')` to check if the element is loading\r\n */\r\njquery__WEBPACK_IMPORTED_MODULE_0___default.a.expr[\":\"].loading = function(element) {\r\n  var loadingObj = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.data(element, dataAttr);\r\n\r\n  if (!loadingObj) {\r\n    return false;\r\n  }\r\n\r\n  return loadingObj.active();\r\n};\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0___default.a.Loading = Loading;\r\n\n\n//# sourceURL=webpack:///./src/loading.js?");

/***/ }),

/***/ "jquery":
/*!******************************************************************************************!*\
  !*** external {"root":"jQuery","commonjs":"jquery","commonjs2":"jquery","amd":"jquery"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;\n\n//# sourceURL=webpack:///external_%7B%22root%22:%22jQuery%22,%22commonjs%22:%22jquery%22,%22commonjs2%22:%22jquery%22,%22amd%22:%22jquery%22%7D?");

/***/ })

/******/ });
});