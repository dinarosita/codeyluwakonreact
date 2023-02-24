import React from "react";
import WrapperComponent from "../articles/WrapperComponent";
import Section from "../components/layout/Section";

export default function ComponentPage() {
  return (
    <>
      <h1>Wrapper</h1>
      <Section><WrapperComponent /></Section>
    </>
  );
}
