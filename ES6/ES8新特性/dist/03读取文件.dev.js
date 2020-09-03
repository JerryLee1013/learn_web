"use strict";

// 引入fs
var fs = require("fs");

var _require = require("assert"),
    rejects = _require.rejects;

var _require2 = require("path"),
    resolve = _require2.resolve; // 读取三个文件


function readFiles(fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (err, data) {
      if (err) reject(err);
      resolve(data);
    });
  });
} // 声明一个async函数


function main() {
  var fir, sec, third;
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(readFiles("./01async&await.html"));

        case 3:
          fir = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(readFiles("./02async&await.html"));

        case 6:
          sec = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(readFiles("./03读取文件.js"));

        case 9:
          third = _context.sent;
          console.log(fir.toString());
          console.log(sec.toString());
          console.log(third.toString());
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 15]]);
}

main();