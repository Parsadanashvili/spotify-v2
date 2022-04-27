import {configureStore} from '@reduxjs/toolkit'
import playlist from './Playlist'
import song from "./Song";
import ui from "./UI";

const store = configureStore({
    reducer: {
        playlist: playlist.reducer,
        song: song.reducer,
        ui: ui.reducer
    },
})

export default store;