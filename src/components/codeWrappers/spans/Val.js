import React from 'react'
import classes from "../Spans.module.css"

export default function Val(props) {
  return (
    <span className={classes.val}>
        {props.children}
    </span>
  )
}
