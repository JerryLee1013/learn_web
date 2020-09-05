"use strict";

// 定义一个没有依赖的模块
(function (window) {
  var name = "dataService.js";

  function getName() {
    return name;
  }

  window.dataService = {
    getName: getName
  };
})(window);