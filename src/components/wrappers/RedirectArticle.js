import React from "react";
import classes from "./RedirectArticle.module.css";
import { Link } from "react-router-dom";

export default function RedirectArticle(props) {
  return (
    <div className={classes.redirect}>
      {props.external ? (
        <a href={props.path}>{props.title}</a>
      ) : (
        <Link to={props.path}>{props.title}</Link>
      )}
    </div>
  );
}
