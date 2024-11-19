const login_a = document.querySelector('.xtx_navs li:nth-child(1)');
const register_a = login_a.nextElementSibling;


// 如果本地存储有用户名，则显示用户名
function render() {
  // 获取本地存储的用户名
  const username = localStorage.getItem('username');
  if (username) {
    login_a.innerHTML = `<a href="javascript:;"><i class="iconfont icon-user">${username}</i></a>`;
    register_a.innerHTML = `<a href="javascript:;">退出登录</a>`;
  } else {
    login_a.innerHTML = `<a href="login.html">请先登录</a>`;
    register_a.innerHTML = `<a href="register.html">免费注册</a>`;
  }
}
render();

// 退出登录
register_a.addEventListener('click', function () {
  localStorage.removeItem('username');
  render();
});
