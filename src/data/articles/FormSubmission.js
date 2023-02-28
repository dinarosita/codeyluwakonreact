import React from "react";
import Article from "../../components/wrapper/Article";

export default function FormSubmission() {
  return (
    <Article title="Submitting a form">
      <div>
        <h3>Listen to the submission</h3>
        <p>
          By default, <code>onSubmit</code> is triggered when a button within
          form element is triggered.
        </p>
      </div>
      <div>
        <h3>Set up browser submission behaviour</h3>
        <ul>
          <li>
            Prevent browser default behaviour of sending http request
            automatically and reload the page.
          </li>
          <li>
            Instead, handle the submission with React JavaScript. It might still
            involve sending http request later, but we want that to happen
            behind the scene without reloading the page.
          </li>
          <li>We also need to read the entered values</li>
        </ul>
      </div>
    </Article>
  );
}
