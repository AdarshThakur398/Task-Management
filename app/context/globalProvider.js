"use client"
import React,{createContext,useState,useContext} from "react";
import themes from "./themes";

export const GlobalContext=createContext();
export const GlobalUpdateContext=createContext();

export const GlobalProvider = ({children}) => {
    const [selectedTheme,setSelectedTheme]=useState(0);
    const theme=themes[selectedTheme];

    return (
            <GlobalContext.Provider value={{
                theme,
            }}>
                <GlobalUpdateContext.Provider value={{setSelectedTheme}}>
                    {children}
                </GlobalUpdateContext.Provider>
            </GlobalContext.Provider>
    )
}
export const useGlobalState = () => {
    const context = useContext(GlobalContext);
    if (!context) {
      throw new Error("useGlobalState must be used within a GlobalProvider");
    }
    return context;
  };
  export const useGlobalUpdate = () => {
    const context = useContext(GlobalUpdateContext);
    if (!context) {
      throw new Error("useGlobalState must be used within a GlobalProvider");
    }
    return context;
  };
    