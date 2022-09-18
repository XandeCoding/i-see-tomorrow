import AsyncStorage from "@react-native-async-storage/async-storage"
import { Collection } from "../commons/enums/collection"
import { ITask } from "../entities/interfaces/ITask"
import getDailyTasksUIDs from "./getDailyTasksUIDs"

const getDailyTasks = async (): Promise<ITask[]> => {
  try {
    const dailyTasksUIDs = await getDailyTasksUIDs()
    const tasksKeys = dailyTasksUIDs.map((uid) => `${ Collection.DAILY_TASK }:${ uid }`)

    const dataTasks = await AsyncStorage.multiGet(tasksKeys)
    return dataTasks
      .filter(([_key, value]) => !!value)
      .map(([key, value]) => {
        const valueParsed: ITask = JSON.parse(value as string)
        return {
          key,
          name: valueParsed.name,
          check: valueParsed.check
        }
    })
  } catch(error) {
    throw new Error('Was not possible get all DAILY TASKS')
  }
}

export default getDailyTasks

