<!--
 * @Brief:
 * @LastEditors: Jerry Lee
 * @LastEditTime: 2020-07-23 15:07:17
-->

#HTML5 深入学习：

##attribute 和 property

###什么是 attribute？

> html 标签的预定义和自定义属性称为 attribute

###什么是 property？

> js 原生队形的直接属性，统称为 property

###什么是布尔值属性？

> property 中属性值为 true/false 的属性

###attribute 和 property 的同步关系：

> 非布尔属性：两者实时同步
> 布尔属性：
>
> > > property 永远都不会同步 attribute
> > > 在没有动过 property 的情况下，attribute 会同步 property，在动过 property 的情况下，attribute 不会同步 property

###用户操作的是 property

###浏览器支持的是 property

###在操作非布尔值属性时，使用 attr()成本更低，prop()也可以使用;在操作布尔值属性时，一定使用 prop().

###attr()与 prop()区分图
![attr()与 prop()区分图](https://images2015.cnblogs.com/blog/42045/201607/42045-20160705135918967-255741899.png)
