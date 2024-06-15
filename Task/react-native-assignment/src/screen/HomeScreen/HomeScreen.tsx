import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from '../../component/Home/Home';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Home />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
