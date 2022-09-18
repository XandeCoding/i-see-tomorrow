import { useState, Dispatch, SetStateAction } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Checkbox, Text } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { remove } from '../../context/slices/taskSlice'
import { ITask } from "../../entities/interfaces/ITask"
import deleteDailyTask from '../../storage/deleteDailyTask'
import updateDailyTask from '../../storage/updateDailyTask'
import { TaskStyle } from './task.style'


type props = {
  task: ITask,
  setShowSnackBar: Dispatch<SetStateAction<boolean>>
}

export const Task = ({ task, setShowSnackBar }: props) => {
  const [check, setCheck] = useState(task.check)
  const dispatch = useDispatch()

  const handleCheck = async () => {
    const isChecked = !check
    task.check = isChecked

    setCheck(isChecked)
    await updateDailyTask(task)
  }

  const handleLongPress = () => {
    setShowSnackBar(true)
    deleteDailyTask(task)
    dispatch(remove(task.key))
  }


  return (
    <View style={ TaskStyle.body }>
      <TouchableOpacity
        delayLongPress={ 2500 }
        activeOpacity={ 0.59 }
        style={ TaskStyle.pressContainer}
        onPress={ handleCheck }
        onLongPress={ handleLongPress }
      >
        <Text>{ task.name }</Text>
        <Checkbox
          status={ check ? 'checked' : 'unchecked' }
        />
      </TouchableOpacity>
    </View>
  )
}
