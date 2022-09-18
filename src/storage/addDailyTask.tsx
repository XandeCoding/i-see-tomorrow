import AsyncStorage from "@react-native-async-storage/async-storage"
import { Collection } from "../commons/enums/collection"
import { ITask } from "../entities/interfaces/ITask"
import getDailyTasksCount from "./getDailyTasksCount"

const addDailyTask = async (taskName: string): Promise<ITask> => {
  try {
    const newDailyTaskCount = await getDailyTasksCount() + 1
    const key = `${ Collection.DAILY_TASK }:${ newDailyTaskCount }`
    const taskInfo: ITask = {
      name: taskName,
      check: false,
      key
    }
    const taskStringify = JSON.stringify(taskInfo)
    console.log("task info", taskInfo, taskStringify)

    const taskData: [string, string] = [
      key, taskStringify
    ]
    const incrementTaskCount: [string, string] = [
      Collection.DAILY_TASK_COUNTER,
      newDailyTaskCount.toString()
    ]

    await AsyncStorage.multiSet([taskData, incrementTaskCount])
    return taskInfo
  } catch(error) {
    throw new Error('Was not possible create daily task')
  }
}

export default addDailyTask

