import React from "react";
import Article from "../../components/wrapper/Article";
import Formula from "../../components/wrapper/Formula";

export default function FetchThen() {
  return (
    <Article
      title="Fetch Then"
      tagline="Controlling what should happen upon fetch completion"
    >
      <Formula>fetch().then()</Formula>
      <div>
        <h3>Fetch returns a promise</h3>
        <p>
          Since fetch returns a promise, that is resolved as soon as fetching is
          completed. Hence we can add <code>then</code> to control what should
          happen next.
        </p>
      </div>

    </Article>
  );
}
