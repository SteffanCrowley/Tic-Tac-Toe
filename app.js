const Player = (marker) => {
  const getMarker = () => marker;
  let x = true;
  let y = true;

  const takeTurn = () => {
    x = !x;
    if (x == true) {
      return "O";
    } else {
      return "X";
    }
  };

  const pointTurn = () => {
    y = !y;
    if (y == true) {
      return 1;
    } else {
      return -1;
    }
  };

  return { getMarker, takeTurn, pointTurn };
};

const player1 = Player("X");
const player2 = Player("O");

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
    board[this.id] = player1.pointTurn();
    winCondition(board);
    // let turn =
    document.getElementById(`${this.id}`).innerHTML = player1.takeTurn();
  }

  function winCondition(board) {
    if (Math.abs(board[0] + board[1] + board[2]) == 3) {
      console.log("win");
    } else if (Math.abs(board[3] + board[4] + board[5]) == 3) {
      console.log("win");
    } else if (Math.abs(board[6] + board[7] + board[8]) == 3) {
      console.log("win");
    } else if (Math.abs(board[0] + board[3] + board[6]) == 3) {
      console.log("win");
    } else if (Math.abs(board[1] + board[4] + board[7]) == 3) {
      console.log("win");
    } else if (Math.abs(board[2] + board[5] + board[8]) == 3) {
      console.log("win");
    } else if (Math.abs(board[0] + board[4] + board[8]) == 3) {
      console.log("win");
    } else if (Math.abs(board[2] + board[4] + board[6]) == 3) {
      console.log("win");
    }
  }

  //listens for clicks on the cards
  const divs = document.querySelectorAll(".card");
  divs.forEach((card) => card.addEventListener("click", placeMark));
})();
