# 1 HTML5 新特性

## 1.1 概述
HTML5 的新增特性主要是针对于以前的不足，增加了一些新的标签、新的表单和新的表单属性等。
这些新特性都有兼容性问题，基本是 **IE9+ 以上版本的浏览器**才支持，如果不考虑兼容性问题，可以大量使用这些新特性。
## 1.2 语义化标签 （★★）

以前布局，我们基本用 div 来做。div 对于搜索引擎来说，是没有语义的

```
<div class="header"> </div>
<div class="nav"> </div>
<div class="content"> </div>
<div class="footer"> </div>
```

发展到了 HTML5 后，新增了一些语义化标签，这样的话更加有利于浏览器的搜索引擎搜索，也方便了网站的**seo（Search Engine Optimization，搜索引擎优化）**，下面就是新增的一些语义化标签.

- `<header>` 头部标签
- `<nav>` 导航标签
- `<article>` 内容标签
- `<section>` 定义文档某个区域
- `<aside>` 侧边栏标签
- `<footer>` 尾部标签
上述语义化标准主要是针对搜索引擎的，这些新标签页面中可以使用多次，在移动端用得更多。在 IE9 中，需要把这些元素转换为块级元素。
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240710230643.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML5新增语义化标签</title>
    <style>
        header, nav {
            height: 120px;
            background-color: pink;
            border-radius: 15px;
            width: 800px;
            margin: 15px auto;
        }
        section {
            width: 500px;
            height: 300px;
            background-color: skyblue;
        }
    </style>
</head>
<body>
    <header>头部标签</header>
    <nav>导航栏标签</nav>
    <section>某个区域</section>
</body>
</html>
```
## 1.3 多媒体标签
多媒体标签分为音频 **audio** 和视频 **video** 两个标签。使用它们，可在页面中嵌入音频和视频，而不再去使用落后的 flash 和其他浏览器插件了。
因为多媒体标签的 属性、方法、事件比较多，因此我们需要什么功能的时候，就需要去查找相关的文档进行学习使用。
### 视频标签- video（★★★）
**使用语法：**
```html
 <video src="media/mi.mp4"></video>
```
支持的格式：

| 浏览器 | MP4 | WebM | Ogg | 备注 |
|----------------|-----|------|-------|-----------------------------------------|
| Internet Explorer | YES | NO | NO | | 
| Chrome | YES | YES | YES | | 
| Firefox | YES | YES | YES | 从 Firefox 21 版本开始，Linux 系统从 Firefox 30 开始 | 
| Safari | YES | NO | NO | |
| Opera | YES | YES | YES | 从 Opera 25 版本开始 |

由于各个浏览器的支持情况不同，所以我们会有一种兼容性的写法，这种写法了解一下即可。尽量使用 mp4 格式。

```html
<video  controls="controls"  width="300">
    <source src="move.ogg" type="video/ogg" >
    <source src="move.mp4" type="video/mp4" >
    您的浏览器暂不支持 video 标签播放视频
</ video >
```

**上面这种写法，浏览器会匹配 video 标签中的 source，如果支持就播放，如果不支持往下匹配，直到没有匹配的格式，就提示文本**。

常用属性：

| 属性     | 值           | 描述                                                          |
| -------- | ------------ | ------------------------------------------------------------- |
| autoplay | autoplay     | 视频就绪自动播放（谷歌浏览器需要添加muted来解决自动播放问题） |
| controls | controls     | 向用户显示播放控件                                            |
| width    | pixels(像素) | 设置播放器宽度                                                |
| height   | pixels(像素) | 设置播放器高度                                                |
| loop     | loop         | 播放完是否继续播放该视频，循环播放                            |
| preload  | auto         | 预先加载视频（如果有了autoplay就忽略该属性）                  |
|          | none         | 不应加载视频                                                  |
| src      | url          | 视频url地址                                                   |
| poster   | Imgurl       | 加载等待的画面图片                                            |
| muted    | muted        | 静音播放                                                      |

**重点掌握：**

- `autoplay` 自动播放
    - 注意： 在google浏览器上面，默认禁止了自动播放，如果想要自动播放的效果，需要设置 muted属性
- `width` 宽度
- `height` 高度
- `loop` 循环播放
- `src` 播放源
- `muted` 静音播放

**示例代码：**

```html
<video src="media/mi.mp4" autoplay="autoplay" muted="muted"  loop="loop" poster="media/mi9.jpg"></video>
```

### 音频标签- audio
当前元素支持三种视频格式： 尽量使用 **mp3 格式**。
(1)**使用语法：**
```
<audio src="media/music.mp3"></audio>
```

| 浏览器            | MP3 | Wav | Ogg |
| ----------------- | --- | --- | --- |
| Internet Explorer | YES | NO  | NO  |
| Chrome            | YES | YES | YES |
| Firefox           | YES | YES | YES |
| Safari            | YES | YES | NO  |
| Opera             | YES | YES | YES |
(2)兼容写法
由于各个浏览器的支持情况不同，所以我们会有一种兼容性的写法，这种写法了解一下即可
```html
< audio controls="controls"  >
    <source src="happy.mp3" type="audio/mpeg" >
    <source src="happy.ogg" type="audio/ogg" >
    您的浏览器暂不支持 audio标签。
