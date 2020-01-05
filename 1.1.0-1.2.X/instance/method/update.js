import * as tool from '../../tool/index.js';


var updateVersionRecordKey = 'versionRecord';
var keepObserverRecordReg = /^keepObserverData/i;



export var updateVersionClearCache = function(){
	var oldVersion = tool.getStorage(updateVersionRecordKey)
	if(!this._config.projectVersion || this._config.projectVersion === oldVersion){
		return false;
	}
	if(!window.localStorage){
		return false;
	}
	for(var key in window.localStorage){
		if(keepObserverRecordReg.test(key)){
			localStorage.removeItem(key);
			this.$devWarn('[keepObserver] updateVersionRecord key:'+key)
		}
	}
	tool.setStorage(updateVersionRecordKey,this._config.projectVersion)
}







