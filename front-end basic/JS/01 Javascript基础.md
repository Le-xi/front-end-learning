B 站视频： [黑马程序员前端 JavaScript 入门到精通全套视频教程，javascript 核心进阶 ES6 语法、API、js 高级等基础知识和实战教程](https://www.bilibili.com/video/BV1Y84y1L7Nn/)

# 1 引入方式

JavaScript 程序不能独立运行，它需要被嵌入 HTML 中，然后浏览器才能执行 JavaScript 代码。通过  `script`  标签将 JavaScript 代码引入到 HTML 中，有两种方式：

## 1.1 内部方式

通过  `script`  标签包裹 JavaScript 代码。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript 基础 - 引入方式</title>
  </head>
  <body>
    <!-- 内联形式：通过 script 标签包裹 JavaScript 代码 -->
    <script>
      alert("嗨，欢迎来传智播学习前端技术！"); <!--弹出页面警告框-->
    </script>
  </body>
</html>
```

## 1.2 外部形式

一般将 JavaScript 代码写在独立的以 . js 结尾的文件中，然后通过  `script`  标签的  `src`  属性引入。通常放在 HTML 页面底部。
如果 script 标签使用 src 属性引入了某 . js 文件， `script` **标签内部的代码会被忽略**。

```js
// demo.js
document.write("嗨，欢迎来传智播学习前端技术！");
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript 基础 - 引入方式</title>
  </head>
  <body>
    <!-- 外部形式：通过 script 的 src 属性引入独立的 .js 文件 -->
    <script src="demo.js">
      // 此处的代码会被忽略掉
       	alert(666);
    </script>
  </body>
</html>
```

# 2 注释和结束符

（1）通过注释可以屏蔽代码被执行或者添加备注信息，JavaScript 支持两种形式注释语法：

- 单行注释：`//注释`
- 多行注释：`/*注释*/`

（2）在 JavaScript 中  `;`  代表一段代码的结束，多数情况下可以省略  `;`  使用回车（enter）替代。实际开发中有许多人主张书写 JavaScript 代码时省略结束符  `;`，但风格要统一。

# 3 输入和输出

（1）输出
JavaScript 可以接收用户的输入，然后再将输入的结果输出。
`alert()` ：弹出警告框。
`document.wirte()` ：向 body 内输出内容，同时可以识别包含标签的内容，如 `document.write('<h1>一级标题</h1>'`。
`console.log()` ：控制台输出语法，便于调试。

（2）输入
向  `prompt()`  输入任意内容会以弹窗形式出现在浏览器中，提示用户输入内容。

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript 基础 - 输入输出</title>
</head>
<body>

  <script>
    // 1. 输入的任意数字，都会以弹窗形式展示
    document.write('要输出的内容')
    alert('要输出的内容');

    // 2. 以弹窗形式提示用户输入姓名，注意这里的文字使用英文的引号
    prompt('请输入您的姓名:')
  </script>
</body>
</html>
```

# 4 变量

（1）声明（定义）变量
声明关键字+变量名（标识），语法：`let var_name` 或 `var 变量名`，let 即关键字，所谓关键字是系统提供的专门用来声明（定义）变量的词语。推荐使用 `var` 关键字。

```
<script>
  // x 符号代表了 5 这个数值
  x = 5
  // y 符号代表了 6 这个数值
  y = 6

  //举例： 在 JavaScript 中使用变量可以将某个数据（数值）记录下来！

  // 将用户输入的内容保存在 num 这个变量（容器）中
  num = prompt('请输入一数字!')

  // 通过 num 变量（容器）将用户输入的内容输出出来
  alert(num)
  document.write(num)
</script>
```

（2） 赋值
声明（定义）变量相当于创造了一个空的“容器”，通过赋值向这个容器中添加数据。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript 基础 - 声明和赋值</title>
  </head>
  <body>
    <script>
      let age;
      age = 18;
      document.write(age);
      // 声明和赋值同时进行
      let str = "hello world!";
      alert(str);
    </script>
  </body>
</html>
```

（3）关键字
JavaScript 使用专门的关键字  `let`  和  `var`  来声明（定义）变量，在使用时需要注意一些细节：

使用  `let`  时的注意事项：

- 允许声明和赋值同时进行
- **不允许重复声明**
- 允许同时声明多个变量并赋值
- JavaScript 中内置的一些关键字不能被当做变量名

使用  `var`  时的注意事项：

- 允许声明和赋值同时进行
- 允许重复声明
- 允许同时声明多个变量并赋值
  大部分情况使用  `let`  和  `var`  区别不大，但是  `let`  相较  `var`  更严谨，因此推荐使用  `let`，后期会更进一步介绍二者间的区别。

（4）变量名命名规则

- 只能是字母、数字、下划线、$，且不能能数字开头
- 字母区分大小写，如 Age 和 age 是不同的变量
- JavaScript 内部已占用于单词（关键字或保留字）不允许使用
- 尽量保证变量具有一定的语义，见字知义（规范）
- 遵守**小驼峰命名**法（userName）

（5）常量
概念：使用 const 声明的变量称为“常量”。
使用场景：当某个变量永远不会改变的时候，就可以使用 const 来声明，而不是 let。
命名规范：和变量一致

```
const PI = 3.14
```

> 注意： 常量不允许重新赋值，声明的时候必须赋值（初始化）

# 5 数据类型

> 通过 typeof 关键字检测数据类型。
> JS 是弱数据类型的语言。只有赋值后，才知道是什么类型的变量。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript 基础 - 数据类型</title>
  </head>
  <body>
    <script>
      // 检测 1 是什么类型数据，结果为 number
      document.write(typeof 1);
    </script>
  </body>
</html>
```

## 5.1 基本数据类型

基本类型又叫做简单数据类型或者值类型，简单数据类型/基本数据类型，在存储时变量中存储的是**值本身**，因此叫做值类型。
简单数据存放到栈里面。
栈（操作系统）：由操作系统自动分配释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈。
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240625082732.png)
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240625082833.png)
(1) 数值

```js
let score = 100; // 正整数
let price = 12.345; // 小数
let temperature = -40; // 负数
```

JavaScript 中的数值类型与数学中的数字是一样的，分为正数、负数、小数等。

（2）字符串类型
关于字符串的方法:[String - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)
通过单引号（ `''`） 、双引号（ `""`）或反引号包裹的数据都叫字符串，单引号和双引号没有本质上的区别，推荐使用单引号。
注意：

- 无论单引号或是双引号必须成对使用
- 单引号/双引号可以互相嵌套，但是不以自已嵌套自已
- 必要时可以使用转义符  `\`，输出单引号或双引号
- 使用 `+` 运算符实现字符串拼接。
- 使用 `str.indexOf(sub_str)` 判断子串 `sub_str` 是否在字符串 `str` 中，若在，则返回索引值，不在则返回-1。

```js
let user_name = "小明"; // 使用单引号
let gender = "男"; // 使用双引号
let str = "123";
let str1 = ""; // 这种情况叫空字符串

documeent.write(typeof user_name); // 结果为 string
documeent.write(typeof gender); // 结果为 string
documeent.write(typeof str); // 结果为 string
```

模板字符串：
用反引号包裹，用 `${}` 指示变量。

```js
let age = 18;
document.write(`我今年${age}岁了。`);
```

( 3)布尔类型

```JS
    //  pink老师帅不帅？回答 是 或 否
    let isCool = true // 是的，摔死了！
    isCool = false // 不，套马杆的汉子！

    document.write(typeof isCool) // 结果为 boolean
```

(4)undefined

未定义是比较特殊的类型，只有一个值 undefined，只声明变量，不赋值的情况下，变量的默认值为 undefined，一般很少【直接】为某个变量赋值为 undefined。

```JS
    // 只声明了变量，并末赋值
    let tmp;
    document.write(typeof tmp) // 结果为 undefined
```

**注：JavaScript 中变量的值决定了变量的数据类型。**

## 5.2 引用数据类型

复杂类型又叫做引用类型。引用数据类型存放到堆里面，里面存放的是地址。
堆（操作系统）：存储复杂类型 (对象)，一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240625082813.png)

## 5.3 类型转换

A. 隐式转换
某些运算符被执行时，系统内部自动将数据类型进行转换，这种转换称为隐式转换。
规则：

- `+` 号两边只要有一个是字符串，都会把另外一个转成字符串。
- 除了 `+` 以外的算术运算符比如 `- * /` 等都会把数据转成数字类型。
- `+` 号可以作为正号解析可以转换为数字型

```js
let num = 13; // 数值
let num2 = "2"; // 字符串

// 结果为 132
// 原因是将数值 num 转换成了字符串，相当于 '13'
// 然后 + 将两个字符串拼接到了一起
console.log(num + num2);

// 结果为 11
// 原因是将字符串 num2 转换成了数值，相当于 2
// 然后数值 13 减去 数值 2
console.log(num - num2);

console.log(+"11" + 11); //输出22,将+'11'转换为正数
```

注：数据类型的隐式转换是 JavaScript 的特征。

B.显式转换
编写程序时过度依靠系统内部的隐式转换是不严禁的，因为隐式转换规律并不清晰，大多是靠经验总结的规律。为了避免因隐式转换带来的问题，通常根据逻辑需要对数据进行显示转换。
（1）Number
通过  `Number`  显示转换成数值类型，当转换失败时结果为  `NaN`（Not a Number）即不是一个数字。`NaN` 是粘性的，任何对 `NaN` 的操作都会返回 `NaN`。

```js
let t = "12";
let f = 8;

// 显式将字符串 12 转换成数值 12
t = Number(t);

// 检测转换后的类型
// console.log(typeof t);
console.log(t + f); // 结果为 20

// 并不是所有的值都可以被转成数值类型
let str = "hello";
// 将 hello 转成数值是不现实的，当无法转换成
// 数值时，得到的结果为 NaN （Not a Number）
console.log(Number(str));
```

（2）`parseInt(数据)` ：转换为整数，只保留整数。
（3） `parseFloat (数据) ` ：转换为小数。
（4）`String(数据）` 或 `变量.toString(进制)` ：转换为字符串。

# 6 运算符

> 此处仅对 JS 中特殊的运算符进行介绍。

（1）比较运算符
使用场景：比较两个数据大小、是否相等，根据比较结果返回一个布尔值（true / false）。

| 运算符 | 作用                                   |
| ------ | -------------------------------------- |
| >      | 左边是否大于右边                       |
| <      | 左边是否小于右边                       |
| >=     | 左边是否大于或等于右边                 |
| <=     | 左边是否小于或等于右边                 |
| `===`  | 左右两边是否`类型`和`值`都相等（重点） |
| `==`   | 左右两边`值`是否相等                   |
| `!=`   | 左右值不相等                           |
| `!==`  | 左右两边是否不全等                     |

注意：双等号只判断值，三等号判断值和类型。三等号用得更多。NaN 不等于任何人，包括他自己。

```js
<script>
  console.log(3 > 5) //false
  console.log(3 >= 3) //true
  console.log(2 == 2) // true
  // 比较运算符有隐式转换 把'2' 转换为 2  双等号只判断值
  console.log(2 == '2')  // true

  // console.log(undefined === null)
  // === 全等 判断 值 和 数据类型都一样才行
  // 以后判断是否相等 请用 ===
  console.log(2 === '2')
  console.log(NaN === NaN) // NaN 不等于任何人，包括他自己
  console.log(2 !== '2')  // true
  console.log(2 != '2') // false

  console.log('a' < 'b') // true
  console.log('aa' < 'ab') // true
  console.log('aa' < 'aac') // true
</script>
```

（2）逻辑运算符
使用场景：可以把多个布尔值放到一起运算，最终返回一个布尔值

| 符号 | 名称   | 日常读法 | 特点                        | 口诀           |
| ---- | ------ | -------- | --------------------------- | -------------- |
| &&   | 逻辑与 | 并且     | 符号两边有一个假的结果为假  | 一假则假       |
| \|   | 逻辑或 | 或者     | 符号两边有一个真的结果为真  | 一真则真       |
| !    | 逻辑非 | 取反     | true 变 false false 变 true | 真变假，假变真 |

（3）运算符优先级
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20240618081531.png)

# 7 程序控制语句

（1）分支语句

```javascript
// 1. if语句
if(条件表达式) {
  // 满足条件要执行的语句
}

// 2. 三元运算符（三元表达式）
// 语法格式为 条件 ? 表达式1（真时执行） : 表达式2
// 一般用于取值
console.log(5 < 3 ? '真的' : '假的') // '假的'


// switch分支语句：多用于等值判断
switch (表达式) {
   case 值1:
     代码1
     break

   case 值2:
     代码2
     break
   ...
   default:
     代码n
}
```

（2）循环语句
`break` 终止整个循环，`continue` 终止本次循环。

```js
while (i <= 3) {
  document.write("月薪过万不是梦，毕业时候见英雄~<br>");
  i++; // 这里千万不要忘了变量自增否则造成死循环
}

for (let i = 1; i <= 6; i++) {
  document.write(`<h${i}>循环控制，即重复执行<h${i}>`);
}

// 双重循环，九九乘法表
// 外层：打印几行
for (let i = 1; i <= 9; i++) {
  // 里层打印几个乘法式子
  for (let j = 1; j <= i; j++) {
    // 只需要吧 ★ 换成  1 x 1 = 1
    document.write(`
		<div> ${j} x ${i} = ${j * i} </div>
     `);
  }
  document.write("<br>");
}
```

# 8 数组

(1) 定义方式：可以是空数组，也可以是非空数组。数组属于对象类型。元素值可以是任意数据类型。
(2) 访问数组，索引值从 0 开始。
(3) 数据的属性和方法:

```html
<script>
  // 定义一个数组
  let arr = ["html", "css", "javascript"];

  // 1. push 动态向数组的尾部添加一个或多个元素，返回新数组的长度
  arr.push("Nodejs");
  console.log(arr);
  arr.push("Vue");

  // 2. unshift 动态向数组头部添加一个或多个元素，返回新数组的长度
  arr.unshift("VS Code");
  console.log(arr);

  // 3. splice 动态删除任意单元
  arr.splice(2, 1); // 从索引值为2的位置开始删除1个单元
  console.log(arr);
  arr.splice(1, 0, "Java"); // 在索引值为1的地方添加‘Java’

  // 4. pop 删除最后一个元素，并返回该元素的值
  arr.pop();
  console.log(arr);

  // 5. shift 删除第一个元素，并返回该元素的值
  arr.shift();
  console.log(arr);

  //6. length属性获取长度
  console.log(arr.length);

  // 7. sort()方法用于排序
  arr.sort();
</script>
```

## 8.1 数组筛选

```html
<script>
  // 重点案例：筛选出arr中大于10的元素
  let arr = [2, 0, 6, 1, 77, 9, 54, 3, 78, 7];
  // 1. 声明新的空的数组
  let newArr = [];
  // 2. 遍历旧数组
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      // 3. 满足条件 追加给新的数组
      newArr.push(arr[i]);
    }
  }
  // 4. 输出新的数组
  console.log(newArr);
