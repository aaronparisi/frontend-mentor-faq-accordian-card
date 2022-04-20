import React from "react";

const BorderContext = React.createContext({
  showBorders: false,
});

export const BorderContextProvider = BorderContext.Provider;

export default BorderContext;
