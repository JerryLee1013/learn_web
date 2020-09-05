"use strict";

define(function (require, exports, module) {
  var msg = "module2";

  function bar() {
    console.log(msg);
  }

  module.exports = bar;
});