import React, { useEffect, useState } from "react";
import Cupid from "./Cupid";
import Lovers from "./Lovers";

export const ValContext = React.createContext();

export default function ValentineApp() {
  const [isValentine, setIsValentine] = useState(false);
  function toggleValentine() {
    setIsValentine((prevVal) => !prevVal);
  }

  const buttonStyle = {
    backgroundColor: isValentine ? "indianred" : "inherit",
    color: isValentine ? "white" : "inherit",
    border: "1px solid indianred",
    margin: ".5rem 0",
    fontWeight: "bold",
    padding: ".3rem",
  };

  const buttonText = isValentine
    ? "It's Valentine's Day!"
    : "It's a normal day.";

  const boxStyle = {
    backgroundColor: isValentine ? "mistyrose" : "inherit",
    color: isValentine ? "indianred" : "inherit",

    padding: ".5rem",
    border: "1px solid pink",
    width: "20rem",
  };
  return (
    <ValContext.Provider value={isValentine}>
      <div style={boxStyle}>
        <button onClick={toggleValentine} style={buttonStyle}>
          {buttonText}
        </button>
        <div>
          <Cupid />
          <br />
          <Lovers />
        </div>
      </div>
    </ValContext.Provider>
  );
}
