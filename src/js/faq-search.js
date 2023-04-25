const searchInput = document.getElementById("search-input");
const cards = document.querySelectorAll(".card-de");

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  cards.forEach((card) => {
    const cardContent = card.textContent.toLowerCase();
    if (cardContent.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
