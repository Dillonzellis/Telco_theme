const searchInput = document.getElementById("search-input");
const loanTitle = document.getElementById("loan-title");
const resultsFail = document.getElementById("results-fail");

const generalQA = document.querySelector("#generalQA");
const loanQA = document.querySelector("#loanQA");

const generalCards = generalQA.querySelector(".card-de") ? generalQA.querySelectorAll(".card-de") : null;
const loanCards = loanQA.querySelectorAll(".card-de") ? loanQA.querySelectorAll(".card-de") : null;

const generalQuestions = [];
const loanQuestions = [];

generalCards.forEach((card) => {
  generalQuestions.push(card);
});

loanCards.forEach((card) => {
  loanQuestions.push(card);
});

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  generalCards.forEach((card) => {
    const cardContent = card.textContent.toLowerCase();
    if (cardContent.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  loanCards.forEach((card) => {
    const cardContent = card.textContent.toLowerCase();
    if (cardContent.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  // if no matches show message in generalQuestions and no matches found in loanQuestions show message
  if (generalQuestions.every((card) => card.style.display === "none") && loanQuestions.every((card) => card.style.display === "none")) {
    loanTitle.style.display = "none";
    // add class to resultsFail
    resultsFail.classList.add("block-f");
    // generalQA.innerHTML = `<p class="fail-msg text-center">No matches found</p>`;
  }

  // if matches only in generalQuestions hide loanTitle
  if (generalQuestions.some((card) => card.style.display === "block") && loanQuestions.every((card) => card.style.display === "none")) {
    loanTitle.style.display = "none";
  }

  // if any matches remove class from resultsFail
  if (generalQuestions.some((card) => card.style.display === "block") || loanQuestions.some((card) => card.style.display === "block")) {
    resultsFail.classList.remove("block-f");
  }

  // reset page to where it was before
  if (searchValue === "") {
    resultsFail.classList.remove("block-f");
    generalCards.forEach((card) => {
      card.style.display = "block";
    });
    loanTitle.style.display = "block";
    loanCards.forEach((card) => {
      card.style.display = "block";
    });
  }
});
