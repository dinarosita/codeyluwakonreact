import React from "react";
import Formula from "../../components/wrapper/Formula";

export default function CssModule() {
  return (
    <>
      <h2>CSS Modules</h2>
      <div>
        <p>
          Create-React-App's built-in feature that allows us to scope styles
          into components. Behind the scene code transformation that allow us to
          attach css file to specific components.
        </p>

        <Formula>Filename.module.css</Formula>
        <Formula>import classes from "./Filename.module.css"</Formula>
        <Formula>
          &lt;div className={"{"}classes.codebox{"}"}&gt;
        </Formula>
      </div>
    </>
  );
}
