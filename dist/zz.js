/*!
 * zz v0.0.0-alpha.3
 * (c) 2020 Jyunzn
 * Released under the MIT License
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("zz", [], factory);
	else if(typeof exports === 'object')
		exports["zz"] = factory();
	else
		root["zz"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _arrayLikeToArray
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _arrayWithoutHoles
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");
;
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _construct
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
;

function _construct(Parent, args, Class) {
  if ((0,_babel_runtime_helpers_esm_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__.default)()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__.default)(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _defineProperty
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _isNativeReflectConstruct
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _iterableToArray
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _nonIterableSpread
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _setPrototypeOf
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _toConsumableArray
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");
;



function _toConsumableArray(arr) {
  return (0,_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _unsupportedIterableToArray
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");
;
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./src/zz/assembly.js":
/*!****************************!*\
  !*** ./src/zz/assembly.js ***!
  \****************************/
/*! namespace exports */
/*! export assyContent [provided] [no usage info] [missing usage info prevents renaming] */
/*! export assyDoms [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assyContent": () => /* binding */ assyContent,
/* harmony export */   "assyDoms": () => /* binding */ assyDoms
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/zz/utils/index.js");
;


function assyHeader(_ref, ymPos) {
  var mHD = _ref.mHD,
      yD = _ref.yD,
      mD = _ref.mD;

  if (ymPos === 'ym') {
    yD && mHD.appendChild(yD);
    mD && mHD.appendChild(mD);
  } else if (ymPos === 'my') {
    mD && mHD.appendChild(mD);
    yD && mHD.appendChild(yD);
  }

  return mHD;
}

function assyContent(_ref2) {
  var mCD = _ref2.mCD,
      wDs = _ref2.wDs,
      wMD = _ref2.wMD,
      empFDDs = _ref2.empFDDs,
      empBDDs = _ref2.empBDDs,
      dDs = _ref2.dDs;
  wMD && mCD.appendChild(wMD);
  var dDoms = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(empFDDs), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(dDs), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(empBDDs));
  var j = -1;

  for (var i = 0; i < dDoms.length; i++) {
    if (i % 7 === 0) {
      j++;
    }

    wDs[j].appendChild(dDoms[i]);
  }

  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parentAppendChildren)(mCD, wDs);
  return mCD;
}

function assyWrap(_ref3) {
  var mWD = _ref3.mWD,
      header = _ref3.header,
      content = _ref3.content;
  mWD.appendChild(header);
  mWD.appendChild(content);
  return mWD;
}
/**
 * @description assembly year month doms
 */


function assyYMD(ymDs, ymCD, opts) {
  var ymPos = opts.ymPos;

  for (var y in ymDs) {
    var ms = ymDs[y];

    for (var m in ms) {
      var mInfo = ms[m];
      var mWD = mInfo.mWD,
          mHD = mInfo.mHD,
          mCD = mInfo.mCD,
          yD = mInfo.yD,
          mD = mInfo.mD,
          wDs = mInfo.wDs,
          wMD = mInfo.wMD,
          empFDDs = mInfo.empFDDs,
          empBDDs = mInfo.empBDDs,
          dDs = mInfo.dDs;
      var header = assyHeader({
        mHD: mHD,
        yD: yD,
        mD: mD
      }, ymPos);
      var content = assyContent({
        mCD: mCD,
        wDs: wDs,
        wMD: wMD,
        empFDDs: empFDDs,
        empBDDs: empBDDs,
        dDs: dDs
      });
      var mDom = assyWrap({
        mWD: mWD,
        header: header,
        content: content
      });
      ymCD.appendChild(mDom);
    }
  }

  return ymCD;
}

function assyIntegrDom(doms) {
  var fg = document.createDocumentFragment();
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.parentAppendChildren)(fg, doms);
  return fg;
}

function assyDoms(doms, opts) {
  var ymDs = doms.ymDs,
      ymCD = doms.ymCD,
      swBtnDs = doms.swBtnDs;
  var integrYMD = assyYMD(ymDs, ymCD, opts);
  !swBtnDs && (swBtnDs = []);
  return assyIntegrDom([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(swBtnDs), [integrYMD]));
}

/***/ }),

/***/ "./src/zz/calendar.js":
/*!****************************!*\
  !*** ./src/zz/calendar.js ***!
  \****************************/
/*! namespace exports */
/*! export calendar [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calendar": () => /* binding */ calendar
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/zz/init/index.js");
/* harmony import */ var _assembly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assembly */ "./src/zz/assembly.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/zz/utils/index.js");
;



function mount(selector, app) {
  var container = document.querySelector(selector);
  container.appendChild(app);
  return container;
}

function unmount(parent) {
  parent.textContent = '';
}

function calendar(options, cbs) {
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.initCallback)(options, cbs, true);
  var opts = (0,_init__WEBPACK_IMPORTED_MODULE_0__.initOptions)(options);
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.callCallbacks)(cbs.onBeforeCreate, null, opts);
  var ymData = (0,_init__WEBPACK_IMPORTED_MODULE_0__.initYMData)(opts);
  var pointers = (0,_init__WEBPACK_IMPORTED_MODULE_0__.initPointers)(ymData.ymCache);
  var doms = (0,_init__WEBPACK_IMPORTED_MODULE_0__.initDoms)(opts, ymData.ymCache);
  var integrFg = (0,_assembly__WEBPACK_IMPORTED_MODULE_1__.assyDoms)(doms, opts);
  (0,_init__WEBPACK_IMPORTED_MODULE_0__.initEvent)(doms, opts, ymData, pointers, cbs);
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.callCallbacks)(cbs.onCreated, null, {
    opts: opts,
    ymData: ymData,
    pointers: pointers,
    doms: doms
  });
  return {
    opts: opts,
    ymData: ymData,
    pointers: pointers,
    doms: doms,
    integrFg: integrFg,
    mount: mount,
    unmount: unmount
  };
}

/***/ }),

/***/ "./src/zz/global.js":
/*!**************************!*\
  !*** ./src/zz/global.js ***!
  \**************************/
/*! namespace exports */
/*! export mixin [provided] [no usage info] [missing usage info prevents renaming] */
/*! export use [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "use": () => /* binding */ use,
/* harmony export */   "mixin": () => /* binding */ mixin
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/zz/utils/index.js");
;
function use(plugin, plugins) {
  if (((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObj)(plugin) || (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isFunc)(plugin)) && !plugins.includes(plugin)) {
    var install = plugin.install;

    if (install && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isFunc)(install)) {
      plugins.push(plugin);
    }
  }
}
function mixin(cbObj, mixins) {
  cbObj && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isObj)(cbObj) && mixins.push(cbObj);
}

/***/ }),

/***/ "./src/zz/index.js":
/*!*************************!*\
  !*** ./src/zz/index.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [used in main] [usage prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ zz
/* harmony export */ });
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "./src/zz/calendar.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/zz/utils/index.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./src/zz/init/index.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global */ "./src/zz/global.js");
;



var plugins = [];
var mixins = [];
function zz(option) {
  option = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.isObj)(option) ? option : {};

  if (plugins) {
    for (var i = 0; i < plugins.length; i++) {
      var plugin = plugins[i];
      plugin.install.call(null, zz);
    }

    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gcArr)(plugins);
    plugins = null;
  }

  var cbs = (0,_init__WEBPACK_IMPORTED_MODULE_2__.initCbs)(mixins);
  var app = (0,_calendar__WEBPACK_IMPORTED_MODULE_0__.calendar)(option, cbs);
  var _app = app,
      mount = _app.mount,
      unmount = _app.unmount;
  var parent;

  app.mount = function (select) {
    var _app2 = app,
        opts = _app2.opts,
        ymData = _app2.ymData,
        pointers = _app2.pointers,
        doms = _app2.doms,
        integrFg = _app2.integrFg;
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.callCallbacks)(cbs.onBeforeMount, null, {
      opts: opts,
      ymData: ymData,
      pointers: pointers,
      doms: doms
    });
    parent = mount(select, integrFg);
    delete app.integrFg;
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.callCallbacks)(cbs.onMounted, null, {
      opts: opts,
      ymData: ymData,
      pointers: pointers,
      doms: doms
    });
    return app;
  };

  app.unmount = function () {
    var _app3 = app,
        opts = _app3.opts,
        ymData = _app3.ymData,
        pointers = _app3.pointers,
        doms = _app3.doms;
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.callCallbacks)(cbs.onBeforeUnmount, null, {
      opts: opts,
      ymData: ymData,
      pointers: pointers,
      doms: doms
    });
    unmount(parent);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.callCallbacks)(cbs.onUnmounted, null);
    parent = null;
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gcObj)(cbs);
    cbs = null;
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.gcObj)(app);
    app = null;
    mount = null;
    unmount = null;
    return app;
  };

  return app;
}

zz.use = function (plugin) {
  return (0,_global__WEBPACK_IMPORTED_MODULE_3__.use)(plugin, plugins);
};

zz.mixin = function (cb) {
  return (0,_global__WEBPACK_IMPORTED_MODULE_3__.mixin)(cb, mixins);
};

/***/ }),

/***/ "./src/zz/init/index.js":
/*!******************************!*\
  !*** ./src/zz/init/index.js ***!
  \******************************/
