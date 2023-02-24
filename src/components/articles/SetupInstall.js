import React from "react";
import classes from "../layout/Section.module.css";

export default function SetupInstall() {
  return (
    <>
      <h2>Installation</h2>
      <div>
        <p>NodeJS</p>
        <ul>
          <li>
            Download and install <em>NodeJS</em>
          </li>
          <li>
            <code>node -v</code> &mdash; Check version
          </li>
          <li>
            Our version is <code>v19.1.0</code>
          </li>
        </ul>
      </div>
      <div>
        <p>VSCode as code editor</p>
        <ul>
          <li>
            Default formatter: prettier &mdash; <code>ctrl-shift-I</code>
          </li>
        </ul>
      </div>
    </>
  );
}
