webpackJsonp([14],{558:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(590),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);var i=n(846),s=(n.n(i),n(1));var d=function(e){n(844)},v=Object(s.a)(r.a,i.render,i.staticRenderFns,!1,d,null,null);t.default=v.exports},563:function(e,t,n){"use strict";function o(e,t){for(var n=[],o={},r=0;r<t.length;r++){var a=t[r],i=a[0],s={id:e+":"+r,css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(s):n.push(o[i]={id:i,parts:[s]})}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){v=n,m=r||{};var i=o(e,t);return A(i),function(t){for(var n=[],r=0;r<i.length;r++){var s=i[r];(d=a[s.id]).refs--,n.push(d)}for(t?A(i=o(e,t)):i=[],r=0;r<n.length;r++){var d;if(0===(d=n[r]).refs){for(var v=0;v<d.parts.length;v++)d.parts[v]();delete a[d.id]}}}};var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},i=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,d=0,v=!1,l=function(){},m=null,p="data-vue-ssr-id",c="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function A(e){for(var t=0;t<e.length;t++){var n=e[t],o=a[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(u(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var i=[];for(r=0;r<n.parts.length;r++)i.push(u(n.parts[r]));a[n.id]={id:n.id,refs:1,parts:i}}}}function f(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function u(e){var t,n,o=document.querySelector("style["+p+'~="'+e.id+'"]');if(o){if(v)return l;o.parentNode.removeChild(o)}if(c){var r=d++;o=s||(s=f()),t=C.bind(null,o,r,!1),n=C.bind(null,o,r,!0)}else o=f(),t=function(e,t){var n=t.css,o=t.media,r=t.sourceMap;o&&e.setAttribute("media",o);m.ssrId&&e.setAttribute(p,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function C(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=_(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},590:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"dropdown-example",data:function(){return{val1:!1,disabled:!1}}}},844:function(e,t,n){var o=n(845);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(563).default)("56b6e3fe",o,!0,{})},845:function(e,t,n){(e.exports=n(229)(!0)).push([e.i,'\n@charset "UTF-8";\n/*\n*   power by    weishengjian\n*   datetime    2018/9/11 22:55\n*/\n/*@formatter:off*/\n/*---------------------------------------color-------------------------------------------*/\n/*---------------------------------------size-------------------------------------------*/\n/*---------------------------------------shape-------------------------------------------*/\n/*@formatter:on*/\n@keyframes am-rotating {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n\n/*缩放*/\n.am-transition-scale-enter-active, .am-transition-scale-leave-active {\n  transform-origin: center;\n  transform: scale(1);\n}\n.am-transition-scale-enter, .am-transition-scale-leave-to {\n  transform-origin: center;\n  transform: scale(0.6);\n  opacity: 0;\n}\n\n/*缩放过度*/\n.am-popover-scale-enter-active, .am-popover-scale-leave-active {\n  transition: all .1s linear;\n  opacity: 1;\n}\n.am-popover-scale-enter, .am-popover-scale-leave-to {\n  opacity: 0;\n  transform: scale(0.75, 0.75);\n}\n\n/*透明度*/\n.am-transition-fade-enter-active, .am-transition-fade-leave-active {\n  opacity: 1;\n}\n.am-transition-fade-enter, .am-transition-fade-leave-to {\n  opacity: 0;\n}\n\n/*移动*/\n.am-transition-from-bottom-enter, .am-transition-from-bottom-leave-to {\n  transform: translateY(10%);\n  opacity: 0;\n}\n\n/*折叠动画*/\n.collapse-transition {\n  transition: 0.15s height ease-in-out, 0.15s padding-top ease-in-out, 0.15s padding-bottom ease-in-out;\n}\n\n/*屏幕大小判断*/\n/*清除浮动？*/\n',"",{version:3,sources:["D:/6_workspace/1_idea/am-vue/examples/pages/example/components/dropdown-example.vue"],names:[],mappings:";AACA,iBAAiB;AACjB;;;EAGE;AACF,kBAAkB;AAClB,2FAA2F;AAC3F,0FAA0F;AAC1F,2FAA2F;AAC3F,iBAAiB;AACjB;AACA;IACI,wBAAwB;CAC3B;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,0BAA0B;CAC7B;CACA;;AAED,MAAM;AACN;EACE,yBAAyB;EACzB,oBAAoB;CACrB;AACD;EACE,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;CACZ;;AAED,QAAQ;AACR;EACE,2BAA2B;EAC3B,WAAW;CACZ;AACD;EACE,WAAW;EACX,6BAA6B;CAC9B;;AAED,OAAO;AACP;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;;AAED,MAAM;AACN;EACE,2BAA2B;EAC3B,WAAW;CACZ;;AAED,QAAQ;AACR;EACE,sGAAsG;CACvG;;AAED,UAAU;AACV,SAAS",file:"dropdown-example.vue",sourcesContent:['\n@charset "UTF-8";\n/*\n*   power by    weishengjian\n*   datetime    2018/9/11 22:55\n*/\n/*@formatter:off*/\n/*---------------------------------------color-------------------------------------------*/\n/*---------------------------------------size-------------------------------------------*/\n/*---------------------------------------shape-------------------------------------------*/\n/*@formatter:on*/\n@keyframes am-rotating {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n\n/*缩放*/\n.am-transition-scale-enter-active, .am-transition-scale-leave-active {\n  transform-origin: center;\n  transform: scale(1);\n}\n.am-transition-scale-enter, .am-transition-scale-leave-to {\n  transform-origin: center;\n  transform: scale(0.6);\n  opacity: 0;\n}\n\n/*缩放过度*/\n.am-popover-scale-enter-active, .am-popover-scale-leave-active {\n  transition: all .1s linear;\n  opacity: 1;\n}\n.am-popover-scale-enter, .am-popover-scale-leave-to {\n  opacity: 0;\n  transform: scale(0.75, 0.75);\n}\n\n/*透明度*/\n.am-transition-fade-enter-active, .am-transition-fade-leave-active {\n  opacity: 1;\n}\n.am-transition-fade-enter, .am-transition-fade-leave-to {\n  opacity: 0;\n}\n\n/*移动*/\n.am-transition-from-bottom-enter, .am-transition-from-bottom-leave-to {\n  transform: translateY(10%);\n  opacity: 0;\n}\n\n/*折叠动画*/\n.collapse-transition {\n  transition: 0.15s height ease-in-out, 0.15s padding-top ease-in-out, 0.15s padding-bottom ease-in-out;\n}\n\n/*屏幕大小判断*/\n/*清除浮动？*/\n'],sourceRoot:""}])},846:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.render=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dropdown-example example-page"},[n("div",{staticClass:"title"},[e._v("\n        基本用法\n    ")]),e._v(" "),n("div",{staticClass:"example-row"},[n("am-dropdown",[n("am-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("dropdown")]),e._v(" "),n("div",{attrs:{slot:"popover"},slot:"popover"},[n("am-dropdown-item",[e._v("吴彦祖")]),e._v(" "),n("am-dropdown-item",[e._v("张学友")]),e._v(" "),n("am-dropdown-item",[e._v("易烊千玺")]),e._v(" "),n("am-dropdown-item",[e._v("王源")]),e._v(" "),n("am-dropdown-item",[e._v("范丞丞")]),e._v(" "),n("am-dropdown-item",[e._v("刘德华")]),e._v(" "),n("am-dropdown-item",[e._v("吴彦祖")]),e._v(" "),n("am-dropdown-item",[e._v("张学友")]),e._v(" "),n("am-dropdown-item",[e._v("易烊千玺")]),e._v(" "),n("am-dropdown-item",[e._v("王源")]),e._v(" "),n("am-dropdown-item",[e._v("范丞丞")])],1)],1)],1),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"example-row"},[n("am-dropdown",{attrs:{direction:"right",align:"center"}},[n("am-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("dropdown")]),e._v(" "),n("div",{attrs:{slot:"popover"},slot:"popover"},[n("am-dropdown-item",[e._v("吴彦祖")]),e._v(" "),n("am-dropdown-item",[e._v("张学友")]),e._v(" "),n("am-dropdown-item",[e._v("易烊千玺")]),e._v(" "),n("am-dropdown-item",[e._v("王源")])],1)],1)],1),e._v(" "),n("div",{staticClass:"title"},[e._v("\n        激活方式trigger:click|hover\n    ")]),e._v(" "),n("div",{staticClass:"example-row"},[n("am-dropdown",{attrs:{trigger:"click"}},[n("am-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("click")]),e._v(" "),n("div",{attrs:{slot:"popover"},slot:"popover"},[n("am-dropdown-item",[e._v("吴彦祖")]),e._v(" "),n("am-dropdown-item",[e._v("张学友")]),e._v(" "),n("am-dropdown-item",[e._v("易烊千玺")]),e._v(" "),n("am-dropdown-item",[e._v("王源")])],1)],1),e._v(" "),n("am-dropdown",{attrs:{trigger:"hover"}},[n("am-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("hover")]),e._v(" "),n("div",{attrs:{slot:"popover"},slot:"popover"},[n("am-dropdown-item",[e._v("吴彦祖")]),e._v(" "),n("am-dropdown-item",[e._v("张学友")]),e._v(" "),n("am-dropdown-item",[e._v("易烊千玺")]),e._v(" "),n("am-dropdown-item",[e._v("王源")])],1)],1)],1),e._v(" "),n("div",{staticClass:"title"},[e._v("\n        禁用\n    ")]),e._v(" "),n("div",{staticClass:"example-row"},[n("am-switch",{model:{value:e.disabled,callback:function(t){e.disabled=t},expression:"disabled"}}),e._v(" "),n("am-dropdown",{attrs:{disabled:e.disabled}},[n("am-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("click")]),e._v(" "),n("div",{attrs:{slot:"popover"},slot:"popover"},[n("am-dropdown-item",[e._v("吴彦祖")]),e._v(" "),n("am-dropdown-item",[e._v("张学友")]),e._v(" "),n("am-dropdown-item",[e._v("易烊千玺")]),e._v(" "),n("am-dropdown-item",[e._v("王源")])],1)],1),e._v(" "),n("am-dropdown",{attrs:{disabled:e.disabled,trigger:"hover"}},[n("am-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("hover")]),e._v(" "),n("div",{attrs:{slot:"popover"},slot:"popover"},[n("am-dropdown-item",[e._v("吴彦祖")]),e._v(" "),n("am-dropdown-item",[e._v("张学友")]),e._v(" "),n("am-dropdown-item",[e._v("易烊千玺")]),e._v(" "),n("am-dropdown-item",[e._v("王源")])],1)],1)],1),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"example-row"},[n("am-dropdown",{attrs:{width:200,height:300}},[n("am-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("click")]),e._v(" "),n("div",{attrs:{slot:"popover"},slot:"popover"},[n("am-dropdown-item",[e._v("吴彦祖")]),e._v(" "),n("am-dropdown-item",[e._v("张学友")]),e._v(" "),n("am-dropdown-item",[e._v("易烊千玺")]),e._v(" "),n("am-dropdown-item",[e._v("王源")])],1)],1)],1)])},t.staticRenderFns=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[this._v("\n        dropdown组件复用了popover组件其中传递了很多属性，主要有："),t("br"),this._v("\n        show-arrow、size-equal、hide-on-click-outside、arrow-size、\n        direction、align、shadow、border-radius\n    ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[this._v("\n        设置宽度和高度 "),t("br"),this._v("\n        [因为这里用了scrollbar组件，而且scrollbar组件的缺陷是scrollbar不能依赖于内容的大小进行变化，目前\n        无法实现的一个功能是，当dropdown中的dropdownItem数量过少时，只显示少数的dropdownItem，当dropdownItem过多时，滚动显示]\n    ")])}]}});
//# sourceMappingURL=14.chunk.js.map