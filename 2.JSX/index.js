// don't forget closing tags! ans slashes in closing tags!
class JSXDemo extends React.Component {
  render() {
    // retrun a single element
    return (
      <div>
        <h1>My image! </h1>
        <img
          src="https://images.unsplash.com/photo-1552283576-3ea3519bf12e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
          alt="image"
        />
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
