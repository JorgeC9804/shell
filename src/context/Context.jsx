import React, { createContext } from "react";

const Context = createContext();

const array = [
  { name: "Jorge", lastName: "Castro" },
  { name: "Dulce", lastName: "Romero" },
  { name: "Namor", lastName: "Tenoch" },
];

const options = {
  array,
};

const ContextProvider = ({ children }) => {
  return <Context.Provider value={options}>{children}</Context.Provider>;
};

export { ContextProvider };
export default Context;
