function getNum() {
  // gen numbers between 1 and 10
  return Math.floor(Math.random() * 10 + 1);
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    // 3°)
    let msg;
    if (num === 7) {
      msg = (
        <div>
          <h2>congrats! you win</h2>
          <img src="https://placekitten.com/640/360" alt="" />
        </div>
      );
    } else {
      msg = <p>Sorry, you lose!</p>;
    }
    return (
      <div>
        <h1>Your number is {num}</h1>
        {/* conditional in jsx */}
        {/* 1°) ternary */}
        <p>{num === 7 ? "Congrats!" : "Unlucky!"}</p>
        {/* 2°) && */}
        {num === 7 && <img src="https://www.fillmurray.com/640/360" />}
        {/* 3°) build extrenal variable */}
        {msg}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
