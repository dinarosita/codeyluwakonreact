import React from "react";
import ChildComponent from "../contextTheme/ChildComponent";
import ChildComponent2 from "./ChildComponent2";
import ThemeProvider from "./ThemeContext";


export default function MainApp2() {
  return (
    <ThemeProvider>
      <ChildComponent2 />
    </ThemeProvider>
  );
}
