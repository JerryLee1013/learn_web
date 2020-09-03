"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };
  }return _typeof(obj);
}

var m1 = _interopRequireWildcard(require("./m1.js"));

var m2 = _interopRequireWildcard(require("./m2.js"));

var m3 = _interopRequireWildcard(require("./m3.js"));

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return { "default": obj };
  }var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {
    return cache.get(obj);
  }var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }newObj["default"] = obj;if (cache) {
    cache.set(obj, newObj);
  }return newObj;
}

// 入口文件
// 模块引入
console.log(m1);
console.log(m2);
console.log(m3);
m1.teach();
m2.findJob();
m3["default"].findJob(); // 修改北京颜色

(0, _jquery["default"])("body").css("background", "pink");