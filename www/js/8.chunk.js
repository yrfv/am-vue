webpackJsonp([8],{555:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(587),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);var i=n(837),l=(n.n(i),n(1));var s=function(e){n(835)},c=Object(l.a)(r.a,i.render,i.staticRenderFns,!1,s,null,null);t.default=c.exports},563:function(e,t,n){"use strict";function a(e,t){for(var n=[],a={},r=0;r<t.length;r++){var o=t[r],i=o[0],l={id:e+":"+r,css:o[1],media:o[2],sourceMap:o[3]};a[i]?a[i].parts.push(l):n.push(a[i]={id:i,parts:[l]})}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){c=n,A=r||{};var i=a(e,t);return v(i),function(t){for(var n=[],r=0;r<i.length;r++){var l=i[r];(s=o[l.id]).refs--,n.push(s)}for(t?v(i=a(e,t)):i=[],r=0;r<n.length;r++){var s;if(0===(s=n[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},i=r&&(document.head||document.getElementsByTagName("head")[0]),l=null,s=0,c=!1,d=function(){},A=null,m="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e){for(var t=0;t<e.length;t++){var n=e[t],a=o[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(u(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var i=[];for(r=0;r<n.parts.length;r++)i.push(u(n.parts[r]));o[n.id]={id:n.id,refs:1,parts:i}}}}function f(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function u(e){var t,n,a=document.querySelector("style["+m+'~="'+e.id+'"]');if(a){if(c)return d;a.parentNode.removeChild(a)}if(p){var r=s++;a=l||(l=f()),t=C.bind(null,a,r,!1),n=C.bind(null,a,r,!0)}else a=f(),t=function(e,t){var n=t.css,a=t.media,r=t.sourceMap;a&&e.setAttribute("media",a);A.ssrId&&e.setAttribute(m,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}var h=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function C(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=h(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}},587:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=902852676,3612482722&fm=26&gp=0.jpg";t.default={name:"scrollbar-example",data:function(){return{list:[],list2:[]}},mounted:function(){for(var e=3;e>0;)this.list.push(a),e--;for(e=4;e>0;)this.list2.push(a),e--},methods:{add:function(){this.list.unshift(a+"?time="+String(this.getTime()))},remove:function(){this.list.shift()},add2:function(){this.list2.unshift(a+"?time="+String(this.getTime()))},remove2:function(){this.list2.shift()},getTime:function(){return(new Date).getTime()}}}},835:function(e,t,n){var a=n(836);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(563).default)("35a21d4a",a,!0,{})},836:function(e,t,n){(e.exports=n(229)(!0)).push([e.i,'\n@charset "UTF-8";\n/*\n*   power by    weishengjian\n*   datetime    2018/9/11 22:55\n*/\n/*@formatter:off*/\n/*---------------------------------------color-------------------------------------------*/\n/*---------------------------------------size-------------------------------------------*/\n/*---------------------------------------shape-------------------------------------------*/\n/*@formatter:on*/\n@keyframes am-rotating {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n\n/*缩放*/\n.am-transition-scale-enter-active, .am-transition-scale-leave-active {\n  transform-origin: center;\n  transform: scale(1);\n}\n.am-transition-scale-enter, .am-transition-scale-leave-to {\n  transform-origin: center;\n  transform: scale(0.6);\n  opacity: 0;\n}\n\n/*缩放过度*/\n.am-popover-scale-enter-active, .am-popover-scale-leave-active {\n  transition: all .1s linear;\n  opacity: 1;\n}\n.am-popover-scale-enter, .am-popover-scale-leave-to {\n  opacity: 0;\n  transform: scale(0.75, 0.75);\n}\n\n/*透明度*/\n.am-transition-fade-enter-active, .am-transition-fade-leave-active {\n  opacity: 1;\n}\n.am-transition-fade-enter, .am-transition-fade-leave-to {\n  opacity: 0;\n}\n\n/*移动*/\n.am-transition-from-bottom-enter, .am-transition-from-bottom-leave-to {\n  transform: translateY(10%);\n  opacity: 0;\n}\n\n/*折叠动画*/\n.collapse-transition {\n  transition: 0.15s height ease-in-out, 0.15s padding-top ease-in-out, 0.15s padding-bottom ease-in-out;\n}\n\n/*屏幕大小判断*/\n/*清除浮动？*/\n.scrollbar-example .item {\n  background-color: #f2f2f2;\n  color: black;\n}\n.scrollbar-example .item img {\n    display: block;\n}\n.scrollbar-example .h-item {\n  display: inline-block;\n}\n',"",{version:3,sources:["D:/6_workspace/1_idea/am-vue/examples/pages/example/components/scrollbar-example.vue"],names:[],mappings:";AACA,iBAAiB;AACjB;;;EAGE;AACF,kBAAkB;AAClB,2FAA2F;AAC3F,0FAA0F;AAC1F,2FAA2F;AAC3F,iBAAiB;AACjB;AACA;IACI,wBAAwB;CAC3B;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,0BAA0B;CAC7B;CACA;;AAED,MAAM;AACN;EACE,yBAAyB;EACzB,oBAAoB;CACrB;AACD;EACE,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;CACZ;;AAED,QAAQ;AACR;EACE,2BAA2B;EAC3B,WAAW;CACZ;AACD;EACE,WAAW;EACX,6BAA6B;CAC9B;;AAED,OAAO;AACP;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;;AAED,MAAM;AACN;EACE,2BAA2B;EAC3B,WAAW;CACZ;;AAED,QAAQ;AACR;EACE,sGAAsG;CACvG;;AAED,UAAU;AACV,SAAS;AACT;EACE,0BAA0B;EAC1B,aAAa;CACd;AACD;IACI,eAAe;CAClB;AACD;EACE,sBAAsB;CACvB",file:"scrollbar-example.vue",sourcesContent:['\n@charset "UTF-8";\n/*\n*   power by    weishengjian\n*   datetime    2018/9/11 22:55\n*/\n/*@formatter:off*/\n/*---------------------------------------color-------------------------------------------*/\n/*---------------------------------------size-------------------------------------------*/\n/*---------------------------------------shape-------------------------------------------*/\n/*@formatter:on*/\n@keyframes am-rotating {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n\n/*缩放*/\n.am-transition-scale-enter-active, .am-transition-scale-leave-active {\n  transform-origin: center;\n  transform: scale(1);\n}\n.am-transition-scale-enter, .am-transition-scale-leave-to {\n  transform-origin: center;\n  transform: scale(0.6);\n  opacity: 0;\n}\n\n/*缩放过度*/\n.am-popover-scale-enter-active, .am-popover-scale-leave-active {\n  transition: all .1s linear;\n  opacity: 1;\n}\n.am-popover-scale-enter, .am-popover-scale-leave-to {\n  opacity: 0;\n  transform: scale(0.75, 0.75);\n}\n\n/*透明度*/\n.am-transition-fade-enter-active, .am-transition-fade-leave-active {\n  opacity: 1;\n}\n.am-transition-fade-enter, .am-transition-fade-leave-to {\n  opacity: 0;\n}\n\n/*移动*/\n.am-transition-from-bottom-enter, .am-transition-from-bottom-leave-to {\n  transform: translateY(10%);\n  opacity: 0;\n}\n\n/*折叠动画*/\n.collapse-transition {\n  transition: 0.15s height ease-in-out, 0.15s padding-top ease-in-out, 0.15s padding-bottom ease-in-out;\n}\n\n/*屏幕大小判断*/\n/*清除浮动？*/\n.scrollbar-example .item {\n  background-color: #f2f2f2;\n  color: black;\n}\n.scrollbar-example .item img {\n    display: block;\n}\n.scrollbar-example .h-item {\n  display: inline-block;\n}\n'],sourceRoot:""}])},837:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.render=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scrollbar-example example-page"},[n("div",{staticClass:"title"},[e._v("\n        基本用法，默认情况下，scrollbar大小为父节点的大小，所以在使用的时候，容器节点最好只拥有scrollbar一个子节点，\n        am-vue中，scrollbar用于特殊用于，仔细观察的同学应该发现了，滚动条的位置和浏览器标准的有点不一样，滚动条的位置是覆盖在内容上方的，\n        这样设计的目的在于避免内容大小变化导致内容错位的情况出现\n    ")]),e._v(" "),n("div",{staticClass:"example-row"},[n("div",{staticStyle:{height:"100px",width:"300px"}},[n("am-scrollbar",[n("div",{staticStyle:{height:"200px",width:"600px","background-color":"#ED4114"}})])],1)]),e._v(" "),n("div",{staticClass:"title"},[e._v("\n        设置滚动条大小以及颜色\n    ")]),e._v(" "),n("div",{staticClass:"example-row"},[n("div",{staticStyle:{height:"100px",width:"300px"}},[n("am-scrollbar",{attrs:{"scrollbar-color":"#f2f2f2","scrollbar-size":5}},[n("div",{staticStyle:{height:"200px",width:"600px","background-color":"#ED4114"}})])],1)]),e._v(" "),n("div",{staticClass:"title"},[e._v("\n        设置横向不滚动或者纵向不滚动\n    ")]),e._v(" "),n("div",{staticClass:"example-row"},[n("div",{staticStyle:{height:"100px",width:"300px",display:"inline-block"}},[n("am-scrollbar",{attrs:{"scroll-x":!1}},[n("div",{staticStyle:{height:"200px",width:"600px","background-color":"#ED4114"}},[e._v("\n                    hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello\n                    world!hello world!hello world!hello world!hello world!\n                ")])])],1),e._v(" "),n("div",{staticStyle:{height:"100px",width:"300px",display:"inline-block"}},[n("am-scrollbar",{attrs:{"scroll-y":!1}},[n("div",{staticStyle:{height:"200px",width:"600px","background-color":"#ED4114"}},[e._v("\n                    hello world!hello world!hello world!hello world!hello world!hello world!hello world!hello\n                    world!hello world!hello world!hello world!hello world!\n                ")])])],1)]),e._v(" "),n("div",{staticClass:"title"},[e._v("\n        综合测试，经过测试，当浏览器窗口大小变化、scrollbar的内容大小变化，scrollbar中图片加载延迟都不会影响scrollbar的正常使用\n    ")]),e._v(" "),n("div",[n("am-button-group",[n("am-button",{on:{click:e.add}},[e._v("add")]),e._v(" "),n("am-button",[e._v("vertical:"+e._s(e.list.length))]),e._v(" "),n("am-button",{on:{click:e.remove}},[e._v("remove")])],1),e._v(" "),n("am-button-group",[n("am-button",{on:{click:e.add2}},[e._v("add")]),e._v(" "),n("am-button",[e._v("horizontal:"+e._s(e.list2.length))]),e._v(" "),n("am-button",{on:{click:e.remove2}},[e._v("remove")])],1),e._v(" "),n("am-button-group",[n("am-button",{on:{click:function(t){e.$refs.scrollbar.scrollTo({x:0,y:0})}}},[e._v("scrollTo:0")])],1)],1),e._v(" "),n("div",{staticStyle:{width:"1000px",height:"600px"}},[n("am-scrollbar",{ref:"scrollbar"},[n("div",{staticStyle:{width:"max-content","white-space":"nowrap"}},e._l(e.list2,function(e){return n("div",{staticClass:"h-item"},[n("img",{attrs:{src:e}})])})),e._v(" "),e._l(e.list,function(e){return n("div",{staticClass:"item"},[n("img",{attrs:{src:e}})])})],2)],1)])},t.staticRenderFns=[]}});
//# sourceMappingURL=8.chunk.js.map