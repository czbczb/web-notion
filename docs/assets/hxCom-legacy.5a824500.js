(function(){function _typeof(e){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_typeof(e)}function ownKeys(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(o),!0).forEach((function(t){_defineProperty(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function _defineProperty(e,t,o){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==_typeof(t)?t:t+""}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!=_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}System.register(["./antdv-legacy.7bd4694a.js","./NotionView-legacy.2161944f.js","./_plugin-vue_export-helper-legacy.649209c3.js","./index-legacy.b41ee0ef.js"],(function(exports,module){"use strict";var __vite_style__=document.createElement("style"),ref,reactive,onMounted,openBlock,createElementBlock,toDisplayString,normalizeClass,withKeys,withModifiers,toRaw,markdownCommand,_export_sfc;return __vite_style__.textContent=".editable-true[data-v-ac381864]{border:1px solid transparent;transition:all linear .3s}.editable-true[data-v-ac381864]:hover{background-color:#eee}\n",document.head.appendChild(__vite_style__),{setters:[function(e){ref=e.r,reactive=e.b,onMounted=e.aa,openBlock=e.o,createElementBlock=e.k,toDisplayString=e.t,normalizeClass=e.O,withKeys=e.az,withModifiers=e.aA,toRaw=e.ax},function(e){markdownCommand=e.m},function(e){_export_sfc=e._},function(){}],execute:function execute(){var hxCom_vue_vue_type_style_index_0_scoped_ac381864_lang="",_hoisted_1=["onKeydown","contenteditable","placeholder"],_sfc_main={__name:"hxCom",props:{config:Object,configItem:{type:Object,default:function(){return{type:"p",html:""}}},order:Number,readOnly:{type:Boolean,default:!1},focusOrder:Number},emits:["removeConfigItem","addConfigItem","setFocusOrder","updateConfigItem"],setup:function setup(__props,_ref){var __emit=_ref.emit,props=__props,emit=__emit,hx=ref(null),state=reactive({value:"",isActive:!1,markeDownCommand:markdownCommand});function setAnchorPosition(e){e.focus();var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var o=window.getSelection();0==o.anchorOffset&&(o.removeAllRanges(),o.addRange(t))}function changeSpace(){console.log("space",state.value)}function hasCommand(e){return"p"!==e.type}function changeEnter(){var config=markdownCommand.default,html=hx.value.innerHTML;if(Object.keys(markdownCommand).map((function(command){if(hx.value.innerHTML.startsWith(command)){config=markdownCommand[command];var reg=eval("/"+command+"/gi");html=html.replace(reg,"")}})),hasCommand(config))return emit("updateConfigItem",{order:props.order,config:_objectSpread(_objectSpread({},toRaw(props.configItem)),{},{html:html})}),void emit("setFocusOrder",props.order);config.html="",emit("addConfigItem",{order:props.order+1,config:toRaw(config)}),emit("setFocusOrder",props.order+1)}return onMounted((function(){hx.value.innerHTML=props.configItem.html,console.log(props.focusOrder,props.order,props.focusOrder===props.order),props.focusOrder===props.order&&setAnchorPosition(hx.value)})),function(e,t){return openBlock(),createElementBlock("div",{class:normalizeClass(["editable-true",__props.configItem.type]),ref_key:"hx",ref:hx,onKeydown:[withKeys(withModifiers(changeEnter,["prevent"]),["enter"]),withKeys(changeSpace,["enter","space"])],contenteditable:!__props.readOnly,onInput:t[0]||(t[0]=function(){return e.inputText&&e.inputText.apply(e,arguments)}),placeholder:__props.configItem.type},toDisplayString(__props.configItem.html),43,_hoisted_1)}}},hxCom=exports("default",_export_sfc(_sfc_main,[["__scopeId","data-v-ac381864"]]))}}}))})();