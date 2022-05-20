//This module creates the initial board
const gameBoard = (() => {
  const container = document.querySelector(".container");

  //iterates through array populating the board
  const makeBoard = (board) => {
    for (i = 0; i < 9; i++) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.id = i;
      container.append(card);
      card.innerHTML = `${board[i]}`;
    }
  };
  return {
    makeBoard,
  };
})();

//This module takes the inputs of 'click' and uses it to
//manipulate the board array
const playGame = (() => {
  let board = ["X", "O", "X", "X", "O", "X", "X", "O", "X"];

  gameBoard.makeBoard(board);

  function placeMark(e) {
    console.log(this.id);
    board = ["X", "O", "X", "X", "O", "X", "X", "O", "O"];
    deleteBoard();
    gameBoard.makeBoard(board);
    e.stopPropagation();
  }

  const divs = document.querySelectorAll(".card");
  divs.forEach((card) => card.addEventListener("click", placeMark));
})();

//function to clear the board(so it can be remade)
function deleteBoard() {
  document.getElementById("container").innerHTML = "";
}
