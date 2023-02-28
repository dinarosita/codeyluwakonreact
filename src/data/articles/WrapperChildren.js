import React from "react";
import Formula from "../../components/wrapper/Formula";
import SectionHeader from "../../components/wrapper/SectionHeader";
import WrapperCode from "../codes/WrapperCode";

export default function WrapperChildren() {
  return (
    <>
      <SectionHeader title="children" tagline="Important property for wrappers">
        <Formula>{"{"}props.children{"}"}</Formula>
      </SectionHeader>

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
    </>
  );
}
