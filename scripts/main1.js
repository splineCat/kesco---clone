/* 1. 메인영역 */
let images = [
  'src/img/main_visual1.png',
  'src/img/main_visual2.png',
  'src/img/main_visual3.png',
  'src/img/main_visual4.png',
];
let currentIndex = 0; // 현재 이미지 인덱스

function changeBackgroundImage() {
  // 인덱스 증가. 이미지 수를 초과하면 0으로 리셋
  currentIndex = (currentIndex + 1) % images.length;

  // .main_visual_sec 요소를 가져와 배경 이미지 변경
  let section = document.querySelector('.main_visual_sec');
  section.style.backgroundImage = 'url(' + images[currentIndex] + ')';
  section.style.backgroundPosition = 'center center';
  section.style.backgroundSize = 'cover';
  section.style.backgroundRepeat = 'no-repeat';
}
// 매 3000 밀리초(3초)마다 changeBackgroundImage 함수 호출
setInterval(changeBackgroundImage, 3000);

/* 2. 뉴스영역 news_box - 탭메뉴 구현 */
const tabList = document.querySelectorAll('.tab_list');
const listBoxs = document.querySelectorAll('.list_box');

for (let i = 0; i < tabList.length; i++) {
  tabList[i].addEventListener('click', function () {
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('active');
      listBoxs[j].classList.remove('on');
    }
    this.classList.add('active');
    listBoxs[i].classList.add('on');
  });
}

/* 2. 뉴스영역 popup_box - 배너 슬라이드 구현 */
const btnNext = document.querySelector('.btn_next');
const btnPrev = document.querySelector('.btn_prev');
const popupSlides = document.querySelector('.popup_list');
const popupList = document.querySelectorAll('.popup_list li');
const slideWidth = 440;
const slideSpeed = 300;
let curIndex = 0;
const totalNum = popupList.length;
const currentPage = document.querySelector('.current_page');
const totalPage = document.querySelector('.total_page');

currentPage.innerText = curIndex + 1;
totalPage.innerText = totalNum;

let slideInterval = setInterval(goToNextSlide, 3000);

btnNext.addEventListener('click', goToNextSlide);
btnPrev.addEventListener('click', goToPrevSlide);

function goToNextSlide() {
  curIndex = (curIndex + 1) % totalNum;
  updateSlidePosition();
  resetInterval();
}

function goToPrevSlide() {
  curIndex = (curIndex - 1 + totalNum) % totalNum;
  updateSlidePosition();
  resetInterval();
}

function updateSlidePosition() {
  popupSlides.style.transition = slideSpeed + 'ms';
  popupSlides.style.transform = `translateX(-${slideWidth * curIndex}px)`;
  currentPage.innerText = curIndex + 1;
}

function resetInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(goToNextSlide, 3000);
}
