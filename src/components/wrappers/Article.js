import React from "react";
import classes from "./Article.module.css";
import TitleSection from "./TitleSection";

export default function Article(props) {
  return (
    <article className={classes.article}>
      <TitleSection 
        level="h2" 
        title={props.title} 
        tagline={props.tagline} />
      {props.children}
    </article>
  );
}
