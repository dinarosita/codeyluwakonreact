import React from "react";
import Page from "../components/wrapper/Page";
import FetchBasic from "../data/articles/FetchBasic";
import FetchRequest from "../data/articles/FetchRequest";
import FetchThen from "../data/articles/FetchThen";
import FetchUrl from "../data/articles/FetchUrl";
import FetchUsehistory from "../data/articles/FetchUsehistory";

export default function FetchPage() {
  return (
    <Page title="Fetch" tagline="HTTP request">
      <FetchBasic />
      <FetchUrl />
      <FetchRequest />
      <FetchThen />
      <FetchUsehistory />
    </Page>
  );
}
