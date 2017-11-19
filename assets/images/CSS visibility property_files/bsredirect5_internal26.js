function dv_rolloutManager(handlersDefsArray, baseHandler) {
    this.handle = function () {
        var errorsArr = [];

        var handler = chooseEvaluationHandler(handlersDefsArray);
        if (handler) {
            var errorObj = handleSpecificHandler(handler);
            if (errorObj === null) {
                return errorsArr;
            }
            else {
                var debugInfo = handler.onFailure();
                if (debugInfo) {
                    for (var key in debugInfo) {
                        if (debugInfo.hasOwnProperty(key)) {
                            if (debugInfo[key] !== undefined || debugInfo[key] !== null) {
                                errorObj[key] = encodeURIComponent(debugInfo[key]);
                            }
                        }
                    }
                }
                errorsArr.push(errorObj);
            }
        }

        var errorObjHandler = handleSpecificHandler(baseHandler);
        if (errorObjHandler) {
            errorObjHandler['dvp_isLostImp'] = 1;
            errorsArr.push(errorObjHandler);
        }
        return errorsArr;
    };

    function handleSpecificHandler(handler) {
        var request;
        var errorObj = null;

        try {
            request = handler.createRequest();
            if (request && !request.isSev1) {
                var url = request.url || request;
                if (url) {
                    if (!handler.sendRequest(url)) {
                        errorObj = createAndGetError('sendRequest failed.',
                            url,
                            handler.getVersion(),
                            handler.getVersionParamName(),
                            handler.dv_script);
                    }
                } else {
                    errorObj = createAndGetError('createRequest failed.',
                        url,
                        handler.getVersion(),
                        handler.getVersionParamName(),
                        handler.dv_script,
                        handler.dvScripts,
                        handler.dvStep,
                        handler.dvOther
                    );
                }
            }
        }
        catch (e) {
            errorObj = createAndGetError(e.name + ': ' + e.message, request ? (request.url || request) : null, handler.getVersion(), handler.getVersionParamName(), (handler ? handler.dv_script : null));
        }

        return errorObj;
    }

    function createAndGetError(error, url, ver, versionParamName, dv_script, dvScripts, dvStep, dvOther) {
        var errorObj = {};
        errorObj[versionParamName] = ver;
        errorObj['dvp_jsErrMsg'] = encodeURIComponent(error);
        if (dv_script && dv_script.parentElement && dv_script.parentElement.tagName && dv_script.parentElement.tagName == 'HEAD') {
            errorObj['dvp_isOnHead'] = '1';
        }
        if (url) {
            errorObj['dvp_jsErrUrl'] = url;
        }
        if (dvScripts) {
            var dvScriptsResult = '';
            for (var id in dvScripts) {
                if (dvScripts[id] && dvScripts[id].src) {
                    dvScriptsResult += encodeURIComponent(dvScripts[id].src) + ":" + dvScripts[id].isContain + ",";
                }
            }
            
            
            
        }
        return errorObj;
    }

    function chooseEvaluationHandler(handlersArray) {
        var config = window._dv_win.dv_config;
        var index = 0;
        var isEvaluationVersionChosen = false;
        if (config.handlerVersionSpecific) {
            for (var i = 0; i < handlersArray.length; i++) {
                if (handlersArray[i].handler.getVersion() == config.handlerVersionSpecific) {
                    isEvaluationVersionChosen = true;
                    index = i;
                    break;
                }
            }
        }
        else if (config.handlerVersionByTimeIntervalMinutes) {
            var date = config.handlerVersionByTimeInputDate || new Date();
            var hour = date.getUTCHours();
            var minutes = date.getUTCMinutes();
            index = Math.floor(((hour * 60) + minutes) / config.handlerVersionByTimeIntervalMinutes) % (handlersArray.length + 1);
            if (index != handlersArray.length) { 
                isEvaluationVersionChosen = true;
            }
        }
        else {
            var rand = config.handlerVersionRandom || (Math.random() * 100);
            for (var i = 0; i < handlersArray.length; i++) {
                if (rand >= handlersArray[i].minRate && rand < handlersArray[i].maxRate) {
                    isEvaluationVersionChosen = true;
                    index = i;
                    break;
                }
            }
        }

        if (isEvaluationVersionChosen == true && handlersArray[index].handler.isApplicable()) {
            return handlersArray[index].handler;
        }
        else {
            return null;
        }
    }
}

function dv_GetParam(url, name, checkFromStart) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = (checkFromStart ? "(?:\\?|&|^)" : "[\\?&]") + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    if (results == null)
        return null;
    else
        return results[1];
}

function dv_SendErrorImp(serverUrl, errorsArr) {
    for (var j = 0; j < errorsArr.length; j++) {
        var errorQueryString = '';
        var errorObj = errorsArr[j];
        for (key in errorObj) {
            if (errorObj.hasOwnProperty(key)) {
                if (key.indexOf('dvp_jsErrUrl') == -1) {
                    errorQueryString += '&' + key + '=' + errorObj[key];
                }
                else {
                    var params = ['ctx', 'cmp', 'plc', 'sid'];
                    for (var i = 0; i < params.length; i++) {
                        var pvalue = dv_GetParam(errorObj[key], params[i]);
                        if (pvalue) {
                            errorQueryString += '&dvp_js' + params[i] + '=' + pvalue;
                        }
                    }
                }
            }
        }

        var windowProtocol = 'https:';
        var sslFlag = '&ssl=1';

        var errorImp = windowProtocol + '//' + serverUrl + sslFlag + errorQueryString;
        dv_sendRequest(errorImp);
    }
}

function dv_sendRequest(url) {
    document.write('<scr' + 'ipt language="javascript" src="' + url + '"></scr' + 'ipt>');
}

function dv_GetRnd() {
    return ((new Date()).getTime() + "" + Math.floor(Math.random() * 1000000)).substr(0, 16);
}

function doesBrowserSupportHTML5Push() {
    "use strict";
    return typeof window.parent.postMessage === 'function' && window.JSON;
}

