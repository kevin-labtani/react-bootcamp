import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  // display the overlay for 1.5s, use this.state.copied to keep track
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }

  render() {
    const { name, background, moreUrl, showLink } = this.props;
    const { copied } = this.state;

    return (
      // use copytoclipboard to get background # copied to clipboard when clicking a colorbox div
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          {/* different div for overlay cuz we grow it and we don't want to grow the content of the ColorBox, just the color*/}
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p>{this.props.background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
            {/* we don't want te copy to fire so we stop propagation */}
            {showLink && (
              <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                <span className="see-more">More</span>
              </Link>
            )}
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}
