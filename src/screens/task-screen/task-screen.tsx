import { useState } from 'react'
import { View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

import { Screen } from '../../commons/enums/screen'
import addDailyTask from '../../storage/addDailyTask'
import { TaskScreenStyle } from './task-screen.style'

export const TaskScreen = ({ navigation }: any) => {
  const [taskName, setTaskName] = useState('')
  const [saveLoading, setSaveLoading] = useState(false)

  const handleNewTask = async () => {
    setSaveLoading(true)
    await addDailyTask(taskName)
    setSaveLoading(false)
    navigation.navigate(Screen.HOME)
  }

  return (
    <View style={ TaskScreenStyle.container }>
      <TextInput
        label='Nome da Tarefa'
        placeholder='Digite o nome da tarefa desejada!'
        onChangeText={ (taskName) => setTaskName(taskName) }
      />
      <Button
        mode='contained'
        style= { TaskScreenStyle.button }
        loading={ saveLoading }
        onPress={ handleNewTask }
      >
        Clique para adicionar uma tarefa!
      </Button>
    </View>
  )
}

