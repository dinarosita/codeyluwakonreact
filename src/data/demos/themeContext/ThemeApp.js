import React, { useState } from "react";
import ClassChild from "./ClassChild";
import FunctionChild from "./FunctionChild";

export const ThemeContext = React.createContext();

export default function ThemeApp() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme} style={{width: "fit-content"}}>Toggle Theme</button>
        <ClassChild />
        <FunctionChild />
        
      </ThemeContext.Provider>
    </>
  );
}
