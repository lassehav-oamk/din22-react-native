import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './lessons/lesson2/HelloWorld';
import Greeter from './lessons/lesson2/Greeter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={ {...styles.textDemo, ...styles.someOtherStyle} }>Hello React Native World</Text>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <Greeter name="Bob" />
      <Greeter name="Alice" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDemo: {
    fontSize: 80,
    color: 'red',    
  },
  someOtherStyle: {
    backgroundColor: 'blue'
  }
});
