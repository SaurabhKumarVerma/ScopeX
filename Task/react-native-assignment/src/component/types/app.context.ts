export interface IDarkModeContextValue {
  isDarkMode: boolean;
  useDeviceSettings: boolean;
  isToken: string | null;
  removeToken: () => void;
  handleDarkMode: (value: boolean) => void;
  handleUseDeviceSettings: (value: boolean) => void;
  setUserToken: (token: string) => void;
}
