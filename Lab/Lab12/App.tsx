import React,{useState,useCallback} from "react";
import {NavigationContainer, DefaultTheme, DarkTheme} from "@react-navigation/native";
import {useColorScheme} from "react-native";
import MainNavigator from "./MainNavigator";
import { ToggleThemeProvider } from "./ToggleThemeProvider";

const App = ()=>{
  const scheme = useColorScheme();
  const [theme, setTheme]=useState(scheme=="dark"? DarkTheme: DefaultTheme);
  const toggleTheme=useCallback(()=>{
    setTheme(({dark})=>{
      return dark? DefaultTheme: DarkTheme;
    })
  },[]);

  const [check, setCheck]=useState(false);
  const ChangeCheck=useCallback(()=>{
    return setCheck((check)=>{
      return !check;
    });
  },[]);

  return (
    <ToggleThemeProvider toggle={toggleTheme} check={check} boolCheck={ChangeCheck}>
      <NavigationContainer theme={theme}>
        <MainNavigator/>
      </NavigationContainer>
    </ToggleThemeProvider>
  );
}
export default App;