import React, { useState } from "react";
export const ThemeContext2 = React.createContext();

export default function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((prev) => !prev);
  }
  return (
    <ThemeContext2.Provider value={darkTheme}>
      <button onClick={toggleTheme} style={{ width: "fit-content" }}>
        Toggle Theme
      </button>
      {children}
    </ThemeContext2.Provider>
  );
}
