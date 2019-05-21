import { useContext, useEffect } from "react";
import { Store } from "../store";

export default function(key, initialValue, type) {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) return dispatch({ type, payload: JSON.parse(item) });

      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return dispatch({ type, payload: initialValue });
    } catch {
      return dispatch({ type, payload: initialValue });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValue = value => {
    try {
      dispatch({ type, payload: value });
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [state[key], setValue];
}
