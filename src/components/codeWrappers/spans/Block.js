import React from 'react'
import classes from "../Spans.module.css"

export default function Block(props) {
  return (
    <span className={classes.block}>
        {props.children}
    </span>
  )
}
