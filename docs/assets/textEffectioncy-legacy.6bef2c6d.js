!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",h=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(r){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),c=new T(n||[]);return a(i,"_invoke",{value:P(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var p="suspendedStart",g="suspendedYield",v="executing",y="completed",m={};function w(){}function x(){}function b(){}var L={};s(L,u,(function(){return this}));var E=Object.getPrototypeOf,_=E&&E(E(N([])));_&&_!==o&&i.call(_,u)&&(L=_);var k=b.prototype=w.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(e,r){function n(o,a,c,u){var h=d(e[o],e,a);if("throw"!==h.type){var l=h.arg,s=l.value;return s&&"object"==t(s)&&i.call(s,"__await")?r.resolve(s.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(s).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(h.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function P(t,e,n){var o=p;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=S(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var h=d(t,e,n);if("normal"===h.type){if(o=n.done?y:g,h.arg===m)continue;return{value:h.arg,done:n.done}}"throw"===h.type&&(o=y,n.method="throw",n.arg=h.arg)}}}function S(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=d(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return x.prototype=b,a(k,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:x,configurable:!0}),x.displayName=s(b,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},j(O.prototype),s(O.prototype,h,(function(){return this})),n.AsyncIterator=O,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new O(f(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(k),s(k,l,"Generator"),s(k,u,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=N,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),h=i.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!h)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(h){return void r(h)}c.done?e(u):Promise.resolve(u).then(n,o)}System.register(["./_plugin-vue_export-helper-legacy.649209c3.js","./antdv-legacy.7bd4694a.js"],(function(t,n){"use strict";var o,i,a,c,u,h,l,s,f=document.createElement("style");return f.textContent=".chat-gpt[data-v-1c560ede]{padding:80px;width:33rem;height:43rem}.chat-gpt .chat-dialog[data-v-1c560ede]{position:relative;height:43rem;background:0/33rem url(../../public/img/chat-bg.png) no-repeat;overflow:hidden}.chat-gpt .chat-dialog .close-icon[data-v-1c560ede]{position:absolute;top:1rem;right:1rem;width:3.4rem;height:3.4rem}.chat-gpt .chat-dialog .close-icon img[data-v-1c560ede]{width:100%;height:100%}.chat-gpt .chat-dialog .chat-list[data-v-1c560ede]{display:flex;flex-direction:column;width:90%;margin:0 auto;margin-top:2rem;overflow:auto}.chat-gpt .chat-dialog .chat-list>div[data-v-1c560ede]{display:flex;margin-top:1rem}.chat-gpt .chat-dialog .chat-list>div>div[data-v-1c560ede]{max-width:19rem;padding:.6rem;opacity:.8;font-size:.9rem;font-family:FZLanTingHei-L-GBK;font-weight:400;color:#c5e7ff;text-align:start}.chat-gpt .chat-dialog .chat-list>div .odd[data-v-1c560ede]{align-self:flex-start;background:#435e6f;border-radius:0 16px 16px}.chat-gpt .chat-dialog .chat-list>div .even[data-v-1c560ede]{align-self:flex-end;background:#31b8c8;border-radius:16px 0 16px 16px}.chat-gpt .chat-dialog .chat-list>div img[data-v-1c560ede]{width:2rem;height:2rem;margin-right:1rem}.chat-gpt .chat-dialog .chat-list>div[data-v-1c560ede]:nth-of-type(odd){align-self:flex-start}.chat-gpt .chat-dialog .chat-list>div[data-v-1c560ede]:nth-of-type(even){align-self:flex-end}.chat-gpt .chat-tips[data-v-1c560ede]{display:flex;height:5.82rem;margin-top:1rem}.chat-gpt .chat-tips .gpt-icon[data-v-1c560ede],.chat-gpt .chat-tips .gpt-icon img[data-v-1c560ede]{height:100%}\n",document.head.appendChild(f),{setters:[function(t){o=t._},function(t){i=t.k,a=t.q,c=t.F,u=t.l,h=t.o,l=t.O,s=t.t}],execute:function(){var n={data:function(){return{textCount:0,timer:null,chatBaseList:["以今日5辆满电无人车，运输5小时能运完50吨货物的标准，已知每辆无人车运输1小时耗电10%，运输效率是多少，每辆无人车耗电多少？花费多长时间？","运输效率：50吨/5小时=10顿/小时，每辆无人车耗电：10%×5小时=50%，需花费5小时。","以现有运输效率前提下，再增加5辆无人运输车，完成共计150吨物资的运输任务，整体效率会提高到多少？每辆无人车耗电又是多少？共花费多长时间？","增加到10辆无人车，完成共计150吨物资运输任务，整体效率会提高到15顿/小时，每辆无人车耗电百分比是15%。运完150吨的话，总共要耗用1.5小时。","我来想想是否确认执行此调配操作？","您好，请您慎重考虑。我们将根据您的确认来决定是否执行此调配操作。","是"],chatList:[]}},mounted:function(){this.initGPT()},methods:{sleep:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;return new Promise((function(e){return setTimeout(e,t)}))},delayDo:function(t){var n,o=arguments,i=this;return(n=e().mark((function r(){var n,a,c,u;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=o.length>1&&void 0!==o[1]?o[1]:function(t){return console.log("数据：".concat(t))},a=o.length>2?o[2]:void 0,c=t.length,u=0;case 4:if(!(u<c)){e.next=11;break}return n(t[u],u),e.next=8,i.sleep(a[u]);case 8:u++,e.next=4;break;case 11:case"end":return e.stop()}}),r)})),function(){var t=this,e=arguments;return new Promise((function(o,i){var a=n.apply(t,e);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))})()},getChatContent:function(t,e){var r=this;this.timer=setInterval((function(){if(r.textCount++,r.textCount==t.length+1)return r.textCount=0,r.chatList.splice(e,1,{content:t,status:!1}),void clearInterval(r.timer);var n=t.substring(0,r.textCount);r.chatList.splice(e,1,{content:n,status:!0})}),200)},initGPT:function(){var t=this;this.delayDo(this.chatBaseList,(function(e,r){t.getChatContent(e,r)}),[16e3,11e3,16e3,16e3,5e3,7e3])}}},f={class:"chat-gpt"},d={id:"chat-dialog",class:"chat-dialog",ref:"chatDialogRef"},p={id:"chat-list",class:"chat-list",ref:"chatListRef"};t("default",o(n,[["render",function(t,e,r,n,o,g){return h(),i("div",f,[a("div",d,[a("div",p,[(h(!0),i(c,null,u(o.chatList,(function(t,e){return h(),i("div",{key:e},[a("div",{class:l(e%2==0?"odd":"even")},s(t.content),3)])})),128))],512)],512)])}],["__scopeId","data-v-1c560ede"]]))}}}))}();