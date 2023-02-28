import React from "react";
import Page from "../components/wrapper/Page";
import LabelHtmlfor from "../data/articles/LabelHtmlfor";
import ListKey from "../data/articles/ListKey";
import WrapperChildren from "../data/articles/WrapperChildren";

export default function PropertiesPage() {
  return (
    <Page title="Special Properties" >
      <LabelHtmlfor />
      <ListKey />
      <WrapperChildren />
    </Page>
  );
}
