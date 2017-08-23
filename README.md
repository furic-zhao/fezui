# FEZUI

FEZUI 是一套基于 [Vue](https://github.com/vuejs/vue)  的支持多终端的用户界面交互组件库，致力于积木式的快速构建项目，自动适配PC端、手机端、Ipad端以及微信端，或内嵌各种第三方Android、IOS的APP中使用，提升产品体验和开发效率、降低开发和维护成本。

## FEZUI基本特性
- 丰富的组件、积木式快速构建用户界面
- 提供友好的 API 自动适配PC端、手机端、Pad端及各种大小屏幕
- 基于ES6 Module模块化组织前端代码
- 提供友好的 API ，自由灵活的功能定制
- 配套细致、专业的UI及交互、可自定义主题

## 安装
### 通过 Bower 进行安装
可以通过 Bower 安装并管理 FEZUI 的 Less、CSS、JavaScript 和字体文件。

````bash
$ bower install fezui --save
````

### 通过 NPM 安装

FEZUI可以使用 npm 来安装，可以和 [fez模块化工程开发框架](https://github.com/furic-zhao/fez) 或 browserify/webpack及其它工程框架 配合使用。

### CDN 引入

通过 [unpkg.com/fezui](https://unpkg.com/fezui/) 可以看到 fezui 最新版本的资源，也可以切换版本选择需要的资源，在页面上引入 js 和 css 文件即可开始使用：

````bash
<!-- 引入Vue -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- 引入样式 -->
<link rel="stylesheet" href="//unpkg.com/fezui/dist/css/fezui.css">
<!-- 引入组件库 -->
<script src="//unpkg.com/fezui/dist/js/fezui.min.js"></script>
````

- 示例
通过 CDN 可以快速使用 fezui 写出一个示例，您可以复制下面代码或[在线预览](http://output.jsbin.com/dahenov)。

````bash
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>fezui example</title>
    <link rel="stylesheet" type="text/css" href="//unpkg.com/fezui/dist/css/fezui.css">
</head>
<body>
<div id="app">
    <i-button @click="show">Click me!</i-button>
    <Modal v-model="visible" title="Welcome">欢迎使用 fezui</Modal>
</div>
<script type="text/javascript" src="//vuejs.org/js/vue.min.js"></script>
<script type="text/javascript" src="//unpkg.com/fezui/dist/js/fezui.min.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            visible: false
        },
        methods: {
            show: function () {
                this.visible = true;
            }
        }
    })
  </script>
</body>
</html>
````