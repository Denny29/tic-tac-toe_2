import Tile from "./tile.js";

export default function board(props) {
  //Tile to be called 9 times
  return (
    <div id="board">
      <div class="row">
        <Tile side="top-left" />
        <Tile side="top-mid" />
        <Tile side="top-right" />
      </div>
      <div class="row">
        <Tile side="mid-left" />
        <Tile side="mid" />
        <Tile side="mid-right" />
      </div>
      <div class="row">
        <Tile side="bottom-left" />
        <Tile side="bottom-mid" />
        <Tile side="bottom-right" />
      </div>
    </div>
  );
}
