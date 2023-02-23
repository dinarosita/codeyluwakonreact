import { Route, Switch } from "react-router-dom";
import SetupPage from "./pages/Setup";
import ComponentsPage from "./pages/Components";
import HooksPage from "./pages/Hooks";
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
        <Route path="/hooks">
          <HooksPage />
        </Route>
        <Route path="/components">
          <ComponentsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