</ audio>
```

**上面这种写法，浏览器会匹配audio标签中的source，如果支持就播放，如果不支持往下匹配，直到没有匹配的格式，就提示文本**

(3) 常用属性

| 属性     | 值     | 描述                                       |
|----------|--------|-------------------------------------------|
| autoplay | autoplay | 如果出现该属性，则音频在就绪后马上播放。 |
| controls | controls | 如果出现该属性，则向用户显示控件，比如播放按钮。 |
| loop     | loop    | 如果出现该属性，则每当音频结束时重新开始播放。 |
| src      | url     | 要播放的音频的URL。                      |
**示例代码：**
```html
<audio src="media/music.mp3" autoplay="autoplay" controls="controls"></audio>
```

### 小结
- 音频标签和视频标签使用方式基本一致
- 浏览器支持情况不同
- 谷歌浏览器把音频和视频自动播放禁止了
- 可给视频标签添加 muted 属性来静音播放视频，音频不可以（可通过JavaScript解决）
- 视频标签是重点，我们经常设置自动播放，不使用 controls 控件，循环和设置大小属性

## 1.4 新增的表单元素 （★★）
在 H5 中，新增了很多类型的表单。
**案例代码：**
```html
<!-- 我们验证的时候必须添加form表单域 -->
<form action="">
    <ul>
        <li>邮箱: <input type="email" /></li>
        <li>网址: <input type="url" /></li>
        <li>日期: <input type="date" /></li>
        <li>时间: <input type="time" /></li>
        <li>数量: <input type="number" /></li>
        <li>手机号码: <input type="tel" /></li>
        <li>搜索: <input type="search" /></li>
        <li>颜色: <input type="color" /></li>
        <!-- 当我们点击提交按钮就可以验证表单了 -->
        <li> <input type="submit" value="提交"></li>
    </ul>
</form>
```
显示效果：
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240711083443.png)
**常见输入类型**
```
text password radio checkbox button file hidden submit reset image
```

**新的输入类型**

| 属性值        | 说明                        |
| ------------- | --------------------------- |
| type="email"  | 限制用户输入必须为Email类型 |
| type="url"    | 限制用户输入必须为URL类型   |
| type="date"   | 限制用户输入必须为日期类型  |
| type="time"   | 限制用户输入必须为时间类型  |
| type="month"  | 限制用户输入必须为月类型    |
| type="week"   | 限制用户输入必须为周类型    |
| type="number" | 限制用户输入必须为数字类型  |
| type="tel"    | 手机号码                    |
| type="search" | 搜索框                      |
| type="color"  | 生成一个颜色选择表单        |

类型很多，我们现阶段**重点记忆三个**： **`number` `tel` `search`**

新的表单属性：

| 属性           | 值         | 说明                                                                                         |
| ------------ | --------- | ------------------------------------------------------------------------------------------ |
| required     | required  | 表单拥有该属性表示其内容不能为空，必填                                                                        |
| placeholder  | 提示文本      | 表单的提示信息，存在默认值将不显示                                                                          |
| autofocus    | autofocus | 自动聚焦属性，页面加载完成自动聚焦到指定表单                                                                     |
| autocomplete | off/on    | 当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。默认已经打开，如`autocomplete="on"`，关闭`autocomplete="off"` |
| multiple     | multiple  | 需要放在表单内，同时加上name属性，可以多选文件提交                                                                |
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML5新增表单属性</title>
    <style>
		/* 修改placeholder的颜色 */
        input::placeholder {
            color: pink;
        }
    </style>
</head>
<body>
    <form action="">
            <input type="search" name="sear" id="" required="required" placeholder="pink老师" autofocus="autofocus" autocomplete="off">
            <input type="file" name="" id="" multiple="multiple">
            <input type="submit" value="提交">
    </form>
  
</body>
</html>
```
# 2 CSS3 新特性
## 2.1  CSS3 的现状
- 新增的CSS3特性有兼容性问题，ie9+才支持
- 移动端支持优于 PC 端
- 不断改进中
- 应用相对广泛
## 2.2 CSS3 新增选择器
CSS3 给我们新增了选择器，可以更加便捷，更加自由的选择目标元素。
### 属性选择器（★★）
- 属性选择器根据标签中的属性来选择元素。
- 属性选择器可以根据元素特定属性的来选择元素。 这样就可以不用借助于类或者id选择器
- 属性选择器也可以选择出来自定义的属性
- **注意：**类选择器、属性选择器、伪类选择器，权重为 10。

| 选择符          | 简介                                  |
| --------------- | ------------------------------------- |
| `E[att]`        | 选择具有att属性的E元素                |
| `E[att="val"] ` | 选择具有att属性且属性值等于val的E元素 |
| `E[att^="val"]` | 匹配具有att属性且值以val开头的E元素   |
| `E[att$="val"]` | 匹配具有att属性且值以val结尾的E元素   |
| `E[att*="val"]` | 匹配具有att属性且值中含有val的E元素   |

```css
 /* 只选择 type =text 文本框的input 选取出来 */
input[type=text] {
    color: pink;
}
/* 选择首先是div 然后 具有class属性 并且属性值 必须是 icon开头的这些元素 */
div[class^=icon] {
    color: red;
}
/* 选择首先是section 然后 具有class属性 并且属性值 必须是 data结尾的这些元素 */
section[class$=data] {
    color: blue;
}
```

