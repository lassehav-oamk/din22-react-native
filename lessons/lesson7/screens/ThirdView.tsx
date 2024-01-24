import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import ButtonStyles from './ButtonStyles'
import ScreenStyle from './ScreenStyle'



export default function ThirdView({ navigation }) {
  return (
    <View style={ ScreenStyle.screen }>
      <Text style={{ color: 'blue', fontSize: 24, justifyContent: 'center'}}>ThirdView</Text>
      <TouchableHighlight 
        style={ButtonStyles.button}
        onPress={() => navigation.navigate('FirstView')}>
        <Text style={ButtonStyles.buttonText}>Go to FirstView</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({})