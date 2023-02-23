import React from "react";
import TerminalBrowser from "../components/articles/TerminalBrowser";
import TerminalGithub from "../components/articles/TerminalGithub";
import Chapter from "../components/layout/Chapter";

export default function TerminalPage() {
  return (
    <Chapter title="Terminal">
        <TerminalBrowser />
        <TerminalGithub />
    </Chapter>
  );
}
