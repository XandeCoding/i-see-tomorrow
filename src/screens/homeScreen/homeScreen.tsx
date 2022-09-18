import { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'

import { HomeScreenStyle } from './homeScreen.style'
import { Screen } from '../../commons/enums/screen'
import { ITask } from '../../entities/interfaces/ITask'
import TaskList from '../../components/taskList'
import getDailyTasks from '../../storage/getDailyTasks'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../context/store'
import { set } from '../../context/slices/taskSlice'

export const HomeScreen = ({ navigation }: any) => {
  const tasks = useSelector((state: RootState) => state.task.value)
  const dispatch = useDispatch()

  useEffect(() => {
    getDailyTasks().then((dailyTasks) => {
      const items = dailyTasks
      dispatch(set(items))
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

