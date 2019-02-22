1 HTML
1.1 超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。
对于中文网页需要使用 <meta charset="utf-8"> 声明编码，否则会出现乱码。有些浏览器(如 360 浏览器)会设置 GBK 为默认编码，则你需要设置为 <meta charset="gbk">  
实例：(一般直接打出!+tab键能快捷创建)  
  
```<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <meta http-equiv="X-UA-Compatible" content="ie=edge">  
    <title>Document</title>  
</head>  
<body>  
</body>  
</html>```  
  
HTML文档的后缀名 *.html*, *.htm* (两种后缀名没有区别，都可以使用)  
  
`<!DOCTYPE html>`  声明为 HTML5 文档  
`<html>`           元素是 HTML 页面的根元素  
`<head> `          元素包含了文档的元（meta）数据，如 <meta charset="utf-8"> 定义网页编码格式为 utf-8。元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他Web服务。    
`<title> `         元素描述了文档的标题  
`<body>`           元素包含了可见的页面内容  
`<h1> `            元素定义一个大标题  
`<p> `             元素定义一个段落  

1.2 什么是HTML?  
HTML 是用来描述网页的一种语言  
HTML 指的是超文本标记语言: `HyperText Markup Language`   
HTML `不是一种编程语言，而是一种标记语言` 
标记语言是一套`标记标签 `(markup tag)  
HTML 使用标记标签来描述网页  
HTML 文档包含了HTML 标签及文本内容  
HTML文档也叫做 web 页面  

1.3 HTML 标签  
HTML 标记标签通常被称为 HTML 标签 (HTML tag)  
HTML 标签是由尖括号包围的关键词，比如 <html>  
HTML 标签通常是成对出现的，比如 <b> 和 </b>  
标签对中的第一个标签是开始标签，第二个标签是结束标签  
开始和结束标签也被称为开放标签和闭合标签  `<标签>内容</标签>`  

1.4 HTML 元素
"HTML 标签" 和 "HTML 元素" 通常都是描述同样的意思.
但是严格来讲, 一个 HTML 元素包含了开始标签与结束标签，如下实例:
HTML 元素:
<p>开发的人最牛</p>

1.5 HTML 版本

 版本 | 发布时间
 ---- | ----- 
 HTML | 1991
 HTML+  | 1993 
 HTML 2.0  | 1995  
 HTML 3.2  | 1997
 HTML 4.01  | 1999
 XHTML 1.0  | 2000   
 HTML 5  | 2012   
 XHTML 5  | 2013  

1.6 <!DOCTYPE> 声明

<!DOCTYPE>声明有助于浏览器中正确显示网页，doctype 声明是不区分大小写的
<!DOCTYPE html>  
HTML5
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> HTML 4.01
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
XHTML 1.0

1.7 HTML 基础

HTML 标题（Heading）是通过<h1> - <h6> 标签来定义的.
```<h1>这是一个标题</h1>
<h2>这是一个标题</h2>
<h3>这是一个标题</h3>```

HTML 段落是通过标签 <p> 来定义的.
```<p>这是一个段落。</p>
<p>这是另外一个段落。</p>```

HTML 链接是通过标签 <a> 来定义的.
```<a href="http://www.runoob.com">这是一个链接</a>```

HTML 图像是通过标签 <img> 来定义的.
```<img src="/images/logo.png" width="258" height="39" />```

HTML 标签对大小写不敏感：<P> 等同于 <p>。许多网站都使用大写的 HTML 标签。
菜鸟教程使用的是小写标签，因为万维网联盟（W3C）在 HTML 4 中推荐使用小写，而在未来 (X)HTML 版本中强制使用小写。


1.8 HTML 属性 

HTML 元素可以设置属性
属性可以在元素中添加附加信息
属性一般描述于开始标签
属性总是以名称/值对的形式出现 例如: title="程序员很善良"
属性和属性值对大小写不敏感。
不过，万维网联盟在其 HTML 4 推荐标准中推荐小写的属性/属性值

属性的举例： class id style title
class 属性可以多用 class="haha hehe heihei" （引号里面可以填入多个class属性）
id 属性只能单独设置 id="ray"

