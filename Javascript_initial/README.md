<!--
 * @Brief:
 * @LastEditors: Jerry Lee
 * @LastEditTime: 2020-07-25 17:19:10
-->

#Javascript 基础部分(常用关键点)：

##一个完整的 js 实现应该由以下三个部分构成：

> ECMAScript:js 编码规范(标准)
> DOM：提供一组对象可以操作网页
> BOM：提供一组对象可以操作浏览器

##怎么取 body 的结点：

> var bodyNode = document.documentElement;

##js 代码编写位置：

> 标签的 onclick 属性中；
>
> > > onclick="alert();"

> a 标签的 href 属性值中;
>
> > > href = "javascript:alert()";

> 从外部引入 js 文件
>
> > > <script src="model.js"></script>

> 在<head>元素中编写 js 代码
>
> > > <script>alert("head中内部的js代码");</script>

##js 的数据类型：

###基本数据类型

> String
> Number
> Boolean
> Null
> Undefined

###引用数据类型

> Object

##强制类型转换

###其他类型转换为 String 类型

####调用被转换数据类型的 toString()方法

> > Number 转换为 String
> >
> > > var a = 123;// a 调用该方法不会改变 a 的值，它会将结果返回
> > > a = a.toString();//将 a.toString()赋值给 a 就可改变 a 的类型。
> > > console.log(typeof a);//String
> > > console.log(a);//"123"

> > Boolaen 转换为 String
> >
> > > var b = true;
> > > b = b.toString();
> > > console.log(typeof b);//String
> > > console.log(b);//"true"

> > Null/Undefined 转换为 String
> > Null/Undefined 没有 toString()方法

####调用 String()函数,对于 Number 类型 和 Boolean 类型而言，实际上调用的还是 toString()方法，因为针对 Number 类型和 Boolean 类型的 String 类型转换， String()函数的底层就是由 toString()方法实现；但是对于 NUll 和 Undefined 类型就不会调用 toString()方法，他会将 null 直接转换为“null”，将 undefined 转换为“undefined”；

> > //Number 转换为 String
> >
> > > var e = 123;
> > > e = String(e);//e 调用该方法不会改变 e 的值，它会将结果返回;将 String(e)赋值给 e 就可改变 e 的类型。
> > > console.log(typeof e);//String

> > Boolean 转换为 String
> >
> > > var f = true;
> > > f = String(f);
> > > console.log(typeof f); //String
> > > console.log(f);//"true"

> > //null 转为 String
> >
> > > var c = null;
> > > // c = c.toString(); //报错，null 值没有 toString()方法
> > > //使用 String（）函数
> > > c = String(c);
> > > console.log(typeof c); //String
> > > console.log(c); //"null"

> > //undefined 转换为 String
> >
> > > var d = undefined;
> > > // d = d.toString(); //报错，undefined 没有 toString()方法；
> > > // 调用 String()函数
> > > d = String(d);
> > > console.log(typeof d); //String
> > > console.log(d); //"undefined"

####// 加空字符串""转换为 String

> > > // null 转换为 String
> > > var g = null;
> > > g = g + "";
> > > console.log(typeof g); //String
> > > console.log(g); //"null"

> > > // undefined 转换为 String
> > > var h;
> > > h = h + "";
> > > console.log(typeof h); //String
> > > console.log(h); //"undefined"

> > > // Number 转换为 String
> > > var i = 123;
> > > i = i + "";
> > > console.log(typeof i); //String
> > > console.log(i); //"123"

> > > // Boolean 转换为 String
> > > var j = false;
> > > j = j + "";
> > > console.log(typeof j); //String
> > > console.log(j); //"false"

###其他类型转换为 Number

####使用 Number()函数

```
        //将String类型转换为Number
        var a = "123";
        console.log(a); //"123"
        console.log(typeof a); //String

        a = Number(a);
        console.log(a); //123
        console.log(typeof a); //Number

        //当String值含有任何非Number型字符，强转到Number类型时，a就会赋值成NaN
        a = "123*";
        a = Number(a);
        console.log(a); //NaN : Not a Number
        console.log(typeof a); //Number

        // 字符串为空串或全空格字符串
        console.log("a是空字符串");
        a = "   ";
        a = Number(a);
        console.log(a); //0
        console.log(typeof a); //Number

        a = "";
        a = Number(a);
        console.log(a); //0
        console.log(typeof a); //Number

        // 将Boolean转换为Number
        a = true;
        a = Number(a);
        console.log(a); //1
        console.log(typeof a); //Number

        a = false;
        a = Number(a);
        console.log(a); //0
        console.log(typeof a); //Number

        //将Null转换为Number
        a = null;
        a = Number(a);
        console.log(a); //0
        console.log(typeof a); //Number

        //将Undefined转换为Number
        a = undefined;
        a = Number(a);
        console.log(a); //NaN : Not a Number
        console.log(typeof a); //Number
```

