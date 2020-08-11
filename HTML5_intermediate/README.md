<!--
 * @Brief:
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-11 22:01:26
-->

# HTML5 深入学习：

## attribute 和 property

### 什么是 attribute？

> html 标签的预定义和自定义属性称为 attribute

### 什么是 property？

> js 原生队形的直接属性，统称为 property

### 什么是布尔值属性？

> property 中属性值为 true/false 的属性

### attribute 和 property 的同步关系：

> 非布尔属性：两者实时同步
> 布尔属性：
>
> > > property 永远都不会同步 attribute
> > > 在没有动过 property 的情况下，attribute 会同步 property，在动过 property 的情况下，attribute 不会同步 property

### 注意

1.  用户操作的是 property

2.  浏览器支持的是 property

3.  在操作非布尔值属性时，使用 attr()成本更低，prop()也可以使用;在操作布尔值属性时，一定使用 prop().

### attr()与 prop()区分图

![attr()与 prop()区分图](https://images2015.cnblogs.com/blog/42045/201607/42045-20160705135918967-255741899.png)

## h5 中的小功能

### classList 获取类名列表

```javascript
var testNode = document.querySelector("#test");
// console.log(testNode.className);
testNode.classList.add("s5");
testNode.classList.remove("s2");

// toggle切换。如果数组中存在该值则删除，如果不存在，就添加
testNode.classList.toggle("s2");
console.log(testNode.classList);
```

### dataset:js 中针对元素自定义属性的方法

```javascript
    <body>
        <div
            id="test"
            class="s1 s2"
            data-defined="definedValue"
            data-defined-sec="TheSecond_"
        ></div>
    </body>
    <script>
        var testNode = document.getElementById("test");
        // 修改自定义属性
        testNode.setAttribute("data-defined", "definedModifyValue");

        //在js中存在针对自定义属性的方法dataset
        console.log(testNode.dataset.defined);

        // 输出data-defined-sec="TheSecond_"自定义属性
        //第二个-后面使用驼峰命名法
        console.log(testNode.dataset.definedSec);
    </script>
```

### contenteditable 可编辑的

> html 属性，值为 true，元素内容可编辑

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            #test {
                width: 200px;
                height: 200px;
                background-color: pink;
            }
        </style>
    </head>
    <body>
        <div id="test" contenteditable="true">
            dajsdsajjsald
        </div>
    </body>
    <script>
        var testNode = document.getElementById("test");
    </script>
