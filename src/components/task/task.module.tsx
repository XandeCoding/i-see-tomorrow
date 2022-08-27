import { useState } from 'react'
import { View } from 'react-native'
import { Checkbox, Text } from 'react-native-paper'
import { ITask } from "../../entities/interfaces/ITask"
import { TaskStyle } from './task.style'


type props = {
  task: ITask
}

export const Task = ({ task }: props) => {
  const [check, setCheck] = useState(task.check)
  const handleCheck = async () => {
    const isChecked = !check
    setCheck(isChecked)
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
