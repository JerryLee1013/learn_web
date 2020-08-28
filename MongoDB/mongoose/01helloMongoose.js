//1.下载安装mongoose
//npm i mongoose --save

//2.在项目中引入mongoose
//var mongoose = require("mongoose")

/*
3.连接mongodb数据库
	mongoose.connect("mongodb://数据库ip地址：端口号/数据库名",{useNewUrlParser: true, useUnifiedTopology: true})
		端口号默认是27017时，可省略不写
	
	3.1监听mongodb数据库连接状态（可不进行）
		在mongoose对象中拥有一个属性connection，该对象表示数据库连接，
		通过监视该对象的状态，可以监听数据的连接和断开
		
		数据库连接成功的事件
			mongoose.connection.once("open",function(){})
		数据库断开的事件
			mongoose.connection.once("close",function(){})
*/

/*
4.断开数据库连接(一般不需要调用)
	除非项目停止服务器关闭，否则连接一般不会断开
	mongoose.disconnect()
*/

//引入
var mongoose = require("mongoose")

//连接数据库
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{useNewUrlParser: true, useUnifiedTopology: true})
//监听数据库连接/断开
mongoose.connection.once("open",function () {
	console.log("数据库连接成功")
})

mongoose.connection.once("close",function () {
	console.log("数据库已断开连接")
})

//操作数据库

//断开数据可连接
// mongoose.disconnect()