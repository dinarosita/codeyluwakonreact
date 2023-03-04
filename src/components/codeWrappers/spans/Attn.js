import React from 'react'
import classes from "../Spans.module.css"

export default function Attn(props) {
  return (
    <span className={classes.attn}>
        {props.children}
    </span>
  )
}
