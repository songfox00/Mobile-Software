import React, {useState, useCallback} from 'react';
import {SafeAreaView} from 'react-native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme, DarkTheme } from 'react-native-paper';
import Navigator from './Navigator';
import { ToggleProvider } from './ToggleThemeContext';

const App = () => {
  const scheme=useColorScheme();
  const [theme, setTheme] = useState(scheme =="dark"? DarkTheme: DefaultTheme);
  const toggleTheme=useCallback(()=>{
    return setTheme((theme)=>{
      return theme.dark? DefaultTheme:DarkTheme;
    });
  }, []);
  return (
    <AppearanceProvider>
      <PaperProvider theme={theme}>
        <ToggleProvider toggle={toggleTheme}>
          <SafeAreaView style={{flex: 1}}>
            <Navigator/>
          </SafeAreaView>
        </ToggleProvider>
      </PaperProvider>
    </AppearanceProvider>);
};
export default App;