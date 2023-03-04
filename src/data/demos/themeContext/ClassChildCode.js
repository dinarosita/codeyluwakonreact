import React from "react";
import Codebox from "../../../components/codeWrappers/boxes/Codebox";
import Tab from "../../../components/codeWrappers/boxes/Tab";
import Angle from "../../../components/codeWrappers/brackets/Angle";
import Curly from "../../../components/codeWrappers/brackets/Curly";
import CurlyTab from "../../../components/codeWrappers/brackets/CurlyTab";
import RoundTab from "../../../components/codeWrappers/brackets/RoundTab";
import Space from "../../../components/codeWrappers/boxes/Spacer";
import Attn from "../../../components/codeWrappers/spans/Attn";
import Fn from "../../../components/codeWrappers/spans/Fn";
import Var from "../../../components/codeWrappers/spans/Var";
import Var2 from "../../../components/codeWrappers/spans/Var2";

import Val from "../../../components/codeWrappers/spans/Val";

export default function ClassChildCode() {
  return (
    <Codebox title="ClassChild.js">
      import React, <Curly> Component </Curly> from "react"
      <br />
      import{" "}
      <Curly>
        {" "}
        <Attn>ThemeContext</Attn>{" "}
      </Curly>{" "}
      from "./ThemeApp"
      <Space />
      export default <Attn>class</Attn> <Fn>ClassConsumer</Fn> extends{" "}
      <Attn>Component</Attn>{" "}
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
        <Attn>render</Attn>(){" "}
        <CurlyTab>
          return{" "}
          <RoundTab>
            <Attn>
              <Angle>ThemeContext.Consumer</Angle>
            </Attn>
            <Tab>
              <Curly>
                <Var>darkTheme</Var> =>{" "}
                <CurlyTab>
                  return{" "}
                  <CurlyTab>
                    <Angle>Demobox</Angle>
                    <Tab>
                      <Attn>
                        <Angle>
                          div style=
                          <Curly>
                            <Var2>this.themeStyles</Var2>(<Var>darkTheme</Var>)
                          </Curly>
                        </Angle>
                      </Attn>
                      <Tab>Class Child</Tab>
                      <Attn>
                        <Angle>/div</Angle>
                      </Attn>
                    </Tab>
                    <Angle>/Demobox</Angle>
                  </CurlyTab>
                </CurlyTab>
              </Curly>
            </Tab>
            <Attn>
              <Angle>/ThemeContext.Consumer</Angle>
            </Attn>
          </RoundTab>
        </CurlyTab>
      </CurlyTab>
    </Codebox>
  );
}
