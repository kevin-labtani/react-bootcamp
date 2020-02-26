import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

// this component exists so we can change the backgroud color
function PageContent(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? "#333" : "white",
    height: "100vh",
    width: "100vw"
  };

  return <div style={styles}>{props.children}</div>;
}
export default PageContent;
