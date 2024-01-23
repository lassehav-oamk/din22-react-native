import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ChildPressable({ functionFromParentToExecute }) {
  return (
    <Pressable onPress={() => {
        console.log('Click on ChildPressable');
        functionFromParentToExecute();        
      }}>
      <View style={styles.buttonBox}>
        <Text style={{ color: 'white'}}>Click here</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonBox: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    
    height: 50,
  },
})