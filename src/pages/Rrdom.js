import React from "react";
import Page from "../components/wrappers/Page";
import RrdomBrowserRouter from "../data/articles/RrdomBrowserRouter";
import RrdomInstall from "../data/articles/RrdomInstall";
import RrdomLink from "../data/articles/RrdomLink";
import RrdomRouteSwitch from "../data/articles/RrdomRouteSwitch";

export default function RrdomPage() {
  return (
    <Page title="React Router Dom" >
      <RrdomInstall />
      <RrdomBrowserRouter />
      <RrdomRouteSwitch />
      <RrdomLink />
    </Page>
  );
}
