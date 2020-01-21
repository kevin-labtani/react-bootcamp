function getMood() {
  const moods = ["Angry", "Sad", "Hungry", "Depressed", "Silly"];
  return moods[Math.floor(Math.random() * moods.length)];
}

// don't forget closing tags! ans slashes in closing tags!
class JSXDemo extends React.Component {
  render() {
    // retrun a single element
    return (
      <div>
        <h2>My image!</h2>
        <img
          src="https://images.unsplash.com/photo-1552283576-3ea3519bf12e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
          alt="image"
        />
        {/* embed js into jsx with curly braces */}
        <h2>My number is: {2 * 8.4}</h2>
        <h2>My Current Mood is: {getMood()}</h2>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));

/*
babel compiles our div into:
React.createElement(
  "div",
  null,
  React.createElement("h1", null, "My image! "),
  React.createElement("img", {
    src:
      "https://images.unsplash.com/photo-1552283576-3ea3519bf12e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
    alt: "image"
  })
);
*/
