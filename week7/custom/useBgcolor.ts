import {useState, useCallback} from "react";

export const useBgcolor = (initialValue: string = "black", deps: any[] = []):[string, ()=>void]=>{
    const [bgcolor, changeBgcolor] = useState(initialValue);
    const press = useCallback(()=> {
        changeBgcolor((color: string) => {
            return color=="black" ? "white":"black";
        })
    }, []);
    return [bgcolor, press];
}