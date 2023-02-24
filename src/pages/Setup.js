import React from "react";
import SetupInstall from "../components/articles/SetupInstall";
import SetupCreate from "../components/articles/SetupCreate";
import SetupGithub from "../components/articles/SetupGithub";
import Section from "../components/layout/Section";
import RoutingInstall from "../components/articles/RoutingInstall";

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
        <RoutingInstall />
      </Section>
    </>
  );
}
