"use strict";

(function () {
  requirejs.config({
    baseUrl: "js/",
    //基本路径
    //配置路径
    paths: {
      dataService: "./modules/dataService",
      alerter: "./modules/alerter",
      jquery: "./libs/jquery-1.10.1",
      angular: "./libs/angular"
    },
    shim: {
      angular: {
        exports: "angular"
      }
    }
  });
  requirejs(["alerter", "angular"], function (alerter, angular) {
    alerter.showMsg();
    console.log(angular);
  });
})();