import Swiper from 'swiper';

export default function init() {
  const timelineSwiper = new Swiper('.timeline__wrapper', {
    centeredSlides: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 5,
    spaceBetween: 60,
    slideToClickedSlide: 'true',
    grabCursor: true,
    breakpoints: {
      // when window width is <= 767px
      767: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
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
    breakpoints: {
      // when window width is <= 767px
      767: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // when window width is <= 1169px
      1169: {
        loop: true,
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
    spaceBetween: 200,
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

  function mediaListener(screenSize) {
    if (screenSize.matches) {
      teamSwiper.destroy(true, true);
    }
  }

  const breakpoint = window.matchMedia('(min-width: 1169px)');
  mediaListener(breakpoint);
  breakpoint.addListener(mediaListener);
}
