import React from "react";

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

        <pre>Filename.module.css</pre>
        <pre>import classes from "./Filename.module.css"</pre>
        <pre>
          &lt;div className={"{"}classes.codebox{"}"}&gt;
        </pre>
      </div>
    </>
  );
}
