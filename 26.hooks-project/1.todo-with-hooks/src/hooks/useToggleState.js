import { useState } from "react";

function useToggle(initialVal = false) {
  // call useState, "reserve a piece of state"
  // state and setState are just generic name here
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
    // return piece of state and function to toggle it
  };
  return [state, toggle];
}

export default useToggle;