### 结构伪类选择器

结构伪类选择器根据文档结构来选择器元素，常用于选择父级元素里面的子元素。

| 选择符           | 简介                        |
| ---------------- | --------------------------- |
| E:first-child    | 匹配父元素中的第一个子元素E |
| E:last-child     | 匹配父元素中最后一个E元素   |
| E:nth-child(n)   | 匹配父元素中的第n个子元素E  |
| E:first-of-type  | 指定类型E的第一个           |
| E:last-of-type   | 指定类型E的最后一个         |
| E:nth-of-type(n) | 指定类型E的第n个            |
（1）E: first-child
```html
 <style>
    ul li:first-child{
      background-color: red;
    }
  </style>

  <ul>
    <li>列表项一</li>
    <li>列表项二</li>
    <li>列表项三</li>
    <li>列表项四</li>
  </ul>
```
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240711110145.png)
 
 **（2）E: nth-child (n)（★★★）**
n 可以是数字，关键字和公式
n 如果是数字，就是选择第 n 个子元素， 里面数字从1开始…
n 可以是关键字： even 偶数， odd 奇数
n 可以是公式：常见的公式如下 ( 如果 n 是公式，则从 0 开始计算，但是第 0 个元素或者超出了元素的个数会被忽略 )。
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS3新增结构伪类选择器-nth-child</title>
    <style>
        /* 1.把所有的偶数 even的孩子选出来 */
        ul li:nth-child(even) {
            background-color: #ccc;
        }

        /* 2.把所有的奇数 odd的孩子选出来 */
        ul li:nth-child(odd) {
            background-color: gray;
        }
        
        /* 
        3.nth-child(n)
        不使用公式时，n从1开始。
        使用公式时，n从0开始，每次加1，往后面计算。
        这里面必须是n，不能是其他的字母
        */
        
        /* ol li:nth-child(n) {
            background-color: pink;
        } */
        /* nth-child(2n)母选择了所有的偶数孩子 等价于 even*/
        /* ol li:nth-child(2n) {
            background-color: pink;
        }
        ol li:nth-child(2n+1) {
            background-color: skyblue;
        } */
        /* ol li:nth-child(n+3) {
            background-color: pink;
        } */
        ol li:nth-child(-n+3) {
            background-color: pink;
        }
    </style>
</head>

<body>
    <ul>
        <li>我是第1个孩子</li>
        <li>我是第2个孩子</li>
        <li>我是第3个孩子</li>
        <li>我是第4个孩子</li>
        <li>我是第5个孩子</li>
        <li>我是第6个孩子</li>
        <li>我是第7个孩子</li>
        <li>我是第8个孩子</li>
    </ul>
    <ol>
        <li>我是第1个孩子</li>
        <li>我是第2个孩子</li>
        <li>我是第3个孩子</li>
        <li>我是第4个孩子</li>
        <li>我是第5个孩子</li>
        <li>我是第6个孩子</li>
        <li>我是第7个孩子</li>
        <li>我是第8个孩子</li>
    </ol>
</body>

</html>
```
显示效果如下：
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240711110651.png)
**一些常用的公式： 公式不是死的，在这里列举出来让大家能够找寻到这个模式，能够理解代码，这样才能写出满足自己功能需求的代码**

| 公式 | 取值    | 说明                            |
| ---- | ------- | ------------------------------- |
| 2n   | n为整数 | 偶数                            |
| 2n+1 | n为整数 | 奇数                            |
| 5n   | n为整数 | 5, 10, 15, ...                  |
| n+5  | n为整数 | 从第5个开始（包含第五个）到最后 |
| -n+5 | n为整数 | 前5个（包含第5个）...           |

`（3）E: nth-child 与 E: nth-of-type 的区别`
这里只讲明 **E: nth-child (n)** 和 **E: nth-of-type (n)** 的区别，剩下的 **E: first-of-type** **E: last-of-type** **E: nth-last-of-type (n)** 同理做推导即可。

```html
<style>
    ul li:nth-child(2){
      /* 字体变成红色 */
        color: red;
    }

    ul li:nth-of-type(2){
      /* 背景变成绿色 */
      background-color: green;
    }
  </style>


  <ul>
    <li>列表项一</li>
    <p>乱来的p标签</p>
    <li>列表项二</li>
    <li>列表项三</li>
    <li>列表项四</li>
  </ul>
