"use strict";

@@include('../../node_modules/swiper/swiper-bundle.js');
@@include('module/sliders.js');

window.onload = function () {
  document.addEventListener("click", documentActions);
  function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('.overlay__btn')) {
      e.preventDefault();
      const overlay = document.querySelector('.overlay');
      const overlayBtn = document.querySelector('.overlay__btn');
      overlayBtn.style.opacity = '0';
      overlayBtn.style.transform = 'translateY(20px)';
      const hideOverlay = setTimeout(function () {
        overlay.style.display = 'none';
      }, 5000);
    };
  }
};