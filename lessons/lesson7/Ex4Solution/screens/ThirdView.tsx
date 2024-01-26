import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import ButtonStyles from './ButtonStyles'
import ScreenStyle from './ScreenStyle'



export default function ThirdView({ clickCount, navigation }) {
  return (
    <View style={ ScreenStyle.screen }>
      <Text style={{ color: 'blue', fontSize: 24, justifyContent: 'center'}}>ThirdView</Text>
      <TouchableHighlight 
        style={ButtonStyles.button}
        onPress={() => navigation.navigate('FirstView')}>
        <Text style={ButtonStyles.buttonText}>Go to FirstView</Text>
      </TouchableHighlight>

      <Text>The exercise 4 click count is: { clickCount }</Text>
    </View>
  )
}

const styles = StyleSheet.create({})