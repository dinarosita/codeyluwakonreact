import React from "react";
import Article from "../../components/wrappers/Article";
import Formula from "../../components/codeWrappers/boxes/Formula";
import WrapperCode from "../codes/WrapperCode";

export default function WrapperChildren() {
  return (
    <Article title="children" tagline="Important property for wrappers">
      <Formula>
        {"{"}props.children{"}"}
      </Formula>

      <div>
        <p>
          To actually able to pass along the wrapped children components, the
          wrapper function return must include <code>children</code> prop.
          Children prop is a prop every component received by default. Children
          always hold the content which is passed between the opening and
          closing component tags.
        </p>
      </div>

      <div>
        <h3>Wrapper.js</h3>
        <WrapperCode />
      </div>
    </Article>
  );
}
