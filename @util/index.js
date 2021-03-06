(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/util/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fast-safe-stringify/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fast-safe-stringify/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = stringify;
stringify.default = stringify;
stringify.stable = deterministicStringify;
stringify.stableStringify = deterministicStringify;
var arr = [];
var replacerStack = []; // Regular stringify

function stringify(obj, replacer, spacer) {
  decirc(obj, '', [], undefined);
  var res;

  if (replacerStack.length === 0) {
    res = JSON.stringify(obj, replacer, spacer);
  } else {
    res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
  }

  while (arr.length !== 0) {
    var part = arr.pop();

    if (part.length === 4) {
      Object.defineProperty(part[0], part[1], part[3]);
    } else {
      part[0][part[1]] = part[2];
    }
  }

  return res;
}

function decirc(val, k, stack, parent) {
  var i;

  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);

        if (propertyDescriptor.get !== undefined) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, {
              value: '[Circular]'
            });
            arr.push([parent, k, val, propertyDescriptor]);
          } else {
            replacerStack.push([val, k]);
          }
        } else {
          parent[k] = '[Circular]';
          arr.push([parent, k, val]);
        }

        return;
      }
    }

    stack.push(val); // Optimize for Arrays. Big arrays could kill the performance otherwise!

    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, stack, val);
      }
    } else {
      var keys = Object.keys(val);

      for (i = 0; i < keys.length; i++) {
        var key = keys[i];
        decirc(val[key], key, stack, val);
      }
    }

    stack.pop();
  }
} // Stable-stringify


function compareFunction(a, b) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}

function deterministicStringify(obj, replacer, spacer) {
  var tmp = deterministicDecirc(obj, '', [], undefined) || obj;
  var res;

  if (replacerStack.length === 0) {
    res = JSON.stringify(tmp, replacer, spacer);
  } else {
    res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
  }

  while (arr.length !== 0) {
    var part = arr.pop();

    if (part.length === 4) {
      Object.defineProperty(part[0], part[1], part[3]);
    } else {
      part[0][part[1]] = part[2];
    }
  }

  return res;
}

function deterministicDecirc(val, k, stack, parent) {
  var i;

  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);

        if (propertyDescriptor.get !== undefined) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, {
              value: '[Circular]'
            });
            arr.push([parent, k, val, propertyDescriptor]);
          } else {
            replacerStack.push([val, k]);
          }
        } else {
          parent[k] = '[Circular]';
          arr.push([parent, k, val]);
        }

        return;
      }
    }

    if (typeof val.toJSON === 'function') {
      return;
    }

    stack.push(val); // Optimize for Arrays. Big arrays could kill the performance otherwise!

    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, stack, val);
      }
    } else {
      // Create a temporary object in the required way
      var tmp = {};
      var keys = Object.keys(val).sort(compareFunction);

      for (i = 0; i < keys.length; i++) {
        var key = keys[i];
        deterministicDecirc(val[key], key, stack, val);
        tmp[key] = val[key];
      }

      if (parent !== undefined) {
        arr.push([parent, k, val]);
        parent[k] = tmp;
      } else {
        return tmp;
      }
    }

    stack.pop();
  }
} // wraps replacer function to handle values we couldn't replace
// and mark them as [Circular]


function replaceGetterValues(replacer) {
  replacer = replacer !== undefined ? replacer : function (k, v) {
    return v;
  };
  return function (key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i];

        if (part[1] === key && part[0] === val) {
          val = '[Circular]';
          replacerStack.splice(i, 1);
          break;
        }
      }
    }

    return replacer.call(this, key, val);
  };
}

/***/ }),

/***/ "./node_modules/hash-string/build/hash-string.js":
/*!*******************************************************!*\
  !*** ./node_modules/hash-string/build/hash-string.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  /**
      A string hashing function based on Daniel J. Bernstein's popular 'times 33' hash algorithm.
      @param {string} text - String to hash
      @return {number} Resulting number.
  */
  function hash(text) {
    'use strict';

    var hash = 5381,
        index = text.length;

    while (index) {
      hash = hash * 33 ^ text.charCodeAt(--index);
    }

    return hash >>> 0;
  }

  return hash;
});

