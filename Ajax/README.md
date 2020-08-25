## Express 基本使用

```javascript
//1.引入express
const express = require("express");
const { response } = require("express");

//2.创建应用对象
const app = express();

//3.创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get("/", (request, response) => {
    // 设置响应头   设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //或者使用下面的方式设置跨域
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
    response.send("hello express");
});

//监听端口启动服务
app.listen(8000, () => {
    console.log("服务已启动，8000端口监听中...");
});
```
