import React from 'react'
import classes from "../Spans.module.css"

export default function Var(props) {
  return (
    <span className={classes.var}>
        {props.children}
    </span>
  )
}
