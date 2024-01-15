import { StyleSheet, Text, View, Image} from 'react-native';
import Lesson2 from './lessons/lesson2/Lesson2';
import Lesson3 from './lessons/lesson3/Lesson3';
import Images from './lessons/lesson3/Images';
import React from 'react';
import L4ButtonDemo from './lessons/lesson4/L4ButtonDemo';
import L4TextInputDemo from './lessons/lesson4/L4TextInputDemo';
import L5FlatList from './lessons/lesson5/L5FlatList';


export default function App() {
  return (
    <View style={styles.container}>
      { /* <Images /> */ }
      { /* <Lesson2 /> */ }
      { /* <Lesson3 />  */ }
    
      { /* <L4ButtonDemo /> */ }
      {/* <L4TextInputDemo /> */ }
      <L5FlatList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#D00',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    paddingTop: 40,
  },
});
