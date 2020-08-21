<!--
 * @Brief:
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-21 12:02:34
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
    值比 1.0 小表示缩小，使 css 像素的个数变少,比 1.0 大表示放大，使 css 像素的个数变多,1.0 时什么都不变
    缩放一般我们用它来增减图形在 canvas 中的像素数目，对图形位图进行缩小或放大
    在 canvas 中 scale 时累乘的

### canvas 中插入图片

-   canvas 操作图片时，必须要等图片加载完成才操作
-   void ctx.drawImage(image, dx, dy);
-   void ctx.drawImage(image, dx, dy, dWidth, dHeight);
-   void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

    -   image
        绘制到上下文的元素。允许任何的 canvas 图像源(CanvasImageSource)，例如：CSSImageValue，HTMLImageElement，SVGImageElement，HTMLVideoElement，HTMLCanvasElement，ImageBitmap 或者 OffscreenCanvas。
    -   sx 可选
        需要绘制到目标上下文中的，image 的矩形（裁剪）选择框的左上角 X 轴坐标。
    -   sy 可选
        需要绘制到目标上下文中的，image 的矩形（裁剪）选择框的左上角 Y 轴坐标。
    -   sWidth 可选
        需要绘制到目标上下文中的，image 的矩形（裁剪）选择框的宽度。如果不说明，整个矩形（裁剪）从坐标的 sx 和 sy 开始，到 image 的右下角结束。
    -   sHeight 可选
        需要绘制到目标上下文中的，image 的矩形（裁剪）选择框的高度。
    -   dx
        image 的左上角在目标 canvas 上 X 轴坐标。
    -   dy
        image 的左上角在目标 canvas 上 Y 轴坐标。
    -   dWidth 可选
        image 在目标 canvas 上绘制的宽度。 允许对绘制的 image 进行缩放。 如果不说明， 在绘制时 image 宽度不会缩放。
    -   dHeight 可选
        image 在目标 canvas 上绘制的高度。 允许对绘制的 image 进行缩放。 如果不说明， 在绘制时 image 高度不会缩放。

-   canvas 中设置背景
    -   设置背景
        -   createPattern(img,repeation)
        -   img:图像对象
        -   repeation：
            -   repeat
            -   repeat-x
            -   repeat-y
            -   no-repeat
    -   设置线性渐变
    -   ctx.createLinearGradient(x, y, dx, dy);
        -   x,y 是坐标
        -   dx,dy 长度
        -   gradient.addColorStop(num, color);
            -   num(取 0~1 之间的数值)
            -   color 表示渐变颜色
    -   设置径向渐变
    -   var gradient = ctx.createRadialGradient(x,y,r,x,y,R);

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            html,
            body {
                height: 100%;
            }
            body {
                background-color: #000;
            }
            #canvas {
                background-color: white;
                position: absolute;
                right: 0;
                left: 0;
                top: 0;
                bottom: 0;
                margin: auto;
            }
        </style>
    </head>
    <body>
        <canvas id="canvas" width="500px" height="500px">
            <span>
                对不起您的浏览器不支持画布，请升级浏览器到最新版本
            </span>
        </canvas>
    </body>
    <script>
        window.onload = function () {
            var canvas = document.getElementById("canvas");
            var deg = ((360 / 60) * Math.PI) / 180;
            var secDegPerSec = deg;
            var minDegPerSec = ((360 / 3600) * Math.PI) / 180;
            var hourDegPerSec = ((360 / 3600 / 12) * Math.PI) / 180;
            if (canvas.getContext) {
                var ctx = canvas.getContext("2d");

                var img = new Image();
                img.src = "../img/314301.jpg";
                img.onload = function () {
                    draw();
                };

                function draw() {
                    //背景图片
                    // ctx.drawImage(img, 100, 100);
                    // 背景对象
                    // var pattern = ctx.createPattern(img, "no-repeat");
                    // 线性渐变
                    // var gradient = ctx.createLinearGradient(0, 0, 300, 300);
                    //径向渐变
                    var gradient = ctx.createRadialGradient(
                        250,
                        250,
                        50,
                        250,
                        250,
                        100
                    );
                    gradient.addColorStop(0, "red");
                    gradient.addColorStop(0.5, "yellow");
                    gradient.addColorStop(1, "pink");
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, 500, 500);
                }
            }
        };
    </script>
