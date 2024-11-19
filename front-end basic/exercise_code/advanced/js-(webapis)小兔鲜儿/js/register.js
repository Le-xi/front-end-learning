let sendCode = document.querySelector('.code');
let t = 10;
// 用户名
const username = document.querySelector('[name="username"]');
const usernameMsg = username.nextElementSibling;
// 手机号
const phone = document.querySelector('[name="phone"]');
const phoneMsg = phone.nextElementSibling;
// 短信验证码输入框
const code = document.querySelector('[name="code"]');
const codeMsg = code.nextElementSibling;
// 密码
const password = document.querySelector('[name="password"]');
const passwordMsg = password.nextElementSibling;
// 确认密码
const repassword = document.querySelector('[name="confirm"]');
const repasswordMsg = repassword.nextElementSibling;
// 用户协议确认
const agree = document.querySelector('.icon-queren');
// 提交按钮
const submit = document.querySelector('.submit');

// 点击发送验证码
sendCode.addEventListener('click', function () {
  let timer = setInterval(() => {
    t--;
    // 按钮不可再次点击
    sendCode.disabled = true;
    // 文字颜色变灰
    sendCode.style.color = '#ccc';
    sendCode.innerHTML = `${t}秒后重新发送`;
    if (t == 0) {
      // 按钮可再次点击
      sendCode.disabled = false;
      sendCode.style.color = "#27BA9B";
      clearInterval(timer);
      sendCode.innerHTML = '发送验证码';
      t = 10;
    }
  }, 1000);
});

// 验证元素合法性函数
function checkElement(element, regObj, msgSpan, msg) {
  if (!regObj.test(element.value)) {
    msgSpan.innerHTML = msg;
    return false;
  } else {
    msgSpan.innerHTML = '';
    return true;
  }
}

// 验证用户名合法性
const userNameReg = /^[a-zA-Z0-9_-]{6,10}$/;
username.addEventListener("change", function () {
  checkElement(username, userNameReg, usernameMsg, '用户名格式不正确,请输入6-10位字母、数字、下划线、减号');
});

// 验证手机号合法性
const phoneReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
phone.addEventListener("change", function () {
  checkElement(phone, phoneReg, phoneMsg, '手机号格式不正确');
});

// 验证短信验证码合法性
const codeReg = /^\d{6}$/;
code.addEventListener("change", function () {
  checkElement(code, codeReg, codeMsg, '验证码格式不正确');
});

// 验证密码合法性
const passwordReg = /^[a-zA-Z0-9_-]{6,16}$/;
password.addEventListener("change", function () {
  checkElement(password, passwordReg, passwordMsg, '密码格式不正确,请输入6-16位字母、数字、下划线、减号');
});
// 验证确认密码
repassword.addEventListener("change", function () {
  if (password.value !== repassword.value) {
    repasswordMsg.innerHTML = '两次密码输入不一致';
    return false;
  } else {
    repasswordMsg.innerHTML = '';
    return true;
  }
});

// 用户协议确认
agree.addEventListener('click', function () {
  agree.classList.toggle('icon-queren2');
});

// 提交按钮验证
submit.addEventListener('click', function (e) {
  if (!agree.classList.contains('icon-queren2')) {
    alert('请勾选同意用户协议');
    e.preventDefault();
    return;
  }
  if (checkElement(username, userNameReg, usernameMsg, '用户名格式不正确,请输入6-10位字母、数字、下划线、减号') &&
    checkElement(phone, phoneReg, phoneMsg, '手机号格式不正确') &&
    checkElement(code, codeReg, codeMsg, '验证码格式不正确') &&
    checkElement(password, passwordReg, passwordMsg, '密码格式不正确,请输入6-16位字母、数字、下划线、减号') &&
    repassword.value === password.value) {
    alert('注册成功');
  } else {
    alert('请检查输入是否正确');
    e.preventDefault();
  }
});