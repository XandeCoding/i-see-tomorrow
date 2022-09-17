import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ITask } from '../../entities/interfaces/ITask'
import Task from '../task'

type props = {
  tasks: ITask[]
}

export const TaskList = ({ tasks }: props) => {
  const renderTask = ({ item }: { item: ITask}) => {
    return <Task task={ item } />
  }

  return (
    <SafeAreaView>
      <FlatList
        data={ tasks }
        renderItem={ renderTask }
        keyExtractor={ task => task.key }
        scrollEnabled={ true }
      />
    </SafeAreaView>
  )
}
