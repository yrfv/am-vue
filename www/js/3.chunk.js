webpackJsonp([3],{577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(609),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);var o=n(857),s=(n.n(o),n(1));var c=function(e){n(855)},l=Object(s.a)(r.a,o.render,o.staticRenderFns,!1,c,null,null);t.default=l.exports},586:function(e,t,n){"use strict";function a(e,t){for(var n=[],a={},r=0;r<t.length;r++){var i=t[r],o=i[0],s={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};a[o]?a[o].parts.push(s):n.push(a[o]={id:o,parts:[s]})}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){l=n,m=r||{};var o=a(e,t);return p(o),function(t){for(var n=[],r=0;r<o.length;r++){var s=o[r];(c=i[s.id]).refs--,n.push(c)}for(t?p(o=a(e,t)):o=[],r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete i[c.id]}}}};var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},o=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,d=function(){},m=null,u="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e){for(var t=0;t<e.length;t++){var n=e[t],a=i[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(v(n.parts[r]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var o=[];for(r=0;r<n.parts.length;r++)o.push(v(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:o}}}}function A(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function v(e){var t,n,a=document.querySelector("style["+u+'~="'+e.id+'"]');if(a){if(l)return d;a.parentNode.removeChild(a)}if(f){var r=c++;a=s||(s=A()),t=y.bind(null,a,r,!1),n=y.bind(null,a,r,!0)}else a=A(),t=function(e,t){var n=t.css,a=t.media,r=t.sourceMap;a&&e.setAttribute("media",a);m.ssrId&&e.setAttribute(u,t.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}var C=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=C(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}},587:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.storage={getItem:function(e){var t=void 0;if(!this.hasLocalSotrage())return this.getCookie(e);try{t=localStorage.getItem(e)}catch(e){console.error("localStorage.getItem报错， ",e.message)}finally{return t}},setItem:function(e,t,n){if(this.hasLocalSotrage())try{localStorage.setItem(e,t)}catch(e){console.error("localStorage.setItem报错， ",e.message)}else this.setCookie(e,t,n)},hasLocalSotrage:function(){return window.Storage&&window.localStorage&&window.localStorage instanceof Storage},setCookie:function(e,t,n){var a=n||30,r=new Date;r.setTime(r.getTime()+24*a*60*60*1e3);var i="expires="+r.toUTCString();document.cookie=e+"="+t+"; "+i},getCookie:function(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?t[2]:null}}},609:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(n(2)),r=s(n(130)),i=s(n(15)),o=n(587);function s(e){return e&&e.__esModule?e:{default:e}}var c={name:"tree-exm-node",props:{data:{}},render:function(e){return e("span",{attrs:{className:"name"}},[this.data.name])},created:function(){this.$notice.show({message:String(this.data.name)+"--\x3e>initialized"})}};i.default.component("treeExmNode",c),t.default={name:"tree-example",data:function(){return{initialized:JSON.parse(o.storage.getItem("initialized")),data:{name:"广东省",city:[{name:"广州市",city:[{name:"白云区"},{name:"越秀区"},{name:"天河区"}]},{name:"佛山市",city:[{name:"禅城区"},{name:"顺德区"}]},{name:"深圳市"}]},data2:{name:"广东省",city:[{name:"广州市",city:[{name:"白云区"},{name:"越秀区"},{name:"天河区"}]},{name:"佛山市",city:[{name:"禅城区"},{name:"顺德区"}]},{name:"深圳市"}]}}},watch:{initialized:function(e){o.storage.setItem("initialized",(0,r.default)(e))}},methods:{customeRenderFunc:function(e,t){return e("span",{attrs:{className:"name"}},[t.name])},beforeOpen:function(e,t){var n=this;setTimeout(function(){(0,a.default)(this,n),e.city=e.city||[],e.city.push({name:"new city"}),t()}.bind(this),1e3)}}}},855:function(e,t,n){var a=n(856);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(586).default)("3644fdc4",a,!0,{})},856:function(e,t,n){(e.exports=n(242)(!0)).push([e.i,'\n@charset "UTF-8";\n/*\n*   power by    weishengjian\n*   datetime    2018/9/11 22:55\n*/\n/*@formatter:off*/\n/*---------------------------------------color-------------------------------------------*/\n/*---------------------------------------size-------------------------------------------*/\n/*---------------------------------------shape-------------------------------------------*/\n/*@formatter:on*/\n@keyframes am-rotating {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n\n/*缩放*/\n.am-transition-scale-enter-active, .am-transition-scale-leave-active {\n  transform-origin: center;\n  transform: scale(1);\n}\n.am-transition-scale-enter, .am-transition-scale-leave-to {\n  transform-origin: center;\n  transform: scale(0.6);\n  opacity: 0;\n}\n\n/*缩放过度*/\n.am-popover-scale-enter-active, .am-popover-scale-leave-active {\n  transition: all .1s linear;\n  opacity: 1;\n}\n.am-popover-scale-enter, .am-popover-scale-leave-to {\n  opacity: 0;\n  transform: scale(0.75, 0.75);\n}\n\n/*透明度*/\n.am-transition-fade-enter-active, .am-transition-fade-leave-active {\n  opacity: 1;\n}\n.am-transition-fade-enter, .am-transition-fade-leave-to {\n  opacity: 0;\n}\n\n/*移动*/\n.am-transition-from-bottom-enter, .am-transition-from-bottom-leave-to {\n  transform: translateY(10%);\n  opacity: 0;\n}\n\n/*折叠动画*/\n.collapse-transition {\n  transition: 0.15s height ease-in-out, 0.15s padding-top ease-in-out, 0.15s padding-bottom ease-in-out;\n}\n\n/*屏幕大小判断*/\n/*清除浮动？*/\n',"",{version:3,sources:["D:/6_workspace/1_idea/am-vue/examples/pages/example/components/tree-example.vue"],names:[],mappings:";AACA,iBAAiB;AACjB;;;EAGE;AACF,kBAAkB;AAClB,2FAA2F;AAC3F,0FAA0F;AAC1F,2FAA2F;AAC3F,iBAAiB;AACjB;AACA;IACI,wBAAwB;CAC3B;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,0BAA0B;CAC7B;CACA;;AAED,MAAM;AACN;EACE,yBAAyB;EACzB,oBAAoB;CACrB;AACD;EACE,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;CACZ;;AAED,QAAQ;AACR;EACE,2BAA2B;EAC3B,WAAW;CACZ;AACD;EACE,WAAW;EACX,6BAA6B;CAC9B;;AAED,OAAO;AACP;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;;AAED,MAAM;AACN;EACE,2BAA2B;EAC3B,WAAW;CACZ;;AAED,QAAQ;AACR;EACE,sGAAsG;CACvG;;AAED,UAAU;AACV,SAAS",file:"tree-example.vue",sourcesContent:['\n@charset "UTF-8";\n/*\n*   power by    weishengjian\n*   datetime    2018/9/11 22:55\n*/\n/*@formatter:off*/\n/*---------------------------------------color-------------------------------------------*/\n/*---------------------------------------size-------------------------------------------*/\n/*---------------------------------------shape-------------------------------------------*/\n/*@formatter:on*/\n@keyframes am-rotating {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n\n/*缩放*/\n.am-transition-scale-enter-active, .am-transition-scale-leave-active {\n  transform-origin: center;\n  transform: scale(1);\n}\n.am-transition-scale-enter, .am-transition-scale-leave-to {\n  transform-origin: center;\n  transform: scale(0.6);\n  opacity: 0;\n}\n\n/*缩放过度*/\n.am-popover-scale-enter-active, .am-popover-scale-leave-active {\n  transition: all .1s linear;\n  opacity: 1;\n}\n.am-popover-scale-enter, .am-popover-scale-leave-to {\n  opacity: 0;\n  transform: scale(0.75, 0.75);\n}\n\n/*透明度*/\n.am-transition-fade-enter-active, .am-transition-fade-leave-active {\n  opacity: 1;\n}\n.am-transition-fade-enter, .am-transition-fade-leave-to {\n  opacity: 0;\n}\n\n/*移动*/\n.am-transition-from-bottom-enter, .am-transition-from-bottom-leave-to {\n  transform: translateY(10%);\n  opacity: 0;\n}\n\n/*折叠动画*/\n.collapse-transition {\n  transition: 0.15s height ease-in-out, 0.15s padding-top ease-in-out, 0.15s padding-bottom ease-in-out;\n}\n\n/*屏幕大小判断*/\n/*清除浮动？*/\n'],sourceRoot:""}])},857:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.render=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree-example example-page"},[n("div",{staticClass:"title"},[e._v("\n        基本用法，tree组件必须指定data属性以及children-key属性\n    ")]),e._v(" "),n("div",{staticClass:"example-row"},[n("am-tree",{attrs:{data:e.data,"children-key":"city"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"name"},[e._v(e._s(t.name))])]}}])})],1),e._v(" "),n("div",{staticClass:"title"},[e._v("\n        设置check-key属性，该属性会绑定到每个节点的data对象的中的[checkKey]属性，有了该属性之后，会出现复选框，可以级联选择\n    ")]),e._v(" "),n("div",{staticClass:"example-row"},[n("am-tree",{attrs:{data:e.data,"children-key":"city","check-key":"your-key"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"name"},[e._v(e._s(t.name))])]}}])})],1),e._v(" "),n("div",{staticClass:"title"},[e._v("\n        设置expand-icon（节点展开式的展开图标，使用icon组件渲染，支持font-awesome5以及iconfont）、\n        reduce-icon（节点收起时的收起图标）、disable-expand-icon（节点不可展开时显示的图标）、\n        checked-icon（节点被选中时的图标），uncheck-icon（节点没有被选中时的图标）\n    ")]),e._v(" "),n("div",{staticClass:"example-row"},[n("am-tree",{attrs:{data:e.data2,"children-key":"city","check-key":"your-key","expand-icon":"fab-facebook-f","reduce-icon":"fab-apple","checked-icon":"fab-java","uncheck-icon":"fab-linux","disable-expand-icon":"fab-sass"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"name"},[e._v(e._s(t.name))])]}}])})],1),e._v(" "),n("div",{staticClass:"title"},[e._v("\n        使用渲染函数的方式渲染内容\n    ")]),e._v(" "),n("div",{staticClass:"example-row"},[n("am-tree",{attrs:{data:e.data,"children-key":"city","render-func":e.customeRenderFunc}})],1),e._v(" "),n("div",{staticClass:"title"},[e._v("\n        初始化的时候打开所有节点\n    ")]),e._v(" "),n("div",{staticClass:"example-row"},[n("am-tree",{attrs:{data:e.data,"children-key":"city","open-on-start":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"name"},[e._v(e._s(t.name))])]}}])})],1),e._v(" "),n("div",{staticClass:"title"},[e._v("\n        是否在初始化的时候就渲染所有节点，默认是懒加载，在第一次打开节点的时候才会初始化节点内容\n        "),n("am-switch",{model:{value:e.initialized,callback:function(t){e.initialized=t},expression:"initialized"}})],1),e._v(" "),n("am-tree",{attrs:{data:e.data,"children-key":"city","initialized-on-start":e.initialized},scopedSlots:e._u([{key:"default",fn:function(e){return[n("tree-exm-node",{attrs:{data:e}})]}}])}),e._v(" "),n("div",{staticClass:"title"},[e._v("\n        在打开之前触发的动作，可以用来延迟加载数据:before-open\n    ")]),e._v(" "),n("div",{staticClass:"example-row"},[n("am-tree",{attrs:{data:e.data,"children-key":"city","before-open":e.beforeOpen},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"name"},[e._v(e._s(t.name))])]}}])})],1),e._v(" "),n("div",{staticClass:"title"},[e._v("\n        在点击渲染内容的时候，触发展开/关闭子节点动作：open-on-click-content\n    ")]),e._v(" "),n("div",{staticClass:"example-row"},[n("am-tree",{attrs:{data:e.data,"children-key":"city","open-on-click-content":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"name"},[e._v(e._s(t.name))])]}}])})],1)],1)},t.staticRenderFns=[]}});
//# sourceMappingURL=3.chunk.js.map