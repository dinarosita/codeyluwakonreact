import React from "react";
import Page from "../components/wrapper/Page";
import RedirectArticle from "../components/wrapper/RedirectArticle";
import UsecontextContext from "../data/articles/UsecontextContext";

export default function UsecontextPage() {
  return (
    <Page
      title="useContext"
      tagline="Context allow values to be made global to all their descendents"
    >
      <RedirectArticle
        external
        path="https://dinarosita.github.io/react-hooks/"
        title="CodeyLuwak on React Hooks"
      />

      <UsecontextContext />
    </Page>
  );
}
