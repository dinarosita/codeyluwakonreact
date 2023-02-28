import React from "react";
import HomeAbout from "../data/articles/HomeAbout";
import SectionLink from "../components/wrapper/SectionLinkInternal";
import Section from "../components/wrapper/Section";

export default function HomePage() {
  return (
    <>
      <h1>Welcome</h1>
      <Section>
        <HomeAbout />
      </Section>
       <SectionLink
        url="https://dinarosita.github.io/codeyluwak/"
        title="CodeyLuwak on Web Basics"
      />
      <SectionLink
        url="https://dinarosita.github.io/react-hooks/"
        target="_blank"
        rel="noopener noreferrer"
        title="CodeyLuwak on React Hooks"
      />
      <SectionLink
        url="https://dinarosita.github.io/react-meetups/"
        title="React Meetups &mdash; Udemy tutorial project"
      />
    </>
  );
}
