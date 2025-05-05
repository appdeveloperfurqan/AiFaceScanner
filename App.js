import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppWrapper from '@/core/AppWrapper'
import { screenNames } from '@/navigation/screenNames'
import * as ui from '@/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AppNavigator from '@/navigation/AppNavigator'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <AppWrapper>
      <NavigationContainer>
       <AppNavigator />
      </NavigationContainer>
    </AppWrapper>
  )
}

export default App
