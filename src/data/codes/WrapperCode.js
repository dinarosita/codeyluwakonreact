import React from 'react'
import classes from "./Codes.module.css"

export default function WrapperCode() {
  return (
    <pre>
        import classes from "./Wrapper.module.css"<br />
        <br />
        function <em>Wrapper</em>(<em>props</em>) {"{"}
        <pre className={classes.tab}>
            return (
            <pre className={classes.tab}>
                &lt;div className={"{"}classes.wrapdiv{"}"}&gt;
                <pre className={classes.tab}>
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
