//引入其他的模块
/*
*   在node中通过require()函数来引入外部模块
*       require()中可以传递一个文件的路径作为参数，node将会根据路径引入外部模块
*       如果使用相对路径必须以.或..开头
* */
// var md = require("./02模块化module.js")
var md = require("./02模块化module")//js可以省略
console.log(md)//{}
console.log(md.x)//
md.fn()