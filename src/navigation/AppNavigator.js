import React from 'react'

import * as ui from '@/screens'
import { screenNames } from './screenNames'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {

    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screenNames.ONBOARD_SCREEN} component={ui.OnBoardScreen} />
            <Stack.Screen name={screenNames.TEST_RESULT_SCREEN} component={ui.TestResutScreen} />
        </Stack.Navigator>
    )
}

export default AppNavigator

