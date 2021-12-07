if (document.querySelector('.sliders')) {
  let sliderThumb = new Swiper('.slider-thumb__body', {
    slidesPerView: 3.2,
    spaceBetween: 15,
    wrapperClass: 'slider-thumb__items',
    slideClass: 'slider-thumb__item',
    breakpoints: {
      950: {
        slidesPerView: 4,
      },
    },
  });
  let ыliderMain = new Swiper('.slider-main', {
    slidesPerView: 1,
    wrapperClass: 'slider-main__items',
    slideClass: 'slider-main__item',
    navigation: {
      prevEl: '.slider-main__prev',
      nextEl: '.slider-main__next',
    },
    pagination: {
      el: '.slider-main__pagi',
      clickable: true,
    },
    thumbs: {
      swiper: sliderThumb,
    },
  });
}