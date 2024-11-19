> [DOM 文档]( https://developer.mozilla.org/zh-CN/docs/Web/API/Document )
# 0 声明变量 const 优先
建议： const 优先，尽量使用 const，原因是：  
（1）const 语义化更好  
（2）很多变量我们声明的时候就知道他不会被更改了，那为什么不用 const 呢？  
（3）实际开发中也是，比如 react 框架，基本都是使用 const  

有了**变量先给 const**，如果发现它后面是要被修改的，再改为 let。

# 1 Web APIs 介绍
严格意义上讲，我们在 JavaScript 阶段学习的知识绝大部分属于 ECMAScript 的知识体系，ECMAScript 简称 ES 它提供了一套语言标准规范，如变量、数据类型、表达式、语句、函数等语法规则都是由 ECMAScript 规定的。浏览器将 ECMAScript 大部分的规范加以实现，并且在此基础上又扩展一些实用的功能，这些被扩展出来的内容我们称为 Web APIs。
![[Pasted image 20240625084138.png]]

ECMAScript 运行在浏览器中然后再结合 Web APIs 才是真正的 JavaScript，**Web APIs 的核心是 DOM 和 BOM。**

# 2 DOM 介绍
DOM（Document Object Model）是将整个 HTML 文档的每一个标签元素视为一个对象，这个对象下包含了许多的属性和方法，通过操作这些属性或者调用这些方法实现对 HTML 的动态更新，为实现网页特效以及用户交互提供技术支撑。
（1）DOM 树
将 HTML 文档以树状结构直观的表现出来，我们称之为文档树或 DOM 树，**文档树直观的体现了标签与标签之间的关系。**
![[Pasted image 20240625084418.jpg]]

（2）DOM 节点
节点是文档树的组成部分，**每一个节点都是一个 DOM 对象**，主要分为元素节点、属性节点、文本节点等。
- 【元素节点】其实就是 HTML 标签，如上图中 `head`、`div`、`body` 等都属于元素节点。
-  【属性节点】是指 HTML 标签中的属性，如上图中 `a` 标签的 `href` 属性、`div` 标签的 `class` 属性。
-  【文本节点】是指 HTML 标签的文字内容，如 `title` 标签中的文字。
-  【根节点】特指 `html` 标签。
- 其它...

（3）document
`document` 是 JavaScript 内置的专门用于 DOM 的对象，该对象包含了若干的属性和方法，网页的所有内容都在 `document` 中。

# 3 使用 DOM
## 3.1 获取 DOM 元素
(1) 获取第一个元素
```js
element = document.querySelector (selectors);
```
参数：
`selectors` 为包含一个或多个有效的 **CSS 选择器**字符串。
返回值：  
CSS选择器匹配的第一个元素,一个 HTMLElement对象。  
如果没有匹配到，则返回 null。

（2）获取多个元素
```js
element = document.querySelectorAll(selectors);
```
参数:  
包含一个或多个有效的CSS选择器字符串  
返回值：  
CSS 选择器匹配的 NodeList 对象集合，是一个**伪数组**。伪数组是有长度有索引号的数组，但是没有 `pop()`、`push()` 等数组方法。

```html
<!DOCTYPE html>
<body>
  <div class="box">123</div>
  <div class="box">abc</div>
  <p id="nav">导航栏</p>
  <ul class="nav">
    <li>测试1</li>
    <li>测试2</li>
    <li>测试3</li>
  </ul>
  <script>
    // 获取匹配的第一个元素
    const box = document.querySelector('div')
    const box = document.querySelector('.box')
    console.log(box)
    const nav = document.querySelector('#nav')
    console.log(nav)
    nav.style.color = 'red'
    
    // 获取第一个小 ul li
    const li = document.querySelector('ul li:first-child')
    console.log(li)
    
    // 选择所有的小li
    const lis = document.querySelectorAll('ul li')
    console.log(lis)
    for (let i = 0; i < lis.length; i++) {
      console.log(lis[i]) // 每一个小li对象
    }

    const p = document.querySelectorAll('#nav')
    console.log(p)
    p[0].style.color = 'red'
  </script>
</body>
</html>
```
（3）了解其他方式
getElementById
getElementsByTagName
## 3.2 操作元素内容
(1) 元素的 `innerText` 属性将文本内容添加/更新到任意标签位置，**文本中包含的标签不会被解析。** 显示纯文本。
(2) 元素的 `innerHTML` 将文本内容添加/更新到任意标签位置，**文本中包含的标签会被解析。**
```js
<script>
  // innerHTML 将文本内容添加/更新到任意标签位置
  const intro = document.querySelector('.intro')
  intro.innerText = '嗨~ 我叫韩梅梅！'
  intro.innerHTML = '<h4>嗨~ 我叫韩梅梅！</h4>'
</script>
```

## 3.3 操作元素属性
（1）常用属性：直接通过属性名修改，如： href、title、src 等。
```js
<script>
  // 1. 获取 img 对应的 DOM 元素
  const pic = document.querySelector('.pic')
	// 2. 修改属性
  pic.src = './images/lion.webp'
  pic.width = 400;
  pic.alt = '图片不见了...'
</script>
```
（2）控制样式的属性
a. 通过 `style` 属性修改样式
- 任何标签都有 `style` 属性，通过 `style` 属性可以动态更改网页标签的样式。
- 通过元素节点获得的 `style` 属性本身的数据类型也是对象，如 `box.style.color`、`box.style.width` 分别用来获取元素节点 CSS 样式的 `color` 和 `width` 的值。
- 如遇到 `css` 属性中包含字符 `-` 时，要将 `-` **去掉并将其后面的字母改成大写**，转换为小驼峰命名法。如 `background-color` 要写成 `box.style.backgroundColor`。
```js
  <script>
    // 获取 DOM 节点
    const box = document.querySelector('.intro')
    box.style.color = 'red'
    box.style.width = '300px'
    // css 属性的 - 连接符与 JavaScript 的 减运算符
    // 冲突，所以要改成驼峰法
    box.style.backgroundColor = 'pink'
  </script>
```
b. 通过元素的 `className` 属性更换类名
先设置好新类名的样式，然后通过元素的 `className` 属性更换类名。
注意：`className` 会覆盖掉原来的类，如需保留原始类的样式，可以将新类名追加到原始类名后。
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    div {
      width: 200px;
      height: 200px;
      background-color: pink;
    }

    .nav {
      color: red;
    }

    /* 先设置好新类的样式 */
    .box {
      width: 300px;
      height: 300px;
      background-color: skyblue;
      margin: 100px auto;
      padding: 10px;
      border: 1px solid #000;
    }
  </style>
</head>

<body>
  <div class="nav">123</div>
  <script>
    // 获取元素
    const div = document.querySelector('div')
    // 将新类名追加到元素的className属性上
    // 不保留原始类nav的样式
    dic.className = 'box'
    
    // 将新类名追加到元素的className属性上
    // 同时保留原始类nav的样式
    div.className = 'nav box'
  </script>
</body>

</html>
```

c. 为解决 className 容易覆盖原始类名的问题，可通过 `classList` 方式追加和删除类名。
语法：
```js
// 追加一个类
元素.classList.add('类名')

// 删除一个类
元素.classList.remove('类名')

// 切换一个类，若'类名'不存在，则加上；若已存在，则删去
元素.classList.toggle('类名')

// 查看元素是否含有某个类名，返回布尔值
element.classList.contains('className')
```

## 3.4 操作表单元素属性
获取表单的值：`表单.value`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>

<body>
    <input type="text" value="请输入">
    <button disabled>按钮</button>
    <input type="checkbox" name="" id="" class="agree">
    <script>
        // 1. 获取元素
        let input = document.querySelector('input')
        // 2. 取值或者设置值  得到input里面的值可以用 value
        // console.log(input.value)
        input.value = '小米手机'
        input.type = 'password'

        // 2. 启用按钮
        let btn = document.querySelector('button')
        // disabled 不可用   =  false  这样可以让按钮启用
        btn.disabled = false
        // 3. 勾选复选框
        let checkbox = document.querySelector('.agree')
        checkbox.checked = false
    </script>
</body>

</html>
```

## 3.5 H5 自定义属性
标准属性: 标签天生自带的属性比如 `class` 、  `id ` 、`title` 等, 可以直接使用点语法操作比如： `disabled`、`checked`、`selected` 。

自定义属性：
- 在 html5 中推出来了专门的 `data-自定义属性`
- 在标签上一律以 `data-`开头
- 在 DOM 对象上一律以 `dataset` 对象方式获取
```html
<body>
  <!-- 自定义id属性 -->
  <div class="box"data-id="10">盒子</div>
  <script>
    //获取自定义的id属性
    const box = document.querySelector('.box')
    console.log(box.dataset.id)
  </script>
</body>
```

## 3.6 定时器
（1）使用 [[01 Javascript基础#^setInterValFunc|间歇函数]] 可以实现定时器，间歇函数返回的是表示该定时器的 id。
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>阅读注册协议</title>
</head>

<body>
  <textarea name="" id="" cols="30" rows="10">
          用户注册协议
          欢迎注册成为京东用户！在您注册过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体或下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）。
          【请您注意】如果您不同意以下协议全部或任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息，阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容，并表明您同意我们可以依据协议内容来处理您的个人信息，并同意我们将您的订单信息共享给为完成此订单所必须的第三方合作方（详情查看
      </textarea>
  <br>
  <button class="btn">我已经阅读用户协议(60)</button>
  <script>
    const btn = document.querySelector('.btn')
    btn.disabled = true
    let time = 10
    let n = setInterval(function () {
      time--
      btn.textContent = `我已经阅读用户协议(${time})`
      if (time === 0) {
        // 清除定时器
        clearInterval(n)
        btn.disabled = false
        btn.textContent = '同意'
      }
    }, 1000)
  </script>
</body>

</html>
```
## 3.7 元素尺寸与位置
（1）获取元素自身宽高（内容+padding+border 的宽高）
使用 `offsetWidth ` 和 `offsetHeight` 属性，返回数值。
获取的是可见的元素的自身宽高，如果盒子是隐藏的，获取的结果是 0。
获取元素可见部分的宽高要使用： [[02 Web APIs-DOM#^40f768|clientWidth和clientHeight]]

（2）获取元素位置
使用  `offsetLeft` 和 `offsetTop` 属性获取元素距离自己定位父级元素的左、上距离，注意 `offsetLeft` 和 `offsetTop` 是**只读属性**。
返回的值从带有定位的父级开始计算，如果都没有则以**文档左上角**为准。
```html
<!DOCTYPE html>
<html lang="en">
<head>
  ...
  <style>
    div {
      position: relative;
      width: 200px;
      height: 200px;
      background-color: pink;
      margin: 100px;
    }

    p {
      width: 100px;
      height: 100px;
      background-color: purple;
      margin: 50px;
    }
  </style>
</head>

<body>
  <div>
    <p></p>
  </div>
  <script>
    const div = document.querySelector('div')
    const p = document.querySelector('p')
    // console.log(div.offsetLeft)
    // 检测盒子的位置  最近一级带有定位的祖先元素
    console.log(p.offsetLeft)
  </script>
</body>
</html>
```
 其他方法： `Element.getBoundingClientRect()` 方法返回一个 [`DOMRect`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMRect) 对象，其提供了元素的大小及其相对于[视口](https://developer.mozilla.org/zh-CN/docs/Glossary/Viewport)的位置。
 ![[Pasted image 20240708141353.png]]

| 属性          | 作用         | 说明                                               |
|---------------|--------------|---------------------------------------------------|
| scrollTop     | 被卷去的头部 | 配合页面滚动来用，可读写。不包含border, margin，滚动条用于js |
| scrollLeft    | 被卷去的左侧 | 配合页面滚动来用，可读写。不包含border, margin，滚动条用于js |
| clientWidth   | 获得元素相对于视口可见部分宽度 | 获取元素大小，只读属性。包含 border、padding，滚动条等           |
| clientHeight  | 获得元素相对于视口可见部分高度 | 获取元素大小，只读属性。包含border、padding，滚动条等 |
| offsetWidth   | 获取元素距离自己定位父级元素的宽度 | 获取元素宽度和高度                |
| offsetHeight  | 获取元素距离自己定位父级元素的高度 | 获取元素宽度和高度             |
| offsetLeft    | 获取元素位置的时候使用 | 只读属性       |
| offsetTop     | 获取元素位置的时候使用 | 只读属性              |
```js
const backtop = document.querySelector('.backtop');
const header = document.querySelector('.header');
const sk = document.querySelector('.sk');
window.addEventListener('scroll', function () {
  let n = document.documentElement.scrollTop;
  // 当滚动到秒杀模块时，显示顶部导航栏和返回模块
  if (n >= sk.offsetTop) {
	header.style.top = 0;
	backtop.style.display = "block";
  } else {
	header.style.top = '-80px';
	backtop.style.display = "none";
  }
})
```
# 4 事件
## 4.1 事件监听
结合 DOM 使用事件时，需要为 DOM 对象添加事件监听，等待事件发生（触发）时，便立即调用一个函数。事件监听三要素：事件源、事件类型、事件回调。

`DOM元素.addEventListener('事件类型',事件回调)` 是 DOM 对象专门用来添加事件监听的方法，它的两个参数分别为【事件类型】和【事件回调】。
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>事件监听</title>
</head>
<body>
  <h3>事件监听</h3>
  <p id="text">为 DOM 元素添加事件监听，等待事件发生，便立即执行一个函数。</p>
  <button id="btn">点击改变文字颜色</button>
  <script>
    // 1. 获取 button 对应的 DOM 对象
    const btn = document.querySelector('#btn')

    // 2. 添加事件监听
    btn.addEventListener('click', function () {
      console.log('等待事件被触发...')
      // 改变 p 标签的文字颜色
      let text = document.getElementById('text')
      text.style.color = 'red'
    })

    // 3. 只要用户点击了按钮，事件便触发了！！！
  </script>
</body>
</html>
```

## 4.2 事件类型
### PC 端事件
将众多的事件类型分类可分为：鼠标事件、键盘事件、表单事件、焦点事件等。
（1）常见的基本事件
![[Pasted image 20240628154806.png]]

（2）页面加载事件
外部资源（ 如图片、外联 CSS 和 JavaScript 等） 加载完毕时触发的事件。
使用场景：a.需要等页面资源全部处理完了做一些事情；b.老代码喜欢把 script 写在 head 中，这时候直接找 dom 元素找不到。

a. 监听页面所有资源加载完毕：事件名`load`
```js
window.addEventListener('load', function() {
    // xxxxx
})
```
  注意： 不光可以监听整个页面资源加载完毕，也可以针对某个资源绑定 load 事件

b.  监听页面 DOM 加载完毕:   当初始的 HTML 文档被完全加载和解析完成之后， `DOMContentLoaded` 事件被触发，而无需等待样式表、图像等完全加载.
```js
document.addEventListener('DOMContentLoaded', function(){
	// 执行操作
})
```

（3）页面滚动事件
滚动条在滚动的时候**持续触发**的事件。
使用场景： 网页需要检测用户把页面滚动到某个区域后做一些处理，比如固定导航栏，比如返回顶部。
![[Pasted image 20240705083851.png]]
a. 监听整个页面滚动：
```js
window.addEventListener('scroll', function() {
    // xxxxx
})
```
b.获取滚动的距离：
监听某个元素的内部滚动直接给某个元素加 `scrollLeft和scrollTop` 属性即可。
这两个属性用于获取元素内容往左、往上滚出去看不到的距离，是可读写的。
尽量在 scroll 事件里面获取被卷去的距离。
**`document.documentElement`** 返回 [`document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 的根[元素]( https://developer.mozilla.org/zh-CN/docs/Web/API/Element "元素")（例如，HTML 文档的 [`<html>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/html) 元素）。
```js
div.addEventListener('scroll', function() {
    console.log(this.scrollTop)
})

// 获取页面滚动的头部距离
window.addEventListener('scroll', function() {
    const n = document.documentElement.scrollTop
    console.log(n)
})
```
 c.   `scrollTo()` 方法可把内容滚动到指定的坐标
```js
//点击返回页面顶部
const backTop = document.querySelector('#backTop')
backTop.addEventListener('click', function(){
	// 可读写
	// document.documentElement.scrollTop = 0
	window.scrollTo(0, 0)
}
```

(4) 页面尺寸事件
窗口尺寸改变的时触发的事件。
`clientWidth` 和 `clientHeight` 属性用于获取**元素可见部分**的宽高，不包含边框（border）、margin、滚动条等，但包含 padding。
![[Pasted image 20240705085300.png]]  ^40f768
```js
window.addEventListener('resize', function() {
    // 检查屏幕宽度
    let w = document.documentElement.clientWidth
    console.log(w)
})
```

(5) 表单事件
`focus` ：获得焦点。
`blur` : 失去焦点。
`change` ：当用户更改 [`<input>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input)、[`<select>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/select) 和 [`<textarea>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea) 元素的值时，`change` 事件在这些元素上触发。和 [`input`]( https://developer.mozilla.org/zh-CN/docs/Web/API/Element/input_event "input") 事件不同的是，并不是每次元素的 `value` 改变时都会触发 `change` 事件。
### M 端事件
移动端存在独有事件，如触屏（摸）事件 touch ， Android 和 IOS 都有。  
touch 对象代表一个触摸点。触摸点可能是一根手指，也可能是一根触摸笔。触屏事件可响应用户手指（ 或触控笔  ） 对屏幕或者触控板操作。

| 触屏 touch 事件 | 说明                          |
| --------------- | ----------------------------- |
| touchstart      | 手指触摸到一个DOM元素时触发   |
| touchmove       | 手指在一个DOM元素上滑动时触发 |
| touchend        | 手指从一个DOM元素上移开时触发 |
```js
var box = document.querySelector('.box');
box.addEventListener('touchstart', function (e) {
  console.log('touchstart');
});
box.addEventListener('touchmove', function (e) {
  console.log('touchmove');
});
box.addEventListener('touchend', function (e) {
  console.log('touchend');
});
```
## 4.3 事件对象
任意事件类型被触发时与事件相关的信息会被以对象的形式记录下来，称这个对象为事件对象。
（1）语法：
- 在事件**绑定的回调函数的第一个参数就是事件对象**
- 一般命名为`event`、`ev`、`e`  
```html
<body>
  <h3>事件对象</h3>
  <p>任意事件类型被触发时与事件相关的信息会被以对象的形式记录下来，我们称这个对象为事件对象。</p>
  <hr>
  <div class="box"></div>
  <script>
    // 获取 .box 元素
    const box = document.querySelector('.box')

    // 添加事件监听
    box.addEventListener('click', function (e) {
      // 事件回调函数的第1个参数即所谓的事件对象
      console.log(e)
    })
  </script>
</body>
```
（2）事件对象的常用属性
`ev.type` 当前事件的类型
`ev.clientX/clientY` 光标相对浏览器可见窗口左上角的位置
`ev.offsetX/offsetY` 光标相于当前 DOM 元素左上角的位置
`ev.target` : 事件的目标元素。
`ev.pageX` ：事件在页面中的 X 坐标（常用于鼠标移动、点击事件等）。
（3）事件对象的常用方法
`ev.stopPropagation()` ：阻止事件冒泡
`ev.preventDefault()` : 阻止元素的默认行为
## 4.4 环境对象
环境对象指的是函数内部特殊的变量 `this` ，它代表着当前函数运行时所处的环境。
```js
<script>
  // 声明函数
  function sayHi() {
    // this 是一个变量
    console.log(this);
  }

  // 声明一个对象
  let user = {
    name: '张三',
    sayHi: sayHi // 此处把 sayHi 函数，赋值给 sayHi 属性
  }
  
  let person = {
    name: '李四',
    sayHi: sayHi
  }

  // 直接调用，this变量的值为window
  // 跟使用window.函数()的调用等价
  sayHi() // window
  window.sayHi() // window

  // 做为对象方法调用
  user.sayHi()// this变量的值为user
  person.sayHi()// this变量的值为person
</script>
```
结论：
1. `this` 本质上是一个变量，数据类型为对象
2. 函数的调用方式不同 `this` 变量的值也不同
3. 【谁调用 `this` 就是谁】是判断 `this` 值的粗略规则
4. 函数直接调用时, 如直接调用 `window.sayHi()` ，此时 `this` 的值为 `window`

## 4.5 回调函数
如果将函数 A 做为参数传递给函数 B 时，我们称函数 A 为**回调函数**。
回调函数本质还是函数，只不过把它当成参数使用。
使用匿名函数做为回调函数比较常见。

## 4.6 DOM 事件模型的级别
1. **DOM0 级事件**：
    - 这是最基本的事件模型，它不提供事件冒泡或捕获的概念。
    - 事件处理程序通常通过直接将函数赋值给元素的`onclick`属性来实现。
    - 例如：`element.onclick = function() { ... };`
2. **DOM1级事件**：
    - 引入了**事件冒泡**的概念，即事件从最具体的元素开始，逐级向上传播到文档的根元素。
    - 事件处理程序可以通过`addEventListener`方法添加，也可以通过`removeEventListener`方法移除。
    - 允许设置事件的类型、处理函数和是否捕获事件的标志。
    - 例如：`element.addEventListener('click', function() { ... }, false);`
3. **DOM2级事件**：
    - 在DOM1级事件的基础上增加了**事件捕获**的概念，允许事件处理程序在事件冒泡之前被调用。
    - 事件捕获和事件冒泡可以同时使用，提供了更灵活的事件处理方式。
    - 引入了更多的事件类型，如`load`、`unload`等。
    - 还提供了事件对象的更多属性和方法，如`stopPropagation()`、`preventDefault()`等。
    - 例如：`element.addEventListener('click', function(event) { event.stopPropagation(); }, true);` 这里的`true`表示使用捕获模式。
# 5 事件流
事件流指的是事件完整执行过程中的流动路径。
  ![[Pasted image 20240701203020.png]]
## 5.1 捕获和冒泡
（1）定义
如上图所示，任意事件被触发时总会经历两个阶段：【捕获阶段】和【冒泡阶段】。简言之，捕获阶段是【从父到子】的传导过程，冒泡阶段是【从子向父】的传导过程。
当某个元素的事件被触发时，事件总是会先经过其祖先才能到达当前元素，然后再由当前元素向祖先传递，事件在流动的过程中遇到相同的事件便会被触发。
（2）事件执行顺序的两种模式
事件的执行顺序是可控制的，即可以在捕获阶段被执行，也可以在冒泡阶段被执行。如果事件是在冒泡阶段执行的，我们称为冒泡模式，**它会先执行子盒子事件再去执行父盒子事件，默认是冒泡模式**。如果事件是在捕获阶段执行的，我们称为捕获模式，它会**先执行父盒子事件再去执行子盒子事件。**
（3）具体使用：
-  `addEventListener` 第 3 个参数决定了事件是在捕获阶段触发还是在冒泡阶段触发。
-  `addEventListener` 第 3 个参数为 `true` 表示捕获阶段触发，`false` 表示冒泡阶段触发，默认值为 `false`。
- 事件流只会在父子元素**具有相同事件类型时才会产生影响**。
- 绝大部分场景都采用默认的冒泡模式（其中一个原因是早期 IE 不支持捕获）。
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>事件流</title>
    <style>
        .father {
            width: 200px;
            height: 200px;
            background-color: red;
        }

        .son {
            width: 100px;
            height: 100px;
            background-color: blue;
        }
    </style>
</head>

<body>
    <div class="father">
        <div class="son"></div>
    </div>
    <script>
	    // 冒泡模式
	    // 点击son时，先打印son，再打印father
        const father = document.querySelector('.father');
        const son = document.querySelector('.son');
        father.addEventListener('click', function () {
            console.log('father');
        });
        son.addEventListener('click', function () {
            console.log('son');
        });
    </script>
</body>
</html>
```

## 5.2 阻止冒泡
因为默认有冒泡模式的存在，所以容易导致事件影响到父级元素。若想把事件就限制在当前元素内，就需要阻止事件冒泡。
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>事件流</title>
    <style>
        .father {
            width: 200px;
            height: 200px;
            background-color: red;
        }

        .son {
            width: 100px;
            height: 100px;
            background-color: blue;
        }
    </style>
</head>

<body>
    <div class="father">
        <div class="son"></div>
    </div>
    <script>
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        father.addEventListener('click', function () {
            console.log('father');
        });
        son.addEventListener('click', function (ev) {
            console.log('son');
            // 阻止事件冒泡
            ev.stopPropagation();
        });
    </script>
</body>

</html>
```
**事件对象**中的 `ev.stopPropagation` 方法，专门用来阻止事件冒泡。此方法可以阻断事件流动传播，不光在冒泡阶段有效，捕获阶段也有效。

>鼠标经过事件：
>mouseover 和 mouseout 会有冒泡效果，
>mouseenter 和 mouseleave 没有冒泡效果 (推荐使用)。

## 5.3 阻止元素默认行为
某些情况下需要阻止默认行为的发生，如阻止链接的跳转、表单域跳转。
语法：`事件对象.preventDefault()`。
```html
<form action="http://www.baidu.com">
	<input type="submit" value="提交">
</form>
<script>
	const form = document.querySelector('form')
	form.addEventListener('click', function (e) {
		//阻止表单默认提交行为
		e.preventDefault()
	})
</script>
```
## 5.4 解绑事件
(1)L0 级事件，即  on 事件方式，直接使用 null 覆盖偶就可以实现事件的解绑。
```js
//绑定事件
btn.onclick = function () {
  alter("点击了")
}
// 解绑事件
btn.onclick = null
```
(2)  addEventListener 方式，必须使用：  
`removeEventListener(事件类型, 事件处理函数, [获取捕获或者冒泡阶段])`
```js
function fn（）{
  alert('点击了')
}
//绑定事件
btn.addEventListener('click',fn)
//解绑事件
btn.removeEventListener('click',fn)
```
**注意：匿名函数无法被解绑。**

(3) 两种注册事件的区别
- 传统 on 注册（L0）  
	- 同一个对象, 后面注册的事件会覆盖前面注册 (同一个事件) 
	- 直接使用 `null` 覆盖实现事件的解绑  
	- 都是冒泡阶段执行的  
- 事件监听注册（L2）  
	- 语法: `addEventListener (事件类型, 事件处理函数, 是否使用捕获)  `
	- 后面注册的事件**不会覆盖**前面注册的事件 (同一个事件)  
	- 可以通过第三个参数去确定是在冒泡或者捕获阶段执行  
	- 必须使用 `removeEventListener (事件类型, 事件处理函数, 获取捕获或者冒泡阶段)`
	- 匿名函数无法被解绑

## 5.5 事件委托
将事件绑定到父元素上，通过事件冒泡的原理，**让父元素代理子元素触发事件**。
优点：减少内存消耗，提高性能。
原理：  事件委托其实是利用事件冒泡的特点。给父元素注册事件，当我们触发子元素的时候，会冒泡到父元素身上，从而触发父元素的事件。
适用场景：子元素数量较多，且子元素的事件类型相同。
实现：事件对象中的属性 `target` 或 `srcElement` 属性表示真正触发事件的元素，它是一个元素类型的节点。`事件对象.target.tagName` 可以获取真正触发事件的子元素名称。
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>事件委托</title>
    <style>
        li {
            cursor: pointer;
        }

        .active {
            color: red;
        }
    </style>
</head>

<body>
    <ul>
        <li>第1个孩子</li>
        <li>第2个孩子</li>
        <li>第3个孩子</li>
        <li>第4个孩子</li>
        <li>第5个孩子</li>
    </ul>
    <script>
        const ul = document.querySelector('ul');
        ul.addEventListener('click', function (e) {
            // console.log(e)
            // 获取事件对象的目标元素
            if (e.target.tagName === 'LI') {
                e.target.classList.toggle('active');
            }
        });
    </script>
</body>

</html>
```

# 6.日期对象
ECMAScript 中内置了获取系统时间的对象 Date，使用 Date 时与之前学习的内置对象 console 和 Math 不同，**它需要借助 new 关键字才能使用**。
**时间戳**： 1970 年 01 月 01 日 00 时 00 分 00 秒起至现在的总秒数或毫秒数，它是一种特殊的计量时间的方式。注：ECMAScript 中时间戳是**以毫秒**计的。
**日期对象的方法**：

| 方法            | 作用        | 说明         |
| ------------- | --------- | ---------- |
| `getFullYear` | 获得年份      | 获取四位年份     |
| `getMonth`    | 获得月份      | 取值为0~11    |
| `getDate`     | 获取月份中的每一天 | 不同月份取值也不相同 |
| `getDay`      | 获取星期      | 取值为0~6     |
| `getHours`    | 获取小时      | 取值为0~23    |
| `getMinutes`  | 获取分钟      | 取值为0~59    |
| `getSeconds`  | 获取秒       | 取值为0~59    |
| `getTime`     | 获取时间戳     |            |

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .countdown {
      width: 240px;
      height: 305px;
      text-align: center;
      line-height: 1;
      color: #fff;
      background-color: brown;
      /* background-size: 240px; */
      /* float: left; */
      overflow: hidden;
    }

    .countdown .next {
      font-size: 16px;
      margin: 25px 0 14px;
    }

    .countdown .title {
      font-size: 33px;
    }

    .countdown .tips {
      margin-top: 80px;
      font-size: 23px;
    }

    .countdown small {
      font-size: 17px;
    }

    .countdown .clock {
      width: 142px;
      margin: 18px auto 0;
      overflow: hidden;
    }

    .countdown .clock span,
    .countdown .clock i {
      display: block;
      text-align: center;
      line-height: 34px;
      font-size: 23px;
      float: left;
    }

    .countdown .clock span {
      width: 34px;
      height: 34px;
      border-radius: 2px;
      background-color: #303430;
    }

    .countdown .clock i {
      width: 20px;
      font-style: normal;
    }
  </style>
</head>

<body>
  <div class="countdown">
    <p class="next">今天是2222年2月22日</p>
    <p class="title">下班倒计时</p>
    <p class="clock">
      <span id="hour">00</span>
      <i>:</i>
      <span id="minutes">25</span>
      <i>:</i>
      <span id="scond">20</span>
    </p>
    <p class="tips">18:30:00下班</p>
  </div>
  <script>
    const hour = document.getElementById('hour');
    const minutes = document.getElementById('minutes');
    const scond = document.getElementById('scond');
    const next = document.querySelector('.next');

    function getMyTime() {
      const now = new Date();
      // 获取当前时间戳
      const nowTime = now.getTime();
      // 获取今天下班时间戳
      const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 30, 0).getTime();
      next.innerText = `今天是${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;

      let time = targetTime - nowTime;
      let h = Math.floor(time / 1000 / 60 / 60);
      let m = Math.floor(time / 1000 / 60 % 60);
      let s = Math.floor(time / 1000 % 60);
      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;
      hour.innerText = h;
      minutes.innerText = m;
      scond.innerText = s;
    }

    getMyTime();
    setInterval(getMyTime, 1000);
  </script>
</body>

</html>
```

# 7.DOM 节点
## 7.1 插入节点
在已有的 DOM 节点中插入新的 DOM 节点时，需要关注两个关键因素：首先要创建新的 DOM 节点，其次在哪个位置插入这个节点。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>测试</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: #f0f0f0;
            margin-top: 20px;
        }

        .info {
            color: blue;
        }
    </style>
</head>

<body>
    <h3>插入节点</h3>
    <p>在现有 dom 结构基础上插入新的元素节点</p>
    <hr>
    <!-- 普通盒子 -->
    <div class="box"></div>
    <!-- 点击按钮向 box 盒子插入节点 -->
    <button class="btn">插入节点</button>
    <script>
        // 点击按钮，在网页中插入节点
        const btn = document.querySelector('.btn')
        btn.addEventListener('click', function () {
            // 创建一个新的 DOM 元素节点
            const p = document.createElement('p')
            p.innerText = '创建的新的p标签'
            p.className = 'info'

            // 复制原有的 DOM 节点
            const p2 = document.querySelector('p').cloneNode(true)
            p2.style.color = 'red'

            // 插入盒子 box 盒子
            document.querySelector('.box').appendChild(p)
            document.querySelector('.box').appendChild(p2)
        })
    </script>
</body>
```
下图中灰色盒子内部为插入的节点：
![[Pasted image 20241023094550.png]]


结论：
- `document.createElement('标签名')` ： 动态创建任意 DOM 节点。
- `元素.cloneNode(deep)` : 有时候需要**先复制现有的 DOM 节点，然后把复制的节点插入到指定元素内部**。参数 deep 控制是否采用深度克隆，如果为 `true`，则该节点的所有后代节点也都会被克隆，如果为 `false`，则只克隆该节点本身。由于不同 DOM 规范该参数默认值不同，为了兼容性，建议都写上参数。
- `父元素.appendChild(要插入的元素)` ：在父元素末尾（结束标签前）插入节点。
- `父元素.insertBefore(要插入的元素, 在哪个子元素前面)` ：在父节点中任意子节点之前插入新节点。
```html
<body>
  <h3>插入节点</h3>
  <p>在现有 dom 结构基础上插入新的元素节点</p>
	<hr>
  <button class="btn1">在任意节点前插入</button>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
  <script>
    // 点击按钮，在已有 DOM 中插入新节点
    const btn1 = document.querySelector('.btn1')
    btn1.addEventListener('click', function () {

      // 第 2 个 li 元素
      const relative = document.querySelector('li:nth-child(2)')

      // 1. 动态创建新的节点
      const li1 = document.createElement('li')
      li1.style.color = 'red'
      li1.innerText = 'Web APIs'

      // 复制现有的节点
      const li2 = document.querySelector('li:first-child').cloneNode(true)
      li2.style.color = 'blue'

      // 2. 在 relative 节点前插入
      document.querySelector('ul').insertBefore(li1, relative)
      document.querySelector('ul').insertBefore(li2, relative)
    })
  </script>
</body>
```
下图中红色和蓝色为新插入的节点：
![[Pasted image 20241023094251.png]]
## 7.2 删除节点
删除现有的 DOM 节点，**只能由父节点删除子节点**。
语法：`父元素.removeChild(要删除的元素)`

```html
<body>
  <!-- 点击按钮删除节点 -->
  <button>删除节点</button>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Web APIs</li>
  </ul>

  <script>
    const btn = document.querySelector('button')
    btn.addEventListener('click', function () {
      // 获取 ul 父节点
      let ul = document.querySelector('ul')
      // 待删除的子节点
      let lis = document.querySelectorAll('li')

      // 删除节点
      ul.removeChild(lis[0])
    })
  </script>
</body>
```

注意：
-  `removeChild` 删除节点时一定是由父子关系。如不存在父子关系则删除不成功。
- 删除节点和隐藏节点（ `display:none`） 的区别： 隐藏节点还是存在的，但是删除，则从 html 中删除节点。

## 7.3 查找节点

DOM 树中的任意节点都不是孤立存在的，它们要么是父子关系，要么是兄弟关系，因此，我们可以依据节点之间的关系查找节点。
（1）查找某元素的父节点：`子元素.parentNode`，返回最近一级的父节点，找不到返回为 null。
```html
<body>
  <table>
    <tr>
      <td width="60">序号</td>
      <td>课程名</td>
      <td>难度</td>
      <td width="80">操作</td>
    </tr>
    <tr>
      <td>1</td>
      <td><span>HTML</span></td>
      <td>初级</td>
      <td><button>变色</button></td>
    </tr>
    <tr>
      <td>2</td>
      <td><span>CSS</span></td>
      <td>初级</td>
      <td><button>变色</button></td>
    </tr>
    <tr>
      <td>3</td>
      <td><span>Web APIs</span></td>
      <td>中级</td>
      <td><button>变色</button></td>
    </tr>
  </table>
  <script>
    // 获取所有 button 节点，并添加事件监听
    const buttons = document.querySelectorAll('table button')
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        // console.log(this.parentNode); // 父节点 td
        // console.log(this.parentNode.parentNode); // 爷爷节点 tr
        this.parentNode.parentNode.style.color = 'red'
      })
    }
  </script>
