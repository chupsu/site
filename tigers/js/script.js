"use strict";

// include('module/type-device.js');
// include('module/test-webp.js');
// include('module/class-remove.js');
// include('module/body-scroll-popup.js');
// include('module/input-placeholder-target-null.js');
// include('module/adaptive-spollers.js');
// include('module/dynamic-adaptive.js');
// include('module/popups.js');
const anchors = document.querySelectorAll('.anchor');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

// include('../../node_modules/jquery/dist/jquery.js');
// include('../../node_modules/slick-carousel/slick/slick.js');
// include('../../node_modules/swiper/swiper-bundle.js');
// include('module/sliders.js');
// include('../../node_modules/mixitup/dist/mixitup.js');
// include('../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js');
// include('../../node_modules/rateyo/src/jquery.rateyo.js');;
// include('../../node_modules/ion-rangeslider/js/ion.rangeSlider.js');
// include('../../node_modules/jquery-form-styler/dist/jquery.formstyler.js');


window.addEventListener('DOMContentLoaded', () => {
  //---------- Timer
  const deadline = '2021-12-02';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor(t / (1000 * 60 * 60) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);
});
// window.onload = function () {
//   //---------- При клике
//   document.addEventListener("click", documentActions);
//   function documentActions(e) {
//     const targetElement = e.target;
//     if (targetElement.classList.contains('')) {

//     }
//   }
//   //---------- Без клика
//   if (document.querySelector('.')) {

//   }
// };

// $(function () {

// });