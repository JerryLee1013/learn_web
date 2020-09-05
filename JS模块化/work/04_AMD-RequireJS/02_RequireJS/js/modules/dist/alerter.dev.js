"use strict";

// 定义有依赖的模块
define(["dataService", "jquery"], function (dataService, $) {
  var msg = "alerter.js";

  function showMsg() {
    console.log(msg, dataService.getName());
  }

  $("body").css("background", "pink"); // 暴漏模块

  return {
    showMsg: showMsg
  };
});