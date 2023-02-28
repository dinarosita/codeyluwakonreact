import React from "react";

export default function FormSubmission() {
  return (
    <>
      <h2>Form Submission</h2>

      <div>
        <p>Handling the form submission:</p>
        <ul>
          <li>
            Listen to the submission
            <ul>
              <li>
                By default, <code>onSubmit</code> is triggered when a button
                within form element is triggered.
              </li>
            </ul>
          </li>
          <li>
            Set up browser submission behaviour:
            <ul>
              <li>
                Prevent browser default behaviour of sending http request
                automatically and reload the page.
              </li>
              <li>
                Instead, handle the submission with React JavaScript. It might
                still involve sending http request later, but we want that to
                happen behind the scene without reloading the page.
              </li>
              <li>We also need to read the entered values</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
