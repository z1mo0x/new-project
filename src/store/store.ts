import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { User } from "../shared/user.types"
import { createAsyncThunk } from "@reduxjs/toolkit"



export const fetchUsers = createAsyncThunk(
    'users/fetch',
    async () => {
        const responce = await fetch('/users.json')
        return await responce.json()
    }
)

export interface UsersState {
    users: User[],
    status: boolean
}

const initialState: UsersState = {
    users: [],
    status: false
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state: UsersState, action: PayloadAction<User[]>) => {
            state.users = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state: UsersState, action: PayloadAction<User[]>) => {
                state.users = action.payload
                state.status = true
            })
            .addCase(fetchUsers.rejected, (state: UsersState) => {
                state.status = false
            })
    }
})

export const { setUsers } = usersSlice.actions

export const store = configureStore({
    reducer: usersSlice.reducer
})


export type AppStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
