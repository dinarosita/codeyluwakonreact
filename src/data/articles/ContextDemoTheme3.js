import React from "react";
import Article from "../../components/wrappers/Article";
import Democard from "../../components/codeWrappers/demo/Democard";
import MainApp3 from "../demos/contextTheme3/MainApp3";
import ToggleDisplay from "../../tools/ToggleDisplay";
import MainApp3Code from "../demos/contextTheme3/MainApp3Code";
import ThemeContext3Code from "../demos/contextTheme3/ThemeContext3Code";
import FlexH from "../../components/wrappers/FlexH";
import ChildComponent3Code from "../demos/contextTheme3/ChildComponent3Code";

export default function ContextDemoTheme3() {
  return (
    <Article
      title="Context Demo: Theme 3"
      tagline="Custom context hook for tandem contexts"
    >
      <div>
        <h3>ThemeProvider using 2 contexts, child component using custom hook</h3>
        <p>
          Button to control the context value dones't have to be built-in within
          the <code>ThemeContext.js</code>. It can be placed anywhere. Of course
          we want to have it in such the frequent use is simple. Leaving as much
          as possible in the "tool" file. Button preference can be made as
          another global value. Now there are 2 contexts. And they can be coded
          together into 1 custom hook to make it handy for us.
        </p>
      </div>
      <div>
        <h4>Main differences from Theme2</h4>
        <ul>
          <li>
            <code>MainApp.js</code> is identical
          </li>
          <li>
            <code>ThemeContext.js</code> contains all context credentials with 2
            contexts nested, but no button element. A custom hook is made for each context.
          </li>
          <li>
            <code>ChildComponent.js</code> bearing button element and
            implementing the 2 custom hooks
          </li>
        </ul>
      </div>
      <Democard>
        <MainApp3 />
        <ToggleDisplay>
          <FlexH>
            <MainApp3Code />
            <ThemeContext3Code />
            <ChildComponent3Code />
          </FlexH>
        </ToggleDisplay>
      </Democard>
    </Article>
  );
}
