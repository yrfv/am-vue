webpackJsonp([20],{579:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(611),u=t.n(a);for(var l in a)"default"!==l&&function(e){t.d(n,e,function(){return a[e]})}(l);var i=t(861),r=(t.n(i),t(1)),s=Object(r.a)(u.a,i.render,i.staticRenderFns,!1,null,null,null);n.default=s.exports},588:function(e,n,t){"use strict";e.exports={locale:"en-US",languageName:"English(United State)",confirmText:"confirm",cancelText:"cancel",date:{yearUnit:"Year",monthUnit:"Month",month:["January","February","March","April","May","June","July","August","September","October","November","December"],week:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]}}},611:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=l(t(243)),u=l(t(588));function l(e){return e&&e.__esModule?e:{default:e}}n.default={name:"i18n-example",data:function(){return{langs:[a.default,u.default]}}}},861:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.render=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"i18n-example example-page"},[t("div",{staticClass:"title"},[e._v("\n        amvue的i18n实现原理比较简单，只有语言切换的功能，无法与vue-i18n相比较\n    ")]),e._v(" "),t("div",{staticClass:"title"},[e._v("\n        基本用法，语言切换\n    ")]),e._v(" "),t("div",{staticClass:"example-row"},[t("am-button",[e._v(e._s(e.$amlocale.languageName))]),e._v(" "),t("am-button-group",e._l(e.langs,function(n,a){return t("am-button",{key:a,on:{click:function(t){e.$ami18n.setLocale(n)}}},[e._v("\n                "+e._s(n.languageName)+"\n            ")])}))],1),e._v(" "),t("div",{staticClass:"title"},[e._v("\n        amvue语言文件全部放在amvue/locale/lang/目录下，使用npm构建的用户可以直接通过 "),t("br"),e._v("\n        "+e._s("import zhCN from 'amvue/locale/lang/zh-CN.js'")+" 引入需要的语言"),t("br"),e._v("\n        然后使用"+e._s("$ami18n.setLocale(zhCN)")+"切换到该语言，如果是cdn或者以js文件形式引入amvue的开发者，需要到github上自行下载语言文件，自行引入\n    ")]),e._v(" "),t("div",{staticClass:"title"},[e._v("\n        目前amvue仍处于1.0开发阶段，只支持中英文，后续会支持更多语言，敬请期待……\n    ")])])},n.staticRenderFns=[]}});
//# sourceMappingURL=20.chunk.js.map