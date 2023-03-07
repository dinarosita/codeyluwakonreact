import React from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.imp}>{props.children}</main>
    </div>
  );
}
