import React from "react";
import Article from "../../components/wrappers/Article";
import Formula from "../../components/codeWrappers/boxes/Formula";

import Var from "../../components/codeWrappers/spans/Var";
import Attn from "../../components/codeWrappers/spans/Attn";
import Block from "../../components/codeWrappers/spans/Block";


export default function ContextBasics() {
  return (
    <Article
      title="Context Basics"
      tagline="Context, context provider, and child consuments"
    >
      <div>
        <h3>Creating context</h3>
        <ul>
          <li>
            Create context with <code>React.createContext()</code>
          </li>
          <li>
            Make it available throught React project with <code>export</code>
          </li>
        </ul>
        <Formula>
          export const <Var>NameContext</Var> ={" "}
          <Attn>React.createContext()</Attn>
        </Formula>
      </div>

      <div>
        <h3>Context provider: Parent element</h3>

        <ul>
          <li>
            Use <code>&lt;NameContext.Provider&gt;</code> to make a parent
            element context provider.
          </li>
          <li>
            Provider has a single prop called <code>value</code>. This value can
            be seen by all the descendants.
          </li>
          <li>
            All descendants can be nested within. It will adopt the context with
            the value.
          </li>
        </ul>
        <Formula>
          &lt;
          <Var>NameContext</Var>
          .Provider{" "}
          <Block>
            value={"{"}
            <Var>darkTheme</Var>
            {"}"}
          </Block>
          &gt;
        </Formula>
      </div>



      <div>
        <h3>Child component</h3>
        <p>Can be created as class component or function component:</p>
        <ul>
          <li>
            <strong>Class component</strong>
            <Formula>
              &lt;
              <Var>NameContext</Var>
              .Consumer &gt;
            </Formula>
          </li>
          <li>
            <strong>Function component</strong>
            <Formula>useContext()</Formula>
            
            Function based component is way less cluttered than the other one.
          </li>
        </ul>
        <p> </p>
      </div>
    </Article>
  );
}
