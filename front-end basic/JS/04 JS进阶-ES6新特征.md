# 1 作用域

作用域（scope）规定了变量能够被访问的“范围”，离开了这个“范围”变量便不能被访问，作用域分为全局作用域和局部作用域。
##  1.1 局部作用域
局部作用域分为函数作用域和块作用域。
（1）函数作用域
在函数内部声明的变量只能在函数内部被访问，外部无法直接访问。
```html
<script>
  // 声明 counter 函数
  function counter(x, y) {
    // 函数内部声明的变量
    const s = x + y
    console.log(s) // 18
  }
  // 设用 counter 函数
  counter(10, 8)
  // 访问变量 s
  console.log(s)// 报错
</script>
```
总结：
1. 函数内部声明的变量，在函数外部无法被访问
2. 函数的参数也是函数内部的局部变量
3. 不同函数内部声明的变量无法互相访问
4. 函数执行完毕后，函数内部的变量实际被清空了

（2）块作用域
在 JavaScript 中使用 `{}` 包裹的代码称为代码块，代码块内部声明的变量在代码块外部**将有可能**无法被访问。

```html
<script>
  {
    // age 只能在该代码块中被访问
    let age = 18;
    console.log(age); // 正常
  }
  
  // 超出了 age 的作用域
  console.log(age) // 报错
  
  let flag = true;
  if(flag) {
    // str 只能在该代码块中被访问
    let str = 'hello world!'
    console.log(str); // 正常
  }
  
  // 超出了 age 的作用域
  console.log(str); // 报错
  
  for(let t = 1; t <= 6; t++) {
    // t 只能在该代码块中被访问
    console.log(t); // 正常
  }
  
  // 超出了 t 的作用域
  console.log(t); // 报错
</script>
```

JavaScript 中除了变量外还有常量，常量与变量本质的区别是【常量必须要有值且不允许被重新赋值】，常量值为对象时其属性和方法允许重新赋值。

```html
<script>
  // 必须要有值
  const version = '1.0.0';

  // 不能重新赋值
  // version = '1.0.1';

  // 常量值为对象类型
  const user = {
    name: '小明',
    age: 18
  }

  // 不能重新赋值
  user = {};

  // 属性和方法允许被修改
  user.name = '小小明';
  user.gender = '男';
</script>
```
总结：
1. `let` 声明的变量会产生块作用域，`var` 不会产生块作用域
2. `const` 声明的常量也会产生块作用域
3. 不同代码块之间的变量无法互相访问
4. 推荐使用 `let` 或 `const`
注：开发中 `let` 和 `const` 经常不加区分的使用，如果担心某个值会不小心被修改时，则只能使用 `const` 声明成常量。
## 1.2 全局作用域
`<script>` 标签和 `.js` 文件的**最外层**就是所谓的全局作用域，在此声明的变量在函数内部也可以被访问。
```html
<script>
    // 全局变量 name
    const name = '小明'
  
  	// 函数作用域中访问全局
    function sayHi() {
      // 此处为局部
      console.log('你好' + name)
    }

    // 全局变量 flag 和 x
    const flag = true
    let x = 10
  
  	// 块作用域中访问全局
    if(flag) {
      let y = 5
      console.log(x + y) // x 是全局的
    }
</script>
```
总结：
1. 为 `window` 对象动态添加的属性默认也是全局的，不推荐！
2. 函数中未使用任何关键字声明的变量为全局变量，不推荐！
3. 尽可能少的声明全局变量，防止全局变量被污染.
## 1.3 作用域链
函数内部允许创建新的函数，`f` 函数内部创建的新函数 `g`，会产生新的函数作用域，由此可知作用域产生了嵌套的关系。父子关系的作用域关联在一起形成了链状的结构，作用域链的名字也由此而来。
![[Pasted image 20241030165302.png]]
作用域链本质上是底层的变量查找机制，在函数被执行时，会**优先查找当前函数作用域中查找变量，如果当前作用域查找不到则会依次逐级查找父级作用域直到全局作用域**，如下代码所示：

```html
<script>
  // 全局作用域
  let a = 1
  let b = 2

  // 局部作用域
  function f() {
    let c
    // let a = 10;
    console.log(a) // 1 或 10
    console.log(d) // 查找不到d, 报错
    
    // 局部作用域
    function g() {
      let d = 'yo'
      // let b = 20;
      console.log(b) // 2 或 20
    }
    
    // 调用 g 函数
    g()
  }

  console.log(c) // 报错
  console.log(d) // 报错
  
  f();
</script>
```
总结：
1. 嵌套关系的作用域串联起来形成了作用域链
2. 相同作用域链中按着从小到大的规则查找变量
3. 子作用域能够访问父作用域，父级作用域无法访问子级作用域
## 1.4 JS 垃圾回收机制
（1）概述
垃圾回收机制 (Garbage Collection) 简称 GC。JS 中内存的分配和回收都是自动完成的，内存在不使用的时候会被垃圾回收器自动回收。  
如不再用到的内存，没有及时释放，就会导致“内存泄漏 ”的问题。
JS 环境中分配的内存, 一般有如下生命周期：  
1. 内存分配： 当我们声明变量、函数、对象的时候，系统会自动为他们分配内存。
2. 内存使用： 即读写内存，也就是使用变量、函数时，内存会被使用。
3. 内存回收： 使用完毕，由垃圾回收自动回收不再使用的内存。
4. 说明：（1）全局变量一般不会回收，在关闭页面时才会被回收；（2）一般情况下局部变量的值不再使用时，会被自动回收掉。

（2）回收算法
  >堆栈空间分配区别：  
  >- 栈（ 操作系统） : 由操作系统自动分配释放函数的参数值、局部变量等，基本数据类型放到栈里面。  
  >- 堆（ 操作系统） : 一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收。复杂数据类型放到堆里面。

- 引用计数法
  IE 采用的引用计数算法, 定义“ 内存不再使用” ，就是看一个对象是否有指向它的引用，没有引用了就回收对象。
  算法： 跟踪记录被引用的次数->如果被引用了一次，那么就记录次数 1, 多次引用会累加 (`++`) ->如果减少一个引用就减 1 (`--` )->如果引用次数是 0 ，则释放内存。
  存在问题：循环引用。如果两个对象相互引用，尽管他们已不再使用，垃圾回收器不会进行回收，导致内存泄露。
```js
function fn() {
	let o1 = {}
	let o2 = {}
	o1.a = o2
	o2.a = o1
	return '引用计数无法回收'
}
fn()
```

- 标记清除法
现代的浏览器已经不再使用引用计数算法了。通用的大多是基于标记清除算法的某些改进算法，总体思想都是一致的。
核心思想：  将“ 不再使用的对象” 定义为“ 无法达到的对象” ，即从根部（ 在 JS 中就是全局对象） 出发定时扫描内存中的对象。凡是能从根部到达的对象，都是还需要使用的。那些无法由根部出发触及到的对象被标记为不再使用，稍后进行回收。
![[Pasted image 20241030170437.png]]

