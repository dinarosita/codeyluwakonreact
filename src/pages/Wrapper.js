import React from "react";
import WrapperChildren from "../data/articles/WrapperChildren";
import WrapperComponent from "../data/articles/WrapperComponent";
import WrapperUsage from "../data/articles/WrapperUsage";
import Section from "../components/wrapper/Section";

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
