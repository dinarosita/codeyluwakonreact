import React from "react";
import Article from "../../components/wrappers/Article";
import Democard from "../../components/codeWrappers/demo/Democard";
import FlexH from "../../components/wrappers/FlexH";
import ChildComponentCode from "../demos/contextTheme/ChildComponentCode";
import ThemeApp from "../demos/contextTheme/MainApp";
import ThemeAppCode from "../demos/contextTheme/MainAppCode";
import { ToggleDisplayProvider } from "../../tools/ToggleDisplayContext";
import ToggleShowHideCodes from "../../tools/ToggleShowHideCodes";

export default function ContextDemoTheme() {
  return (
    <Article
      title="Context Demo: Theme 1"
      tagline="The basic use with function component child"
    >
      <div>
        <h3>Basic use</h3>
        <ul>
          <li>
            <code>MainApp.js</code> contains the context, context provider
            element, with button element and child element nested inside it.
          </li>
          <li>
            <code>ChildComponent.js</code> contains the child content an styling
            for the content.
          </li>
        </ul>
      </div>
      <Democard>
        <ThemeApp />
        <ToggleDisplayProvider>
          <ToggleShowHideCodes>
            <FlexH>
              <ThemeAppCode />
              <ChildComponentCode />
            </FlexH>
          </ToggleShowHideCodes>
        </ToggleDisplayProvider>
      </Democard>
    </Article>
  );
}
