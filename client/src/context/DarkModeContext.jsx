import React, { useEffect, useState, createContext, useReducer } from "react";

export const DarkModeContext = createContext("light");

export const DarkModeContextProvider = ({ children }) => {
  const initialState = "light";

  const themeReducer = (state) => {
    if (state === "light") {
      return "dark";
    } else {
      return "light";
    }
  };
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return <DarkModeContext.Provider value={{ state, dispatch }}>{children}</DarkModeContext.Provider>;
};
