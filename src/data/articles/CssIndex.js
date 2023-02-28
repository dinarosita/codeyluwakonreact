import React from "react";
import Formula from "../../components/wrapper/Formula";
import SectionHeader from "../../components/wrapper/SectionHeader";

export default function CssIndex() {
  return (
    <>
      <SectionHeader title="index.css"></SectionHeader>
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

        <Formula>index.css</Formula>
      </div>
    </>
  );
}