#  2 函数高级
## 2.1 闭包
闭包是一种比较特殊和函数，使用闭包能够访问函数作用域中的变量。从代码形式上看闭包是一个做为返回值的函数，如下代码所示：
```html
<body>
  <script>
    // 1. 闭包 : 内层函数 + 外层函数变量
    // function outer() {
    //   const a = 1
    //   function f() {
    //     console.log(a)
    //   }
    //   f()
    // }
    // outer()

    // 2. 闭包的应用： 实现数据的私有。统计函数的调用次数
    // let count = 1
    // function fn() {
    //   count++
    //   console.log(`函数被调用${count}次`)
    // }

    // 3. 闭包的写法  统计函数的调用次数
    function outer() {
      let count = 1
      function fn() {
        count++
        console.log(`函数被调用${count}次`)
      }
      return fn
    }
    const re = outer()
    re()
  </script>
</body>
```
闭包本质上为：内层函数 + 外层函数的变量，可以实现数据的私有化，使得在函数的外部也可以访问函数内部的变量。当时闭包可能引起内存泄漏的问题。
## 2.2  变量提升
变量提升是 JavaScript 中比较“奇怪”的现象，它允许在变量声明之前即被访问。只有使用 `var` 关键字声明的变量存在变量提升现象.
```html
<script>
  // 访问变量 str
  console.log(str + 'world!');
  // 输出：undefinedworld!

  // 声明变量 str
  var str = 'hello ';
</script>
```
总结：
1. 变量在未声明即被访问时会报语法错误
2. **变量在声明之前即被访问，变量的值为** `undefined`
3. `let/const` 声明的变量不存在变量提升，推荐使用 `let`
4. 变量提升出现在相同作用域当中，仅提升变量的声明，**不提升变量的赋值**。
5. 实际开发中推荐先声明再访问变量

注：关于变量提升的原理分析会涉及较为复杂的词法分析等知识，而开发中使用 `let` 可以轻松规避变量的提升，因此在此不做过多的探讨，有兴趣可[查阅资料](https://segmentfault.com/a/1190000013915935)。
## 2.3 函数提升
函数提升与变量提升比较类似，是指函数在声明之前即可被调用。
```html
<script>
  // 调用函数
  foo()
  // 声明函数
  function foo() {
    console.log('声明之前即被调用...')
  }

  // 不存在提升现象
  bar()  // 错误
  var bar = function () {
    console.log('函数表达式不存在提升现象...')
  }
</script>
```
总结：
1. 函数提升能够使函数的声明调用更灵活
2. **函数表达式不存在提升的现象**
3. 函数提升出现在相同作用域当中

## 2.4 函数参数
（1）默认值
声明函数时为形参赋值即为参数的默认值。
如果参数未指定默认值时，参数的默认值为 `undefined`。
调用函数时没有传入对应实参时，参数的默认值被当做实参传入。
```html
<script>
  // 设置参数默认值
  function sayHi(name="小明", age=18) {
    document.write(`<p>大家好，我叫${name}，我今年${age}岁了。</p>`);
  }
  // 调用函数
  sayHi();
  sayHi('小红');
  sayHi('小刚', 21);
</script>
```

（2）动态参数
`arguments` 是函数内部内置的伪数组变量，它包含了调用函数时传入的所有实参，用于动态获取函数的实参。
```html
<script>
  // 求和函数，计算所有参数的和
  function sum() {
    // console.log(arguments)
    let s = 0
    for(let i = 0; i < arguments.length; i++) {
      s += arguments[i]
    }
    console.log(s)
  }
  // 调用求和函数
  sum(5, 10)// 两个参数
  sum(1, 2, 4) // 两个参数
</script>
```
（3）剩余参数
  剩余参数允许我们将一个不定数量的参数表示为一个数组。`...` 是语法符号，置于最末函数形参之前，用于获取多余的实参。借助 `...` 获取的剩余实参，是个**真数组**。
```html
<script>
  function config(baseURL, ...other) {
    console.log(baseURL) // 得到 'http://baidu.com'
    console.log(other)  // other  得到 ['get', 'json']
  }
  // 调用函数
  config('http://baidu.com', 'get', 'json');
</script>
```

## 2.5 展开运算符
`...` 用于数组变量前时，被称为展开运算符。可以将一个数组进行开展。运用场景：求数组最大（小）值、合并数组等。
```js
// 展开运算符
const shuzu = [1,2,3]
console.log(...shuzu)  // 输出：1 2 3
// 求最大值
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.max(...arr)); // 输出：10

// 合并数组
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1, ...arr2]
console.log(arr3) // 输出：[1,2,3,4,5,6]
```
# 3 箭头函数
箭头函数是一种声明函数的简洁语法，它与普通函数并无本质的区别，差异性更多体现在语法格式上。
引入箭头函数的目的是更简短的函数写法并且不绑定 this，箭头函数的语法比函数表达式更简洁. 适用于原本需要匿名函数的地方。基本语法：`(参数)=>{函数体}`。

```html
<body>
  <script>
	// 基本语法
	const fn1 = () => {
		console.log(123)
	}
	fn1()
	const fn2 = (x) => {
		console.log(x)
	}
	fn2(1)

	// 只有一个形参的时候，可以省略参数列表外的小括号
	const fn3 = x => {
		console.log(x)
	}
	fn3(1)

	// 只有一行代码的时候，可省略函数体外的大括号和return
	const fn4 = x => x + x
	fn4(1)

	// 也可以直接返回一个对象，需要在最外层套上小括号
	const fn = (uname) => ({ uname: uname })
	console.log(fn('刘德华'))

  </script>
</body>
```
箭头函数属于表达式函数，因此不存在函数提升。箭头函数只有一个参数时可以省略圆括号 `()`。箭头函数函数体只有一行代码时可以省略花括号 `{}`，并自动做为返回值被返回。
箭头函数也可以直接返回一个对象，需要在**最外层套上小括号**。

## 3.1 箭头函数参数
箭头函数中没有动态参数 `arguments`，只能使用使用剩余参数 `...` 动态获取实参。

~~~html
<body>
  <script>
    // 利用箭头函数来求和
    const getSum = (...arr) => {
      let sum = 0
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
      }
      return sum
    }
    const result = getSum(2, 3, 4)
    console.log(result) // 9
  </script>
~~~
## 3.2 箭头函数 this
箭头函数不会创建自己的 this, 它只会沿着自己的作用域链的上一层沿用 this。
~~~html
 <body>
    <script>
        // 普通函数this的指向：谁调用的该函数，this就指向谁
        console.log(this)  // window
        function fn() {
            console.log(this)  // window
        }
        window.fn()

        // 对象方法里面的this，指向该对象
        const obj1 = {
            name: 'andy',
            sayHi: function () {
                console.log(this)  // obj
            }
        }
        obj1.sayHi()

        // 箭头函数的this指向上一层作用域中的this 
        const fn = () => {
            console.log(this)  // window
        }
        fn()

        // 在对象的方法中使用箭头函数this
        const obj2 = {
            uname: 'pink老师',
            sayHi: () => {
                // this指向obj2对象的上一层作用域，即window
                console.log(this)
            }
        }
        obj2.sayHi()

        const obj = {
            uname: 'pink老师',
            sayHi: function () {
                console.log(this)  // 指向obj
                let i = 10
                const count = () => {
                    console.log(this)  // 指向obj 
                }
                count()
            }
        }
        obj.sayHi()
    </script>
