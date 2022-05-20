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
  let board = ["", "", "", "", "", "", "", "", ""];

  gameBoard.makeBoard(board); //creates initial board

  //updates array index based on click, clears board,
  //remakes it with new array index
  function placeMark(e) {
    board[this.id] = "X";
    document.getElementById(`${this.id}`).innerHTML = "O";
  }

  //listens for clicks on the cards
  const divs = document.querySelectorAll(".card");
  divs.forEach((card) => card.addEventListener("click", placeMark));
})();
