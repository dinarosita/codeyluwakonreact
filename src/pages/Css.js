import React from "react";
import CssIndex from "../articles/CssIndex";
import CssModule from "../articles/CssModule";
import Section from "../components/ui/Section";

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
