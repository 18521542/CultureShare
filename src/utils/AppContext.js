import React, { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [login, setLogin] = useState(true);
  return <AppContext.Provider value={{ login, setLogin }}>{children}</AppContext.Provider>;
}

export default AppContext;
