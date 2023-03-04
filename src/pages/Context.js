import React from "react";
import Page from "../components/wrappers/Page";
import RedirectArticle from "../components/wrappers/RedirectArticle";
import ContextBasics from "../data/articles/ContextBasics";
import ContextThemeDemo from "../data/articles/ContextThemeDemo";

export default function ContextPage() {
  return (
    <Page
      title="Context"
      tagline="Context allow provider values to be made available to all their descendants"
    >
      <ContextBasics />
      <ContextThemeDemo />
      <RedirectArticle
        external
        path="https://dinarosita.github.io/react-hooks/"
        title="CodeyLuwak on React Hooks"
      />
    </Page>
  );
}