/*! namespace exports */
/*! export getCache [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initYMData.js .getCache */
/*! export handleContentWeeksClass [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .handleContentWeeksClass */
/*! export initCbs [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initCbs.js .initCbs */
/*! export initDDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initDDoms */
/*! export initDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/index.js .initDoms */
/*! export initEmptyBDDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initEmptyBDDoms */
/*! export initEmptyFDDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initEmptyFDDoms */
/*! export initEvent [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initEvent.js .initEvent */
/*! export initO1CNDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initO1CNDoms */
/*! export initO1EmptyDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initO1EmptyDoms */
/*! export initOnCNDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initOnCNDoms */
/*! export initOnEmptyDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initOnEmptyDoms */
/*! export initOptions [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initOptions/index.js .initOptions */
/*! export initPointers [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initPointers.js .initPointers */
/*! export initWDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initWDoms */
/*! export initYMContainer [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initYMContainer */
/*! export initYMData [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initYMData.js .initYMData */
/*! export initYMDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initYMDoms */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initOptions": () => /* reexport safe */ _initOptions__WEBPACK_IMPORTED_MODULE_0__.initOptions,
/* harmony export */   "getCache": () => /* reexport safe */ _initYMData__WEBPACK_IMPORTED_MODULE_1__.getCache,
/* harmony export */   "initYMData": () => /* reexport safe */ _initYMData__WEBPACK_IMPORTED_MODULE_1__.initYMData,
/* harmony export */   "handleContentWeeksClass": () => /* reexport safe */ _initDoms__WEBPACK_IMPORTED_MODULE_2__.handleContentWeeksClass,
/* harmony export */   "initDDoms": () => /* reexport safe */ _initDoms__WEBPACK_IMPORTED_MODULE_2__.initDDoms,
/* harmony export */   "initDoms": () => /* reexport safe */ _initDoms__WEBPACK_IMPORTED_MODULE_2__.initDoms,
/* harmony export */   "initEmptyBDDoms": () => /* reexport safe */ _initDoms__WEBPACK_IMPORTED_MODULE_2__.initEmptyBDDoms,
/* harmony export */   "initEmptyFDDoms": () => /* reexport safe */ _initDoms__WEBPACK_IMPORTED_MODULE_2__.initEmptyFDDoms,
/* harmony export */   "initO1CNDoms": () => /* reexport safe */ _initDoms__WEBPACK_IMPORTED_MODULE_2__.initO1CNDoms,
/* harmony export */   "initO1EmptyDoms": () => /* reexport safe */ _initDoms__WEBPACK_IMPORTED_MODULE_2__.initO1EmptyDoms,
/* harmony export */   "initOnCNDoms": () => /* reexport safe */ _initDoms__WEBPACK_IMPORTED_MODULE_2__.initOnCNDoms,
/* harmony export */   "initOnEmptyDoms": () => /* reexport safe */ _initDoms__WEBPACK_IMPORTED_MODULE_2__.initOnEmptyDoms,
/* harmony export */   "initWDoms": () => /* reexport safe */ _initDoms__WEBPACK_IMPORTED_MODULE_2__.initWDoms,
/* harmony export */   "initYMContainer": () => /* reexport safe */ _initDoms__WEBPACK_IMPORTED_MODULE_2__.initYMContainer,
/* harmony export */   "initYMDoms": () => /* reexport safe */ _initDoms__WEBPACK_IMPORTED_MODULE_2__.initYMDoms,
/* harmony export */   "initPointers": () => /* reexport safe */ _initPointers__WEBPACK_IMPORTED_MODULE_3__.initPointers,
/* harmony export */   "initEvent": () => /* reexport safe */ _initEvent__WEBPACK_IMPORTED_MODULE_4__.initEvent,
/* harmony export */   "initCbs": () => /* reexport safe */ _initCbs__WEBPACK_IMPORTED_MODULE_5__.initCbs
/* harmony export */ });
/* harmony import */ var _initOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initOptions */ "./src/zz/init/initOptions/index.js");
/* harmony import */ var _initYMData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initYMData */ "./src/zz/init/initYMData.js");
/* harmony import */ var _initDoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initDoms */ "./src/zz/init/initDoms/index.js");
/* harmony import */ var _initPointers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initPointers */ "./src/zz/init/initPointers.js");
/* harmony import */ var _initEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initEvent */ "./src/zz/init/initEvent.js");
/* harmony import */ var _initCbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initCbs */ "./src/zz/init/initCbs.js");







/***/ }),

/***/ "./src/zz/init/initCbs.js":
/*!********************************!*\
  !*** ./src/zz/init/initCbs.js ***!
  \********************************/
/*! namespace exports */
/*! export initCbs [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initCbs": () => /* binding */ initCbs
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/zz/utils/index.js");
;

function getDefaultCbs() {
  return {
    onPreved: [],
    onNexted: [],
    onBeforeDomBeReset: [],
    onDomBeReseted: [],
    onBeforeDomBeAssyAtResetDom: [],
    onDomBeAssyAtResetDom: [],
    onBeforeCreate: [],
    onCreated: [],
    onBeforeMount: [],
    onMounted: [],
    onBeforeUnmount: [],
    onUnmounted: []
  };
}

function initCbs(cbObjs) {
  var cbs = getDefaultCbs();

  for (var i = 0; i < cbObjs.length; i++) {
    var cbObj = cbObjs[i];
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.initCallback)(cbObj, cbs);
  }

  return cbs;
}

/***/ }),

/***/ "./src/zz/init/initDoms/index.js":
/*!***************************************!*\
  !*** ./src/zz/init/initDoms/index.js ***!
  \***************************************/
/*! namespace exports */
/*! export handleContentWeeksClass [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .handleContentWeeksClass */
/*! export initDDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initDDoms */
/*! export initDoms [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initEmptyBDDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initEmptyBDDoms */
/*! export initEmptyFDDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initEmptyFDDoms */
/*! export initO1CNDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initO1CNDoms */
/*! export initO1EmptyDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initO1EmptyDoms */
/*! export initOnCNDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initOnCNDoms */
/*! export initOnEmptyDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initOnEmptyDoms */
/*! export initWDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initWDoms */
/*! export initYMContainer [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initYMContainer */
/*! export initYMDoms [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/init/initDoms/initYMDoms.js .initYMDoms */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleContentWeeksClass": () => /* reexport safe */ _initYMDoms__WEBPACK_IMPORTED_MODULE_0__.handleContentWeeksClass,
/* harmony export */   "initDDoms": () => /* reexport safe */ _initYMDoms__WEBPACK_IMPORTED_MODULE_0__.initDDoms,
/* harmony export */   "initEmptyBDDoms": () => /* reexport safe */ _initYMDoms__WEBPACK_IMPORTED_MODULE_0__.initEmptyBDDoms,
/* harmony export */   "initEmptyFDDoms": () => /* reexport safe */ _initYMDoms__WEBPACK_IMPORTED_MODULE_0__.initEmptyFDDoms,
/* harmony export */   "initO1CNDoms": () => /* reexport safe */ _initYMDoms__WEBPACK_IMPORTED_MODULE_0__.initO1CNDoms,
/* harmony export */   "initO1EmptyDoms": () => /* reexport safe */ _initYMDoms__WEBPACK_IMPORTED_MODULE_0__.initO1EmptyDoms,
/* harmony export */   "initOnCNDoms": () => /* reexport safe */ _initYMDoms__WEBPACK_IMPORTED_MODULE_0__.initOnCNDoms,
/* harmony export */   "initOnEmptyDoms": () => /* reexport safe */ _initYMDoms__WEBPACK_IMPORTED_MODULE_0__.initOnEmptyDoms,
/* harmony export */   "initWDoms": () => /* reexport safe */ _initYMDoms__WEBPACK_IMPORTED_MODULE_0__.initWDoms,
/* harmony export */   "initYMContainer": () => /* reexport safe */ _initYMDoms__WEBPACK_IMPORTED_MODULE_0__.initYMContainer,
/* harmony export */   "initYMDoms": () => /* reexport safe */ _initYMDoms__WEBPACK_IMPORTED_MODULE_0__.initYMDoms,
/* harmony export */   "initDoms": () => /* binding */ initDoms
/* harmony export */ });
/* harmony import */ var _initYMDoms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initYMDoms */ "./src/zz/init/initDoms/initYMDoms.js");
/* harmony import */ var _initSwBtnDoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initSwBtnDoms */ "./src/zz/init/initDoms/initSwBtnDoms.js");
;


function initDoms(opts, mCache) {
  var ymDs = (0,_initYMDoms__WEBPACK_IMPORTED_MODULE_0__.initYMDoms)(opts, mCache);
  var ymCD = (0,_initYMDoms__WEBPACK_IMPORTED_MODULE_0__.initYMContainer)(opts);
  var swBtnDs = (0,_initSwBtnDoms__WEBPACK_IMPORTED_MODULE_1__.initSwBtnDoms)(opts);
  return {
    ymDs: ymDs,
    ymCD: ymCD,
    swBtnDs: swBtnDs
  };
}

/***/ }),

/***/ "./src/zz/init/initDoms/initSwBtnDoms.js":
/*!***********************************************!*\
  !*** ./src/zz/init/initDoms/initSwBtnDoms.js ***!
  \***********************************************/
/*! namespace exports */
/*! export initSwBtnDoms [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initSwBtnDoms": () => /* binding */ initSwBtnDoms
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/zz/utils/index.js");
;


function createEl(tag, attrs, children) {
  var parent = document.createElement(tag);

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isObj)(attrs)) {
    for (var key in attrs) {
      if (key === 'style') {
        var oStyle = attrs[key];

        if (typeof oStyle === 'string') {
          parent.setAttribute('style', oStyle);
        } else if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isObj)(oStyle)) {
          for (var key_s in oStyle) {
            parent.style[key_s] = oStyle[key_s];
          }
        }
      } else if (key !== 'direct' || key !== 'step') {
        parent.setAttribute(key, attrs[key]);
      }
    }
  } // eslint-disable-next-line


  handleChildren(children, parent);
  return parent;
}

function handleChildren(elem, parent) {
  if (typeof elem === 'string') return parent.appendChild(document.createTextNode(elem));

  for (var i = 0; i < elem.length; i++) {
    var el = elem[i];

    if (typeof el === 'string') {
      parent.appendChild(document.createTextNode(el));
    } else {
      parent.appendChild(createEl.apply(void 0, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(el)));
    }
  }
}

function initSwBtnDoms(opts) {
  var swBtns = opts.swBtns;
  if (swBtns === null) return null;
  var els = [];

  for (var i = 0; i < swBtns.length; i++) {
    var btnSet = swBtns[i];
    var el = createEl.apply(void 0, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(btnSet));
    els.push(el);
  }

  return els;
}

/***/ }),

/***/ "./src/zz/init/initDoms/initYMDoms.js":
/*!********************************************!*\
  !*** ./src/zz/init/initDoms/initYMDoms.js ***!
  \********************************************/
/*! namespace exports */
/*! export handleContentWeeksClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initDDoms [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initEmptyBDDoms [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initEmptyFDDoms [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initO1CNDoms [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initO1EmptyDoms [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initOnCNDoms [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initOnEmptyDoms [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initWDoms [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initYMContainer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initYMDoms [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initO1EmptyDoms": () => /* binding */ initO1EmptyDoms,
/* harmony export */   "initOnEmptyDoms": () => /* binding */ initOnEmptyDoms,
/* harmony export */   "initO1CNDoms": () => /* binding */ initO1CNDoms,
/* harmony export */   "initOnCNDoms": () => /* binding */ initOnCNDoms,
/* harmony export */   "handleContentWeeksClass": () => /* binding */ handleContentWeeksClass,
/* harmony export */   "initWDoms": () => /* binding */ initWDoms,
/* harmony export */   "initEmptyFDDoms": () => /* binding */ initEmptyFDDoms,
/* harmony export */   "initEmptyBDDoms": () => /* binding */ initEmptyBDDoms,
/* harmony export */   "initDDoms": () => /* binding */ initDDoms,
/* harmony export */   "initYMDoms": () => /* binding */ initYMDoms,
/* harmony export */   "initYMContainer": () => /* binding */ initYMContainer
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/zz/utils/index.js");
;
 // init O1 Empty Doms

function initO1EmptyDoms(start, end, tag, cls) {
  var doms = [];

  for (var i = start; i <= end; i++) {
    var dom = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDom)(tag, '', cls);
    doms.push(dom);
  }

  return doms;
} // init On Empty Doms

function initOnEmptyDoms(start, end, tag, count, baseCls, classes) {
  var doms = [];

  for (var i = start; i <= end; i++) {
    var interval = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.judgeInterval)(i, count);
    var sCls = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getClassByInterval)(interval, classes);
    var dom = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDom)(tag, '', [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(baseCls), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(sCls)));
    doms.push(dom);
  }

  return doms;
} // init O1 Content Number Doms

