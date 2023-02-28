import React from 'react'
import classes from "./Codes.module.css"

export default function EventPreventDefault() {
  return (
    <pre>
          function <em>submitHandler</em>(<em>event</em>) {"{"}
          <pre className={classes.tab}>
            <em>event.preventDefault()</em>;<br />
            <pre className={classes.comment}>codes...</pre>
          </pre>
          {"}"}
        </pre>
  )
}
