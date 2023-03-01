import React from 'react'
import classes from "./Codes.module.css"

export default function WrapperCode() {
  return (
    <pre className={classes.codebox}>
        import classes from "./Wrapper.module.css"<br />
        <br />
        function <em>Wrapper</em>(<em>props</em>) {"{"}
        <pre className="tab">
            return (
            <pre className="tab">
                &lt;div className={"{"}classes.wrapdiv{"}"}&gt;
                <pre className="tab">
                    <em>{"{"}props.children{"}"}</em>
                </pre>
                &lt;/div&gt;
            </pre>
            )
        </pre>
        {"}"}
        <br />
        export default Wrapper
    </pre>
  )
}