function initO1CNDoms(start, end, tag, cls) {
  var doms = [];

  for (var i = start; i <= end; i++) {
    var dom = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDom)(tag, i, cls);
    doms.push(dom);
  }

  return doms;
} // init On Content Number Doms

function initOnCNDoms(start, end, tag, dStatus, baseCls, classes) {
  var doms = [];

  for (var i = start; i <= end; i++) {
    var interval = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.judgeInterval)(i, dStatus);
    var sCls = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getClassByInterval)(interval, classes);
    var dom = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDom)(tag, i, [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(baseCls), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(sCls)));
    doms.push(dom);
  }

  return doms;
} // Month' Container

function initMWrapDom(opts) {
  var cls_monthWrap = opts.cls_monthWrap,
      tag_monthWrap = opts.tag_monthWrap;
  return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDom)(tag_monthWrap, '', cls_monthWrap);
} // Month' Header Container


function initMHeaderDom(opts) {
  var cls_monthHeader = opts.cls_monthHeader,
      tag_monthHeader = opts.tag_monthHeader;
  return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDom)(tag_monthHeader, '', cls_monthHeader);
}

function handleContentWeeksClass(weeks, classes) {
  if (weeks === 6) {
    return classes[2];
  } else if (weeks === 5) {
    return classes[1];
  } else if (weeks === 4) {
    return classes[0];
  }
} // Month's Content Container

function initMContentDom(weeks, opts, ym) {
  var cls_monthContent = opts.cls_monthContent,
      cls_w4Content = opts.cls_w4Content,
      cls_w5Content = opts.cls_w5Content,
      cls_w6Content = opts.cls_w6Content,
      tag_monthContent = opts.tag_monthContent;
  var classes = [cls_w4Content, cls_w5Content, cls_w6Content];
  var sCls = handleContentWeeksClass(weeks, classes);
  var mCD = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDom)(tag_monthContent, '', [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(cls_monthContent), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(sCls)));
  mCD.$_ym = ym;
  return mCD;
} // Year


function initYDom(year, ymStatus, opts) {
  var yNames = opts.yNames,
      tag_year = opts.tag_year,
      cls_year = opts.cls_year,
      cls_passYear = opts.cls_passYear,
      cls_curYear = opts.cls_curYear,
      cls_unPassYear = opts.cls_unPassYear;
  var yStatus = ymStatus.yStatus;
  var classes = [cls_passYear, cls_curYear, cls_unPassYear];
  var sCls = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getClassByInterval)(yStatus, classes);
  var yname = yNames && yNames[year] || year;
  return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDom)(tag_year, yname, [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(cls_year), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(sCls)));
} // Month


function initMDom(month, ymStatus, opts) {
  var mNames = opts.mNames,
      tag_month = opts.tag_month,
      cls_month = opts.cls_month,
      cls_passMonth = opts.cls_passMonth,
      cls_curMonth = opts.cls_curMonth,
      cls_unPassMonth = opts.cls_unPassMonth;
  var mStatus = ymStatus.mStatus;
  var classes = [cls_passMonth, cls_curMonth, cls_unPassMonth];
  var sCls = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getClassByInterval)(mStatus, classes);
  var mname = mNames[month];
  return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDom)(tag_month, mname, [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(cls_month), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(sCls)));
} // Week


function initWDoms(start, end, ymStatus, opts) {
  var tag_week = opts.tag_week,
      cls_week = opts.cls_week,
      cls_passWeek = opts.cls_passWeek,
      cls_curWeek = opts.cls_curWeek,
      cls_unPassWeek = opts.cls_unPassWeek;
  var mStatus = ymStatus.mStatus,
      wStatus = ymStatus.wStatus;
  var wDoms;

  if (mStatus === 0) {
    var classes = [cls_passWeek, cls_curWeek, cls_unPassWeek];
    wDoms = initOnEmptyDoms(start, end, tag_week, wStatus, cls_week, classes);
  } else {
    var sCls = mStatus === 1 ? cls_unPassWeek : cls_passWeek;
    wDoms = initO1EmptyDoms(start, end, tag_week, [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(cls_week), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(sCls)));
  }

  return wDoms;
} // WeekMark

var wmInnerHTML;

function initWMDom(opts) {
  var cls_weekMark = opts.cls_weekMark,
      cls_weekMarkWrap = opts.cls_weekMarkWrap,
      wMarks = opts.wMarks,
      tag_weekMarkWrap = opts.tag_weekMarkWrap,
      tag_weekMark = opts.tag_weekMark;
  var wMWD = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDom)(tag_weekMarkWrap, '', cls_weekMarkWrap);

  if (wmInnerHTML) {
    wMWD.innerHTML = wmInnerHTML;
  } else {
    var sun = wMarks.sun,
        mon = wMarks.mon,
        tue = wMarks.tue,
        wed = wMarks.wed,
        thu = wMarks.thu,
        fri = wMarks.fri,
        sat = wMarks.sat;
    var markContents = [sun, mon, tue, wed, thu, fri, sat];

    for (var i = 0; i < markContents.length; i++) {
      var content = markContents[i];
      var wMD = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDom)(tag_weekMark, content, cls_weekMark);
      wMWD.appendChild(wMD);
    }

    wmInnerHTML = wMWD.innerHTML;
  }

  return wMWD;
} // empty position in front of months


function initEmptyFDDoms(fd, yms, opts) {
  var tag_empFDate = opts.tag_empFDate,
      cls_empFDate = opts.cls_empFDate,
      cls_passEmpFDate = opts.cls_passEmpFDate,
      cls_unPassEmpFDate = opts.cls_unPassEmpFDate;
  var mStatus = yms.mStatus;
  var sCls = mStatus <= 0 ? cls_passEmpFDate : cls_unPassEmpFDate;
  return initO1EmptyDoms(1, fd, tag_empFDate, [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(cls_empFDate), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(sCls)));
} // empty position behind months

function initEmptyBDDoms(ld, yms, opts) {
  var tag_empBDate = opts.tag_empBDate,
      cls_empBDate = opts.cls_empBDate,
      cls_passEmpBDate = opts.cls_passEmpBDate,
      cls_unPassEmpBDate = opts.cls_unPassEmpBDate;
  var mStatus = yms.mStatus;
  var sCls = mStatus < 0 ? cls_passEmpBDate : cls_unPassEmpBDate;
  return initO1EmptyDoms(1, 6 - ld, tag_empBDate, [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(cls_empBDate), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(sCls)));
} // date

function initDDoms(start, end, yms, opts) {
  var tag_date = opts.tag_date,
      cls_date = opts.cls_date,
      cls_passDate = opts.cls_passDate,
      cls_curDate = opts.cls_curDate,
      cls_unPassDate = opts.cls_unPassDate;
  var mStatus = yms.mStatus,
      dStatus = yms.dStatus;
  var dDoms;

  if (mStatus === 0) {
    var classes = [cls_passDate, cls_curDate, cls_unPassDate];
    dDoms = initOnCNDoms(start, end, tag_date, dStatus, cls_date, classes);
  } else {
    var sCls = mStatus === 1 ? cls_unPassDate : cls_passDate;
    var cls = [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(cls_date), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(sCls));
    dDoms = initO1CNDoms(start, end, tag_date, cls);
  }

  return dDoms;
} // garbage collection

function gc() {
  wmInnerHTML = null;
}

function initYMDom(year, month, mInfo, opts) {
  var firstDay = mInfo.firstDay,
      lastDay = mInfo.lastDay,
      days = mInfo.days,
      weeks = mInfo.weeks,
      ymStatus = mInfo.ymStatus;
  var ignore = opts.ignore;
  var yD = null;
  var mWD = initMWrapDom(opts);
  var mHD = initMHeaderDom(opts);
  var mCD = initMContentDom(weeks, opts, {
    year: year,
    month: month
  });

  if (!ignore || !ignore.includes('y')) {
    yD = initYDom(year, ymStatus, opts);
  }

  var mD = initMDom(month, ymStatus, opts);
  var wDs = initWDoms(1, weeks, ymStatus, opts);
  var wMD = initWMDom(opts);
  var empFDDs = initEmptyFDDoms(firstDay, ymStatus, opts);
  var empBDDs = initEmptyBDDoms(lastDay, ymStatus, opts);
  var dDs = initDDoms(1, days, ymStatus, opts);
  gc();
  return {
    mWD: mWD,
    mHD: mHD,
    mCD: mCD,
    yD: yD,
    mD: mD,
    wDs: wDs,
    wMD: wMD,
    empFDDs: empFDDs,
    empBDDs: empBDDs,
    dDs: dDs
  };
}

var initYMDoms = function initYMDoms(opts, ymCache) {
  var ymDoms = {};

  for (var y in ymCache) {
    var ms = ymCache[y];
    ymDoms[y] || (ymDoms[y] = {});

    for (var m in ms) {
      var mInfo = ms[m];
      ymDoms[y][m] = initYMDom(y * 1, m * 1, mInfo, opts);
    }
  }

  return ymDoms;
};
var initYMContainer = function initYMContainer(opts) {
  var cls_ymContainer = opts.cls_ymContainer,
      tag_ymContainer = opts.tag_ymContainer;
  var ymCD = document.createElement(tag_ymContainer);
  cls_ymContainer.length && (0,_utils__WEBPACK_IMPORTED_MODULE_1__.addClass)(ymCD, cls_ymContainer);
  return ymCD;
};

/***/ }),

/***/ "./src/zz/init/initEvent.js":
/*!**********************************!*\
  !*** ./src/zz/init/initEvent.js ***!
  \**********************************/
/*! namespace exports */
/*! export initEvent [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initEvent": () => /* binding */ initEvent
/* harmony export */ });
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../switch */ "./src/zz/switch.js");
;

function handleSwClick(btnSet, doms, opts, ymData, pointers, cbs) {
  if (!btnSet[1]) return false;
  var _btnSet$ = btnSet[1],
      direct = _btnSet$.direct,
      step = _btnSet$.step;

  if (direct === 'next') {
    (0,_switch__WEBPACK_IMPORTED_MODULE_0__.goNext)(step, doms, opts, ymData, pointers, cbs);
  } else if (direct === 'prev') {
    (0,_switch__WEBPACK_IMPORTED_MODULE_0__.goBack)(step, doms, opts, ymData, pointers, cbs);
  } else {
    if (step && typeof step === 'number') {
      console.warn("\n        give me direct at swBtn parent's attr setting, \n        direct value just accept next and prev, \n        like { \n          cmz_swBtns: [\n            ['i', { direct: \"prev\", style: 'border: 1px solid black' }, '<'],\n            ['div', { direct: \"next\" }, [\n              ['i', { style: {color: 'pink'} }, '>'],\n              ['i', { style: {color: 'skyblue'} }, '>']\n            ]]\n          ]\n        }\n      ");
    }

    return false;
  }
}

