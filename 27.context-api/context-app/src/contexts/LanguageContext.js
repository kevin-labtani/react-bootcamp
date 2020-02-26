import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "spanish"
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(e) {
    this.setState({ language: e.target.value });
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

// making our own HOC to help consume multiple contexts in 1 component as a cleaner way than just wrapping contextsconsumers within contextconsumers
// we can only ever have one contexttype
export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {value => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
);
