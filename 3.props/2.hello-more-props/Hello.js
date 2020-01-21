class Hello extends React.Component {
  render() {
    // log all the props passed from index.js
    console.log(this.props);

    let bangs = "!".repeat(this.props.bangs);
    return (
      <div>
        <p>
          Hi {this.props.to} from {this.props.from} {bangs}
        </p>
        <img src={this.props.img} alt="" />
      </div>
    );
  }
}
