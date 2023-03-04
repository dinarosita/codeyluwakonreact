import React from 'react'
import classes from "../Pres.module.css"

export default function Formula(props) {
  return (
    <div className={classes.box}>
      <p className={classes.title}>{props.title}</p>
      <pre className={classes.formula}>{props.children}</pre>
    </div>
  )
}
