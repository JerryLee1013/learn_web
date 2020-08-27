#   nodejs的学习

--------------

##  命令窗口或终端运行js文件
    
-   进入js文件的文件夹，输入： node js文件名

##  webStorm程序中，在js文件直接右键run

##  模块化

-   在node中一个js文件就是一个模块
-   在node中，每一个js文件中的js代码都是独立运行在一个函数中，相当于一个自调用的立即执行函数
    -   而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
-   在node中通过require(模块路径/模块标识)函数来引入外部模块
    *   require()中可以传递一个文件的路径作为参数，node将会根据路径引入外部模块
    *   如果使用相对路径必须以.或..开头
    *   使用require()引入模块以后该函数会返回一个对象，这个对象代表的是引入的模块
-   可以通过exports向外部暴露变量和方法
    -   只需要将需要暴露给外部的变量或方法设置为exports的属性即可

### 模块分成两大类
    
-   核心模块
    -   由node引擎提供的模块
    -   核心模块的标识就是模块的名字
-   文件模块
    -   自定义模块
    -   文件模块的标识就是文件的路径（绝对路径/相对路径）
    
### CommonJS规范

-   为了弥补当前js没有标准的缺陷
-   为js指定有一个美好愿景希望js能在任何地方运行
-   CommonJS对模块的定义十分简单
    -   模块引用
    -   模块定义
    -   模块标识
    
    
##  global全局对象

-   在node中有一个全局对象，它的作用和网页中的window类似
    -   在全局中创建的变量都会作为global的属性保存
    -   在全局中创建的方法函数，都会称为global的方法保存
-   node在执行模块中的代码时，他会首先在代码的最顶部添加如下代码
    
    ```javascript
    function (exports, require, module, __filename, __dirname) {
    ```
    
    -   在代码的最底部添加如下代码
    
    ```javascript
    }
    ```
-   模块中的代码都包装在如下函数中被执行调用，同时传递进五个实参
    
    ```javascript
    function (exports, require, module, __filename, __dirname) {
    
    }
    ```
-   五个实参
    -   exports：该对象用来将变量或函数暴露到外部
    -   require：函数，用来引入外部模块
    -   module：代表当前模块自身
        -   exports就是module的属性
        -   可以使用exports或者module.exports导出，本质上一样
    -   \_\_filename：当前文件完整路径
    -   \_\_dirname：当前文件所在文件夹的完整路径
    
##  包简介

-   包实际上就是一个压缩文件，解压后还原为目录，符合规范的目录，应该包含如下文件

    -   package.json    描述文件
    -   bin             可执行二进制文件
    -   lib             js代码
    -   doc             文档
    -   test            单元测试
    

### CommonJS包规范由包结构和包描述文件两个部分组成

####    包描述文件package.json

-   相当于包的说明书

### npm的命令
-   npm -v
-   nmp version
-   npm init 初始化package.json文件
-   npm search 包名
-   npm install/i 包名
-   npm remove/r 包名
-   npm install 包名 --save安装包并添加到依赖中,即package.json中的dependencies中
-   npm install 下载当前package.json依赖的包
-   npm install 包名 -g 全局安装包（全局安装的包一般都是一些工具）

-   通过npm下载的包都放到node_modules文件夹
    * 	我们通过npm下载的包直接通过require(包名)引入即可
-   node在使用模块名字来引入模块时，他会首先在当前目录的node_modules中寻找是否含有该模块
    -   如果由则直接使用，如果没有就去上一级目录的node_modules中寻找
    -   如果有则直接使用，如果没有则再去上一级目录寻找，直到找到为止，
    -   如果直到磁盘根目录依然没有则报错
    
### 配置cnpm

```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```
-   使用cnpm镜像服务器下载网速可能快一点

##  文件系统

### buffer缓冲区

-   结构和数组很像，操作方法和数组类似
-   弥补数组不能存储二进制文件的不足，buffer专门用来存储二进制数据
-   使用buffer不需要引入模块，直接使用即可
-   每个字节在buffer中存储的都是二进制，显示时显示两位16进制
    -   每个字节的范围为00-FF
    -   8bit = 1byte
    -   一个汉字三个字节
-   目前已不推荐使用new Budder(10)，10为指定字节个数
-   推荐使用Buffer.alloc(10)
-   buffer的大小一旦确定不能更改

### fs文件系统

####    同步和异步调用

-   fs模块中所有操作都有两种形式可供选择，同步和异步
-   同步文件系统会阻塞文件的执行，也就是除非操作完毕，否则不会向下执行代码
-   异步文件系统不会阻塞程序的执行，而是在操作完成时，通过回调函数将结果返回

####    文件的写入
-   手动操作的步骤
    -   打开文件
    -   像文件中写入内容
    -   保存并关闭文件
-   同步文件写入
     -   打开文件
        -   fs.open(path[, flags[, mode]], callback)
        -    flags打开文件要操作的类型：r只读的；w可写的
        -    mode设置文件的操作权限，一般不传
        -    返回值：该方法会返回一个文件的描述符作为结果，可以通过该描述符来对文件进行各种操作
     -   向文件中写入内容
        -   fs.writeSync(fd, string[, position[, encoding]])
        -   fd文件描述符,需要传递要写入文件的描述
        -   string要写入的内容
        -   position写入的起始位置，一般不传
        -   encoding编码方式，默认utf-8
     -   保存并关闭文件
        -   fs.closeSync(fd)
-   异步文件写入
    -   打开文件
        -   fs.open(path[, flags[, mode]], callback)
        -   异步文件调用的方法结果都是通过回调函数返回的
            -   arguments{ '0': null, '1': 3 }
            -   两个参数
                error：错误对象，如果没有错误则为null
                fd:文件描述符
    -   写入文件
        -   fs.write(fd, string[, position[, encoding]], callback)
    -   关闭文件
        -   fs.close(fd, callback)
-   简单文件写入
    -   fs.writeFile(file, data[, options], callback)
    -   fs.writeFileSync(file, data[, options])
    
-   fd文件打开状态：操作符

![fs文件打开状态](img/fs文件打开状态.PNG)

-   流式文件写入
    -   同步异步简单文件写入不适合大文件的写入，性能较差，容易导致内存溢出
    -   fs.createWriteStream(path[, options])
```javascript
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
```
-   文件读取
    -   fs.readFile(path[, options], callback)
```javascript
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
```
-   流式文件读取
    -   适用于大文件
    
-   方法1:
```javascript
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
```
-   方法2:   
```javascript
var fs  = require("fs")

/*创建一个可读流*/
var rs = fs.createReadStream("img/fs文件打开状态.PNG")
/*创建一个可写流*/
var ws = fs.createWriteStream("img/fs文件打开状态_copy2.PNG")

//pipe可以将可读流中的内容直接输出到可写流中
rs.pipe(ws)
```

-   fs中的其他方法
```javascript

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
```