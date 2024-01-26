import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import ButtonStyles from './ButtonStyles'
import ScreenStyle from './ScreenStyle'

export default function SecondView({ incrementClickCount, clickCount, someProp, route, navigation }) {
  
  const { foo, baz } = route.params;

  return (
    <View style={ScreenStyle.screen}>
      <Text style={{ color: 'yellow', fontSize: 24, justifyContent: 'center'}}>
        This is the SecondView screen
      </Text>

      <Text>Received value of foo from firstView: {foo}</Text>
      <Text>Received value of baz from firstView: {baz}</Text>
      <Text>Received value of someProp from root component: {someProp}</Text>

      <TouchableHighlight 
        style={ButtonStyles.button}
        onPress={() => navigation.navigate('ThirdView')}>
        <Text style={ButtonStyles.buttonText}>Go to ThirdView</Text>
      </TouchableHighlight>


      <Text>The button below is for exercise 4 solution</Text>
      <TouchableHighlight 
        style={ButtonStyles.button}
        onPress={() => incrementClickCount()}>
        <Text>Click for click counter</Text>
      </TouchableHighlight>

      <Text>Click count: {clickCount}</Text>

    </View>
  )
}

const styles = StyleSheet.create({})