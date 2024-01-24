import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstView from './screens/FirstView'
import SecondView from './screens/SecondView'
import ThirdView from './screens/ThirdView'

/* This component demonstrates how to use React Navigation 

  These commands were used to install deps:
  npm install @react-navigation/native @react-navigation/native-stack
  npx expo install react-native-screens react-native-safe-area-context

  Stack navigation is demonstrated with three different views (screens) in a sequential manner. 
  The first view has a button that navigates to the second view.
  The second view has a button that navigates to the third view.
  The third view has a button that navigates back to the first view.

  The navigation container is the parent of the stack navigator.
  The stack navigator is the parent of the three views.
  The three views are siblings of each other.

*/

const Stack = createNativeStackNavigator();

export default function L7Navigation() {

  const [someStateVariable, setSomeStateVariable] = React.useState('foo');

  return (
    <View style={ styles.container }>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FirstView" component={FirstView} />
          <Stack.Screen name="SecondView">
            {props => <SecondView {...props} someProp={someStateVariable} />}
          </Stack.Screen>
          
          <Stack.Screen name="ThirdView" component={ThirdView} />
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