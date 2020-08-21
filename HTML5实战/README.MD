## offsetParent API

### parentNode 直接父级

### offsetParent 类似于 css 中的**包含块**概念

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
        -   offsetParent：body
    -   本身定位为 fixed
        -   offsetParent：body

-   父级有定位
    -   本身没有定位
    -   本身定位为 absolute/relative
        -   offsetParent：定位父级
    -   本身定位为 fixed
        -   offsetParent：null