</body>
```
（2) 查找某元素的子节点：
- `父元素.childNodes` ：获取所有的子节点，包括文本节点（空格、换行）、注释节点等。回车换行会被认为是空白文本节点。
-  `父元素.children` ：**仅获得所有子节点中的元素节点**，返回为一个伪数组。
```html
<body>
  <button class="btn1">所有的子节点</button>
  <!-- 获取 ul 的子节点 -->
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript 基础</li>
    <li>Web APIs</li>
  </ul>
  <script>
    const btn1 = document.querySelector('.btn1')
    btn1.addEventListener('click', function () {
      // 父节点
      const ul = document.querySelector('ul')

      // 所有的子节点
      console.log(ul.childNodes)
      // 只包含元素子节点
      console.log(ul.children)
    })
  </script>
</body>
```
控制台中的输出如下：
![[Pasted image 20241023095059.png]]

(3) 查找兄弟节点：
- `previousElementSibling` 获取前一个节点，以相对位置查找节点，实际应用中非常灵活。
- `nextElementSibling` 获取后一个节点，以相对位置查找节点，实际应用中非常灵活。

```html
<body>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript 基础</li>
    <li>Web APIs</li>
  </ul>
  <script>
    // 获取所有 li 节点
    const lis = document.querySelectorAll('ul li')

    // 对所有的 li 节点添加事件监听
    for(let i = 0; i < lis.length; i++) {
      lis[i].addEventListener('click', function () {
        // 前一个节点
        console.log(this.previousSibling)
        // 下一下节点
        console.log(this.nextSibling)
      })
    }
  </script>
