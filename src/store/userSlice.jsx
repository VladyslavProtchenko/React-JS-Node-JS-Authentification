import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "./variables";

export const  fetchRegistration = createAsyncThunk(
    'user/fetchRegistration',
    async function(user) {
        const res = await fetch(`${API_URL}registration`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });
        const data = await res.json()

        return data;
    }
);

export const  fetchLogin = createAsyncThunk(
    'user/fetchLogin',
    async function(user) {
        const res = await fetch(`${API_URL}login`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });
        const data = await res.json()

        return data;
    }
);



const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
        status: null,
        error: null,
    },
    reducers: {
        
        reset(state, action) {
            state.user = {}
        },
        
    },
    extraReducers: {
        [fetchRegistration.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchRegistration.fulfilled]: (state,action) => {
            state.status = 'resolved';
            state.user = action.payload;
            state.error = null;
        },
        [fetchRegistration.rejected]: (state,action) => {
            try {
                
            } catch (e) {
                console.log(e);
            }
        },

        [fetchLogin.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchLogin.fulfilled]: (state,action) => {
            state.status = 'resolved';
            state.user = action.payload;
            state.error = null;
        },
        [fetchLogin.rejected]: (state,action) => {
            try {
                
            } catch (e) {
                console.log(e);
            }
        },
    }
});

export const {reset} = userSlice.actions;

export default userSlice.reducer;