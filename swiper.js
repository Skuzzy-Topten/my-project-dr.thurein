var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: false,
  breakpoints: {
    // desktop
    1440: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 3,
    },
    // tablet
    768: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 2,
    },
    // mobile
    425: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    }
  },
  keyboard: true,
});