</html>
```

### 文本样式属性

-   font = value
    -   当前我们用来绘制文本的样式，这个字符串使用和 css 属性相同的语法
    -   默认字体是 10px sans-serif
    -   font 属性在指定时必须要有大小和字体
-   textAlign
    -   和 css 中 font 属性一样
    -   不一样的是，位置信息，以 fillText("text",x,y)中（x,y）为基准点
-   textBaseline
    -   top
    -   middle
    -   bottom
-   fillText("text",x,y)填充文本
    -   strokeText("text",x,y)，给文本描边
-   measureText
    -   返回一个对象,包含关于文本尺寸的信息

#### canvas 文本的水平垂直居中

-   方法 1：

```javascript
window.onload = function () {
    var canvas = document.getElementById("canvas");

    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "red";
        ctx.font = "40px sans-serif";
        ctx.textBaseline = "middle";
        var w = ctx.measureText("abc宝宝").width;
        ctx.fillText(
            "abc宝宝",
            (canvas.width - w) / 2,
            (canvas.height - 40) / 2
        );
    }
};
```

-   方法 2

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            html,
            body {
                height: 100%;
            }
            body {
                background-color: #000;
            }
            #canvas {
                background-color: white;
                position: absolute;
                right: 0;
                left: 0;
                top: 0;
                bottom: 0;
                margin: auto;
            }
        </style>
    </head>
    <body>
        <canvas id="canvas" width="500px" height="500px">
            <span>
                对不起您的浏览器不支持画布，请升级浏览器到最新版本
            </span>
        </canvas>
    </body>
    <script>
        window.onload = function () {
            var canvas = document.getElementById("canvas");

            if (canvas.getContext) {
                var ctx = canvas.getContext("2d");
                //水平基准线
                ctx.beginPath();
                ctx.moveTo(0, 250);
                ctx.lineTo(500, 250);
                ctx.stroke();
                //垂直基准线
                ctx.beginPath();
                ctx.moveTo(250, 0);
                ctx.lineTo(250, 500);
                ctx.stroke();

                ctx.beginPath();
                ctx.fillStyle = "red";
                ctx.font = "30px sans-serif";
                /* 文本的水平垂直居中 */
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("ahsAHAS按时艰是了", 250, 250);
                ctx.strokeText("ahsAHAS按时艰是了", 250, 250);
            }
        };
    </script>
</html>
```

### canvas 中的像素操作

#### 得到场景像素数据

    -   getImageData()获得一个包含话补偿金像素数据的ImageData对象，它代表画布区域的对象数据
    -   ctx.getImageData(x,y,dx,dy)

#### ImageData 对象

    -   ImageData对象中存储着canvas对象真实的像素数据；包含以下几个只读属性
        -   width
        -   height
        -   data：Uint8ClampedArray类型的一维数组
            包含着RGBA格式的整型数据
    -   imageData = ctx.getImageData(x,y,dx,dy)

#### 在场景中写入像素数据

    -   putImageData(myImageData,dx,dy)
        -   dx,dy参数表示你希望在场景左上角绘制的像素数据所得到的设备坐标

#### 创建一个 ImageData 对象

    -   ctx.createImageData(width,height)
        -   width,height:新建对象的宽度和高度

### canvas 合成

#### ctx.globalAlpha;属性，设置图形透明度

#### 覆盖合成

-   source;新的图像（源）
-   destination;已经绘制过的图形（目标）
-   ctx.globalCompositeOperation

    -   属性值
    -   source-over 默认值，源在上面显示
    -   source-in 只留下源和目标重叠的部分，显示源的剩余部分
    -   source-out 只留下源超过目标的部分
    -   source-atop 剪掉源超过目标的部分
    -   destination-over 目标显示在上面
    -   destination-in 只留下源和目标重叠的部分,显示目标的剩余部分
    -   destination-out 只留下目标超过源的部分
    -   destination-atop 剪掉目标超过源的部分

    ```javascript
    window.onload = function () {
        var canvas = document.getElementById("test");
        //判断是否存在画笔
        if (canvas.getContext) {
            var ctx = canvas.getContext("2d");

            ctx.fillStyle = "pink";
            ctx.fillRect(50, 50, 100, 100);
            // ctx.globalCompositeOperation = "source-atop";
            ctx.globalCompositeOperation = "destination-atop";
            ctx.fillStyle = "red";
            ctx.fillRect(100, 100, 100, 100);
        }
    };
    ```

