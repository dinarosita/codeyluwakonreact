import React from "react";
import CodeTemplate from "../codesnippets/CodeTemplate";

export default function ArticleTemplate() {
  const text1 = String.raw`Code`;
  return (
    <>
      <h2>Title</h2>
      <div>
        <p>Paragraph</p>
        <ul>
          <li>Item</li>
          <li>
            Item
            <br />
            <pre>{text1}</pre>
          </li>
        </ul>
      </div>
      <div>
        <p>File.js</p>
        <pre>{text1}</pre>
      </div>
      <div><CodeTemplate />
      </div>
    </>
  );
}