function handleSwBtnEv(doms, opts, ymData, pointers, cbs) {
  var swBtnDs = doms.swBtnDs;
  var swBtns = opts.swBtns;

  if (swBtnDs) {
    for (var i = 0; i < swBtnDs.length; i++) {
      var btnD = swBtnDs[i];
      var btnSet = swBtns[i];
      btnD.addEventListener('click', handleSwClick.bind(null, btnSet, doms, opts, ymData, pointers, cbs));
    }
  }
}

function initEvent(doms, opts, ymData, pointers, cbs) {
  handleSwBtnEv(doms, opts, ymData, pointers, cbs);
}

/***/ }),

/***/ "./src/zz/init/initOptions/default.js":
/*!********************************************!*\
  !*** ./src/zz/init/initOptions/default.js ***!
  \********************************************/
/*! namespace exports */
/*! export dCls [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dMNames [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dQuan [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dSwBtnStep [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dSwBtns [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dTags [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dWMark [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dYMPosition [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dCls": () => /* binding */ dCls,
/* harmony export */   "dMNames": () => /* binding */ dMNames,
/* harmony export */   "dWMark": () => /* binding */ dWMark,
/* harmony export */   "dQuan": () => /* binding */ dQuan,
/* harmony export */   "dTags": () => /* binding */ dTags,
/* harmony export */   "dSwBtnStep": () => /* binding */ dSwBtnStep,
/* harmony export */   "dSwBtns": () => /* binding */ dSwBtns,
/* harmony export */   "dYMPosition": () => /* binding */ dYMPosition
/* harmony export */ });
var dCls = {
  cls_ymContainer: 'ym-container',
  cls_monthWrap: 'month-wrap',
  cls_monthHeader: 'month-header',
  cls_monthContent: 'month-content',
  cls_weekMarkWrap: 'week-mark-wrap',
  cls_weekMark: 'week-mark',
  cls_w4Content: 'w-4',
  cls_w5Content: 'w-5',
  cls_w6Content: 'w-6',
  cls_year: 'year',
  cls_month: 'month',
  cls_week: 'week',
  cls_date: 'date',
  cls_empFDate: 'empty-f',
  cls_empBDate: 'empty-b',
  cls_passYear: 'pass-y',
  cls_passMonth: 'pass-m',
  cls_passWeek: 'pass-w',
  cls_passDate: 'pass-d',
  cls_passEmpFDate: 'pass-emp-f',
  cls_passEmpBDate: 'pass-emp-b',
  cls_unPassYear: 'unpass-y',
  cls_unPassMonth: 'unpass-m',
  cls_unPassWeek: 'unpass-w',
  cls_unPassDate: 'unpass-d',
  cls_unPassEmpFDate: 'unpass-emp-f',
  cls_unPassEmpBDate: 'unpass-emp-b',
  cls_curDate: 'cur-d',
  cls_curMonth: 'cur-m',
  cls_curYear: 'cur-y',
  cls_curWeek: 'cur-w'
};
var dMNames = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'Septemper',
  10: 'October',
  11: 'November',
  12: 'December'
};
var dWMark = {
  sun: 'Su',
  mon: 'Mo',
  tue: 'Tu',
  wed: 'We',
  thu: 'Th',
  fri: 'Fr',
  sat: 'Sa'
};
var dQuan = 1;
var dTags = {
  tag_ymContainer: 'div',
  tag_monthWrap: 'div',
  tag_monthHeader: 'div',
  tag_monthContent: 'div',
  tag_weekMarkWrap: 'ul',
  tag_weekMark: 'li',
  tag_year: 'span',
  tag_month: 'span',
  tag_week: 'ul',
  tag_date: 'li',
  tag_empFDate: 'li',
  tag_empBDate: 'li'
};
var dSwBtnStep = 1;
var dSwBtns = [['i', {
  direct: "prev",
  "class": 'prev-btn',
  step: dSwBtnStep
}, '<'], ['i', {
  direct: "next",
  "class": 'next-btn',
  step: dSwBtnStep
}, '>']];
var dYMPosition = 'ym';

/***/ }),

/***/ "./src/zz/init/initOptions/index.js":
/*!******************************************!*\
  !*** ./src/zz/init/initOptions/index.js ***!
  \******************************************/
/*! namespace exports */
/*! export initOptions [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initOptions": () => /* binding */ initOptions
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ "./src/zz/init/initOptions/default.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/zz/utils/index.js");
;


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // UTILS

function initCmzName(dN, cN) {
  var init = {};

  for (var key in dN) {
    var cmz = cN[key];
    init[init[key] = cmz !== undefined ? cmz : dN[key]] = key;
  }

  return init;
}

function handleCmzName(options, key, defaultNames) {
  var cmzName = options[key];
  var names;

  if (cmzName !== undefined) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isObj)(cmzName)) {
      names = initCmzName(defaultNames, cmzName);
    } else {
      names = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.tsEnumToObj)(defaultNames);
    }

    delete options[key];
  } else {
    names = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.tsEnumToObj)(defaultNames);
  }

  return names;
}

function initTags(options) {
  var oTags = {};

  for (var tagKey in _default__WEBPACK_IMPORTED_MODULE_2__.dTags) {
    var tag = options[tagKey];

    if (tag !== undefined) {
      if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.isTag)(tag)) {
        tag = _default__WEBPACK_IMPORTED_MODULE_2__.dTags[tagKey];
      }

      delete options[tagKey];
    } else {
      tag = _default__WEBPACK_IMPORTED_MODULE_2__.dTags[tagKey];
    }

    oTags[tagKey] = tag;
  }

  return oTags;
}

function initMNames(options) {
  return handleCmzName(options, 'cmz_mNames', _default__WEBPACK_IMPORTED_MODULE_2__.dMNames);
}

function initWMarks(options) {
  return handleCmzName(options, 'cmz_wMarks', _default__WEBPACK_IMPORTED_MODULE_2__.dWMark);
}

function initYMPosition(options) {
  var cmz_ymPos = options.cmz_ymPos;
  var accept = ['my', 'ym'];

  if (cmz_ymPos) {
    var pos;

    if (accept.includes(cmz_ymPos)) {
      pos = cmz_ymPos;
    } else {
      console.warn('cmz_ymPos just accept "ym" or "my"');
      pos = _default__WEBPACK_IMPORTED_MODULE_2__.dYMPosition;
    }

    delete options.cmz_ymPos;
    return pos;
  }

  return _default__WEBPACK_IMPORTED_MODULE_2__.dYMPosition;
}

function initYMStart(options) {
  var cmz_ymStart = options.cmz_ymStart;
  var ymDObj;

  if (cmz_ymStart !== undefined) {
    ymDObj = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.dateStrToDateObj)(cmz_ymStart) || new Date();
    delete options.cmz_ymStart;
  } else {
    ymDObj = new Date();
  }

  return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getDateInfo)(ymDObj);
}

function initYM(options) {
  var ymS = initYMStart(options);
  var ymPos = initYMPosition(options);
  return {
    ymS: ymS,
    ymPos: ymPos
  };
}

function initIgnore(options) {
  var cmz_ignore = options.cmz_ignore;

  if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isArr)(cmz_ignore)) {
    var ignore = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(cmz_ignore);

    delete options.cmz_ignore;
    return ignore;
  }

  return null;
}

function initQuan(options) {
  var cmz_quan = options.cmz_quan;
  var quan;

  if (cmz_quan !== undefined) {
    if (typeof cmz_quan === 'number' && cmz_quan > 0) {
      quan = Math.floor(cmz_quan);
    } else {
      quan = _default__WEBPACK_IMPORTED_MODULE_2__.dQuan;
    }

    delete options.cmz_quan;
  } else {
    quan = _default__WEBPACK_IMPORTED_MODULE_2__.dQuan;
  }

  return quan;
}

function initYNames(options) {
  var cmz_yNames = options.cmz_yNames;

  if (cmz_yNames !== undefined) {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.isObj)(cmz_yNames)) return null;
    var years = [];

    for (var year in cmz_yNames) {
      !(0,_utils__WEBPACK_IMPORTED_MODULE_3__.isNaN)(year * 1) && typeof cmz_yNames[year] === 'string' && years.push(year);
    }

    if (!years.length) return null;
    var YNames = {};

    for (var i = 0; i < years.length; i++) {
      var _year = years[i];
      YNames[YNames[_year] = cmz_yNames[_year]] = _year;
    }

    delete options.cmz_yNames;
    return YNames;
  }

  return null;
}

function btnRules(btn) {
  return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isArr)(btn) && (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isTag)(btn[0]) && ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isObj)(btn[1]) || btn[1] === null) && (typeof btn[2] === 'string' || (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isArr)(btn[2]));
}

function handleBtnArrayChild(children) {
  return children.filter(function (child) {
    if (typeof child === 'string') {
      return true;
    } else if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isArr)(child)) {
      if (btnRules(child)) {
        var len = child.length;
        child.length = len <= 3 ? len : 3;

        if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isArr)(child[2])) {
          child[2] = handleBtnArrayChild(child[2]);
        }

        return true;
      }
    }

    return false;
  });
}

function filterCompilanceBtns(btns) {
  return btns.filter(function (btn) {
    if (btnRules(btn)) {
      var len = btn.length;
      btn.length = len <= 3 ? len : 3;
      var attrs = btn[1];

      if (attrs) {
        if (attrs.direct && !attrs.step) {
          attrs.step = _default__WEBPACK_IMPORTED_MODULE_2__.dSwBtnStep;
        } else if (attrs.step) {
          if (typeof attrs.step !== 'number') {
            attrs.step = _default__WEBPACK_IMPORTED_MODULE_2__.dSwBtnStep;
          } else {
            attrs.step = Math.floor(attrs.step);
          }
        }
      }

      var children = btn[2];

      if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isArr)(children)) {
        btn[2] = handleBtnArrayChild(children);
      }

      return true;
    }

    return false;
  });
}

function initSwBtns(options) {
  var cmz_swBtns = options.cmz_swBtns;

  if (cmz_swBtns !== undefined) {
    var btns;

    if (cmz_swBtns === null) {
      btns = null;
    } else if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isArr)(cmz_swBtns)) {
      btns = filterCompilanceBtns(cmz_swBtns);
      btns = btns.length === 0 ? (0,_utils__WEBPACK_IMPORTED_MODULE_3__.deepcopy)(_default__WEBPACK_IMPORTED_MODULE_2__.dSwBtns) : btns;
    } else {
      btns = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.deepcopy)(_default__WEBPACK_IMPORTED_MODULE_2__.dSwBtns);
    }

    delete options.cmz_swBtns;
    return btns;
  }

  return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.deepcopy)(_default__WEBPACK_IMPORTED_MODULE_2__.dSwBtns);
}

function initOptions() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var cls = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.initClass)(options, _default__WEBPACK_IMPORTED_MODULE_2__.dCls);
  var tags = initTags(options);
  var mNames = initMNames(options);
  var wMarks = initWMarks(options);
  var ym = initYM(options);
  var quan = initQuan(options);
  var ignore = initIgnore(options);
  var yNames = initYNames(options);
  var swBtns = initSwBtns(options);
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, options), cls), tags), {}, {
    mNames: mNames,
    wMarks: wMarks
  }, ym), {}, {
    ignore: ignore,
    quan: quan,
    yNames: yNames,
    swBtns: swBtns
  });
}

