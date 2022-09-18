import AsyncStorage from "@react-native-async-storage/async-storage"
import 'react-native-get-random-values'
import shortUUID from 'short-uuid'
import { Collection } from "../commons/enums/collection"
import { ITask } from "../entities/interfaces/ITask"
import getDailyTasksUIDs from "./getDailyTasksUIDs"

const addDailyTask = async (taskName: string): Promise<ITask> => {
  try {
    const dailyTasksUIDs = await getDailyTasksUIDs()
    const newDailyTaskUID = shortUUID().new()
    dailyTasksUIDs.push(newDailyTaskUID)

    const key = `${ Collection.DAILY_TASK }:${ newDailyTaskUID }`
    const taskInfo: ITask = {
      name: taskName,
      check: false,
      key
    }

    const taskData: [string, string] = [
      key, JSON.stringify(taskInfo)
    ]
    const addTaskUID: [string, string] = [
      Collection.DAILY_TASK_UIDS,
      JSON.stringify(dailyTasksUIDs)
    ]

    await AsyncStorage.multiSet([taskData, addTaskUID])
    return taskInfo
  } catch(error) {
    console.error(error)
    throw new Error('Was not possible create daily task')
  }
}

export default addDailyTask

