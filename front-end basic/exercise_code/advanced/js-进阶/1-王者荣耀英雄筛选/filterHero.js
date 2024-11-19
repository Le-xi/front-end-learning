// 渲染英雄列表函数
function renderHeroList(heroList) {
  const heroListDom = document.querySelector('.herolist');
  heroListDom.innerHTML = '';
  heroList.forEach(hero => {
    const li = document.createElement('li');
    const { icon, name } = hero;
    li.innerHTML = `
    <a href="#" target="_blank"><img src="${icon}" width="91" height="91" alt="${name}" />${name}</a>
    `;
    heroListDom.appendChild(li);
  });
}

renderHeroList(heroArr);

// 筛选英雄列表
// 利用循环绑定多个事件（注意这里li里面包含多个元素，事件委托比较麻烦）
const filterHeroLiArr = document.querySelectorAll('.types-ms>li');
filterHeroLiArr.forEach(li => {
  li.addEventListener('click', function () {
    // 选中样式切换
    filterHeroLiArr.forEach(li => li.classList.remove('current'));
    this.classList.add('current');

    // 进行筛选
    let filterHeroList = [];
    const heroType = this.getAttribute('data-type');
    const heroPType = this.getAttribute('data-ptype');
    console.log(heroType);
    // +heroType 将字符串转换为数字
    filterHeroList = heroArr.filter(hero => hero.hero_type == +heroType || hero.pay_type == +heroPType);
    if (+heroType == 0 && +heroPType == 0) {
      filterHeroList = heroArr;
    }
    renderHeroList(filterHeroList);
  });
});