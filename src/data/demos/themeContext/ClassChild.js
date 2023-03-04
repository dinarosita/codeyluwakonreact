import React, { Component } from "react";
import Demobox from "../../../components/codeWrappers/demo/Demobox";
import { ThemeContext } from "./ThemeApp";

export default class ClassChild extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "chocolate" : "white",
      color: dark ? "white" : "chocolate",
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return (
            <Demobox>
              <div style={this.themeStyles(darkTheme)}>
                Class Child
              </div>
            </Demobox>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
