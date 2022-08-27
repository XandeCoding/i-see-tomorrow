import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeBaseProvider } from 'native-NativeBaseProvider'

import HomeScreen from '../home-screen'
import TaskScreen from '../task-screen'
import { Screen } from '../../commons/enums/screen'

const Stack = createNativeStackNavigator()

export const AppContainer = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={ Screen.HOME }
            component={ HomeScreen } />
          <Stack.Screen
            name={ Screen.TASK }
            component={ TaskScreen }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

export default AppContainer

