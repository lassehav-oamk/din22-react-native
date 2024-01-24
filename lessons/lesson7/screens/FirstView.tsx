import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import ButtonStyles from './ButtonStyles'
import ScreenStyle from './ScreenStyle'

export default function FirstView({ navigation }) {

  const dataToSendToSecondView = {
    foo: 'bar',
    baz: 123,
  }

  console.log('FirstView: navigation', navigation)
  return (
    <View style={ScreenStyle.screen}>

      <Text style={{ color: 'white', fontSize: 24, justifyContent: 'center'}}>
        This is the FirstView screen
      </Text>

      <TouchableHighlight 
        style={ButtonStyles.button} 
        onPress={() => navigation.navigate('SecondView', dataToSendToSecondView)}>
        <Text style={ButtonStyles.buttonText}>Go to SecondView</Text>
      </TouchableHighlight>
      
    </View>
  )
}

const styles = StyleSheet.create({

})