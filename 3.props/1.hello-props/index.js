class App extends React.Component {
  render() {
    return (
      <div>
        {/* pass in a property */}
        <Hello to="Ringo" from="Paul" />
        <Hello to="Cher" from="Sonny" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
