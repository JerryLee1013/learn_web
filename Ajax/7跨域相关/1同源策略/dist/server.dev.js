"use strict";

var express = require("express");

var _require = require("express"),
    response = _require.response;

var app = express();
app.get("/home", function (request, response) {
  //响应一个页面
  response.sendFile(__dirname + "/index.html");
});
app.get("/data", function (request, response) {
  //响应一个页面
  response.send("用户数据");
});
app.listen(9000, function () {
  console.log("服务已经启动...");
});