</body>
~~~
在开发中【 使用箭头函数前需要考虑函数中 this 的值】 ，事件回调函数使用箭头函数时， this 为全局的 window，因此 DOM 事件回调函数为了简便，还是不太推荐使用箭头函数。
# 4 解构赋值
解构赋值是一种快速为变量赋值的简洁语法，本质上仍然是为变量赋值，分为数组解构、对象解构两大类型。
## 4.1 数组解构
数组解构是将数组的单元值快速批量赋值给一系列变量的简洁语法，用 `[]` 进行解构，同时**解构前需要使用 `const` 或 `let` 进行声明**。
```html
<script>
  // 普通的数组
  let arr = [1, 2, 3]
  
  // 批量声明变量 a b c 
  // 同时将数组单元值 1 2 3 依次赋值给变量 a b c
  let [a, b, c] = arr
  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
  
  // 按需求导入, 数字 3 被跳过
  const [a1, b1, , d1] = [1, 2, 3, 4]
  
  // 支持多维数组解构赋值，a2 = "华为", b2 = "小米", c2 = "苹果"
  const [a2, [b2, c2]] = ["华为", ["小米", "苹果"]]
  // a3 = "华为", b3 = ["小米", "苹果"]
  const [a3, b3] = ["华为", ["小米", "苹果"]]

</script>
```
1. 赋值运算符 `=` 左侧的 `[]` 用于批量声明变量，右侧数组的单元值将被赋值给左侧的变量
2. 变量的顺序对应数组单元值的位置依次进行赋值操作
3. 变量的数量大于单元值数量时，多余的变量将被赋值为  `undefined`
4. 变量的数量小于单元值数量时，可以通过 `...` 获取剩余单元值，但只能置于最末位。
5. 允许初始化变量的默认值，且只有单元值为 `undefined` 时默认值才会生效。
6. 可按需导入，不需要使用的变量留空。
7. 支持多维解构赋值。

## 4.2  对象解构
对象解构是将对象属性和方法快速批量赋值给一系列变量的简洁语法，如下代码所示：
```html
<script>
  // 普通对象
  const user = {
    name: '小明',
    age: 18
  };
  // 批量声明变量 name age
  // 同时将数组单元值小明  18 依次赋值给变量 name  age
  const {name, age} = user

  console.log(name) // 小明
  console.log(age) // 18
  const pig = {
	name: '普契奇',
	age: 18,
	family: {
		father: '普契奇的爸爸',
		mother: '普契奇的妈妈'
	}
  }
  
  // 多级对象的解构，解构的时候要注意，解构的属性名要和对象的属性名一致
  const { name, family: { father, mother } } = pig
  console.log(name, father, mother)

  // 如果不需要用到所有属性，左侧仅定义一个变量即可
  const { family } = pig
  console.log(family)
</script>
```

1. 赋值运算符 `=` 左侧的 `{}` 用于批量声明变量，右侧对象的属性值将被赋值给左侧的变量
2. 对象属性的值将**被赋值给与属性名相同的变量**。
3. 如果在对象中找不到与某个变量名一致的属性时，该变量值为 `undefined`。
4. 允许初始化变量的默认值，属性不存在或单元值为 `undefined` 时默认值才会生效。
5. 针对某对象的解构可用作函数的形参，调用函数时的实参可直接传递该对象，简化代码。
~~~html
<body>
  <script>
    // 后台传递的数据
    const msg = {
      "code": 200,
      "msg": "获取新闻列表成功",
      "data": [
        {
          "id": 1,
          "title": "5G商用自己，三大运用商收入下降",
          "count": 58
        },
        {
          "id": 2,
          "title": "国际媒体头条速览",
          "count": 56
        },
        {
          "id": 3,
          "title": "乌克兰和俄罗斯持续冲突",
          "count": 1669
        },

      ]
    }

	// 对象解构用作函数形参
    function render({ data: myData }) {
      // 要求将获取过来的 data数据 更名为 myData
      // 内部处理...
      console.log(myData)
    }
    // 对象作为实参，完成对象的解构
    render(msg)

  </script>
~~~

>案例：商品价格筛选。
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>商品渲染</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .list {
      width: 990px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
    }

    .item {
      width: 240px;
      margin-left: 10px;
      padding: 20px 30px;
      transition: all .5s;
      margin-bottom: 20px;
    }

    .item:nth-child(4n) {
      margin-left: 0;
    }

    .item:hover {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
      transform: translate3d(0, -4px, 0);
      cursor: pointer;
    }

    .item img {
      width: 100%;
    }

    .item .name {
      font-size: 18px;
      margin-bottom: 10px;
      color: #666;
    }

    .item .price {
      font-size: 22px;
      color: firebrick;
    }

    .item .price::before {
      content: "¥";
      font-size: 14px;
    }

    .filter {
      display: flex;
      width: 990px;
      margin: 0 auto;
      padding: 50px 30px;
    }

    .filter a {
      padding: 10px 20px;
      background: #f5f5f5;
      color: #666;
      text-decoration: none;
      margin-right: 20px;
    }

    .filter a:active,
    .filter a:focus {
      background: #05943c;
      color: #fff;
    }
  </style>
</head>

<body>
  <div class="filter">
    <a data-index="1" href="javascript:;">0-100元</a>
    <a data-index="2" href="javascript:;">100-300元</a>
    <a data-index="3" href="javascript:;">300元以上</a>
    <a href="javascript:;">全部区间</a>
  </div>
  <div class="list">
    <!-- <div class="item">
      <img src="" alt="">
      <p class="name"></p>
      <p class="price"></p>
    </div> -->
  </div>
  <script>
    // 2. 初始化数据
    const goodsList = [
      {
        id: '4001172',
        name: '称心如意手摇咖啡磨豆机咖啡豆研磨机',
        price: '289.00',
        picture: 'https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg',
      },
      {
        id: '4001594',
        name: '日式黑陶功夫茶组双侧把茶具礼盒装',
        price: '288.00',
        picture: 'https://yanxuan-item.nosdn.127.net/3346b7b92f9563c7a7e24c7ead883f18.jpg',
      },
      {
        id: '4001009',
        name: '竹制干泡茶盘正方形沥水茶台品茶盘',
        price: '109.00',
        picture: 'https://yanxuan-item.nosdn.127.net/2d942d6bc94f1e230763e1a5a3b379e1.png',
      },
      {
        id: '4001874',
        name: '古法温酒汝瓷酒具套装白酒杯莲花温酒器',
        price: '488.00',
        picture: 'https://yanxuan-item.nosdn.127.net/44e51622800e4fceb6bee8e616da85fd.png',
      },
      {
        id: '4001649',
        name: '大师监制龙泉青瓷茶叶罐',
        price: '139.00',
        picture: 'https://yanxuan-item.nosdn.127.net/4356c9fc150753775fe56b465314f1eb.png',
      },
      {
        id: '3997185',
        name: '与众不同的口感汝瓷白酒杯套组1壶4杯',
        price: '108.00',
        picture: 'https://yanxuan-item.nosdn.127.net/8e21c794dfd3a4e8573273ddae50bce2.jpg',
      },
      {
        id: '3997403',
        name: '手工吹制更厚实白酒杯壶套装6壶6杯',
        price: '99.00',
        picture: 'https://yanxuan-item.nosdn.127.net/af2371a65f60bce152a61fc22745ff3f.jpg',
      },
      {
        id: '3998274',
        name: '德国百年工艺高端水晶玻璃红酒杯2支装',
        price: '139.00',
        picture: 'https://yanxuan-item.nosdn.127.net/8896b897b3ec6639bbd1134d66b9715c.jpg',
      },
    ]


    // 渲染商品函数
    function renderGoodsList(goodsList) {
      let str = ""
      goodsList.forEach(item => {
        const { name, price, picture } = item
        str += `
        <div class="item">
          <img src="${item.picture}" alt="">
          <p class="name">${item.name}</p>
          <p class="price">${item.price}</p>
        </div>
        `
      })
      document.querySelector('.list').innerHTML = str
    }
    renderGoodsList(goodsList)

    // 点击筛选按钮，筛选商品
    document.querySelector(".filter").addEventListener("click", function (e) {
      const { tagName, dataset } = e.target
      if (e.target.tagName === "A") {
        const index = dataset.index
        let filterGoodsList = []
        switch (index) {
          case "1":
            filterGoodsList = goodsList.filter(item => item.price <= 100)
            break
          case "2":
            filterGoodsList = goodsList.filter(item => item.price >= 100 && item.price <= 300)
            break
          case "3":
            filterGoodsList = goodsList.filter(item => item.price >= 300)
            break
          default:
            filterGoodsList = goodsList
        }
        renderGoodsList(filterGoodsList)
      }
    })

  </script>
