const gameBoard = (() => {
  const container = document.querySelector(".container");
  let board = ["X", "O", "X", "X", "O", "X", "X", "O", "X"];

  for (i = 0; i < 9; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    container.append(card);
    card.innerHTML = `${board[i]}`;
  }
})();

// const divs = document.querySelectorAll("card");
// divs.forEach((card) => card.addEventListener("click", placeMark));
