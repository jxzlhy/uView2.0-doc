(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{521:function(s,t,a){"use strict";a.r(t);var e=a(22),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"下载安装方式配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载安装方式配置"}},[s._v("#")]),s._v(" 下载安装方式配置")]),s._v(" "),a("h3",{attrs:{id:"关于scss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于scss"}},[s._v("#")]),s._v(" 关于SCSS")]),s._v(" "),a("p",[s._v("uView依赖SCSS，您必须要安装此插件，否则无法正常运行。")]),s._v(" "),a("ul",[a("li",[s._v("如果您的项目是由"),a("code",[s._v("HBuilder X")]),s._v('创建的，相信已经安装scss插件，如果没有，请在HX菜单的 工具->插件安装中找到"scss/sass编译"插件进行安装，\n如不生效，重启HX即可')]),s._v(" "),a("li",[s._v("如果您的项目是由"),a("code",[s._v("vue-cli")]),s._v("创建的，请通过以下命令安装对sass(scss)的支持，如果已安装，请略过。")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装node-sass")]),s._v("\nnpm i node"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("sass "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 安装sass-loader")]),s._v("\nnpm i sass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("loader "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v("\n")])])]),a("h3",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),a("p",[s._v("在进行配置之前，请确保您已经根据"),a("RouterLink",{attrs:{to:"/components/install.html"}},[s._v("安装")]),s._v("中的步骤对uView进行了下载安装，如果没有，请先下载安装。")],1),s._v(" "),a("h3",{attrs:{id:"配置步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置步骤"}},[s._v("#")]),s._v(" 配置步骤")]),s._v(" "),a("h4",{attrs:{id:"_1-引入uview主js库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-引入uview主js库"}},[s._v("#")]),s._v(" 1. 引入uView主JS库")]),s._v(" "),a("p",[s._v("在项目根目录中的"),a("code",[s._v("main.js")]),s._v("中，引入并使用uView的JS库，注意这两行要放在"),a("code",[s._v("import Vue")]),s._v("之后。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// main.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" uView "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uview-ui"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("uView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h4",{attrs:{id:"_2-在引入uview的全局scss主题文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在引入uview的全局scss主题文件"}},[s._v("#")]),s._v(" 2. 在引入uView的全局SCSS主题文件")]),s._v(" "),a("p",[s._v("在项目根目录的"),a("code",[s._v("uni.scss")]),s._v("中引入此文件。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* uni.scss */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'uview-ui/theme.scss'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n")])])]),a("h4",{attrs:{id:"_3-引入uview基础样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-引入uview基础样式"}},[s._v("#")]),s._v(" 3. 引入uView基础样式")]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("注意！")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("App.vue")]),s._v("中"),a("strong",[s._v("首行")]),s._v('的位置引入，注意给style标签加入lang="scss"属性')])]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("<style lang="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scss"')]),s._v(">\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uview-ui/index.scss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n</style>\n")])])]),a("h4",{attrs:{id:"_4-配置easycom组件模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置easycom组件模式"}},[s._v("#")]),s._v(" 4. 配置easycom组件模式")]),s._v(" "),a("p",[s._v("此配置需要在项目根目录的"),a("code",[s._v("pages.json")]),s._v("中进行。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("温馨提示")]),s._v(" "),a("ol",[a("li",[s._v("uni-app为了调试性能的原因，修改"),a("code",[s._v("easycom")]),s._v("规则不会实时生效，配置完后，您需要重启HX或者重新编译项目才能正常使用uView的功能。")]),s._v(" "),a("li",[s._v("请确保您的"),a("code",[s._v("pages.json")]),s._v("中只有一个"),a("code",[s._v("easycom")]),s._v("字段，否则请自行合并多个引入规则。")])])]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// pages.json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"easycom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"^u-(.*)"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@/uview-ui/components/u-$1/u-$1.vue"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此为本身已有的内容")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ......")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);