</body>

</html>
```
>作业案例：王者荣耀英雄筛选，参考`前端代码\js-进阶\1-王者荣耀英雄筛选`
# 5 深入对象
利用 `new Object()` 也可以创建对象。
```js
const obj = new Object({name :"佩奇"})
```
## 5.1  构造函数
构造函数是专门用于创建对象的函数，如果一个函数使用 `new` 关键字调用，那么这个函数就是构造函数。用于初始化对象，命名以大写字母开头。
```html
<script>
	function Pig(name, age) {
		this.name = name;
		this.age = age;
	}

	const Peppa = new Pig('Peppa', 3);
</script>
```
1. 使用 `new` 关键字调用函数的行为被称为实例化
2. 实例化构造函数时没有参数时可以省略 `()`
3. 构造函数的返回值即为新创建的对象
4. 构造函数内部的 `return` 返回的值无效！
注：实践中为了从视觉上区分构造函数和普通函数，习惯将构造函数的首字母大写。

## 5.2 实例成员
通过构造函数创建的对象称为**实例对象**，**实例对象中**的属性和方法称为**实例成员**。
```html
<script>
  // 构造函数
  function Person() {
	//构造函数的this可以理解为实例对象
	// 实例对象中动态添加属性
    this.name = '小明'
    // 实例对象中动态添加方法
    this.sayHi = function () {
      console.log('大家好~')
    }
  }
  // 实例化，p1 是实例对象
  // p1 实际就是 构造函数内部的 this
  const p1 = new Person()
  console.log(p1)
  console.log(p1.name) // 访问实例属性
  p1.sayHi() // 调用实例方法
</script>
```
总结：
1. 构造函数内部 `this` 实际上就是实例对象，为其动态添加的属性和方法即为实例成员
2. 为构造函数传入参数，动态创建结构相同但值不同的对象
注：构造函数创建的实例对象彼此独立互不影响。

## 5.3 静态成员
在 JavaScript 中底层函数本质上也是对象类型，因此允许直接为函数动态添加属性或方法，**构造函数的属性和方法被称为静态成员**。

```html
<script>
  // 构造函数
  function Person(name, age) {
    // 省略实例成员
  }
  
  // 静态属性
  Person.eyes = 2
  Person.arms = 2
  // 静态方法
  Person.walk = function () {
    console.log('^_^人都会走路...')
    // this 指向 Person
    console.log(this.eyes)
  }
</script>
```

总结：
1. 静态成员指的是**添加到构造函数本身**的属性和方法
2. 一般公共特征的属性或方法静态成员设置为静态成员。
3. 静态成员方法中的 `this` 指向构造函数本身

# 6 内置构造函数
在 JavaScript 中**最主要**的数据类型有 6 种，分别是字符串、数值、布尔、undefined、null 和 对象，常见的对象类型数据包括数组和普通对象。其中字符串、数值、布尔、undefined、null 也被称为简单类型或基础类型，对象也被称为引用类型。
在 JavaScript 内置了一些构造函数，绝大部的数据处理都是基于这些构造函数实现的，JavaScript 基础阶段学习的 `Date` 就是内置的构造函数。

```html
<script>
  // 实例化
	let date = new Date();
  
  // date 即为实例对象
  console.log(date);
</script>
```
字符串、数值、布尔、数组、普通对象也都有专门的构造函数，用于创建对应类型的数据。
## 6.1 Object
`Object` 是内置的构造函数，用于创建普通对象。
```html
<script>
  // 通过构造函数创建普通对象
  const user = new Object({name: '小明', age: 15})

  // 这种方式声明的变量称为【字面量】
  let student = {name: '杜子腾', age: 21}
  
  // 对象语法简写
  let name = '小红';
  let people = {
    // 相当于 name: name
    name,
    // 相当于 walk: function () {}
    walk () {
      console.log('人都要走路...');
    }
  }

  console.log(student.constructor);
  console.log(user.constructor);
  console.log(student instanceof Object);
</script>
```
总结：
1. 推荐使用字面量方式声明对象，而不是 `Object` 构造函数
2. `Object.assign(obj)` 静态方法，用于对象拷贝。
```js
const o = {name:"佩奇", age:6}
Object.assign(o, {gender:"女"})
console.log(o)// {name:"佩奇", age:6, gender: "女"}
```
3. `Object.keys(obj)` 静态方法获取对象中所有属性，返回数组
3. `Object.values(obj)` 静态方法获取对象中所有属性值，返回数组

## 6.2  Array
`Array` 是内置的构造函数，用于创建数组。
```html
<script>
  // 构造函数创建数组
  let arr = new Array(5, 7, 8);

  // 字面量方式创建数组
  let list = ['html', 'css', 'javascript']
</script>
```
1. 推荐使用字面量方式声明数组，而不是 `Array` 构造函数
2. 实例方法 `forEach` 用于遍历数组，替代 `for` 循环 (重点)
3. 实例方法 `filter` 过滤数组单元值，生成新数组(重点)
4. 实例方法 `map` 迭代原数组，生成新数组(重点)
5. 实例方法 `join` 数组元素拼接为字符串，返回字符串(重点)
6. 实例方法  `find`  查找元素， 返回符合测试条件的第一个数组元素值，如果没有符合条件的则返回 undefined(重点)
7. 实例方法`every` 检测数组所有元素是否都符合指定条件，如果**所有元素**都通过检测返回 true，否则返回 false(重点)
8. 实例方法`some` 检测数组中的元素是否满足指定条件   **如果数组中有**元素满足条件返回 true，否则返回 false
9. 实例方法 `concat`  合并两个数组，返回生成新数组
10. 实例方法 `sort` 对原数组单元值排序
11. 实例方法 `splice` 删除或替换原数组单元
12. 实例方法 `reverse` 反转数组
13. 实例方法 `findIndex`  查找元素的索引值
具体参考：[[01 Javascript基础#8 数组]]​

## 6.3 包装类型
在 JavaScript 中的字符串、数值、布尔具有对象的使用特征，如具有属性和方法：

```html
<script>
  // 字符串类型
  const str = 'hello world!'
 	// 统计字符的长度（字符数量）
  console.log(str.length)
  
  // 数值类型
  const price = 12.345
  // 保留两位小数
  price.toFixed(2) // 12.34
</script>
```
之所以具有对象特征的原因是字符串、数值、布尔类型数据是 **JavaScript 底层使用 Object 构造函数“包装”来的，被称为包装类型**。

（1）String
`String` 是内置的构造函数，用于创建字符串。

```html
<script>
  // 使用构造函数创建字符串
  let str = new String('hello world!');

  // 字面量创建字符串
  let str2 = '你好，世界！';

  // 检测是否属于同一个构造函数
  console.log(str.constructor === str2.constructor); // true
  console.log(str instanceof String); // false
