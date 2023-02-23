import React from "react";
import Article from "../layout/Article";
import classes from "./ArticleText.module.css";

export default function Installation(props) {
  return (
    <Article title="Installation">
      <p className={classes.paratitle}>NodeJS</p>
      <ul>
        <li>Download and install <em>NodeJS</em></li>
        <li>
          <code>node -v</code> &mdash; Check version
        </li>
        <li>
          Our version is <code>v19.1.0</code>
        </li>
      </ul>

      <p className={classes.paratitle}>VSCode as code editor</p>
      <ul>
        <li>
          Default formatter: prettier &mdash; <code>ctrl-shift-I</code>
        </li>
      </ul>
    </Article>
  );
}
