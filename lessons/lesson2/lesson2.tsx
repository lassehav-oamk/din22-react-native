import { View, Text } from 'react-native'
import React from 'react'
import HelloWorld from './HelloWorld'
import Greeter from './Greeter'

export default function Lesson2() {
  return (
    <View>
      <Text>Hello React Native World</Text>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <HelloWorld />
      <Greeter name="Bob" />
      <Greeter name="Alice" />

      <View style={{ width: 80, height: 80, backgroundColor: 'red'}}></View>   
      <View style={{ width: 80, height: 80, backgroundColor: 'green'}}></View>   
      <View style={{ width: 80, height: 80, backgroundColor: 'blue'}}></View>
      <View style={{ width: 80, height: 80, backgroundColor: 'yellow'}}></View>
    </View>
  )
}