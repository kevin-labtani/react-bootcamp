class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Ringo" from="Paul" />
        {/* we leave of the from since we want it to be from anonymous */}
        <Hello to="Cher" bangs={10} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
