import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
// import logo from "../../images/logo32pale.png";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        {/* <img src={logo} alt="CodeyLuwak on ReactJS" /> */}
        CodeyLuwak on React
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/setup">Setup</Link>
          </li>
          <li>
            <Link to="/routing">Routing</Link>
          </li>
          <li>
            <Link to="/component">Component</Link>
          </li>
          <li>
            <Link to="/hook">Hook</Link>
          </li>
          <li>
            <Link to="/terminal">Terminal</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
