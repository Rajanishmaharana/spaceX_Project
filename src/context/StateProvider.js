import React, { createContext, useContext, useReducer } from "react";

//preper the data layer
export const StateContext = createContext();

//Wrap our app and provide the data layer
export const StateProvider = ({ reducer, intialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);
