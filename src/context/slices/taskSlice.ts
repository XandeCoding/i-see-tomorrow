import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { ITask } from '../../entities/interfaces/ITask'

type ITaskState = { value: ITask[] }

const initialState: ITaskState = { value: [] }

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<ITask[]>) => {
      state.value = action.payload
    },
    add: (state, action: PayloadAction<ITask>) => {
      state.value = [...state.value, action.payload]
    },
    remove: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((task) => task.key !== action.payload)
    }
  }
})

export const { set, add, remove } = taskSlice.actions
export default taskSlice.reducer
