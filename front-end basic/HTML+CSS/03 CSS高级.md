# 1 精灵图
(1) 概述
目的：因为有效地减少服务器接收和发送请求的次数，提高页面的加载速度，出现了 CSS 精灵技术（也称CSS Sprites、CSS 雪碧)。
核心原理：将网页中的一些小背景图像整合到一张大图中，这样服务器只需要一次请求就可以了。
（2）使用方法
移动大背景图片的位置：`background-position`.
移动的距离就是这个目标图片的 x 和 y 坐标。因为一般情况下都是往上往左移动，所以数值是负值。
使用精灵图的时候需要精确测量，每个小背景图片的大小和位置。
也可以合并写成：`background: url(imgs/alphabet.jpg) no-repeat 0 -268px;`
```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>精灵图的使用:拼出名字</title>
  <style>
    span {
      display: inline-block;
      background: url(imgs/alphabet.jpg) no-repeat;
    }

    .l {
      width: 110px;
      height: 120px;
      /* 设置精灵图的偏移 */
      background-position: 0 -268px;
    }

    .j {
      width: 108px;
      height: 127px;
      background-position: -389px -133px;
    }
  </style>
</head>

<body>
  <span class="l">l</span>
  <span class="j">j</span>
  <span class="l">l</span>
</body>

</html>
```
# 2 字体图标
（1）应用场景
主要用于显示网页中通用、常用的一些小图标。**字体图标**可以为前端工程师提供一种方便高效的图标使用方式，**展示的是图标，本质属于字体**。
（2）优点
- 轻量级：个图标字体要比一系列的图像要小。一旦字体加载了，图标就会马上渲染出来，减少了服务器请求。
- 灵活性：本质其实是文字，可以很随意的改变颜色、产生阴影、透明效果、旋转等
- 兼容性：几乎支持所有的浏览器，请放心使用
>注意： 字体图标不能替代精灵技术，只是对工作中图标部分技术的提升和优化。
> 如果遇到一些结构和样式比较简单的小图标，就用字体图标。
> 如果遇到一些结构和样式复杂一点的小图片，就用精灵图。

（3）字体文件格式
不同浏览器所支持的字体格式是不一样的，字体图标之所以兼容，就是因为包含了主流浏览器支持的字体文件。
a. TureType ( **. ttf** ) 格式. ttf 字体是 Windows 和 Mac 的最常见的字体，支持这种字体的浏览器有 IE9+、Firefox3.5+、Chrome4+、Safari3+、Opera10+、iOS Mobile、Safari4.2+；
b. Web Open Font Format ( **. woff** ) 格式 woff 字体，支持这种字体的浏览器有 IE9+、Firefox3.5+、Chrome6+、Safari3.6+、Opera11.1+；
c. Embedded Open Type ( **. eot** ) 格式. eot 字体是 IE 专用字体，支持这种字体的浏览器有 IE4+；
d. SVG ( .**svg** ) 格式. svg 字体是基于 SVG 字体渲染的一种格式，支持这种字体的浏览器有 Chrome4+、Safari3.1+、Opera10.0+、iOS Mobile Safari3.2+.