</body>
```

案例：在关闭广告二维码的时候，当在子元素 x 上点击时，获取其父节点，关闭其父节点即可。
![[Pasted image 20240716090321.png]]

## 7.4 重绘和回流
（1）浏览器界面渲染的流程如下：
![[Pasted image 20241023095945.png]]
- 解析（ Parser） HTML，生成 DOM 树 (DOM Tree)  
- 同时解析（ Parser） CSS，生成样式规则 (Style Rules)  
- 根据 DOM 树和样式规则，生成渲染树 (Render Tree)  
- 进行布局 Layout (回流/重排): 根据生成的渲染树，得到节点的几何信息（ 位置，大小） 
- 进行绘制 Painting (重绘): 根据计算和获取的信息进行整个页面的绘制  
- Display: 展示在页面上

（2）回流（重排）
  当 Render Tree 中部分或者全部元素的尺寸、结构、布局等发生改变时，浏览器就会重新渲染部分或全部文档的过程称为回流。
（3）重绘
  由于节点 (元素) 的样式的改变并不影响它在文档流中的位置和文档布局时 (比如： color、background-color、 outline 等), 称为重绘。
**重绘不一定引起回流， 而回流一定会引起重绘。**
# 8 JS 插件
## 8.1 swiper 插件
主要用于实现滑动、轮播图等。
查看 APi 文档, 去配置自己的插件，参考：[中文api - Swiper中文网](https://www.swiper.com.cn/api/index.html)
具体使用方法：
（1）至官网下载相应的 swiper 文件
[下载Swiper - Swiper中文网](https://www.swiper.com.cn/download/index.html)
（2）下载好之后，解压缩，demo 文件夹中有各种示例。将需要使用的用浏览器打开，在浏览器中查看源代码。
![[Pasted image 20240722085124.png]]
（3）注意查看源代码中引入 swiper 的 css 文件和 js 文件部分，将其复制到自己的 html 文件中。
```html
<!-- Link Swiper's CSS -->
<link rel="stylesheet" href="../swiper-bundle.min.css" />

