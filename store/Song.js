import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    track: {},
    isPlaying: false,
    isShuffled: false,
}

const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        setTrack(state, action) {
            state.track = action.payload
        },
        togglePlay(state, action) {
            state.isPlaying = !!action.payload;
        },
        toggleShuffle(state, action) {
            state.isShuffled = !!action.payload;
        },
    },
})

export const songActions = songSlice.actions

export default songSlice