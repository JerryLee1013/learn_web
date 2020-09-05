"use strict";

define(function (require, exports, module) {
  var data = "module3";

  function fun() {
    console.log(data);
  }

  exports.module3 = {
    fun: fun
  };
});