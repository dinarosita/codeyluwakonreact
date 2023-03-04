import React from "react";
import classes from "../Pres.module.css";
export default function Tab(props) {
  return <pre className={classes.tab}>{props.children}</pre>;
}
