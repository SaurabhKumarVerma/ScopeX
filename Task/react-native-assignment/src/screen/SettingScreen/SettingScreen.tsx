import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Setting from '../../component/Setting/Setting';

const SettingScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Setting />
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
