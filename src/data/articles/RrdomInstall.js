import React from "react";
import Article from "../../components/wrapper/Article";

export default function RrdomInstall() {
  return (
    <Article title="Installing React Router Dom">
      <div>
        <ul>
          <li>
            <code>npm install --save react-router-dom@5</code>
          </li>

          <li>
            Install new dependency, intall new third party package into this
            project. Using npm install with package name added.
          </li>
          <li>
            the @5 at the end ensure the correct version is used allow us to add
            routing functionality to react.
          </li>
          <li>
            Handle url and change what's visible on the screen without fetching
            new html pages.
          </li>
          <li>
            package.json is automatically updated with:
            <br />
            <code>
              "dependencies": {"{"} ... "react-router-dom": "^5.3.4", ...{"}"}
            </code>
          </li>
        </ul>
      </div>
      <div>
        <p></p>
      </div>
    </Article>
  );
}
