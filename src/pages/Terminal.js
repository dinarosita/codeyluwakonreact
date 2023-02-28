import React from "react";
import TerminalBrowser from "../data/articles/TerminalBrowser";
import GithubTerminal from "../data/articles/GIthubTerminal";
import Section from "../components/wrapper/Section";

export default function TerminalPage() {
  return (
    <>
      <h1>Terminal Commands</h1>
      <Section>
        <TerminalBrowser />
      </Section>
      <Section>
        <GithubTerminal />
      </Section>
    </>
  );
}
