import React from "react";
import Codebox from "../../components/codeWrappers/boxes/Codebox";
import Tab from "../../components/codeWrappers/boxes/Tab";

export default function SubmitHandlerCode() {
  return (
    <Codebox>
      function meetupForm() {"{"}
      <Tab>
        const <em>titleInputRef</em> = <em>useRef()</em>;<br />
        <br />
        function <em>submitHandler</em>(event) {"{"}
        <Tab>
          event.preventDefault();
          <br />
          const <em>enteredTitle</em> = <em>titleInputRef.current.value</em>;
        </Tab>
        {"}"}
        <br />
        <br />
        return {"{"}
        <Tab>
          <em>&lt;form</em>{" "}
          <em>
            onSubmit={"{"}submitHandler{"}"}
            &gt;
          </em>
          <Tab>
            &lt;label htmlFor="title"&gt;Meetup Title&lt;/label&gt;
            <br />
            <em>&lt;input</em> type="text" required id="title"{" "}
            <em>
              ref={"{"}titleInputRef{"}"} /&gt;
            </em>
            <br />
            &lt;button&gt;Submit&lt;/button&gt;
          </Tab>
          &lt;/form&gt;
        </Tab>
        {"}"}
      </Tab>
      {"}"}
    </Codebox>
  );
}
