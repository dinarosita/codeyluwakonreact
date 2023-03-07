import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext3";
import Demobox from "../../../components/codeWrappers/demo/Demobox";

export default function ChildComponent3() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "chocolate" : "white",
    color: darkTheme ? "white" : "chocolate",
  };
  return (
    <>
      <button onClick={toggleTheme} style={{width: "fit-content"}}>Toggle Theme</button>
      <Demobox>
        <div style={themeStyles}>2 contexts and 2 custom hooks</div>
      </Demobox>
    </>
  );
}
