import React, {createContext, useContext} from "react";
import type {FC} from "react";

export type FooContextType = {
    fSize:number,
    bgcolor: string
};
const defaultContext = {
    fSize:20,
    bgcolor: "yellow"
};
const FooContext = createContext<FooContextType>(defaultContext);
type FooContextProperties = {
    fSize:number,
    bgcolor: string
};

export const FooProvider: FC<FooContextProperties> = ({fSize, bgcolor, children}) => {
  const value = {fSize, bgcolor};
  return (
    <FooContext.Provider value = {value}>
    {children}
    </FooContext.Provider>
  );
}

export const useFooContext = () => {
  return useContext(FooContext);
}