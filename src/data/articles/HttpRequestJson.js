import React from "react";
import Article from "../../components/wrapper/Article";
import Formula from "../../components/wrapper/Formula";

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
