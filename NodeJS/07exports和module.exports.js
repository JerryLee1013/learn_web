/*
exports.name = "孙悟空"
exports.age = 18
exports.sayName = function () {
	console.log("我是孙悟空")
}
*/

/*exports和module.exports的本质关系是这样的：exports = module.exports*/

/*使用下面这种方法会断开exports和module.exports之间的联系，exports就不再具有向外暴露的性质*/
module.exports = {
	name:"猪八戒",
	age:22,
	sayName:function () {
		console.log(this.name)
	}
}


/*下面这种方式改变了原exports的指向,不会向外暴露函数的变量*/
/*exports = {
	name:"猪八戒",
	age:22,
	sayName:function () {
		console.log(this.name)
	}
}*/

/*
* 	综上：
* 		通过exports只能使用(.属性名)的方式向外暴露内部变量
* 		通过module.exports可以使用(module.exports.属性名)的方式和module.exports = {}的方式向外暴露变量
*
* */

// console.log("exports输出："+exports.name)