import React from "react";
import Article from "../../components/wrappers/Article";
import CodeSnippet from "../../components/codeWrappers/boxes/Snippet";
import FetchThenUsehistoryCode from "../codes/FetchThenUsehistoryCode";

export default function FetchUsehistory() {
  return (
    <Article
      title="Fetch Then UseHistory"
      tagline="Navigate programatically with useHistory hook"
    >
      <div>
        <h3>Hook useHistory for navigating away upon fetch completion</h3>
        <CodeSnippet>
          import {"{"} useHistory } from 'react-router-dom'
        </CodeSnippet>
        <p>
          Hook useHistory is a hook by React Router DOM with certain methods
          that allow us to manipulate the browser history. For example, to
          navigate away.
        </p>
        <p>
          There are also third party hooks, and we can also create our own hook.
          For now, let's use this hook.
        </p>
      </div>
      <div>
        <h3>Create history object</h3>
        <CodeSnippet>const history = useHistory()</CodeSnippet>
      </div>
      <div>
        <h3>useHistory methods</h3>
        <p>
          An example of <code>useHistory</code> method is <code>push</code>.
          This method push a new page on to the stack of pages, that we can use
          later with a back button to go back to the previous page.
          <CodeSnippet>history.push()</CodeSnippet>
        </p>
        <p>
          A method suits our job here is <code>replace</code>. This method takes
          us navigate away without allowing back button navigation like in the
          push method.
          <CodeSnippet>history.replace("/")</CodeSnippet>
        </p>
      </div>
      <div>
        <h3>Using history in our fetch case</h3>
        <FetchThenUsehistoryCode />
      </div>
    </Article>
  );
}
