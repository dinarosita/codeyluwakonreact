import React from "react";
import Article from "../../components/wrappers/Article";
import ClassChildCode from "../demos/themeContext/ClassChildCode";
import FunctionChildCode from "../demos/themeContext/FunctionChildCode";
import ThemeApp from "../demos/themeContext/ThemeApp";
import ThemeAppCode from "../demos/themeContext/ThemeAppCode";

export default function ContextThemeDemo() {
  return (
    <Article
     title="Theme Context Demo">
      <ThemeApp />
      <ThemeAppCode />
      <ClassChildCode />
      <FunctionChildCode />
    </Article>
  );
}
