import AsyncStorage from "@react-native-async-storage/async-storage"

import { ITask } from "../entities/interfaces/ITask"

const deleteDailyTask = async (taskInfo: ITask) => {
    try {
      const taskStringify = JSON.stringify(taskInfo)
      console.log("task info to update", taskInfo, taskStringify)

      await AsyncStorage.removeItem(taskInfo.key)
    } catch(error) {
      throw new Error('Was not possible create daily task')
    }
  }

export default deleteDailyTask