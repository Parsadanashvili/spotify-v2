import useSpotify from "../hooks/useSpotify";
import {millisToMinutesAndSeconds} from "../lib/time";
import {useDispatch, useSelector} from "react-redux";
import {songActions} from "../store/Song";

const Song = ({order, track}) => {
    const dispatch = useDispatch();
    const spotifyApi = useSpotify();
    const color = useSelector(state => state.ui.color);

    const playTrack = () => {
        if(track?.uri){
            spotifyApi.play({
                uris: [track.uri]
            }).then((res) => {
                dispatch(songActions.setTrack(track));
                dispatch(songActions.togglePlay(true));
            }).catch(err => {
            });
        }
    }

    return (
        <div onClick={playTrack} className={`grid grid-cols-2 md:grid-cols-3 py-2 pr-4 pl-3 rounded-md cursor-pointer hover:bg-gradient-to-bl hover:${color.gradient} hover:to-gray-900`}>
            <div className={"flex items-center space-x-4 mr-auto"}>
                <p className={"w-10 text-center text-gray-300"}>{order + 1}</p>
                {!track?.album?.images?.length ? (
                    <div className={"h-10 w-10 rounded-md skeleton"}></div>
                ) : (
                    <img className={"h-10 w-10 rounded-md"} src={track.album.images[0].url} alt={""}/>
                )}
                <div>
                    {!track?.name ? (
                        <p className={"h-2 w-20 mb-2 rounded-md skeleton"}></p>
                    ) : (
                        <p className={"text-gray-300 w-26 md:w-36 truncate"} title={track.name}>{track.name}</p>
                    )}
                    {!track?.artists?.length ? (
                        <p className={"h-2 w-16  rounded-md skeleton"}></p>
                    ) : (
                        <p className={"text-gray-300 w-26 md:w-36 truncate"} title={track.artists[0].name}>{track.artists[0].name}</p>
                    )}
                </div>
            </div>

            <div className={"hidden lg:flex items-center text-gray-500 w-36 lg:w-64 truncate"}>
                {!track?.album?.name ? (
                    <p className={"h-2 w-16 mb-2 rounded-md skeleton"}></p>
                ) : (
                    <p title={track.album.name}>{track.album.name}</p>
                )}
            </div>

            <div className={"flex items-center text-gray-600 ml-auto"}>
                <p>{millisToMinutesAndSeconds(track?.duration_ms ?? 0)}</p>
            </div>
        </div>
    )
}

export default Song
