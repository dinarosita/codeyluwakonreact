import React from "react";
import Codebox from "../../components/codeWrappers/boxes/Codebox"
import Tab from "../../components/codeWrappers/boxes/Tab"

export default function WrapperCode() {
  return (
    <Codebox>
      import classes from "./Wrapper.module.css"
      <br />
      <br />
      function <em>Wrapper</em>(<em>props</em>) {"{"}
      <Tab>
        return (
        <Tab>
          &lt;div className={"{"}classes.wrapdiv{"}"}&gt;
          <Tab>
            <em>
              {"{"}props.children{"}"}
            </em>
          </Tab>
          &lt;/div&gt;
        </Tab>
        )
      </Tab>
      {"}"}
      <br />
      export default Wrapper
    </Codebox>
  );
}
