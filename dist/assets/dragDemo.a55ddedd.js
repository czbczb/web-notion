import{_ as j}from"./_plugin-vue_export-helper.cdc0426e.js";import{k as _,q as r,o as v,ay as D}from"./antdv.415263d7.js";const B={class:"dragContainer"},I={class:"slide"},N=D('<img class="item" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dGVjaHxlbnwwfHx8fDE2NjIwMjM2MDQ&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100" data-v-529693ff><img class="item" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100" data-v-529693ff><img class="item" src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8Y2F0fGVufDB8fHx8MTY2MjAyNzg3Nw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100" data-v-529693ff><img class="item" src="https://images.unsplash.com/photo-1561948955-570b270e7c36?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8Y2F0fGVufDB8fHx8MTY2MjAyNzg3Nw&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100" data-v-529693ff><img class="item" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100" data-v-529693ff><img class="item" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMjA3fDB8MXxzZWFyY2h8Nnx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100" data-v-529693ff><img class="item" src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMjA3fDB8MXxzZWFyY2h8N3x8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100" data-v-529693ff><img class="item" src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100" data-v-529693ff><img class="item" src="https://images.unsplash.com/photo-1597733336794-12d05021d510?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8dGVjaHxlbnwwfHx8fDE2NjIwMjc1MzI&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100" data-v-529693ff>',9),z=[N],E={__name:"dragDemo",setup(H){let p=!1,e=null,n={},m=[];const g=t=>{if(t.preventDefault(),t.target.classList.contains("item")&&!e){document.getElementById("app").classList.add("active"),e=t.target.cloneNode(!0),e.classList.add("flutter");const a=parseInt(100*b(3,5));h(t,{width:t.target.offsetWidth},a,Math.random()),M(e.src.replace(/w=100/g,"w="+a),n.flag),t.target.parentElement.appendChild(e),p=!0,t.target.classList.add("hide"),m.push(()=>{t.target.classList.remove("hide")})}},u=t=>{if(t.target.id!=="content"){const a=t.x-document.getElementById("content").getBoundingClientRect().left,s=t.y-document.getElementById("content").getBoundingClientRect().top;l(a,s)}else l(t.offsetX,t.offsetY)};window.addEventListener("mousemove",t=>{p&&e&&d(t.clientX-n.offsetX,t.clientY-n.offsetY,w(t))}),window.addEventListener("mouseup",()=>{p=!1,document.getElementById("app").classList.remove("active"),setTimeout(()=>{c()},10)}),document.addEventListener("mouseleave",t=>{c()}),window.onblur=()=>{c()};const c=function(){p=!1,e&&(e.classList.add("is_return"),x([`left: ${n.clientX-n.offsetX}px`,`top: ${n.clientY-n.offsetY}px`,"transform: scale(1)"]),setTimeout(()=>{m.length&&m.shift()(),e&&e.remove(),e=null},300))},l=function(t,a){if(!e)return;const s=e.cloneNode(!0);s.classList.remove("flutter"),s.src=e.getAttribute("raw"),s.style.cssText=`left: ${t-n.offsetX}px; top: ${a-n.offsetY}px;`,document.getElementById("content").appendChild(s),e.remove(),e=null,m.length&&m.shift()()},d=function(t,a,s=0){const o=s&&n.width+s<=n.fakeSize?`transform: scale(${(n.width+s)/n.width})`:null,i=[`left: ${t}px`,`top: ${a}px`];o&&i.push(o),x(i)},x=function(t){const a=e.style.cssText.split(";");a.pop(),e.style.cssText=a.concat(t).join(";")+";"},h=function({offsetX:t,offsetY:a,clientX:s,clientY:o},{width:i},f,y){n={offsetX:t,offsetY:a,clientX:s,clientY:o,width:i,fakeSize:f,flag:y},d(s-t,o-a)},w=function({clientX:t,clientY:a}){const{clientX:s,clientY:o}=n,i=t-s,f=a-o;return Math.sqrt(Math.pow(i,2)+Math.pow(f,2))},M=function(t,a){e.setAttribute("raw",t);const s=new Image;s.src=t,s.onload=function(){e&&n.flag===a&&(e.src=t)}},b=function(a,s){return Math.random()*(s-a)+a};return(t,a)=>(v(),_("div",B,[r("div",I,[r("div",{id:"list",onMousedown:g,class:"grid"},z,32)]),r("div",{id:"content",onMouseup:u},null,32)]))}},A=j(E,[["__scopeId","data-v-529693ff"]]);export{A as default};
