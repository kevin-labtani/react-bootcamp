import React, { Component } from "react";

// this component exists so we can change the backgroud color
class PageContent extends Component {
  render() {
    const styles = {
      backgroundColor: "white",
      height: "100vh",
      width: "100vw"
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}
export default PageContent;
