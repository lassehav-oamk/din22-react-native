import { StyleSheet, Text, View, Image} from 'react-native';
import Lesson2 from './lessons/lesson2/lesson2';
import Lesson3 from './lessons/lesson3/lesson3';


export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        resizeMode="contain"
        source={require('./image/testimage.png')}
        style={{ width: 400, height: 400, backgroundColor: 'red'}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    paddingTop: 40,
  },
 
});
