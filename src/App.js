import { Route, Switch } from "react-router-dom";
import SetupPage from "./pages/Setup";
import ComponentPage from "./pages/Component";
import HookPage from "./pages/Hook";
import Layout from "./components/layout/Layout";
import TerminalPage from "./pages/Terminal";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/setup">
          <SetupPage />
        </Route>
        <Route path="/terminal">
          <TerminalPage />
        </Route>
        <Route path="/hook">
          <HookPage />
        </Route>
        <Route path="/component">
          <ComponentPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
