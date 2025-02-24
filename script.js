const headerNavToggleBtn = document.getElementById("header-nav-toggle-btn");
const headerNavbar = document.querySelector(".header__navbar");
if (headerNavToggleBtn && headerNavbar) {
  headerNavToggleBtn.addEventListener("click", () => {
    headerNavbar.classList.toggle("active");
  });
}

const activitiesSliderCommonProps = {
  slidesPerView: window.innerWidth > 768 ? 4 : 2,
  enabled: window.innerWidth < 768,
  spaceBetween: 15,
  autoplay: false,
  direction: "horizontal",
  loop: true,
};

const swiperParentPrblem = new Swiper(
  ".hoat-dong__languageLearning-swiper .swiper",
  {
    ...activitiesSliderCommonProps,
    // Navigation arrows
    navigation: {
      nextEl: ".hoat-dong__languageLearning-swiper .swiper-button-next",
      prevEl: ".hoat-dong__languageLearning-swiper .swiper-button-prev",
    },
  }
);

const swiperChildrenPrblem = new Swiper(
  ".hoat-dong__artLearning-swiper .swiper",
  {
    ...activitiesSliderCommonProps,
    // Navigation arrows
    navigation: {
      nextEl: ".hoat-dong__artLearning-swiper .swiper-button-next",
      prevEl: ".hoat-dong__artLearning-swiper .swiper-button-prev",
    },
  }
);

const swiperOutsideActivities = new Swiper(
  ".hoat-dong__outsideActivities-swiper .swiper",
  {
    ...activitiesSliderCommonProps,

    // Navigation arrows
    navigation: {
      nextEl: ".hoat-dong__outsideActivities-swiper .swiper-button-next",
      prevEl: ".hoat-dong__outsideActivities-swiper .swiper-button-prev",
    },
  }
);
const swiperInfrastructure = new Swiper(
  ".hoat-dong__infrastructure-swiper .swiper",
  {
    ...activitiesSliderCommonProps,
    // Navigation arrows
    navigation: {
      nextEl: ".hoat-dong__infrastructure-swiper .swiper-button-next",
      prevEl: ".hoat-dong__infrastructure-swiper .swiper-button-prev",
    },
  }
);

var swiper = new Swiper(".testimonials-swiper .swiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
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

const coSoVatChatItemWrapper = document.querySelector(
  ".co-so-vat-chat__list-items"
);

if (coSoVatChatItemWrapper) {
  const coSoVatChatItems = coSoVatChatItemWrapper.querySelectorAll(
    ".co-so-vat-chat__item"
  );
  coSoVatChatItems.forEach((item, itemIdx) => {
    item.addEventListener("mouseenter", () => {
      coSoVatChatItems.forEach((item, i) => {
        if (itemIdx === i) {
          item.parentNode.classList.add("active");
          item.parentNode.classList.remove("not-active");
        } else {
          item.parentNode.classList.add("not-active");
          item.parentNode.classList.remove("active");
        }
      });
    });
    item.addEventListener("mouseleave", () => {
      coSoVatChatItems.forEach((item) => {
        item.parentNode.classList.remove("active");
        item.parentNode.classList.remove("not-active");
      });
    });
  });
  coSoVatChatItemWrapper.addEventListener("mouseleave", () => {
    coSoVatChatItems.forEach((item) => {
      item.classList.remove("active");
      item.classList.remove("not-active");
    });
  });
}
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const headerNavBarList = document.querySelector(".header__navbar__list");
if (headerNavBarList) {
  headerNavBarList.querySelectorAll("a").forEach((anchor, anchorIdx) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      headerNavbar.classList.remove("active");
      headerNavBarList.querySelectorAll("a").forEach((item, i) => {
        if (anchorIdx === i) {
          item.classList.add("font-bold");
        } else {
          item.classList.remove("font-bold");
        }
      });
      const currentSectionId = anchor.getAttribute("href");
      const sectionEle = document.querySelector(currentSectionId);
      const position =
        sectionEle.getBoundingClientRect().top + window.scrollY - 56;
      window.scrollTo({ top: position, behavior: "smooth" });
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__fadeIn");
      }
    });
  },
  { threshold: 0.3 }
); // Adjust threshold as needed (0.1 means 10% of the element is visible)

const targetElement = document.querySelectorAll(".animate__animated");
targetElement.forEach((element) => {
  observer.observe(element);
});
