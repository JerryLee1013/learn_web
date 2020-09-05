"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// 默认暴露
// export default () => {
//     console.log("我是默认暴露");
// };
var _default = {
  msg: "默认暴露",
  foo: function foo() {
    console.log(this.msg);
  }
};
exports["default"] = _default;