import AsyncStorage from "@react-native-async-storage/async-storage"
import { Collection } from "../commons/enums/collection"
import getDailyTasksCount from "./getDailyTasksCount"

const setDailyTask = async (taskName: string) => {
  try {
    const newDailyTaskCount = await getDailyTasksCount() + 1
    const taskData: [string, string] = [
      `${ Collection.DAILY_TASK }:${ newDailyTaskCount }`,
      taskName
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

export default setDailyTask