/***/ }),

/***/ "./src/zz/init/initPointers.js":
/*!*************************************!*\
  !*** ./src/zz/init/initPointers.js ***!
  \*************************************/
/*! namespace exports */
/*! export initPointers [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPointers": () => /* binding */ initPointers
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
;
function initPointers(ymCache) {
  var years = mapObjKeysToNumArr(ymCache);
  var minY = Math.min.apply(Math, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(years));
  var maxY = Math.max.apply(Math, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(years));
  var pL = {};
  var pR = {};
  pL.year = minY;
  pR.year = maxY;
  pL.month = Math.min.apply(Math, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(mapObjKeysToNumArr(ymCache[minY])));
  pR.month = Math.max.apply(Math, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(mapObjKeysToNumArr(ymCache[maxY])));
  return {
    pL: pL,
    pR: pR
  };
}

function mapObjKeysToNumArr(obj) {
  var arr = [];

  for (var key in obj) {
    arr.push(key * 1);
  }

  return arr;
}

/***/ }),

/***/ "./src/zz/init/initYMData.js":
/*!***********************************!*\
  !*** ./src/zz/init/initYMData.js ***!
  \***********************************/
/*! namespace exports */
/*! export getCache [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initYMData [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCache": () => /* binding */ getCache,
/* harmony export */   "initYMData": () => /* binding */ initYMData
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/zz/utils/index.js");
;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function initTodayInfo() {
  var todayObj = new Date();
  var dateInfo = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getDateInfo)(todayObj);
  return _objectSpread({
    todayObj: todayObj
  }, dateInfo);
}

function getYMStatus(ymInfo, todayInfo) {
  var year = ymInfo.year,
      month = ymInfo.month,
      firstDay = ymInfo.firstDay;
  var todayY = todayInfo.year,
      todayM = todayInfo.month,
      todayD = todayInfo.date;
  var yStatus = null;
  var mStatus = null;
  var wStatus = null;
  var dStatus = null;

  if (year === todayY) {
    yStatus = 0;

    if (month === todayM) {
      mStatus = 0;
      dStatus = todayD;
      wStatus = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getWeek)(firstDay + todayD);
    } else if (month > todayM) {
      mStatus = 1;
    } else {
      mStatus = -1;
    }
  } else if (year > todayY) {
    yStatus = 1;
    mStatus = 1;
  } else {
    yStatus = -1;
    mStatus = -1;
  }

  return {
    yStatus: yStatus,
    mStatus: mStatus,
    wStatus: wStatus,
    dStatus: dStatus
  };
}

function initYMCache(ym, ymCache, today) {
  var year = ym.year,
      month = ym.month;
  ymCache[year] || (ymCache[year] = {});
  if (ymCache[year][month]) return false;
  var dObj = new Date(year, month - 1, 1);
  var days = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getDays)(year, month);
  var firstDay = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getFirstDay)(dObj);
  var lastDay = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getLastDay)(firstDay, days);
  var weeks = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getWeek)(firstDay + days);
  var ymStatus = getYMStatus({
    year: year,
    month: month,
    firstDay: firstDay
  }, today);
  var c = {
    days: days,
    firstDay: firstDay,
    lastDay: lastDay,
    weeks: weeks,
    ymStatus: ymStatus
  };
  ymCache[year][month] = c;
  return c;
}

function getCache(ym, ymCache, today) {
  var year = ym.year,
      month = ym.month;
  var c;

  if (ymCache[year] && ymCache[year][month]) {
    c = ymCache[year][month];
  } else {
    c = initYMCache(ym, ymCache, today);
  }

  return c;
}

function initYMCaches(opts, today) {
  var ymS = opts.ymS,
      quan = opts.quan;

  var copyYM = _objectSpread({}, ymS);

  var ymCache = {};

  for (var i = 0; i < quan; i++) {
    initYMCache(copyYM, ymCache, today);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.addMonth)(copyYM, 1);
  }

  return ymCache;
}

function initYMData(opts) {
  var todayInfo = initTodayInfo();
  var ymCache = initYMCaches(opts, todayInfo);
  return {
    todayInfo: todayInfo,
    ymCache: ymCache
  };
}

/***/ }),

/***/ "./src/zz/switch.js":
/*!**************************!*\
  !*** ./src/zz/switch.js ***!
  \**************************/
/*! namespace exports */
/*! export goBack [provided] [no usage info] [missing usage info prevents renaming] */
/*! export goNext [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "goBack": () => /* binding */ goBack,
/* harmony export */   "goNext": () => /* binding */ goNext
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/zz/utils/index.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ "./src/zz/init/index.js");
/* harmony import */ var _assembly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assembly */ "./src/zz/assembly.js");
;


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



 // utils

function node2FragmentFromLast(parent) {
  var fg = document.createDocumentFragment();
  var child;

  while (child = parent.lastChild) {
    fg.appendChild(child);
  }

  return fg;
}
/**
 * @param bS before status
 * @param nS next status
 * @param classes [-1 class, 0 class, 1 class]
 */


function resetClassByInterval(dom, bS, nS, classes) {
  var removeCls = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getClassByInterval)(bS, classes);
  var addCls = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getClassByInterval)(nS, classes);
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.removeClass)(dom, removeCls);
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addClass)(dom, addCls);
} // handle class for dates and weeks


function handleClassForDW(dom, bMS, nMS, beforeP, nextP, classes) {
  if (bMS !== 0 && nMS !== 0) {
    for (var i = 0; i < dom.length; i++) {
      var dD = dom[i];
      resetClassByInterval(dD, bMS, nMS, classes);
    }
  } else if (bMS !== 0) {
    var removeCls = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getClassByInterval)(bMS, classes);

    for (var _i = 0; _i < dom.length; _i++) {
      var _dD = dom[_i];
      var date = _i + 1;
      var interval = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.judgeInterval)(date, nextP);
      var addCls = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getClassByInterval)(interval, classes);
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.removeClass)(_dD, removeCls);
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addClass)(_dD, addCls);
    }
  } else if (nMS !== 0) {
    var _addCls = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getClassByInterval)(nMS, classes);

    for (var _i2 = 0; _i2 < dom.length; _i2++) {
      var _dD2 = dom[_i2];

      var _date = _i2 + 1;

      var _interval = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.judgeInterval)(_date, beforeP);

      var _removeCls = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getClassByInterval)(_interval, classes);

      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.removeClass)(_dD2, _removeCls);
      (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addClass)(_dD2, _addCls);
    }
  }
}

function handleContentClass(mCD, diffM, opts) {
  var calcWs = diffM.diffResult.calcWs;

  if (calcWs !== 0) {
    var cls_w4Content = opts.cls_w4Content,
        cls_w5Content = opts.cls_w5Content,
        cls_w6Content = opts.cls_w6Content;
    var nWs = diffM.nextYMCache.weeks,
        bWs = diffM.beforeYMCache.weeks;
    var classes = [cls_w4Content, cls_w5Content, cls_w6Content];
    var removeCls = (0,_init__WEBPACK_IMPORTED_MODULE_3__.handleContentWeeksClass)(bWs, classes);
    var addCls = (0,_init__WEBPACK_IMPORTED_MODULE_3__.handleContentWeeksClass)(nWs, classes);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.removeClass)(mCD, removeCls);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addClass)(mCD, addCls);
  }
}

function handleContentYMFlag(mCD, diffM) {
  mCD.$_ym = diffM.nextYM;
} // step1. diff


function diff(nextYMCache, beforeYMCache) {
  var nFd = nextYMCache.firstDay,
      nLd = nextYMCache.lastDay,
      nDs = nextYMCache.days,
      nWs = nextYMCache.weeks,
      _nextYMCache$ymStatus = nextYMCache.ymStatus,
      nYS = _nextYMCache$ymStatus.yStatus,
      nMS = _nextYMCache$ymStatus.mStatus;
  var bFd = beforeYMCache.firstDay,
      bLd = beforeYMCache.lastDay,
      bDs = beforeYMCache.days,
      bWs = beforeYMCache.weeks,
      _beforeYMCache$ymStat = beforeYMCache.ymStatus,
      bYS = _beforeYMCache$ymStat.yStatus,
      bMS = _beforeYMCache$ymStat.mStatus;
  var calcFD = nFd - bFd;
  var calcLD = nLd - bLd;
  var calcDs = nDs - bDs;
  var calcWs = nWs - bWs;
  var statusChange = {
    ys: nYS !== bYS,
    ms: nMS !== bMS
  };
  return {
    calcFD: calcFD,
    calcLD: calcLD,
    calcDs: calcDs,
    calcWs: calcWs,
    statusChange: statusChange
  };
}
/**
 * @param fg all yearMonthContentDom's Children By Backward
 * @param direct click direct
 * @param len will Be Move Dom count
 */


function getBeMoveDoms(fg, direct, len) {
  var fgForBeMoveDom = document.createDocumentFragment();
  /**
   * @description because direct prev's be move dom is in front of all, so backward for pop it
   */

  if (direct === 'prev') {
    fg = node2FragmentFromLast(fg);
  }

  var children = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(fg.children);

  for (var i = 0; i < len; i++) {
    var child = children.pop();
    fgForBeMoveDom.appendChild(child);
  }

  return {
    fgForBeMoveDom: fgForBeMoveDom,
    fgForUnMoveDom: fg
  };
}

function resetBeMoveDomsYear(mHD, diffM, opts) {
  var yNames = opts.yNames,
      cls_year = opts.cls_year;
  var yD = mHD.querySelector(".".concat(cls_year[0]));
  if (!yD) return null;
  var ys = diffM.diffResult.statusChange.ys,
      year = diffM.nextYM.year;
  var yName = yNames && yNames[year] || year;
  yD.textContent = yName;

  if (ys) {
    var cls_passYear = opts.cls_passYear,
        cls_curYear = opts.cls_curYear,
        cls_unPassYear = opts.cls_unPassYear;
    var nYS = diffM.nextYMCache.ymStatus.yStatus,
        bYS = diffM.beforeYMCache.ymStatus.yStatus;
    var classes = [cls_passYear, cls_curYear, cls_unPassYear];
    resetClassByInterval(yD, bYS, nYS, classes);
  }

  return yD;
}

function resetBeMoveDomsMonth(mHD, diffM, opts) {
  var mNames = opts.mNames,
      cls_month = opts.cls_month;
  var mD = mHD.querySelector(".".concat(cls_month[0]));
  if (!mD) return null;
  var ms = diffM.diffResult.statusChange.ms,
      month = diffM.nextYM.month;
  var mName = mNames[month];
  mD.textContent = mName;

  if (ms) {
    var nMS = diffM.nextYMCache.ymStatus.mStatus,
        bMS = diffM.beforeYMCache.ymStatus.mStatus;
    var cls_passMonth = opts.cls_passMonth,
        cls_curMonth = opts.cls_curMonth,
        cls_unPassMonth = opts.cls_unPassMonth;
    var classes = [cls_passMonth, cls_curMonth, cls_unPassMonth];
    resetClassByInterval(mD, bMS, nMS, classes);
  }

  return mD;
}

