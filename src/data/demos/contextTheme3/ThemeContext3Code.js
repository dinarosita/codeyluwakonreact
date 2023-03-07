import React from "react";
import Codebox from "../../../components/codeWrappers/boxes/Codebox";
import Tab from "../../../components/codeWrappers/boxes/Tab";
import Var from "../../../components/codeWrappers/spans/Var";
import Imp from "../../../components/codeWrappers/spans/Imp";
import Fn from "../../../components/codeWrappers/spans/Fn";
import CurlyTab from "../../../components/codeWrappers/brackets/CurlyTab";
import Curly from "../../../components/codeWrappers/brackets/Curly";
import RoundTab from "../../../components/codeWrappers/brackets/RoundTab";
import Angle from "../../../components/codeWrappers/brackets/Angle";
import Space from "../../../components/codeWrappers/boxes/Space";

export default function ThemeContext3Code() {
  return (
    <Codebox title="ThemeContext.js">
      import React, <Curly> useState </Curly> from "react";
      <Space />
      const <Imp>ThemeContext</Imp> = <Imp>React.createContext()</Imp>
      <br />
      const <Imp>ThemeUpdateContext</Imp> = <Imp>React.createContext()</Imp>
      <Space />
      export function <Imp>useTheme</Imp>(){" "}
      <CurlyTab>
        return <Imp>useContext(ThemeContext)</Imp>
      </CurlyTab>
      <br />
      export function <Imp>useThemeUpdate</Imp>(){" "}
      <CurlyTab>
        return <Imp>useContext(ThemeUpdateContext)</Imp>
      </CurlyTab>
      <Space />
      export function <Fn>ThemeProvider</Fn>(<Curly> children </Curly>)
      <CurlyTab>
        const [<Var>darkTheme</Var>, <Var>setDarkTheme</Var>] = useState(false);
        <Space />
        function <Fn>toggleTheme</Fn>(){" "}
        <CurlyTab>
          <Var>setDarkTheme</Var>(prevDarkTheme => !prevDarkTheme)
        </CurlyTab>
        <Space />
        return{" "}
        <RoundTab>
          <Imp>
            <Angle>
              ThemeContext.Provider value=
              <Curly>
                <Var>darkTheme</Var>
              </Curly>
            </Angle>
          </Imp>
          <Tab>
            <Imp>
              <Angle>
                ThemeUpdateContext.Provider value=
                <Curly>
                  <Var>toggleTheme</Var>
                </Curly>
              </Angle>
            </Imp>
            <Tab>
              <Curly>children</Curly>
            </Tab>
            <Imp>
              <Angle>/ThemeUpdateContext.Provider</Angle>
            </Imp>
          </Tab>
          <Imp>
            <Angle>/ThemeContext.Provider</Angle>
          </Imp>
        </RoundTab>
      </CurlyTab>
    </Codebox>
  );
}
