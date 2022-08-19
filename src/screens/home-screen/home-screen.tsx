import { View, Text } from 'react-native'

import HomeScreenStyle from './home-screen.style'
import CircularButton from '../../components/circular-button'
import { Screens } from '../../commons/enums/screens'

export const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={ HomeScreenStyle.container }>
      <Text>Testando Tela</Text>

      <View style={ HomeScreenStyle.taskSection }>
        <CircularButton 
          text='Clique para adicionar uma tarefa!'
          onPressCallback={ 
            () => navigation.navigate(Screens.Task)
          }
        />           
      </View>
    </View>
  )
}

