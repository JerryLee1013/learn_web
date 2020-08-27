/*
 *  Express基本使用框架的简单了解和学习
 */
//1.引入express
const express = require("express");
const { response } = require("express");

//2.创建应用对象
const app = express();

//3.创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
//当请求行的路径为sever时，响应下面的内容
//处理get请求
app.get("/server", (request, response) => {
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
    response.send("Hello AJAX");
});

// all可以处理任意类型的请求
app.all("/server", (request, response) => {
    // 设置响应头   设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    // 针对自定义的请求头，设置响应头
    response.setHeader("Access-Control-Allow-Headers", "*");
    // 设置响应
    response.send("Hello AJAX POST");
});
// 处理json数据
app.all("/json-server", (request, response) => {
    // 设置响应头   设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    // 针对自定义的请求头，设置响应头
    response.setHeader("Access-Control-Allow-Headers", "*");
    //响应一个数据,给浏览器
    const data = {
        name: "abcdefgmodify",
    };
    //对字符串进行转换
    let str = JSON.stringify(data);
    // 设置响应
    response.send(str);
});
/* 针对IE缓存问题 */
app.all("/ie", (request, response) => {
    // 设置响应头   设置允许跨域de
    response.setHeader("Access-Control-Allow-Origin", "*");
    // 针对自定义的请求头，设置响应头
    response.setHeader("Access-Control-Allow-Headers", "*");
    // 设置响应
    response.send("hello ie - 4");
});
/* 延时响应 */
app.all("/delay", (request, response) => {
    // 设置响应头   设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    setTimeout(() => {
        // 设置延时响应
        response.send("延时响应");
    }, 3000);
});

/* jQuery 服务 */
app.all("/jquery-server", (request, response) => {
    // 设置响应头   设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    // 处理自定义请求头的报错
    response.setHeader("Access-Control-Allow-Headers", "*");
    const data = {
        name: "孙悟空",
        age: 18,
        fun: "function () {console.log('haha');}",
    };
    const str = JSON.stringify(data);
    response.send(str);
});

/* axios 服务 */
app.all("/axios-server", (request, response) => {
    // 设置响应头   设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    // 处理自定义请求头的报错
    response.setHeader("Access-Control-Allow-Headers", "*");
    const data = {
        name: "孙悟空",
        age: 18,
        fun: function () {
            console.log("haha");
        },
    };
    const str = JSON.stringify(data);
    response.send(str);
});

/* fetch 服务 */
app.all("/fetch-server", (request, response) => {
    // 设置响应头   设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    // 处理自定义请求头的报错
    response.setHeader("Access-Control-Allow-Headers", "*");
    const data = {
        name: "孙悟空",
        age: 18,
        fun: function () {
            console.log("haha");
        },
    };
    const str = JSON.stringify(data);
    response.send(str);
});

/* jsonp 服务 */
app.all("/jsonp-server", (request, response) => {
    // response.send("console.log('Hello JSONP')");
    const data = {
        name: "宝宝",
        age: 15,
        fun: function () {
            console.log(123);
        },
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
});

//用户名检测是否存在
app.all("/check-username", (request, response) => {
    // response.send("console.log('Hello JSONP')");
    const data = {
        msg: "用户名已存在",
        exist: 1,
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`);
});

//  jquery发送jsonp请求
app.all("/jquery-jsonp-server", (request, response) => {
    // response.send("console.log('Hello JSONP')");
    const data = {
        name: "本宝宝",
        city: ["北京", "上海", "深圳"],
    };
    let str = JSON.stringify(data);
    //接收callback参数
    let cb = request.query.callback;
    response.end(`${cb}(${str})`);
});

//  cors机制
app.all("/cors-server", (request, response) => {
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*");
    //设置允许的响应头
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置允许的方法
    response.setHeader("Access-Control-Allow-Method", "*");
    response.send("hello cors");
});
//监听端口启动服务
app.listen(8000, () => {
    console.log("服务已启动，8000端口监听中...");
});