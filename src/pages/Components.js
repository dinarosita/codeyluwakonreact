import React from "react";
import { Link } from "react-router-dom";
import WrapperComponent from "../articles/WrapperComponent";
import Section from "../components/ui/Section";

export default function ComponentsPage() {
  return (
    <>
      <h1>Special Components</h1>
      <Section><Link to="./rrdom"><h2>React Router Dom Components</h2></Link></Section>
      <Section><WrapperComponent /></Section>
    </>
  );
}
