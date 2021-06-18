export default function tile(props) {
  return (
    <div onClick={props.handleTileClick} id={props.side} class={props.color + " tile"}>
      {props.symbol}
    </div>
  );
}
