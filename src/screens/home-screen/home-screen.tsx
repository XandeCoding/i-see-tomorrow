import { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

import { HomeScreenStyle } from './home-screen.style'
import { Screen } from '../../commons/enums/screen'
import { ITask } from '../../entities/interfaces/ITask'
import TaskList from '../../components/task-list'
import getDailyTasks from '../../storage/getDailyTasks'

export const HomeScreen = ({ navigation }: any) => {
  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect(() => {
    getDailyTasks().then((dailyTasks) => {
      const items = dailyTasks
      setTasks(items)
    })
  }, [])

  return (
    <View style={ HomeScreenStyle.container }>
      <View style={ HomeScreenStyle.taskSection }>
        <TaskList
          tasks={ tasks }
        />
      </View>
      <Button
        mode='contained'
        onPress={
          () => navigation.navigate(Screen.TASK)
        }
      >
        Clique para adicionar uma tarefa!
      </Button>
    </View>
  )
}

