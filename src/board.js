import React, { useState } from "react";
import Tile from "./tile.js";
import Restart from "./restart.js"
let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let i = 0;

//variables for each tile class:
let tile1;
let tile2;
let tile3;
let tile4;
let tile5;
let tile6;
let tile7;
let tile8;
let tile9;

export default function board(props) {
  const [symbol, setSymbol] = useState("X");
  const [gameOver, setGameOver] = useState(false);
  const [symbolColor, setSymbolColor] = useState("win");
  
  //Main function below
  let tileCLick = function (location) {
    //User can only click blank spaces
    if(gameOver === false){
      if (gameBoard[location] === " ") {
        //Symbol changes between X and O and is appended into tile
        turnChange(location);
        //Win conditions below
        if(horizontalWin(location)){
          //stuff when win
          setGameOver(true);
          setTimeout(alertFunc, 50);
        }
        else if(verticalWin(location)){
          //more stuff when win
          setGameOver(true);
          setTimeout(alertFunc, 50);
        }
        else if(diagonalWin(location)){
          //even more stuff when win
          setGameOver(true);
          setTimeout(alertFunc, 50);
        }
        else if(i === 9){
          //ends game when tiles are full
          setGameOver(true);
          setTimeout(alertFuncTie, 50);

        }
      }
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
  let restartFunc = function(){
    //full restart
    setSymbol('X')
    setGameOver(false)
    gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    i = 0;
    //Clear tile variables to change winning symbols back to black
    tile1 = ''
    tile2 = ''
    tile3 = ''
    tile4 = ''
    tile5 = ''
    tile6 = ''
    tile7 = ''
    tile8 = ''
    tile9 = ''
  }
  function alertFunc(){
    //function for setinterval
    alert(symbol + ' wins!!')
  }
  function alertFuncTie(){
    alert('Draw!!')
  }
  let horizontalWin = function(par){
    if(gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== " "){
      setSymbolColor('win')
      tile1 = symbolColor;
      tile2 = symbolColor;
      tile3 = symbolColor;
       return true  
    }
    else if(gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== " "){
      setSymbolColor('win')
      tile4 = symbolColor;
      tile5 = symbolColor;
      tile6 = symbolColor;
      return true
    }
    else if(gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== " "){
      setSymbolColor('win')
      tile7 = symbolColor;
      tile8 = symbolColor;
      tile9 = symbolColor;
      return true
    }
  }
  let verticalWin = function(par){
    if(gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== " "){
      setSymbolColor('win')
      tile1 = symbolColor;
      tile4 = symbolColor;
      tile7 = symbolColor;
      return true
    }
    else if(gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== " "){
      setSymbolColor('win')
      tile2 = symbolColor;
      tile5 = symbolColor;
      tile8 = symbolColor;
      return true
    }
    else if(gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== " "){
      setSymbolColor('win')
      tile3 = symbolColor;
      tile6 = symbolColor;
      tile9 = symbolColor;
      return true
    }
  }
  let diagonalWin = function(par){
    if(gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== " "){
      setSymbolColor('win')
      tile1 = symbolColor;
      tile5 = symbolColor;
      tile9 = symbolColor;
      return true
    }
    else if(gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== " "){
      setSymbolColor('win')
      tile3 = symbolColor;
      tile5 = symbolColor;
      tile7 = symbolColor;
      return true
    }
  }

  //Tile to be called 9 times
  return (
    <div id="board">
      <div class="row">
        <Tile side="top-left" symbol={gameBoard[0]} color={tile1} handleTileClick={() => tileCLick(0)} />
        <Tile side="top-mid" symbol={gameBoard[1]} color={tile2} handleTileClick={() => tileCLick(1)} />
        <Tile side="top-right" symbol={gameBoard[2]} color={tile3} handleTileClick={() => tileCLick(2)} />
      </div>
      <div class="row">
        <Tile side="mid-left" symbol={gameBoard[3]} color={tile4} handleTileClick={() => tileCLick(3)} />
        <Tile side="mid" symbol={gameBoard[4]} color={tile5} handleTileClick={() => tileCLick(4)} />
        <Tile side="mid-right" symbol={gameBoard[5]} color={tile6} handleTileClick={() => tileCLick(5)} />
      </div>
      <div class="row">
        <Tile side="bottom-left" symbol={gameBoard[6]} color={tile7} handleTileClick={() => tileCLick(6)} />
        <Tile side="bottom-mid" symbol={gameBoard[7]}  color={tile8} handleTileClick={() => tileCLick(7)} />
        <Tile side="bottom-right" symbol={gameBoard[8]} color={tile9} handleTileClick={() => tileCLick(8)} />
      </div>
      <Restart gameover={gameOver} turn={symbol} handleClick={restartFunc}/>
    </div>
  );
}
