import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
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

  const handleDelete = async () => {
  }

  return (
    <View style={ TaskStyle.body }>
      <TouchableOpacity
        activeOpacity={ 0.59 }
        style={ TaskStyle.pressContainer}
        onPress={ handleCheck }
        onLongPress={ handleDelete }
      >
        <Text>{ task.name }</Text>
        <Checkbox
          status={ check ? 'checked' : 'unchecked' }
        />
      </TouchableOpacity>
    </View>
  )
}
