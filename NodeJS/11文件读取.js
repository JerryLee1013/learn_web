var fs = require("fs")

/*fs.readFile("hello4.txt",function (err,data) {
	if(!err){
		console.log(data.toString())
	}
})*/

//读写图片文件
fs.readFile("img/fs文件打开状态.PNG",function (err,data) {
	if(!err){
		// console.log(data)
		//将读到的data内容写入一个文件
		fs.writeFile("img/hello.png",data,function (err) {
			if(!err){
				console.log("文件写入成功。。。")
			}
		})
	}
})