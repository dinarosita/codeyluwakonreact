import React from "react";
import Article from "../../components/wrapper/Article";
export default function FetchRequest() {
  return (
    <Article title="Second argument: Request">
      <div>
        <h3>Request types</h3>
        <p>
          There are various request types, the most common ones are{" "}
          <code>GET</code> for getting data and <code>POST</code> for storing
          data. These two are widely supported by modern browser. There are many
          others, for examples <code>HEAD</code>, <code>PUT</code>,{" "}
          <code>DELETE</code>, <code>CONNECT</code>, and <code>OPTIONS</code>.
          Make sure the request type is widely supported before using.
        </p>
      </div>

    </Article>
  );
}
