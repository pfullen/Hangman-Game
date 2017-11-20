(function(){var l,aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba;
if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={ta:!0},ea={};try{ea.__proto__=da;ca=ea.ta;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function n(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.o=b.prototype}
for(var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ia="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ja=function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}}(),ka=ia,la=["Reflect",
"construct"],ma=0;ma<la.length-1;ma++){var na=la[ma];na in ka||(ka[na]={});ka=ka[na]}var oa=la[la.length-1];ja!=ka[oa]&&null!=ja&&ha(ka,oa,{configurable:!0,writable:!0,value:ja});var p=this;function q(a){return void 0!==a}
function r(a){return"string"==typeof a}
function t(a,b,c){a=a.split(".");c=c||p;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&q(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function v(a,b){for(var c=a.split("."),d=b||p,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function pa(){}
function qa(a){a.da=void 0;a.getInstance=function(){return a.da?a.da:a.da=new a}}
function ra(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function w(a){return"array"==ra(a)}
function sa(a){var b=ra(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ta(a){return"function"==ra(a)}
function ua(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var va="closure_uid_"+(1E9*Math.random()>>>0),wa=0;function xa(a,b,c){return a.call.apply(a.bind,arguments)}
function Aa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function x(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?x=xa:x=Aa;return x.apply(null,arguments)}
function y(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var z=Date.now||function(){return+new Date};
function A(a,b){function c(){}
c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function B(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(B,Error);B.prototype.name="CustomError";var Ba=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(r(a))return r(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},C=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ca=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=r(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Da=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=r(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d};
function Ea(a,b){a:{var c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function Fa(a,b){var c=Ba(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ga(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ha(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(sa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ia=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ja(a){if(!Ka.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(La,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ma,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Na,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Oa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Pa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Qa,"&#0;"));return a}
var La=/&/g,Ma=/</g,Na=/>/g,Oa=/"/g,Pa=/'/g,Qa=/\x00/g,Ka=/[\x00&<>"']/;function Ra(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Sa;a:{var Ta=p.navigator;if(Ta){var Ua=Ta.userAgent;if(Ua){Sa=Ua;break a}}Sa=""}function D(a){return-1!=Sa.indexOf(a)}
;function Va(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Wa(a,b){var c=sa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Xa(a){var b=Ya,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Za(a){for(var b in a)return!1;return!0}
function $a(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ab(a){var b={},c;for(c in a)b[c]=a[c];return b}
var bb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<bb.length;f++)c=bb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var db=D("Opera"),eb=D("Trident")||D("MSIE"),fb=D("Edge"),hb=D("Gecko")&&!(-1!=Sa.toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),ib=-1!=Sa.toLowerCase().indexOf("webkit")&&!D("Edge");function jb(){var a=p.document;return a?a.documentMode:void 0}
var kb;a:{var lb="",mb=function(){var a=Sa;if(hb)return/rv:([^\);]+)(\)|;)/.exec(a);if(fb)return/Edge\/([\d\.]+)/.exec(a);if(eb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ib)return/WebKit\/(\S+)/.exec(a);if(db)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
mb&&(lb=mb?mb[1]:"");if(eb){var nb=jb();if(null!=nb&&nb>parseFloat(lb)){kb=String(nb);break a}}kb=lb}var ob=kb,pb;var qb=p.document;pb=qb&&eb?jb()||("CSS1Compat"==qb.compatMode?parseInt(ob,10):5):void 0;var rb=!eb||9<=Number(pb);function sb(){this.b="";this.g=tb}
sb.prototype.W=!0;sb.prototype.J=function(){return this.b};
function ub(a){return a instanceof sb&&a.constructor===sb&&a.g===tb?a.b:"type_error:TrustedResourceUrl"}
var tb={};function E(){this.b="";this.g=vb}
E.prototype.W=!0;E.prototype.J=function(){return this.b};
function wb(a){return a instanceof E&&a.constructor===E&&a.g===vb?a.b:"type_error:SafeUrl"}
var xb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function yb(a){if(a instanceof E)return a;a=a.W?a.J():String(a);xb.test(a)||(a="about:invalid#zClosurez");return zb(a)}
var vb={};function zb(a){var b=new E;b.b=a;return b}
zb("about:blank");function Ab(){this.b=""}
Ab.prototype.W=!0;Ab.prototype.J=function(){return this.b};
function Bb(a){var b=new Ab;b.b=a;return b}
Bb("<!DOCTYPE html>");Bb("");Bb("<br>");function Cb(a,b){var c=b instanceof E?b:yb(b);a.href=wb(c)}
function Db(a,b,c){a.rel=c;a.href=-1!=c.toLowerCase().indexOf("stylesheet")?ub(b):b instanceof sb?ub(b):b instanceof E?wb(b):yb(b).J()}
function Eb(a,b){a.src=ub(b)}
;function Fb(a,b){this.width=a;this.height=b}
l=Fb.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Gb(a){var b=document;return r(a)?b.getElementById(a):a}
function Hb(a,b){Va(b,function(b,d){b&&b.W&&(b=b.J());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Ib.hasOwnProperty(d)?a.setAttribute(Ib[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Ib={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Jb(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!rb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ja(g.name),'"');if(g.type){f.push(' type="',Ja(g.type),'"');var h={};cb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:w(g)?f.className=g.join(" "):Hb(f,g));2<d.length&&Kb(e,f,d);return f}
function Kb(a,b,c){function d(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!sa(f)||ua(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(ua(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(ta(f)){g="function"==typeof f.item;break a}}g=!1}C(g?Ga(f):f,d)}}}
function Lb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Mb(a){Nb();var b=new sb;b.b=a;return b}
var Nb=pa;var Ob=document,F=window;function Pb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Qb=(new Date).getTime();function Rb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Sb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],k=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var u=1518500249}else m=d^f^h,u=1859775393;else 60>c?(m=d&f|h&(d|f),u=2400959708):(m=d^f^h,u=3395469782);m=((a<<5|a>>>27)&4294967295)+m+k+u+b[c]&4294967295;k=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64;for(;d<c;)if(f[m++]=a[d++],u++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64}
function d(){var a=[],d=8*u;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,u;a();return{reset:a,update:c,digest:d,va:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Tb(a,b,c){var d=[],e=[];if(1==(w(c)?2:1))return e=[b,a],C(d,function(a){e.push(a)}),Ub(e.join(" "));
var f=[],g=[];C(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];C(d,function(a){e.push(a)});
a=Ub(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ub(a){var b=Sb();b.update(a);return b.va().toLowerCase()}
;function Vb(a){this.b=a||{cookie:""}}
l=Vb.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');q(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(z()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ia(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=q(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ia(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Wb=new Vb("undefined"==typeof document?null:document);Wb.g=3950;function Xb(){var a=[],b=Rb(String(p.location.href)),c=p.__OVERRIDE_SID;null==c&&(c=(new Vb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?p.__SAPISID:p.__APISID,null==b&&(b=(new Vb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(p.location.href);return d&&b&&c?[c,Tb(Rb(d),b,a||null)].join(" "):null}return null}
;function Yb(a,b){this.f=a;this.h=b;this.g=0;this.b=null}
Yb.prototype.get=function(){if(0<this.g){this.g--;var a=this.b;this.b=a.next;a.next=null}else a=this.f();return a};
function Zb(a,b){a.h(b);100>a.g&&(a.g++,b.next=a.b,a.b=b)}
;function $b(a){p.setTimeout(function(){throw a;},0)}
var ac;
function bc(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=x(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!D("Trident")&&!D("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(q(c.next)){c=c.next;var a=c.ja;c.ja=null;a()}};
return function(a){d.next={ja:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function cc(){this.g=this.b=null}
var ec=new Yb(function(){return new dc},function(a){a.reset()});
cc.prototype.add=function(a,b){var c=ec.get();c.set(a,b);this.g?this.g.next=c:this.b=c;this.g=c};
cc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.g=null),a.next=null);return a};
function dc(){this.next=this.scope=this.b=null}
dc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
dc.prototype.reset=function(){this.next=this.scope=this.b=null};function fc(a,b){gc||hc();ic||(gc(),ic=!0);jc.add(a,b)}
var gc;function hc(){if(-1!=String(p.Promise).indexOf("[native code]")){var a=p.Promise.resolve(void 0);gc=function(){a.then(kc)}}else gc=function(){var a=kc;
!ta(p.setImmediate)||p.Window&&p.Window.prototype&&!D("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(ac||(ac=bc()),ac(a)):p.setImmediate(a)}}
var ic=!1,jc=new cc;function kc(){for(var a;a=jc.remove();){try{a.b.call(a.scope)}catch(b){$b(b)}Zb(ec,a)}ic=!1}
;function G(){this.g=this.g;this.B=this.B}
G.prototype.g=!1;G.prototype.dispose=function(){this.g||(this.g=!0,this.l())};
function lc(a,b){a.g?q(void 0)?b.call(void 0):b():(a.B||(a.B=[]),a.B.push(q(void 0)?x(b,void 0):b))}
G.prototype.l=function(){if(this.B)for(;this.B.length;)this.B.shift()()};
function mc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function nc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];sa(d)?nc.apply(null,d):mc(d)}}
;function oc(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function pc(a,b){if(a.classList)var c=a.classList.contains(b);else c=oc(a),c=0<=Ba(c,b);return c}
function qc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):pc(a,"inverted-hdpi")&&(a.className=Ca(oc(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var rc="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""};function sc(){}
sc.prototype.next=function(){throw rc;};
sc.prototype.T=function(){return this};
function tc(a){if(a instanceof sc)return a;if("function"==typeof a.T)return a.T(!1);if(sa(a)){var b=0,c=new sc;c.next=function(){for(;;){if(b>=a.length)throw rc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function uc(a,b){if(sa(a))try{C(a,b,void 0)}catch(c){if(c!==rc)throw c;}else{a=tc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==rc)throw c;}}}
function vc(a){if(sa(a))return Ga(a);a=tc(a);var b=[];uc(a,function(a){b.push(a)});
return b}
;(function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
p.addEventListener("test",pa,b);p.removeEventListener("test",pa,b);return a})();function wc(a){var b=[];xc(new yc,a,b);return b.join("")}
function yc(){}
function xc(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(w(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),xc(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),zc(d,c),c.push(":"),xc(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":zc(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ac={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Bc=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function zc(a,b){b.push('"',a.replace(Bc,function(a){var b=Ac[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ac[a]=b);return b}),'"')}
;function Cc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
function Dc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function H(a,b){this.b=0;this.m=void 0;this.h=this.g=this.f=null;this.i=this.j=!1;if(a!=pa)try{var c=this;a.call(b,function(a){Ec(c,2,a)},function(a){Ec(c,3,a)})}catch(d){Ec(this,3,d)}}
function Fc(){this.next=this.context=this.g=this.h=this.b=null;this.f=!1}
Fc.prototype.reset=function(){this.context=this.g=this.h=this.b=null;this.f=!1};
var Gc=new Yb(function(){return new Fc},function(a){a.reset()});
function Hc(a,b,c){var d=Gc.get();d.h=a;d.g=b;d.context=c;return d}
function Ic(a){return new H(function(b,c){c(a)})}
function Jc(a,b,c){Kc(a,b,c,null)||fc(y(b,a))}
function Lc(a){return new H(function(b,c){a.length||b(void 0);for(var d=0,e;d<a.length;d++)e=a[d],Jc(e,b,c)})}
function Mc(a){return new H(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{aa:!0,value:f}:{aa:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Jc(g,y(e,f,!0),y(e,f,!1));
else b(d)})}
H.prototype.then=function(a,b,c){return Nc(this,ta(a)?a:null,ta(b)?b:null,c)};
Cc(H);function Oc(a,b){var c=Hc(b,b,void 0);c.f=!0;Pc(a,c);return a}
function Qc(a,b){return Nc(a,null,b,void 0)}
H.prototype.cancel=function(a){0==this.b&&fc(function(){var b=new Rc(a);Sc(this,b)},this)};
function Sc(a,b){if(0==a.b)if(a.f){var c=a.f;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.f||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Sc(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Tc(c),Uc(c,e,3,b)))}a.f=null}else Ec(a,3,b)}
function Pc(a,b){a.g||2!=a.b&&3!=a.b||Vc(a);a.h?a.h.next=b:a.g=b;a.h=b}
function Nc(a,b,c,d){var e=Hc(null,null,null);e.b=new H(function(a,g){e.h=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.g=c?function(b){try{var e=c.call(d,b);!q(e)&&b instanceof Rc?g(b):a(e)}catch(m){g(m)}}:g});
e.b.f=a;Pc(a,e);return e.b}
H.prototype.u=function(a){this.b=0;Ec(this,2,a)};
H.prototype.A=function(a){this.b=0;Ec(this,3,a)};
function Ec(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,Kc(c,a.u,a.A,a)||(a.m=c,a.b=b,a.f=null,Vc(a),3!=b||c instanceof Rc||Wc(a,c)))}
function Kc(a,b,c,d){if(a instanceof H)return Pc(a,Hc(b||pa,c||null,d)),!0;if(Dc(a))return a.then(b,c,d),!0;if(ua(a))try{var e=a.then;if(ta(e))return Xc(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Xc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Vc(a){a.j||(a.j=!0,fc(a.B,a))}
function Tc(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.h=null);return b}
H.prototype.B=function(){for(var a;a=Tc(this);)Uc(this,a,this.b,this.m);this.j=!1};
function Uc(a,b,c,d){if(3==c&&b.g&&!b.f)for(;a&&a.i;a=a.f)a.i=!1;if(b.b)b.b.f=null,Yc(b,c,d);else try{b.f?b.h.call(b.context):Yc(b,c,d)}catch(e){Zc.call(null,e)}Zb(Gc,b)}
function Yc(a,b,c){2==b?a.h.call(a.context,c):a.g&&a.g.call(a.context,c)}
function Wc(a,b){a.i=!0;fc(function(){a.i&&Zc.call(null,b)})}
var Zc=$b;function Rc(a){B.call(this,a)}
A(Rc,B);Rc.prototype.name="cancel";function I(a){G.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.f={};this.m=!!a}
A(I,G);l=I.prototype;l.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function $c(a,b,c,d){if(b=a.f[b]){var e=a.b;(b=Ea(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.D(b)}}
l.D=function(a){var b=this.b[a];if(b){var c=this.f[b];0!=this.i?(this.h.push(a),this.b[a+1]=pa):(c&&Fa(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.G=function(a,b){var c=this.f[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];ad(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.D(c)}}return 0!=e}return!1};
function ad(a,b,c){fc(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.f[a];b&&(C(b,this.D,this),delete this.f[a])}else this.b.length=0,this.f={}};
l.l=function(){I.o.l.call(this);this.clear();this.h.length=0};function bd(a){this.b=a}
bd.prototype.set=function(a,b){q(b)?this.b.set(a,wc(b)):this.b.remove(a)};
bd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
bd.prototype.remove=function(a){this.b.remove(a)};function cd(a){this.b=a}
A(cd,bd);function dd(a){this.data=a}
function ed(a){return!q(a)||a instanceof dd?a:new dd(a)}
cd.prototype.set=function(a,b){cd.o.set.call(this,a,ed(b))};
cd.prototype.g=function(a){a=cd.o.get.call(this,a);if(!q(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
cd.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,!q(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function fd(a){this.b=a}
A(fd,cd);fd.prototype.set=function(a,b,c){if(b=ed(b)){if(c){if(c<z()){fd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=z()}fd.o.set.call(this,a,b)};
fd.prototype.g=function(a){var b=fd.o.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<z()||c&&c>z())fd.prototype.remove.call(this,a);else return b}};function gd(a){this.b=a}
A(gd,fd);function hd(){}
;function id(){}
A(id,hd);id.prototype.clear=function(){var a=vc(this.T(!0)),b=this;C(a,function(a){b.remove(a)})};function jd(a){this.b=a}
A(jd,id);l=jd.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.T=function(a){var b=0,c=this.b,d=new sc;d.next=function(){if(b>=c.length)throw rc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!r(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function kd(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
A(kd,jd);function ld(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
A(ld,jd);function md(a){if(!ta(a))if(a&&"function"==typeof a.handleEvent)a=x(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(5E3)?-1:p.setTimeout(a,5E3)}
function nd(){var a=null;return Qc(new H(function(b,c){a=md(function(){b(void 0)});
-1==a&&c(Error("Failed to schedule timer."))}),function(b){p.clearTimeout(a);
throw b;})}
;var od=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a.match(od)}
function pd(a){return a?decodeURI(a):a}
function qd(a,b,c){if(w(b))for(var d=0;d<b.length;d++)qd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function rd(a){var b=[],c;for(c in a)qd(c,a[c],b);return b.join("&")}
function sd(a,b){var c=rd(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var td=!1,ud="";function xd(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(td=!0,a.description)){ud=xd(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){td=!0;ud="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],td=!(!a||!a.enabledPlugin))){ud=xd(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");td=!0;ud=xd(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");td=!0;ud="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),td=!0,ud=xd(b.GetVariable("$version"))}catch(c){}})();
var yd=td,zd=ud;function Ad(a,b){var c="script";c=void 0===c?"":c;var d=a.createElement("link");Db(d,b,"preload");c&&(d.as=c);(c=a.getElementsByTagName("head")[0])&&c.appendChild(d)}
;var Bd=/^\.google\.(com?\.)?[a-z]{2,3}$/,Cd=/\.(cn|com\.bi|do|sl)$/;function Dd(a){return Bd.test(a)&&!Cd.test(a)}
var Ed=p;function Fd(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+encodeURIComponent(p.location.hostname)];K[3]>=z()&&b.push("adsid="+encodeURIComponent(K[1]));return a+"?"+b.join("&")}
var K,L;function Gd(){Ed=p;K=Ed.googleToken=Ed.googleToken||{};var a=z();K[1]&&K[3]>a&&0<K[2]||(K[1]="",K[2]=-1,K[3]=-1,K[4]="",K[6]="");L=Ed.googleIMState=Ed.googleIMState||{};Dd(L[1])||(L[1]=".google.com");w(L[5])||(L[5]=[]);"boolean"==typeof L[6]||(L[6]=!1);w(L[7])||(L[7]=[]);"number"==typeof L[8]||(L[8]=0)}
function Hd(){Gd();return K[1]}
var M={la:function(){return 0<L[8]},
Ka:function(){L[8]++},
La:function(){0<L[8]&&L[8]--},
Ma:function(){L[8]=0},
shouldRetry:function(){return!1},
ka:function(){return L[5]},
ia:function(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}},
ga:function(){if(!M.la()){var a=p.document,b=function(b){var c=Fd(b);Ad(a,c);b=a.createElement("script");b.type="text/javascript";b.onerror=function(){return p.processGoogleToken({},2)};
c=Mb(c);Eb(b,c);try{(a.head||a.body||a.documentElement).appendChild(b),M.Ka()}catch(g){}},c=L[1];
b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);p.setTimeout(function(){return p.processGoogleToken(d,1)},1E3)}}};
function Id(a){Gd();var b=Ed.googleToken[5]||0;a&&(0!=b||K[3]>=z()?M.ia(a):(M.ka().push(a),M.ga()));K[3]>=z()&&K[2]>=z()||M.ga()}
function Jd(a){p.processGoogleToken=p.processGoogleToken||function(a,c){var b=a,e=c;b=void 0===b?{}:b;e=void 0===e?0:e;var f=b.newToken||"",g=parseInt(b.freshLifetimeSecs||"",10)||3600,h=parseInt(b.validLifetimeSecs||"",10)||86400,k=b["1p_jar"]||"";b=b.pucrd||"";Gd();1==e?M.Ma():M.La();if(!f&&M.shouldRetry())Dd(".google.com")&&(L[1]=".google.com"),M.ga();else{var m=Ed.googleToken=Ed.googleToken||{},u=0==e&&f&&r(f)&&0<g&&0<h&&r(k),Q=!(K[3]>=z())&&0!=e;if(u||Q)u=z(),g=u+1E3*g,h=u+1E3*h,1E-5>Math.random()&&
(u="https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+e,p.google_image_requests||(p.google_image_requests=[]),Q=p.document.createElement("img"),Q.src=u,p.google_image_requests.push(Q)),m[5]=e,m[1]=f,m[2]=g,m[3]=h,m[4]=k,m[6]=b,Gd();if(f||!M.la()){e=M.ka();for(f=0;f<e.length;f++)M.ia(e[f]);e.length=0}}};
Id(a)}
;function Kd(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var N=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var Ld=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",Ld,void 0);function O(a){Kd(Ld,arguments)}
function P(a,b){return a in Ld?Ld[a]:b}
function Md(a){return P(a,void 0)}
function Nd(){return P("PLAYER_CONFIG",{})}
;function Od(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){R(b)}}:a}
function R(a,b,c,d,e){var f=v("yt.logging.errors.log");f?f(a,b,c,d,e):(f=P("ERRORS",[]),f.push([a,b,c,d,e]),O("ERRORS",f))}
;function S(a){return P("EXPERIMENT_FLAGS",{})[a]}
;function Pd(a){a&&(a.dataset?a.dataset[Qd("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Rd(a,b){return a?a.dataset?a.dataset[Qd(b)]:a.getAttribute("data-"+b):null}
var Sd={};function Qd(a){return Sd[a]||(Sd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function T(a,b){ta(a)&&(a=Od(a));return window.setTimeout(a,b)}
function V(a){window.clearTimeout(a)}
;var Td=v("ytPubsubPubsubInstance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.D;I.prototype.publish=I.prototype.G;I.prototype.clear=I.prototype.clear;t("ytPubsubPubsubInstance",Td,void 0);var Ud=v("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",Ud,void 0);var Vd=v("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",Vd,void 0);var Wd=v("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",Wd,void 0);
function Xd(a,b){var c=Yd();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){Ud[d]&&b.apply(window,c)};
try{Wd[a]?f():T(f,0)}catch(g){R(g)}},void 0);
Ud[d]=!0;Vd[a]||(Vd[a]=[]);Vd[a].push(d);return d}return 0}
function Zd(a){var b=Yd();b&&("number"==typeof a?a=[a]:r(a)&&(a=[parseInt(a,10)]),C(a,function(a){b.unsubscribeByKey(a);delete Ud[a]}))}
function $d(a,b){var c=Yd();c&&c.publish.apply(c,arguments)}
function ae(a){var b=Yd();if(b)if(b.clear(a),a)be(a);else for(var c in Vd)be(c)}
function Yd(){return v("ytPubsubPubsubInstance")}
function be(a){Vd[a]&&(a=Vd[a],C(a,function(a){Ud[a]&&delete Ud[a]}),a.length=0)}
;var ce=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,de=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function ee(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ce,""),c=c.replace(de,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else fe(a,b)}
function fe(a,b){var c=ge(a),d=document.getElementById(c),e=d&&Rd(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){e=Xd(c,b);var g=""+(b[va]||(b[va]=++wa));he[g]=e}f||(d=ie(a,c,function(){Rd(d,"loaded")||(Pd(d),$d(c),T(y(ae,c),0))}))}}
function ie(a,b,c){var d=document.createElement("SCRIPT");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
Eb(d,Mb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function je(a){a=ge(a);var b=document.getElementById(a);b&&(ae(a),b.parentNode.removeChild(b))}
function ke(a,b){if(a&&b){var c=""+(b[va]||(b[va]=++wa));(c=he[c])&&Zd(c)}}
function ge(a){var b=document.createElement("a");Cb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Ra(a)}
var he={};var le=null;function me(){var a=P("BG_I",null),b=P("BG_IU",null),c=P("BG_P",void 0);b?ee(b,function(){window.botguard?ne(c):(je(b),R(Error("Unable to load Botguard from "+b),"WARNING"))}):a&&(eval(a),window.botguard?ne(c):R(Error("Unable to load Botguard from JS"),"WARNING"))}
function ne(a){le=new window.botguard.bg(a);S("botguard_periodic_refresh")&&N()}
function oe(){return null!=le}
function pe(){return le?le.invoke():null}
;z();var qe=q(XMLHttpRequest)?function(){return new XMLHttpRequest}:q(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function re(){if(!qe)return null;var a=qe();return"open"in a?a:null}
function se(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function te(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?w(b[f])?Ha(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
;var ue={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ve=!1;
function we(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(a)[1]||null,e=pd(J(a)[3]||null);d&&e?(d=c,c=J(a),d=J(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?pd(J(c)[3]||null)==e&&(Number(J(c)[4]||null)||null)==(Number(J(a)[4]||null)||null):!0;for(var f in ue){if((e=d=P(ue[f]))&&!(e=c)){e=f;var g=P("CORS_HEADER_WHITELIST")||{},h=pd(J(a)[3]||null);e=h?(g=g[h])?0<=Ba(g,e):!1:!0}e&&(b[f]=d)}return b}
function xe(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ye(a,b);var d=ze(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&V(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||p;c?b.C&&b.C.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.fa&&b.fa.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.ma&&0<b.timeout&&(f=T(function(){e||(e=!0,V(f),b.ma.call(b.context||p))},b.timeout))}else Ae(a,b)}
function Ae(a,b){var c=b.format||"JSON";a=ye(a,b);var d=ze(a,b),e=!1,f,g=Be(a,function(a){if(!e){e=!0;f&&V(f);var d=se(a),g=null;if(d||400<=a.status&&500>a.status)g=Ce(c,a,b.Xa);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};var h=b.context||p;d?b.C&&b.C.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.fa&&b.fa.call(h,a,g)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.K&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),V(f),b.K.call(b.context||p,g))},b.timeout))}
function ye(a,b){b.Aa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.Va;if(d){d[c]&&delete d[c];d=d||{};var e=a.split("#",2);c=e[0];e=1<e.length?"#"+e[1]:"";var f=c.split("?",2);c=f[0];f=te(f[1]||"");for(var g in d)f[g]=d[g];a=sd(c,f)+e}return a}
function ze(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.w,g=Md("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.Ya||pd(J(a)[3]||null)&&!b.withCredentials&&pd(J(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.w&&b.w[g]||(f||(f={}),f[c]=d);f&&r(e)&&(e=te(e),cb(e,f),e=b.na&&"JSON"==b.na?JSON.stringify(e):rd(e));f=e||f&&!Za(f);!ve&&f&&"POST"!=b.method&&(ve=!0,R(Error("AJAX request with postData should use POST")));
return e}
function Ce(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?De(b):null)d={},C(b.getElementsByTagName("*"),function(a){d[a.tagName]=Ee(a)})}c&&Fe(d);
return d}
function Fe(a){if(ua(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Bb(a[b]);a[c]=d}else Fe(a[b])}}
function De(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ee(a){var b="";C(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Ge(a,b){b.method="POST";b.w||(b.w={});Ae(a,b)}
function Be(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Od(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=re();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=we(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var He={},Ie=0;function Je(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Sa,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a=Jb("IFRAME",{src:'javascript:"data:text/html,<body><img src=\\"'+a+'\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a)):e?Be(a,b,"POST",e,d):P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Be(a,b,"GET","",d):Ke(a,b))}
function Ke(a,b){var c=new Image,d=""+Ie++;He[d]=c;c.onload=c.onerror=function(){b&&He[d]&&b();delete He[d]};
c.src=a}
;var Le={},Me=0;
function Ne(a,b,c,d,e,f){f=f||{};f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=Me)){e=a.stacktrace;c=a.columnNumber;d=v("window.location.href");if(r(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(Q){h="Not available",g=!0}try{var k=
a.fileName||a.filename||a.sourceURL||p.$googDebugFname||d}catch(Q){k="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);if(!(Le[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){k=e;h={Va:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),
line:h,level:void 0===b?"ERROR":b,"client.name":f.name},w:{url:P("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);k&&(h.w.stack=k);for(var m in f)h.w["client."+m]=f[m];if(m=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var u in m)h.w[u]=m[u];Ae("/error_204",h);Le[a.message]=!0;Me++}}}
;var Oe=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};t("yt.msgs_",Oe,void 0);function Pe(a){Kd(Oe,arguments)}
;function Qe(){}
;function Re(){}
n(Re,Qe);function Se(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function Te(a){if(!isNaN(a)){var b=v("yt.scheduler.instance.cancelJob");b?b(a):V(a)}}
Re.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
Re.prototype.pause=function(){var a=v("yt.scheduler.instance.pause");a&&a()};
qa(Re);Re.getInstance();var Ue=[],Ve=!1;function We(){if("1"!=Wa(Nd(),"args","privembed")||!S("do_not_set_cookies_for_ads_on_youtube_nocookie")){var a=function(){Ve=!0;"google_ad_status"in window?O("DCLKSTAT",1):O("DCLKSTAT",2)};
ee("//static.doubleclick.net/instream/ad_status.js",a);Ue.push(Se(function(){Ve||"google_ad_status"in window||(ke("//static.doubleclick.net/instream/ad_status.js",a),O("DCLKSTAT",3))},1))}}
function Xe(){return parseInt(P("DCLKSTAT",0),10)}
;var Ye=0;t("ytDomDomGetNextId",v("ytDomDomGetNextId")||function(){return++Ye},void 0);var Ze={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function $e(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ze||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
$e.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
$e.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
$e.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ya=v("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Ya,void 0);var af=v("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",af,void 0);function bf(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Xa(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function cf(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=bf(a,b,c,d);if(e)return e;e=++af.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new $e(d);if(!Lb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new $e(b);
b.currentTarget=a;return c.call(a,b)};
g=Od(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ya[e]=[a,b,c,g,d];return e}
function df(a){a&&("string"==typeof a&&(a=[a]),C(a,function(a){if(a in Ya){var b=Ya[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ya[a]}}))}
;function ef(){if(null==v("_lact",window)){var a=parseInt(P("LACT"),10);a=isFinite(a)?z()-Math.max(a,0):-1;t("_lact",a,window);t("_fact",a,window);-1==a&&W();cf(document,"keydown",W);cf(document,"keyup",W);cf(document,"mousedown",W);cf(document,"mouseup",W);Xd("page-mouse",W);Xd("page-scroll",W);Xd("page-resize",W)}}
function W(){null==v("_lact",window)&&ef();var a=z();t("_lact",a,window);-1==v("_fact",window)&&t("_fact",a,window);(a=v("ytglobal.ytUtilActivityCallback_"))&&a()}
function ff(){var a=v("_lact",window);return null==a?-1:Math.max(z()-a,0)}
;function gf(a,b,c,d,e){this.f=a;this.i=b;this.h=c;this.g=d;this.b=e}
function hf(a){var b={};void 0!==a.f?b.trackingParams=a.f:(b.veType=a.i,null!=a.h&&(b.veCounter=a.h),null!=a.g&&(b.elementIndex=a.g));void 0!==a.b&&(b.dataElement=hf(a.b));return b}
var jf=1;function kf(){if(!lf&&!mf||!window.JSON)return null;try{var a=lf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))try{a=mf.get("yt-player-two-stage-token")}catch(b){}if(!r(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var mf,nf=new kd;mf=nf.isAvailable()?new gd(nf):null;var lf,of=new ld;lf=of.isAvailable()?new gd(of):null;function pf(){var a=P("ROOT_VE_TYPE",void 0);return a?new gf(void 0,a,void 0):null}
function qf(){var a=P("client-screen-nonce")||P("EVENT_ID");return a?a:null}
;function rf(a,b,c){Wb.set(""+a,b,c,"/","youtube.com",!1)}
;function sf(a){if(a){a=a.itct||a.ved;var b=v("yt.logging.screen.storeParentElement");a&&b&&b(new gf(a))}}
;function tf(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=pd(J(window.location.href)[3]||null);f&&e.push(f);f=pd(J(d)[3]||null);if(0<=Ba(e,f)||!f&&0==d.lastIndexOf("/",0))if(S("autoescape_tempdata_url")&&(e=document.createElement("a"),Cb(e,d),d=e.href),d){f=J(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
qf();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Ra(d).toString(36),e=b?rd(b):"",rf(d,e,h||5),sf(b))}else h="ST-"+Ra(d).toString(36),d=b?rd(b):"",rf(h,d,5),sf(b)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var u=void 0===u?window:u;c=u.location;a=sd(a,k)+m;a=a instanceof E?a:yb(a);c.href=wb(a)}return!0}
;t("yt.abuse.botguardInitialized",v("yt.abuse.botguardInitialized")||oe,void 0);t("yt.abuse.invokeBotguard",v("yt.abuse.invokeBotguard")||pe,void 0);t("yt.abuse.dclkstatus.checkDclkStatus",v("yt.abuse.dclkstatus.checkDclkStatus")||Xe,void 0);t("yt.player.exports.navigate",v("yt.player.exports.navigate")||tf,void 0);t("yt.util.activity.init",v("yt.util.activity.init")||ef,void 0);t("yt.util.activity.getTimeSinceActive",v("yt.util.activity.getTimeSinceActive")||ff,void 0);
t("yt.util.activity.setTimestamp",v("yt.util.activity.setTimestamp")||W,void 0);var uf={log_event:"events",log_interaction:"interactions"},vf=Object.create(null);vf.log_event="GENERIC_EVENT_LOGGING";vf.log_interaction="INTERACTION_LOGGING";var wf={},xf={},yf=0,X=v("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",X,void 0);var zf=v("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",zf,void 0);var Af=v("ytLoggingTransportDispatchedStats_")||{};t("ytLoggingTransportDispatchedStats_",Af,void 0);
t("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{},void 0);function Bf(a,b){xf[a.endpoint]=b;if(a.V){var c=a.V;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);zf[a.V.token]=d;c=Cf(a.endpoint,a.V.token)}else c=Cf(a.endpoint);c.push(a.payload);c.length>=(Number(S("web_logging_max_batch")||0)||20)?Df():Ef()}
function Df(){V(yf);if(!Za(X)){for(var a in X){var b=wf[a];if(!b){var c=xf[a];if(!c)continue;b=new c;wf[a]=b}c=void 0;var d=a,e=b,f=uf[d],g=Af[d]||{};Af[d]=g;b=Math.round(N());for(c in X[d]){var h=e.b;h={client:{hl:h.Da,gl:h.Ca,clientName:h.Ba,clientVersion:h.innertubeContextClientVersion}};P("DELEGATED_SESSION_ID")&&(h.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});h={context:h};h[f]=Cf(d,c);g.dispatchedEventCount=g.dispatchedEventCount||0;g.dispatchedEventCount+=h[f].length;h.requestTimeMs=b;
var k=zf[c];if(k)a:{var m=h,u=c;if(k.videoId)var Q="VIDEO";else if(k.playlistId)Q="PLAYLIST";else break a;m.credentialTransferTokenTargetId=k;m.context=m.context||{};m.context.user=m.context.user||{};m.context.user.credentialTransferTokens=[{token:u,scope:Q}]}delete zf[c];Ff(e,d,h)}c=g;d=b;c.previousDispatchMs&&(b=d-c.previousDispatchMs,e=c.diffCount||0,c.averageTimeBetweenDispatchesMs=e?(c.averageTimeBetweenDispatchesMs*e+b)/(e+1):b,c.diffCount=e+1);c.previousDispatchMs=d;delete X[a]}Za(X)||Ef()}}
function Ef(){V(yf);yf=T(Df,P("LOGGING_BATCH_TIMEOUT",1E4))}
function Cf(a,b){b||(b="");X[a]=X[a]||{};X[a][b]=X[a][b]||[];return X[a][b]}
;function Gf(a,b,c,d){var e=Hf,f={};f.eventTimeMs=Math.round(c||N());f[a]=b;f.context={lastActivityMs:String(c?-1:ff())};Bf({endpoint:"log_event",payload:f,V:d},e)}
;function If(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function Hf(a){this.b=a||{innertubeApiKey:Md("INNERTUBE_API_KEY"),innertubeApiVersion:Md("INNERTUBE_API_VERSION"),Ba:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Md("INNERTUBE_CONTEXT_CLIENT_VERSION"),Da:Md("INNERTUBE_CONTEXT_HL"),Ca:Md("INNERTUBE_CONTEXT_GL"),Ea:Md("INNERTUBE_HOST_OVERRIDE")||""}}
function Ff(a,b,c){var d={};!P("VISITOR_DATA")&&.01>Math.random()&&R(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":P("VISITOR_DATA","")},method:"POST",w:c,na:"JSON",K:function(){d.K()},
ma:d.K,C:function(a,b){d.C&&d.C(b)},
ab:function(a){d.C&&d.C(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
Za:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f=Xb();f&&(e.headers.Authorization=f,e.headers["X-Goog-AuthUser"]=P("SESSION_INDEX",0));var g="",h=a.b.Ea;h&&(g=h);f&&!g&&(e.headers["x-origin"]=window.location.origin);a=""+g+If(a.b.innertubeApiVersion,b,c)+"?alt=json&key="+a.b.innertubeApiKey;S("use_fetch_for_op_xhr")?xe(a,e):Ge(a,e)}
;function Jf(a,b,c){Kf({attachChild:{csn:a,parentVisualElement:hf(b),visualElements:[hf(c)]}})}
function Kf(a){var b=Hf;a.eventTimeMs=Math.round(N());a.lactMs=ff();Bf({endpoint:"log_interaction",payload:a},b)}
;function Lf(a){a=a||{};this.url=a.url||"";this.args=a.args||ab(Mf);this.assets=a.assets||{};this.attrs=a.attrs||ab(Nf);this.params=a.params||ab(Of);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Mf={enablejsapi:1},Nf={},Of={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Pf(a){a instanceof Lf||(a=new Lf(a));return a}
function Qf(a){var b=new Lf,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==ra(d)?ab(d):d}return b}
;function Rf(){G.call(this);this.b=[]}
n(Rf,G);Rf.prototype.l=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.Wa)}G.prototype.l.call(this)};var Sf=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Tf(a){a=a||"";if(window.spf){var b=a.match(Sf);spf.style.load(a,b?b[1]:"",void 0)}else Uf(a)}
function Uf(a){var b=Vf(a),c=document.getElementById(b),d=c&&Rd(c,"loaded");d||c&&!d||(c=Wf(a,b,function(){Rd(c,"loaded")||(Pd(c),$d(b),T(y(ae,b),0))}))}
function Wf(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Mb(a);Db(d,a,"stylesheet");(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Vf(a){var b=document.createElement("A");a=zb(a);Cb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Ra(b)}
;var Xf=v("ytLoggingLatencyUsageStats_")||{};t("ytLoggingLatencyUsageStats_",Xf,void 0);var Yf=0;function Zf(a){Xf[a]=Xf[a]||{count:0};var b=Xf[a];b.count++;b.time=N();Yf||(Yf=Se($f,0));return 10<b.count?(11==b.count&&Ne(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function $f(){var a=N(),b;for(b in Xf)6E4<a-Xf[b].time&&delete Xf[b];Yf=0}
;function ag(a,b){this.version=a;this.args=b}
;function bg(a){this.topic=a}
bg.prototype.toString=function(){return this.topic};var cg=v("ytPubsub2Pubsub2Instance")||new I;I.prototype.subscribe=I.prototype.subscribe;I.prototype.unsubscribeByKey=I.prototype.D;I.prototype.publish=I.prototype.G;I.prototype.clear=I.prototype.clear;t("ytPubsub2Pubsub2Instance",cg,void 0);t("ytPubsub2Pubsub2SubscribedKeys",v("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);t("ytPubsub2Pubsub2TopicToKeys",v("ytPubsub2Pubsub2TopicToKeys")||{},void 0);t("ytPubsub2Pubsub2IsAsync",v("ytPubsub2Pubsub2IsAsync")||{},void 0);
t("ytPubsub2Pubsub2SkipSubKey",null,void 0);function dg(a,b){var c=v("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var Y=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function eg(){var a=P("TIMING_TICK_EXPIRATION");a||(a={},O("TIMING_TICK_EXPIRATION",a));return a}
function fg(){var a=eg(),b;for(b in a)Te(a[b]);O("TIMING_TICK_EXPIRATION",{})}
;function gg(a,b){ag.call(this,1,arguments)}
n(gg,ag);function hg(a,b){ag.call(this,1,arguments)}
n(hg,ag);var ig=new bg("aft-recorded"),jg=new bg("timing-sent");var kg=z().toString();var og={vc:!0},pg={ad_allowed:"adTypesAllowed",ad_at:"adType",ad_cpn:"adClientPlaybackNonce",ad_docid:"adVideoId",yt_ad_an:"adNetworks",p:"httpProtocol",t:"transportProtocol",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",docid:"videoId",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",nr:"webInfo.navigationReason",ncnp:"webInfo.nonPreloadedNodeCount",paused:"playerInfo.isPausedOnLoad",fmt:"playerInfo.itag",yt_pl:"watchInfo.isPlaylist",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",
st:"serverTimeMs",vph:"viewportHeight",vpw:"viewportWidth",yt_vis:"isVisible"},qg="ap c cver ei srt yt_fss yt_li ba plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt pc prerender psc rc start yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),rg="isNavigation isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber isVisible watchInfo.isPlaylist".split(" "),sg=!1;
function tg(a){if("_"!=a[0]){var b=a;Y.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),Y.mark(b))}b=ug();var c=N();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;b=eg();if(c=b[a])Te(c),b[a]=0;vg()["tick_"+a]=void 0;N();S("csi_on_gel")?(b=wg(),"_start"==a?Zf("baseline_"+b)||Gf("latencyActionBaselined",{clientActionNonce:b},void 0,void 0):Zf("tick_"+a+"_"+b)||Gf("latencyActionTicked",{tickName:a,clientActionNonce:b},void 0,void 0),a=!0):a=!1;if(a=!a)a=!v("yt.timing.pingSent_");if(a&&(b=
Md("TIMING_ACTION"),a=ug(),v("ytglobal.timingready_")&&b&&a._start&&(b=xg()))){S("tighter_critical_section")&&!sg&&(dg(ig,new gg(Math.round(b-a._start),void 0)),sg=!0);b=!0;c=P("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&yg()}}
function zg(){var a=Ag().info.yt_lt="hot_bg";vg().info_yt_lt=a;if(S("csi_on_gel"))if("yt_lt"in pg){var b={},c=pg.yt_lt;0<=Ba(rg,c)&&(a=!!a);c=c.split(".");for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=wg();c=Object.keys(b).join("");Zf("info_"+c+"_"+a)||(b.clientActionNonce=a,Gf("latencyActionInfo",b,void 0,void 0))}else 0<=Ba(qg,"yt_lt")||R(Error("Unknown label yt_lt logged with GEL CSI."))}
function xg(){var a=ug();if(a.aft)return a.aft;for(var b=P("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function yg(){fg();if(!S("csi_on_gel")){var a=ug(),b=Ag().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&w(a[d])){var e=d.slice(1);if(e in og){var f=Da(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=v("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))Bg(f,e),Cg(),Dg(),Eg(!1,void 0),P("TIMING_ACTION")&&O("PREVIOUS_ACTION",P("TIMING_ACTION")),O("TIMING_ACTION","")}else{var g=P("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:P("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+v("ytplayer.config.assets.js");(k=Y.getEntriesByName?Y.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=xg();Fg()&&"youtube"==g&&(zg(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=N();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=v("ytdebug.logTiming"))&&a(f,b);Bg(f,e,void 0);dg(jg,new hg(b.aft+(h||0),void 0))}}}
var Dg=x(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||pa,Y);
function Bg(a,b,c){if(S("debug_csi_data")){var d=v("yt.timing.csiData");d||(d=[],t("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}d="";for(var e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var f=void 0===f?"":f;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,f)||Je(a,void 0,void 0,void 0,f)}catch(g){Je(a,void 0,void 0,void 0,f)}}else Je(a);Eg(!0,c)}
function wg(){var a=Ag().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=z();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(kg)for(b=1,c=0;c<kg.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^kg.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");Ag().nonce=a}return a}
function ug(){return Ag().tick}
function vg(){var a=Ag();"gel"in a||(a.gel={});return a.gel}
function Ag(){return v("ytcsi.data_")||Cg()}
function Cg(){var a={tick:{},info:{}};t("ytcsi.data_",a,void 0);return a}
function Eg(a,b){t("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Fg(){var a=ug(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Ag().info.yt_pvis}
;function Gg(a,b){G.call(this);this.m=this.R=a;this.I=b;this.u=!1;this.f={};this.O=this.H=null;this.A=new I;lc(this,y(mc,this.A));this.i={};this.M=this.P=this.h=this.Z=this.b=null;this.L=!1;this.j=this.F=null;this.S={};this.ra=["onReady"];this.Y=null;this.ha=NaN;this.N={};Hg(this);this.U("WATCH_LATER_VIDEO_ADDED",x(this.Ga,this));this.U("WATCH_LATER_VIDEO_REMOVED",x(this.Ha,this));this.U("onAdAnnounce",x(this.ua,this));this.sa=new Rf(this);lc(this,y(mc,this.sa))}
n(Gg,G);l=Gg.prototype;
l.ea=function(a){if(!this.g){this.Z=a;this.b=Qf(a);this.h=this.b.attrs.id||this.h;"video-player"==this.h&&(this.h=this.I,this.b.attrs.id=this.I);this.m.id==this.h&&(this.h+="-player",this.b.attrs.id=this.h);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.I;this.P||(this.P=Ig(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.m.style.width=Pb(Number(a)||a);if(a=this.b.attrs.height)this.m.style.height=Pb(Number(a)||a);Jg(this);
this.u&&Kg(this)}};
l.xa=function(){return this.Z};
function Kg(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function Lg(a){var b=!0,c=Mg(a);c&&a.b&&(a=a.b,b=Rd(c,"version")==a.assets.js);return b&&!!v("yt.player.Application.create")}
function Jg(a){if(!a.g&&!a.L){var b=Lg(a);if(b&&"html5"==(Mg(a)?"html5":null))a.M="html5",a.u||a.X();else if(Ng(a),a.M="html5",b&&a.j)a.R.appendChild(a.j),a.X();else{a.b.loaded=!0;var c=!1;a.F=x(function(){c=!0;var a=Qf(this.b);v("yt.player.Application.create")(this.R,a);this.X()},a);
a.L=!0;b?a.F():(ee(a.b.assets.js,a.F),Tf(a.b.assets.css),Og(a)&&!c&&t("yt.player.Application.create",null,void 0))}}}
function Mg(a){var b=Gb(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
l.X=function(){if(!this.g){var a=Mg(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b){if(this.L=!1,!a.isNotServable||!a.isNotServable(this.b.args.video_id)){Hg(this);this.u=!0;a=Mg(this);a.addEventListener&&(this.H=Pg(this,a,"addEventListener"));a.removeEventListener&&(this.O=Pg(this,a,"removeEventListener"));b=a.getApiInterface();b=b.concat(a.getInternalApiInterface());for(var c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=Pg(this,a,d))}for(var e in this.i)this.H(e,
this.i[e]);Kg(this);this.P&&this.P(this.f);this.A.G("onReady",this.f)}}else this.ha=T(x(this.X,this),50)}};
function Pg(a,b,c){var d=b[c];return function(){try{return a.Y=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.Y=e,R(e,"WARNING",void 0,void 0,void 0))}}}
function Hg(a){a.u=!1;if(a.O)for(var b in a.i)a.O(b,a.i[b]);for(var c in a.N)V(parseInt(c,10));a.N={};a.H=null;a.O=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=x(a.U,a);a.f.removeEventListener=x(a.Na,a);a.f.destroy=x(a.dispose,a);a.f.getLastError=x(a.ya,a);a.f.getPlayerType=x(a.za,a);a.f.getCurrentVideoConfig=x(a.xa,a);a.f.loadNewVideoConfig=x(a.ea,a);a.f.isReady=x(a.Fa,a)}
l.Fa=function(){return this.u};
l.U=function(a,b){var c=Ig(this,b);if(c){if(!(0<=Ba(this.ra,a)||this.i[a])){var d=Qg(this,a);this.H&&this.H(a,d)}this.A.subscribe(a,c);"onReady"==a&&this.u&&T(y(c,this.f),0)}};
l.Na=function(a,b){if(!this.g){var c=Ig(this,b);c&&$c(this.A,a,c)}};
function Ig(a,b){var c=b;if("string"==typeof b){if(a.S[b])return a.S[b];c=function(){var a=v(b);a&&a.apply(p,arguments)};
a.S[b]=c}return c?c:null}
function Qg(a,b){var c="ytPlayer"+b+a.I,d=x(function(a){var c=this.b&&this.b.args&&this.b.args.fflags;if(c&&0>c.indexOf("use_html5_player_event_timeout=true"))this.A.G(b,a);else{var d=T(x(function(){if(!this.g){this.A.G(b,a);var c=this.N,e=String(d);e in c&&delete c[e]}},this),0);
$a(this.N,String(d))}},a);
a.i[b]=c;p[c]=d;return c}
l.ua=function(a){$d("a11y-announce",a)};
l.Ga=function(a){$d("WATCH_LATER_VIDEO_ADDED",a)};
l.Ha=function(a){$d("WATCH_LATER_VIDEO_REMOVED",a)};
l.za=function(){return this.M||(Mg(this)?"html5":null)};
l.ya=function(){return this.Y};
function Ng(a){tg("dcp");a.cancel();Hg(a);a.M=null;a.b&&(a.b.loaded=!1);var b=Mg(a);b&&(Lg(a)||!Og(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.R;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.F&&ke(this.b.assets.js,this.F);V(this.ha);this.L=!1};
l.l=function(){Ng(this);if(this.j&&this.b&&this.j.destroy)try{this.j.destroy()}catch(b){R(b)}this.S=null;for(var a in this.i)p[this.i[a]]=null;this.Z=this.b=this.f=null;delete this.R;delete this.m;G.prototype.l.call(this)};
function Og(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Rg={},Sg="player_uid_"+(1E9*Math.random()>>>0);function Tg(a){var b="player";b=r(b)?Gb(b):b;a=Pf(a);var c=Sg+"_"+(b[va]||(b[va]=++wa)),d=Rg[c];if(d)return d.ea(a),d.f;d=new Gg(b,c);Rg[c]=d;$d("player-added",d.f);lc(d,y(Ug,d));T(function(){d.ea(a)},0);
return d.f}
function Ug(a){delete Rg[a.I]}
;function Vg(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Wg(a,b,c){r(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Xg(a)}
function Xg(a,b,c){if(ua(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Yg(a,b,c,d){if(ua(a)&&!w(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};r(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function Zg(a){var b=a.video_id||a.videoId;if(r(b)){var c=kf()||{},d=kf()||{};q(void 0)?d[b]=void 0:delete d[b];var e=z()+3E5,f=mf;if(f&&window.JSON){r(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function $g(a){G.call(this);this.b=a;this.b.subscribe("command",this.oa,this);this.f={};this.i=!1}
A($g,G);l=$g.prototype;l.start=function(){this.i||this.g||(this.i=!0,ah(this.b,"RECEIVING"))};
l.oa=function(a,b,c){if(this.i&&!this.g){var d=b||{};switch(a){case "addEventListener":r(d.event)&&(a=d.event,a in this.f||(c=x(this.Pa,this,a),this.f[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":r(d.event)&&bh(this,d.event);break;default:this.h.isReady()&&this.h[a]&&(b=ch(a,b||{}),c=this.h.handleExternalCall(a,b,c||null),(c=dh(a,c))&&this.i&&!this.g&&ah(this.b,a,c))}}};
l.Pa=function(a,b){this.i&&!this.g&&ah(this.b,a,this.ba(a,b))};
l.ba=function(a,b){if(null!=b)return{value:b}};
function bh(a,b){b in a.f&&(a.removeEventListener(b,a.f[b]),delete a.f[b])}
l.l=function(){var a=this.b;a.g||$c(a.b,"command",this.oa,this);this.b=null;for(var b in this.f)bh(this,b);$g.o.l.call(this)};function eh(a,b){$g.call(this,b);this.h=a;this.start()}
A(eh,$g);eh.prototype.addEventListener=function(a,b){this.h.addEventListener(a,b)};
eh.prototype.removeEventListener=function(a,b){this.h.removeEventListener(a,b)};
function ch(a,b){switch(a){case "loadVideoById":return b=Xg(b),Zg(b),[b];case "cueVideoById":return b=Xg(b),Zg(b),[b];case "loadVideoByPlayerVars":return Zg(b),[b];case "cueVideoByPlayerVars":return Zg(b),[b];case "loadPlaylist":return b=Yg(b),Zg(b),[b];case "cuePlaylist":return b=Yg(b),Zg(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function dh(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
eh.prototype.ba=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return eh.o.ba.call(this,a,b)};
eh.prototype.l=function(){eh.o.l.call(this);delete this.h};function fh(a,b,c,d){G.call(this);this.f=b||null;this.u="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.F=!!a;this.m=x(this.A,this);window.addEventListener("message",this.m)}
n(fh,G);fh.prototype.A=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.f&&a.source!=this.f)&&r(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.F&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.u=a.origin);this.f=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Ba(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
fh.prototype.sendMessage=function(a,b){var c=b||this.f;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=wc(a);c.postMessage(d,this.u)}catch(e){R(e,"WARNING")}}};
fh.prototype.l=function(){window.removeEventListener("message",this.m);G.prototype.l.call(this)};function gh(a,b,c){fh.call(this,a,b,c||P("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(gh,fh);function hh(){var a=this.g=new gh(!!P("WIDGET_ID_ENFORCE")),b=x(this.Ja,this);a.i=b;a.j=null;this.g.channel="widget";if(a=P("WIDGET_ID"))this.g.sessionId=a;this.h=[];this.j=!1;this.i={}}
l=hh.prototype;l.Ja=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,ih(this,a)),this.i[a]=!0)):this.qa(a,b,c)};
l.qa=function(){};
function ih(a,b){return x(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.wa=function(){this.j=!0;this.sendMessage("initialDelivery",this.ca());this.sendMessage("onReady");C(this.h,this.pa,this);this.h=[]};
l.ca=function(){return null};
function jh(a,b){a.sendMessage("infoDelivery",b)}
l.pa=function(a){this.j?this.g.sendMessage(a):this.h.push(a)};
l.sendMessage=function(a,b){this.pa({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.g=null};function kh(a){hh.call(this);this.b=a;this.f=[];this.addEventListener("onReady",x(this.Ia,this));this.addEventListener("onVideoProgress",x(this.Ta,this));this.addEventListener("onVolumeChange",x(this.Ua,this));this.addEventListener("onApiChange",x(this.Oa,this));this.addEventListener("onPlaybackQualityChange",x(this.Qa,this));this.addEventListener("onPlaybackRateChange",x(this.Ra,this));this.addEventListener("onStateChange",x(this.Sa,this))}
A(kh,hh);l=kh.prototype;l.qa=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&Vg(a)){var d=b;if(ua(d[0])&&!w(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Xg.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Wg.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Yg.apply(window,d)}d=e}Zg(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);Vg(a)&&jh(this,this.ca())}};
l.Ia=function(){var a=x(this.wa,this);this.g.b=a};
l.addEventListener=function(a,b){this.f.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ca=function(){if(!this.b)return null;var a=this.b.getApiInterface();Fa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(k){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=z()/1E3;return b};
l.Sa=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());jh(this,a)};
l.Qa=function(a){jh(this,{playbackQuality:a})};
l.Ra=function(a){jh(this,{playbackRate:a})};
l.Oa=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.b.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.Ua=function(){jh(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.Ta=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:z()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());jh(this,a)};
l.dispose=function(){kh.o.dispose.call(this);for(var a=0;a<this.f.length;a++){var b=this.f[a];this.b.removeEventListener(b.eventType,b.listener)}this.f=[]};function lh(){G.call(this);this.b=new I;lc(this,y(mc,this.b))}
A(lh,G);lh.prototype.subscribe=function(a,b,c){return this.g?0:this.b.subscribe(a,b,c)};
lh.prototype.D=function(a){return this.g?!1:this.b.D(a)};
lh.prototype.j=function(a,b){this.g||this.b.G.apply(this.b,arguments)};function mh(a,b,c){lh.call(this);this.f=a;this.h=b;this.i=c}
A(mh,lh);function ah(a,b,c){if(!a.g){var d=a.f;d.g||a.h!=d.b||(a={id:a.i,command:b},c&&(a.data=c),d.b.postMessage(wc(a),d.h))}}
mh.prototype.l=function(){this.h=this.f=null;mh.o.l.call(this)};function nh(a,b,c){G.call(this);this.b=a;this.h=c;this.i=cf(window,"message",x(this.j,this));this.f=new mh(this,a,b);lc(this,y(mc,this.f))}
A(nh,G);nh.prototype.j=function(a){var b;if(b=!this.g)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,r(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.f,c.g||c.j("command",b.command,b.data,a.origin))}};
nh.prototype.l=function(){df(this.i);this.b=null;nh.o.l.call(this)};function oh(){var a=ph()?"//googleads.g.doubleclick.net/pagead/id?exp=nomnom":"//googleads.g.doubleclick.net/pagead/id",b=ab(qh);return new H(function(c,d){b.C=function(a){se(a)?c(a):d(new rh("Request failed, status="+a.status,"net.badstatus",a))};
b.onError=function(a){d(new rh("Unknown request error","net.unknown",a))};
b.K=function(a){d(new rh("Request timed out","net.timeout",a))};
Ae(a,b)})}
function rh(a,b){B.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(rh,B);function sh(a){this.f=void 0===a?null:a;this.g=0;this.b=null}
sh.prototype.then=function(a,b,c){return this.f?this.f.then(a,b,c):1===this.g&&a?(a=a.call(c,this.b),Dc(a)?a:th(a)):2===this.g&&b?(a=b.call(c,this.b),Dc(a)?a:uh(a)):this};
sh.prototype.getValue=function(){return this.b};
Cc(sh);function uh(a){var b=new sh;a=void 0===a?null:a;b.g=2;b.b=void 0===a?null:a;return b}
function th(a){var b=new sh;a=void 0===a?null:a;b.g=1;b.b=void 0===a?null:a;return b}
;function vh(a){B.call(this,a.message||a.description||a.name);this.isMissing=a instanceof wh;this.isTimeout=a instanceof rh&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Rc}
n(vh,B);vh.prototype.name="BiscottiError";function wh(){B.call(this,"Biscotti ID is missing from server")}
n(wh,B);wh.prototype.name="BiscottiMissingError";var qh={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},xh=null;function yh(){if("1"===Wa(Nd(),"args","privembed"))return Ic(Error("Biscotti ID is not available in private embed mode"));xh||(xh=Qc(oh().then(zh),function(a){return Ah(2,a)}));
return xh}
function ph(){var a;(a=!!Wa(window,"settings","experiments","flags","html5_serverside_pagead_id_sets_cookie"))||(a=!!P("EXP_HTML5_SERVERSIDE_PAGEAD_ID_SETS_COOKIE",!1));return a||!!S("html5_serverside_pagead_id_sets_cookie")}
function zh(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new wh;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new wh;a=a.id;Bh(a);xh=th(a);Ch(18E5,2);return a}
function Ah(a,b){var c=new vh(b);Bh("");xh=uh(c);0<a&&Ch(12E4,a-1);throw c;}
function Ch(a,b){T(function(){Qc(oh().then(zh,function(a){return Ah(b,a)}),pa)},a)}
function Bh(a){t("yt.ads.biscotti.lastId_",a,void 0)}
function Dh(){try{var a=v("yt.ads.biscotti.getId_");return a?a():yh()}catch(b){return Ic(b)}}
;function Eh(a){B.apply(this,arguments)}
n(Eh,B);Eh.prototype.name="MutsuError";function Fh(){var a=new Eh("ID is missing"),b=new Eh("Timeout"),c=null,d=!1;Jd(function(){c=Hd();d=!0});
if(d)return c?th(c):uh(a);var e=new H(function(b,c){Jd(function(){var d=Hd();d?b(d):c(a)})}),f=nd().then(function(){return Ic(b)});
return Oc(Lc([e,f]),function(){return f.cancel()})}
;function Gh(a){if("1"!==Wa(Nd(),"args","privembed")){a&&!v("yt.ads.biscotti.getId_")&&t("yt.ads.biscotti.getId_",yh,void 0);try{var b=Dh();if(S("enable_mutsu")){v("yt.ads.mutsu.getId_")||t("yt.ads.mutsu.getId_",Fh,void 0);try{var c=v("yt.ads.mutsu.getId_")()}catch(d){c=Ic(d)}}else c=Ic(new Eh("unimplemented"));Mc([b,c]).then(function(a){var b=a[0];a=a[1];if(b.aa||a.aa){b=b.value;a=a.value;var c={};c.dt=Qb;c.flash=zd||"0";a:{try{var d=window.top.location.href}catch(gb){d=2;break a}d=null!=d?d==window.document.location.href?
0:1:2}d=(c.frm=d,c);d.u_tz=-(new Date).getTimezoneOffset();var h=void 0===h?F:h;try{var k=h.history.length}catch(gb){k=0}d.u_his=k;d.u_java=!!F.navigator&&"unknown"!==typeof F.navigator.javaEnabled&&!!F.navigator.javaEnabled&&F.navigator.javaEnabled();F.screen&&(d.u_h=F.screen.height,d.u_w=F.screen.width,d.u_ah=F.screen.availHeight,d.u_aw=F.screen.availWidth,d.u_cd=F.screen.colorDepth);F.navigator&&F.navigator.plugins&&(d.u_nplug=F.navigator.plugins.length);F.navigator&&F.navigator.mimeTypes&&(d.u_nmime=
F.navigator.mimeTypes.length);d.ca_type=yd?"flash":"image";if(S("enable_server_side_search_pyv")||S("enable_server_side_mweb_search_pyv")){k=window;try{var m=k.screenX;var u=k.screenY}catch(gb){}try{var Q=k.outerWidth;var lg=k.outerHeight}catch(gb){}try{var mg=k.innerWidth;var ng=k.innerHeight}catch(gb){}m=[k.screenLeft,k.screenTop,m,u,k.screen?k.screen.availWidth:void 0,k.screen?k.screen.availTop:void 0,Q,lg,mg,ng];u=window.top;try{if(u.document&&!u.document.body)var U=new Fb(-1,-1);else{var ya=
(u||window).document,vd="CSS1Compat"==ya.compatMode?ya.documentElement:ya.body;U=(new Fb(vd.clientWidth,vd.clientHeight)).round()}var za=U}catch(gb){za=new Fb(-12245933,-12245933)}U={};ya=0;p.SVGElement&&p.document.createElementNS&&(ya|=1);U.bc=ya;U.bih=za.height;U.biw=za.width;U.brdim=m.join();za=(U.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[Ob.webkitVisibilityState||Ob.mozVisibilityState||Ob.visibilityState||""]||0,U.wgl=!!F.WebGLRenderingContext,U);for(var wd in za)d[wd]=za[wd]}void 0!==
b&&(d.bid=b);void 0!==a&&(d.mutsuid=a);d.bsq=Hh++;Ge("//www.youtube.com/ad_data_204",{Aa:!1,w:d})}});
T(Gh,18E5)}catch(d){R(d)}}}
var Hh=0;var Z=v("ytglobal.prefsUserPrefsPrefs_")||{};t("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Ih(){this.b=P("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=Wb.get(""+this.b,void 0)){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
Ih.prototype.get=function(a,b){Jh(a);Kh(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
Ih.prototype.set=function(a,b){Jh(a);Kh(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
Ih.prototype.remove=function(a){Jh(a);Kh(a);delete Z[a]};
Ih.prototype.clear=function(){for(var a in Z)delete Z[a]};
function Kh(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Jh(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Lh(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
qa(Ih);var Mh=null,Nh=null,Oh=null,Ph={};function Qh(a){Gf(a.payload_name,a.payload,void 0,void 0)}
function Rh(a){var b=a.id;a=a.ve_type;var c=jf++;a=new gf(void 0,a,c,void 0,void 0);Ph[b]=a;b=qf();c=pf();b&&c&&Jf(b,c,a)}
function Sh(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(O("client-screen-nonce",b),O("ROOT_VE_TYPE",a),a=pf()))for(var c in Ph){var d=Ph[c];d&&Jf(b,a,d)}}
function Th(a){Ph[a.id]=new gf(a.tracking_params)}
function Uh(a){var b=qf();a=Ph[a.id];b&&a&&(S("interaction_click_on_gel_web")?Gf("visualElementGestured",{csn:b,ve:hf(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"}):Kf({click:{csn:b,visualElement:hf(a)}}))}
function Vh(a){a=a.ids;var b=qf();if(b)for(var c=0;c<a.length;c++){var d=Ph[a[c]];d&&Gf("visualElementShown",{csn:b,ve:hf(d),eventType:1})}}
function Wh(){var a=Mh;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;t("yt.setConfig",O,void 0);t("yt.config.set",O,void 0);t("yt.setMsg",Pe,void 0);t("yt.msgs.set",Pe,void 0);t("yt.logging.errors.log",Ne,void 0);
t("writeEmbed",function(){var a=P("PLAYER_CONFIG",void 0);Gh(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=P("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);P("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Zg(a.args);Mh=a=Tg(a);a.addEventListener("onScreenChanged",Sh);a.addEventListener("onLogClientVeCreated",Rh);a.addEventListener("onLogServerVeCreated",Th);a.addEventListener("onLogToGel",Qh);
a.addEventListener("onLogVeClicked",Uh);a.addEventListener("onLogVesShown",Vh);a.addEventListener("onReady",Wh);b=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Oh=new kh(a):P("ENABLE_POST_API")&&r(b)&&r(c)&&(Nh=new nh(window.parent,b,c),Oh=new eh(a,Nh.f));P("BG_P")&&(P("BG_I")||P("BG_IU"))&&me();We()},void 0);
t("yt.www.watch.ads.restrictioncookie.spr",function(a){Je(a+"mac_204?action_fcts=1");return!0},void 0);
var Xh=Od(function(){tg("ol");var a=Ih.getInstance(),b=!!((Lh("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&pc(document.body,"exp-invert-logo"))if(c&&!pc(document.body,"inverted-hdpi")){var d=document.body;d.classList?d.classList.add("inverted-hdpi"):pc(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")}else!c&&pc(document.body,"inverted-hdpi")&&qc();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Lh(b)||0;d=c?d|67108864:d&-67108865;
0==d?delete Z[b]:Z[b]=d.toString(16).toString();a=a.b;c=[];for(var e in Z)c.push(e+"="+encodeURIComponent(String(Z[e])));rf(a,c.join("&"),63072E3)}}),Yh=Od(function(){var a=Mh;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();P("PL_ATT")&&(le=null);a=0;for(var b=Ue.length;a<b;a++)Te(Ue[a]);Ue.length=0;je("//static.doubleclick.net/instream/ad_status.js");Ve=!1;O("DCLKSTAT",0);nc(Oh,Nh);if(a=Mh)a.removeEventListener("onScreenChanged",Sh),a.removeEventListener("onLogClientVeCreated",Rh),a.removeEventListener("onLogServerVeCreated",Th),a.removeEventListener("onLogToGel",Qh),a.removeEventListener("onLogVeClicked",Uh),a.removeEventListener("onLogVesShown",Vh),a.removeEventListener("onReady",
Wh),a.destroy();Ph={}});
window.addEventListener?(window.addEventListener("load",Xh),window.addEventListener("unload",Yh)):window.attachEvent&&(window.attachEvent("onload",Xh),window.attachEvent("onunload",Yh));}).call(this);
