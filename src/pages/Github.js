import React from "react";
import GithubSetup from "../articles/GithubSetup";
import GithubTerminal from "../articles/GIthubTerminal";
import Section from "../components/ui/Section";

export default function GithubPage() {
  return (
    <>
      <h1>Github</h1>
      <Section>
        <GithubSetup />
      </Section>
      <Section>
        <GithubTerminal />
      </Section>
    </>
  );
}
