import AsyncStorage from "@react-native-async-storage/async-storage"

import { ITask } from "../entities/interfaces/ITask"

const updateDailyTask = async (taskInfo: ITask) => {
    try {
      const taskStringify = JSON.stringify(taskInfo)
      await AsyncStorage.mergeItem(taskInfo.key, taskStringify)
    } catch(error) {
      console.error(error)
      throw new Error('Was not possible create daily task')
    }
  }

export default updateDailyTask