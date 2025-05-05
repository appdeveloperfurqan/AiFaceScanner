import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import * as ui from '@/screens'

const Stack = createStackNavigator()

const AppNavigator = () => {

    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
           
        </Stack.Navigator>
    )
}

export default AppNavigator

