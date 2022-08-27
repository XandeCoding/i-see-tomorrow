import { View } from 'react-native'

import { ITask } from '../../entities/interfaces/ITask'
import Task from '../task'

type props = {
    tasks: ITask[]
}

export const TaskList = ({ tasks }: props) => {
    return (
        <View>
            { tasks.map(task => <Task task={ task } />) }
        </View>
    )
}
