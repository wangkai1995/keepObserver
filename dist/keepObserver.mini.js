!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=19)}([function(e,t,n){"use strict";function r(e,t){if(!t||"string"!=typeof t)return console.error("format is undefiend or type is Error"),"";e=e instanceof Date?e:"number"==typeof e||"string"==typeof e?new Date(e):new Date;var n={"y+":e.getFullYear(),"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var r in n)if(new RegExp(r).test(t)){var o=RegExp.lastMatch;t=t.replace(o,n[r]<10?"0"+n[r]:n[r].toString())}return t}function o(e){return"[object Number]"==Object.prototype.toString.call(e)}function i(e){return"[object String]"==Object.prototype.toString.call(e)}function a(e){return"[object Array]"==Object.prototype.toString.call(e)}function s(e){return"[object Boolean]"==Object.prototype.toString.call(e)}function u(e){return void 0===e}function l(e){return null===e}function c(e){return"[object Symbol]"==Object.prototype.toString.call(e)}function f(e){return!("[object Object]"!=Object.prototype.toString.call(e)&&(o(e)||i(e)||s(e)||a(e)||l(e)||v(e)||u(e)||c(e)))}function d(e){if(!f(e))return!0;for(var t in e)return!1;return!0}function p(e){return!a(e)||!(e.length>0)}function v(e){return"[object Function]"==Object.prototype.toString.call(e)}function y(e){return"object"===("undefined"==typeof HTMLElement?"undefined":k(HTMLElement))?e instanceof HTMLElement:e&&"object"===(void 0===e?"undefined":k(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function h(e){var t=Object.prototype.toString.call(e);return"[object global]"==t||"[object Window]"==t||"[object DOMWindow]"==t}function m(e){var t=Object.prototype.hasOwnProperty;if(!e||"object"!==(void 0===e?"undefined":k(e))||e.nodeType||h(e))return!1;try{if(e.constructor&&!t.call(e,"constructor")&&!t.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}var n;for(n in e);return void 0===n||t.call(e,n)}function _(e){return Array.prototype.slice.call(e)}function g(e){return e?"string"==typeof e?e:e.toString():""}function w(e,t){window.localStorage&&(e="keepObserverData_"+e,t=JSON.stringify(t),localStorage.setItem(e,t))}function b(e){if(window.localStorage){e="keepObserverData_"+e;var t=localStorage.getItem(e);return t?JSON.parse(t):""}}function O(e){window.localStorage&&(e="keepObserverData_"+e,localStorage.removeItem(e))}function R(){var e=_(arguments);if(0===e.length)return console.error("extends params is undefined"),{};if(1===e.length)return e[0];var t=e[0],n=e.slice(1,e.length);return f(t)||a(t)||(t={}),n.map(function(e){if(t===e)return!1;if(f(e))for(var n in e)f(e[n])?(t[n]=t[n]&&f(t[n])?t[n]:{},t[n]=R(t[n],e[n])):a(e)?(t[n]=t[n]&&a(t[n])?t[n]:[],t[n]=R(t[n],e[n])):t[n]=e[n];else if(a(e))for(var r=0;r<e.length;r++)f(e[r])?(t[r]=t[r]&&f(t[r])?t[r]:{},t[r]=R(t[r],e[r])):a(e)?(t[r]=t[r]&&a(t[r])?t[r]:[],t[r]=R(t[r],e[r])):t[r]=e[r]}),t}Object.defineProperty(t,"__esModule",{value:!0});var k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.dateFormat=r,t.isNumber=o,t.isString=i,t.isArray=a,t.isBoolean=s,t.isUndefined=u,t.isNull=l,t.isSymbol=c,t.isObject=f,t.isEmptyObject=d,t.isEmptyArray=p,t.isFunction=v,t.isElement=y,t.isWindow=h,t.isPlainObject=m,t.toArray=_,t.toString=g,t.setStorage=w,t.getStorage=b,t.removeStorage=O,t.extend=R},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),l=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(u),n(18)),c=r(l),f=n(5),d=r(f),p=n(4),v=r(p),y=n(3),h=r(y),m=n(6),_=r(m),g=function(e){function t(e){var n;o(this,t);var r=e.reportCusom||{};return r.develop=!!e.develop,r.developGetMsgLog=!!e.developGetMsgLog,r.develogDiscardLog=!!e.develogDiscardLog,r.develogDeleteLog=!!e.develogDeleteLog,n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r)),n._config=e,n._version="1.0.1",n._project=e.project||"unKnow",n.observerKey={},n._initSyStem(),n._initNetWork(),n._initLog(),n._config.isVue&&n._config.vueInstance&&n._initVue(),n}return a(t,e),s(t,[{key:"_initSyStem",value:function(){d.default.call(this)}},{key:"_initNetWork",value:function(){v.default.call(this),this.observerKey.network=!0}},{key:"_initLog",value:function(){h.default.call(this),this.observerKey.log=!0}},{key:"_initVue",value:function(){_.default.call(this),this.observerKey.vue=!0}},{key:"setCustomReport",value:function(e){this.$getCustomeReport&&this.$getCustomeReport(e)}},{key:"stopObserver",value:function(e){this.observerKey[e]&&this["$"+e].stopObserver&&(this["$"+e].stopObserver(),this.observerKey[e]=!1)}},{key:"stopAllObserver",value:function(){for(var e in this.observerKey)this["$"+e].stopObserver&&(this["$"+e].stopObserver(),this.observerKey[e]=!1)}},{key:"startObserver",value:function(e){!this.observerKey[e]&&this["$"+e].startObserver&&(this["$"+e].startObserver(),this.observerKey[e]=!0)}},{key:"startAllObserver",value:function(){for(var e in this.observerKey)this["$"+e].startObserver&&(this["$"+e].startObserver(),this.observerKey[e]=!0)}}]),t}(c.default);t.default=g},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){r(this,e),this.$devLog=!1,this.$devError=!1,this._defaultinit()}return o(e,[{key:"_defaultinit",value:function(){var e=this;e.$devLog=window.console.log,window.console.log=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];e.$devLog.apply(window.console,n)},e.$devError=window.console.error,window.console.error=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];e.$devError.apply(window.console,n)}}}]),e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(r),n(8)),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=function(){var e=this,t=e._config.logCusom?e._config.logCusom:{};t.develop=!!e._config.develop,e.$log=new i.default(t),e.$log.addReportListener(function(t){var n={},r=null;n.typeName="log",n.location=window.location.href,n.data=t,"clear"===t.type&&(r={},r.preDelete=!0,r.ignore=!0),"jsError"!==t.type&&"error"!==t.type||(r={},r.lazy=!1,r.baseExtend=!0,r.isError=!0),e.$getReportContent(n,r)})};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(r),n(10)),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=function(){var e=this,t=e._config.networkCusom?e._config.networkCusom:{};e.$network=new i.default(t),e.$network.addReportListener(function(t){var n={},r=null;n.typeName="network",n.location=window.location.href,n.data=t,t.isError&&(r={},r.lazy=!1,r.baseExtend=!t.isTimeout,r.isError=!t.isTimeout),e.$getReportContent(n,r)})};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(r),n(13)),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=function(){var e=this,t=e._config.systemCusom?e._config.systemCusom:{};e.$system=new i.default(t),e.$system.addReportListener(function(t){var n={};n.typeName="system",n.location=window.location.href,n.data=t;var r={};r.lazy=!1,e.$getReportContent(n,r)})};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(){var e=this,t=e._config.vueCusom?e._config.vueCusom:{};if(t.vueInstance=e._config.vueInstance,!t.vueInstance)return!1;e.$vue=new o.default(t),e.$vue.addReportListener(function(t){var n={};n.typeName="vue",n.location=window.location.href,n.data=t;var r={};t.isError&&(r.lazy=!1,r.baseExtend=!0,r.isError=!0),e.$getReportContent(n,r)})};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={catchCrossDomain:!0}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(7),a=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(0),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),l=function(){function e(t){r(this,e),this._config=u.extend(a.default,t),this._typeName="log",this.eventListener=[],this._develop=this._config.develop,this.console={},this.$createElement=!1,this._init()}return o(e,[{key:"_init",value:function(){var e=this,t=["log","info","warn","debug","error"];window.console||(window.console={}),t.map(function(t){e.console[t]=window.console[t]}),e.console.time=window.console.time,e.console.timeEnd=window.console.timeEnd,e.console.clear=window.console.clear,t.map(function(t){window.console[t]=function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];if(e._develop&&e.console[t]&&u.isFunction(e.console[t])){var i;(i=e.console)[t].apply(i,r)}e._handleMessage(t,r)}});var n={};window.console.time=function(e){n[e]=Date.now()},window.console.timeEnd=function(t){var r=n[t];if(r){var o=t+":"+(Date.now()-r)+"ms";e._handleMessage("timeEnd",[o]),e._develop&&e.console.log&&u.isFunction(e.console.log)&&e.console.log(o)}else{var o=t+": 0ms";e._handleMessage("timeEnd",[o]),e._develop&&e.console.log&&u.isFunction(e.console.log)&&e.console.log(o)}},window.console.clear=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];e._handleMessage("clear",n),e.console.clear.apply(window.console,n)},e._config.catchCrossDomain&&!e.$createElement&&(window.document||window.document.createElement)&&(e.$createElement=window.document.createElement,window.document.createElement=function(t){var n=e.$createElement.call(window.document,t);return"script"===t&&(n.crossOrigin="anonymous"),n}),void 0!==window.addEventListener?window.addEventListener("error",function(){e._handleError.apply(e,arguments)},!0):window.attachEvent("onerror",function(){e._handleError.apply(e,arguments)})}},{key:"_handleMessage",value:function(e,t){var n=this,r={};if(!u.isArray(t)||0===t.length)return!1;r.type=e,r.data=JSON.stringify(t),n.noticeReport(r)}},{key:"_handleError",value:function(e){var t=this,n={},r=e.filename||e.url||!1;return"Script error."!==e.message||r?(n.errMsg=e.message||"未获取到错误信息",n.url=r,n.line=e.lineno||"未获取到错误行",n.colum=e.colno||"未获取到错误列",setTimeout(function(){t._handleMessage("jsError",[n])}),!0):(n.errMsg="jsError!可能是跨域资源的JS出现错误,无法获取到错误URL定位,错误信息为:"+e.message,n.url="",n.line=0,n.colum=0,setTimeout(function(){t._handleMessage("jsError",[n])}),!1)}},{key:"stopObserver",value:function(){window.console.log=this.console.log,window.console.error=this.console.error,window.console.info=this.console.info,window.console.debug=this.console.debug,window.console.warn=this.console.warn,window.console.time=this.console.time,window.console.timeEnd=this.console.timeEnd,window.console.clear=this.console.clear,this.console={},this._config.catchCrossDomain&&(window.document.createElement=this.$createElement,this.$createElement=!1)}},{key:"startObserver",value:function(){this._init()}},{key:"addReportListener",value:function(e){e&&this.eventListener.push(e)}},{key:"noticeReport",value:function(e){if(0===this.eventListener.length)return!1;this.eventListener.map(function(t){u.isFunction(t)&&t(e)})}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={timeout:2e4,ignoreRequestList:!1,onHandleJudgeResponse:!1,onHandleResponseData:!1,onHandleRequestData:!1}},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(9),s=function(e){return e&&e.__esModule?e:{default:e}}(a),u=n(0),l=r(u),c=n(11),f=r(c),d=function(){function e(t){o(this,e),this._config=l.extend(s.default,t),this._typeName="network",this.eventListener=[],this.networkList={},this._open=!1,this._send=!1,this._setRequestHeader=!1,this.timeout={},this.timeoutRequest={},this._init()}return i(e,[{key:"_init",value:function(){var e=this;if(!window.XMLHttpRequest)return!1;e._open=window.XMLHttpRequest.prototype.open,e._send=window.XMLHttpRequest.prototype.send,e._setRequestHeader=window.XMLHttpRequest.prototype.setRequestHeader,e._handleXMLAjax()}},{key:"_handleXMLAjax",value:function(){var e=this;window.XMLHttpRequest.prototype.open=function(){var t=this,n=l.toArray(arguments),r=null,o=f.getUniqueID(),i=n[0],a=n[1];t._url=a,t._method=i,t._id=o,t._setHead={},t._setHead[o]={};var s=t.onreadystatechange||function(){},u=function(){var n=!!e.networkList[o]&&e.networkList[o];if(!n){n={},n.method=i;var a=f.handleReqUrl(u),u=a.url,l=a.params;n.url=u,n.params=l}if(n.status=0,t.readyState>1&&(n.status=t.status),n.responseType=t.responseType,0==t.readyState)n.startTime||(n.startTime=+new Date);else if(1==t.readyState)n.startTime||(n.startTime=+new Date);else if(2==t.readyState);else if(3==t.readyState);else if(4==t.readyState){e._handleTimeout(o),n.resHead={};for(var c=t.getAllResponseHeaders()||"",d=c.split("\n"),p=0;p<d.length;p++){var v=d[p];if(v){var y=v.split(": "),h=y[0],m=y.slice(1).join(": ");n.resHead[h]=m}}clearInterval(r),n.endTime=+new Date,n.costTime=n.endTime-(n.startTime||n.endTime)+"ms",n.response=t.response,setTimeout(function(){e.timeoutRequest[o]||e._handleDoneXML(o)})}else clearInterval(r);return e.timeoutRequest[o]||(e.networkList[o]=n),s.apply(t,arguments)};t.onreadystatechange=u;var c=-1;return r=setInterval(function(){c!=t.readyState&&(c=t.readyState,u.call(t))},10),e._open.apply(t,n)},window.XMLHttpRequest.prototype.setRequestHeader=function(){var t=this,n=l.toArray(arguments);if(t._id&&t._setHead){var r=t._setHead[t._id],o=n[0]?n[0]:"unkownRequestHead",i=n[1]?n[1]:"";r[o]=i,t._setHead[t._id]=r}return e._setRequestHeader.apply(t,n)},window.XMLHttpRequest.prototype.send=function(){var t=this,n=t._id,r=t._method.toUpperCase(),o=t._setHead[n],i=t._url,a=[].slice.call(arguments),s=a[0],u="";e.networkList[n]||(e.networkList[n]={}),e.networkList[n].method=r;var c=f.handleReqUrl(i),i=c.url,d=c.params;return e.networkList[n].url=i,e.networkList[n].params=d,o&&(e.networkList[n].reqHead=l.extend({},o),delete t._setHead[n]),"POST"===r&&l.isString(s)&&(u=s),e.networkList[n].data=u,e._handleTimeout(n),e._send.apply(t,a)}}},{key:"_handleTimeout",value:function(e){var t=this,n=t._config.timeout,r=!!t.timeoutRequest[e]&&t.timeoutRequest[e],o=!!t.timeout[e]&&t.timeout[e],i=t.networkList[e];if(!i||r)return!1;o?clearTimeout(o):o=setTimeout(function(){i.isTimeout=!0,i.timeout=n,i.isError=!0,i.errorContent="接口响应超时，超时时间:"+n+"(ms)",t._handleDoneXML(e),t.timeoutRequest[e]=!0},n)}},{key:"_handleDoneXML",value:function(e){var t=this,n=l.extend({},t.networkList[e]),r=t._config,o=r.onHandleJudgeResponse,i=r.onHandleRequestData,a=r.onHandleResponseData;if(l.isEmptyObject(n))return!1;if(!t._handleJudgeDisbale(n))return t.networkList[e],!1;if(i)try{n.handleReqData=i(n)}catch(e){n.handleReqData="自定义handleRequestData出错:"+e}var s=n.status;if(f.validateStatus(s)||n.isError||(n.isError=!0,n.errorContent="http请求错误!错误状态码:"+s),o&&!n.isError)try{n.isError=o(n),n.isError&&(n.errorContent=n.isError,n.isError=!0)}catch(e){n.isError=!0,n.errorContent="自定义判断handleJudgeResponse出错:"+e}if(a&&!n.isError)try{n.handleResData=a(n)}catch(e){n.handleResData="自定义handleResponseData出错:"+e}t.noticeReport(n),delete t.networkList[e]}},{key:"_handleJudgeDisbale",value:function(e){var t=this._config.ignoreRequestList;if(t&&l.isArray(t)){var n=e.url,r=!1;if(t.forEach(function(e){if(n.indexOf(e)>-1)return r=!0,!1}),r)return!1}return!e.reqHead||!e.reqHead["keepObserver-reportAjax"]}},{key:"stopObserver",value:function(){window.XMLHttpRequest.prototype.open=this._open,window.XMLHttpRequest.prototype.send=this._send,window.XMLHttpRequest.prototype.setRequestHeader=this._setRequestHeader,this._open=null,this._send=null,this.__setRequestHeader=null}},{key:"startObserver",value:function(){this._init()}},{key:"addReportListener",value:function(e){e&&this.eventListener.push(e)}},{key:"noticeReport",value:function(e){if(0===this.eventListener.length)return!1;this.eventListener.map(function(t){l.isFunction(t)&&t(e)})}}]),e}();t.default=d},function(e,t,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}function o(e){e=window.decodeURIComponent(e);var t="",n="";if(-1===e.indexOf("?"))n=e;else{var r=e.indexOf("?");n=e.substring(0,r),r=e.substring(r+1,e.length),t={},r=r.split("&");var o=!0,i=!1,a=void 0;try{for(var s,u=r[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var l=s.value;l=l.split("="),t[l[0]]=l[1]}}catch(e){i=!0,a=e}finally{try{!o&&u.return&&u.return()}finally{if(i)throw a}}}return{url:n,params:t}}function i(e){return e>=200&&e<300}Object.defineProperty(t,"__esModule",{value:!0}),t.getUniqueID=r,t.handleReqUrl=o,t.validateStatus=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={isOneDay:!0,isPerformance:!0,isPerformanceCancel:!0,immediatelyiReport:!0}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(12),a=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(0),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),l=function(){function e(t){r(this,e),this._config=u.extend(a.default,t),this._systemInfo=!1,this._typeName="system",this.eventListener=[],this.getSystemInfo()}return o(e,[{key:"getSystemInfo",value:function(){var e=this,t=this.checkIsOneDay();if(this._config.isOneDay&&t)return!1;var n=window.navigator.userAgent;e._config.isPerformance&&e.getWebPerformance(function(t){e._systemInfo=t,e._systemInfo.systemInfo=n,e.noticeReport(e._systemInfo),e.recordReport()})}},{key:"getWebPerformance",value:function(e){var t=this,n=function(){var n={},r=window.performance||window.msPerformance||window.webkitPerformance,o=window.performance&&window.performance.timing,i=window.performance&&window.performance.navigation;if(r&&o&&(n.redirectCount=i?i.redirectCount+"次":"未知",n.redirectTime=o.redirectEnd-o.redirectStart+"ms",n.appcacheTime=Math.max(o.domainLookupStart-o.fetchStart,0)+"ms",n.dns=o.domainLookupEnd-o.domainLookupStart+"ms",n.tcp=o.connectEnd-o.connectStart+"ms",n.request=o.responseStart-o.requestStart+"ms",n.response=o.responseEnd-o.responseStart+"ms",n.network=o.responseEnd-o.navigationStart+"ms",n.DOMrender=(o.domComplete||o.domLoading)-o.domLoading+"ms",n.onloadTime=o.loadEventEnd-o.loadEventStart+"ms",n.total=(o.loadEventEnd||o.loadEventStart||o.domComplete||o.domLoading)-o.navigationStart+"ms",n.DOMactive=o.domInteractive-o.navigationStart+"ms",n.webResponse=o.responseStart-o.navigationStart+"ms",n.webLoad=o.domLoading-o.navigationStart+"ms",n.webLoadEnd=o.loadEventEnd-o.navigationStart+"ms"),t._config.isPerformanceCancel&&(n.requestPerformance=[],r.getEntries)){var a=r.getEntries();u.isArray(a)&&a.map(function(e){if(e.initiatorType){var t={type:e.initiatorType,name:e.name,time:e.duration.toFixed(2)+"ms",size:(e.encodedBodySize/1e3).toFixed(2)+"kb"};n.requestPerformance.push(t)}}),e&&e(n)}};void 0!==window.addEventListener?window.addEventListener("load",function(){setTimeout(n,0)},!1):window.attachEvent("onload",function(){setTimeout(n,0)})}},{key:"checkIsOneDay",value:function(){var e=u.getStorage("systemRecordReportDate"),t=u.dateFormat(new Date,"yyyy-MM-dd");return!!e&&e===t}},{key:"recordReport",value:function(){if(this._config.isOneDay){var e=u.dateFormat(new Date,"yyyy-MM-dd");u.setStorage("systemRecordReportDate",e)}}},{key:"addReportListener",value:function(e){e&&this.eventListener.push(e)}},{key:"noticeReport",value:function(e){if(0===this.eventListener.length)return!1;this.eventListener.map(function(t){u.isFunction(t)&&t(e)})}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={isPerformance:!0}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(14),a=function(e){return e&&e.__esModule?e:{default:e}}(i),s=n(0),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),l=function(){function e(t){r(this,e),this._config=u.extend(a.default,t),this._typeName="vue",this._vue=this._config.vueInstance,this.eventListener=[],this._init()}return o(e,[{key:"_init",value:function(){var e=this;e._vue.config&&(e._vue.config.errorHandler=function(){e._handleVueError.apply(e,arguments)})}},{key:"_handleVueError",value:function(e,t,n){var r=this,o={};o.infoMsg=u.toString(n),u.isObject(e)&&e.stack&&e.message?(o.errMsg=u.toString(e.message),o.stackMsg=u.toString(e.stack)):o.errMsg=u.toString(e),o.isError=!0,r.noticeReport(o)}},{key:"stopObserver",value:function(){this._vue.config&&(this._vue.config.errorHandler=null)}},{key:"startObserver",value:function(){this._init()}},{key:"addReportListener",value:function(e){e&&this.eventListener.push(e)}},{key:"noticeReport",value:function(e){if(0===this.eventListener.length)return!1;this.eventListener.map(function(t){u.isFunction(t)&&t(e)})}}]),e}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(r),i=function(e,t){-1===e.indexOf("?")?e+="?":e+=-1===e.indexOf("&")?"&":"";for(var n in t)e+=n+"=",e+=t[n].toString()+"&";return e=e.substring(0,e.length-1)},a=function(e){return new Promise(function(t,n){var r=e.url,a=e.data,s=e.params,u=e.customeHead,l={};if(!r||!a)return n("上报数据失败:上报url和data不能为空"),!1;s&&o.isObject(s)&&(r=i(r,s));var c=new XMLHttpRequest;c.open("POST",r,!0);var f={"Content-Type":"application/json;charset=UTF-8"};u&&o.isObject(u)&&(f=o.extend(f,u)),f["keepObserver-reportAjax"]="yes";for(var d in f)c.setRequestHeader(d,f[d]);c.onreadystatechange=function(e){if(4==c.readyState)try{if(c&&c.getAllResponseHeaders)for(var r=c.getAllResponseHeaders()||"",o=r.split("\n"),i=0;i<o.length;i++){var a=o[i];if(a){var s=a.split(": "),u=s[0],f=s.slice(1).join(": ");l[u]=f}}if(200==c.status){var d={head:l,data:c.responseText};t(d)}else n("请求出现错误!错误状态码:"+c.status)}catch(e){n("请求出现错误!"+e)}},c.onerror=function(e){n("请求出现错误!"+e)};var a=JSON.stringify(a);c.send(a)})};t.default=a},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var o,i=["unKownType","system","log","network","vue"];t.default=(o={$observer_Type:i,max_cache:3,max_system_cache:1,max_system_fillIsReport:!0,max_network_cache:5},r(o,"max_system_fillIsReport",!1),r(o,"max_log_cache",15),r(o,"max_log_fillIsReport",!1),r(o,"max_vue_cache",2),r(o,"max_vue_fillIsReport",!1),r(o,"reportUrl",!1),r(o,"onReportFail",!1),r(o,"onReportBeforeSetUrl",!1),r(o,"onReportBeforeSetHead",!1),r(o,"onReportBeforeHook",!1),r(o,"onReportResultHook",!1),o)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(2),l=r(u),c=n(17),f=r(c),d=n(0),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(d),v=n(16),y=r(v),h=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.$report_config=p.extend(f.default,e),n.reportData={},n._customeInfo=!1,n.develop=n.$report_config.develop,n.developGetMsgLog=n.$report_config.developGetMsgLog,n.develogDeleteLog=n.$report_config.develogDeleteLog,n.develogDiscardLog=n.$report_config.develogDiscardLog,n._init(),n}return a(t,e),s(t,[{key:"$getReportContent",value:function(e,t){if(!e||!e.typeName||!e.data||!p.isArray(e.data)&&!p.isObject(e.data))return!1;if(e.reportTime=(new Date).getTime(),this.develop&&this.developGetMsgLog){var n=p.extend({},e);n.title="获得"+n.typeName+"类型监控数据",this.$devLog(n)}if(t&&t.preDelete&&this._removeReportData(e.typeName),t&&t.ignore)return!1;var r=this._saveReportData(e),o=this.$report_config["max_"+e.typeName+"_cache"],i=this.$report_config["max_"+e.typeName+"_fillIsReport"];(t&&!t.lazy||i&&r===o)&&this._handleReport(e.typeName,t)}},{key:"$getCustomeReport",value:function(e){if(!e||!p.isObject(e)||p.isEmptyObject(e))return!1;this._customeInfo||(this._customeInfo={}),this._customeInfo=p.extend(this._customeInfo,e)}},{key:"_init",value:function(){var e=this;e.$report_config.$observer_Type.forEach(function(t){var n=p.getStorage(t);e.reportData[t]=[],n&&(e.reportData[t]=n)})}},{key:"_saveReportData",value:function(e){var t=e.typeName;this.reportData[t]||(t="unKownType");var n=this.reportData[t],r=this.$report_config["max_"+t+"_cache"];if(r=r||this.$report_config.max_cache,n.length+1>r){var o=n.shift();this.develop&&this.develogDiscardLog&&(o.title=t+"类型监控数据超出缓存长度丢弃内容",this.$devLog(o))}return n.push(e),this.reportData[t]=n,p.setStorage(t,n),n.length}},{key:"_removeReportData",value:function(e){this.reportData[e]&&(this.reportData[e]=[],p.removeStorage(e),this.develop&&this.develogDeleteLog&&this._$devLog(e+"类型监控数据已清除"))}},{key:"_createReportData",value:function(e,t){var n=this,r={};if(r.reportType=e,r.project=n._project,r.projectVersion=n._version,r.reportTime=(new Date).getTime(),n._customeInfo&&(r.customeInfo=p.extend({},n._customeInfo)),t.baseExtend){r.data={};for(var o in n.reportData){var i=n.reportData[o];p.isArray(i)&&i.length>0&&(r.data[o]=p.extend({},i),n._removeReportData(o))}}else r.data=p.extend({},n.reportData[e]),n._removeReportData(e);if(n.develop){var a=p.extend({},r);a.title=e+"类型即将上报服务器,上报内容在data中",n.$devLog(a)}return r}},{key:"_handleHook",value:function(){var e=p.toArray(arguments);if(!e||0===e.length||!p.isFunction(e[0]))return!1;var t=e[0],n=e.slice(1,e.length);try{var r=t(n)}catch(e){this.$devError(t.name+"回调钩子运行出现错误:"+e)}return r}},{key:"_handleReportFail",value:function(e,t,n){if(!e)return!1;try{e(t,n)}catch(e){this.$devError("上传错误回调钩子运行出现错误:"+err)}}},{key:"_handleReport",value:function(e,t){var n=this;if(!e||!p.isString(e))return!1;var r=n._createReportData(e,t),o=this.$report_config,i=o.reportUrl,a=o.onReportFail,s=o.onReportBeforeSetUrl,u=o.onReportBeforeSetHead,l=o.onReportBeforeHook,c=o.onReportResultHook;if(!i||!p.isArray(i))return n._handleReportFail(a,r,null),!1;i.map(function(e){var t={};if(s)var o=n._handleHook(s,e);else o=e;if(!p.isString(o))return n._handleReportFail(a,r,null),!1;t.url=o;var i=!!u&&n._handleHook(u,e);i&&p.isObject(i)&&!p.isEmptyObject(i)&&(t.customeHead=i),t.data=r,n._handleHook(l,r,t.url,t.customeHead);try{(0,y.default)(t).then(function(e){n._handleHook(c,e.data,t.url,e.head)},function(e){n._handleReportFail(a,r,t.url)})}catch(e){n.$devError("上传数据出现错误:"+e)}})}}]),t}(l.default);t.default=h},function(e,t,n){e.exports=n(1)}]);
//# sourceMappingURL=keepObserver.mini.js.map