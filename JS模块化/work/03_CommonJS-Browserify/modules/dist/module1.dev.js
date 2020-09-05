"use strict";

//暴漏一个对象
module.exports = {
  msg: "module1",
  foo: function foo() {
    console.log(this.msg);
  }
};