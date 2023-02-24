import React from "react";
import TerminalBrowser from "../articles/TerminalBrowser";
import TerminalGithub from "../articles/TerminalGithub";
import Section from "../components/layout/Section";

export default function TerminalPage() {
  return (
    <>
      <h1>Terminal Commands</h1>
      <Section>
        <TerminalBrowser />
      </Section>
      <Section>
        <TerminalGithub />
      </Section>
    </>
  );
}
