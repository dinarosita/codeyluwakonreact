import React from "react";
import LabelHtmlfor from "../articles/LabelHtmlfor";
import ListKey from "../articles/ListKey";
import WrapperChildren from "../articles/WrapperChildren";
import Section from "../components/ui/Section";

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
