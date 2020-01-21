class Hello extends React.Component {
  render() {
    return (
      // can only return one element, so we wrap the 3 h2 inside a div
      <div>
        <h2>Hello There</h2>
        <h2>Hello There</h2>
        <h2>Hello There</h2>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
