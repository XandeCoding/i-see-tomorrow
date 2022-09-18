import { useState } from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Snackbar } from 'react-native-paper'

import { TaskListStyle } from './taskList.style'
import { ITask } from '../../entities/interfaces/ITask'
import Task from '../task'

type props = {
  tasks: ITask[]
}

export const TaskList = ({ tasks }: props) => {
  const [showSnackBar, setShowSnackBar] = useState(false)

  const renderTask = ({ item }: { item: ITask}) => {
    return <Task
              task={ item }
              setShowSnackBar={ setShowSnackBar }
            />
  }

  return (
    <SafeAreaView>
      <FlatList
        data={ tasks }
        renderItem={ renderTask }
        keyExtractor={ task => task.key }
        scrollEnabled={ true }
      />
      <Snackbar
        style={ TaskListStyle.snackBar }
        duration={ 1500 }
        visible={ showSnackBar }
        onDismiss={ () => { setShowSnackBar(false ) } }
      >
        A Tarefa foi deletada ;)
      </Snackbar>
    </SafeAreaView>
  )
}
