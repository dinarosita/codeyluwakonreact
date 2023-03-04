import React, { useContext } from "react";
import Demobox from "../../../components/codeWrappers/demo/Demobox";
import { ThemeContext } from "./ThemeApp";

export default function FunctionChild() {
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "chocolate" : "white",
    color: darkTheme ? "white" : "chocolate",
  };

  return (
    <Demobox>
      <div style={themeStyles}>Function Child</div>
    </Demobox>
  );
}
