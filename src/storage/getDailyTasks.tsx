import AsyncStorage from "@react-native-async-storage/async-storage"
import { Collection } from "../commons/enums/collection"
import { ITask } from "../entities/interfaces/ITask"
import getDailyTasksCount from "./getDailyTasksCount"

const getDailyTasks = async (): Promise<ITask[]> => {
  try {
    const dailyTasksCounter = await getDailyTasksCount()
    const tasksKeys = []

    for (let index=0; index < dailyTasksCounter; index++) {
      tasksKeys.push(`${ Collection.DAILY_TASK }:${ index }`)
    }

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

