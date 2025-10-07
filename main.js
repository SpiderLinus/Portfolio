const NavClick = document.getElementById("navbtn");
const NavShow = document.getElementById("topnav");
const dropdown1 = document.querySelector("dropdown-content");


document.querySelector("#navbtn").addEventListener("click", function (e) {
  e.preventDefault();
  const dropdown = this.nextElementSibling;
  dropdown.classList.toggle("show");
});

NavClick.addEventListener("click", () => {
    NavClick.classList.toggle("rotated");
    dropdown1.classList.toggle("show");

});