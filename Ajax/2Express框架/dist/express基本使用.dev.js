"use strict";

/*
 *  Express基本使用框架的简单了解和学习
 */
//1.引入express
var express = require("express");

var _require = require("express"),
    response = _require.response; //2.创建应用对象


var app = express(); //3.创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装

app.get("/", function (request, response) {
  // 设置响应
  response.send("hello express");
}); //监听端口启动服务

app.listen(8000, function () {
  console.log("服务已启动，8000端口监听中...");
});