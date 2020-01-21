class App extends React.Component {
  render() {
    return (
      <div>
        {/* props can be sth else than a string, but need to be in curly braces */}
        <Hello
          to="Ringo"
          from="Paul"
          num={3}
          data={[1, 2, 3, 4, 5]}
          // pass in a boolean, wil set isFunny to true
          isFunny
          bangs={4}
          img="https://i.picsum.photos/id/237/400/400.jpg"
        />
        <Hello to="Britney" from="Adèle" bangs={10} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
