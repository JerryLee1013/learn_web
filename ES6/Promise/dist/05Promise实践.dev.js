"use strict";

// Promise 解决回调地狱
var fs = require("fs");

function getFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, function (err, data) {
      if (err) reject(err);
      resolve(data);
    });
  });
}

getFile("../01let声明变量.html").then(function (value) {
  console.log(value.toString());
  return getFile("../02const.html");
}, function (reason) {
  console.error(reason);
  return getFile("../02const.html");
}).then(function (value) {
  console.log(value.toString());
  return getFile("../03模板字符串.html");
}, function (reason) {
  console.error(reason);
  return getFile("../03模板字符串.html");
}).then(function (value) {
  console.log(value.toString());
}, function (reason) {
  console.error(reason);
});