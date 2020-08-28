//1.引入
var mongoose = require("mongoose")

//2.连接数据库
mongoose.connect("mongodb://127.0.0.1/mongoose_test",{useNewUrlParser: true, useUnifiedTopology: true})
//监听数据库连接/断开
mongoose.connection.once("open",function () {
	console.log("数据库连接成功....")
})

mongoose.connection.once("close",function () {
	console.log("数据库已断开连接")
})

//3.操作数据库
//3.1创建Schema（模式）对象
var Schema = mongoose.Schema

//3.2创建数据库约束信息
var stuSchema = new Schema({
	//Boolean很少用
	name:String,
	age:Number,
	gender:{
		type:String,
		default:"female"//创建默认值，当不设置gender时，默认是这个值
	},
	address:String
})

//3.3通过mongoose创建Model对象，Model代表数据库中的集合,
//students为创建的集合名称，stuSchema为该集合的约束
//mongoose会将集合名自动变成复数形式，因此定义集合名时，尽量自定义为复数
var StuModel = mongoose.model("students",stuSchema)

//3.4向数据库中插入一个文档
//StuModel.create(doc,function(err){})
StuModel.create({
	name:"蜘蛛精",
	age:16,
	address: "白骨洞"
	
},function (err) {
	if (!err){
		console.log("插入成功~~")
	} else{
		console.log("插入失败，请检查代码....")
	}
})

//4.断开数据可连接
// mongoose.disconnect()