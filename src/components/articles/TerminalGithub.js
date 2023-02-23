import React from "react";
import Article from "../layout/Article";
import classes from "./ArticleText.module.css";


export default function TerminalGithub(props) {
  return (
    <Article title="Commands for Github">
      <p className={classes.paratitle}>Update repo</p>
      <ul>
        <li>
          <code>git add --all</code>
        </li>
        <li>
          <code>
            git commit -m "<em>Commit msg</em>"
          </code>
        </li>
        <li>
          <code>git push</code>
        </li>
      </ul>
      <p className={classes.paratitle}>Update browser</p>
      <ul>
        <li>
          <code>npm run deploy</code>
        </li>
      </ul>
    </Article>
  );
}
