import React from "react";
import CodeSnippet from "../../components/wrapper/CodeSnippet";
import Formula from "../../components/wrapper/Formula";
import SectionHeader from "../../components/wrapper/SectionHeader";
import SubmitHandlerCode from "../codes/SubmitHandlerCode";

export default function FormRef() {
  return (
    <>
      <SectionHeader title="Ref" tagline="Built-in property of form elements">
        <Formula>&lt;input ... ref={"{someRef}"}&gt;</Formula>
      </SectionHeader>

      <div>
        <h3>Reference concept</h3>
        <p>
          In React we can set references to dom elements that gives us access to
          those elements.
        </p>
      </div>
      <div>
        <h3>Hook useRef</h3>
        <p>
          To set up such a reference, we need to use <code>useRef</code> hook.
        </p>
        <CodeSnippet>
          import {"{"} useRef {"}"} from 'react';
        </CodeSnippet>
      </div>

      <div>
        <h3>Set up ref object</h3>
        <p>First, we create a ref object.</p>
        <CodeSnippet>const titleInputRef = useRef()</CodeSnippet>
        <p>
          Then, connect the ref object to the input element using the ref prop.
        </p>
        <CodeSnippet>
          &lt;input ... ref={"{"}titleInputRef{"}"}&gt;
        </CodeSnippet>
      </div>
      <div>
        <h3>Getting the value</h3>
        <p>
          Inside the <code>submitHandler</code> function, we can get the entered
          title, using the <code>current</code> property of the ref object, then
          the <code>value</code> property of the <code>current</code> property.{" "}
        </p>
        <CodeSnippet>
          const enteredTitle = titleInputRef.current.value
        </CodeSnippet>
      </div>

      <div>
        <h3>Overall code</h3>
        <SubmitHandlerCode />
      </div>
    </>
  );
}
