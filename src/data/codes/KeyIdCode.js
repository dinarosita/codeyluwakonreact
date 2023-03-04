import React from "react";
import Codebox from "../../components/codeWrappers/boxes/Codebox"
import Tab from "../../components/codeWrappers/boxes/Tab"

export default function KeyIdCode() {
  return (
    <Codebox>
        const todoItems = todos.map((todo) =&gt;
        <Tab>
            &lt;li key={"{"}todo.id{"}"}&gt;
            <Tab>
                {"{"}todo.text{"}"}
            </Tab>
            &lt;/li&gt;
        </Tab>
        );
    </Codebox>
  );
}
