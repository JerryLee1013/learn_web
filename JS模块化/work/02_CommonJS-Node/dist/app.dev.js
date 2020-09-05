"use strict";

var uniq = require("uniq");

var module1 = require("./modules/module1");

var module2 = require("./modules/module2");

var module3 = require("./modules/module3");

module1.foo();
module2();
module3.foo();
module3.bar();
var result = uniq(module3.arr);
console.log(result);