</html>
```

## H5 和 H4 的区别

### HTML5

-   html5 约等于 HTML+CSS+JS
-   DOCTYPE 和浏览器渲染模式

    -   DOCTYPE，或者称为 Document Type Declaration（文档类型声明，缩写 DTD）
    -   通常情况下 DOCTYPE 为英语一个 HTML 文档的最前面，位于根元素 html 标签之前
    -   因为浏览器必须在解析 HTML 文档正文之前就确定当前文档的类型，以决定其需要采用的渲染模式
    -   不同的渲染模式会影响到浏览器对于 CSS 代码甚至 js 代码的解析

-   document.compatMode,返回当前网页处于什么模式

### 优势

-   跨平台：通过浏览器
-   快速迭代
-   降低成本
-   导流入口多
-   分发效率高

## 语义化标签

### 常用语义化标签

        <hgroup></hgroup>
        <header></header>
        <nav></nav>
        <section></section>
        <footer></footer>
        <article></article>
        <aside></aside>

### 语义化的好处

-   HTML5 可以让更多语义化结构化的代码标签代替大量无意义的 div 标签
-   这种语义化的特性提升了网页的质量和语义
-   对搜索引擎更加的友好
-   没有任何默认样式，功能就是代替 div 功能的一部分

## canvas 基本用法

1.  什么是 canvas
    -   canvas 是 HTML5 新增的元素，可用于通过使用 js 中的脚本来绘制图形
    -   例如，它可以用于绘制图形创建动画。
    -   canvas 标签默认宽高为 300px\*150px
2.  替换内容
    -   canvas 很容易定义一些替代内容，由于某些较老的浏览器（IE9 之前）不支持 canvas
    -   但在这些浏览器上，你应该要给用户展示些替代内容
    -   只需要在\<canvas>标签中提供替换内容就可以
        > 支持 canvas 的浏览器将会忽略在容器中包含的内容，并且只是正常渲染 canvas
        > 不支持 canvas 的浏览器会显示代替内容
3.  canvas 标签的两个属性
    -   \<canvas>看起来和\<img>元素很像，唯一不同的就是它没有 src 和 alt 属性
    -   它只有两个属性 width 和 height
    -   不能用 css 设置这两个属性
        -   html 属性设置宽高时，只影响画布本身大小，不影响画布中内容
        -   css 属性设置宽高，不但会影响画布本身宽高，还会使画布中的内容等比例缩放（缩放参照与画布默认的尺寸）
    -   当没有设置宽高时，canvas 会初始化默认宽高为 300px\*150px
    -   画布宽高

### 渲染上下文

#### getContext() 方法

-   这个方法是用来获得渲染上下文和它的绘画功能。getContext()只有一个参数，上下文的格式。
-   绘制矩形

    -   fillRect(x, y, width, height)
        绘制一个填充的矩形
    -   strokeRect(x, y, width, height)
        绘制一个矩形的边框
    -   clearRect(x, y, width, height)
        清除指定矩形区域，让清除部分完全透明。
    -   上面提供的方法之中每一个都包含了相同的参数。x 与 y 指定了在 canvas 画布上所绘制的矩形的左上角（相对于原点）的坐标。width 和 height 设置矩形的尺寸。

    ```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <title>Document</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                }
                html,
                body {
                    height: 100%;
                    overflow: hidden;
                }
                body {
                    background-color: pink;
                }
                canvas {
                    background-color: gray;
                    /* width: 500px;
                    height: 500px; */
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                }
            </style>
        </head>
        <body>
            <!-- 默认300*150的画布 -->
            <canvas id="test" width="300px" height="300px">
                <span>
                    您的浏览器不支持画布元素，请您换成最新的浏览器
                </span>
            </canvas>
        </body>
        <script>
            window.onload = function () {
                var testNode = document.getElementById("test");
                //判断是否存在画笔
                if (testNode.getContext) {
                    var ctx = testNode.getContext("2d");
                    // 绘制矩形
                    ctx.fillStyle = "rgb(222,123,124)";
                    ctx.fillRect(0, 0, 100, 100);
                }
            };
        </script>
    </html>
    ```

-   moveTo(坐标)绘制路径

    -   图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。使用路径绘制图形需要一些额外的步骤。

        1.  首先，你需要创建路径起始点。
        2.  然后你使用画图命令去画出路径。
        3.  之后你把路径封闭。
        4.  一旦路径生成，你就能通过描边或填充路径区域来渲染图形。

    -   以下是所要用到的函数：

        -   beginPath()
            新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
        -   closePath()
            闭合路径之后图形绘制命令又重新指向到上下文中。
        -   stroke()
            通过线条来绘制图形轮廓。
            不会自动调用 closePath()
        -   fill()
            通过填充路径的内容区域生成实心的图形。
            会自动调用 closePath()

**生成路径步骤**

1.  生成路径的第一步叫做 beginPath()。本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，所有的子路径（线、弧形、等等）构成图形。而每次这个方法调用之后，列表清空重置，然后我们就可以重新绘制新的图形。

    > 注意：当前路径为空，即调用 beginPath()之后，或者 canvas 刚建的时候，第一条路径构造命令通常被视为是 moveTo（），无论实际上是什么。出于这个原因，你几乎总是要在设置路径之后专门指定你的起始位置。

2.  第二步就是调用函数指定绘制路径，本文稍后我们就能看到了。

3.  第三，就是闭合路径 closePath(),不是必需的。这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做。

    > 注意：当你调用 fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用 closePath()函数。但是调用 stroke()时不会自动闭合。

### 思想

1.  路径容器
    每次调用路径 api 时都会往路径容器中做登记
    调用 beginPath()，清空整个路径容器
2.  样式容器
    每次调用 api 时，都会往样式容器里做登记
    调用 save 时，将样式容器里的状态压入样式栈
    调用 restore 时，将样式栈的栈顶状态弹出到样式容器，进行覆盖
3.  样式栈
    存储样式的栈

### 曲线

-   ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);

-   ctx.arcTo(x1,y1,x2,y2,radius)  
    起始点为 moveTo(x0,y0)给定点
    根据给定的控制点和半径或一点圆弧
    肯定会从(x1,y1),但不一定经过(x2,y2);(x2,y2)只是控制一个方向

    ```javascript
    var canvas = document.getElementById("test");
    //判断是否存在画笔
    if (canvas.getContext) {
        //定义画图布局为2d
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(200, 50);
        ctx.lineTo(200, 200);
        ctx.stroke();

        //三点确定一个三角形
        ctx.beginPath();
        ctx.moveTo(50, 50); //第一个控制点
        ctx.arcTo(200, 50, 200, 200, 50); //第二个和第三个控制点
        ctx.stroke();
    }
    ```

-   两次贝塞尔 quadraticCurveTo(cpa1x,cp1y,x,y)
    绘制两次贝塞尔曲线，（cp1x，cp1y） 为一个控制点，（x，y） 为结束点
    起始点为 moveTo(x0,y0)给定点
    必过(x0,y0)、(x,y)控制点
-   三次贝塞尔曲线 bezierCurveTo(cpa1x,cp1y,cpa2x,cp2y,x,y)
    起始点为 moveTo(x0,y0)给定点
    必过(x0,y0)、(x,y)控制点

### 变换

-   translste(x,y)
    用它来移动 canvas 的原点到一个不同的位置
    (x,y)表示左右和上下偏移量
    在 canvas 中 translate 是累加的
-   ratate(angle)
    angle 旋转的角度，顺时针方向，以弧度为单位的值；deg\*Math.PI/180
    旋转中心是 canvas 的原点，改变原点用 translate
    在 canvas 中 rotate 是累加的
-   scale(x,y)
    scale 方法接受两个参数。(x,y)分别是横轴和纵轴的缩放因子，他们都必须是正值
    值比 1.0 小表示缩小，比 1.0 大表示方法，1.0 时什么都不变
    缩放一般我们用它来增减图形在 canvas 中的像素数目，对图形位图进行缩小或放大
    在 canvas 中 scale 时累乘的
