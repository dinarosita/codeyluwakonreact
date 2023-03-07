import React, { useContext, useState } from "react";

const ButtonContext = React.createContext();
const ButtonUpdateContext = React.createContext();

export function useButton() {
  return useContext(ButtonContext);
}

export function useButtonUpdate() {
  return useContext(ButtonUpdateContext);
}

export function ToggleDisplayProvider({ children }) {
  const [isOn, setIsOn] = useState(false);
  function toggleOnOff() {
    setIsOn((prev) => !prev);
  }
  return (<ButtonContext.Provider value={isOn}>
      <ButtonUpdateContext.Provider value={toggleOnOff}>
        {children}
      </ButtonUpdateContext.Provider>
    </ButtonContext.Provider>
  );
}
