import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function lesson3() {
  return (
    <View>
      <View style={ styles.firstRow }>
        <View style={{ ...styles.item, backgroundColor: '#22F', flex: 1}}></View>
        <View style={ {...styles.item, backgroundColor: '#22A', flex: 2}}></View>
      </View>
      <View style={styles.secondRow}></View>
      <View style={styles.thirdRow}>
        <View style={{...styles.item, backgroundColor: '#090', flex: 1}}></View>
        <View style={{...styles.item, backgroundColor: '#0B0', flex: 1}}></View>
        <View style={{...styles.item, backgroundColor: '#090', flex: 1}}></View>
      </View>
      <View style={styles.fourthRow}>
        <View style={{flex: 1, backgroundColor: '#DDF', height: 100, width: '100%'}}></View>
        <View style={{flex: 1, backgroundColor: '#DDC', height: 100, width: 100}}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    paddingTop: 40,
  },
  firstRow: {
    flex: 1,
    flexDirection: 'row',
  },
  secondRow: {
    flex: 2,
    backgroundColor: '#0D0',
    width: '100%'
  },
  thirdRow: {
    flexDirection: 'row',
    flex: 1
  },
  fourthRow: {
    flex: 1, 
    flexDirection: 'column'
  },
  item: {
    height: '100%'
  }

})