import React from "react";
import classes from "./SectionLink.module.css";

export default function SectionLink(props) {
  return (
    <div className={classes.sectionlink}>
      <a href={props.url}>
        {props.title}
      </a>
    </div>
  );
}
