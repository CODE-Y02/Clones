import { createContext, useContext, useReducer } from "react";

// we can name StateProvider as any thing but it shoud be same as file name same with StateContext
export const StateContext = createContext();

// this is higher order function

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// in above code <StateContext.Provider is higher order component . childern is App in this project ref. index js

// this is custom hook allow us to pull info from data layer/stateprovider global store
export const useStateValue = () => useContext(StateContext);
