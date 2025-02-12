// Toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  navbarNav.focus();
  e.preventDefault();
};

// Klik diluar elemen
const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// klik pencarian 
$(document).ready(function(){
  $("#myinput").on("keyup", function(){
    var value= $(this).val().toLowerCase();

    $(".container div").filter(function () {

      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
