!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(window,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=28)}([function(e,t,r){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);function i(e){return"[object Number]"==Object.prototype.toString.call(e)}function a(e){return"[object String]"==Object.prototype.toString.call(e)}function s(e){return"[object Array]"==Object.prototype.toString.call(e)}function c(e){return"[object Boolean]"==Object.prototype.toString.call(e)}function u(e){return"[object RegExp]"==Object.prototype.toString.call(e)}function l(e){return"[object Date]"==Object.prototype.toString.call(e)}function p(e){return void 0===e}function f(e){return null===e}function d(e){return"[object Symbol]"==Object.prototype.toString.call(e)}function v(e){return!("[object Object]"!=Object.prototype.toString.call(e)&&(i(e)||a(e)||c(e)||l(e)||u(e)||s(e)||f(e)||g(e)||p(e)||d(e)))}function h(e){if(!v(e))return!0;for(var t in e)return!1;return!0}function g(e){return"[object Function]"==Object.prototype.toString.call(e)}function y(e){return"object"===("undefined"==typeof HTMLElement?"undefined":o(HTMLElement))?e instanceof HTMLElement:e&&"object"===(void 0===e?"undefined":o(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function _(e){var t=Object.prototype.toString.call(e);return"[object global]"==t||"[object Window]"==t||"[object DOMWindow]"==t}t.dateFormat=function(e,t){if(!t||"string"!=typeof t)return console.error("format is undefiend or type is Error"),"";var r={"y+":(e=e instanceof Date?e:"number"==typeof e||"string"==typeof e?new Date(e):new Date).getFullYear(),"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var o in r)if(new RegExp(o).test(t)){var n=RegExp.lastMatch;t=t.replace(n,r[o]<10?"0"+r[o]:r[o].toString())}return t},t.isNumber=i,t.isString=a,t.isArray=s,t.isBoolean=c,t.isRegExp=u,t.isDateObject=l,t.isUndefined=p,t.isNull=f,t.isExist=function(e){return!p(e)&&!f(e)},t.isSymbol=d,t.isSVGElement=function(e){return y(e)&&(e instanceof SVGElement||e.ownerSVGElement)},t.isObject=v,t.isEmptyObject=h,t.isEmptyArray=function(e){return!(s(e)&&e.length>0)},t.isFunction=g,t.isElement=y,t.isWindow=_,t.isPlainObject=function(e){var t,r=Object.prototype.hasOwnProperty;if(!e||"object"!==(void 0===e?"undefined":o(e))||e.nodeType||_(e))return!1;try{if(e.constructor&&!r.call(e,"constructor")&&!r.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(t in e);return void 0===t||r.call(e,t)},t.toArray=function(e){return Array.prototype.slice.call(e)},t.toString=function(e){return e?"string"==typeof e?e:e.toString():""},t.setSessionStorage=function(e,t){window.sessionStorage&&(e="keepObserverData_"+e,t=JSON.stringify(t),sessionStorage.setItem(e,t))},t.getSessionStorage=function(e){if(window.sessionStorage){e="keepObserverData_"+e;var t=sessionStorage.getItem(e);return t?JSON.parse(t):""}},t.removeSessionStorage=function(e){window.sessionStorage&&(e="keepObserverData_"+e,sessionStorage.removeItem(e))},t.setStorage=function(e,t){window.localStorage&&(e="keepObserverData_"+e,t=JSON.stringify(t),localStorage.setItem(e,t))},t.getStorage=function(e){if(window.localStorage){e="keepObserverData_"+e;var t=localStorage.getItem(e);return t?JSON.parse(t):""}},t.removeStorage=function(e){window.localStorage&&(e="keepObserverData_"+e,localStorage.removeItem(e))},t.getUniqueID=function(){return"xxxxxxxx-xxx-t-xxx--xxxxxxxx".replace(/[xyt]/g,function(e){var t=16*Math.random()|0,r=(new Date).getTime();return("x"==e?t:"t"==e?r:3&t|8).toString(16)})},t.extend=function e(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(0===t.length)return console.error("extends params is undefined"),{};if(1===t.length)return t[0];var o=t[0],n=t.slice(1,t.length);return v(o)||s(o)||(o={}),n.map(function(t){if(o===t)return!1;if(v(t))for(var r in t)v(t[r])?(o[r]=o[r]&&v(o[r])?o[r]:{},o[r]=e(o[r],t[r])):s(t[r])?(o[r]=o[r]&&s(o[r])?o[r]:[],o[r]=e(o[r],t[r])):o[r]=t[r];else if(s(t))for(var n=0;n<t.length;n++)v(t[n])?(o[n]=o[n]&&v(o[n])?o[n]:{},o[n]=e(o[n],t[n])):s(t[n])?(o[n]=o[n]&&s(o[n])?o[n]:[],o[n]=e(o[n],t[n])):o[n]=t[n]}),o},t.mixin=function(e,t){for(var r in t&&v(t)&&!h(t)||n.warnError("keepObserver $mixin receive params not right"),t)e[r]?n.warnError("keepObserver $mixin method key: "+r+" is exist"):Object.defineProperty(e,r,{configurable:!1,enumerable:!0,value:t[r]})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=window.console.log,n=window.console.warn,i=window.console.error;window.console.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];o.apply(window.console,e)},window.console.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];i.apply(window.console,e)},window.console.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.apply(window.console,e)},t.log=o,t.error=i,t.wran=n,t.warnError=function(e){return t.error("[keepObserver] find error! message: "+e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reportType=["unKownType","log","network","vue"],t.version="2.0.0-beta.1"},,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(0));t.addReportListener=function(e){e&&this.eventListener.push(e)},t.handleReportDataResponse=function(e,t,r){return{reportParams:{type:"response",typeName:e,data:t,location:r,environment:window.navigator.userAgent,reportTime:(new Date).getTime()},control:{}}},t.noticeResponse=function(e,t,r){var o=this;if(0===o.eventListener.length)return!1;o.eventListener.map(function(i){if(n.isFunction(i)){var a=o.handleReportDataResponse(e,t,r);i(a.reportParams,a.control)}})}},function(e,t,r){"use strict";var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(0));t.default=function(e){return new Promise(function(t,r){var o=e.url,i=e.data,a=e.params,s=e.customeHead,c={};if(!o||!i)return r("report data fail, report url and report data is exist undefined!"),!1;a&&n.isObject(a)&&(o=function(e,t){for(var r in-1===e.indexOf("?")?e+="?":e+=-1===e.indexOf("&")?"&":"",t)e+=r+"=",e+=t[r].toString()+"&";return e=e.substring(0,e.length-1)}(o,a));var u=new XMLHttpRequest;u.open("POST",o,!0);var l={"Content-Type":"application/json;charset=UTF-8"};for(var p in s&&n.isObject(s)&&(l=n.extend(l,s)),l["keepObserver-reportAjax"]="yes",l)u.setRequestHeader(p,l[p]);u.onreadystatechange=function(e){if(4==u.readyState)try{if(u&&u.getAllResponseHeaders)for(var o=(u.getAllResponseHeaders()||"").split("\n"),n=0;n<o.length;n++){var i=o[n];if(i){var a=i.split(": "),s=a[0],l=a.slice(1).join(": ");c[s]=l}}if(200==u.status){var p={head:c,data:u.responseText};t(p)}else r("Ajax request process find error! error status code:"+u.status)}catch(e){r("Ajax request process find error!"+e)}},u.onerror=function(e){r("Ajax request process find error!"+e)};var f=JSON.stringify(i);u.send(f)})}},function(e,t,r){"use strict";var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},n=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(0)),a=n(r(23));t._handleReport=function(e,t){var r=this;if(!(e&&t&&i.isObject(e)&&i.isObject(t)))return!1;var o=r._createReportData(e,t),n=this._config,s=n.reportUrl,c=n.onReportFail,u=n.onReportBeforeSetUrl,l=n.onReportBeforeSetHead,p=n.onReportBeforeHook,f=n.onReportResultHook;if(!s||!i.isArray(s))return r._handleReportFail(c,o,null),!1;s.map(function(n){var s={};if(u)var d=r._handleHook(u,n);else d=n;if(!i.isString(d))return r._handleReportFail(c,o,null),!1;s.url=d;var v=!!l&&r._handleHook(l,n);v&&i.isObject(v)&&!i.isEmptyObject(v)&&(s.customeHead=v),s.data=o,r._handleHook(p,o,s.url,s.customeHead);try{a.default(s).then(function(o){r._handleResponse(e,t,d,o.data),r._handleHook(f,o.data,s.url,o.head)},function(e){r._handleReportFail(c,o,s.url)})}catch(e){r.$devError("report Server Process find error:"+e)}})},t._handleResponse=function(e,t,r,o){return!!(e&&t&&i.isObject(e)&&i.isObject(t))&&(!!(t.isResponse&&e.typeName&&r&&o)&&void this.noticeResponse(e.typeName,o,r))},t._createReportData=function(e,t){var r={};if(r.type=e.type,r.reportType=e.typeName,r.isMonitorError="monitor"===e.type,r.isPerformance="performance"===e.type,r.isAnalyse="analyse"===e.type,r.project=this._project,r.projectVersion=this._projectVersion,r.reportTime=e.reportTime,r.deviceID=this._config.deviceID,r.location=e.location,r.environment=e.environment,r.data=e.data,this._customeInfo&&(r.customeInfo=i.extend({},this._customeInfo)),t.trackExtend){for(var o in r.preTrackData={},this.reportData){var n=this.reportData[o];i.isArray(n)&&n.length>0&&(r.preTrackData[o]=i.extend({},n),this._removeReportData(o))}r.preTrackData=i.isEmptyObject(r.preTrackData)?null:r.preTrackData}if(this.develop){var a=i.extend({},r);a.develop_title=e.type+" type "+e.typeName+" will report Server,report Data in the data ",this.$devLog(a)}return r},t._handleHook=function(){var e=i.toArray(arguments);if(!e||0===e.length||!i.isFunction(e[0]))return!1;var t=e[0],r=e.slice(1,e.length);try{var o=t(r)}catch(e){this.$devError(t.name+"callback hook is runing error:"+e)}return o},t._handleReportFail=function(e,t,r){if(!e)return!1;try{e(t,r)}catch(e){this.$devError("report Server callback hook is runing error:"+e)}}},function(e,t,r){"use strict";var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(0));t._getReportContent=function(e,t){if(!(e&&e.type&&e.typeName&&e.data&&n.isObject(e.data)))return this.$devLog("[keepObserver] reportServer receive reportData is not right"),!1;if(!t)return this.$deveWarn("[keepObserver] reportServer receive pipeDate control options is  undefined"),!1;if(this.develop&&this.developGetMsgLog){var r=n.extend({},e);r.develop_title="[keepObserver] get"+r.type+"type:"+r.typeName+" of monitor data",this.$devLog(r)}return"monitor"===e.type&&t.preDelete&&this._removeReportData(e.typeName),!t.ignore&&("monitor"===e.type&&t.lazy?(this._saveReportData(e),!1):void(t.isReport&&this._handleReport(e,t)))},t._saveReportData=function(e){var t=e.typeName;this.reportData[t]||(t="unKownType");var r=this.reportData[t],o=this._config["max_"+t+"_cache"];if(o=o||this._config.max_cache,r.length+1>o){var i=r.shift();this.develop&&this.develogDiscardLog&&(i.develop_title="[keepObserver] observer "+t+"type monitor data overstep cache limit will discard",this.$devLog(i))}r.push(e),this.reportData[t]=r,n.setStorage(t,r)},t._removeReportData=function(e){this.reportData[e]&&(this.reportData[e]=[],n.removeStorage(e),this.develop&&this.develogDeleteLog&&this._$devLog("[keepObserver] observer "+e+"type Of monitor data is clean up"))}},function(e,t,r){"use strict";var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(0));t.$setCustomeReportData=function(e){var t=this,r=n.toArray(arguments);if(!r||0===r.length)return!1;t._customeInfo||(t._customeInfo={});e=r[0];if(n.isObject(e)&&!n.isEmptyObject(e))return t._customeInfo=n.extend(t._customeInfo,e),!1;n.isBoolean(e)&&e&&r.length>1&&(e=r.slice(1,r.length)).map(function(e){n.isObject(e)&&!n.isEmptyObject(e)&&(t._customeInfo=n.extend(t._customeInfo,e))})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(2);t.default={$observer_Type:o.reportType,max_cache:3,max_log_cache:5,max_vue_cache:1,max_network_cache:3,reportUrl:!1,onReportFail:!1,onReportBeforeSetUrl:!1,onReportBeforeSetHead:!1,onReportBeforeHook:!1,onReportResultHook:!1}},function(e,t,r){"use strict";var o=function(e){return e&&e.__esModule?e:{default:e}},n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(27)),a=n(r(0)),s=r(26),c=r(25),u=r(24),l=r(22),p=function(){function e(e){this.$setCustomeReportData=s.$setCustomeReportData.bind(this),this._getReportContent=c._getReportContent.bind(this),this._saveReportData=c._saveReportData.bind(this),this._removeReportData=c._removeReportData.bind(this),this._handleReport=u._handleReport.bind(this),this._handleResponse=u._handleResponse.bind(this),this._createReportData=u._createReportData.bind(this),this._handleHook=u._handleHook.bind(this),this._handleReportFail=u._handleReportFail.bind(this),this.addReportListener=l.addReportListener.bind(this),this.handleReportDataResponse=l.handleReportDataResponse.bind(this),this.noticeResponse=l.noticeResponse.bind(this);var t=e.reportCustom||{};t.develop=!!e.develop,t.developGetMsgLog=!!e.developGetMsgLog,t.develogDiscardLog=!!e.develogDiscardLog,t.develogDeleteLog=!!e.develogDeleteLog,this._config=a.extend(i.default,t),this.eventListener=[],this.reportData={},this._customeInfo=!1,this._project=e.project||"unKnow",this._projectVersion=e.projectVersion||"unknow-version",this.develop=this._config.develop,this.developGetMsgLog=this._config.developGetMsgLog,this.develogDeleteLog=this._config.develogDeleteLog,this.develogDiscardLog=this._config.develogDiscardLog,this._init()}return e.prototype._init=function(){var e=this;e._config.$observer_Type.forEach(function(t){var r=a.getStorage(t);e.reportData[t]=[],r&&(e.reportData[t]=r)})},e.prototype.apply=function(e){return e.registerRecivePipeMessage(this._getReportContent,this),this.addReportListener(e.sendPipeMessage),{$setCustomeReportData:this.$setCustomeReportData}},e}();t.default=p}])});