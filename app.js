const cardsSwiper = new Swiper(".cards-wrapper .swiper-container", {
  spaceBetween: 30,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  autoHeight: true,
});

const imagesSwiper = new Swiper(".images-wrapper .images-swiper", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 250,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: null,
  },
  allowTouchMove: false,
  loop: true,
});

cardsSwiper.on("slideChange", (elem) => {
  imagesSwiper.slideToLoop(elem.activeIndex);
});
