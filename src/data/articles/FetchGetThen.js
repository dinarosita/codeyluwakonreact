import React from "react";
import Article from "../../components/wrapper/Article";
import CodeSnippet from "../../components/wrapper/CodeSnippet";
import Formula from "../../components/wrapper/Formula";

export default function FetchGetThen() {
  return (
    <>
      <Article title="Fetch GET Then Then"
        tagline="Retrieving returned database data"        
      >
        <div>
          <p>
            A <code>GET</code> request returns a promise which resolve to actual
            response object sometimes in the future. This response containing
            the data in <code>json</code> format. We first need to convert it to
            regular JavaScript format. It can be done by response's{" "}
            <code>.json()</code> method that is also returning a promise. So we
            need to include this method as a return, and ned to use another{" "}
            <code>then</code> to catch the result.
          </p>
          <pre className="codebox">
            <span className="main">fetch</span>(
            <pre className="tab">
              'https://react-meetup-6b19e-default-rtdb.firebaseio.com/meetups.json'
            </pre>
            ).<span className="main">then</span>(<span className="var">response</span> => {"{"}
            <pre className="tab">return <span className="var">response</span>.json();</pre>
            {"}"}).<span className="main">then</span>(<span className="var">data</span> => {"{"}
            <pre className="tab"><span className="block">/* Code for <span className="var">data</span> retrieved */</span></pre>
            {"}"});
          </pre>
        </div>
      </Article>
    </>
  );
}
