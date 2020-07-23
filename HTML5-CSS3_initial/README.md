HTML部分
实体：&开头
显示结果	描述	实体名称	实体编号
 	空格	&nbsp;	&#160;
<	小于号	&lt;	&#60;
>	大于号	&gt;	&#62;
&	和号	&amp;	&#38;
"	引号	&quot;	&#34;
'	撇号 	&apos; (IE不支持)	&#39;
￠	分	&cent;	&#162;
£	镑	&pound;	&#163;
¥	日圆	&yen;	&#165;
€	欧元	&euro;	&#8364;
§	小节	&sect;	&#167;
©	版权	&copy;	&#169;
®	注册商标	&reg;	&#174;
™	商标	&trade;	&#8482;
×	乘号	&times;	&#215;
÷	除号	&divide;	&#247;
结果	描述	实体名称	实体编号
"	quotation mark	&quot;	&#34;
'	apostrophe 	&apos;	&#39;
&	ampersand	&amp;	&#38;
<	less-than	&lt;	&#60;
>	greater-than	&gt;	&#62;

<meta>定义和用法
<meta> 元素据元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。
<meta> 标签位于文档的头部，不包含任何内容。<meta> 标签的属性定义了与文档相关联的名称/值对。
HTML 与 XHTML 之间的差异
在 HTML 中，<meta> 标签没有结束标签。
在 XHTML 中，<meta> 标签必须被正确地关闭。
提示和注释：
注释：<meta> 标签永远位于 head 元素内部。
注释：元数据总是以名称/值的形式被成对传递的。
必需的属性
属性	值	描述
content
some_text	定义与 http-equiv 或 name 属性相关的元信息
可选的属性
属性	值	描述
http-equiv
•	content-type 
•	expires 
•	refresh 
•	set-cookie 	把 content 属性关联到 HTTP 头部。
name
•	author 
•	description 
•	keywords 
•	generator 
•	revised 
•	others 	把 content 属性关联到一个名称。
scheme
some_text	定义用于翻译 content 属性值的格式。
		

定义列表
<dl>
   <dt>计算机</dt>
   <dd>用来计算的仪器 ... ...</dd>
   <dt>显示器</dt>
   <dd>以视觉方式显示信息的装置 ... ...</dd>
</dl>
锚点：
href = “#id”;

<img>alt属性：图片的描述，一般不会显示，有些浏览器会在图片加载不出来的时候显示，搜索引擎根据alt中的内容来识别图片，如果没有alt，则图片不会被搜索引擎搜录。
图片的格式：
jpeg：支持的颜色比较丰富，不支持透明效果，不支持动图
		一般用来显示照片
gif：支持的颜色较少，支持简单透明，支持动图
		表示颜色单一的图片和动图
png：支持的颜色比较丰富，支持复杂透明效果，不支持动图
		颜色丰富，复杂透明的图片，专为网页而生（png用的最多）
webp：谷歌新推出的专门用来表示网页中图片的一种格式。
		具备图片格式的所有特点，而且文件特别小。
		缺点：兼容性不太好，老的浏览器会出问题
base64：将图片使用base64进行编码，这样可以将图片转换为字符，通过字符形式引入图片。
		一般使和网页一起加载的图片才会使用base64
图片合适选择：效果一样用小的，效果不一样，用效果好的；
内联框架<iframe>：用于向当前页面引入一个其他页面。
	src：指定要引入的网页路径
frameborder：（值0/1）指定内联框架的边框
<iframe src="https://www.baidu.com" frameborder="0" width="800px" height="400px"></iframe>


<audio>音频标签：用来向页面中引入外部音频文件。文件引入时默认用户无法操作。
第一种：用src属性引入文件
<audio src="./music/Uu - 那女孩对我说 (完整版).mp3" controls autoplay loop>那女孩对我说</audio>
第二种：用source标签引入文件
<audio controls>
        <source src="./music/Uu - 那女孩对我说 (完整版).mp3">
</audio>
	第三种：用embed标签，这个标签兼容ie9以下的浏览器
 <embed src="./music/Uu - 那女孩对我说 (完整版).mp3" type="audio/mp3" width="400px" height="400px">
处理兼容性问题：
<audio controls>
        <!-- 对不起，您的浏览器不支持播放音频，请升级浏览器 -->
        <source src="./music/Uu - 那女孩对我说 (完整版).mp3">
        <source src="./music/A-Lin - 恰好.mp3">
            <!-- 兼容ie9以下 -->
            <embed src="./music/Uu - 那女孩对我说 (完整版).mp3" type="audio/mp3" width="400px" height="400px">
    </audio>
属性：
controls：是否运用用户控制播放
	autoplay：音频文件是否自动播放。如果设置了autoplay则音乐在打开页面时会自动播放，但目前来讲大部分浏览器都不会对音乐自动播放。
	loop：音乐是否循环播放
<video>视频标签：	
使用方式和<audio>基本一样
 

CSS部分
选择器：
	元素选择器：标签名指定的元素
	id选择器：元素id属性值为选择器名
	类选择器：以类名为选择器名
	复合选择器：
		交集选择器：div .setColor{}
		并集选择器：div,span{}
		关系选择器：子元素选择器（>）
						选择紧邻p元素的下一个span兄弟元素（+）
					/* 选择下一个兄弟 */
         p + span{
             color: yellow;
     }
						选择p后边的所有的span兄弟元素（~）
p ~ span{
    color: blue;
}
		属性选择器：[属性名]{}、
[属性名=属性值]{}、等于该属性值的元素
[属性名^=属性值]{}、等于以该属性值开头的元素
[属性名$=属性值]{}、等于以该属性值结尾的元素
[属性名*=属性值]{}、等于包含该属性值的元素
         span[title]{
             color: pink;
         }

         span[title=abc]{
             color: yellow;
         }

         span[title ^= abc]{
             color: deeppink;
         }

         span[title $= hello]{
             color: darkslategrey;
         }

