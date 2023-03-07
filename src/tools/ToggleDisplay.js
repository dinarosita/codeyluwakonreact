import React, { useState } from "react";
import classes from "./ToggleDisplay.module.css";

export const DisplayContext = React.createContext();

export default function ToggleDisplay(props) {
  const [isOn, setIsOn] = useState(false);
  function toggleDisplay() {
    setIsOn((prevIsOn) => !prevIsOn);
  }

  const buttonText = isOn ? "Hide codes" : "Show codes";
  return (
    <DisplayContext.Provider value={isOn}>
      <button onClick={toggleDisplay} className={classes.toggleButton}>
        {buttonText}
      </button>
      {isOn && (
        <>
          <div className={classes.displayBox}>{props.children}</div>
          <button onClick={toggleDisplay} className={classes.toggleButton}>
            {buttonText}
          </button>
        </>
      )}
    </DisplayContext.Provider>
  );
}
