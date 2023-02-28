import React from "react";
import Page from "../components/wrapper/Page";
import FormOnsubmit from "../data/articles/FormOnsubmit";
import FormSubmission from "../data/articles/FormSubmission";
import FormPreventDefault from "../data/articles/FormPreventDefault";
import FormRef from "../data/articles/FormRef";

export default function FormSubmitPage() {
  return (
    <Page title="Form Submission">
      <FormSubmission />
      <FormOnsubmit />
      <FormPreventDefault />
      <FormRef />
    </Page>
  );
}
