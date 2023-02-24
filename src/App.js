import { Redirect, Route, Switch } from "react-router-dom";
import SetupPage from "./pages/Setup";
import WrapperPage from "./pages/Wrapper";
import HookPage from "./pages/Hook";
import Layout from "./components/layout/Layout";
import TerminalPage from "./pages/Terminal";
import RoutingPage from "./pages/Rrdom";
import HomePage from "./pages/Home";
import PropertiesPage from "./pages/Properties";
import ComponentsPage from "./pages/Components";
import ListingPage from "./pages/Listing";
import CssPage from "./pages/Css";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/components">
          <ComponentsPage />
        </Route>
        <Route path="/css">
          <CssPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/hook">
          <HookPage />
        </Route>
        <Route path="/listing">
          <ListingPage />
        </Route>
        <Route path="/properties">
          <PropertiesPage />
        </Route>
        <Route path="/rrdom">
          <RoutingPage />
        </Route>
        <Route path="/setup">
          <SetupPage />
        </Route>
        <Route path="/terminal">
          <TerminalPage />
        </Route>

        <Route path="/wrapper">
          <WrapperPage />
        </Route>

        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
