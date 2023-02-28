import React from "react";
import classes from "./Codes.module.css";

export default function KeyIdCode() {
  return (
    <pre className={classes.codebox}>
        const todoItems = todos.map((todo) =&gt;
        <pre className={classes.tab}>
            &lt;li key={"{"}todo.id{"}"}&gt;
            <pre className={classes.tab}>
                {"{"}todo.text{"}"}
            </pre>
            &lt;/li&gt;
        </pre>
        );
    </pre>
  );
}