/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); //上报数据类型

exports.reportType = ['unKownType', 'log', 'network', 'vue']; //版本号

exports.version = '2.0.0-alpha.5'; //公共中间件

exports.publicMiddleScopeNames = ['sendMessage', 'error'];

/***/ }),

/***/ "./src/util/console.ts":
/*!*****************************!*\
  !*** ./src/util/console.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
var $log = window.console.log;
var $wran = window.console.warn;
var $error = window.console.error; //暂时取消掉这个,不然引入文件就会进行拦截,导致用户误解
// window.console.log = (...args) => {
//     $log.apply(window.console, args);
// };
// window.console.error = (...args) => {
//     $error.apply(window.console, args);
// };
// window.console.warn = (...args) => {
//     $wran.apply(window.console, args);
// };

exports.log = $log;
exports.error = $error;
exports.wran = $wran;

exports.devLog = function (develop) {
  if (develop === void 0) {
    develop = true;
  }

  var arg = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    arg[_i - 1] = arguments[_i];
  }

  if (!develop) return;
  return exports.log.apply(void 0, __spread(["[keepObserver] log message:"], arg));
};

exports.devWarn = function (develop) {
  if (develop === void 0) {
    develop = true;
  }

  var arg = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    arg[_i - 1] = arguments[_i];
  }

  if (!develop) return;
  return exports.wran.apply(void 0, __spread(["[keepObserver] wran message:"], arg));
};

exports.warnError = function () {
  var msg = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    msg[_i] = arguments[_i];
  }

  return exports.error.apply(void 0, __spread(["[keepObserver] find error! message:"], msg));
};

/***/ }),

/***/ "./src/util/deviceID.ts":
/*!******************************!*\
  !*** ./src/util/deviceID.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Tools = __importStar(__webpack_require__(/*! ./tool */ "./src/util/tool.ts")); //storge-key


var RecordKey = 'deviceId';

var getDeviceId = function () {
  return storageModel();
}; //localStorage model


var storageModel = function () {
  if (!window.localStorage) {
    return false;
  }

  var deviceID = Tools.getStorage(RecordKey);

  if (!deviceID) {
    deviceID = Tools.getUniqueID();
    Tools.setStorage(RecordKey, deviceID);
  }

  return deviceID;
}; //iframe model
//暂未开启 需要先写好iframe页面
//这里还有个问题 iframe是异步获取deviceID 现在的流程放在instance初始化阶段, 异步获取会影响接下来一些流程
//暂不启用, 放在第二次重构升级在启用


var iframeModel = function () {};

exports.default = getDeviceId;

/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Tools = __importStar(__webpack_require__(/*! ./tool */ "./src/util/tool.ts"));

exports.Tools = Tools;

var consoleTools = __importStar(__webpack_require__(/*! ./console */ "./src/util/console.ts"));

exports.consoleTools = consoleTools;

var deviceID_1 = __importDefault(__webpack_require__(/*! ./deviceID */ "./src/util/deviceID.ts"));

exports.getDeviceId = deviceID_1.default;

var public_1 = __importDefault(__webpack_require__(/*! ./share/public */ "./src/util/share/public/index.ts"));

exports.KeepObserverPublic = public_1.default;

var middleware_1 = __importDefault(__webpack_require__(/*! ./share/middleware */ "./src/util/share/middleware/index.ts"));

exports.KeepObserverMiddleWare = middleware_1.default;

/***/ }),

/***/ "./src/util/share/middleware/index.ts":
/*!********************************************!*\
  !*** ./src/util/share/middleware/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Tools = __importStar(__webpack_require__(/*! ../../../util/tool */ "./src/util/tool.ts"));

var consoleTools = __importStar(__webpack_require__(/*! ../../../util/console */ "./src/util/console.ts"));

var index_1 = __webpack_require__(/*! ../../../constants/index */ "./src/constants/index.ts");

