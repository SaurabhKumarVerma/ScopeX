import {
  ColorSchemeName,
  StyleSheet,
  Switch,
  View,
  useColorScheme,
} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import Text from '../../base/Text/Text';
import {useAuth} from '../../Context/AppContext';
import {colors} from '../../theme/color/color';

const Setting = () => {
  const {
    isDarkMode,
    useDeviceSettings,
    handleDarkMode,
    handleUseDeviceSettings,
  } = useAuth();

  const scheme = useColorScheme();

  const currentActivatedTheme: ColorSchemeName = isDarkMode ? 'dark' : 'light';

  const toggleDarkMode = useCallback(() => {
    handleDarkMode(!isDarkMode);
  }, [handleDarkMode, isDarkMode]);

  useEffect(() => {
    if (currentActivatedTheme !== scheme) {
      handleUseDeviceSettings(false);
    }
  }, [
    currentActivatedTheme,
    handleUseDeviceSettings,
    isDarkMode,
    scheme,
    useDeviceSettings,
  ]);

  return (
    <View>
      <View
        style={[
          styles.card,
          {backgroundColor: isDarkMode ? colors.black : colors.white},
        ]}>
        <View style={[styles.hr]} />

        <View style={styles.option}>
          <Text isDarkMode={isDarkMode}>Dark Mode</Text>
          <Switch
            trackColor={{
              true: '#02b875',
              false: 'gray',
            }}
            value={isDarkMode}
            onChange={toggleDarkMode}
            thumbColor={'white'}
          />
        </View>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
    opacity: 0.1,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  card: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 8,
  },
});
