var str = "hello 宝宝 hello"

//将一个字符串保存到buffer中,并返回
var buf  = Buffer.from(str)//<Buffer 68 65 6c 6c 6f 20 68 65 6c 6c 6f>
console.log(buf)
console.log(buf.length)

//创建一个指定大小的buffer
/*
var buf2 = new Buffer(10)
console.log(buf2.length)*/

//创建一个10字节的buffer
var buf2 = Buffer.alloc(10)
console.log(buf2)//<Buffer 00 00 00 00 00 00 00 00 00 00>

//通过索引为buffer赋值
buf2[0] = 88
buf2[1] = 255
buf2[2] = 0xaa
buf2[9] = 15
console.log(buf2)//58
console.log(buf2[2])
console.log(buf2[2].toString(16))


//创建一个指定大小的buffer，但是buffer中可能含有敏感数据
var buf3 = Buffer.allocUnsafe(10)
console.log(buf3)

var buf4 = Buffer.from("我是一段文本数据")
//将缓冲区的数据转换为字符串
console.log(buf4.toString())