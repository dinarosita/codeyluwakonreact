import React from "react";
import Article from "../../components/wrapper/Article";
import CodeSnippet from "../../components/wrapper/CodeSnippet";
import FetchThenUsehistoryCode from "../codes/FetchThenUsehistoryCode";

export default function FetchPostMethod() {
  return (
    <Article
      title="Fetch POST"
      tagline="Sending HTTP request for storing data to database"
    >
      <div>
        <p>
          Most API requires <code>POST</code> method to store (post) data to the
          database. The second argument of <code>fetch</code>
        </p>{" "}
        is where we set this up. This set up is an object that specify the
        method, the data to be stored, and in some cases other supporting
        information.
      </div>
      <pre className="codebox">
        <span className="main">fetch</span>(
        <pre className="tab">
          'https://react-meetup-6b19e-default-rtdb.firebaseio.com/meetups.json',
          <br />
          {"{"}
          <pre className="tab">
            <span className="main">method: "POST",</span>
            <br />
            <span className="main">body:</span> JSON.stringify(
            <span className="var">meetupData</span>),
            <br />
            <span className="main">headers:</span> {"{"}
            <pre className="tab">
              <span className="main">"Content-Type":</span> "application/json"
            </pre>
            {"}"}
          </pre>
          {"}"}
        </pre>
        )
      </pre>

      <div>
        <h4>Properties</h4>
        <ul>
          <li>
            <code>
              <strong>method</strong>: 'POST'
            </code>
          </li>
          <li>
            <code>
              <strong>body</strong>: JSON.stringify(meetupData)
            </code>
            <br />
            Adding the data to the request. The data should typically be in{" "}
            <code>json</code> format. Converting to json can be easily done by
            using built-in jason object and calling the stringify method. To the
            stringify, we pass the default JavaScript values (object, array,
            string, etc).
          </li>
          <li>
            <code>
              <strong>headers</strong>: {"{"}"Content-Type": "application/json"
              {"}"}
            </code>
            <br />
            Optional or sometimes required. Makes it clear that this request
            carries json data.
          </li>
        </ul>
      </div>
    </Article>
  );
}
