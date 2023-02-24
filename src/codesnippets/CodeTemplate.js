import React from "react";

export default function CodeTemplate() {
  const codeName = String.raw`code`;
  return (
    <>
      <p>Title.js</p>
      <pre>{codeName}</pre>
    </>
  );
}
