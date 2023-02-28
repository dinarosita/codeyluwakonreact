import React from "react";
import Article from "../../components/wrapper/Article";
import Formula from "../../components/wrapper/Formula";

export default function FormOnsubmit() {
  return (
    <Article title="onSubmit" tagline="Property of form element">
      <div>
        <Formula>
          &lt;form onSubmit={"{"}submitHandler{"}"} &gt;
        </Formula>
      </div>

      <div>
        <h3>onSubmit for listening submission event</h3>
        <ul>
          <li>
            To listen for submission, we can add <code>onSubmit</code> event
            prop on the <em>form</em> element.
          </li>
          <li>
            By default, submit event will be emitted when a <em>button</em>{" "}
            within the form is clicked. The button (and other child of the form
            elements) can be nested deep, as long as it's within.
          </li>
          <li>
            Thus <code>submitHandler</code> function is called.
          </li>
        </ul>
      </div>
      <div>
        <Formula>&lt;button&gt;Submit&lt;/button&gt;</Formula>
      </div>
    </Article>
  );
}
