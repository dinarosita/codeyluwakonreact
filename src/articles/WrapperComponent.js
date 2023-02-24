import React from "react";
import WrapperCode from "../codesnippets/WrapperCode";

export default function WrapperComponent() {
  
  return (
    <>
      <h2>Wrapper Component</h2>
      <div>
        <WrapperCode />
      </div>
      <div>
        <h3>&lt;Wrapper&gt;</h3>
        <p>
          When we have a set of certain appearance we want to use again and
          again to various components, instead of detailing the rule each time,
          we can detail them in a "wrapper" component and now it can be use to
          wrap the target components.
        </p>
      </div>

      <div>
        <h3>Wrapper.module.css</h3>
        <p>Include the specific styling to its module css.</p>
      </div>
    </>
  );
}
