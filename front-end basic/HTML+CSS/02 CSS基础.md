>小技巧
>1. `div` 的盒子高跟文字的行高相等时，可以实现文字垂直居中。
>2. `li {list-style:none}` 可以去掉列表标签前面的小圆点。
>3. 清除浏览器默认的内外边距： [[02 CSS基础#^clearDefaultMargin]]
>4. 通栏盒子：跟浏览器一样宽，不需要指定宽度。
>5. 盒子模型中，padding 和 border 会撑大盒子大小，margin 不会撑大盒子大小。
>6. 行内块元素与行内块元素之间会有缝隙，使用浮动后就没有缝隙。
>7. 元素使用了绝对定位和固定定位之后，`margin` 值会失效。此时可使用 `transform` 来移动位置。

B 站视频：[黑马程序员 pink 老师前端入门教程，零基础必看的 h5 (html5)+css3+移动端前端视频教程](https://www.bilibili.com/video/BV14J4114768/)
# 1 简介
## 1.1 概述
CSS 是层叠样式表 ( *Cascading Style Sheets* ) 的简称，有时我们也会称之为 CSS 样式表或级联样式表。  
CSS 也是一种标记语言，主要用于设置 HTML 页面中的文本内容（字体、大小、对齐方式等）、图片的外形（宽高、边框样式、  边距等）以及版面的布局和外观显示样式。  

## 1.2 语法规范
CSS 规则由两个主要的部分构成：选择器以及一条或多条声明。
所有的样式，都包含在 `<style>` 标签内，表示是样式表。 `<style>` 一般写到 ` </head>` 上方。
```html
<head>
    ...
    <style>
        /* 为h1设置样式 */
        h1 {
            color: darkturquoise;
            font-size: 100px;
        }
    </style>
</head>
```
## 1.3 代码风格
样式格式书写采用展开格式；
属性名、属性值关键字全部使用小写字母；
属性值前面，冒号后面，保留一个空格，选择器（标签）和大括号中间保留空格。

# 2 CSS 基础选择器
>  选择器分为基础选择器和复合选择器两个大类，基础选择器又包括： 标签选择器、类选择器、 id 选择器和通配符选择器。
## 2.1 标签选择器
标签选择器（元素选择器） 是指**用 HTML 标签名称作为选择器**，按标签名称分类，为页面中某一类标签指定统一的 CSS 样式。  
作用：标签选择器可以把某一类标签全部选择出来，比如所有的` <div>` 标签和所有的 `<span>` 标签。  
优点：能快速为页面中同类型的标签统一设置样式。  
缺点：不能设计差异化样式，只能选择全部的当前标签。
## 2.2 类选择器
如果想要差异化选择不同的标签，单独选一个或者某几个标签，可以使用类选择器。
类命名注意：有意义，尽量使用中文，名称遵循《Web 前端开发规范手册》；长名称或词组可以使用中横线来连接。
口诀：**样式点定义，结构类调用。一个或多个，开发最常用。**
```html
<head>
	...
    <style>
        .red {
            color: red;
        }
    </style>
</head>

<body>
    <div class="red">变红色</div>
</body>
```
- 多类名选择器：可以把一些标签元素相同的样式 (共同的部分) 放到一个类里面；这些标签都可以调用这个公共的类，然后再调用自己独有的类；节省 CSS 代码, 统一修改也非常方便。
```html
<head>
	...
    <style>
        .box {
            width: 100px;
            height: 100px;
        }

        .red {
            background-color: red;
        }

        .green {
            background-color: green;
        }

        .blue {
            background-color: blue;
        }
    </style>
</head>

<body>
    <!-- 每个div有两个类名 -->
    <div class="box red"></div>
    <div class="box green"></div>
    <div class="box blue"></div>
</body>
```
## 2.3 id 选择器
id 选择器可以为标有特定 id 的 HTML 元素指定特定的样式。  
HTML 元素以 id 属性来设置 id 选择器， CSS 中 id 选择器以“`#`" 来定义。
口诀：**样式 `#` 定义, 结构 id 调, 只能调一次, 别人切勿用**。

```html
<head>
	...
    <style>
        #nav {
            width: 100px;
            height: 100px;
        }
</head>

<body>
    <div id="nav"></div>
</body>
```
- 和类选择器的区别：
	-   类选择器（ class）好比人的名字，一个人可以有多个名字，同时一个名字也可以被多个人使用。  
	- id 选择器好比人的身份证号码，全中国是唯一的，不得重复。  
	- id 选择器和类选择器最大的不同在于使用次数上。
	- 类选择器在修改样式中用的最多， id 选择器一般用于页面唯一性的元素上，经常和 JavaScript 搭配使用。

## 2.4 通配符选择器
在 CSS 中，通配符选择器使用“`*`”定义，它表示选取页面中所有元素（标签） 。

## 2 .5 总结
| 选择器类型   | 作用                          | 特点                                 | 使用情况                         | 用法       |
| ------------ | ----------------------------- | ------------------------------------ | -------------------------------- | ---------- |
| 标签选择器   | 选出所有相同的标签            | 无法差异化选择，一次只能选择一个标签 | 常见，但在需要差异化选择时不适用 | 标签名     |
| 类选择器     | 选出1个或多个具有相同类的元素 | 可以根据需求进行选择                 | 非常常见                         | `.class名` |
| ID选择器     | 选出具有指定ID的元素          | 每个HTML文档中只能出现一次           | 一般与JS搭配使用                 | `#id名`    |
| 通配符选择器 | 选择所有标签                  | 选择的元素过多，需要特殊情况下使用   | 特殊情况下使用                   | `*`        |
# 3 CSS 字体属性
>CSS Fonts (字体) 属性用于定义字体系列、大小、粗细、和文字样式（ 如斜体） 。
## 3.1 字体系列
```html
p { font-family:"微软雅黑";}
<!-- 多个单词组成的字体, 用引号 -->
div {font-family: Arial , "Microsoft Yahei"，"微软雅黑";}
```
尽量使用系统默认自带字体，保证在任何用户的浏览器中都能正确显示  
最常见的几个字体：`body {font-family: 'Microsoft YaHei',tahoma,arial,'Hiragino Sans GB'; }`
## 3.2 字体大小
CSS使用 `font-size` 属性定义字体大小.
谷歌浏览器的文字大小为 16px.
可以给 body 指定整个页面文字的大小, 但对标题标签不起作用, 需要自己手动指定.
## 3.3 字体粗细
CSS 使用 ` font-weight` 属性设置文本字体的粗细.
  
| 属性值  | 描述                             |
| ------- | -------------------------------- |
| normal  | 默认值(不加粗的)                 |
| bold    | 定义粗体（加粗的）               |
| 100-900 | 400 等同于 normal，而 700 等同于 bold,注意这个数字后面不跟单位 |
学会取消自带加粗标签（ 比如 h 和 strong 等) 的加粗，或者对其他标签加粗  
实际开发时，我们更喜欢用数字表示粗细
## 3.4 文字样式
CSS 使用 `font-style` 属性设置文本的风格。
  
| 属性值 | 作用                                                   |
| ------ | ------------------------------------------------------ |
| normal | 默认值，浏览器会显示标准的字体样式 `font-style: normal;` |
| italic | 浏览器会显示斜体的字体样式。                           |
**注意：** 平时我们很少给文字加斜体，反而要给斜体标签（ em， i）改为不倾斜字体。
## 3.5 字体属性复合写法
字体属性可以把以上文字样式综合来写, 这样可以更节约代码:
```html
body {
	font: font-style font-weight font-size/line-height font-family;
}
```
使用 font 属性时，必须按上面语法格式中的顺序书写，**不能更换顺序**，并且各个属性间以空格隔开.
不需要设置的属性可以省略（取默认值），**但必须保留 `font-size` 和 `font-family ` 属性**，否则 font 属性将不起作用
```html
div {
    /* 全写 */
	font: italic 700 16px 'Microsoft yahei'; 
	
	/* 省略写:此处省略font-weight */
	font: italic 16px "Helvetica Neue";
}


```
## 3.6 字体属性总结
| 属性        | 表示     | 注意点                                                                 |
| ----------- | -------- | ---------------------------------------------------------------------- |
| font-size   | 字号     | 我们通常用的单位是px像素，一定要跟上单位                               |
| font-family | 字体     | 实际工作中按照团队约定来写字体                                         |
| font-weight | 字体粗细 | 记住加粗是 700 或者 bold, 不加粗是 normal 或者 400 ,记住数字不要跟单位 |
| font-style  | 字体样式 | 记住倾斜是 italic, 不倾斜是 normal,工作中我们最常用 normal             |
| font        | 字体连写 | 1.字体连写是有顺序的不能随意换位置；2.其中字号和字体必须同时出现。     |

# 4 CSS 文本属性
CSS Text（文本）属性可定义文本的外观，比如文本的颜色、对齐文本、装饰文本、文本缩进、行间距等.
## 4.1 文本颜色
`color `属性用于定义文本的颜色。

| 颜色表示       | 属性值                                  |
| -------------- | --------------------------------------- |
| 预定义的颜色值 | red, green，blue，还有我们的御用色 pink |
| 十六进制       | `#FFO000`，`#FF6600`，`#29D794`         |
| RGB 代码       | rgb (255, 0, 0) 或 rgb (100%, 0%, 0%)   |
## 4.2 对齐文本
`text-align` 属性用于设置元素内文本内容的水平对齐方式。
三个取值: left/right/center
## 4.3 装饰文本
`text-decoration ` 属性规定添加到文本的修饰。可以给文本添加下划线、删除线、上划线等。

| 属性值        | 描述                 |
| ------------- | -------------------- |
| none          | 默认。没有装饰线(最常用)  |
| underline     | 下划线。链接a自带下划线（常用) |
| overline      | 上划线。(几乎不用)        |
| line-through  | 删除线。(不常用)         |
```html
<!-- 取消链接标签a 的下划线 -->
a {
	text-decoration: none;
}
```
## 4.4 文本缩进
`text-indent` 属性用来指定文本的第一行的缩进，通常是将段落的首行缩进。
```html
p{
	text-indent: 2em;
}
```
em 是一个相对单位，1em 就是当前元素（ 也就是 `font-size`) 1 个文字的大小,如果当前元素没有设置大小，则会按照父元素的 1 个文字大小。
## 4.5 行间距
`line-height` 属性用于设置行间的距离（行高） 。可以控制文字行与行之间的距离.
## 4.6 文本属性总结
| 属性            | 表示     | 注意点                                                 |
| --------------- | -------- | ------------------------------------------------------ |
| color           | 文本颜色 | 我们通常用十六进制,比如而且是简写形式 `#fff`           |
| text-align      | 文本对齐 | 可以设定文字水平的对齐方式                             |
| text-indent     | 文本缩进 | 通常我们用于段落首行缩进2个字的距离`text-indent: 2em;` |
| text-decoration | 文本修饰 | 记住添加下划线 underline,取消下划线 none               |
| line-height     | 行高     | 控制行与行之间的距离                                   |
# 5 CSS 引入方式
## 5.1 内部样式表 (嵌入式)
内部样式表（内嵌样式表）是写到 html 页面内部. 是将所有的 CSS 代码抽取出来，单独放到一个 `<style>` 标签中。
```html
<head>
	...
    <style>
        .red {
            color: red;
        }
    </style>
</head>

<body>
    <div class="red">变红色</div>
</body>
```
`<style> `标签理论上可以放在 HTML 文档的任何地方，但一般会放在文档的`<head>`标签中
通过此种方式，可以方便控制**当前整个页面中的**元素样式设置  
代码结构清晰，但是并没有实现结构与样式完全分离  

