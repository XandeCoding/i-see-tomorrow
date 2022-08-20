import AsyncStorage from "@react-native-async-storage/async-storage"
import { Collection } from "../commons/enums/collection"

const getDailyTasksCount = async (): Promise<number> => {
  try {
      const counter = await AsyncStorage.getItem(
        Collection.DAILY_TASK_COUNTER
      )

      if (!counter) return 0
      return parseInt(counter, 10)
  } catch(error) {
    throw new Error('Was not possible get DAILY_TASK_COUNTER')
  }
}

export default getDailyTasksCount

