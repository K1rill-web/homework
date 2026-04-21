export const heroSlider = () => {
  new Swiper(".hero__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: 'bullets',
    },
    navigation: {
      prevEl: ".hero__slider-button--prev",
      nextEl: ".hero__slider-button--next",
    },
  });
};
