!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.VueI18n=e()}(this,function(){"use strict";function n(n,e){window.console&&(console.warn("[vue-i18n] "+n),e&&console.warn(e.stack))}function e(n){if(!l){var e=n.$watch("__watcher__",function(n){});l=n._watchers[0].constructor,e()}return l}function t(n){return!c&&n&&n._data&&n._data.__ob__&&n._data.__ob__.dep&&(c=n._data.__ob__.dep.constructor),c}function r(n){return null===n||void 0===n}function o(n,e){function t(t){var r=arguments.length;return r?r>1?n.apply(e,arguments):n.call(e,t):n.call(e)}return t._length=n.length,t}function i(n){return null!==n&&"object"==typeof n}function a(n,e){return v.call(n,e)}function u(e,t){void 0===t&&(t={});var r=e.version&&Number(e.version.split(".")[0])||-1;if(u.installed)n("already installed.");else if(r<2)n("vue-i18n ("+u.version+") need to use Vue 2.0 or later (Vue: "+e.version+").");else{!function(n,e){var t=n.config.silent;n.config.silent=!0,F||(F=new n({data:{lang:e,locales:{}}}));n.config.silent=t}(e,"en"),s(e,F),p(e,F),b(e,F,"en"),N(e)}}var l,c,f,s=function(e,t){e.locale=function(e,r,o){if(void 0===r)return t.locales[e];null===r?(t.locales[e]=void 0,delete t.locales[e]):function(n,e,t){if("object"==typeof e)t(e);else{var r=e.call(this);if("function"==typeof r)if(r.resolved)t(r.resolved);else if(r.requested)r.pendingCallbacks.push(t);else{r.requested=!0;var o=r.pendingCallbacks=[t];r(function(n){r.resolved=n;for(var e=0,t=o.length;e<t;e++)o[e](n)},function(){t()})}else(function(n){return n&&"function"==typeof n.then})(r)&&r.then(function(n){t(n)},function(){t()}).catch(function(n){console.error(n),t()})}}(0,r,function(r){r?t.$set(t.locales,e,r):n("failed set `"+e+"` locale"),o&&o()})}},p=function(n,e){var t=n.prototype._init;n.prototype._init=function(n){var r=this;t.call(this,n),this.$parent||(this._$lang=e,this._langUnwatch=this._$lang.$watch("$data",function(n,e){r.$forceUpdate()},{deep:!0}))};var r=n.prototype._destroy;n.prototype._destroy=function(){!this.$parent&&this._langUnwatch&&(this._langUnwatch(),this._langUnwatch=null,this._$lang=null),r.apply(this,arguments)}},g=Object.prototype.toString,d="[object Object]",v=Object.prototype.hasOwnProperty,h=null,y=null,b=function(n,r,i){var a=e(r),u=t(r);Object.defineProperty(n.config,"lang",{enumerable:!0,configurable:!0,get:function(n,e){var t=new a(e,n,null,{lazy:!0});return function(){return t.dirty&&t.evaluate(),u&&u.target&&t.depend(),t.value}}(function(){return r.lang},r),set:o(function(n){r.lang=n},r)}),f=i,Object.defineProperty(n.config,"fallbackLang",{enumerable:!0,configurable:!0,get:function(){return f},set:function(n){f=n}}),Object.defineProperty(n.config,"missingHandler",{enumerable:!0,configurable:!0,get:function(){return h},set:function(n){h=n}}),Object.defineProperty(n.config,"i18nFormatter",{enumerable:!0,configurable:!0,get:function(){return y},set:function(n){y=n}})},_=/(%|)\{([0-9a-zA-Z_]+)\}/g,w=Object.create(null),m=0,$=1,k=2,j=3,A=0,O=4,C=5,P=6,U=7,V=8,x=[];x[A]={ws:[A],ident:[3,m],"[":[O],eof:[U]},x[1]={ws:[1],".":[2],"[":[O],eof:[U]},x[2]={ws:[2],ident:[3,m],0:[3,m],number:[3,m]},x[3]={ident:[3,m],0:[3,m],number:[3,m],ws:[1,$],".":[2,$],"[":[O,$],eof:[U,$]},x[O]={"'":[C,m],'"':[P,m],"[":[O,k],"]":[1,j],eof:V,else:[O,m]},x[C]={"'":[O,m],eof:V,else:[C,m]},x[P]={'"':[O,m],eof:V,else:[P,m]};var F,H=/^\s?(true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/,N=function(e){function t(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];var r=e.config.lang,o=e.config.fallbackLang;return 1===n.length?i(n[0])||Array.isArray(n[0])?n=n[0]:"string"==typeof n[0]&&(r=n[0]):2===n.length&&("string"==typeof n[0]&&(r=n[0]),(i(n[1])||Array.isArray(n[1]))&&(n=n[1])),{lang:r,fallback:o,params:n}}function u(n,e){return!(!n||!e)&&!r(y(n,e))}function l(t,o,i){if(!t)return null;var a=y(t,o);if(Array.isArray(a))return a;if(r(a)&&(a=t[o]),r(a))return null;if("string"!=typeof a)return n("Value of key '"+o+"' is not a string!"),null;if(a.indexOf("@:")>=0){var u=a.match(/(@:[\w|.]+)/g);for(var c in u){var f=u[c],s=l(t,f.substr(2),i);a=a.replace(f,s)}}return i?e.config.i18nFormatter?e.config.i18nFormatter.apply(null,[a].concat(i)):h(a,i):a}function c(e,t,o,i,a){var u=null;return u=l(e(t),i,a),r(u)?(u=l(e(o),i,a),r(u)?null:(n('Fall back to translate the keypath "'+i+'" with "'+o+'" language.'),u)):u}function f(t,o,i,a){return r(a)?(e.config.missingHandler?e.config.missingHandler.apply(null,[t,o,i]):n('Cannot translate the value of keypath "'+o+'". Use the value of keypath as default'),o):a}function s(n){return e.locale(n)}function p(n){return this.$options.locales[n]}function v(n,e){if(!n&&"string"!=typeof n)return null;var t=n.split("|");return e=function(n,e){return n=Math.abs(n),2===e?function(n){return n?n>1?1:0:1}(n):n?Math.min(n,2):0}(e,t.length),t[e]?t[e].trim():n}var h=function(n){return function(n){for(var e=[],t=arguments.length-1;t-- >0;)e[t]=arguments[t+1];return(e=1===e.length&&"object"==typeof e[0]?e[0]:{})&&e.hasOwnProperty||(e={}),n.replace(_,function(t,o,i,u){var l;return"{"===n[u-1]&&"}"===n[u+t.length]?i:(l=a(e,i)?e[i]:t,r(l)?"":l)})}}(),y=function(n){return function(n,e){if(!i(n))return null;var t=function(n){var e=w[n];return e||(e=function(n){var e,t,r,o,i,a,u,l=[],c=-1,f=A,s=0,p=[];for(p[$]=function(){void 0!==r&&(l.push(r),r=void 0)},p[m]=function(){void 0===r?r=t:r+=t},p[k]=function(){p[m](),s++},p[j]=function(){if(s>0)s--,f=O,p[m]();else{if(s=0,!1===(r=function(n){var e=n.trim();return("0"!==n.charAt(0)||!isNaN(n))&&(function(n){return H.test(n)}(e)?function(n){var e=n.charCodeAt(0);return e!==n.charCodeAt(n.length-1)||34!==e&&39!==e?n:n.slice(1,-1)}(e):"*"+e)}(r)))return!1;p[$]()}};null!=f;)if(c++,"\\"!==(e=n[c])||!function(){var e=n[c+1];if(f===C&&"'"===e||f===P&&'"'===e)return c++,t="\\"+e,p[m](),!0}()){if(o=function(n){if(void 0===n)return"eof";var e=n.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return n;case 95:case 36:case 45:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&e<=122||e>=65&&e<=90?"ident":e>=49&&e<=57?"number":"else"}(e),u=x[f],(i=u[o]||u.else||V)===V)return;if(f=i[0],(a=p[i[1]])&&(t=i[2],t=void 0===t?e:t,!1===a()))return;if(f===U)return l.raw=n,l}}(n))&&(w[n]=e),e}(e);if(function(n){if(null===n||void 0===n)return!0;if(Array.isArray(n)){if(n.length>0)return!1;if(0===n.length)return!0}else if(function(n){return g.call(n)===d}(n))for(var e in n)if(a(n,e))return!1;return!0}(t))return null;for(var r=t.length,o=n,u=0;u<r;){var l=o[t[u]];if(void 0===l){o=null;break}o=l,u++}return o}}();return e.t=function(n){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(!n)return"";var o=t.apply(void 0,e),i=o.lang;return f(i,n,null,c(s,i,o.fallback,n,o.params))},e.tc=function(n,t){for(var r=[],o=arguments.length-2;o-- >0;)r[o]=arguments[o+2];return v(e.t.apply(e,[n].concat(r)),t)},e.te=function(n){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];return u(s(t.apply(void 0,e).lang),n)},e.prototype.$t=function(n){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];if(!n)return"";var i=t.apply(void 0,e),a=i.lang,u=i.fallback,l=i.params,g=null;return this.$options.locales&&(g=c(o(p,this),a,u,n,l))?g:f(a,n,this,c(s,a,u,n,l))},e.prototype.$tc=function(n,e){for(var t=[],r=arguments.length-2;r-- >0;)t[r]=arguments[r+2];return"number"!=typeof e&&void 0!==e?n:v((o=this).$t.apply(o,[n].concat(t)),e);var o},e.prototype.$te=function(n){for(var e=[],r=arguments.length-1;r-- >0;)e[r]=arguments[r+1];var i=t.apply(void 0,e).lang,a=!1;return this.$options.locales&&(a=u(o(p)(i),n)),a||(a=u(s(i),n)),a},e.mixin({computed:{$lang:function(){return e.config.lang}}}),e};return u.version="5.0.3","undefined"!=typeof window&&window.Vue&&window.Vue.use(u),u});