/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _ts_main_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/main.ts */ \"./src/ts/main.ts\");\n\n\n\n//# sourceURL=webpack://async-race/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/banner.png */ \"./src/assets/banner.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/winner.png */ \"./src/assets/winner.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@500;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n    font-family: 'Nunito', sans-serif;\\r\\n    font-size: 1em;\\r\\n    margin: 0px;\\r\\n    text-transform: uppercase;\\r\\n    user-select: none;\\r\\n}\\r\\nbutton{\\r\\n    cursor: pointer;\\r\\n    z-index: 1;\\r\\n    border-radius: 5px;\\r\\n}\\r\\n\\r\\n.body{\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-repeat: no-repeat;\\r\\n    background-color: rgb(246, 241, 241);\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    gap: 30px;\\r\\n}\\r\\n\\r\\n.header{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.header__title{\\r\\n    color: red;\\r\\n    font-size: 5em;\\r\\n    margin: 57px;\\r\\n    text-shadow: 2px 2px black;\\r\\n    font-weight: 700;\\r\\n}\\r\\n\\r\\n.header__button button{\\r\\n    width: 20vw;\\r\\n    min-width: 140px;\\r\\n    height: 60px;\\r\\n    font-size: 1.5em;\\r\\n}\\r\\n\\r\\n\\r\\n.garage,\\r\\n.winners{\\r\\n    display: none;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    gap: 20px;\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\n.active{\\r\\n    \\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.btn_active{\\r\\n    background-color: #cc0000;\\r\\n}\\r\\n\\r\\n.garage__control div{\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.garage__main_title{\\r\\n    font-family: 'Nunito', sans-serif;\\r\\n    font-size: 1.5em;\\r\\n}\\r\\n\\r\\n.car-wrapper div{\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.select,\\r\\n.remove{\\r\\n    height: 30px;\\r\\n    width: auto;\\r\\n}\\r\\n\\r\\n.trace{\\r\\n    width: 80vw;\\r\\n    max-width: 960px;\\r\\n    border-bottom: 6px dashed black;\\r\\n}\\r\\n\\r\\n.icon{\\r\\n    margin-bottom: -121px;\\r\\n    margin-left: -137px;\\r\\n    z-index: 0;\\r\\n}\\r\\n\\r\\n.finish img{\\r\\n    width: 50px;    \\r\\n}\\r\\n\\r\\nbutton:active{\\r\\n    background-color: #cc0000;\\r\\n}\\r\\n\\r\\n.car-name{\\r\\n    margin-left: 5vw;\\r\\n    color: red;\\r\\n    text-shadow: 1px 0px black;\\r\\n}\\r\\n\\r\\n.garage__main{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    gap: 20px;\\r\\n}\\r\\n.garage__main_pagination{\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    gap: 10px;\\r\\n}\\r\\n\\r\\n.garage__main_wrapper{\\r\\n    height: 1000px;\\r\\n}\\r\\n\\r\\n.wrapper{\\r\\n    height: 955.15px;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.animated{\\r\\n    animation-name: car-drive;\\r\\n    animation-duration: 5s;\\r\\n    animation-fill-mode: forwards;\\r\\n}\\r\\n\\r\\n@keyframes car-drive{\\r\\n\\r\\n    from{\\r\\n        margin-left: 0px;\\r\\n    }\\r\\n    to{\\r\\n        margin-left: 55vw;\\r\\n    }\\r\\n}\\r\\n\\r\\n.modal-winner{\\r\\n    position: fixed;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    width: 60vw;\\r\\n    height: 40vh;\\r\\n    min-height: 400px;\\r\\n    border: 5px dashed black;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    margin-top: auto;\\r\\n    margin-bottom: auto;\\r\\n    top: 0;\\r\\n    bottom: 0;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n    background-repeat: no-repeat;\\r\\n    background-size: contain;\\r\\n    background-color: white;\\r\\n    z-index: 5;\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n    .modal-winner__close{\\r\\n        width: 60px;\\r\\n        height: 60px;\\r\\n        border-radius: 10px;\\r\\n        position: absolute;\\r\\n        right: 0;\\r\\n        border: 2px solid black;\\r\\n        font-size: 3em;\\r\\n        display: flex;\\r\\n        justify-content: center;\\r\\n        align-items: center;    \\r\\n    }\\r\\n\\r\\n    .modal-winner__title{\\r\\n        font-size: 3em;\\r\\n        margin: 10px;\\r\\n        color: red;\\r\\n    }\\r\\n\\r\\n    .modal-winner__body h2{\\r\\n\\r\\n        font-size: 2em;\\r\\n        margin: 50px;\\r\\n    }\\r\\n\\r\\n\\r\\n    .cover{\\r\\n        background-color: rgba(0, 0, 0, 0.877);\\r\\n        position: absolute;\\r\\n        width: 100vw;\\r\\n        height: 1481.15px;\\r\\n        z-index: 3;\\r\\n        top: 0;\\r\\n        left: 0;\\r\\n        display: none;\\r\\n    }\\r\\n\\r\\n    .table{\\r\\n        width: 60vw;\\r\\n        min-width: 477px;\\r\\n\\r\\n        margin-top: 5vh;\\r\\n    }\\r\\n\\r\\n    .winners__title{\\r\\n\\r\\n        margin: 20px;\\r\\n        font-size: 2em;\\r\\n    }\\r\\n    \\r\\n    .page_winners{\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n        gap: 10px;\\r\\n    }\\r\\n\\r\\n    .img{\\r\\n        width: 40vw;\\r\\n        margin-left: calc(50% - 20vw);\\r\\n        margin-top: 100px;\\r\\n    }\\r\\n\\r\\n    .header-table{\\r\\n        background-color: rgba(240, 240, 92, 0.952);\\r\\n    }\\r\\n\\r\\n    .row{\\r\\n        text-align: center;\\r\\n    }\\r\\n\\r\\n    \\r\\n    .time-up{\\r\\n        display: flex;\\r\\n       \\r\\n    }\\r\\n\\r\\n    \\r\\n    #time img,\\r\\n    #wins img{\\r\\n        width: 15px;\\r\\n        height: 15px;\\r\\n        margin-top: 5px;\\r\\n        margin-right: 10px;\\r\\n        display: none;\\r\\n        position: absolute;\\r\\n        right: 0;\\r\\n        top: 0; \\r\\n    }\\r\\n\\r\\n    #time,\\r\\n    #wins{\\r\\n        justify-content: center;\\r\\n        align-items: center;\\r\\n        position: relative;\\r\\n    }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://async-race/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://async-race/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://async-race/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://async-race/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://async-race/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://async-race/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/ts/create-default.ts":
/*!**********************************!*\
  !*** ./src/ts/create-default.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create_car\": () => (/* binding */ create_car),\n/* harmony export */   \"create_default\": () => (/* binding */ create_default),\n/* harmony export */   \"dataCars_page\": () => (/* binding */ dataCars_page)\n/* harmony export */ });\n/* harmony import */ var _driving__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driving */ \"./src/ts/driving.ts\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/ts/main.ts\");\n/* harmony import */ var _remove_car__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-car */ \"./src/ts/remove-car.ts\");\n/* harmony import */ var _update_car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-car */ \"./src/ts/update-car.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\n\r\n\r\nvar dataCars_page = function (page, limit) {\r\n    if (limit === void 0) { limit = 7; }\r\n    return __awaiter(void 0, void 0, void 0, function () {\r\n        var response;\r\n        var _a;\r\n        return __generator(this, function (_b) {\r\n            switch (_b.label) {\r\n                case 0: return [4 /*yield*/, fetch(\"\".concat(_main__WEBPACK_IMPORTED_MODULE_1__.garage, \"?_page=\").concat(page, \"&_limit=\").concat(limit))];\r\n                case 1:\r\n                    response = _b.sent();\r\n                    _a = {};\r\n                    return [4 /*yield*/, response.json()];\r\n                case 2: return [2 /*return*/, (_a.items = _b.sent(),\r\n                        _a.count = response.headers.get('X-Total-Count'),\r\n                        _a)];\r\n            }\r\n        });\r\n    });\r\n};\r\nfunction create_default() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var cars, cars_1, count, i, car, prev_btn, next_btn, page, title, garage_wrapper, page_count;\r\n        var _this = this;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0: return [4 /*yield*/, dataCars_page(1)];\r\n                case 1:\r\n                    cars = _a.sent();\r\n                    cars_1 = cars.items;\r\n                    count = +cars.count;\r\n                    console.log(cars.count);\r\n                    for (i = 0; i < cars_1.length; i++) {\r\n                        car = cars_1[i];\r\n                        create_car(car.id, car.name, car.color);\r\n                        (0,_remove_car__WEBPACK_IMPORTED_MODULE_2__.remove_car)();\r\n                        (0,_update_car__WEBPACK_IMPORTED_MODULE_3__.update_car)();\r\n                        (0,_driving__WEBPACK_IMPORTED_MODULE_0__.car_drive)();\r\n                    }\r\n                    prev_btn = document.querySelector('.prev-page');\r\n                    next_btn = document.querySelector('.next-page');\r\n                    page = document.querySelector('.garage__main_pagination h2');\r\n                    title = document.querySelector('.garage__main_title h2');\r\n                    garage_wrapper = document.querySelector('.garage__main_wrapper');\r\n                    page_count = 1;\r\n                    title.innerHTML = \"Garage (<span class='count'>\".concat(count, \"</span>)\");\r\n                    if (count > 7) {\r\n                        next_btn.disabled = false;\r\n                    }\r\n                    next_btn.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {\r\n                        var cars_2, cars_per_page, i, car;\r\n                        return __generator(this, function (_a) {\r\n                            switch (_a.label) {\r\n                                case 0:\r\n                                    page_count++;\r\n                                    page.innerHTML = \"\".concat(page_count);\r\n                                    prev_btn.disabled = false;\r\n                                    garage_wrapper.innerHTML = '';\r\n                                    return [4 /*yield*/, dataCars_page(page_count)];\r\n                                case 1:\r\n                                    cars_2 = _a.sent();\r\n                                    cars_per_page = cars_2.items;\r\n                                    console.log(cars_per_page);\r\n                                    for (i = 0; i < cars_per_page.length; i++) {\r\n                                        car = cars_per_page[i];\r\n                                        create_car(car.id, car.name, car.color);\r\n                                        (0,_remove_car__WEBPACK_IMPORTED_MODULE_2__.remove_car)();\r\n                                        (0,_update_car__WEBPACK_IMPORTED_MODULE_3__.update_car)();\r\n                                        (0,_driving__WEBPACK_IMPORTED_MODULE_0__.car_drive)();\r\n                                    }\r\n                                    if (cars_per_page.length < 7) {\r\n                                        next_btn.disabled = true;\r\n                                    }\r\n                                    return [2 /*return*/];\r\n                            }\r\n                        });\r\n                    }); });\r\n                    prev_btn.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {\r\n                        var cars_2, cars_per_page, i, car;\r\n                        return __generator(this, function (_a) {\r\n                            switch (_a.label) {\r\n                                case 0:\r\n                                    page_count--;\r\n                                    page.innerHTML = \"\".concat(page_count);\r\n                                    prev_btn.disabled = false;\r\n                                    garage_wrapper.innerHTML = '';\r\n                                    return [4 /*yield*/, dataCars_page(page_count)];\r\n                                case 1:\r\n                                    cars_2 = _a.sent();\r\n                                    cars_per_page = cars_2.items;\r\n                                    for (i = 0; i < cars_per_page.length; i++) {\r\n                                        car = cars_per_page[i];\r\n                                        create_car(car.id, car.name, car.color);\r\n                                        (0,_remove_car__WEBPACK_IMPORTED_MODULE_2__.remove_car)();\r\n                                        (0,_update_car__WEBPACK_IMPORTED_MODULE_3__.update_car)();\r\n                                        (0,_driving__WEBPACK_IMPORTED_MODULE_0__.car_drive)();\r\n                                    }\r\n                                    if (page_count == 1) {\r\n                                        prev_btn.disabled = true;\r\n                                        if (count > 7) {\r\n                                            next_btn.disabled = false;\r\n                                        }\r\n                                    }\r\n                                    return [2 /*return*/];\r\n                            }\r\n                        });\r\n                    }); });\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\nfunction create_car(id, name, color) {\r\n    var garage = document.querySelector('.garage__main_wrapper');\r\n    var car_wrapper = \"<div class='car-wrapper' id='\".concat(id, \"'><div class='upper-panel'>\\n        <button class='select'>Select</button>\\n        <button class='remove'>Remove</button>\\n        <h3 class='car-name'>\").concat(name, \"</h3>\\n        </div>\\n        <div class='car-panel'>\\n        <button class='A'>A</button>\\n        <button class='B' disabled>B</button>\\n        <div class='car' id='\").concat(id, \"'><svg width=\\\"0\\\" height=\\\"0\\\" class=\\\"hidden\\\">\\n        <symbol xml:space=\\\"preserve\\\" y=\\\"0\\\" x=\\\"0\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" fill=\\\"\").concat(color, \"\\\" id=\\\"sports car\").concat(id, \"\\\" version=\\\"1.1\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" viewBox=\\\"0 0 100 100\\\">\\n          <g>\\n            <path fill=\\\"#\").concat(color, \"\\\" d=\\\"M66 47.5c-.4-.5-5.1 0-5.7 0H22.9c-1.8 0-4.9.6-6.5 0 .8-2.5 3.4-3.9 5.7-5 6.5-3.1 13.3-5.7 20.3-7.6 10-2.8 16.1 2 22.5 11.1l1.1 1.5z\\\"></path>\\n            <path fill=\\\"#333\\\" d=\\\"M62.3 46.2c-5.6-7.9-10.9-12.1-19.6-9.7-1.5.4-3 .9-4.5 1.4-.9.3-1.5 1.1-1.5 2l-.3 5.2c-.1 1.3 1 2.4 2.3 2.4h19.7c.5 0 4.7-.4 5 0l-1.1-1.3z\\\"></path>\\n            <path fill=\\\"#333\\\" d=\\\"M25 43.2c-1.6.8-3.4 1.7-4.4 3.1-.4.6 0 1.4.7 1.4 1.4.1 3.1-.2 4.3-.2h8c.5 0 .9-.4.9-.9l.4-6.3c0-.7-.6-1.1-1.2-.9-3 1.2-5.9 2.4-8.7 3.8z\\\"></path>\\n            <path fill=\\\"#\").concat(color, \"\\\" d=\\\"M89.4 54.1c-2.3-3.5-5.9-6.2-9.8-7.6-1.2-.4-2.5-.8-3.8-.9-11.8-.6-23.9 0-35.7 0h-23c-3 0-5.6 2.2-6.1 5.1 0 .1-.1.2-.1.3l-.5 3.8-.8 3.4c0 2.2 1.8 4 4 4H62.7c5.6 0 11.2.2 16.8 0 .6 0 1.2 0 1.8-.1 1.1 0 2.2-.1 3.2-.1 2.1-.1 6.5-.1 6.8-3 .1-.9-.2-1.8-.6-2.6-.4-.8-.8-1.6-1.3-2.3z\\\"></path>\\n            <path fill=\\\"#e15b64\\\" d=\\\"M14.2 50.7H11c-.2 0-.3.1-.3.3l-.4 3.3c0 .2.1.5.3.5h3.6c.9 0 1.6-.8 1.6-1.8v-.5c-.1-1-.8-1.8-1.6-1.8z\\\"></path>\\n            <path fill=\\\"#e0e0e0\\\" d=\\\"M87.9 51c-.2-.2-.5-.4-.8-.4h-3c-.8 0-1.4.5-1.4 1.1v1.5c0 .8.8 1.6 1.8 1.6h5c.6 0 .7-.5.4-1l-2-2.8z\\\"></path>\\n            <path fill=\\\"#\").concat(color, \"\\\" d=\\\"M90.3 57.8H9.6s-.4 0-.4.4c0 2.4 1.7 4 4.1 4h77c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2z\\\"></path>\\n            <g>\\n              <circle fill=\\\"#fff\\\" r=\\\"7.3\\\" cy=\\\"57.2\\\" cx=\\\"25.3\\\"></circle>\\n              <path fill=\\\"#333\\\" d=\\\"M25.3 51.3c3.2 0 5.8 2.6 5.8 5.8S28.5 63 25.3 63s-5.8-2.6-5.8-5.8 2.6-5.9 5.8-5.9m0-3c-4.9 0-8.8 3.9-8.8 8.8s3.9 8.8 8.8 8.8 8.8-3.9 8.8-8.8-4-8.8-8.8-8.8z\\\"></path>\\n            </g>\\n            <g>\\n              <circle fill=\\\"#e6e6e6\\\" r=\\\"4\\\" cy=\\\"57.2\\\" cx=\\\"25.3\\\"></circle>\\n            </g>\\n            <g>\\n              <circle fill=\\\"#fff\\\" r=\\\"7.3\\\" cy=\\\"57.2\\\" cx=\\\"71.9\\\"></circle>\\n              <path fill=\\\"#333\\\" d=\\\"M71.9 51.3c3.2 0 5.8 2.6 5.8 5.8S75.1 63 71.9 63s-5.8-2.6-5.8-5.8 2.6-5.9 5.8-5.9m0-3c-4.9 0-8.8 3.9-8.8 8.8s3.9 8.8 8.8 8.8 8.8-3.9 8.8-8.8-3.9-8.8-8.8-8.8z\\\"></path>\\n            </g>\\n            <g>\\n              <circle fill=\\\"#e6e6e6\\\" r=\\\"4\\\" cy=\\\"57.2\\\" cx=\\\"71.9\\\"></circle>\\n            </g>\\n            <path fill=\\\"#f8b26a\\\" d=\\\"M59.1 55.9H41c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h18c.8 0 1.5.7 1.5 1.5.1.8-.6 1.5-1.4 1.5z\\\"></path>\\n            <path fill=\\\"#\").concat(color, \"\\\" d=\\\"M17 43l-7.2-.7c-1.1-.1-2-1-2.1-2.2l-.1-1.5c-.1-1 .9-1.8 1.9-1.5l10.2 3.3c0 1.5-1.3 2.7-2.7 2.6z\\\"></path>\\n            <path d=\\\"M18.7 46.2l-2.9 2.5-4.9-8.1 1.9-1.6z\\\" fill=\\\"#\").concat(color, \"\\\"></path>\\n            <metadata xmlnsD=\\\"https://loading.io/stock/\\\">\\n              <d:name>sports car</d:name>\\n              <d:tags>racer,coupe,supercar,vehicle,cab,auto,sports car,transportation</d:tags>\\n              <d:license>by</d:license>\\n              <d:slug>swsirj</d:slug>\\n            </metadata>\\n          </g>\\n        </symbol>\\n      </svg>\\n      <svg class=\\\"icon\\\">\\n        <use xlink:href=\\\"#sports car\").concat(id, \"\\\"></use>\\n      </svg></div>\\n        </div>\\n        <div class='trace-panel'>\\n        <div class='trace'></div>\\n        <div class='finish' id = 'finish-\").concat(id, \"'><img src='finish.png'></div></div></div>\");\r\n    garage.innerHTML += car_wrapper;\r\n}\r\n// export function count_garage(){\r\n//   const count = document.querySelector('.garage__main_wrapper').childElementCount;\r\n//   title.innerHTML = `Garage (${count})`;\r\n// }\r\n\n\n//# sourceURL=webpack://async-race/./src/ts/create-default.ts?");

