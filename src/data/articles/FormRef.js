import React from "react";
import Article from "../../components/wrappers/Article";
import Formula from "../../components/codeWrappers/boxes/Formula";
import CodeSnippet from "../../components/codeWrappers/boxes/Snippet";
import SubmitHandlerCode from "../codes/SubmitHandlerCode";

export default function FormRef() {
  return (
    <Article title="Ref" tagline="Built-in property of form elements">
      <div>
        <Formula>&lt;input ... ref={"{someRef}"}&gt;</Formula>
      </div>

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
    </Article>
  );
}
