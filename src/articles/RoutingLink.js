import React from "react";

export default function RoutingLink() {
    const text1 = String.raw`import { Link } from "react-router-dom";
...

export default function MainNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Setup</Link>
        </li>
        <li>
          <Link to="/routing">Routing</Link>
        </li>
      </ul>
    </nav>
  );
}`
  return (
    <>
      <h2>Link Component</h2>

      <div>
        <p>MainNavigation.js</p>
        <pre>{text1}</pre>
      </div>

      <div>
        <p>
          <code>Link</code> vs <code>a</code>{" "}
        </p>
        <ul>
          <li>
            The regular anchor tag "a href" link html element actually work, but
            has one big disadvantage. Upon clicking, new request will be sent to
            server.
          </li>
          <li>
            The server is the one hosting react application and the server will
            reply with our application and the router will figure out which page
            to render.
          </li>
          <li>
            So it will work too. However it will be redundant. We already are in
            our running react application. It will be great if we don't leave it
            just because we want to navigate somewhere.
          </li>
          <li>
            Also sometimes sending extra request is not something we necessarily
            want to do.
          </li>
        </ul>
      </div>

      <div>
        <p>
          How <code>Link</code> works
        </p>
        <ul>
          <li>
            Link component can be wrapped around our link text just like anchor
            tag and render our anchor tag in the end.
          </li>
          <li>
            But internally react router dom attaches a click listener to the
            anchor tag.
          </li>
          <li>
            When we click on it, it will prevent browser default of sending
            request. Instead, it will parse the URL and change the browser url
            bar. Instead of sending request, it loads the appropriate component
            onto the screen just with react and js.
          </li>
          <li>
            We stayed on the already loaded page. No extra request sent. "to"
            prop for the path
          </li>
        </ul>
      </div>
    </>
  );
}