/***/ }),

/***/ "./src/ts/create-page.ts":
/*!*******************************!*\
  !*** ./src/ts/create-page.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create_page\": () => (/* binding */ create_page)\n/* harmony export */ });\n/* harmony import */ var _generate_cars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate-cars */ \"./src/ts/generate-cars.ts\");\n/* harmony import */ var _create_your_car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-your-car */ \"./src/ts/create-your-car.ts\");\n\r\n\r\n// import { change_pages } from \"./main\";\r\nfunction create_page() {\r\n    var body = document.querySelector('.body');\r\n    var header = \"<header class=\\\"header\\\">\\n    <h1 class=\\\"header__title\\\">acync race</h1>\\n    <div class=\\\"header__button\\\">\\n        <button class=\\\"button__garage btn_active\\\">garage</button>\\n        <button class=\\\"button__winners\\\">winners</button>\\n    </div>\\n    </header>\";\r\n    body.innerHTML += header;\r\n    var main = \"<main>\\n    <section class=\\\"garage active\\\">\\n        <div class=\\\"garage__control\\\">\\n            <div class=\\\"garage__control_create\\\">\\n                <div class=\\\"create_name\\\">\\n                    <label for=\\\"name-car\\\"></label>\\n                    <input id=\\\"name-car\\\" name=\\\"name-car\\\" placeholder=\\\"car name\\\">\\n                </div>\\n                <div class=\\\"create_color\\\">\\n                    <label for=\\\"color-car\\\"></label>\\n                    <input id=\\\"color-car\\\" name=\\\"color-car\\\" type=\\\"color\\\">\\n                </div>\\n                <button class=\\\"create_car\\\">create car</button>\\n            </div>\\n            <div class=\\\"garage__control_update\\\">\\n                <div class=\\\"update_name\\\">\\n                    <label for=\\\"name-update\\\"></label>\\n                    <input id=\\\"name-update\\\" name=\\\"name-update\\\" placeholder=\\\"car name\\\">\\n                </div>\\n                <div class=\\\"update_color\\\">\\n                    <label for=\\\"color-update\\\"></label>\\n                    <input id=\\\"color-update\\\" name=\\\"color-update\\\" type=\\\"color\\\">\\n                </div>\\n                <button class=\\\"update_car\\\">update car</button>\\n            </div>\\n            <div class=\\\"garage__control_panel\\\">\\n                <button class=\\\"btn-race\\\">race</button>\\n                <button class=\\\"btn-reset\\\">reset</button>\\n                <button class=\\\"btn-generate\\\">generate</button>\\n            </div>\\n        </div>\\n        <div class=\\\"garage__main\\\">\\n            <div class=\\\"garage__main_title\\\"><h2></h2></div>\\n            <div class=\\\"garage__main_pagination\\\">\\n                <button class='prev-page' disabled><</button>\\n                <h2>1</h2>\\n                <button class ='next-page' disabled>></button>\\n            </div>\\n                <div class='garage__main_wrapper'></div>\\n            <div class='modal-winner'>\\n                <button class='modal-winner__close'>X</button>\\n                <h1 class='modal-winner__title'>The winner is</h1>\\n                <div class='modal-winner__body'></div>\\n            </div>\\n            <div class='cover'></div>\\n        </div>\\n    </section>\\n    <section class=\\\"winners\\\">\\n        <div class=\\\"winners__title\\\"><h1></h1></div>\\n        <div class=\\\"page_winners\\\"><button id='left' disabled><</button><h2 id='page-number'>(1)</h2><button id='right' disabled>></button></div>\\n        <div class=\\\"winners__wrapper\\\">\\n        <table class = 'table'>\\n                \\n       </table>\\n       <img class='img' src='winners.png'></img>\\n        </div>\\n    </section> \\n    </main>\";\r\n    body.innerHTML += main;\r\n    var generate_btn = document.querySelector('.btn-generate');\r\n    generate_btn.addEventListener('click', function () {\r\n        (0,_generate_cars__WEBPACK_IMPORTED_MODULE_0__.generate_cars)();\r\n    });\r\n    var create_btn = document.querySelector('.create_car');\r\n    create_btn.addEventListener('click', function () {\r\n        (0,_create_your_car__WEBPACK_IMPORTED_MODULE_1__.create_your_car)();\r\n        // // change_pages();\r\n        // const cars = document.querySelectorAll('.car-wrapper');\r\n        // let result = cars.length % 7\r\n        // const next_btn = document.querySelector('.next-page') as HTMLButtonElement;\r\n        // if (result == 1){next_btn.disabled = false}\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://async-race/./src/ts/create-page.ts?");

