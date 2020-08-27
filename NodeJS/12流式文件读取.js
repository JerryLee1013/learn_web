var fs  = require("fs")

/*创建一个可读流*/
var rs = fs.createReadStream("img/fs文件打开状态.PNG")
/*创建一个可写流*/
var ws = fs.createWriteStream("img/fs文件打开状态_copy.PNG")

//监听可读流的开启和关闭
rs.once('open',function () {
	console.log("可读流打开了")
})

rs.once('close',function () {
	console.log("可读流关闭了")
	
	//数据读取完毕，关闭可写流
	ws.end()
})

//监听可写流的开启和关闭
ws.once('open',function () {
	console.log("可写流打开了")
})

ws.once('close',function () {
	console.log("可写流关闭了")
})

// 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕他会自动开始读取数据
rs.on("data",function (data) {
		//将读取的数据写入到可写流中
		ws.write(data)
	}
)

