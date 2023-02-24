import React from "react";
import Section from "../components/ui/Section";

export default function HomePage() {
  return (
    <>
      <h1>Welcome</h1>
      <Section>
        <div>
          <p>CodeyLuwak on React houses my notes when learning React JS. Navigate through the topics of interest in the navigation bar.</p>
        </div>

        <div>
          <p>More from CodeyLuwak</p>
          <ul>
            <li>
              <a
                href="https://dinarosita.github.io/codeyluwak/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeyLuwak
              </a> (main)
            </li>
            <li>
              <a
                href="https://dinarosita.github.io/react-hooks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Hooks
              </a>
            </li>
            <li>React Meetups</li>
          </ul>
        </div>

        <div>
          <p>Main tutorials:</p>
          <ul>
            <li>
              React refresher at{" "}
              <a
                href="https://www.udemy.com/course/nextjs-react-the-complete-guide/"
                target="_blank"
                rel="noopener noreferrer"
              >
                nextJS course
              </a>{" "}
              by Udemy
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=O6P86uwfdR0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Hooks videos by WebDev Simplified
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p>Main documentations:</p>
          <ul>
            <li>
              <a
                href="https://beta.reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Docs
              </a>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}
