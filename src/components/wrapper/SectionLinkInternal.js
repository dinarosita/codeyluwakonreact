import React from "react";
import { Link } from "react-router-dom";
import classes from "./SectionLink.module.css";

export default function SectionLinkInternal(props) {
  return (
    <div className={classes.sectionlink}>
      <Link to={props.toPath}>
        {props.title}
      </Link>
    </div>
  );
}
