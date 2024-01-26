import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from './DetailScreen'
import MasterScreen from './MasterScreen'


const Stack = createNativeStackNavigator();    

export default function L8DataFetching() {
  return (
    <View style={ styles.container }> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MasterScreen" component={MasterScreen} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
})