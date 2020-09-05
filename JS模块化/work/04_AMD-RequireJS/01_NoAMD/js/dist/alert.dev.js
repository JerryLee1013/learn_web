"use strict";

// 定义一个有依赖的模块
(function (window) {
  var msg = "alert.js";

  function bar() {
    console.log(msg);
  }
})(window);