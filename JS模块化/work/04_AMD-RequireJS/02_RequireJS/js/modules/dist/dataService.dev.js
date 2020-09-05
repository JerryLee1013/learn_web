"use strict";

// 使用requireJS定义没有依赖的模块
define(function () {
  var name = "dataService.js";

  function getName() {
    return name;
  } // 暴漏模块


  return {
    getName: getName
  };
});