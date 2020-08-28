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