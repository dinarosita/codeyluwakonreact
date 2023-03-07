import React from "react";
import Article from "../../components/wrappers/Article";
import Democard from "../../components/codeWrappers/demo/Democard";
import MainApp2 from "../demos/contextTheme2/MainApp2";
import ToggleDisplay from "../../tools/ToggleDisplay";
import MainApp2Code from "../demos/contextTheme2/MainApp2Code";
import ThemeContextCode from "../demos/contextTheme2/ThemeContextCode";
import FlexH from "../../components/wrappers/FlexH";
import ChildComponent2Code from "../demos/contextTheme2/ChildComponent2Code";

export default function ContextDemoTheme2() {
  return (
    <Article
      title="Context Demo: Theme 2"
      tagline="Slim MainApp.js with intermediary ThemeContext.js"
    >
      <div>
        <h3>ThemeProvider function in ThemeContext.js</h3>
        <p>
          For more frequent use, we can create context as a "tool": as it's own components,
          bearing all necessities, to simplify coding in frequent use. {" "}
        </p>
      </div>
      <div>
        <h4>Main differences from Theme1</h4>
        <ul>
          <li>
            <code>MainApp.js</code> now is very slim
          </li>
          <li>
            New <code>ThemeContext.js</code> contains all context credentials
          </li>
          <li>
            <code>ChildComponent.js</code> almost identical except for where the
            context is imported from: <code>ThemeContext.js</code> instead of{" "}
            <code>MainApp.js</code>
          </li>
        </ul>
      </div>
      <Democard>
        <MainApp2 />
        <ToggleDisplay>
          <FlexH>
            <MainApp2Code />
            <ThemeContextCode />
            <ChildComponent2Code />
          </FlexH>
        </ToggleDisplay>
      </Democard>
    </Article>
  );
}
