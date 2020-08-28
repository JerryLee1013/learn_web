# MongoDB 学习

## 前期准备

-   安装
-   配置环境变量
    -   D:\SoftwareUpdate\MongoDB\bin
-   在 d 盘根目录创建一个文件夹 data
    -   在 data 中新建一个文件夹 db
-   打开命令框
    -   输入 mongod，启动 mongodb 服务器
-   再打开一个 cmd 窗口

    -   输入 mongo 连接 mongodb,出现>,标识 mongodb 连接成功

-   数据库
    -   服务器
        -   保存数据
        -   mongod --dbpath D:\data\db 开启服务器
    -   客户端
        -   操作服务器，对数据进行增删改查
        -   mongo 启动客户端
-   将 mongodb 设置为系统服务，可以自动再后台启动，不需要每次都手动启动
    -   在 c 盘根目录创建 data，在里面创建 db 和 log
    -   在 D:\SoftwareUpdate\MongoDB 目录下创建配置文件
-   以上为低版本的 mongodb 配置；高版本的没这么麻烦

## 基本概念

-   数据库——》集合——》文档
-   在 mongodb 中数据库和集合都不需要手动创建
-   当我们创建文档时，如果文档所在的集合不存在会自动创建数据可和集合

## 基本操作

-   show dbs/databases 显示数据库
-   use 数据库名 进入指定数据库
-   show collections 看数据库的集合

## 数据库的增删改查（CRUD）

-   向数据库中插入文档
    -   db.集合名.insert(doc)
-   查询当前集合中的所有文档
    -   db.集合名.find()

## mongoose

### Schema（模式对象）

-   定义约束了数据库中的文档结构

### Model

-   相当于 mongodb 中的集合

### Document

-   相当于集合中的具体文档

### Model

```javascript
//1.引入
var mongoose = require("mongoose")

//2.连接数据库
mongoose.connect("mongodb://127.0.0.1/mongoose_test", {useNewUrlParser: true, useUnifiedTopology: true})
//监听数据库连接/断开
mongoose.connection.once("open", function () {
	console.log("数据库连接成功....")
})

mongoose.connection.once("close", function () {
	console.log("数据库已断开连接")
})

//3.操作数据库
//3.1创建Schema（模式）对象
var Schema = mongoose.Schema

//3.2创建数据库约束信息
var stuSchema = new Schema({
	//Boolean很少用
	name: String,
	age: Number,
	gender: {
		type: String,
		default: "female"//创建默认值
	},
	address: String
})

//3.3通过mongoose创建Model对象，Model代表数据库中的集合,
//students为创建的集合名称，stuSchema为该集合的约束
//mongoose会将集合名自动变成复数形式，因此定义集合名时，尽量自定义为复数
var StuModel = mongoose.model("students", stuSchema)

//3.4Model下的API
/*
//3.4.1.向数据库中插入一个文档：StuModel.create(docs,function(err){})
StuModel.create([
	{
		name:"黑熊精",
		age:110,
		gender:"male",
		address: "金山寺"
	}
	],function (err) {
	if (!err){
		console.log(arguments)
	} else{
		console.log("插入失败，请检查代码....")
	}
})
*/

/*
3.4.2.查询
	2.1 Model.find(conditions,[projection],[options],[callback])//查询所有符合条件为文档，返回一个数组
	2.2	Model.findById(id,[projection],[options],[callback])//本剧文档的id属性查询文档
	2.3	Model.findOne([conditions],[projection],[options],[callback])//查询符合条件的第一个文档，返回一个具体的文档对象，不是数组
	
	参数：
		conditions:查询的条件
		projection：投影  说明需要获取的字段和限制不需要的字段
					两种书写方式：
						{name:1,_id:0}	1表示显示，0表示不显示
						"name age -_id"	负号（-）表示不显示，字段之间用空格分开
		options：查询选项（skip，limit可以写在这里）
		callback：回调函数
				通过回调函数返回结果，所以回调函数必须传
				不传回调函数，压根不会查询
*/
/*// StuModel.find({name:"唐三藏"},{name:1,_id:0,address:1},function (err,docs) {
StuModel.find({}, "name age -_id", {skip: 3, limit: 1}, function (err, docs) {
	//docs是返回的结果数组,无论是否存在满足条件的结果，都会返回一个数组，不满足条件时返回空数组
	if (!err) {
		console.log(docs)
	}
})*/

/*StuModel.findOne({name:"孙悟空"},function (err,doc) {
	if (!err) {
		console.log(doc)
	}
})*/
/*
StuModel.findById("5f48e02334b4411cd46a7f45",function (err,doc) {
	if(!err){
		console.log(doc.__proto__===StuModel.prototype)//true
		//通过find查询的结果返回的对象就是Document数据库文档对象
		//这个Document对象就是StuModel的实例
		console.log(doc instanceof StuModel)//true
	}
})*/

/*
3.4.3修改
	Model.update(conditions,doc,[options],[callback])
	Model.updateMany(conditions,doc,[options],[callback])
	Model.updateOne(conditions,doc,[options],[callback])
	Model.replaceOne(conditions,doc,[options],[callback])
	参数：
		conditions:查询的条件
		doc:修改后的对象
		options：配置参数
		callback；回调函数
*/
/*//修改唐三藏的年龄为33
StuModel.update({name:"唐三藏"},{$set:{age:33}},function (err) {
	if (!err){
		console.log("修改成功")
	}
})*/
/*
3.4.4删除
	Model.remove(conditions,callback)
	Mode.deleteOne(conditions,callback)
	Mode.deleteMany(conditions,callback)
*/
/*StuModel.deleteOne({name:"孙悟空"},function (err) {
	if (!err){
		console.log("删除成功")
	} 
})*/

//4.断开数据可连接，一般不用
// mongoose.disconnect()
```

