import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ChildPressable from './ChildPressable'

const L6ReactState = () => {
  const [parentStateVariable, setParentStateVariable] = useState('')

  const functionToGiveToChildToModifyParentStateVariable = 
    () => {
      setParentStateVariable('Parent state variable has been modified');
    }

  return (
    <View style={ styles.container }>
      <Text>ReactState</Text>
      <ChildPressable functionFromParentToExecute={ functionToGiveToChildToModifyParentStateVariable} />
      <View>
        <Text>Output box - the contet here changes as a result of click to 
          the ChildPressable.
        </Text>
        <Text>{ parentStateVariable }</Text>

      </View>
    </View>
  )
}

export default L6ReactState

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    color: 'white',
  }
})