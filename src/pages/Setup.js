import React from "react";
import Page from "../components/wrappers/Page";
import SetupInstall from "../data/articles/SetupInstall";
import SetupCreate from "../data/articles/SetupCreate";
import GithubSetup from "../data/articles/GithubSetup";
import RrdomInstall from "../data/articles/RrdomInstall";

export default function SetupPage() {
  return (
    <Page title="Setup" >      
        <SetupInstall />     
        <SetupCreate />    
        <GithubSetup />
        <RrdomInstall />
    </Page>
  );
}
