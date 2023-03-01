import React from "react";
import Article from "../../components/wrapper/Article";
import CodeSnippet from "../../components/wrapper/CodeSnippet";

export default function FetchRequest() {
  return (
    <Article title="Second argument: Request">
      <CodeSnippet>
        fetch(
        <pre className="tab">
          'https://react-meetup-6b19e-default-rtdb.firebaseio.com/
          meetups.json', <br />
          <em>
            {"{"}
            <pre className="tab">
              method: "POST",
              <br />
              body: JSON.stringify(meetupData),
              <br />
              headers: {"{"}
              <pre className="tab">"Content-Type": "application/json"</pre>
              {"}"}
            </pre>
            {"}"}
          </em>
        </pre>
        )
      </CodeSnippet>
      <div>
        <h4>Properties</h4>
        <ul>
          <li>
            <code>
              <strong>method</strong>: 'POST'
            </code>
            <br />
            Here is when we include the request type. <code>GET</code> request
            is the default. Most APIs require us to use <code>POST</code>{" "}
            request to store data.
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
