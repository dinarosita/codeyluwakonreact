import React from "react";

export default function WrapperCode() {
  const wrapperCode = String.raw`function Wrapper(props) {
  return (
    <div className={classes.wrapper}>
        {props.children}
    </div>
  )
}`;
  return (
    <>
      <p>Wrapper.js</p>
      <pre>{wrapperCode}</pre>
    </>
  );
}
