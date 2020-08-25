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
//当请求行的路径为sever时，响应下面的内容

app.get("/server", function (request, response) {
  // 设置响应头   设置允许跨域
  response.setHeader("Accsee-Control-Allow-Origin", "*"); // 设置响应

  response.send("Hello AJAX");
}); //监听端口启动服务

app.listen(8000, function () {
  console.log("服务已启动，8000端口监听中...");
});