import React from "react";
import Article from "../../components/wrappers/Article";
import Formula from "../../components/codeWrappers/boxes/Formula";

import Var from "../../components/codeWrappers/spans/Var";
import Imp from "../../components/codeWrappers/spans/Imp";
import Impvar from "../../components/codeWrappers/spans/Impvar";
import Block from "../../components/codeWrappers/spans/Block";
import Tab from "../../components/codeWrappers/boxes/Tab";
import Curly from "../../components/codeWrappers/brackets/Curly";
import Angle from "../../components/codeWrappers/brackets/Angle";
import Regular from "../../components/codeWrappers/spans/Regular";

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
          export const <Impvar>ContextName</Impvar> ={" "}
          <Imp>React.createContext()</Imp>
        </Formula>
      </div>

      <div>
        <h3>Context provider: Parent element</h3>

        <ul>
          <li>
            Use <code>&lt;ContextName.Provider&gt;</code> to make a parent
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
          <Imp>
            <Angle>
              <Impvar>ContextName</Impvar>.Provider
              <Block>
                {" "}
                value=
                <Curly>
                  <Var>contextValue</Var>
                </Curly>
              </Block>
            </Angle>
          </Imp>
        </Formula>
      </div>

      <div>
        <h3>Child options</h3>

        <ul>
          
          <li>
            <strong>Function component</strong>
            <Formula>
              const <Var>contextVal</Var> ={" "}
              <Imp>
                useContext(<Impvar>ContextName</Impvar>)
              </Imp>
            </Formula>
          </li>
          <li>
            <strong>Class component</strong>
            <Formula>
              <Imp>
                <Angle>
                  <Impvar>ContextName</Impvar>.Consumer
                </Angle>
              </Imp>
              <Tab>
                <Block>
                  <Curly>
                    <Regular>
                      <Var>contextVal</Var> => <Curly>...code...</Curly>
                    </Regular>
                  </Curly>
                </Block>
              </Tab>
              <Imp>
                <Angle>
                  <Impvar>/ContextName</Impvar>.Consumer
                </Angle>
              </Imp>
            </Formula>
          </li>
        </ul>
        <p>
          Function based component is more simple and versatile than the class
          based one. It also allow creation of context provider wrapper and
          custom context hook to further simplify frequent use.
        </p>
      </div>
    </Article>
  );
}
