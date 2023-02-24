import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
// import logo from "../../images/logo32pale.png";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to="/" exact>
        <div className={classes.logo}>
          {/* <img src={logo} alt="CodeyLuwak on ReactJS" /> */}
          CodeyLuwak on React
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/hook">Hook</Link>
          </li>
          <li>
            <Link to="/routing">Routing</Link>
          </li>
          <li>
            <Link to="/setup">Setup</Link>
          </li>
          <li>
            <Link to="/terminal">Terminal</Link>
          </li>
          <li>
            <Link to="/wrapper">Wrapper</Link>
          </li>
          <li>
            <Link to="/template">*Template</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
