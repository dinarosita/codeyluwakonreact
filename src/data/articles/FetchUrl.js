import React from "react";
import Article from "../../components/wrapper/Article";
import CodeSnippet from "../../components/wrapper/CodeSnippet";

export default function FetchUrl() {
  return (
    <Article title="First argument: URL">
      <CodeSnippet>
            'https://react-meetup-6b19e-default-rtdb.firebaseio.com/
            <em>meetups.json</em>'
      </CodeSnippet>
      <div>
        <h3>Composing HTTP request URL</h3>
        <ul>
          <li>
            <strong>Basic url</strong>:{" "}
            <code>
              'https://react-meetup-6b19e-default-rtdb.firebaseio.com/'
            </code>
            <br />
            HTTP request URL as a string. eg, the URL that we obtained from
            creating the Reatime Database (top bar of the window).
          </li>
          <li>
            <strong>Segmen</strong>: <code>meetups</code>
            <br />
            The URL can be manipulated. We can add segmens after that domain,
            and the segmens will be translated into folders/tables in our
            database.
          </li>
          <li>
            <strong>Json format</strong>: <code>.json</code>
            <br />
            Add the format of the package, <code>json</code>, to the segmen's
            name. It's not React specific, it's required by Firebase because
            it's the chosen format in Firebase.
          </li>
        </ul>
      </div>
    </Article>
  );
}
