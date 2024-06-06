!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,a=Object.create(o.prototype),c=new R(n||[]);return i(a,"_invoke",{value:N(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function w(){}function b(){}function x(){}var E={};f(E,u,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(Y([])));S&&S!==o&&a.call(S,u)&&(E=S);var k=x.prototype=w.prototype=Object.create(E);function T(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,r){function n(o,i,c,u){var l=p(e[o],e,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function N(t,e,n){var o=d;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=p(t,e,n);if("normal"===l.type){if(o=n.done?m:y,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function O(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function Y(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=x,i(k,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=f(x,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},T(j.prototype),f(j.prototype,l,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new j(h(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},T(k),f(k,s,"Generator"),f(k,u,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=Y,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:Y(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},n}function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}System.register(["./antdv-legacy.7bd4694a.js"],(function(t,n){"use strict";var o,a,i,c,u,l;return{setters:[function(t){o=t.r,a=t.k,i=t.a7,c=t.t,u=t.q,l=t.o}],execute:function(){var n=u("h1",null,"post方式读取stream的5种方式",-1),s=u("h1",null,"1、HTTP之SSE技术",-1),f=u("pre",null,null,-1),h=u("h1",null,"2、xhr的onDownloadProgress",-1),p=u("p",null,null,-1),d=u("h1",null,"3、fetch",-1),y=u("pre",null,'async function fetchStreamData(url) {\n  const response = await fetch(url, {\n    method: "POST",\n    headers: {\n      "Content-Type": "application/json",\n      Accept: "application/octet-stream",\n      Authorization: token,\n    },\n    body: JSON.stringify({\n      issue: "k8s是什么",\n    }),\n  });\n  const reader = response.body.getReader();\n  const decoder = new TextDecoder("utf-8");\n  let result = "";\n\n  // 逐块读取流数据\n  while (true) {\n    const { value, done } = await reader.read();\n    console.log(decoder.decode(value));\n    if (done) {\n      console.log("流式读取完成");\n      break;\n    }\n    const value1 = decoder.decode(value);\n    for (let index = 0; index < value1.length; index++) {\n      const element = value1[index];\n      setTimeout(() => {\n        // 使用TextDecoder将 Uint8Array 转换为字符串\n        text.value += element;\n      }, 1000);\n    }\n  }\n\n  return result;\n}\n    ',-1),v=u("h1",null,"4、getReader",-1),m=u("h1",null,"5、EventSource",-1),g=u("pre",null,'     var stream = new EventSource("/api/chat/stream");\n     stream.addEventListener("message", (e)=> {\n         console.log(e.data);\n     });\n    ',-1);t("default",{__name:"postReadStream",setup:function(t){new EventSource("/api/mrmax/helper").addEventListener("message",(function(t){console.log(t.data)}));var u=o("");function w(){var t;return t=e().mark((function t(r){var n,o,a,i,c,l,s,f,h,p;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(r,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/octet-stream",Authorization:"ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhaRzFwYmlJNk1Td2lZMjl0Y0dGdWVTSTZNU3dpWlhod0lqb3hOamd6T0RBME5Ea3pMQ0puYjJRaU9qQXNJbWxoZENJNk1UWTRNekU1T1RZNU15d2ljM1ZpSWpvaWVtOXVaMkpoYnk1amRXbEFiVzlpZG1semRHRXVZMjl0SW4wLlg0WHd1azVSRlBRMDZxaVlPY0VPdTF1Y2MxYzFreldvMDhUQklDM3hnb3c"},body:JSON.stringify({issue:"k8s是什么"})});case 2:n=t.sent,o=n.body.getReader(),a=new TextDecoder("utf-8"),i="";case 6:return t.next=9,o.read();case 9:if(c=t.sent,l=c.value,s=c.done,console.log(a.decode(l)),!s){t.next=16;break}return console.log("流式读取完成"),t.abrupt("break",26);case 16:f=a.decode(l),h=e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=f[p],setTimeout((function(){u.value+=r}),1e3);case 2:case"end":return t.stop()}}),t)})),p=0;case 19:if(!(p<f.length)){t.next=24;break}return t.delegateYield(h(),"t0",21);case 21:p++,t.next=19;break;case 24:t.next=6;break;case 26:return t.abrupt("return",i);case 27:case"end":return t.stop()}}),t)})),w=function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))},w.apply(this,arguments)}return function(t){return w.apply(this,arguments)}("https://maxcloud-api-test.spotmaxtech.com/api/mrmax/helper").then((function(t){console.log("流式读取的数据：",t)})).catch((function(t){console.error("获取数据失败：",t)})),function(t,e){return l(),a("div",null,[n,i(" "+c(u.value)+" ",1),s,f,h,p,d,y,v,m,g])}}})}}}))}();
