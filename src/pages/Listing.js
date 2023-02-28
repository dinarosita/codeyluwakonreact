import React from "react";
import ListKey from "../data/articles/ListKey";
import ListRendering from "../data/articles/ListRendering";
import Section from "../components/wrapper/Section";

export default function ListingPage() {
  return (
    <>
      <h1>Listing</h1>
      <Section>
        <ListRendering />
      </Section>
      <Section>
        <ListKey />
      </Section>
    </>
  );
}
