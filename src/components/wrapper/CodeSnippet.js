import React from 'react'
import classes from "./CodeSnippet.module.css"

export default function CodeSnippet(props) {
  return (
    <pre className={classes.codeSnippet}>{props.children}</pre>
  )
}
