import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
    id?:number
    username?: string;
    role?: string;
    refresh_token?: string;
    access_token?: string;
    first_name?: string;
    last_name?: string;
}

const fetchUserById = createAsyncThunk(
    'auth/fetchByIdStatus',
    async (userId: number, thunkAPI) => {
      const response = await userAPI.fetchById(userId)
      return response.data
    }
  )

const initialState: AuthState = {

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state: AuthState, action: PayloadAction<AuthState>) => {
            state.access_token = action.payload.access_token;
            state.refresh_token = action.payload.refresh_token;
            state.role = action.payload.role;
            state.username = action.payload.username;
            state.id = action.payload.id
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
        },
        clearAuth: (state: AuthState) => {
            state.access_token = undefined;
            state.refresh_token = undefined;
            state.role = undefined;
            state.username = undefined;
            state.first_name = undefined;
            state.last_name = undefined;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchUserById.fulfilled,(state,action)=>{
            
        })
    },
})

export const { setAuth, clearAuth } = authSlice.actions

export default authSlice.reducer



