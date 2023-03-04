import React from "react";
import Page from "../components/wrappers/Page";
import HomeAbout from "../data/articles/HomeAbout";
import RedirectArticle from "../components/wrappers/RedirectArticle";
import Article from "../components/wrappers/Article";

export default function HomePage() {
  return (
    <Page title="Welcome">
      <HomeAbout />
      <Article title="Other CodeyLuwak's sites">
        <RedirectArticle
          external
          path="https://dinarosita.github.io/codeyluwak/"
          title="CodeyLuwak on Web Basics"
        />

        <RedirectArticle
          external
          path="https://dinarosita.github.io/react-hooks/"
          title="CodeyLuwak on React Hooks"
        />
        <RedirectArticle
          external
          path="https://dinarosita.github.io/react-meetups/"
          title="React Meetups &mdash; Udemy tutorial project"
        />
      </Article>
    </Page>
  );
}
