import React from "react";
import Codebox from "../../components/codeWrappers/boxes/Codebox"
import Tab from "../../components/codeWrappers/boxes/Tab";
import Comment from "../../components/codeWrappers/spans/Comment"

export default function EventPreventDefault() {
  return (
    <Codebox>
      function <em>submitHandler</em>(<em>event</em>) {"{"}
      <Tab>
        <em>event.preventDefault()</em>;<br />
        <Comment>codes...</Comment>
      </Tab>
      {"}"}
    </Codebox>
  );
}
