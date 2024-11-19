// 获取三个图片盒子
const smallImgBox = document.querySelector('.small')
const midImgBox = document.querySelector('.middle')
const largeImgBox = document.querySelector('.large')
const layer = document.querySelector('.layer')

// 需求1：鼠标经过小盒子，中等盒子显示对应小盒子的图片
smallImgBox.addEventListener('mouseover', function (e) {
  // 判断当前鼠标经过的元素是否是图片
  if (e.target.tagName !== 'IMG') return

  // 删去所有小盒子的active类名
  this.querySelector('.active').classList.remove('active')
  // 给当前鼠标经过的图片添加active类名
  e.target.parentNode.classList.add('active')

  // 设置中等盒子的图片地址、大盒子的背景图片地址
  const midImg = midImgBox.querySelector('img')
  midImg.src = e.target.src
  largeImgBox.style.backgroundImage = `url(${e.target.src})`
})

// 需求2：鼠标经过中等盒子，大盒子显示对应中等盒子的图片;
// 离开中等盒子，大盒子隐藏（延迟0.2s）
let timerId = null
midImgBox.addEventListener("mouseenter", () => {
  clearTimeout(timerId)
  largeImgBox.style.display = 'block'
  // 显示黑色遮罩
  layer.style.display = 'block'
})
midImgBox.addEventListener("mouseleave", () => {
  timerId = setTimeout(() => {
    largeImgBox.style.display = 'none'
    // 隐藏黑色遮罩
    layer.style.display = 'none'
  }, 200)
})

// 需求3：鼠标经过大盒子时，大盒子显示；离开大盒子时，大盒子隐藏（延迟0.2s）
largeImgBox.addEventListener("mouseenter", () => {
  clearTimeout(timerId)
  largeImgBox.style.display = 'block'
})
largeImgBox.addEventListener("mouseleave", () => {
  timerId = setTimeout(() => {
    largeImgBox.style.display = 'none'
  }, 200)
})

// 需求4：鼠标在中等盒子中移动时，黑色遮罩跟随鼠标移动
midImgBox.addEventListener("mousemove", e => {
  midWidth = midImgBox.offsetWidth
  midHeight = midImgBox.offsetHeight
  layerWidth = layer.offsetWidth
  layerHeight = layer.offsetHeight
  let x = e.pageX - midImgBox.getBoundingClientRect().left
  // 为了避免竖直滚动条的影响，需要减去滚动的距离
  let y = e.pageY - midImgBox.getBoundingClientRect().top - document.documentElement.scrollTop

  // 限定x、y的范围，仅在中等盒子内移动
  // x为鼠标相对中等盒子左边界的位移，y为鼠标相对中等盒子top的位移
  if (x >= 0 && x <= midWidth && y >= 0 && y <= midHeight) {
    // 计算黑色遮罩left的位置
    if (x <= layerWidth / 2) {
      // 鼠标相对中等盒子的位移x小于黑色遮罩的宽度的一半时，设置黑色遮罩的left为0
      move_x = 0
    }
    if (x > layerWidth / 2 && x < midWidth - layerWidth / 2) {
      // 鼠标相对中等盒子的位移x大于黑色遮罩的宽度的一半，小于中等盒子的宽度减去黑色遮罩的宽度的一半时，
      // 设置黑色遮罩的left为x减去黑色遮罩的宽度的一半
      move_x = x - layerWidth / 2
    }
    if (x >= midWidth - layerWidth / 2) {
      // 鼠标相对中等盒子的位移x大于中等盒子的宽度减去黑色遮罩的宽度的一半时，
      // 设置黑色遮罩的left为中等盒子的宽度减去黑色遮罩的宽度
      move_x = midWidth - layerWidth
    }

    if (y <= layerHeight / 2) {
      move_y = 0
    }
    if (y > layerHeight / 2 && y < midHeight - layerHeight / 2) {
      move_y = y - layerHeight / 2
    }
    if (y >= midHeight - layerHeight / 2) {
      move_y = midHeight - layerHeight
    }
    // 设置黑色遮罩的位置
    layer.style.left = move_x + 'px'
    layer.style.top = move_y + 'px'

    // 设置大盒子的背景图片的位置
    // 因为大盒子的大小为中等盒子大小的2倍，所以大盒子的背景图片的位置应该是中等盒子的2倍
    largeImgBox.style.backgroundPosition = `${-2 * move_x}px ${-2 * move_y}px`
  }
})