## 5.2 行内样式表 (行内式)
行内样式表（内联样式表）是在元素标签内部的 style 属性中设定 CSS 样式。适合于修改简单样式
```html
<div style="color: red; font-size: 12px;">青春不常在， 抓紧谈恋爱</div>
```

## 5.3   外部样式表 (链接式)
开发中用的多,  引入外部样式表分为两步：  
1. 新建一个后缀名为 `.css `的样式文件，把所有 CSS 代码都放入此文件中。  
2. 在 HTML 页面中，使用 `<link>` 标签 (写在 `<head>` 标签中) 引入这个文件。
```html
<link rel="stylesheet" href="css文件路径">
```

| 属性 | 作用                                                                                                   |
| ---- | ------------------------------------------------------------------------------------------------------ |
| rel  | 定义当前文档与被链接文档之间的关系，在这里需要指定为`"stylesheet"`，表示被链接的文档是一个样式表文件。 |
| href | 定义所链接外部样式表文件的URL，可以是相对路径，也可以是绝对路径。                                      |

## 5.4 CSS 引入方式总结
| 样式表     | 优点                     | 缺点         | 使用情况       | 控制范围     |
| ---------- | ------------------------ | ------------ | -------------- | ------------ |
| 行内样式表 | 书写方便，权重高         | 结构样式混写 | 较少           | 控制一个标签 |
| 内部样式表 | 部分结构和样式相分离     | 没有彻底分离 | 较多           | 控制一个页面 |
| 外部样式表 | 完全实现结构和样式相分离 | 需要引入     | 最多，吐血推荐 | 控制多个页面 |

