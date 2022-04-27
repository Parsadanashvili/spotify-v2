import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    color: '',
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setColor: (state, action) => {
            state.color = action.payload
        }
    },
})

export const uiActions = uiSlice.actions
export default uiSlice