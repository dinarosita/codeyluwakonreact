import React from "react";
import Codebox from "../../components/codeWrappers/boxes/Codebox";
import Tab from "../../components/codeWrappers/boxes/Tab";

export default function KeyNoIdCode() {
  return (
    <Codebox>
        const todoItems = todos.map((todo, index) =&gt;
        <Tab>
            &lt;li key={"{"}index{"}"}&gt;
            <Tab>
                {"{"}todo.text{"}"}
            </Tab>
            &lt;/li&gt;
        </Tab>
        );
    </Codebox>
  );
}
