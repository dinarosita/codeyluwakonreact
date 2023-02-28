import React from "react";
import Formula from "../../components/wrapper/Formula";
import SectionHeader from "../../components/wrapper/SectionHeader";

export default function LabelHtmlfor() {
  return (
    <>
      <SectionHeader title="htmlFor" tagline="Property of label element">
        <Formula>&lt;label htmlFor='someId'&gt;</Formula>
      </SectionHeader>

      <div>
        <p>
          In regular html, to indicate which form element a label is labeling,
          we <code>for</code> attribute, that will seek the first form element
          with a matching <code>id</code>. In React, instead of <code>for</code>
          , we are using <code>htmlFor</code>
        </p>
        <Formula>&lt;input type="text id='someId' /&gt;</Formula>
      </div>
    </>
  );
}
