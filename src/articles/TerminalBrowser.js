import React from "react";

export default function TerminalBrowser() {
  return (
    <>
      <h2>Open and close browser</h2>
      <div>
        <p>Some handy commands:</p>
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
      </div>
    </>
  );
}
