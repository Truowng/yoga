// Load more function

const viewMoreBtn = document.querySelector(
  "#gallery-collection .collection-button-view-more"
);

const gallery = document.querySelector("#gallery-collection .collection-group");

viewMoreBtn.addEventListener("click", () => {
  gallery.classList.add("loaded");
  viewMoreBtn.style.opacity = 0;
  setTimeout(() => {
    viewMoreBtn.style.display = "none";
  }, 750);
});
