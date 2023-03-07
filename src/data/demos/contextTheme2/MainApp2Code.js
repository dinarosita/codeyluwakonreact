import React from "react";
import Codebox from "../../../components/codeWrappers/boxes/Codebox";
import Tab from "../../../components/codeWrappers/boxes/Tab";
import Imp from "../../../components/codeWrappers/spans/Imp";
import Fn from "../../../components/codeWrappers/spans/Fn";
import CurlyTab from "../../../components/codeWrappers/brackets/CurlyTab";
import RoundTab from "../../../components/codeWrappers/brackets/RoundTab";
import Angle from "../../../components/codeWrappers/brackets/Angle";
import Space from "../../../components/codeWrappers/boxes/Space";

export default function MainApp2Code() {
  return (
    <Codebox title="MainApp.js">
      import <Imp>ThemeProvider</Imp> from <Imp>"./ThemeContext"</Imp>
      <Space />
      export default function <Fn>MainApp</Fn>(){" "}
      <CurlyTab>
        return{" "}
        <RoundTab>
          <Imp>
            <Angle>ThemeProvider</Angle>
          </Imp>
          <Tab>
            <Angle>ChildComponent /</Angle>
          </Tab>
          <Imp>
            <Angle>/ThemeProvider</Angle>
          </Imp>
        </RoundTab>
      </CurlyTab>
    </Codebox>
  );
}