(4) 字体图标的下载
- **icomoon** **字库** [http://icomoon.io](http://icomoon.io/) 推荐指数 **★★★★★**
IcoMoon 成立于 2011 年，推出了第一个自定义图标字体生成器，它允许用户选择所需要的图标，使它们成一字型。该字库内容种类繁多，非常全面。

- **阿里** **iconfont** **字库** [http://www.iconfont.cn/](http://www.iconfont.cn/) 推荐指数 **★★★★★**
这个是阿里妈妈 M2UX 的一个 iconfont 字体图标字库，包含了淘宝图标库和阿里妈妈图标库。可以使用 AI 制作图标上传生成。重点是，免费！

（5）字体图标的引入（以 icomoon 为例）
- 把下载包里面的 **fonts** 文件夹放入页面根目录下
![1](images/Pasted_image_20240626140813.png)

- 在 CSS 样式中全局声明字体： 简单理解把这些字体文件通过 css 引入到我们页面中。注意字体文件路径的问题。
```css
 @font-face {
   font-family: 'icomoon';
   src:  url('fonts/icomoon.eot?7kkyc2');
   src:  url('fonts/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'),
     url('fonts/icomoon.ttf?7kkyc2') format('truetype'),
     url('fonts/icomoon.woff?7kkyc2') format('woff'),
     url('fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
   font-weight: normal;
   font-style: normal;
 }
```
- 在 html 标签内添加小图标。将下载下来的字体图标文件夹中的 `□` 图标，复制到 html 标签中。
 ![](images/Pasted_image_20240626140939.png)
 - 给标签定义字体
 ```css
span {
   font-family: "icomoon";
 }
```
注意：务必保证这个字体和上面@font-face 里面的字体保持一致
![](images/Pasted_image_20240626141213.png)

（6）字体图标的追加
如果工作中，原来的字体图标不够用了，我们需要添加新的字体图标到原来的字体文件中。
把压缩包里面的 **selection. json** 从新上传，然后选中自己想要新的图标，从新下载压缩包，并替换原来的文件即可。
![](images/Pasted_image_20240626141251.png)

# 3 CSS 三角
（1）两条直角边相等的三角形
网页中常见一些三角形，使用 CSS 直接画出来就可以，不必做成图片或者字体图标。
```css
 div {
 	width: 0; 
    height: 0;
    border: 50px solid transparent;
	border-color: red green blue black;
	line-height:0;
    font-size: 0;
 }
```
显示效果如下：
![](images/Pasted_image_20240626141727.png)

因此，可用 css 边框可以模拟三角效果。宽度高度为 0。
4 个边框都要写，只保留需要的边框颜色，其余的不能省略，都改为 transparent 透明就好了。
为了照顾兼容性低版本的浏览器，加上 `font-size: 0; line-height: 0;`。
京东三角示例代码：
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS 三角制作</title>
    <style>
        .box1 {
            width: 0;
            height: 0;
            /* border: 10px solid pink; */
            border-top: 10px solid pink;
            border-right: 10px solid red;
            border-bottom: 10px solid blue;
            border-left: 10px solid green;
        }

        .box2 {
            width: 0;
            height: 0;
            border: 50px solid transparent;
            /* 只保留左边框颜色，制作顶点向右的三角形 */
            border-left-color: pink;
            margin: 100px auto;
        }

        .jd {
            position: relative;
            width: 120px;
            height: 249px;
            background-color: pink;
        }

        .jd span {
            position: absolute;
            right: 15px;
            top: -10px;
            width: 0;
            height: 0;
            /* 为了照顾兼容性 */
            line-height: 0;
            font-size: 0;
            border: 5px solid transparent;
            border-bottom-color: pink;
        }
    </style>
</head>

<body>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="jd">
        <span></span>
    </div>
</body>

</html>
```

![](images/Pasted_image_20240927085218.png)

（2）两条直角边不等的三角形
```html
```html
<style>
    .box1 {
        width: 0;
        height: 0;
        
        /* 把上边框宽度调大 */
        /* border-top: 100px solid transparent;
        border-right: 50px solid skyblue; */
        /* 左边和下边的边框宽度设置为0 */
        /* border-bottom: 0 solid blue;
        border-left: 0 solid green; */
        
        /* 1.只保留右边的边框有颜色 */
        border-color: transparent red transparent transparent;
        /* 2. 样式都是solid */
        border-style: solid;
        /* 3. 上边框宽度要大， 右边框 宽度稍小， 其余的边框该为 0 */
        border-width: 100px 50px 0 0 ;
    }

</style>
</head>
<body>
    <div class="box1"></div>
</body>
```

![不等边直角三角形](images/Pasted_image_20240627224836.png)

# 4 界面样式
所谓的界面样式，就是更改一些用户操作样式，以便提高更好的用户体验。
- 更改用户的鼠标样式
- 表单轮廓
- 防止表单域拖拽
## 4.1 鼠标样式
```css
 li {
 	cursor: pointer; 
 }
```
设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状。

| 属性值      | 描述             |
| ----------- | ---------------- |
| default     | 默认样式         |
| pointer     | 小手             |
| move        | 移动（十字）     |
| text        | 文本（I 形光标） |
| not-allowed | 禁止             |

## 4.2 表单轮廓
给表单添加 outline: 0; 或者 outline: none; 样式之后，就可以去掉默认的蓝色边框。
```css
input {
 	outline: none; 
 }
```

## 4.3 文本域禁用拖拽
实际开发中，我们文本域右下角是不可以拖拽的。
```css
textarea{ 
 	resize: none;
 }
```

## 4.4 图片、表单和文字对齐
解决方案：给图片、表单添加 `vertical-align` 属性。
`vertical-align` 属性用于设置一个元素的**垂直对齐方式**，但是它只针对于**行内元素或者行内块元素有效**。
```css
vertical-align : baseline | top | middle | bottom 
```

| 属性值   | 描述                                     |
| -------- | ---------------------------------------- |
| baseline | 默认。元素放置在父元素的基线上。         |
| top      | 把元素的顶端与行中最高元素的顶端对齐。   |
| middle   | 把此元素放置在父元素的中部。             |
| bottom   | 把元素的顶端与行中最低的元素的顶端对齐。 |

![](images/Pasted_image_20240626143831.png)
## 4.5 解决图片底部默认空白缝隙问题
bug：图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐。
主要解决方法有两种：
- **给图片**添加 **vertical-align: middle | top| bottom** 等。 （提倡使用）
- 把图片转换为块级元素 **display: block**;

## 4.6 让溢出文本显示为省略号
（1）单行文本溢出显示省略号
给相应的元素添加如下的属性：
```css
/*1. 先强制一行内显示文本*/
white-space: nowrap;  （ 默认 normal 自动换行）

/*2. 超出的部分隐藏*/
overflow: hidden;

/*3. 文字用省略号替代超出的部分*/
text-overflow: ellipsis;
```

# 5 常见布局技巧
## 5.1 margin 负值的运用
![](images/Pasted_image_20240627143513.png)
![](images/Pasted_image_20240627143517.png)

让每个盒子 margin 往左侧移动 -1px 正好压住相邻盒子边框。
鼠标经过某个盒子的时候，提高当前盒子的层级即可（如果没有有定位，则加相对定位（保留位置），如果有定位，则加 z-index）
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>布局技巧</title>
  <style>
    ul li {
      position: relative;
      list-style: none;
      float: left;
      width: 150px;
      height: 200px;
      background-color: pink;
      border: 1px solid #000;
      /* margin-left添加负值，使得相邻盒子的边框不会变为2px */
      margin-left: -1px;
    }

    ul li:hover {
      /* 提高当前盒子的层级 */
      z-index: 1;
      border: 1px solid orange;
    }
  </style>
</head>

<body>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</body>

</html>
```
## 5.2 文字围绕浮动元素
巧妙运用浮动元素不会压住文字的特性即可，布局示意图如下：
![](images/Pasted_image_20240627144742.png)

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>文字围绕浮动元素</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .box {
      width: 300px;
      height: 70px;
      background-color: #f00;
      margin: 0 auto;
    }

    .pic {
      float: left;
      width: 120px;
      height: 60px;
      margin-right: 5px;
    }

    .pic img {
      width: 100%;
      height: 100%;
    }
  </style>
</head>

<body>
  <div class="box">
    <div class="pic">
      <img src="imgs/足球队员.png">
    </div>
    <p>【集锦】热身赛-巴西0-1秘鲁内马尔替补两人血染赛场</p>
  </div>
</body>

</html>
```

## 5.3 行内块妙用
页码在页面中间显示:
（1）把这些链接盒子转换为行内块，之后给父级指定 `text-align: center;`
（2）利用行内块元素中间有缝隙，并且给父级添加 `text-align: center;` 行内块元素会水平会居中。
```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>行内块元素妙用：页码选择界面</title>
  <style>
    .box {
      /* 父元素添加 text-align: center; */
      /* 该父元素内部的行内元素和行内块元素都会水平居中 */
      text-align: center;
    }

    .box a {
      display: inline-block;
      width: 36px;
      height: 36px;
      background-color: #f7f7f7;
      border: 1px solid #ccc;
      text-align: center;
      line-height: 36px;
      text-decoration: none;
      color: #333;
    }

    .box a:hover {
      background-color: #e9e9e9;
    }

    .box .prev,
    .box .next {
      width: auto;
      padding: 0 10px;
    }

    .box .current {
      background-color: #ff6600;
      color: #fff;
    }
  </style>
</head>

<body>
  <div class="box">
    <a href="#" class="prev">&lt;&lt;上一页</a>
    <a href="#">1</a>
    <a href="#" class="current">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">5</a>
    <a href="#" class="elp">...</a>
    <a href="#" class="next">&gt;&gt;下一页</a>
  </div>
</body>

</html>
```
效果如下：
![](images/Pasted_image_20240627150601.png)
# 6 CSS 初始化
不同浏览器对有些标签的默认值是不同的，为了消除不同浏览器对 HTML 文本呈现的差异，照顾浏览器的兼容，我们需要对 CSS 初始化，即对浏览器默认的样式进行重新设置。
每个网页都必须首先进行 CSS 初始化。
这里我们以 `京东CSS初始化` 代码为例。
```css
/* 把我们所有标签的内外边距清零 */
* {
    margin: 0;
    padding: 0
}

/* em 和 i 斜体的文字不倾斜 */
em,
i {
    font-style: normal
}

/* 去掉li 的小圆点 */
li {
    list-style: none
}

img {
    /* border 0 照顾低版本浏览器,解决当图片外面包含链接时会有边框的问题 */
    border: 0;
    /* 取消图片底侧有空白缝隙的问题 */
    vertical-align: middle
}

button {
    /* 鼠标经过button按钮的时候，鼠标变小手 */
    cursor: pointer
}

a {
    color: #666;
    text-decoration: none
}

a:hover {
    color: #c81623
}

button,
input {
    /* "\5B8B\4F53" 为汉字“宋体”的unicode码，保证浏览器的兼容性 */
    font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif
}

body {
    /* CSS3 抗锯齿形 让文字显示的更加清晰 */
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
    color: #666
}

.hide,
.none {
    display: none
}

/* 清除浮动 */
.clearfix:after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0
}

.clearfix {
    *zoom: 1
}
```
为保证兼容性，把中文字体的名称用相应的 Unicode 编码来代替，这样就可以有效的避免浏览器解释 CSS 代码时候出现乱码的问题。
比如：
黑体 `\9ED1\4F53`
宋体 `\5B8B\4F53`
微软雅黑 `\5FAE\8F6F\96C5\9ED1`