var KeepObserverMiddleWare =
/** @class */
function () {
  function KeepObserverMiddleWare(_a) {
    var _b = _a.develop,
        develop = _b === void 0 ? false : _b,
        _c = _a.runMiddleTimeOut,
        runMiddleTimeOut = _c === void 0 ? 30000 : _c; //当前是否处于开发模式

    this._develop = develop; //中间件超时时间

    this._runMiddleTimeOut = runMiddleTimeOut; //中间件初始化

    this._middles = {}; //中间件执行过程中 禁止重复触发 loop

    this._runMiddleBuff = {};
  }

  KeepObserverMiddleWare.usePublishMiddles = function (scopeName, middlesFn) {
    var _staticSelf = this;

    if (_staticSelf.publicMiddles[scopeName]) {
      _staticSelf.publicMiddles[scopeName].unshift(middlesFn);

      return _staticSelf.publicMiddles;
    }

    _staticSelf.publicMiddles[scopeName] = [];

    _staticSelf.publicMiddles[scopeName].unshift(middlesFn);

    return _staticSelf.publicMiddles;
  }; //unshift 从前向后执行 第一个加入的中间件最后一个执行


  KeepObserverMiddleWare.prototype.use = function (scopeName, middlesFn) {
    var _self = this;

    if (_self._middles[scopeName]) {
      return _self._middles[scopeName].unshift(middlesFn);
    }

    _self._middles[scopeName] = [];
    return _self._middles[scopeName].unshift(middlesFn);
  }; //中间件异步执行


  KeepObserverMiddleWare.prototype.run = function (scopeName) {
    var _this = this;

    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    var _self = this; //获取到公共中间件聚合


    var publicMiddles = this.constructor.publicMiddles;

    if (!_self._middles[scopeName] && !publicMiddles[scopeName]) {
      if (index_1.publicMiddleScopeNames.indexOf(scopeName) > -1) {
        return new Promise(function (resolve) {
          return resolve.apply(void 0, __spread(args));
        });
      }

      consoleTools.warnError(scopeName + " middles function is undefined");
      return Promise.reject(scopeName + " middles function is undefined");
    }

    if (_self._runMiddleBuff[scopeName]) {
      _self._develop && consoleTools.warnError(scopeName + " middles is run");
      return Promise.reject(scopeName + " middles is run");
    } //合并中间件队列


    var publicMiddleQueue = publicMiddles[scopeName] || [];
    var middlesQueue = publicMiddleQueue.concat(_self._middles[scopeName] || []);
    var len = middlesQueue.length;
    var index = 1; //开始执行

    _self._runMiddleBuff[scopeName] = true;
    this.constructor.currentRunMiddle = scopeName;
    return new Promise(function (resolve, reject) {
      //设置超时
      var runTimeout = setTimeout(function () {
        index = len;
        _self._runMiddleBuff[scopeName] = false;
        var errorMsg = scopeName + " middles exec is timeout " + _this._runMiddleTimeOut + "ms";
        consoleTools.warnError(errorMsg);

        if (scopeName !== 'error') {
          _self.throwError(errorMsg);
        }

        reject(errorMsg);
      }, _this._runMiddleTimeOut); // 中断方法，停止执行剩下的中间件,直接返回

      var interrupt = function () {
        var result = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          result[_i] = arguments[_i];
        }

        index = len;
        clearTimeout(runTimeout);
        _self._runMiddleBuff[scopeName] = false;
        return resolve.apply(void 0, __spread(result));
      };

      try {
        //向下执行中间件
        var runNext_1 = function (next) {
          return function () {
            var params = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              params[_i] = arguments[_i];
            }

            if (index === len) {
              return params;
            }

            index++;
            return next.apply(void 0, __spread(params));
          };
        };

        var exec = middlesQueue.reduce(function (a, b) {
          return function () {
            var params = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              params[_i] = arguments[_i];
            }

            return a(interrupt, runNext_1(b.apply(void 0, __spread(params))));
          };
        });
        exec(interrupt, interrupt).apply(void 0, __spread(args));
      } catch (err) {
        _self._runMiddleBuff[scopeName] = false;
        clearTimeout(runTimeout);
        var errorMsg = scopeName + " middles exec is error:" + Tools.toString(err);
        consoleTools.warnError(errorMsg);

        if (scopeName !== 'error') {
          _self.throwError(errorMsg);
        }

        reject(errorMsg);
      }
    }).finally(function () {
      _this.constructor.currentRunMiddle = false;
    });
  }; //抛出中间件错误


  KeepObserverMiddleWare.prototype.throwError = function () {
    var err = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      err[_i] = arguments[_i];
    } //catch resolve Uncaught (in promise) error


    this.run.apply(this, __spread(['error'], err)).catch(function (e) {});
  };

  ; //公共方法和部分

  KeepObserverMiddleWare.publicMiddles = {};
  KeepObserverMiddleWare.currentRunMiddle = false;
  return KeepObserverMiddleWare;
}();

