import React from 'react'
import classes from "../Demo.module.css"

export default function Democard(props) {
  return (
    <div className={classes.democard}>
      {props.children}
    </div>
  )
}
