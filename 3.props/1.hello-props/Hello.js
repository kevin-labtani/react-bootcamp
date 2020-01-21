class Hello extends React.Component {
  render() {
    // properties got passed from index.js
    // console.log(this.props);
    const props = this.props;
    return (
      <p>
        Hi {props.to} from {props.from}
      </p>
    );
  }
}