1.6 HTML 文本格式化标签

标签  |  描述
----  | ----
<b>  |  定义粗体文本
<em>  |  定义着重文字
<i>  |  定义斜体字
<small>  |  定义小号字
<strong>  |  定义加重语气
<sub>  |  定义下标字
<sup>  |  定义上标字
<ins>  |  定义插入字
<del>  |  定义删除字

<meta> 标签
为搜索引擎定义关键词:
```<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">```
为网页定义描述内容:
```<meta name="description" content="晓信 Web & 前端一起来学习">```
每30秒钟刷新当前页面:
```<meta http-equiv="refresh" content="30">```


左侧显示logo等图片
```<!doctype HTML>
<html>
<head>
<link rel="shortcut icon" href="图片url">
<title>这是一个带图片的标签</title>
</head>
<body>
……
……
……
</body>
</html>```

1.7 HTML 表格
```<table border="1">
    <tr>
        <td>row 1, cell 1</td>
        <td>row 1, cell 2</td>
    </tr>
    <tr>
        <td>row 2, cell 1</td>
        <td>row 2, cell 2</td>
    </tr>
</table>```

1.8 HTML 列表

1.8.1 HTML无序列表
无序列表是一个项目的列表，此列项目使用粗体圆点（典型的小黑圆圈）进行标记
```<ul>
<li>Coffee</li>
<li>Milk</li>
</ul>```

1.8.2 HTML 有序列表
列表项使用数字来标记
```<ol>
<li>Coffee</li>
<li>Milk</li>
</ol>```

1.9 HTML <div> 和  <span>

1.9.1 HTML 区块元素 (块级元素 block，独占一行，可设置长宽等样式属性)
大多数 HTML 元素被定义为块级元素或内联元素。
块级元素在浏览器显示时，通常会以新行来开始（和结束)
   
实例: <h1>, <p>, <ul>, <table>

1.9.2 HTML 内联元素 (行内元素 inline 可用于为部分文本设置样式属性,不独占一行)
内联元素在显示时通常不会以新行开始

可以单独设置 inline-block
具有两种元素的共同点： 不占一行，而且e
   
实例: <b>, <td>, <a>, <img>

2 HTML5

2.1 HTML5 Web 存储
localStorage 和 sessionStorage
localStorage - 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。
sessionStorage - 用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据

2.2 HTML5 Video(MP4 WebM Ogg)
```<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
您的浏览器不支持Video标签。
</video>```

HTML5 Audio   (MP3 Ogg  Wav)
```<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
您的浏览器不支持 audio 元素。
</audio>```

2.3 canvas 画布

2.4  地理定位

2.5 存储类型的添加


--------------------------------------------分割线-----------------------------------------------------------------------------
3 CSS

3.1 什么是 CSS?
CSS 指层叠样式表 (Cascading Style Sheets)
样式定义如何显示 HTML 元素
样式通常存储在样式表中
把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题
外部样式表可以极大提高工作效率
外部样式表通常存储在 CSS 文件中
多个样式定义可层叠为一个


3.2 CSS 语法
CSS 规则由两个主要的部分构成：选择器(你需要改变的元素)，以及一条或多条声明(你需要改变的样式):
例子：

```<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
<style>
body {background-color:yellow;}
h1   {font-size:36pt;}
h2   {color:blue;}
p    {margin-left:50px;}
</style>
</head>

<body>

<h1>这个标题设置的大小为 36 pt</h1>
<h2>这个标题设置的颜色为蓝色：blue</h2>

<p>这个段落的左外边距为 50 像素：50px</p> 

</body>
</html>```


3.3 CSS Id 和 Class
id 和 class 选择器
CSS 中 id 选择器以 "#" 来定义
class 选择器以 "." 来定义
如果你要在HTML元素中设置CSS样式，你需要在元素中设置"id" 和 "class"选择器。
**ID属性不要以数字开头，数字开头的ID在 Mozilla/Firefox 浏览器中不起作用**

3.4 CSS 创建
如何插入样式表
插入样式表的方法有三种:

