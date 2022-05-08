let menu = document.querySelector("#menu");
let header = document.querySelector("header");

menu.addEventListener("click", function () {
  this.classList.toggle("fa-times");
  header.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
  if (window.scrollY > 150) {
    document.querySelector(".top").classList.add("active");
  } else {
    document.querySelector(".top").classList.remove("active");
  }
});