```
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240711135146.png)
也就是说：

- `E:nth-child(n)` 匹配父元素的第 n 个子元素 E，也就是说，nth-child 对父元素里面所有孩子排序选择（序号是固定的） 先找到第 n 个孩子，然后再看第 n 个孩子的类型是否和 E 匹配。如匹配，则返回；不匹配，则不返回。
- `E:nth-of-type(n)` 匹配同类型中的第 n 个同级兄弟元素 E，也就是说，**对父元素里面指定子元素进行排序选择**。先去匹配 E ，然后再根据 E 找第 n 个孩子。

（4）小结
- 结构伪类选择器一般用于选择父级里面的第几个孩子
- nth-child 对父元素里面所有孩子排序选择（序号是固定的） 先找到第n个孩子，然后看看是否和E匹配
- nth-of-type 对父元素里面指定子元素进行排序选择。 先去匹配E ，然后再根据E 找第n个孩子
- 关于 nth-child（n） 我们要知道 n 是从 0 开始计算的，要记住常用的公式
- 如果是无序列表，我们肯定用 nth-child 更多
- 类选择器、属性选择器、伪类选择器，权重为 10

### 伪元素选择器（★★★）

伪元素选择器可以帮助我们利用 CSS 创建新标签元素，而不需要 HTML 标签，从而简化 HTML 结构。
(1) 基本使用

| 选择符        | 简介               |
| ---------- | ---------------- |
| `::before` | 在元**素内部的前面**插入内容 |
| `::after`  | 在元素**内部的后面**插入内容 |
- before 和 after 创建一个元素，但是属于**行内元素**
- 新创建的这个元素在文档树中是找不到的，所以我们称为伪元素
- 语法：` element::before{}`
- before 和 after **必须有 content 属性**
- before 在父元素内容的前面创建元素，after 在父元素内容的后面插入元素  
- 伪元素选择器和标签选择器一样，权重为 1.

```html
<style>
    div {
        width: 200px;
        height: 200px;
        background-color: pink;
    }
    /* div::before 权重是2 */
    div::before {
        /* 这个content是必须要写的 */
        content: '我';
    }
    div::after {
        content: '小猪佩奇';
    }
</style>
<body>
    <div>
        是
    </div>
</body>
```

（2）应用场景

a.字体图标
在实际工作中，字体图标基本上都是用伪元素来实现的，好处在于我们不需要在结构中额外去定义字体图标的标签，通过 content 属性来设置字体图标的编码。
**步骤：**
- 结构中定义div盒子
- 在style中先申明字体 @font-face
- 在style中定义after伪元素` div::after{...}`
- 在after伪元素中 设置`content`属性，属性的值就是字体编码
- 在after伪元素中 设置`font-family`的属性
- 利用定位的方式，让伪元素定位到相应的位置；记住定位口诀：子绝父相

```html
<head>
    ...
    <style>
        @font-face {
            font-family: 'icomoon';
            src: url('fonts/icomoon.eot?1lv3na');
            src: url('fonts/icomoon.eot?1lv3na#iefix') format('embedded-opentype'),
                url('fonts/icomoon.ttf?1lv3na') format('truetype'),
                url('fonts/icomoon.woff?1lv3na') format('woff'),
                url('fonts/icomoon.svg?1lv3na#icomoon') format('svg');
            font-weight: normal;
            font-style: normal;
            font-display: block;
        }
        
        div {
            position: relative;
            width: 200px;
            height: 35px;
            border: 1px solid red;
        }

        div::after {
            position: absolute;
            top: 10px;
            right: 10px;
            font-family: 'icomoon';
            /* content: ''; */
            content: '\e91e';
            color: red;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div></div>
</body>
```

b. 仿土豆效果-视频半透明黑色遮罩
**步骤：**
- 找到之前写过的仿土豆的结构和样式，拷贝到自己的页面中
- 删除之前的mask遮罩
- 在style中，给大的div盒子（类名叫tudou的），设置 before伪元素
- 这个伪元素充当的是遮罩的角色，所以我们不用设置内容，但是需要设置content属性，属性的值为空字符串
- 给这个遮罩设置宽高，背景颜色，默认是隐藏的
- 当鼠标移入到 div盒子时候，让遮罩显示，利用 hover 来实现
```html
<head>
    ...
    <style>
        .tudou {
            position: relative;
            width: 444px;
            height: 320px;
            background-color: pink;
            margin: 30px auto;
        }

        .tudou img {
            width: 100%;
            height: 100%;
        }

        .tudou::before {
            content: '';
            /* 隐藏遮罩层 */
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .4) url(images/arr.png) no-repeat center;
        }

        /* 当我们鼠标经过了 土豆这个盒子，就让里面before遮罩层显示出来 */
        .tudou:hover::before {
            /* 而是显示元素 */
            display: block;
        }
    </style>
</head>

<body>
    <div class="tudou">
        <img src="images/tudou.jpg" alt="">
    </div>
    <div class="tudou">
        <img src="images/tudou.jpg" alt="">
    </div>
    <div class="tudou">
        <img src="images/tudou.jpg" alt="">
    </div>
    <div class="tudou">
        <img src="images/tudou.jpg" alt="">
    </div>
