import React from "react";

export default function RrdomBrowserRouter() {
  const text1 = String.raw`import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);`;
  return (
    <>
      <h2>React Router Dom: BrowserRouter Component</h2>

      <div>
        <p>index.js</p>
        <pre>{text1}</pre>
      </div>
    </>
  );
}
