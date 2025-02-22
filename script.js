const headerNavToggleBtn = document.getElementById("header-nav-toggle-btn");
const headerNavbar = document.querySelector(".header__navbar");
if (headerNavToggleBtn && headerNavbar) {
  headerNavToggleBtn.addEventListener("click", () => {
    headerNavbar.classList.toggle("active");
  });
}

const swiperParentPrblem = new Swiper(".ageProblem__languageLearning-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".ageProblem__languageLearning-swiper .swiper-button-next",
    prevEl: ".ageProblem__languageLearning-swiper .swiper-button-prev",
  },
});

const swiperChildrenPrblem = new Swiper(".ageProblem__artLearning-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".ageProblem__artLearning-swiper .swiper-button-next",
    prevEl: ".ageProblem__artLearning-swiper .swiper-button-prev",
  },
});

const swiperOutsideActivities = new Swiper(
  ".ageProblem__outsideActivities-swiper",
  {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".ageProblem__outsideActivities-swiper .swiper-button-next",
      prevEl: ".ageProblem__outsideActivities-swiper .swiper-button-prev",
    },
  }
);
const swiperInfrastructure = new Swiper(".ageProblem__infrastructure-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".ageProblem__infrastructure-swiper .swiper-button-next",
    prevEl: ".ageProblem__infrastructure-swiper .swiper-button-prev",
  },
});

var elem = document.querySelector(".memories__gallaries .grid");
var grid = new Isotope(elem, {
  // options
  itemSelector: ".grid-item",
  masonry: {
    // use element for option
    columnWidth: ".grid-sizer",
  },
});

imagesLoaded(grid).on("always", function () {
  // layout Isotope after each image loads
  setTimeout(() => {
    grid.layout();
  }, 500);
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
