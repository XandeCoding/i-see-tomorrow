import { useState } from 'react'
import { View, Text } from 'react-native'
import CircularButton from '../../components/circular-button'
import TextInputCustom from '../../components/text-input-custom'
import addDailyTask from '../../storage/addDailyTask'
import { ITask } from '../../entities/interfaces/ITask'

export const TaskScreen = () => {
  const [taskName, setTaskName] = useState('')

  const handleNewTask = async () => {
    const newTask: ITask = {
      name: taskName,
      check: false
    }

    return addDailyTask(newTask)
  }

  return (
    <View>
      <Text>Criando uma nova Tarefa 😁</Text>
      <TextInputCustom
        onChangeText={ (taskName) => setTaskName(taskName) }
      />
      <CircularButton
        text={ 'Adicionar task' }
        onPressCallback={ handleNewTask }
      />
    </View>
  )
}

