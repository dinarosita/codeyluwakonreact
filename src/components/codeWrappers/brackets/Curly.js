import React from "react";

export default function Curly(props) {
  return (
    <>
      {"{"}
      {props.children}
      {"}"}
    </>
  );
}