function resetBeMoveDomsEmpFDDs(mCD, diffM, opts) {
  var cls_empFDate = opts.cls_empFDate;
  var _diffM$diffResult = diffM.diffResult,
      calcFD = _diffM$diffResult.calcFD,
      ms = _diffM$diffResult.statusChange.ms;
  var empFDDs = mCD.querySelectorAll(".".concat(cls_empFDate[0]));
  if (!empFDDs) return null;
  empFDDs = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(empFDDs);
  var newEmpFDDs = [];

  if (calcFD > 0) {
    var ymStatus = diffM.nextYMCache.ymStatus;
    newEmpFDDs = (0,_init__WEBPACK_IMPORTED_MODULE_3__.initEmptyFDDoms)(calcFD, ymStatus, opts);
  } else if (calcFD < 0) {
    for (var i = 0; i < Math.abs(calcFD); i++) {
      empFDDs.pop();
    }
  }

  if (ms) {
    var nMS = diffM.nextYMCache.ymStatus.mStatus,
        bMS = diffM.beforeYMCache.ymStatus.mStatus;

    if (nMS <= 0 && bMS > 0 || nMS > 0 && bMS <= 0) {
      var cls_passEmpFDate = opts.cls_passEmpFDate,
          cls_unPassEmpFDate = opts.cls_unPassEmpFDate;
      var classes = [cls_passEmpFDate, cls_passEmpFDate, cls_unPassEmpFDate];

      for (var _i3 = 0; _i3 < empFDDs.length; _i3++) {
        var empFDD = empFDDs[_i3];
        resetClassByInterval(empFDD, bMS, nMS, classes);
      }
    }
  }

  return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(empFDDs), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newEmpFDDs));
}

function resetBeMoveDomsEmpBDDs(mCD, diffM, opts) {
  var cls_empBDate = opts.cls_empBDate;
  var _diffM$diffResult2 = diffM.diffResult,
      calcLD = _diffM$diffResult2.calcLD,
      ms = _diffM$diffResult2.statusChange.ms;
  var empBDDs = mCD.querySelectorAll(".".concat(cls_empBDate[0]));
  if (!empBDDs) return null;
  empBDDs = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(empBDDs);
  var newEmpBDDs = [];

  if (calcLD < 0) {
    var ymStatus = diffM.nextYMCache.ymStatus;
    newEmpBDDs = (0,_init__WEBPACK_IMPORTED_MODULE_3__.initEmptyBDDoms)(6 - Math.abs(calcLD), ymStatus, opts);
  } else if (calcLD > 0) {
    for (var i = 0; i < calcLD; i++) {
      empBDDs.pop();
    }
  }

  if (ms) {
    var nMS = diffM.nextYMCache.ymStatus.mStatus,
        bMS = diffM.beforeYMCache.ymStatus.mStatus;

    if (nMS < 0 && bMS >= 0 || nMS >= 0 && bMS < 0) {
      var cls_passEmpBDate = opts.cls_passEmpBDate,
          cls_unPassEmpBDate = opts.cls_unPassEmpBDate;
      var classes = [cls_passEmpBDate, cls_unPassEmpBDate, cls_unPassEmpBDate];

      for (var _i4 = 0; _i4 < empBDDs.length; _i4++) {
        var empBDD = empBDDs[_i4];
        resetClassByInterval(empBDD, bMS, nMS, classes);
      }
    }
  }

  return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(empBDDs), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newEmpBDDs));
}

function resetBeMoveDomsDDs(mCD, diffM, opts) {
  var cls_date = opts.cls_date;
  var _diffM$diffResult3 = diffM.diffResult,
      calcDs = _diffM$diffResult3.calcDs,
      ms = _diffM$diffResult3.statusChange.ms;
  var dDs = mCD.querySelectorAll(".".concat(cls_date[0]));
  if (!dDs) return null;
  dDs = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(dDs);
  var newDDs = [];

  if (calcDs > 0) {
    var bDs = diffM.beforeYMCache.days,
        _diffM$nextYMCache = diffM.nextYMCache,
        nDs = _diffM$nextYMCache.days,
        ymStatus = _diffM$nextYMCache.ymStatus;
    newDDs = (0,_init__WEBPACK_IMPORTED_MODULE_3__.initDDoms)(bDs + 1, nDs, ymStatus, opts);
  } else if (calcDs < 0) {
    for (var i = 0; i < Math.abs(calcDs); i++) {
      dDs.pop();
    }
  }

  if (ms) {
    var _diffM$beforeYMCache$ = diffM.beforeYMCache.ymStatus,
        bMS = _diffM$beforeYMCache$.mStatus,
        bDS = _diffM$beforeYMCache$.dStatus,
        _diffM$nextYMCache$ym = diffM.nextYMCache.ymStatus,
        nMS = _diffM$nextYMCache$ym.mStatus,
        nDS = _diffM$nextYMCache$ym.dStatus;
    var cls_passDate = opts.cls_passDate,
        cls_curDate = opts.cls_curDate,
        cls_unPassDate = opts.cls_unPassDate;
    var classes = [cls_passDate, cls_curDate, cls_unPassDate];
    handleClassForDW(dDs, bMS, nMS, bDS, nDS, classes);
  }

  return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(dDs), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newDDs));
}

function resetBeMoveDomsWDs(mCD, diffM, opts) {
  var cls_week = opts.cls_week;
  var _diffM$diffResult4 = diffM.diffResult,
      calcWs = _diffM$diffResult4.calcWs,
      ms = _diffM$diffResult4.statusChange.ms;
  var wDs = mCD.querySelectorAll(".".concat(cls_week[0]));
  if (!wDs) return null;
  wDs = (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(wDs);
  var newWDs = [];

  if (calcWs > 0) {
    var bWs = diffM.beforeYMCache.weeks,
        _diffM$nextYMCache2 = diffM.nextYMCache,
        nWs = _diffM$nextYMCache2.weeks,
        ymStatus = _diffM$nextYMCache2.ymStatus;
    newWDs = (0,_init__WEBPACK_IMPORTED_MODULE_3__.initWDoms)(bWs + 1, nWs, ymStatus, opts);
  } else if (calcWs < 0) {
    for (var i = 0; i < Math.abs(calcWs); i++) {
      wDs.pop();
    }
  }

  if (ms) {
    var _diffM$beforeYMCache$2 = diffM.beforeYMCache.ymStatus,
        bMS = _diffM$beforeYMCache$2.mStatus,
        bWS = _diffM$beforeYMCache$2.wStatus,
        _diffM$nextYMCache$ym2 = diffM.nextYMCache.ymStatus,
        nMS = _diffM$nextYMCache$ym2.mStatus,
        nWS = _diffM$nextYMCache$ym2.wStatus;
    var cls_passWeek = opts.cls_passWeek,
        cls_curWeek = opts.cls_curWeek,
        cls_unPassWeek = opts.cls_unPassWeek;
    var classes = [cls_passWeek, cls_curWeek, cls_unPassWeek];
    handleClassForDW(wDs, bMS, nMS, bWS, nWS, classes);
  }

  for (var _i5 = 0; _i5 < wDs.length; _i5++) {
    var wD = wDs[_i5];
    wD.textContent = '';
  }

  return [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(wDs), (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(newWDs));
}

function resetBeMoveDomsHeader(mWD, diffM, opts) {
  var cls_monthHeader = opts.cls_monthHeader;
  var mHD = mWD.querySelector(".".concat(cls_monthHeader[0]));
  if (!mHD) return null;
  var yD = resetBeMoveDomsYear(mHD, diffM, opts);
  var mD = resetBeMoveDomsMonth(mHD, diffM, opts);
  return {
    mHD: mHD,
    yD: yD,
    mD: mD
  };
}

function resetBeMoveDomsContent(mWD, diffM, opts) {
  var cls_monthContent = opts.cls_monthContent,
      cls_weekMarkWrap = opts.cls_weekMarkWrap;
  var mCD = mWD.querySelector(".".concat(cls_monthContent[0]));
  if (!mCD) return null;
  handleContentClass(mCD, diffM, opts);
  handleContentYMFlag(mCD, diffM);
  var wMD = mWD.querySelector(".".concat(cls_weekMarkWrap[0]));
  var empFDDs = resetBeMoveDomsEmpFDDs(mCD, diffM, opts);
  var empBDDs = resetBeMoveDomsEmpBDDs(mCD, diffM, opts);
  var dDs = resetBeMoveDomsDDs(mCD, diffM, opts);
  var wDs = resetBeMoveDomsWDs(mCD, diffM, opts);
  mCD.textContent = '';
  return {
    mCD: mCD,
    wDs: wDs,
    wMD: wMD,
    empFDDs: empFDDs,
    empBDDs: empBDDs,
    dDs: dDs
  };
}
/**
 * @description delete past dom and add the new
 */


function resetYMDs(ymDs, diffM, doms) {
  var _diffM$beforeYM = diffM.beforeYM,
      by = _diffM$beforeYM.year,
      bm = _diffM$beforeYM.month,
      _diffM$nextYM = diffM.nextYM,
      ny = _diffM$nextYM.year,
      nm = _diffM$nextYM.month;
  ymDs[ny] || (ymDs[ny] = {});
  ymDs[ny][nm] = doms;
  delete ymDs[by][bm];
} // step2. move


function resetBeMoveDoms(needResetDoms, diffMs, opts, ymDs, cbs) {
  var children = needResetDoms.children;
  var len = children.length;

  for (var i = 0; i < len; i++) {
    var mWD = children[i];
    var diffM = diffMs[i];
    var headerDs = resetBeMoveDomsHeader(mWD, diffM, opts);
    var contentDs = resetBeMoveDomsContent(mWD, diffM, opts);
    resetYMDs(ymDs, diffM, _objectSpread(_objectSpread(_objectSpread({}, headerDs), contentDs), {}, {
      mWD: mWD
    }));
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.callCallbacks)(cbs.onBeforeDomBeAssyAtResetDom, null, {
      mWD: mWD,
      diffM: diffM,
      headerDs: headerDs,
      contentDs: contentDs,
      opts: opts,
      ymDs: ymDs,
      needResetDoms: needResetDoms,
      diffMs: diffMs
    });
    (0,_assembly__WEBPACK_IMPORTED_MODULE_4__.assyContent)(contentDs);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.callCallbacks)(cbs.onDomBeAssyAtResetDom, null, {
      mWD: mWD,
      diffM: diffM,
      headerDs: headerDs,
      contentDs: contentDs,
      opts: opts,
      ymDs: ymDs,
      needResetDoms: needResetDoms,
      diffMs: diffMs
    });
  }
}

