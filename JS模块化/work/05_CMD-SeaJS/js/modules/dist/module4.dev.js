"use strict";

define(function (require, exports, module) {
  var msg = "module4"; // 异步引入

  require.async("./module3", function (module3) {
    module3.module3.fun();
  }); // 同步引入


  var module2 = require("./module2");

  module2();

  function fun2() {
    console.log(msg);
  }

  exports.fun2 = fun2;
});