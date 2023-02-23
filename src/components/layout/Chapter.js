import React from "react";
import classes from "./Chapter.module.css";

export default function Chapter(props) {
  return (
    <section className={classes.chapter}>
      <h1 className={classes.title}>{props.title}</h1>
      <div className={classes.content}>{props.children}</div>
    </section>
  );
}
