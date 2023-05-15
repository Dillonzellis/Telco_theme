// console.log('working');

document.getElementById("year").innerHTML = new Date().getFullYear();

const searchBtn = document.querySelector("#search-icon");

searchBtn.addEventListener("click", () => {
  const searchBar = document.querySelector(".search-bar-container");
  searchBar.classList.toggle("search-active");
});

const espToggle = document.querySelector(".esp-toggle");
const espDropdown = document.querySelector(".esp-dropdown");

espToggle.addEventListener("click", () => {
  espDropdown.classList.toggle("active");
  console.log("clicked");
});
