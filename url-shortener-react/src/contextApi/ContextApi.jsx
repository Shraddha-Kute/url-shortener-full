import React, { createContext, useContext, useState } from "react";

// 1. create context
const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // 2. state you want to share
  const [token, setToken] = useState(null); // or '' if you want

  return (
    <StoreContext.Provider value={{ token, setToken }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStoreContext = () => useContext(StoreContext);
