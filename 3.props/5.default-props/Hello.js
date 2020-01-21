class Hello extends React.Component {
  // set a default prop
  static defaultProps = {
    from: "Anonymous",
    bangs: 3
  };

  render() {
    const props = this.props;
    let bangs = "!".repeat(this.props.bangs);

    return (
      <p>
        Hi {props.to} from {props.from} {bangs}
      </p>
    );
  }
}
