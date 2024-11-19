>官方文档：[Get started with Bootstrap · Bootstrap v5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
>中文官网链接：[Bootstrap中文网 铂特优选](https://www.bootcss.com/)
>Bootstrap 属于 CSS 相关的框架，来自 Twitter（推特），是目前最受欢迎的前端框架。Bootstrap 是基于 HTML、CSS 和 JAVASCRIPT 的，它简洁灵活，使得 Web 开发更加快捷。主要用于响应式布局的开发。本文档参考官方英文文档进行了总结。

# 1 使用方式
1. **在项目根目录中创建新的 `index.html` 文件**。引入 `<meta name=“viewport”>` 标签，以便在移动设备中[实现正确的响应行为](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)。
2. **引入 Bootstrap 的 CSS 和 JS**。将 `<link>` 标签放在 CSS 的 `<head>` 中，将 JavaScript Bundle 包的 `<script>` 标签（包括用于定位下拉列表、弹出器和工具提示的 Popper 包）放在结束 `</body>` 之前。
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </body>
</html>
```

3. 如不需要使用下拉列表、弹出窗口或工具提示，可以不引入 Popper 包。
```html
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
```

4. Bootstrap 默认的 `box-sizing` 为 `border-box`，这可确保 `padding` 不会影响元素的最终计算宽度，但可能会导致某些第三方软件（如 Google Maps 和 Google Custom Search Engine）出现问题。可使用如下代码将 `box-sizing` 切换回 `content-box` :
```css
.selector-for-some-widget {
  box-sizing: content-box;
}
```

# 2 断点（Break points）
>断点是可自定义的宽度，用于确定响应式布局在 Bootstrap 中跨设备或视区大小的行为方式。通常使用媒体查询创建 css 中的断点。

Bootstrap 包括 6 个默认断点，有时称为_网格层 (grid tiers)_，**断点指的是设备屏幕的宽度。**

| Breakpoint        | 类前缀    | Dimensions (屏幕尺寸) |
| ----------------- | ------ | ----------------- |
| Extra small       | _None_ | <576px            |
| Small             | `sm`   | ≥576px            |
| Medium            | `md`   | ≥768px            |
| Large             | `lg`   | ≥992px            |
| Extra large       | `xl`   | ≥1200px           |
| Extra extra large | `xxl`  | ≥1400px           |

断点可以通过 Sass 进行自定义，可以在下载的源文件中的 sass `_variables.scss` 样式表的 Sass 映射中进行修改。
```sass
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

# 3 容器（Container）
容器是 Bootstrap 的基本构建块，用于在给定设备或视口中包含、填充和对齐内容。
容器是 Bootstrap 中最基本的布局元素，**在使用我们的默认网格系统时是必需的**。容器用于包含、填充和（有时）将内容居中。虽然容器_可以_嵌套，但大多数布局不需要嵌套容器。
Bootstrap 带有三个不同的容器。
（1）默认容器（Default container）
默认 `.container` 类是一个响应式的固定宽度容器，这意味着它的最大 `宽度` 在每个断点都会发生变化。
```html
<div class="container">
  <!-- Content here -->
</div>
```
（2）响应式容器（Responsive containers）
响应式容器在容器宽度到达指定的断点前，一直为 100%，之后为每个较高的断点应用 `max-width` s。例如，`.container-sm` 的宽度为 100%，可以一直持续到到达 `sm` 断点，之后将使用 `md`、`lg`、`xl` 和 `xxl` 进行扩展。
```html
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```

(3) 液体容器（Fluid containers）
 `.container-fluid` 为全宽容器，宽度一直为 100%。
```html
<div class="container-fluid">
  ...
</div>
```

（4）各种容器的**最大宽度**总结表如下：

| 容器类名               | Extra small<br><576px | Small<br>≥576px | Medium<br>≥768px | Large<br>≥992px | X-Large<br>≥1200px | XX-Large<br>≥1400px |
| ------------------ | ------------------------- | ------------------- | -------------------- | ------------------- | ---------------------- | ----------------------- |
| `.container`       | 100%                      | 540px               | 720px                | 960px               | 1140px                 | 1320px                  |
| `.container-sm`    | 100%                      | 540px               | 720px                | 960px               | 1140px                 | 1320px                  |
| `.container-md`    | 100%                      | 100%                | 720px                | 960px               | 1140px                 | 1320px                  |
| `.container-lg`    | 100%                      | 100%                | 100%                 | 960px               | 1140px                 | 1320px                  |
| `.container-xl`    | 100%                      | 100%                | 100%                 | 100%                | 1140px                 | 1320px                  |
| `.container-xxl`   | 100%                      | 100%                | 100%                 | 100%                | 100%                   | 1320px                  |
| `.container-fluid` | 100%                      | 100%                | 100%                 | 100%                | 100%                   | 100%                    |
可以看出，**容器的最大宽度是比当前屏幕尺寸断点小一些的**，可以保证内容的美观性。

（5）在 `scss/_variables.scss` 中可以更改各种容器的最大宽度。
```sass
$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1320px
);
```

# 4 网格系统（Grid System）
Bootstrap 的网格系统使用一系列容器、行和列来布局和对齐内容，其本质上使用的时 flex 布局，Bootstrap **将屏幕分为 12 列。**
每列都有水平 `padding`（称为 **gutter**），用于控制它们之间的间距。可以使用具有负的 `margin` 值抵消此 `填充`，以确保列中的内容在视觉上与左侧对齐。
Bootstrap 的网格系统可以适应所有六个默认断点以及自定义的断点。以下是网格在这些断点之间的变化情况：

|                       | xs<br><576px                                                      | sm<br>≥576px | md<br>≥768px | lg <br>≥992px | xl  <br>≥1200px | xxl  <br>≥1400px |
| --------------------- | ------------------------------------------------------------------- | -------------- | -------------- | ------------- | --------------- | ---------------- |
| Container `max-width` | None (auto)                                                         | 540px          | 720px          | 960px         | 1140px          | 1320px           |
| Class prefix          | `.col-`                                                             | `.col-sm-`     | `.col-md-`     | `.col-lg-`    | `.col-xl-`      | `.col-xxl-`      |
| # of columns          | 12                                                                  |                |                |               |                 |                  |
| Gutter width          | 1.5rem (.75rem on left and right)                                   |                |                |               |                 |                  |
| Custom gutters        | [Yes](https://getbootstrap.com/docs/5.3/layout/gutters/)            |                |                |               |                 |                  |
| Nestable              | [Yes](https://getbootstrap.com/docs/5.3/layout/grid/#nesting)       |                |                |               |                 |                  |
| Column ordering       | [Yes](https://getbootstrap.com/docs/5.3/layout/columns/#reordering) |                |                |               |                 |                  |

默认情况下，多个 `col` 在（所有断点）每个设备和视口（从 `xs` 到 `xxl`）的网格布局等宽分布。
```html
<div class="container text-center">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
```

从最小尺寸到最大屏幕尺寸，一直都是等宽分布：
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241021103408.png)

(1) 可以通过类似 `col-sm-6` 来显示指定每列的宽度和布局响应。当屏幕尺寸大于等于 `sm` (576px) ，该列占 6 份；当屏幕尺寸小于 `sm` (576px) 时，该列宽度为 100%，即占满 12 份，此时多个 col 会在竖直方向上堆叠显示。
```html
<div class="container text-center">
  <div class="row">
    <div class="col-sm-8">col-sm-8</div>
    <div class="col-sm-4">col-sm-4</div>
  </div>
  <div class="row">
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
  </div>
</div>
```
屏幕尺寸大于等于 `sm` (576px) 时的效果：
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241021103909.png)

屏幕尺寸小于 `sm` (576px) 时的效果：
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241021104002.png)

（2）可根据需要为每个层使用不同类的组合，进行混搭。
```html
<div class="container text-center">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>
</div>
```
屏幕尺寸大于等于 `md` (768px) 时的效果：
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241021104502.png)

屏幕尺寸小于 `md` (768px) 时的效果，一行最多显示 12 份，**多了会换行显示**：
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241021104600.png)

