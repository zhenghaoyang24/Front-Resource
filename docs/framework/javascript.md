---
title: JavaScript库
editLink: true
---
# JS 库

## 界面构建

### React

[![My Skills](https://skillicons.dev/icons?i=react)](https://skillicons.dev)

`React` 是一个用于构建用户界面的 `JavaScript` 库。它采用组件化开发模式，通过虚拟 DOM 实现高效的 UI 更新，拥有强大的生态系统，
是每一个前端开发者都应该学习的库。

###### 资源地址：  

- 仓库资源：[Github地址](https://github.com/facebook/react)   
- 官方文档：[文档地址](https://zh-hans.react.dev/)

---

### Vue

[![My Skills](https://skillicons.dev/icons?i=vue)](https://skillicons.dev)

`Vue` 是一个轻量级、渐进式的 `JavaScript` 框架，由尤雨溪开发。易于上手，易学易用，性能出色，适用场景丰富的 Web 前端框架，
同样拥有丰富的生态， 是每一个前端开发者必会的前端框架。

###### 资源地址：

- 仓库资源：[Github地址](https://github.com/vuejs/vue)
- 官方文档：[文档地址](https://cn.vuejs.org/)

---

### Angular

[![My Skills](https://skillicons.dev/icons?i=angular)](https://skillicons.dev)

`Angular` 是一个适用于任何规模的 Web 应用开发框架，可以构建 Web、手机或桌面应用。
它集声明式模板、依赖注入、端到端工具和一些最佳实践于一身，帮助开发者更轻松的构建应用。

###### 资源地址：

- 仓库资源：[Github地址](https://github.com/angular/angular)
- 官方文档：[文档地址](https://angular.cn/)


## 工具库

### jQuery

[![My Skills](https://skillicons.dev/icons?i=jquery)](https://skillicons.dev)

最经典的 JS 库，简化了 DOM 操作、事件处理、动画和 AJAX 请求。虽然现代开发中逐渐被取代，但在旧项目中仍然广泛使用。

官网: https://jquery.com

---

### Lodash

<img style="width: 45px;margin: 10px 0" src="https://www.lodashjs.com/img/logo.png">

`Lodash` 是一个一致性、模块化、高性能的 `JavaScript` 实用工具库，
通过降低 `array`、`number`、`objects`、`string` 等等的使用难度从而让 `JavaScript` 变得更简单。

![start](https://img.shields.io/github/stars/lodash/lodash?style=social)

###### 资源地址：
- 仓库资源：[Github地址](https://github.com/lodash/lodash)
- 官方文档：[文档地址](https://www.lodashjs.com/)

---

### Axios

<img style="height:30px;margin: 10px 0" src="https://www.axios-http.cn/img/logo.png">

`Axios` 是一个基于 `Promise` 的 `HTTP` 客户端库，用于在浏览器和 Node.js 中发送 HTTP 请求。
简单易用，功能强大，是前端开发中最常用的网络请求工具之一。

![start](https://img.shields.io/github/stars/axios/axios?style=social)
###### 资源地址：
- 仓库资源：[Github地址](https://github.com/axios/axios)
- 官方文档：[文档地址](https://www.axios-http.cn/)

## 本地存储库

### Dexie.js

<span style="display:flex;align-items: center;"><img style="height:30px;margin: 10px 0" src="https://dexie.org/assets/images/dexie-logo-icon.svg">
<span style="margin-left:-15px;font-size:30px;color:white;">Dexie</span>
</span>

`dexie.js` 是一个对浏览器 `indexDB` 的包装库，使得开发者可以更方便地操作 `indexDB`，进行本地化存储。

![start](https://img.shields.io/github/stars/dexie/Dexie.js?style=social)
- 特性
  - 类似于后端数据库的高级查询，并且支持链式调用。
  - 更丰富的索引定义，建立索引变得非常简单，并且支持多值索引和复合索引。
  - 接近原生的性能。
###### 资源地址：
- 仓库资源：[Github地址](https://github.com/dexie/Dexie.js)
- 官方文档：[文档地址](https://dexie.org/)

---

### localForage
`localForage` 是一个基于 `IndexedDB`、`WebSQL` 和 `localStorage` 的封装库，
它提供了一种简单且一致的方式来在浏览器中进行数据存储，使得开发者可以方便地在不同的浏览器和平台上实现持久性存储，
而无需担心底层存储技术的不同。

![start](https://img.shields.io/github/stars/localForage/localForage?style=social)
- 特性：
  - 简单易用的 API ：提供类似 localStorage 的 API（如 setItem、getItem、removeItem），学习成本低。
  - 异步操作：在存储和检索数据时，不会阻塞应用程序的执行，提高了性能和用户体验。
  - 跨浏览器支持：根据浏览器的支持情况自动选择最佳的存储后端（优先级：IndexedDB > WebSQL > localStorage）。兼容现代浏览器和旧版浏览器。
  - 大容量存储：支持存储大量数据（通常为 50MB 或更多，取决于浏览器和存储后端）。
  - 支持多种数据类型：可以存储字符串、数字、对象、数组、Blob 等。

###### 资源地址：
- 仓库资源：[Github地址](https://github.com/localForage/localForage)
- 官方文档：[中文文档](https://localforage.docschina.org/)

---

### PouchDB

<img style="height:30px;margin: 10px 0" src="https://pouchdb.com/static/img/logo.svg">

`PouchDB` 是一个开源的 `JavaScript` 数据库，设计用于在浏览器和 `Node.js` 环境中运行。
它基于 `CouchDB` 的协议，支持数据的离线存储和同步，非常适合构建离线优先（Offline-First）的 `Web` 应用 或混合移动应用。

![start](https://img.shields.io/github/stars/pouchdb/pouchdb?style=social)
- 特性
  - 数据同步：支持与 CouchDB 或兼容的服务器（如 Cloudant）进行双向同步。
  - 简单易用的 API：提供类似 NoSQL 的 API，支持文档的增删改查操作。
  - 跨平台支持：可以在浏览器、Node.js 和移动端（通过 Cordova 或 Ionic）运行。

###### 资源地址：
- 仓库资源：[Github地址](https://github.com/pouchdb/pouchdb)
- 官方文档：[中文文档](https://pouchdb.com/)


