import AsyncStorage from "@react-native-async-storage/async-storage"
import { Collection } from "../commons/enums/collection"

import { ITask } from "../entities/interfaces/ITask"
import getDailyTasksUIDs from "./getDailyTasksUIDs"

const deleteDailyTask = async (taskInfo: ITask) => {
    try {
      const dailyTasksUIDs = await getDailyTasksUIDs()
      const dailyTasksUIDsFiltered = dailyTasksUIDs.filter((UID) => {
        return UID !== taskInfo.key
      })
      const taskStringify = JSON.stringify(taskInfo)
      console.log("task info to update", taskInfo, taskStringify)

      await AsyncStorage.removeItem(taskInfo.key)
      await AsyncStorage.setItem(
        Collection.DAILY_TASK_UIDS,
        JSON.stringify(dailyTasksUIDsFiltered)
      )
    } catch(error) {
      throw new Error('Was not possible create daily task')
    }
  }

export default deleteDailyTask