</body>
```

（3）清除浮动
回忆一下 [[02 CSS基础#12.5 清除浮动|清除浮动]]的方式。
学习完伪元素选择器，就可以看懂 [[02 CSS基础#^clearfloat]] 的代码了。
后面两种伪元素清除浮动算是第一种额外标签法的一个**升级**和**优化**。
## 2.3 盒子模型（★★★）
CSS3 中可以通过 `box-sizing` 来指定盒模型，有 2 个值：即可指定为 content-box、border-box，这样我们计算盒子大小的方式就发生了改变。

可以分成两种情况：
- `box-sizing: content-box` 盒子大小为 width + padding + border （以前默认的）
- `box-sizing: border-box` 盒子大小为 width
如果盒子模型我们改为了 box-sizing: border-box ， **那 padding 和 border 就不会撑大盒子了**。（前提 padding 和 border 不会超过 width 宽度）

因此，后续的 CSS 初始化第一个可以是：
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

## 2.4 CSS3 过渡（★★★）
过渡（transition)是CSS3中具有颠覆性的特征之一，我们可以在不使用 Flash 动画或 JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。
**过渡动画：** 从一个状态渐渐的过渡到另外一个状态，可页面更好看，更动感十足，虽然低版本浏览器不支持（ie9 以下版本）， 但是不会影响页面布局。
经常和 : hover 一起搭配使用。

（1）基本使用
语法：
```css
transition: 要过渡的属性  花费时间  运动曲线  何时开始;
```
- 属性 ： 想要变化的 css 属性， 宽度高度 背景颜色 内外边距都可以 。如果想要所有的属性都变化过渡， 写一个all 就可以
- 花费时间： 单位是 秒（必须写单位） 比如 0.5s
- 运动曲线： 默认是 ease （可以省略）
- 何时开始：单位是 秒（必须写单位）可以设置延迟触发时间 默认是 0s （可以省略）
- **后面两个属性可以省略**
- **记住过渡的使用口诀： 过渡写到本身上，谁做过渡给谁加**
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240711144614.png)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>css 过渡</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .box {
            width: 200px;
            height: 200px;
            background-color: pink;
            transition: width 2s, height 2s, background-color 2s;
        }

        .box:hover {
            width: 400px;
            height: 400px;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <div class="box">
    </div>
</body>

</html>
```

（2）进度条案例
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240711150205.png)
步骤：

- 创建两个div的盒子，属于的嵌套关系，外层类名叫 bar，里层类名叫 bar_in
- 给外层的bar 这个盒子设置边框，宽高，圆角边框
- 给里层的bar_in 设置 初试的宽度，背景颜色，过渡效果
- 给外层的 bar 添加 hover事件，当触发了hover事件 让里层的bar_in 来进行宽度的变化

代码：

```html
<head>
    ...
    <style>
        .bar {
            width: 150px;
            height: 15px;
            border: 1px solid red;
            border-radius: 7px;
            padding: 1px;
        }
        .bar_in {
            width: 50%;
            height: 100%;
            background-color: red;
            /* 谁做过渡给谁加 */
            transition: all .7s;
        }
        .bar:hover .bar_in {
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="bar">
        <div class="bar_in"></div>
    </div>
</body>
```

## 2.5 转换
### 2d 转换
转换（transform）是 CSS3 中具有颠覆性的特征之一，可以实现元素的位移、旋转、缩放等效果。
1. **translate 移动**
2D 移动是 2D 转换里面的一种功能，可以改变元素在页面中的位置，类似定位，但**其对行内标签**没有效果。
translate 最大的优点是**不会影响到其他元素的位置**，translate 中的百分比单位（如 `translate: (50%, 50%)`）是以自身元素的尺寸为基准计算的。  
语法：
```css
transform: translate(x,y); 或者分开写  
transform: translateX(n);  
transform: translateY(n);
```
>案例：子盒子在父盒子内部垂直居中
```html
<head>
    ...
    <title>子盒子在父盒子内部垂直居中</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        div {
            position: relative;
            width: 100px;
            height: 100px;
            background-color: red;
        }

        p {
            /* 先使用定位让纸盒子右上角移动到父盒子的中心点 */
            position: absolute;
            top: 50%;
            left: 50%;
            width: 50px;
            height: 50px;
            /* 再使用transform属性，将纸盒子中心点移动到父盒子的中心点 */
            transform: translate(-50%, -50%);
            background-color: purple;
        }
    </style>
</head>

<body>
    <div>
        <p>
        </p>
    </div>
</body>
```


2. **Rotate 旋转**
语法：`transform:rotate(n deg)`，其中为 n 为度数（-360~360），正值表示顺时针旋转，负值表示逆时针旋转。默认旋转中心点为元素的中心点。
>案例：使用旋转制作三角
```html
<head>
    ...
    <title>使用旋转制作三角</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        div {
            position: relative;
            margin: 5px 0 0 5px;
            width: 250px;
            height: 35px;
            border: 1px solid black;
            transition: all 0.5s;
        }

        div::after {
            content: '';
            position: absolute;
            top: 10px;
            right: 10px;
            width: 10px;
            height: 10px;
            /* 伪元素需要有右边框和下边框 */
            border-bottom: 1px solid black;
            border-right: 1px solid black;
            /* 旋转45°后，变为三角形 */
            transform: rotate(45deg);
        }

        div:hover::after {
            /* 鼠标经过，三角形旋转 */
            transform: rotate(225deg);
        }
    </style>
</head>

<body>
    <div>
    </div>
</body>
```
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241008204901.png)


**设置旋转中心点**：`transform-orign:x y`，x 和 y 用空格隔开，默认转换的中心点是元素的中心点 (50% 50%)。x y 可以设置为像素、方位名词 （top bottom left right center）。该语句不仅可以设置旋转中心点，也可以设置缩放 `scale` 的中心点。
>案例：旋转中心点
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>旋转中心点设置</title>
    <style>
        div {
            margin: 100px auto;
            overflow: hidden;
            width: 250px;
            height: 250px;
            border: 1px solid black;
        }

        /* 伪元素制作内部盒子 */
        /* 起始旋转角度为180° */
        div::after {
            content: '测试';
            display: block;
            width: 100%;
            height: 100%;
            background-color: pink;
            /* 以左下角为中心进行旋转 */
            transform-origin: left bottom;
            transform: rotate(180deg);
            transition: all 0.2s;
        }

        div:hover::after {
            /* 鼠标经过，三角形旋转 */
            transform: rotate(0deg);
        }
    </style>
