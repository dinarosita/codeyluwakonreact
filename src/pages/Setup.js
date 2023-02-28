import React from "react";
import SetupInstall from "../data/articles/SetupInstall";
import SetupCreate from "../data/articles/SetupCreate";
import GithubSetup from "../data/articles/GithubSetup";
import Section from "../components/wrapper/Section";
import RrdomInstall from "../data/articles/RrdomInstall";

export default function SetupPage() {
  return (
    <>
      <h1>Setup</h1>
      <Section>
        <SetupInstall />
      </Section>
      <Section>
        <SetupCreate />
      </Section>
      <Section>
        <GithubSetup />
      </Section>
      <Section>
        <RrdomInstall />
      </Section>
    </>
  );
}
