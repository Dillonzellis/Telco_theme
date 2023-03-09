// console.log('working');

document.getElementById("year").innerHTML = new Date().getFullYear();

const searchBtn = document.querySelector("#search-icon");

searchBtn.addEventListener("click", () => {
  const searchBar = document.querySelector(".search-bar-container");
  searchBar.classList.toggle("search-active");
});