（3）`row-cols-*` 类可以设置类似表格的布局，需要添加到 `.row` 类上。普通的 `.col-*` 类适用于单个列（例如，`.col-md-4`）。在 `.row` 上设置为快捷方式使用， `.row-cols-auto` 可以为列提供自然宽度。
```html
<div class="container text-center">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```
`row-cols-1` 表示每行 1 列，每列占 12 份。

屏幕尺寸大于等于 `md` (768px) 时, 每行 4 列：
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241021105615.png)

屏幕尺寸小于 md, 大于 sm 时，每行 2 列：
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241021105649.png)
屏幕尺寸小于 sm 时，每行 1 列：
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241021105717.png)

（4）嵌套
在现有 `.col-sm-*` 列中添加新的 `.row` 和一组 `.col-sm-*` 列可以使用嵌套。嵌套行应包括一组总和不超过 12 的列（不要求使用所有 12 个可用列）。
```html
<div class="container text-center">
  <div class="row">
    <div class="col-sm-3">
      Level 1: .col-sm-3
    </div>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-8 col-sm-6">
          Level 2: .col-8 .col-sm-6
        </div>
        <div class="col-4 col-sm-6">
          Level 2: .col-4 .col-sm-6
        </div>
      </div>
    </div>
  </div>
</div>
```
屏幕尺寸大于 sm 时的效果：
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241021110002.png)