# 6 Emmet 语法
>  Emmet 语法的前身是 Zen coding, 它使用缩写, 来提高 html/css 的编写速度, Vscode 内部已经集成该语法.
## 6.1 快速生成 HTML 结构
>以下语法仅在 `<body>` 标签内部生效。

| 符号                      | 说明                                          | 示例       |
| ------------------------- | --------------------------------------------- | ---------- |
| `*`                       | 生成多个相同的标签                            | `div*5`    |
| `>`                       | 生成父子级关系标签                            | `ul>li`    |
| `+`                       | 生成兄弟级关系标签                            | `div+p`    |
| `.demo`                   | 生成 `class=demo` 的 div 标签                 | `.search`  |
| `#demo`                   | 生成 `id=demo` 的 div 标签                    | `#pic`     |
| `.` 或 `#` 前面加标签约束 | 生成对应的 `id=xx` 或 `class=xx` 的标签       | `p#pic`    |
| `$`                       | 自增符号，多个标签的 `id` 或 `class` 的有顺序 | `.demo$*5` |
| `{}`                      | 生成的标签内部自带内容                        | `.demo{测试$}*5`           |
自增符号的使用演示如下：
![[$号的使用.gif]]
## 6.2 快速生成 CSS 样式
>CSS 基本采取简写形式即可.  
1. 比如 `w200` 按tab 可以 生成 `width: 200px;` 
2. 比如 `lh26px` 按 tab 可以生成 `line-height: 26px;`
![[快速生成CSS样式.gif]]

# 7 复合选择器
## 7.1 后代选择器
又称为包含选择器，可以**选择父元素里面的所有子元素**。其写法就是把外层标签写在前面，内层标签写在后面，中间用空格分隔。当标签发生嵌套时，内层标签就成为外层标签的后代。
```html
元素1 元素2 { 样式声明 }

/* 选择 ul 里面所有的 li标签元素 */
ul li {
	color: pink;
}

/* 元素1和元素2可以是任意基础选择器 */
.nav li a{
	color: orange;
}
```
## 7.2 子选择器
子元素选择器（子选择器） 只能选择作为**某元素的最近一级子元素**。简单理解就是选亲儿子元素。
元素 2 必须式是亲儿子，其孙子、重孙之类都不归他管。
```html
元素1>元素2 { 样式声明 }

div>p { 样式声明 } /* 选择 div 里面所有最近一级 p 标签元素 */
```
## 7.3 并集选择器
并集选择器可以选择多组标签, 同时为他们定义相同的样式。通常用于集体声明.  
并集选择器是各选择器通过英文逗号 `,` 连接而成， **任何形式的选择器都可以作为并集选择器的一部分**。
```html
div,
p,
.nav li {
	color: pink;
}
```
## 7.4 伪类选择器
向某些选择器添加特殊的效果。
### 链接伪类选择器
```html
a:link    /*选择所有未被访问的链接*/
a:visited /*选择所有已被访问的链接*/
a:hover  /*选择鼠标指针位于其上的链接*/
a:active  /*选择活动链接（鼠标按下未弹起的链接）*/
```
1. 为了确保生效，请按照 LVHA 的循顺序声明 `:link－ :visited－ :hover－ : active`。  
2. 记忆法： love hate 或者 lv 包包 hao 。  
3. 因为 a 链接在浏览器中具有默认样式，所以我们实际工作中都需要给链接单独指定样式.
4.  **链接伪类选择器实际工作开发中的写法**：
```html
/* a 是标签选择器 所有的链接 */  
a {  
color: gray;  
}  
/* :hover 是链接伪类选择器 鼠标经过 */  
a:hover {  
color: red; /* 鼠标经过的时候， 由原来的 灰色 变成了红色 */  
}
```

### Focus 伪类选择器
把获得光标的 input 表单元素选取出来，为其添加特殊效果。
```html
input:focus {  
	background-color:yellow;  
}
```
### checked 伪类选择器
选出勾选的复选框。
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* 选择被勾选的复选框 */
    .ck:checked {
      width: 20px;
      height: 20px;
    }
  </style>
</head>

<body>
  <input type="checkbox" name="" id="" class="ck">
  <input type="checkbox" name="" id="" class="ck">
  <input type="checkbox" name="" id="" class="ck">
  <input type="checkbox" name="" id="" class="ck">
</body>

</html>
```
## 7.5 复合选择器总结
| 选择器          | 作用                 | 使用情况 | 特征                              | 隔开符号及用法 |
| --------------- | -------------------- | -------- | --------------------------------- | -------------- |
| 后代选择器      | 用来选择后代元素     | 较多     | 可以是子孙后代                    | 空格 `.nav a`  |
| 子代选择器      | 选择最近一级元素     | 较少     | 只选亲儿子                        | 大于 `.nav > p` |
| 并集选择器      | 选择某些相同样式的元素 | 较多     | 可以用于集体声明                  | 逗号 `.nav, .header` |
| 链接伪类选择器  | 选择不同状态的链接   | 较多     | 跟链接相关                        | `a {}` 和 `a:hover` |
| :focus选择器   | 选择获得光标的表单   | 较少     | 跟表单相关                        | `input:focus` 记住这个写法 |

# 8 元素显示模式
>也就是元素（标签）以什么方式进行显示。
## 8.1 块元素
>  常见的块元素有`<h1>~<h6>`、 `<p>`、 `<div>`、 `<ul>`、` <ol>`、 `<li>`等， 其中 `<div>` 标签是最典型的块元素。
1. 独占一行。
2. 高度，宽度、外边距以及内边距都可以控制。
3. 宽度默认是容器（父级宽度) 的 100%。
4. 是一个容器及盒子，里面可以放行内或者块级元素。
5. 文字类的元素内 (如 `<p> <h1>~<h6>`) 不能使用块级元素, 尤其是 `div` 元素.
## 8.2 行内 (内联) 元素
>  常见的行内元素有 `<a>`、 `<strong>`、 `<b>`、 `<em>`、 `<i>`、 `<del>`、` <s>`、 `<ins>`、 `<u>`、 `<span>` 等，其中 ` <span> ` 标签是最典型的行内元素。
1. 相邻行内元素在一行上，一行可以显示多个。
2. 高、宽直接设置是无效的。
3. 默认宽度就是它本身内容的宽度。
4. 行内元素只能容纳文本或其他行内元素。
- 注意∶
	- 链接里面不能再放链接
	- 特殊情况链接 `<a>` 里面可以放块级元素，但是给 `<a>` 转换一下块级模式最安全
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240129115545.png)
## 8.3 行内块元素
>同时具有行内和块元素的特点,  `<img />`、 `<input />`、 `<td>`.
1.   和相邻行内元素（行内块）在一行上，但是他们之间会有空白缝隙。一行可以显示多个（ 行内元素特点）。  
2. 默认宽度就是它本身内容的宽度（ 行内元素特点）。  
3. 高度、行高、外边距以及内边距都可以控制（ 块级元素特点）。

## 8.4 元素显示模式总结
| 元素模式  | 元素排列        | 设置样式         | 默认宽度     | 可包含       |
| ----- | ----------- | ------------ | -------- | --------- |
| 块级元素  | 一行只能放一个块级元素 | 可以设置宽度高度     | 容器的100%  | 任何标签      |
| 行内元素  | 一行可以放多个行内元素 | 不可以直接设置宽度、高度 | 它本身内容的宽度 | 文本或其他行内元素 |
| 行内块元素 | 一行放多个行内块元素  | 可以设置宽度和高度    | 它本身内容的宽度 |           |
## 8.5 元素显示模式转换
>转换为块元素: `display: block;`
>转换为行内元素: `display: inline;` 
>转换为行内块: `display: inline-block;`

```html
<head>
	...
	<style>
	a {
		width: 150px;
		height: 50px;
		background-color:pink;
		/*把行内元素a转换为块级元素*/
		display: block;
	}
	</style>
