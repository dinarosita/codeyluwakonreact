import React from "react";
import WrapperChildren from "../articles/WrapperChildren";
import WrapperComponent from "../articles/WrapperComponent";
import WrapperUsage from "../articles/WrapperUsage";
import Section from "../components/ui/Section";

export default function ComponentPage() {
  return (
    <>
      <h1>Wrapper</h1>
      <Section><WrapperComponent /></Section>
      <Section><WrapperChildren /></Section>
      <Section><WrapperUsage /></Section>

    </>
  );
}
