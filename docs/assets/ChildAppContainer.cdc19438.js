import{a as e,s as n}from"./index.d0653a71.js";import{aa as t,k as r,o as a}from"./antdv.415263d7.js";const s={subApps:[{name:"children1",entry:"//localhost:8080",container:"#sub-container",activeRule:"/children1",publicPath:"/children1"}]},{subApps:c}=s;function i(){try{e(c,{beforeLoad:[o=>{console.log("before load",o)}],beforeMount:[o=>{console.log("before mount",o)}],afterUnmount:[o=>{console.log("before unmount",o)}]})}catch(o){console.log(o)}}const l={id:"sub-container"},m={__name:"ChildAppContainer",setup(o){return t(()=>{window.qiankunStarted||(window.qiankunStarted=!0,i(),n({sandbox:{experimentalStyleIsolation:!0}}))}),(u,p)=>(a(),r("div",l))}};export{m as default};