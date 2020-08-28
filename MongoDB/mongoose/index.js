require("./tools/conn_mongo.js")

var Student = require("./Model/student")
// console.log(Student)

Student.find({},function (err,docs) {
	if(!err){
		console.log(docs)
	}
})