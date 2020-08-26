/*
* 模块化
* */

console.log("我是一个模块,我是02module.js")


//向外部暴露属性或方法
exports.x = "我是02module.js中的x"
exports.y = "我是02module.js中的y"
exports.fn = function () {
    console.log("我是02module.js中的函数")
}