import React from "react";
import Article from "../../components/wrapper/Article";
import Formula from "../../components/wrapper/Formula";

export default function FetchIntro() {
  return (
    <Article
      title="About Fetch"
    >
      <Formula>fetch(<em>"url"</em>, <em>{"{"}request{"}"}</em>)</Formula>

      <div>
        <p>Fetch is a standard JavaScript function for HTTP request. It's supported by modern browsers. It takes the HTTP request's URL as its first argument.</p>
      </div>
      <div>
        <h3>Arguments</h3>
        <ol>
            <li>HTTP request URL (quoted)</li>
            <li>The request (as an object)</li>
        </ol>
      </div>
      
    </Article>
  );
}
