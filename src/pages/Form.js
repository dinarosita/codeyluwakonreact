import React from "react";
import FormOnsubmit from "../articles/FormOnsubmit";
import LabelHtmlfor from "../articles/LabelHtmlfor";
import Section from "../components/ui/Section";

export default function FormPage() {
  return (
    <>
      <h1>Form</h1>
      <Section>
        <LabelHtmlfor />
      </Section>
      <Section>
        <FormOnsubmit />
      </Section>
    </>
  );
}
