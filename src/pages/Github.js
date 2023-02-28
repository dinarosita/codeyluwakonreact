import React from "react";
import GithubSetup from "../data/articles/GithubSetup";
import GithubTerminal from "../data/articles/GIthubTerminal";
import Section from "../components/wrapper/Section";

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
