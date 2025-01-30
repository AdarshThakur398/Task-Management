"use client"
import React,{createContext,useState,useContext} from "react";
import themes from "./themes";

export const GlobalContext=createContext();
export const GlobalUpdateContext=createContext();
const [selectedTheme,setSelectedTheme]=useState(0);
const theme=themes[selectedTheme];
export const globalProvider = ({children}) => {
    return (
            <GlobalContext.Provider value={globalState}>
                <GlobalUpdateContext.Provider value={setGlobalState}>
                    {children}
                </GlobalUpdateContext.Provider>
            </GlobalContext.Provider>
    )
}