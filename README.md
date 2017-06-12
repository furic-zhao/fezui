# fezui
fezui 是一套基于 [Vue](https://github.com/vuejs/vue) 的支持多终端的开源UI交互组件库，致力于积木式的快速构建项目，提升产品体验和开发效率、降低开发和维护成本。

## fezui基本特性
- 丰富的组件，涵盖常用场景
- 提供友好的 API ，自由灵活地使用空间
- 细致、漂亮的 UI、可自定义主题

## 安装
### NPM 安装
推荐使用 npm 来安装，享受生态圈和工具带来的便利，更好地和 [fez模块化工程开发框架](https://github.com/furic-zhao/fez) 或 browserify/webpack 配合使用。

````bash
$ npm install fezui --save
````

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
    <link rel="stylesheet" type="text/css" href="http://unpkg.com/fezui/dist/css/fezui.css">
</head>
<body>
<div id="app">
    <i-button @click="show">Click me!</i-button>
    <Modal v-model="visible" title="Welcome">欢迎使用 fezui</Modal>
</div>
<script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
<script type="text/javascript" src="http://unpkg.com/fezui/dist/js/fezui.min.js"></script>
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

## 快速上手
### 使用之前
高效的开发，离不开基础工程的搭建。在开始使用 fezui 之前，有必要先了解以下基础知识，我们也假设您已经写过 Vue，并掌握了下面的内容。
- [Vue组件](https://cn.vuejs.org/v2/guide/components.html)
- [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

以下概念贯穿 fezui 前后，建议开发者花点时间来了解。
- `props` 传递数据
- `slot` 内容分发
- `events` `$emit` `@click` 事件

### 引入 fezui
一般在入口页面 `index.js` 中如下配置：

````bash
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';    // 路由挂载
import Routers from './router.js';       // 路由列表
import fezui from 'fezui';
import 'fezui/dist/css/fezui.css';    // 使用 CSS

Vue.use(VueRouter);
Vue.use(fezui);

// 路由配置
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
````

### 按需引用
如果您想在项目中按需使用组件，减少文件体积，可以这样写：

````bash
import Checkbox from 'fezui/src/components/checkbox';
````

### 特别提醒
- 按需引用仍然需要导入样式，即在 `index.js` 或根组件执行 `import 'fezui/src/styles/index.less';`
- 按需引用是直接引用的组件库源代码，必须要依赖工程编译。

### 组件使用规范
使用`:prop`传递数据格式为 数字、布尔值或函数时，必须带`:`(兼容String除外，具体看组件文档)，比如：

````bash
正确的使用方法：
<Page :current="1" :total="100"></Page>

错误的使用方法：
<Page current="1" total="100"></Page>
````