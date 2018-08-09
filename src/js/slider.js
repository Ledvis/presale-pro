import Swiper from 'swiper';

export default function init() {
  const timelineSwiper = new Swiper('.timeline__wrapper', {
    grabCursor: true,
    centeredSlides: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is <= 767px
      767: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // when window width is <= 1169px
      1169: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
  timelineSwiper.slideTo(2, 1000, false);

  const teamSwiper = new Swiper('.team__wrapper', {
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
      // when window width is <= 767px
      767: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // when window width is <= 1169px
      1169: {
        slidesPerView: 2,
        spaceBetween: 55,
      },
    },
  });
  teamSwiper.slideTo(1, 1000, false);

  const pressSwiper = new Swiper('.press__wrapper', {
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      // when window width is <= 767px
      767: {
        spaceBetween: 30,
      },
      // when window width is <= 1169px
      1169: {
        spaceBetween: 100,
      },
    },
  });
  pressSwiper.slideTo(2, 1000, false);
}
