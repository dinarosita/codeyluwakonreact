import React from "react";
import Article from "../../components/wrapper/Article";
import Formula from "../../components/wrapper/Formula";

export default function CssIndex() {
  return (
    <Article title="Index CSS" tagline="Global styling">
      <div>
        <p>
          By default, React generates <code>index.css</code> and{" "}
          <code>App.css</code> when a project is initiated.{" "}
          <code>index.css</code> is intended for React global use, while{" "}
          <code>App.css</code> is applied to <code>App.js</code> file. Which
          hierarchy-wise sitting inside index. So far, I deleted{" "}
          <code>app.css</code> right away because any styling in{" "}
          <code>app.js</code> will be controlled under various wrapping
          components, while I use <code>index.css</code> to code the site's
          overall styling.
        </p>
      </div>
      <div>
        <Formula>index.css</Formula>
      </div>
    </Article>
  );
}
