import React from 'react'
import classes from "../Spans.module.css"

export default function Imp(props) {
  return (
    <span className={classes.imp}>
        {props.children}
    </span>
  )
}
