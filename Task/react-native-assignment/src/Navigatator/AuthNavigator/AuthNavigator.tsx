import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenName} from '../ScreenName/ScreenName';
import OnboardingScreen from '../../screen/OnboardingScreen/OnboardingScreen';
import LoginScreen from '../../screen/LoginScreen/LoginScreen';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenName.ONBOARDING} component={OnboardingScreen} />
      <Stack.Screen name={ScreenName.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
