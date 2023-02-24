import React from "react";

export default function RoutingRouteSwitch() {
  const text1 = String.raw`import { Route, Switch } from "react-router-dom";
...

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <SetupPage />
        </Route>
        <Route path="/routing">
          <RoutingPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
`;
  return (
    <>
      <h2>Router and Switch Component</h2>

      <div>
        <p>App.js</p>
        <pre>{text1}</pre>
      </div>

      <div>
        <p>Route</p>
        <ul>
            <li>Route component routing the defined <code>path</code> to the desired page component.</li>
            <li>For home, path can be written as <code>"/"</code>. with additional property <code>exact</code>, since otherwise it will take anything start with "/".</li>
        </ul>
      </div>

      <div>
        <p>Switch</p>
        <ul>
            <li>The app will display all routes applicable in a page. To ensure only one page is loaded, use Switch component.</li>
            <li>Wrap all Route components inside Switch component. Switch will display the first match.</li>
        </ul>
      </div>
    </>
  );
}
