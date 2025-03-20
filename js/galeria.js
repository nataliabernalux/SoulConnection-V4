// Inicializar el slider de miniaturas
const thumbsSwiper = new Swiper(".thumbs-slider", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  watchSlidesProgress: true,
});

// Inicializar el slider principal (con miniaturas y navegación)
const mainSwiper = new Swiper(".main-slider", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: { swiper: thumbsSwiper }, // Vincular con las miniaturas
});
