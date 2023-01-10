const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 이 작성분은 스타벅스 서브메뉴의 서치 돋보기를 클릭만 해도 인풋박스가 포커스 되도록 만드는 것
searchEl.addEventListener('click', function() {
  // logic입력
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
  // searchInfutEl에다가 html의 어떤 속성을 지정하겠다는 의미
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  // 웹에서 서치 인풋에 아무것도 없을 때 통합검색이 사라지게 만듦
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2023년이면 이 숫자가 저 this-year 괄호 안으로 들어감.