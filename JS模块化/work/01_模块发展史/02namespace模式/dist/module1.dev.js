"use strict";

// 命名空间模式，简单封装
var obj = {
  msg: "module2",
  foo: function foo() {
    console.log("foo()", this.msg);
  }
};