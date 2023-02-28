import React from "react";
import RrdomBrowserRouter from "../data/articles/RrdomBrowserRouter";
import RrdomInstall from "../data/articles/RrdomInstall";
import RrdomLink from "../data/articles/RrdomLink";
import RrdomRouteSwitch from "../data/articles/RrdomRouteSwitch";
import Section from "../components/wrapper/Section";

export default function RoutingPage() {
  return (
    <>
      <h1>React Router Dom</h1>
      <Section><RrdomInstall /></Section>
      <Section><RrdomBrowserRouter /></Section>
      <Section><RrdomRouteSwitch /></Section>
      <Section><RrdomLink /></Section>

    </>
  );
}