</head>
<body>
<a href="#">金星阿姨</a>
</body>
```
# 9 CSS 背景
1. `background-color` ：设置元素的背景颜色，默认为 `transparent`。
2. `background-image` ：设置背景图像，实际开发常见于 logo 或者一些装饰性的小图片或者是超大的背景图片, 优点是非常便于控制位置。

| 参数值 | 作用                           |
| ------ | ------------------------------ |
| none   | 无背景图(默认的)               |
| url (链接)    | 使用绝对或相对地址指定背景图像 |
3. `background-repeat` ：设置背景图像平铺。

| 参数值    | 作用                             |
| --------- | -------------------------------- |
| repeat    | 背景图像在纵向和横向上平铺(默认的) |
| no-repeat | 背景图像不平铺                    |
| repeat-x  | 背景图像在横向上平铺             |
| repeat-y  | 背景图像在纵向平铺               |
4. `background-position` ：改变图片在背景中的位置。

| 参数值   | 说明                                                      |
| -------- | --------------------------------------------------------- |
| length   | 百分数│由浮点数字和单位标识符组成的长度值                 |
| position | top \| center / bottom \| left \| center \| right方位名词 |
- 参数是方位名词  
	- 如果指定的两个值都是方位名词，则两个值前后顺序无关，比如 left top 和 top left 效果一致  
	- 如果只指定了一个方位名词，另一个值省略，则第二个值默认居中对齐  
- 参数是精确单位  
	- 如果参数值是精确坐标，那么第一个肯定是 x 坐标，第二个一定是 y 坐标  
	- 如果只指定一个数值，那该数值一定是 x 坐标，另一个默认垂直居中  
- 参数是混合单位  
	- 如果指定的两个值是精确单位和方位名词混合使用，则第一个值是 x 坐标，第二个值是 y 坐标
5. `background-attachment` ：设置背景图像是否固定或者随着页面的其余部分滚动，用于制作视差滚动的效果。

| 参数   | 作用                                    |
| ------ | --------------------------------------- |
| scroll | 背景图像是随对象内容滚动                |
| fixed  | 背景图像固定，不随对象内容滚动而滚动  |
6. 背景属性复合写法：一般约定的写法是 `background: 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置`，但**这几个属性的位置不是固定的**，如：`background: transparent url(image.jpg) repeat-y fixed top;`，实际开发中一般使用复合写法。
7. 背景色半透明：  `background: rgba(0, 0, 0, 0.3);`，盒子里面的内容不受影响；是 CSS3 新增属性，IE9+浏览器版本才支持的。
8. 总结：

| 属性                   | 作用                 | 值                                               |
| ---------------------- | -------------------- | ------------------------------------------------ |
| background-color       | 背景颜色             | 预定义的颜色值/十六进制/RGB代码                 |
| background-image       | 背景图片             | url(图片路径)                                    |
| background-repeat      | 是否平铺             | repeat/no-repeat/repeat-x/repeat-y               |
| background-position    | 背景位置             | length/position分别是x和y坐标                    |
| background-attachment  | 背景附着             | scroll(背景滚动)/fixed(背景固定)                 |
| 背景简写               | 书写更简单           | 背景颜色 背景图片地址 背景平铺 背景滚动 背景位置; |
| 背景色半透明           | 背景颜色半透明       | `background:rgba(0, 0, 0, 0.3);` 后面必须是 4 个值      |

```html
<!DOCTYPE html>
<html lang="en">

