import React, {createContext, useContext, useEffect, useState} from 'react';
import {IDarkModeContextValue} from '../component/types/app.context';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const StateContextProvider = createContext<IDarkModeContextValue>(null);

export const useAuth = () => useContext(StateContextProvider);

const AppContext = ({children}: Props) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [useDeviceSettings, setUseDeviceSettings] = useState(true);
  const [isToken, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken('Hello');
  }, []);

  const handleDarkMode = (status: boolean) => {
    setIsDarkMode(status);
  };

  const handleUseDeviceSettings = (status: boolean) => {
    setUseDeviceSettings(status);
  };

  const setUserToken = (token: string) => {
    setToken(token);
  };

  const removeToken = () => {
    setToken(null);
  };

  return (
    <StateContextProvider.Provider
      value={{
        isDarkMode,
        useDeviceSettings,
        isToken,
        handleDarkMode,
        handleUseDeviceSettings,
        setUserToken,
        removeToken,
      }}>
      {children}
    </StateContextProvider.Provider>
  );
};

export default AppContext;
