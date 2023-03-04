import React from "react";
import Page from "../components/wrappers/Page";
import RedirectArticle from "../components/wrappers/RedirectArticle";

export default function HookPage() {
  return (
    <Page title="Hook" >
      <RedirectArticle external path="https://dinarosita.github.io/react-hooks/" title="CodeyLuwak on React Hooks" />
      <RedirectArticle path="/usecontext" title="useContext" />
    </Page>
  );
}
