import React from "react";
import Article from "../../components/wrappers/Article";
import Codebox from "../../components/codeWrappers/boxes/Codebox"

export default function ListRendering() {
  const numbers = [1, 2, 3];
  const arrayText = String.raw`const numbers = [1, 2, 3]`;

  const listingText = String.raw`<ul>
  {numbers.map((number) => <li key={number}>{number*2}</li>)}
</ul>
`;
  return (
    <Article title="Generating List">
      <div>
        <p>
          Rendering multiple components for example from an array is a common
          routine in React. To a component, we can use curly braces{" "}
          <code>{"{}"}</code> to inject a list by JavaScript mapping{" "}
          <code>map()</code>, that returns <code>&lt;li&gt;</code> elements to a
          list item like <code>&lt;ul&gt;</code>.
        </p>
      </div>
      <div>
        <p>Array</p>
        <Codebox>{arrayText}</Codebox>
      </div>
      <div>
        <p>Listing</p>
        <Codebox>{listingText}</Codebox>
      </div>
      <div>
        <p>Result</p>
        <Codebox>
          <p>Doubled numbers list</p>
          <ul>
            {numbers.map((number) => (
              <li key={number}>{number * 2}</li>
            ))}
          </ul>
        </Codebox>
      </div>
    </Article>
  );
}
