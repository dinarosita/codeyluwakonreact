import React from "react";

export default function GithubTerminal() {
  return (
    <>
      <h2>Update Github</h2>
      <div>
        <p>Update repo:</p>
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
        <p>Update life site:</p>
        <ul>
          <li>
            <code>npm run deploy</code>
          </li>
        </ul>
      </div>
    </>
  );
}
