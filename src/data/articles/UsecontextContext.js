import React from "react";
import Article from "../../components/wrapper/Article";
import Formula from "../../components/wrapper/Formula";

export default function UsecontextContext() {
  return (
    <Article
      title="Context"
      tagline='Allows a value to be made "global" to all their descendants'
    >
      <div>
        <h3>Theme Context</h3>
        <p>Learn by example. See CodeyLuwak's full react hooks site.</p>
      </div>
      <div>
        <h3>Create and export context</h3>
        <Formula>
          export const <em>ThemeContext</em> = React.createContext()
        </Formula>
      </div>
      <div>
        <h3>Global parent</h3>
        <Formula>
          &lt;<em>ThemeContext</em>.Provider value={"{"}
          <em>darkTheme</em>
          {"}"}&gt;
          <pre className="tab">
            <strong>...descendants...</strong>
          </pre>
          &lt;/<em>ThemeContext</em>.Provider&gt;
        </Formula>
      </div>
      <div>
        <h3>MainApp.js</h3>
        <pre className="codebox">
            import {"{"} <span className="var">ThemeProvider</span> {"}"} from "./ThemeContext";<br/>
            <br/>
            export default function MainApp() {"{"}
            <pre className="tab">
                return (
                <pre className="tab">
                <span className="var">&lt;ThemeProvider&gt;</span>
                <pre className="tab">
                    &lt;ConsumerApp&gt;
                </pre>
                <span className="var">&lt;/ThemeProvider&gt;</span>
                </pre>
                )
            </pre>{"}"}
        </pre>
      </div>
      <div>
        <h3>ThemeContext.js</h3>
        <pre className="codebox">
            import React, {"{"} useState, useContext {"}"} from "react";<br/>
            <br/>
            const <span className="var">ThemeContext</span> = React.createContext();<br/>
            const <span className="var">ThemeUpdateContext</span> = React.createContext();<br/> 
        </pre>
      </div>
    </Article>
  );
}