#### ctx.isPointInPath(x, y)

    判断画布中点击的位置(x, y)是否存在图像

## 其他新增标签

### 状态标签

-   meter 用来显示已知范围的标量值或者分数值
-   progress 用来显示一项任务的完成进度

### 列表标签

-   datalist:datalist 会包含一组 option 元素，这些元素表示其表单控件的可选值
    -   他的 id 必须和 input 中的 list 一致
-   details:一个 ui 小部件用户可以从其中检索附加信息
    -   open 属性来控制附加信息的显示与隐藏
-   summary 用作一个\<details\>元素的一个内容摘要

### 注释标签

-   ruby
-   rt

### 标记标签

-   mark 特殊显示标签中的内容

## 新增表单相关

### 新增表单格式

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <form action="javascript:;">
            <input type="email" name="1" id="" />
            <input type="submit" name="" id="" value="提交" /><br />
            <!-- 手机上能看到效果 -->
            <input type="tel" name="" id="" />
            <input type="submit" name="" id="" value="提交" /><br />
            <!-- 验证是否为url地址 -->
            <input type="url" name="" id="" />
            <input type="submit" name="" id="" value="提交" /><br />
            <input type="search" name="" id="" />
            <input type="submit" name="" id="" value="提交" /><br />
            <input type="range" min="10" max="20" step="2" />
            <input type="submit" name="" id="" value="提交" /><br />
            <input type="number" name="" id="" />
            <input type="submit" name="" id="" value="提交" /><br />
            <input type="color" name="" id="" />
            <input type="submit" name="" id="" value="提交" /><br />
            <input type="datetime" name="" id="" />
            <input type="submit" name="" id="" value="提交" /><br />
            <input type="time" name="" id="" />
            <input type="submit" name="" id="" value="提交" /><br />
            <input type="date" name="" id="" />
            <input type="submit" name="" id="" value="提交" /><br />
            <input type="week" name="" id="" />
            <input type="submit" name="" id="" value="提交" /><br />
            <input type="month" name="" id="" />
            <input type="submit" name="" id="" value="提交" /><br />
        </form>
    </body>
</html>
```

### 新增表单属性

-   placeholder 输入框提示信息

    -   修改样式：
    -   input::-webkit-input-placeholder{}

-   autofocus 自定表单获取输入焦点
-   required 此项必填
-   pattern 正则验证
-   formaction 在 submit 里定义提交地址
-   list 和 datalist 为输入框构造一个选择列表；list 的值为 datalist 标签的 id

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style></style>
        <style>
            input::-webkit-input-placeholder {
                color: blue;
            }
        </style>
    </head>
    <body>
        <form action="javascript:;">
            <input
                type="text"
                autofocus
                required
                pattern="\d{1,5}"
                name=""
                id=""
                placeholder="你的年龄多大？"
            />
            <input type="submit" value="提交" formaction="javascript:;" /><br />
            <input type="text" value="" list="datalist" />
            <input type="submit" value="提交" /><br />
            <datalist id="datalist">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
            </datalist>
        </form>
    </body>
</html>
```

### 表单验证

#### 表单验证反馈

-   node.addEventListener("invalid",fn1,false)
-   validity 对象，通过下面的 valid 可以查看验证是否通过，如果八种验证都能通过，返回 true，一种验证失败返回 false

    -   valueMissing： 输入值为空时返回 true
    -   typeMismatch： 控件类型与预期类型不匹配返回 true
    -   patternMismatch：输入值不满足 pattern 正则返回 true

    -   **下面四个鸡肋**
    -   tooLong： 超过 maxLength 最大限制返回 true
    -   rangeUnderflow： 验证的 range 最小值返回 true
    -   rangeOverflow： 验证的 range 最大值返回 true
    -   stepMismatch：验证 range 的当前值是否符合 min、max 及 step 的规则返回 true

    *   badInput：
    *   valid：
    *   customError：不符合自定义验证返回 true
        -   setCustomValidity

#### 关闭验证

-   formnovalidate 属性
