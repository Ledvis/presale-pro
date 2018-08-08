import Swiper from 'swiper';

export default function init() {
  const swiper = new Swiper('.swiper-container', {
    slideToClickedSlide: 'true',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // swiper.slideTo(2, 1000, false);
}