function moveDoms(doms, diffMs, direct, opts, cbs) {
  var ymCD = doms.ymCD,
      ymDs = doms.ymDs;
  var quan = opts.quan;
  var len = diffMs.length;
  var fg = node2FragmentFromLast(ymCD);
  var needResetDoms = null;
  var unNeedResetDoms = null;

  if (len < quan) {
    var _getBeMoveDoms = getBeMoveDoms(fg, direct, len),
        fgForBeMoveDom = _getBeMoveDoms.fgForBeMoveDom,
        fgForUnMoveDom = _getBeMoveDoms.fgForUnMoveDom;

    needResetDoms = fgForBeMoveDom;
    unNeedResetDoms = fgForUnMoveDom;
  } else {
    fg = node2FragmentFromLast(fg);
    needResetDoms = fg;
  }

  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.callCallbacks)(cbs.onBeforeDomBeReset, null, {
    doms: doms,
    diffMs: diffMs,
    direct: direct,
    opts: opts,
    needResetDoms: needResetDoms,
    unNeedResetDoms: unNeedResetDoms
  });
  resetBeMoveDoms(needResetDoms, diffMs, opts, ymDs, cbs);
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.callCallbacks)(cbs.onDomBeReseted, null, {
    doms: doms,
    diffMs: diffMs,
    direct: direct,
    opts: opts,
    needResetDoms: needResetDoms,
    unNeedResetDoms: unNeedResetDoms
  });

  if (len < quan) {
    if (direct === 'prev') {
      needResetDoms = node2FragmentFromLast(needResetDoms);
      ymCD.appendChild(needResetDoms);
      ymCD.appendChild(unNeedResetDoms);
    } else if (direct === 'next') {
      unNeedResetDoms = node2FragmentFromLast(unNeedResetDoms);
      ymCD.appendChild(unNeedResetDoms);
      ymCD.appendChild(needResetDoms);
    }
  } else {
    ymCD.appendChild(needResetDoms);
  }
}

function handleStepBigger(step, quan, pointers, ymCache, todayInfo, handleMonthFn) {
  var pL = pointers.pL,
      pR = pointers.pR;

  var beforePoint = _objectSpread({}, pL);

  handleMonthFn(pL, step);
  handleMonthFn(pR, step);

  var nextPoint = _objectSpread({}, pL);

  var diffMs = [];

  for (var i = 0; i < quan; i++) {
    var beforeYM = _objectSpread({}, beforePoint);

    var beforeYMCache = (0,_init__WEBPACK_IMPORTED_MODULE_3__.getCache)(beforePoint, ymCache, todayInfo);

    var nextYM = _objectSpread({}, nextPoint);

    var nextYMCache = (0,_init__WEBPACK_IMPORTED_MODULE_3__.getCache)(nextPoint, ymCache, todayInfo);
    var diffResult = diff(nextYMCache, beforeYMCache);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addMonth)(beforePoint, 1);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.addMonth)(nextPoint, 1);
    diffMs.push({
      beforeYMCache: beforeYMCache,
      nextYMCache: nextYMCache,
      beforeYM: beforeYM,
      nextYM: nextYM,
      diffResult: diffResult
    });
  }

  return diffMs;
}

function handleStepSmaller(step, pointers, ymCache, todayInfo, handleMonthFn) {
  var beforeP = pointers.beforeP,
      nextP = pointers.nextP;
  var diffMs = [];

  for (var i = 0; i < step; i++) {
    var beforeYMCache = ymCache[beforeP.year][beforeP.month];

    var beforeYM = _objectSpread({}, beforeP);

    handleMonthFn(beforeP, 1);
    handleMonthFn(nextP, 1);
    var nextYMCache = (0,_init__WEBPACK_IMPORTED_MODULE_3__.getCache)(nextP, ymCache, todayInfo);

    var nextYM = _objectSpread({}, nextP);

    var diffResult = diff(nextYMCache, beforeYMCache);
    diffMs.push({
      beforeYMCache: beforeYMCache,
      nextYMCache: nextYMCache,
      beforeYM: beforeYM,
      nextYM: nextYM,
      diffResult: diffResult
    });
  }

  return diffMs;
}

function goBack(step, doms, opts, ymData, pointers, cbs) {
  var ymCache = ymData.ymCache,
      todayInfo = ymData.todayInfo;
  var pL = pointers.pL,
      pR = pointers.pR;
  var quan = opts.quan;
  var diffMs;

  if (step < quan) {
    var beforeP = pR;
    var nextP = pL;
    diffMs = handleStepSmaller(step, {
      beforeP: beforeP,
      nextP: nextP
    }, ymCache, todayInfo, _utils__WEBPACK_IMPORTED_MODULE_2__.subMonth);
  } else {
    diffMs = handleStepBigger(step, quan, pointers, ymCache, todayInfo, _utils__WEBPACK_IMPORTED_MODULE_2__.subMonth);
  }

  moveDoms(doms, diffMs, 'prev', opts, cbs);
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.callCallbacks)(cbs.onPreved, null, {
    doms: doms,
    diffMs: diffMs,
    opts: opts,
    step: step,
    ymData: ymData,
    pointers: pointers
  });
}
function goNext(step, doms, opts, ymData, pointers, cbs) {
  var ymCache = ymData.ymCache,
      todayInfo = ymData.todayInfo;
  var pL = pointers.pL,
      pR = pointers.pR;
  var quan = opts.quan;
  var diffMs = [];

  if (step < quan) {
    var beforeP = pL;
    var nextP = pR;
    diffMs = handleStepSmaller(step, {
      beforeP: beforeP,
      nextP: nextP
    }, ymCache, todayInfo, _utils__WEBPACK_IMPORTED_MODULE_2__.addMonth);
  } else {
    diffMs = handleStepBigger(step, quan, pointers, ymCache, todayInfo, _utils__WEBPACK_IMPORTED_MODULE_2__.addMonth);
  }

  moveDoms(doms, diffMs, 'next', opts, cbs);
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.callCallbacks)(cbs.onNexted, null, {
    doms: doms,
    diffMs: diffMs,
    opts: opts,
    step: step,
    ymData: ymData,
    pointers: pointers
  });
}

/***/ }),

/***/ "./src/zz/utils/common.js":
/*!********************************!*\
  !*** ./src/zz/utils/common.js ***!
  \********************************/
/*! namespace exports */
/*! export callCallbacks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export deepcopy [provided] [no usage info] [missing usage info prevents renaming] */
/*! export gcArr [provided] [no usage info] [missing usage info prevents renaming] */
/*! export gcObj [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initCallback [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isArr [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isFunc [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isNaN [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isObj [provided] [no usage info] [missing usage info prevents renaming] */
/*! export judgeInterval [provided] [no usage info] [missing usage info prevents renaming] */
/*! export tsEnumToObj [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObj": () => /* binding */ isObj,
/* harmony export */   "isFunc": () => /* binding */ isFunc,
/* harmony export */   "isArr": () => /* binding */ isArr,
/* harmony export */   "isNaN": () => /* binding */ isNaN,
/* harmony export */   "judgeInterval": () => /* binding */ judgeInterval,
/* harmony export */   "gcObj": () => /* binding */ gcObj,
/* harmony export */   "gcArr": () => /* binding */ gcArr,
/* harmony export */   "tsEnumToObj": () => /* binding */ tsEnumToObj,
/* harmony export */   "deepcopy": () => /* binding */ deepcopy,
/* harmony export */   "initCallback": () => /* binding */ initCallback,
/* harmony export */   "callCallbacks": () => /* binding */ callCallbacks
/* harmony export */ });
var isObj = function isObj(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
var isFunc = function isFunc(func) {
  return Object.prototype.toString.call(func) === '[object Function]';
};
var isArr = function isArr(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
};
var isNaN = function isNaN(input) {
  return typeof input === 'number' && input !== input;
};
/**
 * @description 判斷狀態區間
 * @param refP 參考點
 * @param point 判斷點
 * @return -1: 左, 0: 當前, 1: 右
 */

function judgeInterval(refP, point) {
  if (refP < point) {
    return -1;
  } else if (refP === point) {
    return 0;
  } else if (refP > point) {
    return 1;
  } else {
    throw new Error('judgeInterval params is wrong');
  }
}
function gcObj(obj) {
  for (var key in obj) {
    delete obj[key];
  }
}
function gcArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = null;
  }
}
function tsEnumToObj(obj) {
  var tmp = {};

  for (var key in obj) {
    tmp[tmp[key] = obj[key]] = key;
  }

  return tmp;
}
function deepcopy(target) {
  if (isObj(target)) {
    var obj = {};

    for (var key in target) {
      obj[key] = deepcopy(target[key]);
    }

    return obj;
  } else if (isArr(target)) {
    var arr = [];

    for (var i = 0; i < target.length; i++) {
      var val = target[i];
      arr.push(deepcopy(val));
    }

    return arr;
  } else {
    return target;
  }
}
function initCallback(cbObj, cbs, del) {
  for (var key in cbs) {
    var cbArr = cbs[key];
    var cb = cbObj[key];

    if (cb) {
      if (isFunc(cb)) {
        cbArr.push(cb);
      }

      if (del) {
        delete cbObj[key];
      }
    }
  }
}
function callCallbacks(cbs, self) {
  for (var _len = arguments.length, options = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    options[_key - 2] = arguments[_key];
  }

  for (var i = 0; i < cbs.length; i++) {
    var cb = cbs[i];
    cb.call.apply(cb, [self].concat(options));
  }
}

/***/ }),

/***/ "./src/zz/utils/date.js":
/*!******************************!*\
  !*** ./src/zz/utils/date.js ***!
  \******************************/
/*! namespace exports */
/*! export addMonth [provided] [no usage info] [missing usage info prevents renaming] */
/*! export dateStrToDateObj [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fixYMAfterAdd [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fixYMAfterSub [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getDateInfo [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getDays [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getFirstDay [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getLastDay [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getWeek [provided] [no usage info] [missing usage info prevents renaming] */
/*! export subMonth [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateStrToDateObj": () => /* binding */ dateStrToDateObj,
/* harmony export */   "getDateInfo": () => /* binding */ getDateInfo,
/* harmony export */   "getDays": () => /* binding */ getDays,
/* harmony export */   "getFirstDay": () => /* binding */ getFirstDay,
/* harmony export */   "getLastDay": () => /* binding */ getLastDay,
/* harmony export */   "getWeek": () => /* binding */ getWeek,
/* harmony export */   "fixYMAfterAdd": () => /* binding */ fixYMAfterAdd,
/* harmony export */   "fixYMAfterSub": () => /* binding */ fixYMAfterSub,
/* harmony export */   "addMonth": () => /* binding */ addMonth,
/* harmony export */   "subMonth": () => /* binding */ subMonth
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/construct */ "./node_modules/@babel/runtime/helpers/esm/construct.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/zz/utils/common.js");
;


