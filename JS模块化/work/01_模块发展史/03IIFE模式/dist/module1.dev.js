"use strict";

// IIFE
(function (window) {
  var msg = "module3";

  function foo() {
    console.log("foo()", msg);
  }

  window.module3 = {
    foo: foo
  };
})(window);