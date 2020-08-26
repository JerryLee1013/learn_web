#   nodejs的学习

--------------

##  命令窗口或终端运行js文件
    
-   进入js文件的文件夹，输入： node js文件名

##  webStorm程序中，在js文件直接右键run

##  模块化

-   在node中一个js文件就是一个模块
-   在node中，每一个js文件中的js代码都是独立运行在一个函数中，相当于一个自调用的立即执行函数
    -   而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
-   在node中通过require(模块路径/模块标识)函数来引入外部模块
    *   require()中可以传递一个文件的路径作为参数，node将会根据路径引入外部模块
    *   如果使用相对路径必须以.或..开头
    *   使用require()引入模块以后该函数会返回一个对象，这个对象代表的是引入的模块
-   可以通过exports向外部暴露变量和方法
    -   只需要将需要暴露给外部的变量或方法设置为exports的属性即可

### 模块分成两大类
    
-   核心模块
    -   由node引擎提供的模块
    -   核心模块的标识就是模块的名字
-   文件模块
    -   自定义模块
    -   文件模块的标识就是文件的路径（绝对路径/相对路径）
    
### CommonJS规范

-   为了弥补当前js没有标准的缺陷
-   为js指定有一个美好愿景希望js能在任何地方运行
-   CommonJS对模块的定义十分简单
    -   模块引用
    -   模块定义
    -   模块标识
    
    
##  global全局对象

-   在node中有一个全局对象，它的作用和网页中的window类似
    -   在全局中创建的变量都会作为global的属性保存
    -   在全局中创建的方法函数，都会称为global的方法保存
-   node在执行模块中的代码时，他会首先在代码的最顶部添加如下代码
    
    ```javascript
    function (exports, require, module, __filename, __dirname) {
    ```
    
    -   在代码的最底部添加如下代码
    
    ```javascript
    }
    ```
-   模块中的代码都包装在如下函数中被执行调用，同时传递进五个实参
    
    ```javascript
    function (exports, require, module, __filename, __dirname) {
    
    }
    ```
-   五个实参
    -   exports：该对象用来将变量或函数暴露到外部
    -   require：函数，用来引入外部模块
    -   module：代表当前模块自身
        -   exports就是module的属性
        -   可以使用exports或者module.exports导出，本质上一样
    -   \_\_filename：当前文件完整路径
    -   \_\_dirname：当前文件所在文件夹的完整路径