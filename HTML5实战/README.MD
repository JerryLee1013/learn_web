## Html5 问题汇总

### parentNode :直接父级

### offsetParent :类似于 css 中的**包含块**概念

-   作用：offsetLeft 和 OffsetTop 参照与 offsetParent 的内边距边界的
-   父级是否有定位
-   本身是否有定位
-   浏览器不一样

### IE7 以上（不是火狐）

-   父级没有定位

    -   本身没有定位
    -   本身定位为 absolute/relative
        -   offsetParent：body
    -   本身定位为 fixed
        -   offsetParent：null

-   父级有定位
    -   本身没有定位
    -   本身定位为 absolute/relative
        -   offsetParent：定位父级
    -   本身定位为 fixed
        -   offsetParent：null

### 火狐

-   父级没有定位

    -   本身没有定位
    -   本身定位为 absolute/relative
    -   本身定位为 fixed
        -   offsetParent：body

-   父级有定位

    -   本身没有定位
    -   本身定位为 absolute/relative
        -   offsetParent：定位父级
    -   本身定位为 fixed

        -   offsetParent：body

### IE7 以下

-   父级没有定位

    -   本身没有定位
    -   本身定位为 absolute/relative
    -   本身定位为 fixed
        -   offsetParent：body

-   父级有定位
    -   本身没有定位
    -   本身定位为 absolute/relative
    -   本身定位为 fixed
        -   offsetParent：定位父级

### haslayout

-   IE7 以下，如果当前元素的某个父级元素触发了 hasLayout，那么 offsetParent 就会被指向这个触发了 layout 的父节点上

### getBoundingClientRect()返回元素的大小及其相对于视口的位置

-   返回一个对象，相对于视口的相对值

```javascript
DOMRect{
    bottom: 599.9747314453125
    height: 199.9915771484375
    width: 199.9915771484375
    left: 399.983154296875
    right: 599.9747314453125
    top: 399.983154296875
    x: 399.983154296875
    y: 399.983154296875
}
```

### clientWH & offsetWH

-   在 ie10 及以下 clientWH & offsetWH 统一被指定为视口的宽高

#### 专门为视口设计的 clientWH

```javascript
window.onload = function () {
    //视口大小，html根标签有margin不会影响wh的大小
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    console.log(w, h);

    //IE11中，html根标签有margin会影响wh的大小
    //在IE10及以下clientWH & offsetWH统一被指定为视口的宽高，html根标签有margin不会影响wh的大小
    w = document.documentElement.offsetWidth;
    h = document.documentElement.offsetHeight;
    console.log(w, h);
};
```

### js 兼容问题

#### addEventlistener/attachEvent

#### 滚轮事件

```javascript
if(test.addEventListener){
	//火狐
	test.addEventListener("DOMMouseScroll", function () {
		console.log(1);
	});
	}else{
	//非火狐浏览器
	test.onmousewheel = function () {
		console.log(1);
		};
}
```
