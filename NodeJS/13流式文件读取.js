var fs  = require("fs")

/*创建一个可读流*/
var rs = fs.createReadStream("img/fs文件打开状态.PNG")
/*创建一个可写流*/
var ws = fs.createWriteStream("img/fs文件打开状态_copy2.PNG")

//pipe可以将可读流中的内容直接输出到可写流中
rs.pipe(ws)