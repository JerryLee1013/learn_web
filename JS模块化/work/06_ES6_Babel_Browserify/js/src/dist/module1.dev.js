"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;
exports.bar = bar;
exports.arr = void 0;

// 分别暴漏
function foo() {
  console.log("foo() module1");
}

function bar() {
  console.log("bar() module1");
}

var arr = [1, 2, 3, 4, 5];
exports.arr = arr;