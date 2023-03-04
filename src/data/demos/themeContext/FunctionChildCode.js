import React from "react";
import Codebox from "../../../components/codeWrappers/boxes/Codebox";
import Space from "../../../components/codeWrappers/boxes/Spacer";
import Tab from "../../../components/codeWrappers/boxes/Tab";
import Angle from "../../../components/codeWrappers/brackets/Angle";
import Curly from "../../../components/codeWrappers/brackets/Curly";
import CurlyTab from "../../../components/codeWrappers/brackets/CurlyTab";
import RoundTab from "../../../components/codeWrappers/brackets/RoundTab";
import Attn from "../../../components/codeWrappers/spans/Attn";
import Fn from "../../../components/codeWrappers/spans/Fn";
import Var from "../../../components/codeWrappers/spans/Var";

export default function FunctionChildCode() {
  return (
    <Codebox title="FunctionChild.js">
      import React, <Curly> useContext </Curly> from "React"
      <br />
      import{" "}
      <Curly>
        {" "}
        <Attn>ThemeContext</Attn>{" "}
      </Curly>{" "}
      from "./ThemeApp"
      <Space />
      export default <Attn>function</Attn> <Fn>FunctionConsumer</Fn>(){" "}
      <CurlyTab>
        const <Var>darkTheme</Var> = <Attn>useContext(ThemeContext)</Attn>
        <Space />
        const <Var>themeStyles</Var> ={" "}
        <CurlyTab>
          backgroundColor: <Var>darkTheme</Var> ? "chocolate" : "white",
          <br />
          color: <Var>darkTheme</Var> ? "white" : "chocolate",
        </CurlyTab>
        <Space />
        return{" "}
        <RoundTab>
          <Angle>
            Demobox style=<Curly>themeStyles</Curly>
          </Angle>
          <Tab>Function Child</Tab>
          <Angle>/Demobox</Angle>
        </RoundTab>
      </CurlyTab>
    </Codebox>
  );
}
