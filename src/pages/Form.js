import React from "react";
import LabelHtmlfor from "../data/articles/LabelHtmlfor";
import Section from "../components/wrapper/Section";
import SectionLinkInternal from "../components/wrapper/SectionLinkInternal";

export default function FormPage() {
  return (
    <>
      <h1>Form</h1>
      <SectionLinkInternal toPath="./form-submit" title="Form Submission" />
      <Section>
        <LabelHtmlfor />
      </Section>
    </>
  );
}
