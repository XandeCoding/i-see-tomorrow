import AsyncStorage from "@react-native-async-storage/async-storage"
import { Collection } from "../commons/enums/collection"
import { ITask } from "../entities/interfaces/ITask"
import getDailyTasksCount from "./getDailyTasksCount"

const addDailyTask = async (taskInfo: ITask) => {
  try {
    const newDailyTaskCount = await getDailyTasksCount() + 1
    const taskStringify = JSON.stringify(taskInfo)
    console.log("task info", taskInfo, taskStringify)

    const taskData: [string, string] = [
      `${ Collection.DAILY_TASK }:${ newDailyTaskCount }`,
      taskStringify
    ]
    const incrementTaskCount: [string, string] = [
      Collection.DAILY_TASK_COUNTER,
      newDailyTaskCount.toString()
    ]

    await AsyncStorage.multiSet([taskData, incrementTaskCount])
  } catch(error) {
    throw new Error('Was not possible create daily task')
  }
}

export default addDailyTask

