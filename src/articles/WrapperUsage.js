import React from "react";

export default function WrapperUsage() {
  
  const childElement = String.raw`<Wrapper>
  <h1>Title</h1>
  <div>Hello</div>
</Wrapper>`

const childComponent = String.raw`<Wrapper>
  <ChildComponent />
</Wrapper>`

  return (
    <>
      <h2>Using Wrapper</h2>

      <div>
        <p>Anything inside the wrapper will be rendered.</p>
        <pre>{childElement}</pre>
      </div>

      <div>
        <p>Can be outsourced from another react component</p>
        <pre>{childComponent}</pre>
      </div>
    </>
  );
}
