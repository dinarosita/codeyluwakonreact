import React from "react";
import LabelHtmlfor from "../data/articles/LabelHtmlfor";
import ListKey from "../data/articles/ListKey";
import WrapperChildren from "../data/articles/WrapperChildren";
import Section from "../components/wrapper/Section";

export default function PropertiesPage() {
  return (
    <>
      <h1>Special Properties</h1>
      <Section><LabelHtmlfor /></Section>
      <Section><ListKey /></Section>
      <Section><WrapperChildren /></Section>
    </>
  );
}
