<!--
 * @Author: Jerry Lee
 * @Date: 2020-08-22 11:18:19
 * @LastEditTime: 2020-08-22 17:29:29
 * @LastEditors: Please set LastEditors
 * @Description: PC端项目实战练习，对该项目的创建步骤，思想，经典方法进行记录，
 * @FilePath: \GithubRepositories\JerryLee1013.github.io\HTML5实战\06PC项目框架\README.md
-->

# 确定分辨率范围（1100px）

-   考虑大部分 PC 端的分辨率范围，设置一个更广泛的分辨率范围
-   针对更大的分辨率，在网页布局两侧会有更多的留白
-   主体尺寸 1100\*520

# 头部设置

# 内容区设置

-   没有点击的时候，调整分辨率，视口只能出现一屏，通过 window.onresize = function () {}；点击后视口只能出现一屏，在之前的基础上，每一屏的偏移量需要在上面的 function 中重置

## 内容区滚轮设置
