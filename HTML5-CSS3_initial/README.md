<!--
 * @Brief:
 * @LastEditors: Jerry Lee
 * @LastEditTime: 2020-07-23 13:18:18
-->

浏览器分成两部分：

-   1、渲染引擎（即：浏览器内核）

-   2、JS 引擎

### 1、渲染引擎（浏览器内核）

浏览器所采用的「渲染引擎」也称之为「浏览器内核」，用来解析 HTML 与 CSS。渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。

**渲染引擎是浏览器兼容性问题出现的根本原因。**

渲染引擎的英文叫做 Rendering Engine。通俗来说，它的作用就是：读取网页内容，计算网页的显示方式并显示在页面上。

### 2、JS 引擎

也称为 JS 解释器。 用来解析网页中的 JavaScript 代码，对其处理后再运行。

浏览器本身并不会执行 JS 代码，而是通过内置 JavaScript 引擎(解释器) 来执行 JS 代码 。JS 引擎执行代码时会逐行解释每一句源码（转换为机器语言），然后由计算机去执行。所以 JavaScript 语言归为脚本语言，会逐行解释执行。

参考链接：

-   [主流浏览器内核及 JS 引擎](https://juejin.im/post/5ada727c518825670b33a584)

## 浏览器工作原理

![](http://img.smyhvae.com/20180124_1700.png)

1、User Interface 用户界面，我们所看到的浏览器

2、Browser engine 浏览器引擎，用来查询和操作渲染引擎

3、Rendering engine 用来显示请求的内容，负责解析 HTML、CSS

4、Networking 网络，负责发送网络请求

5、JavaScript Interpreter(解析者) JavaScript 解析器，负责执行 JavaScript 的代码

6、UI Backend UI 后端，用来绘制类似组合框和弹出窗口

7、Data Persistence(持久化) 数据持久化，数据存储 cookie、HTML5 中的 sessionStorage