exports.default = KeepObserverMiddleWare;

/***/ }),

/***/ "./src/util/share/public/index.ts":
/*!****************************************!*\
  !*** ./src/util/share/public/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __read = this && this.__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spread = this && this.__spread || function () {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var index_1 = __webpack_require__(/*! ../../../constants/index */ "./src/constants/index.ts");

var index_2 = __importDefault(__webpack_require__(/*! ../middleware/index */ "./src/util/share/middleware/index.ts"));

var Tools = __importStar(__webpack_require__(/*! ../../tool */ "./src/util/tool.ts"));

var KeepObserverPublic =
/** @class */
function () {
  function KeepObserverPublic(config) {
    if (config === void 0) {
      config = {};
    }

    var _a = config,
        _b = _a.develop,
        develop = _b === void 0 ? false : _b,
        _c = _a.runMiddleTimeOut,
        runMiddleTimeOut = _c === void 0 ? 30000 : _c; //当前是否处于开发模式

    this._develop = develop; //由子元素继承并重载

    this.middleScopeNames = []; //由子元素继承

    this._publicMiddleScopeNames = index_1.publicMiddleScopeNames; //注册中间件实例

    this._middleWareInstance = new index_2.default(Tools.extend({
      develop: develop,
      runMiddleTimeOut: runMiddleTimeOut
    }, config));
  }

  KeepObserverPublic.extendReport = function (params) {
    var newParams = __assign({}, this.extendReportParams, params);

    this.extendReportParams = newParams;
    return newParams;
  }; //注册中间件逻辑


  KeepObserverPublic.prototype.useMiddle = function (scopeName, middlesFn) {
    var _self = this;

    _self._middleWareInstance.use(scopeName, middlesFn);

    return _self;
  }; //执行中间件逻辑


  KeepObserverPublic.prototype.runMiddle = function (scopeName) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    var _a;

    var _self = this; //use catch resolve Uncaught (in promise) error


    return (_a = _self._middleWareInstance).run.apply(_a, __spread([scopeName], args)).catch(function (e) {});
  }; //整理上报数据


  KeepObserverPublic.prototype.handleReportData = function (params) {
    var defaultParams = {
      data: undefined,
      type: 'undefined',
      typeName: 'undefined'
    }; //获取到公共中间件聚合

    var extendParams = this.constructor.extendReportParams;

    var reportParams = __assign({}, defaultParams, {
      location: window.location.href,
      environment: window.navigator.userAgent,
      reportTime: new Date().getTime()
    }, params, extendParams);

    return reportParams;
  };

  KeepObserverPublic.extendReportParams = {};
  return KeepObserverPublic;
}();

exports.default = KeepObserverPublic;

/***/ }),

/***/ "./src/util/tool.ts":
/*!**************************!*\
  !*** ./src/util/tool.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var console_1 = __webpack_require__(/*! ./console */ "./src/util/console.ts");

var hash_string_1 = __importDefault(__webpack_require__(/*! hash-string */ "./node_modules/hash-string/build/hash-string.js"));

var fast_safe_stringify_1 = __importDefault(__webpack_require__(/*! fast-safe-stringify */ "./node_modules/fast-safe-stringify/index.js"));
/**
 * 根据时间搓 返回时间
 * @param date format
 * @return string
 */


function dateFormat(date, format) {
  if (!format || typeof format !== 'string') {
    console.error('format is undefiend or type is Error');
    return '';
  }

  date = date instanceof Date ? date : typeof date === 'number' || typeof date === 'string' ? new Date(date) : new Date(); //解析

  var formatReg = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (var reg in formatReg) {
    if (new RegExp(reg).test(format)) {
      var match = RegExp.lastMatch;
      format = format.replace(match, formatReg[reg] < 10 ? '0' + formatReg[reg] : formatReg[reg].toString());
    }
  }

  return format;
}

