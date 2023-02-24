import React from "react";

export default function WrapperComponent() {
  const text1 = String.raw`Code`;
  return (
    <>
      <h2>Wrapper Component</h2>
      <div>
        <h3>Wrapper</h3>
        <p>When we have a set of certain appearance we want to use again and again to various components, instead of detailing the rule each time, we can detail them in a "wrapper" component and its module css and now it can be use to wrap the target components.</p>
      </div>
      <div>
        <p>Paragraph</p>
        <ul>
          <li>Item</li>
          <li>
            Item
            <br />
            <pre>{text1}</pre>
          </li>
        </ul>
      </div>
      <div>
        <p>File.js</p>
        <pre>{text1}</pre>
      </div>
    </>
  );
}
