import React from "react";
import Article from "../../components/wrapper/Article";

export default function HttpRequestAlternatives() {
  return (
    <Article title="Alternative ways to send HTTP requests">
      <div>
        <h3>JavaScript</h3>
        <p>
          Standard JavaScript has a built-in function called{" "}
          <code>fetch()</code> that is for sending http requests. Supported by
          modern browsers.
        </p>
      </div>
      <div>
        <h3>Axios and other third party packages</h3>
        <p>
          Thera are also third party packages like Axios &mdash; a popular
          library for sending http requests.
        </p>
      </div>
    </Article>
  );
}
