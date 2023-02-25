import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
// import logo from "../../images/logo32pale.png";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to="/home">
        <div className={classes.logo}>
          {/* <img src={logo} alt="CodeyLuwak on ReactJS" /> */}
          CodeyLuwak on React
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/components">Components</Link>
          </li>
          <li>
            <Link to="/css">CSS</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/github">Github</Link>
          </li>
          <li>
            <Link to="/hook">Hook</Link>
          </li>
          <li>
            <Link to="/listing">Listing</Link>
          </li>
          <li>
            <Link to="/properties">Properties</Link>
          </li>
          <li>
            <Link to="/rrdom">React Router Dom</Link>
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
        </ul>
      </nav>
    </header>
  );
}
