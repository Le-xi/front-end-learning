# 1 js 组成和执行机制
## 1.1 js 组成
- ECMAScript:
  - 规定了 js 基础语法核心知识。
  - 比如：变量、分支语句、循环语句、对象等等
- Web APIs :
  - DOM   文档对象模型，定义了一套操作 HTML 文档的 API
  - BOM   浏览器对象模型，定义了一套操作浏览器窗口的 API
## 1.2 执行机制
（1）同步和异步
JavaScript 语言的一大特点就是**单线程**，同一个时间只能做一件事。Javascript 是为处理页面中用户的交互，以及操作 DOM 而诞生的。比如我们对某个 DOM 元素进行添加和删除操作，不能同时进行。应该先进行添加，之后再删除。
单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。因此，如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。
利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程。于是，**JS 中出现了同步和异步**。
（2）JS 执行机制
同步任务：都在主线程上执行，形成一个**执行栈**。
异步任务：通过回调函数塑像。有三种类型：
- 普通事件（`click()` 、`resize()` 等）
- 资源加载（`load` 、`error` 等）
- 定时器（`setInterval`、`setTimeout` 等）

JS 执行遵循的机制：
1. 先执行执行栈中的同步任务。 
2. 异步任务放入任务队列中。 
3. 一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行。
![](images/Pasted_image_20241025083243.png)
主线程不断的重复获得任务、执行任务、再获取任务、再执行的机制被称为**事件循环 (event loop)**。
```js
// 判断下列代码的输出
console.log(1) 
document.addEventListener('click',function() {
	console.log(4)
}) 
console.log(2) 
setTimeout(function(){
	console.log(3)
	},3000)
```
由于 JavaScript 是单线程的，并且执行代码时会使用调用栈，所以代码是同步执行的，直到遇到异步操作（如事件监听器和定时器）。在同步代码执行完毕后，JavaScript 运行时会检查消息队列，看是否有待处理的事件或定时器回调。
`console.log(1)` 和 `console.log(2)` 是同步代码，执行完毕后再去判断点击事件和延时器。
因此，输出分两种情况：
- 用户在 3s 内点击页面，则输出 `1243`
- 用户在 3s 后再点击页面，则输出 `1234`
# 2 window 对象
**BOM** (Browser Object Model ) 是浏览器对象模型。
- window 对象是一个全局对象，也可以说是 JavaScript 中的顶级对象
- 像 ` document`、`alert()`、`console.log()` 都是 window 的属性，基本 BOM 的属性和方法都是属于 window 的。
- 所有通过 var 定义在全局作用域中的变量、函数都会变成 window 对象的属性和方法
- window 对象下的属性和方法调用的时候可以省略 window。
- `window.confirm(message)` ：弹出确认窗口，message 为提示消息字符串，返回布尔值。
![](images/Pasted_image_20241025081523.png)
## 2.1 定时器-延迟函数
JavaScript 内置的用来延迟执行的函数，叫 `setTimeout`，仅执行一次
**语法：**
~~~JavaScript
setTimeout(回调函数, 延迟时间)
~~~

间歇函数 `setInterval` : 每隔一段时间就执行一次， ,平时省略 window

清除延时函数：
~~~JavaScript
clearTimeout(timerId)
~~~

>注意点
>1. 延时函数需要等待, 所以后面的代码先执行
>2. 返回值是一个正整数，表示定时器的编号

~~~html
<body>
  <script>
    // 定时器之延迟函数

    // 1. 开启延迟函数
    let timerId = setTimeout(function () {
      console.log('我只执行一次')
    }, 3000)

    // 1.1 延迟函数返回的还是一个正整数数字，表示延迟函数的编号
    console.log(timerId)
    // 1.2 延迟函数需要等待时间，所以下面的代码优先执行

    // 2. 关闭延迟函数
    clearTimeout(timerId)

  </script>
</body>
~~~
## 2.2 location 对象 
location (地址) 是一个对象，拆分并保存了 URL 地址的各个组成部分。

| 属性/方法     | 说明                            |
| --------- | ----------------------------- |
| href      | 属性，获取完整的 URL 地址，赋值时用于地址的跳转    |
| search    | 属性，获取地址中携带的参数，符号 ？后面部分        |
| hash      | 属性，获取地址中的啥希值，符号 # 后面部分        |
| reload () | 方法，用来刷新当前页面，传入参数 true 时表示强制刷新 |