</head>

<body>
    <div>
    </div>
</body>

</html>
```

![[旋转中心点案例.gif]]

3.  scale 缩放
用于控制元素的放大和缩小，语法：`transform:scale(x,y)`，x 和 y 的值为 0~1 之间的小数（缩小）或大于等于 1 的数（放大）。当写法为 `transform:scale(n)` 时，表示等比例缩放。
sacle 缩放最大的优势：可以设置转换中心点缩放（使用 `transform-origin`），默认以中心点缩放的，而且**不影响其他盒子**。
>案例：分页按钮缩放
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>分页按钮</title>
    <style>
        ul li {
            display: inline-block;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border: 1px solid #000;
            margin-right: 5px;
            cursor: pointer;
            transition: all 0.5s;
        }

        ul li:hover {
            background-color: #f00;
            color: #fff;
            transform: scale(1.2);
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
        <li>6</li>
        <li>7</li>
    </ul>
</body>

</html>
```
![[分页按钮缩放案例.gif]]

4. 综合写法
同时使用多个转换，其格式为：`transform: translate() rotate() scale() ... ` 等，其顺序会影转换的效果。如先旋转会改变坐标轴方向，此后再进行移动，会导致沿着旋转后的坐标轴进行移动。
当我们同时有位移和其他属性的时候，**记得要将位移放到最前**。

### 3d 转换
1. **3d 移动 traslate3d**
（1）三维坐标轴
3D 移动在 2D 移动的基础上多加了一个可以移动的方向，就是 z 轴方向。三维坐标系其实就是指立体空间，立体空间是由 3 个轴共同组成的。
![400](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241010082231.png)

- x 轴：水平向右注意： x 右边是正值，左边是负值  
- y 轴：垂直向下注意： y 下面是正值，上面是负值  
- z 轴：垂直屏幕注意： 往外面是正值，往里面是负值

（2）透视：近大远小
透视我们也称为视距，视距就是人的眼睛到屏幕的距离。距离视觉点越近的在电脑平面成像越大，越远成像越小，透视的单位是像素，**透视写在被观察元素的父盒子上面的**（例如 `body {perspective:500px}`）。
![400](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241010082515.png)
d：就是视距，视距就是一个距离人的眼睛到屏幕的距离。  
z：就是 z 轴，物体距离屏幕的距离，z 轴越大（正值） 我们看到的物体就越大。

（3）具体语法
`transform:translateX (100px)`：仅仅是在 x 轴上移动  
`transform:translateY(100px)`：仅仅是在Y轴上移动  
`transform:translateZ(100px)`：仅仅是在Z轴上移动（注意：translateZ一般用px单位）  
`transform:translate3d(x,y,z)` ：其中 x、y、z 分别指要移动的轴的方向的距离

因为 z 轴是垂直屏幕，由里指向外面，所以默认是看不到元素在 z 轴的方向上移动的效果。

2. **3D 旋转**
```css
div {
	/* 沿着x轴正方向旋转 45度，正方向遵循左手法则   */
	transform:rotateX(45deg)
	
	/* 沿着Y轴正方向旋转 45度，正方向遵循左手法则  */
	transform:rotateY(45deg)

	/* 沿着Z轴正方向旋转 45度，效果跟2d旋转一致   */
	transform:rotateZ(45deg) 

	/* 沿着自定义轴旋转 deg为角度（了解）*/
	/*xyz是表示旋转轴的矢量，标示你是否希望沿着该轴旋转，
	/*最后一个标示旋转的角度。*/
	transform:rotate3d(x,y,z,deg)
	/*沿着X轴和Y轴对角线旋转 45deg*/
	transform:rotate3d(1,1,0,45)
	
}
```

左手法则：
- 左手大拇指指向 X 轴的正方向，**其余手指弯曲的方向即为元素沿着 x 轴旋转的正方向**（角度为正值），反方向即为旋转的负方向（角度值为负值）。
- 左手大拇指指向 Y 轴的正方向，**其余手指弯曲的方向即为元素沿着 Y 轴旋转的正方向**（角度为正值），反方向即为旋转的负方向（角度值为负值）。

3.  **3d 呈现 transform-style**
控制子元素是否开启三维立体环境。`transform-style:flat` 子元素不开启 3d 立体空间 (默认值)，`transform-style: preserve-3d;` 子元素开启立体空间。
**代码写给父级**，但是影响的是子盒子。

>案例：三维导航栏
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>3d导航栏</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        ul {
            margin: 100px;
        }

        ul li {
            float: left;
            width: 120px;
            height: 35px;
            margin: 0 20px;
            list-style: none;
            perspective: 500px;
        }

        .box {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: all .4s;
        }

        .box:hover {
            transform: rotateX(90deg);
        }

        .front,
        .bottom {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 35px;
            font-size: 20px;
            color: #fff;
        }

        .front {
            background: #f00;
            /* 竖直面往前移动，确保后续旋转时沿着立方体中心 */
            transform: translateZ(17.5px);
            z-index: 1;
        }

        .bottom {
            background: #00f;
            /* 同时有移动和旋转时，先移动再旋转 */
            transform: translateY(17.5px)rotateX(-90deg);
        }
    </style>
