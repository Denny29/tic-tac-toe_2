export default function tile(props) {
  return (
    <div onClick={props.handleTileClick} id={props.side} class="tile">
      {props.symbol}
    </div>
  );
}
