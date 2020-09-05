// 定义没有依赖的模块
define(function (require, exports, module) {
    let msg = "module1";
    function foo() {
        console.log(msg);
    }
    module.exports = { foo };
});
