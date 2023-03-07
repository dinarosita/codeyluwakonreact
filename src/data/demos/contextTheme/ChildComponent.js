import React, { useContext } from "react";
import { ThemeContext } from "./MainApp";
import Demobox from "../../../components/codeWrappers/demo/Demobox";


export default function ChildComponent() {
  const darkTheme = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "chocolate" : "white",
    color: darkTheme ? "white" : "chocolate",
  };

  return (
    <Demobox>
      <div style={themeStyles}>Context Child</div>
    </Demobox>
  );
}
