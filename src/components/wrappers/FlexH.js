import React from 'react'
import classes from "./FlexH.module.css"

export default function FlexH(props) {
  return (
    <div className={classes.flexH}>
      {props.children}
    </div>
  )
}