</script>
```
总结：
1. 实例属性 `length` 用来获取字符串的度长(重点)
2. 实例方法 `split('分隔符')` 用来将字符串拆分成数组(重点)
3. 实例方法 `substring（需要截取的第一个字符的索引[,结束的索引号]）` 用于字符串截取(重点)
4. 实例方法 `startsWith(检测字符串[, 检测位置索引号])` 检测是否以某字符开头(重点)
5. 实例方法 `includes(搜索的字符串[, 检测位置索引号])` 判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false(重点)
5. 实例方法 `toUpperCase` 用于将字母转换成大写
7. 实例方法 `toLowerCase` 用于将就转换成小写
8. 实例方法 `indexOf`  检测是否包含某字符
9. 实例方法 `endsWith` 检测是否以某字符结尾
10. 实例方法 `replace` 用于替换字符串，支持正则匹配
13. 实例方法 `match` 用于查找字符串，支持正则匹配
注：String 也可以当做普通函数使用，这时它的作用是**强制转换成字符串数据类型**。

（2）Number
`Number` 是内置的构造函数，用于创建数值。
```html
<script>
  // 使用构造函数创建数值
  let x = new Number('10')
  let y = new Number(5)

  // 字面量创建数值
  let z = 20

</script>
```
1. 推荐使用字面量方式声明数值，而不是 `Number` 构造函数
2. 实例方法 `toFixed` 用于设置保留小数位的长度.

>案例：商品购物车渲染。
```js
    const goodsList = [
      {
        id: '4001172',
        name: '称心如意手摇咖啡磨豆机咖啡豆研磨机',
        price: 289.9,
        picture: 'https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg',
        count: 2,
        spec: { color: '白色' }
      },
      {
        id: '4001009',
        name: '竹制干泡茶盘正方形沥水茶台品茶盘',
        price: 109.8,
        picture: 'https://yanxuan-item.nosdn.127.net/2d942d6bc94f1e230763e1a5a3b379e1.png',
        count: 3,
        spec: { size: '40cm*40cm', color: '黑色' }
      },
      {
        id: '4001874',
        name: '古法温酒汝瓷酒具套装白酒杯莲花温酒器',
        price: 488,
        picture: 'https://yanxuan-item.nosdn.127.net/44e51622800e4fceb6bee8e616da85fd.png',
        count: 1,
        spec: { color: '青色', sum: '一大四小' }
      },
      {
        id: '4001649',
        name: '大师监制龙泉青瓷茶叶罐',
        price: 139,
        picture: 'https://yanxuan-item.nosdn.127.net/4356c9fc150753775fe56b465314f1eb.png',
        count: 1,
        spec: { size: '小号', color: '紫色' },
        gift: '50g茶叶,清洗球,茶叶罐套装'
      }
    ]

    document.querySelector('.list').innerHTML = goodsList.map(goods => {
      const { name, price, picture, count, spec, gift } = goods
      const giftHtml = gift ? gift.split(",").map(item => `<span class="tag">【赠品】${item}</span>`).join("") : ''
      // 为了避免浮点数计算的精度问题，这里乘以100将小数转换为整数计算，之后再除以100
      const sub_price = ((price * 100 * count) / 100).toFixed(2)
      return `
            <div class="item">
      <img src="${picture}" alt="">
      <p class="name">${name} ${giftHtml}</p>
      <p class="spec">${Object.values(spec).join("/")}</p>
      <p class="price">${price.toFixed(2)}</p>
      <p class="count">x${count}</p>
      <p class="sub-total">${sub_price}</p>
    </div>
      `
    }).join('')

    // 计算总价
    const total_price = goodsList.reduce((total, goods) => {
      const { price, count } = goods
      return total + (price * count * 100) / 100
    }, 0)
    document.querySelector('.amount').textContent = total_price.toFixed(2)
```

>作业案例：购物车，参考 `前端代码\js-进阶\2-购物车结算页面`
# 7 JS 中的面向对象
## 7.1 构造函数的缺点
对比以下通过面向对象的构造函数实现的封装：
```html
<script>
  function Person() {
    this.name = '佚名'
    // 设置名字
    this.setName = function (name) {
      this.name = name
    }
    // 读取名字
    this.getName = () => {
      console.log(this.name)
    }
  }

  // 实例对像，获得了构造函数中封装的所有逻辑
  let p1 = new Person()
  p1.setName('小明')
  console.log(p1.name)

  // 实例对象
  let p2 = new Person()
  console.log(p2.name)
</script>
```
封装是面向对象思想中比较重要的一部分，js面向对象可以通过构造函数实现的封装。
同样的将变量和函数组合到了一起并能通过 this 实现数据的共享，所不同的是借助构造函数创建出来的实例对象之间是彼此不影响的。
但是构造函数存在 `浪费内存` 的问题，因为不同的对象实例化会开辟不同的内存。
## 7.2 原型对象
构造函数通过原型分配的函数是所有对象所共享的。
- JavaScript 规定，每一个构造函数都有一个`prototype` 属性，指向另一个对象，所以我们也称为**原型对象**.
- 原型对象可以挂载函数，**对象实例化不会多次创建原型对象上的函数**，可节约内存。
- 构造函数和原型对象中的 `this` 都指向**实例化的对象**。
```js
let that1
let that2
function Person(name, age) {
	this.name = name
	this.age = age
	that1 = this
}
Person.prototype.say = function () {
	console.log(this.name, this.age)
	that2 = this
}

const p1 = new Person('zhangsan', 18)
p1.say()
console.log(that1 === p1) // true
console.log(that2 === p1) // true
```
- 对象公共的属性和方法可直接定义在 prototype 对象上，这样所有对象的实例就可以共享这些方法。
- 开发中，**一般的公共属性写到构造函数内部，公共方法挂载到构造函数的原型上**。
```html
<script>
  function Person() {
    // 此处未定义任何方法
  }

  // 为构造函数的原型对象添加方法
  Person.prototype.sayHi = function () {
    console.log('Hi~');
  }
	
  // 实例化
  let p1 = new Person();
  p1.sayHi(); // 输出结果为 Hi~
</script>
```
构造函数 `Person` 中未定义任何方法，这时实例对象调用了原型对象中的方法 `sayHi`，接下来改动一下代码：
```html
<script>
  function Person() {
    // 此处定义同名方法 sayHi
    this.sayHi = function () {
      console.log('嗨!');
    }
  }

  // 为构造函数的原型对象添加方法
  Person.prototype.sayHi = function () {
    console.log('Hi~');
  }
  // 在构造函数的原型对象上添加属性
  Person.prototype.name = '小明'

  let p1 = new Person();
  p1.sayHi(); // 输出结果为 嗨!
</script>
```
构造函数 `Person` 中定义与原型对象中相同名称的方法，这时实例对象调用则是构造函中的方法 `sayHi`。
通过以上两个简单示例不难发现 JavaScript 中对象的工作机制：**当访问对象的属性或方法时，先在当前实例对象是查找，然后再去原型对象查找，并且原型对象被所有实例共享。**
结合构造函数原型的特征，实际开发往往会将封装的功能函数添加到原型对象中。
## 7.3 constructor 属性
每个**原型对象**里面都有个 constructor 属性（constructor 构造函数），该属性指向该原型对象的构造函数。
![[Pasted image 20241101094808.png]]
**使用场景：**
将某个对象 `newobject` 赋值给某个构造函数的原型对象，该原型对象就会拥有 `newobject` 对象的属性和方法。但是这样会覆盖该构造函数的原型对象原来的内容，这样修改后的原型对象 constructor 就不再指向当前构造函数了。
此时，**可以在修改后的原型对象中，添加一个 constructor 指回原来的构造函数**。
```js
function Star(name) {
	this.name = name
}

