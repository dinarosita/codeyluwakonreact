import React from "react";
import Article from "../../components/wrappers/Article";
import Formula from "../../components/codeWrappers/boxes/Formula";
import EventPreventDefault from "../codes/EventPreventDefaultCode";

export default function FormPreventDefault() {
  return (
    <Article title="Prevent Default" tagline="An event method">
      <Formula>event.preventDefault()</Formula>

      <div>
        <h3>onSubmit has event object</h3>
        <p>
          React gives <code>event</code> object automatically to any built-in
          events we can listen like <code>onSubmit</code> and{" "}
          <code>onClick</code>. An event argument will be passed into the
          function that is executed for those events. The argument can be
          accepted as an parameter.
        </p>
      </div>

      <div>
        <h3>Preventing browser's default behaviour</h3>
        <p>
          The event object has <code>preventDefault()</code> method which we can
          call to prevent browser's default behaviour. This method is actually
          not React specific method. This is a vanilla JavaScript which is fullt
          supported by React. This prevent browser's default and now we can
          fully controll the submission.
        </p>
      </div>
      <div>
        <h3>submitHandler function</h3>
        <EventPreventDefault />
      </div>
    </Article>
  );
}