exports.dateFormat = dateFormat;
/**
 * 检查script基本数据类型
 * @param mixed value
 * @return boolean
 */

function isNumber(value) {
  return Object.prototype.toString.call(value) == '[object Number]';
}

exports.isNumber = isNumber;

function isString(value) {
  return Object.prototype.toString.call(value) == '[object String]';
}

exports.isString = isString;

function isArray(value) {
  return Object.prototype.toString.call(value) == '[object Array]';
}

exports.isArray = isArray;

function isBoolean(value) {
  return Object.prototype.toString.call(value) == '[object Boolean]';
}

exports.isBoolean = isBoolean;

function isRegExp(value) {
  return Object.prototype.toString.call(value) == "[object RegExp]";
}

exports.isRegExp = isRegExp;

function isDateObject(value) {
  return Object.prototype.toString.call(value) == "[object Date]";
}

exports.isDateObject = isDateObject;

function isUndefined(value) {
  return value === undefined;
}

exports.isUndefined = isUndefined;

function isNull(value) {
  return value === null;
}

exports.isNull = isNull;

function isExist(value) {
  return !isUndefined(value) && !isNull(value);
}

exports.isExist = isExist;

function isSymbol(value) {
  return Object.prototype.toString.call(value) == '[object Symbol]';
}

exports.isSymbol = isSymbol;

function isSVGElement(value) {
  return isElement(value) && (value instanceof SVGElement || value.ownerSVGElement);
}

exports.isSVGElement = isSVGElement;

function isObject(value) {
  return Object.prototype.toString.call(value) == '[object Object]' || // if it isn't a primitive value, then it is a common object
  !isNumber(value) && !isString(value) && !isBoolean(value) && !isDateObject(value) && !isRegExp(value) && !isArray(value) && !isNull(value) && !isFunction(value) && !isUndefined(value) && !isSymbol(value);
}

exports.isObject = isObject;

function isEmptyObject(obj) {
  if (!isObject(obj)) {
    return true;
  }

  for (var key in obj) {
    return false;
  }

  return true;
}

exports.isEmptyObject = isEmptyObject;

function isEmptyArray(array) {
  if (!isArray(array)) {
    return true;
  }

  return array.length > 0 ? false : true;
}

exports.isEmptyArray = isEmptyArray;

function isFunction(value) {
  return Object.prototype.toString.call(value) == '[object Function]';
}

exports.isFunction = isFunction;

function isElement(value) {
  return typeof HTMLElement === 'object' ? value instanceof HTMLElement : //DOM2
  value && typeof value === "object" && value !== null && value.nodeType === 1 && typeof value.nodeName === "string";
}

exports.isElement = isElement;

function isWindow(value) {
  var toString = Object.prototype.toString.call(value);
  return toString == '[object global]' || toString == '[object Window]' || toString == '[object DOMWindow]';
}

exports.isWindow = isWindow;
/**
 * 检查是否是普通空对象
 * @param object obj
 * @return boolean
 */

function isPlainObject(obj) {
  var hasOwn = Object.prototype.hasOwnProperty; // Must be an Object.

  if (!obj || typeof obj !== 'object' || obj.nodeType || isWindow(obj)) {
    return false;
  }

  try {
    if (obj.constructor && !hasOwn.call(obj, 'constructor') && !hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
      return false;
    }
  } catch (e) {
    return false;
  }

  var key;

  for (key in obj) {}

  return key === undefined || hasOwn.call(obj, key);
}

exports.isPlainObject = isPlainObject;
/*
 * 检查是否是class 实例对象
*/

function isClassObject(obj) {
  return isObject(obj) && !isPlainObject(obj) ? true : false;
}

exports.isClassObject = isClassObject;
/*
  转换工具
 */

function toArray(array) {
  if (Array.from) {
    return Array.from(array);
  }

  return Array.prototype.slice.call(array);
}

exports.toArray = toArray;

function toString(content) {
  if (typeof content === 'string') {
    return content;
  }

  return content.toString();
}

