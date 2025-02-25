### 1:标签：
img：图片   src：图片路径   alt：图片描述   title：鼠标悬停显示的文字
audio：音频
video：视频***
a: 超链接
单标签：img、a、br、hr、input、link    前三个是重点
双标签：div、span、p、h1~h6、ul、ol、li、textarea、button、video、audio   前三个是重点
p: 定义段落的
ul：无序列表
ol：有序列表
header：定义文档的头部
script：引入js文件
nav: 定义导航栏连接部分

### 2：引入css的样式
外联式：
<link rel="stylesheet" type="text/css" href="mystyle.css">***
内嵌式：
<style>
/* CSS样式 */   
</style>
行内式：
<div style="color:red;font-size:16px;">Hello, world!</div>

### 3：常见标签的写法
body {
  color: #333;
}

### 4:弹性盒子
display: flex; /* 定义为弹性盒子 */

### 5:css选择器的优先级
通配符选择器 < 标签选择器 < 类选择器 < ID选择器 < 行内样式
*{}            p{}         .class{}   #id{}    <div style=""></div>

### 6:图片img.jpg,要访问的目标网站是https://www.example.com/img.jpg，正确的写法是什么
<a href="https://www.example.com/img.jpg"><img src="img.jpg" alt="图片描述" /></a>

### 7:font属性
font-size: 20px; /* 字体大小  */    ***
font-weight: bold; /* 字体粗细 */   ***
font-family: Arial, sans-serif; /* 字体类型 */   ***

### 8:background属性
background-color: #f5f5f5; /* 背景颜色  */   ***
background-image: url("image.jpg"); /* 背景图片 */   ***
background-repeat: no-repeat; /* 背景图片不重复 */
background-position: center; /* 背景图片居中显示 */
background-size: cover; /* 背景图片覆盖整个容器 */

### 9:float属性
float: left;
float: right;

### 10：css中的特殊属性
display: none; /* 隐藏元素 */
visibility: hidden; /* 隐藏元素，但保留空间,在网页中占位置 */
border-radius: 50%; /* 用于设置元素的圆角 */
z-index: 10; /* 设置元素的堆叠顺序,越大越在前面 */
overflow: hidden; /* 隐藏溢出的内容 */
transition: all 0.5s ease; /* 用来定义元素的过渡效果，比如颜色的变化或尺寸大小的变化 */
transform: scale(2); /* 用来扩大元素2倍 */
box-shadow: 2px 2px 5px #888888; /* 用于设置元素的阴影效果 */

### 11：flex布局***
display: flex; /* 定义为弹性盒子 */
flex-direction: row/column; /* 定义横轴/纵轴方向 */
flex-wrap: nowrap/wrap; /* 定义不换行/换行 */
justify-content: center; /* 定义横轴对齐方式 */
align-items: center; /* 定义纵轴对齐方式 */
align-content: flex-start; /* 定义换行之后多行内容的对齐方式 */

### 12:class选择器和id选择器的区别***
class选择器可以为多个元素设置相同的样式，而id选择器只能为一个元素设置样式。
class选择器使用点（.）来定义，而id选择器使用井号（#）来定义。
class选择器可以重复使用，而id选择器在文档中只能使用一次。
class选择器可以用于任何元素，而id选择器通常用于特定的元素。
class选择器可以用于内联样式和外部样式表中，而id选择器只能用于内联样式。

### 13：div和span的区别***
div：块级元素，会独占一行，宽度为父元素的宽度，高度为内容高度。
span：内联元素，不会独占一行，宽度为内容宽度，高度为内容高度。
div是一个块级元素，它会在页面上占据一整行，并且可以包含其他块级元素和内联元素。div元素通常用于创建一个独立的容器，用于布局和样式设置。
span是一个内联元素，它不会占据一整行，而是根据内容的大小来决定占据的空间。span元素通常用于包裹文本或其他内联元素，以便对其进行样式设置。

### 14：边距属性 上边距10px，下边距30px，左边距50px，右边距80px  ***
顺序：上、右、下、左
margin: 10px 80px 30px 50px;

### 15：去除下划线的方法
a{text-decoration: none}; /* 去除下划线 */

### 16：html中产生一个无序列表
<ul><li>列表项1</li><li>列表项2</li><li>列表项3</li></ul>

### 17:display元素样式属性
display: block; /* 块级元素 */
display: inline; /* 内联元素 */
display: inline-block; /* 行内块元素 */  ***

### 18：网页的基本结构
<html><head>...</head><body>...</body></html>

### 19:定位position
position: absolute; /* 绝对定位 */  ***
position: relative; /* 相对定位 */
position: fixed; /* 固定定位 */
psotion: static; /* 静态定位 */

### 20：常见的css选择器
通配符选择器  标签选择器  类选择器  ID选择器

### 21：元素水平居中的方法有哪些 ***
margin：0 auto；
display：flex；justify-content：center；
position: absolute; left:50% transform: translateX(-50%);

### 22：元素垂直居中的方法有哪些 ***
display: flex; align-items: center;
position: absolute; top: 50%; transform: translateY(-50%);
height: 100px; line-height: 100px;

### 23: 伪元素
::after 用于在元素内容之后插入内容
::before 用于在元素内容之前插入内容