/***/ }),

/***/ "./src/ts/create-your-car.ts":
/*!***********************************!*\
  !*** ./src/ts/create-your-car.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create_car_api\": () => (/* binding */ create_car_api),\n/* harmony export */   \"create_your_car\": () => (/* binding */ create_your_car),\n/* harmony export */   \"dataCars\": () => (/* binding */ dataCars)\n/* harmony export */ });\n/* harmony import */ var _create_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-default */ \"./src/ts/create-default.ts\");\n/* harmony import */ var _driving__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./driving */ \"./src/ts/driving.ts\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./src/ts/main.ts\");\n/* harmony import */ var _random_cars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./random-cars */ \"./src/ts/random-cars.ts\");\n/* harmony import */ var _remove_car__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove-car */ \"./src/ts/remove-car.ts\");\n/* harmony import */ var _update_car__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-car */ \"./src/ts/update-car.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar dataCars = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var response, data;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, fetch(\"\".concat(_main__WEBPACK_IMPORTED_MODULE_2__.garage))];\r\n            case 1:\r\n                response = _a.sent();\r\n                return [4 /*yield*/, response.json()];\r\n            case 2:\r\n                data = (_a.sent());\r\n                return [2 /*return*/, data];\r\n        }\r\n    });\r\n}); };\r\nfunction create_your_car() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var title, cars_data, input, color_bar, model, i, randomBrand, k, randomModel, random_name, color, id_stack, max_id, id, body, next_btn, page_inner, page;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    title = document.querySelector('.garage__main_title h2');\r\n                    return [4 /*yield*/, dataCars()];\r\n                case 1:\r\n                    cars_data = _a.sent();\r\n                    title.innerHTML = \"Garage (\".concat(cars_data.length + 1, \")\");\r\n                    input = document.querySelector('#name-car');\r\n                    color_bar = document.querySelector('#color-car');\r\n                    i = Math.floor(Math.random() * _random_cars__WEBPACK_IMPORTED_MODULE_3__.brandsCars.length);\r\n                    randomBrand = _random_cars__WEBPACK_IMPORTED_MODULE_3__.brandsCars[i];\r\n                    k = Math.floor(Math.random() * _random_cars__WEBPACK_IMPORTED_MODULE_3__.modelsCars.length);\r\n                    randomModel = _random_cars__WEBPACK_IMPORTED_MODULE_3__.modelsCars[k];\r\n                    random_name = \"\".concat(randomBrand, \" \").concat(randomModel);\r\n                    if (input.value === '') {\r\n                        model = random_name;\r\n                    }\r\n                    else {\r\n                        model = input.value;\r\n                    }\r\n                    color = color_bar.value;\r\n                    id_stack = [];\r\n                    cars_data.forEach(function (car) {\r\n                        return id_stack.push(+car.id);\r\n                    });\r\n                    max_id = Math.max.apply(null, id_stack);\r\n                    id = max_id + 1;\r\n                    body = { 'id': id,\r\n                        'name': model,\r\n                        'color': color };\r\n                    console.log(body);\r\n                    (0,_create_default__WEBPACK_IMPORTED_MODULE_0__.create_car)(id, model, color);\r\n                    create_car_api(body);\r\n                    (0,_update_car__WEBPACK_IMPORTED_MODULE_5__.update_car)();\r\n                    (0,_remove_car__WEBPACK_IMPORTED_MODULE_4__.remove_car)();\r\n                    (0,_driving__WEBPACK_IMPORTED_MODULE_1__.car_drive)();\r\n                    console.log(cars_data.length + 1);\r\n                    next_btn = document.querySelector('.next-page');\r\n                    page_inner = document.querySelector('.garage__main_pagination h2').innerHTML;\r\n                    page = +page_inner;\r\n                    if (cars_data.length + 1 <= 7) {\r\n                        next_btn.disabled = true;\r\n                        console.log(cars_data.length + 1 <= 7);\r\n                    }\r\n                    else {\r\n                        if (cars_data.length + 1 > page * 7) {\r\n                            next_btn.disabled = false;\r\n                        }\r\n                    }\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\nvar create_car_api = function (body) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, fetch(_main__WEBPACK_IMPORTED_MODULE_2__.garage, {\r\n                    method: 'POST',\r\n                    body: JSON.stringify(body),\r\n                    headers: {\r\n                        'Content-Type': 'application/json'\r\n                    },\r\n                })];\r\n            case 1: return [2 /*return*/, (_a.sent()).json()];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack://async-race/./src/ts/create-your-car.ts?");

