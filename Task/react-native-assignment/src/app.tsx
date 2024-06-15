import {Appearance, StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {useEffect} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AuthNavigator from './Navigatator/AuthNavigator/AuthNavigator';
import AppNavigator from './Navigatator/AppNavigator/AppNavigator';
import {useAuth} from './Context/AppContext';

const Main = () => {
  const {
    isDarkMode,
    useDeviceSettings,
    handleDarkMode,
    handleUseDeviceSettings,
  } = useAuth();

  const scheme = useColorScheme();

  useEffect(() => {

    let subscription: any;

    // if (useDeviceSettings) {
    subscription = Appearance.addChangeListener(scheme => {
      // Is dark mode will be true when scheme.colorScheme is equal to 'dark'
      console.log('====================================');
      console.log(scheme.colorScheme, 'sc');
      console.log('====================================');
      handleDarkMode(scheme.colorScheme === 'dark');
    });
    // }
    // cleanup
    return () => {
      if (subscription) {
        subscription.remove();
        subscription = null;
      }
    };
  }, [
    scheme,
    isDarkMode,
    useDeviceSettings,
    handleDarkMode,
    handleUseDeviceSettings,
  ]);

  const CustomDarkTheme: Theme = {
    ...DarkTheme,
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary: 'white',
      background: '#202120',
      card: '#121212',
    },
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer theme={isDarkMode ? CustomDarkTheme : DefaultTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Main;

const styles = StyleSheet.create({});
