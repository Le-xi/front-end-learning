// 登录方式切换
const tab_nav = document.querySelector('.tab-nav');
const tab_pane = document.querySelectorAll('.tab-pane');
const login_form = document.querySelector('form');

tab_nav.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    // 取消之前的active类名
    tab_nav.querySelector('.active').classList.remove('active');
    // 添加active类名至当前点击的元素
    e.target.classList.add('active');
  }

  // 获取当前点击元素的索引
  const index = Array.from(tab_nav.children).indexOf(e.target);
  // 隐藏之前的tab-pane
  tab_pane.forEach(function (item) {
    item.style.display = 'none';
  });
  // 显示当前点击的tab-pane
  tab_pane[index].style.display = 'block';
});

// 登录验证
login_form.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = login_form.username.value;
  const password = login_form.password.value;

  // 验证用户协议是否勾选
  if (!login_form.agree.checked) {
    alert('请勾选用户协议');
    return;
  }

  // 验证用户名和密码是否为空
  if (!username || !password) {
    alert('用户名和密码不能为空');
    return;
  }

  // 登录成功，记录用户名到本地存储
  localStorage.setItem('username', username);
  location.href = 'index.html';
});
console.log(login_form);