/***/ }),

/***/ "./src/ts/driving.ts":
/*!***************************!*\
  !*** ./src/ts/driving.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"car_drive\": () => (/* binding */ car_drive),\n/* harmony export */   \"start_race\": () => (/* binding */ start_race)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/ts/main.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nfunction car_drive() {\r\n    var start_btns = document.querySelectorAll('.A');\r\n    var _loop_1 = function (i) {\r\n        var A = start_btns[i];\r\n        var B = A.nextElementSibling;\r\n        var car = B.nextElementSibling;\r\n        A.addEventListener('click', function () {\r\n            B.disabled = false;\r\n            A.disabled = true;\r\n            // console.log(car)\r\n            var duration = (Math.random() * (5));\r\n            duration = +(duration.toFixed(3));\r\n            console.log(duration);\r\n            car.classList.add('animated');\r\n            var animation = document.querySelector('.animated');\r\n            animation.style.animationDuration = \"\".concat(duration, \"s\");\r\n        });\r\n        B.addEventListener('click', function () {\r\n            car.classList.remove('animated');\r\n            A.disabled = false;\r\n            B.disabled = true;\r\n        });\r\n    };\r\n    for (var i = 0; i < start_btns.length; i++) {\r\n        _loop_1(i);\r\n    }\r\n}\r\nfunction start_race() {\r\n    var start_race = document.querySelector('.btn-race');\r\n    start_race.addEventListener('click', function () {\r\n        start_race.disabled = true;\r\n        var cars = document.querySelectorAll('.car');\r\n        var race = [];\r\n        for (var i = 0; i < cars.length; i++) {\r\n            var car = cars[i];\r\n            var duration = (Math.random() * (5) + 1);\r\n            duration = +(duration.toFixed(3));\r\n            race.push(duration);\r\n            car.classList.add('animated');\r\n            car.style.animationDuration = \"\".concat(duration, \"s\");\r\n            car.style.marginLeft = '55vw';\r\n        }\r\n        var fastest = Math.min.apply(null, race);\r\n        var win = 0;\r\n        var _loop_2 = function (i) {\r\n            var car = cars[i];\r\n            if (car.style.animationDuration == \"\".concat(fastest, \"s\")) {\r\n                var id = +car.id;\r\n                win++;\r\n                var name_wrapper = car.parentElement.parentElement.children[0].children[2];\r\n                var name_1 = name_wrapper.innerHTML;\r\n                var winner = {\r\n                    id: id,\r\n                    name: name_1,\r\n                    wins: win,\r\n                    time: fastest,\r\n                };\r\n                var modal_body = document.querySelector('.modal-winner__body');\r\n                create_winner_api(winner);\r\n                var modal_wrapper = \"<h2>\".concat(name_1, \"</h2><h3>with time \").concat(fastest, \"s</h3>\");\r\n                modal_body.innerHTML = modal_wrapper;\r\n                var modal_1 = document.querySelector('.modal-winner');\r\n                var cover_1 = document.querySelector('.cover');\r\n                car.addEventListener('animationend', function () {\r\n                    modal_1.style.display = 'flex';\r\n                    cover_1.style.display = 'flex';\r\n                });\r\n                var close_1 = document.querySelector(\".modal-winner__close\");\r\n                close_1.addEventListener('click', function () {\r\n                    modal_1.style.display = 'none';\r\n                    cover_1.style.display = 'none';\r\n                });\r\n            }\r\n        };\r\n        for (var i = 0; i < cars.length; i++) {\r\n            _loop_2(i);\r\n        }\r\n    });\r\n    var stop_race = document.querySelector('.btn-reset');\r\n    stop_race.addEventListener('click', function () {\r\n        start_race.disabled = false;\r\n        var cars = document.querySelectorAll('.car');\r\n        for (var i = 0; i < cars.length; i++) {\r\n            var car = cars[i];\r\n            car.classList.remove('animated');\r\n            var id = +car.id;\r\n            car.style.marginLeft = '0';\r\n        }\r\n    });\r\n}\r\nvar create_winner_api = function (winner) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, fetch(_main__WEBPACK_IMPORTED_MODULE_0__.winners, {\r\n                    method: 'POST',\r\n                    body: JSON.stringify(winner),\r\n                    headers: {\r\n                        'Content-Type': 'application/json'\r\n                    },\r\n                })];\r\n            case 1: return [2 /*return*/, (_a.sent()).json()];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack://async-race/./src/ts/driving.ts?");

