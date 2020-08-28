/*
	定义student的模型
*/

var mongoose = require("mongoose")

var Schema = mongoose.Schema

var stuSchema = new Schema({
	name:String,
	age:Number,
	gender:{
		type:String,
		default:"female"
	},
	address:String
})

var StuModel = mongoose.model("students",stuSchema)
//向外暴露变量
module.exports = StuModel