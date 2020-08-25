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
//处理get请求

app.get("/server", function (request, response) {
  // 设置响应头   设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*"); //或者使用下面的方式设置跨域

  /* app.all("*", function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header(
          "Access-Control-Allow-Methods",
          "PUT,POST,GET,DELETE,OPTIONS"
      );
      res.header(
          "Access-Control-Allow-Headers",
          "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
      );
      res.header("X-Powered-By", " 3.2.1");
      res.header("Content-Type", "application/json;charset=utf-8");
      next();
  }); */
  // 设置响应

  response.send("Hello AJAX");
}); // all可以处理任意类型的请求

app.all("/server", function (request, response) {
  // 设置响应头   设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*"); // 针对自定义的请求头，设置响应头

  response.setHeader("Access-Control-Allow-Headers", "*"); // 设置响应

  response.send("Hello AJAX POST");
});
app.all("/json-server", function (request, response) {
  // 设置响应头   设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*"); // 针对自定义的请求头，设置响应头

  response.setHeader("Access-Control-Allow-Headers", "*"); //响应一个数据,给浏览器

  var data = {
    name: "abcdefgmodify"
  }; //对字符串进行转换

  var str = JSON.stringify(data); // 设置响应

  response.send(str);
}); //监听端口启动服务

app.listen(8000, function () {
  console.log("服务已启动，8000端口监听中...");
});