~~~html
<body>
  <form>
    <input type="text" name="search"> <button>搜索</button>
  </form>
  <a href="#/music">音乐</a>
  <a href="#/download">下载</a>

  <button class="reload">刷新页面</button>
  <script>
    // location 对象  
    // 1. href属性 （重点） 得到完整地址，赋值则是跳转到新地址
    console.log(location.href)
    // location.href = 'http://www.itcast.cn'

    // 2. search属性  得到 ? 后面的地址 
    console.log(location.search)  // ?search=笔记本

    // 3. hash属性  得到 # 后面的地址
    console.log(location.hash)

    // 4. reload 方法  刷新页面
    const btn = document.querySelector('.reload')
    btn.addEventListener('click', function () {
      // location.reload() // 页面刷新
      location.reload(true) // 强制页面刷新 ctrl+f5
    })
  </script>
</body>
~~~

## 2.3 navigator 对象
navigator 对象记录了浏览器自身的相关信息。
常用属性和方法：
- 通过 userAgent 检测浏览器的版本及平台
~~~javascript
// 检测 userAgent（浏览器信息）
(function () {
  const userAgent = navigator.userAgent
  // 验证是否为Android或iPhone
  const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
  const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
  // 如果是Android或iPhone，则跳转至移动站点
  if (android || iphone) {
    location.href = 'http://m.itcast.cn'
  }})();
~~~

## 2.4 histroy 对象
history (历史) 对象主要管理历史记录，该对象与浏览器地址栏的操作相对应，如前进、后退等。
history 对象一般在实际开发中比较少用，但是会在一些 OA 办公系统中见到。
![](images/Pasted_image_20241025081909.png)

常见方法：

| 方法          | 作用                    |
| ----------- | --------------------- |
| `back()`    | 退回上一个页面               |
| `forward()` | 前进至上一个页面              |
| `go(n)`     | 前进/后退 n 个页面，正值前进，负值后退 |

~~~html
<body>
  <button class="back">←后退</button>
  <button class="forward">前进→</button>
  <script>
    // histroy对象

    // 1.前进
    const forward = document.querySelector('.forward')
    forward.addEventListener('click', function () {
      // history.forward() 
      history.go(1)
    })
    // 2.后退
    const back = document.querySelector('.back')
    back.addEventListener('click', function () {
      // history.back()
      history.go(-1)
    })
  </script>
</body>

~~~

# 3 本地存储
本地存储可将数据存储在本地浏览器中，读取方便，**页面刷新后数据不会丢失**，实现数据持久化。
容量较大，sessionStorage 和 localStorage 约 5M 左右
##  3.1 localStorage
**作用:** 数据可以长期保留在本地浏览器中，刷新页面和关闭页面，数据也不会丢失
**特性**：以**键值对**的形式存储，并且存储的是**字符串**，省略了 window


~~~html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>本地存储-localstorage</title>
</head>

<body>
  <script>
    // 本地存储 - localstorage 存储的是字符串 
    // 1. 存储数据
    localStorage.setItem('age', 18)

    // 2. 获取数据
    console.log(typeof localStorage.getItem('age'))

    // 3. 删除数据
    localStorage.removeItem('age')
  </script>
</body>

</html>
~~~
浏览器查看本地存储：
![](images/Pasted_image_20241025084240.png)
## 3.2 sessionStorage
特性：
- 用法跟 localStorage 基本相同
- 区别是：当页面浏览器被关闭时，存储在 sessionStorage 的数据会被清除。

存储：`sessionStorage. setItem (key, value)`
获取：`sessionStorage. getItem (key)`
删除：`sessionStorage. removeItem (key)`

## 3.3 localStorage 存储复杂数据类型
**问题**：本地只能存储字符串, 无法存储复杂数据类型.
**解决**：需要将复杂数据类型转换成 JSON 字符串, 再存储到本地。
**语法**：使用 `JSON.stringify(复杂数据类型)` 将复杂的数据类型（如对象）转换为 json 字符串，使用 `JSON.parse()` 将 JSON 字符串解析为复杂数据类型。

JSON 字符串：

- 首先是 1 个字符串
- 属性名使用双引号引起来，不能单引号
- 属性值如果是字符串型也必须双引号

~~~html
<body>
  <script>
    // 本地存储复杂数据类型
    const goods = {
      name: '小米',
      price: 1999
    }
    // localStorage.setItem('goods', goods)
    // console.log(localStorage.getItem('goods'))

    // 1. 把对象转换为JSON字符串  JSON.stringify
    localStorage.setItem('goods', JSON.stringify(goods))
    // console.log(typeof localStorage.getItem('goods'))

	// 2. 把JSON字符串转换为对象  JSON.parse
    console.log(JSON.parse(localStorage.getItem('goods')))
  </script>
</body>
~~~

