import {
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Text from '../../base/Text/Text';
import {
  TodoItem,
  addTodoItem,
  getTodoItemLength,
  getTodoItems,
  getTotalItemLength,
} from '../../../helper';
import {ScrollView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useAuth} from '../../Context/AppContext';
import TextInput from '../../base/TextInput/TextInput';
import {FlatList} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Home = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [newTodoItem, setNewTodoItem] = React.useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [totalItemLength, setTotalItemList] = useState(0);
  const [page, setPage] = useState(1);
  const {isDarkMode} = useAuth();
  const {height} = useWindowDimensions();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    getTodoItemLength().then(totalLength => setTotalItemList(totalLength));
    getTodoItems(page, 10).then(items => setTodoItems(items as never));
  }, [page]);

  console.log('====================================');
  console.log(totalItemLength, ';item');
  console.log('====================================');
  const renderItem = ({item}: any) => {
    return (
      <View key={item.id} style={[styles.todoItem]}>
        <Text
          isDarkMode={isDarkMode}
          preset="medium"
          style={styles.sectionDescription}>
          {item.title}
        </Text>
      </View>
    );
  };

  const emptyListFooter = () => {
    return (
      <View>
        <Text isDarkMode={isDarkMode} preset="medium">
          Add To items
        </Text>
      </View>
    );
  };

  const renderLoader = () => {
    return isLoadingMore ? (
      <View style={{paddingVertical: 20, flex: 1}}>
        <ActivityIndicator size="large" color="red" />
      </View>
    ) : (
      <View style={{height: '120%', flex: 1}} />
    );
  };
  const loadMoreItems = () => {
    if (!isLoadingMore && todoItems.length < totalItemLength) {
      // Only load if not already loading and not reached the end
      setIsLoadingMore(true); // Set loading state to true

      const nextPage = page + 1;
      console.log('====================================');
      // console.log(nextPage);
      console.log('====================================');
      getTodoItems(nextPage, 10).then(newItems => {
        setTodoItems([...todoItems, ...newItems]); // Add new items to existing list
      });

      // setTodoItems([...todoItems, ...newItems]); // Add new items to existing list
      // setPage(prev => prev + 1); // Update page number
      setIsLoadingMore(false); // Set loading state to false after fetching
    } else {
      console.log('All item Loaded');
    }
  };

  return (
    <View
    // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={backgroundStyle}>
        <View style={styles.sectionContainer}>
          <Text preset="medium" style={styles.sectionTitle}>
            TODO
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <TextInput
            style={styles.sectionDescription}
            placeholder="Add your todo item"
            onChange={e => setNewTodoItem(e.nativeEvent.text)}
            isDarkMode={isDarkMode}
          />
          <Button
            title="Add"
            onPress={() => {
              addTodoItem(newTodoItem).then(() => {
                // getTodoItems(0, 10).then(items => {
                setTodoItems(items);
                // });
              });
            }}
          />
        </View>

        <View style={[styles.sectionContainer]}>
          <FlatList
            data={todoItems}
            renderItem={renderItem}
            ListEmptyComponent={emptyListFooter}
            keyExtractor={(_, index) => index.toString()}
            extraData={todoItems}
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItems}
            onEndReachedThreshold={0.6}
            // contentContainerStyle={{flex: 1}}
            // style={{backgroundColor: 'green'}}
            // style={{height: height}}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    // paddingHorizontal: 24,
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
    // flex: 1,
  },
});
