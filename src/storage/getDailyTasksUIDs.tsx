import AsyncStorage from "@react-native-async-storage/async-storage"
import { Collection } from "../commons/enums/collection"

const getDailyTasksUIDs = async (): Promise<string[]> => {
  try {
      const counter = await AsyncStorage.getItem(
        Collection.DAILY_TASK_UIDS.toString()
      )

      if (!counter) return []
      return JSON.parse(counter)
  } catch(error) {
    console.error(error)
    throw new Error('Was not possible get DAILY_TASK_UIDS')
  }
}

export default getDailyTasksUIDs
