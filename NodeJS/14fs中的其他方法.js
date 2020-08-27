
var fs = require("fs")
//验证文件路径是否存在
var flag = fs.existsSync("hello4.txt")
console.log(flag)


//获取文件状态
// fs.statSync()
// // fs.stat()
fs.stat("hello4.txt",function (err,stat) {
	console.log(stat.isFile())//是否是文件
	console.log(stat.isDirectory())//是否是文件夹
	console.log(stat.birthtime)
})

//fs.unlink(path,callback)
//fs.unlinkSync(path)
//删除文件
fs.unlink("img/hello.png",function (err) {
	if(!err){
		console.log("删除成功")
	}else{
		console.log("删除失败")
	}
})

//fs.readdir(path[, options], callback)
//fs.readdirSync(path[, options])
//读取一个目录的目录结构
fs.readdir(".",function (err,files) {
	if(!err){
		console.log(files)//输出当前文件夹里面的文件名
	}
})

//fs.truncate(path[, len], callback)
//fs.truncateSync(path[, len])
//截断文件,将文件修改为指定的大小
fs.truncateSync("hello4.txt",10)

//fs.mkdir(path[, options], callback)
//fs.mkdirSync(path[, options])
//创建文件夹
// fs.mkdirSync("mkDirPract")

//fs.rmdir(path[, options], callback)
//fs.rmdirSync(path[, options])
//删除文件夹
// fs.rmdirSync("mkDirPract")

//fs.rename(oldPath, newPath, callback)
//fs.renameSync(oldPath, newPath)
//重命名文件,可以简介实现剪切的功能
// fs.renameSync("img/fs文件打开状态_copy.PNG","文件系统/fs文件打开状态_copy.PNG")


//fs.watchFile(filename[, options], listener)
//监视文件的修改
fs.watchFile("hello4.txt",{interval:1000},function (curr,prev) {
	console.log("修改前文件大小："+prev.size)
	console.log("修改后文件大小："+curr.size)
})