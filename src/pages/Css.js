import React from "react";
import CssIndex from "../data/articles/CssIndex";
import CssModule from "../data/articles/CssModule";
import Section from "../components/wrapper/Section";

export default function CssPage() {
  return (
    <>
      <h1>CSS</h1>
      <Section>
        <CssIndex />
      </Section>
      <Section>
        <CssModule />
      </Section>
    </>
  );
}
