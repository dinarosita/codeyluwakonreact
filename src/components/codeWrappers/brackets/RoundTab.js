import React from "react";
import Tab from "../boxes/Tab";

export default function RoundTab(props) {
  return (
    <>
      {"("}
      <Tab>{props.children}</Tab>
      {")"}
    </>
  );
}
