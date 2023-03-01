import React from 'react'
import classes from "./Codes.module.css"

export default function SubmitHandlerCode() {
  return (
    <pre className={classes.codebox}>
          function meetupForm() {"{"}
          <pre className="tab">
            const <em>titleInputRef</em> = <em>useRef()</em>;<br />
            <br />
            function <em>submitHandler</em>(event) {"{"}
            <pre className="tab">
              event.preventDefault();
              <br />
              const <em>enteredTitle</em> = <em>titleInputRef.current.value</em>
              ;
            </pre>
            {"}"}
            <br />
            <br />
            return {"{"}
            <pre className="tab">
              <em>&lt;form</em>{" "}
              <em>
                onSubmit={"{"}submitHandler{"}"}
                &gt;
              </em>
              <pre className="tab">
                &lt;label htmlFor="title"&gt;Meetup Title&lt;/label&gt;
                <br />
                <em>&lt;input</em> type="text" required id="title"{" "}
                <em>
                  ref={"{"}titleInputRef{"}"} /&gt;
                </em>
                <br />
                &lt;button&gt;Submit&lt;/button&gt;
              </pre>
              &lt;/form&gt;
            </pre>
            {"}"}
          </pre>
          {"}"}
        </pre>
  )
}