<!-- Swiper JS -->
<script src="../swiper-bundle.min.js"></script>
```
(4) 将` demo styles` 部分的样式复制到自己的 html 文件中。
```html
<!-- Demo styles -->
<style>
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
```
(5) 将 `Swiper` 部分的代码复制到自己的 html 文件中，里面的 swiper-slide 可以根据自己的需要加入图片等元素。
```html
<!-- Swiper -->
<div class="swiper mySwiper">
<div class="swiper-wrapper">
  <div class="swiper-slide">
	<a href="#"><img src="./uploads/banner_1.png" alt=""></a>
  </div>
  <div class="swiper-slide">
	<a href="#"><img src="./uploads/banner_1.png" alt=""></a>
  </div>
  <div class="swiper-slide">
	<a href="#"><img src="./uploads/banner_1.png" alt=""></a>
  </div>
</div>
<div class="swiper-pagination"></div>
</div>
```
(6) 对 swiper 进行实例化，将 `Initialize swiper` 部分的代码复制到自己的 html 文件中，其它属性可以查看 api 文档进行设置。如设置自动切换。
```html
<!-- Initialize Swiper -->
<script>
var swiper = new Swiper(".mySwiper", {
  pagination: {
	el: ".swiper-pagination",
  },
  autoplay: {
	delay: 3000,
	stopOnLastSlide: false,
	disableOnInteraction: false,
  },
});
</script>
```
（7）如果需要改变其它样式，可以通过“检查”相应的元素进行设置。

> 案例：电商放大镜，参考笔记仓库 `前端/前端代码/js-(webapi)电商放大镜`。