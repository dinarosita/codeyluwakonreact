import React from 'react'
import classes from "./Formula.module.css"

export default function Formula(props) {
  return (
    <pre className={classes.formula}>{props.children}</pre>
  )
}
