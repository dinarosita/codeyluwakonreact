import React from 'react'
import classes from "../Spans.module.css"

export default function Fn(props) {
  return (
    <span className={classes.fn}>
        {props.children}
    </span>
  )
}