Star.prototype = {
	// 手动利用constructor 指回 Star构造函数
	constructor: Star,
	sing: function () { console.log('唱歌') },
	dance: function () { console.log('跳舞') }
}
console.log(star.prototype.constructor)//指向Star
```
## 7.4 对象原型
对象都会有一个属性 ` __proto__ ` 指向构造函数的 prototype 原型对象，对象之所以可以使用构造函数的 `prototype` 原型对象的属性和方法，就是因为对象有 `__proto__` 属性的存在。
![[Pasted image 20241101095420.png]]

注意：
- ` __proto__ ` 是 JS 非标准属性，用来表明当前实例对象指向哪个原型对象（prototype）。
- prototype 和 `__proto__` 意义相同。
- `__proto__` 对象原型里面也有一个 constructor 属性，**指向创建该实例对象的构造函数**。
![[Pasted image 20241101095611.png]]
## 7.5 原型继承
继承是面向对象编程的另一个特征，通过继承进一步提升代码封装的程度，JavaScript 中大多是借助原型对象实现继承的特性。
核心：**子类继承父类的实例**。
```html
<body>
  <script>
    function Person() {
      this.eyes = 2
      this.head = 1
    }

    // 女人构造函数，继承 Person
    function Woman() {

    }
    // Woman 通过原型来继承 Person 
    Woman.prototype = new Person()   // {eyes: 2, head: 1} 
    // 指回原来的构造函数
    Woman.prototype.constructor = Woman

    // 给女人添加一个方法：生孩子
    Woman.prototype.baby = function () {
      console.log('宝贝')
    }
    const red = new Woman()
    console.log(red)
    

    // 男人构造函数，Person
    function Man() {

    }
    // 通过 原型继承 Person
    Man.prototype = new Person()
    Man.prototype.constructor = Man
    const pink = new Man()
    console.log(pink)
  </script>
</body>
```
## 7.6 原型链
基于原型对象的继承使得不同构造函数的原型对象关联在一起，并且这种关联的关系是一种链状的结构，我们将原型对象的链状结构关系称为原型链。
![[Pasted image 20241101100059.png]]
原型链-查找规则：
- 当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性。
- 如果没有就查找它的原型（也就是 ` __proto__` 指向的 prototype 原型对象）。
- 如果还没有就查找原型对象的原型（Object 的原型对象）
- 依此类推一直找到 Object 为止（null）
- ` __proto__` 对象原型的意义就在于为对象成员查找机制提供一个方向（或路线）。
-  `instanceof` 运算符用于检测构造函数的`prototype` 属性是否出现在某个实例对象的原型链上。
```html
<body>
  <script>
    console.log(Object.prototype) // 输出Object的原型对象
    console.log(Object.prototype.__proto__) // null

    function Person() {

    }
    const ldh = new Person()
    // console.log(ldh.__proto__ === Person.prototype)
    // console.log(Person.prototype.__proto__ === Object.prototype)
    console.log(ldh instanceof Person)  // true
    console.log(ldh instanceof Object)  // true
    console.log(ldh instanceof Array)   // false
    console.log([1, 2, 3] instanceof Array) // true
    console.log(Array instanceof Object) // true
  </script>
</body>
```
>案例：模态框-面向对象编程思想。
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>面向对象封装消息提示</title>
  <style>
    .modal {
      width: 300px;
      min-height: 100px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      position: fixed;
      z-index: 999;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      background-color: #fff;
    }

    .modal .header {
      line-height: 40px;
      padding: 0 10px;
      position: relative;
      font-size: 20px;
    }

    .modal .header i {
      font-style: normal;
      color: #999;
      position: absolute;
      right: 15px;
      top: -2px;
      cursor: pointer;
    }

    .modal .body {
      text-align: center;
      padding: 10px;
    }

    .modal .footer {
      display: flex;
      justify-content: flex-end;
      padding: 10px;
    }

    .modal .footer a {
      padding: 3px 8px;
      background: #ccc;
      text-decoration: none;
      color: #fff;
      border-radius: 2px;
      margin-right: 10px;
      font-size: 14px;
    }

    .modal .footer a.submit {
      background-color: #369;
    }
  </style>
</head>

<body>
  <button id="delete">删除</button>
  <button id="login">登录</button>
  <!-- <div class="modal">
    <div class="header">温馨提示 <i>x</i></div>
    <div class="body">您没有删除权限操作</div>
  </div> -->

  <script>
    function Modal(title = "", content = "") {
      this.modalBox = document.createElement("div");
      this.modalBox.className = "modal";
      this.modalBox.innerHTML = `
        <div class="header">${title} <i>x</i></div>
        <div class="body">${content}</div>
      `;
    }

    // 公共方法
    Modal.prototype = {
      show: function () {
        // 如果已有弹窗，先移除
        if (document.querySelector(".modal")) {
          document.body.removeChild(document.querySelector(".modal"));
        }
        document.body.appendChild(this.modalBox);
      },
      hide: function () {
        document.body.removeChild(this.modalBox);
      },
    };

    // 删除提示
    document.getElementById("delete").onclick = function () {
      const modal = new Modal("温馨提示", "您没有删除权限操作");
      modal.show();
      modal.modalBox.querySelector("i").onclick = function () {
        modal.hide();
      };
    };

    // 登录提示
    document.getElementById("login").onclick = function () {
      const modal = new Modal("友情提示", "请先登录");
      modal.show();
      modal.modalBox.querySelector("i").onclick = function () {
        modal.hide();
      };
    };
  </script>
</body>

</html>
```

# 8 深浅拷贝
>浅拷贝和深拷贝是只针对引用类型的说法。
## 8.1  浅拷贝
直接赋值：只要是对象，都会相互影响，因为是直接拷贝的是对象栈里面的地址。
浅拷贝：拷贝的是地址。如果是一层对象，不相互影响，如果出现多层对象拷贝还是会相互影响。
常见方法：
1. 拷贝对象：`Object.assgin()` / 展开运算符 {...obj} 拷贝对象
2. 拷贝数组：`Array.prototype.concat()` 或者 `[...arr]`
```js
// 多层对象
const pig = {
	name: '佩奇',
	age: 5,
	family: {
		father: '猪爸爸',
		mother: '猪妈妈'
	}
}

const geogry = {}
Object.assign(geogry, pig)

// 浅拷贝，更改geogry的family属性，pig的family属性也会改变
geogry.family.father = '猪老五'
console.log(pig)
console.log(geogry)
```

![[Pasted image 20241101102340.png]]

