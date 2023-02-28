import React from "react";
import Article from "../../components/wrapper/Article";
import Formula from "../../components/wrapper/Formula";

export default function CssModule() {
  return (
    <Article title="Module CSS" tagline="Personalized css">
      <div>
        <p>
          Create-React-App's built-in feature that allows us to scope styles
          into components. Behind the scene code transformation that allow us to
          attach css file to specific components.
        </p>
      </div>
      <div>
        <Formula>Filename.module.css</Formula>
        <Formula>import classes from "./Filename.module.css"</Formula>
        <Formula>
          &lt;div className={"{"}classes.codebox{"}"}&gt;
        </Formula>
      </div>
    </Article>
  );
}
