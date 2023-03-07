import React from "react";
import Codebox from "../../../components/codeWrappers/boxes/Codebox";
import Space from "../../../components/codeWrappers/boxes/Space";
import Tab from "../../../components/codeWrappers/boxes/Tab";
import Angle from "../../../components/codeWrappers/brackets/Angle";
import Curly from "../../../components/codeWrappers/brackets/Curly";
import CurlyTab from "../../../components/codeWrappers/brackets/CurlyTab";
import RoundTab from "../../../components/codeWrappers/brackets/RoundTab";
import Imp from "../../../components/codeWrappers/spans/Imp";
import Fn from "../../../components/codeWrappers/spans/Fn";
import Var from "../../../components/codeWrappers/spans/Var";
import Var2 from "../../../components/codeWrappers/spans/Var2";

export default function ChildComponentCode() {
  return (
    <Codebox title="ChildComponent.js">
      import React, <Curly> useContext </Curly> from "react"
      <br />
      import{" "}
      <Curly>
        {" "}
        <Imp>ThemeContext</Imp>{" "}
      </Curly>{" "}
      from <Imp>"./MainApp"</Imp>
      <Space />
      export default <Imp>function</Imp> <Fn>ChildComponent</Fn>(){" "}
      <CurlyTab>
        const <Var>darkTheme</Var> = <Imp>useContext(ThemeContext)</Imp>
        <Space />
        const <Var2>themeStyles</Var2> ={" "}
        <CurlyTab>
          backgroundColor: <Var>darkTheme</Var> ? "chocolate" : "white",
          <br />
          color: <Var>darkTheme</Var> ? "white" : "chocolate",
        </CurlyTab>
        <Space />
        return{" "}
        <RoundTab>
          <Imp>
            <Angle>
              div style=
              <Curly>
                <Var2>themeStyles</Var2>
              </Curly>
            </Angle>
          </Imp>
          <Tab>Context Child</Tab>

          <Imp>
            <Angle>/div</Angle>
          </Imp>
        </RoundTab>
      </CurlyTab>
    </Codebox>
  );
}
