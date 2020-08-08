#   js高级
--------

##  函数高级

### 原型

  - 每个函数都有一个prototype属性，它默认指向一个Object空对象（即原型对象）
  - 原型对象中有一个属性constructor，它指向原函数对象
  - 给原型对象添加属性（一般是方法）
    >作用：函数的所有实例对象自动拥有原型中的属性方法
  - **显示原型与隐式原型**
    - 每个函数都有一个prototype，即显示原型
    - 每个实例对象都一个\_\_proto\_\_，即隐式原型
    - 对象的隐式原型的值为其对应构造函数的显示原型的值
    
    ```javascript

        function Fun() {//函数创建的时候即生成prototype属性
            // 内部语句：this.prototype = {}
    
        }
        var f1 = new Fun()//内部语句：this.__proto__ = Fun.prototype
    
        // 每个实例对象都一个__proto__，即隐式原型
        console.log(f1.__proto__)//{constructor: ƒ}
    
        // 对象的隐式原型的值为其对应构造函数的显示原型的值
        console.log(Fun.prototype===f1.__proto__)//true

    ```
    
  - 总结：
    - 函数的prototype属性：在定义函数时自动添加的，默认值是一个空Object对象
    - 对象的\_\_proto\_\_属性：创建对象时自动添加的，默认值为构造函数的prototype
    - 程序员能直接操作显示原型，但不能操作隐士原型（ES6之前）

    ![原型对象](img/原型对象代码图.png)

--------

### 原型链

####  原型链图解

- 访问一个对象的属性时，先在自身属性中查找，找到返回
- 如果没有，再沿着**\_\_proto\_\_**这条链向上查找，找到返回
- 如果最终没有找到，返回**undefined**
- 别名：隐式原型链
- 作用：查找对象的属性
- 函数的显示原型指向的对象：默认是空Object实例对象；但是Object函数不满足
- Function是它自身的实例
- Object的原型对象是原型链的尽头
  
 ```javascript

    console.log(Object.prototype)
    function Fn () {
        this.test1 = function(){
            console.log('test1')
        }
    }

    console.log(Fn.prototype)

    Fn.prototype.test2 = function () {
        console.log('test2')
    }
    var fn = new Fn()
    fn.test1()
    fn.test2()
    console.log(fn.toString())

    // 函数的显示原型指向的对象：默认是空Object实例对象；但是Object函数不满足
    console.log(Fn.prototype instanceof Object)//true
    console.log(Object.prototype instanceof Object)//false
    console.log(Function.prototype instanceof Object)//true

    // Function是它自身的实例
    console.log(Function.__proto__ === Function.prototype)//true
    // Object的原型对象是原型链的尽头
    console.log(Object.prototype.__proto__)//null
    
 ```

   ![原型链图解](img/原型链图解.png)

####  探索instanceof

- A instanceof B
- 如果B函数的显式原型对象在A对象的原型链上，返回true，否则返回false

    ![函数-对象原型链图解](img/函数-对象原型链.png)

    ```javascript
    /*案例1*/
    function Foo() {

    }
    var f1 = new Foo()
    console.log(f1 instanceof Foo)//true
    console.log(f1 instanceof Object)//true

    console.log('----------------')
    /*案例2*/
    console.log(Object instanceof Function)//true
    console.log(Object instanceof Object)//true
    console.log(Function instanceof Function)//true
    console.log(Function instanceof Object)//true
    
    function Fun() {
        
    }
    console.log(Object instanceof Fun)//false
    ```

--------

### 执行上下文与执行上下文栈

1.  变量提升

        通过var定义(声明)的变量，在定义语句之前就可以访问到；
        值：undefined

2.  函数提升

        通过function声明的函数，在此之前就可以直接调用
        值：函数定义（对象）
3.  问题：变量提升和函数提升是如何产生的？

        代码编译之后，var声明的变量就已经定义好了，但是未被赋值，因此变量提升值为undefined；
        function函数在编译阶段就已经在window中生成了该方法；因此在全局中任意位置都可以调用；

####  执行上下文
1.  全局执行上下文

    - 在执行全局代码前，将window确定为全局执行上下文
    - 对全局数据进行预处理
      - var定义的全局变量==>undefined，添加为window属性
      - function声明的全局函数==>赋值(fun)，添加为window方法
      - this==>赋值(window)
    - 开始执行全局代码  添加为执行上下文的属性
    

2.  函数执行上下文

    - 在调用函数，准备执行函数体之前，创建创建对应的函数执行上下文对象
    - 对局部数据进行预处理
      - 形参变量(函数中的局部变量)==>赋值(实参)==>添加为执行上下文的属性
      - arguments==>赋值(实参列表)
      - var定义的局部变量==>，添加为执行上下文的属性
      - function声明的函数==>赋值(fun)，添加为执行上下文的方法
      - this==>赋值(调用函数的对象)
     - 开始执行函数体代码

    ```javascript
    /*全局执行上下文*/
    console.log(a1)//undefined
    console.log(a2)//ƒ a2() {}
    console.log(this)//window
    var a1 = 3
    function a2() {
      
    }
    
    ```

    ![全局执行上下文](img/全局执行上下文.PNG)

    ```javascript
    /*函数体执行上下文*/
    fn(2,3)//

    function fn(a1) {
        console.log(a1)//2
        console.log(a2)//undefined
        a3()//a3()
        console.log(this)//window
        console.log(arguments)//[2,3]
        var a2 = 3
        function a3(){
            console.log("a3()")
        }
    }
    ```

    ![函数体执行上下文](img/函数体执行上下文.PNG)

####  执行上下文栈

1.  在全局代码执行前，js引擎就会创建一个栈来存储管理所有执行上下文对象
2.  在全局执行上下文(window)确定后，将其添加到栈中(压栈)
3.  在函数执行上下文创建后，将其添加到栈中(压栈)
4.  在当前函数执行完后，将栈顶的对象移除(出栈)
5.  当所有代码执行完后，栈中只剩下window

    ```javascript
    <script>
                                    //1.进入全局执行上下文
    var a = 10
    var bar = function(x){
        var b = 5
        foo(x+b)                    //3.进入foo执行上下文
    }
    
    var foo = function (y) {
        var c = 5
        console.log(a + c + y)
    }
    bar(10)                         //2.进入bar执行上下文
    </script>
    
    ```

    ![执行上下文栈图解](img/执行上下文栈图解.png)
  
--------

### 作用域与作用域链


--------

### 闭包


--------