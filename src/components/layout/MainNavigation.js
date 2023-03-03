import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to="/home" className={classes.logo}>
        <div>CodeyLuwak on React</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/css">CSS</Link>
          </li>
          <li>
            <Link to="/fetch">Fetch</Link>
          </li>
          <li>
            <Link to="/fetchget">Fetch Get</Link>
          </li> <li>
            <Link to="/fetchpost">Fetch Post</Link>
          </li>
          <li>
            <Link to="/firebase">Firebase</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/form-submit">Form Submission</Link>
          </li>
          
          <li>
            <Link to="/github">Github</Link>
          </li>
          <li>
            <Link to="/hook">Hook</Link>
          </li>
          <li>
            <Link to="/httprequest">HTTP Request</Link>
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
            <Link to="/usecontext">useContext</Link>
          </li>
          <li>
            <Link to="/wrapper">Wrapper</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
