import React from "react";
import ArticleTemplate from "../articles/ArticleTemplate";
import Section from "../components/layout/Section";

export default function TemplatePage() {
  return (
    <>
      <h1>Page</h1>
      <Section>
        <ArticleTemplate />
      </Section>
    </>
  );
}
