export default function restart(props) {
  let result;
  if (props.gameover) {
    result = <h1 onClick={props.handleClick}>Click to restart</h1>;
  } else {
    result = <h1>{props.turn}'s turn</h1>;
  }
  return result;
}
