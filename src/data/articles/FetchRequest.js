import React from "react";
import Article from "../../components/wrapper/Article";
import CodeSnippet from "../../components/wrapper/CodeSnippet";

export default function FetchRequest() {
  return (
    <Article title="Second argument: Request">
      <CodeSnippet>
        {"{"}
        <pre className="tab">
          method: <em>"POST"</em>,
          <br />
          body: <em>JSON.stringify(meetupData)</em>,
          <br />
          headers: {"{"}
          <pre className="tab"><em>"Content-Type": "application/json"</em></pre>
          {"}"}
        </pre>
        {"}"}
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