<head>
    ...
    <style>
        body {
            background-image: url(http://ossweb-img.qq.com/upload/webplat/info/yxzj/20230323/24388542544116.jpg);
            background-position: center 40px;
            background-repeat: no-repeat;
        }

        div {
            background-image: url(https://game.gtimg.cn/images/js/title/title_sprite.png);
            background-repeat: no-repeat;
            background-position: left;
            text-indent: 60px;
            color: green;
        }
    </style>
</head>

<body>
    <div>成长守护平台</div>
</body>
</html>
```
# 10 CSS 三大特性
## 10.1 层叠性
**相同选择器设置多个样式时**，后面的样式就会覆盖（层叠） 前面冲突的样式。层叠性主要解决样式冲突的问题。
- 层叠性原则：  
	- 样式冲突，遵循的原则是就近原则，哪个样式离结构近，就执行哪个样式  
	- 样式不冲突，不会层叠.
```html
	/* 最终颜色为grey */
    <style>
        div {
            color: red;
        }

        div {
            color: gray;
        }
    </style>
```
## 10.2 继承性
子元素可以继承父元素的样式（ 包括以 text-， font-， line-开头的属性以及 color 属性）。
```html
<head>
	...
    <style>
        /* p会继承div的相应属性 */
        div {
            color: red;
            font: 700 20px/1.5em "Microsoft Yahei";
        }
    </style>
</head>

<body>
    <div>
        <p>我爱学习</p>
    </div>
</body>
```
- 行高的继承
	- 行高可以跟单位可以不跟单位
	-  `body 行高 1.5` 这样写法最大的优势就是里面子元素可以根据自己文字大小自动调整行高
```html
<head>
    ...
    <style>
        body {
            color: pink;
            font: 700 14px/1.5 "Microsoft YaHei"
        }

        /* div会继承body的行高，并且行高的大小为div的字体大小20px * 1.5 = 30px  */
        div {
            font-size: 20px
        }
    </style>
</head>

<body>
    <div>我爱笑</div>
    <p>我爱笑</p>
</body>
```
## 10.3 优先级
当给同一个元素指定多个选择器，就会有优先级的产生。选择器相同时，执行层叠性；选择器不同时，则根据选择器权重执行。

| 选择器        | 权重       |
| ------------- | ---------- |
| 继承或者 `*`  | 0，0，0，0 |
| 元素选择器    | 0，0，0，1 |
| 类/伪类选择器 | 0，0，1，0 |
| ID 选择器     | 0，1，0，0 |
| 行内样式      | 1，0，0，0 |
| `!important`  | 无穷大，如 `div{color:pink!important}`    |
- 注意：
	- 权重由四位数字组成，但是不会有进位。
	- 等级判断从左向右，如果某一位数字相同，则判断下一位数字。
	- 子元素从父元素继承过来的权重为 0, 也就是在判断优先级时，**将父元素的权重看做是 0，0，0，0**，如下：
```html
<head>
    ...
    <style>
        #father {
            color: red;
        }

        /* p的颜色为粉色，将#father的权重看成是0，而p本身的权重为1 */
        p {
            color: pink;
        }
    </style>
</head>

<body>
    <div id="father">
        <p>我爱笑</p>
    </div>
</body>
```
- 如果是复合选择器，在判断优先级时会涉及到权重叠加的计算，在按叠加后的权重来比较：
	- `div ul li` -> 0, 0, 0, 3
	-   `. nav ul li`--> 0, 0, 1, 2  
	-  `a:hover` -> 0, 0, 1, 1  
	-  `.nav a` -> 0, 0, 1, 1

# 11 盒子模型
>    把 HTML 页面中的布局元素看作是一个矩形的盒子，也就是一个盛装内容的容器，封装周围的 HTML 元素，它包括：边框（border）、外边距 (margin)、内边距 (padding) 和实际内容 (content)。

![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240605151614.png)
## 11.1 边框 border
语法：  `border: border-width || border-style || border-color`
复合属性写法：`border: 1px solid red;` 没有顺序
可以单独设置上下左右边框：`border-top: 1px solid red;`
控制浏览器绘制表格边框的方式，合并相邻单元格的边框：`border-collapse:collapse;`
**边框会额外增加盒子的实际大小**。
## 11.2 内边距 padding
用于设置**边框与内容的距离**，同样可以单独设置上下左右内边距。
padding 属性（简写）可以有一到四个值：

| 写法                          | 含义                                  |
| ----------------------------- | ------------------------------------- |
| `padding: 5px`                | 上下左右内边距均为 5 像素             |
| `padding: 5px 10px`           | 上下 5 像素，左右 10 像素             |
| `padding: 5px 10px 20px`      | 上 5，左右 10，下 20                  |
| `padding: 5px 10px 20px 30px` | 顺时针方向，上 5，右 10，下 20，左 30 |

在指定了 width/height 时，使用 padding 会增加盒子的实际大小；未指定 width/height 时，则不受影响。如 `width:200px;`, 如果设置 `padding-left:10px;`，则 width 会变为 210px；如果设置 `padding：10px`，则 width 会变为 220px。因为没有设置 height, 故 height 不会变化。
## 11.3 外边距 margin
用于设置**盒子和盒子之间的距离**，同样可以单独设置上下左右外边距。
margin 属性（简写）的写法跟 padding 一致。
Margin **不会**撑大盒子的宽度和高度。
1. 让块级元素的盒子水平居中
	必须满足两个条件：（1）盒子必须指定了宽度；（2）盒子的左右外边距都设置为 `auto`。
	以上方法是让块级元素水平居中，行内元素或者行内块元素水平居中给其父元素添加 `text-align: center` 即可。
2. 外边距合并
（1）当上下相邻的两个块元素（兄弟关系）相遇时，如果上面的元素有下外边距 `margin-bottom`，下面的元素有上外边距 `margin-top` ，则他们之间的垂直间距不是 `margin-bottom` 与 `margin-top` 之和。**取两个值中的较大者这种现象被称为相邻块元素垂直外边距的合并**。
![相邻块元素垂直外边距的合并](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20230404104840.png)
解决方案：只给一个盒子添加 margin 值。
（2）对于两个嵌套关系（父子关系）的块元素，父元素有上外边距同时子元素也有上外边距，此时父元素会只会取两个值中较大的外边距值。
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20230404143858.png)
解决方案：
- 可以为父元素定义上边框。  
- 可以为父元素定义上内边距。  
- 可以为父元素添加 `overflow: hidden`。
3. 清除浏览器默认的内外边距 ^clearDefaultMargin
```html
/*一般为CSS的第一行代码*/
* {
	padding:0;
	margin:0;
}
```

## 11.4 圆角边框
`border-radius` 属性用于设置元素的外边框圆角。
语法：`border-radius:length;`
- 参数为数值或百分比的形式；
- 如果是正方形，想变成原型盒子，length 取值为边长的一半或者 50%
- 如果是矩形，length 取值设定为高度的一半。
- 该属性是一个简写属性，可以跟四个值，分别代表左上角、右上角、右下角、左下角，分开写： border-top-left-radius、 border-top-right-radius、 border-bottom-right-radius 和 border-bottom-left-radius

## 11.5 盒子阴影
>CSS3 新增，可以为盒子添加阴影。

语法：`border-shadow: h-shadow v-shadow blur spread color inset`

| 值       | 描述                                            |
| -------- | ----------------------------------------------- |
| h-shadow | 必需。水平阴影的位置。允许负值。                |
| v-shadow | 必需。垂直阴影的位置。允许负值。                |
| blur     | 可选。模糊距离, 控制影子的虚实                  |
| spread   | 可选。阴影的尺寸。                              |
| color    | 可选。阴影的颜色，一半写成rgba (0, 0, 0,.3)     |
| inset    | 可选。默认为 将外部阴影 (outset) 改为内部阴影。 |
注意︰
1. 默认的是外阴影 (outset), 但是不可以写这个单词, 否则阴影会失效。
2. 盒子阴影不占用空间，不会影响其他盒子排列。

## 11.6 文字阴影
>CSS 新增。

语法：`text-shadow: h-shadow v-shadow blur color`
参数意义同盒子阴影。

# 12 网页布局
>讲解浮动、定位、网页布局等。
## 12.1 网页布局方式
CSS 提供了三种传统布局方式 (简单说, 就是盒子如何进行排列顺序)：
- 普通流（标准流）
- 浮动
- 定位
  这三种布局方式都是用来摆放盒子的，盒子摆放到合适位置，布局自然就完成了。

网页布局第一准则：**多个块级元素纵向排列找标准流，多个块级元素横向排列找浮动**。
网页布局第二准则：先设置盒子的大小，再设置盒子的位置。

## 12.2 标准流（普通流/文档流）
标准流:  标签按照规定好默认方式排列。
1. 块级元素会独占一行，从上向下顺序排列。常用元素：div、hr、p、h1~h6、ul、ol、dl、form、table
2. 行内元素会按照顺序，从左到右顺序排列，碰到父元素边缘则自动换行。常用元素：span、a、i、em 等 

以上都是标准流布局，我们前面学习的就是标准流，标准流是最基本的布局方式。
## 12.3 浮动
（1）定义
浮动可以改变元素标签默认的排列方式，可以让多个块级元素一行内排列显示。
​
（2）创建方式
```css
 选择器 { float: 属性值; }
```
属性取值描述：

| 属性值 | 描述             |
| ------ | ---------------- |
| none   | 不浮动（默认值） |
| left   | 向左浮动         |
| right  | 向右浮动         |

（3）特性
- 浮动元素会脱离标准流 (脱标：浮动的盒子不再保留原先的位置)
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240608143843.png)
- 浮动的元素会一行内显示并且元素顶部对齐。浮动的元素是互相贴靠在一起的（不会有缝隙），如果父级宽度装不下这些浮动的盒子，多出的盒子会另起一行对齐。
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240608143957.png)
- **浮动的元素会具有行内块元素的特性**，大小根据内容来决定。

（4）跟标准流父级搭配使用
为了约束浮动元素位置, 我们网页布局一般采取的策略是：先用标准流父元素排列上下位置, 之后内部子元素采取浮动排列左右位置。符合网页布局第一准则。
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240608144203.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>测试页面</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .box {
            width: 1226px;
            height: 615px;
            background-color: red;
            margin: 0 auto;
        }

        .left {
            width: 234px;
            height: 100%;
            background-color: blue;
            float: left;
        }

        .right {
            width: 992px;
            height: 100%;
            background-color: yellow;
            float: right;
        }

        .right>div {
            width: 234px;
            height: 300px;
            background-color: green;
            margin-left: 14px;
            margin-bottom: 14px;
            float: left;
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="left">左青龙</div>
        <div class="right">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
        </div>
    </div>
</body>
</html>
```
一个盒子里面有多个子盒子，如果其中一个盒子浮动了，其他兄弟也应该浮动，以防止引起问题。
浮动的盒子只**会影响浮动盒子后面**的标准流，不会影响前面的标准流。

## 12.4 常见实际的网页布局

![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20230421221513.png)
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20230421221542.png)
第三种布局的示例代码：
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>测试页面</title>
    <style>
       * {
	        margin: 0;
	        padding: 0;
       }

       li {
	        list-style: none;
       }

       .top {
	        height: 50px;
	        background-color: grey;
       }

       .banner{
	        width: 1030px;
	        height: 150px;
	        background-color: skyblue;
	        margin: 10px auto;
       }

       .box{
	        background-color: pink;
	        width: 1030px;
	        height: 150px;
	        margin:10px auto;
       }

       .box ul li{
	        float: left;
	        background-color: purple;
	        width: 250px;
	        height: 150px;
	        margin-right: 10px;
       }

       .footer{
            background-color: skyblue;
            height: 100px;
       }
    </style>