</head>

<body>
    <ul>
        <li>
            <div class="box">
                <div class="front">CSU</div>
                <div class="bottom">我在这里等你</div>
            </div>
        </li>
        <li>
            <div class="box">
                <div class="front">CSU</div>
                <div class="bottom">我在这里等你</div>
            </div>
        </li>
        <li>
            <div class="box">
                <div class="front">CSU</div>
                <div class="bottom">我在这里等你</div>
            </div>
        </li>
    </ul>

</body>

</html>
```
![[3d导航栏.gif]]

## 2.6 动画
动画（animation）是 CSS3 中具有颠覆性的特征之一，可通过设置多个节点来精确控制一个或一组动画，常用来实现复杂的动画效果。相比较过渡，动画可以实现更多变化，更多控制，连续自动播放等效果。
1. **使用动画**
制作动画分为两步： 先定义动画（`@keyframes`），再使用（调用）动画。
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>动画语法</title>
    <style>
	    /* 定义动画，名称为mymove */
	    @keyframes mymove {
            0% {
                transform: rotate(0deg);
            }

            25% {
                transform: rotate(90deg);
            }

            50% {
                transform: rotate(180deg);
            }

            75% {
                transform: rotate(270deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
        
        div {
            width: 100px;
            height: 100px;
            background-color: red;
            /*调用mymove动画*/
            animation: mymove 5s infinite;
        }
    </style>
</head>

<body>
    <div></div>
</body>

</html>
```

0% 是动画的开始，100% 是动画的完成。这样的规则就是**动画序列**。  
在 `@keyframes `中规定某项 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果。  
动画是使元素从一种样式逐渐变化为另一种样式的效果。可以规定任意多个时间节点的关键帧，每个关键字可以改变任意多的样式任意次。  
用百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。

2. **动画属性**


| 属性                        | 描述                                       |
| ------------------------- | ---------------------------------------- |
| @keyframes                | 规定动画。                                    |
| animation                 | 所有动画属性的简写属性 (除 animation-play-state 属性除外)  |
| animation-name            | 规定@keyframes动画的名称。(必须的)                  |
| animation-duration        | 规定动画完成一个周期所花费的秒或毫秒，默认是0。(必须的)            |
| animation-timing-function | 规定动画的速度曲线，默认是“`ease`”                      |
| animation-delay           | 规定动画何时开始，默认是0。                           |
| animation-iteration-count | 规定动画被播放的次数，默认是1，还有`infinite`               |
| animation-direction       | 规定动画是否在下一周期逆向播放，默认是"`normal`",`alternate`逆播放 |
| animation-play-state      | 规定动画是否正在运行或暂停。默认是"`running`",还有"`paused`"。   |
| animation-fill-mode       | 规定动画结束后状态，保持结束状态为 `forwards`（默认），结束后回到起始状态`backwards`        |
简写：`animation:*name *duration timing-function delay iteration-time fill-mode`，其中标 `*` 的为必须写的属性，其他不需要的属性省略即可。

>案例：大数据热点图
```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>大数据热点图</title>
  <style>
    .map {
      position: relative;
      width: 747px;
      height: 620px;
      margin: 100px auto;
      background: url(imgs/map.png) no-repeat;
      background-color: #333;
    }

    /* city盒子用来对进行定位 */
    .city {
      position: absolute;
      top: 227px;
      left: 544px;
      color: #fff;
    }

    .dotted {
      width: 8px;
      height: 8px;
      background-color: #09f;
      border-radius: 50%;
    }

    .city div[class^="pulse"] {
      position: absolute;
      /* 保证小波纹在父盒子内部水平垂直居中 */
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      box-shadow: 0 0 12px #09f;
      animation: name duration timing-function delay iteration-count direction fill-mode;
      animation: pulse 1.2s linear infinite;
    }

    .city div.pulse2 {
      animation-delay: 0.4s;
    }

    .city div.pulse3 {
      animation-delay: 0.8s;
    }

    @keyframes pulse {
      0% {}

      70% {
        height: 40px;
        width: 40px;
        opacity: 1;
      }

      100% {
        height: 70px;
        width: 70px;
        opacity: 0;
      }
    }
  </style>
</head>

<body>
  <div class="map">
    <div class="city">
      <div class="dotted"></div>
      <div class="pulse1"></div>
      <div class="pulse2"></div>
      <div class="pulse3"></div>
    </div>
  </div>
</body>

</html>
```
![[大数据热点图案例.gif]]
 
 3. **动画速度曲线**

| animation-timing-function 参数 | 描述                      |
| --------------------------- | ----------------------- |
| linear                      | 动画从头到尾的速度是相同的。匀速        |
| ease                        | 默认。动画以低速开始，然后加快，在结束前变慢。 |
| ease-in                     | 动画以低速开始。                |
| ease-out                    | 动画以低速结束。                |
| ease-in-out                 | 动画以低速开始和结束。             |
| steps()                     | 指定了时间函数中的间隔数量（步长）       |
>`step()` 使用案例：打字机效果

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            overflow: hidden;
            font-size: 20px;
            width: 0;
            height: 30px;
            /* 让我们的文字强制一行内显示 */
            white-space: nowrap;
            /* steps 就是分几步来完成我们的动画 有了steps 就不要在写 ease 或者linear 了 */
            animation: w 4s steps(10) forwards;
        }

        @keyframes w {
            0% {
                width: 0;
            }

            100% {
                width: 200px;
            }
        }
    </style>
