import React from "react";
import Page from "../components/wrapper/Page";
import RedirectArticle from "../components/wrapper/RedirectArticle";
import FetchGetMethod from "../data/articles/FetchGetMethod";
import FetchGetDisplay from "../data/articles/FetchGetDisplay";
import FetchGetThen from "../data/articles/FetchGetThen";
import FetchThen from "../data/articles/FetchThen";
import FetchGetHooks from "../data/articles/FetchGetHooks";
import FetchGetCode from "../data/articles/FetchGetCode";
import FetchGetKey from "../data/articles/FetchGetKey";

export default function FetchGetPage() {
  return (
    <Page title="Get Request" tagline="Getting data from database">
      <FetchGetMethod />
      <FetchThen />
      <FetchGetThen />
      <FetchGetDisplay />
      <FetchGetHooks />
      <FetchGetKey />
      <FetchGetCode />
      <RedirectArticle title="HTTP Request" path="/httprequest" />
      <RedirectArticle title="Fetch" path="/fetch" />
    </Page>
  );
}
