import React, { useState } from "react";
  
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
    const [loggedIn,setLoggedIn] = useState(null);
  
    return (
        <Context.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
        </Context.Provider>
    );
};