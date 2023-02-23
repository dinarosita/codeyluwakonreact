import React from "react";
import Article from "../layout/Article";
import classes from "./ArticleText.module.css";

export default function CreateReactProject(props) {
    const text1 = String.raw`export default function App() {
    return (<div></div>);
}`;

    const text2 = String.raw`import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`;
  return (
    <Article title="Create React Project">
      <p className={classes.paratitle}>Terminal commands</p>
      <ul>
        <li><code>npx create-react-app <em>app-name</em></code> &mdash; Project folder created</li>
        <li><code>cd <em>app-name</em></code></li>
        <li><code>npm install</code> &mdash; Downloads all dependencies listed in package.json</li>
        <li><code>npm run build</code> &mdash; Not sure what this is for/whether it is needed</li>
        <li><code>npm start</code> &mdash; Open browser at localhost:3000 or up</li>
      </ul>

      <p className={classes.paratitle}>Folder and file clean up</p>
      <p className={classes.listintro}>At this point, only following files are needed in <code>src</code> folder. Trim them into following codes.</p>
        <ul>
            <li><code><em>App.js</em></code>
            <pre className={classes.codebox}>{text1}</pre>
            </li>
            <li><code><em>index.js</em></code>
            <pre className={classes.codebox}>{text2}</pre></li>
            <li><code><em>index.css</em></code> &mdash; Delete entirely, will be replaced with different CSS.</li>
        </ul>

        
    </Article>
  );
}
