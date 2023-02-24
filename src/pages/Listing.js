import React from "react";
import ListKey from "../articles/ListKey";
import ListRendering from "../articles/ListRendering";
import Section from "../components/ui/Section";

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
