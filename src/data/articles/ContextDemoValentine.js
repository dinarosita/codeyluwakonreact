import React from "react";
import Article from "../../components/wrappers/Article";
import ToggleShowHideCodes from "../../tools/ToggleShowHideCodes";
import { ToggleDisplayProvider } from "../../tools/ToggleDisplayContext";
import MainAppCode from "../demos/contextTheme/MainAppCode";
import ValentineApp from "../demos/contextValentine/ValentineApp";

export default function ContextDemoValentine() {
  return (
    <Article title="Context Demo: Valentine">
      <ValentineApp />
      <ToggleDisplayProvider>
        <ToggleShowHideCodes>
          <MainAppCode />
        </ToggleShowHideCodes>
      </ToggleDisplayProvider>
    </Article>
  );
}
