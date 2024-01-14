import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Images() {
  return (
    <View>
      <Image 
        resizeMode="contain"
        source={require('../../image/testimage.png')}
        style={{ width: 400, height: 400, backgroundColor: 'red'}}
        />
    </View>
  )
}

const styles = StyleSheet.create({})