function dvBsrType() {
    'use strict';
    var that = this;
    var eventsForDispatch = {};

    this.pubSub = new function () {

        var subscribers = [];

        this.subscribe = function (eventName, uid, actionName, func) {
            if (!subscribers[eventName + uid])
                subscribers[eventName + uid] = [];
            subscribers[eventName + uid].push({Func: func, ActionName: actionName});
        };

        this.publish = function (eventName, uid) {
            var actionsResults = [];
            if (eventName && uid && subscribers[eventName + uid] instanceof Array)
                for (var i = 0; i < subscribers[eventName + uid].length; i++) {
                    var funcObject = subscribers[eventName + uid][i];
                    if (funcObject && funcObject.Func && typeof funcObject.Func == "function" && funcObject.ActionName) {
                        var isSucceeded = runSafely(function () {
                            return funcObject.Func(uid);
                        });
                        actionsResults.push(encodeURIComponent(funcObject.ActionName) + '=' + (isSucceeded ? '1' : '0'));
                    }
                }
            return actionsResults.join('&');
        };
    };

    this.domUtilities = new function () {
        this.addImage = function (url, parentElement) {
            var image = parentElement.ownerDocument.createElement("img");
            image.width = 0;
            image.height = 0;
            image.style.display = 'none';
            image.src = appendCacheBuster(url);
            parentElement.insertBefore(image, parentElement.firstChild);
        };

        this.addScriptResource = function (url, parentElement) {
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.src = appendCacheBuster(url);
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addScriptCode = function (srcCode, parentElement) {
            var scriptElem = parentElement.ownerDocument.createElement("script");
            scriptElem.type = 'text/javascript';
            scriptElem.innerHTML = srcCode;
            parentElement.insertBefore(scriptElem, parentElement.firstChild);
        };

        this.addHtml = function (srcHtml, parentElement) {
            var divElem = parentElement.ownerDocument.createElement("div");
            divElem.style = "display: inline";
            divElem.innerHTML = srcHtml;
            parentElement.insertBefore(divElem, parentElement.firstChild);
        };
    };

    this.resolveMacros = function (str, tag) {
        var viewabilityData = tag.getViewabilityData();
        var viewabilityBuckets = viewabilityData && viewabilityData.buckets ? viewabilityData.buckets : {};
        var upperCaseObj = objectsToUpperCase(tag, viewabilityData, viewabilityBuckets);
        var newStr = str.replace('[DV_PROTOCOL]', upperCaseObj.DV_PROTOCOL);
        newStr = newStr.replace('[PROTOCOL]', upperCaseObj.PROTOCOL);
        newStr = newStr.replace(/\[(.*?)\]/g, function (match, p1) {
            var value = upperCaseObj[p1];
            if (value === undefined || value === null)
                value = '[' + p1 + ']';
            return encodeURIComponent(value);
        });
        return newStr;
    };

    this.settings = new function () {
    };

    this.tagsType = function () {
    };

    this.tagsPrototype = function () {
        this.add = function (tagKey, obj) {
            if (!that.tags[tagKey])
                that.tags[tagKey] = new that.tag();
            for (var key in obj)
                that.tags[tagKey][key] = obj[key];
        };
    };

    this.tagsType.prototype = new this.tagsPrototype();
    this.tagsType.prototype.constructor = this.tags;
    this.tags = new this.tagsType();

    this.tag = function () {
    };

    this.tagPrototype = function () {
        this.set = function (obj) {
            for (var key in obj)
                this[key] = obj[key];
        };

        this.getViewabilityData = function () {
        };
    };

    this.tag.prototype = new this.tagPrototype();
    this.tag.prototype.constructor = this.tag;

    this.getTagObjectByService = function (serviceName) {
        for (var impressionId in this.tags) {
            if (typeof this.tags[impressionId] === 'object'
                && this.tags[impressionId].services
                && this.tags[impressionId].services[serviceName]
                && !this.tags[impressionId].services[serviceName].isProcessed) {
                this.tags[impressionId].services[serviceName].isProcessed = true;
                return this.tags[impressionId];
            }
        }

        return null;
    };

    this.addService = function (impressionId, serviceName, paramsObject) {
        if (!impressionId || !serviceName)
            return;

        if (!this.tags[impressionId])
            return;
        else {
            if (!this.tags[impressionId].services)
                this.tags[impressionId].services = {};

            this.tags[impressionId].services[serviceName] = {
                params: paramsObject,
                isProcessed: false
            };
        }
    };

    this.Enums = {
        BrowserId: {Others: 0, IE: 1, Firefox: 2, Chrome: 3, Opera: 4, Safari: 5},
        TrafficScenario: {OnPage: 1, SameDomain: 2, CrossDomain: 128}
    };

    this.CommonData = {};

    var runSafely = function (action) {
        try {
            var ret = action();
            return ret !== undefined ? ret : true;
        } catch (e) {
            return false;
        }
    };

    var objectsToUpperCase = function () {
        var upperCaseObj = {};
        for (var i = 0; i < arguments.length; i++) {
            var obj = arguments[i];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    upperCaseObj[key.toUpperCase()] = obj[key];
                }
            }
        }
        return upperCaseObj;
    };

    var appendCacheBuster = function (url) {
        if (url !== undefined && url !== null && url.match("^http") == "http") {
            if (url.indexOf('?') !== -1) {
                if (url.slice(-1) == '&')
                    url += 'cbust=' + dv_GetRnd();
                else
                    url += '&cbust=' + dv_GetRnd();
            }
            else
                url += '?cbust=' + dv_GetRnd();
        }
        return url;
    };

    
    var messagesClass = function () {
        var waitingMessages = [];

        this.registerMsg = function(dvFrame, data) {
            if (!waitingMessages[dvFrame.$frmId]) {
                waitingMessages[dvFrame.$frmId] = [];
            }

            waitingMessages[dvFrame.$frmId].push(data);

            if (dvFrame.$uid) {
                sendWaitingEventsForFrame(dvFrame, dvFrame.$uid);
            }
        };

        this.startSendingEvents = function(dvFrame, impID) {
            sendWaitingEventsForFrame(dvFrame, impID);
            
        };

        function sendWaitingEventsForFrame(dvFrame, impID) {
            if (waitingMessages[dvFrame.$frmId]) {
                var eventObject = {};
                for (var i = 0; i < waitingMessages[dvFrame.$frmId].length; i++) {
                    var obj = waitingMessages[dvFrame.$frmId].pop();
                    for (var key in obj) {
                        if (typeof obj[key] !== 'function' && obj.hasOwnProperty(key)) {
                            eventObject[key] = obj[key];
                        }
                    }
                }
                that.registerEventCall(impID, eventObject);
            }
        }

        function startMessageManager() {
            for (var frm in waitingMessages) {
                if (frm && frm.$uid) {
                    sendWaitingEventsForFrame(frm, frm.$uid);
                }
            }
            setTimeout(startMessageManager, 10);
        }
    };
    this.messages = new messagesClass();

    this.dispatchRegisteredEventsFromAllTags = function () {
        for (var impressionId in this.tags) {
            if (typeof this.tags[impressionId] !== 'function' && typeof this.tags[impressionId] !== 'undefined')
                dispatchEventCalls(impressionId, this);
        }
    };

    var dispatchEventCalls = function (impressionId, dvObj) {
        var tag = dvObj.tags[impressionId];
        var eventObj = eventsForDispatch[impressionId];
        if (typeof eventObj !== 'undefined' && eventObj != null) {
            var url = tag.protocol + '//' + tag.ServerPublicDns + "/bsevent.gif?impid=" + impressionId + '&' + createQueryStringParams(eventObj);
            dvObj.domUtilities.addImage(url, tag.tagElement.parentElement);
            eventsForDispatch[impressionId] = null;
        }
    };

    this.registerEventCall = function (impressionId, eventObject, timeoutMs) {
        addEventCallForDispatch(impressionId, eventObject);

        if (typeof timeoutMs === 'undefined' || timeoutMs == 0 || isNaN(timeoutMs))
            dispatchEventCallsNow(this, impressionId, eventObject);
        else {
            if (timeoutMs > 2000)
                timeoutMs = 2000;

            var dvObj = this;
            setTimeout(function () {
                dispatchEventCalls(impressionId, dvObj);
            }, timeoutMs);
        }
    };

    var dispatchEventCallsNow = function (dvObj, impressionId, eventObject) {
        addEventCallForDispatch(impressionId, eventObject);
        dispatchEventCalls(impressionId, dvObj);
    };

    var addEventCallForDispatch = function (impressionId, eventObject) {
        for (var key in eventObject) {
            if (typeof eventObject[key] !== 'function' && eventObject.hasOwnProperty(key)) {
                if (!eventsForDispatch[impressionId])
                    eventsForDispatch[impressionId] = {};
                eventsForDispatch[impressionId][key] = eventObject[key];
            }
        }
    };

    if (window.addEventListener) {
        window.addEventListener('unload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
        window.addEventListener('beforeunload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
    }
    else if (window.attachEvent) {
        window.attachEvent('onunload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
        window.attachEvent('onbeforeunload', function () {
            that.dispatchRegisteredEventsFromAllTags();
        }, false);
    }
    else {
        window.document.body.onunload = function () {
            that.dispatchRegisteredEventsFromAllTags();
        };
        window.document.body.onbeforeunload = function () {
            that.dispatchRegisteredEventsFromAllTags();
        };
    }

    var createQueryStringParams = function (values) {
        var params = '';
        for (var key in values) {
            if (typeof values[key] !== 'function') {
                var value = encodeURIComponent(values[key]);
                if (params === '')
                    params += key + '=' + value;
                else
                    params += '&' + key + '=' + value;
            }
        }

        return params;
    };
}

function dv_baseHandler(){function F(b){var c="http:",d=window._dv_win.location.toString().match("^http(?:s)?");"https"!=b.match("^https")||"https"!=d&&"http"==d||(c="https:");return c}function J(){var b="http:";"http:"!=window._dv_win.location.protocol&&(b="https:");return b}function K(b){var c=window._dv_win.dvRecoveryObj;if(c){var d=dv_GetParam(b.dvparams,"ctx",!0);c=c[d]?c[d].RecoveryTagID:c._fallback_?c._fallback_.RecoveryTagID:1;1===c&&b.tagsrc?document.write(b.tagsrc):2===c&&b.altsrc&&document.write(b.altsrc);
return!0}return!1}function L(){var b=window._dv_win.dv_config&&window._dv_win.dv_config.isUT?window._dv_win.bsredirect5ScriptsInternal[window._dv_win.bsredirect5ScriptsInternal.length-1]:window._dv_win.bsredirect5ScriptsInternal.pop();window._dv_win.bsredirect5Processed.push(b);return b}function M(b){var c=window._dv_win.dv_config=window._dv_win.dv_config||{};c.cdnAddress=c.cdnAddress||"cdn.doubleverify.com";return'<html><head><script type="text/javascript">('+function(){try{window.$dv=window.$dvbsr||
parent.$dvbsr,window.$dv.dvObjType="dvbsr"}catch(d){}}.toString()+')();\x3c/script></head><body><script type="text/javascript">('+(b||"function() {}")+')("'+c.cdnAddress+'");\x3c/script><script type="text/javascript">setTimeout(function() {document.close();}, 0);\x3c/script></body></html>'}function G(b,c){var d=document.createElement("iframe");d.name=d.id="iframe_"+dv_GetRnd();d.width=0;d.height=0;d.id=c;d.style.display="none";d.src=b;return d}function y(b,c,d){d=d||150;var g=window._dv_win||window;
if(g.document&&g.document.body)return c&&c.parentNode?c.parentNode.insertBefore(b,c):g.document.body.insertBefore(b,g.document.body.firstChild),!0;if(0<d)setTimeout(function(){y(b,c,--d)},20);else return!1}function N(b){var c=null;try{if(c=b&&b.contentDocument)return c}catch(d){}try{if(c=b.contentWindow&&b.contentWindow.document)return c}catch(d){}try{if(c=window._dv_win.frames&&window._dv_win.frames[b.name]&&window._dv_win.frames[b.name].document)return c}catch(d){}return null}function H(b,c,d,g,
f,e,k){var m=window._dv_win.dv_config&&window._dv_win.dv_config.bst2tid?window._dv_win.dv_config.bst2tid:dv_GetRnd();var r=window.parent.postMessage&&window.JSON;var l=!0;var n=!1;if("0"==dv_GetParam(b.dvparams,"t2te")||window._dv_win.dv_config&&1==window._dv_win.dv_config.supressT2T)n=!0;if(r&&0==n)try{n="https://cdn3.doubleverify.com/bst2tv3.html";window._dv_win&&window._dv_win.dv_config&&window._dv_win.dv_config.bst2turl&&(n=window._dv_win.dv_config.bst2turl);var h=G(n,"bst2t_"+m);l=y(h)}catch(u){}var p=
(n=(/iPhone|iPad|iPod|\(Apple TV|iOS|Coremedia|CFNetwork\/.*Darwin/i.test(navigator.userAgent)||navigator.vendor&&"apple, inc."===navigator.vendor.toLowerCase())&&!window.MSStream)?"https:":F(k.src),z="0";"https:"==p&&(z="1");h=b.rand;var A="__verify_callback_"+h,B="__tagObject_callback_"+h;O(A,b);P(B,k,b,n);void 0==b.dvregion&&(b.dvregion=0);var v="";h=k="";try{for(var q=d,w=0;10>w&&q!=window.top;)w++,q=q.parent;d.depth=w;dv_additionalUrl=Q(d);k="&aUrl="+encodeURIComponent(dv_additionalUrl.url);
h="&aUrlD="+dv_additionalUrl.depth;v=d.depth+g;f&&d.depth--}catch(u){h=k=v=d.depth=""}void 0!=b.aUrl&&(k="&aUrl="+b.aUrl);g=R();f=window._dv_win&&window._dv_win.dv_config&&window._dv_win.dv_config.verifyJSCURL?dvConfig.verifyJSCURL+"?":p+"//rtb"+b.dvregion+".doubleverify.com/verifyc.js?";a:{p=window._dv_win;q=0;try{for(;10>q;){if(p.maple&&"object"===typeof p.maple){var t=!0;break a}if(p==p.parent){t=!1;break a}q++;p=p.parent}}catch(u){}t=!1}b=f+b.dvparams+"&num=5&srcurlD="+d.depth+"&callback="+A+
"&jsTagObjCallback="+B+"&ssl="+z+(n?"&dvf=0":"")+(t?"&dvf=1":"")+"&refD="+v+"&htmlmsging="+(r?"1":"0")+"&guid="+m+(null!=g?"&aadid="+g:"");c="dv_url="+encodeURIComponent(c);if(0==l||e)b=b+("&dvp_isBodyExistOnLoad="+(l?"1":"0"))+("&dvp_isOnHead="+(e?"1":"0"));if((e=window[C("=@42E:@?")][C("2?46DE@C~C:8:?D")])&&0<e.length){l=[];l[0]=window.location.protocol+"//"+window.location.hostname;for(d=0;d<e.length;d++)l[d+1]=e[d];e=l.reverse().join(",")}else e=null;e&&(c+="&ancChain="+encodeURIComponent(e));
if(0==/MSIE (\d+\.\d+);/.test(navigator.userAgent)||7<new Number(RegExp.$1)||2E3>=k.length+h.length+b.length)b+=h,c+=k;if(void 0!=window._dv_win.$dvbsr.CommonData.BrowserId&&void 0!=window._dv_win.$dvbsr.CommonData.BrowserVersion&&void 0!=window._dv_win.$dvbsr.CommonData.BrowserIdFromUserAgent)k=window._dv_win.$dvbsr.CommonData.BrowserId,l=window._dv_win.$dvbsr.CommonData.BrowserVersion,e=window._dv_win.$dvbsr.CommonData.BrowserIdFromUserAgent;else{k=[{id:4,brRegex:"OPR|Opera",verRegex:"(OPR/|Version/)"},
{id:1,brRegex:"MSIE|Trident/7.*rv:11|rv:11.*Trident/7|Edge/",verRegex:"(MSIE |rv:| Edge/)"},{id:2,brRegex:"Firefox",verRegex:"Firefox/"},{id:0,brRegex:"Mozilla.*Android.*AppleWebKit(?!.*Chrome.*)|Linux.*Android.*AppleWebKit.* Version/.*Chrome",verRegex:null},{id:0,brRegex:"AOL/.*AOLBuild/|AOLBuild/.*AOL/|Puffin|Maxthon|Valve|Silk|PLAYSTATION|PlayStation|Nintendo|wOSBrowser",verRegex:null},{id:3,brRegex:"Chrome",verRegex:"Chrome/"},{id:5,brRegex:"Safari|(OS |OS X )[0-9].*AppleWebKit",verRegex:"Version/"}];
e=0;l="";d=navigator.userAgent;for(h=0;h<k.length;h++)if(null!=d.match(new RegExp(k[h].brRegex))){e=k[h].id;if(null==k[h].verRegex)break;d=d.match(new RegExp(k[h].verRegex+"[0-9]*"));null!=d&&(l=d[0].match(new RegExp(k[h].verRegex)),l=d[0].replace(l[0],""));break}k=h=S();l=h===e?l:"";window._dv_win.$dvbsr.CommonData.BrowserId=k;window._dv_win.$dvbsr.CommonData.BrowserVersion=l;window._dv_win.$dvbsr.CommonData.BrowserIdFromUserAgent=e}b+="&brid="+k+"&brver="+l+"&bridua="+e;"prerender"===window._dv_win.document.visibilityState&&
(b+="&prndr=1");(e=T())&&(b+="&m1="+e);(e=U())&&(b+="&bsig="+e);e=V();b+="&vavbkt="+e.vdcd;b+="&lvvn="+e.vdcv;""!=e.err&&(b+="&dvp_idcerr="+encodeURIComponent(e.err));return b+"&eparams="+encodeURIComponent(C(c))}function V(){var b="";try{var c=eval(function(b,c,f,e,k,m){k=function(b){return(b<c?"":k(parseInt(b/c)))+(35<(b%=c)?String.fromCharCode(b+29):b.toString(36))};if(!"".replace(/^/,String)){for(;f--;)m[k(f)]=e[f]||k(f);e=[function(b){return m[b]}];k=function(){return"\\w+"};f=1}for(;f--;)e[f]&&
(b=b.replace(new RegExp("\\b"+k(f)+"\\b","g"),e[f]));return b}("(19(){1n{1n{3i('1a?1y:1F')}1q(e){v{m:\"-5z\"}}19 3q(1H,2v,21){18(d 1N 5A 1H){w(1N.2u(2v)>-1&&(!21||21(1H[1N])))v 1y}v 1F}19 g(s){d h=\"\",t=\"5B.;j&5C}5y/0:5x'5t=B(5u-5v!,5w)5r\\\\{ >5D+5E\\\"5L<\";18(i=0;i<s.1e;i++)f=s.2t(i),e=t.2u(f),0<=e&&(f=t.2t((e+41)%82)),h+=f;v h}19 1R(2r,1x){1n{w(2r())m.1C((1a==1a.3m?-1:1)*1x)}1q(e){m.1C(-5P*1x);X.1C(1x+\"=\"+(e.5K||\"5J\"))}}d c=['5F\"1r-5G\"5H\"29','p','l','60&p','p','{','\\\\<}4\\\\5I-5s<\"5q\\\\<}4\\\\5a<Z?\"6','e','5b','-5,!u<}\"5c}\"','p','J','-5d}\"<59','p','=o','\\\\<}4\\\\2w\"2f\"y\\\\<}4\\\\2w\"2f\"58}2\"<,u\"<5}?\"6','e','J=',':<54}T}<\"','p','h','\\\\<}4\\\\8-2}\"E(n\"16}b?\\\\<}4\\\\8-2}\"E(n\"2E<N\"[1A*1t\\\\\\\\2I-55<2J\"2O\"56]1i}C\"13','e','57','\\\\<}4\\\\5e;5f||\\\\<}4\\\\5m?\"6','e','+o','\"1f\\\\<}4\\\\2S\"I<-5n\"2x\"5\"5o}2A<}5p\"1f\\\\<}4\\\\1o}1M>1I-1U}2}\"2x\"5\"5l}2A<}5k','e','=J','10}U\"<5}5g\"7}F\\\\<}4\\\\[5h}5i:5j]k}9\\\\<}4\\\\[t:2W\"5Q]k}9\\\\<}4\\\\[5R})5-u<}t]k}9\\\\<}4\\\\[6n]k}9\\\\<}4\\\\[6o}6p]k}6q','e','6m',':6l}<\"H-1L/2M','p','6h','\\\\<}4\\\\12<U/1p}9\\\\<}4\\\\12<U/!k}b','e','=l','1d\\\\<}4\\\\6i}/6j}U\"<5}6k\"7}6r<2B}6s\\\\6z\"6A}/k}2C','e','=S=','\\\\<}4\\\\E-6B\\\\<}4\\\\E-6C\"5\\\\U?\"6','e','+J','\\\\<}4\\\\2z!6y\\\\<}4\\\\2z!6t)p?\"6','e','6u','-}\"6v','p','x{','\\\\<}4\\\\E<2K-6w}6g\\\\<}4\\\\6f\"5Y-5Z\\\\<}4\\\\61.42-2}\"62\\\\<}4\\\\5X<N\"H}5W?\"6','e','+S','10}U\"<5}O\"17\"7}F\\\\<}4\\\\G<1J\"1f\\\\<}4\\\\G<2c}U\"<5}1j\\\\<}4\\\\1m-2.42-2}\"y\\\\<}4\\\\1m-2.42-2}\"1u\"L\"\"M<3y\"3t\"3u<\"<5}3f\"3e\\\\<Z\"3l<W\"3k{3d:3c\\\\3b<1D}3n-3a<}39\"3s\"1v%3z<W\"1v%3r?\"38\"14\"7}34','e','5S','5T:,','p','5U','\\\\<}4\\\\5V\\\\<}4\\\\2y\"2q\\\\<}4\\\\2y\"2j,T}2i+++++1j\\\\<}4\\\\63\\\\<}4\\\\2p\"2q\\\\<}4\\\\2p\"2j,T}2i+++++t','e','6b','\\\\<}4\\\\6c\"1L\"6d}9\\\\<}4\\\\E\\\\6e<M?\"6','e','6a','10}U\"<5}O:69\\\\<}4\\\\8-2}\"1u\".42-2}\"65-66<N\"67<68<6D}C\"3H<4J<3W[<]E\"27\"1r}\"2}\"3X[<]E\"27\"1r}\"2}\"E<}1g&3Y\"1\\\\<}4\\\\2h\\\\3V\\\\<}4\\\\2h\\\\1o}1M>1I-1U}2}\"z<3R-2}\"3S\"2.42-2}\"3T=3Z\"7}40\"7}P=48','e','x','49)','p','+','\\\\<}4\\\\2g:4a<5}47\\\\<}4\\\\2g\"46?\"6','e','3Q','L!!44.45.H 4b','p','x=','\\\\<}4\\\\3I}3D)u\"3E\\\\<}4\\\\3M-2?\"6','e','+=','\\\\<}4\\\\2k\"3N\\\\<}4\\\\2k\"3O--3L<\"2f?\"6','e','x+','\\\\<}4\\\\8-2}\"2l}\"2o<N\"y\\\\<}4\\\\8-2}\"2l}\"2o<N\"3G\")3J\"<:3F\"3K}b?\"6','e','+x','\\\\<}4\\\\2n)u\"3P\\\\<}4\\\\2n)u\"3C?\"6','e','43','\\\\<}4\\\\2m}s<52\\\\<}4\\\\2m}s<4L\" 4M-4N?\"6','e','4O','\\\\<}4\\\\E\"4K-2}\"E(n\"4c<N\"[1A*4F\"4E<4G]4H?\"6','e','+e','\\\\<}4\\\\8-2}\"E(n\"16}b?\\\\<}4\\\\8-2}\"E(n\"4I<:[\\\\4P}}2M][\\\\4Q,5}2]4Y}C\"13','e','4Z','1d\\\\<}4\\\\50}51\\\\<}4\\\\4X$4W','e','4S',':4R<Z','p','4T','\\\\<}4\\\\E-4U\\\\<}4\\\\E-4V}4D\\\\<}4\\\\E-4C<4l?\"6','e','4m','$H:4n}Z!4o','p','+h','\\\\<}4\\\\E\"1T\\\\<}4\\\\E\"1P-4k?\"6','e','4j','1d\\\\<}4\\\\4e:,31}U\"<5}1B\"7}4d<4g<2B}2C','e','4i','\\\\<}4\\\\12<U/4p&2V\"E/2T\\\\<}4\\\\12<U/4q}C\"3o\\\\<}4\\\\12<U/f[&2V\"E/2T\\\\<}4\\\\12<U/4A[S]]2S\"4B}b?\"6','e','4x','4w}4s}4r>2s','p','4t','\\\\<}4\\\\1h:<1Y}s<4u}9\\\\<}4\\\\1h:<1Y}s<4v<}f\"u}2P\\\\<}4\\\\2H\\\\<}4\\\\1h:<1Y}s<C[S]E:2W\"1p}b','e','l{','64\\'<}4\\\\T}6E','p','==','\\\\<}4\\\\G<1J\\\\<}4\\\\G<2d\\\\<Z\"2a\\\\<}4\\\\G<2b<W\"?\"6','e','8A','\\\\<}4\\\\2X}2e-30\"}2Y<8B\\\\<}4\\\\2X}2e-30\"}2Y/2Q?\"6','e','=8x','\\\\<}4\\\\E\"2f\"8t\\\\<}4\\\\8u<8v?\"6','e','o{','\\\\<}4\\\\8w-)2\"2U\"y\\\\<}4\\\\1h-8C\\\\1r}s<C?\"6','e','+l','\\\\<}4\\\\2R-2\"8D\\\\<}4\\\\2R-2\"8L<Z?\"6','e','+{','\\\\<}4\\\\E:8M}9\\\\<}4\\\\8J-8I}9\\\\<}4\\\\E:8E\"<8F\\\\}k}b?\"6','e','{S','\\\\<}4\\\\1l}\"11}8G\"-8H\"2f\"q\\\\<}4\\\\r\"<5}8s?\"6','e','o+',' &H)&8r','p','8d','\\\\<}4\\\\E.:2}\"c\"<8e}9\\\\<}4\\\\8f}9\\\\<}4\\\\8c<}f\"u}2P\\\\<}4\\\\2H\\\\<}4\\\\1o:}\"k}b','e','88','89\"5-\\'2G:2M','p','J{','\\\\<}4\\\\8a\"5-\\'2G:8O}8h=8o:D|q=2F|8p-5|8q--1L/2\"|2N-2F|8i\"=8j\"2f\"q\\\\<}4\\\\1V\"25:24<1D}D?\"6','e','=8k','\\\\<}4\\\\8-2}\"E(n\"16}b?\\\\<}4\\\\8-2}\"E(n\"2E<N\"[1A*1t\\\\\\\\2I-2J\"2O/95<97]1i}C\"13','e','98',')96!93}s<C','p','8T','\\\\<}4\\\\2L<<8U\\\\<}4\\\\2L<<8R<}f\"u}94?\"6','e','{l','\\\\<}4\\\\33.L>g;H\\'T)Y.8P\\\\<}4\\\\33.L>g;8V&&8W>H\\'T)Y.I?\"6','e','l=','1d\\\\<}4\\\\91\\\\92>90}U\"<5}1B\"7}F\"32}U\"<5}8Z\\\\<}4\\\\8X<2K-20\"u\"8Y}U\"<5}1B\"7}F\"32}U\"<5}85','e','{J','H:<Z<:5','p','77','\\\\<}4\\\\k\\\\<}4\\\\E\"78\\\\<}4\\\\r\"<5}3x\"3p}/1j\\\\<}4\\\\8-2}\"3w<}1g&79\\\\<}4\\\\r\"<5}1k\"}u-76=?10}U\"<5}O\"17\"7}75\\\\<}4\\\\1l}\"r\"<5}71\"14\"7}F\"72','e','73','\\\\<}4\\\\1S-U\\\\y\\\\<}4\\\\1S-74\\\\<}4\\\\1S-\\\\<}?\"6','e','7a','7b-N:7i','p','7j','\\\\<}4\\\\1X\"7k\\\\<}4\\\\1X\"86\"<5}7h\\\\<}4\\\\1X\"7g||\\\\<}4\\\\7c?\"6','e','h+','7d<u-7e/','p','{=','\\\\<}4\\\\r\"<5}1k\"}u-7f\\\\<}4\\\\1o}1M>1I-1U}2}\"q\\\\<}4\\\\r\"<5}1k\"}u-2D','e','=S','\\\\<}4\\\\70\"1f\\\\<}4\\\\6Z}U\"<5}1j\\\\<}4\\\\6L?\"6','e','{o','\\\\<}4\\\\6M}<6N\\\\<}4\\\\6K}?\"6','e','=6J','\\\\<}4\\\\G<1J\\\\<}4\\\\G<2d\\\\<Z\"2a\\\\<}4\\\\G<2b<W\"y\"1f\\\\<}4\\\\G<2c}U\"<5}t?\"6','e','J+','c>A','p','=','10}U\"<5}O\"17\"7}F\\\\<}4\\\\E\"6F\"6G:6H}6I^[6O,][6P+]6W\\'<}4\\\\6X\"2f\"q\\\\<}4\\\\E}u-6Y\"14\"7}6V=6U','e','6Q','\\\\<}4\\\\1G:!3g\\\\<}4\\\\8-2}\"E(n\"16}b?\\\\<}4\\\\8-2}\"E(n\"1O<:[f\"29*6R<W\"6S]6T<:[<Z*1t:Z,1Q]1i}C\"13','e','=7l','\\\\<}4\\\\28\"<22-23-u}7m\\\\<}4\\\\28\"<22-23-u}7Q?\"6','e','{x','7R}7K','p','7S','\\\\<}4\\\\8-2}\"E(n\"16}b?\\\\<}4\\\\8-2}\"E(n\"1O<:[<Z*1t:Z,1Q]F:<7P[<Z*7O]1i}C\"13','e','h=','7J-2}\"r\"<5}k}b','e','7L','\\\\<}4\\\\8-2}\"E(n\"16}b?\\\\<}4\\\\8-2}\"E(n\"1O<:[<Z*7M}1Q]R<-C[1A*7T]1i}C\"13','e','81','1d\\\\<}4\\\\26\"\\\\83\\\\<}4\\\\26\"\\\\84','e','80','\\\\<}4\\\\1V\"y\\\\<}4\\\\1V\"25:24<1D}?\"6','e','{e','\\\\<}4\\\\7V}Z<}7W}9\\\\<}4\\\\7X<f\"k}9\\\\<}4\\\\7Y/<}C!!7I<\"42.42-2}\"1p}9\\\\<}4\\\\7H\"<5}k}b?\"6','e','7u','T>;7v\"<4f','p','h{','\\\\<}4\\\\7s<u-7r\\\\7n}9\\\\<}4\\\\1h<}7p}b?\"6','e','7q','\\\\<}4\\\\E\"1T\\\\<}4\\\\E\"1P-35}U\"<5}O\"17\"7}F\\\\<}4\\\\1l}\"r\"<5}1k\"E<}1g&36}3j=y\\\\<}4\\\\1l}\"8-2}\"1u\".42-2}\"7w}\"u<}7x}7E\"14\"7}F\"3h?\"6','e','{h','\\\\<}4\\\\7F\\\\<}4\\\\7G}<(7D?\"6','e','7C','\\\\<}4\\\\7y<U-2Z<7z&p?1d\\\\<}4\\\\7B<U-2Z<8z/31}U\"<5}1B\"7}F\"7A','e','=7o','7t\\'<7Z\"','p','{{','\\\\<}4\\\\E\"1T\\\\<}4\\\\E\"1P-35}U\"<5}O\"17\"7}F\\\\<}4\\\\1l}\"r\"<5}1k\"E<}1g&36}3j=7U\"14\"7}F\"3h?\"6','e','7N','10}U\"<5}O\"17\"7}F\\\\<}4\\\\1G:!3g\\\\<}4\\\\1m-2.42-2}\"y\\\\<}4\\\\1m-2.42-2}\"1u\"L\"\"M<3y\"3t\"3u<\"<5}3f\"3e\\\\<Z\"3l<W\"3k{3d:3c\\\\3b<1D}3n-3a<}39\"3s\"1v%3z<W\"1v%3r?\"38\"14\"7}34','e','{+','\\\\<}4\\\\8S<8N a}8l}9\\\\<}4\\\\E}8m\"8n 8g- 1p}b','e','87','8b\\\\<}4\\\\r\"<5}1G}8K\"5M&M<C<}8y}C\"3o\\\\<}4\\\\r\"<5}3x\"3p}/1j\\\\<}4\\\\8-2}\"4z\\\\<}4\\\\8-2}\"3w<}1g&4y[S]4h=?\"6','e','l+'];d 1w='(19(){d m=[],X=[];'+3q.37()+1R.37()+'';18(d j=0;j<c.1e;j+=3){1w+='1R(19(){v '+(c[j+1]=='p'?'1a[\"'+g(c[j])+'\"]!=3U':g(c[j]))+'}, '+53(g(c[j+2]))+');'}1w+='v {m:m,X:X}})();';d K=[];d 1K=[];d 1c=1a;18(d i=0;i<6x;i++){d V=1c.3i(1w);w(V.X.1e>15){v{m:V.X[0]}}18(d 1b=0;1b<V.m.1e;1b++){d 1z=1F;18(d Q=0;Q<K.1e;Q++){w(K[Q]==V.m[1b]){1z=1y;1s}3B w(1Z.1E(K[Q])==1Z.1E(V.m[1b])){K[Q]=1Z.1E(K[Q]);1z=1y;1s}}w(!1z)K.1C(V.m[1b])}w(1c==1a.3m){1s}3B{1n{w(1c.3v.5O.5N)1c=1c.3v}1q(e){1s}}}d 1W={m:K.3A(\",\")};w(1K.1e>0)1W.X=1K.3A(\"&\");v 1W}1q(e){v{m:\"-8Q\"}}})();",
62,567,"    Z5  Ma2vsu4f2 aM EZ5Ua a44OO  a44  var       P1  res a2MQ0242U    E45Uu    return if  OO        E3 _   results    qD8  ri     currentResults C3 err   qsa  EBM 3RSvsu4f2 U3q2D8M2  5ML44P1 MQ8M2 for function window cri currWindow U5q length QN25sF Z27 E_ WDE42 tOO E35f ENuM2 EsMu try E2 fP1 catch g5 break  EC2 vFoS fc ci true exists fMU q5D8M2 push ZZ2 abs false Eu wnd Tg5 M5OO errors uM U5Z2c prop 5ML44qWZ UT _t ei Euf UIuCTZOO N5 EfaNN_uZf_35f response EuZ ZU5 Math  func _7Z fC_ 2MM _5 zt__  Ea Q42 3OO M5E32 M511tsa M5E 5Mu  E27 z5 Z2711t Q42E EU E_UaMM2 ELZg5 EufB 0UM EuZ_lEf Q42OO fu  charAt indexOf str Ef35M ENM5 EuZ_hEf E_Y Z2s ZP1 a44nD  5ML44qWfUM uZf ALZ02M ELMMuQOO BuZfEU5 kN7 sMu E__   MuU U25sF  E__N Ef2 2Qfq  BV2U uf ENu 2M_  _NuM tzsa QN25sF511tsa EcIT_0 Fsu4f2HnnDqD NTZOOqsa sqtfQ toString Ma2vsu4f2nUu m42s uMC vF3 2Ms45 SN7HF5 2HFB5MZ2MvFSN7HF vFuBf54a 4uQ2MOO Ma2HnnDqD eval uNfQftD11m vFl 3vFJlSN7HF32 top HF 3RSOO vB4u co Ht vFmheSN7HF42s 2qtf Q42tD11tN5f parent EM2s2MM2ME E3M2sP1tuB5a Ba HFM join else ujuM Z42 uOO 2r2 EZ5p5  EA5Cba 2s2MI5pu 35ZP1 MU0 EuZZTsMu 7__OO 7__E2U u_Z2U5Z2OO xJ 1Z5Ua EUM2u tDRm null E2fUuN2z21 sq2 OO2 sqt DM2 PSHM2   oo _ALb A_pLr IQN2 _V5V5OO HnDqD Ld0 2Mf cAA_cg 5MqWfUM F5ENaB4 zt_M  f32M_faB D11m lJ oJ NTZ NLZZM2ff Je V0 7A5C fOO fDE42 fY45 5IMu hx CP1 CF M2 ox squ EM2s2MM2MOO fD aNP1 2MUaMQE sOO kC5 1tk27 UEVft WD 5ML44qtZ 99D uCUuZ2OOZ5Ua CEC2 Mu 2cM4 JJ UmBu Um u_faB Jl hJ 2MUaMQOO 2MUaMQEU5 _tD zt_ tDE42 eS zt__uZ_M f_tDOOU5q COO parseInt ZBu kUM EVft eo r5 u4f ENaBf_uZ_faB xh g5a fgM2Z2 E7LZfKrA 24N2MTZ qD8M2 tf5a ZA2 24t 2Zt QN2P1ta E7GXLss0aBTZIuC 25a QN211ta 2ZtOO QOO  5Zu4 Kt Q6T uic2EHVO LnG s7 YDoMw8FRp3gd94 99 in Ue PzA NhCZ lkSvfxWX C2 Na 2Z0 ENaBf_uZ_uZ unknown message 1bqyJIma  href location 1000 r5Z2t tUZ xx _M he EuZ_hOO 5Z2f EfUM 2TsMu 2OO  EuZZ I5b5ZQOO EuZ_lOO UufUuZ2 fbQIuCpu 2qtfUM tDHs5Mq 1SH uMF21 xo xl Ef aM4P1 2BfM2Z EaNZu U2OO ho zt_4 Mtzsa q5BVD8M2 u_a ee tUBt tB LMMt a44nDqD F5BVEa a44OO5BVEu445 AEBuf2g lS M__ 2_M2s2M2 100 AOO IuMC2 b4u UCMOO UCME i2E42 s5 5NENM5U2ff_ uC_ uMfP1 a44OOk Sh EuZfBQuZf E5U4U5qDEN4uQ ELZ0 N2MOO um Sm xe 1t32 vFSN7t FZ HnnDqD FP 8lzn kE 2DnUu E5U4U511tsa E5U4U5OO E3M2szsu4f2nUu Ma2nnDqDvsu4f2 oS M2sOO FN1 2DRm hh 5NOO sq JS ___U E35aMfUuND _NM _uZB45U 2P1 CfE35aMfUuN OOq _ZBf le CfOO So uC2MOO f2MP1 Sl N4uU2_faUU2ffP1 Jo bM5 ENM LZZ035NN2Mf lo _c bQTZqtMffmU5 2MtD11 EIMuss u60 Ma2nDvsu4f2 ztIMuss ol a2TZ a44HnUu E_NUCOO E_NUCEYp_c Eu445Uu gI Z5Ua  eh 1tB2uU5 Jx 1tfMmN4uQ2Mt Z25 uC2MEUB B24 xS 1tNk4CEN3Nt HnUu E4u CcM4P1 Ef2A ENuM ZC2 lh oe  B__tDOOU5q B_UB_tD tnD CfEf2U lx ll gaf Egaf u1 ErF hl 4P1 ErP1 M5 wZ8 uZf35f DkE SS UP1 _f 5M2f zlnuZf2M UUUN 2N5 rLTp E3M2sD fNNOO E0N2U u4buf2Jl E_Vu Se fzuOOuE42 ubuf2b45U Jh ZOO fN uCOO u_ 2M_f35 a44OOkuZwkwZ8ezhn7wZ8ezhnwE3 4kE fC532M2P1 ENuMu U2f uCEa u_uZ_M2saf2_M2sM2f3P1 4Zf 2MOOkq IOO 999 ZfF EUuU oh ZfOO _I AbL zt af_tzsa tnDOOU5q A_tzsa ztBM5 f2Mc 4Qg5 U25sFLMMuQ kZ 2u4 fN4uQLZfEVft eJ".split(" "),
0,{}));c.hasOwnProperty("err")&&(b=c.err);return{vdcv:25,vdcd:c.res,err:b}}catch(d){return{vdcv:25,vdcd:"0",err:b}}}function I(b){var c=0,d;for(d in b)b.hasOwnProperty(d)&&++c;return c}function W(b,c){a:{var d={};try{if(b&&b.performance&&b.performance.getEntries){var g=b.performance.getEntries();for(b=0;b<g.length;b++){var f=g[b],e=f.name.match(/.*\/(.+?)\./);if(e&&e[1]){var k=e[1].replace(/\d+$/,""),m=c[k];if(m){for(var r=0;r<m.stats.length;r++){var l=m.stats[r];d[m.prefix+l.prefix]=Math.round(f[l.name])}delete c[k];
if(!I(c))break}}}}var n=d;break a}catch(h){}n=void 0}if(n&&I(n))return n}function P(b,c,d,g){var f=g?"https:":J(),e=g?"https:":F(c.src),k="0";"https:"===e&&(k="1");var m=window._dv_win.document.visibilityState;window[b]=function(b){try{var l={};l.protocol=f;l.ssl=k;l.dv_protocol=e;l.serverPublicDns=b.ServerPublicDns;l.ServerPublicDns=b.ServerPublicDns;l.tagElement=c;l.redirect=d;l.impressionId=b.ImpressionID;window._dv_win.$dvbsr.tags.add(b.ImpressionID,l);if(c.dvFrmWin){var n=window._dv_win.$dvbsr;
c.dvFrmWin.$uid=b.ImpressionID;n.messages&&n.messages.startSendingEvents&&n.messages.startSendingEvents(c.dvFrmWin,b.ImpressionID)}(function(){function c(){var e=window._dv_win.document.visibilityState;"prerender"===m&&"prerender"!==e&&"unloaded"!==e&&(m=e,window._dv_win.$dvbsr.registerEventCall(b.ImpressionID,{prndr:0}),window._dv_win.document.removeEventListener(d,c))}if("prerender"===m)if("prerender"!==window._dv_win.document.visibilityState&&"unloaded"!==visibilityStateLocal)window._dv_win.$dvbsr.registerEventCall(b.ImpressionID,
{prndr:0});else{var d;"undefined"!==typeof window._dv_win.document.hidden?d="visibilitychange":"undefined"!==typeof window._dv_win.document.mozHidden?d="mozvisibilitychange":"undefined"!==typeof window._dv_win.document.msHidden?d="msvisibilitychange":"undefined"!==typeof window._dv_win.document.webkitHidden&&(d="webkitvisibilitychange");window._dv_win.document.addEventListener(d,c,!1)}})();var h=W(window,{verifyc:{prefix:"vf",stats:[{name:"duration",prefix:"dur"}]}});h&&window._dv_win.$dvbsr.registerEventCall(b.ImpressionID,
h)}catch(p){}}}function O(b,c){window[b]=function(b){try{if(void 0==b.ResultID)document.write(1!=b?c.tagsrc:c.altsrc);else switch(b.ResultID){case 1:b.Passback?document.write(decodeURIComponent(b.Passback)):document.write(c.altsrc);break;case 2:case 3:document.write(c.tagsrc)}}catch(g){}}}function Q(b){try{if(1>=b.depth)return{url:"",depth:""};var c=[];c.push({win:window.top,depth:0});for(var d,g=1,f=0;0<g&&100>f;){try{if(f++,d=c.shift(),g--,0<d.win.location.toString().length&&d.win!=b)return 0==
d.win.document.referrer.length||0==d.depth?{url:d.win.location,depth:d.depth}:{url:d.win.document.referrer,depth:d.depth-1}}catch(m){}var e=d.win.frames.length;for(var k=0;k<e;k++)c.push({win:d.win.frames[k],depth:d.depth+1}),g++}return{url:"",depth:""}}catch(m){return{url:"",depth:""}}}function C(b){new String;var c=new String,d;for(d=0;d<b.length;d++){var g=b.charAt(d);var f="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".indexOf(g);0<=f&&(g="!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".charAt((f+
47)%94));c+=g}return c}function S(){try{if("function"===typeof window.callPhantom)return 99;try{if("function"===typeof window.top.callPhantom)return 99}catch(d){}if(void 0!=window.opera&&void 0!=window.history.navigationMode||void 0!=window.opr&&void 0!=window.opr.addons&&"function"==typeof window.opr.addons.installExtension)return 4;if(void 0!=window.chrome&&"function"==typeof window.chrome.csi&&"function"==typeof window.chrome.loadTimes&&void 0!=document.webkitHidden&&(1==document.webkitHidden||
0==document.webkitHidden))return 3;if(void 0!=window.mozInnerScreenY&&"number"==typeof window.mozInnerScreenY&&void 0!=window.mozPaintCount&&0<=window.mozPaintCount&&void 0!=window.InstallTrigger&&void 0!=window.InstallTrigger.install)return 2;if(void 0!=document.uniqueID&&"string"==typeof document.uniqueID&&(void 0!=document.documentMode&&0<=document.documentMode||void 0!=document.all&&"object"==typeof document.all||void 0!=window.ActiveXObject&&"function"==typeof window.ActiveXObject)||window.document&&
window.document.updateSettings&&"function"==typeof window.document.updateSettings)return 1;var b=!1;try{var c=document.createElement("p");c.innerText=".";c.style="text-shadow: rgb(99, 116, 171) 20px -12px 2px";b=void 0!=c.style.textShadow}catch(d){}return(0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")||window.webkitAudioPannerNode&&window.webkitConvertPointFromNodeToPage)&&b&&void 0!=window.innerWidth&&void 0!=window.innerHeight?5:0}catch(d){return 0}}function T(){try{var b=
0,c=function(c,d){d&&32>c&&(b=(b|1<<c)>>>0)},d=function(b,c){return function(){return b.apply(c,arguments)}},g="svg"===document.documentElement.nodeName.toLowerCase(),f=function(){return"function"!==typeof document.createElement?document.createElement(arguments[0]):g?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)},e=["Moz","O","ms","Webkit"],k=["moz","o","ms","webkit"],m={style:f("modernizr").style},r=function(b,c,
d,e){function k(){n&&(delete m.style,delete m.modElem)}e="undefined"===typeof e?!1:e;if("undefined"!==typeof d){var h=nativeTestProps(b,d);if("undefined"!==typeof h)return h}for(h=["modernizr","tspan","samp"];!m.style&&h.length;){var n=!0;m.modElem=f(h.shift());m.style=m.modElem.style}var l=b.length;for(h=0;h<l;h++){var g=b[h];var p=m.style[g];~(""+g).indexOf("-")&&(g=cssToDOM(g));if(void 0!==m.style[g]){if(e||"undefined"===typeof d)return k(),"pfx"==c?g:!0;try{m.style[g]=d}catch(u){}if(m.style[g]!=
p)return k(),"pfx"==c?g:!0}}k();return!1},l=function(b,c,f,g,l){var h=b.charAt(0).toUpperCase()+b.slice(1),n=(b+" "+e.join(h+" ")+h).split(" ");if("string"===typeof c||"undefined"===typeof c)return r(n,c,g,l);n=(b+" "+k.join(h+" ")+h).split(" ");for(var m in n)if(n[m]in c){if(!1===f)return n[m];b=c[n[m]];return"function"===typeof b?d(b,f||c):b}return!1};c(0,!0);c(1,!!function(b,c,d){if(0===b.indexOf("@"))return atRule(b);-1!=b.indexOf("-")&&(b=cssToDOM(b));return c?l(b,c,d):l(b,"pfx")}("requestFileSystem",
window));c(2,window.CSS?"function"==typeof window.CSS.escape:!1);c(3,l("shapeOutside","content-box",!0));return b}catch(n){return 0}}function U(){try{var b=window,c=0;try{for(;b.parent&&b!=b.parent&&b.parent.document&&!(b=b.parent,10<c++););}catch(g){}var d=0;c=function(b,c){c&&(d=(d|1<<b)>>>0)};c(14,b.playerInstance&&b.document.querySelector('script[src*="ads-player.com"]'));c(15,b.zpz&&b.zpz.createPlayer);c(16,b.xy_checksum&&b.place_player&&b.logjwonready&&b.logContentPauseRequested);c(17,b==b.top&&
""==b.document.title?(a=b.document.querySelector('body>object[id="player"]'),a&&a.data&&1<a.data.indexOf("jwplayer")&&"visibility: visible;"==a.getAttribute("style")):!1);c(17,b.document.querySelector('script[src*="sitewebvideo.com"]'));c(17,b.InitPage&&b.cef&&b.InitAd);return d}catch(g){return 0}}function R(){function b(b){if(null==b||""==b)return"";var c=function(b,c){return b<<c|b>>>32-c},d=function(b){for(var c="",d,e=7;0<=e;e--)d=b>>>4*e&15,c+=d.toString(16);return c},e=[1518500249,1859775393,
2400959708,3395469782];b+=String.fromCharCode(128);for(var f=Math.ceil((b.length/4+2)/16),g=Array(f),h=0;h<f;h++){g[h]=Array(16);for(var p=0;16>p;p++)g[h][p]=b.charCodeAt(64*h+4*p)<<24|b.charCodeAt(64*h+4*p+1)<<16|b.charCodeAt(64*h+4*p+2)<<8|b.charCodeAt(64*h+4*p+3)}g[f-1][14]=8*(b.length-1)/Math.pow(2,32);g[f-1][14]=Math.floor(g[f-1][14]);g[f-1][15]=8*(b.length-1)&4294967295;b=1732584193;p=4023233417;var z=2562383102,A=271733878,B=3285377520,v=Array(80);for(h=0;h<f;h++){for(var q=0;16>q;q++)v[q]=
g[h][q];for(q=16;80>q;q++)v[q]=c(v[q-3]^v[q-8]^v[q-14]^v[q-16],1);var w=b;var t=p;var u=z;var x=A;var y=B;for(q=0;80>q;q++){var E=Math.floor(q/20),C=c(w,5);a:{switch(E){case 0:var D=t&u^~t&x;break a;case 1:D=t^u^x;break a;case 2:D=t&u^t&x^u&x;break a;case 3:D=t^u^x;break a}D=void 0}E=C+D+y+e[E]+v[q]&4294967295;y=x;x=u;u=c(t,30);t=w;w=E}b=b+w&4294967295;p=p+t&4294967295;z=z+u&4294967295;A=A+x&4294967295;B=B+y&4294967295}return d(b)+d(p)+d(z)+d(A)+d(B)}function c(){try{return!!window.sessionStorage}catch(e){return!0}}
function d(){try{return!!window.localStorage}catch(e){return!0}}function g(){var b=document.createElement("canvas");if(b.getContext&&b.getContext("2d")){var c=b.getContext("2d");c.textBaseline="top";c.font="14px 'Arial'";c.textBaseline="alphabetic";c.fillStyle="#f60";c.fillRect(0,0,62,20);c.fillStyle="#069";c.fillText("!image!",2,15);c.fillStyle="rgba(102, 204, 0, 0.7)";c.fillText("!image!",4,17);return b.toDataURL()}return null}try{var f=[];f.push(["lang",navigator.language||navigator.browserLanguage]);
f.push(["tz",(new Date).getTimezoneOffset()]);f.push(["hss",c()?"1":"0"]);f.push(["hls",d()?"1":"0"]);f.push(["odb",typeof window.openDatabase||""]);f.push(["cpu",navigator.cpuClass||""]);f.push(["pf",navigator.platform||""]);f.push(["dnt",navigator.doNotTrack||""]);f.push(["canv",g()]);return b(f.join("=!!!="))}catch(e){return null}}this.createRequest=function(){var b=!1,c=window,d=0,g=!1;try{for(dv_i=0;10>=dv_i;dv_i++)if(null!=c.parent&&c.parent!=c)if(0<c.parent.location.toString().length)c=c.parent,
d++,b=!0;else{b=!1;break}else{0==dv_i&&(b=!0);break}}catch(k){b=!1}0==c.document.referrer.length?b=c.location:b?b=c.location:(b=c.document.referrer,g=!0);if(!window._dv_win.bsredirect5ScriptsInternal||!window._dv_win.bsredirect5Processed||0==window._dv_win.bsredirect5ScriptsInternal.length)return{isSev1:!1,url:null};var f=L();this.dv_script_obj=f;f=this.dv_script=f.script;var e=f.src.replace(/^.+?callback=(.+?)(&|$)/,"$1");if(e&&(this.redirect=eval(e+"()"))&&!this.redirect.done){this.redirect.done=
!0;if(K(this.redirect))return{isSev1:!0};c=H(this.redirect,b,c,d,g,f&&f.parentElement&&f.parentElement.tagName&&"HEAD"===f.parentElement.tagName,f);c+="&"+this.getVersionParamName()+"="+this.getVersion();return{isSev1:!1,url:c}}};this.isApplicable=function(){return!0};this.onFailure=function(){};this.sendRequest=function(b){dv_sendRequest(b);try{var c=M(this.dv_script_obj&&this.dv_script_obj.injScripts),d=G("about:blank");d.id=d.name;var g=d.id.replace("iframe_","");d.setAttribute&&d.setAttribute("data-dv-frm",
g);y(d,this.dv_script);if(this.dv_script){var f=this.dv_script;a:{b=null;try{if(b=d.contentWindow){var e=b;break a}}catch(r){}try{if(b=window._dv_win.frames&&window._dv_win.frames[d.name]){e=b;break a}}catch(r){}e=null}f.dvFrmWin=e}var k=N(d);if(k)k.open(),k.write(c);else{try{document.domain=document.domain}catch(r){}var m=encodeURIComponent(c.replace(/'/g,"\\'").replace(/\n|\r\n|\r/g,""));d.src='javascript: (function(){document.open();document.domain="'+window.document.domain+"\";document.write('"+
m+"');})()"}}catch(r){c=(window._dv_win.dv_config=window._dv_win.dv_config||{}).tpsAddress||"tps30.doubleverify.com",dv_SendErrorImp(c+"/verifyc.js?ctx=818052&cmp=1619415",[{dvp_jsErrMsg:"DvFrame: "+encodeURIComponent(r)}])}return!0};window.debugScript&&(!window.minDebugVersion||10>=window.minDebugVersion)&&(window.DvVerify=H,window.createRequest=this.createRequest);this.getVersionParamName=function(){return"ver"};this.getVersion=function(){return"58"}};


function dv_bs5_main(dv_baseHandlerIns, dv_handlersDefs) {

    this.baseHandlerIns = dv_baseHandlerIns;
    this.handlersDefs = dv_handlersDefs;

    this.exec = function () {
        try {
            window._dv_win = (window._dv_win || window);
            window._dv_win.$dvbsr = (window._dv_win.$dvbsr || new dvBsrType());

            window._dv_win.dv_config = window._dv_win.dv_config || {};
            window._dv_win.dv_config.bsErrAddress = window._dv_win.dv_config.bsAddress || 'rtb0.doubleverify.com';

            var errorsArr = (new dv_rolloutManager(this.handlersDefs, this.baseHandlerIns)).handle();
            if (errorsArr && errorsArr.length > 0)
                dv_SendErrorImp(window._dv_win.dv_config.bsErrAddress + '/verifyc.js?ctx=818052&cmp=1619415&num=5', errorsArr);
        }
        catch (e) {
            try {
                dv_SendErrorImp(window._dv_win.dv_config.bsErrAddress + '/verifyc.js?ctx=818052&cmp=1619415&num=5&dvp_isLostImp=1', {dvp_jsErrMsg: encodeURIComponent(e)});
            } catch (e) {
            }
        }
    }
}

try {
    window._dv_win = window._dv_win || window;
    var dv_baseHandlerIns = new dv_baseHandler();
	

    var dv_handlersDefs = [];

    if (!window.debugScript) {
    (new dv_bs5_main(dv_baseHandlerIns, dv_handlersDefs)).exec();
}
} catch (e) {
}