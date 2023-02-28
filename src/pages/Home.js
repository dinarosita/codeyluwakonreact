import React from "react";
import Page from "../components/wrapper/Page";
import HomeAbout from "../data/articles/HomeAbout";
import RedirectArticle from "../components/wrapper/RedirectArticle";

export default function HomePage() {
  return (
    <Page title="Welcome" >
      <HomeAbout />      
       <RedirectArticle external
        path="https://dinarosita.github.io/codeyluwak/"
        title="CodeyLuwak on Web Basics"
      />
      <RedirectArticle external
        path="https://dinarosita.github.io/react-hooks/"
        title="CodeyLuwak on React Hooks"
      />
      <RedirectArticle external
        path="https://dinarosita.github.io/react-meetups/"
        title="React Meetups &mdash; Udemy tutorial project"
      />
    </Page>
  );
}