## 8.2 深拷贝
深拷贝：拷贝的是对象，不是地址.
(1)递归实现深拷贝
如果一个函数在内部可以调用其本身，那么这个函数就是递归函数.
- 简单理解:函数内部自己调用自己, 这个函数就是递归函数
- 递归函数的作用和循环效果类似
- 由于递归很容易发生“栈溢出”错误（stack overflow），所以必须要加退出条件 return
~~~html
<body>
  <script>
    const obj = {
      uname: 'pink',
      age: 18,
      hobby: ['乒乓球', '足球'],
      family: {
        baby: '小pink'
      }
    }
    const o = {}
    // 拷贝函数
    function deepCopy(newObj, oldObj) {
      debugger
      for (let k in oldObj) {
        // 处理数组的问题  一定先写数组 在写 对象 不能颠倒
        if (oldObj[k] instanceof Array) {
          newObj[k] = []
          deepCopy(newObj[k], oldObj[k])
        } else if (oldObj[k] instanceof Object) {
          newObj[k] = {}
          deepCopy(newObj[k], oldObj[k])
        }
        else {
          newObj[k] = oldObj[k]
        }
      }
    }
    deepCopy(o, obj) // 函数调用  两个参数 o 新对象  obj 旧对象
    console.log(o)
    o.age = 20
    o.hobby[0] = '篮球'
    o.family.baby = '老pink'
    console.log(obj)
  </script>
</body>
~~~

(2) js 库 lodash 里面 cloneDeep 内部实现了深拷贝

~~~html
<body>
  <!-- 先引用 -->
  <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
        integrity="sha256-qXBd/EfAdjOA2FGrGAG+b3YBn2tn5A6bhz+LSgYD96k=" crossorigin="anonymous"></script>
  <script>
    const obj = {
      uname: 'pink',
      age: 18,
      hobby: ['乒乓球', '足球'],
      family: {
        baby: '小pink'
      }
    }
    const o = _.cloneDeep(obj)
    console.log(o)
    o.family.baby = '老pink'
    console.log(obj)
  </script>
</body>
~~~
(3)JSON 序列化
~~~html
<body>
  <script>
    const obj = {
      uname: 'pink',
      age: 18,
      hobby: ['乒乓球', '足球'],
      family: {
        baby: '小pink'
      }
    }
    // 把对象转换为 JSON 字符串
    // console.log(JSON.stringify(obj))
    const o = JSON.parse(JSON.stringify(obj))
    console.log(o)
    o.family.baby = '123'
    console.log(obj)
  </script>
</body>
~~~

# 9 异常处理
异常处理是指预估代码执行过程中可能发生的错误，然后最大程度地避免错误的发生导致整个程序无法继续运行。
## 9.1 throw
1. throw 抛出异常信息，程序也会终止执行
2. throw 后面跟的是错误提示信息
3. Error 对象配合 throw 使用，能够设置更详细的错误信息
```html
<script>
  function counter(x, y) {
    if(!x || !y) {
      // throw '参数不能为空!';
      throw new Error('参数不能为空!')
    }
    return x + y
  }
  counter()
</script>
```
## 9.2 try ... catch
```html
<script>
   function foo() {
      try {
        // 查找 DOM 节点
        const p = document.querySelector('.p')
        p.style.color = 'red'
      } catch (error) {
        // try 代码段中执行有错误时，会执行 catch 代码段
        // 查看错误信息
        console.log(error.message)
        // 终止代码继续执行
        return

      }
      finally {
	      //不论程序是否出现错误，finally内的都会执行
          alert('执行')
      }
      console.log('如果出现错误，我的语句不会执行')
    }
    foo()
</script>
```
1. `try...catch` 用于捕获错误信息
2. 将预估可能发生错误的代码写在 `try` 代码段中
3. 如果 `try` 代码段中出现错误后，会执行 `catch` 代码段，并截获到错误信息

## 9.3 debugger
相当于断点调试

# 10 处理 this
`this` 是 JavaScript 最具“魅惑”的知识点，不同的应用场合 `this` 的取值可能会有意想不到的结果，在此对以往学习过的关于【 `this` 默认的取值】情况进行归纳和总结。
## 10.1 普通函数的this
**普通函数**的调用方式决定了 `this` 的值，即【谁调用 `this` 的值指向谁】，如下代码所示：
```html
<script>
  // 普通函数
  function sayHi() {
    console.log(this)  
  }
  // 函数表达式
  const sayHello = function () {
    console.log(this)
  }
  // 函数的调用方式决定了 this 的值
  sayHi() // window
  window.sayHi()
	

// 普通对象
  const user = {
    name: '小明',
    walk: function () {
      console.log(this)
    }
  }
  // 动态为 user 添加方法
  user.sayHi = sayHi
  uesr.sayHello = sayHello
  // 函数调用方式，决定了 this 的值
  user.sayHi()
  user.sayHello()
</script>
```

注： 普通函数没有明确调用者时 `this` 值为 `window`，严格模式下没有调用者时 `this` 的值为 `undefined`。

## 10.2 箭头函数
**箭头函数**中的 `this` 与普通函数完全不同，也不受调用方式的影响，事实上箭头函数中并不存在 `this` ！箭头函数中访问的 `this` 不过是箭头函数所在上一级作用域的 `this` 变量。
```html
<script>
    
  console.log(this) // 此处为 window
  // 箭头函数
  const sayHi = function() {
    console.log(this) // 该箭头函数中的 this 为函数声明环境中 this 一致
  }
  // 普通对象
  const user = {
    name: '小明',
    // 该箭头函数中的 this 为函数声明环境中 this 一致
    walk: () => {
      console.log(this)
    },
    
    sleep: function () {
      let str = 'hello'
      console.log(this)
      let fn = () => {
        console.log(str)
        console.log(this) // 该箭头函数中的 this 与 sleep 中的 this 一致
      }
      // 调用箭头函数
      fn();
    }
  }

  // 动态添加方法
  user.sayHi = sayHi
  
  // 函数调用
  user.sayHi()
  user.sleep()
  user.walk()
</script>
```
在开发中【使用箭头函数前需要考虑函数中 `this` 的值】，**事件回调函数**使用箭头函数时，`this` 为全局的 `window`，因此DOM事件回调函数不推荐使用箭头函数，如下代码所示：

```html
<script>
  // DOM 节点
  const btn = document.querySelector('.btn')
  // 箭头函数 此时 this 指向了 window
  btn.addEventListener('click', () => {
    console.log(this)
  })
  // 普通函数 此时 this 指向了 DOM 对象
  btn.addEventListener('click', function () {
    console.log(this)
  })
</script>
```
同样由于箭头函数 `this` 的原因，**基于原型的面向对象也不推荐采用箭头函数**，如下代码所示：
```html
<script>
  function Person() {
  }
  // 原型对像上添加了箭头函数
  Person.prototype.walk = () => {
    console.log('人都要走路...')
    console.log(this); // window
  }
  const p1 = new Person()
  p1.walk()
</script>
```

## 10.3  改变 this 指向
以上归纳了普通函数和箭头函数中关于 `this` 默认值的情形，不仅如此 JavaScript 中还允许指定函数中 `this` 的指向，有 3 个方法可以动态指定普通函数中 `this` 的指向：
### call
使用 `call` 方法调用函数，同时指定函数中 `this` 的值，使用方法如下代码所示：
```html
<script>
  // 普通函数
  function sayHi() {
    console.log(this);
  }

  let user = {
    name: '小明',
    age: 18
  }

  let student = {
    name: '小红',
    age: 16
  }

  // 调用函数并指定 this 的值
  sayHi.call(user); // this 值为 user
  sayHi.call(student); // this 值为 student

  // 求和函数
  function counter(x, y) {
    return x + y;
  }

  // 调用 counter 函数，并传入参数
  let result = counter.call(null, 5, 10);
  console.log(result);
</script>
```

