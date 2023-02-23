import React from "react";
import classes from "./Article.module.css";

export default function Article(props) {
  return (
    <section className={classes.topic}>
      <h2 className={classes.title}>{props.title}</h2>
      <div className={classes.content}>{props.children}</div>
    </section>
  );
}
