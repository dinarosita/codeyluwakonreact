import React from "react";
import Tab from "../boxes/Tab";

export default function CurlyTab(props) {
  return (
    <>
      {"{"}
      <Tab>{props.children}</Tab>
      {"}"}
    </>
  );
}