/***/ }),

/***/ "./src/ts/generate-cars.ts":
/*!*********************************!*\
  !*** ./src/ts/generate-cars.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generate_cars\": () => (/* binding */ generate_cars)\n/* harmony export */ });\n/* harmony import */ var _create_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-default */ \"./src/ts/create-default.ts\");\n/* harmony import */ var _create_your_car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-your-car */ \"./src/ts/create-your-car.ts\");\n/* harmony import */ var _random_cars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./random-cars */ \"./src/ts/random-cars.ts\");\n/* harmony import */ var _remove_car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-car */ \"./src/ts/remove-car.ts\");\n/* harmony import */ var _update_car__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-car */ \"./src/ts/update-car.ts\");\n\r\n\r\n// import { change_pages } from \"./main\";\r\n\r\n\r\n\r\nfunction generate_cars() {\r\n    window.location.reload();\r\n    var _loop_1 = function (car) {\r\n        var i = Math.floor(Math.random() * _random_cars__WEBPACK_IMPORTED_MODULE_2__.brandsCars.length);\r\n        var randomBrand = _random_cars__WEBPACK_IMPORTED_MODULE_2__.brandsCars[i];\r\n        var k = Math.floor(Math.random() * _random_cars__WEBPACK_IMPORTED_MODULE_2__.modelsCars.length);\r\n        var randomModel = _random_cars__WEBPACK_IMPORTED_MODULE_2__.modelsCars[k];\r\n        var random_name = \"\".concat(randomBrand, \" \").concat(randomModel);\r\n        var random_color = (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();\r\n        var id_stack = [];\r\n        var cars = document.querySelectorAll('.car-wrapper');\r\n        cars.forEach(function (car) {\r\n            return id_stack.push(+car.id);\r\n        });\r\n        var max_id = Math.max.apply(null, id_stack);\r\n        console.log(max_id);\r\n        var id = max_id + 1;\r\n        (0,_create_default__WEBPACK_IMPORTED_MODULE_0__.create_car)(id, random_name, random_color);\r\n        var body = { 'id': id,\r\n            'name': random_name,\r\n            'color': random_color };\r\n        (0,_create_your_car__WEBPACK_IMPORTED_MODULE_1__.create_car_api)(body);\r\n    };\r\n    for (var car = 0; car < 100; car++) {\r\n        _loop_1(car);\r\n    }\r\n    (0,_remove_car__WEBPACK_IMPORTED_MODULE_3__.remove_car)();\r\n    (0,_update_car__WEBPACK_IMPORTED_MODULE_4__.update_car)();\r\n    // change_pages();\r\n}\r\n\n\n//# sourceURL=webpack://async-race/./src/ts/generate-cars.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"base\": () => (/* binding */ base),\n/* harmony export */   \"garage\": () => (/* binding */ garage),\n/* harmony export */   \"winners\": () => (/* binding */ winners)\n/* harmony export */ });\n/* harmony import */ var _create_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-default */ \"./src/ts/create-default.ts\");\n/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-page */ \"./src/ts/create-page.ts\");\n/* harmony import */ var _driving__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./driving */ \"./src/ts/driving.ts\");\n/* harmony import */ var _winners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./winners */ \"./src/ts/winners.ts\");\n\r\n\r\n\r\n\r\nvar base = 'http://localhost:3000';\r\nvar garage = \"\".concat(base, \"/garage\");\r\nvar winners = \"\".concat(base, \"/winners\");\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    (0,_create_page__WEBPACK_IMPORTED_MODULE_1__.create_page)();\r\n    (0,_create_default__WEBPACK_IMPORTED_MODULE_0__.create_default)();\r\n    (0,_driving__WEBPACK_IMPORTED_MODULE_2__.start_race)();\r\n    var garage_btn = document.querySelector('.button__garage');\r\n    var winners_btn = document.querySelector('.button__winners');\r\n    winners_btn.addEventListener('click', function () {\r\n        document.querySelector('.garage').classList.remove('active');\r\n        document.querySelector('.winners').classList.add('active');\r\n        garage_btn.classList.remove('btn_active');\r\n        winners_btn.classList.add('btn_active');\r\n        (0,_winners__WEBPACK_IMPORTED_MODULE_3__.get_winners)(1);\r\n        var cars = document.querySelectorAll('.car');\r\n        cars.forEach(function (car) {\r\n            car.classList.remove('animated');\r\n        });\r\n    });\r\n    garage_btn.addEventListener('click', function () {\r\n        document.querySelector('.garage').classList.add('active');\r\n        document.querySelector('.winners').classList.remove('active');\r\n        garage_btn.classList.add('btn_active');\r\n        winners_btn.classList.remove('btn_active');\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://async-race/./src/ts/main.ts?");

