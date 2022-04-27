import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {},
}

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        setPlaylist(state, action) {
            if(state.data && state.data.id === action.payload.id) {
                return;
            }
            state.data = action.payload
        },
    },
})

export const playlistActions = playlistSlice.actions

export default playlistSlice