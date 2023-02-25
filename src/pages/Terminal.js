import React from "react";
import TerminalBrowser from "../articles/TerminalBrowser";
import GithubTerminal from "../articles/GIthubTerminal";
import Section from "../components/ui/Section";

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