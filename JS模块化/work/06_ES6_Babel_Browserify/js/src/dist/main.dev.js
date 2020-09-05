"use strict";

var _module = require("./module1");

var _module2 = require("./module2");

var _module3 = _interopRequireDefault(require("./module3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 引入其他模块
// import xxx from “路径”
(0, _module.foo)();
(0, _module.bar)();
console.log(_module.arr);
(0, _module2.fun)();
(0, _module2.fun2)();

_module3["default"].foo();