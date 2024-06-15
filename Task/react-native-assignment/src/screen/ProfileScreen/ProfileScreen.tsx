import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Profile from '../../component/Profile/Profile';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Profile />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
