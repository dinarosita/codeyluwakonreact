import React from "react";
import Article from "../../components/wrapper/Article";
import Formula from "../../components/wrapper/Formula";
import CodeSnippet from "../../components/wrapper/CodeSnippet";

export default function FetchBasic() {
  return (
    <Article title="Fetch basic">
      <Formula>
        fetch(<em>url</em>, <em>request</em>)
      </Formula>

      <div>
        <p>
          Fetch is a standard JavaScript function for HTTP request. It's
          supported by modern browsers. It takes the HTTP request's URL as first
          argument, and the request as second argument.
        </p>
      </div>
      <CodeSnippet>
        fetch(
        <pre className="tab">
          'https://react-meetup-6b19e-default-rtdb.firebaseio.com/
          <em>meetups.json</em>', <br />
          {"{"}
          <pre className="tab">
            method: <em>"POST"</em>,
            <br />
            body: <em>JSON.stringify(meetupData)</em>,
            <br />
            headers: {"{"}
            <pre className="tab">
              "Content-Type": <em>"application/json"</em>
            </pre>
            {"}"}
          </pre>
          {"}"}
        </pre>
        )
      </CodeSnippet>
      <div>
        <h3>Arguments</h3>
        <ol>
          <li>HTTP request URL (quoted)</li>
          <li>The request (as an object)</li>
        </ol>
      </div>
      <div>
        <h3>Further set up</h3>
        <p>
          We can further set fetch up for example with some listening for
          success or error cases. At this point, we will skip that.
        </p>
      </div>
    </Article>
  );
}
