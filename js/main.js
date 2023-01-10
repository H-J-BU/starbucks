const badgeEl = document.querySelector('header .badges');

// window.addEventListener('scroll', function () {
//   console.log('scroll!');
// });
// 원래는 이것처럼 써야하지만 그럴경우 스크롤! 이것이 많이 쓰여지니깐 이걸 줄이기 위해서 코드 바꿈.

window.addEventListener('scroll',  _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
// 배지 숨기기
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(badgeEl, .6, {
    opacity: 0,
    display: 'none'
  }); 
} else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });  
  }
}, 300));
// _.throttle(함수, 시간) 300은 0.3초 의미. 위도우에서 스크롤하면 0.3초단위로 일정시간에 한번씩만 실행되게 함으로써 오류줄임.


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.7초 후에 이렇게 요소들이 변함
    opacity: 1
  });
});

// new는 생성자(클래스)에 해당
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper ('.promotion .swiper-container', {
  // direction: 'horizontal' 이 기본값이다. 따로 명시 할 필요 없다.
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백 10px
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기 
  loop: true,
  // autoplay: {
  //   delay: 5000 //5초 단위로 슬라이드가 움직임
  // }
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 
    clickable: true, //사용자가  페이지 번호 요소 제어가능
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  // !가 붙으면 그 반대가 되게 해주세요 의미. 만약 isHidePromotion이 false라면 true가 되고, 그 반대값이면 false로 됨.
  if (isHidePromotion) {
// isHidePromotion이 false라면 True를 반환시키면서 '숨김처리'
    promotionEl.classList.add('hide');
  } else {
// 그 반대일 경우는 '보임처리'
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, 
    random(1.5, 2.5), 
    {//옵션
      y: size,
      repeat: -1, //무한반복
      yoyo: true, 
      ease: Power1.easeInOut,
      delay: random(0, delay) //지연시간 옵션을 의미
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //트리거 훅은 감시하는 요소가 뷰포트의 어떤 지점에서 보여지는지 판단하는 요소. 만약 보여진다고 판단되면 기능 실행.
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});