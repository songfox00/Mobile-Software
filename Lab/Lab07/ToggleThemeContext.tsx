import React, {createContext, useContext} from "react";
import type {FC} from "react";

export type ToggleContextType = {
    toggle: ()=>void,
    fsize: number,
    downfSize: ()=>void,
    upfSize: ()=>void
};

const defaultContext = {
    toggle: ()=>{},
    fsize: 20,
    downfSize: ()=>{},
    upfSize: ()=>{}
};

const ToggleContext = createContext<ToggleContextType>(defaultContext);
type ToggleContextProperties = {
    toggle: ()=>void,
    fsize: number,
    downfSize: ()=>void,
    upfSize: ()=>void
};

export const ToggleProvider:FC<ToggleContextProperties> = ({children, toggle, fsize, downfSize, upfSize}) =>
{
    const value = {toggle, fsize, downfSize, upfSize};
    return (
        <ToggleContext.Provider value = {value}>
            {children}
        </ToggleContext.Provider>
    );
}

export const useToggleContext = () => {
    return useContext(ToggleContext);
}