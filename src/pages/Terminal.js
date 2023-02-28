import React from "react";
import Page from "../components/wrapper/Page";
import TerminalBrowser from "../data/articles/TerminalBrowser";
import GithubTerminal from "../data/articles/GIthubTerminal";

export default function TerminalPage() {
  return (
    <Page title="Terminal Commands" >
        <TerminalBrowser />
        <GithubTerminal />
    </Page>
  );
}