1. `call` 方法能够在调用函数的同时指定 `this` 的值
2. 使用 `call` 方法调用函数时，第1个参数为 `this` 指定的值
3. `call` 方法的其余参数会依次自动传入函数做为函数的参数
### apply
使用 `call` 方法**调用函数**，同时指定函数中 `this` 的值，使用方法如下代码所示：
```html
<script>
  // 普通函数
  function sayHi() {
    console.log(this)
  }

  let user = {
    name: '小明',
    age: 18
  }

  let student = {
    name: '小红',
    age: 16
  }

  // 调用函数并指定 this 的值
  sayHi.apply(user) // this 值为 user
  sayHi.apply(student) // this 值为 student

  // 求和函数
  function counter(x, y) {
    return x + y
  }
  // 调用 counter 函数，并传入参数
  let result = counter.apply(null, [5, 10])
  console.log(result)
</script>
```

1. `apply` 方法能够在调用函数的同时指定 `this` 的值
2. 使用 `apply` 方法调用函数时，第1个参数为 `this` 指定的值
3. `apply` 方法**第2个参数为数组**，数组的单元值依次自动传入函数做为函数的参数
### bind
`bind` 方法并**不会调用函数**，而是创建一个指定了 `this` 值的新函数，使用方法如下代码所示：
```html
<script>
  // 普通函数
  function sayHi() {
    console.log(this)
  }
  let user = {
    name: '小明',
    age: 18
  }
  // 调用 bind 指定 this 的值
  let sayHello = sayHi.bind(user);
  // 调用使用 bind 创建的新函数
  sayHello()
</script>
```
注：`bind` 方法创建新的函数，与原函数的唯一的变化是改变了 `this` 的值。
>案例：发送短信按钮
```html
<body>
    <button>发送短信</button>
    <script>
        const button = document.querySelector('button');
        button.onclick = function () {
            this.disabled = true;
            // 2s后解除禁用
            setTimeout(function () {
                // 使用bind前，this指向window
                this.disabled = false;
                // 使用bind后，this指向button
                // bind里面的this是指向button的
            }.bind(this), 2000);
        }
    </script>
</body>
```

也可以直接用箭头函数，更简便。
```html
<body>
    <button>发送短信</button>
    <script>
        const button = document.querySelector('button');
        button.onclick = function () {
            this.disabled = true;
            // 2s后解除禁用
            setTimeout(() => {
                // 箭头函数中的this指向上一级作用域，即button
                this.disabled = false;
            }, 2000);
        }
    </script>
</body>
```
# 11 防抖节流
## 11.1 防抖 （debounce）
所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。如搜索框输入、手机号（邮箱号）等输入验证。
![[Pasted image 20241101142406.png]]

>案例：鼠标移入盒子内部，内部数字大小加 1.
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>eee</title>
    <style>
        .box {
            width: 500px;
            height: 500px;
            margin: 0 auto;
            background-color: gray;
            color: tomato;
            font-size: 100px;
            line-height: 500px;
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="box">1</div>
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
        integrity="sha256-qXBd/EfAdjOA2FGrGAG+b3YBn2tn5A6bhz+LSgYD96k=" crossorigin="anonymous"></script>
    <script>
        // 鼠标移动经盒子内部，盒子内部的数字加1
        const box = document.querySelector('.box');
        const mouseMove = function () {
            box.innerHTML = parseInt(box.innerHTML) + 1;
        }
        // 利用lodash的防抖函数，减少事件触发次数
        // 每次鼠标移动，都会触发mouseMove函数，但是只有在200ms后才会执行
        box.addEventListener('mousemove', _.debounce(mouseMove, 200));


    </script>
</body>

</html>
```

上述的防抖函数也可以自己手写实现：
```js
// 鼠标移动经盒子内部，盒子内部的数字加1
const box = document.querySelector('.box');

const mouseMove = function () {
	box.innerHTML = parseInt(box.innerHTML) + 1;
}
// 手写防抖函数
function debounce(fn, delay) {
	let timer = null;
	return function () {
		// 如果有定时器，清除定时器
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn.apply(this, arguments);
		}, delay);
	}
}
box.addEventListener('mousemove', debounce(mouseMove, 200));
```

## 11.2 节流 （throttle）
所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。常用于高频事件，如鼠标移动 `mousemove` 、`resize` 页面尺寸缩放、`scroll` 滚动条滚动。
![[Pasted image 20241101142524.png]]

（1）利用 lodash 库实现
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>eee</title>
    <style>
        .box {
            width: 500px;
            height: 500px;
            margin: 0 auto;
            background-color: gray;
            color: tomato;
            font-size: 100px;
            line-height: 500px;
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="box">1</div>
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
        integrity="sha256-qXBd/EfAdjOA2FGrGAG+b3YBn2tn5A6bhz+LSgYD96k=" crossorigin="anonymous"></script>
    <script>
        // 鼠标移动经盒子内部，盒子内部的数字加1
        const box = document.querySelector('.box');
        const mouseMove = function () {
            box.innerHTML = parseInt(box.innerHTML) + 1;
        }
        // 利用lodash的节流函数
        box.addEventListener('mousemove', _.throttle(mouseMove, 200));
    </script>
</body>

</html>
```

(2) 手写节流函数
```js
        // 鼠标移动经盒子内部，盒子内部的数字加1
        const box = document.querySelector('.box');
        const mouseMove = function () {
            box.innerHTML = parseInt(box.innerHTML) + 1;
        }
        // 节流函数
        function throttle(func, wait) {
            let timer = null;
            return function () {
                // 如果没有定时器，就创建一个定时器
                if (!timer) {
                    timer = setTimeout(() => {
                        func.apply(this, arguments);
                        timer = null;
                    }, wait);
                }
            }
        }
        // 利用lodash的节流函数
        box.addEventListener('mousemove', throttle(mouseMove, 200));
```

>案例：视频播放
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="referrer" content="never" />
  <title>综合案例</title>
  <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    .container {
      width: 1200px;
      margin: 0 auto;
    }

    .video video {
      width: 100%;
      padding: 20px 0;
    }

    .elevator {
      position: fixed;
      top: 280px;
      right: 20px;
      z-index: 999;
      background: #fff;
      border: 1px solid #e4e4e4;
      width: 60px;
    }

    .elevator a {
      display: block;
      padding: 10px;
      text-decoration: none;
      text-align: center;
      color: #999;
    }

    .elevator a.active {
      color: #1286ff;
    }

    .outline {
      padding-bottom: 300px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <a href="http://pip.itcast.cn">
        <img src="https://pip.itcast.cn/img/logo_v3.29b9ba72.png" alt="" />
      </a>
    </div>
    <div class="video">
      <video src="https://v.itheima.net/LapADhV6.mp4" controls></video>
    </div>
    <div class="elevator">
      <a href="javascript:;" data-ref="video">视频介绍</a>
      <a href="javascript:;" data-ref="intro">课程简介</a>
      <a href="javascript:;" data-ref="outline">评论列表</a>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
    integrity="sha256-qXBd/EfAdjOA2FGrGAG+b3YBn2tn5A6bhz+LSgYD96k=" crossorigin="anonymous"></script>
  <script>
    // 获取元素
    const video = document.querySelector('video');
    console.log(video);

    video.ontimeupdate = _.throttle(function () {
      // 获取当前播放时间
      localStorage.setItem('currentTime', video.currentTime);
    }, 1000);

    // 刷新页面后从上次播放的位置继续播放
    video.currentTime = localStorage.getItem('currentTime') || 0;
  </script>
</body>

</html>
```



