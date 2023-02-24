import React from "react";
import SetupInstall from "../articles/SetupInstall";
import SetupCreate from "../articles/SetupCreate";
import SetupGithub from "../articles/SetupGithub";
import Section from "../components/ui/Section";
import RrdomInstall from "../articles/RrdomInstall";

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
        <SetupGithub />
      </Section>
      <Section>
        <RrdomInstall />
      </Section>
    </>
  );
}
