import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";import{k as n,q as o,F as d,l as _,o as c,O as u,t as f}from"./antdv.415263d7.js";const p={data(){return{textCount:0,timer:null,chatBaseList:["\u4EE5\u4ECA\u65E55\u8F86\u6EE1\u7535\u65E0\u4EBA\u8F66\uFF0C\u8FD0\u8F935\u5C0F\u65F6\u80FD\u8FD0\u5B8C50\u5428\u8D27\u7269\u7684\u6807\u51C6\uFF0C\u5DF2\u77E5\u6BCF\u8F86\u65E0\u4EBA\u8F66\u8FD0\u8F931\u5C0F\u65F6\u8017\u753510%\uFF0C\u8FD0\u8F93\u6548\u7387\u662F\u591A\u5C11\uFF0C\u6BCF\u8F86\u65E0\u4EBA\u8F66\u8017\u7535\u591A\u5C11\uFF1F\u82B1\u8D39\u591A\u957F\u65F6\u95F4\uFF1F","\u8FD0\u8F93\u6548\u7387\uFF1A50\u5428/5\u5C0F\u65F6=10\u987F/\u5C0F\u65F6\uFF0C\u6BCF\u8F86\u65E0\u4EBA\u8F66\u8017\u7535\uFF1A10%\xD75\u5C0F\u65F6=50%\uFF0C\u9700\u82B1\u8D395\u5C0F\u65F6\u3002","\u4EE5\u73B0\u6709\u8FD0\u8F93\u6548\u7387\u524D\u63D0\u4E0B\uFF0C\u518D\u589E\u52A05\u8F86\u65E0\u4EBA\u8FD0\u8F93\u8F66\uFF0C\u5B8C\u6210\u5171\u8BA1150\u5428\u7269\u8D44\u7684\u8FD0\u8F93\u4EFB\u52A1\uFF0C\u6574\u4F53\u6548\u7387\u4F1A\u63D0\u9AD8\u5230\u591A\u5C11\uFF1F\u6BCF\u8F86\u65E0\u4EBA\u8F66\u8017\u7535\u53C8\u662F\u591A\u5C11\uFF1F\u5171\u82B1\u8D39\u591A\u957F\u65F6\u95F4\uFF1F","\u589E\u52A0\u523010\u8F86\u65E0\u4EBA\u8F66\uFF0C\u5B8C\u6210\u5171\u8BA1150\u5428\u7269\u8D44\u8FD0\u8F93\u4EFB\u52A1\uFF0C\u6574\u4F53\u6548\u7387\u4F1A\u63D0\u9AD8\u523015\u987F/\u5C0F\u65F6\uFF0C\u6BCF\u8F86\u65E0\u4EBA\u8F66\u8017\u7535\u767E\u5206\u6BD4\u662F15%\u3002\u8FD0\u5B8C150\u5428\u7684\u8BDD\uFF0C\u603B\u5171\u8981\u8017\u75281.5\u5C0F\u65F6\u3002","\u6211\u6765\u60F3\u60F3\u662F\u5426\u786E\u8BA4\u6267\u884C\u6B64\u8C03\u914D\u64CD\u4F5C\uFF1F","\u60A8\u597D\uFF0C\u8BF7\u60A8\u614E\u91CD\u8003\u8651\u3002\u6211\u4EEC\u5C06\u6839\u636E\u60A8\u7684\u786E\u8BA4\u6765\u51B3\u5B9A\u662F\u5426\u6267\u884C\u6B64\u8C03\u914D\u64CD\u4F5C\u3002","\u662F"],chatList:[]}},mounted(){this.initGPT()},methods:{sleep(t=1e4){return new Promise(e=>setTimeout(e,t))},async delayDo(t,e=i=>console.log(`\u6570\u636E\uFF1A${i}`),a){let i=t.length;for(let s=0;s<i;s++)e(t[s],s),await this.sleep(a[s])},getChatContent(t,e){this.timer=setInterval(()=>{if(this.textCount++,this.textCount==t.length+1){this.textCount=0,this.chatList.splice(e,1,{content:t,status:!1}),clearInterval(this.timer);return}let a=t.substring(0,this.textCount);this.chatList.splice(e,1,{content:a,status:!0})},200)},initGPT(){const t=[16e3,11e3,16e3,16e3,5e3,7e3];this.delayDo(this.chatBaseList,(e,a)=>{this.getChatContent(e,a)},t)}}},m={class:"chat-gpt"},g={id:"chat-dialog",class:"chat-dialog",ref:"chatDialogRef"},v={id:"chat-list",class:"chat-list",ref:"chatListRef"};function y(t,e,a,i,s,C){return c(),n("div",m,[o("div",g,[o("div",v,[(c(!0),n(d,null,_(s.chatList,(r,l)=>(c(),n("div",{key:l},[o("div",{class:u(l%2==0?"odd":"even")},f(r.content),3)]))),128))],512)],512)])}const B=h(p,[["render",y],["__scopeId","data-v-1c560ede"]]);export{B as default};