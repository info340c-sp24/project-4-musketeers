document.addEventListener("DOMContentLoaded", function () {
  var bookmarkedCards = localStorage.getItem("bookmarkedCards")
    ? JSON.parse(localStorage.getItem("bookmarkedCards"))
    : [];

  var cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (bookmarkedCards.includes(card.id)) {
      card.querySelector("svg path").classList.add("saved");
    }

    card.querySelector(".save").addEventListener("click", function (event) {
      var path =
        event.target.querySelector("svg path") ||
        event.target.closest(".save").querySelector("svg path");
      path.classList.toggle("saved");

      var cardId = card.id;
      if (bookmarkedCards.includes(cardId)) {
        bookmarkedCards = bookmarkedCards.filter((id) => id !== cardId);
      } else {
        bookmarkedCards.push(cardId);
      }
      localStorage.setItem(
        "bookmarkedCards",
        JSON.stringify(bookmarkedCards)
      );
    });
  });
});

function filterFavorites() {
  var bookmarkedCards = JSON.parse(localStorage.getItem("bookmarkedCards"));
  var cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.display = bookmarkedCards.includes(card.id) ? "" : "none";
  });
}

function resetFilter() {
  var cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.display = "";
  });
}