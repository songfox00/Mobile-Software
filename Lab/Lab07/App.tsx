import React, {useState, useCallback} from 'react';
import {SafeAreaView} from 'react-native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme, DarkTheme } from 'react-native-paper';
import { ToggleProvider } from './ToggleThemeContext';
import Navigator from './Navigator';


const App = () => {
  const scheme=useColorScheme();
  const [theme, setTheme] = useState(scheme =="dark"? DarkTheme: DefaultTheme);
  const toggleTheme=useCallback(()=>{
    return setTheme((theme)=>{
      return theme.dark? DefaultTheme:DarkTheme;
    });
  }, []);

  const [fSize, setsize]=useState(20);
  const plusSize=useCallback(()=>{
    return setsize((fsize)=>{
        return fsize+=1;
    })
  },[]);
  const minusSize=useCallback(()=>{
      return setsize((fsize)=>{
          return fsize-=1;
      })
  },[]);

  return (
    <AppearanceProvider>
      <ToggleProvider toggle={toggleTheme} fsize={fSize} upfSize={plusSize} downfSize={minusSize}>
      <PaperProvider theme={theme}>
          <SafeAreaView style={{flex: 1}}>
            <Navigator/>
          </SafeAreaView>
      </PaperProvider>
      </ToggleProvider>
    </AppearanceProvider>);
};
export default App;