外部样式表(External style sheet)  ```<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>```

内部样式表(Internal style sheet)  
```<head>
<style>
hr {color:sienna;}
p {margin-left:20px;}
body {background-image:url("images/back40.gif");}
</style>
</head>```  

内联样式(Inline style)  style属性
<p style="color:sienna;margin-left:20px">这是一个段落。</p>

多重样式优先级
内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式
**如果外部样式放在内部样式的后面，则外部样式将覆盖内部样式**

3.5 CSS 背景
background-color
background-image
background-repeat
background-attachment
background-position

简写
body {background:#ffffff url('img_tree.png') no-repeat right top;}

font	在一个声明中设置所有的字体属性
font-family	指定文本的字体系列
font-size	指定文本的字体大小
font-style	指定文本的字体样式
font-variant	以小型大写字体或者正常字体显示文本。
font-weight  指定字体的粗细。

盒子模型

border, padding, margin

border	简写属性，用于把针对四个边的属性设置在一个声明。
border-style	用于设置元素所有边框的样式，或者单独地为各边设置边框样式。
border-width	简写属性，用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度。
border-color	简写属性，设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色。
border-bottom	简写属性，用于把下边框的所有属性设置到一个声明中。
border-bottom-color	设置元素的下边框的颜色。
border-bottom-style	设置元素的下边框的样式。
border-bottom-width	设置元素的下边框的宽度。
border-left	简写属性，用于把左边框的所有属性设置到一个声明中。
border-left-color	设置元素的左边框的颜色。
border-left-style	设置元素的左边框的样式。
border-left-width	设置元素的左边框的宽度。
border-right	简写属性，用于把右边框的所有属性设置到一个声明中。
border-right-color	设置元素的右边框的颜色。
border-right-style	设置元素的右边框的样式。
border-right-width	设置元素的右边框的宽度。
border-top	简写属性，用于把上边框的所有属性设置到一个声明中。
border-top-color	设置元素的上边框的颜色。
border-top-style	设置元素的上边框的样式。
border-top-width	设置元素的上边框的宽度。

Margin(外边距) - 清除边框外的区域，外边距是透明的。
Border(边框) - 围绕在内边距和内容外的边框。
Padding(内边距) - 清除内容周围的区域，内边距是透明的。
Content(内容) - 盒子的内容，显示文本和图像。


3.6 CSS Display(显示) 与 Visibility（可见性）
CSS Display - 块和内联元素

3.7 CSS Position(定位)
position 属性的五个值：
static   元素的默认值，静态定位的元素不会受到 top, bottom, left, right影响。
relative  相对定位元素的定位是相对其正常位置。
fixed   元素的位置相对于浏览器窗口是固定位置。即使窗口是滚动的它也不会移动
absolute  绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>
sticky  基于用户的滚动位置来定位


3.8 CSS 布局 - Overflow
overflow 属性用于控制内容溢出元素框时显示的方式
visible	默认值。内容不会被修剪，会呈现在元素框之外。
hidden	内容会被修剪，并且其余内容是不可见的。
scroll	内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
auto	如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
inherit	规定应该从父元素继承 overflow 属性的值。

3.9 CSS Float(浮动)
会使元素向左或向右移动，其周围的元素也会重新排列,在布局非常有用,
如果你把几个浮动的元素放到一起，如果有空间的话，它们将彼此相邻
###清除浮动 - 使用 clear

clear 属性指定元素两侧不能出现浮动元素

```.clear-box
{
    clear:both;
}```


3.10 CSS 布局 - 水平 & 垂直对齐
元素居中对齐
要水平居中对齐一个元素(如 <div>), 可以使用 margin:0 auto;
文本居中对齐
如果仅仅是为了文本在元素内居中对齐，可以使用 text-align: center;
图片居中对齐
要让图片居中对齐, 可以使用 margin:0 auto; 并将它放到 *块* 元素中:
左右对齐
float position
垂直居中  
使用 line-height

3.11 CSS 组合选择符
后代选择器(以空格分隔)
后代选择器用于选取某元素的后代元素
```div p
{
  background-color:yellow;
}```
子元素选择器(以大于号分隔）
子元素选择器（Child selectors）只能选择作为某元素子元素的元素
```div>p
{
  background-color:yellow;
}```
相邻兄弟选择器（以加号分隔）
可选择紧接在另一元素后的元素，且二者有相同父元素
```div+p
{
  background-color:yellow;
}```
普通兄弟选择器（以破折号分隔）
后续兄弟选择器选取所有指定元素之后的相邻兄弟元素
```div~p
{
  background-color:yellow;
}```

4 CSS3

4.1 CSS3 圆角
border-radius

4.2 CSS3 盒阴影
```div
{
box-shadow: 10px 10px 5px #888888;
}```

4.3 CSS3 线性渐变

4.3.1 从上到下的线性渐变：
background: -webkit-linear-gradient(red, blue); /* Safari 5.1 - 6.0 */
background: -o-linear-gradient(red, blue); /* Opera 11.1 - 12.0 */
background: -moz-linear-gradient(red, blue); /* Firefox 3.6 - 15 */
background: linear-gradient(red, blue); /* 标准的语法 */

4.3.2 线性渐变 - 从左到右
background: -webkit-linear-gradient(left, red , blue); /* Safari 5.1 - 6.0 */
background: -o-linear-gradient(right, red, blue); /* Opera 11.1 - 12.0 */
background: -moz-linear-gradient(right, red, blue); /* Firefox 3.6 - 15 */
background: linear-gradient(to right, red , blue); /* 标准的语法 */

4.3.3 从左上角到右下角的线性渐变
background: -webkit-linear-gradient(left top, red , blue); /* Safari 5.1 - 6.0 */
background: -o-linear-gradient(bottom right, red, blue); /* Opera 11.1 - 12.0 */
background: -moz-linear-gradient(bottom right, red, blue); /* Firefox 3.6 - 15 */
background: linear-gradient(to bottom right, red , blue); /* 标准的语法 */

4.3.4 使用角度
background: -webkit-linear-gradient(180deg, red, blue); /* Safari 5.1 - 6.0 */
background: -o-linear-gradient(180deg, red, blue); /* Opera 11.1 - 12.0 */
background: -moz-linear-gradient(180deg, red, blue); /* Firefox 3.6 - 15 */
background: linear-gradient(180deg, red, blue); /* 标准的语法 */


4.4 CSS3 径向渐变
background: -webkit-radial-gradient(red, green, blue); /* Safari 5.1 - 6.0 */
background: -o-radial-gradient(red, green, blue); /* Opera 11.6 - 12.0 */
background: -moz-radial-gradient(red, green, blue); /* Firefox 3.6 - 15 */
background: radial-gradient(red, green, blue); /* 标准的语法 */

4.5 CSS3 的文本阴影
text-shadow
box-shadow
text-overflow
word-wrap
word-break

4.6 CSS3 过渡
CSS3 过渡是元素从一种样式逐渐改变为另一种的效果
transition	简写属性，用于在一个属性中设置四个过渡属性。	3
transition-property	规定应用过渡的 CSS 属性的名称。	3
transition-duration	定义过渡效果花费的时间。默认是 0。	3
transition-timing-function	规定过渡效果的时间曲线。默认是 "ease"。	3
transition-delay	规定过渡效果何时开始。默认是 0。


4.7 CSS3 动画
@keyframes	规定动画。	3
animation	所有动画属性的简写属性，除了 animation-play-state 属性。	3
animation-name	规定 @keyframes 动画的名称。	3
animation-duration	规定动画完成一个周期所花费的秒或毫秒。默认是 0。	3
animation-timing-function	规定动画的速度曲线。默认是 "ease"。	3
animation-fill-mode	规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。	3
animation-delay	规定动画何时开始。默认是 0。	3
animation-iteration-count	规定动画被播放的次数。默认是 1。	3
animation-direction	规定动画是否在下一周期逆向地播放。默认是 "normal"。	3
animation-play-state	规定动画是否正在运行或暂停。默认是 "running"。
