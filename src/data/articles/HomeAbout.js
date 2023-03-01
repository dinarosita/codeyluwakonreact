import React from "react";
import ANew from "../../components/wrapper/ANew";
import Article from "../../components/wrapper/Article";

export default function HomeAbout() {
  return (
    <Article title="About CodeyLuwak on React">
      <div>
        <p>
          CodeyLuwak on React houses my notes when learning React JS. Navigate
          through the topics of interest in the navigation bar.
        </p>
      </div>

      <div>
        <p>Main tutorials I follow:</p>
        <ul>
          <li>
            {" "}
            <ANew
              href="https://www.udemy.com/course/nextjs-react-the-complete-guide/" >React refresher at nextJS course by Udemy</ANew>
          </li>
          <li>
            <ANew
              href="https://www.youtube.com/watch?v=O6P86uwfdR0&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h"
            >
              React Hooks videos by WebDev Simplified
            </ANew>
          </li>
        </ul>
      </div>

      <div>
        <p>Main documentations:</p>
        <ul>
          <li>
            <ANew
              href="https://beta.reactjs.org/"
            >
              React Docs
            </ANew>
          </li>
        </ul>
      </div>
    </Article>
  );
}
