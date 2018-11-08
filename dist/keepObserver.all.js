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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.dateFormat = dateFormat;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isUndefined = isUndefined;
exports.isNull = isNull;
exports.isSymbol = isSymbol;
exports.isObject = isObject;
exports.isEmptyObject = isEmptyObject;
exports.isEmptyArray = isEmptyArray;
exports.isFunction = isFunction;
exports.isElement = isElement;
exports.isWindow = isWindow;
exports.isPlainObject = isPlainObject;
exports.toArray = toArray;
exports.toString = toString;
exports.setStorage = setStorage;
exports.getStorage = getStorage;
exports.removeStorage = removeStorage;
exports.extend = extend;
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
    date = date instanceof Date ? date : typeof date === 'number' || typeof date === 'string' ? new Date(date) : new Date();
    //解析
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

/**
 * 检查script基本数据类型
 * @param mixed value
 * @return boolean
 */
function isNumber(value) {
    return Object.prototype.toString.call(value) == '[object Number]';
}
function isString(value) {
    return Object.prototype.toString.call(value) == '[object String]';
}
function isArray(value) {
    return Object.prototype.toString.call(value) == '[object Array]';
}
function isBoolean(value) {
    return Object.prototype.toString.call(value) == '[object Boolean]';
}
function isUndefined(value) {
    return value === undefined;
}
function isNull(value) {
    return value === null;
}
function isSymbol(value) {
    return Object.prototype.toString.call(value) == '[object Symbol]';
}
function isObject(value) {
    return Object.prototype.toString.call(value) == '[object Object]' ||
    // if it isn't a primitive value, then it is a common object
    !isNumber(value) && !isString(value) && !isBoolean(value) && !isArray(value) && !isNull(value) && !isFunction(value) && !isUndefined(value) && !isSymbol(value);
}
function isEmptyObject(obj) {
    if (!isObject(obj)) {
        return true;
    }
    for (var key in obj) {
        return false;
    }
    return true;
}
function isEmptyArray(array) {
    if (!isArray(array)) {
        return true;
    }
    return array.length > 0 ? false : true;
}
function isFunction(value) {
    return Object.prototype.toString.call(value) == '[object Function]';
}
function isElement(value) {
    return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? value instanceof HTMLElement : //DOM2
    value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object" && value !== null && value.nodeType === 1 && typeof value.nodeName === "string";
}
function isWindow(value) {
    var toString = Object.prototype.toString.call(value);
    return toString == '[object global]' || toString == '[object Window]' || toString == '[object DOMWindow]';
}
/**
 * 检查是否是普通空对象
 * @param object obj
 * @return boolean
 */
function isPlainObject(obj) {
    var hasOwn = Object.prototype.hasOwnProperty;
    // Must be an Object.
    if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj.nodeType || isWindow(obj)) {
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

/*
  转换工具
 */
function toArray(array) {
    return Array.prototype.slice.call(array);
}
function toString(content) {
    if (!content) {
        return '';
    }
    if (typeof content === 'string') {
        return content;
    }
    return content.toString();
}

/*
    辅助存储保存监控数据
    localStorage
*/
function setStorage(key, value) {
    if (!window.localStorage) {
        return;
    }
    key = 'keepObserverData_' + key;
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
}
function getStorage(key) {
    if (!window.localStorage) {
        return;
    }
    key = 'keepObserverData_' + key;
    var value = localStorage.getItem(key);
    return value ? JSON.parse(value) : '';
}
function removeStorage(key) {
    if (!window.localStorage) {
        return;
    }
    key = 'keepObserverData_' + key;
    localStorage.removeItem(key);
}

/*
    深度合并内容
    引用类型克隆合并
    arguments[0] = target
    arguments type is Object Or Array
    多内容合并覆盖优先级: arguments[0]<arguments[1]<arguments[2]..
    如果sources 不是数组或者对象 则直接忽略
 */
function extend() {
    var args = toArray(arguments);
    if (args.length === 0) {
        console.error('extends params is undefined');
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
        }
        //如果内容是对象 
        if (isObject(item)) {
            //开始遍历
            for (var key in item) {
                //如果内容是对象
                if (isObject(item[key])) {
                    //修正数据
                    target[key] = target[key] && isObject(target[key]) ? target[key] : {};
                    target[key] = extend(target[key], item[key]);
                } else if (isArray(item[key])) {
                    //修正数据
                    target[key] = target[key] && isArray(target[key]) ? target[key] : [];
                    target[key] = extend(target[key], item[key]);
                } else {
                    //基本类型直接赋值
                    target[key] = item[key];
                }
            }
        } else if (isArray(item)) {
            for (var i = 0; i < item.length; i++) {
                //如果内容是对象
                if (isObject(item[i])) {
                    //修正数据
                    target[i] = target[i] && isObject(target[i]) ? target[i] : {};
                    target[i] = extend(target[i], item[i]);
                } else if (isArray(item[i])) {
                    //修正数据
                    target[i] = target[i] && isArray(target[i]) ? target[i] : [];
                    target[i] = extend(target[i], item[i]);
                } else {
                    //基本类型直接赋值
                    target[i] = item[i];
                }
            }
        }
        //其他类型直接忽略  
    });
    return target;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//公共默认类
//提供一些全局公共方法
var KeepObserverDefault = function () {
    function KeepObserverDefault(config) {
        _classCallCheck(this, KeepObserverDefault);

        //开发模式下的log 替换window.console.log
        this.$devLog = false;
        //开发模式写error log 替换window.console.error
        this.$devError = false;

        this._keeepObserverDetaultInit();
    }

    _createClass(KeepObserverDefault, [{
        key: '_keeepObserverDetaultInit',
        value: function _keeepObserverDetaultInit() {
            var that = this;
            //初始化$devLog
            that.$devLog = window.console.log;
            window.console.log = function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                that.$devLog.apply(window.console, args);
            };
            //初始化$devError
            that.$devError = window.console.error;
            window.console.error = function () {
                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                that.$devError.apply(window.console, args);
            };
            //初始化$devWarn
            that.$devWarn = window.console.warn;
            window.console.warn = function () {
                for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                    args[_key3] = arguments[_key3];
                }

                that.$devWarn.apply(window.console, args);
            };
        }
    }, {
        key: '$mixin',
        value: function $mixin(provider) {
            if (!provider || !tool.isObject(provider) || tool.isEmptyObject(provider)) {
                this.$error('keepObserver $mixin receive params not right');
            }
            for (var key in provider) {
                if (this[key]) {
                    continue;
                }
                this[key] = provider[key];
            }
        }
    }]);

    return KeepObserverDefault;
}();

exports.default = KeepObserverDefault;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//上报数据类型
var reportType = exports.reportType = ['unKownType', 'log', 'network', 'vue'];
//版本号
var version = exports.version = '1.1.0';

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _index2 = __webpack_require__(2);

var _index3 = __webpack_require__(1);

var _index4 = _interopRequireDefault(_index3);

var _defaultConfig = __webpack_require__(4);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index5 = __webpack_require__(5);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(35);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(14);

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(19);

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__(25);

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__(29);

