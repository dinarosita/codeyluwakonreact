import React from "react";
import Article from "../layout/Article";

export default function TerminalBrowser(props) {
  return (
    <Article title="Commands for Browser">
      <ul>
        <li>
          <code>npm start</code> &mdash; Brings up development server
        </li>

        <li>
          <code>ctrl-C</code> &mdash; To close browser when finished
        </li>
        <li>
          <code>npx kill port 3000</code> &mdash; To force close a port e.g.
          3000
        </li>
      </ul>

      <p>*Find setup and github related commands in their own articles.</p>
    </Article>
  );
}
