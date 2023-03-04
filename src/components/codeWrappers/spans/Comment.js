import React from 'react'
import classes from "../Spans.module.css"

export default function Comment(props) {
  return (
    <span className={classes.comment}>
        {props.children}
    </span>
  )
}
