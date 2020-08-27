var fs = require("fs")

/*fs.writeFile('hello3.txt', '通过writeFile写入的内容', {flag: "r+"}, function (err) {
		
		if (!err) {
			console.log("写入成功")
		} else {
			console.log(err)
		}
		
	}
)*/
//C:\Users\lifen\Desktop往桌面写文件
fs.writeFile('C:\\Users\\lifen\\Desktop\\hello.txt', '通过writeFile写入的内容', {flag: "w"}, function (err) {
		
		if (!err) {
			console.log("写入成功")
		} else {
			console.log(err)
		}
		
	}
)