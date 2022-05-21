import { createContext, useReducer } from "react";
import reducer from "./reducer";
import PropTypes from "prop-types";
export const Context = createContext();

// look here
const initialState = {
  userData: null,
  isLoggedIn: false,
};

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any,
};
