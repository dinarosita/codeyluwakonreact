import React from "react";
import Page from "../components/wrapper/Page";
import RedirectArticle from "../components/wrapper/RedirectArticle";

export default function HookPage() {
  return (
    <Page title="Hook" >
      <RedirectArticle external path="https://dinarosita.github.io/react-hooks/" title="CodeyLuwak on React Hooks" />
    </Page>
  );
}
