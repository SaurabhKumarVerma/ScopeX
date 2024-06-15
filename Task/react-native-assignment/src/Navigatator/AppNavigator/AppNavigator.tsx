import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import CustomBottomTabBar from './CustomBottomTabBar';
import {ScreenName} from '../ScreenName/ScreenName';
import HomeScreen from '../../screen/HomeScreen/HomeScreen';
import ProfileScreen from '../../screen/ProfileScreen/ProfileScreen';
import SettingScreen from '../../screen/SettingScreen/SettingScreen';
import {useAuth} from '../../Context/AppContext';
import {colors} from '../../theme/color/color';

/**
 * The BottomNavigation component is a custom bottom navigation bar that renders three tabs:
 * Home, Learn, and Market.
 *
 * This component uses the `createBottomTabNavigator` function from the `@react-navigation/bottom-tabs`
 * package to create the tab navigation bar. The `CustomBottomTabBar` component is used as the
 * `tabBar` prop, which renders a custom tab bar with the appropriate icons.
 *
 * The `BottomNavigator` component also utilizes the `useNavigation` hook from the `@react-navigation/native`
 * package to access the navigation stack and pass the `navigation` object to the `CustomBottomTabBar` component.
 */

const CustomBottomTabs = (props: BottomTabBarProps) => {
  return <CustomBottomTabBar {...props} />;
};

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();
  const {isDarkMode} = useAuth();

  return (
    <Tab.Navigator
      initialRouteName={ScreenName.HOME}
      tabBar={CustomBottomTabs}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={ScreenName.HOME} component={HomeScreen} />
      <Tab.Screen name={ScreenName.PROFILE} component={ProfileScreen} />
      <Tab.Screen name={ScreenName.SETTINGS} component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
