import React from "react";
import FormOnsubmit from "../data/articles/FormOnsubmit";
import FormSubmission from "../data/articles/FormSubmission";
import Section from "../components/wrapper/Section";
import FormPreventDefault from "../data/articles/FormPreventDefault";
import FormRef from "../data/articles/FormRef";

export default function FormSubmitPage() {
  return (
    <>
      <h1>Form Submission</h1>
      <Section>
        <FormSubmission />
      </Section>
      <Section>
        <FormOnsubmit />
      </Section>
      <Section>
        <FormPreventDefault />
      </Section>
      <Section>
        <FormRef />
      </Section>
    </>
  );
}
