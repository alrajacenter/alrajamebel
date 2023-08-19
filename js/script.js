// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Humberger diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle clas active untuk search form
const searchForm = document.querySelector(".cari-form");
const searcBox = document.querySelector("#search-box");

document.querySelector("#searhbtn").onclick = (event) => {
  searchForm.classList.toggle("active");
  searcBox.focus();
  event.preventDefault();
};

// Klik diluar element
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#searchbtn");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