</head>

<body>
    <div class="top">top</div>
    <div class="banner">banner</div>
    <div class="box">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li style="margin-right: 0px;">4</li>
        </ul>
    </div>
    <div class="footer">footer</div>
</body>

</html>
```

## 12.5 清除浮动
清除浮动的本质：清除浮动元素造成的影响，即**闭合浮动**。浮动的子标签无法撑开父盒子的高度。
注意：
- 如果父盒子本身有高度，则不需要清除浮动。
- 清除浮动之后，父级就会根据浮动的子盒子自动检测高度。
- 父级有了高度，就不会影响下面的标准流。
- **浮动的盒子不存在外边距合并的问题。**

应用场景：在不方便给父元素指定高度的时候使用，如产品有很多个，文章内容很长的时候。
语法：`选择器 {clear:left|right|both}`，实际开发中几乎只用 both.

当子盒子设置了浮动，父盒子不给高度：
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240608153152.png)
 由于父级盒子很多情况下，不方便给高度，但是子盒子浮动又不占有位置，最后父级盒子高度为 0 时，就会影响下面的标准流盒子。
 
（1）额外标签法（隔墙法）
是 W3C 推荐的做法，额外标签法会在浮动元素末尾添加一个空的标签。例如 `<div style="clear:both"></div>`，或者其他标签（如 `<br />` 等），并设置相关的样式。
```html
<!DOCTYPE html>
<html lang="en">
<head>
	...
    <style>
        .box {
            width: 800px;
            border: 1px solid blue;
            margin: 0 auto;
        }

        .damao {
            float: left;
            width: 300px;
            height: 200px;
            background-color: purple;
        }

        .ermao {
            float: left;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .footer {
            height: 200px;
            background-color: black;
        }

        .clear {
            clear: both;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="damao">大毛</div>
        <div class="ermao">二毛</div>
        <div class="ermao">二毛</div>
        <div class="ermao">二毛</div>
        <div class="ermao">二毛</div>
        <div class="clear"></div>
        <!-- 这个新增的盒子要求必须是块级元素不能是行内元素 -->
        <!-- 使用<span class="clear"></span> 隔开无效 -->
    </div>
    <div class="footer"></div>
</body>
</html>
```
- 优点： 通俗易懂，书写方便  
- 缺点： 添加许多无意义的标签，结构化较差  
注意： 要求这个新的空标签**必须是块级元素**, 实际开发中很少使用这种方法。

（2）父级添加 overflow
可以给父级添加 `overflow` 属性，将其属性值设置为 hidden、 auto 或 scroll 。
- 优点：代码简洁
- 缺点：无法显示溢出的部分，溢出的部分会被切除
```html
<!DOCTYPE html>
<html lang="en">
<head>
    ...
    <style>
        .box {
            /* 清除浮动 */
            overflow: hidden;
            width: 800px;
            border: 1px solid blue;
            margin: 0 auto;
        }

        .damao {
            float: left;
            width: 300px;
            height: 200px;
            background-color: purple;
        }

        .ermao {
            float: left;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .footer {
            height: 200px;
            background-color: black;
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="damao">大毛</div>
        <div class="ermao">二毛</div>
    </div>
    <div class="footer"></div>
</body>
</html>
```

（3）父级添加 `:after` 伪元素法 ^clearfloat
- 优点：没有增加标签，结构更简单  
- 缺点：需要照顾低版本浏览器
```html
<style>
	/* 前面代码给子元素设置了浮动 */
	
	.clearfix:after {  
		content: "";  /* 伪元素必须写的属性 */
		display: block;  /* 插入的元素必须是块级，才能清除浮动 */
		height: 0;  /* 隐藏元素 */
		clear: both;  /* 清除浮动核心代码 */
		visibility: hidden;  /* 隐藏元素 */
	} 
	
	.clearfix { /* IE6、 7 专有 */  
		*zoom: 1;  
	}
	
	.box{
		background-color: pink;
		width: 1030px;
		margin:10px auto;
	}
</style>
<body>
    <!--为父元素添加clearfix类-->
	<div class="box clearfix">
        <div class="damao">大毛</div>
        <div class="ermao">二毛</div>
    </div>
</body>
```

（4）父级添加双伪元素清除法
- 优点：代码更简洁  
- 缺点：需要照顾低版本浏览器
```html
<style>
	/* 子元素设置了浮动 */
	.clearfix:before,
	.clearfix:after{
		content:"";
		display:table; /* 转换为块级元素并一行显示 */
	}
	
	.clearfix:after {   
		clear: both;  
	} 
	
	.clearfix { /* IE6、 7 专有 */  
		*zoom: 1;  
	}
	
	.box{
		background-color: pink;
		width: 1030px;
		margin:10px auto;
	}
</style>
<body>
    <!--为父元素添加clearfix类-->
	<div class="box clearfix">
        <div class="damao">大毛</div>
        <div class="ermao">二毛</div>
    </div>
</body>
```

（5）总结

| 清除浮动的方式              | 优点        | 缺点               |     |
| -------------------- | --------- | ---------------- | --- |
| 额外标签法（隔墙法）           | 通俗以东，书写简单 | 添加许多无意义标签，结构化较差  |     |
| 父级 overflow: hidden; | 书写简单      | 溢出隐藏             |     |
| 父级 after 伪元素         | 结构语义化正确   | IE6-7 不支持，需考虑兼容性 |     |
| 父级双伪元素               | 结构语义化正确   | IE6-7 不支持，需考虑兼容性 |     |
## 12.6 定位
>注意：加了绝对定位和固定定位之后，margin 值会失效。

(1)定位：让盒子自由的在某个盒子内移动位置或者固定屏幕中某个位置，并且可以压住其他盒子。
(2) 组成：**定位模式**（指定元素在文档中的定位方式）+**边偏移**（决定元素最终位置）
(3)定位模式：CSS 中通过 `position` 属性定义元素的**定位模式**，语法如下：
```css
选择器 { 
    position: 属性值; 
}
```
`position` 属性的具体取值：

| 值          |    语义    |
| ---------- | :------: |
| `static`   | **静态**定位 |
| `relative` | **相对**定位 |
| `absolute` | **绝对**定位 |
| `fixed`    | **固定**定位 |
（4）边偏移：定位的盒子移动到最终位置。用 top、bottom、left 和 right 4 个属性控制。
top/bottom 只能二选一，如果两个都写，则只有 top 属性有效。
left/right 只能二选一，如果两个都写，则只有 left属性有效。

|边偏移属性|示例|描述|
|---|---|---|
|`top`|`top: 80px`|**顶端**偏移量，定义元素相对于其父元素**上边线的距离**。|
|`bottom`|`bottom: 80px`|**底部**偏移量，定义元素相对于其父元素**下边线的距离**。|
|`left`|`left: 80px`|**左侧**偏移量，定义元素相对于其父元素**左边线的距离**。|
| `right` | `right: 80px` |**右侧**偏移量，定义元素相对于其父元素**右边线的距离**|

![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240617140247.png)
1. 静态定位
（1）**静态定位**是元素的**默认**定位方式，**无定位的意思**。它相当于 border 里面的 none，静态定位 static，不需要定位的时候用。
（2）静态定位按照标准流特性摆放位置，它没有边偏移，在实际开发中很少使用。

2. 相对定位
（1）元素相对于**自身**所移动的距离。
（2）特点：
- 它是相对于自己原来的位置来移动的（移动位置的时候参照点是自己原来的位置）。
- 使用了相对定位的元素在**原来**标准流上的**位置**继续占有，后面的盒子仍然以标准流的方式对待它。因此，**相对定位并没有脱标**。
![[CSS_相对定位.png]]

3. 绝对定位
（1）元素在移动位置的时候，是相对于它**祖先元素**来说的（拼爹型）。
（2）特点：
- 如果**没有祖先元素**或者**祖先元素没有定位**，则以浏览器为基准定位（Document 文档）。
- 如果祖先元素有定位（相对、绝对、固定定位），则以最近一级的有定位祖先元素为参考点移动位置。
- **不再占有原先的位置**。所以绝对定位是脱离标准流的。（脱标）
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240617143408.png)

（3）经典应用：**子绝父相**，子级是绝对定位的话，父级要用相对定位。因为父级需要占有位置，因此是相对定位，子盒子不需要占有位置，则是绝对定位。子绝父相不是永远不变的，如果父元素不需要占有位置，**子绝父绝**也会遇到。
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240617143423.png)

```css
/*父相应用：学成在线hot模块 */
.box-bd ul li {
    float: left;
    position: relative; /*父相 */
    width: 228px;
    height: 270px;
    background-color: #fff;
    margin-right: 15px;
    margin-bottom: 15px;
}

.box-bd ul li .hot {
    position: absolute; /*子绝 */
    top: 4px;
    right: -4px;
}
```


4. 固定定位
（1）元素**固定于浏览器可视区的位置**，跟其父级元素没有关系，其宽度和高度百分比值是相对于屏幕宽高来计算的，也就是说固定定位的盒子写 `width:100%` 时，会跟屏幕一样宽。（认死理型） 
主要使用场景： 可以在浏览器页面滚动时元素的位置不会改变。
（2）特点：
- 以浏览器的可视窗口为参照点移动元素。跟父元素没有任何关系，不随滚动条滚动。
- **不再占有原先的位置**，也是**脱标**的，**可以看做是一种特殊的绝对定位**。
- IE6 等低版本浏览器不支持固定定位。
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240618141316.png)
（3）经典应用：固定到版心右侧。
让固定定位的盒子 `left: 50%`，走到浏览器可视区（也可以看做版心） 的一半位置。
再让固定定位的盒子 ` margin-left : -版心宽度的一半距离`，多走版心宽度的一半位置。
```html
<head>
	<style>
        .w {
            width: 800px;
            height: 1400px;
            background-color: pink;
            margin: 0 auto;
        }
        .fixed {
            position: fixed;
            /* 1. 走浏览器宽度的一半 */
            left: 50%;
            /* 2. 利用margin 走版心盒子宽度的一半距离 */
            margin-left: 405px;
            width: 50px;
            height: 150px;
            background-color: skyblue;
        }
    </style>
</head>
<body>
    <div class="fixed"></div>
    <div class="w">版心盒子 800像素</div>
</body>
```
添加了固定定位的盒子一定要给宽高。
固定到中间，针对固定定位的盒子 `margin:0 auto` 无效，可以使用如下代码，示例来自携程移动端案例。
```css
/* 搜索模块 */
.search-index {
  /* 固定定位，宽高跟屏幕有关 */
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  max-width: 540px;
  min-width: 320px;
  height: 44px;
  transform: translateX(-50%);
  background-color: pink;
}
```

5. 粘性定位
（1）可以被认为是相对定位和固定定位的混合。语法：`position:sticky`。
（2）特点：
- 必须添加 top 、left、right、bottom 的 **其中一个**才有效。当满足设置的边偏移时，表现出固定定位的特点。
- 粘性定位占有原先的位置（相对定位特点）。
- 跟页面滚动搭配使用。 兼容性较差，IE 不支持。
```html
<head>
    <style>
        body {
            height: 2000px;
        }

        div {
            position: sticky;
            width: 400px;
            height: 50px;
            margin: 100px auto;
            background-color: red;
            /* 当top=10px时，固定不动 */
            top: 10px;
        }
    </style>
</head>

<body>
    <div>粘性定位盒子</div>
</body>
</html>
```
6. 定位总结

|**定位模式**|**是否脱标**|**移动位置**|**是否常用**|
|---|---|---|---|
|static 静态定位|否|不能使用边偏移|很少|
|**relative 相对定位**|**否 (占有位置)**|**相对于自身位置移动**|**基本单独使用**|
|**absolute绝对定位**|**是（不占有位置）**|**带有定位的父级**|**要和定位父级元素搭配使用**|
|**fixed 固定定位**|**是（不占有位置）**|**浏览器可视区**|**单独使用，不需要父级**|
|sticky 粘性定位|否 (占有位置)|浏览器可视区|当前阶段少|

7. 定位叠放次序
(1) 在使用**定位**布局时，可能会**出现盒子重叠的情况**。此时，可以使用 **z-index** 来控制盒子的前后次序 (z 轴)。 ^zindex

(2)语法： 
```css
选择器 { 
	z-index: 1; 
}
```
(3) 特点：
- **属性值**：**正整数**、**负整数**或 **0**，默认值是 0，数值越大，盒子越靠上。如果**属性值相同**，则按照书写顺序，**后来居上**。数字后面**不能加单位**。
- `z-index` 只能应用于**相对定位**、**绝对定位**和**固定定位**的元素，其他**标准流**、**浮动**和**静态定位**无效。

8. 定位拓展
（1）绝对/固定定位的盒子居中
加了**绝对定位/固定定位的盒子**不能通过设置 `margin: auto` 设置**水平居中**。
具体设置水平居中和垂直居中的方法：
水平居中：`left:50%` + `margin-left:-自身宽度的一半`
垂直居中：`top:50%` + `margin-left:-自身高度的一半`
下图中的粉色盒子宽 200px，高 100px。
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240618144541.png)

（2）使用了绝对/固定定位的盒子，**具有行内块元素的特点**。
行内元素添加绝对或者固定定位后，可以直接设置高度和宽度。
块级元素添加绝对或者固定定位后，如果不给宽度或者高度，默认大小是内容的大小。

（3）浮动元素、**绝对定位/固定定位**的元素不会触发外边距合并的问题。

（4）绝对/固定定位的盒子**会完全压住盒子**
浮动元素不同，只会压住它下面标准流的盒子，但是不会压住下面标准流盒子里面的文字（图片）。浮动之所以不会压住文字，因为浮动产生的目的最初是为了做文字环绕效果的。**文字会围绕浮动元素。**
绝对定位（固定定位） 会压住下面标准流所有的内容。

# 13  元素的显示与隐藏
（1）display 属性
使用 dispaly 隐藏元素后，元素的原始位置不再保留。
```css
display: none 
display：block  /* 除了转换为块级元素之外，同时还有显示元素的意思 */
```
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240619150048.png)

（2）visibility
visibility 属性用于指定一个元素应可见还是隐藏。**visibility 隐藏元素后，继续占有原来的位置**。
如果隐藏元素不想要原来位置，就用 display：none (用处更多重点）.
```css
visibility：visible ; 　/* 元素可视 */
visibility：hidden; 　  /* 元素隐藏*/
```
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240619150234.png)

（3）overflow
overflow 属性指定了如果内容溢出一个元素的框（超过其指定高度及宽度） 时，会发生什么。

| 属性值      | 描述                                       |
| ----------- | ------------------------------------------ |
| **visible** | 不剪切内容也不添加滚动条                   |
| **hidden**  | 不显示超过对象尺寸的内容，超出的部分隐藏掉 |
| **scroll**  | 不管超出内容否，总是显示滚动条             |
| **auto**    | 超出自动显示滚动条，不超出不显示滚动条     |
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240619150347.png)

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>土豆网显示隐藏遮罩</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .tudou {
      position: relative;
      width: 444px;
      height: 320px;
      margin: 30px auto;
      background-color: pink;
    }

    .tudou img {
      width: 100%;
      height: 100%;
    }

    .mask {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5) url(arr.png) no-repeat center;
    }

    /* 鼠标经过tudou盒子，显示mask遮罩 */
    .tudou:hover .mask {
      display: block;
    }
  </style>
</head>

<body>
  <div class="tudou">
    <div class="mask"></div>
    <img src="tudou.jpg" alt="">
  </div>
</body>

</html>
```