####使用 parseInt()和 parseFloat()函数

```
        /*
            转换方式2:这种方式专门用来对付字符串
                函数：
                parseInt();把一个字符串转换为整型
                parseFloat();把一个字符串转换为浮点数
        */
        // 将具有非数值型的字符串转换为Number类型
        console.log("-------");
        a = "123px";
        a = parseInt(a);
        console.log(a); //123
        console.log(typeof a); //Number

        a = "123.123abc";
        a = parseInt(a);
        console.log(a); //123
        console.log(typeof a); //Number

        a = "123.123abc";
        a = parseFloat(a);
        console.log(a); //123.123
        console.log(typeof a); //Number

        a = "123.123.123abc";
        a = parseFloat(a);
        console.log(a); //123.123
        console.log(typeof a); //Number

        // parseInt()和parseFloat()函数只解析到非数字型字符为止
        a = "12abc3.123";
        a = parseInt(a);
        console.log(a); //12
        console.log(typeof a); //Number

        // 字符串以非数值型字符开头的，字符串被解析成NaN
        a = "abc123.123abc";
        a = parseFloat(a);
        console.log(a); //NaN
        console.log(typeof a); //Number

        /*
            如果对非String使用parseInt()或parseFloat(),
            他会先将布尔值转换为String类型的值，
            然后再解析为Number
        */
        a = true;
        a = parseFloat(a);
        console.log(a); //NaN
        console.log(typeof a); //Number

        a = null;
        a = parseInt(a);
        console.log(a); //NaN
        console.log(typeof a); //Number
```

####使用"+"或者"-"将其他类型转换为 Number 类型

```
        // 将纯数字型String转换为Number类型
        a = "0123";
        a = +a;
        console.log(typeof a); //number
        console.log(a); //123

        // 将Boolean类型转换为Number类型
        a = true;
        a = +a;
        console.log(typeof a); //number
        console.log(a); //1

        a = false;
        a = +a;
        console.log(typeof a); //number
        console.log(a); //0

        // 将null类型转换为Number
        a = null;
        a = +a;
        console.log(typeof a); //number
        console.log(a); //0

        // 将undefined类型转换为Number
        a = undefined;
        a = +a;
        console.log(typeof a); //number
        console.log(a); //NaN

        <!-- 以上代码使用“-”也可将其他类型转换为Number类型 -->
```

###其他类型转换为 Boolean

####使用 Boolean()函数

```
        // Number转换为Boolean
        // 当Number为不为0的和NaN的数值时，无论正负，转换为Boolean值都为true
        var a = 123;
        a = Boolean(a);
        console.log(a); //true
        console.log(typeof a); //boolean

        a = -123.123;
        a = Boolean(a);
        console.log(a); //true
        console.log(typeof a); //boolean

        // 当Number为NaN时，Boolean值转换为false
        a = NaN;
        a = Boolean(a);
        console.log(a); //false
        console.log(typeof a); //boolean

        // 当Number为0时，Boolean值转换为false
        a = 0;
        a = Boolean(a);
        console.log(a); //true
        console.log(typeof a); //boolean

        // String转换为Boolean
        // 当String为非空字符串时，或由空格组成的字符串，Boolean转换为true
        a = "abc";
        a = Boolean(a);
        console.log(a); //true
        console.log(typeof a); //boolean

        // 一个空格字符串
        a = " ";
        a = Boolean(a);
        console.log(a); //true
        console.log(typeof a); //boolean

        // String为空字符串时，Boolean值转换为false
        a = "";
        a = Boolean(a);
        console.log(a); //false
        console.log(typeof a); //boolean

        // Null转换为Boolean
        a = null;
        a = Boolean(a);
        console.log(a); //false
        console.log(typeof a); //boolean

        // Undefined转换为Boolean
        a = undefined;
        a = Boolean(a);
        console.log(a); //false
        console.log(typeof a); //boolean
```

##其他进制的数字
###16 进制的表示

```
        // 16进制的表示:需要以0x开头
        a = 0x123;
        console.log(a); //291，输出以十进制形式
        a = 0xffff;
        console.log(a); //65535，输出以十进制形式
```

###8 进制的表示

```
        //8进制表示：需要以0开头
        a = 070;
        console.log(a); //56;
```

