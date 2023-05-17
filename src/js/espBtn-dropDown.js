const espToggle = document.querySelector(".esp-toggle");
const espDropdown = document.querySelector(".esp-dropdown");

espToggle.addEventListener("click", () => {
  espDropdown.classList.toggle("active");
  console.log("clicked");
});

document.addEventListener("click", (e) => {
  if (!espToggle.contains(e.target)) {
    espDropdown.classList.remove("active");
  }
});
