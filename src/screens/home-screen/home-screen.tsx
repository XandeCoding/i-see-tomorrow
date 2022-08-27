import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import HomeScreenStyle from './home-screen.style'
import CircularButton from '../../components/circular-button'
import { Screen } from '../../commons/enums/screen'
import TaskList from '../../components/task-list'
import getDailyTasks from '../../storage/getDailyTasks'
import { ITask } from '../../entities/interfaces/ITask'

export const HomeScreen = ({ navigation }: any) => {
  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect(() => {
    getDailyTasks().then((dailyTasks) => {
      const items = dailyTasks
      .map(([_key, value]) => value)
      .filter((task) => !!task)
      .map((task) => JSON.parse(task as string))
      setTasks(items as ITask[])
    })
  }, [])

  return (
    <View style={ HomeScreenStyle.container }>
      <View style={ HomeScreenStyle.taskSection }>
        <TaskList
          tasks={ tasks }
        />
      </View>
      <CircularButton
        text='Clique para adicionar uma tarefa!'
        onPressCallback={
          () => navigation.navigate(Screen.TASK)
        }
      />
    </View>
  )
}

