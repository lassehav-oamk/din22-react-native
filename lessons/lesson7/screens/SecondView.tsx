import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'

export default function SecondView({ someProp, route, navigation }) {

  const { foo, baz } = route.params;

  return (
    <View>
      <Text>SecondView</Text>
      <Text>Received value of foo from firstView: {foo}</Text>
      <Text>Received value of baz from firstView: {baz}</Text>
      <Text>Received value of someProp from root component: {someProp}</Text>

      <TouchableHighlight onPress={() => navigation.navigate('ThirdView')}>
        <Text>Go to ThirdView</Text>
      </TouchableHighlight>

    </View>
  )
}

const styles = StyleSheet.create({})