屏幕尺寸小于 sm 的效果：
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241021110031.png)
# 5 列（Columns）
## 对齐
(1) 垂直对齐方式
bootstrap 的网格系统的主轴默认为 x 轴，纵轴默认为 y 轴。
使用 `align-items-*` 类更改垂直对齐方式。`*` 的取值有 start、center、end，分别表示垂直顶部、垂直居中、垂直底部对齐。
```html
<div class="container text-center">
  <div class="row align-items-center">
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
    <div class="col">
      One of three columns
    </div>
  </div>
</div>
```
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241021112328.png)

使用 `align-self-*` 设置某个列单独的垂直对齐方式，`*` 的取值有 start、center、end。
```html
<div class="container text-center">
  <div class="row">
    <div class="col align-self-start">
      One of three columns
    </div>
    <div class="col align-self-center">
      One of three columns
    </div>
    <div class="col align-self-end">
      One of three columns
    </div>
  </div>
</div>
```
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241021112454.png)

(2) 水平对齐方式
使用响应式 `justify-content-*` 类来进行控制，`*` 的取值有 start (靠左)、center 居中、end 靠右、between、around、evenly.
```html
<div class="container text-center">
  <div class="row justify-content-center">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
</div>
```

![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241021113210.png)

## 列排序
使用 `.order-` 类来控制内容的**视觉顺序**。这些类是响应式的，因此可以通过断点（例如，`.order-1 .order-md-2`）设置 `顺序`。包括对所有六个网格层的 `1` 到 `5` 的支持。如果需要更多的 `.order-*` 类，可以通过 Sass 变量修改默认数字。
```html
<div class="container text-center">
  <div class="row">
    <div class="col">
      First in DOM, no order applied
    </div>
    <div class="col order-5">
      Second in DOM, with a larger order
    </div>
    <div class="col order-1">
      Third in DOM, with an order of 1
    </div>
  </div>
</div>
```
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241021113631.png)

还有响应式 `.order-first` 和 `.order-last` 类，它们分别通过应用 `order： -1` 和 `order： 6` 来更改元素 `的顺序`。这些类也可以根据需要与编号的 `.order-*` 类混合。

## 列偏移
使用 `.offset-md-*` 类将列**向右移动**。这些类将列的左边距增加 `*` 列。例如，`.offset-md-4` 将 `.col-md-4` 移动到四列上。
```html
<div class="container text-center">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
  </div>
  <div class="row">
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  </div>
  <div class="row">
    <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
  </div>
</div>
```
![](https://github.com/Le-xi/front-end-learning/blob/main/images/Pasted_image_20241021113910.png)

# 6 Display 属性
使用 `d-{value}` 或 `d-{breakpoint}-{value}` 对元素赋予类名，进而控制元素的 dispaly 属性。
其中 _value_ 是以下之一：
- `none`
- `inline`
- `inline-block`
- `block`
- `grid`
- `inline-grid`
- `table`
- `table-cell`
- `table-row`
- `flex`
- `inline-flex`
媒体查询会影响具有给定断点_或更大_断点的屏幕宽度。例如，`.d-lg-none` 在 `lg`、`xl` 和 `xxl` 屏幕上设置 `display： none;`。

使用组合即可实现在某种特定的屏幕尺寸下隐藏元素的功能，

|Screen size|Class|
|---|---|
|Hidden on all|`.d-none`|
|Hidden only on xs|`.d-none .d-sm-block`|
|Hidden only on sm|`.d-sm-none .d-md-block`|
|Hidden only on md|`.d-md-none .d-lg-block`|