var dateStrToDateObj = function dateStrToDateObj(dateStr) {
  if (typeof dateStr !== 'string' || !dateStr.includes('-')) {
    return null;
  }

  var dateStrArr = dateStr.split('-').map(function (str) {
    return str * 1;
  });
  dateStrArr[1] -= 1;

  var dObj = (0,_babel_runtime_helpers_esm_construct__WEBPACK_IMPORTED_MODULE_0__.default)(Date, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(dateStrArr));

  if ((0,_common__WEBPACK_IMPORTED_MODULE_2__.isNaN)(dObj.getTime())) {
    return null;
  }

  return dObj;
};
var getDateInfo = function getDateInfo(dObj) {
  var year = dObj.getFullYear();
  var month = dObj.getMonth() + 1;
  var date = dObj.getDate();
  return {
    year: year,
    month: month,
    date: date
  };
};

function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

var getDays = function getDays(year, month) {
  var day30 = [4, 6, 8, 9, 11];
  var day31 = [1, 3, 5, 7, 8, 10, 12];
  var days = day31.includes(month) ? 31 : day30.includes(month) ? 30 : isLeapYear(year) ? 29 : 28;
  return days;
};
var getFirstDay = function getFirstDay(dObj) {
  return dObj.getDay();
};
var getLastDay = function getLastDay(firstDay, days) {
  return (firstDay + days - 1) % 7;
};
var getWeek = function getWeek(day) {
  return Math.ceil(day / 7);
};
var fixYMAfterAdd = function fixYMAfterAdd(year, month) {
  if (month > 12) {
    year += 1;
    month -= 12;
  }

  return {
    year: year,
    month: month
  };
};
var fixYMAfterSub = function fixYMAfterSub(year, month) {
  if (month < 1) {
    year -= 1;
    month += 12;
  }

  return {
    year: year,
    month: month
  };
};
var addMonth = function addMonth(ym, number) {
  var year = ym.year,
      month = ym.month;
  month += number;
  var fixYM = fixYMAfterAdd(year, month);
  ym.year = fixYM.year;
  ym.month = fixYM.month;
};
var subMonth = function subMonth(ym, number) {
  var year = ym.year,
      month = ym.month;
  month -= number;
  var fixYM = fixYMAfterSub(year, month);
  ym.year = fixYM.year;
  ym.month = fixYM.month;
};

/***/ }),

/***/ "./src/zz/utils/dom.js":
/*!*****************************!*\
  !*** ./src/zz/utils/dom.js ***!
  \*****************************/
/*! namespace exports */
/*! export addClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createDom [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getClassByInterval [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isTag [provided] [no usage info] [missing usage info prevents renaming] */
/*! export parentAppendChildren [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removeClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setAttrs [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClass": () => /* binding */ addClass,
/* harmony export */   "removeClass": () => /* binding */ removeClass,
/* harmony export */   "setAttrs": () => /* binding */ setAttrs,
/* harmony export */   "createDom": () => /* binding */ createDom,
/* harmony export */   "getClassByInterval": () => /* binding */ getClassByInterval,
/* harmony export */   "isTag": () => /* binding */ isTag,
/* harmony export */   "parentAppendChildren": () => /* binding */ parentAppendChildren,
/* harmony export */   "initClass": () => /* binding */ initClass
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/zz/utils/common.js");
;
var addClass = function addClass(dom, cls) {
  if (!(0,_common__WEBPACK_IMPORTED_MODULE_0__.isArr)(cls)) return false;

  for (var i = 0; i < cls.length; i++) {
    var clsname = cls[i];
    dom.classList.add(clsname);
  }
};
var removeClass = function removeClass(dom, cls) {
  if (!(0,_common__WEBPACK_IMPORTED_MODULE_0__.isArr)(cls)) return false;

  for (var i = 0; i < cls.length; i++) {
    var clsname = cls[i];
    dom.classList.remove(clsname);
  }
};
var setAttrs = function setAttrs(dom, attrs) {
  if (!(0,_common__WEBPACK_IMPORTED_MODULE_0__.isObj)(attrs)) return false;

  for (var key in attrs) {
    var val = attrs[key];

    if (typeof val === 'string') {
      dom.setAttribute(key, val);
    }
  }
};
var createDom = function createDom() {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'span';
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var cls = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var attrs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var dom = document.createElement(tag);
  dom.textContent = content;
  cls.length && addClass(dom, cls);
  (0,_common__WEBPACK_IMPORTED_MODULE_0__.isObj)(attrs) && setAttrs(dom, attrs);
  return dom;
};
/**
 * @param interval 區間 -1 | 0 | 1
 * @param classes [-1 class, 0 class, 1 class]
 */

function getClassByInterval(interval, classes) {
  if (interval === 1) {
    return classes[2];
  } else if (interval === -1) {
    return classes[0];
  } else if (interval === 0) {
    return classes[1];
  } else {
    throw new Error('getClassByInterval params is wrong');
  }
}
function isTag(tag) {
  if (typeof tag === 'string') {
    var searchLv1Tag = 'div,span,i,img,ul,li,p,button';
    var searchLv2Tag = 'article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,figcaption,figure,canvas,script,form,input,select,textarea';
    var searchLv3Tag = 'html,body,base,head,link,meta,style,title,dd,dl,dt,ol,picture,address,main,audio,video,time,caption,col,colgroup,table,thead,tbody,td,th,tr';
    var searchLv4Tag = 'hgroup,hr,pre,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,strong,sub,sup,u,var,wbr,area,map,track,embed,object,param,source,noscript,del,ins,datalist,fieldset,label,legend,meter,optgroup,option,output,progress,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot';
    var svgTag = 'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view'; // MDN said custom element names must contain a hyphen.

    var customEl = /^[a-zA-Z]+-[a-zA-Z]+(-[a-zA-Z]+)*$/;
    var sourceTags = [searchLv1Tag, searchLv2Tag, svgTag, searchLv3Tag, searchLv4Tag];
    return sourceTags.some(function (sourceTag) {
      return sourceTag.includes(tag);
    }) || customEl.test(tag);
  }

  return false;
}
function parentAppendChildren(parent, children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    parent.appendChild(child);
  }
} // INIT

function initClass(options, dCls) {
  var clsObj = {};

  for (var clsKey in dCls) {
    var cls = options[clsKey];

    if (cls !== undefined) {
      if (typeof cls !== 'string') {
        cls = dCls[clsKey];
      }

      delete options[clsKey];
    } else {
      cls = dCls[clsKey];
    }

    clsObj[clsKey] = cls ? cls.split(' ') : [];
  }

  return clsObj;
}

/***/ }),

/***/ "./src/zz/utils/index.js":
/*!*******************************!*\
  !*** ./src/zz/utils/index.js ***!
  \*******************************/
/*! namespace exports */
/*! export addClass [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/dom.js .addClass */
/*! export addMonth [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/date.js .addMonth */
/*! export callCallbacks [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/common.js .callCallbacks */
/*! export createDom [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/dom.js .createDom */
/*! export dateStrToDateObj [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/date.js .dateStrToDateObj */
/*! export deepcopy [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/common.js .deepcopy */
/*! export fixYMAfterAdd [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/date.js .fixYMAfterAdd */
/*! export fixYMAfterSub [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/date.js .fixYMAfterSub */
/*! export gcArr [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/common.js .gcArr */
/*! export gcObj [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/common.js .gcObj */
/*! export getClassByInterval [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/dom.js .getClassByInterval */
/*! export getDateInfo [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/date.js .getDateInfo */
/*! export getDays [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/date.js .getDays */
/*! export getFirstDay [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/date.js .getFirstDay */
/*! export getLastDay [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/date.js .getLastDay */
/*! export getWeek [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/date.js .getWeek */
/*! export initCallback [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/common.js .initCallback */
/*! export initClass [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/dom.js .initClass */
/*! export isArr [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/common.js .isArr */
/*! export isFunc [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/common.js .isFunc */
/*! export isNaN [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/common.js .isNaN */
/*! export isObj [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/common.js .isObj */
/*! export isTag [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/dom.js .isTag */
/*! export judgeInterval [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/common.js .judgeInterval */
/*! export parentAppendChildren [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/dom.js .parentAppendChildren */
/*! export removeClass [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/dom.js .removeClass */
/*! export setAttrs [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/dom.js .setAttrs */
/*! export subMonth [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/date.js .subMonth */
/*! export tsEnumToObj [provided] [no usage info] [missing usage info prevents renaming] -> ./src/zz/utils/common.js .tsEnumToObj */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "callCallbacks": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.callCallbacks,
/* harmony export */   "deepcopy": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.deepcopy,
/* harmony export */   "gcArr": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.gcArr,
/* harmony export */   "gcObj": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.gcObj,
/* harmony export */   "initCallback": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.initCallback,
/* harmony export */   "isArr": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isArr,
/* harmony export */   "isFunc": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isFunc,
/* harmony export */   "isNaN": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isNaN,
/* harmony export */   "isObj": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.isObj,
/* harmony export */   "judgeInterval": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.judgeInterval,
/* harmony export */   "tsEnumToObj": () => /* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_0__.tsEnumToObj,
/* harmony export */   "addMonth": () => /* reexport safe */ _date__WEBPACK_IMPORTED_MODULE_1__.addMonth,
/* harmony export */   "dateStrToDateObj": () => /* reexport safe */ _date__WEBPACK_IMPORTED_MODULE_1__.dateStrToDateObj,
/* harmony export */   "fixYMAfterAdd": () => /* reexport safe */ _date__WEBPACK_IMPORTED_MODULE_1__.fixYMAfterAdd,
/* harmony export */   "fixYMAfterSub": () => /* reexport safe */ _date__WEBPACK_IMPORTED_MODULE_1__.fixYMAfterSub,
/* harmony export */   "getDateInfo": () => /* reexport safe */ _date__WEBPACK_IMPORTED_MODULE_1__.getDateInfo,
/* harmony export */   "getDays": () => /* reexport safe */ _date__WEBPACK_IMPORTED_MODULE_1__.getDays,
/* harmony export */   "getFirstDay": () => /* reexport safe */ _date__WEBPACK_IMPORTED_MODULE_1__.getFirstDay,
/* harmony export */   "getLastDay": () => /* reexport safe */ _date__WEBPACK_IMPORTED_MODULE_1__.getLastDay,
/* harmony export */   "getWeek": () => /* reexport safe */ _date__WEBPACK_IMPORTED_MODULE_1__.getWeek,
/* harmony export */   "subMonth": () => /* reexport safe */ _date__WEBPACK_IMPORTED_MODULE_1__.subMonth,
/* harmony export */   "addClass": () => /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.addClass,
/* harmony export */   "createDom": () => /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.createDom,
/* harmony export */   "getClassByInterval": () => /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.getClassByInterval,
/* harmony export */   "initClass": () => /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.initClass,
/* harmony export */   "isTag": () => /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.isTag,
/* harmony export */   "parentAppendChildren": () => /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.parentAppendChildren,
/* harmony export */   "removeClass": () => /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.removeClass,
/* harmony export */   "setAttrs": () => /* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.setAttrs
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/zz/utils/common.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date */ "./src/zz/utils/date.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/zz/utils/dom.js");




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/zz/index.js");
/******/ })()
.default;
});
//# sourceMappingURL=zz.js.map