### Document

```javascript
/*
* 	Document对象时Model对象的实例
* */
//创建一个Document对象

//引入mongoose
var mongoose = require("mongoose")

//连接数据库
mongoose.connect("mongodb://127.0.0.1/new_db",{useNewUrlParser: true, useUnifiedTopology: true})
//监听连接
mongoose.connection.once("open",function () {
	console.log("数据库已连接....")
})
mongoose.connection.once("close",function () {
	console.log("数据库已断开....")
})
//创建Schema对象
var Schema = mongoose.Schema
//创建数据规则
var docSchema = new Schema({
	name:String,
	size:Number,
	format:String,
	author:String
})
//创建Model对象
var DocModel = mongoose.model("documents",docSchema)

//创建Document实例对象
var docFile = new DocModel({
	name:"颈椎病康复指南",
	size:100000,
	format:"js",
	author: "程序员"
})
// console.log(docFile)

/*
* 	Document方法
* 		save([options],callback)//保存Document实例对象
* */
/*docFile.save(function (err) {
	if (!err){
		console.log("保存成功")
	} 
})*/

DocModel.findOne({},function (err,doc) {
	if (!err){
		/*
			update(update,[options],callback)
				-	修改对象
			remove(callback)
				-	删除对象
		*/
		/*doc.update({$set:{size:3099}},function (err) {
			if (!err){
				console.log("修改成功")
			} 
		})*/
		/*doc.remove(function (err) {
			if (!err){
				console.log("删除成功")
			} 
		})*/
		
		/*
			get(attrName)
				-	获取文档中的指定属性值
			set(attrName,value)
				-	修改文档指定属性的属性值
			id
				-	获取文档的_id属性值
		*/
		// console.log(doc.get("name"))
		// console.log(doc.name)
		/*doc.set("author","钢铁侠")
		doc.save(function (err) {
			if (!err){
				console.log("修改成功")
				console.log(doc.author)
			} 
		})*/
		// console.log(doc.id)
		
		/*
			toJSON()
				-	将Document对象转为JSON对象
			toObject()
				-	将Document对象转换为一般的Object对象
				-	之后所有的Document对象方法和属性都不能使用
				-	选择这总方法便于一般对象的操作方法
		*/
		doc = doc.toObject()
		delete doc.size
		console.log(doc)
	} 
})

//断开数据连接
// mongoose.disconnect()
```