>主要介绍 less，官方文档：
>- [Sass](https://sass-lang.com/) 
>- [LESS](https://lesscss.org/)
>- [Stylus](https://stylus-lang.com/)
>- [PostCSS](https://postcss.org/)
# 1 概述
CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域）等概念，计算能力差。
CSS 需要书写大量看似没有逻辑的代码，CSS 冗余度是高的，不方便维护及扩展，不利于复用。  
CSS 预处理器是一种强大的工具，它允许开发者使用一种特殊的编程语言来编写样式代码，然后这些代码会被编译成标准的 CSS 文件，供浏览器使用。预处理器提供了许多 CSS 本身不具备的特性，如变量、嵌套规则、混入（Mixins）、继承选择器等，这些特性使得 CSS 代码更具可读性和易于维护。
**目前市场上主流的CSS预处理器包括Sass、LESS和Stylus**。Sass是最早的CSS预处理器之一，提供了丰富的功能和强大的可编程能力。LESS与Sass类似，完全兼容CSS语法，并提供了变量、嵌套、混合、运算等可编程能力。Stylus则以其简洁的语法和灵活性而著称，它允许省略冒号、分号、逗号和括号，从而可以写出非常简洁的CSS代码。
# 2 CSS 预处理器的使用
要使用 CSS 预处理器，开发者需要在 Web 服务器上安装 CSS 编译工具，或者在开发环境中使用 CSS 预编译器，然后将编译后的 CSS 文件上传到 Web 服务器。预处理器的使用可以通过命令行工具、GUI 界面工具、自动化工具（如 Grunt/Gulp/webpack）或在线编译工具来实现。

# 3 less 基础
注释有两种：
```less
// 此种注释编译后不会出现在css文件中
/* 此种注释会出现在css文件中 */
```
## 3.1 变量
less 中使用 `@变量名:值` 来定义变量。
命名规范：必须有@为前缀，不能包含特殊字符。不能以数字开头，**大小写敏感**。
```less
@color:pink;

body{  
	color:@color;  
}  
a:hover{  
	color:@color;  
}  
```

变量不仅可以用于 css 属性规则中的值，还可以用于选择器名、属性名、URL、`@import` 语句等，变量插入到这些地方时，用法为：`@{变量名}`，需要在变量名外套上花括号。
```less
// 用于选择器名
@my-selector: banner;

// 需要添加 {}
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}

//用作属性名
@property: color;

.widget {
  @{property}: #0ee;
  background-@{property}: #999;
}

// 用作url
@images: '../img';

body {
  color: #444;
  background: url('@{images}/white-sand.png');
}

//用作import语句
@themes: '../../src/themes';

@import '@{themes}/tidal-wave.less';
```
变量的**延迟加载**（lazy evaluation）: 当一个变量被声明多次，会取最后一次的值，并从当前作用域往外寻找变量, 也就是遵循就近原则。
```less
@var: 0;
.class {
  @var: 1;
  .brass {
    @var: 2;
    three: @var;
    @var: 3;
  }
  one: @var;
}

// 编译后
.class {
  one: 1;
}
.class .brass {
  three: 3;
}
```
**属性名变量**（Properties as Variables）：使用 `$property` 语法轻松地将属性视为变量.
```less
.widget {
  color: #efefef;
  // 加上$号，color属性变为变量
  background-color: $color;
}

// 编译后
.widget {
  color: #efefef;
  background-color: #efefef;
}
```

也可以用变量去定义另一个变量：
```less
@fond: @var;
@var: 20px;

body {
    font-size: @fond;
}

// 编译后
body {
  font-size: 20px;
}
```
在定义变量时，在值的外部套上一层花括号，内部定义 css 规则集。按 `@varName()` 调用，可以简化代码。
```less
//声明变量
@background:{background:red;};
@Rules: {
	width: 200px;
	height: 200px;
	border:1px solid □red;
}

#main{
	@background();
}

#wrap{
	@Rules();
}
```



## 3.2 编译
本质上，Less 包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 CSS 文件。所以，我们需要把我们的 less 文件，编译生成为 css 文件，这样我们的 html 页面才能使用。
vscode 中使用 easy less 插件，在保存 less 文件时，会自动编译生成相应的 css 文件。

## 3.3 嵌套
css 中常用到选择器的嵌套:
```css
#header .logo {  
	width: 300px;  
}
```
Less 嵌套写法：
```less
#header {  
	.logo {  
		width: 300px;  
	}  
}
```

如果遇见交集|伪类|伪元素选择器，内层选择器的前面没有 & 符号，则它被解析为父选择器的后代；如果有 `&` 符号，它就被解析为**父元素自身或父元素的伪类**。  
```css
a:hover{  
	color:red;  
}  
```
Less 嵌套写法:
```less
a{  
	&:hover{  
		color:red;  
	}  
}
```
你还可以使用此方法将伪选择器（pseudo-selectors）与混合（mixins）一同使用。下面是一个经典的 clearfix 技巧，重写为一个混合（mixin） (& 表示当前选择器的父级）：
```less
.clearfix {
    display: block;
    zoom: 1;

    &::after {
        content: "";
        display: block;
        font-size: 0;
        height: 0;
        clear: both;
        visibility: hidden;
    }
}
```

## 3.4 运算
任何数字、颜色或者变量都可以参与运算。 Less 提供了加（+）、减（-）、乘（\*）、除（/）算术运算。
```less
@witdh: 10px + 5;  
div {  
	border: @witdh solid red;
	width: (@width + 5) * 2;  
}  
```
注意：
- 运算符中间左右有个空格隔开 `1px + 5 ` 
- 对于两个不同的单位的值之间的运算，运算结果的值取**第一个值的单位** 
- 如果两个值之间只有一个值有单位，则运算结果就取该单位
- 在新版本的 Less 中，除法有变动，应将 `100px / 10` 改为 `(100px / 10)`，否则没有效果
计算结果以操作数最左侧的单位类型为准

```less
@conversion-1: 5cm + 10mm; // 6cm
@conversion-2: 2 - 3cm - 5mm; // -1.5cm
@conversion-3: 3.1 * 2cm; // 6.2cm
@conversion-4: 4px / 2; // 4px / 2

// conversion is impossible
@incompatible-units: 1cm - 1px; // 0.97354167cm

// example with variables
@base: 5%;
@filler: @base * 2; // 10%
@other: @base + @filler; // 15%

@color: #224488 / 2; // #112244
background-color: #112244 + #111; // #223355
```

## 3.5 混合 (Mixins)
混合 (Mixin):一种将一组属性从一个规则集包含 (或混入) 到另一个规则集的方式，可理解为复制粘贴。
**(1)普通混合**
定义了一个 bordered 类, 如果希望在其它规则集中使用这些属性，只需像下面这样输入所需属性的类（class）名称, 按照 `.bordered()` 调用即可。

```less
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

#menu a {
  color: #111;
  // 按照.类名()的方式调用
  .bordered();
}

.post a {
  color: red;
  .bordered();
}
```
生成的 css:
```css
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
#menu a {
  color: #111;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
.post a {
  color: red;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```
使用类选择器时可以在选择器后边添加一个括号，这时我们实际上就创建了一个 mixins, 这种是不会被识别进 css。
```less
// .classname() 不会编译至css中
.myMixin() {
  width: 400px;
  height: 400px;
}

.p4 {
  .myMixin; //写成.myMixin();也可以
}
```

**（2）带参数的混合 (Parametric Mixins)**
混合带参数，参数需要按顺序传递

```less
.border(@width, @style, @color) {
  border: @width @style @color;
}
div {
  .border(1px, solid, #ccc);
}

// 生成的css
div {
  border: 1px solid #ccc;
}
```

当混合的参数有默认值时，也要按顺序传递。
```less
.border(@width, @style, @color: #ccc) {
  border: @width @style @color;
}
div {
  .border(1px, solid);
}

// 会出错
.border(@width: 1px, @style, @color) {
  border: @width @style @color;
}
div {
  .border(solid, #ccc);
}
```

可以在向混合传参是指定参数名称，从而不需要按顺序传入：
```less
.border(@width, @style, @color: #ccc) {
  border: @width @style @color;
}
div {
  .border(@style: solid, @color: red, @width: 100px);
}
```

3.  `@arguments` 变量

`@arguments` 变量包含了传入的所有参数

```less
.box-shadow(@x: 0, @y: 0, @blur: 1px, @color: #000) {
  -webkit-box-shadow: @arguments;
  -moz-box-shadow: @arguments;
  box-shadow: @arguments;
}
.big-block {
  .box-shadow(2px, 5px);
}
```

```css
.big-block {
  -webkit-box-shadow: 2px 5px 1px #000;
  -moz-box-shadow: 2px 5px 1px #000;
  box-shadow: 2px 5px 1px #000;
}
```

4. 高级参数和 `@rest` 变量
如果你希望你的 mixin 接受可变数量的参数，你可以使用 `...`。在变量名之后使用它会将这些参数分配给变量。
```
.mixin(...) {        // matches 0-N arguments
.mixin() {           // matches exactly 0 arguments
.mixin(@a: 1) {      // matches 0-1 arguments
.mixin(@a: 1, ...) { // matches 0-N arguments
.mixin(@a, ...) {    // matches 1-N arguments
```
此外：`@rest` 绑定到变量 `@a` **后**的所有变量，`@arguments` 绑定到所有变量（包括 `@a`）。
```
.mixin(@a, @rest...) {
   // @rest is bound to arguments after @a
   // @arguments is bound to all arguments
}
```

5. **匹配模式 (Pattern-matching)**
在**多个相同的混合中 (参数个数必须相同)**，根据传入的参数值来匹配特定的混合。

```less
.mixin(dark, @color) {
  color: darken(@color, 10%);
}
.mixin(light, @color) {
  color: lighten(@color, 10%);
}
// @_ 表示匹配所有
.mixin(@_, @color) {
  display: block;
}

@switch: light;
.class {
  .mixin(@switch, #888);
}

// 最终生成的css
.class {
  color: #a2a2a2;
  display: block;
}
```

6. 重载混入
定义了多个具有相同名称，当时参数个数不同的混合。less 会 Less 将使用所有可以应用的属性。如果你使用带有一个参数的 mixin，例如 `.mixin(green);`，less 会匹配到前两个混合，然后应用前两个混合的所有属性：
```less
.mixin(@color) {
  color-1: @color;
}
.mixin(@color, @padding: 2) {
  color-2: @color;
  padding-2: @padding;
}
.mixin(@color, @padding, @margin: 2) {
  color-3: @color;
  padding-3: @padding;
  margin: @margin @margin @margin @margin;
}
.some .selector div {
  .mixin(#008000);
}

// 生成的css
.some .selector div {
  color-1: #008000;
  color-2: #008000;
  padding-2: 2;
}
```

## 3.6 扩展 (Extend)
Extend 是一个 Less 伪类，它将它所在的选择器的与它引用的选择器合并，最终编译结果为并集选择器，其性能比混合高，但灵活性比混合低。
```less
nav ul {
  &:extend(.inline);
  background: blue;
}

.inline {
  color: red;
}
```

在上面的规则集中，`:extend` 选择器会将 “extending selector” （`nav ul`） *应用于 `.inline` 类，无论 . inline 类出现在哪里*。`nav ul` 将保持原样，但编译结果不包含 extend （因为 extend 不是 css）。
```css
nav ul {
  background: blue;
}

.inline,
nav ul {
  color: red;
}
```

## 3.7 避免编译
通过加引号可以避免 Less 编译，直接把内容输出到 CSS 中
```less
.banner .inline .header {
  width: '100px + 100px';
  height: 100px + 100px;
}
```
编译后的 css:
```css
.banner .inline .header {
  width: '100px + 100px';
  height: 200px;
}
```

## 3.8 函数（Functions）
Less 内置了多种函数用于转换颜色、处理字符串、算术运算等。这些函数在Less 函数手册中有详细介绍。
函数的用法非常简单。下面这个例子将介绍如何利用 percentage 函数将 0.5 转换为 50%，将颜色饱和度增加 5%，以及颜色亮度降低 25% 并且色相值增加 8 等用法：

```less
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}
```

## 3.9 导入（Import）
你可以导入一个 .less 文件，此文件中的所有变量就可以全部使用了。**如果导入的文件是 .less 扩展名，则可以将扩展名省略掉**：
```less
@import url("syntax.less");//url可以不加。但是可能会有问题
@import "library"; // library.less
@import "typo.css";
```

## 3.10 导出
**手动给每个 less 文件指定导出**，导出必须写到第一行
```less
// out: 路径/文件名
// out: ./mycss/pink.css
```
上述代码含义：在当前目录下创建一个 mycss 文件夹，生成一个 pink. css，生成的 css 文件名该 less 文件名不同

```less
// out: ./mycss/
```
上述代码含义：在当前目录下创建一个 mycss 文件夹，生成跟原 less 文件名相同的 css 文件。

**less 禁止导出**：
```less
// out: false
```

## 3.11 @规则嵌套和冒泡
@ 规则（例如 `@media` 或 `@supports`）可以与选择器以相同的方式进行嵌套。@ 规则会被放在前面，同一规则集中的其它元素的相对顺序保持不变。这叫做冒泡（bubbling）。
```less
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
```
编译为：
```css
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```
