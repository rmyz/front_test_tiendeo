import React, { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  items: [],
  orderBy: "",
  isDialogOpened: false,
  formValues: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      return { ...state, items: [...action.payload] };
    case "ORDER_BY":
      return { ...state, orderBy: action.payload };
    case "TOGGLE_DIALOG":
      return { ...state, isDialogOpened: action.payload };
    case "SET_FORM_VALUES":
      return { ...state, formValues: { ...action.payload } };
    default:
      return state;
  }
};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
