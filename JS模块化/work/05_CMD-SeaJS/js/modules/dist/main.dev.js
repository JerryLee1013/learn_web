"use strict";

define(function (require) {
  var module1 = require("./module1");

  module1.foo();

  var module4 = require("./module4");

  module4.fun2();
});