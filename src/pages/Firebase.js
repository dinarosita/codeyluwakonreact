import React from "react";
import Page from "../components/wrappers/Page";
import FirebaseIntro from "../data/articles/FirebaseIntro";
import FirebaseStartup from "../data/articles/FirebaseStartup";

export default function FirebasePage() {
  return (
    <Page title="Firebase" tagline="Service by Google, providing database, api for sending request, and more">
      <FirebaseIntro />
      <FirebaseStartup />
    </Page>
  );
}
