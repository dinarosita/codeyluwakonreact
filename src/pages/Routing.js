import React from "react";
import RoutingBrowserRouter from "../articles/RoutingBrowserRouter";
import RoutingInstall from "../articles/RoutingInstall";
import RoutingLink from "../articles/RoutingLink";
import RoutingRouteSwitch from "../articles/RoutingRouteSwitch";
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