</script>
```

数组对象还有一个 `filter()` 方法，用于快速筛选。该方法返回给定数组的一部分的[浅拷贝](https://developer.mozilla.org/zh-CN/docs/Glossary/Shallow_copy)，其中只包括通过提供的函数实现的测试的元素。如果没有元素通过测试，则返回一个空数组。
语法：

```js
// callback是为数组中的每个元素执行的条件测试函数
// 应当返回布尔值
filter(callbackFn);
// 可选
filter(callbackFn, thisArg);
```

例子：

```js
const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

## 8.2 数组遍历

(1) map 方法
**`array.map()`**  方法**创建一个新数组**，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
语法：

```js
map(callbackFn);
// thisArg可选
map(callbackFn, thisArg);
```

[`callbackFn`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map#callbackfn) 是数组中的每个元素需要执行的回调函数。它的返回值作为一个元素被添加为新数组中。该函数被调用时将传入以下参数：`element` （数组中当前正在处理的元素）、`index` (正在处理的元素在数组中的索引)、`array` (调用了 `map()` 的数组本身)。
`thisArg` : 执行 `callbackFn`  时用作  `this`  的值。

```js
const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

(2) foreach 方法
**`forEach()`**  方法对数组的每个元素执行一次给定的函数，并**丢弃该函数的返回值**。即 `forEach()` 方法的回调函数仅对元素进行处理，不会有返回值。

```js
forEach(callbackFn);
forEach(callbackFn, thisArg);
```

`callbackFn` 为数组中每个元素执行的函数，该函数被调用时将传入以下参数：`element` （数组中当前正在处理的元素）、`index` (可选，正在处理的元素在数组中的索引)、`array` (可选，调用了 `map()` 的数组本身)。

```js
const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

(3) reduce 方法
**`reduce()`**  方法对数组中的每个元素按序执行一个提供的  **reducer**  函数，每一次运行  **reducer**  会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

```js
reduce(callbackFn)
reduce(callbackFn[, initialValue])
```

`callbackFn` 接收三个参数：

- accmulator：上一次调用  `callbackFn`  的结果。在第一次调用时，如果指定了  `initialValue`  则为指定的值，否则为  `array[0]`  的值。
- currentValue (当前元素值)：在第一次调用时，如果指定了  `initialValue`，则为  `array[0]`  的值，否则为  `array[1]`。
- CurrentIndex: `currentValue`  在数组中的索引位置。在第一次调用时，如果指定了  `initialValue`  则为  `0`，否则为  `1`。
  `initialValue`（可选）：
  第一次调用回调时初始化  `accumulator`  的值。如果指定了  `initialValue`，则  `callbackFn`  从数组中的第一个值作为  `currentValue`  开始执行。如果没有指定  `initialValue`，则  `accumulator`  初始化为数组中的第一个值，并且  `callbackFn`  从数组中的第二个值作为  `currentValue`  开始执行。在这种情况下，如果数组为空（没有第一个值可以作为  `accumulator`  返回），则会抛出错误。

```js
const arr = [
  {
    name: "张三",
    salary: 10000,
  },
  {
    name: "李四",
    salary: 10000,
  },
  {
    name: "王五",
    salary: 10000,
  },
];
//计算薪资案例
const total = arr.reduce((prev, current) => prev + current.salary, 0);
console.log(total);
```

## 8.3 数组查找

**`array.findIndex()`**  方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。
语法：

```js
// callbackFn为数组中的每个元素执行的函数，应当返回布尔值
findIndex(callbackFn);
// thisArg可选
findIndex(callbackFn, thisArg);
```

例子：

```js
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
```

## 8.4 以分隔符拼接数组元素

**`arr.join()`**  方法将一个数组（或一个[类数组对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#%E4%BD%BF%E7%94%A8%E7%B1%BB%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1)）的所有元素连接成一个字符串并返回这个字符串，用逗号（默认）或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。如果  `arr.length`  为  `0`，则返回空字符串。

```js
// 不给参数时，默认逗号分隔
join();
// 类似Python中的join方法
join(separator);
```

![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241031143228.png)

# 9 函数

（1）声明和调用
声明（定义）：完整函数声明包括关键字、函数名、形式参数、函数体、返回值 5 个部分。
调用：声明（定义）的函数必须调用才会真正被执行，使用  `函数名()`  调用函数。

```js
// 声明（定义）最简单的函数，既没有形式参数，也没有返回值
function sayHi() {
  console.log("嗨~");
}
// 函数调用，这些函数体内的代码逻辑会被执行
sayHi();
// 可以重复被调用，多少次都可以
sayHi();
```

(2) 参数
声明（定义）函数时的形参没有数量限制，当有多个形参时使用  `,`  分隔
调用函数传递的实参要与形参的顺序一致。
(3) 返回值
函数的本质是封装（包裹），函数体内的逻辑执行完毕后，需要通过  `return`  这个关键字，将内部执行结果传递到函数外部。
函数内部只能出现 1 次 `return`，并且 **return 下一行代码不会再被执行**，所以 return 后面的数据不要换行写。
`return` 会立即结束当前函数。
函数可以没有 `return`，这种情况默认返回值为 `undefined`。
（4）作用域
**全局作用域**：作用于所有代码执行的环境 (整个 script 标签内部) 或者一个独立的 js 文件。处于全局作用域内的变量，称为全局变量。
**局部作用域**：作用于函数内的代码环境，就是局部作用域。因为跟函数有关系，所以也称为函数作用域。处于局部作用域内的变量称为局部变量。
（5）匿名函数
语法：`function(){}`，不需要函数名字。
调用匿名函数：

- 函数表达式：匿名函数赋值给一个变量，通过变量名调用。注意：具名函数的调用可以写道函数声明前或声明后。匿名函数的调用必须在函数表达式的声明之后。

```JS
// 声明
let fn = function() {
   console.log('函数表达式')
}
// 调用
fn()
```

- 立即执行函数: 以 `(匿名函数)();` 的形式调用。多个立即执行函数之间用分号隔开，必须要有 `;` 。

```js
(function (x, y) {
  console.log(x + y);
})(1, 2); //输出3
```

（6）逻辑中断
也称短路，只存在于 `&&` 和 `||` 中，当满足一定条件会让右边代码不执行。
`A&&B`，当 A 为假时，则不判断右边。
`A||B`，当 A 为真时，则不判断右边。

```js
function fn(x, y) {
  x = x || 0;
  y = y || 0;
  console.log(x + y);
}

fn(); //当不传递实参调用时，x和y为undefined，视为假，此时函数输出0
```

（7）内置函数
`setInterval`  是 JavaScript 中内置的函数，它的作用是间隔固定的时间自动重复执行另一个函数，也叫定时器函数。 ^setInterValFunc

```js
<script>
  // 1. 定义一个普通函数 function repeat(){" "}
  {console.log("不知疲倦的执行下去....")}
  // 2. 使用 setInterval 调用 repeat 函数 // 间隔 1000 毫秒，重复调用 repeat setInterval(repeat,
  1000)
</script>
```

# 10 对象

## 10.1 对象介绍

（1）声明：使用花括号定义一个对象。`let user= {}`，此时 `user` 是一个空对象。
（2）属性和访问：

- 属性成对出现，包括属性名和值，之间使用英文  `:`  分隔。多个属性之间使用英文  `,`  分隔，属性可视为依附在对象上的变量。
- 属性名可以使用  `""`  或  `''`，一般情况下省略，除非名称遇到特殊符号如空格、中横线等.
- 使用 `.` 或 `[]` 获得对象中属性对应的值。
- 可动态为对象添加属性，动态添加与直接定义是一样的，只是语法上更灵活。

```js
// 通过对象描述一个人的数据信息
// person 是一个对象，它包含了一个属性 name
// 属性都是成对出现的，属性名 和 值，它们之间使用英文 : 分隔
let person = {
  name: "小明", // 描述人的姓名
  age: 18, // 描述人的年龄
  stature: 185, // 描述人的身高
  gender: "男", // 描述人的性别
};

// 访问人的名字
console.log(person.name); // 结果为 小明
// 访问人性别
console.log(person.gender); // 结果为 男
// 访问人的身高
console.log(person["stature"]); // 结果为 185
// 或者
console.log(person.stature); // 结果同为 185

// 动态追加属性
user.grade = 80;
```

(3) 方法和调用

- 方法由方法名和函数两部分构成，它们之间使用 `:`。分隔多个方法之间使用英文  `,`  分隔，方法是依附在对象中的函数。
- 方法名可以使用  `""`  或  `''`，一般情况下省略，除非名称遇到特殊符号如空格、中横线等。
- 使用 `.` 或 `[]` 调用方法。
- 可动态为对象添加方法，动态添加与直接定义是一样的，只是语法上更灵活。

```js
// 方法是依附在对象上的函数
let person = {
  name: "小红",
  age: 18,
  // 方法是由方法名和函数两部分构成，它们之间使用 : 分隔
  singing: function () {
    console.log("两只老虎，两只老虎，跑的快，跑的快...");
  },
  run: function () {
    console.log("我跑的非常快...");
  },
};

// 调用对象中 singing 方法
person.singing();
// 调用对象中的 run 方法
person.run();

// 动态添加方法
user.move = function () {
  console.log("移动一点距离...");
};
```

> **注：无论是属性或是方法，同一个对象中出现名称一样的，后面的会覆盖前面的。**

## 10.2 内置对象

`console` 和 `Math` 都是 js 中内置的对象。

```js
// 圆周率
console.log(Math.PI);

// 0 ~ 1 之间的随机数, 包含 0 不包含 1
Math.random();

// 舍弃小数部分，整数部分加1
Math.ceil(3.4);

// 舍弃小数部分，整数部分不变
Math.floor(4.68);

// 取整，四舍五入原则
Math.round(5.46539);
Math.round(4.849);

// 找出最大值
Math.max(10, 21, 7, 24, 13);

// 找出最小值
Math.min(24, 18, 6, 19, 21);

// 求某个数的多少次方
Math.pow(4, 2); // 求 4 的 2 次方
Math.pow(2, 3); // 求 2 的 3 次方

// 求某个数的多少次方
Math.pow(4, 2); // 求 4 的 2 次方
Math.pow(2, 3); // 求 2 的 3 次方

// 生成N-M之间的随机数
Math.floor(Math.random() * (M - N + 1)) + N;
```

## 10.3 遍历对象

对象里面是无序的键值对，使用 `for in` 可快速遍历对象内部的属性。

```js
let obj = {
  uname: "pink老师",
  age: 18,
  gender: "男",
};

for (let k in obj) {
  // 依次打印出属性名
  console.log(k); // k的类型为字符串

  //下面的写法无法正常打印出属性值
  //依次打印出undefined，因为k为字符串，而不是变量
  console.log(obj.k); //第一次遍历相当于console.log(obj.'uname')

  // 下面的写法可以打印出属性值
  console.log(obj[k]);
}
```

> 注意：`for (let k in obj)` 中的 k 为字符串，故只能使用 `[]` 来访问属性值。
