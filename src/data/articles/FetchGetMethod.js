import React from "react";
import Article from "../../components/wrapper/Article";
import CodeSnippet from "../../components/wrapper/CodeSnippet";
import Formula from "../../components/wrapper/Formula";

export default function FetchGetMethod() {
  return (
    <>
      <Article title="Fetch GET" tagline="Sending HTTP request for getting data from database">
        <div>
          <p>
            <code>GET</code> is the default HTTP request method, therefore the <code>fetch()</code> doesn't need a second argument at all.
          </p>
          <pre className="codebox">
            <span className="main">fetch</span>
            ('https://react-meetup-6b19e-default-rtdb.firebaseio.com/meetups.json')
          </pre>
        </div>
      </Article>
    </>
  );
}
