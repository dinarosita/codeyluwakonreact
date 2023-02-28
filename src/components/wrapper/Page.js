import React from "react";
import classes from "./Page.module.css";
import TitleSection from "./TitleSection";

export default function Page(props) {
  return (
    <article className={classes.page}>
      <TitleSection
        className={classes.title}
        level="h1"
        title={props.title}
        tagline={props.tagline}
      />
      {props.children}
    </article>
  );
}