###2 进制的表示

```
        //2进制数字：以0b开头
        a = 0b10;
        console.log(a); //2
```

###IE 兼容性问题

```
        a = "070";
        a = parseInt(a);
        console.log(a); //70；IE8及以下为56
        console.log(typeof a); //number

        // 不同的浏览器，解析的进制可能不一样
        /*
            为了解决这类的问题，可以使用parseInt(a,10)
            a表示被解析的变量，10表示10进制
        */
        a = "070";
        a = parseInt(a,10);
        console.log(a); //70
        console.log(typeof a); //number
```

##逻辑运算符

```
        /*
            逻辑运算符：
                &&
                ||
                ！
        */

        // &&第一个条件为false，&&之后的语句不执行
        false && alert("&&之后的语句");
        // true && alert("&&之后的语句");

        // ||第一个条件语句为true，第二个语句不在执行
        true || alert("||之后的语句");
        // false || alert("||之后的语句");

        // ！取反操作
        console.log(!(1 < 2));
```

##非布尔值运算

```
            /*
                对于非布尔值的运算，会将非布尔值先转换为布尔值，然后进行运算,最后返回原类型值
            */
            var result = 1 && 2; //
            console.log(result); //2

            // result = 1 && null;
            result = null && 1;
            console.log(result); //null

            // result = 2 && true;//返回true
            result = true && 2;
            console.log(result); //2

            result = 1 && false;
            console.log(result); //false

            result = 1 && undefined;
            console.log(result); //undefined

            result = "a" && "b";
            console.log(result); //b

            result = "1" || false;
            console.log(result); //1

            result = true || false;
            console.log(result); //true

            result = false || "a";
            console.log(result); //a

            result = false || NaN;
            console.log(result); //NaN

            // !后面可以运算任意类型的值，运算时向将运算值转换为Boolean类型，然后对值进行取反操作并返回结果
            result = !"a";
            console.log(result); //false

            result = !"";
            console.log(result); //true

            result = !0;
            console.log(result); //true

            result = !-123;
            console.log(result); //false

            result = !null;
            console.log(result); //true

            result = !undefined;
            console.log(result); //true

            result = !NaN;
            console.log(result); //true
```

##关系运算符

> 大于 ">"
> 小于 "<"
> 不小于 >=
> 不大于 <=
> 不等于 ！=
> 等于 ==
> 全等于 === 判断运算符两侧的值的时候不会做类型转换，用来判断两个值类型和数值是否全等，类型或数值任意一个不同，结果就是 false
>
> > 注意，任何值和 NaN 做任何比较，结果都是 false
> > 运算符两侧的数据类型不同时，会先将其他类型转换为 Number 类型，然后再根据大小比较
> > 如果运算符两侧都是 String 型，会按照 Unicode 编码依次比较字符的大小。

```
            console.log(null >= undefined); //false
            console.log(null < undefined); //false
            console.log(1 > null); //true
            console.log(1 >= undefined); //false
            console.log(1 < undefined); //false；undefined转换为Number为NaN
            console.log(1 > "a"); //false;"a"转换为Number为NaN

            console.log(true > false); //true
            console.log(true == "1"); //true
            console.log(false == ""); //true
```

> 判断一个值是否时 NaN，可以通过 isNaN()函数

```
            var a = NaN;
            console.log(isNaN(a)); //true

            var b = "abc";
            b = +b;
            console.log(b); //NaN
            console.log(isNaN(b)); //true
```

##条件运算符

> 条件表达式：语句 1？语句 2
>
> > 条件表达式结果为 true；执行语句 1
> > 条件表达式结果为 false；执行语句 2

##运算符的优先级

| 优先级权重 | 运算符                                                   |
| :--------: | :------------------------------------------------------- |
|     17     | .、[]、new                                               |
|     16     | ()                                                       |
|     15     | ++、--                                                   |
|     14     | !、~、+(单目)、-(单目)、typeof、void、delete             |
|     13     | %、\*、/                                                 |
|     12     | +(双目)、-(双目)目)                                      |
|     11     | <<、>>、>>>                                              |
|     10     | <、<=、>、>=                                             |
|     9      | !=、、!、===                                             |
|     8      | &                                                        |
|     7      | ^                                                        |
|     6      | 单或号                                                   |
|     5      | &&                                                       |
|     4      | 双或号                                                   |
|     3      | ?:                                                       |
|     2      | "=、+=、-=、\*=、/=、%=、<<=、>>=、>>>=、&=、^=、 或等于 |
|     1      | ,                                                        |

##
