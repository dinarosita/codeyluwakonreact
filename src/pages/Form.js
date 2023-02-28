import React from "react";
import Page from "../components/wrapper/Page";
import LabelHtmlfor from "../data/articles/LabelHtmlfor";
import RedirectArticle from "../components/wrapper/RedirectArticle";

export default function FormPage() {
  return (
    <Page title="Form">
      <RedirectArticle path="./form-submit" title="Form Submission" />
      <LabelHtmlfor />
    </Page>
  );
}
