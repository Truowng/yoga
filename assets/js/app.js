const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  spaceBetween: 15,
  initialSlide: 2,
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
