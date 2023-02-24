import React from "react";
import ListKey from "../articles/ListKey";
import WrapperChildren from "../articles/WrapperChildren";
import Section from "../components/ui/Section";

export default function PropertiesPage() {
  return (
    <>
      <h1>Special Properties</h1>
      <Section><ListKey /></Section>
      <Section><WrapperChildren /></Section>
    </>
  );
}
