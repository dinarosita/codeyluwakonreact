import React from "react";
import Codebox from "../../../components/codeWrappers/boxes/Codebox";
import Tab from "../../../components/codeWrappers/boxes/Tab";
import Angle from "../../../components/codeWrappers/brackets/Angle";
import Curly from "../../../components/codeWrappers/brackets/Curly";
import CurlyTab from "../../../components/codeWrappers/brackets/CurlyTab";
import RoundTab from "../../../components/codeWrappers/brackets/RoundTab";
import Spacer from "../../../components/codeWrappers/boxes/Space";
import Space from "../../../components/codeWrappers/boxes/Space";

import Imp from "../../../components/codeWrappers/spans/Imp";
import Fn from "../../../components/codeWrappers/spans/Fn";
import Var from "../../../components/codeWrappers/spans/Var";
import Var2 from "../../../components/codeWrappers/spans/Var2";

import Val from "../../../components/codeWrappers/spans/Val";

export default function ClassChildComponentCode() {
  return (
    <Codebox title="ClassChildComponent.js">
      import React, <Curly> Component </Curly> from "react"
      <br />
      import{" "}
      <Imp>
        <Curly> ThemeContext </Curly> from "./MainApp"
      </Imp>
      <Space />
      export default <Imp>class</Imp> <Fn>ClassChildComponent</Fn> extends{" "}
      <Imp>Component</Imp>{" "}
      <CurlyTab>
        <Var2>themeStyles</Var2>(<Val>dark</Val>)
        <CurlyTab>
          return{" "}
          <CurlyTab>
            backgroundColor: <Val>dark</Val> ? "chocolate" : "white",
            <br />
            color: <Val>dark</Val> ? "white" : "chocolate"
          </CurlyTab>
        </CurlyTab>
        <Space />
        <Imp>render</Imp>(){" "}
        <CurlyTab>
          return{" "}
          <RoundTab>
            <Imp>
              <Angle>ThemeContext.Consumer</Angle>
            </Imp>
            <Tab>
              <Curly>
                <Var>darkTheme</Var> =>{" "}
                <CurlyTab>
                  return{" "}
                  <CurlyTab>
                    <Imp>
                      <Angle>
                        div style=
                        <Curly>
                          <Var2>this.themeStyles</Var2>(<Var>darkTheme</Var>)
                        </Curly>
                      </Angle>
                    </Imp>
                    <Tab>Class Child</Tab>
                    <Imp>
                      <Angle>/div</Angle>
                    </Imp>
                  </CurlyTab>
                </CurlyTab>
              </Curly>
            </Tab>
            <Imp>
              <Angle>/contextTheme.Consumer</Angle>
            </Imp>
          </RoundTab>
        </CurlyTab>
      </CurlyTab>
    </Codebox>
  );
}
