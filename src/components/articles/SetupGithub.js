import React from "react";

export default function SetupGithub() {
  return (
    <>
      <h2>Github and Local Repo</h2>
      <div>
        <p>Github</p>
        <ul>
          <li>Create empty public new Github repo</li>
        </ul>
      </div>

      <div>
        <p>Local repo</p>
        <ul>
          <li>
            <code>npm install gh-pages --save-dev</code> &mdash; Install
            gh-pages npm package
          </li>
        </ul>
      </div>

      <div>
        <p>package.json</p>
        <ul>
          <li>
            Check <strong>dependencies</strong>, gh-pages should be listed.
          </li>
          <li>
            Add <strong>homepage</strong> property below name and version:{" "}
            <br />
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
      </div>

      <div>
        <p>Add remote</p>
        <ul>
          <li>
            <code>
              git remote add origin https://github.com/<em>git-name</em>/
              <em>repo-name</em>.git
            </code>{" "}
            &mdash; Add remote pointing to github repo
          </li>
        </ul>
      </div>

      <div>
        <p>Update Github</p>
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
      </div>

      <div>
        <p>Update life site</p>
        <ul>
          <li>
            <code>npm run deploy</code>
          </li>
        </ul>
      </div>
    </>
  );
}
