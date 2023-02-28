import React from "react";
import Article from "../../components/wrapper/Article";

export default function WrapperUsage() {
  const childElement = String.raw`<Wrapper>
  <h1>Title</h1>
  <div>Hello</div>
</Wrapper>`;

  const childComponent = String.raw`<Wrapper>
  <ChildComponent />
</Wrapper>`;

  return (
    <Article title="Using Wrapper">
      <div>
        <p>Anything inside the wrapper will be rendered.</p>
        <pre>{childElement}</pre>
      </div>

      <div>
        <p>Can be outsourced from another react component</p>
        <pre>{childComponent}</pre>
      </div>

      <div>
        <p>Can also be used as template using properties</p>
        <pre>&lt;Wrapper name="Elsa" age="12" /&gt;</pre>
      </div>
    </Article>
  );
}