/***/ }),

/***/ "./src/ts/random-cars.ts":
/*!*******************************!*\
  !*** ./src/ts/random-cars.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"brandsCars\": () => (/* binding */ brandsCars),\n/* harmony export */   \"modelsCars\": () => (/* binding */ modelsCars)\n/* harmony export */ });\nvar brandsCars = [\r\n    'Audi',\r\n    'Alfa Romeo',\r\n    'Alpina',\r\n    'Aston Martin',\r\n    'Axon',\r\n    'Ford',\r\n    'Ferrari',\r\n    'Fiat',\r\n    'GAZ',\r\n    'GMC',\r\n    'Honda',\r\n    'Hummer',\r\n    'Hyundai',\r\n    'Infiniti',\r\n    'Isuzu',\r\n    'JAC',\r\n    'Jaguar',\r\n    'Jeep',\r\n    'Kamaz',\r\n    'Lada',\r\n    'Lexus',\r\n    'Lotus',\r\n    'MAN',\r\n    'Maybach',\r\n    'MAZ',\r\n    'Mazda',\r\n    'McLaren',\r\n    'Nissan',\r\n    'Opel',\r\n    'Paccar',\r\n    'Pagani',\r\n    'Pontiac',\r\n    'Porsche',\r\n    'Renault',\r\n    'Škoda',\r\n    'Smart',\r\n    'Subaru',\r\n    'Suzuki',\r\n    'Tesla',\r\n    'Toyota',\r\n    'UAZ',\r\n    'Volvo',\r\n    'ZAZ',\r\n    'XPeng',\r\n    'TVR',\r\n    'Saab',\r\n    'RAM',\r\n    'Chevrolet',\r\n    'Mazzanti',\r\n    'Daewoo',\r\n];\r\nvar modelsCars = [\r\n    'Roadster',\r\n    'S',\r\n    'X',\r\n    '3',\r\n    'Y',\r\n    'Cybertruck',\r\n    'X5',\r\n    'X7',\r\n    'X3',\r\n    'X6',\r\n    'GT4',\r\n    'FXX',\r\n    '599 GTO',\r\n    'Enzo',\r\n    '458 Italia',\r\n    '250 GTO',\r\n    'Priora',\r\n    '4x4',\r\n    'Rio',\r\n    'Focus',\r\n    'Kalina',\r\n    'Vesta',\r\n    'Spark',\r\n    'Lacetti',\r\n    'Nexia',\r\n    'Matiz',\r\n    'Cobalt',\r\n    'Captiva',\r\n    'A7',\r\n    'A5',\r\n    'A3',\r\n    'A8',\r\n    'TT',\r\n    'Corolla',\r\n    'Camry',\r\n    'RAV4',\r\n    'Impreza',\r\n    'WRX',\r\n    'ES',\r\n    'LS',\r\n    'RX',\r\n    'GX',\r\n    'LX',\r\n    'GS',\r\n    'LC500',\r\n    'Gallardo',\r\n    'Aventador',\r\n    '911',\r\n    'Cayenne',\r\n    'FX37',\r\n];\r\n\n\n//# sourceURL=webpack://async-race/./src/ts/random-cars.ts?");

/***/ }),

/***/ "./src/ts/remove-car.ts":
/*!******************************!*\
  !*** ./src/ts/remove-car.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"remove_car\": () => (/* binding */ remove_car)\n/* harmony export */ });\n/* harmony import */ var _create_your_car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-your-car */ \"./src/ts/create-your-car.ts\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/ts/main.ts\");\n/* harmony import */ var _winners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./winners */ \"./src/ts/winners.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\n\r\nfunction remove_car() {\r\n    var _this = this;\r\n    var remove_buttons = document.querySelectorAll('.remove');\r\n    remove_buttons.forEach(function (button) {\r\n        button.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {\r\n            var car, winners, title, cars_data;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        car = button.parentElement.parentElement;\r\n                        car.remove();\r\n                        console.log(car.id);\r\n                        delete_car_api(car.id);\r\n                        return [4 /*yield*/, (0,_winners__WEBPACK_IMPORTED_MODULE_2__.dataWinners)()];\r\n                    case 1:\r\n                        winners = _a.sent();\r\n                        winners.forEach(function (winner) {\r\n                            if (+car.id === winner.id) {\r\n                                delete_winners_api(car.id);\r\n                            }\r\n                        });\r\n                        title = document.querySelector('.garage__main_title h2');\r\n                        return [4 /*yield*/, (0,_create_your_car__WEBPACK_IMPORTED_MODULE_0__.dataCars)()];\r\n                    case 2:\r\n                        cars_data = _a.sent();\r\n                        title.innerHTML = \"Garage (\".concat(cars_data.length, \")\");\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        }); });\r\n    });\r\n}\r\nvar delete_car_api = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    switch (_a.label) {\r\n        case 0: return [4 /*yield*/, fetch(\"\".concat(_main__WEBPACK_IMPORTED_MODULE_1__.garage, \"/\").concat(id), { method: 'DELETE' })];\r\n        case 1: return [2 /*return*/, (_a.sent()).json()];\r\n    }\r\n}); }); };\r\nvar delete_winners_api = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    switch (_a.label) {\r\n        case 0: return [4 /*yield*/, fetch(\"\".concat(_main__WEBPACK_IMPORTED_MODULE_1__.winners, \"/\").concat(id), { method: 'DELETE' })];\r\n        case 1: return [2 /*return*/, (_a.sent()).json()];\r\n    }\r\n}); }); };\r\n\n\n//# sourceURL=webpack://async-race/./src/ts/remove-car.ts?");

/***/ }),

