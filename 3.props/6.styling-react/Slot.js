class Slot extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = s1 === s2 && s2 === s3;
    const colors = { fontSize: "50px", backgroundColor: "lightpink" };
    return (
      // use className instead of class to style with classes in JSX
      // other one we need to change is for => htmlFor in labels
      // <label htmlFor=""></label>
      <div className="Slot">
        {/* inline styles, we pass in a object and usecamelcase */}
        <p style={colors}>
          {s1} {s2} {s3}
        </p>
        <p className={winner ? "winner" : "loser"}>
          {winner ? "Congrats! you win" : "Unlucky! you lose"}
        </p>
      </div>
    );
  }
}
