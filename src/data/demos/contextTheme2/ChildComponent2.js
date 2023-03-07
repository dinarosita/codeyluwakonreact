import React, { useContext } from "react";
import { ThemeContext2 } from "./ThemeContext";
import Demobox from "../../../components/codeWrappers/demo/Demobox";

export default function ChildComponent2() {
  const darkTheme = useContext(ThemeContext2);

  const themeStyles = {
    backgroundColor: darkTheme ? "chocolate" : "inherit",
    color: darkTheme ? "white" : "chocolate",

  };
  return (
    <Demobox>
      <div style={themeStyles}>Handy use!</div>
    </Demobox>
  );
}
