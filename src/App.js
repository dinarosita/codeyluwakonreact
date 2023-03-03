import { Redirect, Route, Switch } from "react-router-dom";
import SetupPage from "./pages/Setup";
import WrapperPage from "./pages/Wrapper";
import HookPage from "./pages/Hook";
import Layout from "./components/layout/Layout";
import TerminalPage from "./pages/Terminal";
import HomePage from "./pages/Home";
import PropertiesPage from "./pages/Properties";
import ListingPage from "./pages/Listing";
import CssPage from "./pages/Css";
import FormPage from "./pages/Form";
import GithubPage from "./pages/Github";
import FormSubmitPage from "./pages/FormSubmit";
import FirebasePage from "./pages/Firebase";
import RrdomPage from "./pages/Rrdom";
import FetchPage from "./pages/Fetch";
import HttpRequestPage from "./pages/HttpRequest";
import FetchGetPage from "./pages/FetchGet";
import FetchPostPage from "./pages/FetchPost";
import UsecontextPage from "./pages/Usecontext";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/firebase">
          <FirebasePage />
        </Route>
        <Route path="/css">
          <CssPage />
        </Route>
        <Route path="/fetch">
          <FetchPage />
        </Route>
        <Route path="/fetchget">
          <FetchGetPage />
        </Route>
        <Route path="/fetchpost">
          <FetchPostPage />
        </Route>
        <Route path="/firebase">
          <FirebasePage />
        </Route>
        <Route path="/form">
          <FormPage />
        </Route>
        <Route path="/form-submit">
          <FormSubmitPage />
        </Route>

        <Route path="/github">
          <GithubPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/hook">
          <HookPage />
        </Route>
        <Route path="/httprequest">
          <HttpRequestPage />
        </Route>
        <Route path="/listing">
          <ListingPage />
        </Route>
        <Route path="/properties">
          <PropertiesPage />
        </Route>
        <Route path="/rrdom">
          <RrdomPage />
        </Route>
        <Route path="/setup">
          <SetupPage />
        </Route>
        <Route path="/terminal">
          <TerminalPage />
        </Route>
        <Route path="/usecontext">
          <UsecontextPage />
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