exports.toString = toString;
/*
    辅助存储保存监控数据
*/
//sessionStorage

function setSessionStorage(key, value) {
  if (!window.sessionStorage) {
    return;
  }

  key = 'keepObserverData_' + key;
  value = JSON.stringify(value);
  sessionStorage.setItem(key, value);
}

exports.setSessionStorage = setSessionStorage;

function getSessionStorage(key) {
  if (!window.sessionStorage) {
    return;
  }

  key = 'keepObserverData_' + key;
  var value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : '';
}

exports.getSessionStorage = getSessionStorage;

function removeSessionStorage(key) {
  if (!window.sessionStorage) {
    return;
  }

  key = 'keepObserverData_' + key;
  sessionStorage.removeItem(key);
}

exports.removeSessionStorage = removeSessionStorage; //localStorage

function setStorage(key, value) {
  if (!window.localStorage) {
    return;
  }

  key = 'keepObserverData_' + key;
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
}

exports.setStorage = setStorage;

function getStorage(key) {
  if (!window.localStorage) {
    return;
  }

  key = 'keepObserverData_' + key;
  var value = localStorage.getItem(key);
  return value ? JSON.parse(value) : '';
}

exports.getStorage = getStorage;

function removeStorage(key) {
  if (!window.localStorage) {
    return;
  }

  key = 'keepObserverData_' + key;
  localStorage.removeItem(key);
}

exports.removeStorage = removeStorage;
/*
    参考Vconsole 生产唯一ID
 */

function getUniqueID() {
  var id = 'xxxxxxxx-xxx-t-xxx--xxxxxxxx'.replace(/[xyt]/g, function (c) {
    var r = Math.random() * 16 | 0,
        t = new Date().getTime(),
        v = c == 'x' ? r : c == 't' ? t : r & 0x3 | 0x8;
    return v.toString(16);
  });
  return id;
}

exports.getUniqueID = getUniqueID;
/*
    深度合并内容
    引用类型克隆合并
    arguments[0] = target
    arguments type is Object Or Array
    多内容合并覆盖优先级: arguments[0]<arguments[1]<arguments[2]..
    如果sources 不是数组或者对象 则直接忽略
 */

function extend() {
  var arg = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    arg[_i] = arguments[_i];
  }

  var args = toArray(arguments);

  if (args.length === 0) {
    console.error("extends params is undefined");
    return {};
  }

  if (args.length === 1) {
    return args[0];
  }

  var target = args[0];
  var sources = args.slice(1, args.length);

  if (!isObject(target) && !isArray(target)) {
    target = {};
  }

  sources.map(function (item) {
    //防止死循环
    if (target === item) {
      return false;
    } //如果内容是对象


    if (isObject(item)) {
      //开始遍历
      for (var key in item) {
        //如果内容是对象
        if (isObject(item[key]) && !isEmptyObject(item[key])) {
          //修正数据
          target[key] = target[key] && isObject(target[key]) ? target[key] : {};
          target[key] = extend(target[key], item[key]);
        } else if (isArray(item[key]) && !isEmptyArray(item[key])) {
          //修正数据
          target[key] = target[key] && isArray(target[key]) ? target[key] : [];
          target[key] = extend(target[key], item[key]);
        } else if (isObject(item[key]) && isEmptyObject(item[key])) {
          target[key] = {};
        } else if (isArray(item[key]) && isEmptyArray(item[key])) {
          target[key] = [];
        } else {
          //基本类型直接赋值
          target[key] = item[key];
        }
      }
    } else if (isArray(item)) {
      for (var i = 0; i < item.length; i++) {
        //如果内容是对象
        if (isObject(item[i]) && !isEmptyObject(item[i])) {
          //修正数据
          target[i] = target[i] && isObject(target[i]) ? target[i] : {};
          target[i] = extend(target[i], item[i]);
        } else if (isArray(item[i]) && !isEmptyArray(item[i])) {
          //修正数据
          target[i] = target[i] && isArray(target[i]) ? target[i] : [];
          target[i] = extend(target[i], item[i]);
        } else if (isObject(item[i]) && isEmptyObject(item[i])) {
          target[i] = {};
        } else if (isArray(item[i]) && isEmptyArray(item[i])) {
          target[i] = [];
        } else {
          //基本类型直接赋值
          target[i] = item[i];
        }
      }
    } //其他类型直接忽略

  });
  return target;
}

