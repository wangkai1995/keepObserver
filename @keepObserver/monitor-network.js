!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=16)}([function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var o=r(1);function i(e){return"[object Number]"==Object.prototype.toString.call(e)}function s(e){return"[object String]"==Object.prototype.toString.call(e)}function a(e){return"[object Array]"==Object.prototype.toString.call(e)}function u(e){return"[object Boolean]"==Object.prototype.toString.call(e)}function l(e){return"[object RegExp]"==Object.prototype.toString.call(e)}function c(e){return"[object Date]"==Object.prototype.toString.call(e)}function d(e){return void 0===e}function f(e){return null===e}function p(e){return"[object Symbol]"==Object.prototype.toString.call(e)}function h(e){return!("[object Object]"!=Object.prototype.toString.call(e)&&(i(e)||s(e)||u(e)||c(e)||l(e)||a(e)||f(e)||v(e)||d(e)||p(e)))}function y(e){if(!h(e))return!0;for(var t in e)return!1;return!0}function v(e){return"[object Function]"==Object.prototype.toString.call(e)}function m(e){return"object"===("undefined"==typeof HTMLElement?"undefined":n(HTMLElement))?e instanceof HTMLElement:e&&"object"===(void 0===e?"undefined":n(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function b(e){var t=Object.prototype.toString.call(e);return"[object global]"==t||"[object Window]"==t||"[object DOMWindow]"==t}t.dateFormat=function(e,t){if(!t||"string"!=typeof t)return console.error("format is undefiend or type is Error"),"";var r={"y+":(e=e instanceof Date?e:"number"==typeof e||"string"==typeof e?new Date(e):new Date).getFullYear(),"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var n in r)if(new RegExp(n).test(t)){var o=RegExp.lastMatch;t=t.replace(o,r[n]<10?"0"+r[n]:r[n].toString())}return t},t.isNumber=i,t.isString=s,t.isArray=a,t.isBoolean=u,t.isRegExp=l,t.isDateObject=c,t.isUndefined=d,t.isNull=f,t.isExist=function(e){return!d(e)&&!f(e)},t.isSymbol=p,t.isSVGElement=function(e){return m(e)&&(e instanceof SVGElement||e.ownerSVGElement)},t.isObject=h,t.isEmptyObject=y,t.isEmptyArray=function(e){return!(a(e)&&e.length>0)},t.isFunction=v,t.isElement=m,t.isWindow=b,t.isPlainObject=function(e){var t,r=Object.prototype.hasOwnProperty;if(!e||"object"!==(void 0===e?"undefined":n(e))||e.nodeType||b(e))return!1;try{if(e.constructor&&!r.call(e,"constructor")&&!r.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(t in e);return void 0===t||r.call(e,t)},t.toArray=function(e){return Array.prototype.slice.call(e)},t.toString=function(e){return e?"string"==typeof e?e:e.toString():""},t.setSessionStorage=function(e,t){window.sessionStorage&&(e="keepObserverData_"+e,t=JSON.stringify(t),sessionStorage.setItem(e,t))},t.getSessionStorage=function(e){if(window.sessionStorage){e="keepObserverData_"+e;var t=sessionStorage.getItem(e);return t?JSON.parse(t):""}},t.removeSessionStorage=function(e){window.sessionStorage&&(e="keepObserverData_"+e,sessionStorage.removeItem(e))},t.setStorage=function(e,t){window.localStorage&&(e="keepObserverData_"+e,t=JSON.stringify(t),localStorage.setItem(e,t))},t.getStorage=function(e){if(window.localStorage){e="keepObserverData_"+e;var t=localStorage.getItem(e);return t?JSON.parse(t):""}},t.removeStorage=function(e){window.localStorage&&(e="keepObserverData_"+e,localStorage.removeItem(e))},t.getUniqueID=function(){return"xxxxxxxx-xxx-t-xxx--xxxxxxxx".replace(/[xyt]/g,function(e){var t=16*Math.random()|0,r=(new Date).getTime();return("x"==e?t:"t"==e?r:3&t|8).toString(16)})},t.extend=function e(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(0===t.length)return console.error("extends params is undefined"),{};if(1===t.length)return t[0];var n=t[0],o=t.slice(1,t.length);return h(n)||a(n)||(n={}),o.map(function(t){if(n===t)return!1;if(h(t))for(var r in t)h(t[r])?(n[r]=n[r]&&h(n[r])?n[r]:{},n[r]=e(n[r],t[r])):a(t[r])?(n[r]=n[r]&&a(n[r])?n[r]:[],n[r]=e(n[r],t[r])):n[r]=t[r];else if(a(t))for(var o=0;o<t.length;o++)h(t[o])?(n[o]=n[o]&&h(n[o])?n[o]:{},n[o]=e(n[o],t[o])):a(t[o])?(n[o]=n[o]&&a(n[o])?n[o]:[],n[o]=e(n[o],t[o])):n[o]=t[o]}),n},t.mixin=function(e,t){for(var r in t&&h(t)&&!y(t)||o.warnError("keepObserver $mixin receive params not right"),t)e[r]?o.warnError("keepObserver $mixin method key: "+r+" is exist"):Object.defineProperty(e,r,{configurable:!1,enumerable:!0,value:t[r]})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=window.console.log,o=window.console.warn,i=window.console.error;window.console.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.apply(window.console,e)},window.console.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];i.apply(window.console,e)},window.console.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];o.apply(window.console,e)},t.log=n,t.error=i,t.wran=o,t.warnError=function(e){return t.error("[keepObserver] find error! message: "+e)}},,,,,,,,,,function(e,t,r){"use strict";var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(0));t.addReportListener=function(e){e&&this.eventListener.push(e)},t.handleReportData=function(e){var t={type:"monitor",typeName:"network",data:e,location:window.location.href,environment:window.navigator.userAgent,reportTime:(new Date).getTime()},r={lazy:!0};return e.isError&&((r={}).lazy=!1,r.isReport=!0,r.trackExtend=!e.isTimeout,r.isError=!e.isTimeout),{reportParams:t,control:r}},t.noticeReport=function(e){var t=this;if(0===t.eventListener.length)return!1;t.eventListener.map(function(r){if(o.isFunction(r)){var n=t.handleReportData(e);r(n.reportParams,n.control)}})}},function(e,t,r){"use strict";var n=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}};Object.defineProperty(t,"__esModule",{value:!0}),t.handleReqUrl=function(e){var t,r,o="",i="";if(-1===(e=window.decodeURIComponent(e)).indexOf("?"))i=e;else{var s=e.indexOf("?");i=e.substring(0,s),o={},s=(s=e.substring(s+1,e.length)).split("&");try{for(var a=n(s),u=a.next();!u.done;u=a.next()){var l=u.value;o[(l=l.split("="))[0]]=l[1]}}catch(e){t={error:e}}finally{try{u&&!u.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}}return{url:i,params:o}},t.validateStatus=function(e){return e>=200&&e<300}},function(e,t,r){"use strict";var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(0)),i=n(r(12));t._handleInit=function(){if(!window.XMLHttpRequest)return!1;this._open=window.XMLHttpRequest.prototype.open,this._send=window.XMLHttpRequest.prototype.send,this._setRequestHeader=window.XMLHttpRequest.prototype.setRequestHeader,this._handleXMLAjax()},t._handleXMLAjax=function(){var e=this;window.XMLHttpRequest.prototype.open=function(t,r){var n=this,s=o.toArray(arguments),a=null,u=o.getUniqueID();t=s[0],r=s[1];n._url=r,n._method=t,n._id=u,n._setHead={},n._setHead[u]={};var l=n.onreadystatechange||function(){},c=function(){var r=!!e.networkList[u]&&e.networkList[u];if(!r){(r={}).method=t;var o=i.handleReqUrl(s),s=o.url,c=o.params;r.url=s,r.params=c}if(r.status=0,n.readyState>1&&(r.status=n.status),r.responseType=n.responseType,0==n.readyState)r.startTime||(r.startTime=+new Date);else if(1==n.readyState)r.startTime||(r.startTime=+new Date);else if(2==n.readyState);else if(3==n.readyState);else if(4==n.readyState){e._handleTimeout(u),r.responseHead={};for(var d=(n.getAllResponseHeaders()||"").split("\n"),f=0;f<d.length;f++){var p=d[f];if(p){var h=p.split(": "),y=h[0],v=h.slice(1).join(": ");r.responseHead[y]=v}}clearInterval(a),r.endTime=+new Date,r.costTime=r.endTime-(r.startTime||r.endTime)+"ms",r.response=n.response,setTimeout(function(){e.timeoutRequest[u]||e._handleDoneXML(u)})}else clearInterval(a);return e.timeoutRequest[u]||(e.networkList[u]=r),l.apply(n,arguments)};n.onreadystatechange=c;var d=-1;return a=setInterval(function(){d!=n.readyState&&(d=n.readyState,c.call(n))},10),e._open.apply(n,s)}(window).XMLHttpRequest.prototype.setRequestHeader=function(t){var r=o.toArray(arguments);if(this._id&&this._setHead){var n=this._setHead[this._id],i=r[0]?r[0]:"unkownRequestHead",s=r[1]?r[1]:"";if(n[i]=s,this._setHead[this._id]=n,"keepObserver-reportAjax"===i)return}return e._setRequestHeader.apply(this,r)}(window).XMLHttpRequest.prototype.send=function(){var t=this._id,r=this._method.toUpperCase(),n=this._setHead[t],s=this._url,a=[].slice.call(arguments),u=a[0],l="";e.networkList[t]||(e.networkList[t]={}),e.networkList[t].method=r;var c=i.handleReqUrl(s),d=(s=c.url,c.params);return e.networkList[t].url=s,e.networkList[t].params=d,n&&(e.networkList[t].requestHead=o.extend({},n),delete this._setHead[t]),"POST"===r&&o.isString(u)&&(l=u),e.networkList[t].data=l,e._handleTimeout(t),e._send.apply(this,a)}},t._handleTimeout=function(e){var t=this,r=t._config.timeout,n=!!t.timeoutRequest[e]&&t.timeoutRequest[e],o=!!t.timeout[e]&&t.timeout[e],i=t.networkList[e];if(!i||n)return!1;o?clearTimeout(o):o=setTimeout(function(){i.isTimeout=!0,i.timeout=r,i.isError=!0,i.errorContent="ajax request timeout，time:"+r+"(ms)",t._handleDoneXML(e),t.timeoutRequest[e]=!0},r)},t._handleDoneXML=function(e){var t=o.extend({},this.networkList[e]),r=this._config,n=r.onHandleJudgeResponse,s=r.onHandleRequestData,a=r.onHandleResponseData;if(o.isEmptyObject(t))return!1;if(!this._handleJudgeDisbale(t))return this.networkList[e],!1;if(s)try{t.handleReqData=s(t)}catch(e){t.handleReqData="Custom handleRequestData find error:"+e}var u=t.status;if(i.validateStatus(u)||t.isError||(t.isError=!0,t.errorContent="ajax request error! error statusCode:"+u),a&&!t.isError)try{t.handleResData=a(t)}catch(e){t.handleResData="Custom handleResponseData find error:"+e}if(n&&!t.isError)try{t.isError=n(t),t.isError&&(t.errorContent=t.isError,t.isError=!0)}catch(e){t.isError=!0,t.errorContent="Custom handleJudgeResponse find error:"+e}this.noticeReport(t),delete this.networkList[e]},t._handleJudgeDisbale=function(e){var t=this._config.ignoreRequestList;if(t&&o.isArray(t)){var r=e.url,n=!1;if(t.forEach(function(e){if(r.indexOf(e)>-1)return n=!0,!1}),n)return!1}return!e.requestHead||!e.requestHead["keepObserver-reportAjax"]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.stopObserver=function(){window.XMLHttpRequest.prototype.open=this._open(window).XMLHttpRequest.prototype.send=this._send(window).XMLHttpRequest.prototype.setRequestHeader=this._setRequestHeader,this._open=null,this._send=null,this.__setRequestHeader=null},t.startObserver=function(){this._handleInit()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={timeout:2e4,ignoreRequestList:!1,onHandleJudgeResponse:!1,onHandleResponseData:!1,onHandleRequestData:!1}},function(e,t,r){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}},o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var i=n(r(15)),s=o(r(0)),a=r(14),u=r(13),l=r(11),c=function(){function e(e){this.stopObserver=a.stopObserver.bind(this),this.startObserver=a.startObserver.bind(this),this._handleInit=u._handleInit.bind(this),this._handleXMLAjax=u._handleXMLAjax.bind(this),this._handleTimeout=u._handleTimeout.bind(this),this._handleDoneXML=u._handleDoneXML.bind(this),this._handleJudgeDisbale=u._handleJudgeDisbale.bind(this),this.addReportListener=l.addReportListener.bind(this),this.handleReportData=l.handleReportData.bind(this),this.noticeReport=l.noticeReport.bind(this);var t=e.networkCustom||{};this._config=s.extend(i.default,t),this._typeName="network",this.eventListener=[],this.networkList={},this._open=!1,this._send=!1,this._setRequestHeader=!1,this.timeout={},this.timeoutRequest={},this.startObserver()}return e.prototype.apply=function(e){return this.addReportListener(e.sendPipeMessage),{$networkStop:this.stopObserver,$networkStart:this.startObserver}},e}();t.default=c}])});