webpackJsonp([11],{545:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(577),a=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);var i=o(813),l=(o.n(i),o(1));var r=function(t){o(811)},c=Object(l.a)(a.a,i.render,i.staticRenderFns,!1,r,null,null);e.default=c.exports},563:function(t,e,o){"use strict";function n(t,e){for(var o=[],n={},a=0;a<e.length;a++){var s=e[a],i=s[0],l={id:t+":"+a,css:s[1],media:s[2],sourceMap:s[3]};n[i]?n[i].parts.push(l):o.push(n[i]={id:i,parts:[l]})}return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,o,a){c=o,v=a||{};var i=n(t,e);return h(i),function(e){for(var o=[],a=0;a<i.length;a++){var l=i[a];(r=s[l.id]).refs--,o.push(r)}for(e?h(i=n(t,e)):i=[],a=0;a<o.length;a++){var r;if(0===(r=o[a]).refs){for(var c=0;c<r.parts.length;c++)r.parts[c]();delete s[r.id]}}}};var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},i=a&&(document.head||document.getElementsByTagName("head")[0]),l=null,r=0,c=!1,m=function(){},v=null,d="data-vue-ssr-id",u="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var o=t[e],n=s[o.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](o.parts[a]);for(;a<o.parts.length;a++)n.parts.push(p(o.parts[a]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{var i=[];for(a=0;a<o.parts.length;a++)i.push(p(o.parts[a]));s[o.id]={id:o.id,refs:1,parts:i}}}}function f(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function p(t){var e,o,n=document.querySelector("style["+d+'~="'+t.id+'"]');if(n){if(c)return m;n.parentNode.removeChild(n)}if(u){var a=r++;n=l||(l=f()),e=_.bind(null,n,a,!1),o=_.bind(null,n,a,!0)}else n=f(),e=function(t,e){var o=e.css,n=e.media,a=e.sourceMap;n&&t.setAttribute("media",n);v.ssrId&&t.setAttribute(d,e.id);a&&(o+="\n/*# sourceURL="+a.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}.bind(null,n),o=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else o()}}var w=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}();function _(t,e,o,n){var a=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,a);else{var s=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s)}}},577:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(o(71)),a=l(o(232)),s=l(o(233)),i=l(o(235));function l(t){return t&&t.__esModule?t:{default:t}}e.default={name:"modal-example",components:{AmNumberInput:i.default,AmRadioGroup:s.default,AmModal:a.default,AmButtonGroup:n.default},data:function(){return{show1:!1,show2:!1,show3:!1,show4:!1,show5:!1,show6:!1,show7:!1,show8:!1,show9:!1,show10:!1,show11:!1,show12:!1,show13:!1,show14:!1,show15:!1,show16:!1,type:"primary",shape:"fillet",vertical:"start",horizontal:"center",left:0,right:0,top:0,bottom:0,newDialog:null}},methods:{log:function(t){alert(t)},showConfirm:function(){this.$modal.show({hideOnClickOutside:!1,shadow:!1,confirmButton:!0,cancelButton:!0,maxable:!0,onConfirm:function(){console.log("confirm callback")},onCancel:function(){console.log("cancel callback")}})},showInput:function(){this.$modal.show({hideOnClickOutside:!1,title:"输入提示标题",type:"warn",message:"提示：输入提示信息",hasInput:!0,shadow:!1,onConfirm:function(t){console.log("confirm input:",t)},onCancel:function(){console.log("cancel input")}})},showRender:function(){this.$modal.show({shape:"none",headRender:this.headRender,contentRender:this.contentRender,footRender:this.footRender})},headRender:function(t){return t("div",["left:",this.left])},contentRender:function(t){return t("div",["right:",this.right])},footRender:function(t){return t("div",["top:",this.top])},newModal:function(t){this.$modal.new({type:t,minable:!0,maxable:!0,title:"窗口标题"+((new Date).getMinutes()+(new Date).getSeconds()),message:t})},getNewModal:function(){this.newDialog=this.$modal.new({type:"primary",minable:!0,maxable:!0,title:"窗口标题"+((new Date).getMinutes()+(new Date).getSeconds()),message:"自定义内容",currentValue:!1,contentRender:this.contentRender,footRender:this.footRender})},toggloNewDialog:function(){this.newDialog.instance.currentValue=!this.newDialog.instance.currentValue},destroyNewDialog:function(){this.newDialog.instance.destroy()}}}},811:function(t,e,o){var n=o(812);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o(563).default)("1ed9be98",n,!0,{})},812:function(t,e,o){(t.exports=o(229)(!0)).push([t.i,'\n@charset "UTF-8";\n/*\n*   power by    weishengjian\n*   datetime    2018/9/11 22:55\n*/\n/*@formatter:off*/\n/*---------------------------------------color-------------------------------------------*/\n/*---------------------------------------size-------------------------------------------*/\n/*---------------------------------------shape-------------------------------------------*/\n/*@formatter:on*/\n@keyframes am-rotating {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n\n/*缩放*/\n.am-transition-scale-enter-active, .am-transition-scale-leave-active {\n  transform-origin: center;\n  transform: scale(1);\n}\n.am-transition-scale-enter, .am-transition-scale-leave-to {\n  transform-origin: center;\n  transform: scale(0.6);\n  opacity: 0;\n}\n\n/*缩放过度*/\n.am-popover-scale-enter-active, .am-popover-scale-leave-active {\n  transition: all .1s linear;\n  opacity: 1;\n}\n.am-popover-scale-enter, .am-popover-scale-leave-to {\n  opacity: 0;\n  transform: scale(0.75, 0.75);\n}\n\n/*透明度*/\n.am-transition-fade-enter-active, .am-transition-fade-leave-active {\n  opacity: 1;\n}\n.am-transition-fade-enter, .am-transition-fade-leave-to {\n  opacity: 0;\n}\n\n/*移动*/\n.am-transition-from-bottom-enter, .am-transition-from-bottom-leave-to {\n  transform: translateY(10%);\n  opacity: 0;\n}\n\n/*折叠动画*/\n.collapse-transition {\n  transition: 0.15s height ease-in-out, 0.15s padding-top ease-in-out, 0.15s padding-bottom ease-in-out;\n}\n\n/*屏幕大小判断*/\n/*清除浮动？*/\n.cst-scale-enter-active, .cst-scale-leave-active {\n  transform-origin: left;\n  transition: all 0.15s;\n}\n.cst-scale-enter, .cst-scale-leave-to {\n  transform: scale(1.2);\n}\n',"",{version:3,sources:["D:/6_workspace/1_idea/am-vue/examples/pages/example/components/modal-example.vue"],names:[],mappings:";AACA,iBAAiB;AACjB;;;EAGE;AACF,kBAAkB;AAClB,2FAA2F;AAC3F,0FAA0F;AAC1F,2FAA2F;AAC3F,iBAAiB;AACjB;AACA;IACI,wBAAwB;CAC3B;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,0BAA0B;CAC7B;CACA;;AAED,MAAM;AACN;EACE,yBAAyB;EACzB,oBAAoB;CACrB;AACD;EACE,yBAAyB;EACzB,sBAAsB;EACtB,WAAW;CACZ;;AAED,QAAQ;AACR;EACE,2BAA2B;EAC3B,WAAW;CACZ;AACD;EACE,WAAW;EACX,6BAA6B;CAC9B;;AAED,OAAO;AACP;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;;AAED,MAAM;AACN;EACE,2BAA2B;EAC3B,WAAW;CACZ;;AAED,QAAQ;AACR;EACE,sGAAsG;CACvG;;AAED,UAAU;AACV,SAAS;AACT;EACE,uBAAuB;EACvB,sBAAsB;CACvB;AACD;EACE,sBAAsB;CACvB",file:"modal-example.vue",sourcesContent:['\n@charset "UTF-8";\n/*\n*   power by    weishengjian\n*   datetime    2018/9/11 22:55\n*/\n/*@formatter:off*/\n/*---------------------------------------color-------------------------------------------*/\n/*---------------------------------------size-------------------------------------------*/\n/*---------------------------------------shape-------------------------------------------*/\n/*@formatter:on*/\n@keyframes am-rotating {\nfrom {\n    transform: rotate(0deg);\n}\n50% {\n    transform: rotate(180deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n\n/*缩放*/\n.am-transition-scale-enter-active, .am-transition-scale-leave-active {\n  transform-origin: center;\n  transform: scale(1);\n}\n.am-transition-scale-enter, .am-transition-scale-leave-to {\n  transform-origin: center;\n  transform: scale(0.6);\n  opacity: 0;\n}\n\n/*缩放过度*/\n.am-popover-scale-enter-active, .am-popover-scale-leave-active {\n  transition: all .1s linear;\n  opacity: 1;\n}\n.am-popover-scale-enter, .am-popover-scale-leave-to {\n  opacity: 0;\n  transform: scale(0.75, 0.75);\n}\n\n/*透明度*/\n.am-transition-fade-enter-active, .am-transition-fade-leave-active {\n  opacity: 1;\n}\n.am-transition-fade-enter, .am-transition-fade-leave-to {\n  opacity: 0;\n}\n\n/*移动*/\n.am-transition-from-bottom-enter, .am-transition-from-bottom-leave-to {\n  transform: translateY(10%);\n  opacity: 0;\n}\n\n/*折叠动画*/\n.collapse-transition {\n  transition: 0.15s height ease-in-out, 0.15s padding-top ease-in-out, 0.15s padding-bottom ease-in-out;\n}\n\n/*屏幕大小判断*/\n/*清除浮动？*/\n.cst-scale-enter-active, .cst-scale-leave-active {\n  transform-origin: left;\n  transition: all 0.15s;\n}\n.cst-scale-enter, .cst-scale-leave-to {\n  transform: scale(1.2);\n}\n'],sourceRoot:""}])},813:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.render=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-example example-page"},[o("div",{staticClass:"title"},[t._v("基本用法")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:function(e){t.show1=!t.show1}}},[t._v("normal")]),t._v(" "),o("am-modal",{attrs:{title:"基本用法",message:"快捷消息内容"},model:{value:t.show1,callback:function(e){t.show1=e},expression:"show1"}})],1),t._v(" "),o("div",{staticClass:"title"},[t._v("无遮罩")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:function(e){t.show2=!t.show2}}},[t._v('shadow="false"')]),t._v(" "),o("am-modal",{attrs:{title:"无遮罩",message:"快捷消息内容",shadow:!1},model:{value:t.show2,callback:function(e){t.show2=e},expression:"show2"}})],1),t._v(" "),o("div",{staticClass:"title"},[t._v("遮罩颜色")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:function(e){t.show3=!t.show3}}},[t._v('shadow-color="black"')]),t._v(" "),o("am-modal",{attrs:{title:"遮罩颜色",message:"快捷消息内容","shadow-color":"black"},model:{value:t.show3,callback:function(e){t.show3=e},expression:"show3"}})],1),t._v(" "),o("div",{staticClass:"title"},[t._v("对话框形状")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:function(e){(t.shape="fillet")&&(t.show4=!t.show4)}}},[t._v('shape="fillet"')]),t._v(" "),o("am-button",{on:{click:function(e){(t.shape="none")&&(t.show4=!t.show4)}}},[t._v('shape="none"')]),t._v(" "),o("am-modal",{attrs:{title:"对话框形状",message:"快捷消息内容",shape:t.shape},model:{value:t.show4,callback:function(e){t.show4=e},expression:"show4"}})],1),t._v(" "),o("div",{staticClass:"title"},[t._v("没有标题栏以及底部栏（默认两者都是存在并且会占用空间的）")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:function(e){t.show15=!t.show15}}},[t._v("no-header no-footer")]),t._v(" "),o("am-modal",{attrs:{title:"没有标题栏以及底部栏",message:"快捷消息内容","no-header":"","no-footer":""},model:{value:t.show15,callback:function(e){t.show15=e},expression:"show15"}})],1),t._v(" "),o("div",{staticClass:"title"},[t._v("自定义对话框展示动画transition-name")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:function(e){t.show5=!t.show5}}},[t._v("transition-name")]),t._v(" "),o("am-modal",{attrs:{title:"transition-name",message:"快捷消息内容","transition-name":"cst-scale"},model:{value:t.show5,callback:function(e){t.show5=e},expression:"show5"}})],1),t._v(" "),o("div",{staticClass:"title"},[t._v("自定义宽度以及高度")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:function(e){t.show6=!t.show6}}},[t._v("width/height")]),t._v(" "),o("am-modal",{attrs:{title:"width/height",message:"快捷消息内容",width:"600px",height:"600px"},model:{value:t.show6,callback:function(e){t.show6=e},expression:"show6"}})],1),t._v(" "),o("div",{staticClass:"title"},[t._v("全屏大小")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:function(e){t.show7=!t.show7}}},[t._v("full")]),t._v(" "),o("am-modal",{attrs:{title:"full",message:"快捷消息内容",full:""},model:{value:t.show7,callback:function(e){t.show7=e},expression:"show7"}})],1),t._v(" "),o("div",{staticClass:"title"},[t._v("显示消息级别")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button-group",[o("am-button",{attrs:{color:"primary"},on:{click:function(e){(t.type="primary")&&(t.show8=!t.show8)}}},[t._v('type="primary"')]),t._v(" "),o("am-button",{attrs:{color:"info"},on:{click:function(e){(t.type="info")&&(t.show8=!t.show8)}}},[t._v('type="info"')]),t._v(" "),o("am-button",{attrs:{color:"success"},on:{click:function(e){(t.type="success")&&(t.show8=!t.show8)}}},[t._v('type="success"')]),t._v(" "),o("am-button",{attrs:{color:"warn"},on:{click:function(e){(t.type="warn")&&(t.show8=!t.show8)}}},[t._v('type="warn"')]),t._v(" "),o("am-button",{attrs:{color:"error"},on:{click:function(e){(t.type="error")&&(t.show8=!t.show8)}}},[t._v('type="error"')])],1),t._v(" "),o("am-modal",{attrs:{title:"type",message:"快捷消息内容",type:t.type},model:{value:t.show8,callback:function(e){t.show8=e},expression:"show8"}})],1),t._v(" "),o("div",{staticClass:"title"},[t._v("确认按钮以及取消按钮")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:function(e){t.show9=!t.show9}}},[t._v("foot button")]),t._v(" "),o("am-modal",{attrs:{title:"确认按钮以及取消按钮",message:"快捷消息内容","confirm-button":"","cancel-button":""},on:{"on-confirm":function(e){return t.log("confirm")},"on-cancel":function(e){return t.log("cancel")}},model:{value:t.show9,callback:function(e){t.show9=e},expression:"show9"}})],1),t._v(" "),o("div",{staticClass:"title"},[t._v("对话框位置")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-radio-group",{model:{value:t.vertical,callback:function(e){t.vertical=e},expression:"vertical"}},[o("am-button",[t._v("vertical:"+t._s(t.vertical))]),t._v(" "),o("am-radio",{attrs:{"radio-key":"start",label:"start"}}),t._v(" "),o("am-radio",{attrs:{"radio-key":"center",label:"center"}}),t._v(" "),o("am-radio",{attrs:{"radio-key":"end",label:"end"}})],1),t._v(" "),o("am-radio-group",{model:{value:t.horizontal,callback:function(e){t.horizontal=e},expression:"horizontal"}},[o("am-button",[t._v("horizontal:"+t._s(t.horizontal))]),t._v(" "),o("am-radio",{attrs:{"radio-key":"start",label:"start"}}),t._v(" "),o("am-radio",{attrs:{"radio-key":"center",label:"center"}}),t._v(" "),o("am-radio",{attrs:{"radio-key":"end",label:"end"}})],1)],1),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:function(e){t.show10=!t.show10}}},[t._v("toggle")]),t._v(" "),o("am-modal",{attrs:{title:"vertical/horizontal",message:"快捷消息内容",vertical:t.vertical,horizontal:t.horizontal},model:{value:t.show10,callback:function(e){t.show10=e},expression:"show10"}})],1),t._v(" "),o("div",{staticClass:"title"},[t._v("通过left/right/top/bottom调整对话框位置")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",[t._v("left:")]),t._v(" "),o("am-number-input",{model:{value:t.left,callback:function(e){t.left=e},expression:"left"}}),t._v(" "),o("am-button",[t._v("right:")]),t._v(" "),o("am-number-input",{model:{value:t.right,callback:function(e){t.right=e},expression:"right"}}),t._v(" "),o("am-button",[t._v("top:")]),t._v(" "),o("am-number-input",{model:{value:t.top,callback:function(e){t.top=e},expression:"top"}}),t._v(" "),o("am-button",[t._v("bottom:")]),t._v(" "),o("am-number-input",{model:{value:t.bottom,callback:function(e){t.bottom=e},expression:"bottom"}})],1),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:function(e){t.show11=!t.show11}}},[t._v("toggle")]),t._v(" "),o("am-modal",{attrs:{title:"position",message:"快捷消息内容",left:t.left+"vw",right:t.right+"vw",top:t.top+"vh",bottom:t.bottom+"vh"},model:{value:t.show11,callback:function(e){t.show11=e},expression:"show11"}})],1),t._v(" "),o("div",{staticClass:"title"},[t._v("自定义内容插槽，标题栏插槽以及底部栏插槽")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:function(e){t.show12=!t.show12}}},[t._v("toggle")]),t._v(" "),o("am-modal",{attrs:{shape:"none"},model:{value:t.show12,callback:function(e){t.show12=e},expression:"show12"}},[o("div",[t._v("\n                 自定义内容\n             ")]),t._v(" "),o("div",{attrs:{slot:"head"},slot:"head"},[t._v("自定义顶部栏")]),t._v(" "),o("div",{attrs:{slot:"foot"},slot:"foot"},[t._v("自定义底部栏")])])],1),t._v(" "),o("div",{staticClass:"title"},[t._v("通过渲染函数自定义内容、标题栏、底部栏的渲染内容（注意：渲染函数渲染的内容与插槽内容不能共存，这里渲染函数优先显示）")]),t._v(" "),o("am-button",{on:{click:function(e){t.show14=!t.show14}}},[t._v("toggle")]),t._v(" "),o("am-modal",{attrs:{shape:"none","head-render":t.headRender,"content-render":t.contentRender,"foot-render":t.footRender},model:{value:t.show14,callback:function(e){t.show14=e},expression:"show14"}}),t._v(" "),o("div",{staticClass:"title"},[t._v("最大化按钮")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:function(e){t.show13=!t.show13}}},[t._v("maxable")]),t._v(" "),o("am-modal",{attrs:{title:"maxable",message:"快捷消息内容",maxable:"","confirm-button":"","cancel-button":""},model:{value:t.show13,callback:function(e){t.show13=e},expression:"show13"}})],1),t._v(" "),o("h3",[t._v("以服务的形式调用对话框提示信息，$modal.show(properties)，通过properties可以modal组件的所有的props属性。")]),t._v(" "),o("div",{staticClass:"title"},[t._v("消息级别")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:function(e){t.$modal.primary({title:"modal title",message:"modal message"})}}},[t._v("$modal primary")]),t._v(" "),o("am-button",{on:{click:function(e){t.$modal.info({title:"modal title",message:"modal message"})}}},[t._v("$modal info")]),t._v(" "),o("am-button",{on:{click:function(e){t.$modal.success({title:"modal title",message:"modal message"})}}},[t._v("$modal success")]),t._v(" "),o("am-button",{on:{click:function(e){t.$modal.warn({title:"modal title",message:"modal message"})}}},[t._v("$modal warn")]),t._v(" "),o("am-button",{on:{click:function(e){t.$modal.error({title:"modal title",message:"modal message"})}}},[t._v("$modal error")])],1),t._v(" "),o("div",{staticClass:"title"},[t._v("确认按钮以及取消按钮")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:t.showConfirm}},[t._v("$modal.show:onConfirm+onCancel")])],1),t._v(" "),o("div",{staticClass:"title"},[t._v("输入对话框")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:t.showInput}},[t._v("$modal.show:hasInput")])],1),t._v(" "),o("div",{staticClass:"title"},[t._v("通过渲染函数自定义渲染内容")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{on:{click:t.showRender}},[t._v("$modal.show:render")])],1),t._v(" "),o("h3",[t._v("\n        窗口最小化，窗口最小化有一个前提，首先是，无论是使用插槽或者render渲染函数，其内容都有可能与当前页面组件的数据进行绑定，\n        窗口最小化之后，用户可能会通过路由跳转到其他页面，如果是普通的路由，当前的页面数据就会消失，为了确保窗口数据绑定正确，也就是为了\n        确保当前页面数据不会丢失，当前页面所在路由应该使用keep-alive包裹起来，进行页面缓存，如果窗口不与当前页面数据进行绑定，而是\n        一个静态页面或者与vuex中的状态进行绑定，则可以无视上面几句话\n    ")]),t._v(" "),o("div",{staticClass:"title"},[t._v("窗口最小化")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button-group",[o("am-button",{attrs:{label:t.show16+"->>minimize"},on:{click:function(e){t.show16=!t.show16}}})],1),t._v(" "),o("am-modal",{attrs:{title:"最小化窗口标题",message:"最小化窗口内容",minable:"",maxable:""},model:{value:t.show16,callback:function(e){t.show16=e},expression:"show16"}},[t._v("\n            自定义内容\n        ")])],1),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button-group",[o("am-button",{attrs:{label:"primary",color:"primary"},on:{click:function(e){t.newModal("primary")}}}),t._v(" "),o("am-button",{attrs:{label:"info",color:"info"},on:{click:function(e){t.newModal("info")}}}),t._v(" "),o("am-button",{attrs:{label:"success",color:"success"},on:{click:function(e){t.newModal("success")}}}),t._v(" "),o("am-button",{attrs:{label:"warn",color:"warn"},on:{click:function(e){t.newModal("warn")}}}),t._v(" "),o("am-button",{attrs:{label:"error",color:"error"},on:{click:function(e){t.newModal("error")}}})],1)],1),t._v(" "),o("div",{staticClass:"title"},[t._v("窗口最小化")]),t._v(" "),o("div",{staticClass:"example-row"},[o("am-button",{attrs:{label:"new modal"},on:{click:t.getNewModal}}),t._v(" "),o("am-button",{attrs:{label:"toggle new modal"},on:{click:t.toggloNewDialog}}),t._v(" "),o("am-button",{attrs:{label:"destroyed new modal"},on:{click:t.destroyNewDialog}})],1)],1)},e.staticRenderFns=[]}});
//# sourceMappingURL=11.chunk.js.map