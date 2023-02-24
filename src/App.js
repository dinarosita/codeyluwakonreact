import { Redirect, Route, Switch } from "react-router-dom";
import SetupPage from "./pages/Setup";
import WrapperPage from "./pages/Wrapper";
import HookPage from "./pages/Hook";
import Layout from "./components/layout/Layout";
import TerminalPage from "./pages/Terminal";
import RoutingPage from "./pages/Routing";
import TemplatePage from "./pages/Template";
import HomePage from "./pages/Home";

function App() {
  return (
    <Layout>
      <Switch>
        
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/setup">
          <SetupPage />
        </Route>
        <Route path="/routing">
          <RoutingPage />
        </Route>
        <Route path="/terminal">
          <TerminalPage />
        </Route>
        <Route path="/hook">
          <HookPage />
        </Route>
        <Route path="/wrapper">
          <WrapperPage />
        </Route>
        <Route path="/template">
          <TemplatePage />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
