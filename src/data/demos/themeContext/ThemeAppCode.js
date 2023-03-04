import React from "react";
import Codebox from "../../../components/codeWrappers/boxes/Codebox";
import Tab from "../../../components/codeWrappers/boxes/Tab";
import Var from "../../../components/codeWrappers/spans/Var";
import Attn from "../../../components/codeWrappers/spans/Attn";
import Block from "../../../components/codeWrappers/spans/Block";
import Fn from "../../../components/codeWrappers/spans/Fn";
import CurlyTab from "../../../components/codeWrappers/brackets/CurlyTab";
import Curly from "../../../components/codeWrappers/brackets/Curly";
import RoundTab from "../../../components/codeWrappers/brackets/RoundTab";
import Angle from "../../../components/codeWrappers/brackets/Angle";
import Space from "../../../components/codeWrappers/boxes/Spacer";

export default function ThemeAppCode() {
  return (
    <Codebox title="ThemeApp.js">
      import React, <Curly> useState </Curly> from "react";
      <br />
      import ClassConsumer from "./ClassConsumer";
      <Space />
      export const <Attn>ThemeContext</Attn> ={" "}
      <Attn>React.createContext()</Attn>
      <Space />
      export default function <Fn>ThemeApp</Fn>()
      <CurlyTab>
        const [<Var>darkTheme</Var>, <Var>setDarkTheme</Var>] = useState(true);
        <Space />
        function <Fn>toggleTheme</Fn>(){" "}
        <CurlyTab>
          <Var>setDarkTheme</Var>(prevDarkTheme => !prevDarkTheme)
        </CurlyTab>
        <Space />
        return{" "}
        <RoundTab>
          <Angle></Angle>
          <Tab>
            <Attn>
              <Angle>
                ThemeContext.Provider value=
                <Curly>
                  <Var>darkTheme</Var>
                </Curly>
              </Angle>
            </Attn>
            <Tab>
              <Angle>
                button onClick=
                <Curly>
                  <Fn>toggleTheme</Fn>
                </Curly>
              </Angle>
              Toggle Theme<Angle>/button</Angle>
              <br />
              <Angle>ClassConsumer /</Angle>
            </Tab>
            <Attn>
              <Angle>/ThemeContext.Provider</Angle>
            </Attn>
          </Tab>
          <Angle>/</Angle>
        </RoundTab>
      </CurlyTab>
    </Codebox>
  );
}