/***/ "./src/ts/update-car.ts":
/*!******************************!*\
  !*** ./src/ts/update-car.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"update_car\": () => (/* binding */ update_car)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/ts/main.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nfunction update_car() {\r\n    var select_buttons = document.querySelectorAll('.select');\r\n    select_buttons.forEach(function (button) {\r\n        button.addEventListener('click', function () {\r\n            button.classList.toggle('btn_active');\r\n            var car = button.parentElement.parentElement;\r\n            var brand = car.children[0].children[2];\r\n            var car_color = car.children[1].children[2].children[0];\r\n            var id_svg = car_color.children[0].id;\r\n            var id = +car.id;\r\n            var update_btn = document.querySelector('.update_car');\r\n            update_btn.addEventListener('click', function () {\r\n                if (button.classList.contains('btn_active')) {\r\n                    var input_name = document.querySelector('#name-update');\r\n                    var input_color = document.querySelector('#color-update');\r\n                    var name_1 = input_name.value;\r\n                    var color = input_color.value;\r\n                    var body = void 0;\r\n                    if (name_1 !== '') {\r\n                        brand.innerHTML = name_1;\r\n                        body = { 'id': id,\r\n                            'name': name_1,\r\n                            'color': color };\r\n                    }\r\n                    else {\r\n                        body = { 'id': id,\r\n                            'name': brand.innerHTML,\r\n                            'color': color };\r\n                    }\r\n                    car_color.innerHTML = \"<symbol xml:space=\\\"preserve\\\" y=\\\"0\\\" x=\\\"0\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" fill=\\\"\".concat(color, \"\\\" id=\\\"\").concat(id_svg, \"\\\" version=\\\"1.1\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" viewBox=\\\"0 0 100 100\\\">\\n                        <g>\\n                        <path fill=\\\"#\").concat(color, \"\\\" d=\\\"M66 47.5c-.4-.5-5.1 0-5.7 0H22.9c-1.8 0-4.9.6-6.5 0 .8-2.5 3.4-3.9 5.7-5 6.5-3.1 13.3-5.7 20.3-7.6 10-2.8 16.1 2 22.5 11.1l1.1 1.5z\\\"></path>\\n                        <path fill=\\\"#333\\\" d=\\\"M62.3 46.2c-5.6-7.9-10.9-12.1-19.6-9.7-1.5.4-3 .9-4.5 1.4-.9.3-1.5 1.1-1.5 2l-.3 5.2c-.1 1.3 1 2.4 2.3 2.4h19.7c.5 0 4.7-.4 5 0l-1.1-1.3z\\\"></path>\\n                        <path fill=\\\"#333\\\" d=\\\"M25 43.2c-1.6.8-3.4 1.7-4.4 3.1-.4.6 0 1.4.7 1.4 1.4.1 3.1-.2 4.3-.2h8c.5 0 .9-.4.9-.9l.4-6.3c0-.7-.6-1.1-1.2-.9-3 1.2-5.9 2.4-8.7 3.8z\\\"></path>\\n                        <path fill=\\\"#\").concat(color, \"\\\" d=\\\"M89.4 54.1c-2.3-3.5-5.9-6.2-9.8-7.6-1.2-.4-2.5-.8-3.8-.9-11.8-.6-23.9 0-35.7 0h-23c-3 0-5.6 2.2-6.1 5.1 0 .1-.1.2-.1.3l-.5 3.8-.8 3.4c0 2.2 1.8 4 4 4H62.7c5.6 0 11.2.2 16.8 0 .6 0 1.2 0 1.8-.1 1.1 0 2.2-.1 3.2-.1 2.1-.1 6.5-.1 6.8-3 .1-.9-.2-1.8-.6-2.6-.4-.8-.8-1.6-1.3-2.3z\\\"></path>\\n                        <path fill=\\\"#e15b64\\\" d=\\\"M14.2 50.7H11c-.2 0-.3.1-.3.3l-.4 3.3c0 .2.1.5.3.5h3.6c.9 0 1.6-.8 1.6-1.8v-.5c-.1-1-.8-1.8-1.6-1.8z\\\"></path>\\n                        <path fill=\\\"#e0e0e0\\\" d=\\\"M87.9 51c-.2-.2-.5-.4-.8-.4h-3c-.8 0-1.4.5-1.4 1.1v1.5c0 .8.8 1.6 1.8 1.6h5c.6 0 .7-.5.4-1l-2-2.8z\\\"></path>\\n                        <path fill=\\\"#\").concat(color, \"\\\" d=\\\"M90.3 57.8H9.6s-.4 0-.4.4c0 2.4 1.7 4 4.1 4h77c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2z\\\"></path>\\n                        <g>\\n                            <circle fill=\\\"#fff\\\" r=\\\"7.3\\\" cy=\\\"57.2\\\" cx=\\\"25.3\\\"></circle>\\n                            <path fill=\\\"#333\\\" d=\\\"M25.3 51.3c3.2 0 5.8 2.6 5.8 5.8S28.5 63 25.3 63s-5.8-2.6-5.8-5.8 2.6-5.9 5.8-5.9m0-3c-4.9 0-8.8 3.9-8.8 8.8s3.9 8.8 8.8 8.8 8.8-3.9 8.8-8.8-4-8.8-8.8-8.8z\\\"></path>\\n                        </g>\\n                        <g>\\n                            <circle fill=\\\"#e6e6e6\\\" r=\\\"4\\\" cy=\\\"57.2\\\" cx=\\\"25.3\\\"></circle>\\n                        </g>\\n                        <g>\\n                            <circle fill=\\\"#fff\\\" r=\\\"7.3\\\" cy=\\\"57.2\\\" cx=\\\"71.9\\\"></circle>\\n                            <path fill=\\\"#333\\\" d=\\\"M71.9 51.3c3.2 0 5.8 2.6 5.8 5.8S75.1 63 71.9 63s-5.8-2.6-5.8-5.8 2.6-5.9 5.8-5.9m0-3c-4.9 0-8.8 3.9-8.8 8.8s3.9 8.8 8.8 8.8 8.8-3.9 8.8-8.8-3.9-8.8-8.8-8.8z\\\"></path>\\n                        </g>\\n                        <g>\\n                            <circle fill=\\\"#e6e6e6\\\" r=\\\"4\\\" cy=\\\"57.2\\\" cx=\\\"71.9\\\"></circle>\\n                        </g>\\n                        <path fill=\\\"#f8b26a\\\" d=\\\"M59.1 55.9H41c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h18c.8 0 1.5.7 1.5 1.5.1.8-.6 1.5-1.4 1.5z\\\"></path>\\n                        <path fill=\\\"#\").concat(color, \"\\\" d=\\\"M17 43l-7.2-.7c-1.1-.1-2-1-2.1-2.2l-.1-1.5c-.1-1 .9-1.8 1.9-1.5l10.2 3.3c0 1.5-1.3 2.7-2.7 2.6z\\\"></path>\\n                        <path d=\\\"M18.7 46.2l-2.9 2.5-4.9-8.1 1.9-1.6z\\\" fill=\\\"#\").concat(color, \"\\\"></path>\\n                        <metadata xmlnsD=\\\"https://loading.io/stock/\\\">\\n                            <d:name>sports car</d:name>\\n                            <d:tags>racer,coupe,supercar,vehicle,cab,auto,sports car,transportation</d:tags>\\n                            <d:license>by</d:license>\\n                            <d:slug>swsirj</d:slug>\\n                        </metadata>\\n                        </g>\\n                    </symbol>\");\r\n                    select_buttons.forEach(function (btn) {\r\n                        btn.classList.remove('btn_active');\r\n                    });\r\n                    update_car_api(id, body);\r\n                }\r\n            });\r\n        });\r\n    });\r\n}\r\nvar update_car_api = function (id, body) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, fetch(\"\".concat(_main__WEBPACK_IMPORTED_MODULE_0__.garage, \"/\").concat(id), {\r\n                    method: 'PUT',\r\n                    body: JSON.stringify(body),\r\n                    headers: {\r\n                        'Content-Type': 'application/json'\r\n                    },\r\n                })];\r\n            case 1: return [2 /*return*/, (_a.sent()).json()];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack://async-race/./src/ts/update-car.ts?");

/***/ }),

/***/ "./src/ts/winners.ts":
/*!***************************!*\
  !*** ./src/ts/winners.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataWinners\": () => (/* binding */ dataWinners),\n/* harmony export */   \"get_winners\": () => (/* binding */ get_winners)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/ts/main.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nvar dataWinners = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var response, data;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, fetch(\"\".concat(_main__WEBPACK_IMPORTED_MODULE_0__.winners))];\r\n            case 1:\r\n                response = _a.sent();\r\n                return [4 /*yield*/, response.json()];\r\n            case 2:\r\n                data = (_a.sent());\r\n                return [2 /*return*/, data];\r\n        }\r\n    });\r\n}); };\r\nfunction get_winners(page) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        function toggle_up_win() {\r\n            return __awaiter(this, void 0, void 0, function () {\r\n                var num, cars_num, img_up, img_down;\r\n                return __generator(this, function (_a) {\r\n                    switch (_a.label) {\r\n                        case 0:\r\n                            win.classList.toggle('time-up');\r\n                            num = +page_number.innerHTML;\r\n                            return [4 /*yield*/, dataCars(num)];\r\n                        case 1:\r\n                            cars_num = _a.sent();\r\n                            if (win.classList.contains('time-up')) {\r\n                                createTable(cars_num);\r\n                                img_up = document.querySelector('#up-win');\r\n                                img_up.style.display = 'flex';\r\n                            }\r\n                            else {\r\n                                createTable(cars_num);\r\n                                img_down = document.querySelector('#down-win');\r\n                                img_down.style.display = 'flex';\r\n                            }\r\n                            return [2 /*return*/];\r\n                    }\r\n                });\r\n            });\r\n        }\r\n        function toggle_up() {\r\n            return __awaiter(this, void 0, void 0, function () {\r\n                var num, cars_num, img_up, img_down;\r\n                return __generator(this, function (_a) {\r\n                    switch (_a.label) {\r\n                        case 0:\r\n                            time.classList.toggle('time-up');\r\n                            num = +page_number.innerHTML;\r\n                            return [4 /*yield*/, dataCars(num)];\r\n                        case 1:\r\n                            cars_num = _a.sent();\r\n                            if (time.classList.contains('time-up')) {\r\n                                cars_num.sort(function (a, b) {\r\n                                    if (a.time > b.time) {\r\n                                        return 1;\r\n                                    }\r\n                                    if (a.time < b.time) {\r\n                                        return -1;\r\n                                    }\r\n                                    return 0;\r\n                                });\r\n                                createTable(cars_num);\r\n                                img_up = document.querySelector('#up');\r\n                                img_up.style.display = 'flex';\r\n                            }\r\n                            else {\r\n                                cars_num.sort(function (a, b) {\r\n                                    if (a.time < b.time) {\r\n                                        return 1;\r\n                                    }\r\n                                    if (a.time > b.time) {\r\n                                        return -1;\r\n                                    }\r\n                                    return 0;\r\n                                });\r\n                                createTable(cars_num);\r\n                                img_down = document.querySelector('#down');\r\n                                img_down.style.display = 'flex';\r\n                            }\r\n                            return [2 /*return*/];\r\n                    }\r\n                });\r\n            });\r\n        }\r\n        var dataCars, cars, winners_data, title, next, prev, page_number, counter, time, win;\r\n        var _this = this;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    dataCars = function (page, limit) {\r\n                        if (limit === void 0) { limit = 10; }\r\n                        return __awaiter(_this, void 0, void 0, function () {\r\n                            var response, data;\r\n                            return __generator(this, function (_a) {\r\n                                switch (_a.label) {\r\n                                    case 0: return [4 /*yield*/, fetch(\"\".concat(_main__WEBPACK_IMPORTED_MODULE_0__.winners, \"?_page=\").concat(page, \"&_limit=\").concat(limit))];\r\n                                    case 1:\r\n                                        response = _a.sent();\r\n                                        return [4 /*yield*/, response.json()];\r\n                                    case 2:\r\n                                        data = (_a.sent());\r\n                                        return [2 /*return*/, data];\r\n                                }\r\n                            });\r\n                        });\r\n                    };\r\n                    return [4 /*yield*/, dataCars(page)];\r\n                case 1:\r\n                    cars = _a.sent();\r\n                    createTable(cars);\r\n                    return [4 /*yield*/, dataWinners()];\r\n                case 2:\r\n                    winners_data = _a.sent();\r\n                    title = document.querySelector('.winners__title h1');\r\n                    title.innerHTML = \"Winners (\".concat(winners_data.length, \")\");\r\n                    next = document.querySelector('#right');\r\n                    prev = document.querySelector('#left');\r\n                    page_number = document.querySelector('#page-number');\r\n                    if (winners_data.length > 10) {\r\n                        if (next.disabled = true) {\r\n                            next.disabled = false;\r\n                        }\r\n                    }\r\n                    counter = 1;\r\n                    next.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {\r\n                        var cars2;\r\n                        return __generator(this, function (_a) {\r\n                            switch (_a.label) {\r\n                                case 0:\r\n                                    prev.disabled = false;\r\n                                    counter++;\r\n                                    page_number.innerHTML = \"\".concat(counter);\r\n                                    return [4 /*yield*/, dataCars(counter)];\r\n                                case 1:\r\n                                    cars2 = _a.sent();\r\n                                    createTable(cars2);\r\n                                    if (cars2.length <= 10) {\r\n                                        next.disabled = true;\r\n                                    }\r\n                                    return [2 /*return*/];\r\n                            }\r\n                        });\r\n                    }); });\r\n                    prev.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {\r\n                        var cars2;\r\n                        return __generator(this, function (_a) {\r\n                            switch (_a.label) {\r\n                                case 0:\r\n                                    next.disabled = false;\r\n                                    counter--;\r\n                                    page_number.innerHTML = \"\".concat(counter);\r\n                                    return [4 /*yield*/, dataCars(counter)];\r\n                                case 1:\r\n                                    cars2 = _a.sent();\r\n                                    createTable(cars2);\r\n                                    if (counter === 1) {\r\n                                        prev.disabled = true;\r\n                                    }\r\n                                    return [2 /*return*/];\r\n                            }\r\n                        });\r\n                    }); });\r\n                    time = document.querySelector('#time');\r\n                    win = document.querySelector('#wins');\r\n                    window.toggle_up = toggle_up;\r\n                    window.toggle_up_win = toggle_up_win;\r\n                    return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\nfunction createTable(cars) {\r\n    var table = document.querySelector('.table');\r\n    table.innerHTML = \"<tr class = 'header-table'>\\n        <th>N</th><th>Winner</th><th id='wins' onclick='toggle_up_win()'><p>win</p><img id='up-win' src='up.png'><img id='down-win'src='down.png'><th id='time' onclick='toggle_up()'><p>Time</p><img id='up' src='up.png'><img id='down'src='down.png'></th>\\n       </tr>\";\r\n    for (var i = 0; i < cars.length; i++) {\r\n        var car = cars[i];\r\n        var row = \"<tr class = 'row'>\\n        <td>\".concat(i + 1, \"</td><td>\").concat(car.name, \"</td><td>\").concat(car.wins, \"</td><td class='time'>\").concat(car.time, \"</td>\\n       </tr>\");\r\n        table.innerHTML += row;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://async-race/./src/ts/winners.ts?");

/***/ }),

/***/ "./src/assets/banner.png":
/*!*******************************!*\
  !*** ./src/assets/banner.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e4a7ffb25e9f85754074.png\";\n\n//# sourceURL=webpack://async-race/./src/assets/banner.png?");

/***/ }),

/***/ "./src/assets/winner.png":
/*!*******************************!*\
  !*** ./src/assets/winner.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"827d4a7422a2f68872e3.png\";\n\n//# sourceURL=webpack://async-race/./src/assets/winner.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("d521946cbe03ba91a5e9")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "async-race:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateasync_race"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;