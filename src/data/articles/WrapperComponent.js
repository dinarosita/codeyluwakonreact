import React from "react";
import Article from "../../components/wrapper/Article";
import Formula from "../../components/wrapper/Formula";

export default function WrapperComponent() {
  return (
    <Article
      title="Wrapper"
      tagline="Template component that makes applying style consistently easy"
    >
      <Formula>&lt;Wrapper&gt;...Content...&lt;/Wrapper&gt;</Formula>

      <div>
        <h3>Wrapper concept</h3>
        <p>
          When we have a set of certain appearance we want to use again and
          again to various components, instead of detailing the rule each time,
          we can detail them in a "wrapper" component and now it can be use to
          wrap the target components.
        </p>
      </div>

      <div>
        <h3>Styling</h3>
        <p>
          Include the specific styling to its <code>module.css</code> file.
        </p>
        <Formula>Wrapper.module.css</Formula>
      </div>
    </Article>
  );
}
