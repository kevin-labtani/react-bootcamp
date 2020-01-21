class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {/* looping in jsq with a map, nb: need to escape to h inside the li */}
          {hobbies.map(h => <li>{h}</li>)}
        </ul>
      </div>
    );
  }
}
