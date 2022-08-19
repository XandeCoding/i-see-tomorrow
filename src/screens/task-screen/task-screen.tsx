import { useState } from 'react'
import { View, Text } from 'react-native'
import TextInputCustom from '../../components/text-input-custom'

export const TaskScreen = () => {

  return (
    <View>
      <Text>Criando uma nova Tarefa 😁</Text>
      <TextInputCustom
        onChangeText={ () => {} }
      />
    </View>
  )
}

