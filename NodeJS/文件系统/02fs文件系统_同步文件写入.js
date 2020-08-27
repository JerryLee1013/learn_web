//引入fs模块
const fs = require("fs")
// console.log(fs)

/*同步打开文件*/
var fd = fs.openSync("hello.txt",'w')
// console.log(fd)

/*向文件中写入内容*/
fs.writeSync(fd,"天气不错")

/*关闭文件*/
fs.closeSync(fd)