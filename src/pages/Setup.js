import React from "react";
import Installation from "../components/articles/Installation";
import CreateReactProject from "../components/articles/CreateReactProject";
import Github from "../components/articles/Github";
import Chapter from "../components/layout/Chapter";

export default function SetupPage() {
  return (
    <Chapter title="Setup">
        <Installation />
        <CreateReactProject />
        <Github />
    </Chapter>
  );
}
