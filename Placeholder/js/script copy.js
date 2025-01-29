
const swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: "#swiper-button .swiper-button-next",
    prevEl: "#swiper-button .swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
const swiper2 = new Swiper(".mySwiper-2", {
  slidesPerView: 6,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: "#swiper-logo-navigation .swiper-button-next",
    prevEl: "#swiper-logo-navigation .swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

//   

document.getElementById("year").innerHTML = new Date().getFullYear();

// 
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".second-heading, .about-your, .fade-in-left, .dentist-animation, .image-animation, .zoom-in, .visit-text-animation, .our-dental-aenimation, .services-animation, .testomonail-animation, .accepting-animation, .insurance-animation, .insu-image-animation, .certificaton-animation, .text-animation, .conveniently-animation, .map-animation, .frist-img-animation, .second-img-animation, .smile-animation, .hedingg-animation p, .office-heding-animation p, .theme-button-animation, .about-content-wrap, .about-img-wrap, .our-team-wrap, .service-inner-wrap, .service-view-left-wrap, .service-view-right-wrap, .blog-post-card, .blog-details-area, .animation-left, .animation-bottom, .animation-right"
  );

  const checkVisibility = () => {
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
//   
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//   
$(document).ready(function () {
  $('.navbar-nav a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
});
// 
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});