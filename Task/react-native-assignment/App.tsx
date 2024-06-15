/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Appearance,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {addTodoItem, getTodoItems} from './helper';
import Text from './src/base/Text/Text';
import Login from './src/component/Login/Login';
import {Onboarding} from './src/component/Onborading/Onboarding';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Theme,
} from '@react-navigation/native';
import AppNavigator from './src/Navigatator/AppNavigator/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AuthNavigator from './src/Navigatator/AuthNavigator/AuthNavigator';
import AppContext from './src/Context/AppContext';
import Main from './src/app';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [useDeviceSettings, setUseDeviceSettings] = useState(false);
  const scheme = useColorScheme();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [todoItems, setTodoItems] = React.useState([]);
  const [newTodoItem, setNewTodoItem] = React.useState('');

  return (
    <AppContext>
      {/* <GestureHandlerRootView style={{flex: 1}}> */}
      {/* <NavigationContainer
          theme={isDarkMode ? CustomDarkTheme : DefaultTheme}> */}
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.sectionContainer}>
          <Text preset="medium" style={styles.sectionTitle}>
            TODO
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          {todoItems.map((item: any) => (
            <View key={item.id} style={styles.todoItem}>
              <Text preset="medium" style={styles.sectionDescription}>
                {item.title}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.sectionContainer}>
          <TextInput
            style={styles.sectionDescription}
            placeholder="Add your todo item"
            onChange={e => setNewTodoItem(e.nativeEvent.text)}
          />
          <Button
            title="Add"
            onPress={() => {
              addTodoItem(newTodoItem).then(() => {
                getTodoItems(0, 10).then(items => {
                  setTodoItems(items as never);
                });
              });
            }}
          />
        </View>
      </ScrollView> */}

      {/* <Login /> */}
      {/* <Onboarding /> */}
      {/* <AppNavigator /> */}
      {/* <AuthNavigator /> */}
      <Main />
      {/* </NavigationContainer> */}
      <StatusBar
        hidden
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* </GestureHandlerRootView> */}
    </AppContext>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  todoItem: {
    fontSize: 18,
    fontWeight: '400',
    borderBottomWidth: 1,
    padding: 8,
    borderBottomColor: 'gray',
  },
});

export default App;
