!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function t(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?e(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function n(e,t,n){var o;return o=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==r(o)?o:o+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var _,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,_=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw _}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}System.register(["./MonacoEditor-legacy.478869e2.js","./antdv-legacy.7bd4694a.js","./index-legacy.d0e977ef.js","./article-legacy.3ab0b755.js","./_plugin-vue_export-helper-legacy.649209c3.js"],(function(e,i){"use strict";var _;return{setters:[function(e){_=e.m},function(){},function(){},function(){},function(){}],execute:function(){
/*!-----------------------------------------------------------------------------
       * Copyright (c) Microsoft Corporation. All rights reserved.
       * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
       * Released under the MIT license
       * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
       *-----------------------------------------------------------------------------*/
var i,a,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,d=Object.prototype.hasOwnProperty,l=function(e,t,n,i){if(t&&"object"===r(t)||"function"==typeof t){var _,a=o(s(t));try{var l=function(){var o=_.value;d.call(e,o)||o===n||c(e,o,{get:function(){return t[o]},enumerable:!(i=u(t,o))||i.enumerable})};for(a.s();!(_=a.n()).done;)l()}catch(k){a.e(k)}finally{a.f()}}return e},k={};l(k,i=_,"default"),a&&l(a,i,"default");var p=["assign","flush","ftl","return","global","import","include","break","continue","local","nested","nt","setting","stop","t","lt","rt","fallback"],g=["attempt","autoesc","autoEsc","compress","comment","escape","noescape","function","if","list","items","sep","macro","noparse","noParse","noautoesc","noAutoEsc","outputformat","switch","visit","recurse"],m={close:">",id:"angle",open:"<"},f={close:"\\]",id:"bracket",open:"\\["},A={close:"[>\\]]",id:"auto",open:"[<\\[]"},b={close:"\\}",id:"dollar",open1:"\\$",open2:"\\{"},F={close:"\\]",id:"bracket",open1:"\\[",open2:"="};function v(e){return{brackets:[["<",">"],["[","]"],["(",")"],["{","}"]],comments:{blockComment:["".concat(e.open,"--"),"--".concat(e.close)]},autoCloseBefore:"\n\r\t }]),.:;=",autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string"]}],surroundingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"}],folding:{markers:{start:new RegExp("".concat(e.open,"#(?:").concat(g.join("|"),")([^/").concat(e.close,"]*(?!/)").concat(e.close,")[^").concat(e.open,"]*$")),end:new RegExp("".concat(e.open,"/#(?:").concat(g.join("|"),")[\\r\\n\\t ]*>"))}},onEnterRules:[{beforeText:new RegExp("".concat(e.open,"#(?!(?:").concat(p.join("|"),"))([a-zA-Z_]+)([^/").concat(e.close,"]*(?!/)").concat(e.close,")[^").concat(e.open,"]*$")),afterText:new RegExp("^".concat(e.open,"/#([a-zA-Z_]+)[\\r\\n\\t ]*").concat(e.close,"$")),action:{indentAction:k.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp("".concat(e.open,"#(?!(?:").concat(p.join("|"),"))([a-zA-Z_]+)([^/").concat(e.close,"]*(?!/)").concat(e.close,")[^").concat(e.open,"]*$")),action:{indentAction:k.languages.IndentAction.Indent}}]}}function x(){return{brackets:[["<",">"],["[","]"],["(",")"],["{","}"]],autoCloseBefore:"\n\r\t }]),.:;=",autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]},{open:"'",close:"'",notIn:["string"]}],surroundingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"}],folding:{markers:{start:new RegExp("[<\\[]#(?:".concat(g.join("|"),")([^/>\\]]*(?!/)[>\\]])[^<\\[]*$")),end:new RegExp("[<\\[]/#(?:".concat(g.join("|"),")[\\r\\n\\t ]*>"))}},onEnterRules:[{beforeText:new RegExp("[<\\[]#(?!(?:".concat(p.join("|"),"))([a-zA-Z_]+)([^/>\\]]*(?!/)[>\\]])[^[<\\[]]*$")),afterText:new RegExp("^[<\\[]/#([a-zA-Z_]+)[\\r\\n\\t ]*[>\\]]$"),action:{indentAction:k.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp("[<\\[]#(?!(?:".concat(p.join("|"),"))([a-zA-Z_]+)([^/>\\]]*(?!/)[>\\]])[^[<\\[]]*$")),action:{indentAction:k.languages.IndentAction.Indent}}]}}function D(e,o){var i,r,_="_".concat(e.id,"_").concat(o.id),a=function(e){return e.replace(/__id__/g,_)},c=function(e){var t=e.source.replace(/__id__/g,_);return new RegExp(t,e.flags)};return n(n(n(n(n(n(n(n(n(n(r={unicode:!0,includeLF:!1,start:a("default__id__"),ignoreCase:!1,defaultToken:"invalid",tokenPostfix:".freemarker2",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}]},a("open__id__"),new RegExp(e.open)),a("close__id__"),new RegExp(e.close)),a("iOpen1__id__"),new RegExp(o.open1)),a("iOpen2__id__"),new RegExp(o.open2)),a("iClose__id__"),new RegExp(o.close)),a("startTag__id__"),c(/(@open__id__)(#)/)),a("endTag__id__"),c(/(@open__id__)(\/#)/)),a("startOrEndTag__id__"),c(/(@open__id__)(\/?#)/)),a("closeTag1__id__"),c(/((?:@blank)*)(@close__id__)/)),a("closeTag2__id__"),c(/((?:@blank)*\/?)(@close__id__)/)),n(n(n(n(n(n(n(n(n(n(r,"blank",/[ \t\n\r]/),"keywords",["false","true","in","as","using"]),"directiveStartCloseTag1",/attempt|recover|sep|auto[eE]sc|no(?:autoe|AutoE)sc|compress|default|no[eE]scape|comment|no[pP]arse/),"directiveStartCloseTag2",/else|break|continue|return|stop|flush|t|lt|rt|nt|nested|recurse|fallback|ftl/),"directiveStartBlank",/if|else[iI]f|list|for[eE]ach|switch|case|assign|global|local|include|import|function|macro|transform|visit|stop|return|call|setting|output[fF]ormat|nested|recurse|escape|ftl|items/),"directiveEndCloseTag1",/if|list|items|sep|recover|attempt|for[eE]ach|local|global|assign|function|macro|output[fF]ormat|auto[eE]sc|no(?:autoe|AutoE)sc|compress|transform|switch|escape|no[eE]scape/),"escapedChar",/\\(?:[ntrfbgla\\'"\{=]|(?:x[0-9A-Fa-f]{1,4}))/),"asciiDigit",/[0-9]/),"integer",/[0-9]+/),"nonEscapedIdStartChar",/[\$@-Z_a-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u1FFF\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183-\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3006\u3031-\u3035\u303B-\u303C\u3040-\u318F\u31A0-\u31BA\u31F0-\u31FF\u3300-\u337F\u3400-\u4DB5\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/),n(n(n(n(n(n(n(n(n(n(r,"escapedIdChar",/\\[\-\.:#]/),"idStartChar",/(?:@nonEscapedIdStartChar)|(?:@escapedIdChar)/),"id",/(?:@idStartChar)(?:(?:@idStartChar)|(?:@asciiDigit))*/),"specialHashKeys",/\*\*|\*|false|true|in|as|using/),"namedSymbols",/&lt;=|&gt;=|\\lte|\\lt|&lt;|\\gte|\\gt|&gt;|&amp;&amp;|\\and|-&gt;|->|==|!=|\+=|-=|\*=|\/=|%=|\+\+|--|<=|&&|\|\||:|\.\.\.|\.\.\*|\.\.<|\.\.!|\?\?|=|<|\+|-|\*|\/|%|\||\.\.|\?|!|&|\.|,|;/),"arrows",["->","-&gt;"]),"delimiters",[";",":",",","."]),"stringOperators",["lte","lt","gte","gt"]),"noParseTags",["noparse","noParse","comment"]),"tokenizer",(n(n(n(n(n(n(n(n(n(n(i={},a("default__id__"),[{include:a("@directive_token__id__")},{include:a("@interpolation_and_text_token__id__")}]),a("fmExpression__id__.directive"),[{include:a("@blank_and_expression_comment_token__id__")},{include:a("@directive_end_token__id__")},{include:a("@expression_token__id__")}]),a("fmExpression__id__.interpolation"),[{include:a("@blank_and_expression_comment_token__id__")},{include:a("@expression_token__id__")},{include:a("@greater_operators_token__id__")}]),a("inParen__id__.plain"),[{include:a("@blank_and_expression_comment_token__id__")},{include:a("@directive_end_token__id__")},{include:a("@expression_token__id__")}]),a("inParen__id__.gt"),[{include:a("@blank_and_expression_comment_token__id__")},{include:a("@expression_token__id__")},{include:a("@greater_operators_token__id__")}]),a("noSpaceExpression__id__"),[{include:a("@no_space_expression_end_token__id__")},{include:a("@directive_end_token__id__")},{include:a("@expression_token__id__")}]),a("unifiedCall__id__"),[{include:a("@unified_call_token__id__")}]),a("singleString__id__"),[{include:a("@string_single_token__id__")}]),a("doubleString__id__"),[{include:a("@string_double_token__id__")}]),a("rawSingleString__id__"),[{include:a("@string_single_raw_token__id__")}]),n(n(n(n(n(n(n(n(n(n(i,a("rawDoubleString__id__"),[{include:a("@string_double_raw_token__id__")}]),a("expressionComment__id__"),[{include:a("@expression_comment_token__id__")}]),a("noParse__id__"),[{include:a("@no_parse_token__id__")}]),a("terseComment__id__"),[{include:a("@terse_comment_token__id__")}]),a("directive_token__id__"),[[c(/(?:@startTag__id__)(@directiveStartCloseTag1)(?:@closeTag1__id__)/),"auto"===e.id?{cases:{"$1==<":{token:"@rematch",switchTo:"@default_angle_".concat(o.id)},"$1==[":{token:"@rematch",switchTo:"@default_bracket_".concat(o.id)}}}:[{token:"@brackets.directive"},{token:"delimiter.directive"},{cases:{"@noParseTags":{token:"tag",next:a("@noParse__id__.$3")},"@default":{token:"tag"}}},{token:"delimiter.directive"},{token:"@brackets.directive"}]],[c(/(?:@startTag__id__)(@directiveStartCloseTag2)(?:@closeTag2__id__)/),"auto"===e.id?{cases:{"$1==<":{token:"@rematch",switchTo:"@default_angle_".concat(o.id)},"$1==[":{token:"@rematch",switchTo:"@default_bracket_".concat(o.id)}}}:[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag"},{token:"delimiter.directive"},{token:"@brackets.directive"}]],[c(/(?:@startTag__id__)(@directiveStartBlank)(@blank)/),"auto"===e.id?{cases:{"$1==<":{token:"@rematch",switchTo:"@default_angle_".concat(o.id)},"$1==[":{token:"@rematch",switchTo:"@default_bracket_".concat(o.id)}}}:[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag"},{token:"",next:a("@fmExpression__id__.directive")}]],[c(/(?:@endTag__id__)(@directiveEndCloseTag1)(?:@closeTag1__id__)/),"auto"===e.id?{cases:{"$1==<":{token:"@rematch",switchTo:"@default_angle_".concat(o.id)},"$1==[":{token:"@rematch",switchTo:"@default_bracket_".concat(o.id)}}}:[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag"},{token:"delimiter.directive"},{token:"@brackets.directive"}]],[c(/(@open__id__)(@)/),"auto"===e.id?{cases:{"$1==<":{token:"@rematch",switchTo:"@default_angle_".concat(o.id)},"$1==[":{token:"@rematch",switchTo:"@default_bracket_".concat(o.id)}}}:[{token:"@brackets.directive"},{token:"delimiter.directive",next:a("@unifiedCall__id__")}]],[c(/(@open__id__)(\/@)((?:(?:@id)(?:\.(?:@id))*)?)(?:@closeTag1__id__)/),[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag"},{token:"delimiter.directive"},{token:"@brackets.directive"}]],[c(/(@open__id__)#--/),"auto"===e.id?{cases:{"$1==<":{token:"@rematch",switchTo:"@default_angle_".concat(o.id)},"$1==[":{token:"@rematch",switchTo:"@default_bracket_".concat(o.id)}}}:{token:"comment",next:a("@terseComment__id__")}],[c(/(?:@startOrEndTag__id__)([a-zA-Z_]+)/),"auto"===e.id?{cases:{"$1==<":{token:"@rematch",switchTo:"@default_angle_".concat(o.id)},"$1==[":{token:"@rematch",switchTo:"@default_bracket_".concat(o.id)}}}:[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag.invalid",next:a("@fmExpression__id__.directive")}]]]),a("interpolation_and_text_token__id__"),[[c(/(@iOpen1__id__)(@iOpen2__id__)/),[{token:"bracket"===o.id?"@brackets.interpolation":"delimiter.interpolation"},{token:"bracket"===o.id?"delimiter.interpolation":"@brackets.interpolation",next:a("@fmExpression__id__.interpolation")}]],[/[\$#<\[\{]|(?:@blank)+|[^\$<#\[\{\n\r\t ]+/,{token:"source"}]]),a("string_single_token__id__"),[[/[^'\\]/,{token:"string"}],[/@escapedChar/,{token:"string.escape"}],[/'/,{token:"string",next:"@pop"}]]),a("string_double_token__id__"),[[/[^"\\]/,{token:"string"}],[/@escapedChar/,{token:"string.escape"}],[/"/,{token:"string",next:"@pop"}]]),a("string_single_raw_token__id__"),[[/[^']+/,{token:"string.raw"}],[/'/,{token:"string.raw",next:"@pop"}]]),a("string_double_raw_token__id__"),[[/[^"]+/,{token:"string.raw"}],[/"/,{token:"string.raw",next:"@pop"}]]),n(n(n(n(n(n(n(n(n(i,a("expression_token__id__"),[[/(r?)(['"])/,{cases:{"r'":[{token:"keyword"},{token:"string.raw",next:a("@rawSingleString__id__")}],'r"':[{token:"keyword"},{token:"string.raw",next:a("@rawDoubleString__id__")}],"'":[{token:"source"},{token:"string",next:a("@singleString__id__")}],'"':[{token:"source"},{token:"string",next:a("@doubleString__id__")}]}}],[/(?:@integer)(?:\.(?:@integer))?/,{cases:{"(?:@integer)":{token:"number"},"@default":{token:"number.float"}}}],[/(\.)(@blank*)(@specialHashKeys)/,[{token:"delimiter"},{token:""},{token:"identifier"}]],[/(?:@namedSymbols)/,{cases:{"@arrows":{token:"meta.arrow"},"@delimiters":{token:"delimiter"},"@default":{token:"operators"}}}],[/@id/,{cases:{"@keywords":{token:"keyword.$0"},"@stringOperators":{token:"operators"},"@default":{token:"identifier"}}}],[/[\[\]\(\)\{\}]/,{cases:{"\\[":{cases:{"$S2==gt":{token:"@brackets",next:a("@inParen__id__.gt")},"@default":{token:"@brackets",next:a("@inParen__id__.plain")}}},"\\]":{cases:t(t(t({},"bracket"===o.id?{"$S2==interpolation":{token:"@brackets.interpolation",next:"@popall"}}:{}),"bracket"===e.id?{"$S2==directive":{token:"@brackets.directive",next:"@popall"}}:{}),{},n(n({},a("$S1==inParen__id__"),{token:"@brackets",next:"@pop"}),"@default",{token:"@brackets"}))},"\\(":{token:"@brackets",next:a("@inParen__id__.gt")},"\\)":{cases:n(n({},a("$S1==inParen__id__"),{token:"@brackets",next:"@pop"}),"@default",{token:"@brackets"})},"\\{":{cases:{"$S2==gt":{token:"@brackets",next:a("@inParen__id__.gt")},"@default":{token:"@brackets",next:a("@inParen__id__.plain")}}},"\\}":{cases:t(t({},"bracket"===o.id?{}:{"$S2==interpolation":{token:"@brackets.interpolation",next:"@popall"}}),{},n(n({},a("$S1==inParen__id__"),{token:"@brackets",next:"@pop"}),"@default",{token:"@brackets"}))}}}],[/\$\{/,{token:"delimiter.invalid"}]]),a("blank_and_expression_comment_token__id__"),[[/(?:@blank)+/,{token:""}],[/[<\[][#!]--/,{token:"comment",next:a("@expressionComment__id__")}]]),a("directive_end_token__id__"),[[/>/,"bracket"===e.id?{token:"operators"}:{token:"@brackets.directive",next:"@popall"}],[c(/(\/)(@close__id__)/),[{token:"delimiter.directive"},{token:"@brackets.directive",next:"@popall"}]]]),a("greater_operators_token__id__"),[[/>/,{token:"operators"}],[/>=/,{token:"operators"}]]),a("no_space_expression_end_token__id__"),[[/(?:@blank)+/,{token:"",switchTo:a("@fmExpression__id__.directive")}]]),a("unified_call_token__id__"),[[/(@id)((?:@blank)+)/,[{token:"tag"},{token:"",next:a("@fmExpression__id__.directive")}]],[c(/(@id)(\/?)(@close__id__)/),[{token:"tag"},{token:"delimiter.directive"},{token:"@brackets.directive",next:"@popall"}]],[/./,{token:"@rematch",next:a("@noSpaceExpression__id__")}]]),a("no_parse_token__id__"),[[c(/(@open__id__)(\/#?)([a-zA-Z]+)((?:@blank)*)(@close__id__)/),{cases:{"$S2==$3":[{token:"@brackets.directive"},{token:"delimiter.directive"},{token:"tag"},{token:""},{token:"@brackets.directive",next:"@popall"}],"$S2==comment":[{token:"comment"},{token:"comment"},{token:"comment"},{token:"comment"},{token:"comment"}],"@default":[{token:"source"},{token:"source"},{token:"source"},{token:"source"},{token:"source"}]}}],[/[^<\[\-]+|[<\[\-]/,{cases:{"$S2==comment":{token:"comment"},"@default":{token:"source"}}}]]),a("expression_comment_token__id__"),[[/--[>\]]/,{token:"comment",next:"@pop"}],[/[^\->\]]+|[>\]\-]/,{token:"comment"}]]),a("terse_comment_token__id__"),[[c(/--(?:@close__id__)/),{token:"comment",next:"@popall"}],[/[^<\[\-]+|[<\[\-]/,{token:"comment"}]])))}function E(e){var n=D(m,e),o=D(f,e),i=D(A,e);return t(t(t(t({},n),o),i),{},{unicode:!0,includeLF:!1,start:"default_auto_".concat(e.id),ignoreCase:!1,defaultToken:"invalid",tokenPostfix:".freemarker2",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],tokenizer:t(t(t({},n.tokenizer),o.tokenizer),i.tokenizer)})}e("TagAngleInterpolationDollar",{conf:v(m),language:D(m,b)}),e("TagBracketInterpolationDollar",{conf:v(f),language:D(f,b)}),e("TagAngleInterpolationBracket",{conf:v(m),language:D(m,F)}),e("TagBracketInterpolationBracket",{conf:v(f),language:D(f,F)}),e("TagAutoInterpolationDollar",{conf:x(),language:E(b)}),e("TagAutoInterpolationBracket",{conf:x(),language:E(F)})}}}))}();
