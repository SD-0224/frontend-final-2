import { useState, useEffect } from "react";

const useStorageState = (key, defaultValue) => {
  // Retrieve the value from localStorage, or use the default value
  const stored = localStorage.getItem(key);
  const [state, setState] = useState(
    stored ? JSON.parse(stored) : defaultValue
  );
  // and update localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
};

export default useStorageState;
