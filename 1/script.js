const slides = document.querySelectorAll('.accord__item');

for (const slide of slides) {
  slide.addEventListener('click', () => {
    removeClasses();
    slide.classList.add('active');
  });
}

function removeClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}