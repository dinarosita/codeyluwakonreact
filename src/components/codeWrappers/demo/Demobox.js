import React from 'react'
import classes from "../Demo.module.css"

export default function Demobox(props) {
  return (
    <div className={classes.demobox}>
      {props.children}
    </div>
  )
}
