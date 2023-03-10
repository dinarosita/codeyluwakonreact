import React from "react";
import Article from "../../components/wrappers/Article";
import Formula from "../../components/codeWrappers/boxes/Formula";

export default function HttpRequestJson() {
  return (
    <Article title="Json" tagline="Lightweight data-interchange format">
        <Formula>file.json</Formula>
      <div>
        <p>Json (JavaScript Object Notation) is plain text written in JavaScript object notation. It is the most popular format for transmitting data with HTTP request.
        </p>
      </div>
    </Article>
  );
}
