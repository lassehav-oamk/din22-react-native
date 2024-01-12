import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Dimensions1() {
  return (
    <View style={styles.container}>
      <Text style={{height: '10%'}}>Flex demo</Text>
      <View style={{height: '10%', backgroundColor: 'green'}}></View>
      <View style={{height: '10%', backgroundColor: 'red'}}></View>
      <View style={{height: '10%', backgroundColor: 'blue'}}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '50%', 
    width: 200,
    paddingTop: 20, 
    flexDirection: 'column', 
    borderColor: 'black', 
    borderWidth: 1,
    justifyContent: 'flex-start'
  }
})