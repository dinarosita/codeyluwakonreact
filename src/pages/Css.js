import React from "react";
import Page from "../components/wrappers/Page";
import CssIndex from "../data/articles/CssIndex";
import CssModule from "../data/articles/CssModule";


export default function CssPage() {
  return (
    <Page title="CSS" tagline="Styling">
      <CssIndex />
      <CssModule />
    </Page>
  );
}
