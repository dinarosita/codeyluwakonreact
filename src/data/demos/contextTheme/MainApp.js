import React, { useState } from "react";
import FlexH from "../../../components/wrappers/FlexH";
import ClassChildComponent from "./ClassChildComponent";
import ChildComponent from "./ChildComponent";

export const ThemeContext = React.createContext();

export default function MainApp() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme} style={{ width: "fit-content" }}>
        Toggle Theme
      </button>
      <FlexH>
        <ChildComponent />
        {/* <ClassChildComponent /> */}
      </FlexH>
    </ThemeContext.Provider>
  );
}
