import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../../screens/home-screen'
import TaskScreen from '../../screens/task-screen'
import { Screens } from '../../commons/enums/screens'

const Stack = createNativeStackNavigator()

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ Screens.Home }
          component={ HomeScreen }
        />
        <Stack.Screen
          name={ Screens.Task }
          component={ TaskScreen }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer

