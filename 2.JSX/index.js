// don't forget closing tags!
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
