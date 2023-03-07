import React from "react";
import { useButton, useButtonUpdate } from "./ToggleDisplayContext";
import classes from "./ToggleDisplay.module.css";

export default function ToggleShowHideCodes(props) {
  const isOn = useButton();
  const toggleOnOff = useButtonUpdate();
  return (
    <div>
      <button onClick={toggleOnOff} className={classes.toggleButton}>
        {isOn ? "Hide codes" : "Show codes"}
      </button>
      {isOn && (
        <>
          <div className={classes.displayBox}>{props.children}</div>
          <button onClick={toggleOnOff} className={classes.toggleButton}>
            {isOn ? "Hide codes" : "Show codes"}
          </button>
        </>
      )}
    </div>
  );
}