var _index16 = _interopRequireDefault(_index15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeepObserver = function (_KeepObserverDetault) {
    _inherits(KeepObserver, _KeepObserverDetault);

    //构造函数
    function KeepObserver(config) {
        _classCallCheck(this, KeepObserver);

        /*******  开始本实例配置  *******/
        //获取实例配置
        var _this = _possibleConstructorReturn(this, (KeepObserver.__proto__ || Object.getPrototypeOf(KeepObserver)).call(this));

        _this._config = tool.extend(_defaultConfig2.default, config);
        //版本号
        _this._version = _index2.version;

        //混合管道
        (0, _index6.default)(_this, config);
        //注册相关服务
        _this.use(_index8.default);
        _this.use(_index10.default);
        _this.use(_index12.default);
        _this.use(_index14.default);
        _this.use(_index16.default);
        return _this;
    }

    return KeepObserver;
}(_index4.default);

module.exports = KeepObserver;
module.exports.default = module.exports;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 	keepObserver 默认配置
*/

exports.default = {
    //分发队列情况下,是否允许接收消息队列加锁
    queueLock: true,
    //是否允许定时强制解锁
    timeOutUnlock: true,
    //接收消息队列默认解锁时间
    forceUnlockTime: 1000
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(0);

var tool = _interopRequireWildcard(_index3);

var _injection = __webpack_require__(6);

var injectionServer = _interopRequireWildcard(_injection);

var _receiveQueue = __webpack_require__(9);

var receiveServer = _interopRequireWildcard(_receiveQueue);

var _triggerQueue = __webpack_require__(10);

var triggerServer = _interopRequireWildcard(_triggerQueue);

var _receiveLock = __webpack_require__(8);

var queueLockServer = _interopRequireWildcard(_receiveLock);

var _preventAnomaly = __webpack_require__(7);

var preventAnomaly = _interopRequireWildcard(_preventAnomaly);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var keepObserverPipe = function (_KeepObserverDetault) {
    _inherits(keepObserverPipe, _KeepObserverDetault);

    function keepObserverPipe(keepObserver, config) {
        _classCallCheck(this, keepObserverPipe);

        //获取实例配置
        var _this = _possibleConstructorReturn(this, (keepObserverPipe.__proto__ || Object.getPrototypeOf(keepObserverPipe)).call(this));

        _this._config = config;
        //获取kp实例
        _this.$keepObserver = keepObserver;
        //消息是否在等待
        _this.waiting = false;
        //消息接收锁
        _this.receiveLock = false;

        //堆栈计数对象
        _this.stackCountBuff = {};
        //堆栈运行定时器
        _this.stackTimeFlag = false;
        //消息队列
        _this.messageQueue = [];
        //管道用户
        _this.pipeUser = [];

        //混入自身方法
        _this.$mixin(injectionServer);
        _this.$mixin(receiveServer);
        _this.$mixin(triggerServer);
        _this.$mixin(queueLockServer);
        _this.$mixin(preventAnomaly);
        return _this;
    }

    //提供需要挂载在keepObserver上的方法


    _createClass(keepObserverPipe, [{
        key: 'apply',
        value: function apply() {
            return {
                use: this.use
            };
        }
    }]);

    return keepObserverPipe;
}(_index2.default);

//提供混合管道入口


var mixinPipe = function mixinPipe(keepObserver, config) {
    //这里不用做判断,最初的模块挂载到实例
    var Pipe = new keepObserverPipe(keepObserver, config);
    var applyInjection = Pipe.apply();
    //循环挂载到keepobserver上
    for (var key in applyInjection) {
        keepObserver[key] = function () {
            var agrs = tool.toArray(arguments);
            var fn = applyInjection[key];
            return fn.apply(Pipe, agrs);
        };
    }
};
exports.default = mixinPipe;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mixinKoInstance = exports.registerPipeListenerUser = exports.injection = exports.use = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
    receive Plug-ins Server
    params
    @Provider  type es6 class
    explan: Provider class render apply function ,apply runing return method object ,on mounted is keepObsever class 
 */
var use = exports.use = function use(Provider) {
    if (!Provider || !tool.isFunction(Provider)) {
        this.$devError('[keepObserver] use method receive provider is not right');
        return false;
    }
    //初始化注入服务
    var config = this._config;
    var providerInstalcen = new Provider(config);
    //检查注入方法是否存在存在apply,存在则加入到管道流中
    //并检查是否存在返回方法，挂载在自身中,用于对外提供
    var apply = providerInstalcen.apply;

    if (apply && tool.isFunction(apply)) {
        this.injection(providerInstalcen, apply);
    } else {
        this.$devError('[keepObserver] use method receive provider is not apply method');
        return false;
    }
};

/*
    注入管道
    params
    @scope  type object 
        explan:this指向
    @applyFn type function
        explan: apply function
 */
var injection = exports.injection = function injection(scope, applyFn) {
    var that = this;
    //check data
    if (!applyFn || !tool.isFunction(applyFn)) {
        that.$devError('[keepObserver] injection receive ApplyFn is undefined or no function');
        return false;
    }
    //cerate pipe listener
    var pipeMethod = that.registerPipeListenerUser();
    //dev method
    var devMethod = {
        $devLog: function $devLog() {
            return that.$devLog.apply(that, arguments);
        },
        $devWarn: function $devWarn() {
            return that.$devWarn.apply(that, arguments);
        },
        $devError: function $devError() {
            return that.$devError.apply(that, arguments);
        }
    };
    try {
        // runing apply
        var userRenderMethod = applyFn.call(scope, pipeMethod, devMethod);
        //mounte method
        that.mixinKoInstance(scope, userRenderMethod);
    } catch (e) {
        that.$devError('[keepObserver] injection receive ApplyFn is runing find error:' + e);
    }
};

/*
    注册管道用户方法
    params
    null
    ***********************
    return pipeMethod {
        registerRecivePipeMessage
        sendPipeMessage
    }
 */
var registerPipeListenerUser = exports.registerPipeListenerUser = function registerPipeListenerUser() {
    var that = this;
    //pipe index
    var pipeIndex = that.pipeUser.length;
    //pipe user obj
    var pipeUser = {
        //index
        pipeIndex: pipeIndex,
        //receiveCallBack
        receiveCallback: null,
        //send message
        sendPipeMessage: function sendPipeMessage() {
            return that.sendPipeMessage.apply(that, [pipeIndex].concat(Array.prototype.slice.call(arguments)));
        }
    };
    //add listener
    that.pipeUser[pipeIndex] = pipeUser;
    //register receive message listener
    pipeUser.registerRecivePipeMessage = that.registerRecivePipeMessage(pipeIndex);
    //render pipe method
    var renderMethod = {
        registerRecivePipeMessage: function registerRecivePipeMessage() {
            if (!that.pipeUser[pipeIndex]) return false;
            return pipeUser.registerRecivePipeMessage.apply(pipeUser, arguments);
        },
        sendPipeMessage: function sendPipeMessage() {
            if (!that.pipeUser[pipeIndex]) return false;
            return pipeUser.sendPipeMessage.apply(pipeUser, arguments);
        }
    };
    return renderMethod;
};

/*
    注入对象方法挂载到keepObserver中
    params
    @scope  type object 
        explan:this指向
    @renders type object
        explan:render mounted keepObserver method list
 */
var mixinKoInstance = exports.mixinKoInstance = function mixinKoInstance(scope, renders) {
    var that = this;
    if (!renders || tool.isEmptyObject(renders)) {
        that.$devWarn('[keepObserver] injection ApplyFn return Object is undefined');
        return false;
    }
    var keepObserver = that.$keepObserver;
    for (var key in renders) {
        //验证挂载方法
        var fn = renders[key];
        if (!fn || !tool.isFunction(fn)) {
            that.$devError('[keepObserver] injection ApplyFn return Object attr' + key + 'is not right');
            continue;
        }
        //是否存在同名方法
        if (keepObserver[key]) {
            that.$devError('[keepObserver] injection Discover namesake methods');
            continue;
        }
        //挂载到keepObserver 实例
        keepObserver[key] = function () {
            var agrs = tool.toArray(arguments);
            try {
                fn.apply(scope, agrs);
            } catch (e) {
                that.$devError('[keepObserver] injection  methods ' + key + ' runing find error' + e);
            }
        };
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resetStackCount = exports.judgeAnomaly = exports.preventStackError = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _md = __webpack_require__(37);

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//防止堆栈错误
var preventStackError = exports.preventStackError = function preventStackError(msgItem) {
    var msg = msgItem.msg,
        pipeIndex = msgItem.pipeIndex;

    if (!msg || !pipeIndex || !msg.data) {
        return true;
    }
    //是否该消息已经进入屏蔽阶段
    if (!this.pipeUser[pipeIndex]) {
        //是否是开发环境
        if (this._config.develop) {
            this.$devError('[keepObserver] send pipe Message Maybe happend Endless loop , will ignore in the message');
        }
        return true;
    }
    //json解析成字符串加密为KEY 这里可能存在JSON转义出现错误的可能
    try {
        var key = JSON.stringify(msg.data);
    } catch (e) {
        this.$devError('[keepObserver] find error : ' + e);
        return true;
    }
    //触发计数
    if (!this.stackCountBuff[key]) {
        this.stackCountBuff[key] = 1;
    } else {
        this.stackCountBuff[key]++;
    }
    //启动定时器每秒恢复一次计数
    this.resetStackCount();
    return this.judgeAnomaly(this.stackCountBuff[key], msgItem);
};

//判断是否出现异常错误
var judgeAnomaly = exports.judgeAnomaly = function judgeAnomaly(count, msgItem) {
    var msg = msgItem.msg,
        pipeIndex = msgItem.pipeIndex;

    if (count > 10 && count < 20) {
        this.$devWarn('[keepObserver] send  pipe Message during 1000ms in Over 20 times. maybe Anomaly ');
        return false;
    }
    if (count > 20) {
        //从管道中卸载
        this.pipeUser[pipeIndex] = null;
        this.$devError('[keepObserver] send pipe Message during 1000ms in Over 20 times,maybe happend Endless loop');
        return true;
    }
    return false;
};

//恢复计数
var resetStackCount = exports.resetStackCount = function resetStackCount() {
    var that = this;
    //启动定时器每秒清理一次计数
    if (!that.stackTimeFlag) {
        that.stackTimeFlag = true;
        setTimeout(function () {
            that.stackCountBuff = {};
            that.stackTimeFlag = false;
        }, 1000);
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.closeLock = exports.openLock = exports.isLock = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//默认定时打开消息锁
var receiveTime = false;

var isLock = exports.isLock = function isLock() {
    return this.receiveLock;
};

var openLock = exports.openLock = function openLock() {
    var that = this;
    if (that.receiveLock && that._config.queueLock) {
        return false;
    }
    that.receiveLock = true;
    //是否定时强制解锁
    if (that._config.timeOutUnlock) {
        setTimeout(function () {
            that.closeLock();
        }, that._config.receiveUnlockTime);
    }
};

var closeLock = exports.closeLock = function closeLock() {
    if (!this.receiveLock) {
        return false;
    }
    //恢复定时器
    if (receiveTime) {
        cleanTimeout(receiveTime);
        receiveTime = false;
    }
    this.receiveLock = false;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerRecivePipeMessage = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//注册管道接收数据函数
var registerRecivePipeMessage = exports.registerRecivePipeMessage = function registerRecivePipeMessage(pipeIndex) {
    var that = this;
    //修正索引
    if (that.pipeUser[pipeIndex].receiveCallback) {
        that.$devError('[keepObsever] register recive pipe index is Occupy');
        return false;
    }
    //返回一个闭包函数用来接收注册函数
    return function (fn, scope) {
        //接收函数
        if (!fn || !tool.isFunction(fn)) {
            that.$devError('[keepObsever] registerRecivePipeMessage method receive function is not right');
            return false;
        }
        //内部修改作用域调用
        that.pipeUser[pipeIndex].receiveCallback = function () {
            var agrs = tool.toArray(arguments);
            //向注册进来的接收函数发送数据
            if (scope) {
                return fn.apply(scope, agrs);
            }
            return fn.apply(undefined, _toConsumableArray(agrs));
        };
    };
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noticeListener = exports.sendPipeMessage = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//发送消息在管道内流通
var sendPipeMessage = exports.sendPipeMessage = function sendPipeMessage(pipeIndex, msg, options) {
    var that = this;
    var msgItem = {
        pipeIndex: pipeIndex,
        msg: msg,
        options: options
    };
    //是否消息队列加锁,并且防止异常消息
    if (that.isLock() || that.preventStackError(msgItem)) {
        return false;
    }
    //进入消息队列
    that.messageQueue.push(msgItem);
    //如果正在执行
    if (that.waiting) {
        return false;
    }
    //异步执行消息队列分发
    setTimeout(function () {
        //获取消息队列数组快照
        var queue = tool.extend([], that.messageQueue);
        //清空队列
        that.messageQueue = [];
        //通知监听
        noticeListener.call(that, queue);
    });
};

//通知监听
var noticeListener = exports.noticeListener = function noticeListener(queue) {
    var that = this;
    if (!tool.isArray(queue) || queue.length === 0) {
        return false;
    }
    //接收消息进入等待状态
    that.waiting = true;
    //分发处理消息
    for (var i = 0; i < queue.length; i++) {
        var _queue$i = queue[i],
            pipeIndex = _queue$i.pipeIndex,
            msg = _queue$i.msg,
            options = _queue$i.options;
        //消息分发

        that.pipeUser.map(function (item, index) {
            //判断是否是正确注册接收函数
            if (!item || !item.receiveCallback || !tool.isFunction(item.receiveCallback)) {
                return false;
            }
            //不允许自发自收
            if (pipeIndex === index) {
                return false;
            }
            var receiveCallback = item.receiveCallback;
            //分发
            try {
                //消息队列加锁
                that.openLock();
                //执行分发
                var result = receiveCallback(msg, options);
                //消息队列解锁
                //如果返回值是promise或者存在then将解锁放入回调
                if (result && tool.isObject(result) && (result instanceof Promise || result.then && tool.isFunction(result.then))) {
                    result.then(that.closeLock, that.closeLock);
                } else {
                    that.closeLock();
                }
            } catch (e) {
                that.closeLock();
                that.$devError('[keepObserver] use pipe message notice is runing error:' + e);
            }
        });
    }
    //等待状态结束
    that.waiting = false;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
	停止监听
 */
var stopObserver = exports.stopObserver = function stopObserver() {
    window.console.log = this.console.log;
    window.console.error = this.console.error;
    window.console.info = this.console.info;
    window.console.debug = this.console.debug;
    window.console.warn = this.console.warn;
    window.console.time = this.console.time;
    window.console.timeEnd = this.console.timeEnd;
    window.console.clear = this.console.clear;
    this.console = {};
    if (this._config.catchCrossDomain) {
        window.document.createElement = this.$createElement;
        this.$createElement = false;
    }
};

/*
	开始监听
 */
var startObserver = exports.startObserver = function startObserver() {
    //启动监听
    this._handleInit();
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 
 	observer log 实例默认配置数据
 */

exports.default = {
    //是否捕获跨域JS错误
    catchCrossDomain: true,
    //未知错误是否捕获
    unknowErrorCatch: false
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._handleError = exports._handleMessage = exports._handleInit = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
	初始化替换相关信息
*/
var _handleInit = exports._handleInit = function _handleInit() {
    var that = this;
    //替换window.console变量
    var baseLogList = ['log', 'info', 'warn', 'debug', 'error'];

    if (!window.console) {
        window.console = {};
    }

    baseLogList.map(function (method) {
        that.console[method] = window.console[method];
    });
    that.console.time = window.console.time;
    that.console.timeEnd = window.console.timeEnd;
    that.console.clear = window.console.clear;

    baseLogList.map(function (method) {
        window.console[method] = function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            //是否处于开发模式下
            if (that._develop && that.console[method] && tool.isFunction(that.console[method])) {
                var _that$console;

                (_that$console = that.console)[method].apply(_that$console, args);
            }
            //交给拦截处理信息
            that._handleMessage(method, args);
        };
    });
    //处理time timeEnd clear
    var timeLog = {};
    window.console.time = function (label) {
        timeLog[label] = Date.now();
    };
    window.console.timeEnd = function (label) {
        var pre = timeLog[label];
        var type = 'timeEnd';
        if (pre) {
            var content = label + ':' + (Date.now() - pre) + 'ms';
            that._handleMessage(type, [content]);
            //开发模式下打印
            if (that._develop && that.console.log && tool.isFunction(that.console.log)) {
                that.console.log(content);
            }
        } else {
            var content = label + ': 0ms';
            that._handleMessage(type, [content]);
            //开发模式下打印
            if (that._develop && that.console.log && tool.isFunction(that.console.log)) {
                that.console.log(content);
            }
        }
    };
    window.console.clear = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        that._handleMessage('clear', args);
        that.console.clear.apply(window.console, args);
    };
    //是否需要捕获跨域JS错误
    if (that._config.catchCrossDomain && !that.$createElement) {
        //侵入document.createElement  实现跨域JS捕获错误信息
        if (window.document || window.document.createElement) {
            that.$createElement = window.document.createElement;
            window.document.createElement = function (type) {
                var resultDom = that.$createElement.call(window.document, type);
                if (type === 'script') {
                    resultDom.crossOrigin = 'anonymous';
                }
                return resultDom;
            };
        }
    }
    //监控window.onerror
    if (typeof window.addEventListener != 'undefined') {
        window.addEventListener('error', function () {
            that._handleError.apply(that, arguments);
        }, true);
    } else {
        window.attachEvent('onerror', function () {
            that._handleError.apply(that, arguments);
        });
    }
};

/*
	处理打印信息
	上报报文如下
	@: type string  (log|info|debug.... jsError)
	@: data string  (JSON格式对象报文)
 */
var _handleMessage = exports._handleMessage = function _handleMessage(type, agrs) {
    var that = this;
    var reportData = {};
    //agrs不是数组 或是空数组 则不处理
    if (!tool.isArray(agrs) || agrs.length === 0) {
        return false;
    }
    reportData.type = type;
    //直接转成JSON
    reportData.data = JSON.stringify(agrs);
    //上报
    that.noticeReport(reportData);
};

/*
	监听 window.onerror,并处理错误信息
	@errorEvent 		:错误信息对象
	////////  上报error对象 /////////
	errorObj object = {
		errMsg: 			错误信息
		url:                错误文件
		line:         		错误所在行
		colum:              错误所在列
	}
 */
var _handleError = exports._handleError = function _handleError(errorEvent) {
    var that = this;
    var errorObj = {};
    var url = errorEvent.filename || errorEvent.url || false;
    //可能是跨域资源JS出现错误 这获取不到详细信息
    if (errorEvent.message === 'Script error.' && !url) {
        //未知错误是否捕获
        if (!that._config.unknowErrorCatch) return false;
        errorObj.errMsg = 'jsError!There may be an error in the JS for cross-domain resources, and the error URL location cannot be obtained. The error message is:' + errorEvent.message;
        errorObj.url = '';
        errorObj.line = 0;
        errorObj.colum = 0;
        setTimeout(function () {
            that._handleMessage('jsError', [errorObj]);
        });
        return false;
    }
    //处理错误信息
    errorObj.errMsg = errorEvent.message || 'Error detail info not obtained';
    errorObj.url = url;
    errorObj.line = errorEvent.lineno || 'Error row not obtained';
    errorObj.colum = errorEvent.colno || 'Error column not obtained';
    setTimeout(function () {
        that._handleMessage('jsError', [errorObj]);
    });
    return true;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = __webpack_require__(12);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _index2 = __webpack_require__(1);

var _index3 = _interopRequireDefault(_index2);

var _handle = __webpack_require__(13);

var handleServer = _interopRequireWildcard(_handle);

var _api = __webpack_require__(11);

var apiServer = _interopRequireWildcard(_api);

var _report = __webpack_require__(15);

var reportServer = _interopRequireWildcard(_report);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 获取系统信息
var KeepObserverLog = function (_KeepObserverDetault) {
    _inherits(KeepObserverLog, _KeepObserverDetault);

    //构造函数
    function KeepObserverLog(config) {
        _classCallCheck(this, KeepObserverLog);

        //初始化上传相关实例
        var _this = _possibleConstructorReturn(this, (KeepObserverLog.__proto__ || Object.getPrototypeOf(KeepObserverLog)).call(this));

        var logConfig = config.logCustom || {};
        //是否是开发模式
        logConfig.develop = config.develop ? true : false;
        //存混合配置
        _this._config = tool.extend(_defaultConfig2.default, logConfig);
        //上报名
        _this._typeName = 'log';
        //监听列表
        _this.eventListener = [];
        //当前是否处于开发模式
        _this._develop = _this._config.develop;
        //替换window.console
        _this.console = {};
        //替换 doucment.createElement 插入script .crossOrigin = 'anonymous';
        _this.$createElement = false;
        //启动
        _this.$mixin(handleServer);
        _this.$mixin(apiServer);
        _this.$mixin(reportServer);
        //启动监控
        _this.startObserver();
        return _this;
    }

    //提供一个挂载入口


    _createClass(KeepObserverLog, [{
        key: 'apply',
        value: function apply(pipe) {
            this.addReportListener(pipe.sendPipeMessage);
            return {
                $logStop: this.stopObserver,
                $logStart: this.startObserver
            };
        }
    }]);

    return KeepObserverLog;
}(_index3.default);

exports.default = KeepObserverLog;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noticeReport = exports.handleReportData = exports.addReportListener = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//注册上报监听
var addReportListener = exports.addReportListener = function addReportListener(callback) {
    if (callback) {
        this.eventListener.push(callback);
    }
};

//处理整理数据
var handleReportData = exports.handleReportData = function handleReportData(content) {
    var reportParams = {};
    var control = {};
    reportParams.type = "monitor";
    reportParams.typeName = 'log';
    reportParams.location = window.location.href;
    reportParams.environment = window.navigator.userAgent;
    reportParams.data = content;
    reportParams.reportTime = new Date().getTime();
    //option
    control.lazy = true;
    //如果是clear,清除之前的console.log相关信息
    if (content.type === 'clear') {
        control.preDelete = true;
        control.ignore = true;
    }
    //如果是JS运行报错,或者打印错误error合并上报所有内容
    if (content.type === 'jsError' || content.type === 'error') {
        control.lazy = false;
        control.trackExtend = true;
        control.isError = true;
        control.isReport = true;
    }
    return {
        reportParams: reportParams,
        control: control
    };
};

//通知上报
var noticeReport = exports.noticeReport = function noticeReport(content) {
    var that = this;
    if (that.eventListener.length === 0) {
        return false;
    }
    //通知上报
    that.eventListener.map(function (item) {
        if (tool.isFunction(item)) {
            var _that$handleReportDat = that.handleReportData(content),
                reportParams = _that$handleReportDat.reportParams,
                control = _that$handleReportDat.control;

            item(reportParams, control);
        }
    });
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
    	停止监听
     */
var stopObserver = exports.stopObserver = function stopObserver() {
    window.XMLHttpRequest.prototype.open = this._open;
    window.XMLHttpRequest.prototype.send = this._send;
    window.XMLHttpRequest.prototype.setRequestHeader = this._setRequestHeader;
    this._open = null;
    this._send = null;
    this.__setRequestHeader = null;
};

/*
	开始监听
 */
var startObserver = exports.startObserver = function startObserver() {
    //开启网络拦截监控
    this._handleInit();
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});


/*
 	observer newwork 实例默认配置数据
 */
exports.default = {
	//默认超时时间 20S;
	timeout: 20000,
	//屏蔽URL
	ignoreRequestList: false,
	//自定义判断接口返回是否正确
	onHandleJudgeResponse: false,
	//自定义处理响应数据 
	onHandleResponseData: false,
	//自定义处理请求数据
	onHandleRequestData: false

};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._handleJudgeDisbale = exports._handleDoneXML = exports._handleTimeout = exports._handleXMLAjax = exports._handleInit = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _tool = __webpack_require__(21);

var networkTool = _interopRequireWildcard(_tool);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
    	初始化ajax请求监控
    	在这里替换window.XMLHttpRequest变量进行监控
     */
var _handleInit = exports._handleInit = function _handleInit() {
    var that = this;
    var _XMLHttp = window.XMLHttpRequest;
    //不支持 ajax 不进行监控
    if (!_XMLHttp) {
        return false;
    }
    that._open = window.XMLHttpRequest.prototype.open;
    that._send = window.XMLHttpRequest.prototype.send;
    that._setRequestHeader = window.XMLHttpRequest.prototype.setRequestHeader;
    //处理Ajax
    that._handleXMLAjax();
};

/*
	拦截XML AJax信息
 */
var _handleXMLAjax = exports._handleXMLAjax = function _handleXMLAjax() {
    var that = this;
    //拦截原生open
    window.XMLHttpRequest.prototype.open = function () {
        var XML = this;
        var args = tool.toArray(arguments);
        //定时器
        var timer = null;
        //获取请求唯一ID
        var id = networkTool.getUniqueID();
        //获取方法
        var method = args[0];
        //获取url
        var url = args[1];

        //保存下 在send中使用
        XML._url = url;
        XML._method = method;
        XML._id = id;
        //保存下请求头 在拦截请求头处使用
        XML._setHead = {};
        XML._setHead[id] = {};

        //拦截处理响应回调
        var _onreadystatechange = XML.onreadystatechange || function () {};
        // start onreadystatechange
        var onreadystatechange = function onreadystatechange() {
            var item = that.networkList[id] ? that.networkList[id] : false;
            //如果不存在 可能略过了send 会导致丢失部分数据
            if (!item) {
                item = {};
                //保存请求方法
                item.method = method;

                var _networkTool$handleRe = networkTool.handleReqUrl(url),
                    url = _networkTool$handleRe.url,
                    params = _networkTool$handleRe.params;
                //处理请求url和params


                item.url = url;
                item.params = params;
            }
            //更新状态
            item.status = 0;
            if (XML.readyState > 1) {
                item.status = XML.status;
            }
            item.responseType = XML.responseType;
            //判断请求状态
            if (XML.readyState == 0) {
                // 未开始
                if (!item.startTime) {
                    item.startTime = +new Date();
                }
            } else if (XML.readyState == 1) {
                // 打开
                if (!item.startTime) {
                    item.startTime = +new Date();
                }
            } else if (XML.readyState == 2) {
                // 发送		          	
            } else if (XML.readyState == 3) {
                //loading
            } else if (XML.readyState == 4) {
                //结束超时捕获
                that._handleTimeout(id);
                //处理响应头
                item.responseHead = {};
                var header = XML.getAllResponseHeaders() || '',
                    headerArr = header.split("\n");
                //提取数据
                for (var i = 0; i < headerArr.length; i++) {
                    var line = headerArr[i];
                    if (!line) {
                        continue;
                    }
                    var arr = line.split(': ');
                    var key = arr[0],
                        value = arr.slice(1).join(': ');
                    item.responseHead[key] = value;
                }
                //完成
                clearInterval(timer);
                item.endTime = +new Date(), item.costTime = item.endTime - (item.startTime || item.endTime) + 'ms';
                item.response = XML.response;
                //请求结束完成
                setTimeout(function () {
                    //是否是超时接口 超时的接口不做处理
                    if (!that.timeoutRequest[id]) {
                        that._handleDoneXML(id);
                    }
                });
            } else {
                clearInterval(timer);
            }
            //如果这个接口已经超时处理了 那么不记录
            if (!that.timeoutRequest[id]) {
                that.networkList[id] = item;
            }
            return _onreadystatechange.apply(XML, arguments);
        };
        XML.onreadystatechange = onreadystatechange;
        //end onreadystatechange
        //防止第三方库更改状态
        //定时查看请求状态
        var preState = -1;
        timer = setInterval(function () {
            if (preState != XML.readyState) {
                preState = XML.readyState;
                onreadystatechange.call(XML);
            }
        }, 10);
        return that._open.apply(XML, args);
    };
    //拦截原始设置请求头
    window.XMLHttpRequest.prototype.setRequestHeader = function () {
        var XML = this;
        var args = tool.toArray(arguments);
        if (XML._id && XML._setHead) {
            var setHead = XML._setHead[XML._id];
            var key = args[0] ? args[0] : 'unkownRequestHead';
            var value = args[1] ? args[1] : '';
            setHead[key] = value;
            XML._setHead[XML._id] = setHead;
        }
        return that._setRequestHeader.apply(XML, args);
    };
    //拦截原生send
    window.XMLHttpRequest.prototype.send = function () {
        var XML = this;
        var id = XML._id;
        var method = XML._method.toUpperCase();
        var requestHead = XML._setHead[id];
        var url = XML._url;
        var args = [].slice.call(arguments),
            data = args[0],
            saveData = '';
        //监听列表中创建一条请求
        if (!that.networkList[id]) {
            that.networkList[id] = {};
        }
        //保存请求方法
        that.networkList[id].method = method;

        var _networkTool$handleRe2 = networkTool.handleReqUrl(url),
            url = _networkTool$handleRe2.url,
            params = _networkTool$handleRe2.params;
        //处理请求url和params


        that.networkList[id].url = url;
        that.networkList[id].params = params;
        //保存自定义请求头
        if (requestHead) {
            that.networkList[id].requestHead = tool.extend({}, requestHead);
            delete XML._setHead[id];
        }
        //如果是post数据保存
        if (method === 'POST') {
            if (tool.isString(data)) {
                saveData = data;
            }
        }
        that.networkList[id].data = saveData;
        //开启定时器 判断接口是否超时
        that._handleTimeout(id);
        return that._send.apply(XML, args);
    };
};

/*
	处理接口请求超时
 */
var _handleTimeout = exports._handleTimeout = function _handleTimeout(id) {
    var that = this;
    var timeout = that._config.timeout;
    var isTimeout = that.timeoutRequest[id] ? that.timeoutRequest[id] : false;
    var time = that.timeout[id] ? that.timeout[id] : false;
    var item = that.networkList[id];
    //如果不存在 不做处理
    if (!item || isTimeout) {
        return false;
    }
    if (!time) {
        //如果没有那么创建检测超时定时器
        time = setTimeout(function () {
            //接口返回超时
            item.isTimeout = true;
            item.timeout = timeout;
            item.isError = true;
            item.errorContent = 'ajax request timeout，time:' + timeout + '(ms)';
            //这里直接完成添加到超时列表 停止后续处理
            that._handleDoneXML(id);
            that.timeoutRequest[id] = true;
        }, timeout);
    } else {
        //如果存在 则说明已经回调 取消超时定时器
        clearTimeout(time);
    }
};

/*
	处理请求完成的数据
	@id:拦截请求唯一ID
 */
var _handleDoneXML = exports._handleDoneXML = function _handleDoneXML(id) {
    var that = this;
    var ajaxItem = tool.extend({}, that.networkList[id]);
    var _that$_config = that._config,
        onHandleJudgeResponse = _that$_config.onHandleJudgeResponse,
        onHandleRequestData = _that$_config.onHandleRequestData,
        onHandleResponseData = _that$_config.onHandleResponseData;
    //空的对象不做处理

    if (tool.isEmptyObject(ajaxItem)) {
        return false;
    }
    /******   这里开始处理数据  *****/
    //判断当前请求数据url是否需要屏蔽
    if (!that._handleJudgeDisbale(ajaxItem)) {
        that.networkList[id];
        return false;
    }
    //如果存在自定义处理 请求data配置
    if (onHandleRequestData) {
        try {
            ajaxItem.handleReqData = onHandleRequestData(ajaxItem);
        } catch (err) {
            ajaxItem.handleReqData = 'Custom handleRequestData find error:' + err;
        }
    }
    //判断状态码是否出错
    var status = ajaxItem.status;
    if (!networkTool.validateStatus(status) && !ajaxItem.isError) {
        ajaxItem.isError = true;
        ajaxItem.errorContent = 'ajax request error! error statusCode:' + status;
    }
    //如果存在自定义处理 响应data配置
    if (onHandleResponseData && !ajaxItem.isError) {
        try {
            ajaxItem.handleResData = onHandleResponseData(ajaxItem);
        } catch (err) {
            ajaxItem.handleResData = 'Custom handleResponseData find error:' + err;
        }
    }
    //如果存在自定义处理响应数据是否出错
    if (onHandleJudgeResponse && !ajaxItem.isError) {
        try {
            ajaxItem.isError = onHandleJudgeResponse(ajaxItem);
            if (ajaxItem.isError) {
                ajaxItem.errorContent = ajaxItem.isError;
                ajaxItem.isError = true;
            }
        } catch (err) {
            ajaxItem.isError = true;
            ajaxItem.errorContent = 'Custom handleJudgeResponse find error:' + err;
        }
    }
    //通知上传
    that.noticeReport(ajaxItem);
    //上报后删除记录
    delete that.networkList[id];
};

/*
	判断该请求是否是屏蔽请求
	params
		ajaxInfo :即将上报的数据
	return
		忽略返回 false;
		不忽略返回 true
 */
var _handleJudgeDisbale = exports._handleJudgeDisbale = function _handleJudgeDisbale(ajaxInfo) {
    var ignoreRequestList = this._config.ignoreRequestList;
    //判断是否是是屏蔽url

    if (ignoreRequestList && tool.isArray(ignoreRequestList)) {
        var url = ajaxInfo.url;
        var unReport = false;
        ignoreRequestList.forEach(function (item) {
            if (url.indexOf(item) > -1) {
                unReport = true;
                return false;
            }
        });
        if (unReport) {
            return false;
        }
    }
    //判断是否是keepObserver的上报请求
    if (ajaxInfo.requestHead && ajaxInfo.requestHead['keepObserver-reportAjax']) {
        return false;
    }
    return true;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = __webpack_require__(17);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _handle = __webpack_require__(18);

var handleServer = _interopRequireWildcard(_handle);

var _api = __webpack_require__(16);

var apiServer = _interopRequireWildcard(_api);

var _report = __webpack_require__(20);

var reportServer = _interopRequireWildcard(_report);

var _index2 = __webpack_require__(1);

var _index3 = _interopRequireDefault(_index2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 获取系统信息
var KeepObserverNetwork = function (_KeepObserverDetault) {
    _inherits(KeepObserverNetwork, _KeepObserverDetault);

    //构造函数
    function KeepObserverNetwork(config) {
        _classCallCheck(this, KeepObserverNetwork);

        var _this = _possibleConstructorReturn(this, (KeepObserverNetwork.__proto__ || Object.getPrototypeOf(KeepObserverNetwork)).call(this));

        var networkConfig = config.networkCustom || {};
        //存混合配置
        _this._config = tool.extend(_defaultConfig2.default, networkConfig);
        //上报名
        _this._typeName = 'network';
        //监听列表
        _this.eventListener = [];
        //监控的数据列表
        //key 为 请求ID
        //value :{
        //	method:   			请求方法
        //	url:      			请求baseUrl
        //	requestHead:     	请求头
        //  responseHead:       请求响应头
        //	params:   			请求URL上携带的参数
        //	data:       		请求postData
        //	status:         	请求状态码
        //	startTime:      	请求开始时间
        //	endTime:        	请求结束时间
        //	costTime:       	请求耗时
        //	response: 			请求原始响应数据
        //	responseType    	请求响应类型
        //	handleResData:     	如果配置中传入 自定义处理响应数据 那么这里将保持处理后的响应数据
        //	handleReqData:      如果配置中传入 自定义处理发送数据 那么这里将保持处理后的发送数据
        //	isTimeout:          是否超时 如果存在这个字段 则说明已经上报,忽略处理
        //	timeout:            如果超时 这里是设置的超时时间
        //	isError:            这个请求是否出现错误
        //	errorContent:       错误信息
        //}
        _this.networkList = {};
        //替换window.XMLHttpRequest变量
        _this._open = false;
        _this._send = false;
        _this._setRequestHeader = false;
        //辅助捕获超时
        _this.timeout = {};
        _this.timeoutRequest = {};
        //混入自身方法
        _this.$mixin(handleServer);
        _this.$mixin(apiServer);
        _this.$mixin(reportServer);
        // 开启网络拦截监控
        _this.startObserver();
        return _this;
    }

    //提供一个挂载入口


    _createClass(KeepObserverNetwork, [{
        key: 'apply',
        value: function apply(pipe) {
            this.addReportListener(pipe.sendPipeMessage);
            return {
                $networkStop: this.stopObserver,
                $networkStart: this.startObserver
            };
        }
    }]);

    return KeepObserverNetwork;
}(_index3.default);

exports.default = KeepObserverNetwork;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noticeReport = exports.handleReportData = exports.addReportListener = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//注册上报监听
var addReportListener = exports.addReportListener = function addReportListener(callback) {
    if (callback) {
        this.eventListener.push(callback);
    }
};

//处理整理数据
var handleReportData = exports.handleReportData = function handleReportData(content) {
    var reportParams = {};
    var control = {};
    reportParams.type = "monitor";
    reportParams.typeName = 'network';
    reportParams.location = window.location.href;
    reportParams.environment = window.navigator.userAgent;
    reportParams.data = content;
    reportParams.reportTime = new Date().getTime();
    //option
    control.lazy = true;
    //是否请求出错
    if (content.isError) {
        control = {};
        control.lazy = false;
        control.isReport = true;
        //是否是超时请求,超时请求不合并上报
        control.trackExtend = content.isTimeout ? false : true;
        control.isError = content.isTimeout ? false : true;
    }
    return {
        reportParams: reportParams,
        control: control
    };
};

//通知上报
var noticeReport = exports.noticeReport = function noticeReport(content) {
    var that = this;
    if (that.eventListener.length === 0) {
        return false;
    }
    //通知上报
    that.eventListener.map(function (item) {
        if (tool.isFunction(item)) {
            var _that$handleReportDat = that.handleReportData(content),
                reportParams = _that$handleReportDat.reportParams,
                control = _that$handleReportDat.control;

            item(reportParams, control);
        }
    });
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUniqueID = getUniqueID;
exports.handleReqUrl = handleReqUrl;
exports.validateStatus = validateStatus;
/*
   参考Vconsole 生产唯一ID
   * generate an unique id string (32)
   * @private
   * @return string
*/
function getUniqueID() {
    var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
    return id;
}

/*
	处理URL
	分离base url 和params
	@return {
		url:  string
		params: object or string('')
	}
 */

function handleReqUrl(url) {
    //处理下解码URL
    url = window.decodeURIComponent(url);
    var params = '';
    var baseUrl = '';
    //判断URL后面是否存在参数
    if (url.indexOf('?') === -1) {
        baseUrl = url;
    } else {
        var query = url.indexOf('?');
        baseUrl = url.substring(0, query);
        query = url.substring(query + 1, url.length);
        params = {};
        query = query.split('&'); // => ['b=c', 'd=?e']
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = query[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var q = _step.value;

                q = q.split('=');
                params[q[0]] = q[1];
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return {
        url: baseUrl,
        params: params
    };
}

/*
	检查状态码是否正确
 */
function validateStatus(status) {
    return status >= 200 && status < 300;
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
    	停止监听
*/
var stopObserver = exports.stopObserver = function stopObserver() {
    if (this._vue.config) {
        this._vue.config.errorHandler = null;
    }
};

/*
	开始监听
 */
var startObserver = exports.startObserver = function startObserver() {
    //开启vue错误监听
    this._handleInit();
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 
 	observer vue 实例默认配置数据
 */
exports.default = {
  //是否启动性能分析   暂时未做
  // 	isPerformance:true,
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._handleVueError = exports._handleInit = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
    	开始监控vue
 */
var _handleInit = exports._handleInit = function _handleInit() {
    var that = this;
    if (that._vue.config) {
        that._vue.config.errorHandler = function () {
            that._handleVueError.apply(that, arguments);
        };
    }
};

/*
	处理监控vue错误信息
 */
var _handleVueError = exports._handleVueError = function _handleVueError(err, vm, info) {
    var that = this;
    var errInfo = {};
    errInfo.infoMsg = tool.toString(info);
    //是否存在堆栈信息
    if (tool.isObject(err) && err.stack && err.message) {
        errInfo.errMsg = tool.toString(err.message);
        errInfo.stackMsg = tool.toString(err.stack);
    } else {
        errInfo.errMsg = tool.toString(err);
    }
    errInfo.isError = true;
    //上报
    that.noticeReport(errInfo);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = __webpack_require__(23);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _handle = __webpack_require__(24);

var handleServer = _interopRequireWildcard(_handle);

var _api = __webpack_require__(22);

var apiServer = _interopRequireWildcard(_api);

var _report = __webpack_require__(26);

var reportServer = _interopRequireWildcard(_report);

var _index2 = __webpack_require__(1);

var _index3 = _interopRequireDefault(_index2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 获取系统信息
var KeepObserverVue = function (_KeepObserverDetault) {
    _inherits(KeepObserverVue, _KeepObserverDetault);

    //构造函数
    function KeepObserverVue(config) {
        _classCallCheck(this, KeepObserverVue);

        //初始化上传相关实例
        var _this = _possibleConstructorReturn(this, (KeepObserverVue.__proto__ || Object.getPrototypeOf(KeepObserverVue)).call(this));

        var vueConfig = config.vueCustom || {};
        vueConfig.vueInstance = config.vueInstance;
        //判断是否存在实例
        if (!vueConfig.vueInstance) {
            var _ret;

            return _ret = false, _possibleConstructorReturn(_this, _ret);
        }
        //存混合配置
        _this._config = tool.extend(_defaultConfig2.default, vueConfig);
        //上报名
        _this._typeName = 'vue';
        //vue实例
        _this._vue = _this._config.vueInstance;
        //监听列表
        _this.eventListener = [];
        //混入自身方法
        _this.$mixin(handleServer);
        _this.$mixin(apiServer);
        _this.$mixin(reportServer);
        // 开启vue拦截
        _this.startObserver();
        return _this;
    }

    //提供一个挂载入口


    _createClass(KeepObserverVue, [{
        key: 'apply',
        value: function apply(pipe) {
            this.addReportListener(pipe.sendPipeMessage);
            return {
                $vueStop: this.stopObserver,
                $vueStart: this.startObserver
            };
        }
    }]);

    return KeepObserverVue;
}(_index3.default);

exports.default = KeepObserverVue;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noticeReport = exports.handleReportData = exports.addReportListener = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//注册上报监听
var addReportListener = exports.addReportListener = function addReportListener(callback) {
    if (callback) {
        this.eventListener.push(callback);
    }
};

//处理整理数据
var handleReportData = exports.handleReportData = function handleReportData(content) {
    var reportParams = {};
    var control = {};
    reportParams.type = "monitor";
    reportParams.typeName = 'vue';
    reportParams.location = window.location.href;
    reportParams.environment = window.navigator.userAgent;
    reportParams.data = content;
    reportParams.reportTime = new Date().getTime();
    //option
    control.lazy = true;
    if (content.isError) {
        control.lazy = false;
        control.baseExtend = true;
        control.isError = true;
        control.isReport = true;
    }
    return {
        reportParams: reportParams,
        control: control
    };
};

//通知上报
var noticeReport = exports.noticeReport = function noticeReport(content) {
    var that = this;
    if (that.eventListener.length === 0) {
        return false;
    }
    //通知上报
    that.eventListener.map(function (item) {
        if (tool.isFunction(item)) {
            var _that$handleReportDat = that.handleReportData(content),
                reportParams = _that$handleReportDat.reportParams,
                control = _that$handleReportDat.control;

            item(reportParams, control);
        }
    });
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 
 	observer System 实例默认配置数据
 */

exports.default = {
    //是否每天只记录一次
    isOneDay: true,
    //是否启动性能分析 
    isPerformance: true,
    //是否检查缓存读取内容
    isPerformanceRequest: true,
    //获取到load信息是否立即上报
    immediatelyiReport: true
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.recordReport = exports.checkIsOneDay = exports.getWebPerformance = exports.getSystemInfo = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//获取系统信息
var getSystemInfo = exports.getSystemInfo = function getSystemInfo() {
    var that = this;
    var oneDayFlag = this.checkIsOneDay();
    //判断是否每天最多获取上传一次
    if (this._config.isOneDay && oneDayFlag) {
        return false;
    }
    //开始获取系统信息
    if (that._config.isPerformance) {
        that.getWebPerformance(function (Result) {
            that._systemInfo = Result;
            //上报
            that.noticeReport(that._systemInfo);
            //记录
            that.recordReport();
        });
    }
};

//获取首屏性能分析
var getWebPerformance = exports.getWebPerformance = function getWebPerformance(onCallback) {
    var that = this;
    //异步实现,等待完全加载完成
    var performance = function performance() {
        var info = {};
        var performance = window.performance || window.msPerformance || window.webkitPerformance;
        var timing = window.performance && window.performance.timing;
        var navigation = window.performance && window.performance.navigation;
        //获取性能分析
        if (performance && timing) {
            //重定向次数：
            info.redirectCount = navigation ? navigation.redirectCount + '次' : '未知';
            //跳转耗时：
            info.redirectTime = timing.redirectEnd - timing.redirectStart + 'ms';
            //APP CACHE 耗时：
            info.appcacheTime = Math.max(timing.domainLookupStart - timing.fetchStart, 0) + 'ms';
            //DNS 解析耗时：
            info.dns = timing.domainLookupEnd - timing.domainLookupStart + 'ms';
            //TCP 链接耗时：
            info.tcp = timing.connectEnd - timing.connectStart + 'ms';
            //等待服务器响应耗时（注意是否存在cache）：
            info.request = timing.responseStart - timing.requestStart + 'ms';
            //内容加载耗时（注意是否存在cache）:
            info.response = timing.responseEnd - timing.responseStart + 'ms';
            //总体网络交互耗时，即开始跳转到服务器资源下载完成：
            info.network = timing.responseEnd - timing.navigationStart + 'ms';
            //渲染处理：
            info.DOMrender = (timing.domComplete || timing.domLoading) - timing.domLoading + 'ms';
            //抛出 load 事件：
            info.onloadTime = timing.loadEventEnd - timing.loadEventStart + 'ms';
            //总耗时：
            info.total = (timing.loadEventEnd || timing.loadEventStart || timing.domComplete || timing.domLoading) - timing.navigationStart + 'ms';
            //可交互：
            info.DOMactive = timing.domInteractive - timing.navigationStart + 'ms';
            //请求响应耗时，即 T0，注意cache：
            info.webResponse = timing.responseStart - timing.navigationStart + 'ms';
            //首次出现内容，即 T1：
            info.webLoad = timing.domLoading - timing.navigationStart + 'ms';
            //内容加载完毕，即 T3：
            info.webLoadEnd = timing.loadEventEnd - timing.navigationStart + 'ms';
        }
        //是否获取加载资源内容
        if (that._config.isPerformanceRequest) {
            info.requestPerformance = [];
            if (performance.getEntries) {
                var requestPerformance = performance.getEntries();
                //只检查initiatorType  script css xmlhttprequest
                if (tool.isArray(requestPerformance)) {
                    requestPerformance.map(function (item) {
                        if (item.initiatorType) {
                            var perInfo = {
                                type: item.initiatorType,
                                name: item.name,
                                time: item.duration.toFixed(2) + 'ms',
                                size: (item.encodedBodySize / 1000).toFixed(2) + 'kb'
                            };
                            info.requestPerformance.push(perInfo);
                        }
                    });
                }
                if (onCallback) {
                    onCallback(info);
                }
            }
        }
    };
    //挂载在 window.onload 中
    if (typeof window.addEventListener != 'undefined') {
        window.addEventListener('load', function () {
            setTimeout(performance, 0);
        }, false);
    } else {
        window.attachEvent('onload', function () {
            setTimeout(performance, 0);
        });
    }
};

//验证今天是否已经获取上传了一次用户信息了
var checkIsOneDay = exports.checkIsOneDay = function checkIsOneDay() {
    var reportDate = tool.getStorage('loadRecordReportDate');
    var date = tool.dateFormat(new Date(), 'yyyy-MM-dd');
    //如果没获取上报过
    if (!reportDate) {
        return false;
    } else if (reportDate !== date) {
        return false;
    }
    return true;
};

//记录当天已经上报
var recordReport = exports.recordReport = function recordReport() {
    if (this._config.isOneDay) {
        var date = tool.dateFormat(new Date(), 'yyyy-MM-dd');
        tool.setStorage('loadRecordReportDate', date);
    }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultConfig = __webpack_require__(27);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _handle = __webpack_require__(28);

var handleServer = _interopRequireWildcard(_handle);

var _report = __webpack_require__(30);

var reportServer = _interopRequireWildcard(_report);

var _index2 = __webpack_require__(1);

var _index3 = _interopRequireDefault(_index2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 获取系统信息
var KeepObserverLoad = function (_KeepObserverDetault) {
    _inherits(KeepObserverLoad, _KeepObserverDetault);

    //构造函数
    function KeepObserverLoad(config) {
        _classCallCheck(this, KeepObserverLoad);

        var _this = _possibleConstructorReturn(this, (KeepObserverLoad.__proto__ || Object.getPrototypeOf(KeepObserverLoad)).call(this));

        var LoadCustom = config.LoadCustom || {};
        //存混合配置
        _this._config = tool.extend(_defaultConfig2.default, LoadCustom);
        //系统信息
        _this._systemInfo = false;
        //上报名
        _this._typeName = 'Load';
        //监听列表
        _this.eventListener = [];
        //混入自身方法
        _this.$mixin(handleServer);
        _this.$mixin(reportServer);
        //开始获取系统信息
        _this.getSystemInfo();
        return _this;
    }

    //提供一个挂载入口


    _createClass(KeepObserverLoad, [{
        key: 'apply',
        value: function apply(pipe) {
            this.addReportListener(pipe.sendPipeMessage);
        }
    }]);

    return KeepObserverLoad;
}(_index3.default);

exports.default = KeepObserverLoad;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noticeReport = exports.handleReportData = exports.addReportListener = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//注册上报监听
var addReportListener = exports.addReportListener = function addReportListener(callback) {
    if (callback) {
        this.eventListener.push(callback);
    }
};

//处理整理数据
var handleReportData = exports.handleReportData = function handleReportData(content) {
    var reportParams = {};
    reportParams.type = "performance";
    reportParams.typeName = 'load';
    reportParams.location = window.location.href;
    reportParams.environment = window.navigator.userAgent;
    reportParams.data = content;
    reportParams.reportTime = new Date().getTime();
    //系统信息和首屏性能立即上报
    var control = {};
    control.lazy = false;
    control.isReport = true;
    return {
        reportParams: reportParams,
        control: control
    };
};

//通知上报
var noticeReport = exports.noticeReport = function noticeReport(content) {
    var that = this;
    if (that.eventListener.length === 0) {
        return false;
    }
    //通知上报
    that.eventListener.map(function (item) {
        if (tool.isFunction(item)) {
            var _that$handleReportDat = that.handleReportData(content),
                reportParams = _that$handleReportDat.reportParams,
                control = _that$handleReportDat.control;

            item(reportParams, control);
        }
    });
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
	处理url挂载参数
	handle url paramns
 */
var handleUrlParams = function handleUrlParams(url, params) {
    if (url.indexOf('?') === -1) {
        url += '?';
    } else {
        url += url.indexOf('&') === -1 ? '&' : '';
    }
    for (var key in params) {
        url += key + '=';
        url += params[key].toString() + '&';
    }
    url = url.substring(0, url.length - 1);
    return url;
};

/*

 	report data Ajax request
	上报ajax请求  
	params
		config = {
			url: 			上报url 				report url
			data:  			上报数据 				report data
			params: 		上报url上是否挂载参数 	report url on params
			customeHead:    上报自定义请求头     	report custome request header
		}
	return 
		Promise
 */
var AjaxServer = function AjaxServer(config) {
    //创建一个Promise回调
    //new Promise
    var defer = new Promise(function (res, rej) {
        var url = config.url,
            data = config.data,
            params = config.params,
            customeHead = config.customeHead;

        var resHead = {};
        //judge data
        if (!url || !data) {
            rej('report data fail, report url and report data is exist undefined!');
            return false;
        }
        //can is use params
        if (params && tool.isObject(params)) {
            url = handleUrlParams(url, params);
        }

        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        //handle request header flag
        var xhrHead = {
            'Content-Type': 'application/json;charset=UTF-8'
        };
        if (customeHead && tool.isObject(customeHead)) {
            xhrHead = tool.extend(xhrHead, customeHead);
        }
        xhrHead['keepObserver-reportAjax'] = 'yes';
        for (var key in xhrHead) {
            xhr.setRequestHeader(key, xhrHead[key]);
        }
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4) {
                //防止跨域等问题  触发错误导致死循环
                //Prevent problems such as cross-domain triggering errors that lead to dead loops
                try {
                    //handle response headers
                    if (xhr && xhr.getAllResponseHeaders) {
                        var header = xhr.getAllResponseHeaders() || '',
                            headerArr = header.split("\n");

                        //get data
                        for (var i = 0; i < headerArr.length; i++) {
                            var line = headerArr[i];
                            if (!line) {
                                continue;
                            }
                            var arr = line.split(': ');
                            var _key = arr[0],
                                value = arr.slice(1).join(': ');
                            resHead[_key] = value;
                        }
                    }
                    if (xhr.status == 200) {
                        var result = {
                            head: resHead,
                            data: xhr.responseText
                        };
                        res(result);
                    } else {
                        rej('Ajax request process find error! error status code:' + xhr.status);
                    }
                } catch (e) {
                    rej('Ajax request process find error!' + e);
                }
                //end
            }
        };
        xhr.onerror = function (e) {
            rej('Ajax request process find error!' + e);
        };
        //send data
        var data = JSON.stringify(data);
        xhr.send(data);
    });
    return defer;
};

exports.default = AjaxServer;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.$setCustomeReportData = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
    	接受自定义上报内容
    	model1: arguments[0]  type object  
        model2: arguments[0]  type boolean  
                will extend preData  arguments[...]=extend data
        合并到this._customeInfo中
     */
var $setCustomeReportData = exports.$setCustomeReportData = function $setCustomeReportData(params) {
    var that = this;
    //判断数据正确性
    var args = tool.toArray(arguments);
    if (!args || args.length === 0) {
        return false;
    }
    if (!that._customeInfo) {
        that._customeInfo = {};
    }
    var params = args[0];
    //如果是普通添加
    if (tool.isObject(params) && !tool.isEmptyObject(params)) {
        //设置用户自定义上报内容
        that._customeInfo = tool.extend(that._customeInfo, params);
        return false;
    }
    //如果是修改并覆盖之前的数据
    if (tool.isBoolean(params) && params && args.length > 1) {
        params = args.slice(1, args.length);
        params.map(function (item) {
            if (tool.isObject(item) && !tool.isEmptyObject(item)) {
                that._customeInfo = tool.extend(that._customeInfo, item);
            }
        });
    }
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(2);

exports.default = {
    /******************** 公共相关配置 *******************/
    //上报的类型
    $observer_Type: _index.reportType,
    //如果取不到缓存长度的默认长度
    max_cache: 3,

    //默认log数组缓存长度
    max_log_cache: 5,
    //默认vue数组缓存长度
    max_vue_cache: 1,
    //默认network数组缓存长度
    max_network_cache: 3,

    /*********************   上传相关   ********************/
    //上传服务器的url列表  		array
    reportUrl: false,
    //上传失败回调				function (reportInfo,reportUrl(有可能有))
    onReportFail: false,
    //上传前自定义设置url   	function (reportUrl)   return new URl
    onReportBeforeSetUrl: false,
    //上传前自定义设置请求头， 	function (reportUrl)   return headData object
    onReportBeforeSetHead: false,
    //上传服务器前回调钩子  	function (reportInfo,reportUrl,repHead)
    onReportBeforeHook: false,
    //上传服务器后返回处理钩子      function (resultInfo,reportUrl,resHead)
    onReportResultHook: false
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._removeReportData = exports._saveReportData = exports._getReportContent = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
    receive the report data
    params  
    @object  = {
        type:  string                   //类型,observer or performance    
        typeName:  string               //类型名,vue  or log or network
        location:string                 //捕获位置
        environment:string              //运行环境信息
        data:object                     //捕获数据
        reportTime: int                 //捕获时间搓
    }
    @ .control null and object = {
        @ .isReport:boolean                 //是否需要上报 内部reportServer需要使用
        @ .lazy:boolean                     //是否懒上报, （手动trackExtend合并上报,或者trackExtend合并上报）,不立即上报
        @ .trackExtend:boolean              //是否合并之前保存的lazy信息一起上报
        @ .isError:boolean                  //是否是错误信息
        @ .isPerformance:boolean            //是否是性能捕获分析
        @ .preDelete:boolean                //是否删除之前的信息
        @ .ignore:boolean                   //本条数据是否忽略
    }
*/
var _getReportContent = exports._getReportContent = function _getReportContent(params, control) {
    //判断数据合法性
    if (!params || !params.type || !params.typeName || !params.data || !tool.isObject(params.data)) {
        this.$devLog('[keepObserver] reportServer receive reportData is not right');
        return false;
    }
    if (!control) {
        this.$deveWarn('[keepObserver] reportServer receive pipeDate control options is  undefined');
        return false;
    }

    //是否是开发模式需要打印
    if (this.develop && this.developGetMsgLog) {
        var log = tool.extend({}, params);
        log.title = '[keepObserver] get' + log.type + 'type:' + log.typeName + " of monitor data";
        this.$devLog(log);
    }
    //是否删除之前保存的数据
    if (params.type === 'monitor' && control.preDelete) {
        this._removeReportData(params.typeName);
    }
    //是否忽略本条数据
    if (control.ignore) {
        return false;
    }
    //是否懒上报
    if (params.type === 'monitor' && control.lazy) {
        this._saveReportData(params);
        return false;
    }
    if (control.isReport) {
        //上报
        this._handleReport(params, control);
    }
};

/* 
	保存处理上报数据
	params type object
	@ .typeName string   	  (no null)	      上报类型名
	@ .data  array or object  (no null) 	  上报内容
	@ .lazy bollen          				  是延时上报(由手动上传合并上报或者又下一次该上报合并上报) 不传立即上报
	**********************************
	# return  当前保存数据长度
 */
var _saveReportData = exports._saveReportData = function _saveReportData(params) {
    var type = params.typeName;
    //如果没有该上报类型,那么属于未知内容
    if (!this.reportData[type]) {
        type = 'unKownType';
    }
    var reportData = this.reportData[type];
    //是否延时上报,如果没有添加到上报数据中
    var maxCache = this.$report_config['max_' + type + '_cache'];
    maxCache = maxCache ? maxCache : this.$report_config['max_cache'];
    //如果当前存储超过长度 那么弹出最早的数据
    if (reportData.length + 1 > maxCache) {
        var discard = reportData.shift();
        //开发模式打印
        if (this.develop && this.develogDiscardLog) {
            discard.title = '[keepObserver] observer ' + type + 'type monitor data overstep cache limit will discard';
            this.$devLog(discard);
        }
    }
    reportData.push(params);
    this.reportData[type] = reportData;
    //保存到locationStorage中
    tool.setStorage(type, reportData);
};

/*
	删除保存的上报数据
	@params type string    上报类型
*/
var _removeReportData = exports._removeReportData = function _removeReportData(type) {
    if (this.reportData[type]) {
        this.reportData[type] = [];
        tool.removeStorage(type);
        //开发模式下打印
        if (this.develop && this.develogDeleteLog) {
            this._$devLog('[keepObserver] observer ' + type + 'type Of monitor data is clean up');
        }
    }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(2);

var _defaultConfig = __webpack_require__(33);

var _defaultConfig2 = _interopRequireDefault(_defaultConfig);

var _index4 = __webpack_require__(0);

var tool = _interopRequireWildcard(_index4);

var _api = __webpack_require__(32);

var apiServer = _interopRequireWildcard(_api);

var _handle = __webpack_require__(34);

var handleServer = _interopRequireWildcard(_handle);

var _report = __webpack_require__(36);

var reportServer = _interopRequireWildcard(_report);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// report Server 
var KeepObserverReport = function (_KeepObserverDefault) {
    _inherits(KeepObserverReport, _KeepObserverDefault);

    //constructor
    function KeepObserverReport(config) {
        _classCallCheck(this, KeepObserverReport);

        //存混合配置
        var _this = _possibleConstructorReturn(this, (KeepObserverReport.__proto__ || Object.getPrototypeOf(KeepObserverReport)).call(this, config));

        var reportConfig = config.reportCustom || {};
        //是否是开发模式
        reportConfig.develop = config.develop ? true : false;
        //开发环境下获取报文是否打印
        reportConfig.developGetMsgLog = config.developGetMsgLog ? true : false;
        //开发环境下丢弃数据 是否打印出来
        reportConfig.develogDiscardLog = config.develogDiscardLog ? true : false;
        //开发环境下删除出数据 是否打印出来
        reportConfig.develogDeleteLog = config.develogDeleteLog ? true : false;
        //混合默认配置
        _this.$report_config = tool.extend(_defaultConfig2.default, reportConfig);
        //上传数据保存
        _this.reportData = {};
        //用户自定义上传参数
        _this._customeInfo = false;
        //项目
        _this._project = config.project || 'unKnow';
        //项目版本
        _this._projectVersion = config.projectVersion || 'unknow-version';

        //当前是否处于开发模式
        _this.develop = _this.$report_config.develop;
        _this.developGetMsgLog = _this.$report_config.developGetMsgLog;
        _this.develogDeleteLog = _this.$report_config.develogDeleteLog;
        _this.develogDiscardLog = _this.$report_config.develogDiscardLog;

        //混入自身方法
        _this.$mixin(apiServer);
        _this.$mixin(handleServer);
        _this.$mixin(reportServer);
        //初始化
        _this._init();
        return _this;
    }
    /*
        初始化上报类参数
        复制this.reportData并从strong里面复原数据
     */


    _createClass(KeepObserverReport, [{
        key: '_init',
        value: function _init() {
            var that = this;
            //初始化this.reportData
            var handleType = that.$report_config.$observer_Type;
            handleType.forEach(function (type) {
                var cacheData = tool.getStorage(type);
                that.reportData[type] = [];
                if (cacheData) {
                    that.reportData[type] = cacheData;
                }
            });
        }
        /*
            提供一个挂载方法在注入中使用
            return 
                $getCustomeReport
         */

    }, {
        key: 'apply',
        value: function apply(pipe) {
            var that = this;
            pipe.registerRecivePipeMessage(that._getReportContent, that);
            return {
                $setCustomeReportData: this.$setCustomeReportData
            };
        }
    }]);

    return KeepObserverReport;
}(_index2.default);

exports.default = KeepObserverReport;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._handleReportFail = exports._handleHook = exports._createReportData = exports._handleReport = undefined;

var _index = __webpack_require__(0);

var tool = _interopRequireWildcard(_index);

var _ajax = __webpack_require__(31);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/*
    处理上报
    params:
    @params  = {
        type:  string                   //类型,observer or performance    
        typeName:  string               //类型名,vue  or log or network
        location:string                 //捕获位置
        environment:string              //运行环境信息
        data:object                     //捕获数据
        reportTime: int                 //捕获时间搓
    }
    @.control = {
        @ .isReport:boolean                 //是否需要上报 内部reportServer需要使用
        @ .lazy:boolean                     //是否懒上报, （手动trackExtend合并上报,或者trackExtend合并上报）,不立即上报
        @ .trackExtend:boolean              //是否合并之前保存的lazy信息一起上报
        @ .isError:boolean                  //是否是错误信息
        @ .isPerformance:boolean            //是否是性能捕获分析
        @ .preDelete:boolean                //是否删除之前的信息
        @ .ignore:boolean                   //本条数据是否忽略
    }
 */
var _handleReport = exports._handleReport = function _handleReport(params, control) {
    var that = this;
    //如果未传入数据类型
    if (!params || !control || !tool.isObject(params) || !tool.isObject(control)) {
        return false;
    }
    //获得上传数据
    var reportData = that._createReportData(params, control);
    //上传到服务器
    var _$report_config = this.$report_config,
        reportUrl = _$report_config.reportUrl,
        onReportFail = _$report_config.onReportFail,
        onReportBeforeSetUrl = _$report_config.onReportBeforeSetUrl,
        onReportBeforeSetHead = _$report_config.onReportBeforeSetHead,
        onReportBeforeHook = _$report_config.onReportBeforeHook,
        onReportResultHook = _$report_config.onReportResultHook;
    //如果没有设置上传URL 那么停止上传

    if (!reportUrl || !tool.isArray(reportUrl)) {
        that._handleReportFail(onReportFail, reportData, null);
        return false;
    }
    //遍历URL上传列表
    //开始依次上传
    reportUrl.map(function (item) {
        var reportConfig = {};
        //是否有上传前修改URL回调
        if (onReportBeforeSetUrl) {
            var url = that._handleHook(onReportBeforeSetUrl, item);
        } else {
            url = item;
        }
        if (!tool.isString(url)) {
            that._handleReportFail(onReportFail, reportData, null);
            return false;
        }
        reportConfig.url = url;
        //获取自定义请求头
        var customeHead = onReportBeforeSetHead ? that._handleHook(onReportBeforeSetHead, item) : false;
        if (customeHead && tool.isObject(customeHead) && !tool.isEmptyObject(customeHead)) {
            reportConfig.customeHead = customeHead;
        }
        //获取请求
        reportConfig.data = reportData;
        that._handleHook(onReportBeforeHook, reportData, reportConfig.url, reportConfig.customeHead);
        //上传到服务器
        try {
            (0, _ajax2.default)(reportConfig).then(function (result) {
                that._handleHook(onReportResultHook, result.data, reportConfig.url, result.head);
            }, function (err) {
                that._handleReportFail(onReportFail, reportData, reportConfig.url);
            });
        } catch (err) {
            //上传报错
            that.$devError('report Server Process find error:' + err);
        }
        //end
    });
    // map url end
};

/*
    生成上报数据头
    params:
    @params  = {
        type:  string                   //类型,observer or performance    
        typeName:  string               //类型名,vue  or log or network
        location:string                 //捕获位置
        environment:string              //运行环境信息
        data:object                     //捕获数据
        reportTime: int //捕获时间搓
    }
    @.control = {
        @ .isReport:boolean                 //是否需要上报 内部reportServer需要使用
        @ .lazy:boolean                     //是否懒上报, （手动trackExtend合并上报,或者trackExtend合并上报）,不立即上报
        @ .trackExtend:boolean              //是否合并之前保存的lazy信息一起上报
        @ .isError:boolean                  //是否是错误信息
        @ .isPerformance:boolean            //是否是性能捕获分析
        @ .preDelete:boolean                //是否删除之前的信息
        @ .ignore:boolean                   //本条数据是否忽略
    }
    *****************************************************
    return
    reportData {
        //以下参数必定存在
        @.type string                       上报的大的类型
        @.reportType string                 上报的具体类型名
        @.project string                    上报项目名
        @.projectVersion string             上报项目版本
        @.reportTime number                 上报时间时间搓
        @.data  object                      上报内容
        @.environment string                上报项目运行环境
        @.location string                   上报的位置
        //一下参数可能存在
        @.customeInfo all                   用户自定义设置上传参数
        @.preTrackData object               合并之前保存的监控数据对象
    }
*/
var _createReportData = exports._createReportData = function _createReportData(params, control) {
    var that = this;
    var reportData = {};
    //添加类型
    reportData.type = params.type;
    reportData.reportType = params.typeName;
    reportData.isMonitorError = params.type === 'monitor' ? true : false;
    reportData.isPerformance = params.type === 'performance' ? true : false;
    //基本信息
    reportData.project = that._project;
    reportData.projectVersion = that._projectVersion;
    reportData.reportTime = params.reportTime;
    reportData.location = params.location;
    reportData.environment = params.environment;
    reportData.data = params.data;
    //处理自定义信息
    if (that._customeInfo) {
        reportData.customeInfo = tool.extend({}, that._customeInfo);
    }
    //处理上报数据是否合并上报
    if (control.trackExtend) {
        reportData.preTrackData = {};
        for (var key in that.reportData) {
            var value = that.reportData[key];
            if (tool.isArray(value) && value.length > 0) {
                reportData.preTrackData[key] = tool.extend({}, value);
                //删除相关数据
                that._removeReportData(key);
            }
        }
        //修正数据
        reportData.preTrackData = tool.isEmptyObject(reportData.preTrackData) ? null : reportData.preTrackData;
    }
    //开发模式下打印上报数据
    if (that.develop) {
        var log = tool.extend({}, reportData);
        log.title = params.type + " type " + params.typeName + " will report Server,report Data in the data ";
        that.$devLog(log);
    }
    return reportData;
};

/*
	调用钩子
	@arguments[0] = onHooK
	@arguments[...] = params
	return
		onHook result
 */
var _handleHook = exports._handleHook = function _handleHook() {
    var args = tool.toArray(arguments);
    if (!args || args.length === 0 || !tool.isFunction(args[0])) {
        return false;
    }
    var onHook = args[0];
    var params = args.slice(1, args.length);
    try {
        var result = onHook(params);
    } catch (err) {
        //报错
        this.$devError(onHook.name + 'callback hook is runing error:' + err);
    }
    return result;
};

/*  
	处理上传失败
	params
		onFail      function        	失败的回调 没有则忽略直接跳过
		reportData 	obj or arr          需要上传的数据
		reportUrl 	string     			上传的url地址 (有可能存在)
 */
var _handleReportFail = exports._handleReportFail = function _handleReportFail(onFail, reportData, reportUrl) {
    if (!onFail) {
        return false;
    }
    try {
        onFail(reportData, reportUrl);
    } catch (e) {
        this.$devError('report Server callback hook is runing error:' + err);
    }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var MD5 = function (r) {
    function n(o) {
        if (t[o]) return t[o].exports;
        var e = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return r[o].call(e.exports, e, e.exports, n), e.l = !0, e.exports;
    }
    var t = {};
    return n.m = r, n.c = t, n.i = function (r) {
        return r;
    }, n.d = function (r, t, o) {
        n.o(r, t) || Object.defineProperty(r, t, {
            configurable: !1,
            enumerable: !0,
            get: o
        });
    }, n.n = function (r) {
        var t = r && r.__esModule ? function () {
            return r.default;
        } : function () {
            return r;
        };
        return n.d(t, "a", t), t;
    }, n.o = function (r, n) {
        return Object.prototype.hasOwnProperty.call(r, n);
    }, n.p = "", n(n.s = 4);
}([function (r, n) {
    var t = {
        utf8: {
            stringToBytes: function stringToBytes(r) {
                return t.bin.stringToBytes(unescape(encodeURIComponent(r)));
            },
            bytesToString: function bytesToString(r) {
                return decodeURIComponent(escape(t.bin.bytesToString(r)));
            }
        },
        bin: {
            stringToBytes: function stringToBytes(r) {
                for (var n = [], t = 0; t < r.length; t++) {
                    n.push(255 & r.charCodeAt(t));
                }return n;
            },
            bytesToString: function bytesToString(r) {
                for (var n = [], t = 0; t < r.length; t++) {
                    n.push(String.fromCharCode(r[t]));
                }return n.join("");
            }
        }
    };
    r.exports = t;
}, function (r, n, t) {
    !function () {
        var n = t(2),
            o = t(0).utf8,
            e = t(3),
            u = t(0).bin,
            i = function i(r, t) {
            r.constructor == String ? r = t && "binary" === t.encoding ? u.stringToBytes(r) : o.stringToBytes(r) : e(r) ? r = Array.prototype.slice.call(r, 0) : Array.isArray(r) || (r = r.toString());
            for (var f = n.bytesToWords(r), s = 8 * r.length, c = 1732584193, a = -271733879, l = -1732584194, g = 271733878, h = 0; h < f.length; h++) {
                f[h] = 16711935 & (f[h] << 8 | f[h] >>> 24) | 4278255360 & (f[h] << 24 | f[h] >>> 8);
            }f[s >>> 5] |= 128 << s % 32, f[14 + (s + 64 >>> 9 << 4)] = s;
            for (var p = i._ff, y = i._gg, v = i._hh, d = i._ii, h = 0; h < f.length; h += 16) {
                var b = c,
                    T = a,
                    x = l,
                    B = g;
                c = p(c, a, l, g, f[h + 0], 7, -680876936), g = p(g, c, a, l, f[h + 1], 12, -389564586), l = p(l, g, c, a, f[h + 2], 17, 606105819), a = p(a, l, g, c, f[h + 3], 22, -1044525330), c = p(c, a, l, g, f[h + 4], 7, -176418897), g = p(g, c, a, l, f[h + 5], 12, 1200080426), l = p(l, g, c, a, f[h + 6], 17, -1473231341), a = p(a, l, g, c, f[h + 7], 22, -45705983), c = p(c, a, l, g, f[h + 8], 7, 1770035416), g = p(g, c, a, l, f[h + 9], 12, -1958414417), l = p(l, g, c, a, f[h + 10], 17, -42063), a = p(a, l, g, c, f[h + 11], 22, -1990404162), c = p(c, a, l, g, f[h + 12], 7, 1804603682), g = p(g, c, a, l, f[h + 13], 12, -40341101), l = p(l, g, c, a, f[h + 14], 17, -1502002290), a = p(a, l, g, c, f[h + 15], 22, 1236535329), c = y(c, a, l, g, f[h + 1], 5, -165796510), g = y(g, c, a, l, f[h + 6], 9, -1069501632), l = y(l, g, c, a, f[h + 11], 14, 643717713), a = y(a, l, g, c, f[h + 0], 20, -373897302), c = y(c, a, l, g, f[h + 5], 5, -701558691), g = y(g, c, a, l, f[h + 10], 9, 38016083), l = y(l, g, c, a, f[h + 15], 14, -660478335), a = y(a, l, g, c, f[h + 4], 20, -405537848), c = y(c, a, l, g, f[h + 9], 5, 568446438), g = y(g, c, a, l, f[h + 14], 9, -1019803690), l = y(l, g, c, a, f[h + 3], 14, -187363961), a = y(a, l, g, c, f[h + 8], 20, 1163531501), c = y(c, a, l, g, f[h + 13], 5, -1444681467), g = y(g, c, a, l, f[h + 2], 9, -51403784), l = y(l, g, c, a, f[h + 7], 14, 1735328473), a = y(a, l, g, c, f[h + 12], 20, -1926607734), c = v(c, a, l, g, f[h + 5], 4, -378558), g = v(g, c, a, l, f[h + 8], 11, -2022574463), l = v(l, g, c, a, f[h + 11], 16, 1839030562), a = v(a, l, g, c, f[h + 14], 23, -35309556), c = v(c, a, l, g, f[h + 1], 4, -1530992060), g = v(g, c, a, l, f[h + 4], 11, 1272893353), l = v(l, g, c, a, f[h + 7], 16, -155497632), a = v(a, l, g, c, f[h + 10], 23, -1094730640), c = v(c, a, l, g, f[h + 13], 4, 681279174), g = v(g, c, a, l, f[h + 0], 11, -358537222), l = v(l, g, c, a, f[h + 3], 16, -722521979), a = v(a, l, g, c, f[h + 6], 23, 76029189), c = v(c, a, l, g, f[h + 9], 4, -640364487), g = v(g, c, a, l, f[h + 12], 11, -421815835), l = v(l, g, c, a, f[h + 15], 16, 530742520), a = v(a, l, g, c, f[h + 2], 23, -995338651), c = d(c, a, l, g, f[h + 0], 6, -198630844), g = d(g, c, a, l, f[h + 7], 10, 1126891415), l = d(l, g, c, a, f[h + 14], 15, -1416354905), a = d(a, l, g, c, f[h + 5], 21, -57434055), c = d(c, a, l, g, f[h + 12], 6, 1700485571), g = d(g, c, a, l, f[h + 3], 10, -1894986606), l = d(l, g, c, a, f[h + 10], 15, -1051523), a = d(a, l, g, c, f[h + 1], 21, -2054922799), c = d(c, a, l, g, f[h + 8], 6, 1873313359), g = d(g, c, a, l, f[h + 15], 10, -30611744), l = d(l, g, c, a, f[h + 6], 15, -1560198380), a = d(a, l, g, c, f[h + 13], 21, 1309151649), c = d(c, a, l, g, f[h + 4], 6, -145523070), g = d(g, c, a, l, f[h + 11], 10, -1120210379), l = d(l, g, c, a, f[h + 2], 15, 718787259), a = d(a, l, g, c, f[h + 9], 21, -343485551), c = c + b >>> 0, a = a + T >>> 0, l = l + x >>> 0, g = g + B >>> 0;
            }
            return n.endian([c, a, l, g]);
        };
        i._ff = function (r, n, t, o, e, u, i) {
            var f = r + (n & t | ~n & o) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n;
        }, i._gg = function (r, n, t, o, e, u, i) {
            var f = r + (n & o | t & ~o) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n;
        }, i._hh = function (r, n, t, o, e, u, i) {
            var f = r + (n ^ t ^ o) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n;
        }, i._ii = function (r, n, t, o, e, u, i) {
            var f = r + (t ^ (n | ~o)) + (e >>> 0) + i;
            return (f << u | f >>> 32 - u) + n;
        }, i._blocksize = 16, i._digestsize = 16, r.exports = function (r, t) {
            if (void 0 === r || null === r) throw new Error("Illegal argument " + r);
            var o = n.wordsToBytes(i(r, t));
            return t && t.asBytes ? o : t && t.asString ? u.bytesToString(o) : n.bytesToHex(o);
        };
    }();
}, function (r, n) {
    !function () {
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            t = {
            rotl: function rotl(r, n) {
                return r << n | r >>> 32 - n;
            },
            rotr: function rotr(r, n) {
                return r << 32 - n | r >>> n;
            },
            endian: function endian(r) {
                if (r.constructor == Number) return 16711935 & t.rotl(r, 8) | 4278255360 & t.rotl(r, 24);
                for (var n = 0; n < r.length; n++) {
                    r[n] = t.endian(r[n]);
                }return r;
            },
            randomBytes: function randomBytes(r) {
                for (var n = []; r > 0; r--) {
                    n.push(Math.floor(256 * Math.random()));
                }return n;
            },
            bytesToWords: function bytesToWords(r) {
                for (var n = [], t = 0, o = 0; t < r.length; t++, o += 8) {
                    n[o >>> 5] |= r[t] << 24 - o % 32;
                }return n;
            },
            wordsToBytes: function wordsToBytes(r) {
                for (var n = [], t = 0; t < 32 * r.length; t += 8) {
                    n.push(r[t >>> 5] >>> 24 - t % 32 & 255);
                }return n;
            },
            bytesToHex: function bytesToHex(r) {
                for (var n = [], t = 0; t < r.length; t++) {
                    n.push((r[t] >>> 4).toString(16)), n.push((15 & r[t]).toString(16));
                }return n.join("");
            },
            hexToBytes: function hexToBytes(r) {
                for (var n = [], t = 0; t < r.length; t += 2) {
                    n.push(parseInt(r.substr(t, 2), 16));
                }return n;
            },
            bytesToBase64: function bytesToBase64(r) {
                for (var t = [], o = 0; o < r.length; o += 3) {
                    for (var e = r[o] << 16 | r[o + 1] << 8 | r[o + 2], u = 0; u < 4; u++) {
                        8 * o + 6 * u <= 8 * r.length ? t.push(n.charAt(e >>> 6 * (3 - u) & 63)) : t.push("=");
                    }
                }return t.join("");
            },
            base64ToBytes: function base64ToBytes(r) {
                r = r.replace(/[^A-Z0-9+\/]/gi, "");
                for (var t = [], o = 0, e = 0; o < r.length; e = ++o % 4) {
                    0 != e && t.push((n.indexOf(r.charAt(o - 1)) & Math.pow(2, -2 * e + 8) - 1) << 2 * e | n.indexOf(r.charAt(o)) >>> 6 - 2 * e);
                }return t;
            }
        };
        r.exports = t;
    }();
}, function (r, n) {
    function t(r) {
        return !!r.constructor && "function" == typeof r.constructor.isBuffer && r.constructor.isBuffer(r);
    }

    function o(r) {
        return "function" == typeof r.readFloatLE && "function" == typeof r.slice && t(r.slice(0, 0));
    }
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
    r.exports = function (r) {
        return null != r && (t(r) || o(r) || !!r._isBuffer);
    };
}, function (r, n, t) {
    r.exports = t(1);
}]);

exports.default = MD5;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
});