exports.extend = extend;
/*
    mixin calss method and params
*/

function mixin(origin, provider) {
  if (!provider || !isObject(provider) || isEmptyObject(provider)) {
    console_1.warnError('keepObserver $mixin receive params not right');
  }

  for (var key in provider) {
    if (origin[key]) {
      console_1.warnError('keepObserver $mixin method key: ' + key + ' is exist');
      continue;
    } //不允许重写


    Object.defineProperty(origin, key, {
      configurable: false,
      enumerable: true,
      value: provider[key]
    });
  }
}

exports.mixin = mixin;
/**
 * @filter:
 * @param obj { array and object}
 * @param call { array.filter(callback)}
 * @return: new obj
 */

function filter(obj, callback) {
  if (!isArray(obj) && !isObject(obj) || !isFunction(callback)) {
    return obj;
  }

  if (isArray(obj)) {
    return obj.filter(callback);
  }

  var newObje = {};

  for (var key in obj) {
    var value = obj[key];

    if (callback(value, key)) {
      newObje[key] = value;
    }
  }

  return newObje;
}

exports.filter = filter;
/**
 * @map:
 * @param obj { array and object}
 * @param call { array.filter(callback)}
 * @return: new obj
 */

function map(obj, callback) {
  if (!isArray(obj) && !isObject(obj) || !isFunction(callback)) {
    return obj;
  }

  if (isArray(obj)) {
    return obj.map(callback);
  }

  var newObje = {};

  for (var key in obj) {
    var value = obj[key];
    newObje[key] = callback(value, key);
  }

  return newObje;
}

exports.map = map;
/**
 * @map:
 * @param obj { array and object}
 * @param call { array.filter(callback)}
 * @return: new Array
 */

function mapToArray(obj, callback) {
  if (!isArray(obj) && !isObject(obj) || !isFunction(callback)) {
    return obj;
  }

  if (isArray(obj)) {
    return obj.map(callback);
  }

  var newArray = [];

  for (var key in obj) {
    var value = obj[key];
    newArray.push(callback(value, key));
  }

  return newArray;
}

exports.mapToArray = mapToArray;

function throttleWrap(delay) {
  return function (Fn) {
    var timeout = null;
    return function () {
      var arg = arguments;

      if (timeout) {
        clearTimeout(timeout);
      }

      ;
      timeout = setTimeout(function () {
        Fn(arg);
      }, delay);
    };
  };
}

exports.throttleWrap = throttleWrap;

function debounceWrap(delay) {
  return function (Fn) {
    var timeout = null;
    return function () {
      var any = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        any[_i] = arguments[_i];
      }

      var arg = arguments;

      if (timeout !== null) {
        return false;
      }

      ;
      timeout = setTimeout(function () {
        Fn(arg);
        clearTimeout(timeout);
        timeout = null;
      }, delay);
    };
  };
}

exports.debounceWrap = debounceWrap;

function objectStringify(object) {
  return fast_safe_stringify_1.default(object, function (key, value) {
    if (isWindow(value)) {
      return '[Window]';
    }

    if (isElement(value)) {
      return '[DomElement]';
    }

    if (value instanceof Error) {
      return toString(value);
    }

    return value;
  });
}

exports.objectStringify = objectStringify;

function getHashCode(object) {
  //Times33
  try {
    var hashCode = hash_string_1.default(objectStringify(object)); //md5(objectStringify(object))

    return toString(hashCode);
  } catch (err) {
    return toString(hash_string_1.default(toString(err))); //md5(toString(err))
  }
}

exports.getHashCode = getHashCode;

function substringLimt(text, limt, flag) {
  if (limt === void 0) {
    limt = 200;
  }

  if (flag === void 0) {
    flag = true;
  }

  text = isString(text) ? text : toString(text);
  return text.substring(0, text.length > limt ? limt : text.length) + (text.length > limt && flag ? '...' : '');
}

exports.substringLimt = substringLimt;

/***/ })

/******/ });
});