import React from "react";
import Page from "../components/wrapper/Page";
import GithubSetup from "../data/articles/GithubSetup";
import GithubTerminal from "../data/articles/GIthubTerminal";

export default function GithubPage() {
  return (
    <Page title="Github" >
      <GithubSetup />      
      <GithubTerminal />      
    </Page>
  );
}
