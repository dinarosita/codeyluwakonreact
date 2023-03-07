import React from "react";
import Page from "../components/wrappers/Page";
import RedirectArticle from "../components/wrappers/RedirectArticle";
import ContextBasics from "../data/articles/ContextBasics";
import ContextDemoTheme from "../data/articles/ContextDemoTheme";
import ContextDemoValentine from "../data/articles/ContextDemoValentine";
import ContextDemoTheme2 from "../data/articles/ContextDemoTheme2";
import ContextDemoTheme3 from "../data/articles/ContextDemoTheme3";

export default function ContextPage() {
  return (
    <Page
      title="Context"
      tagline="Context allow provider values to be made available to all their descendants"
    >
      <ContextBasics />
      <ContextDemoTheme /> <ContextDemoTheme2 />
      <ContextDemoTheme3 />
      <ContextDemoValentine />
      <RedirectArticle
        external
        path="https://dinarosita.github.io/react-hooks/"
        title="CodeyLuwak on React Hooks"
      />
    </Page>
  );
}
