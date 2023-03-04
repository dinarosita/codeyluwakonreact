import React from "react";
import Article from "../../components/wrappers/Article";
import Formula from "../../components/codeWrappers/boxes/Formula";

export default function LabelHtmlfor() {
  return (
    <Article title="htmlFor" tagline="Property of label element">
      <Formula>&lt;label htmlFor='someId'&gt;</Formula>

      <div>
        <p>
          In regular html, to indicate which form element a label is labeling,
          we <code>for</code> attribute, that will seek the first form element
          with a matching <code>id</code>. In React, instead of <code>for</code>
          , we are using <code>htmlFor</code>
        </p>
        <Formula>&lt;input type="text id='someId' /&gt;</Formula>
      </div>
    </Article>
  );
}
