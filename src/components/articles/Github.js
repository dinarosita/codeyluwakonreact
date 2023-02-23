import React from "react";
import Article from "../layout/Article";
import classes from "./ArticleText.module.css";

export default function Github(props) {
  return (
    <Article title="Github and Local Repo">
      <p className={classes.paratitle}>Github</p>
      <ul>
        <li>Create empty public new Github repo</li>
      </ul>

      <p className={classes.paratitle}>Local repo</p>
      <ul>
        <li>
          <code>npm install gh-pages --save-dev</code> &mdash; Install gh-pages
          npm package
        </li>
      </ul>

      <p className={classes.paratitle}>package.json</p>
      <ul>
        <li>Check <strong>dependencies</strong>, gh-pages should be listed.</li>
        <li>
          Add <strong>homepage</strong> property below name and version: <br />
          <code>
            "homepage": "https://<em>git-name</em>.github.io/
            <em>repo-name</em>",
          </code>
        </li>
        <li>
          Add deployment <strong>scripts</strong> above start:
          <br />
          <code>"predeploy": "npm run build",</code>
          <br />
          <code>"deploy": "gh-pages -d build",</code>
        </li>
      </ul>
      <p className={classes.paratitle}>Add remote</p>
      <ul>
        <li>
          <code>git remote add origin https://github.com/<em>git-name</em>/<em>repo-name</em>.git</code> &mdash; Add remote pointing to github repo
        </li>
      </ul>

      <p className={classes.paratitle}>Daily update</p>
      <ul>
        <li>
          <code>git add --all</code><br/>
          <code>git commit -m "<em>Commit msg</em>"</code><br/>
          <code>git push</code>
        </li>
        <li><code>npm run deploy</code></li>
      </ul>
    </Article>
  );
}
