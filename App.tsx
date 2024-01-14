import { StyleSheet, Text, View, Image} from 'react-native';
import Lesson2 from './lessons/lesson2/Lesson2';
import Lesson3 from './lessons/lesson3/Lesson3';
import Images from './lessons/lesson3/Images';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <Lesson3 />
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
