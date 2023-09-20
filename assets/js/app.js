const homePtSwiper = new Swiper("#home-pt .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  spaceBetween: 15,
  initialSlide: 2,
  speed: 750,
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide: 1,
      loop: true,
    },
  },
});

const aboutAdvantageSwiper = new Swiper("#about-advantage .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  speed: 750,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    991: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});

const aboutCoursesSwiper = new Swiper("#about-courses .swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  speed: 750,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".courses-button-next",
    prevEl: ".courses-button-prev",
  },
  breakpoints: {
    991: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});

const headerButtons = document.querySelectorAll(".mobile-header-button");
const mobileModal = document.querySelector(".mobile-header-modal");

const openMenu = () => {
  document.querySelector(".mobile-header-modal.active")
    ? mobileModal.classList.remove("active")
    : mobileModal.classList.add("active");
};

headerButtons.forEach((headerButton) => {
  headerButton.addEventListener("click", openMenu);
});
