import React, { useState } from "react";
import Tile from "./tile.js";

let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let i = 0;
export default function board(props) {
  const [symbol, setSymbol] = useState("X");
  //Main function below
  let tileCLick = function (location) {
    //User can only click blank spaces
    if (gameBoard[location] === " ") {
      turnChange(location);
    }
  };
  let turnChange = function (par) {
    //Switches between X and O everytime a tile is clicked
    i = i + 1;
    if (i % 2 === 0) {
      setSymbol("X");
    } else {
      setSymbol("O");
    }
    console.log("the symbol is " + symbol);
    gameBoard[par] = symbol;
  };
  //Tile to be called 9 times
  return (
    <div id="board">
      <div class="row">
        <Tile side="top-left" symbol={gameBoard[0]} handleTileClick={() => tileCLick(0)} />
        <Tile side="top-mid" symbol={gameBoard[1]} handleTileClick={() => tileCLick(1)} />
        <Tile side="top-right" symbol={gameBoard[2]} handleTileClick={() => tileCLick(2)} />
      </div>
      <div class="row">
        <Tile side="mid-left" symbol={gameBoard[3]} handleTileClick={() => tileCLick(3)} />
        <Tile side="mid" symbol={gameBoard[4]} handleTileClick={() => tileCLick(4)} />
        <Tile side="mid-right" symbol={gameBoard[5]} handleTileClick={() => tileCLick(5)} />
      </div>
      <div class="row">
        <Tile side="bottom-left" symbol={gameBoard[6]} handleTileClick={() => tileCLick(6)} />
        <Tile side="bottom-mid" symbol={gameBoard[7]}  handleTileClick={() => tileCLick(7)} />
        <Tile side="bottom-right" symbol={gameBoard[8]} handleTileClick={() => tileCLick(8)} />
      </div>
    </div>
  );
}
