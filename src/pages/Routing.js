import React from "react";
import RoutingBrowserRouter from "../components/articles/RoutingBrowserRouter";
import RoutingInstall from "../components/articles/RoutingInstall";
import RoutingLink from "../components/articles/RoutingLink";
import RoutingRouteSwitch from "../components/articles/RoutingRouteSwitch";
import Section from "../components/layout/Section";

export default function RoutingPage() {
  return (
    <>
      <h1>Routing</h1>
      <Section><RoutingInstall /></Section>
      <Section><RoutingBrowserRouter /></Section>
      <Section><RoutingRouteSwitch /></Section>
      <Section><RoutingLink /></Section>

    </>
  );
}
