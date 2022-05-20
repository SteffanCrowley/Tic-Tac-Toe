//This module creates the initial board
const gameBoard = (() => {
  const container = document.querySelector(".container");

  //iterates through array populating the board
  const makeBoard = () => {
    for (i = 0; i < 9; i++) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.id = i;
      container.append(card);
    }
  };

  makeBoard(); //creates initial board

  return {
    makeBoard,
  };
})();

//This module takes the inputs of 'click' and uses it to
//manipulate the board array
const playGame = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  //updates array index based on click, clears board,
  //remakes it with new array index
  function placeMark(e) {
    board[this.id] = 1;
    winCondition(board);
    document.getElementById(`${this.id}`).innerHTML = "O";
  }

  function winCondition(board) {
    if (board[0] + board[1] + board[2] == 3) {
      console.log("win");
    } else if (board[3] + board[4] + board[5] == 3) {
      console.log("win");
    } else if (board[6] + board[7] + board[8] == 3) {
      console.log("win");
    } else if (board[0] + board[3] + board[6] == 3) {
      console.log("win");
    } else if (board[1] + board[4] + board[7] == 3) {
      console.log("win");
    } else if (board[2] + board[5] + board[8] == 3) {
      console.log("win");
    } else if (board[0] + board[4] + board[8] == 3) {
      console.log("win");
    } else if (board[2] + board[4] + board[6] == 3) {
      console.log("win");
    }
  }

  //listens for clicks on the cards
  const divs = document.querySelectorAll(".card");
  divs.forEach((card) => card.addEventListener("click", placeMark));
})();
