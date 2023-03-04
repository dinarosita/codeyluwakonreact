import React from 'react'
import classes from "../Spans.module.css"

export default function Var2(props) {
  return (
    <span className={classes.var2}>
        {props.children}
    </span>
  )
}
