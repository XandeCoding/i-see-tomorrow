import AsyncStorage from "@react-native-async-storage/async-storage"
import { Collection } from "../commons/enums/collection"
import getDailyTasksCount from "./getDailyTasksCount"

const getDailyTasks = async () => {
  try {
    const dailyTasksCounter = await getDailyTasksCount()
    const tasksKeys = []

    for (let index=0; index < dailyTasksCounter; index++) {
      tasksKeys.push(`${ Collection.DAILY_TASK }:${ index }`)
    }

    return AsyncStorage.multiGet(tasksKeys)
  } catch(error) {
    throw new Error('Was not possible get all DAILY TASKS')
  }
}

export default getDailyTasks

