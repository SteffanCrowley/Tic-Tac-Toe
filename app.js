const Player = () => {
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

  return { takeTurn, pointTurn };
};

const player1 = Player();

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

  //updates array index based on click, takes turns and runs
  //win condition function
  function placeMark(e) {
    if (name1 == "" || name2 == "") {
      alert("Please submit the player names!");
    } else {
      if (board[this.id] == "") {
        board[this.id] = player1.pointTurn();
        document.getElementById(`${this.id}`).innerHTML = player1.takeTurn();
        setTimeout(function () {
          winCondition(board);
        });
      }
    }
  }

  function winCondition(board) {
    if (Math.abs(board[0] + board[1] + board[2]) == 3) {
      whoWon(player1.pointTurn());
    } else if (Math.abs(board[3] + board[4] + board[5]) == 3) {
      whoWon(player1.pointTurn());
    } else if (Math.abs(board[6] + board[7] + board[8]) == 3) {
      whoWon(player1.pointTurn());
    } else if (Math.abs(board[0] + board[3] + board[6]) == 3) {
      whoWon(player1.pointTurn());
    } else if (Math.abs(board[1] + board[4] + board[7]) == 3) {
      whoWon(player1.pointTurn());
    } else if (Math.abs(board[2] + board[5] + board[8]) == 3) {
      whoWon(player1.pointTurn());
    } else if (Math.abs(board[0] + board[4] + board[8]) == 3) {
      whoWon(player1.pointTurn());
    } else if (Math.abs(board[2] + board[4] + board[6]) == 3) {
      whoWon(player1.pointTurn());
    } else if (
      Math.abs(board[0]) +
        Math.abs(board[1]) +
        Math.abs(board[2]) +
        Math.abs(board[3]) +
        Math.abs(board[4]) +
        Math.abs(board[5]) +
        Math.abs(board[6]) +
        Math.abs(board[7]) +
        Math.abs(board[8]) ==
      9
    ) {
      alert(" Tie Game!");
    }
  }

  function whoWon(lastMark) {
    if (lastMark == 1) {
      alert(name1 + " wins!");
    } else {
      alert(name2 + " wins!");
    }
  }

  let name1 = "";
  let name2 = "";

  const submitBtn = document.querySelector(".submit");

  submitBtn.addEventListener("click", (event) => {
    name1 = play1.value;
    name2 = play2.value;
    alert("Player 1 (X): " + name1 + "\n" + " Player 2 (O): " + name2);
  });

  //listens for clicks on the cards
  const divs = document.querySelectorAll(".card");
  divs.forEach((card) => card.addEventListener("click", placeMark));
})();
