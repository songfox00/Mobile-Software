import React, {createContext, useContext} from "react";
import type {FC} from "react";

export type ToggleContextType = {
    toggle: ()=>void,
    check: boolean,
    boolCheck: ()=>void
};
const defaultContext = {
    toggle: ()=>{},
    check: true,
    boolCheck: ()=>{}
};
const ToggleContext = createContext<ToggleContextType>(defaultContext);
type ToggleContextProperties = {
    toggle: ()=>void,
    check: boolean,
    boolCheck: ()=>void
};

export const ToggleThemeProvider: FC<ToggleContextProperties> =
({children, toggle, check, boolCheck}) => {
    const value = {toggle, check, boolCheck};
    return <ToggleContext.Provider value = {value}>{children}</ToggleContext.Provider>;
}

export const useToggleThemeContext = () => {
    const {toggle, check, boolCheck} = useContext(ToggleContext);
    return {toggle, check, boolCheck};
}