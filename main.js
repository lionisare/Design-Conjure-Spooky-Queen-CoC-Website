// sticky navbar
const header = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// bnt-menu
const btnMenu = document.querySelector(".menu-navigation");

document.querySelector("#btn-menu").onclick = (e) => {
  btnMenu.classList.toggle("active");
  e.preventDefault();
};
window.onscroll = () => {
  btnMenu.classList.remove("active");
};

// klik diluar sidebar agar bisa hilang
const menuIkon = document.querySelector("#btn-menu");
// menu
document.addEventListener("click", function (e) {
  if (!menuIkon.contains(e.target) && !btnMenu.contains(e.target)) {
    btnMenu.classList.remove("active");
  }
});

// gsap animation
gsap.from("#navbar", { opacity: 0, duration: 1, delay: 0.5, y: -50 });
gsap.from("#hero-text", { opacity: 0, duration: 1, delay: 1.5, y: 50 });
gsap.from("#sosial-media", { opacity: 0, duration: 1, delay: 2, x: 30 });
