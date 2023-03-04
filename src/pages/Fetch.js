import React from "react";
import Page from "../components/wrappers/Page";
import RedirectArticle from "../components/wrappers/RedirectArticle";
import FetchBasic from "../data/articles/FetchBasic";
import FetchPostMethod from "../data/articles/FetchPostMethod";
import FetchRequest from "../data/articles/FetchRequest";
import FetchThen from "../data/articles/FetchThen";
import FetchUrl from "../data/articles/FetchUrl";
import FetchUsehistory from "../data/articles/FetchUsehistory";

export default function FetchPage() {
  return (
    <Page title="Fetch" tagline="HTTP request">
      <RedirectArticle title="HTTP Request" path="/httprequest" />
      <FetchBasic />
      <FetchUrl />
      <FetchRequest />
      <FetchThen />
      <FetchPostMethod />
      <FetchUsehistory />
    </Page>
  );
}
