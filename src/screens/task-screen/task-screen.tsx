import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import CircularButton from '../../components/circular-button'
import TextInputCustom from '../../components/text-input-custom'
import TaskList from '../../components/task-list'
import getDailyTasks from '../../storage/getDailyTasks'
import setDailyTask from '../../storage/setDailyTask'

export const TaskScreen = () => {
  const [taskName, setTaskName] = useState('')

  const handleNewTask = async () => {
    return setDailyTask(taskName)
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

