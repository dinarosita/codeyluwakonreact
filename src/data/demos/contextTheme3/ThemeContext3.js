import React, { useContext, useState } from "react";

const ThemeContext3 = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext3);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}
export function ThemeProvider3({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  function toggleTheme() {
    setDarkTheme((prev) => !prev);
  }
  return (
    <ThemeContext3.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext3.Provider>
  );
}
