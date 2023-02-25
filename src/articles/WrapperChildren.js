import React from "react";
import WrapperCode from "../codesnippets/WrapperCode";

export default function WrapperChildren() {

  return (
    <>
      <h2>Wrapper: Children Property</h2>

      <div>
        <h3>
          {"{"}props.children{"}"}
        </h3>

        <p>
          To actually able to pass along the wrapped children components, the
          wrapper function return must include <code>children</code> prop.
          Children prop is a prop every component received by default. Children
          always hold the content which is passed between the opening and
          closing component tags.
        </p>
      </div>
      <div>
        <WrapperCode />
      </div>
    </>
  );
}
