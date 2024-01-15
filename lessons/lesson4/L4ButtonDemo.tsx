import { StyleSheet, Text, View,TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback, 
  Button, Pressable} from 'react-native'
import React from 'react'

export default function L4ButtonDemo() {

  const handlePress = (touchableType) => {
    console.log(`${touchableType} Pressed`);
  };

  return (
    <View style={ styles.container }>
      <View style={{ alignItems: 'center'}}>
      <Text style={{ fontSize: 40, color: 'white', paddingTop: 40, paddingBottom: 40}}>ButtonDemo</Text>
      </View>

      <Button onPress={handlePress}
        title="Button"
        color="orange"
        accessibilityLabel="Learn more about this button"
      />     

      <Pressable onPress={() => handlePress('Pressable')}
        onPressIn={() => console.log('press activated')}
        onLongPress={() => console.log('press long')}
        onPressOut={() => console.log('press released')}
        >
        <View style={styles.touchable}>
          <Text style={{ fontWeight: '700'}}>Pressable</Text>
          <Text>Core Component wrapper that can detect various stages of press interactions on any of its defined children.</Text>
          <Text>Platform Support: Works well across different platforms.</Text>
        </View>
      </Pressable> 
      
      <TouchableHighlight
        style={styles.touchable}
        underlayColor="lightblue"
        onPress={() => handlePress('TouchableHighlight')}
      >
        <View>
        <Text style={{ fontWeight: "700"}}>TouchableHighlight</Text>
        <Text>Highlights: Provides a customizable background color change when pressed.</Text>
        <Text>Props: Takes an additional underlayColor prop for setting the highlight color.</Text>
        <Text>Platform Support: Works well across different platforms.</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => handlePress('TouchableOpacity')}
      >
        <Text style={{ fontWeight: "700"}}>TouchableOpacity</Text>
        <Text>Highlights: Reduces opacity when pressed and returns to normal when released.</Text>        
        <Text>Platform Support: Works well across different platforms.</Text>
      </TouchableOpacity>

      <TouchableNativeFeedback
        onPress={() => handlePress('TouchableNativeFeedback')}
      >
        <View style={styles.touchable}>
          <Text style={{ fontWeight: '700'}}>TouchableNativeFeedback</Text>
          <Text>an Android-specific component for providing native feedback</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableWithoutFeedback
        onPress={() => handlePress('TouchableWithoutFeedback')}
      >
        <View style={styles.touchable}>
          <Text style={{ fontWeight: '700'}}>TouchableWithoutFeedback</Text>
          <Text>Highlights: No change in appearance when pressed.</Text>
          <Text>Platform Support: Works well across different platforms.</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'green',    
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',    
  },
  touchable: {
    margin: 10,
    padding: 10,        
    justifyContent: 'center',
    backgroundColor: 'lightyellow',
  },
})