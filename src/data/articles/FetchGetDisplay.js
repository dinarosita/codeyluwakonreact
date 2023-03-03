import React from "react";
import Article from "../../components/wrapper/Article";

export default function FetchGetDisplay() {
  return (
    <>
      <Article
        title="Fetch GET Display"
        tagline="Proccessing the retrieved data "
      >
        <div>
          <h3>Fetch returns promise, page rendering doesn't wait</h3>
          <p>
            Post request returning promise.The main function itself will run
            right away without waiting th promise to resolve. In other word, the
            page will be rendered without waiting for the data from database.{" "}
          </p>
        </div>
        <div>
          <h3>Can't use async-await system</h3>

          <p>
            Using <code>async</code> and <code>await</code> might works in other
            system, but not here. If we async the function and await the fetch,
            we are converting the function component into a function that
            returns promise, an it's not longer qualify as a function component.
            <pre className="codebox">
              async function AllMeetupPage() {"{"}
              <pre className="tab">
                await fetch(...);
                <br />
                return (...)
              </pre>
              {"}"}
            </pre>
          </p>
        </div>
        <div>
          <h3>Using hook useState and useEffect for doing the job</h3>

          <p>
            We will work this out using <code>useState</code> and{" "}
            <code>useEffect</code> hooks
          </p>
        </div>
      </Article>
    </>
  );
}
