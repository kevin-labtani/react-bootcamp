// function based component
// historically used for "dumb" component, couldnt use state or lifecycle methods
// no longer the case thanks to hooks
function Hello() {
  return (
    <div>
      <h2>Hello There</h2>
      <h2>Hello There</h2>
      <h2>Hello There</h2>
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById("root"));
