import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as mainTheme } from './custom-theme.json';
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo';

// import { AppNavigator } from './navigation.component';
const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export default (props) => {

    const [theme, setTheme] = React.useState('light');
  
    const toggleTheme = () => {
      const nextTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(nextTheme);
    };
    let [fontsLoaded] = useFonts({
        Aero: require('./assets/fonts/Walt_Disney_Script_v4.1.ttf'),
        Roboto: require('./assets/fonts/Roboto-Light.ttf'),
        Mont: require('./assets/fonts/Montserrat-ExtraLight.ttf'),
        Tera: require('./assets/fonts/LexendTera-Regular.ttf')
      })
      if(!fontsLoaded){
        return <AppLoading/>
      }else{
       
  
    return (
      <>
        <IconRegistry icons={EvaIconsPack}/>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ApplicationProvider {...eva} theme={{...eva[theme], ...mainTheme}}>
            {props.children}
          </ApplicationProvider>
        </ThemeContext.Provider>
      </>
    );
      }
  };