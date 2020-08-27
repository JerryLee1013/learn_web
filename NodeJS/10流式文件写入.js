var fs = require("fs")

//流式文件写入
//创建一个可写流
var ws = fs.createWriteStream('hello4.txt')

//可以通过监听流的open和close事件来监听流的打开和关闭
ws.once('open',function () {
	console.log("流打开了。。。")
})

ws.once('close',function () {
	console.log("流关闭了。。。")
})

//通过ws向文件中输出内容
ws.write("通过可写流写入文件的内容1");
ws.write("通过可写流写入文件的内容2");
ws.write("通过可写流写入文件的内容3");
ws.write("通过可写流写入文件的内容4");

//关闭流
ws.end()