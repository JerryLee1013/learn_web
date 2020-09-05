"use strict";

// 定义一个有依赖的模块
(function (window, dataService) {
  var msg = "alert.js";

  function showMsg() {
    console.log(msg, dataService.getName());
  }

  window.alerter = {
    showMsg: showMsg
  };
})(window, dataService);