import React from "react";
import Page from "../components/wrappers/Page";
import RedirectArticle from "../components/wrappers/RedirectArticle";
import FetchPostMethod from "../data/articles/FetchPostMethod";
import FetchPostUsehistory from "../data/articles/FetchPostUsehistory";
import FetchThen from "../data/articles/FetchThen";

export default function FetchPostMethodPage() {
  return (
    <Page
      title="Post Request"
      tagline="Storing data to database"
    >
      <FetchPostMethod />
      <FetchThen />
      <FetchPostUsehistory />
      <RedirectArticle title="HTTP Request" path="/httprequest" />
      <RedirectArticle title="Fetch" path="/fetch" />
    </Page>
  );
}
