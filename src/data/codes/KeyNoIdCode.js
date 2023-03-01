import React from "react";
import classes from "./Codes.module.css";

export default function KeyNoIdCode() {
  return (
    <pre className={classes.codebox}>
        const todoItems = todos.map((todo, index) =&gt;
        <pre className="tab">
            &lt;li key={"{"}index{"}"}&gt;
            <pre className="tab">
                {"{"}todo.text{"}"}
            </pre>
            &lt;/li&gt;
        </pre>
        );
    </pre>
  );
}
