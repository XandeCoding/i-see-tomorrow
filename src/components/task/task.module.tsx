import { useState } from 'react'
import { View } from 'react-native'
import { Checkbox, Text } from 'react-native-paper'
import { ITask } from "../../entities/interfaces/ITask"
import updateDailyTask from '../../storage/updateDailyTask'
import { TaskStyle } from './task.style'


type props = {
  task: ITask
}

export const Task = ({ task }: props) => {
  const [check, setCheck] = useState(task.check)
  const handleCheck = async () => {
    const isChecked = !check
    task.check = isChecked

    setCheck(isChecked)
    await updateDailyTask(task)
  }

  return (
    <View style={ TaskStyle.body }>
        <Text>{ task.name }</Text>
        <Checkbox
          status={ check ? 'checked' : 'unchecked' }
          onPress={ handleCheck }
        />
    </View>
  )
}
