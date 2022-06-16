export function Quiz({ $target, state }) {
  this.render = () => {
    console.log(state);
    console.log($target);
  };
}
