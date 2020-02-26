import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

// this component exists so we can change the backgroud color
class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? "#333" : "white",
      height: "100vh",
      width: "100vw"
    };
    return <div style={styles}>{this.props.children}</div>;
  }
}
export default PageContent;
