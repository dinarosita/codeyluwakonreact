import React from "react";
import Article from "../../components/wrapper/Article";
import Formula from "../../components/wrapper/Formula";

export default function HttpRequestFetch() {
  return (
    <Article
      title="Fetch"
      tagline="Standard JavaScript function for sending HTTP request"
    >
      <Formula>fetch()</Formula>
      <div></div>
    </Article>
  );
}
