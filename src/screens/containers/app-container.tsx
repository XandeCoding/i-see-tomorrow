import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as ReduxProvider } from 'react-redux'

import { store } from '../../context/store'
import HomeScreen from '../homeScreen'
import TaskScreen from '../taskScreen'
import { Screen } from '../../commons/enums/screen'

const Stack = createNativeStackNavigator()

export const AppContainer = () => {
  return (
    <ReduxProvider store={ store }>
      <PaperProvider>
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
      </PaperProvider>
    </ReduxProvider>
  )
}

export default AppContainer

