import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import HomeScreenStyle from './home-screen.style'
import CircularButton from '../../components/circular-button'
import { Screen } from '../../commons/enums/screen'
import TaskList from '../../components/task-list'
import getDailyTasks from '../../storage/getDailyTasks'

export const HomeScreen = ({ navigation }: any) => {
  const [tasks, setTasks] = useState<string[]>([])

  useEffect(() => {
    getDailyTasks().then((dailyTasks) => {
      const items = dailyTasks
        .map(([_key, value]) => value)
        .filter((task) => !!task)
      setTasks(items as string[])
      console.log("tasks", tasks)
    })
  }, [])

  return (
    <View style={ HomeScreenStyle.container }>
      <Text>Testando Tela</Text>

      <View style={ HomeScreenStyle.taskSection }>
        <TaskList
          items={ tasks }
        />
        <CircularButton
          text='Clique para adicionar uma tarefa!'
          onPressCallback={
            () => navigation.navigate(Screen.TASK)
          }
        />
      </View>
    </View>
  )
}

