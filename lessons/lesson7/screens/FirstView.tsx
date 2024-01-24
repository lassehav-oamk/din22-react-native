import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

export default function FirstView({ navigation }) {

  const dataToSendToSecondView = {
    foo: 'bar',
    baz: 123,
  }

  console.log('FirstView: navigation', navigation)
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white'}}>FirstView</Text>
      <TouchableHighlight onPress={() => navigation.navigate('SecondView', dataToSendToSecondView)}>
        <Text>Go to SecondView</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F0',
  }
})