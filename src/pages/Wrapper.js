import React from "react";
import Page from "../components/wrapper/Page";
import WrapperChildren from "../data/articles/WrapperChildren";
import WrapperComponent from "../data/articles/WrapperComponent";
import WrapperUsage from "../data/articles/WrapperUsage";

export default function ComponentPage() {
  return (
    <Page title="Wrapper" >
      <WrapperComponent />
      <WrapperChildren />
      <WrapperUsage />
    </Page>
  );
}
