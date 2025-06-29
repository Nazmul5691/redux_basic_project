import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/taskSlice"
import userSlice from "./features/users/userSlice"

export const store = configureStore({
    reducer: {
        tasks: taskSlice,
        users: userSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch