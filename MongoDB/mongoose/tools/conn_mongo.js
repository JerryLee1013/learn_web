/*
	定义一个模块用来连接MongoDB数据库
*/
//1.引入
var mongoose = require("mongoose")

//2.连接数据库
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{useNewUrlParser: true, useUnifiedTopology: true})
//监听数据库连接/断开
mongoose.connection.once("open",function () {
	console.log("数据库连接成功....")
})
