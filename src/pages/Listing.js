import React from "react";
import Page from "../components/wrapper/Page";
import ListKey from "../data/articles/ListKey";
import ListRendering from "../data/articles/ListRendering";

export default function ListingPage() {
  return (
    <Page title="Listing" >
      <ListRendering />
      <ListKey />      
    </Page>
  );
}
