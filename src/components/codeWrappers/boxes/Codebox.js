import React from "react";
import classes from "../Pres.module.css";

export default function Codebox(props) {
  return (
    <div className={classes.box}>
      <p className={classes.title}>{props.title}</p>
      <pre className={classes.codebox}>{props.children}</pre>
    </div>
  );
}
