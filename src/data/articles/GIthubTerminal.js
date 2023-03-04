import React from "react";
import Article from "../../components/wrappers/Article";

export default function GithubTerminal() {
  return (
    <Article title="Update Github">
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
    </Article>
  );
}
