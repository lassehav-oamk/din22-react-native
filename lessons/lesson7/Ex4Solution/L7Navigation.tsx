import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
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


/*
  THIS FILE IS AN EXAMPLE SOLUTION FOR EXERCISE 4

  Add a button to SecondView 
  When clicked, the button should increment click counts 
  The click counts should be displayed in all First, Second, Third and FourthViews 

*/

const Stack = createNativeStackNavigator();

export default function L7Navigation() {

  const [someStateVariable, setSomeStateVariable] = React.useState('foo');
  const [clickCount, setClickCount] = useState(0);

  return (
    <View style={ styles.container }>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FirstView">
            {props => <FirstView {...props} clickCount={clickCount} />}
          </Stack.Screen>
          <Stack.Screen name="SecondView">
            {props => <SecondView 
                {...props} 
                clickCount={clickCount} 
                incrementClickCount={() => setClickCount(clickCount + 1)} 
                someProp={someStateVariable} 
              />}
          </Stack.Screen>
          
          <Stack.Screen name="ThirdView">
            {props => <ThirdView {...props} clickCount={clickCount} />}
          </Stack.Screen>
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