## 3.4 JSON 
（1）介绍
JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，易于人阅读和编写，同时也易于机器解析和生成。它基于 JavaScript 的一个子集，但是独立于语言，许多编程语言都支持 JSON 格式的数据交换。

JSON字符串是JSON格式的文本字符串，它由**键值对**组成，键和值之间用冒号分隔，键值对之间用逗号分隔。一个JSON对象通常以花括号`{}`包围，而JSON数组则以方括号`[]`包围。

程序中的 Json 对象、Json 变量则根据不同编程语言、不同 Json 库会有操作、表达上的差异。JavaScript 和 Python 原生支持 JSON，Java 和 C++需要引入相关库。

（2）规范
支持的 6 种值类型包括 4 种常规类型和 2 种允许内嵌类型，一个 JSON 文本可以仅含有一个字符串或一个数字。
4 种常规类型如下，不允许再内嵌其他值：
- 字符串：`"test string"`
- 数值：`1` 、`0`、`-1`、`0.2`、`9999`
- 布尔值：`true`、`false`
- 空值：`null`
2 种荀彧内嵌类型：
- 对象：`{"key 1":"value 2", "key 2":"value 2"}`，键值对的**键必须为字符串**，值可以是 6 种值类型中的任意一种，且无需统一类型。最后一个键值对后面不能添加 `,`。
- 数组：`["value1", "value2", "value3"]`，用 `,` 隔开多个值，最后一个值后面不能添加 `,`。值可以是 6 种值类型中的任意一种，多个值无需统一类型。

得益于对象、数组这两种值类型，让 Json 文本可以表示复杂的树形数据。为了提升 Json 文本扩展性，一般采用对象或数组作为最外层结构。Json 标准**没有**对数组/对象长度、内嵌层深度提出限制。文本种多余的空格和换行不影响实质性内容。

> 综合案例：常见仓库文件夹：前端代码\（本地存储版）学生信息管理表

# 4 正则表达式
JS 中的 [[正则表达式]] 也是对象，大部分语法参考 Python 中的正则表达式即可。注意有几点不同：
## 4.1 js 正则的特性
（1）量词 `\w` 和 `\W`
js 中的 `\w` 相当于 `[A-Za-z0-9_]`，表示任意字母、数字和下划线，不包括汉字等 unicode 字符。
js 中的 `\W` 相当于 `[^A-Za-z0-9_]`，表示任意除字母、数字和下划线外的字符，可以匹配到 unicode 字符。
（2）JS 中的花括号量词的逗号左右两侧**千万不要出现空格**。
## 4.2 正则对象的使用方法
`regObj.test()`   用来测试正则表达式与指定的字符串是否匹配，如果正则表达式与指定的字符串匹配，返回 `true`，否则 `false`。
~~~html
<body>
  <script>
    // 正则表达式的基本使用
    const str = 'web前端开发'
    // 1. 定义规则
    const reg = /web/

    // 2. 使用正则  test()
    console.log(reg.test(str))  // true  如果符合规则匹配上则返回true
    console.log(reg.test('java开发'))  // false  如果不符合规则匹配上则返回 false
  </script>
</body>
~~~
`string.replace(regObj, 替换后的字符串)` 替换方法，可以完成字符的替换。不加修饰符 `g` 时，仅对匹配到的第一个模式进行替换。
~~~html
<body>
  <script>
    // 替换和修饰符
    const str = '欢迎大家学习前端，相信大家一定能学好前端，都成为前端大神'
    // 1. 替换  replace  需求：把前端替换为 web
    // 1.1 replace 返回值是替换完毕的字符串
    const strEnd = str.replace(/前端/, 'web')
    // 输出：欢迎大家学习web，相信大家一定能学好前端，都成为前端大神
  </script>
</body>
~~~

修饰符约束正则执行的某些细节行为，如是否区分大小写、是否支持多行匹配等
- i 是单词 ignore 的缩写，正则匹配时字母不区分大小写
- g 是单词 global 的缩写，匹配所有满足正则表达式的结果
~~~html
<body>
  <script>
    // 替换和修饰符
    const str = '欢迎大家学习前端，相信大家一定能学好前端，都成为前端大神'
    // 1. 替换  replace  需求：把前端替换为 web
    // 1.1 replace 返回值是替换完毕的字符串
    // const strEnd = str.replace(/前端/, 'web') 只能替换一个

    // 2. 修饰符 g 全部替换
    const strEnd = str.replace(/前端/g, 'web')
    console.log(strEnd) 
    // 输出：欢迎大家学习web，相信大家一定能学好web，都成为web大神
  </script>
</body>
~~~

## 4.3  正则插件
![](images/Pasted_image_20241028101715.png)



