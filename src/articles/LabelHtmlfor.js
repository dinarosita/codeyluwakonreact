import React from "react";

export default function LabelHtmlfor() {
  return (
    <>
      <h2>Label: htmlFor property</h2>
      <div>
        <p>In regular html, to indicate which form element a label is labeling, we <code>for</code> attribute, that will seek the first form element with a matching <code>id</code>. In React, instead of <code>for</code>, we are using <code>htmlFor</code></p>
        
        </div>
        <div>
            <pre>&lt;label <em>htmlFor="title"</em>&gt;Title&lt;/label&gt;<br/>&lt;input type="text <em>id="title"</em> /&gt;</pre>
        </div>
    </>
  );
}
