import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultVal) {
  // make a piece of state based off of value is localstorage (or default)
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch (error) {
      value = defaultVal;
    }
    return value;
  });

  // useeffect to update localstorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export default useLocalStorageState;
