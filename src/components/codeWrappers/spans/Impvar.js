import React from 'react'
import classes from "../Spans.module.css"

export default function Impvar(props) {
  return (
    <span className={classes.impvar}>
        {props.children}
    </span>
  )
}