</head>

<body>
    <div>世纪佳缘我在这里等你</div>
</body>

</html>
```
![[打字机案例.gif]]

 >**案例：奔跑的北极熊**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>奔跑的北极熊</title>
    <style>
        body {
            background-color: #333;
            margin: 0;
            padding: 0;
        }

        div {
            position: absolute;
            margin: 100px auto;
            width: 200px;
            height: 100px;
            overflow: hidden;
            animation: move 4s forwards;
        }

        img {
            animation: run 0.6s steps(8) infinite;
        }

        @keyframes run {
            0% {
                margin-left: 0;
            }

            100% {
                margin-left: -1600px;
            }
        }

        @keyframes move {
            0% {
                left: 0;
            }

            100% {
                left: 50%;
                transform: translateX(-50%);
            }
        }
    </style>

</head>

<body>
    <div>
        <img src="imgs/bear.png" alt="">
    </div>
</body>

</html>
```

>综合案例：旋转木马
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>旋转木马</title>
  <style>
    body {
      perspective: 1000px;
    }

    section {
      position: relative;
      width: 300px;
      height: 200px;
      margin: 100px auto;
      background: url(pig.jpg) no-repeat;
      transform-style: preserve-3d;
      animation: rotate 4s linear infinite;
    }

    section:hover {
      /* 鼠标经过，暂停动画 */
      animation-play-state: paused;
    }

    @keyframes rotate {
      0% {
        transform: rotateY(0deg);
      }

      100% {
        transform: rotateY(360deg);
      }
    }

    section div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(dog.jpg) no-repeat;
    }

    section div:nth-child(1) {
      transform: translateZ(300px);
    }

    section div:nth-child(2) {
      transform: rotateY(60deg) translateZ(300px);
    }

    section div:nth-child(3) {
      transform: rotateY(120deg) translateZ(300px);
    }

    section div:nth-child(4) {
      transform: rotateY(180deg) translateZ(300px);
    }

    section div:nth-child(5) {
      transform: rotateY(240deg) translateZ(300px);
    }

    section div:nth-child(6) {
      transform: rotateY(300deg) translateZ(300px);
    }
  </style>
</head>

<body>
  <section>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </section>
</body>

</html>
```
![[旋转木马.gif]]

 ## 2.7 媒体查询
媒体查询（Media Query）是 CSS3 新语法。使用 `@media` 查询，可以针对不同的媒体类型和屏幕尺寸定义不同的样式当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面，目前针对很多苹果手机、Android 手机，平板等设备都用得到多媒体查询。 ^mediaQuery

语法规范：
```css
@media mediatype and|not|only (media feture) {
	css-code;
}
```
`mediatype` 的取值有：`all` (适用于所有设备) 、 `print` （用于打印机和打印预览 ）、`screen` (用于电脑屏幕、平板电脑、智能手机）。
and：可以将多个媒体特性连接到一起，相当于“且”的意思。not：排除某个媒体类型，相当于“非”的意思，可以省略。only：指定某个特定的媒体类型，可以省略。  
media feture 的取值有：width—定义输出设备中页面可见区域的宽度；min-width 定义输出设备中页面最小可见区域宽度；max-width 定义输出设备中页面最大可见区域宽度。

>案例：媒体查询+rem 实现元素动态变化
```css
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>媒体查询+rem 实现元素动态变化</title>
    <style>
        .header {
            width: 100%;
            height: 1rem;
            font-size: .5rem;
            background-color: #f00;
            color: #fff;
            text-align: center;
            line-height: 1rem;
        }

        @media screen and (min-width: 320px) {
            html {
                font-size: 50px;
            }
        }

        @media screen and (min-width: 640px) {
            html {
                font-size: 100px;
            }
        }
    </style>

</head>

<body>
    <div class="header">购物车</div>
</body>

</html>
```

 ## 其他特性（★）
### 图标变模糊：CSS3 滤镜 filter

filter CSS属性将模糊或颜色偏移等图形效果应用于元素

语法：

```css
filter: 函数(); 
例如： filter: blur(5px);  -->  blur模糊处理  数值越大越模糊
```
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240711144028.png)
### 计算盒子宽度：calc 函数
`calc() ` ：此 CSS 函数让你在声明 CSS 属性值时执行一些计算。
语法：

```css
width: calc(100% - 80px);
```
括号里面可以使用 ` + - * / ` 来进行计算.

### background-size
规定背景图像的尺寸，具体语法：
```css
background-size: 背景图片宽度 背景图片高度;
```

宽度或高度的单位可以是长度（50px）、百分比（以父盒子为基准）、关键字 `cover` 或关键字 `contain`。
`cover` 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域，图片可能显示不全。
`contain` 把图像图像扩展至最大尺寸，以使其宽度或高度完全适应内容区域。

### 背景线性渐变
```css
background:linear-gradient(起始方向，颜色1，颜色2，...);
background: -webkit-linear-gradient(left，red, blue);
background: -webkit-linear-gradient(left top, red, blue);
```
背景渐变必须添加浏览器私有前缀。起始方向可以是: 方位名词或者度数，如果省略默认就是 top。