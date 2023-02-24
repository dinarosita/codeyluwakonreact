import React from "react";
import RrdomBrowserRouter from "../articles/RrdomBrowserRouter";
import RrdomInstall from "../articles/RrdomInstall";
import RrdomLink from "../articles/RrdomLink";
import RrdomRouteSwitch from "../articles/RrdomRouteSwitch";
import Section from "../components/ui/Section";

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
