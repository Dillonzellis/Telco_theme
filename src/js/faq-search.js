const searchInput = document.getElementById("search-input");
const cards = document.querySelectorAll(".card-de");

// two different arrays generalQuestions and loanQuestions
// loop through generalQuestions and loanQuestions and push to cards array
// if search results show nothing show a message saying no results found

// when input is empty remove matchCards
// then add back generalQuestions and loanQuestions arrays like they were originally

const matchedCards = [];

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  cards.forEach((card) => {
    const cardContent = card.textContent.toLowerCase();
    if (cardContent.includes(searchValue)) {
      matchedCards.push(card);
    } else {
      card.style.display = "none";
    }
  });

  //loop through matched cards add cards to card-row class as children
  matchedCards.forEach((card) => {
    const cardRow = document.querySelector(".card-row");
    cardRow.appendChild(card);

    //hide loan-title
    // const loanTitle = document.querySelector(".loan-title");
    // loanTitle.style.display = "none";

    //reset page to where it was before
    if (searchValue === "") {
      cards.forEach((card) => {
        card.style.display = "block";
      });
    }
  });

  //if card-row has no children remove card-row
  // if (cardRow.children.length === 0) {
  //   cardRow.remove();
  // }
});
