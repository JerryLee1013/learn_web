/*引入fs模块*/
var fs = require("fs")

/*打开文件*/
fs.open("hello.txt", "w", function (err, fd) {
	// console.log("回调函数中的代码")
	//判断是否出错
	if (!err) {
		/*写入文件*/
		fs.write(fd, "异步写入的内容", function (err) {
			if (!err) {
				console.log("写入成功")
			}
			
			/*关闭文件*/
			fs.close(fd, function () {
					console.log("文件已关闭")
				}
			)
		})
	} else {
		console.log(err)
	}
})

// console.log("open下的代码")

