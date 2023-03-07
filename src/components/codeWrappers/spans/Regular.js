import React from 'react'
import classes from "../Spans.module.css"

export default function Regular(props) {
  return (
    <span className={classes.regular}>
        {props.children}
    </span>
  )
}
