import useSpotify from "./useSpotify";
import {useDispatch, useSelector} from "react-redux";
import {songActions} from "../store/Song";

const usePlayer = () => {
    const dispatch = useDispatch()
    const spotifyApi = useSpotify();
    const song = useSelector(state => state.song);

    const getCurrentTrack = async () => {
        const {body: currentTrack} = await spotifyApi.getMyCurrentPlayingTrack()
        return currentTrack;
    }

    const setCurrentTrack = async (currentTrack) => {
        await dispatch(songActions.setTrack(currentTrack.item));
        if(currentTrack.is_playing) await dispatch(songActions.togglePlay(true));
    }

    const togglePlay = async (action, trackId) => {
        await dispatch(songActions.togglePlay(action));
        if(song.isPlaying) {
            try {
                await spotifyApi.pause(trackId);
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                await spotifyApi.play(trackId);
            } catch (e) {
                console.log(e);
            }
        }
    }

    const next = async () => {
        await dispatch(songActions.togglePlay(true));
        if(song.isPlaying) {
            try {
                await spotifyApi.skipToNext();
            } catch (e) {
                console.log("No next track");
            }
        }
    }

    const prev = async () => {
        await dispatch(songActions.togglePlay(true));
        if(song.isPlaying) {
            try {
                await spotifyApi.skipToPrevious();
            } catch (e) {
                console.log("No previous track");
            }
        }
    }

    const shuffle = async () => {
        await dispatch(songActions.toggleShuffle(!song.isShuffled));
        try {
            await spotifyApi.setShuffle(song.isShuffled);
        } catch (e) {
            console.log(e);
        }
    }

    return {
        getCurrentTrack,
        setCurrentTrack,
        togglePlay,
        next,
        prev,
        shuffle
    }
}

export default usePlayer;