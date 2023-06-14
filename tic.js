const Board = () => {
  const boardDiv = document.createElement("div");
  boardDiv.id = "board";

  let turn = "nought";

  const resetBoard = () => {
    const tileDivs = document.getElementsByClassName("tile");
    for (let i = 0; i < tileDivs.length; i++) {
      tileDivs[i].className = "tile";
    }
  };

  const checkTiles = (tiles, position) => {
    if (tiles[0] == tiles[1] && tiles[1] == tiles[2] && tiles[0] != "tile") {
      console.log("Winner on " + position + "!");
      resetBoard();
    }
  };

  const checkForWinner = () => {
    const tileDivs = document.getElementsByClassName("tile");
    let tiles = [];
    for (let i = 0; i < tileDivs.length; i++) {
      tiles[i] = tileDivs[i].className;
      console.log(tileDivs[i].className);
    }
    checkTiles([tiles[0], tiles[1], tiles[2]], "top");
    checkTiles([tiles[3], tiles[4], tiles[5]], "middle");
    checkTiles([tiles[6], tiles[7], tiles[8]], "bottom");
    checkTiles([tiles[0], tiles[4], tiles[8]], "diagonal");
    checkTiles([tiles[2], tiles[4], tiles[6]], "diagonal");
    // if (tiles[0] == tiles[1] && tiles[1] == tiles[2] && tiles[0] != "tile") {
    //   console.log("Winner on top!");
    // }

    // if (tiles[3] == tiles[4] && tiles[4] == tiles[5] && tiles[3] != "tile") {
    //   console.log("Winner in middle!");
    // }

    // if (tiles[6] == tiles[7] && tiles[7] == tiles[8] && tiles[6] != "tile") {
    //   console.log("Winner on the bottom!");
    // }
  };

  const takeTurn = (event) => {
    // console.log(event);
    const tileToChange = document.getElementById(event.srcElement.id);
    tileToChange.className = "tile " + turn;
    turn = turn == "nought" ? "cross" : "nought";
    checkForWinner();
  };

  const buildBoard = () => {
    for (let i = 0; i < 9; i++) {
      let newTile = document.createElement("div");
      newTile.className = "tile";
      newTile.id = "tile" + String(i);
      newTile.addEventListener("click", takeTurn);
      boardDiv.appendChild(newTile);
    }
    document.body.appendChild(boardDiv);
  };

  return { buildBoard };
};

const board = Board();
board.buildBoard();
