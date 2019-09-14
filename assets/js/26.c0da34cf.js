(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{81:function(s,t,a){"use strict";a.r(t);var r=a(0),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"gradle-简单-task-的创建和使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gradle-简单-task-的创建和使用","aria-hidden":"true"}},[s._v("#")]),s._v(" Gradle 简单 Task 的创建和使用")]),s._v(" "),a("p",[s._v("Task表示Gradle构建的单个原子操作，例如：编译class、打包成jar。")]),s._v(" "),a("h2",{attrs:{id:"hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world","aria-hidden":"true"}},[s._v("#")]),s._v(" Hello World")]),s._v(" "),a("ol",[a("li",[s._v("将以下Task添加到 build.gradle 文件末尾。")])]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("task hello "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    print "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello Gradle Task!'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("执行命令："),a("code",[s._v("./gradlew hello")]),s._v("，控制台会执行hello打印出'Hello Gradle Task!'，这里使用Groovy DSL作为脚本编写语言。")]),s._v(" "),a("li",[s._v("task关键字是声明任务，hello为任务名，hello后面跟随的闭包是在运行是执行的脚本。")])]),s._v(" "),a("h2",{attrs:{id:"将src目录复制到输出目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将src目录复制到输出目录","aria-hidden":"true"}},[s._v("#")]),s._v(" 将src目录复制到输出目录")]),s._v(" "),a("ol",[a("li",[s._v("将以下Task添加到 build.gradle 文件末尾。")])]),s._v(" "),a("div",{staticClass:"language-groovy line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-groovy"}},[a("code",[s._v("task "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("copy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Copy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"Custom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"Copies sources to the dest directory"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    from "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"src"')]),s._v("\n    into "),a("span",{pre:!0,attrs:{class:"token string gstring"}},[s._v('"dest"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("执行命令："),a("code",[s._v("./gradlew copy")]),s._v("，gradle会将src目录复制到dest目录。")]),s._v(" "),a("li",[s._v("这里 group 和 description 可以使任何内容，你也可以忽略他们，但如果忽略，他们讲将不会出现在task输出中。")]),s._v(" "),a("li",[s._v("这里 task 接收的第一个参数 "),a("code",[s._v("type: Copy")]),s._v(" 是 Gradle 的一个内置类型，将文件复制到目标目录，\n具体可以查看 "),a("a",{attrs:{href:"https://docs.gradle.org/4.10.3/dsl/org.gradle.api.tasks.Copy.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Copy API 的官方文档"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);