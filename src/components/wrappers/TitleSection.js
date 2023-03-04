import React from "react";
import classes from "./TitleSection.module.css";

export default function TitleSection(props) {
  function LeveledTitle(level, title) {
    switch (level) {
      case "h1":
        return <h1>{title}</h1>;
      case "h2":
        return <h2>{title}</h2>;
      case "h3":
        return <h3>{title}</h3>;
      case "h4":
        return <h4>{title}</h4>;
      case "h5":
        return <h5>{title}</h5>;
      case "h6":
        return <h6>{title}</h6>;
      default:
        return <h2>{title}</h2>;
    }
  }
  return (
    <div className={classes.titleSection}>
      {LeveledTitle(props.level, props.title)}
      {props.tagline && 
      <p className={classes.tagline}>{props.tagline}</p>}
      {props.children}
    </div>
  );
}
