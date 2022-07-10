import { View, Text } from 'react-native'

import HomeScreenStyle from './home-screen.style'
import CircularButton from '../../components/circular-button'

export const HomeScreen = () => {
  return (
    <View style={ HomeScreenStyle.container }>
      <Text>Testando Tela</Text>
      <View style={ HomeScreenStyle.taskSection }>
        <CircularButton 
          text='Clique para adicionar uma tarefa!'
        />           
      </View>
    </View>
  )
}

