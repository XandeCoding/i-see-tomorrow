import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider as PaperProvider } from 'react-native-paper'

import HomeScreen from '../homeScreen'
import TaskScreen from '../taskScreen'
import { Screen } from '../../commons/enums/screen'

const Stack = createNativeStackNavigator()

export const AppContainer = () => {
  return (
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
  )
}

export default AppContainer

