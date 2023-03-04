import React from "react";

export default function ANew(props) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.text}
      {props.children}
    </a>
  );
}
